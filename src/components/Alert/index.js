import { FiX } from 'react-icons/fi';
import './alert.css';

export function Alert({ message, closeAlert }) {
    return (
        <div className="alert-container">
            <header className="alert-header">
                <h2 className="title">Ops...</h2>
                <FiX
                    size={20}
                    color="#FFF"
                    className='icon-class'
                    onClick={() => closeAlert(false)}
                />
            </header>
            <p className='message'>
                {message}
            </p>

        </div>
    )
}