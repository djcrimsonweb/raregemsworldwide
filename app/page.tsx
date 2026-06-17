import { FeedGrid } from '@/components/FeedGrid';
import { MOCK_POSTS } from '@/lib/data';

export default function Home() {
  const featured = MOCK_POSTS.find(post => post.featured);
  const regularPosts = MOCK_POSTS.filter(post => !post.featured);

  return (
    <div>
      {/* Hero Section */}
      <section className="mb-20">
        <div className="max-w-4xl mb-12">
          <h2 className="font-editorial text-display text-cultural-black mb-6">
            Internet Culture
          </h2>
          <p className="text-subheading font-modern text-cultural-gray mb-6">
            Exploring memes, trends, aesthetics, and emerging cultural movements shaping the digital landscape.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="px-8 py-3 border border-cultural-black text-cultural-black hover:bg-cultural-black hover:text-cultural-white transition-colors font-modern text-caption uppercase tracking-wider">
              Create Gem
            </button>
            <button className="px-8 py-3 border border-cultural-gray text-cultural-gray hover:bg-cultural-gray hover:text-cultural-white transition-colors font-modern text-caption uppercase tracking-wider">
              Submit Content
            </button>
          </div>
        </div>
      </section>

      {/* Feed */}
      <FeedGrid posts={regularPosts} featured={featured} />

      {/* CTA Section */}
      <section className="mt-section pt-section border-t border-cultural-light-gray">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-editorial text-heading text-cultural-black mb-6">
            Contribute to Culture
          </h3>
          <p className="text-body font-modern text-cultural-gray mb-8">
            Have a trend, meme, or cultural moment worth sharing? Submit your discovery to the global feed.
          </p>
          <button className="px-8 py-3 bg-cultural-black text-cultural-white hover:opacity-80 transition-opacity font-modern text-caption uppercase tracking-wider">
            + Add Discovery
          </button>
        </div>
      </section>
    </div>
  );
}
