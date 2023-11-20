import { FaGithub } from 'react-icons/fa6';

export default function GithubLink({ href = '', size = '50px' }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <FaGithub size={size} className="text-text dark:text-dark_text" />
    </a>
  );
}
