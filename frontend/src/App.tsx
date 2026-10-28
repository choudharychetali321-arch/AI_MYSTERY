import { FormEvent, useMemo, useState } from 'react';
import { Link, Navigate, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Clock3, FileText, FolderLock, Image, Menu, MessageSquare, Search, ShieldCheck, X } from 'lucide-react';

const evidenceTypes = [
  { id: 'chat', label: 'Messages', icon: MessageSquare, title: 'Messages Between Adrian and Maya', time: '18:35 · Evening of the incident' },
  { id: 'document', label: 'Documents', icon: FileText, title: 'Security Access Log', time: '19:12 · East corridor' },
  { id: 'cctv', label: 'CCTV', icon: Search, title: 'East Corridor Camera', time: '19:10 · 45 seconds' },
  { id: 'image', label: 'Images', icon: Image, title: 'Scene Photograph', time: '19:24 · Gallery entrance' }
];

const suspects = [
  { id: 'suspect_01', name: 'Adrian Cole', role: 'Event manager', initials: 'AC', motive: 'Significant financial difficulties' },
  { id: 'suspect_02', name: 'Maya Bell', role: 'Guest curator', initials: 'MB', motive: 'Denied access to the collection' },
  { id: 'suspect_03', name: 'Dr. Rowan Vale', role: 'Diamond appraiser', initials: 'RV', motive: 'A disputed professional payment' },
  { id: 'suspect_04', name: 'Elena Hart', role: 'Security consultant', initials: 'EH', motive: 'History with the estate owner' }
];

function Shell({ children }: { children: React.ReactNode }) {
  return <div className="app-shell"><header className="topbar"><Link to="/" className="brand"><FolderLock size={20}/><span>AI MYSTERY ROOM</span></Link><nav><Link to="/create">New case</Link><Link to="/investigations/demo">Open case</Link></nav></header>{children}</div>;
}

function Home() {
  return <Shell><main className="hero">
    <div className="hero-copy"><p className="eyebrow">INTERACTIVE AI INVESTIGATION</p><h1>Every story<br/><em>hides a secret.</em></h1><p className="lede">Turn a scene, rumor, or fictional disappearance into an evidence-led mystery that rewards careful observation.</p><Link className="primary" to="/create">Create your mystery <ChevronRight size={18}/></Link></div>
    <div className="case-preview" aria-label="Investigation preview"><div className="preview-top"><span><i/> CASE FILE 001</span><span>MEDIUM</span></div><div className="preview-content"><p>THE VALE ESTATE</p><h2>The Missing Diamond</h2><div className="preview-grid"><div><span>06</span><small>EVIDENCE</small></div><div><span>04</span><small>SUSPECTS</small></div><div><span>31</span><small>MINUTES</small></div></div><div className="clue-line"><span/><span/><span/></div></div></div>
  </main></Shell>;
}

