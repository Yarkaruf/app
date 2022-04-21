export default class LocalStorage {
  static getItem<T = string>(key: string): T | undefined {
    if (typeof localStorage === "undefined") return undefined;

    return localStorage.getItem(key) as any;
  }

  static setItem(key: string, value: string): void {
    if (typeof localStorage === "undefined") return;

    localStorage.setItem(key, value);
  }

  static removeItem(key: string): void {
    if (typeof localStorage === "undefined") return;

    localStorage.removeItem(key);
  }

  static getJson<T = any>(key: string): T | undefined {
    const raw = LocalStorage.getItem(key);
    if (!raw) return undefined;
    return JSON.parse(raw);
  }

  static setJSON(key: string, json: any): void {
    const value = JSON.stringify(json);
    LocalStorage.setItem(key, value);
  }
}
