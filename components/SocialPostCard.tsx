'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth-context';
import { createClient } from '@/lib/supabase/client';
import type { Database } from '@/lib/supabase/types';

type Post = Database['public']['Tables']['posts']['Row'];
type Profile = Database['public']['Tables']['profiles']['Row'];

const STAGE_COLORS: Record<string, string> = {
  CONCEPT: 'bg-blue-100 text-blue-800',
  DEVELOPMENT: 'bg-yellow-100 text-yellow-800',
  MVP: 'bg-orange-100 text-orange-800',
  LAUNCH: 'bg-green-100 text-green-800',
};

const STAGE_ICONS: Record<string, string> = {
  CONCEPT: '💡',
  DEVELOPMENT: '🔨',
  MVP: '🎯',
  LAUNCH: '🚀',
};

export default function PostCard({ post }: { post: Post & { profiles: Profile } }) {
  const { user } = useAuth();
  const supabase = createClient();
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes_count);

  useEffect(() => {
    if (!user) return;

    supabase
      .from('likes')
      .select()
      .eq('post_id', post.id)
      .eq('user_id', user.id)
      .single()
      .then(({ data }) => setLiked(!!data));
  }, [user, post.id]);

  async function toggleLike() {
    if (!user) return;

    if (liked) {
      await supabase.from('likes').delete().eq('post_id', post.id).eq('user_id', user.id);
      setLikeCount(likeCount - 1);
    } else {
      await supabase.from('likes').insert({ post_id: post.id, user_id: user.id });
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  }

  return (
    <article className="border border-cultural-light-gray rounded p-6 hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-cultural-gray rounded-full" />
          <div>
            <p className="font-modern font-semibold text-cultural-black">
              {post.profiles?.username || 'Unknown'}
            </p>
            <p className="text-caption font-modern text-cultural-gray">
              {new Date(post.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>
        <span className={`text-caption font-semibold px-3 py-1 rounded ${STAGE_COLORS[post.stage]}`}>
          {STAGE_ICONS[post.stage]} {post.stage}
        </span>
      </div>

      {/* Title & Description */}
      <h3 className="font-editorial text-heading text-cultural-black mb-3">
        {post.title}
      </h3>
      <p className="text-body font-modern text-cultural-gray mb-4">
        {post.description}
      </p>

      {/* Image */}
      {post.image_url && (
        <img
          src={post.image_url}
          alt={post.title}
          className="w-full h-64 object-cover rounded mb-4"
        />
      )}

      {/* Meta */}
      <div className="flex items-center gap-6 pt-4 border-t border-cultural-light-gray">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{STAGE_ICONS[post.stage]}</span>
          <span className="text-caption font-modern font-semibold">
            {post.gems_reward} GEMS
          </span>
        </div>
        <button
          onClick={toggleLike}
          className="flex items-center gap-2 text-caption font-modern hover:text-cultural-accent transition-colors"
        >
          <span className="text-xl">{liked ? '❤️' : '🤍'}</span>
          <span>{likeCount}</span>
        </button>
        <button className="flex items-center gap-2 text-caption font-modern hover:text-cultural-accent transition-colors">
          <span className="text-xl">💬</span>
          <span>{post.comments_count}</span>
        </button>
      </div>
    </article>
  );
}
