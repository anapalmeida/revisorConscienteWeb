import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import './style.css';

function ExampleTextArea() {
  const trash = <FontAwesomeIcon icon={faTrashAlt} />;

  function formHandler(e) {
    e.preventDefault();
  }

  return (
    <div className="textAreaContainer">
      <form>
        <div className="textAreaHeader">
          <div className="textAreaHeaderActions">
            <div className="textAreaHeaderActionsIdiom">
              <select>
                <option value="es">Espanhol</option>
                <option value="pt-br">Português (Brasil)</option>
              </select>
            </div>

            <div className="textAreaHeaderActionsDelete">
              <i>{trash}</i>
              <input type="reset" id="delete" value="Excluir texto" />
            </div>
          </div>
        </div>
        <textarea></textarea>
      </form>
    </div>
  );
}

export default ExampleTextArea;
