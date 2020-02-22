import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import './Sidebar.scss'

function Sidebar(props) {
  const { onClick, sidebarItems, activeItem } = props;
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const sidebarItemsList = sidebarItems.map(item => (
    <Button key={item} id={item} className={`btn-link ${activeItem === item && 'btn-link--active'}`} onClick={onClick}>
      {item}
    </Button>
  ));
  return (
    <div className={`sidebar-wrapper ${isOpen && 'sidebar-wrapper--open'}`}>
      {isOpen && sidebarItemsList}
      <span className="sidebar-toggle">
        <Button className={`sidebar-toggle-btn ${isOpen && 'sidebar-toggle-btn--active'}`} onClick={() => toggleSidebar()}>
          <svg width="8" height="15" viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L13.5 13.5L1 26" stroke="#999" strokeWidth="2" />
          </svg>
        </Button>
      </span>
    </div>
  )
}

Sidebar.propTypes = {
  sidebarItems: PropTypes.array,
  onClick: PropTypes.func,
}

export default Sidebar

