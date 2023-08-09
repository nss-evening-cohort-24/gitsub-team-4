const profile = [{
  name: "Barbie Midge",
  userName: "barbie23",
  userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0WJIg65PcoLHqLwk-_78Bf9baGT_0ox3FKfRKhYnH6I7M_HZhGqzx-ES388PYF6qpIo4&usqp=CAU",
  profBio: "Living in a Barbie world",
  location: "Barbieland, CA",
  email: "barbie_23@aol.com",
  link: "https://www.about.mattel.com",
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
      repoName: "",
      repoDesc: "",
      repoTags: "",
      repoStar: ""
    },
    {
      repoId: 2,
      repoName: "",
      repoDesc: "",
      repoTags: "",
      repoStar: ""
    },
    {
      repoId: 3,
      repoName: "",
      repoDesc: "",
      repoTags: "",
      repoStar: ""
    },
    {
      repoId: 4,
      repoName: "",
      repoDesc: "",
      repoTags: "",
      repoStar: ""
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
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="/index.html">Overview</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/pages/packages.html">Packages</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/pages/projects.html">Projects</a>
    </li>
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
      <p>${card.location}</p>
      <p>${card.email}</p>
      <p>${card.link}</p>
      <p>${card.twitter}</p>
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
  <i class="fa-brands fa-github" style="color: #26537e;"></i>
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


const startApp = () => {
  renderHeader();
  renderProfile(profile);
  renderFooter();
}
startApp();
