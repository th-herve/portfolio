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
        <label htmlFor={id} className="font-bold text-cyan dark:text-dark_cyan">
          {labelText}
        </label>
      ) : (
        ''
      )}

      <input
        className="h-10 w-[100%] rounded-md border-2 border-text p-3 font-bold placeholder:text-gray focus:border-cyan focus:outline-none focus:placeholder:text-bg1  dark:border-dark_text dark:placeholder:text-dark_lightGray dark:focus:border-dark_cyan dark:focus:placeholder:text-dark_text"
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
