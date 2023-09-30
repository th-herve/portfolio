export default function About({ fullName, jobTitle, description }) {
  const commonClassName = 'mb-5'; // the ones that can be inherited go into the wrapper div
  return (
    <div
      className="flex 
                 w-screen 
                 justify-center 
                 bg-[url('https://images.unsplash.com/photo-1448067686092-1f4f2070baae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] 
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
