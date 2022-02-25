import React,{useEffect} from 'react'

export const useOutsideAlerter = (ref) => {

    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          return true;
        // alert('clicked outside');
        }
      }

      // Bind the event listener
      document.addEventListener("click", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("click", handleClickOutside);
      };
    }, [ref]);
   return false
}
