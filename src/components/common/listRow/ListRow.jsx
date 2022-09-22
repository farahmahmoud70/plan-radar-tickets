import "./ListRow.css";
const ListRow = ({ item, ...restProps }) => {
  return (
    <li key={item.id} {...restProps}>
      <div className="ticket-container">
        <div className="subject-priority-container">
          <div className="subject">{item.subject}</div>
          <div className={`${item.priority.toLowerCase()}`}>
            {item.priority}
          </div>
        </div>
        <div className="status">{item.status}</div>
        <div className="description">{item.description}</div>
      </div>
    </li>
  );
};

export default ListRow;
