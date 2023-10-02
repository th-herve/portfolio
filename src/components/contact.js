import Input from './utils/textInput';

export default function Contact() {
  return (
    <form action="" method="" className="p-10">
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
      </div>
      <textarea
        id=""
        name="message"
        rows="10"
        className="h-10 w-[100%] rounded-md bg-white p-3 font-bold placeholder:text-lightGray focus:border-2 focus:border-cyan focus:outline-none focus:placeholder:text-white"
      >
        Your message
      </textarea>
      <div className="flex justify-center">
        <button type="submit">Send</button>
      </div>
    </form>
  );
}
