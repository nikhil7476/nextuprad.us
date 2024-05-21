import moment from "moment";

export function formatDate(date, format) {
  if (format) {
    const formattedDate = moment(date).format(format);
    return formattedDate;
  } else {
    const formattedDate = moment(date).format("MMM Do YYYY");
    return formattedDate;
  }
}
