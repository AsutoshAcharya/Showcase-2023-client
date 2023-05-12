export default function splitName(name) {
  var nameRegex = /^([^\s]+)\s+(([^\s]+\s)*[^\s]+)\s+([^\s]+)$/;
  var nameParts = nameRegex.exec(name);
  if (!name) return ["", "", ""];
  if (!nameParts) {
    if (name?.split(" ").length === 2) {
      var twoPart = name?.split(" ");
      return [twoPart[0], "", twoPart[1]];
    }
    return [name, "", ""];
  }
  var firstName = nameParts[1];
  var middleName = nameParts[2];
  var lastName = nameParts[4];
  return [firstName, middleName, lastName];
}
