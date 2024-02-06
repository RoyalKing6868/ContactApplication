import Navigation from "./components/Navigation";
import { FiSearch } from "react-icons/fi";
import { FaCirclePlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firbase";
import Contactcard from "./components/Contactcard";
import AddAndUpdate from "./components/AddAndUpdate";
import useDisclouse from "./hooks/useDisclouse";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from "./components/NotFound";
function App() {
  const [contacts, setContacts] = useState([]);
  const {isOpen,onClose,onOpen} = useDisclouse();

  


  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        onSnapshot(contactsRef,(snapshot)=>{
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactList);
        })
        
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterContacts = (e) =>{
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");
        onSnapshot(contactsRef,(snapshot)=>{
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          const filteredContact = contactList.filter((contact) => 
            contact.name.toLowerCase().includes(value.toLowerCase())
          );
          setContacts(filteredContact);
        })
  };

  return (
    <>
      <div className="mx-auto max-w-[370px]">
        <Navigation />
        <div className="flex gap-2 items-center">
          <div className="flex relative items-center flex-grow">
            <FiSearch className="text-white  absolute ml-2" />
            <input
              type="text"
              className="h-10 pl-9 text-white bg-transparent outline-none border rounded-md border-white flex-grow "
              onChange={filterContacts}
            />
          </div>
          <div onClick={onOpen} className="text-white text-4xl cursor-pointer">
            <FaCirclePlus />
          </div>
        </div>
        <div>
          {contacts.length>0?contacts.map((contact) => (
            <Contactcard contact={contact} key={contact.id} />
          )) : <NotFound/>}
        </div>
      </div>
      <AddAndUpdate onClose={onClose} isOpen={isOpen}/>
      <ToastContainer position="bottom-center"/>
    </>
  );
}

export default App;
