# AI MYSTERY ROOM

## Master Specification Document (Single Source of Truth)

**Document Version:** 1.0.0
**Project Type:** AI-Powered Interactive Mystery Investigation Web Application
**Development Methodology:** Spec-Driven Development (SDD)
**Primary AI Coding Agent:** OpenAI Codex
**Frontend:** React.js
**Backend:** Node.js + Express.js
**Database:** MongoDB
**AI Provider:** Google Gemini API
**Architecture:** MERN Stack
**Document Status:** Initial Development Specification

---

# 1. PROJECT OVERVIEW

## 1.1 Project Name

**AI Mystery Room**

## 1.2 Project Description

AI Mystery Room is an interactive, AI-powered mystery investigation website where users can create their own mystery challenges by providing a short scenario, story, or fictional situation.

The website uses Google's Gemini API on the backend to transform the user's input into a complete fictional investigation.

Each investigation contains:

* A fictional crime or mysterious incident.
* A collection of suspects.
* Character profiles and possible motives.
* AI-generated investigation evidence.
* Fictional WhatsApp conversations.
* Images and visual clues.
* Fictional CCTV footage representations or recordings.
* Witness statements.
* Timelines and supporting documents.
* Contradictions and hidden clues.
* One designated culprit.
* A final culprit-selection interface.
* An investigation result and explanation.

The user investigates the available evidence, connects clues, identifies contradictions, and selects the person they believe is responsible.

After submitting their answer, the user receives feedback indicating whether their accusation was correct, along with an explanation of the mystery and the clues that reveal the culprit.

## 1.3 Core Product Idea

**Turn any short story into an interactive detective investigation powered by AI.**

The user supplies the story.

Gemini creates the mystery.

The website presents the investigation.

The user examines the evidence.

The user identifies the culprit.

The system reveals the solution.

## 1.4 Problem Statement

Traditional mystery games provide fixed cases, predetermined evidence, and limited replayability.

AI Mystery Room addresses this limitation by allowing users to generate new fictional investigations from their own ideas.

The system should create mysteries that are:

* Interactive.
* Logical.
* Engaging.
* Evidence-driven.
* Replayable.
* Visually appealing.
* Consistent across all generated clues.

## 1.5 Project Objectives

The application must:

1. Allow users to submit a custom mystery scenario.
2. Generate a complete mystery investigation using Gemini.
3. Create multiple suspects with distinct identities, motives, and alibis.
4. Generate fictional evidence related to the scenario.
5. Present evidence in an immersive investigation interface.
6. Allow users to inspect clues and compare information.
7. Ensure that every mystery has one designated culprit.
8. Allow users to submit a final accusation.
9. Evaluate the accusation against the predetermined culprit.
10. Explain the solution using the evidence provided.
11. Save investigation progress and results in MongoDB.
12. Provide a responsive interface for desktop, tablet, and mobile devices.
13. Protect API credentials and validate all user input.
14. Make each generated investigation logically consistent and playable.

---

# 2. PRODUCT SCOPE

## 2.1 Features Included in Version 1.0

The initial release must include the following functionality.

| ID    | Feature                                               | Priority    |
| ----- | ----------------------------------------------------- | ----------- |
| F-001 | Landing page                                          | Must have   |
| F-002 | User scenario submission                              | Must have   |
| F-003 | Mystery difficulty selection                          | Must have   |
| F-004 | AI mystery generation                                 | Must have   |
| F-005 | Suspect profiles                                      | Must have   |
| F-006 | Evidence generation                                   | Must have   |
| F-007 | Investigation dashboard                               | Must have   |
| F-008 | Evidence viewer                                       | Must have   |
| F-009 | Fictional chat conversations                          | Must have   |
| F-010 | Image evidence                                        | Must have   |
| F-011 | CCTV evidence representation                          | Must have   |
| F-012 | Witness statements and documents                      | Must have   |
| F-013 | Final culprit selection                               | Must have   |
| F-014 | Answer evaluation                                     | Must have   |
| F-015 | Solution reveal and explanation                       | Must have   |
| F-016 | Investigation progress tracking                       | Must have   |
| F-017 | MongoDB persistence                                   | Must have   |
| F-018 | Responsive design                                     | Must have   |
| F-019 | Loading, error, and empty states                      | Must have   |
| F-020 | Input validation and security                         | Must have   |
| F-021 | Restart or start another investigation                | Must have   |
| F-022 | Investigation history for the current user or session | Should have |

### Version 1.0 Implementation Decision

For the initial release, use a **guest-first experience**.

Users should be able to create and solve mysteries without registering for an account.

Use a persistent guest session identifier and a secure server-issued session mechanism to associate investigations with the same guest.

The application must not rely on an arbitrary client-supplied user ID as proof of ownership.

Account registration, social login, leaderboards, multiplayer investigations, and paid subscriptions are outside the initial release.

## 2.2 Features Excluded from Version 1.0

Do not implement these features unless explicitly requested in a later specification:

* Multiplayer detective rooms.
* Real-time collaboration.
* Public mystery publishing.
* User-created mystery marketplaces.
* Subscription billing.
* Public leaderboards.
* Voice-based interrogation.
* Live real-world CCTV integration.
* Real WhatsApp account integration.
* Real criminal investigation services.
* Direct messaging with real people.
* User-uploaded video analysis.
* Native Android or iOS applications.

The application creates fictional evidence for entertainment and educational purposes.

---

# 3. USER PERSONAS

## 3.1 Primary User: Mystery Enthusiast

A user who enjoys detective stories, crime puzzles, suspense, and solving fictional cases.

Needs:

* Interesting mysteries.
* Realistic-looking evidence.
* Multiple suspects.
* Challenging clues.
* A satisfying solution.

## 3.2 Secondary User: Casual Player

A user who wants to enter a simple story and immediately start playing.

Needs:

* Easy navigation.
* Minimal setup.
* Simple instructions.
* Short investigations.
* Clear feedback.

## 3.3 Creative User

A user who wants to transform an original story idea into a playable investigation.

Needs:

* Custom scenario input.
* Difficulty selection.
* Control over the type of mystery.
* A unique investigation for each new challenge.

---

# 4. USER JOURNEY

The complete user journey must follow this sequence.

## Step 1: Visit the Website

The user opens the AI Mystery Room landing page.

The page introduces the product and provides a prominent button:

**Create Your Mystery**

## Step 2: Enter a Scenario

The user enters a fictional story or situation.

Example:

"A valuable diamond disappears during a private party at an old mansion. Four guests were present. Everyone claims to have been somewhere else when the diamond vanished."

The user can also select:

* Difficulty.
* Mystery category.
* Preferred investigation length.

## Step 3: Generate the Mystery

The user clicks **Generate Mystery**.

The backend:

1. Validates the request.
2. Creates an investigation record.
3. Calls Gemini.
4. Validates the generated mystery.
5. Generates or prepares the evidence assets.
6. Checks evidence consistency.
7. Saves the playable mystery to MongoDB.
8. Returns the investigation identifier.

The frontend displays an engaging loading state while generation is in progress.

The application must not reveal the culprit during this step.

## Step 4: Enter the Investigation Room

The user is redirected to the investigation dashboard.

The interface displays:

* Case title.
* Case description.
* Incident summary.
* Suspect count.
* Investigation progress.
* Available evidence.
* Evidence categories.
* A suspect directory.
* A final accusation action.

## Step 5: Examine the Evidence

The user opens individual evidence items.

Examples:

* WhatsApp-style conversations.
* Suspect photographs.
* CCTV evidence.
* Witness statements.
* Security logs.
* Timelines.
* Location records.
* Documents.
* Images containing visual clues.

The user can revisit evidence multiple times.

Evidence must remain available throughout the investigation.

## Step 6: Compare Suspects

The user examines each suspect's:

* Motive.
* Alibi.
* Timeline.
* Statements.
* Connections to other characters.
* Contradictions.
* Relevant evidence.

The user must be able to return to the suspect directory without losing progress.

