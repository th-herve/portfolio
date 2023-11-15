import { useTranslation } from 'react-i18next';

import Input from './utils/textInput';
import Title from './utils/title';

// TODO Have the form and textarea be their own components

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-black to-gray">
      <form action="" method="" className="p-5  ">
        <Title titleText={t('contact.title')} />
        <div className="mb-10">
          <div className="flex gap-3">
            <div>
              <Input
                id="firstName"
                placeholder={t('contact.firstNamePlaceHolder')}
                name="firstName"
                hasLabel={true}
                labelText={t('contact.firstName')}
              />
            </div>
            <div>
              <Input
                id="lastName"
                placeholder={t('contact.lastNamePlaceHolder')}
                name="lastName"
                hasLabel={true}
                labelText={t('contact.lastName')}
              />
            </div>
          </div>
          <Input
            id="email"
            placeholder={t('contact.emailPlaceHolder')}
            name="email"
            hasLabel={true}
            labelText={t('contact.email')}
          />

          <label className="font-bold text-cyan" htmlFor="message">
            {t('contact.message')}
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
              {t('contact.send')}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
