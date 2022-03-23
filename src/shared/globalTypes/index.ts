export type ContactProps = {
  id?: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  avatar?: string;
  department?:string | null;
  gender?: string;
  contribution?: string;
  active?: boolean;
};


export type ContactResponseProps = {
  page?: number;
  data: [ContactProps] ;  
};



