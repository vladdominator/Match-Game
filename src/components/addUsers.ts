import { sendUsers } from "../service/sendRequest";
import { T } from "../service/tInterface";
import { delay } from "./delay/delay";

export async function addUsers(): Promise<Array<T> | undefined>{
  const db = await sendUsers();
  const tx = await db?.transaction('users','readwrite');
  const usersStore = await tx?.objectStore('users');
  const users = await usersStore?.getAll();
  await delay(800);
  const usersArray = await users?.result;
  return usersArray?.sort((n1,n2) => {
    if (n1.score > n2.score) {
      return -1;
    }

    if (n1.score < n2.score) {
      return 1;
    }
    return 0;
  });
}
