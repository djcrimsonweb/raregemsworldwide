'use client';

import { useState } from 'react';

export default function GemsPage() {
  const [gemCount, setGemCount] = useState(0);

  return (
    <div>
      {/* Hero */}
      <section className="mb-section">
        <div className="max-w-3xl">
          <h1 className="font-editorial text-display text-cultural-black mb-8">
            Your GEMS
          </h1>
          <p className="text-subheading font-modern text-cultural-gray">
            GEMS represent your cultural engagement across Rare Gems Worldwide. They track your participation, curation, and contribution to the global cultural conversation.
          </p>
        </div>
      </section>

      {/* GEMS Counter */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-section py-20 border-y border-cultural-light-gray">
        <div className="text-center">
          <div className="text-7xl font-bold text-cultural-accent mb-4">
            💎
          </div>
          <p className="text-caption font-modern text-cultural-gray mb-2 uppercase tracking-wider">
            Total GEMS
          </p>
          <p className="font-editorial text-5xl text-cultural-black">
            {gemCount}
          </p>
        </div>

        <div className="text-center">
          <div className="text-7xl mb-4">🌍</div>
          <p className="text-caption font-modern text-cultural-gray mb-2 uppercase tracking-wider">
            Scenes Explored
          </p>
          <p className="font-editorial text-5xl text-cultural-black">
            7
          </p>
        </div>

        <div className="text-center">
          <div className="text-7xl mb-4">📚</div>
          <p className="text-caption font-modern text-cultural-gray mb-2 uppercase tracking-wider">
            Posts Curated
          </p>
          <p className="font-editorial text-5xl text-cultural-black">
            {Math.floor(gemCount / 50)}
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-section">
        <h2 className="font-editorial text-heading text-cultural-black mb-12">
          How GEMS Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="pb-6 border-b border-cultural-light-gray">
              <h3 className="font-modern text-subheading font-semibold text-cultural-black mb-3">
                Discover Content
              </h3>
              <p className="text-body font-modern text-cultural-gray">
                Explore cultural trends, internet moments, and emerging aesthetics. Each discovery adds to your GEMS balance.
              </p>
            </div>

            <div className="pb-6 border-b border-cultural-light-gray">
              <h3 className="font-modern text-subheading font-semibold text-cultural-black mb-3">
                Engage Meaningfully
              </h3>
              <p className="text-body font-modern text-cultural-gray">
                Comment, analyze, and contribute your perspective. Meaningful engagement multiplies GEMS earned.
              </p>
            </div>

            <div className="pb-6 border-b border-cultural-light-gray">
              <h3 className="font-modern text-subheading font-semibold text-cultural-black mb-3">
                Build Your Reputation
              </h3>
              <p className="text-body font-modern text-cultural-gray">
                As your GEMS grow, your cultural authority within the platform increases. Top curators become editors.
              </p>
            </div>
          </div>

          <div className="bg-cultural-off p-8 rounded">
            <h3 className="font-modern text-subheading font-semibold text-cultural-black mb-6">
              GEMS Scoring
            </h3>
            <ul className="space-y-4 text-body font-modern text-cultural-gray">
              <li className="flex justify-between">
                <span>Post Discovery</span>
                <span className="font-semibold text-cultural-black">+10</span>
              </li>
              <li className="flex justify-between">
                <span>Thoughtful Comment</span>
                <span className="font-semibold text-cultural-black">+25</span>
              </li>
              <li className="flex justify-between">
                <span>Content Contribution</span>
                <span className="font-semibold text-cultural-black">+50</span>
              </li>
              <li className="flex justify-between">
                <span>Trend Prediction</span>
                <span className="font-semibold text-cultural-black">+100</span>
              </li>
              <li className="flex justify-between">
                <span>Curator Milestone</span>
                <span className="font-semibold text-cultural-black">+250</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Actions */}
      <section className="pt-section border-t border-cultural-light-gray">
        <h2 className="font-editorial text-heading text-cultural-black mb-12">
          Actions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button
            onClick={() => setGemCount(gemCount + 10)}
            className="p-8 border border-cultural-black text-cultural-black hover:bg-cultural-black hover:text-cultural-white transition-colors text-center"
          >
            <div className="text-3xl mb-2">+10 GEMS</div>
            <p className="text-caption font-modern">Add Gem</p>
          </button>

          <button className="p-8 border border-cultural-gray text-cultural-gray hover:bg-cultural-gray hover:text-cultural-white transition-colors text-center">
            <div className="text-3xl mb-2">📊</div>
            <p className="text-caption font-modern">Analyze Post</p>
          </button>

          <button className="p-8 border border-cultural-gray text-cultural-gray hover:bg-cultural-gray hover:text-cultural-white transition-colors text-center">
            <div className="text-3xl mb-2">✍️</div>
            <p className="text-caption font-modern">Write Review</p>
          </button>
        </div>
      </section>
    </div>
  );
}
