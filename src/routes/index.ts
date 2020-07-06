import { Router } from 'express';
import { youtube, oAuth2 } from '../providers/google.provider';

const router = Router();

router.post('/auth/youtube/channels', async (req, res) => {
  const oAuthClient = oAuth2();

  oAuthClient.setCredentials(req.body);

  const channels = await youtube.channels.list({
    auth: oAuthClient,
    part: ['snippet','contentDetails', 'statistics'],
    mine: true,
  });

  res.json({ channels: channels.data });
});

export default router;
