import axios from 'axios';

const KEY = 'AIzaSyCA72PBXT5YPPuD1TFAPvZTuZuKwPQhtTQ'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  },
});
