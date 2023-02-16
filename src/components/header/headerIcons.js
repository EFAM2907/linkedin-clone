import React from 'react'
import {Avatar} from '@material-ui/core'
import './styles.css'

export default function HeaderIcons({Icon, title, text, avatar}) {
  return (
    <div className="headerIcons">
        {Icon && <Icon className = 'iconBox' />}
        {avatar && <Avatar className = 'iconBox'/>}
        {title ? <h3>{title}</h3> : <h3 className = 'header__premium'> {text} </h3>}
    </div>
  )
}
