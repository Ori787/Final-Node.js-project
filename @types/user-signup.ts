type Iuser = {
name: Iname;
lastName: string;
isBusiness: Boolean;
address: Iaddress;
email: string;
phone: string;
image: Iimage;
password: string;
isAdmin: Boolean;
_id: string,
}; 

type Iaddress = {
state?: string;
country: string;
city: string;
street: string;
houseNumber: Number;
zip?: string;
}

type Iimage = {
url: string;
alt: string;
}

type Iname = {
    first: String;
    middle?: String;
    last: String;
}

type Ilogin = {
    email: string;
    password: string;
  };

  type Ijwtpayload = {
    email: String;
  };

export { Iaddress, Iimage, Iname, Iuser, Ilogin, Ijwtpayload };