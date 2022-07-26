import './style.css';
import { useState } from 'react';

const Filters = ({ listTransactions, setFilteredList, filteredList }) => {
  const [todos, setTodos] = useState(true);
  const [entradas, setEntradas] = useState(false);
  const [despesas, setDespesas] = useState(false);

  const handleFilter = (arg) => {
    arg === 'Todos'
      ? setFilteredList(listTransactions)
      : arg === 'Entradas'
      ? setFilteredList(listTransactions.filter((tr) => tr.type === 'Entrada'))
      : setFilteredList(listTransactions.filter((tr) => tr.type === 'Despesa'));

    handleButtonStyle(arg);
  };

  const handleButtonStyle = (arg) => {
    if (arg === 'Todos') {
      setTodos(true);
      setEntradas(false);
      setDespesas(false);
    }
    if (arg === 'Entradas') {
      setTodos(false);
      setEntradas(true);
      setDespesas(false);
    }
    if (arg === 'Despesas') {
      setTodos(false);
      setEntradas(false);
      setDespesas(true);
    }
  };

  return (
    <div className="filters">
      <h1>Resumo financeiro</h1>
      <div
        className="filters__buttons"
        onClick={(event) => {
          handleFilter(event.target.innerText);
        }}
      >
        <button
          className={todos ? 'filters__button--active' : 'filters__button'}
        >
          Todos
        </button>
        <button
          className={entradas ? 'filters__button--active' : 'filters__button'}
        >
          Entradas
        </button>
        <button
          className={despesas ? 'filters__button--active' : 'filters__button'}
        >
          Despesas
        </button>
      </div>
    </div>
  );
};

export default Filters;
