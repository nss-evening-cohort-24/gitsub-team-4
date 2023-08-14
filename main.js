
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
      projStar: true 
    },
    {
      projId: 4,
      projName: "Barbie World",
      projDesc: "Give your world a Barbie make-over",
      projTags: ["yolo", "barbie"],
      projStar: true
    },
    {
      projId: 5,
      projName: "Barbiepedia",
      projDesc: "Source of all we know about Barbie",
      projTags: ["knowledge", "info"],
      projStar: false 
    },
    {
      projId: 6,
      projName: "WWBD",
      projDesc: "What would Barbie do: Real Life Advice",
      projTags: ["help", "a", "tag3"],
      projStar: false 
    }],
  repos: [{
      repoId: 1,
      repoName: "build-a-dreamhouse",
      repoDesc: "An interactive web game where the user is able to build their very own dream house or mojo dojo casa house.",
      repoTags: ["netlify", "jamstack", "react"],
      repoStar: true
    },
    {
      repoId: 2,
      repoName: "i-am-kenough",
      repoDesc: "A random quote generator meant to provide a moment of inspiration to get your day started off right.",
      repoTags: ["react"],
      repoStar: false
    },
    {
      repoId: 3,
      repoName: "which-barbie-are-you",
      repoDesc: "Ever wondered which barbie you are? Now's your chance! With this online quiz, learn which Barbie (or Ken) you are.",
      repoTags: ["javascript", "html", "css"],
      repoStar: true
    },
    {
      repoId: 4,
      repoName: "htthorsey",
      repoDesc: "HTTHORSEY - HTTP Status Codes as Portrayed by Horses",
      repoTags: ["http status-codes", "gifs", "horses"],
      repoStar: true
    }]
};

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
  <div class="github">
    <i class="fa-brands fa-github" style="color: #E0218A;"></i>
  </div>
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
  
  const fav = (array) => {
    if (array.projStar) {
      return `#E0218A`
    } else {
      return `currentColor`
    }
  };

  for (const key of array) {
    domString += `
    <tr>
      <th scope="row">${key.projName}</th>
      <td>${key.projDesc}</td>
      <td>${key.projTags}</td>
      <td id="fav"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${fav(key)}" class="bi bi-star" viewBox="0 0 16 16">
      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/ id="star--${key.projId}">
      </svg>
    </td>
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
          <th style="color: #E0218A" scope="col">Name</th>
          <th style="color: #E0218A" scope="col">Description</th>
          <th style="color: #E0218A" scope="col">Tag</th>
          <th style="color: #E0218A" scope="col">Favorite</th>
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
      <h5 style="color: white">Create a New Project</h5>
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
      <button type="submit" class="btn btn-pink" data-href="./projects.html" id="projSubmit">Submit</button>
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

  const favStar = document.querySelector("#projBody");
    favStar.addEventListener("click", (e) => {
      if (e.target.id.includes("star--")) {
        const [, int] = e.target.id.split("--");

        for (const key of profile.projects) {
          if (key.projId === Number(int) && key.projStar) {
            key.projStar = false
          } else if (key.projId === Number(int) && !key.projStar)
            key.projStar = true
        };

        renderTable(profile.projects);
      }
    })
};
// ****** Overview Page Specific Functions ******

//rendering main container/overview card
const renderOverview = (array) => {
  let domString = "";
  for (const repo of array) {domString += `
    <div class="card" style="width: 26rem;">
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
  <h2>Create a new project</h2>
  <p>Coordinate, track, and update your work in one place, so projects stay transparent and on schedule.</p>
  <form>
  <div class="mb-3">
    <label for="pinned-name" class="form-label">Project board name</label>
    <input type="text" 
    class="form-control" 
    id="pinned-name" 
    placeholder="Example project name">
  </div>
  <div class="mb-3">
    <label for="pinned-descript" class="form-label">Description</label>
<textarea class="form-control" id="pinned-descript" rows="4"></textarea>
  </div>
  <button type="submit" id="pinned-button" class="btn btn-pink">Create Project</button>
  </form>
</div>`
  renderToDom("#form-container", domString);
}

const submitBtn = document.querySelector("#pinned-button");
const addRepo = document.querySelector("#form-container");

const mainEventListener = () => {
const createRepo = (e) => {
  e.preventDefault(); 

    const newRepoObj = {
      repoId: profile.repos.length + 1,
      repoName: document.querySelector("#pinned-name").value,
      repoDesc: document.querySelector("#pinned-descript").value,
      repoTags: "",
      RepoStar: "",
    }
  profile.repos.push(newRepoObj);
  renderOverview(profile.repos);
  form.reset();
}
addRepo.addEventListener("submit", createRepo);
}
//end of overview js

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
