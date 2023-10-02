export default function Link({ text, key, href = '#' }) {
  return (
    <a key={key} href={href} className="m-9 hover:text-cyan">
      {text}
    </a>
  );
}
