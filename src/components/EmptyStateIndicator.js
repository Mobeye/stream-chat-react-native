import React from 'react';
import { Text } from 'react-native';
import { withTranslationAndStatics } from '../utils';

let EmptyStateIndicator = ({ listType, t }) => {
  let Indicator;
  switch (listType) {
    case 'channel':
      Indicator = <Text>{t('chat.channel.noChannels')}</Text>;
      break;
    case 'message':
      Indicator = null;
      break;
    default:
      Indicator = <Text>{t('chat.channel.noItems')}</Text>;
      break;
  }

  return Indicator;
};

EmptyStateIndicator = withTranslationAndStatics()(EmptyStateIndicator);
export { EmptyStateIndicator };
