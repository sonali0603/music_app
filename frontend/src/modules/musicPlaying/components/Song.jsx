// import React from 'react'

// export const Song = ({song}) => {
//     //console.log("songs in song",song);
//   return (
//     <p> {song.trackName}</p>
//   )
// }

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";


export const Song = ({fn,song}) => {

  const callsongplayer=()=>{
    console.log('inside callplayer');
    fn(true,song);
  }
  
  return (
    <Card sx={{Height:20,backgroundColor:"black", border:1, borderWidth:"medium", borderColor:"#EEE2DE"}}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardMedia
            component='img'
            image={song.artworkUrl100}
            alt=" "
            height='100'
            sx={{objectFit:"contain"}}
          />
        </Grid>
        <Grid item xs={4}>
          <CardContent>
            <Typography variant="h7" component="div" sx={{color:"white"}}>
              {song.trackName} 
            </Typography>
            <Typography variant="body2" sx={{color:"white"}} >
              {song.artistName} 
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={4}>
          <CardActions>
            <Button 
            variant='outlined' 
            size="large" 
            sx={
              {backgroundColor:"white",
              color:"black",
              ":hover": {bgcolor: "#AF5",color: "black"}
              }
            }
            onClick={callsongplayer}> play </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};
