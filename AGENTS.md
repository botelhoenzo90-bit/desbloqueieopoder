# Mind Power App Documentation

## Project Structure
- `/src/routes/index.tsx`: Main Netflix-style dashboard.
- `/src/routes/login.tsx`: Simple persistent authentication.
- `/src/routes/welcome.tsx`: Onboarding video.
- `/src/routes/day.$dayId.tsx`: Interactive journey steps (Video -> Protocol -> Quiz -> Conclusion).
- `/src/routes/metaphor.tsx`: Independent daily confrontation logic.
- `/src/lib/store.ts`: Zustand store for progress and points.

## Theme & Assets
- **OKLCH Colors**: Optimized for a premium dark experience.
- **Assets**: `thumbnail.jpeg` is used globally for visual consistency.
- **Sounds**: (Structure prepared, actual MP3s can be added to `/public`).

## Logic
- **Linear Progression**: Users must complete Day N to see Day N+1 in the dashboard.
- **Points**: Awarded at the end of each day (+100).
- **Metaphor**: Date-based display, independent of journey progress.
