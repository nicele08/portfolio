import React from 'react';
import { withTranslation, useTranslation } from 'react-i18next';
import Keys from 'api/utils/constants/keys';

const Home = () => {
  const { t } = useTranslation();
  // eslint-disable-next-line no-console
  console.log(Keys.REACT_APP_DEFAULT_API_DOMAIN);
  return (
    <>
      <div>Header</div>
      <p>{t('login-title')}</p>
      <div className="flex-grow bg-white">
        The lorem ipsum is a placeholder text used in publishing and
        graphic design. This filler text is a short paragraph that
        contains all the letters of the alphabet. The characters are
        spread out evenly so that the reader&apos;s attention is focu
      </div>
      <div>Footer</div>
    </>
  );
};

export default withTranslation()(Home);
