import '../style/Solution.css'
import { useEffect } from 'react';

function Solution() {
  useEffect(() => {
    const solutionBox = document.querySelector('.solution-box');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          solutionBox.classList.add('solution-box--visible');
        } else {
          solutionBox.classList.remove('solution-box--visible');
        }
      });
    }, options);

    observer.observe(solutionBox);

    return () => observer.unobserve(solutionBox);
  }, []);
    return (
      <div className="solution-box">
        <div className="solution-inner-box">
            <h3 className='solution-heading'>solution</h3>
            <h4 className='solution-sub-heading'>Effortlessly Compare Prices Powered By Web Crawling and Scraping </h4>
            <p>Imagine the convenience of comparing prices, shipping options, and other product details for identical items sold on various websites with just a click of a button. This powerful tool can save you both time and money.</p>
            <p>Our API is designed to meet this need by leveraging web crawling and scraping technologies to collect product links from different meta-search engines and websites. By specifying your search query, our API will generate a list of product links that match your requirements.</p>
            <p>For a more detailed understanding of how our API works, please refer to our demo video and documentation.</p>
        </div> 
        <div className='solution-section-divider'></div>
      </div>
    );
  }
  
  export default Solution;