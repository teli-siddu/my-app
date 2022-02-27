import React from 'react'
import classnames from 'classnames';
import {FaBeer } from 'react-icons/fa'

export default function OverflowMenu({ children, className, visibilityMap }) {

  return (
    <div className={className}>
    <span className="icon-button">
          <FaBeer  />
    </span>
    {React.Children.map(children, (child) => {
          if (!visibilityMap[child.props["targetId"]]) {
            return (
              <div className='nav-item'>
                {React.cloneElement(child, {
                  className: classnames(child.className, "in-oveflow")
                })}
              </div>
            );
          }
          return null;
        })}
    </div>
  )
}

