export function Button({ onClick, className, title }){
    return(
        <button
            onClick={ onClick } //ERRO onclick ESCRITO ERRADO
            className={ className }
            type="button"            
        >            
            { title }
        </button>
    )
}