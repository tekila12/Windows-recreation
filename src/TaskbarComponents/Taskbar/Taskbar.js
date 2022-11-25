import React,{ useRef,useEffect}  from 'react'
import "./Taskbar.css"
import ControlPanel from '../ControlPanel/ControlPanel'
import Menu from '../Menu/Menu'
import Avast from '../Avast/Avast'
import { DateTime } from '../../DateTime/DateTime'

const Taskbar = () => {
 

  const[isPanelOpen, setIsPanelOpen]=React.useState(false)
  const[isMenuOpen, setIsMenuOpen]=React.useState(false)
  const[isAvastOpen, setIsAvastOpen]=React.useState(false)
  

    const panel = useRef(null)
    const menu = useRef(null)
    const avast = useRef(null)
  
  
  

    function closePanel(){
      setIsPanelOpen(false)
    }

    function closeMenu(){
      setIsMenuOpen(false)
     }
 
    function closeAvast(){
     setIsAvastOpen(false)
    }



    const handleMenu = (e) => {
      if (menu.current && !menu.current.contains(e.target)) {
       closeMenu() 
      }
    };
  
  
   useEffect(() => {
      document.addEventListener('click', handleMenu);
      return () => {
        document.removeEventListener('click', handleMenu);
      };
    }, []);


    const handlePanel =(e)=>{
      if(panel.current&& !panel.current.contains(e.target)){
        closePanel() 
      }
    }
    useEffect(()=>{
        document.addEventListener('click',handlePanel)
          return () =>{
           document.removeEventListener('click', handlePanel)
          }   
      },[])

      const handleAvast= (e) =>{
        if(avast.current && !avast.current.contains(e.target)){
          closeAvast()
        }
      }
      useEffect(()=>{
        document.addEventListener("click", handleAvast)
        return()=>{
          document.removeEventListener("click", handleAvast)
        }
      },[])

     

    
    return (
      
        <div className='taskbar'>        
            <div ref={menu}
             className={"menu__iconsRight " + ((isMenuOpen) ? "active": "")} >
            <img 
             className='taskbar__iconsRight'
             onClick={() => setIsMenuOpen(!isMenuOpen)} 
             src="./images/icons/win7.png"/>
             {isMenuOpen ? <Menu />: null}
            </div>
       
        
            {/* <div
             ref={panel}
             className={"menu__iconsRight " + ((isPanelOpen) ? "active": "")}   >
            <img  
             className='taskbar__iconsRight'
             onClick={() => setIsPanelOpen((isPanelOpen) => !isPanelOpen)} 
             src="https://winaero.com/blog/wp-content/uploads/2017/07/Control-panel-windows-10-icon.png"/>
             {isPanelOpen ? <ControlPanel   closePanel={closePanel}  />: null}         
            </div> */}


        
             <div 
              ref={avast}
              className={"menu__iconsRight " + ((isAvastOpen) ? "active": "")} >
             <img  className='taskbar__iconsRight ' onClick={() => setIsAvastOpen(!isAvastOpen)} 
              src="./images/icons/avast.png"/>
              {isAvastOpen ? <Avast  closeAvast={closeAvast} />: null}                 
              </div>  

             <div className='dateTime'>  
             <DateTime />
             </div> 
        </div>
    )
}

export default Taskbar
