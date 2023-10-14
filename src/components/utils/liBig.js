export default function LiBig({ text, className, href = '#' }) {
  // note: the key must be defined when calling the component

  className = 'text-white text-4xl py-4 pl-20 text-right border-white border-t-2' + ' ' + className;
  let capitalizeText = text[0].toUpperCase() + text.substring(1, text.length).toLowerCase();

  return (
    <li href={href} className={className}>
      {capitalizeText}
    </li>
  );
}
