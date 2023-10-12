export default function LiBig({ text, className }) {
  // note: the key must be defined when calling the component

  className = 'text-white text-2xl' + className;
  let capitalizeText = text[0].toUpperCase() + text.substring(1, text.length).toLowerCase();

  return <li className={className}>{capitalizeText}</li>;
}
