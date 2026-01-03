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

  // Gmail-only regex
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  const isValid =
    formData.name.trim() &&
    gmailRegex.test(formData.email) &&
    formData.phone.length === 10;

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Allow only numbers in phone field
    if (name === "phone" && !/^\d*$/.test(value)) return;

    setFormData({ ...formData, [name]: value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValid) {
      setError("Please fill all required fields correctly");
      return;
    }

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
    <form className="form-card" onSubmit={handleSubmit} noValidate>
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
          placeholder="Gmail address *"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone number *"
          value={formData.phone}
          onChange={handleChange}
          maxLength={10}
        />

        <textarea
          name="message"
          placeholder="Message (optional)"
          value={formData.message}
          onChange={handleChange}
          rows="3"
        />

        <button type="submit" disabled={!isValid || loading}>
          {loading ? "Submitting..." : "Submit Contact"}
        </button>
      </div>

      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </form>
  );
};

export default ContactForm;
