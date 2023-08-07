enum authEnum {
    CLIENT_ID = "a0bedf84284d4a58a6cccf134ab15b76",
    REDIRECT_URI = "http://localhost:3000",
    AUTH_ENDPOINT = "https://accounts.spotify.com/authorize",
    RESPONSE_TYPE = "token"
}
export const authSpotify = `${authEnum.AUTH_ENDPOINT}?client_id=${authEnum.CLIENT_ID}&redirect_uri=${authEnum.REDIRECT_URI}&response_type=${authEnum.RESPONSE_TYPE}`