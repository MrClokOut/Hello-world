import Image from "next/image"

export const Cover = ({src}) =>{
    return(
        <Image src={src} alt="облокжа" />
    )
}


export const Title = ({children}) =>{
    return(
        <span>(children)</span>
    )
}

export const Artist = ({artist}) =>{
    return(
        <p>(artist)</p>
    )
}

export const Duration = ({duration}) =>{
    return(
        <span>(duration)</span>
    )
}