import  "../App.css"

export default function HomeBox({color}){

    const boxStyle={
        width: "180px",
        height: "180px",
        border: "1px solid black",
        backgroundColor: `${color}`,
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"

    }

    const circleStyle={
      width: "30%",
      height: "30%",
      border: "1px solid black",
      margin: "auto",
      borderRadius: "15px",
      backgroundColor: `${color}`
    }
    

    return <>
      <div className="red" style={boxStyle}>
        <div >
        <div style={circleStyle}></div>
        <div style={circleStyle}></div>
        <div style={circleStyle}></div>
        <div style={circleStyle}></div>

        </div>
        

      </div>

    </>

}

