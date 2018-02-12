import { SET_PLAYING_AUDIO } from '../Actions'

export default (state = null, action) => {
    switch(action.type) {
        case SET_PLAYING_AUDIO:
            return action.payload;
        default:
            return state;
    }
}
