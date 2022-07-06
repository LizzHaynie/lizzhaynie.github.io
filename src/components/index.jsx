
function Home() {
  return (
    <div className="home-container">
      <div className="margin-container">
        <div className="home-flex-cont">
          <div className="inline-element">
            <strong>Hello.</strong>
            <div className="home-desc">
              My name is Elizabeth Haynie and I am a full-stack software engineer.
              <p className="inner-home-desc">
                <p>
                  I am located in the SF Bay Area. I love to build responsive, intuitive experiences for users.
                </p>
                <p>
                  Feel free to connect with me below. 
                </p>
              </p>
            </div>
          </div>
          <img className="memoji" src="/images/haynie-memoji.png" />
        </div>

        <div className="logo-contact-container">
          <a href="https://github.com/LizzHaynie" target="_blank" rel="noreferrer"><img src="/images/github-logo.png" /></a>
          <a href="https://www.linkedin.com/in/elizabethhaynie" target="_blank" rel="noreferrer"><img src="/images/linkedin-logo.png" /></a>
        </div>
      </div>
    </div>
  );
}
  
export default Home;
  