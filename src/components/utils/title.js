export default function Title({ titleText, mb = '10', className = 'text-4xl font-bold text-cyan' }) {
  return (
    <div className={'mb-' + mb + ' border-b-2 border-solid border-cyan'}>
      <h2 className={className}>{titleText}</h2>
    </div>
  );
}
