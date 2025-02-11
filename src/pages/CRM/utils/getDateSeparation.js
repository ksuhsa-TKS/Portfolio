export const getDateSeparation = (objectClient) => {
  let year = new Date(objectClient).getFullYear();
  let month = new Date(objectClient).getMonth();
  let day = new Date(objectClient).getDate();
  let hours = new Date(objectClient).getHours();
  let minutes = new Date(objectClient).getMinutes();

  if (month < 9) { month = `0${month + 1}` } else { month = `${month + 1}` };
  if (day < 10) day = `0${day}`;
  if (hours < 10) hours = `0${hours}`;
  if (minutes < 10) minutes = `0${minutes}`;

  const resObj = {
    date: `${day}.${month}.${year}`,
    time: `${hours}:${minutes}`
  }

  return resObj
}
