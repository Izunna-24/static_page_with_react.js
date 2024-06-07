import memberPic from './../../../asset/members.png'
import eventPic from './../../../asset/eventBook.png'
import clubPic from './../../../asset/clubs.png'
import payment from './../../../asset/payment.png'
import style from './index.module.css'

const MemberSection = ()=>{
    return(
        <div className={style.mainContainer}>
            <div>
                <h2 style={{color: "gray"}}>Helping a local <span style={{display:"block", color:"#4caf4f"}}>business reinvent itself</span></h2>
                <p>We reached here with our hard work and dedication</p>
            </div>
            <div>
                <div className={style.partitionSection}>
                    <div>
                        <div className={style.part}>
                            <img src={memberPic} alt={"memberPic"}/>
                            <p style={{fontSize: "20px"}}>2,245,341<span
                                style={{display: "block", fontSize: "12px"}}>Members</span></p>
                        </div>

                        <div className={style.part}>
                            <img src={eventPic} alt={"memberPic"}/>
                            <p style={{fontSize: "20px"}}>828,867<span
                                style={{display: "block", fontSize: "12px"}}>EventBookings</span></p>
                        </div>

                    </div>

                    <div>
                        <div className={style.part}>
                            <img src={clubPic} alt={"memberPic"}/>
                            <p style={{fontSize: "20px"}}>46,328<span
                                style={{display: "block", fontSize: "12px"}}>Clubs</span></p>
                        </div>

                        <div className={style.part}>
                            <img src={payment} alt={"memberPic"}/>
                            <p style={{fontSize: "20px"}}>926,436<span
                                style={{display: "block", fontSize: "12px"}}>Payments</span></p>
                        </div>

                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default MemberSection;