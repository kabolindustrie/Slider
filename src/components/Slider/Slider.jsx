import leftArrow from "../../assets/left-arrow.svg"
import rightArrow from "../../assets/right-arrow.svg"
import "./Slider.css"

export default function Slider() {
  return (
    <>
      <p className="index-info"> 3 / 5</p>
      <div className="slider">
        <p className="image-info">Bedrom</p>
        <img src="/images/img-3.jpg" alt="" className="slider-img" />
        <button className="navigation-button prev-button"><img src={leftArrow} alt="" /></button>
        <button className="navigation-button next-button"><img src={rightArrow} alt="" /></button>
      </div>

    </>
  )
}
