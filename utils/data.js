import { BiBuilding } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";

export const Data = {
  Plans: [
    {
      plan: "Basic plan",
      amount: 499.99,
      package: "crypto",
    },
    {
      plan: "Expert plan",
      amount: 999.99,
      package: "crypto",
    },
    {
      plan: "Relluxe plan",
      amount: 4999.99,
      package: "crypto",
    },
    {
      plan: "Basic plan",
      amount: 999.99,
      package: "forex",
    },
    {
      plan: "Expert plan",
      amount: 4999.99,
      package: "forex",
    },
    {
      plan: "Relluxe plan",
      amount: 24999.99,
      package: "forex",
    },
  ],
  Legend: [
    {
      number: 8150,
      image: <BiBuilding style={{ width: "40px", height: "40px" }} />,
      details: "projects completed",
    },
    {
      number: 5223,
      image: <FaUsers style={{ width: "40px", height: "40px" }} />,
      details: "happy clients",
    },
    {
      number: 4522,
      image: <FaUserPlus style={{ width: "40px", height: "40px" }} />,
      details: "workers employed",
    },
  ],
};
