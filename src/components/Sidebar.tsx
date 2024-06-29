
import "./Sidebar.scss";
import imgUrl from '../assets/logo.svg'

export const Sidebar = () => {
  return (
    <div className='sidebar h-full flex flex-col '>
      <div className="header flex justify-center">
        <img src={imgUrl} alt="img" style={{ height: '30px' }} />
      </div>
      <ul className="menu-lists">
        <li id="profile" className="nav-item">
          <a id="pills-user-tab" className=" mb-2 nav-link">
            <i className="ri-user-2-line">
            </i>
          </a>
        </li>
        <li id="profile" className="nav-item">
          <a id="pills-user-tab" className=" mb-2 nav-link">
            <i className="ri-message-3-line">
            </i>
          </a>
        </li>
        <li id="profile" className="nav-item">
          <a id="pills-user-tab" className=" mb-2 nav-link">
            <i className="ri-group-line">
            </i>
          </a>
        </li>
        <li id="profile" className="nav-item">
          <a id="pills-user-tab" className=" mb-2 nav-link">
            <i className="ri-settings-2-line">
            </i>
          </a>
        </li>
      </ul>
    </div>
  )
}
