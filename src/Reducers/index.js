import { combineReducers } from 'redux';
import currentAudioReducer from './current_audio_reducer';

const rootReducer = combineReducers({
    currentPlayingAudio: currentAudioReducer,
});

export default rootReducer;
