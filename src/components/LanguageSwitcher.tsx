// // components/LanguageSwitcher.tsx

// import { useTranslation } from 'next-i18next';

// const LanguageSwitcher = () => {
//   const { i18n } = useTranslation();

//   const toggleLanguage = () => {
//     const newLang = i18n.language === 'pt' ? 'en' : 'pt';
//     i18n.changeLanguage(newLang);
//   };

//   return (
//     <div className="flex gap-2">
//       {i18n.language === 'pt' ? (
//         <img
//           src="/images/bandeira-brasil.png"
//           alt="PT"
//           onClick={toggleLanguage}
//           className="cursor-pointer w-8 h-8"
//         />
//       ) : (
//         <img
//           src="/images/bandeira-eua.png"
//           alt="EN"
//           onClick={toggleLanguage}
//           className="cursor-pointer w-8 h-8"
//         />
//       )}
//     </div>
//   );
// };

// export default LanguageSwitcher;
