import { deleteDoc, doc } from "firebase/firestore";
import React, { useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firbase"; 
import AddAndUpdate from "./AddAndUpdate";
import useDisclouse from "../hooks/useDisclouse";
import { toast } from "react-toastify";

const Contactcard = ({contact}) => {
  const {isOpen,onClose,onOpen} = useDisclouse();
  
  const deleteContact = async(id)=>{
    try {
      await deleteDoc(doc(db,"contacts",id));
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <div
      key={contact.id}
      className="bg-yellow rounded-md h-[64px] my-4 text-orange flex justify-around items-center"
    >
      <HiOutlineUserCircle className="h-[48px] w-[48px]"/>
      <div className="text-black">
        <h2 className="font-medium">{contact.name}</h2>
        <p className="text-sm">{contact.email}</p>
      </div>
      <div className="text-black flex items-center gap-2">
        <RiEditCircleLine onClick={onOpen} className="cursor-pointer h-[27px] w-[27px] " />
        <IoMdTrash onClick={()=>deleteContact(contact.id)} className="cursor-pointer h-[32px] w-[32px] text-purple"/>
      </div>
    </div>
      <AddAndUpdate contact={contact} isUpdate isOpen={isOpen} onClose={onClose}/>
    </>
  );
};

export default Contactcard;
