import Input from './utils/textInput';

export default function Contact() {
  return (
    <form action="" method="" className="p-5 md:px-52">
      <h2 className="text-4xl font-bold text-cyan">Contact</h2>
      <div className="mb-10">
        <div className="flex gap-3">
          <div>
            <Input id="firstName" placeholder="First name" name="firstName" hasLabel={true} labelText="First name" />
          </div>
          <div>
            <Input id="lastName" placeholder="Last name" name="lastName" hasLabel={true} labelText="Last name" />
          </div>
        </div>
        <Input id="email" placeholder="yourmail@mail.com" name="email" hasLabel={true} labelText="Email" />

        <label className="font-bold text-cyan" htmlFor="message">
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          rows="10"
          className="h-20 w-[100%] rounded-md bg-white p-3 font-bold placeholder:text-lightGray focus:border-2 focus:border-cyan focus:outline-none focus:placeholder:text-white"
        ></textarea>

        <div className="m-3 flex justify-center">
          <button
            className="rounded-md border-2 border-cyan bg-black px-9 py-3 font-bold text-cyan transition ease-in-out hover:shadow-md hover:shadow-cyan hover:transition-all "
            type="submit"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
}
