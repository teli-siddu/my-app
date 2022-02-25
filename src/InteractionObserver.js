import React, {useRef,useState,useEffect} from 'react'
import classnames from "classnames";
export default function IntersectionObserverWrapper({ children }){
    // const classes = useIntersectionStyles();
    const navRef = useRef(null);
    const [visibilityMap, setVisibilityMap] = useState({});
    const options= {
        root: navRef.current,
        threshold: 1
      }
    const handleIntersection = (entries) => {
      console.log(entries);
        const updatedEntries = {};
        entries.forEach((entry) => {
          const targetid = entry.target.dataset.targetid;
          // Check if element is visibile within container 
          if (entry.isIntersecting) {
            updatedEntries[targetid] = true;
          } else {
            updatedEntries[targetid] = false;
          }
        });
        // Overwrite previous state values with current state
        setVisibilityMap((prev) => ({
          ...prev,
          ...updatedEntries
        }));
    }
    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection,options);
        // We are addting observers to child elements of the container div
        // with ref as navRef. Notice that we are adding observers
        // only if we have the data attribute targetid on the child element
        Array.from(navRef.current.children).forEach((item) => {
          if (item.dataset.targetid) {
            observer.observe(item);
          }
        });
        return () => {
           observer.disconnect();
        }
      }, []);
      return (
        <div className="wrapper" ref={navRef}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          className: classnames(child.props.className, {
            "visible": !!visibilityMap[child.props["data-targetid"]],
            "in-visible": !visibilityMap[child.props["data-targetid"]]
          })
        });
      })}
      {/* <OverflowMenu
        visibilityMap={visibilityMap}
        className={classes.overflowStyle}
      >
        {children}
      </OverflowMenu> */}
    </div>
      );
}
