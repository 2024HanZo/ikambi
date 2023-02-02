import React from "react"
import { useState, useRef , useEffect } from "react"
import Video from "./1.mp4";
import "./App.css"
export const Ikambi =() => {
        const [data,SetData] = useState(false)
        const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };
  useEffect(() => {
    attemptPlay();
  });
    return(
        <div>
            <button onClick={() => SetData(true)}>ثق بيا</button>
            {/* <iframe width="420" height="345" src="https://www.youtube.com/embed/3peALWiKnb0">
</iframe> */}
            {data === true ? <div className="Trailer">
                <video width="100%" height="100%"   allowfullscreen playsInline loop ref={videoEl} src={Video}  type="ikambi/mp4">
       
       </video>
            </div>:""}
     

        </div>
    )
}