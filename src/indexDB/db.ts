import Dexie from 'dexie';

import type { Table } from 'dexie';

// Define your data models/interfaces
export interface IAiApp {
  id?: number; // '?' means the field is optional when creating an object
  name: string;
  slug: string;
  tagline: string;
  category: string;
  accentColor: string;
  darkColor: string;
  logoUrl: string;
}

export class aiAppsDatabase extends Dexie {
  public aiApps: Table<IAiApp, number>; // number is the type of the primary key

  constructor() {
    super('AiAppDatabase');

    this.version(1).stores({
      aiApps: '++id, name, slug, tagline, category, accentColor, darkColor, logoUrl',
    });

    // Set the types for the tables
    this.aiApps = this.table('aiApps');
  }
}

const db = new aiAppsDatabase();

export default db;
