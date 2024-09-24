import React, { useEffect, useRef, useState } from "react";
import { beats } from "../db/db";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './css/playing.css'


export default function Playing({ currentBeat, setCurrentBeat, playing, onPauseBeat, onPlayBeat }){

    const playerRef = useRef(null)


    const [screenWidth, setScreenWidth] = useState(window.innerWidth); 


    const handleWindowSizeChange = () => setScreenWidth(window.innerWidth)


    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, [])

    useEffect(() => {
        if(playerRef.current){

            const video = playerRef.current.audio.current

            const isPlaying = video.currentTime > 0 && !video.paused && !video.ended 
            && video.readyState > video.HAVE_CURRENT_DATA;

            if(playing == true && !playing){
                playerRef.current.audio.current.play()
            
            } else if (playing == false && isPlaying){
                playerRef.current.audio.current.pause()
            
            } else {

            }
        }
    }, [playing])    


    if(!currentBeat){
        return <></>
    }

    const { id, title, mp3, category } = currentBeat

    const onNextBeat = () => {
        let nextBeat;
        const beat = beats.filter(beat => beat.id == (id+1))

        if(beat.length > 0){
            nextBeat = beat[0]
        
        } else{
            nextBeat = beats[0]
        }


        setCurrentBeat(nextBeat)
    }

    const onPreviousBeat = () => {
        let prevBeat;
        const beat = beats.filter(beat => beat.id == (id-1))

        if(beat.length > 0){
            prevBeat = beat[0]
        
        } else{
            prevBeat = beats[beats.length-1]
        }


        setCurrentBeat(prevBeat)
    }    

    return (
        <div className="fixed-bottom">
            <div className="player-container">
                <AudioPlayer
                    ref={playerRef}
                    src={mp3}
                    onPause={onPauseBeat}
                    onPlay={onPlayBeat}
                    layout={screenWidth <= 768 ? 'vertical' : 'horizontal'}
                    style={{
                        backgroundColor: '#153627',
                    }}
                    header={
                        <p className="m-0 p-0 txt-15 openSans fw-600 txt-F1E4C5">{ title }</p>
                    }
                    showSkipControls={true}
                    showJumpControls={false}
                    onClickNext={onNextBeat}
                    showDownloadProgress={false}
                    onEnded={onNextBeat}
                    onClickPrevious={onPreviousBeat}
                />
            </div>            
        </div>
    )
}