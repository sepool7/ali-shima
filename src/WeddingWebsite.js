import React from 'react';
import './WeddingWebsite.css'; // Import your CSS file for styling

function App() {
  const weddingDetails = {
    coupleNames: 'ALI & SHIMA',
    date: 'Tuesday, AGU 20, 2025',
    time: '5:00 PM',
    location: 'https://www.google.com/maps/place/Strada+Scaparoni,+45,+12051+Alba+CN,+Italia/@44.707223,7.905322,17z/data=!3m1!4b1!4m5!3m4!1s0x4724c1f020e2d04f:0x2b0f2f3b6d2d9f13!8m2!3d44.707223!4d7.905322',    rsvpLink: 'https://docs.google.com/forms/d/1A3yYwhwOvWMU_4BlvU7VdiFzt_Cy_brwpiqQnDBdk6w/edit', // Optional RSVP link
    description: `
      With hearts full of love, we invite you to celebrate our wedding
      as we begin our journey together as husband and wife.

    `,
    img: '/pictureReact.jpg', // Updated image path
    groomImage: 'https://placeimg.com/320/480/people', // Placeholder groom image
    brideImage: 'https://placeimg.com/320/480/people/female', // Placeholder bride image
  };


  return (
    <div className="wedding-invitation">
      <header className="header">
        <h1>{weddingDetails.coupleNames}</h1>
      </header>
      <main className="main-content">
        <div className="image-container">
          <img src={weddingDetails.img} alt="this one" />
        </div>
        <div className="details-container">
  <h3>Join Us as We Say "I Do"</h3>
  <p>
    {weddingDetails.date} at {weddingDetails.time}
  </p>
  <button
  onClick={() => window.open(weddingDetails.location, '_blank')}
  className="google-maps-button"
>
Location
</button>

  <p dangerouslySetInnerHTML={{ __html: weddingDetails.description }} />
  <button onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSckOb5mWZrF9CBaCzhy6SILgQ80S6tsBADs6Sn_VQJ3VPNC4Q/viewform?vc=0&c=0&w=1&flr=0', '_blank')} className="custom-button">
    RSVP
  </button>
  <button onClick={() => window.open('https://www.paypal.me/rasouladim/', '_blank')} className="custom-button">
    Give My Fucking Money
  </button>
</div>

      </main>
    </div>
  );
}

export default App;