## Step 7: Select the Culprit

The user opens the accusation interface.

The application displays the available suspects.

The user selects one suspect and confirms the accusation.

Before confirmation, the user may change their selection.

After final submission, the answer is locked.

## Step 8: Reveal the Result

The backend evaluates the selected suspect against the stored culprit identifier.

The interface displays:

* Correct or incorrect result.
* The selected suspect.
* The actual culprit.
* The motive.
* The sequence of events.
* The decisive clues.
* An explanation of misleading evidence.
* A final case summary.

## Step 9: Start Another Mystery

The user can return to the home page and generate another investigation.

The previous investigation must not be overwritten.

---

# 5. FUNCTIONAL REQUIREMENTS

## F-001: Landing Page

The landing page must include:

1. Application logo and name.
2. Navigation header.
3. Hero section.
4. Main heading.
5. Short product description.
6. Primary call-to-action button.
7. Feature cards.
8. A short explanation of how the application works.
9. Footer with project information.

Suggested headline:

"Every Story Hides a Secret."

Suggested supporting text:

"Create a mystery, examine the evidence, uncover the contradictions, and discover who is really responsible."

Primary button:

"Create Your Mystery"

Acceptance criteria:

* The page loads without errors.
* The primary button opens the mystery creation form.
* All navigation elements work.
* The page is responsive.
* No placeholder buttons remain in the final implementation.

## F-002: Scenario Submission

The scenario form must include:

### Required field

`scenario`

Description: The story or situation used to generate the mystery.

Validation:

* Required.
* Minimum 30 characters.
* Maximum 2,000 characters.
* Trim leading and trailing whitespace.
* Reject empty or whitespace-only input.

### Optional field

`difficulty`

Allowed values:

* `easy`
* `medium`
* `hard`

Default:

* `medium`

### Optional field

`category`

Allowed values:

* `murder_mystery`
* `theft`
* `disappearance`
* `blackmail`
* `sabotage`
* `general_mystery`

Default:

* `general_mystery`

Important: Murder-mystery scenarios must remain fictional and non-graphic. The initial release should not generate graphic violence.

### Optional field

`caseLength`

Allowed values:

* `short`
* `standard`
* `extended`

Default:

* `standard`

The selected length determines the approximate number of suspects and evidence items.

### Scenario Form Acceptance Criteria

* Invalid requests are rejected before calling Gemini.
* The user receives a clear validation message.
* The generate button cannot trigger duplicate requests while generation is active.
* The application displays the selected difficulty and category.
* A failed generation can be retried safely.
* The submitted scenario is preserved when a recoverable generation error occurs.

## F-003: Mystery Generation

The backend must use Gemini to generate a structured investigation.

The generated investigation must contain:

1. Case metadata.
2. Incident description.
3. Suspect profiles.
4. One designated culprit.
5. Motives.
6. Alibis.
7. Event timeline.
8. Evidence items.
9. Clue relationships.
10. Contradictions.
11. Red herrings.
12. Solution explanation.
13. Final answer metadata.

### Expected Mystery Size

| Difficulty | Suspects | Evidence items | Expected challenge                        |
| ---------- | -------: | -------------: | ----------------------------------------- |
| Easy       |        3 |            5–7 | Clear clues                               |
| Medium     |        4 |           8–10 | Connected clues and contradictions        |
| Hard       |      5–6 |          11–15 | More complex timelines and indirect clues |

These values are generation targets, not permission to produce inconsistent mysteries.

Every playable mystery must have:

* Exactly one designated culprit.
* At least three suspects.
* At least one decisive clue.
* At least two clues supporting the final explanation.
* A consistent event timeline.
* A solution that can be inferred from the available evidence.

If Gemini returns invalid data, the backend should attempt a bounded repair or regeneration.

Do not return a partially valid mystery to the user as a playable case.

## F-004: Suspect Profiles

Each suspect must have:

* Unique identifier.
* Full fictional name.
* Age, where relevant.
* Profile image reference or avatar.
* Occupation or role.
* Relationship to the incident.
* Personality description.
* Possible motive.
* Publicly known alibi.
* Relevant statements.
* Suspicion level for presentation purposes.

Example:

```json
{
  "id": "suspect_01",
  "name": "Adrian Cole",
  "age": 34,
  "occupation": "Event Manager",
  "relationshipToIncident": "Managed the event where the diamond disappeared",
  "personality": "Calm and persuasive",
  "motive": "Had significant financial difficulties",
  "alibi": "Claims he was checking the reception area",
  "avatarAssetId": "asset_suspect_01"
}
```

The example is illustrative only.

### Suspect Requirements

* Every suspect ID must be unique within its case.
* Suspect IDs must remain stable throughout the investigation.
* Every suspect must have a plausible connection to the incident.
* The culprit must be included in the suspect list.
* Suspicion indicators must not reveal the correct answer automatically.
* The frontend must not receive private culprit metadata before the user submits an accusation.

The example JSON above illustrates a display profile. The actual internal schema must keep sensitive solution fields separate from public suspect data.

## F-005: Evidence System

The evidence system is the central gameplay feature.

Evidence must be organized into categories.

### Category A: Digital Conversations

Examples:

* WhatsApp-style conversations.
* Text messages.
* Emails.
* Fictional chat exports.

Each conversation must contain:

* Conversation title.
* Fictional participants.
* Message timestamps.
* Message text.
* Optional attachment references.
* Optional linked clue identifiers.

Example:

```json
{
  "id": "evidence_01",
  "type": "chat",
  "title": "Messages Between Adrian and Maya",
  "description": "A conversation from the evening of the incident",
  "participants": [
    "suspect_01",
    "suspect_02"
  ],
  "messages": [
    {
      "senderId": "suspect_01",
      "timestamp": "2026-06-14T18:35:00Z",
      "text": "Did you lock the storage room?"
    },
    {
      "senderId": "suspect_02",
      "timestamp": "2026-06-14T18:37:00Z",
      "text": "I thought you had the key."
    }
  ],
  "linkedClueIds": [
    "clue_01"
  ]
}
```

The application must clearly identify these conversations as fictional evidence.

It must not connect to real WhatsApp accounts or send actual messages.

### Category B: Image Evidence

Examples:

* A photograph of the scene.
* A fictional suspect photograph.
* An image of a damaged object.
* A picture showing an important detail.
* A photograph with a hidden or overlooked clue.

Each image evidence item must contain:

* Asset identifier.
* Image URL or storage reference.
* Description.
* Timestamp, if applicable.
* Source.
* Associated suspect IDs.
* Associated clue IDs.

Image-generation providers may be introduced through a separate asset-generation service.

Gemini is the reasoning and mystery-generation provider. The architecture must not assume that every Gemini model supports image generation.

If an image-generation capability is unavailable, the system may use generated avatars, SVG illustrations, or other approved placeholder assets.

It must not falsely label an ordinary placeholder image as authentic photographic evidence.

### Category C: CCTV Evidence

The initial release must support CCTV-style evidence.

Evidence may be presented as:

* A short generated video.
* A sequence of still frames.
* A simulated CCTV viewer.
* A fictional CCTV transcript.
* A timestamped observation log.

Example:

```json
{
  "id": "evidence_03",
  "type": "cctv",
  "title": "East Corridor Camera",
  "description": "A recording from the east corridor",
  "cameraName": "East Corridor Camera",
  "recordedAt": "2026-06-14T19:10:00Z",
  "durationSeconds": 45,
  "assetId": "asset_cctv_01",
  "transcript": [
    {
      "timestampSeconds": 12,
      "description": "A person enters the corridor."
    },
    {
      "timestampSeconds": 31,
      "description": "The corridor appears empty."
    }
  ],
  "linkedClueIds": [
    "clue_02"
  ]
}
```

The application must support a CCTV evidence item even when a real video asset has not been generated.

For the initial release, a timestamped simulated CCTV viewer is acceptable.

Actual AI-generated video must not be a prerequisite for playing the game.

