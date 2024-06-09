import style from './index.module.css'
import photo_1 from './../../../asset/photo_1.png'
import photo_2 from './../../../asset/photo_2.png'
import photo_3 from './../../../asset/photo_3.png'

import right_arrow from './../../../asset/right_arrow.png'
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
                         <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                             <h4 style={{color: "#4caf4f"}}>Readmore</h4>
                             <img src={right_arrow} alt={"arrow to the right"}/>
                         </div>
                     </div>

                 </div>


                 <div className={style.photoBox}>
                     <img src={photo_2} alt="box second image"/>
                     <div className={style.imageText}>
                         <h4>What are your safeguarding responsibilities and how can you manage them?</h4>
                         <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                             <h4 style={{color: "#4caf4f"}}>Readmore</h4>
                             <img src={right_arrow} alt="arrow to the right"/>
                         </div>
                     </div>
                 </div>

                 <div className={style.photoBox}>
                     <img src={photo_3} alt="box third image"/>
                     <div className={style.imageText}>
                         <h4>Revamping the Membership <br/>Model with Triathlon <br/>Australia</h4>
                         <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                             <h4 style={{color: "#4caf4f"}}>Readmore</h4>
                             <img src={right_arrow} alt="arrow to the right"/>
                         </div>
                     </div>
                 </div>
                 <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                     <h4 style={{color: "#4caf50"}}>Get a Demo</h4>
                 </div>
             </div>
         </div>
        </>
    );
}

export default section_4;