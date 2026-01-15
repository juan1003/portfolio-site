import { useState, useEffect } from 'react';
import RepoCard from './components/RepoCard';
import { Github, Loader2 } from 'lucide-react';

interface Repository {
  name: string;
  description: string;
  html_url: string;
  created_at: string;
  stargazers_count: number;
  language: string;
}

function App() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/juan1003/repos');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();

        // Sort by created_at date
        const sortedRepos = data.sort((a: Repository, b: Repository) =>
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        );

        setRepos(sortedRepos);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', gap: '12px' }}>
        <Loader2 className="animate-spin" size={32} />
        <p style={{ fontSize: '1.2rem', color: '#8b949e' }}>Loading repositories...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px', color: '#f85149' }}>
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <header>
        <Github size={64} style={{ marginBottom: '24px', color: '#c9d1d9' }} />
        <h1>Juan's Repository Journey</h1>
        <p>A timeline of all the projects I've built on GitHub</p>
      </header>

      <div className="timeline-container">
        <div className="timeline-line" />
        {repos.map((repo, index) => (
          <RepoCard key={repo.name} repo={repo} index={index} />
        ))}
      </div>

      <footer style={{ textAlign: 'center', marginTop: '80px', padding: '40px', color: '#8b949e', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <p>Built with React + Framer Motion</p>
      </footer>
    </div>
  );
}

export default App;
