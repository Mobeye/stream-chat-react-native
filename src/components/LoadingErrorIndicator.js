import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { withTranslationAndStatics } from '../utils';

let LoadingErrorIndicator = ({ listType, t }) => {
  let Loader;
  switch (listType) {
    case 'channel':
      Loader = <Text>{t('chat.error.loadingError.channel')}</Text>;
      break;
    case 'message':
      Loader = <Text>{t('chat.error.loadingError.message')}</Text>;
      break;
    default:
      Loader = <Text>{t('chat.error.loadingError.default')}</Text>;
      break;
  }

  return Loader;
};

LoadingErrorIndicator.propTypes = {
  listType: PropTypes.oneOf(['channel', 'message', 'default']),
};

LoadingErrorIndicator = withTranslationAndStatics(LoadingErrorIndicator);
export { LoadingErrorIndicator };
