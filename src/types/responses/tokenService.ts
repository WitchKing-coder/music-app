import axios from "axios";
export default axios('https://accounts.spotify.com/api/token', {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic'
    }
})