const sor = new Sortable.default(
    //Referenciamos todos los container-tasks
    document.querySelectorAll('.col-tasks'),
    //Hacemos ordenables todos los article de las tareas
    { draggable: 'article' }
);
