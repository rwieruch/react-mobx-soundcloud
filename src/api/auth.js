import SC from 'soundcloud';
import userStore from '../stores/userStore';
import trackStore from '../stores/trackStore';

export function auth() {
  SC.connect().then((session) => {
    fetchMe(session);
    fetchStream(session);
  });
};

function fetchMe(session) {
  fetch(`//api.soundcloud.com/me?oauth_token=${session.oauth_token}`)
    .then((response) => response.json())
    .then((me) => {
      userStore.setMe(me);
    });
}

function fetchStream(session) {
  fetch(`//api.soundcloud.com/me/activities?limit=20&offset=0&oauth_token=${session.oauth_token}`)
    .then((response) => response.json())
    .then((data) => {
      trackStore.setTracks(data.collection);
    });
}