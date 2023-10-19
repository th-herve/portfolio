import { FaSquareGithub } from 'react-icons/fa6';

export default function GithubLink({ href = '' }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <FaSquareGithub size="50px" className="text-white" />
    </a>
  );
}
