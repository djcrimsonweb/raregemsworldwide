'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import Link from 'next/link';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { signUp } = useAuth();

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signUp(email, password, username);
      router.push('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Sign up failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-cultural-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <h1 className="font-editorial text-display text-cultural-black mb-8">
          Join Rare Gems
        </h1>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSignUp} className="space-y-6">
          <div>
            <label className="block text-caption font-modern font-semibold text-cultural-black mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-cultural-light-gray rounded focus:outline-none focus:border-cultural-black"
              required
            />
          </div>

          <div>
            <label className="block text-caption font-modern font-semibold text-cultural-black mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-cultural-light-gray rounded focus:outline-none focus:border-cultural-black"
              required
            />
          </div>

          <div>
            <label className="block text-caption font-modern font-semibold text-cultural-black mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-cultural-light-gray rounded focus:outline-none focus:border-cultural-black"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cultural-black text-cultural-white py-3 rounded font-modern font-semibold hover:opacity-80 transition-opacity disabled:opacity-50"
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center text-body font-modern text-cultural-gray mt-6">
          Already have an account?{' '}
          <Link href="/login" className="text-cultural-black font-semibold hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
