import image from '../../../asset/teslalogo.png'
import style from './index.module.css'
import logo from '../../../asset/teslalogo.png'

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
                <img src={} alt="tesla logo" className={style.teslaLogo}/>
            </div>

        </div>
    </>
    )
}
export default midSection3;