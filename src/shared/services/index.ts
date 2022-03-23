import {  ContactProps, ContactResponseProps } from "../globalTypes";
import api from "./base";

type ParametersProps = {
  page?: number | null;
};

export const getContactList = ({ page = null }: ParametersProps) => {
  return api
    .get<ContactResponseProps>("users", {
      params: {
        ...(page && { page }),
      },
      paramsSerializer: (params) => {
        let result = "";
        Object.keys(params).forEach((key) => {
          result += `${key}=${encodeURIComponent(params[key])}&`;
        });
        return result.substring(0, result.length - 1);
      },
    })
    .then((res) => res.data);
};

export const updateContact = (contact: ContactProps) => {
  api.put(`users/${contact.id}`,{
    ...contact
  })
}
