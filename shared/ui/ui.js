import Image from "next/image"
import styles from '../ui/ui.module.css'


export const Cover = ({src}) =>{
    return(
        <Image src={src} alt="облокжа" />
    )
}


export const Title = ({children}) =>{
    return(
        <span className={styles.title}>{children}</span>
    )
}

export const Artist = ({artist}) =>{
    return(
        <p className={styles.title}>{artist}</p>
    )
}

export const Duration = ({duration}) =>{
    return(
        <span className={styles.title}>{duration}</span>
    )
}