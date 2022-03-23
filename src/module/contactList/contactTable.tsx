import { FC } from "react";
import { Image, Table } from "react-bootstrap";
import { ContactProps } from "../../shared/globalTypes";
import "./style.scss";

type ContactTableProps = {
  contactList?: ContactProps[];
  onItemClick?: (item: ContactProps) => void;
};

const ContactTable: FC<ContactTableProps> = ({ contactList, onItemClick }) => (
  <Table className="contact-list-table">
    <tbody>
      {contactList?.map((item) => (
        <tr
          onClick={() => onItemClick && onItemClick(item)}
          className="contact-list-td"
          key={item.first_name}
        >
          <td>
            <Image className="contact-list-image" src={item.avatar} />
          </td>
          <td>
            {item.first_name} {item.last_name}
          </td>
          <td>Sales</td>
          <td>{item.email}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default ContactTable;
