import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

import { useSelector } from "react-redux";


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
      <Sidebar />
    }
    </>
  )
}

export default Layout
