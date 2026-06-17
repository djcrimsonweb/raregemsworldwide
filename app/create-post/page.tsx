'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

const STAGES = ['CONCEPT', 'DEVELOPMENT', 'MVP', 'LAUNCH'];

export default function CreatePostPage() {
  const { user } = useAuth();
  const router = useRouter();
  const supabase = createClient();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [stage, setStage] = useState('CONCEPT');
  const [category, setCategory] = useState('Internet Culture');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-body font-modern text-cultural-gray">
          Please sign in to create a post
        </p>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      // Determine GEMS reward based on stage
      const gemsReward = {
        CONCEPT: 10,
        DEVELOPMENT: 25,
        MVP: 50,
        LAUNCH: 100,
      }[stage as keyof typeof STAGES];

      await supabase.from('posts').insert({
        user_id: user.id,
        title,
        description,
        stage: stage as any,
        category,
        image_url: imageUrl || null,
        gems_reward: gemsReward,
      });

      router.push('/');
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="font-editorial text-display text-cultural-black mb-12">
        Share Your Project
      </h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Title */}
        <div>
          <label className="block text-caption font-modern font-semibold text-cultural-black mb-3">
            Project Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 border border-cultural-light-gray rounded focus:outline-none focus:border-cultural-black"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-caption font-modern font-semibold text-cultural-black mb-3">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 border border-cultural-light-gray rounded focus:outline-none focus:border-cultural-black h-32"
            required
          />
        </div>

        {/* Stage */}
        <div>
          <label className="block text-caption font-modern font-semibold text-cultural-black mb-3">
            Project Stage
          </label>
          <div className="grid grid-cols-4 gap-3">
            {STAGES.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setStage(s)}
                className={`p-4 rounded text-center font-modern font-semibold transition-all ${
                  stage === s
                    ? 'bg-cultural-black text-cultural-white'
                    : 'bg-cultural-off text-cultural-black hover:bg-cultural-light-gray'
                }`}
              >
                <div className="text-2xl mb-2">
                  {{
                    CONCEPT: '💡',
                    DEVELOPMENT: '🔨',
                    MVP: '🎯',
                    LAUNCH: '🚀',
                  }[s]}
                </div>
                <div className="text-caption">{s}</div>
              </button>
            ))}
          </div>
          <p className="text-caption font-modern text-cultural-gray mt-3">
            Earn {
              { CONCEPT: 10, DEVELOPMENT: 25, MVP: 50, LAUNCH: 100 }[
                stage as keyof typeof STAGES
              ]
            } GEMS for this post!
          </p>
        </div>

        {/* Category */}
        <div>
          <label className="block text-caption font-modern font-semibold text-cultural-black mb-3">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 border border-cultural-light-gray rounded focus:outline-none focus:border-cultural-black"
          >
            <option>Internet Culture</option>
            <option>Tech</option>
            <option>Design</option>
            <option>Music</option>
            <option>Gaming</option>
          </select>
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-caption font-modern font-semibold text-cultural-black mb-3">
            Image URL (optional)
          </label>
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full px-4 py-3 border border-cultural-light-gray rounded focus:outline-none focus:border-cultural-black"
            placeholder="https://..."
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-cultural-black text-cultural-white py-3 rounded font-modern font-semibold hover:opacity-80 transition-opacity disabled:opacity-50"
        >
          {loading ? 'Publishing...' : 'Publish Project'}
        </button>
      </form>
    </div>
  );
}
