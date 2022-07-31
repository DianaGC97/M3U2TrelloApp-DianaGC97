const form = document.querySelector('#formNewTask');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const formData = ev.target;
    // const responsable = formData.responsibleTask.value;
    const data = {
        title: formData.titleTask.value,
        person: formData.responsibleTask.value,
        description: formData.descriptionTask.value,
        date: formData.dateTask.value,
        created: Number(moment().format("X")),
        state: 'run'
    };


    axios.post(`${API_URL}/tasks/dates`, data)
        .then((res) => {
            createTask(res.data);
            formData.reset();
        })
        .catch((err) => console.error(err));


});