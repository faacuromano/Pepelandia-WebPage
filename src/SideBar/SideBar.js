import React from 'react';

import "./SideBar.css"

const SideNav = (props) => {
return (
<div className="sidenav">
   <a className='SideNavLabel' href="#section">Series 1</a>
   <a className='SideNavLabel' href="#section">Series 2</a>
   <a className='SideNavLabel' href="#section">Series 3</a>
   <a className='SideNavLabel' href="#section">Series 4</a>
</div>
);
};
export default SideNav;