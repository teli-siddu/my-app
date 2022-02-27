import React, {useRef,useState,useEffect} from 'react'
import classnames from "classnames";
import OverflowMenu from './OverflowMenu';
export default function IntersectionObserverWrapper({ children }){
    // const classes = useIntersectionStyles();
    const navRef = useRef(null);
    const [visibilityMap, setVisibilityMap] = useState({});
    const [isOverflow,setIsOverflow]=useState(false);
    const handleIntersection = (entries) => {
      console.log(entries);
      setIsOverflow(false);
        const updatedEntries = {};
        entries.forEach((entry) => {
          const targetid = entry.target.dataset.targetId;
          // Check if element is visibile within container 
          if (entry.isIntersecting) {
            updatedEntries[targetid] = true;
           
          } else {
            updatedEntries[targetid] = false;
            setIsOverflow(true);
          }
        });
        // Overwrite previous state values with current state
        setVisibilityMap((prev) => ({
          ...prev,
          ...updatedEntries
        }));
    }
    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection,{
            root: navRef.current,
            threshold: 1
          });
        // We are addting observers to child elements of the container div
        // with ref as navRef. Notice that we are adding observers
        // only if we have the data attribute targetid on the child element
        Array.from(navRef.current.children).forEach((item) => {
          if (item.dataset.targetId) {
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
        
        console.log(child.props["targetId"])
        let x= React.cloneElement(child, {
          className: classnames(child.props.className, {
            "visible": !!visibilityMap[child.props["targetId"]],
            "in-visible": !visibilityMap[child.props["targetId"]]
          })
        });
        return x;
      })}

 {
   isOverflow &&  <OverflowMenu 
      visibilityMap={visibilityMap}
        className="nav-menu-items-overflow">
       {children}
        </OverflowMenu>
 }
     
    </div>
      );
}
