
const profile = {
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
      packName: "Docker",
      packDesc: "A software platform used for building applications based on containers - small and lightweight execution environments",
      packTags: ["tag1", "tag2", "tag3"]
      },
      {
      packId: 2,
      packName: "Apache Maven",
      packDesc: "A default package manager used for the Java programming language and the java runtime environment.",
      packTags: ["tag1", "tag2", "tag3"]
    },
    {
      packId: 3,
      packName: "NuGet",
      packDesc: "A free and open source package manager used for the Microsoft development platforms including .NET.",
      packTags: ["tag1", "tag2", "tag3"]
    },
    {
      packId: 4,
      packName: "RubyGems",
      packDesc: "A standard format for distributing Ruby programs and libraries used for the Ruby programming language.",
      packTags: ["tag1", "tag2", "tag3"]
    },
    {
      packId: 5,
      packName: "npm",
      packDesc: "A package manager for Javascript, included with Node.js npm makes it easy for deveipers to share and reuse code.",
      packTags: ["tag1", "tag2", "tag3"]
    },
    {
      packId: 6,
      packName: "Containers",
      packDesc: "A single place for your team to manage Docker images and decide who can see and access your images.",
      packTags: ["tag1", "tag2", "tag3"]
    }],
  projects: [
    {
      projId: 1,
      projName: "The Ken Cloner",
      projDesc: "Ken fabulas Malibu totally hair Barbie imagination",
      projTags: "ken, cloning",
      projStar: false 
    },
    {
      projId: 2,
      projName: "Glitter Counter",
      projDesc: "Barbie Jeep totally whatever elit brush",
      projTags: "glitter, .Math",
      projStar: false 
    },
    {
      projId: 3,
      projName: "Everything Pink Generator",
      projDesc: "Tutti Skipper Paris vis girl denique",
      projTags: "pink",
      projStar: false 
    },
    {
      projId: 4,
      projName: "",
      projDesc: "",
      projTags: ["tag1", "tag2", "tag3"],
      projStar: false 
    },
    {
      projId: 5,
      projName: "",
      projDesc: "",
      projTags: ["tag1", "tag2", "tag3"],
      projStar: false 
    },
    {
      projId: 6,
      projName: "",
      projDesc: "",
      projTags: ["tag1", "tag2", "tag3"],
      projStar: false 
    }],
  repos: [{
      repoId: 1,
      repoName: "build-a-dreamhouse",
      repoDesc: "An interactive web game where the user is able to build their very own dream house or mojo dojo casa house.",
      repoTags: ["netlify", "jamstack", "react"],
      repoStar: true,
    },
    {
      repoId: 2,
      repoName: "i-am-kenough",
      repoDesc: "A random quote generator meant to provide a moment of inspiration to get your day started off right.",
      repoTags: ["react"],
      repoStar: false,
    },
    {
      repoId: 3,
      repoName: "which-barbie-are-you",
      repoDesc: "Ever wondered which barbie you are? Now's your chance! With this online quiz, learn which Barbie (or Ken) you are.",
      repoTags: ["javascript", "html", "css"],
      repoStar: true,
    },
    {
      repoId: 4,
      repoName: "htthorsey",
      repoDesc: "HTTHORSEY - HTTP Status Codes as Portrayed by Horses",
      repoTags: ["http status-codes", "gifs", "horses"],
      repoStar: true,
    }]
};

const repoTags = ["netlify", "jamstack", "react", "javascript", "html", "css"];


// ****** Functions to Render Common Elements Between Pages ****** 
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
  domString += `
  <div class="card" style="width: 18rem;">
  <img src="${profile.userImg}" class="card-img-top rounded-circle" alt="...">
  <div class="card-body">
    <h3>${profile.name}</h3>
    <h5>${profile.userName}</h5>
    <p class="card-text">${profile.profBio}</p>
    <div class="info">
    <div class="location">
        <i class="fa-solid fa-location-dot" style="color: #E0218A;"></i><p>${profile.location}</p>
      </div>
      <div class="email">
        <i class="fa-solid fa-envelope" style="color: #E0218A;"></i><p>${profile.email}</p>
      </div>
      <div class="web">
        <i class="fa-solid fa-link" style="color: #E0218A;"></i><p>${profile.link}</p>
      </div>
      <div class="twitter">
        <i class="fa-brands fa-twitter" style="color: #E0218A;"></i><p>${profile.twitter}</p>
      </div>
    </div>
  </div>
</div>
  `
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

