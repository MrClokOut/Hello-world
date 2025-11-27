'use client'

import { Title, Artist, Duration, Cover } from "../shared/ui/ui";
import cover from '../public/cov.png';
import styles from "../widget/card.module.css";
import { useState } from "react";
import secondsToMMSS from "@/app/utils/secondsToMMSS";

export const Card = (track) =>{
    const {id, src, preview, duration, title, artists} = track
    const[color, setColor] = useState(false);
    
    const formativeDuration = secondsToMMSS(duration);

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
                <div onClick={()=>handleChangeColor()}>
                    <i class="bi bi-heart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={color ? "red" : "grey"} class="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                    </svg>
                </i>
                </div>
                
                <Duration duration={formativeDuration}/>
            </div>
        </div>
    )
}
