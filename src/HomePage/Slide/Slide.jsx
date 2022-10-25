import "./Slide.css";
import netflix_on_tv from "/home/nishanth/wt_project-1/src/images/netflix_on_tv.gif";
export default function Slide() {
  return (
    <div className="slide">
      <img src={netflix_on_tv} alt="demo pic" />
      <p>Watch your favourite Movies and TV Shows on your big screen</p>
    </div>
  );
}