// ****** Projects Page Specfic Functions ******
const tableRows = (array) => {
  let domString = "";  
  for (const key of array) {
    domString += `
    <tr>
      <th scope="row">${key.projName}</th>
      <td>${key.projDesc}</td>
      <td>${key.projTags}</td>
      <td>${key.projStar}</td>
    </tr>`
    };
  return domString;
};

const renderTable = (array) => {
  let domString = "";
  domString += `
    <table class="table table-dark table-striped" id="tRow">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Tag</th>
          <th scope="col">Favorite</th>
         </tr>
      </thead>
      <tbody>
       ${tableRows(array)}
      </tbody>
     </table>
  `
  if (document.body.id === "projBody") {
  renderToDom("#main-container-proj", domString);
  }
};

const renderProjForm = () => {
  let domString = "";
  domString += `
      <form>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <input type="text" class="form-control" id="description" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="tag" class="form-label">Tags</label>
        <input type="text" class="form-control" id="tag" aria-describedby="emailHelp">
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="favorite">
        <label class="form-check-label" for="favorite">Favorite</label>
      </div>
      <button type="submit" class="btn btn-primary" data-href="./projects.html" id="projSubmit">Submit</button>
      </form>
  `
 
  renderToDom("#form-container-proj", domString);
};

const newProj = (e) => { 
    e.preventDefault();

  const projObj = {
    projId: profile.projects.length + 1,
    projName: document.querySelector("#name").value,
    projDesc: document.querySelector("#description").value,
    projTags: document.querySelector("#tag").value,
    projStar: document.querySelector("#favorite").checked
  }

  profile.projects.push(projObj);
  console.log (profile.projects)
  
  if (document.body.id === "projBody") {
  renderTable(profile.projects);
  form.reset 
  }
};

const projEventListeners = () => {
  if (document.body.id === "projBody") {
   const projectForm = document.querySelector("#form-container-proj")
   projectForm.addEventListener("submit", newProj);
  }
};
// ****** Overview Page Specific Functions ******

//rendering main container/pinned repos card
const renderOverview = (array) => {
  let domString = "";
  for (const repo of array) {domString += `
    <div class="card" style="width: 20rem;">
            <div class="card-body">
                <h5 class="card-title">${repo.repoName}</h5>
                <p class="card-text">${repo.repoDesc}</p>
                <div id="starsTags">
                <i class="fa-solid fa-tag" style="color: #E0218A;"></i>
                    <div class="card-link"> ${repo.repoTags}</div>
                    <i class="fa-regular fa-star" style="color: #E0218A;"></i>
                    <div class="card-link"> ${repo.repoStar}</div>
                </div>
            </div>
        </div>`
}
  renderToDom("#main-container", domString)
}

//rendering form
const renderForm = () => {
  let domString = "";
  domString += `
  <div id="pinned-repo-form">
  <h2>Add a Pinned Repository</h2>
  <p style="color: white">Add a repository to the pinned section.</p></p>
  <form>
  <div class="mb-3">
    <label for="pinned-name" class="form-label">Pinned Repo Name:</label>
    <input type="text" 
    class="form-control" 
    id="pinned-name" 
    placeholder="Example repo name">
  </div>
  <div class="mb-3">
    <label for="pinned-descript" class="form-label">Description:</label>
<textarea class="form-control" id="pinned-descript" rows="4"></textarea>
  </div>
  <button type="submit" id="pinned-button" class="btn btn-pink">Add Pinned Repository</button>
  </form>
</div>`
  renderToDom("#form-container", domString);
}

const submitBtn = document.querySelector("#pinned-button");
const addRepo = document.querySelector("#form-container");

