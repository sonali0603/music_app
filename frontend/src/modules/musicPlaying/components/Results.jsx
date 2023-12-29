import React from "react";
import { Song } from "./Song";

export const Results = (allsongs) => {
  console.log("inside results", allsongs);
  const arr = allsongs.songs.results;
  console.log('arr', arr);
  if(arr&&arr.length>0){
    return(<> {arr.map((cursong,index)=>{return <> <Song fn={allsongs.fn} key={index} song={cursong}/></>})} 
    </>);}
  else{
      return(<>
      <p>search not found recheck spelling error
       if still persists the song may not exist in our database</p>
      </>);
    }
};
