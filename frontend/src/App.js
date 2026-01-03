import { useEffect, useState } from "react";
import API from "./api";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import heroImage from "./assets/contact-hero.jpg";

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const res = await API.get("/contacts");
      setContacts(res.data);
    } catch (err) {
      console.error("Failed to fetch contacts");
    }
  };

  const deleteContact = async (id) => {
    try {
      await API.delete(`/contacts/${id}`);
      fetchContacts();
    } catch (err) {
      console.error("Failed to delete contact");
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="page-bg">
      <Header />

      {/* HERO SECTION */}
      <div className="hero-container" id="home">
        {/* LEFT */}
        <div className="hero-form">
          <header className="header">
            <h1>Let’s work together.</h1>
            <p className="subtitle">
              MERN-based contact management with real-time updates
            </p>
          </header>

          <ContactForm refreshContacts={fetchContacts} />
        </div>

        {/* RIGHT */}
        <div className="hero-image">
          <img src={heroImage} alt="Contact" />
        </div>
      </div>

      {/* CONTACT LIST */}
      <div className="list-container" id="contacts">
        <ContactList contacts={contacts} onDelete={deleteContact} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
