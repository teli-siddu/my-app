import React from 'react'
import classnames from 'classnames';

export default function OverflowMenu({ children, className, visibilityMap }) {

  return (
    <div className={className}>
    <button className="icon-button">
          More
    </button>
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

