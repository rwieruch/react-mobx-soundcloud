import React from 'react';
import { observer } from 'mobx-react';
import Stream from './presenter';
import { CLIENT_ID } from '../../constants/auth';
import { auth } from '../../api/auth';
import userStore from '../../stores/userStore';
import trackStore from '../../stores/trackStore';

const StreamContainer = observer(() => {
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
})

export default StreamContainer;
