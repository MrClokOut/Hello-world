'use client'

import { Title, Artist, Duration, Cover } from "../shared/ui/ui";
import cover from '../public/cov.png';
import styles from "../widget/card.module.css";
import { useState } from "react";

export const Card = (track) =>{
    const {id, src, preview, duration, title, artists} = track
    const[color, setColor] = useState(false);


    const handleChangeColor = () =>{
        if(color){
            setColor(false)
            console.log(color)
        }else{
            setColor(true)
            console.log(color)
        }
    }

    return(
        <div className={styles.main}>
            <div className={styles.naming}>
                <Cover src={preview}/>
                <div>
                    <Title children={title}/>
                    <Artist artist={artists}/>
                </div>
            </div>
            <div>
                
            </div>
            <div className={styles.reaction}>
                <button onClick={()=>handleChangeColor()}>
                    <i class="bi bi-heart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="grey" class="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                    </svg>
                </i>
                </button>
                
                <Duration duration={duration}/>
            </div>
        </div>
    )
}