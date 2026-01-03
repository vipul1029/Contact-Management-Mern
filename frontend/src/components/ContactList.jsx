const ContactList = ({ contacts = [], onDelete }) => {
  if (!contacts.length) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📇</div>
        <h3>No contacts yet</h3>
        <p>
          Start by submitting the form above to see contacts appear here
          in real time.
        </p>
      </div>
    );
  }

  const handleDelete = (id, name) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${name}?`
    );
    if (confirmDelete) onDelete(id);
  };

  return (
    <div className="table-wrapper">
      <table className="contact-table">
        <thead>
          <tr>
            <th>Contact</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id} className="table-row">
              
              <td data-label="Contact" className="contact-name">
                <div className="avatar">
                  {contact.name.charAt(0).toUpperCase()}
                </div>
                <span>{contact.name}</span>
              </td>

              {/* Email */}
              <td data-label="Email">
                <a
                  href={`mailto:${contact.email}`}
                  className="contact-link"
                >
                  {contact.email}
                </a>
              </td>

              {/* Phone */}
              <td data-label="Phone">
                <a
                  href={`tel:${contact.phone}`}
                  className="contact-link"
                >
                  {contact.phone}
                </a>
              </td>

              {/* Message */}
              <td data-label="Message" className="contact-message">
                {contact.message || "—"}
              </td>

              {/* Action */}
              <td data-label="Action">
                <button
                  className="delete-btn"
                  onClick={() =>
                    handleDelete(contact._id, contact.name)
                  }
                  aria-label={`Delete contact ${contact.name}`}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
