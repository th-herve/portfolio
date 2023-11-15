export default function Input({
  id,
  placeholder,
  name,
  value,
  onChange,
  type = 'text',
  hasLabel = false,
  labelText = '',
}) {
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
        className="h-10 w-[100%] rounded-md border-2 border-white p-3 font-bold placeholder:text-lightGray focus:border-cyan focus:outline-none focus:placeholder:text-white"
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required
      ></input>
    </>
  );
}
