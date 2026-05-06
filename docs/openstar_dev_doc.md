# OpenStar: Development Document (Dev Doc)

## 1. Architecture & Tech Stack
- **Frontend**: Next.js 14+ (App Router), React, Tailwind CSS.
- **Design System**: `ui-ux-pro-max-skill` (focus on Drill-Down/Analytics Dashboard styles).
- **Backend/API**: Supabase (Edge Functions / API Routes for secure third-party API calls).
- **Database**: Supabase PostgreSQL (Caching analysis results to minimize API costs).
- **External Services**:
  - **Gemini API**: For LLM-powered analysis of videos and comments.
  - **RapidAPI (YouTube)**: For scraping top videos and their comments.

## 2. System Flow
1. **Client Request**: User submits a YouTuber handle on the frontend.
2. **Cache Check**: The Next.js app queries Supabase DB for recent analysis of this YouTuber.
   - *Hit*: Return cached profile data immediately.
   - *Miss*: Proceed to API pipeline.
3. **API Pipeline (via Supabase / Next.js Server Actions)**:
   - Call **RapidAPI** to fetch the Top 10 most popular videos for the channel.
   - Call **RapidAPI** to fetch the top/recent comments for those 10 videos.
   - Send video metadata (titles, descriptions, tags) to **Gemini API** with a prompt to extract Style, Content, and Author Intent.
   - Send concatenated comments to **Gemini API** with a prompt to extract Sentiment, Topic Clusters, Purchase Intent, and an Atmosphere Summary.
4. **Data Storage**: Store the compiled JSON result in the Supabase DB.
5. **Client Rendering**: Frontend visualizes the JSON payload using premium, interactive chart/dashboard components.

## 3. Database Schema (Draft)
**Table: `creator_profiles`**
- `id` (UUID, PK)
- `channel_name` (String, Unique)
- `video_analysis` (JSONB: style, content, intent)
- `comment_analysis` (JSONB: sentiment, topics, purchase_intent, atmosphere)
- `created_at` (Timestamp)

## 4. Risks & Mitigations
- **API Rate Limits/Costs**: Fetching comments for 10 videos can be heavy. *Mitigation: Strict caching in Supabase. Limit comment fetch to top 50 per video.*
- **LLM Context Limits**: Sending thousands of comments to Gemini might exceed context windows or dilute the prompt. *Mitigation: Sample comments or use Gemini's large context window (e.g., Gemini 1.5 Pro/Flash).*
- **RapidAPI Brittleness**: YouTube scrapers on RapidAPI can break if YouTube changes its DOM. *Mitigation: Wrap API calls in try/catch and provide fallback demo data if the API fails.*
