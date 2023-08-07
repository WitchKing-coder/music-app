import { SpotifyApi } from "@spotify/web-api-ts-sdk";

console.log("Searching Spotify for The Beatles...");

const api = SpotifyApi.withClientCredentials(
    "your-client-id",
    "your-client-secret"
);

const items = await api.search("The Beatles", ["artist"]);

console.table(items.artists.items.map((item) => ({
    name: item.name,
    followers: item.followers.total,
    popularity: item.popularity,
})));
