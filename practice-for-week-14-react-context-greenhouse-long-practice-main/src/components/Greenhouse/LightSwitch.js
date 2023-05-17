import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';

function LightSwitch() {
  const {themeName, setThemeName} = useTheme();
  const handleClick = (e) => {
    const lightSwitch= e.target.className;
    if (lightSwitch === "on") setThemeName("day")
    else if (lightSwitch === "off") setThemeName("night")
  }

  return (
    <div className={`light-switch ${themeName}`} onClick={handleClick}>
      <div className="on">DAY</div>
      <div className="off">NIGHT</div>
    </div>
  );
}

export default LightSwitch;