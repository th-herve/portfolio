import { FaSquareGithub } from 'react-icons/fa6';

export default function GithubLink({ href = '' }) {
  return (
    <a href={href}>
      <FaSquareGithub size="50px" className="text-white" />
    </a>
  );
}