### Category D: Documents

Examples:

* Security reports.
* Receipts.
* Access logs.
* Letters.
* Incident reports.
* Inventory records.

Each document must contain:

* Title.
* Document type.
* Fictional issuing source.
* Creation or event timestamp.
* Document content.
* Linked clues.

### Category E: Witness Statements

Each statement must contain:

* Witness identifier.
* Statement text.
* Statement timestamp.
* Related incident timestamp.
* Associated suspect IDs.
* Optional contradiction references.

### Category F: Timeline Evidence

The investigation must provide a consolidated timeline.

Each timeline event must contain:

* Unique identifier.
* Timestamp.
* Event description.
* Related suspect IDs.
* Related evidence IDs.
* Confidence or reliability notes where appropriate.

### Evidence System Acceptance Criteria

* Every evidence item can be opened.
* Every evidence item has a readable title and description.
* Evidence is grouped by type.
* The user can return to the evidence list.
* Linked clues remain accessible.
* Missing optional media does not break the investigation.
* Evidence ordering is consistent with the case.
* Evidence content does not change after the case becomes playable.
* The UI distinguishes fictional records from real integrations.

## F-006: Clue Relationships and Mystery Logic

The mystery engine must explicitly model relationships between clues.

The application must not rely on a collection of unrelated AI-generated evidence.

Each clue must contain:

* Unique identifier.
* Description.
* Linked evidence IDs.
* Relevant suspect IDs.
* Importance.
* Logical implication.
* Whether the clue is decisive.
* Optional contradiction relationships.

Suggested importance levels:

* `minor`
* `supporting`
* `major`
* `decisive`

The internal case model must define how the clues support the culprit's identification.

Example:

A suspect claims to have been in the library at 7:15 PM.

A timestamped record places the suspect in the east corridor at 7:14 PM.

A second record shows that access to the library was restricted during the same period.

The contradiction becomes meaningful when the user compares the evidence.

The exact scenario will vary, but the reasoning must be explicit in the stored case data.

### Logical Consistency Rules

1. The culprit must be a valid suspect.
2. All referenced suspect IDs must exist.
3. All referenced evidence IDs must exist.
4. All timestamps must be parseable.
5. Contradictions must be supported by evidence.
6. The final solution must explain the important clues.
7. Red herrings must be explainable without requiring false or impossible facts.
8. The case must not depend on information that was never shown to the user.
9. At least one clear chain of reasoning must lead to the culprit.
10. The solution must not contradict the established timeline.

The backend must validate these rules before marking a mystery as playable.

## F-007: Investigation Dashboard

The investigation dashboard is the main gameplay screen.

It must contain the following regions.

### A. Case Header

Display:

* Case title.
* Short description.
* Difficulty.
* Case category.
* Investigation status.

### B. Evidence Navigation

Provide category filters:

* All Evidence.
* Chats.
* Images.
* CCTV.
* Documents.
* Witness Statements.
* Timeline.

Only show categories that contain evidence, unless the design intentionally displays disabled categories.

### C. Evidence Workspace

Display the selected evidence item.

The evidence viewer must adapt to the evidence type.

Examples:

* Chat interface for conversations.
* Image viewer for photographs.
* Simulated player for CCTV.
* Document viewer for reports.
* Timeline viewer for event records.

### D. Suspect Directory

Show suspect cards containing:

* Avatar.
* Name.
* Occupation.
* Short description.
* Relevant public information.

### E. Investigation Progress

Show:

* Number of evidence items available.
* Number of evidence items opened.
* Investigation completion percentage.

The percentage measures evidence exploration, not whether the user is close to identifying the culprit.

Do not use a progress indicator that leaks the answer.

### F. Final Accusation Button

Display:

**Identify the Culprit**

The button opens the final accusation interface.

It must not reveal the solution.

## F-008: Evidence Tracking

The application must record which evidence items the user has opened.

Track:

* Evidence ID.
* Investigation ID.
* Session or owner ID.
* First opened timestamp.
* Last opened timestamp.

The initial release does not require detailed behavioral analytics.

Opening evidence must not automatically reveal the culprit or change evidence content.

Progress should persist when the user reloads the page or returns to the same investigation through an authorized session.

## F-009: Culprit Selection

The accusation screen must show all eligible suspects.

The user must select one suspect.

The interface must require confirmation before submission.

Example confirmation message:

"Are you sure you want to accuse this suspect? Your final answer cannot be changed after submission."

Buttons:

* "Review Evidence"
* "Confirm Accusation"

### Submission Rules

* Only one suspect may be selected.
* The selected suspect must belong to the current investigation.
* The user cannot submit an answer for another case.
* Duplicate submissions must be prevented.
* The answer must be evaluated on the backend.
* The correct answer must not be sent to the frontend before submission.
* Once submitted successfully, the answer is locked.

The backend must enforce these rules even if the frontend is modified or bypassed.

## F-010: Answer Evaluation

The system must compare the selected suspect ID with the stored culprit ID.

This comparison must be performed by backend application logic.

Gemini must not decide whether the answer is correct at submission time.

The final result must be deterministic.

Example:

```text
Selected suspect ID: suspect_02
Stored culprit ID: suspect_02
Result: Correct
```

The result response may contain:

* Whether the accusation was correct.
* Selected suspect ID.
* Actual culprit information.
* Solution explanation.
* Supporting clues.
* Final timeline.

The actual culprit information must only be returned after a successful final accusation has been recorded.

## F-011: Solution Reveal

The result page must display:

1. Correct or incorrect result.
2. The user's selected suspect.
3. The actual culprit.
4. The culprit's motive.
5. The true sequence of events.
6. The decisive clues.
7. The contradictions that exposed the culprit.
8. An explanation of red herrings.
9. A concise final case summary.
10. An option to start a new mystery.

The explanation must reference actual evidence IDs or titles from the generated case.

Do not generate a completely new explanation after the accusation.

The explanation should come from the validated solution stored with the investigation.

## F-012: Investigation History

The application should provide a list of previously created investigations associated with the user's authorized guest session.

Each history item should show:

* Case title.
* Creation date.
* Difficulty.
* Status.
* Whether an accusation was submitted.
* Whether the investigation was solved correctly.

Users must not be able to access another user's investigations by changing an ID in the URL.

If history is omitted from the first implementation milestone, the core investigation flow must still function correctly.

---

# 6. AI INTEGRATION SPECIFICATION

## 6.1 AI Provider

Provider: Google Gemini API.

The backend must use the official Google Gen AI SDK compatible with the selected runtime and the chosen Gemini model.

Model names must be configured through environment variables.

Example:

```env
GEMINI_API_KEY=your_api_key
GEMINI_MODEL=your_supported_gemini_model
```

Do not hardcode the model name in multiple files.

Do not hardcode the API key anywhere in the application source code.

The specific model must be selected and verified during setup based on current availability, structured-output support, latency, and cost.

## 6.2 Gemini Responsibilities

Gemini is responsible for:

* Interpreting the user's scenario.
* Expanding the scenario into a mystery.
* Creating fictional suspects.
* Creating motives and alibis.
* Designing the event timeline.
* Generating evidence content.
* Creating clues and contradictions.
* Creating red herrings.
* Producing a solution explanation.
* Supporting controlled regeneration when the output fails validation.

Gemini is not responsible for:

* Database access.
* Authorization.
* Session ownership.
* Directly writing unrestricted data into MongoDB.
* Final answer evaluation.
* Exposing hidden solution data to the frontend.
* Making security decisions.
* Enforcing rate limits.

These responsibilities belong to the backend.

## 6.3 Mystery Generation Pipeline

The mystery-generation pipeline must use the following stages.

### Stage 1: Input Validation

Validate:

* Scenario length.
* Difficulty.
* Category.
* Case length.
* Request limits.
* User session.

### Stage 2: Case Planning

Ask Gemini to create a structured case plan containing:

* Incident.
* Suspects.
* Culprit identity.
* Motive.
* Timeline.
* Evidence plan.
* Required clue relationships.
* Expected solution.

