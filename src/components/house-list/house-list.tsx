import HouseCard from "../house-card";
import "./list.style.css";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
const HouseList = () => {
  const { data } = useSelector((state: RootState) => state.data);
  return (
    <div className="list-container">
      {data.map((item) => (
        <HouseCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default HouseList;
