'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import SocialPostCard from '@/components/SocialPostCard';
import type { Database } from '@/lib/supabase/types';

type Post = Database['public']['Tables']['posts']['Row'] & {
  profiles: Database['public']['Tables']['profiles']['Row'];
};

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    async function loadPosts() {
      const { data, error } = await supabase
        .from('posts')
        .select('*, profiles(*)')
        .order('created_at', { ascending: false });

      if (!error) {
        setPosts(data as Post[]);
      }
      setLoading(false);
    }

    loadPosts();
  }, []);

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      {/* Posts Feed */}
      <section className="space-y-8">
        {loading ? (
          <p className="text-center text-cultural-gray">Loading posts...</p>
        ) : posts.length === 0 ? (
          <p className="text-center text-cultural-gray">
            No posts yet. Be the first to share your project!
          </p>
        ) : (
          posts.map((post) => <SocialPostCard key={post.id} post={post} />)
        )}
      </section>
    </div>
  );
}
