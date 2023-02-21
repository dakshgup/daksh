import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>hi, i'm daksh gupta</h1>
        <img src="https://i.ibb.co/sQhHHyq/Headshots-3.png" alt='headshot' />
        <h3>work</h3>
        <p>i am co-founder/ceo of <a href="https://www.tabnam.com">tabnam</a>.</p>
        <h3>school</h3>
          <p>i went to <a href="https://www.cc.gatech.edu"> georgia tech</a> where I majored in computer science and almost completed a minor in music. 
          i was lucky enough to intern at qualcomm and amazon, run the 2000 member
          data science club. this is also where i met my co-founders. </p>

        <h3>music</h3>
        <p>i sing in an atlanta-based rock band called parallel park. you should follow our <a href="instagram.com/parallelparkmusic">instagram</a> to see our upcoming dates.
        </p>
        <p>i also make solo music as daksh gupta on spotify/apple music or wherever you get your music. my 2019 single pastor debuted at #24 on the spotify viral 50 so i was famous for a few days.</p>

        <h3>follow me</h3>
      
        <div class="social-links">
        <a href="https://twitter.com/dakshgup"><img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-twitter-square2-512.png" alt="Twitter"/></a>
        <a href="https://www.linkedin.com/in/dakshg"><img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-square2-512.png" alt="LinkedIn"/></a>
        <a href="https://github.com/dakshthemaker"><img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/71-github-512.png" alt="GitHub"/></a>
      </div>
      
      </header>
      
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
