// db.js
export function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("TaskDB", 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("tasks")) {
        db.createObjectStore("tasks", { keyPath: "id", autoIncrement: true });
      }
    };

    request.onsuccess = (event) => resolve(event.target.result);
    request.onerror = (event) => reject("DB error: " + event.target.error);
  });
}

export async function saveTasks(tasks) {
  const db = await openDB();
  const tx = db.transaction("tasks", "readwrite");
  const store = tx.objectStore("tasks");
  store.clear(); // очищаем старое
  tasks.forEach((task, i) => {
    store.add({ ...task, id: i }); // добавляем заново
  });
  return new Promise((resolve) => {
    tx.oncomplete = () => resolve(true);
  });
}

export async function loadTasks() {
  const db = await openDB();
  const tx = db.transaction("tasks", "readonly");
  const store = tx.objectStore("tasks");
  return new Promise((resolve) => {
    const request = store.getAll();
    request.onsuccess = () => {
      resolve(request.result.map(({ id, ...task }) => task)); // убираем id
    };
  });
}
