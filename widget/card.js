import { Title, Artist, Duration, Cover } from "../shared/ui/ui"
import cover from '../public/cov.png'
import styles from "../widget/card.module.css"

export const Card = () =>{
    return(
        <div className={styles.main}>
            <div className={styles.naming}>
                <Cover src={cover}/>
                <div>
                    <Title children="Название"/>
                    <Artist artist="Артист"/>
                </div>
            </div>
            <div>
                <Duration duration="Длительность"/>
            </div>
        </div>
    )
}