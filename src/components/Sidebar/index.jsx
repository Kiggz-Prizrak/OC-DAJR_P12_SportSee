import './index.css';


/**
 * Component for showing the sidebar.
 *
 * @component
 * 
 */

export default function Sidebar() {
  return (
    <div className='sidebarContainer'>
      <div className='iconsList'>
        <span>
          <i className="fa-solid fa-person-walking"></i>
        </span>
        <span>
          <i className="fa-solid fa-person-swimming"></i>
        </span>
        <span>
          <i className="fa-solid fa-person-biking"></i>
        </span>
        <span>
          <i
            className="fa-solid fa-dumbbell"
            style={{ transform: "rotate(45deg)" }}
          ></i>
        </span>
      </div>
      <p>Copiryght, SportSee 2020</p>
    </div>
  );
}