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
      packName: "Something",
      packDesc: "This is really great and useful",
      packTags: "",
      },
      {
      packId: 2,
      packName: "This is another thing",
      packDesc: "You will not believe this",
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



const renderCardPkg = (array) => {
  let pkgString = "";

  for (const pack of array) {
    pkgString += `
      <div class="col-md-2 mb-3"> 
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${pack.packName}</h5>
            <p class="card-text">${pack.packDesc}</p>
            <a href="#" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    `;
  }
  renderToDom("#main-container-pkg", pkgString);
};

const renderPkgForm = (array) => {
  let pkgFormString = "";

  for (const form of array) {
    pkgFormString += `
    <div class="mb-3">
      <label for="${form.packName}" class="form-label">Name</label>
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name">
    </div>
    <div class="mb-3">
      <label for="${form.packDesc}" class="form-label">Description</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    `
    renderToDom("#form-container-pkg", pkgFormString);
  };
};




const startApp = () => {
  renderHeader();
  renderProfile(profile);
  renderCardPkg(profile[0].packages);
  renderPkgForm([profile[0].packages[0]]);
  renderFooter();
}
startApp();
