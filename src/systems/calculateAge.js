export default function calculateAge(isoDate) {
  const birthDate = new Date(isoDate);
  const currentDate = new Date();

  const years = currentDate.getFullYear() - birthDate.getFullYear();
  const months = currentDate.getMonth() - birthDate.getMonth();
  const days = currentDate.getDate() - birthDate.getDate();

  let result = "";

  if (years > 0) {
    result += years + (years === 1 ? " year" : " years");
  }

  if (months > 0) {
    if (result !== "") {
      result += " and ";
    }
    result += months + (months === 1 ? " month" : " months");
  }

  if (days > 0) {
    if (result !== "") {
      result += " and ";
    }
    result += days + (days === 1 ? " day" : " days");
  }

  return result;
}
