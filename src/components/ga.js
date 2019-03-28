import React, { useEffect } from 'react';

function GA() {
  useEffect(() => {
    function trySending() {
      if (!window.gtag) {
        // gtag is not ready, try again later.
        setTimeout(() => {
          trySending();
        }, 5000);
      }

      console.log('will send ga track...');
      window.gtag('config', 'UA-137161770-1', {
        'page_title': window.document.title,
        'page_path': window.location.pathname
      });
    }

    trySending();
  }, []);

  return <React.Fragment />;
}

export default GA;