import '../style/Problem.css'
import { useEffect, useState} from 'react';


function Problem() {
  const [shown, setShown] = useState(false);

  useEffect (() => {
    const problemBox = document.querySelector('.problem-box');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setShown(true);
          problemBox.classList.add('problem-box--visible');
        }
      });
    }, options);


    observer.observe(problemBox);

    return () => observer.observe(problemBox);
  }, []);
    return (
      <div className={`problem-box${shown ? ' problem-box--visible':''}`}>
        <div className="problem-inner-box">
            <h3 className='problem-heading'>Problem</h3>
            <h4 className='problem-sub-heading'>Finding Best Price Across Different Retailers Can Be Tedious.</h4>
            <p>Have you ever purchased an item online, only to discover later that it was available at a lower price with free or faster shipping? It can be incredibly frustrating to feel like you missed out on a better deal. E-commerce can leave customers feeling cheated, particularly if they are not willing to invest the time and effort required to navigate the complex online marketplace.</p>
            <p>E-commerce has undoubtedly revolutionized the way we shop and its impact will continue to be felt in the future. However, despite its many advantages, there are several challenges associated with this mode of shopping. Customers may find the online shopping experience messy, time-consuming, and not always seamless and enjoyable.</p>
        </div> 
        <div className='problem-section-divider'></div>
      </div>
    );
  }
  
  export default Problem;