import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../../../hooks/Redux";
import {getCurrentSong, getTrackUrl} from "../../../../helpers/http/AsyncRequest";
import './MainPage.scss'

const MainPage = () => {
    const searchValue = useAppSelector(state => state.nameReducer.value)
    const searchType = useAppSelector(state => state.nameReducer.type)
    const [src, setSrc] = useState<string[]>([""])
    const [currentTrackUrl, setCurrentTrackUrl] = useState<string>("")

    useEffect(() =>{
        async function getTracks () {
            let items = await getTrackUrl(searchValue, searchType)|| []
            setSrc(items)
        }
        getTracks()
    }, [searchType, searchValue])

    function setTrackUrl(e: React.MouseEvent<HTMLDivElement>, item: string) {
        e.stopPropagation()
        setCurrentTrackUrl(item)
    }

    return (
        <div className="home-container">
            <div className="musics">
                {src && src.map((item) => (
                <div className="music-frame" onClick={(e) => setTrackUrl(e, item)}>
                    <iframe title="song"
                            className="music-player"
                            src={item} width="100%"
                            height="352"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            onClick={() => console.log(item)}
                            ></iframe>
                </div>
                ))}
            </div>
            {currentTrackUrl &&
                <div className="current-song">
                    <iframe title="song"
                            className="music-player"
                            src={currentTrackUrl} width="100%"
                            height="352"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy">
                    </iframe>
                    <div className="songs-controller">
                        <button className="button-previos">{`<`}</button>
                        <button onClick={() => getCurrentSong()} className="button-next">{`>`}</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default MainPage;