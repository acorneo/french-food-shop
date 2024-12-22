import Database from "better-sqlite3";

const db = new Database("food.db");
db.pragma("journal_mode = WAL");

export default async function exec(sql: string): Promise<boolean> {
  return new Promise((resolve) => {
    try {
      db.exec(sql);
      resolve(true);
    } catch {
      resolve(false);
    }
  });
}

export async function run(sql: string, params: any[] = []): Promise<boolean> {
  return new Promise((resolve) => {
    try {
      db.prepare(sql).run(...params);
      resolve(true);
    } catch {
      resolve(false);
    }
  });
}

export async function all(sql: string, params: any[] = []): Promise<any[]> {
  return new Promise((resolve) => {
    try {
      const result = db.prepare(sql).all(...params);
      resolve(result);
    } catch {
      resolve([]);
    }
  });
}

export async function get(sql: string, params: unknown[] = []): Promise<any> {
  return new Promise((resolve) => {
    try {
      const row = db.prepare(sql).get(...params);
      resolve(row);
    } catch {
      resolve(null);
    }
  });
}

export function close(): void {
  db.close();
}
