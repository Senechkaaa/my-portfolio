import Image from "next/image";
import ContactsList from "./ContactsList";

const Contacts = () => {



  return (
    <section className="mt-52">
      <div>
        <h4 className="section_title mb-3">My Contacts</h4>
        <h2 className="section_desc mb-24">Contacts for communication</h2>
      </div>
      <ContactsList/>
    </section>
  );
};

export default Contacts;
