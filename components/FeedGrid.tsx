import type { Post } from '@/lib/data';
import { PostCard } from './PostCard';

interface FeedGridProps {
  posts: Post[];
  featured?: Post;
}

export function FeedGrid({ posts, featured }: FeedGridProps) {
  return (
    <div className="space-y-16">
      {featured && (
        <div className="mb-20">
          <PostCard post={featured} featured={true} />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
