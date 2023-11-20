import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import Input from './utils/textInput';
import Title from './utils/title';

// TODO Have the form and textarea be their own components

export default function Contact() {
  const { t } = useTranslation();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm(inputs);
  };

  const submitForm = async (formData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-bg1 to-gray dark:from-dark_bg1 dark:to-dark_gray">
      <form onSubmit={handleSubmit} className="p-5  ">
        <Title titleText={t('contact.title')} />
        <div className="mb-10">
          <div className="flex gap-3">
            <div className="flex-1">
              <Input
                id="firstName"
                placeholder={t('contact.firstNamePlaceHolder')}
                name="firstName"
                hasLabel={true}
                labelText={t('contact.firstName')}
                value={inputs.firstName || ''}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1">
              <Input
                id="lastName"
                placeholder={t('contact.lastNamePlaceHolder')}
                name="lastName"
                hasLabel={true}
                labelText={t('contact.lastName')}
                value={inputs.lastName || ''}
                onChange={handleChange}
              />
            </div>
          </div>

          <Input
            id="email"
            placeholder={t('contact.emailPlaceHolder')}
            name="email"
            hasLabel={true}
            labelText={t('contact.email')}
            value={inputs.email || ''}
            onChange={handleChange}
          />

          <label className="font-bold text-cyan dark:text-dark_cyan" htmlFor="message">
            {t('contact.message')}
          </label>
          <textarea
            id="message"
            name="message"
            rows="10"
            className="h-20 w-full rounded-md border-2 border-text  p-3 font-bold placeholder:text-lightGray focus:border-cyan focus:outline-none focus:placeholder:text-text dark:border-dark_text dark:bg-dark_text dark:placeholder:text-dark_lightGray dark:focus:border-dark_cyan dark:focus:placeholder:text-dark_text"
            value={inputs.message || ''}
            onChange={handleChange}
          ></textarea>

          <div className="m-3 flex justify-center">
            <button
              className="rounded-md border-2 border-cyan bg-bg1 px-9 py-3 font-bold text-cyan transition ease-in-out hover:shadow-md hover:shadow-cyan hover:transition-all dark:border-dark_cyan dark:bg-dark_bg1 dark:text-dark_cyan dark:hover:shadow-dark_cyan "
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
