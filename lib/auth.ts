import { getItem, setItem } from './storage';

const KEY = 'mb_auth_v1';
const adminAllowList = ['owner@mbadmin.local'];

type Session = { email: string; isAdmin: boolean };

export function login(email: string, _password: string): Session {
  const isAdminUser = email.endsWith('@mbadmin.local') || adminAllowList.includes(email);
  const session: Session = { email, isAdmin: isAdminUser };
  setItem(KEY, session);
  return session;
}

export function logout(): void { setItem<Session | null>(KEY, null); }

export function getSession(): Session | null {
  const v = getItem<Session | null>(KEY, null);
  return v && typeof v.email === 'string' ? v : null;
}

export function isAdmin(): boolean {
  return Boolean(getSession()?.isAdmin);
}
