import { Title, Artist, Duration, Cover } from "../shared/ui/ui"
import cover from '../public/cov.png'
import styles from "../widget/card.module.css"

export const Card = (track) =>{
    const {id, src, preview, duration, title, artist} = track

    return(
        <div className={styles.main}>
            <div className={styles.naming}>
                <Cover src={preview}/>
                <div>
                    <Title children={title}/>
                    <Artist artist={artist}/>
                </div>
            </div>
            <div>
                <Duration duration={duration}/>
            </div>
        </div>
    )
}