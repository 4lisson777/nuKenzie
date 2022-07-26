import Header from '../Header';
import Form from '../Form';
import List from '../List';
import Filters from '../Filters';
import Total from '../TotalMoney';
import Empty from '../Empty';
import './style.css';
import { useState } from 'react';

const Home = ({ setIsLoggedIn, listTransactions, setListTransactions }) => {
  const [filteredList, setFilteredList] = useState(listTransactions);
  const [sum, setSum] = useState(
    listTransactions.reduce((acc, cur) => acc + cur.value, 0),
  );

  return (
    <div className="home">
      <div className="home__header">
        <Header setIsLoggedIn={setIsLoggedIn} />
      </div>
      <div className="home__main">
        <div>
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            setFilteredList={setFilteredList}
            setSum={setSum}
          />
          {listTransactions.length === 0 ? <div></div> : <Total sum={sum} />}
        </div>
        <div className="home__filterselist">
          <Filters
            listTransactions={listTransactions}
            setFilteredList={setFilteredList}
            filteredList={filteredList}
          />
          {listTransactions.length === 0 ? (
            <div>
              <h1 className="list__empty">
                Você ainda não possui nenhum lançamento
              </h1>
              <Empty />
              <Empty />
              <Empty />
            </div>
          ) : (
            <List
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
              filteredList={filteredList}
              setFilteredList={setFilteredList}
              setSum={setSum}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
