'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { Title } from "../../shared/ui/ui";
import { Header } from "../../widget/header";
import { SongList } from "../../widget/songList";
import { Search } from "../../widget/search";
import tracksList from "./assests/tracksList";
import { useState } from "react";

const RunQuery = (query) => {
  if(query){
    return tracksList;
  }

  const lowerCase = query.ToLowerCase();
  return tracksList.filter((track) =>{
    track.Title.ToLowerCase().includes(lowerCase);
    track.artist.tpLowerCase().includes(lowerCase);
  })
}

export default function Home() {
  const {songs, setSongs} = useState(tracksList);

  const handleChenge = (event) =>{
    const foundTrack = RunQuery(event.target.value);
  }
  return (
    <div className={styles.page}>
      
      <main className={styles.main}>
        <Header />
        <Search func={handleChenge}/>
        <SongList songs ={songs}/>
        <Header />
      </main>
    </div>
  );
}