The plan remains private.

### Stage 3: Evidence Generation

Generate evidence based on the case plan.

Evidence may be generated in one response or multiple controlled stages.

If multiple stages are used, all stages must receive the necessary canonical case context.

The model must not independently invent contradictory facts in different stages.

### Stage 4: Structural Validation

Validate the generated output against the defined schema.

Reject:

* Invalid JSON.
* Missing required fields.
* Duplicate IDs.
* Invalid suspect references.
* Invalid evidence references.
* Missing culprit.
* Unsupported evidence types.
* Invalid timestamps.
* Incomplete solution explanations.

### Stage 5: Logic Validation

Check:

* Culprit membership.
* Timeline consistency.
* Clue consistency.
* Solution explainability.
* Evidence completeness.
* Presence of decisive evidence.

Use deterministic application checks wherever possible.

A separate AI review may assist with semantic consistency, but it must not replace mandatory structural validation.

### Stage 6: Controlled Repair

If the output fails validation:

* Attempt a bounded repair or regeneration.
* Revalidate the entire result.
* Stop after the configured retry limit.
* Record the generation failure without exposing internal prompts or API errors.

The initial default should be no more than two repair or regeneration attempts after the first failed generation.

Avoid unbounded retries and excessive token usage.

### Stage 7: Persist the Case

Only a validated mystery may be marked playable.

Save the canonical case and private solution to MongoDB.

### Stage 8: Return the Public Case

Return only public case information.

The culprit identifier, hidden solution, private reasoning, and unshown decisive clues must remain server-side until the accusation is submitted.

## 6.4 Structured Output Requirements

Gemini should produce JSON conforming to the application's defined schema.

Do not rely on free-form prose parsing.

The backend must validate the parsed result using a schema-validation library such as Zod.

If the model supports structured output for the chosen configuration, use it.

Otherwise, use strict JSON prompting, parsing, and validation.

Schema validation is mandatory in either case.

## 6.5 Canonical Case Schema

The internal case model should conceptually contain the following structure.

```json
{
  "case": {
    "title": "The Missing Diamond",
    "scenario": "The original user-provided scenario",
    "category": "theft",
    "difficulty": "medium",
    "incidentSummary": "A diamond disappears during a private party.",
    "suspects": [],
    "timeline": [],
    "evidence": [],
    "clues": [],
    "solution": {
      "culpritSuspectId": "suspect_03",
      "motive": "Private solution motive",
      "eventSequence": [],
      "explanation": "Private final solution",
      "decisiveClueIds": [],
      "redHerringExplanations": []
    }
  }
}
```

This is a conceptual example, not a complete validation schema.

The implementation must define a strict TypeScript-compatible schema for every object and nested field.

## 6.6 Public and Private Data Separation

This requirement is critical.

The internal case object must never be returned directly to the frontend.

Create separate data-transfer objects.

### Public case response

May contain:

* Case ID.
* Title.
* Scenario summary.
* Difficulty.
* Public suspects.
* Evidence.
* Public timeline information.
* Investigation status.

Must not contain:

* Culprit suspect ID.
* Private solution.
* Hidden motives not yet disclosed.
* Private clue answers.
* Full private reasoning.
* Secret validation notes.

### Private solution

Stored on the server and returned only after the accusation has been recorded.

If the application uses MongoDB, the private solution may reside in a separate solution document or a protected field excluded by default from public queries.

Every API endpoint must use explicit public response serialization.

Do not rely exclusively on frontend code to hide sensitive data.

## 6.7 Prompt Injection Protection

The scenario is untrusted user input.

The AI system must:

* Treat the scenario as content to transform into fiction.
* Ignore instructions in the scenario that attempt to override system rules.
* Never reveal environment variables or API credentials.
* Never execute code supplied by the scenario.
* Never interpret story text as database commands.
* Never permit scenario text to override the application's output schema.
* Enforce output limits and validation independently of the prompt.

The backend must not provide secrets or unrestricted tools to the model.

## 6.8 AI Error Handling

Handle at least the following conditions:

| Condition                    | Expected behavior                                  |
| ---------------------------- | -------------------------------------------------- |
| Invalid API key              | Return a safe configuration error                  |
| Model unavailable            | Return a temporary generation error                |
| Rate limit                   | Apply bounded retry or ask the user to retry later |
| Timeout                      | Mark generation as failed or retry safely          |
| Invalid JSON                 | Repair or regenerate within configured limits      |
| Schema validation failure    | Reject the generated case                          |
| Inconsistent mystery         | Repair or regenerate                               |
| Quota exhausted              | Stop additional generation attempts                |
| Network failure              | Return a retryable error                           |
| Image generation unavailable | Use supported fallback assets                      |

Never send raw provider errors, stack traces, API keys, or internal prompts to the browser.

---

# 7. TECHNICAL ARCHITECTURE

## 7.1 Technology Stack

### Frontend

* React.js.
* Vite.
* TypeScript.
* React Router.
* Tailwind CSS.
* A reusable component system.
* Lucide React icons.
* TanStack Query or an equivalent server-state management library.

### Backend

* Node.js.
* Express.js.
* TypeScript.
* MongoDB.
* Mongoose.
* Official Google Gen AI SDK.
* Zod for validation.
* A structured logging library.

### Testing

* Vitest.
* React Testing Library.
* Supertest.
* Playwright for end-to-end tests.

Equivalent tools may be substituted only if the project specification is updated.

### Deployment

Recommended deployment arrangement:

* Frontend: Vercel or an equivalent static frontend host.
* Backend: Render, Railway, or another Node.js-compatible hosting platform.
* Database: MongoDB Atlas.
* AI: Google Gemini API.

The deployment provider must support the selected Node.js version, network requests, environment variables, and required execution limits.

## 7.2 Architecture Diagram

```text
                    USER
                     |
                     v
             REACT FRONTEND
                     |
                     | HTTPS / REST API
                     v
              EXPRESS BACKEND
                     |
          +----------+----------+
          |          |          |
          v          v          v
      Validation  Game Logic  Session/Auth
          |          |          |
          +----------+----------+
                     |
          +----------+----------+
          |                     |
          v                     v
    GOOGLE GEMINI API       MONGODB
          |
          v
    Mystery generation,
    evidence creation,
    clue design, and
    solution explanation
```

An optional media-generation service may be integrated later through a separate adapter.

## 7.3 Architectural Rules

1. React must never call Gemini directly.
2. API credentials must remain server-side.
3. Express must validate all incoming requests.
4. MongoDB must store canonical investigation state.
5. Game logic must be separated from HTTP route handlers.
6. AI generation must be isolated behind a service module.
7. Public and private data must be separated.
8. Frontend components must not contain secret answer logic.
9. All API responses must follow a consistent structure.
10. The application must use environment-specific configuration.
11. Errors must be logged without exposing secrets.
12. AI generation must be bounded by timeouts, retries, and usage limits.

---

# 8. REPOSITORY STRUCTURE

Use a monorepo with separate frontend and backend applications.

Recommended structure:

