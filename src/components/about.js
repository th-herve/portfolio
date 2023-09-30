export default function About({ fullName, jobTitle, description }) {
  const commonClassName = 'mb-5'; // the ones that can be inherited go into the wrapper div
  return (
    <div
      className="flex 
                 w-screen 
                 justify-center 
                 bg-[#0B0c10] 
                 p-40"
    >
      <div className=" text-6xl font-bold text-white">
        <h1 className={commonClassName + ' text-cyan'}>Hello,</h1>
        <h1 className={commonClassName + ' '}>I am {fullName}</h1>
        <h2 className={commonClassName + ' text-5xl text-cyan'}>{jobTitle}</h2>
        <p className={commonClassName + ' text-3xl'}>{description}</p>
        <div></div>
      </div>
    </div>
  );
}
