import { FC, useEffect, useState } from "react";
import { Layout, SearchPanel } from "../../components";
import { Container } from "react-bootstrap";
import "./style.scss";
import ContactTable from "./contactTable";
import { getContactList, updateContact } from "../../shared/services";
import { ContactProps } from "../../shared/globalTypes";
import ContactModal from "./contactModal";

const ContactList: FC = () => {
  const [selectedItem, setSelectedItem] = useState<ContactProps | null>(null);
  const [searchedTex, setSearchedTex] = useState("");
  const [contactList, setContactList] = useState<ContactProps[]>();
  const [contactListSource, setContactListSource] = useState<ContactProps[]>();

  useEffect(() => {
    getContactList({ page: 1 }).then((res) => {
      setContactList(res.data);
      setContactListSource(res.data);
    });
  }, []);

  useEffect(() => {
    if (searchedTex) {
      const list = contactListSource?.filter(
        (item) =>
          item.first_name
            ?.toLocaleLowerCase()
            .startsWith(searchedTex.toLocaleLowerCase()) ||
          item.last_name
            ?.toLocaleLowerCase()
            .startsWith(searchedTex.toLocaleLowerCase()) ||
          item.email
            ?.toLocaleLowerCase()
            .startsWith(searchedTex.toLocaleLowerCase())
      );
      setContactList(list);
    } else {
      setContactList(contactListSource?.slice());
    }
  }, [searchedTex, contactList, contactListSource]);

  const handleOnCancelModal = () => {
    setSelectedItem(null);
  };

  const handleOnSaveModal = (item: ContactProps) => {
    updateContact(item);
    setSelectedItem(null);
  };

  const onItemSelected = (item: ContactProps) => {
    setSelectedItem(item);
  };

  return (
    <Layout title="Users">
      <Container fluid className="contact-container">
        <SearchPanel
          onChange={(text) => setSearchedTex(text.target.value)}
          handleOnClick={() => {}}
          btnText="Add"
        />
        <Container className="contact-list-container">
          <Container className="contact-list">
            <ContactTable
              onItemClick={onItemSelected}
              contactList={contactList}
            />
          </Container>
        </Container>
        {selectedItem && (
          <Container className="contact-modal-container">
            <ContactModal
              contact={selectedItem}
              onSave={handleOnSaveModal}
              onCancel={handleOnCancelModal}
            />
          </Container>
        )}
      </Container>
    </Layout>
  );
};

export default ContactList;
