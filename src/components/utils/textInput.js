export default function Input({ id, placeholder, name, type = 'text', hasLabel = false, labelText = '' }) {
  if (hasLabel) {
    console.log('lable');
  }
  return (
    <>
      {hasLabel ? (
        <label htmlFor={id} className="font-bold text-cyan">
          {labelText}
        </label>
      ) : (
        ''
      )}
      <input
        className="h-10 w-[100%] rounded-md p-3 font-bold placeholder:text-lightGray focus:border-2 focus:border-cyan focus:outline-none focus:placeholder:text-white"
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
      ></input>
    </>
  );
}
