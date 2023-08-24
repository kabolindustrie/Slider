import { useState, useEffect } from "react"
import leftArrow from "../../assets/left-arrow.svg"
import rightArrow from "../../assets/right-arrow.svg"
import "./Slider.css"
import sliderData from "../../data/sliderData.js"

export default function Slider() {
  const [sliderIndex, setSliderIndex] = useState(1)
  function toggleImage(indexPayload) {
    // slider only manual
    //   let newState
    //   if (indexPayload + sliderIndex > sliderData.length) {
    //     newState = 1
    //   }
    //   else if (indexPayload + sliderIndex < 1) {
    //     newState = sliderData.length
    //   }
    //   else {
    //     newState = indexPayload + sliderIndex
    //   }
    //   setSliderIndex(newState)

    setSliderIndex(state => {
      if (state + indexPayload > sliderData.length) {
        return 1
      }
      else if (indexPayload + state < 1) {
        return sliderData.length
      }
      else {
        return state + indexPayload
      }
    })
  }

  useEffect(() => {
    const intervalID = setInterval(() => toggleImage(1), 2000);
    //cleanUp function
    return () => clearInterval(intervalID)
  }, [])

  return (
    <>
      <p className="index-info"> {sliderIndex} / {sliderData.length} </p>
      <div className="slider">
        <p className="image-info">{sliderData.find(obj => obj.id === sliderIndex).description}</p>
        <img src={`/images/img-${sliderIndex}.jpg`} alt="" className="slider-img" />
        <button
          onClick={() => toggleImage(-1)}
          className="navigation-button prev-button"><img src={leftArrow} alt="" /></button>
        <button
          onClick={() => toggleImage(1)}
          className="navigation-button next-button"><img src={rightArrow} alt="" /></button>
      </div>

    </>
  )
}
