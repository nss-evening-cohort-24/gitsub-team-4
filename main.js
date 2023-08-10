const profile = [{
  name: "Barbie Midge",
  userName: "barbie23",
  userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0WJIg65PcoLHqLwk-_78Bf9baGT_0ox3FKfRKhYnH6I7M_HZhGqzx-ES388PYF6qpIo4&usqp=CAU",
  profBio: "Living in a Barbie world",
  location: "Barbieland, CA",
  email: "barbie_23@aol.com",
  link: "https://about.mattel.com",
  twitter: "@barbie23",
  packages: [{
      packId: 1,
      packName: "",
      packDesc: "",
      packTags: "",
      },
      {
      packId: 2,
      packName: "",
      packDesc: "",
      packTags: "",
    },
    {
      packId: 3,
      packName: "",
      packDesc: "",
      packTags: "",
    },
    {
      packId: 4,
      packName: "",
      packDesc: "",
      packTags: "",
    },
    {
      packId: 5,
      packName: "",
      packDesc: "",
      packTags: "",
    },
    {
      packId: 6,
      packName: "",
      packDesc: "",
      packTags: "",
    }],
  projects: [
    {
      projId: 1,
      projName: "",
      projDesc: "",
      projTags: "",
      projStar: false 
    },
    {
      projId: 2,
      projName: "",
      projDesc: "",
      projTags: "",
      projStar: false 
    },
    {
      projId: 3,
      projName: "",
      projDesc: "",
      projTags: "",
      projStar: false 
    },
    {
      projId: 4,
      projName: "",
      projDesc: "",
      projTags: "",
      projStar: false 
    },
    {
      projId: 5,
      projName: "",
      projDesc: "",
      projTags: "",
      projStar: false 
    },
    {
      projId: 6,
      projName: "",
      projDesc: "",
      projTags: "",
      projStar: false 
    }],
  repos: [{
      repoId: 1,
      repoName: "build-a-dreamhouse",
      repoDesc: "An interactive web game where the user is able to build their very own dream house or mojo dojo casa house.",
      repoTags: "netlify jamstack react",
      repoStar: true
    },
    {
      repoId: 2,
      repoName: "i-am-kenough",
      repoDesc: "A random quote generator meant to provide a moment of inspiration to get your day started off right.",
      repoTags: "react",
      repoStar: false
    },
    {
      repoId: 3,
      repoName: "which-barbie-are-you",
      repoDesc: "Ever wondered which barbie you are? Now's your chance! With this online quiz, learn which Barbie (or Ken) you are.",
      repoTags: "javascript html css",
      repoStar: true
    },
    {
      repoId: 4,
      repoName: "htthorsey",
      repoDesc: "HTTHORSEY - HTTP Status Codes as Portrayed by Horses",
      repoTags: "http status-codes gifs horses",
      repoStar: true
    }]
}];


const renderToDom = (divId, htmlOnDom) => {
  const targetDiv = document.querySelector(divId);
  targetDiv.innerHTML = htmlOnDom;
};

const renderHeader = () => {
  let domString = "";
  domString += `
    <ul class="nav justify-content-center">
    <i class="fa-solid fa-book-open" style="color: #E0218A;"></i>
    <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/index.html">Overview</a>
    </li>
    <i class="fa-solid fa-cube" style="color: #E0218A;"></i>
    <li class="nav-item">
    <a class="nav-link" href="/pages/packages.html">Packages</a>
    </li>
    <i class="fa-solid fa-chart-column" style="color: #E0218A;"></i>
    <li class="nav-item">
    <a class="nav-link" href="/pages/projects.html">Projects</a>
    </li>
    <i class="fa-solid fa-book" style="color: #E0218A;"></i>
    <li class="nav-item">
    <a class="nav-link" href="/pages/repos.html">Repos</a>
    </li>
  </ul>`
  
  renderToDom("#top-nav", domString);
};


const renderProfile = (array) => {
  let domString = "";

  for (const card of array) {
  domString += `
  <div class="card" style="width: 18rem;">
  <img src="${card.userImg}" class="card-img-top rounded-circle" alt="...">
  <div class="card-body">
    <h3>${card.name}</h3>
    <h5>${card.userName}</h5>
    <p class="card-text">${card.profBio}</p>
    <div class="info">
    <i class="fa-solid fa-location-dot" style="color: #E0218A;"></i><p>${card.location}</p>
    <i class="fa-solid fa-envelope" style="color: #E0218A;"></i><p>${card.email}</p>
    <i class="fa-solid fa-link" style="color: #E0218A;"></i><p>${card.link}</p>
    <i class="fa-brands fa-twitter" style="color: #E0218A;"></i><p>${card.twitter}</p>
    </div>
  </div>
</div>
  `
  }
  renderToDom("#prof-card", domString);
};

const renderFooter = () => {
  let domString = "";
  domString += `
  <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service">Terms</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement">Privacy</a>
  </li>
  <i class="fa-brands fa-github" style="color: #E0218A;"></i>
  <li class="nav-item">
    <a class="nav-link" href="https://github.com/security">Security</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="https://github.com/about">About</a>
  </li>
</ul>
  `
  renderToDom("#footer", domString);
};


const renderRepos = (array) => {
  let repoString = "";
  
  for (const card of array) {
    repoString += `<div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">${card.repoName}</h5>
      <p class="card-text">${card.repoDesc}</p>
      <p class="card-text"><small class="text-body-secondary">${card.repoTags}</small></p>
      <button type="button" class="btn btn-outline-light">Star</button>
    </div>
  </div>`
  }
  renderToDom("#main-container-repo", repoString)
}

const startApp = () => {
  renderHeader();
  renderProfile(profile);
  renderFooter();
  renderRepos(profile[0].repos);
}
startApp();
