export const ADMIN_STORAGE_KEY = 'imperial_admin_logged_in';

export const ADMIN_CREDENTIALS = {
  email: 'admin@imperial.com',
  password: 'admin123',
} as const;

export function isAdminLoggedIn(): boolean {
  return localStorage.getItem(ADMIN_STORAGE_KEY) === 'true';
}

export function setAdminLoggedIn(): void {
  localStorage.setItem(ADMIN_STORAGE_KEY, 'true');
}

export function clearAdminSession(): void {
  localStorage.removeItem(ADMIN_STORAGE_KEY);
}
