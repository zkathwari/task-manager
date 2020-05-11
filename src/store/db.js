import PouchDB from "pouchdb";

// create DB
export const db = (dbName) => new PouchDB(dbName);
