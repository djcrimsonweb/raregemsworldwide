import type { Post } from '@/lib/data';

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

export function PostCard({ post, featured }: PostCardProps) {
  return (
    <article className={`group cursor-pointer animate-fade-in ${featured ? 'col-span-full' : ''}`}>
      <div className="overflow-hidden bg-cultural-off">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover group-hover:opacity-80 transition-opacity duration-300"
        />
      </div>

      <div className={`p-6 ${featured ? 'max-w-3xl' : ''}`}>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-caption font-modern text-cultural-gray uppercase tracking-wider">
            {post.scene}
          </span>
          <span className="text-caption font-modern text-cultural-accent">•</span>
          <span className="text-caption font-modern text-cultural-gray uppercase tracking-wider">
            {post.category}
          </span>
        </div>

        <h3 className={`font-editorial text-cultural-black mb-2 group-hover:opacity-70 transition-opacity ${featured ? 'text-display' : 'text-heading'}`}>
          {post.title}
        </h3>

        {featured && (
          <p className="text-body font-modern text-cultural-gray mb-6 max-w-2xl">
            {post.description}
          </p>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-cultural-light-gray">
          <div className="flex gap-2 flex-wrap">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-caption font-modern text-cultural-gray px-2 py-1 bg-cultural-off rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-caption font-modern text-cultural-accent font-semibold">
              💎
            </span>
            <span className="text-caption font-modern text-cultural-black font-semibold">
              {post.gemScore}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
