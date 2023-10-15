export async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error! Статус: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Помилка під час отримання даних:", error);
    throw error;
  }
}
