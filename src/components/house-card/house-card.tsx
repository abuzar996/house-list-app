import "./card.style.css";
import { colourNameToHex } from "../../utilz/color-checker";
interface HouseCardProps {
  name: string;
  founder: string;
  animal: string;
  houseColours: string;
}
const HouseCard: React.FC<HouseCardProps> = ({
  name,
  founder,
  animal,
  houseColours,
}) => {
  let [color1, color2] = houseColours.split(" and ");
  const colorCheck = colourNameToHex(color1);
  const colorCheck2 = colourNameToHex(color2);
  if (!colorCheck || !colorCheck2) {
    (color1 = "white"), (color2 = "black");
  }
  return (
    <div className="card-container text-small">
      <div className="card-header">
        <label className="text-large">{name}</label>
        <label>{animal}</label>
      </div>
      <div
        className="card-house-color"
        style={{
          backgroundImage: `linear-gradient(to right, ${color1}, ${color2}`,
        }}
      ></div>
      <div className="house-owner-info">
        <label>Founder:</label>
        <label className="text-large">{founder}</label>
      </div>
    </div>
  );
};

export default HouseCard;
