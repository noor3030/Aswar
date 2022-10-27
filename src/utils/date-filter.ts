import moment from "moment";

export function formatDate(value: string) {
  return moment(String(value)).format("YYYY/MM/DD - hh:mm");
}
