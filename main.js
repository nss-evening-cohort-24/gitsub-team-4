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
      packTags: ""
      },
      {
      packId: 2,
      packName: "",
      packDesc: "",
      packTags: ""
    },
    {
      packId: 3,
      packName: "",
      packDesc: "",
      packTags: ""
    },
    {
      packId: 4,
      packName: "",
      packDesc: "",
      packTags: ""
    },
    {
      packId: 5,
      packName: "",
      packDesc: "",
      packTags: ""
    },
    {
      packId: 6,
      packName: "",
      packDesc: "",
      packTags: ""
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
      <div class="location">
        <i class="fa-solid fa-location-dot" style="color: #E0218A;"></i><p>${card.location}</p>
      </div>
      <div class="email">
        <i class="fa-solid fa-envelope" style="color: #E0218A;"></i><p>${card.email}</p>
      </div>
      <div class="web">
        <i class="fa-solid fa-link" style="color: #E0218A;"></i><p>${card.link}</p>
      </div>
      <div class="twitter">
        <i class="fa-brands fa-twitter" style="color: #E0218A;"></i><p>${card.twitter}</p>
      </div>
    </div>
  </div>
</div>
  `
  }
  renderToDom("#prof-card", domString);
};

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
    projId: profile[0].projects.length + 1,
    projName: document.querySelector("#name").value,
    projDesc: document.querySelector("#description").value,
    projTags: document.querySelector("#tag").value,
    projStar: document.querySelector("#favorite").checked
  }

  profile[0].projects.push(projObj);
  console.log (profile[0].projects)
  
  if (document.body.id === "projBody") {
  renderTable(profile[0].projects);
  form.reset 
  }
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

const projEventListeners = () => {
    if (document.body.id === "projBody") {
     const projectForm = document.querySelector("#form-container-proj")
     projectForm.addEventListener("submit", newProj);
    }
};
  
const getData = () => {
  const page = document.body.id;
  switch (page) {
      case "main":
          break;
      case "packBody":
          break;
      case "projBody":
          renderTable(profile[0].projects);
          renderProjForm();
          projEventListeners();
          break;
      case "repoBody":
          break;
  }
};

const startApp = () => {
  renderHeader();
  renderProfile(profile);
  getData();
  renderFooter()
};

startApp();
