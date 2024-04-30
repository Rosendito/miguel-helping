export const registerAdapter = (values) => {
  const { firstName, lastName, document, birthday, phone, email, password } = values;

  return {
    first_name: firstName,
    last_name: lastName,
    document_number: document,
    birth_date: birthday,
    phone_number: phone,
    email,
    password
  };
};

export const loginAdapter = (values) => {
  const { email, password } = values;

  return {
    email,
    password
  };
};

export const changePasswordAdapter = (values) => {
  const {password, newPassword} = values;

  return {
    password,
    new_password: newPassword
  };
};