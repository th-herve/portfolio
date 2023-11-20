import { forwardRef } from 'react';

// forwardRef allows to create ref in the parent elements
export default forwardRef(function LiBig({ text, className, selected = false, href = '#' }, ref) {
  let textColor = selected ? 'text-cyan dark:text-dark_cyan' : 'text-text dark:text-dark_text';
  className =
    textColor + ' ' + 'text-4xl py-4 pl-20 text-right border-text dark:border-dark_text border-t-2' + ' ' + className;
  let capitalizeText = text[0].toUpperCase() + text.substring(1, text.length).toLowerCase();

  return (
    <li ref={ref} href={href} className={className}>
      {capitalizeText}
    </li>
  );
});

// export default function LiBig({ text, className, selected = false, href = '#' }) {
//   // note: the key must be defined when calling the component

//   let textColor = selected ? 'text-cyan dark:dark_cyan' : 'text-text dark:dark_text';
//   className = textColor + ' ' + 'text-4xl py-4 pl-20 text-right border-text dark:dark_text border-t-2' + ' ' + className;
//   let capitalizeText = text[0].toUpperCase() + text.substring(1, text.length).toLowerCase();

//   return (
//     <li href={href} className={className}>
//       {capitalizeText}
//     </li>
//   );
// }
