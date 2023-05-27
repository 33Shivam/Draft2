import React, { useEffect } from 'react';

const TwitterTimeline = () => {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.charset = 'utf-8';
      script.async = true;
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  
    return (
      <div>
        <a
          className="twitter-timeline"
          href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw"
        >
          Tweets by TwitterDev
        </a>
      </div>
    );
  };
  
  export default TwitterTimeline;