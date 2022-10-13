export function saveTaskInLocalStorage(description, date, tasks) {
    const newTask = {
        description: description,
        date: new Date(date).toLocaleDateString('pt-BR', {timeZone: 'UTC'}),
        id: Math.floor(Math.random() * 1000)
    }
    localStorage.setItem('@GoTasks', JSON.stringify([...tasks, newTask]));

}

export function removeTaskInLocalStorage(id, tasks){
    const filteredTasks = tasks.filter(task => task.id !== id)
    localStorage.setItem('@GoTasks', JSON.stringify(filteredTasks));

}

export function getTasks(){
    return JSON.parse(localStorage.getItem('@GoTasks')) || [];        
}
