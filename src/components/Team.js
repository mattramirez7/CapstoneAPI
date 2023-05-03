import '../style/Team.css'
import backdrop from '../images/about-us-backdrop.jpeg'
import ryan from '../images/RyanC.png'
import matt from '../images/Matt2.png'
import chris from '../images/Chris.png'
import ahmed from '../images/Ahmed2.png'
import andrew from '../images/andrew.png'
import { useEffect, useState} from 'react';

function Team() {
    const [shown, setShown] = useState(false);

    useEffect(() => {
      const teamDiv = document.querySelector('.team-div');
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      };
  
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setShown(true);
            teamDiv.classList.add('team-div--visible');
          } 
        });
      }, options);
  
      observer.observe(teamDiv);
  
      return () => observer.observe(teamDiv);
    }, []);
    return (
      <div className={`team-div${shown ? ' team-div--visible':''}`}>
        <h3 className='team-top-heading'>NetPrism Sponsored</h3>
        <h2 className='team-heading'>Team</h2>
        <div className="team-box">
            <a href='https://www.linkedin.com/in/ryanantioniocarroll/'><div className='person ryan'>
                <div className='person-container'>
                    <div className='person-inner-container'>
                        <img className='circle' src={backdrop} alt='background'/>
                        <img className='img img2' src={ryan} alt='ryan'/>
                    </div>
                </div>
                <div className='divider'></div>
                <div className='name'>Ryan Carrol</div>
                <div className='title'>Product Manager</div>
            </div></a>
            <a href='https://www.linkedin.com/in/christopher-ku-044332163/'><div className='person chris'>
                <div className='person-container'>
                    <div className='person-inner-container'>
                        <img className='circle' src={backdrop} alt='background'/>
                        <img className='img img3' src={chris} alt='ryan'/>
                    </div>
                </div>
                <div className='divider'></div>
                <div className='name'>Chris Ku</div>
                <div className='title'>Developer</div>
            </div></a>
            <a href='https://www.linkedin.com/in/matthew-ramirez-b1ba0b1b7/'><div className='person matt'>
                <div className='person-container'>
                    <div className='person-inner-container'>
                        <img className='circle' src={backdrop} alt='background'/>
                        <img className='img img4' src={matt} alt='ryan'/>
                    </div>
                </div>
                <div className='divider'></div>
                <div className='name'>Matt Ramirez</div>
                <div className='title'>Developer</div>
            </div></a>

            <a href='https://www.linkedin.com/in/ahmed-ghaddah/'><div className='person ahmed'>
                <div className='person-container'>
                    <div className='person-inner-container'>
                        <img className='circle' src={backdrop} alt='background'/>
                        <img className='img img5' src={ahmed} alt='ryan'/>
                    </div>
                </div>
                <div className='divider'></div>
                <div className='name'>Ahmed Ghaddah</div>
                <div className='title'>Developer</div>
            </div></a>
            <a href='https://www.linkedin.com/in/andrew-jumanca/'><div className='andrew person'>
                <div className='person-container'>
                    <div className='person-inner-container'>
                        <img className='circle' src={backdrop} alt='background'/>
                        <img className='img img6' src={andrew} alt='ryan'/>
                    </div>
                </div>
                <div className='divider'></div>
                <div className='name'>Andrew Jumanca</div>
                <div className='title'>Developer</div>
            </div>
            </a></div> 
        <div className='overview'>
            <h2 className='overview-header'>Overview</h2>
            <p className='overview-paragraph'>We are E-Telligence, a 2022-2023 capstone team from the University of Washington Informatics program, sponsored by NetPrism. NetPrism is dedicated to providing individuals and businesses with web intelligence, and we were fortunate to collaborate with them on a new feature for their upcoming web extension. Our contribution aims to enhance the user experience and provide valuable insights to users.</p>
        </div>
        <div className='section-divider'></div>
      </div>
    );
  }
  
  export default Team;