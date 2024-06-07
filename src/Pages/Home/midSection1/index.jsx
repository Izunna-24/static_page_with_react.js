import MidSection from "../../../component/midSection";
import image from './../../../asset/rafiki.png'

const MidSection1 = ()=>{
    return(
        <>
            <MidSection image={image} title={"The unseen of spending three years at Pixelgrade"}
                        content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. " +
                            "Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis." +
                            " Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, " +
                            "aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."}/>
        </>
    )
}

export default MidSection1;