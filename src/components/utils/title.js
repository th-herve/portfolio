export default function Title({
  titleText,
  mb = '10',
  className = 'text-4xl font-bold text-cyan dark:text-dark_cyan',
}) {
  return (
    <div className={'mb-' + mb + ' border-b-2 border-solid border-cyan dark:border-dark_cyan'}>
      <h2 className={className}>{titleText}</h2>
    </div>
  );
}
