import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

import './Sidebar.css'

const Sidebar = () => {
    const [show, setShow] = useState(false);

    return (
      <main className={show ? 'space-toggle' : null}>
        <Header show={show} setShow={setShow}/>
  
        <aside className={`sidebar ${show ? 'show' : null}`}>
          <nav className='nav'>
            <div>
              <Link to='/' className='nav-logo'>
                <span className={`nav-logo-icon`}>
                    <svg
                        className="svg-icon"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="GrassOutlinedIcon"
                        >
                        <path d="M12 20H2v-2h5.75c-.73-2.81-2.94-5.01-5.75-5.74.64-.16 1.31-.26 2-.26 4.42 0 8 3.58 8 8zm10-7.74c-.64-.16-1.31-.26-2-.26-2.93 0-5.48 1.58-6.88 3.93.29.66.53 1.35.67 2.07.13.65.2 1.32.2 2h8v-2h-5.75c.74-2.81 2.95-5.01 5.76-5.74zm-6.36-1.24c.78-2.09 2.23-3.84 4.09-5C15.44 6.16 12 9.67 12 14v.02c.95-1.27 2.2-2.3 3.64-3zm-4.22-2.17C10.58 6.66 8.88 4.89 6.7 4 8.14 5.86 9 8.18 9 10.71c0 .21-.03.41-.04.61.43.24.83.52 1.22.82.21-1.18.65-2.29 1.24-3.29z"></path>
                    </svg>
                </span>
                <span className='nav-logo-name'>Much Erp</span>
              </Link>
  
              <div className='nav-list'>
                <Link to='/species' className='nav-link'>
                  <span className='nav-link-icon'>
                    <svg
                        className="svg-icon"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="GrassOutlinedIcon"
                        >
                        <path d="M12 20H2v-2h5.75c-.73-2.81-2.94-5.01-5.75-5.74.64-.16 1.31-.26 2-.26 4.42 0 8 3.58 8 8zm10-7.74c-.64-.16-1.31-.26-2-.26-2.93 0-5.48 1.58-6.88 3.93.29.66.53 1.35.67 2.07.13.65.2 1.32.2 2h8v-2h-5.75c.74-2.81 2.95-5.01 5.76-5.74zm-6.36-1.24c.78-2.09 2.23-3.84 4.09-5C15.44 6.16 12 9.67 12 14v.02c.95-1.27 2.2-2.3 3.64-3zm-4.22-2.17C10.58 6.66 8.88 4.89 6.7 4 8.14 5.86 9 8.18 9 10.71c0 .21-.03.41-.04.61.43.24.83.52 1.22.82.21-1.18.65-2.29 1.24-3.29z"></path>
                    </svg>
                  </span>
                  <span className='nav-link-name'>Campo</span>
                </Link>
                <Link to='/permisos' className='nav-link'>
                  <span className='nav-link-icon'>
                    <svg
                        className="svg-icon menu-icon"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="SettingsSuggestOutlinedIcon"
                    >
                        <path d="M10 13c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm8.5-2 1.09-2.41L22 5.5l-2.41-1.09L18.5 2l-1.09 2.41L15 5.5l2.41 1.09L18.5 9zm2.78 3.72L20.5 11l-.78 1.72-1.72.78 1.72.78.78 1.72.78-1.72L23 13.5l-1.72-.78zM16.25 14c0-.12 0-.25-.01-.37l1.94-1.47-2.5-4.33-2.24.94c-.2-.13-.42-.26-.64-.37L12.5 6h-5l-.3 2.41c-.22.11-.43.24-.64.37l-2.24-.95-2.5 4.33 1.94 1.47c-.01.12-.01.25-.01.37s0 .25.01.37l-1.94 1.47 2.5 4.33 2.24-.94c.2.13.42.26.64.37l.3 2.4h5l.3-2.41c.22-.11.43-.23.64-.37l2.24.94 2.5-4.33-1.94-1.47c.01-.11.01-.24.01-.36zm-1.42 3.64-1.73-.73c-.56.6-1.3 1.04-2.13 1.23L10.73 20H9.27l-.23-1.86c-.83-.19-1.57-.63-2.13-1.23l-1.73.73-.73-1.27 1.49-1.13c-.12-.39-.18-.8-.18-1.23 0-.43.06-.84.18-1.23l-1.49-1.13.73-1.27 1.73.73c.56-.6 1.3-1.04 2.13-1.23L9.27 8h1.47l.23 1.86c.83.19 1.57.63 2.13 1.23l1.73-.73.73 1.27-1.49 1.13c.12.39.18.8.18 1.23 0 .43-.06.84-.18 1.23l1.49 1.13-.73 1.29z"></path>
                    </svg>
                  </span>
                  <span className='nav-link-name'>Sistema</span>
                </Link>
                <Link to='/dashboard' className='nav-link'>
                  <span className='nav-link-icon'>
                    <svg
                        className="svg-icon menu-icon"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="DashboardCustomizeOutlinedIcon"
                    >
                        <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zm8-2v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm13-2h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></path>
                    </svg>
                  </span>
                  <span className='nav-link-name'>Dashboard</span>
                </Link>
              </div>
            </div>

          </nav>
        </aside>
  
      </main>
    );
}

export default Sidebar
