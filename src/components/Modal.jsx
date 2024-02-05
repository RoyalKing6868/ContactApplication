import { createPortal } from "react-dom"
import {AiOutlineClose} from "react-icons/ai"
const Modal = ({onClose,isOpen,children}) => {
  return createPortal(
    <>
        {isOpen && (
          <div className="absolute grid h-screen w-screen backdrop-blur top-0 z-40">
            
           <div className="relative min-h-[200px] min-w-[400px] min-w-[400px] z-50 bg-white p-4 m-auto">
            <div className=" flex justify-end">
                <AiOutlineClose onClick={onClose} className="font-xl cursor-pointer"/>
            </div>
            {children}
            </div>   
          </div>  
        )}
    </>
  ,document.getElementById("modal-root"));
};

export default Modal