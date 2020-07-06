import { google } from 'googleapis';

export const youtube = google.youtube('v3');

export const oAuth2 = () => new google.auth.OAuth2(
  process.env.GOOGLE_OAUTH_CLIENT_ID,
  process.env.GOOGLE_OAUTH_SECRET,
  process.env.GOOGLE_CALLBACK_URL,
);
