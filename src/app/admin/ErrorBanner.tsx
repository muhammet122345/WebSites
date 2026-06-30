export default function ErrorBanner({ message }: { message: string }) {
  return (
    <div className="mb-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-5">
      <p className="text-sm font-medium text-red-300">{message}</p>
    </div>
  );
}
