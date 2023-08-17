export default interface ISearch {
    track: string | undefined
    artist: string | undefined
    type: "track" | "playlist" | "album"
    sources: string
}