import React from 'react';
import './WeddingWebsite.css'; // Import your CSS file for styling
import namesImage from './alishima.png'; // Import the image file

function App() {
  const weddingDetails = {
    coupleNames: 'ALI & SHIMA',
    date: 'Tuesday, August 20, 2025',
    time: '5:00 PM',
    Detail: 'https://www.google.com/maps/place/Strada+Scaparoni,+45,+12051+Alba+CN,+Italia/@44.707223,7.905322,17z/data=!3m1!4b1!4m5!3m4!1s0x4724c1f020e2d04f:0x2b0f2f3b6d2d9f13!8m2!3d44.707223!4d7.905322',
    rsvpLink: 'https://docs.google.com/forms/d/1A3yYwhwOvWMU_4BlvU7VdiFzt_Cy_brwpiqQnDBdk6w/edit', // Optional RSVP link
    description: `
      With hearts full of love, we invite you to celebrate our wedding
      as we begin our journey together as husband and wife.
    `,
    img: 'pictureReact.jpg', // Path to your main image
  };

  return (
    <div className="wedding-invitation">
      <div className="image-container">
        <img src={weddingDetails.img} alt="Wedding" />
      </div>
      <div className="details-container">
        <header>
          <img src={namesImage} alt="Ali & Shima" className="names-image" />
        </header>
        <p>{weddingDetails.date} at {weddingDetails.time}</p>
        <p dangerouslySetInnerHTML={{ __html: weddingDetails.description }} />
        <div className="buttons">
          <button
            onClick={() => window.open(weddingDetails.Detail, '_blank')}
            className="google-maps-button"
          >
            Detail
          </button>
          <button
            onClick={() => window.open(weddingDetails.rsvpLink, '_blank')}
            className="custom-button"
          >
            RSVP
          </button>
          <button
            onClick={() => window.open('https://www.paypal.me/rasouladim/', '_blank')}
            className="custom-button"
          >
            Gift
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
