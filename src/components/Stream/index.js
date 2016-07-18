import React from 'react';
import Stream from './presenter';
import { CLIENT_ID } from '../../constants/auth';
import { auth } from '../../actions/auth';
import userStore from '../../stores/userStore';
import trackStore from '../../stores/trackStore';

function StreamContainer() {
  return (
    <Stream
      userStore={userStore}
      trackStore={trackStore}
      clientId={CLIENT_ID}
      onAuth={auth}
      onPlay={(track) => trackStore.activeTrackId = track.origin.id}
    />
  );
}

export default StreamContainer;
