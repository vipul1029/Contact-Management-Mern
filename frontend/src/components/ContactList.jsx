const ContactList = ({ contacts = [], onDelete }) => {
  if (!contacts.length) {
    return <p className="empty">No contacts submitted yet.</p>;
  }

  return (
    <table className="contact-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Message</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {contacts.map((contact) => (
          <tr key={contact._id} className="table-row">
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td>{contact.message || "-"}</td>
            <td>
              <button
                className="delete-btn"
                onClick={() => onDelete(contact._id)}
                aria-label="Delete contact"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactList;
