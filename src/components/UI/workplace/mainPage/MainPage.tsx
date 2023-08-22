import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../../../hooks/Redux";
import {GetTrackUrl} from "../../../../helpers/http/AsyncRequest";
import './MainPage.scss'
import {addFavourite, removeFavourite} from "../../../../store/slices/FavouriteSongs";
import {useDispatch} from "react-redux";

const MainPage = () => {
    const searchValue = useAppSelector(state => state.nameReducer.value)
    const searchType = useAppSelector(state => state.nameReducer.type)
    const songsLimit = useAppSelector(state => state.nameReducer.limit)
    const favouriteSongs = useAppSelector(state => state.favouriteReducer.src)
    const [src, setSrc] = useState<string[]>([""])
    const dispatch = useDispatch()

    useEffect(() =>{
        async function getTracks () {
            let items = await GetTrackUrl(searchValue, searchType, songsLimit)|| []
            setSrc(items)
        }
        getTracks()
    }, [searchType, searchValue, songsLimit])

    function addToFavouriteHandler(item: string) {
        dispatch(addFavourite(item))
    }

    function removeFromFavouriteHandler(item: string) {
        dispatch(removeFavourite(item))
    }

    return (
        <div className="home-container">
            <div className="musics">
                {src && src.map((item) => (
                <div className="music-frame">
                    <div className="song-menu">

                        {favouriteSongs.includes(item) ?
                            <button onClick={() => removeFromFavouriteHandler(item)}
                                className="remove-favourite">remove from favourites</button>
                            :
                            <button disabled={!!favouriteSongs.includes(item)}
                                    onClick={() => addToFavouriteHandler(item)}
                                    className="favourite-song">
                                {favouriteSongs.includes(item) ? "Added to favourite" : "Add a favourite"}
                            </button>
                        }
                    </div>
                    <iframe title="song"
                            className="music-player"
                            src={item} width="100%"
                            height="352"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            ></iframe>
                </div>
                ))}
            </div>
        </div>
    );
};

export default MainPage;