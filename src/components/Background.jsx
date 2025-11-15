import React, { useEffect } from 'react';

function Background() {
  useEffect(() => {
    // Load UnicornStudio script
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js';
      script.onload = () => {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      (document.head || document.body).appendChild(script);
    }
  }, []);

  return (
    <div className="fixed top-0 w-full h-screen -z-10">
      <div className="top-0 w-full -z-10 absolute h-full">
        <div 
          data-us-project="aNQ1HJcO2IvNyDCGls8J" 
          className="absolute w-full h-full left-0 top-0 -z-10"
        />
      </div>
    </div>
  );
}

export default Background;

