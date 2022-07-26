import './style.css';

const Total = ({ sum }) => {
  return (
    <div className="total">
      <div className="total__valor">
        <h1>Valor total:</h1>
        <span>$ {sum}</span>
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  );
};

export default Total;
