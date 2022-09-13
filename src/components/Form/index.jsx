import { useState } from 'react';
import './style.css';

function Form({
  listTransactions,
  setListTransactions,
  setFilteredList,
  setSum,
}) {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);
  const [type, setType] = useState('Entrada');

  const handleTransactions = () => {
    const newTransaction = {
      description: description,
      type: type,
      value: type === "Despesa" ? Number(-1*value) : Number(value),
    };
    setListTransactions([...listTransactions, newTransaction]);
    setFilteredList([...listTransactions, newTransaction]);
    setSum(
      [...listTransactions, newTransaction].reduce(
        (acc, cur) => acc + cur.value,
        0,
      ),
    );
  };

  return (
    <form
      className="form"
      onSubmit={(event) => handleTransactions(event.preventDefault())}
    >
      <div className="form__descricao">
        <legend>Descrição</legend>
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Digite aqui sua descrição"
        />
        <label>Ex: Compra de roupas</label>
      </div>
      <div className="form__valoretipo">
        <div className="form__valor">
          <legend>Valor</legend>
          <div className="valor__input">
            <input
              type="number"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
            <span>R$</span>
          </div>
        </div>
        <div className="form__tipo">
          <legend>Tipo de valor</legend>
          <select
            name="type"
            id="type"
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </div>
      </div>
      <button className="form__submit" type="submit">
        Inserir Valor
      </button>
    </form>
  );
}

export default Form;
