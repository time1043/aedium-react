import { authClient } from '@/libs/neon-auth';

export async function getUserProfile() {
  const { data, error } = await authClient.getSession();
  if (error) throw error;
  if (data?.user) return data.user;
}

export async function isEmailVerified() {
  const { data, error } = await authClient.getSession();
  if (error) throw error;
  if (data?.user) return data.user.emailVerified;
  else return false;
}
