const FRONTEND_STRUCTURE = [
  "auth/",
  "search/",
  "playback/",
  "lyrics/",
] as const;

const MODULE_STRUCTURE = [
  "constants/",
  "functions/",
  "hooks/",
  "services/",
  "methods/makeHttpRequest.ts",
  "types/",
  "<Feature>View.tsx",
] as const;

const BACKEND_STRUCTURE = [
  "modules/auth/",
  "modules/tracks/",
  "modules/playback/",
  "modules/lyrics/",
] as const;

export function HomeView() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-8 p-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">Spotify Playback + Synced Lyrics</h1>
        <p className="text-sm text-zinc-600">
          Next.js {"16"} scaffold with placeholder frontend views and backend modules.
        </p>
      </header>

      <section className="rounded-xl border border-zinc-200 p-4">
        <h2 className="mb-2 text-lg font-semibold">Frontend views</h2>
        <ul className="list-disc space-y-1 pl-6 text-sm">
          {FRONTEND_STRUCTURE.map((entry) => (
            <li key={entry}>{entry}</li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-zinc-600">Each frontend view includes:</p>
        <ul className="list-disc space-y-1 pl-6 text-sm">
          {MODULE_STRUCTURE.map((entry) => (
            <li key={entry}>{entry}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-xl border border-zinc-200 p-4">
        <h2 className="mb-2 text-lg font-semibold">Backend modules</h2>
        <ul className="list-disc space-y-1 pl-6 text-sm">
          {BACKEND_STRUCTURE.map((entry) => (
            <li key={entry}>{entry}</li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-zinc-600">
          API route placeholders are available under <code>src/app/api</code>.
        </p>
      </section>
    </main>
  );
}
