import React from 'react';
import { motion } from 'framer-motion';
import { Star, Code2, ExternalLink, Calendar } from 'lucide-react';

interface Repository {
  name: string;
  description: string;
  html_url: string;
  created_at: string;
  stargazers_count: number;
  language: string;
}

interface RepoCardProps {
  repo: Repository;
  index: number;
}

const RepoCard: React.FC<RepoCardProps> = ({ repo, index }) => {
  const isEven = index % 2 === 0;
  const date = new Date(repo.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <motion.div
      className="repo-card-container"
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <div className="timeline-dot" />
      
      <div className={`repo-card ${isEven ? 'left' : 'right'}`}>
        <div className="repo-date">
          <Calendar size={12} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />
          {date}
        </div>
        
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-name">
          {repo.name} <ExternalLink size={16} style={{ display: 'inline', verticalAlign: 'middle' }} />
        </a>
        
        <p className="repo-desc">
          {repo.description || "No description provided."}
        </p>
        
        <div className="repo-meta">
          {repo.language && (
            <span className="tag">
              <Code2 size={14} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />
              {repo.language}
            </span>
          )}
          <span className="meta-item">
            <Star size={14} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />
            {repo.stargazers_count}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default RepoCard;
