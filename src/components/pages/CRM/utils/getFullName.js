export const getFullName = (client) => {
  let fullName

  if (client.lastName.length > 0) {
    fullName = `${client.surname} ${client.name} ${client.lastName}`
  } else {
    fullName = `${client.surname} ${client.name}`
  };

  return fullName;
}
