## Preview

![Player Safety Dashboard](./assets/Player-Safety-Dash-Preview.gif)

# Player Safety Command Center

A Trust & Safety operations dashboard prototype for live-service gaming platforms.

This project simulates an internal moderation command center where safety teams can review player reports, inspect case details, apply policy actions, track audit history, and monitor operational telemetry.

Built as a role-targeted portfolio project for Software Engineer I / Trust & Safety Platform work.

---

## Why I Built This

Modern multiplayer games need more than gameplay systems — they need reliable internal tools that help teams protect players, enforce policy consistently, and respond quickly to harmful behavior.

This project focuses on the engineering patterns behind those systems:

- moderation queues
- case review workflows
- policy action controls
- audit logging
- telemetry summaries
- AI-assisted risk triage
- clear visual feedback for moderator decisions

The goal was to build a small but realistic internal tool that demonstrates full-stack product thinking around player safety.

---

## Core Workflow

```txt
Select report → review case → take action → update status → append audit log

A moderator can:

Select a report from the safety queue
Review player, game, category, severity, and report content
Choose an action such as warn, mute, escalate, or dismiss
Receive color-coded confirmation feedback
See the audit log update with the action, actor, and timestamp
Features
Moderation Queue
report list
severity indicators
active case selection
Case Detail Panel
player ID
game/session context
report category
severity and status
Moderator Action Console
warn player
temporary mute
escalate to senior review
dismiss report
Audit Log
timestamped action history
moderator/system actor tracking
case-specific event filtering
Telemetry Cards
open reports
critical reports
average review time
actions today
AI Assist Mock
risk summary
suggested policy category
confidence-style signal
human-review framing
UX Feedback
color-coded action states
confirmation pulse/glaze
clear visual separation between report data and enforcement actions
Tech Stack
React
TypeScript
Vite
Tailwind CSS
CSS component utilities
Mock data layer
Local state management with React hooks
Trust & Safety Design Notes

This dashboard intentionally separates:

report facts from moderator actions
case review from policy enforcement
status updates from audit history
AI assistance from human decision-making

That separation matters in Trust & Safety systems because moderation tools need to be clear, accountable, and hard to misuse.

The UI uses restrained color feedback:

Amber = warning/caution
Orange = restriction
Red = escalation/high severity
Slate = dismissal/neutral close
Cyan = system/platform signal
What This Demonstrates

This project demonstrates my ability to:

build React/TypeScript dashboard interfaces
model operational workflows
design internal tooling for high-stakes decisions
create readable state-driven UI
think through auditability and policy-sensitive actions
translate a job description into a focused technical prototype
Future Improvements

Planned next steps:

add filters by severity, status, and category
add search by player ID or report ID
persist audit events in local storage or a backend API
add mock REST endpoints
add role-based action permissions
add charts for report volume and response time
add unit tests for action/status transitions
Local Development
npm install
npm run dev
Project Status

Active portfolio prototype.

Current focus: polished frontend workflow, clear moderation UX, and strong alignment with Trust & Safety platform engineering.