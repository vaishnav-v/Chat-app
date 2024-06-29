
import { Sidebar } from './components/Sidebar'
import './Layout.css'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
    return (
        <div className="layout w-svw flex flex-col" style={{ height: '100vh',backgroundColor:'rgb(241 245 249)'}}>
            {/* <div className="top-navbar flex w-full bg-blue-500">
                <div className="nav-item">
                   Logo
                </div>
                <div className="nav-item">
                    Home
                </div>
            </div> */}
            <div className="bottom flex flex-1 overflow-hidden">
                <div style={{width :'75px'}} className="left-sidebar overflow-hidden bg-white">
                <Sidebar/>
                </div>
                <div className="right-content flex-1">
                   <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}
