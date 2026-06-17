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
    <div>
      {/* Hero Section */}
      <section className="mb-20">
        <div className="max-w-4xl mb-12">
          <h2 className="font-editorial text-display text-cultural-black mb-6">
            Internet Culture
          </h2>
          <p className="text-subheading font-modern text-cultural-gray mb-6">
            Where projects and ideas are born, developed, and launched. Share your journey from concept to launch.
          </p>
        </div>
      </section>

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
