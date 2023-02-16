import React from 'react'
import HeaderIcons from './headerIcons'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import DialpadIcon from '@material-ui/icons/Dialpad';
import SearchIcon from '@material-ui/icons/Search';
import './styles.css';

export default function Header() {
  return (
    <header className="header">
     <div className="nav">
      <LinkedInIcon className="logo-Link" />
       <div className='Search'>
        {/* <HeaderIcons Icon={SearchIcon}/> */}
        <SearchIcon />
         <input type='search' placeholder= 'Buscar' />
          </div> 
            <HeaderIcons Icon={HomeIcon} title ='Home'/>
             <HeaderIcons Icon={ChatIcon} title ='Chat'/>
              <HeaderIcons Icon={BusinessCenterIcon} title ='Business'/>
               <HeaderIcons Icon={NotificationsIcon} title ='Notificate'/>
                <HeaderIcons Icon={SupervisorAccountIcon} title ='SuperVisor'/>
                 <HeaderIcons avatar title ='Yo' />
                 <HeaderIcons Icon={DialpadIcon} title ='Producto'/>
                  <HeaderIcons  text ='Prueba Premium Gtris este Mes'/>
     
      </div>
    </header>
  )
}
