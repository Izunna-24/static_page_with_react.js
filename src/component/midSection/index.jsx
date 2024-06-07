import style from './index.module.css'

const MidSection = ({image, title, content})=>{
    return(
        <div className={style.container}>
            <img src={image} alt={title} />
            <div className={style.rightSection}>
                <h2>{title}</h2>
                <p>{content}</p>
                <button>Learn more</button>
            </div>

        </div>
    )
}

export default MidSection;