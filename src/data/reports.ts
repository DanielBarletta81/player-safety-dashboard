import type { SafetyReport, AuditEvent } from "../types/safety";

export const reports: SafetyReport[] = [
  {
    id: "RPT-1001",
    playerId: "player_8831",
    category: "harassment",
    severity: "high",
    status: "open",
    content: "Repeated abusive messages in post-match chat.",
    submittedAt: "2026-05-25T14:12:00Z",
    game: "Multiplayer Arena",
  },
  {
    id: "RPT-1002",
    playerId: "player_4410",
    category: "spam",
    severity: "medium",
    status: "reviewing",
    content: "Suspicious repeated promotional links in lobby chat.",
    submittedAt: "2026-05-25T15:02:00Z",
    game: "Creator Worlds",
  },
];

export const auditLog: AuditEvent[] = [
  {
    id: "AUD-1",
    reportId: "RPT-1001",
    action: "created",
    actor: "system",
    timestamp: "2026-05-25T14:12:00Z",
  },
];