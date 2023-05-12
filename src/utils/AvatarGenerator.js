import splitName from "./NameGenerator";

export default function AvatarGenerator(name) {
  const [firstName, middleName, lastName] = splitName(name);

  let str = "";
  str += firstName[0]?.toUpperCase();
  if (middleName != "") str += middleName[0]?.toUpperCase();
  if (lastName != "") str += lastName[0]?.toUpperCase();
  return str;
}
