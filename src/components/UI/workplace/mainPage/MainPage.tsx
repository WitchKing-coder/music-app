import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../../../hooks/Redux";
import {GetTrackUrl} from "../../../../helpers/http/AsyncRequest";
import './MainPage.scss'

const MainPage = () => {
    const searchValue = useAppSelector(state => state.nameReducer.value)
    const searchType = useAppSelector(state => state.nameReducer.type)
    const isSuccess = useAppSelector(state => state.searchReducer.isSuccess)
    const [src, setSrc] = useState<string[]>([""])

    useEffect(() =>{
        async function getTracks () {

                let items = await GetTrackUrl(searchValue, searchType)|| []
                setSrc(items)

        }
        getTracks()
    }, [searchType, searchValue])
    setTimeout(() => console.log(isSuccess), 3000)

    return (
        <div className="home-container">
            <div className="musics">
                {src && src.map((item) => (
                <div className="music-frame">
                    <button className="favourite-song">Add a favourite</button>
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