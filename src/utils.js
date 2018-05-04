export const toCamelcase = contact => ({
  id: contact.id,
  firstName: contact.first_name,
  lastName: contact.last_name,
  color: contact.color,
  image: contact.image,
  location: contact.location,
  team: contact.team,
  title: contact.title,
});

export const fromCamelcase = contact => ({
  id: contact.id,
  first_name: contact.firstName,
  last_name: contact.lastName,
  color: contact.color,
  image: contact.image,
  location: contact.location,
  team: contact.team,
  title: contact.title,
});
