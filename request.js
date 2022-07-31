const API_URL = "https://my-json-server.typicode.com/DianaGC97/db.json/db";

axios
  .get(API_URL)
  .then((res) => {
    console.log('res::', res)
    showAllTasks(res.data.dates)
  })
  .catch((err) => console.error(err));

const showAllTasks = (data) => {
  data.map((task) => {
    console.log(task.title)
    createTask(task)
  });
};

const createTask = (task) => {
  let newTask = document.createElement("article");
  newTask.classList.add("new-card");


  let title = document.createElement("h3");
  title.classList.add("new-card__title");
  title.innerText = task.title;


  let responsible = document.createElement("p");
  responsible.classList.add("new-card__responsible");
  responsible.innerHTML = `<span class="new-card__responsible--tag-creator">Responsable:</span> ${task.person}`;


  let details = document.createElement("p");
  details.classList.add("new-card__details");
  details.innerHTML = `<span class="new-card__details--task-details">Descripción:</span> ${task.description} `;


  let date = document.createElement("p");
  date.classList.add("new-card__date");
  date.innerHTML = `<span class =new-card__date--tag-date">Plazo</span> ${dateFormat(task.date)}`;


  let create = document.createElement("p");
  create.classList.add("new-card__date");
  create.innerHTML = `<span class="new-card__date--tag-date">Creación:</span> ${dateFormat(
    task.cate
  )}`;

  newTask.appendChild(title);
  newTask.appendChild(responsible);
  newTask.appendChild(details);
  newTask.appendChild(date);
  newTask.appendChild(create);


  let columnRun = document.querySelector("#runTasks");
  let columnProcess = document.querySelector("#processTasks");
  let columnMade = document.querySelector("#madeTasks");


  if (task.state === "run") {
    columnRun.appendChild(newTask);
  }
  if (task.state === "process") {
    columnProcess.appendChild(newTask);
  }
  if (task.state === "finished") {
    columnMade.appendChild(newTask);
  }
};