//creating new pinned repo with event listeners
const mainEventListener = () => {
const createRepo = (e) => {
  e.preventDefault(); 

    const newRepoObj = {
      repoId: profile.repos.length + 1,
      repoName: document.querySelector("#pinned-name").value,
      repoDesc: document.querySelector("#pinned-descript").value,
      repoTags: repoTags[Math.floor(Math.random()*repoTags.length)],
      repoStar: true,
    }
  profile.repos.push(newRepoObj);
  renderOverview(profile.repos);
  document.querySelector("form").reset();
}
addRepo.addEventListener("submit", createRepo);
}

// ****** Package Page Specific Functions ******

const renderPkgForm = () => {
  let pkgFormString = "";

    pkgFormString += `
    <form id="barb-form">
      <div class="mb-3">
        <label for="name" class="form-label">Project board name</label>
        <input type="text" class="form-control" id="name" placeholder="Name">
      </div>
      <div class="mb-3">
        <label for="Description" class="form-label">Description</label>
        <textarea class="form-control" id="desc" rows="3"></textarea>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
    `
    const formContainer = document.querySelector("#form-container-pkg");
    formContainer.innerHTML = pkgFormString; 
    document.querySelector("#barb-form").addEventListener("submit", createCard);
};

const createCard = (e) => {
  e.preventDefault();
  

  const nameInput = document.querySelector("#name");
  const descInput = document.querySelector("#desc")

  if (nameInput.value.trim() === "" || descInput.value.trim() === "") {
    alert("Please fill out all fields before hitting submit");
    return; 
  }
  

  const cardObj = {
    packName: nameInput.value,
    packDesc: descInput.value,
  };

  profile.packages.push(cardObj); 
  renderCardPkg(profile.packages);

  nameInput.value = "";
  descInput.value = "";
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

// ****** Repos Page Specific Functions ******

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
  renderToDom("#repo-card-container", repoString)
};
const renderRepoSearch = () => {
  let repoSearchString = ""
  repoSearchString += `
    <nav id="repo-search-bar" class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Find a repository..." aria-label="Search">
              <button class="btn btn-pink" type="submit">Search</button>
            </form>
          </div>
        </nav>
  `
  renderToDom("#repo-search", repoSearchString)
}
const renderRepoForm = () => {
  let repoFormString = ""
  repoFormString += `
  <form id="create-repo-form">
          <h5>Create a New Repository</h5>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Repository Name</label>
            <textarea class="form-control" id="new-repo-name" rows="1" required></textarea>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Description (optional)</label>
            <textarea class="form-control" id="new-repo-desc" rows="3"></textarea>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Tags (optional)</label>
            <textarea class="form-control" id="new-repo-tags" rows="1"></textarea>
          </div>
          <button id="create-repo-btn" type="submit" class="btn btn-pink">Create Repository</button>
        </form>
  `
  renderToDom("#form-container-repo", repoFormString)
}

const submitReposBtn = document.querySelector("#create-repo-btn")
const submitRepo = document.querySelector("#form-container-repo")

const reposEventListener = () => {
  const addNewRepo = (e) => {
    e.preventDefault();
  
    const newRepo = {
      repoId: profile.repos.length+1,
      repoName: document.querySelector("#new-repo-name").value,
      repoDesc: document.querySelector("#new-repo-desc").value,
      repoTags: document.querySelector("#new-repo-tags").value,
      repoStar: false
    }
    profile.repos.push(newRepo);
    renderRepos(profile.repos);
    form.reset();
  };
  
  submitRepo.addEventListener("submit", addNewRepo)
}


// ****** Function to Render Content to Sepcific Pages ******

const getData = () => {
  const page = document.body.id;
  switch (page) {
      case "main":
        renderOverview(profile.repos);
        renderForm();
        mainEventListener();
          break;
      case "packBody":
          renderCardPkg(profile.packages);
          renderPkgForm();
          renderRepos(profile.repos);
          break;
      case "projBody":
          renderTable(profile.projects);
          renderProjForm();
          projEventListeners();
          break;
      case "repoBody":
          renderRepos(profile.repos);
          renderRepoSearch();
          renderRepoForm();
          reposEventListener();
          break;
  }
};

const startApp = () => {
  renderHeader();
  renderProfile(profile);
  getData();
  renderFooter();
}
startApp();