```text
ai-mystery-room/
│
├── README.md
├── package.json
├── .gitignore
├── .env.example
├── SPEC.md
│
├── docs/
│   ├── architecture.md
│   ├── api-contracts.md
│   ├── database-schema.md
│   ├── ai-generation.md
│   └── testing.md
│
├── frontend/
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── index.html
│   │
│   └── src/
│       ├── main.tsx
│       ├── App.tsx
│       │
│       ├── assets/
│       │
│       ├── components/
│       │   ├── layout/
│       │   ├── ui/
│       │   ├── mystery/
│       │   ├── evidence/
│       │   └── suspects/
│       │
│       ├── pages/
│       │   ├── HomePage.tsx
│       │   ├── CreateMysteryPage.tsx
│       │   ├── InvestigationPage.tsx
│       │   ├── AccusationPage.tsx
│       │   ├── ResultsPage.tsx
│       │   └── NotFoundPage.tsx
│       │
│       ├── hooks/
│       ├── lib/
│       ├── services/
│       ├── types/
│       ├── utils/
│       └── styles/
│
├── backend/
│   ├── package.json
│   ├── tsconfig.json
│   ├── src/
│   │   ├── server.ts
│   │   ├── app.ts
│   │   │
│   │   ├── config/
│   │   │   ├── env.ts
│   │   │   └── database.ts
│   │   │
│   │   ├── models/
│   │   │   ├── Mystery.ts
│   │   │   ├── Investigation.ts
│   │   │   ├── Session.ts
│   │   │   └── GenerationJob.ts
│   │   │
│   │   ├── routes/
│   │   │   ├── health.routes.ts
│   │   │   ├── mystery.routes.ts
│   │   │   ├── investigation.routes.ts
│   │   │   └── evidence.routes.ts
│   │   │
│   │   ├── controllers/
│   │   ├── services/
│   │   │   ├── gemini.service.ts
│   │   │   ├── mystery-generation.service.ts
│   │   │   ├── mystery-validation.service.ts
│   │   │   ├── investigation.service.ts
│   │   │   ├── evidence.service.ts
│   │   │   ├── accusation.service.ts
│   │   │   └── asset-generation.service.ts
│   │   │
│   │   ├── schemas/
│   │   ├── middleware/
│   │   ├── utils/
│   │   ├── types/
│   │   └── tests/
│   │
│   └── .env.example
│
└── tests/
    └── e2e/
```

Codex may add files where necessary, but it must preserve the architectural separation.

Do not place the entire application in a single React component or a single Express route.

---

# 9. DATABASE DESIGN

MongoDB is the system of record for generated mysteries and investigation progress.

Use separate collections for canonical mystery data, investigation state, guest sessions, and optional generation jobs.

## 9.1 Collection: mysteries

Purpose: Store the canonical generated mystery.

Suggested document:

```json
{
  "_id": "ObjectId",
  "ownerSessionId": "session_123",
  "title": "The Missing Diamond",
  "scenario": "The original scenario",
  "category": "theft",
  "difficulty": "medium",
  "caseLength": "standard",
  "status": "ready",
  "publicCase": {
    "incidentSummary": "A diamond disappears during a private party.",
    "suspects": [],
    "timeline": [],
    "evidence": [],
    "clues": []
  },
  "privateSolution": {
    "culpritSuspectId": "suspect_03",
    "motive": "Private motive",
    "eventSequence": [],
    "explanation": "Private solution",
    "decisiveClueIds": [],
    "redHerringExplanations": []
  },
  "generationMetadata": {
    "provider": "gemini",
    "model": "configured-model",
    "attemptCount": 1,
    "schemaVersion": "1.0.0"
  },
  "createdAt": "ISODate",
  "updatedAt": "ISODate"
}
```

Implementation requirements:

* Use MongoDB ObjectIds for primary database identifiers.
* Validate embedded suspect and evidence IDs.
* Keep private solution data out of public projections.
* Avoid returning raw Mongoose documents directly to clients.
* Add indexes for frequently queried fields.

## 9.2 Collection: investigations

Purpose: Store a user's progress through a mystery.

Suggested document:

```json
{
  "_id": "ObjectId",
  "mysteryId": "ObjectId",
  "ownerSessionId": "session_123",
  "status": "in_progress",
  "openedEvidenceIds": [
    "evidence_01",
    "evidence_02"
  ],
  "startedAt": "ISODate",
  "lastActivityAt": "ISODate",
  "completedAt": null,
  "accusation": {
    "selectedSuspectId": null,
    "isCorrect": null,
    "submittedAt": null
  }
}
```

Allowed investigation statuses:

* `in_progress`
* `completed`

An investigation becomes completed after a valid accusation has been recorded.

The result must not be editable through subsequent requests.

## 9.3 Collection: sessions

Purpose: Associate guest users with their investigations.

Suggested document:

```json
{
  "_id": "ObjectId",
  "sessionTokenHash": "hashed-session-token",
  "createdAt": "ISODate",
  "lastActivityAt": "ISODate",
  "expiresAt": "ISODate"
}
```

Security requirements:

* Use a cryptographically secure session token.
* Store a hash of the token where appropriate.
* Do not accept an arbitrary session ID from the browser as authentication.
* Use secure cookie settings in production.
* Set an expiration policy.
* Ensure the user can access only authorized investigations.

For a browser-based guest application, prefer an HTTP-only session cookie with appropriate `Secure` and `SameSite` settings.

## 9.4 Collection: generationJobs

Purpose: Track mystery generation when the process is asynchronous.

Suggested fields:

* Job ID.
* Owner session ID.
* Mystery ID, when created.
* Generation status.
* Retry count.
* Error category.
* Created timestamp.
* Updated timestamp.
* Completion timestamp.

Allowed statuses:

* `queued`
* `processing`
* `completed`
* `failed`

If generation is implemented synchronously for the initial release, this collection may be deferred until the job workflow is introduced.

## 9.5 Indexing

Create indexes for:

* Mystery owner and creation date.
* Investigation owner and last activity date.
* Investigation mystery ID.
* Session expiration.
* Generation job status and creation date, if applicable.

Add unique or compound indexes where required to prevent duplicate submissions or duplicate records.

## 9.6 Data Retention

Define configurable retention rules for guest sessions and abandoned investigations.

The application should not retain data indefinitely without a product requirement.

Expired guest sessions and their associated data may be removed according to a documented retention policy.

---

# 10. REST API SPECIFICATION

Base path:

`/api/v1`

All endpoints must:

* Validate request data.
* Return consistent JSON.
* Enforce session ownership.
* Avoid leaking private solution fields.
* Use appropriate HTTP status codes.

## 10.1 Standard Success Response

Example:

```json
{
  "success": true,
  "data": {},
  "error": null
}
```

## 10.2 Standard Error Response

Example:

```json
{
  "success": false,
  "data": null,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Please provide a longer scenario."
  }
}
```

Do not include stack traces, raw provider responses, or internal prompts.

## 10.3 Health Check

### GET `/api/v1/health`

Purpose:

* Confirm the API process is running.
* Optionally report dependency health without revealing secrets.

Example response:

```json
{
  "success": true,
  "data": {
    "status": "ok"
  },
  "error": null
}
```

## 10.4 Create a Mystery

### POST `/api/v1/mysteries`

Request:

```json
{
  "scenario": "A diamond disappears during a private party...",
  "difficulty": "medium",
  "category": "theft",
  "caseLength": "standard"
}
```

Response:

```json
{
  "success": true,
  "data": {
    "mysteryId": "generated-id",
    "investigationId": "generated-investigation-id",
    "status": "ready",
    "title": "The Missing Diamond",
    "redirectUrl": "/investigations/generated-investigation-id"
  },
  "error": null
}
```

The response must not include the private solution.

If generation is asynchronous, return an appropriate accepted response and provide a status endpoint.

## 10.5 Get Mystery Details

### GET `/api/v1/mysteries/:mysteryId`

Returns the public mystery representation only.

Must verify that the current session is authorized to access the mystery.

The endpoint must never return the stored private solution.

## 10.6 Get Investigation

### GET `/api/v1/investigations/:investigationId`

Returns:

* Public case details.
* Public suspect profiles.
* Evidence list.
* Investigation status.
* Opened evidence IDs.
* Progress information.

Must not return the correct suspect before an accusation is submitted.

## 10.7 Open Evidence

### POST `/api/v1/investigations/:investigationId/evidence/:evidenceId/open`

Purpose:

* Verify ownership.
* Verify evidence membership.
* Record the evidence as opened.
* Return the corresponding evidence details.

Example:

```json
{
  "success": true,
  "data": {
    "evidenceId": "evidence_01",
    "opened": true
  },
  "error": null
}
```

Repeated requests must be idempotent.

## 10.8 Submit an Accusation

### POST `/api/v1/investigations/:investigationId/accusation`

Request:

