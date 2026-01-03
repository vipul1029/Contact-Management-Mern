import { useEffect, useState } from "react";
import API from "./api";

import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Footer from "./components/Footer";
import About from "./components/About";

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
      {/* HEADER */}
      <Header />

      {/* HERO SECTION */}
      <section className="hero-container" id="home">
        <div className="hero-form">
          <header className="header">
            <h1>Let’s work together.</h1>
            <p className="subtitle">
              MERN-based contact management with real-time updates
            </p>
          </header>

          <ContactForm refreshContacts={fetchContacts} />
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Contact management" />
        </div>
      </section>

      {/* CONTACT LIST */}
      <section className="list-container" id="contacts">
        <ContactList contacts={contacts} onDelete={deleteContact} />
      </section>

      {/* ABOUT SECTION */}
      <About />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
