import { FeedGrid } from '@/components/FeedGrid';
import { MOCK_POSTS, CATEGORIES, type Category } from '@/lib/data';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return CATEGORIES.map((category) => ({
    slug: category.toLowerCase().replace(/\s+/g, '-').replace('/', ''),
  }));
}

function slugToCategory(slug: string): Category | null {
  const mapping: Record<string, Category> = {
    'internet-culture': 'Internet Culture',
    'radio': 'Radio',
    'music': 'Music',
    'fashion': 'Fashion',
    'design-3d': 'Design / 3D',
    'games': 'Games',
    'mind': 'Mind',
  };
  return mapping[slug] || null;
}

export function generateMetadata({ params }: CategoryPageProps) {
  const category = slugToCategory(params.slug);
  return {
    title: `${category} - Rare Gems Worldwide`,
    description: `Explore the latest in ${category} culture, trends, and discoveries.`,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = slugToCategory(params.slug);

  if (!category) {
    return (
      <div className="text-center py-20">
        <h1 className="font-editorial text-display text-cultural-black mb-4">
          Category Not Found
        </h1>
        <p className="text-body font-modern text-cultural-gray">
          The category you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  const posts = MOCK_POSTS.filter(post => post.category === category);

  return (
    <div>
      {/* Header */}
      <section className="mb-20">
        <h1 className="font-editorial text-display text-cultural-black mb-4">
          {category}
        </h1>
        <p className="text-subheading font-modern text-cultural-gray">
          Discovering the most relevant moments in {category.toLowerCase()}.
        </p>
      </section>

      {/* Feed */}
      {posts.length > 0 ? (
        <FeedGrid posts={posts} />
      ) : (
        <div className="text-center py-20">
          <p className="text-body font-modern text-cultural-gray">
            No posts found in this category yet.
          </p>
        </div>
      )}
    </div>
  );
}
