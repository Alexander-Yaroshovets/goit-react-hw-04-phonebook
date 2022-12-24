import {
  Contact,
  ContactTitle,
  CotactList,
  ContactButton,
  ContactItem,
} from './Contacts.styled';
import PropTypes from 'prop-types';

export const Contacts = ({ contacts, title, deleteContact }) => {
  return (
    <>
      <ContactTitle>{title}</ContactTitle>

      <CotactList>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              <Contact>
                {name} {number}
              </Contact>

              <ContactButton type="button" onClick={() => deleteContact(id)}>
                delete
              </ContactButton>
            </ContactItem>
          );
        })}
      </CotactList>
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
