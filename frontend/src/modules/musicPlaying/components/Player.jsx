

import { Typography } from '@mui/material';
import React from 'react'

export const Player = ({song}) => {
  const playerStyle = {
    textAlign: 'center',
    padding: '20px',
    border: '2px solid #ccc',
    borderRadius: '10px',
    maxWidth: '400px',
    margin: 'auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };
  
  const imageStyle = {
    maxWidth: '100%',
    height: '250px',
    borderRadius: '10px',
    marginBottom: '15px',
  };
  
  const typographyStyle = {
    color: '#333',
    fontFamily: 'Arial, sans-serif',
  };
  
  return (
    <div style={{ alignItems: 'center', textAlign: 'center' }}>
      <img
        style={imageStyle}
        src={song.artworkUrl100}
        alt=''
      />
      <Typography style={typographyStyle}>
        <b>{song?.trackName}</b>
        <br />
        {song?.artistName}
      </Typography>
      <audio key={song?.previewUrl} controls style={playerStyle}>
        <source src={song?.previewUrl} type="audio/mp4" />
        Your browser doesn't support this audio format.
      </audio>
    </div>
  );

  
  
  // const [currentAudioIndex, setCurrentAudioIndex] = useState("https://music.apple.com/in/album/maries-the-name-his-latest-flame/388127843?i=388128131&uo=4");
  
  // const audioRef = useRef(null);

  // const playAudio = (song) => {
  //   setCurrentAudioIndex(song);
  //   const audioElement = audioRef.current;

  //   if (audioElement) {
  //     audioElement.src = song.trackViewUrl;
  //     audioElement.play();
  //   }
  // };
  // return (
  //   <div>
  //     <h2>Audio Player</h2>
  //     <audio ref={audioRef} controls>
  //       <source src={song.trackViewUrl} type="audio/mp3" />
  //       Your browser does not support the audio element.
  //     </audio>
  //     <ul>
  //       {
  //         <li onClick={() => playAudio(song.trackViewUrl)}>
  //           {/* {index === currentAudioIndex ? '▶️' : '▷'} Track {index + 1} */}
  //         </li>
  //       }
  //     </ul>
  //   </div>
  // );
};
  // const playAudio = () => {
  //   if(currentAudioIndex===""){
  //     setCurrentAudioIndex("https://music.apple.com/in/album/maries-the-name-his-latest-flame/388127843?i=388128131&uo=4");
  //   }
  //   else{
  //   setCurrentAudioIndex(song.trackViewUrl);
  //   }
  //   const audioElement = document.getElementById("audioPlayer");
  //   audioElement.src = "https://music.apple.com/in/album/maries-the-name-his-latest-flame/388127843?i=388128131&uo=4" ;
  //   audioElement.play();
  // };

  // useEffect(()=>{
  //   setCurrentAudioIndex("https://music.apple.com/in/album/maries-the-name-his-latest-flame/388127843?i=388128131&uo=4")
  // },[])
  
  // return (
  //   <div>
  //     <h2>Player</h2>
  //     <audio id="audioPlayer" controls>
  //       <source src={currentAudioIndex} type="audio/mp3" />
  //       Your browser does not support the audio element.
  //     </audio>
  //     <ul>
  //       {
  //         <li onClick={playAudio()}>
  //           {/* {index === currentAudioIndex ? '▶️' : '▷'} Track {index + 1} */}
  //         </li>
  //      }
  //     </ul>
  //   </div>
  // );}