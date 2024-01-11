import React, { useState, useEffect } from 'react';

const Data = () => {
  const [htmlContent, setHtmlContent] = useState('');


  useEffect(() => {
    const fetchHTMLFile = async () => {
      try {
        const response = await fetch('http://localhost:8080/src/index.html');
        const html = await response.text();
        setHtmlContent(html);
      } catch (error) {
        console.error('Error loading HTML file:', error);
      }
    };

    fetchHTMLFile();
  }, []);

  return (
    <iframe src="http://localhost:8080/src/index.html" width="1220px" height="700px" frameborder="0" name="iframe名称" scrolling="yes">
    </iframe>
  );
};

export default Data