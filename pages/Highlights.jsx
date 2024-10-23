import React from 'react';

const Highlights = () => {
  return (
    <div className="container">
      <h1>Highlights do Fallen</h1>
      <p>
        Assista a alguns dos melhores momentos de Gabriel "Fallen" Toledo em ação!
      </p>
      <div className="video-container">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/ToW_dQb7O9E" 
          title="Highlights Fallen 1" 
          frameBorder="0" 
          allowFullScreen
        ></iframe>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/DbMB1WSZ7Tk" 
          title="Highlights Fallen 2" 
          frameBorder="0" 
          allowFullScreen
        ></iframe>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/y8lxB69CFjo" 
          title="Highlights Fallen 3" 
          frameBorder="0" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Highlights;
