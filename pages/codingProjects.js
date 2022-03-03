export const codingProjects = () => {
  const contentCodingProjects = `
  <div class="running-text marquee">
    <span>
      code&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;code&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;code&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;code&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;code&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;code&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;code&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;code&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;code&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;code&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;code&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;code&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;
    </span>  
  </div>
  <div class="page-container">
    <nav class="fixed-menu">
      <ul>
        <li>
          <a href="#logiciElles">LogiciElles</a>
        </li>
        <li>
          <a href="#covidKiller">Covid Killer</a>
        </li>
        <li>
          <a href="#hackerFlix">HackerFlix</a>
        </li>
      </ul>
    </nav>
    <div class="content-container">
      <button class="back-sign backSign"><<</button>
      <section id="logiciElles">
        <span class="title">LogiciElles</span>
        <div class="subtitle">
          <span>Code and Decode Hackathon</span>
          <span>2020</span>
        </div>
        <img src="./images/logicielles_image.png" aria-hidden="true" loading="lazy"/>
        <div class="skills-container">
          JavaScript ~ HTML5 ~ CSS3</div></br>
        <p>
          How many female computer scientist do you know? Discover the most brilliant female computer scientists who have shaped the history of digital technology through a personality test, a timeline and a list of resources.
        </p><br/> 
        <p> 
          <a href= "https://logici-elles.if3.dev/" target="_blank" class="info-links">Visit website</a><br/>  
          <a href= "https://github.com/paulinecoudert/itwomen" target="_blank" class="info-links">GitHub</a> 
        </p>
      </section>
      <section id="covidKiller">
        <span class="title">Covid Killer</span>
        <div class="subtitle">
          <span>Interface3</span>
          <span>2020</span>
        </div>
        <img src="./images/covid_killer_image.png" aria-hidden="true" loading="lazy"/>
        <div class="skills-container">
          JavaScript ~ HTML5 ~ CSS3 ~ Responsive Web Design</div></br>
        <p>
          A website displaying Covid-19 vaccines.
        </p><br/> 
        <p> 
          <a href= "https://fk7d4.csb.app/" target="_blank" class="info-links">Visit website</a><br/> 
          <a href= "https://github.com/federica-buzzi/covid_killer_federica" target="_blank" class="info-links">GitHub</a> 
        </p>
      </section>
      <section id="hackerFlix">
        <span class="title">HackerFlix</span>
        <div class="subtitle">
          <span>Interface3</span>
          <span>2020</span>
        </div>
        <img src="./images/hackerflix_image.png" aria-hidden="true" loading="lazy" />
        <div class="skills-container">
            JavaScript ~ HTML5 ~ CSS3 ~ Responsive Web Design
        </div></br>
        <p>
          A curated list of movies every hacker & cyberpunk must watch by Loic Truchot. 
        </p><br/> 
        <p> 
          <a href= "https://um9le.csb.app/" target="_blank" class="info-links">Visit website</a><br/> 
          <a href= "https://github.com/federica-buzzi/hackerflix_again" target="_blank" class="info-links">GitHub</a> 
        </p>
      </section>
    </div>
  </div>`;
  document.querySelector('main').innerHTML = contentCodingProjects;
};
