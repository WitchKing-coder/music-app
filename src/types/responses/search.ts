export default interface ISearch {
    tracks?: string[] | null
    artist?: string | null
    type?: "track" | "playlist" | "album" | "artist"
    sources?: string
}