import React, { useEffect, useRef, useState } from "react";
import { Ops } from "../../../shared/services/Api-client";
import { Button, TextField } from "@mui/material";
import Header from "../../../shared/components/Header";
import { Grid } from "@mui/material";
import { Results } from "./Results";
import { Player } from "./Player";
export const Search = () => {
  const searchvalue = useRef('');
  const [flag,setflag]=useState(false);
  const [allsongs,setallsongs]=useState([]);
  const [song,setplayersong]=useState(null);
  const toggleplayer=(flag,songarg)=>{
    setplayersong(songarg);
    setflag(flag);
  }
  const defaultlist= async() => {
    const songs = await Ops.Apiclient_searchsong('latest');
    console.log("SONGS", songs);
    Ops.Allsongs = songs;
    setallsongs(songs);
    console.log("************", Ops.Allsongs);
  }

  useEffect(()=>{
    defaultlist();
  },[])

  const find = async () => {
    let searchvalue1 = searchvalue;
    const songs = await Ops.Apiclient_searchsong(searchvalue1);
    console.log("SONGS", songs);
    Ops.Allsongs = songs;
    setallsongs(songs);
  };
  const jsx='player will be visible here';
  return (
    <div style={{background:'#C5E898'}}>
      <Header/>
      <br></br>
      <TextField 
        sx={{ background:"white" ,borderColor:"black", position: "relative",display:'initial',color:"black" }}
        inputRef={searchvalue}
        type="text"
        placeholder="type artist or song name"
        size="small"
      >
      </TextField>
      <Button sx={{ backgroundColor: "black", color: "white" }} onClick={find}>
        search
      </Button>
      <br></br>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Results fn={toggleplayer} songs={allsongs} />
        </Grid>
        <Grid item xs={4} sx={{borderRadius:'10px', width:'100%',height:'500',background: 'black'}}>
        
          <div style={{width:'auto',background:'#E7D9EA',height:'auto', borderRadius:'30px',borderColor:'grey',padding:'20px',margin:'auto'}}>
          
          {(flag)?<Player song={song}/>:jsx}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
