import { Card } from './card';
import styles from './songList.module.css';
import tracksList from '@/app/assests/tracksList';

export const SongList = () =>{
    return(
        <div className={styles.trackslist}>
            {tracksList.map((track) => {
                return(
                    <Card key={track.id} {...track} />
                )
            })}
        </div>
    )
}