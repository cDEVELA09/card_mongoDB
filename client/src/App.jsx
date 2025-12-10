import React, { useEffect, useState } from "react";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/contacts")
      .then((r) => r.json())
      .then((json) => setContacts(json))
      .catch((e) => setError("Could not fetch contacts: " + e.message));
  }, []);

  return (
    <div className="app-root">
      <h1>Business Cards</h1>
      {error && <p className="error">{error}</p>}

      <div className="cards-list">
        {contacts.length ? (
          contacts.map(contact => {
            const role = contact.role || contact.company || "";
            return (
              <div key={contact._id} className="card business-card">
                <div className="card-left">
                  <img src="/src/logo.jpg" alt="Logo" className="logo-image" />
                </div>
                <div className="card-right">
                  <div className="name">{contact.name}</div>
                  {role && <div className="role">{role}</div>}
                  <div className="divider"></div>
                  <div className="contact-row">
                    <span className="icon">📍</span>
                    <span>{contact.address || "—"}</span>
                  </div>
                  <div className="contact-row">
                    <span className="icon">📞</span>
                    {contact.phone ? (
                      <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                    ) : (
                      <span className="muted">—</span>
                    )}
                  </div>
                  <div className="contact-row">
                    <span className="icon">✉️</span>
                    {contact.email ? (
                      <a href={`mailto:${contact.email}`}>{contact.email}</a>
                    ) : (
                      <span className="muted">—</span>
                    )}
                  </div>
                  <div className="contact-row">
                    <span className="icon">🌐</span>
                    {contact.website ? (
                      <a href={contact.website} target="_blank" rel="noopener noreferrer">{contact.website}</a>
                    ) : (
                      <span className="muted">—</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="no-contacts">No contacts found. Add some to MongoDB to see them here.</p>
        )}
      </div>
    </div>
  );
}