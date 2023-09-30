export default function Link({ text, key, link = '#' }) {
  return (
    <a key={key} href={link} className="m-9 hover:text-cyan">
      {text}
    </a>
  );
}
