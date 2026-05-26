export type ReportStatus = "open" | "reviewing" | "actioned" | "dismissed";
export type Severity = "low" | "medium" | "high" | "critical";

export type SafetyReport = {
  id: string;
  playerId: string;
  category: "harassment" | "hate_speech" | "cheating" | "spam" | "threat";
  severity: Severity;
  status: ReportStatus;
  content: string;
  submittedAt: string;
  game: string;
};

export type AuditEvent = {
  id: string;
  reportId: string;
  action: string;
  actor: string;
  timestamp: string;
};