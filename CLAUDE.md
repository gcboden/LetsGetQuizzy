# LetsGetQuizzy

## Deployment
- Hosted on Vercel, auto-deploys from GitHub on push to main
- To publish: git commit + git push. That's it.
- NEVER run `firebase deploy` or `vercel deploy`
- Firebase (project: quizcraft-e3e3c) is the Realtime Database + Auth backend only — not hosting
- Anthropic API key is a Vercel env variable, used by api/generate-quiz.js

## Stack
- Single-file HTML pages, no build step
- Firebase Realtime Database + Firebase Auth
- AI Quiz Maker calls Anthropic API via Vercel serverless function
