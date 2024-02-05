import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import Modal from "./modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { db } from "../config/firbase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
    name: Yup.string().required("Name is requaired"),
    email: Yup.string().email("Email is requaired").required("Email is requaired"),
});

const AddAndUpdate = ({ onClose, isOpen, isUpdate, contact }) => {

    const updateContact = async (contact,id) => {
        try {
          const contactRef = doc(db, "contacts",id);
          await updateDoc(contactRef, contact);
          toast.success("Contact Updated Successfully");
          onClose();
        } catch (error) {
            toast.error("failed");
          console.log(error);
        }
    };

    const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      toast.success("Contact Added Successfully");
      onClose();
    } catch (error) {
        toast.error("failed");
      console.log(error);
    }
  };

  return (
    <div>
      <Modal onClose={onClose} isOpen={isOpen}>
        <Formik
        validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            isUpdate ? updateContact(values,contact.id) : addContact(values);
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="font-medium">Name</label>
              <Field name="name" className="border" />
              <div className="text-red-500 text-xs">
                <ErrorMessage name="name"/>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="Email" className="font-medium">
                Email
              </label>
              <Field name="email" className="border" />
              <div className="text-red-500 text-xs">
                <ErrorMessage name="email"/>
              </div>
            </div>
            <button
              className="bg-orange self-end px-3 py-1 size-xl rounded-md font-medium"
              type="Submit"
            >
              {isUpdate ? "Update" : "Add"} Content
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdate;
