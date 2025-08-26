import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const GitHubStats = ({ githubUsername }) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (!githubUsername) {
      setError("GitHub username not provided in portfolioData.json");
      setLoading(false);
      return;
    }

    const fetchGitHubStats = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch user data (repos, followers)
        const userResponse = await fetch(`https://api.github.com/users/${githubUsername}`);
        if (!userResponse.ok) {
          throw new Error(`GitHub user API error: ${userResponse.statusText}`);
        }
        const userData = await userResponse.json();

        // Fetch all repos to calculate total stars and languages
        const reposResponse = await fetch(`https://api.github.com/users/${githubUsername}/repos?per_page=100`); // Max 100 repos per page
        if (!reposResponse.ok) {
          throw new Error(`GitHub repos API error: ${reposResponse.statusText}`);
        }
        const reposData = await reposResponse.json();

        let totalStars = 0;
        const languages = {};

        reposData.forEach(repo => {
          totalStars += repo.stargazers_count;
          if (repo.language) {
            languages[repo.language] = (languages[repo.language] || 0) + 1;
          }
        });

        // Sort languages by count
        const sortedLanguages = Object.entries(languages)
          .sort(([, countA], [, countB]) => countB - countA)
          .map(([lang]) => lang);

        setStats({
          publicRepos: userData.public_repos,
          followers: userData.followers,
          totalStars,
          topLanguages: sortedLanguages.slice(0, 5), // Get top 5 languages
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, [githubUsername]);

  return (
    <section id="github-stats" className="min-h-screen bg-gray-900 text-white py-16 flex items-center justify-center">
      <div ref={ref} className={`container mx-auto px-6 max-w-6xl text-center transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-12 tracking-tight">My GitHub Stats</h2>

        {loading && <p className="text-xl text-gray-400">Loading GitHub stats...</p>}
        {error && <p className="text-xl text-red-400">Error: {error}</p>}

        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center border border-gray-700">
              <span className="text-5xl font-bold text-blue-300">{stats.publicRepos}</span>
              <p className="text-lg text-gray-300 mt-2 tracking-wide">Public Repos</p>
            </div>
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center border border-gray-700">
              <span className="text-5xl font-bold text-blue-300">{stats.totalStars}</span>
              <p className="text-lg text-gray-300 mt-2 tracking-wide">Total Stars</p>
            </div>
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center border border-gray-700">
              <span className="text-5xl font-bold text-blue-300">{stats.followers}</span>
              <p className="text-lg text-gray-300 mt-2 tracking-wide">Followers</p>
            </div>
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center border border-gray-700">
              <span className="text-xl font-bold text-blue-300 mb-2">Top Languages</span>
              <ul className="text-lg text-gray-300 space-y-1">
                {stats.topLanguages.map((lang, index) => (
                  <li key={index} className="tracking-wide">{lang}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GitHubStats;
