export const SET_PLAYING_AUDIO = 'SET_PLAYING_AUDIO';

export const setPlayingAudio = (id) => {
    return ({
        type: SET_PLAYING_AUDIO,
        payload: id
    })
}
