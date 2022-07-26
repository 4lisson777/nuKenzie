import './style.css';
import ButtonTrash from '../../assets/buttonTrash.png';

const Card = ({
  transaction,
  listTransactions,
  setListTransactions,
  i,
  setFilteredList,
  setSum,
}) => {
  const { description, type, value } = transaction;

  const handleDelete = (arg) => {
    const newList = listTransactions.filter((tr, index) => index !== arg);
    setListTransactions([...newList]);
    setFilteredList([...newList]);
    setSum([...newList].reduce((acc, cur) => acc + cur.value, 0));
  };

  return (
    <li className="card">
      {type === 'Entrada' ? (
        <div className="card__container">
          <div>
            <div className="card__green"></div>
            <div className="card__description">
              <h1>{description}</h1>
              <p>Entrada</p>
            </div>
          </div>
          <div className="card__valueetrash">
            <span className="card__value">{`R$ ${value}`}</span>
            <figure className="card__trash" onClick={() => handleDelete(i)}>
              <img src={ButtonTrash} alt="trash" />
            </figure>
          </div>
        </div>
      ) : (
        <div className="card__container">
          <div>
            <div className="card__grey"></div>
            <div className="card__description">
              <h1>{description}</h1>
              <p>Despesa</p>
            </div>
          </div>
          <div className="card__valueetrash">
            <span className="card__value">{`R$ ${value}`}</span>
            <figure className="card__trash" onClick={() => handleDelete(i)}>
              <img src={ButtonTrash} alt="trash" />
            </figure>
          </div>
        </div>
      )}
    </li>
  );
};

export default Card;
