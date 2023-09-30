import React, { useState, useRef, useEffect } from 'react';
import music from '../../assets/musics/specialz.mp3';

function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.1);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (e) => {
        const volumeValue = e.target.value;
        audioRef.current.volume = volumeValue;
        setVolume(volumeValue);
    };

    useEffect(() => {
        setVolume(0.2);
        audioRef.current.volume = 0.1;
    }, []);


    return (
        <div className="music-player">
            <button onClick={togglePlay}>
                {isPlaying ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}
            </button>
            <i className="fas fa-volume-up" style={{ marginRight: '10px' }}></i>
            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
            />

            <audio ref={audioRef} src={music} autoPlay></audio>
        </div>
    );
}

export default MusicPlayer;
