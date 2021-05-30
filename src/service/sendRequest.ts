import { T } from "./tInterface";

let dbResult: IDBDatabase | null;
const dbName='vladdominator';
const idbRequest = indexedDB.open(dbName, 1);
let objUser: T;
idbRequest.onupgradeneeded = function needed(): void {
  const db = idbRequest.result;
  if (!db.objectStoreNames.contains('users')) {
    db.createObjectStore('users', {keyPath: 'id', autoIncrement: true});
  };
  dbResult = db;
}
idbRequest.onerror = function error(): void {
  throw new Error('Error Request.');
};
idbRequest.onsuccess = function sucess(): void {
  dbResult = idbRequest.result;
}
export function sendUserInformation(obj: T): void {
  objUser = obj;
}
export function sendRequest(score: number): void {
  const transaction = dbResult?.transaction('users', 'readwrite');
  objUser.id = undefined;
  delete(objUser.id);
  if(score > 0) {
    objUser.score = score;
  } else objUser.score = 0;
  transaction?.objectStore('users').put(objUser);
}
export function sendUsers(): IDBDatabase | null {
  return dbResult;
}
