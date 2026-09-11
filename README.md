# my-girl-playback-app

Next.js (latest) + TypeScript scaffold for a Spotify playback app with synced lyrics.

## Stack
- Next.js 16
- TypeScript
- React Query (`@tanstack/react-query`)
- Tailwind CSS

## Placeholder structure

```text
src/
  app/
    api/
      auth/route.ts
      tracks/route.ts
      playback/route.ts
      lyrics/route.ts
  views/
    auth/
      constants/
      functions/
      hooks/
      services/
      methods/makeHttpRequest.ts
      types/
      AuthView.tsx
    search/
      constants/
      functions/
      hooks/
      services/
      methods/makeHttpRequest.ts
      types/
      SearchView.tsx
    playback/
      constants/
      functions/
      hooks/
      services/
      methods/makeHttpRequest.ts
      types/
      PlaybackView.tsx
    lyrics/
      constants/
      functions/
      hooks/
      services/
      methods/makeHttpRequest.ts
      types/
      LyricsView.tsx
    home/
      HomeView.tsx
  backend/
    modules/
      auth/
        constants/
        functions/
        services/
        methods/makeHttpRequest.ts
        types/
        routes/route.ts
        AuthModule.ts
      tracks/
        constants/
        functions/
        services/
        methods/makeHttpRequest.ts
        types/
        routes/route.ts
        TracksModule.ts
      playback/
        constants/
        functions/
        services/
        methods/makeHttpRequest.ts
        types/
        routes/route.ts
        PlaybackModule.ts
      lyrics/
        constants/
        functions/
        services/
        methods/makeHttpRequest.ts
        types/
        routes/route.ts
        LyricsModule.ts
```

This setup gives a clean module-per-feature structure for both frontend views and backend routes/services.
