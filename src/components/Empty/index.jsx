import './style.css';

const Empty = () => {
  return (
    <div className="empty__container">
      <div className="empty__indicator"></div>
      <div className="empty__bars">
        <span className="top"></span>
        <span className="bottom"></span>
      </div>
    </div>
  );
};

export default Empty;
