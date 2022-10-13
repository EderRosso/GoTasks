import { useEffect, useState } from 'react';
import { saveTaskInLocalStorage, getTasks, removeTaskInLocalStorage } from './Storage';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Button } from './components/Button';
import { TaskCounter } from './components/TaskCounter';
import { Table } from './components/Table';
import { Modal } from './components/Modal';
import { Alert } from './components/Alert';


import './css/index.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [tasksCounter, setTasksCounter] = useState([]);
  const [statusMessage, setStatusMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState('');

  function loadTasks() {
    const allTasks = getTasks();

    if (allTasks.length === 0) {
      setStatusMessage('Você não tem tarefas!');
    } else {
      setStatusMessage('');
    }

    setTasksCounter(allTasks.length);
    setTasks(allTasks);
  }

  function createTask(description, date) {
    if (!description || !date) {
      setShowAlert(true);
      setMessageAlert('Preencha todos os campos!');
      return;
    }

    saveTaskInLocalStorage(description, date, tasks);
    loadTasks();
    setShowModal(false);
  }

  function closeModal() {
    setShowModal(false);
  }

  function removeTask(id) {
    removeTaskInLocalStorage(id, tasks);
    loadTasks();
  }

  useEffect(() => {
    loadTasks()
  }, []);

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 4000);
    }
  }, [showAlert]);

  return (
    <>
      <div className="container">
        <Header />
        <main className="content">
          <div className="main-header">
            <Button
              onClick={() => { setShowModal(true) }}
              className="btn-new-task"
              title="+ Nova tarefa"
            />
            <TaskCounter tasks={tasksCounter} />
          </div>

          <Table
            tasks={tasks}
            removeTask={removeTask}
          />
          <h3 className="message-status">{statusMessage}</h3>
        </main>

        <Footer />

      </div>

      {
        showModal && (
          <Modal
            closeModal={closeModal}
            createTask={createTask}
          />
        )
      }

      {
        showAlert && (
          <Alert message={messageAlert} closeAlert={setShowAlert} />
        )
      }
    </>
  );
}

export default App;
