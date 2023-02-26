import { useState, useEffect } from 'react';

function AudioPlayer({ src }) {
    const [audio, setAudio] = useState(null);
    const [volume, setVolume] = useState(0.2);

    useEffect(() => {
        const newAudio = new Audio(src);
        newAudio.loop = true;

        setAudio(newAudio);
        return () => {
            newAudio.pause();
            newAudio.currentTime = 0;
        }

    }, [src]);

    useEffect(() => {
        if (audio) {
            audio.volume = volume;
        }
    }, [audio, volume]);

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
    };

    if (audio) {
        audio.play();
    }

    return (
        <>
            <div class="music-control">
                <input
                    className="volume-control"
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                />
            </div>
        </>
    );
}

function MusicHome({ children }) {
    return (
        <>
            <AudioPlayer src="/music/music.mp3" />
            {children}
        </>
    );
}

export default MusicHome;