```json
{
  "suspectId": "suspect_02"
}
```

Response:

```json
{
  "success": true,
  "data": {
    "isCorrect": false,
    "selectedSuspectId": "suspect_02",
    "actualCulprit": {
      "id": "suspect_03",
      "name": "The actual culprit"
    },
    "solution": {
      "motive": "The stored motive",
      "explanation": "The stored solution explanation",
      "decisiveClues": []
    }
  },
  "error": null
}
```

The example illustrates the response after final submission.

Implementation requirements:

* Validate the suspect ID.
* Verify that the suspect belongs to the investigation.
* Reject submissions for completed investigations.
* Perform the comparison on the server.
* Atomically persist the accusation and completed status.
* Return the stored solution only after successful submission.
* Make duplicate requests safe and deterministic.

If the user retries after a network failure, the application must not accidentally allow a different accusation.

## 10.9 Get Final Result

### GET `/api/v1/investigations/:investigationId/result`

Rules:

* Return a result only after a valid accusation has been submitted.
* Verify ownership.
* Return the persisted result.
* Do not regenerate the solution.
* Return an appropriate error while the investigation is still in progress.

## 10.10 List Investigation History

### GET `/api/v1/investigations`

Optional query parameters:

* `page`
* `limit`
* `status`

Return only investigations belonging to the current authorized session.

## 10.11 Retry Generation

If asynchronous generation is implemented:

### POST `/api/v1/generation-jobs/:jobId/retry`

Rules:

* Verify job ownership.
* Retry only retryable failures.
* Enforce retry limits.
* Prevent multiple simultaneous retries.
* Do not create duplicate playable cases accidentally.

---

# 11. UI/UX SPECIFICATION

## 11.1 Design Direction

The website should resemble an interactive digital detective room.

Visual direction:

* Dark investigative atmosphere.
* Charcoal and deep navy surfaces.
* Muted amber highlights.
* Subtle red accents for warnings.
* Off-white text.
* Thin borders and restrained shadows.
* Clear typography.
* Evidence-card layouts.
* Smooth but restrained transitions.

Avoid excessive neon effects, distracting animations, and overly cluttered layouts.

The application must remain readable and accessible.

## 11.2 Color Tokens

Use centralized design tokens.

Suggested initial palette:

| Token            | Value     | Usage                    |
| ---------------- | --------- | ------------------------ |
| Background       | `#0B0F14` | Main page background     |
| Surface          | `#131A22` | Cards and panels         |
| Elevated Surface | `#1B2530` | Modals and active panels |
| Primary Accent   | `#D6A756` | Primary actions          |
| Secondary Accent | `#8AA6B8` | Secondary information    |
| Danger           | `#C85B5B` | Errors and warnings      |
| Main Text        | `#F2F4F7` | Primary content          |
| Muted Text       | `#A3AFBD` | Supporting content       |
| Border           | `#2A3542` | Dividers and outlines    |

Colors must be implemented as reusable tokens rather than scattered hardcoded values.

Check text contrast before finalizing the interface.

## 11.3 Typography

Use a modern, readable sans-serif font.

Recommended:

* Inter or an equivalent interface font for body text.
* An optional restrained display font for case titles.

Body text should remain comfortable to read on mobile.

Avoid decorative fonts for evidence descriptions.

## 11.4 Component Design

Build reusable components for:

* Navigation.
* Primary and secondary buttons.
* Input fields.
* Scenario form.
* Difficulty selector.
* Case header.
* Evidence cards.
* Evidence viewer.
* Suspect cards.
* Timeline.
* Progress indicator.
* Confirmation modal.
* Result summary.
* Loading skeletons.
* Toast notifications.
* Empty states.
* Error states.

## 11.5 Responsive Behavior

### Desktop

Use a multi-column investigation layout.

Suggested arrangement:

* Left: Evidence navigation.
* Center: Active evidence.
* Right: Suspect directory or case information.

### Tablet

Reduce the number of simultaneously visible panels.

Allow evidence navigation and suspect information to open in drawers or tabs.

### Mobile

Use a single-column layout.

Provide clear navigation between:

* Evidence.
* Suspects.
* Timeline.
* Case information.

The final accusation action must remain easy to find.

Avoid horizontal scrolling for normal page content.

## 11.6 Accessibility

The application must:

* Use semantic HTML.
* Support keyboard navigation.
* Provide visible focus indicators.
* Label all form fields.
* Provide text alternatives for meaningful images.
* Avoid communicating status through color alone.
* Respect reduced-motion preferences.
* Use accessible dialog behavior.
* Announce important status changes where appropriate.

---

# 12. FRONTEND ROUTES

Implement the following routes.

## `/`

Landing page.

## `/create`

Mystery creation form.

## `/investigations/:investigationId`

Investigation dashboard.

## `/investigations/:investigationId/accuse`

Culprit selection and confirmation.

## `/investigations/:investigationId/result`

Final result.

## `*`

Not-found page.

Route protection must be enforced by backend authorization, not just frontend route guards.

If an investigation does not belong to the current session, display a safe access error or not-found page.

---

# 13. APPLICATION STATE MANAGEMENT

Use a server-state library such as TanStack Query for API data.

The frontend must distinguish:

* Loading state.
* Success state.
* Empty state.
* Error state.
* Mutation-in-progress state.

Do not store the correct culprit in frontend application state before final submission.

Persist important progress on the server.

The frontend may cache public evidence and investigation details, but it must not treat cached data as authorization.

Invalidate or refresh relevant queries after:

* Evidence is opened.
* An accusation is submitted.
* A result is retrieved.

---

# 14. SECURITY REQUIREMENTS

## 14.1 API Credentials

Store credentials in backend environment variables.

Required configuration includes:

* `GEMINI_API_KEY`
* `GEMINI_MODEL`
* `MONGODB_URI`
* `PORT`
* `NODE_ENV`
* `FRONTEND_ORIGIN`
* Appropriate session secrets.

The exact environment schema must be validated during application startup.

Never commit real `.env` files.

Provide `.env.example` with placeholder values only.

## 14.2 Session Security

Use secure session handling.

Requirements:

* Cryptographically secure session tokens.
* HTTP-only cookies.
* Secure cookies in production.
* Appropriate `SameSite` configuration.
* Session expiration.
* Session rotation where appropriate.
* Ownership checks on every protected resource.

If cookie-based sessions are used, implement suitable CSRF protections for state-changing requests.

## 14.3 Input Validation

Validate:

* Request body.
* URL parameters.
* Query parameters.
* Allowed enum values.
* Scenario length.
* Suspect IDs.
* Investigation IDs.
* Evidence IDs.

Never trust frontend validation alone.

## 14.4 Rate Limiting

Apply stricter rate limits to:

* Mystery creation.
* Generation retries.
* Accusation submissions.
* Session creation.

Limits must be configurable.

Account for multiple backend instances when deploying rate limiting.

Prevent repeated requests from exhausting Gemini API quotas.

## 14.5 Database Security

* Use MongoDB authentication.
* Restrict database network access.
* Validate all database queries.
* Avoid unsafe dynamic query construction.
* Use appropriate indexes.
* Avoid returning private model fields.
* Prevent unauthorized cross-session access.

## 14.6 XSS Protection

Treat all scenario text, generated dialogue, document content, and evidence descriptions as untrusted text.

Render text using normal React escaping.

Do not inject untrusted HTML.

If rich text is required, use a safe renderer and an established sanitization library.

## 14.7 Error Handling

Use centralized error middleware.

Public errors must be understandable.

Internal logs may contain diagnostic information, but must exclude:

* API keys.
* Session tokens.
* Full sensitive request headers.
* Unnecessary personal information.
* Unrestricted private solution dumps.

---

# 15. PERFORMANCE AND RELIABILITY

## 15.1 Generation Time

AI generation is expected to take longer than normal API requests.

The UI must show a clear loading state.

Suggested progress messages:

