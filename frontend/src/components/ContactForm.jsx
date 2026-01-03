import { useState } from "react";
import API from "../api";

const ContactForm = ({ refreshContacts }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const isValid =
    formData.name.trim() &&
    /^\S+@\S+\.\S+$/.test(formData.email) &&
    formData.phone.trim();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;

    try {
      setLoading(true);
      await API.post("/contacts", formData);
      setSuccess("Contact added successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
      refreshContacts();
    } catch {
      setError("Failed to submit contact");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <h2>Add Contact</h2>

      <div className="form-grid">
        <input
          type="text"
          name="name"
          placeholder="Name *"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email *"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone *"
          value={formData.phone}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Message (optional)"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit" disabled={!isValid || loading}>
          {loading ? "Submitting..." : isValid ? "Submit Contact" : "Fill Required Fields"}
        </button>
      </div>

      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </form>
  );
};

export default ContactForm;
