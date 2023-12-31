import SpotifyWebApi from 'spotify-web-api-node';

const hash = window.location.hash
const access_token = hash.slice(hash.indexOf("=") + 1, hash.indexOf("&"))
const spotifyApi = new SpotifyWebApi({
    clientId: 'fcecfc72172e4cd267473117a17cbd4d',
    clientSecret: 'a6338157c9bb5ac9c71924cb2940e1a7',
})
spotifyApi.setAccessToken(access_token)
export async function GetTrackUrl(searchName: string, searchType: string, songsLimit: string): Promise<string[] | null> {
    var tracks;
    var response;
    try {
        switch (searchType){
            case "playlists":
                response = await spotifyApi.searchPlaylists(searchName, { limit: +songsLimit })
                tracks = response.body.playlists?.items;
                break
            case "songs":
                response = await spotifyApi.searchTracks(searchName, { limit: +songsLimit })
                tracks = response.body.tracks?.items;
                break
            case "albums":
                response = await spotifyApi.searchAlbums(searchName, { limit: +songsLimit })
                tracks = response.body.albums?.items;
                break
        }
        if (tracks && tracks.length) {
            return tracks.map(track => track.external_urls.spotify.substring(0, 25) + 'embed' + track.external_urls.spotify.substring(24))
        } else {
            return null;
        }
    } catch (err: any) {
        console.error('Ошибка при поиске трека:', err);
        return null;
    }
}