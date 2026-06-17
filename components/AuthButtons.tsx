'use client';

import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';

export function AuthButtons() {
  const { user, profile, signOut, loading } = useAuth();
  const router = useRouter();

  if (loading) {
    return null;
  }

  if (!user) {
    return (
      <div className="flex gap-3">
        <Link
          href="/login"
          className="text-caption font-modern text-cultural-black hover:opacity-70 transition-opacity"
        >
          Sign In
        </Link>
        <Link
          href="/signup"
          className="text-caption font-modern text-cultural-white bg-cultural-black px-4 py-2 rounded hover:opacity-80 transition-opacity"
        >
          Sign Up
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-6">
      <Link
        href={`/profile/${user.id}`}
        className="flex items-center gap-2 hover:opacity-70 transition-opacity"
      >
        <div className="w-8 h-8 bg-cultural-gray rounded-full" />
        <span className="text-caption font-modern font-semibold text-cultural-black">
          {profile?.username || 'Profile'}
        </span>
      </Link>
      <button
        onClick={async () => {
          await signOut();
          router.push('/');
        }}
        className="text-caption font-modern text-cultural-gray hover:text-cultural-black transition-colors"
      >
        Sign Out
      </button>
    </div>
  );
}
