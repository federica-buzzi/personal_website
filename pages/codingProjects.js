export const codingProjects = () => {
  const contentCodingProjects = ` 
  <div class="runningText marquee">
    <span>
      coding projects&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;coding projects&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;coding projects&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;coding projects&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;coding projects&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;coding projects&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;coding projects&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;coding projects&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;coding projects&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;coding projects&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;coding projects&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;coding projects&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;
    </span>  
  </div>
  <div id="pageContainer">
        <div id="fixedMenu">
          <ul>
            <li>
              <a href="#logiciElles"
                >LogiciElles</a
              >
            </li>
            <li>
              <a href="#covidKiller"
                >Covid Killer</a
              >
            </li>
            <li>
              <a href="#hackerFlix"
                >HackerFlix</a
              >
            </li>
            <li>
              <a class="chevronHome"href="#goHome"><<</a>
            </li>
          </ul>
        </div>
        <div id="contentContainer">
          <a href="#"class="backSign"><<</a>
          <div id="logiciElles">
            <span class="title">LogiciElles</span>
            <div class="subtitle">
              <span>Code and Decode Hackathon</span>
              <span>2020</span>
            </div>
            <img src="./images/logicielles_image.png" aria-hidden="true" loading="lazy"/>
            <div class="containerSkills">
                JavaScript ~ HTML5 ~ CSS3
            </div>
            <p>
              How many female computer scientist do you know? Discover the most brilliant female computer scientists who have shaped the history of digital technology through a personality test, a timeline and a list of resources.
            </p><br/> 
            <p> 
              <a href= "https://logici-elles.if3.dev/" target="_blank" class="infoLinks">Visit website</a><br/>  
              <a href= "https://github.com/paulinecoudert/itwomen" target="_blank" class="infoLinks">GitHub</a> 
            </p>
          </div>
          <div id="covidKiller">
            <span class="title">Covid Killer</span>
            <div class="subtitle">
              <span>Interface3</span>
              <span>2020</span>
            </div>
            <img src="./images/covid_killer_image.png" aria-hidden="true" loading="lazy"/>
            <div class="containerSkills">
                JavaScript ~ HTML5 ~ CSS3 ~ Responsive Web Design
            </div>
            <p>
                A website displaying Covid-19 vaccines.
            </p><br/> 
            <p> 
              <a href= "https://fk7d4.csb.app/" target="_blank" class="infoLinks">Visit website</a><br/> 
              <a href= "https://github.com/federica-buzzi/covid_killer_federica" target="_blank" class="infoLinks">GitHub</a> 
            </p>
          </div>
          <div id="hackerFlix">
            <span class="title">HackerFlix</span>
            <div class="subtitle">
              <span>Interface3</span>
              <span>2020</span>
            </div>
            <img src="./images/hackerflix_image.png" aria-hidden="true" loading="lazy" />
            <div class="containerSkills">
                JavaScript ~ HTML5 ~ CSS3 ~ Responsive Web Design
            </div>
            <p>
              A curated list of movies every hacker & cyberpunk must watch by Loic Truchot. 
            </p><br/> 
            <p> 
              <a href= "https://um9le.csb.app/" target="_blank" class="infoLinks">Visit website</a><br/> 
              <a href= "https://github.com/federica-buzzi/hackerflix_again" target="_blank" class="infoLinks">GitHub</a> 
            </p>
        </div>
      </div>`;
  document.querySelector('main').innerHTML = contentCodingProjects;
};
