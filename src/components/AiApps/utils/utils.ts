export const setTimestampCookie = () => {
  const now = new Date();
  const timestamp = now.getTime();

  // Set the time for expiration: current time + 5 days
  // There are 86400000 milliseconds in a day (24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
  now.setTime(now.getTime() + 5 * 24 * 60 * 60 * 1000);
  const expires = `expires=${now.toUTCString()}`;

  document.cookie = `aiAppsTimestamp=${timestamp}; expires=${expires}; path=/`;
};

export const getCookie = (name: string) => {
  const cookieArray = document.cookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    const cookiePair = cookieArray[i].split('=');
    if (name === cookiePair[0].trim()) {
      return cookiePair[1];
    }
  }

  return null;
};

export const deleteCookie = (name: string) => {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

export const isCookieFresh = (cookieName: string) => {
  const cookieValue = getCookie(cookieName);
  if (cookieValue) {
    const cookieTime = parseInt(cookieValue, 10);
    const now = new Date().getTime();
    const twentyMins = 20 * 60 * 1000;
    if (now - cookieTime > twentyMins) {
      deleteCookie(cookieName);

      return false; // The cookie is has passsed time limit
    }
  }
  if (!cookieValue) {
    return false; // The cookie doesn't exist
  }

  return true; // The cookie is fresh
};
