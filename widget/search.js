import styles from './search.module.css';

export const Search = ( {func} ) =>{
    return(
        <div>
            <input 
            placeholder='Поиск'
            onChange={func}/>
        </div>
    )
}