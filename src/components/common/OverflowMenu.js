import React from 'react'
import classnames from 'classnames';
import {BiDotsVerticalRounded } from 'react-icons/bi'

export default function OverflowMenu({ children, className, visibilityMap }) {

  return (
    <div className={className}>
    <span className="icon-button">
          <BiDotsVerticalRounded  />
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