function Create() {
  const navigate = useNavigate();
  const [scenario, setScenario] = useState('A valuable diamond disappears during a private party at an old mansion. Four guests were present, and everyone claims to have been somewhere else when the diamond vanished.');
  const [difficulty, setDifficulty] = useState('medium');
  const [category, setCategory] = useState('theft');
  const [caseLength, setCaseLength] = useState('standard');
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState('');
  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setError('');
    if (scenario.trim().length < 30) return;
    setGenerating(true);
    try {
      const apiBase = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');
      const response = await fetch(`${apiBase}/api/v1/mysteries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ scenario, difficulty, category, caseLength })
      });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error?.message || 'Unable to generate the mystery.');
      navigate(body.data.redirectUrl);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Unable to reach the investigation service.');
    } finally {
      setGenerating(false);
    }
  };
  return <Shell><main className="form-page"><Link className="back" to="/"><ArrowLeft size={16}/> Back</Link><div className="form-heading"><p className="eyebrow">CASE CREATION</p><h1>Build the mystery.</h1><p>Give the investigation a premise. The AI will construct the suspects, evidence, and solution.</p></div>
    <form onSubmit={submit}><label>Scenario<textarea value={scenario} onChange={(e) => setScenario(e.target.value)} minLength={30} maxLength={2000}/><small>{scenario.length} / 2000</small></label><div className="selectors"><label>Difficulty<select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}><option>easy</option><option>medium</option><option>hard</option></select></label><label>Category<select value={category} onChange={(e) => setCategory(e.target.value)}><option value="theft">Theft</option><option value="murder_mystery">Murder mystery</option><option value="disappearance">Disappearance</option><option value="blackmail">Blackmail</option><option value="sabotage">Sabotage</option><option value="general_mystery">General mystery</option></select></label><label>Case length<select value={caseLength} onChange={(e) => setCaseLength(e.target.value)}><option>short</option><option>standard</option><option>extended</option></select></label></div>{error && <p className="form-error" role="alert">{error}</p>}<button className="primary" type="submit" disabled={generating}>{generating ? 'Generating mystery...' : 'Generate mystery'} <ChevronRight size={18}/></button></form>
  </main></Shell>;
}

function Investigation() {
  const { investigationId } = useParams();
  const navigate = useNavigate();
  const [active, setActive] = useState(evidenceTypes[0]);
  const [menu, setMenu] = useState(false);
  const [opened, setOpened] = useState<string[]>(['chat']);
  const progress = useMemo(() => Math.round(opened.length / evidenceTypes.length * 100), [opened]);
  const openEvidence = (item: typeof evidenceTypes[number]) => { setActive(item); setOpened((current) => current.includes(item.id) ? current : [...current, item.id]); setMenu(false); };
  return <Shell><main className="investigation"><aside className={menu ? 'sidebar open' : 'sidebar'}><button className="close-menu" onClick={() => setMenu(false)}><X/></button><p className="case-kicker">THE VALE ESTATE</p><h2>The Missing Diamond</h2><p className="case-meta"><span>MEDIUM</span><span>THEFT</span></p><div className="progress"><div><span>Case progress</span><b>{progress}%</b></div><i><span style={{width: `${progress}%`}}/></i></div><p className="nav-label">EVIDENCE</p><nav className="evidence-nav">{evidenceTypes.map((item) => { const Icon = item.icon; return <button className={active.id === item.id ? 'active' : ''} key={item.id} onClick={() => openEvidence(item)}><Icon size={17}/><span>{item.label}</span>{opened.includes(item.id) && <i/>}</button>; })}</nav></aside>
    <section className="workspace"><button className="mobile-menu" onClick={() => setMenu(true)}><Menu size={18}/> Evidence</button><div className="workspace-header"><div><p>EVIDENCE FILE</p><h1>{active.title}</h1></div><span><Clock3 size={15}/>{active.time}</span></div><Evidence active={active.id}/></section>
    <aside className="suspects"><div className="suspects-title"><p>SUSPECT DIRECTORY</p><span>4</span></div>{suspects.map((suspect) => <button key={suspect.id} onClick={() => navigate(`/investigations/${investigationId}/accuse`)} className="suspect-card"><div className="avatar">{suspect.initials}</div><div><h3>{suspect.name}</h3><p>{suspect.role}</p></div><ChevronRight size={16}/></button>)}</aside>
  </main><button className="accuse-fab" onClick={() => navigate(`/investigations/${investigationId}/accuse`)}>Identify the culprit</button></Shell>;
}

function Evidence({ active }: { active: string }) {
  if (active === 'chat') return <div className="chat"><div className="chat-bar"><div className="avatar small">AC</div><div><b>Adrian Cole</b><span>Maya Bell</span></div><ShieldCheck size={18}/></div><div className="messages"><div className="message received"><b>Maya Bell · 18:35</b><p>Did you lock the storage room?</p></div><div className="message sent"><b>Adrian Cole · 18:37</b><p>I thought you had the key.</p></div><div className="message received"><b>Maya Bell · 18:42</b><p>The east corridor alarm was reset after nine.</p></div></div><p className="fiction-note">Fictional conversation created for this investigation</p></div>;
  if (active === 'cctv') return <div className="cctv"><div className="camera-feed"><span>REC</span><div className="figure one"/><div className="figure two"/><b>CAM 04 · EAST CORRIDOR</b></div><div className="cctv-timeline"><span>19:10:12</span><span>19:10:31</span><span>19:10:45</span><i/></div><p>One figure crosses the restricted corridor shortly after the access log is recorded.</p></div>;
  if (active === 'image') return <div className="scene"><div className="scene-art"><span className="highlight-a"/><span className="highlight-b"/><b>ARCHIVE IMAGE · FICTIONAL</b></div><p>The display case appears undisturbed, while a faint mark remains beside the east-side latch.</p></div>;
  return <div className="document"><header><span>VALE ESTATE · SECURITY</span><b>ACCESS LOG / 014</b></header><table><thead><tr><th>Time</th><th>Name</th><th>Zone</th><th>Status</th></tr></thead><tbody><tr><td>19:08</td><td>Adrian Cole</td><td>Gallery</td><td>Accepted</td></tr><tr><td>19:14</td><td>Elena Hart</td><td>East corridor</td><td>Accepted</td></tr><tr><td>19:18</td><td>Dr. Rowan Vale</td><td>Archive</td><td>Accepted</td></tr></tbody></table><p className="clue"><ShieldCheck size={16}/> The public timeline places Adrian at the reception, but this record is more specific.</p></div>;
}

function Accusation() {
  const { investigationId } = useParams(); const navigate = useNavigate(); const [selected, setSelected] = useState(''); const [confirming, setConfirming] = useState(false);
  return <Shell><main className="accusation"><Link className="back" to={`/investigations/${investigationId}`}><ArrowLeft size={16}/> Review evidence</Link><p className="eyebrow">FINAL ACCUSATION</p><h1>Who took the diamond?</h1><p>Select the suspect whose actions and evidence form the strongest chain of reasoning.</p><div className="selection-grid">{suspects.map((suspect) => <button key={suspect.id} className={selected === suspect.id ? 'selected' : ''} onClick={() => { setSelected(suspect.id); setConfirming(true); }}><div className="avatar">{suspect.initials}</div><h3>{suspect.name}</h3><p>{suspect.role}</p><span>{suspect.motive}</span></button>)}</div>{confirming && <div className="modal-backdrop"><div className="modal"><p className="eyebrow">CONFIRM ACCUSATION</p><h2>Accuse {suspects.find((item) => item.id === selected)?.name}?</h2><p>Your final answer cannot be changed after submission.</p><div><button className="secondary" onClick={() => setConfirming(false)}>Review evidence</button><button className="primary" onClick={() => navigate(`/investigations/${investigationId}/result`)}>Confirm accusation</button></div></div></div>}</main></Shell>;
}

function Result() {
  const { investigationId } = useParams();
  return <Shell><main className="result"><p className="eyebrow">CASE CLOSED</p><h1>Dr. Rowan Vale <span>was responsible</span></h1><div className="verdict"><ShieldCheck size={24}/><div><b>Solution revealed</b><p>The access log, corridor recording, and scene photograph form a consistent chain that places Rowan near the restricted archive at 19:14.</p></div></div><section><h2>The sequence of events</h2><ol><li><b>19:08</b><p>The appraiser enters the gallery and moves toward the east corridor.</p></li><li><b>19:14</b><p>A restricted-zone access record exposes the decisive movement.</p></li><li><b>19:18</b><p>The appraiser claims to have remained with the guests.</p></li></ol></section><Link className="primary" to="/create">Start another mystery <ChevronRight size={18}/></Link></main></Shell>;
}

export default function App() { return <Routes><Route path="/" element={<Home/>}/><Route path="/create" element={<Create/>}/><Route path="/investigations/:investigationId" element={<Investigation/>}/><Route path="/investigations/:investigationId/accuse" element={<Accusation/>}/><Route path="/investigations/:investigationId/result" element={<Result/>}/><Route path="*" element={<Shell><main className="not-found"><h1>Case not found</h1><Link className="primary" to="/">Return home</Link></main></Shell>}/></Routes>; }
