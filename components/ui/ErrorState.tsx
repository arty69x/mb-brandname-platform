import Button from './Button';

export default function ErrorState({ message, onRetry }: { message: string; onRetry: () => void }) {
  return <div className="rounded-2xl border border-[var(--danger)] p-4 text-[var(--danger)]"><p>{message}</p><Button className="mt-4" onClick={onRetry}>Retry</Button></div>;
}
