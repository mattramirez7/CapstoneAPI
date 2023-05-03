import '../style/AboutFront.css'
import arrow from '../images/arrow.png'

function AboutFront() {
    return (
      <div className="AboutFront">
        <div className="cover-box">
            <h1 className="group-name-title">E-Telligence</h1>
            <h2 className="catch-phrase">Scraping The Web For The Best Products</h2>
        </div> 

        <div className="arrow bounce">
            <img className='arrow-img' src= {arrow}/>
        </div> 
      </div>
    );
  }
  
  export default AboutFront;