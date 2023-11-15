import { useTranslation } from 'react-i18next';

export default function About() {
  const fullName = 'Thibault Hervé';

  const { t } = useTranslation();
  return (
    <div className="flex h-screen w-[80%] justify-center bg-dark py-10 md:p-20">
      <div className="text-6xl font-bold text-white ">
        <h1 className="mb-5 text-cyan">{t('about.hello')}</h1>
        <h1 className="mb-5 text-3xl md:text-5xl">{t('about.IAm') + fullName}</h1>
        <h2 className="mb-5 text-3xl text-cyan md:text-5xl">{t('about.jobTitle')}</h2>
        <p className="mb-5 text-xl md:text-3xl">{t('about.description')}</p>
      </div>
    </div>
  );
}