* "Analyzing your scenario..."
* "Building suspect profiles..."
* "Preparing investigation evidence..."
* "Checking the mystery logic..."
* "Opening your investigation room..."

These messages represent the overall generation workflow and must not claim that a particular stage has completed unless the backend confirms it.

## 15.2 Timeout Handling

Set explicit provider and application timeouts.

If generation is synchronous, choose a request strategy compatible with the deployment provider's request limits.

If generation regularly exceeds those limits, use an asynchronous generation job and polling workflow.

## 15.3 Idempotency

Support idempotent behavior where necessary.

In particular:

* Evidence-open requests must be idempotent.
* Accusation submissions must not change after the first successful submission.
* Generation retries must not create uncontrolled duplicate cases.

Use an idempotency key or equivalent mechanism for mystery creation if retries can occur after uncertain network failures.

## 15.4 Graceful Degradation

The application must remain usable if optional media generation fails.

Examples:

* A missing suspect portrait falls back to an avatar.
* Missing CCTV video falls back to the timestamped simulation.
* A missing optional attachment does not prevent other evidence from opening.

Core case generation, evidence inspection, accusation, and result evaluation must not depend on optional image or video services.

---

# 16. TESTING REQUIREMENTS

The application is not complete merely because it runs locally.

All major requirements must have appropriate tests.

## 16.1 Unit Tests

Test:

* Scenario validation.
* Difficulty validation.
* Case schema validation.
* Suspect reference validation.
* Evidence reference validation.
* Culprit membership.
* Timeline validation.
* Clue relationship validation.
* Answer evaluation.
* Public/private data serialization.
* Progress calculations.

## 16.2 Backend Integration Tests

Test:

* Database connection handling.
* Mystery creation.
* Generation failures.
* Investigation retrieval.
* Evidence opening.
* Unauthorized access.
* Accusation submission.
* Duplicate accusation submission.
* Result retrieval.
* Session expiration.
* Rate limiting.

Mock Gemini responses in normal automated tests.

Tests must not require paid AI calls to run.

## 16.3 Frontend Tests

Test:

* Landing page navigation.
* Scenario form validation.
* Difficulty selection.
* Loading states.
* Error states.
* Evidence viewer rendering.
* Suspect selection.
* Accusation confirmation.
* Correct and incorrect result screens.
* Responsive navigation.

## 16.4 End-to-End Tests

Implement at least these flows.

### Test A: Complete Mystery

1. Open the landing page.
2. Navigate to mystery creation.
3. Enter a valid scenario.
4. Generate a case using a deterministic test fixture or mocked AI response.
5. Open the investigation.
6. Inspect evidence.
7. Select a suspect.
8. Submit an accusation.
9. Verify the result.
10. Confirm the solution is consistent with the stored fixture.

### Test B: Invalid Scenario

1. Open mystery creation.
2. Enter a scenario below the minimum length.
3. Attempt submission.
4. Verify that the request is rejected.
5. Verify that Gemini is not called.

### Test C: Private Solution Protection

1. Create a mystery.
2. Request the public mystery endpoint.
3. Inspect the entire response.
4. Verify that the culprit identifier and private solution are absent.
5. Submit an accusation.
6. Verify that the result endpoint now returns the permitted solution.

### Test D: Session Isolation

1. Create a mystery in session A.
2. Start session B.
3. Attempt to access session A's investigation.
4. Verify that access is denied.

### Test E: Duplicate Accusation

1. Submit a valid accusation.
2. Attempt to submit a different suspect.
3. Verify that the original answer and result remain unchanged.

### Test F: AI Failure

1. Simulate a provider timeout.
2. Verify that the user receives a safe error message.
3. Verify that no incomplete mystery is marked playable.
4. Verify that retry limits are enforced.

## 16.5 Test Quality Requirements

* Tests must be repeatable.
* Tests must not depend on real-world crimes or actual private conversations.
* Tests must not require real WhatsApp integration.
* Automated tests must use synthetic data.
* The backend must have meaningful coverage of security-critical logic.
* All tests must pass before a feature is considered complete.

---

# 17. ACCEPTANCE CRITERIA

The project is considered functionally complete when all of the following conditions are satisfied.

## A. Mystery Creation

* A user can enter a scenario.
* The user can choose difficulty.
* The user can choose a category.
* The backend validates the request.
* Gemini generates a structured mystery.
* Invalid AI output is rejected or repaired.
* A playable mystery is persisted in MongoDB.

## B. Evidence

* Every playable case contains multiple suspects and evidence items.
* The evidence categories render correctly.
* Fictional chats are readable.
* Images or fallbacks display correctly.
* CCTV simulation works.
* Documents and statements open correctly.
* Evidence relationships remain consistent.

## C. Investigation

* The user can navigate between suspects and evidence.
* Evidence-opening progress is persisted.
* The user can reload the investigation.
* The user cannot access another session's case.

## D. Culprit Selection

* The user can select a suspect.
* The application requests confirmation.
* The backend validates the suspect.
* The answer is evaluated against the stored culprit.
* The result is deterministic.
* The user cannot change a submitted answer.

## E. Solution Reveal

* The actual culprit is revealed after submission.
* The solution explains the motive.
* The explanation references actual case evidence.
* The final timeline is consistent with the case.
* Repeated result requests return the same stored result.

## F. Security

* Gemini credentials are never exposed to the browser.
* Private solution data is absent from pre-submission responses.
* Session ownership is enforced.
* Invalid requests are rejected.
* Rate limits are active.
* Internal errors are not exposed.

## G. User Experience

* The website is responsive.
* Loading states are clear.
* Error messages are understandable.
* Empty states are handled.
* Buttons and navigation work.
* No critical console errors remain.
* No core feature is represented by a nonfunctional placeholder.

## H. Engineering

* Frontend and backend are separate applications.
* TypeScript is used consistently.
* Environment variables are validated.
* MongoDB persistence works.
* Automated tests pass.
* Setup instructions are documented.
* Deployment configuration is documented.
* The project can be run from a clean checkout using the README.

---

# 18. DEVELOPMENT PHASES

Codex must implement the project incrementally.

Do not attempt to generate the entire application in one uncontrolled code-writing operation.

## Phase 1: Repository Setup

Tasks:

* Initialize the monorepo.
* Set up React, Vite, and TypeScript.
* Set up Express and TypeScript.
* Configure package scripts.
* Configure formatting and linting.
* Create environment examples.
* Add health endpoint.
* Configure MongoDB connection.
* Create the README.

Deliverable:
A working frontend and backend skeleton.

Acceptance:
Both applications start successfully, and the backend health endpoint responds correctly.

## Phase 2: Frontend Foundation

Tasks:

* Implement the landing page.
* Implement the scenario form.
* Create shared UI components.
* Add design tokens.
* Implement responsive navigation.
* Add loading and error states.

Deliverable:
A functional frontend with mock investigation data.

Acceptance:
Users can navigate the interface and complete the scenario form.

## Phase 3: Database and Session Security

Tasks:

* Implement guest sessions.
* Create database models.
* Add ownership middleware.
* Add indexes.
* Add request validation.
* Add centralized error handling.

Deliverable:
A secure data layer.

Acceptance:
Sessions can be created, and unauthorized access is denied.

## Phase 4: Gemini Integration

Tasks:

* Configure the Google Gen AI SDK.
* Create the mystery-generation service.
* Define structured output schemas.
* Implement prompt templates.
* Validate generated mysteries.
* Implement bounded retries.
* Separate public and private data.
* Save validated cases to MongoDB.

Deliverable:
A working AI mystery generator.

Acceptance:
A valid scenario creates a complete, logically consistent case, and the private solution remains hidden.

## Phase 5: Investigation Dashboard

Tasks:

* Implement case retrieval.
* Build suspect cards.
* Build evidence navigation.
* Build evidence viewers.
* Implement chat evidence.
* Implement image evidence and fallbacks.
* Implement CCTV simulation.
* Implement documents and statements.
* Implement the timeline.
* Persist opened evidence.

