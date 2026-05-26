type ConfirmationTone = "warn" | "mute" | "escalate" | "dismiss";

type Confirmation = {
  action: string;
  tone: ConfirmationTone;
} | null;

export function ActionConfirmation({
  confirmation,
}: {
  confirmation: Confirmation;
}) {
  if (!confirmation) return null;

  const toneClass = {
    warn: "confirm-warn",
    mute: "confirm-mute",
    escalate: "confirm-escalate",
    dismiss: "confirm-dismiss",
  }[confirmation.tone];

  return (
    <div className={`confirmation-glaze ${toneClass}`}>
      <p className="font-semibold">Action confirmed</p>
      <p className="text-sm opacity-90">
        {confirmation.action}. Audit log updated and case status changed.
      </p>
    </div>
  );
}