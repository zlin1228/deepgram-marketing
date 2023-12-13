import db from 'indexDB/db';

import type { IAiApp } from 'indexDB/db';

export const addApps = async (apps: IAiApp[]) => {
  apps.map(async (app: IAiApp) => {
    await db.aiApps.add(app);
  });
};

export const updateApps = async (apps: IAiApp[]) => {
  db.aiApps.clear();
  apps.map(async (app: IAiApp) => {
    await db.aiApps.put(app);
  });
};

export const fetchAllCachedApps = async () => {
  const apps: IAiApp[] = await db?.aiApps?.toArray();
  if (apps) {
    return apps;
  } else {
    return [];
  }
};
