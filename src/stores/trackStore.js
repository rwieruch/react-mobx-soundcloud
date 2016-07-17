import { observable, computed } from 'mobx';

class TrackStore {

  @observable tracks;
  @observable activeTrackId;

  constructor(tracks = []) {
    this.tracks = tracks;
    this.activeTrackId = null;
  }

  @computed get activeTrack() {
    let activeTrack = null;
    trackStore.tracks.forEach((track) => {
      if (track.origin.id === trackStore.activeTrackId) {
        activeTrack = track;
      }
    });
    return activeTrack;
  }

}

const trackStore = new TrackStore();

export default trackStore;
export { TrackStore };
