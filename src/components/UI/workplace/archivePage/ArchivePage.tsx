import React from 'react';
import {useAppSelector} from "../../../../hooks/Redux";
import {removeFavourite} from "../../../../store/slices/FavouriteSongs";
import {useDispatch} from "react-redux";
import './ArchivePage.scss'

const ArchivePage = () => {
    const archiveSongs = useAppSelector(state => state.favouriteReducer.src)
    const dispatch = useDispatch()
    function removeFromFavouriteHandler(item: string) {
        dispatch(removeFavourite(item))
    }
    return (
        <div className="musics">
            {archiveSongs.length ? archiveSongs.map((item) => (
                <div className="music-frame">
                    <iframe title="song"
                            className="music-player"
                            src={item} width="100%"
                            height="352"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                    ></iframe>
                    <button onClick={() => removeFromFavouriteHandler(item)} className="remove-favourite">Remove from favourite</button>
                </div>
            )) : <h1 className="no-favourites">No favourites</h1>}
        </div>
    );
};

export default ArchivePage;