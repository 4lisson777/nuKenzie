import Card from '../Card';
import './style.css';

const List = ({
  listTransactions,
  setListTransactions,
  filteredList,
  setFilteredList,
  setSum,
}) => {
  return (
    <ul className="list">
      {filteredList.map((transaction, index) => {
        return (
          <Card
            transaction={transaction}
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            key={index}
            i={index}
            setFilteredList={setFilteredList}
            setSum={setSum}
          />
        );
      })}
    </ul>
  );
};

export default List;
