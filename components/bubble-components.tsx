export default function BubbleBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-neutral-900 via-zinc-800 to-black overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05),transparent_70%)]" />

      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(135deg,rgba(255,255,255,0.07)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.07)_50%,rgba(255,255,255,0.07)_75%,transparent_75%,transparent)] bg-[length:20px_20px]" />

      <div className="glint-effect" />
    </div>
  );
}
