// import logo from './logo.svg';
 import { useEffect, useRef } from 'react';
import './App.css';
import HomeBox from './Component/HomeBox';
 import music from "./Media/song.mp3"

  // document.getElementById("song").play();

function App() {
   const song=useRef(null);
   const playSong=()=>{
     song.current.play();
     
   }
  //  useEffect(()=>{
  //   playSong();
  //  })

 
  return (
    <div className="App">


  
      <div className='container'>
       
        <HomeBox color={"rgb(233, 16, 16)"}/>
      
        <div className='path'  style={{width:"110px",height:"181px",border:"1px solid black", display:"grid",gridTemplateColumns:"repeat(3,1fr)",  boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",}} >

        </div>
        
        <HomeBox color={"rgb(10, 238, 10)"}/>
    
        <div className='path' style={{width:"181px",height:"110px",border:"1px solid black",gridTemplateColumns:"repeat(6,1fr)",  boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",}}>

        </div>
        <div className='Home'>
            
       </div>
      
      
        <div className='path' style={{width:"181px",height:"110px",border:"1px solid black",gridTemplateColumns:"repeat(3,1fr)",  boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",}}>

        </div>
        <HomeBox color={"rgba(6, 50, 247, 0.767)"}/>
    
      
      
        <div className='path' style={{width:"110px",height:"181px",border:"1px solid black",gridTemplateColumns:"repeat(6,1fr)",  boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",}}>

        </div>
        <HomeBox color={"rgb(240, 240, 16)"}/>
      

      </div>
      <audio src={music} id="song" ref={song} type="audio/mp3">
        
      </audio>
      {/* <button onClick={playSong}>Play</button> */}
     
     
    </div>
  );
}

export default App;
