export const newContactAdapter = (values) => {
  const { alias, accountNumber, description } = values;

  return {
    alias,
    account_number: accountNumber,
    description
  };
};

export const updateContactAdapter = (values) => {
  const { alias, description } = values;

  return {
    alias,
    description
  };
};
