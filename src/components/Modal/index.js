import { useState } from 'react';
import { Button } from '../Button';
import { FormGroup } from './FormGroup';

import './modal.css';

export function Modal({ closeModal, createTask }) {
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    return (
        <div className="modal-background">
            <article className="modal-container">
                <h2 className="title-modal">Criar uma nova tarefa</h2>

                <form>
                    <FormGroup
                        type="text"
                        id="description"
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        label="Descrição da tarefa"
                    />
                    <FormGroup
                        type="date"
                        id="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        label="Data"
                    />


                    <div className="buttons-modal">
                        <Button
                            onClick={() => closeModal()}
                            className="btn-cancel"
                            title="Cancelar"
                        />
                        <Button
                            onClick={() => createTask(description, date)}
                            className="btn-save"
                            title="Salvar"
                        />
                    </div>
                </form>
            </article>
        </div>
    )
}