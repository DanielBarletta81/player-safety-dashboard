import { useState } from "react";
import { reports } from "./data/reports";
import { auditLog } from "./data/reports";
import {ActionConfirmation} from "./components/ConfirmationOfAction";
import type { SafetyReport } from "./types/safety";

export default function App() {
  const [selected, setSelected] = useState<SafetyReport>(reports[0]);
  const [reportList, setReportList] = useState(reports);
  const [auditEvents, setAuditEvents] = useState(auditLog);

  type ConfirmationTone = "warn" | "mute" | "escalate" | "dismiss";

type Confirmation = {
  action: string;
  tone: ConfirmationTone;
} | null;

   const [confirmation, setConfirmation] = useState<Confirmation>(null);


  function handleAction(action: string, tone: ConfirmationTone) {
    const newEvent = {
      id: crypto.randomUUID(),
      reportId: selected.id,
      action,
      actor: "moderator_01",
      timestamp: new Date().toISOString(),
    };

    console.log(reportList);
    setAuditEvents((prev) => [newEvent, ...prev]);

    setConfirmation({ action, tone });
    setReportList((prev) =>
      prev.map((report) =>
        report.id === selected.id
          ? {
              ...report,
              status: action === "Dismissed" ? "dismissed" : "actioned",
            }
          : report,
      ),
    );
  
    setSelected((prev) => ({
      ...prev,
      status: action === "Dismissed" ? "dismissed" : "actioned",
    }));
  }

return (
  <main className="command-shell">
    <div className="command-container">
      <header className="command-header">
        <p className="eyebrow">Trust & Safety Platform</p>
        <h1>Player Safety Command Center</h1>
        <p className="muted">
          Moderation queue, policy actions, telemetry, audit logging, and
          AI-assisted triage.
        </p>
      </header>

      <section className="metric-grid">
        <Metric label="Open Reports" value="18" />
        <Metric label="Critical" value="3" />
        <Metric label="Avg Review Time" value="6m" />
        <Metric label="Actions Today" value="42" />
      </section>

      <section className="dashboard-grid">
        <div className="panel-card overflow-hidden">
          <div className="p-4 border-b border-slate-800">
            <h2 className="section-title">Moderation Queue</h2>
          </div>

          {reports.map((report) => (
            <button
              key={report.id}
              onClick={() => setSelected(report)}
              className={`queue-item ${
                selected.id === report.id ? "queue-item-active" : ""
              }`}
            >
              <div className="flex justify-between gap-4">
                <span className="font-semibold text-slate-100">
                  {report.id}
                </span>
                <span className="text-sm text-cyan-300">
                  {report.severity}
                </span>
              </div>

              <p className="text-sm text-slate-400">{report.category}</p>
              <p className="mt-2 text-slate-200">{report.content}</p>
            </button>
          ))}
        </div>

        <aside className="panel-card p-4 space-y-4">
          <section className="space-y-3">
            <h2 className="section-title">Case Detail</h2>
            <p className="text-sm text-slate-400">{selected.id}</p>
            <p className="text-slate-200">{selected.content}</p>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <Info label="Player" value={selected.playerId} />
              <Info label="Game" value={selected.game} />
              <Info label="Status" value={selected.status} />
              <Info label="Severity" value={selected.severity} />
            </div>
          </section>

          <ActionConfirmation confirmation={confirmation} />

          <section className="action-zone">
            <p className="text-xs uppercase tracking-wide text-slate-500 mb-3">
              Moderator Actions
            </p>

            <div className="grid grid-cols-2 gap-2">
              <button
                className="action-btn action-warn"
                onClick={() => handleAction("Warning issued", "warn")}
              >
                Warn
              </button>

              <button
                className="action-btn action-mute"
                onClick={() =>
                  handleAction("Temporary mute applied", "mute")
                }
              >
                Temp Mute
              </button>

              <button
                className="action-btn action-escalate"
                onClick={() =>
                  handleAction("Escalated to senior review", "escalate")
                }
              >
                Escalate
              </button>

              <button
                className="action-btn action-dismiss"
                onClick={() => handleAction("Report dismissed", "dismiss")}
              >
                Dismiss
              </button>
            </div>
          </section>

          <section className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <h2 className="section-title mb-3">Audit Log</h2>

            <div className="space-y-3">
              {auditEvents
                .filter((event) => event.reportId === selected.id)
                .map((event) => (
                  <div
                    key={event.id}
                    className="border-l-2 border-cyan-400 pl-3"
                  >
                    <p className="font-medium text-slate-100">
                      {event.action}
                    </p>
                    <p className="text-xs text-slate-400">
                      {event.actor} •{" "}
                      {new Date(event.timestamp).toLocaleString()}
                    </p>
                  </div>
                ))}
            </div>
          </section>
        </aside>
      </section>
    </div>
  </main>
);
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="metric-card">
      <p className="metric-label">{label}</p>
      <p className="metric-value">{value}</p>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-slate-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}

