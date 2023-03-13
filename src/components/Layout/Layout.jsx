import React from 'react'

import { useSelector } from "react-redux";
import SidebarV2 from '../Sidebar/SidebarV2';


const Layout = () => {

  const isLoading = useSelector((state) => state.auth.isLoading);

  return (
    <>
    { isLoading ? 
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div> :
      <SidebarV2 />
    }
    </>
  )
}

export default Layout
