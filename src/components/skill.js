import { FaReact } from 'react-icons/fa6';

export default function Skill() {
  return (
    <div
      className="
                    bg-[url('https://images.unsplash.com/photo-1448067686092-1f4f2070baae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] 
                    p-8 text-cyan"
    >
      <div className="rounded-md bg-black p-3">
        <FaReact size={100} />
      </div>
    </div>
  );
}
