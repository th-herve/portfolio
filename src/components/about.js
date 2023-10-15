export default function About({ fullName, jobTitle, description }) {
  const commonClassName = 'mb-5'; // the ones that can be inherited go into the wrapper div
  return (
    <div className="flex h-screen w-[80%] justify-center bg-dark py-10 md:p-20">
      <div className="text-6xl font-bold text-white ">
        <h1 className={commonClassName + ' text-cyan'}>Hello,</h1>
        <h1 className={commonClassName + ' text-3xl md:text-5xl'}>I am {fullName}</h1>
        <h2 className={commonClassName + ' text-3xl text-cyan md:text-5xl'}>{jobTitle}</h2>
        <p className={commonClassName + ' text-xl md:text-3xl'}>{description}</p>
      </div>
    </div>
  );
}
