import { useEffect, useState } from "react";
import useMockedData from "../../mock/mockedData";
import List from "../common/list/List";
import ListRow from "../common/listRow/ListRow";
import "./Tickets.css";


const Tickets = () => {
  const [tickets, setTickets] = useState({});
  const { mockedData, fetchData } = useMockedData();

  useEffect(() => {
    if (!Object.values(tickets).length) fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!Object.values(tickets).length) setTickets(mockedData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mockedData]);

  return (
    <div className="tickets-container">
      <div className="tickets-header">
        <h1>Tickets Board</h1>
      </div>

      <div className="tickets-list">
        <List rowHeight={100} bufferedItems={10} gap={20}>
          {Object.values(tickets).map((item) => (
            <ListRow item={item} key={item.id} />
          ))}
        </List>
      </div>
    </div>
  );
};

export default Tickets;
