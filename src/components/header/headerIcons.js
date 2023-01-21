import React from 'react'

export default function HeaderIcons({Icon, title}) {
  return (
    <div>
        {Icon && <Icon className = 'iconBox' />}
        {<h4>{title}</h4>}
    </div>
  )
}
