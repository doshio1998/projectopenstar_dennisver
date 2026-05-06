# OpenStar: Business Requirements Document (BRD)

## 1. Project Overview
**OpenStar** is a demonstration web application designed to analyze YouTube creators and their audience. By analyzing a YouTuber's top videos and their corresponding comments, OpenStar builds a comprehensive profile of both the creator's content style and the audience's sentiment and intentions. 

*Note: This is a demo application, not a commercial product.*

## 2. Core Objectives
- **Creator Profiling**: Automatically deduce a YouTuber's video style, core content themes, and overarching intent.
- **Audience Analysis**: Understand viewer sentiment, identify trending discussion topics, and detect purchase intent from comments.
- **Premium Visualization**: Present this data in a highly aesthetic, modern dashboard utilizing the `ui-ux-pro-max-skill` design system.

## 3. Features & Logic
### 3.1. Video Analysis (Individual Top 10 Videos)
- **Data Source**: RapidAPI (YouTube Data).
- **Processing**: Gemini API.
- **Outputs** (Calculated and displayed for each of the 10 videos individually):
  - **Style**: The visual and narrative style of the video (e.g., vlog, tutorial, cinematic).
  - **Content**: The primary subject matter and topics covered in the video.
  - **Author Intent**: What the creator is trying to convey or achieve in that specific video.

### 3.2. Comment Analysis
- **Data Source**: RapidAPI (YouTube Comments).
- **Processing**: Gemini API.
- **Outputs (in English)**:
  - **Sentiment Scoring**: Categorization of comments into Positive, Negative, or Neutral.
  - **Topic Clustering**: Grouping comments to answer "What are the fans talking about?".
  - **Purchase Intent**: Frequency and identification of buying signals (e.g., "link please", "want to buy", "求链接", "种草了").
  - **Atmosphere Summary**: A one-sentence summary capturing the overall vibe of the comment section.

## 4. Target User Flow
1. **Input**: User enters a YouTuber's channel name or ID on the homepage.
2. **Processing State**: A beautiful loading state while the system fetches data via RapidAPI and analyzes it via Gemini.
3. **Dashboard View**: The user is presented with a rich analytics dashboard displaying the Creator Profile and Audience Analysis.
