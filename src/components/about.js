export default function About({ fullName, jobTitle, description }) {
  const commonClassName = 'mb-5'; // the ones that can be inherited go into the wrapper div
  return (
    <div
      className="flex 
                 justify-center 
                 bg-dark
                 p-20"
    >
      <div className=" text-6xl font-bold text-white">
        <h1 className={commonClassName + ' text-cyan'}>Hello,</h1>
        <h1 className={commonClassName + ' text-5xl'}>I am {fullName}</h1>
        <h2 className={commonClassName + ' text-5xl text-cyan'}>{jobTitle}</h2>
        <p className={commonClassName + ' text-3xl'}>{description}</p>
      </div>
    </div>
  );
}