Deliverable:
A fully navigable investigation room.

Acceptance:
Users can inspect all available evidence and return to previously opened clues.

## Phase 6: Culprit Selection and Results

Tasks:

* Implement accusation interface.
* Validate suspect selection.
* Persist the final accusation.
* Enforce one-time submission.
* Implement answer evaluation.
* Implement solution reveal.
* Display decisive clues.
* Add restart functionality.

Deliverable:
A complete playable mystery loop.

Acceptance:
A user can investigate a case, accuse a suspect, and receive the correct stored result.

## Phase 7: Security and Testing

Tasks:

* Complete unit tests.
* Complete API integration tests.
* Complete end-to-end tests.
* Test session isolation.
* Test solution privacy.
* Test generation failure handling.
* Test duplicate submissions.
* Review API rate limits.
* Review logging and error messages.

Deliverable:
A tested application ready for deployment.

Acceptance:
All critical tests pass.

## Phase 8: Deployment

Tasks:

* Configure frontend hosting.
* Configure backend hosting.
* Provision MongoDB Atlas.
* Configure production environment variables.
* Configure CORS.
* Configure secure cookies.
* Test production generation.
* Test all routes.
* Document deployment steps.

Deliverable:
A deployed, functional AI Mystery Room website.

Acceptance:
The complete user journey works in the production environment.

---

# 19. CODING STANDARDS

Codex must follow these standards.

## General

* Use TypeScript for frontend and backend.
* Prefer small, focused modules.
* Use descriptive names.
* Avoid unnecessary dependencies.
* Avoid duplicated business logic.
* Keep configuration centralized.
* Do not use `any` unless justified.
* Do not suppress TypeScript errors to make the build pass.

## Backend

* Keep controllers thin.
* Put business logic in services.
* Validate requests at the boundary.
* Use explicit response DTOs.
* Use typed error handling.
* Keep AI prompts in dedicated modules.
* Never return unrestricted database documents.
* Avoid unbounded loops and retries.

## Frontend

* Use reusable components.
* Keep API calls in service modules.
* Separate server state from local UI state.
* Use explicit loading and error states.
* Keep components accessible.
* Avoid enormous single-file components.
* Never include private answer logic in frontend code.

## Database

* Validate data before persistence.
* Use stable IDs for suspects, evidence, and clues.
* Use indexes for frequently accessed data.
* Use atomic updates for final accusation submission.
* Ensure session ownership before returning data.

## Dependencies

* Use stable, compatible dependency versions.
* Avoid adding libraries without a clear purpose.
* Record the installation and setup commands in the README.
* Do not invent package APIs; verify the installed package documentation when necessary.

---

# 20. REQUIRED ENVIRONMENT VARIABLES

The project must provide a root `.env.example` or clearly documented application-specific environment examples.

Suggested configuration:

```env
NODE_ENV=development

PORT=5000

FRONTEND_ORIGIN=http://localhost:5173

MONGODB_URI=mongodb://127.0.0.1:27017/ai_mystery_room

GEMINI_API_KEY=replace_with_your_api_key

GEMINI_MODEL=replace_with_a_supported_model

SESSION_SECRET=replace_with_a_long_random_secret

SESSION_TTL_DAYS=7

GENERATION_TIMEOUT_MS=60000

MAX_GENERATION_RETRIES=2

MAX_SCENARIO_LENGTH=2000

MIN_SCENARIO_LENGTH=30
```

These values are starting configuration defaults.

The implementation must validate configuration at startup and document any provider-specific or deployment-specific adjustments.

Do not commit real credentials.

Do not expose server environment variables through frontend build configuration.

---

# 21. IMPORTANT IMPLEMENTATION DECISIONS

These rules are authoritative for Version 1.0.

1. **MERN stack is mandatory.** React, Node.js, Express, and MongoDB must form the core architecture.

2. **Gemini is the AI provider.** All Gemini calls occur on the backend.

3. **The mystery is generated before the investigation begins.** The application must establish the culprit, timeline, evidence, and solution before marking the case playable.

4. **There is exactly one designated culprit.** Every playable case must have a single valid culprit among its suspects.

5. **Evidence must be consistent.** The solution must follow from the evidence provided to the user.

6. **The backend owns the answer.** The correct culprit and private solution must never be sent to the frontend before a valid accusation is recorded.

7. **Answer evaluation is deterministic.** Compare suspect identifiers on the backend instead of asking Gemini to judge the user's answer.

8. **Evidence must be fictional.** The application does not connect to real WhatsApp accounts, real CCTV systems, or real private messages.

9. **Media generation must be modular.** The application must remain playable when optional image or video generation is unavailable.

10. **MongoDB is the source of truth for gameplay.** Do not regenerate a mystery whenever the user opens the investigation page.

11. **The final accusation is immutable.** A completed investigation cannot accept a different final answer.

12. **Guest sessions must be secure.** Users can access only their own authorized investigations.

13. **AI output must be validated.** Model output is untrusted until it passes structural and logical checks.

14. **The UI must be responsive.** The full investigation experience must work on desktop and mobile.

15. **The project must be testable.** Automated tests must use deterministic fixtures and must not require paid Gemini calls.

16. **No fake functionality.** Do not leave core buttons, evidence viewers, or submission flows as visual-only placeholders.

17. **The specification takes precedence over assumptions.** If a requested implementation detail conflicts with this document, update the specification before changing the intended behavior.

---

# 22. DEFINITION OF DONE

A feature is complete only when all applicable conditions are met:

* Requirements have been implemented.
* The implementation follows the defined architecture.
* Input validation is present.
* Authorization requirements are satisfied.
* Loading and error states are implemented.
* Relevant tests are written.
* Tests pass.
* TypeScript compilation succeeds.
* Linting succeeds.
* No secret values are committed.
* Documentation is updated.
* The feature works with the other implemented components.

The project is complete only when the end-to-end mystery workflow functions from scenario submission through final solution reveal.

---

# 23. INSTRUCTIONS FOR CODEX

This specification is the authoritative source of truth for AI Mystery Room.

Before writing application code:

1. Read this entire specification.
2. Inspect the existing repository, if one exists.
3. Check whether any implementation already satisfies part of the specification.
4. Identify missing functionality and architectural conflicts.
5. Create an implementation plan.
6. Establish the TypeScript types and data schemas.
7. Implement the application in the defined phases.
8. Run tests after each major phase.
9. Fix errors rather than hiding them.
10. Update documentation when implementation details change.

### Codex Operating Rules

* Do not replace the specified stack with another stack.
* Do not skip backend validation.
* Do not expose the culprit before accusation submission.
* Do not allow the AI to make the final correctness decision.
* Do not store the only copy of the mystery in frontend state.
* Do not implement fictional WhatsApp evidence as a real messaging integration.
* Do not require generated video for the core gameplay loop.
* Do not leave core functionality mocked in the final application.
* Do not create unnecessary features outside the specified scope.
* Do not silently change API contracts or database models.
* Do not claim a feature is complete unless it has been implemented and verified.
* If a required provider capability is uncertain, verify it before depending on it.
* If a requirement cannot be implemented as written, document the limitation and propose the smallest compatible change.
* Prefer completing one tested vertical slice at a time over generating large amounts of unverified code.

### First Implementation Milestone

Start by implementing:

1. Repository structure.
2. Frontend and backend setup.
3. Environment validation.
4. MongoDB connection.
5. Guest session security.
6. Health endpoint.
7. Landing page.
8. Scenario creation form.
9. A deterministic mock mystery-generation service.
10. Public mystery and private solution separation.

Use the mock generator only for development and automated tests. Keep it behind the same service interface as the real Gemini generator.

After the initial slice is tested, implement Gemini integration and continue through the remaining phases.

### Final Requirement

The finished product must be a real, working, AI-powered mystery investigation website—not merely a UI prototype.

The user must be able to enter an original scenario, generate a fictional mystery, investigate the evidence, select a culprit, and receive a consistent explanation of the result.

**End of Specification.**
