import image from './../../../asset/teslalogo.png';
import style from './index.module.css'
import logo1 from './../../../asset/logo1.png'
import logo2 from './../../../asset/Logo2.png'
import logo3 from './../../../asset/logo3.png'
import logo4 from './../../../asset/logo4.png'
import logo5 from './../../../asset/logo5.png'
import logo6 from './../../../asset/logo6.png'
import right_arrow from './../../../asset/right_arrow.png'


const midSection3 = () =>{
    return(
    <>
        <div className={style.container}>
            <img src={image} alt="tesla logo" className={style.teslaLogo}/>
            <div className={style.firstDiv}>
                <p>
                    Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, <br/>
                    vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare,<br/>
                    tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet <br/>
                    elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue <br/>
                    ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                    pretium. <br/>
                    Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. <br/>
                    Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id <br/>
                    sem dignissim finibus ac sit amet magna.

                </p>
                <h3 style={{color: "green", display: "block"}}>Tim Smith</h3>
                <p>British Dragon Boat Racing Association </p>
                <div style={{display: "flex", gap: "37px", alignItems: "center", justifyContent: "center"}}>
                    <img src={logo1} alt=""/>
                    <img src={logo2} alt=""/>
                    <img src={logo3} alt=""/>
                    <img src={logo4} alt=""/>
                    <img src={logo5} alt=""/>
                    <img src={logo6} alt=""/>
                    <h4 style={{color: "#4caf4f"}}>Meet all customers</h4>
                    <img src={right_arrow} alt=""/>
                </div>
            </div>


        </div>
    </>
    )
}
export default midSection3;