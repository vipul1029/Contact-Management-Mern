import Contact from "../models/Contact.js";

/* ---------- GET ALL CONTACTS ---------- */
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch contacts" });
  }
};

/* ---------- CREATE CONTACT ---------- */
export const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        message: "Name, email, and phone are required"
      });
    }

    const newContact = await Contact.create({
      name,
      email,
      phone,
      message
    });

    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ message: "Failed to create contact" });
  }
};

/* ---------- DELETE CONTACT ---------- */
export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    await Contact.findByIdAndDelete(id);
    res.json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete contact" });
  }
};
