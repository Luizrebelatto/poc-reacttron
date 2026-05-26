export async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  console.tron.display({
    name: 'API USERS',
    value: data,
  });

  return data;
}