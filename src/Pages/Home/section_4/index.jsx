import style from './index.module.css'
import photo_1 from './../../../asset/photo_1.png'
const section_4 = () => {
    return (
        <>


    <div style={{color: "#4d4d4d",textAlign: "center"}}>
        <h2>Caring is the new marketing</h2>
        <p>
            The Nexcent blog is the best place to read about the latest membership insights,<br/>
            trends and more. See who's joining the community, read about how our community<br/>
            are increasing their membership income and lot's more.
        </p>
        <div className={style.photoContainer}>
            <div className={style.photoBox}>
                <img src={photo_1} alt="box first image"/>
                <div className={style.imageText}>
                    <h4>Creating Streamlined <br/>
                        Safeguarding Processes <br/>
                        with OneRen
                    </h4>

                </div>

            </div>
        </div>
    </div>
        </>
    );
}

export default section_4;