export const newMovementAdapter = (values) => {
  const { amount, accountNumber, description } = values;

  return {
    amount,
    account_number: accountNumber,
    description
  };
};
