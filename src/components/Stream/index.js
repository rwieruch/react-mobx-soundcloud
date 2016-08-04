import React from 'react';
import { observer, inject } from 'mobx-react';
import Stream from './presenter';
import { CLIENT_ID } from '../../constants/auth';
import { auth } from '../../api/auth';

const StreamContainer = inject('userStore', 'trackStore')(observer(({ userStore, trackStore }) => {
  return (
    <Stream
      me={userStore.me}
      tracks={trackStore.tracks}
      activeTrack={trackStore.activeTrack}
      clientId={CLIENT_ID}
      onAuth={auth}
      onPlay={trackStore.onPlay}
    />
  );
}))

export default StreamContainer;
