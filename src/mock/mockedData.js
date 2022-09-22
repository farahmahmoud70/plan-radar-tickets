import { useState } from "react";
import { priorities, statuses } from "../constants/mockedContants";
import { getRandomInt } from "../helper/randomNumHelper";

const useMockedData = () => {
  let [mockedData, setMockedData] = useState({});

  const fetchData = () => {
    [...Array(16000)].forEach((_, index) => {
      const randomPriority = getRandomInt(0, priorities.length - 1);
      const randomStatus = getRandomInt(0, statuses.length - 1);
      mockedData = {
        ...mockedData,
        [`${index}`]: {
          id: index,
          subject: `Subject ${index + 1}`,
          priority: priorities[randomPriority],
          status: statuses[randomStatus],
          description: `This is a description for the ticket with the id ${index}, Subject ${
            index + 1
          } subject, ${priorities[randomPriority]} priority and ${
            statuses[randomStatus]
          } status`,
        },
      };
    });
    setMockedData(mockedData);
  };

  return { mockedData, fetchData };
};

export default useMockedData;
