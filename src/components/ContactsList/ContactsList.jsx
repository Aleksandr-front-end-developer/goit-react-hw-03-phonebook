export const ContactsList = ({ contacts, filter, onDelete }) => {
  return (
    <ul>
      {contacts
        .filter(item =>
          item.name.trim().toLowerCase().includes(filter.trim().toLowerCase())
        )
        .map(contact => {
          return (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button onClick={() => onDelete(contact.id)} type="butoon">
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};
