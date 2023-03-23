import  "../App.css"
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function HomeBox({color}){

    const boxStyle={
        width: "150px",
        height: "150px",
        // border: "1px solid black",
        backgroundColor: `${color}`,
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: `${color} 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px`,

    }

    const circleStyle={
      width: "30%",
      height: "30%",
       border: `2px solid ${color}`,
      margin: "auto",
      //  marginTop:"2px",
        borderRadius: "15px",
      backgroundColor: "white",
     
    }

    const tockStyle={
      width: "1.5rem",
      margin:"auto",
       marginTop:"-1px",
      borderRadius:"15px",
      
       boxShadow: "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
    
      
      // position:"relative"
      fill: `${color}`,
      // fill:"inset"
      
    }
    

    return <>
      <div className="red" style={boxStyle}>
        <div >
        <div style={circleStyle}></div>
       
        <div style={circleStyle}></div>
        <div style={circleStyle}></div>
        <div style={circleStyle}></div>

        </div>
        <div style={{position:"absolute",backgroundColor:"transparent"}}>
        <svg style={tockStyle}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"/></svg>
        
        <svg style={tockStyle}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"/></svg>
        <svg style={tockStyle}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"/></svg>
        <svg style={tockStyle}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"/></svg>

        </div>
        <FontAwesomeIcon icon="fa-regular fa-location-pin" />
       
      </div>

    </>

}

