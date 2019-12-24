import React from 'react';
import styled from '@stream-io/styled-components';
import Moment from 'moment';
import { Avatar } from './Avatar';
import PropTypes from 'prop-types';
import { withTranslationAndStatics } from '../utils';

const Date = styled.Text`
  font-size: 10;
  color: rgba(0, 0, 0, 0.5);
  ${({ theme }) => theme.messageList.eventIndicator.date.css}
`;

const MemberUpdateContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  ${({ theme }) => theme.messageList.eventIndicator.memberUpdateContainer.css}
`;

const MemberUpdateTextContainer = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  ${({ theme }) =>
    theme.messageList.eventIndicator.memberUpdateTextContainer.css}
`;

const MemberUpdateText = styled.Text`
  font-size: 13px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.5);
  ${({ theme }) => theme.messageList.eventIndicator.memberUpdateText.css}
`;

/**
 * A component to display a message regarding channel notifications such as
 * 'member.added', 'member.removed' etc.
 */
let EventIndicator = ({ event, t }) => {
  if (event.type === 'member.added' || event.type === 'member.removed') {
    return (
      <MemberUpdateContainer>
        <Avatar name={event.user.name} image={event.user.image} />
        <MemberUpdateTextContainer>
          <MemberUpdateText>
            {event.type === 'member.added'
              ? t('chat.channel.memberAdded', { username: event.user.name })
              : t('chat.channel.memberAdded', { username: event.user.name })}
          </MemberUpdateText>
          <Date>{Moment(event.received_at).format('hh:mm A')}</Date>
        </MemberUpdateTextContainer>
      </MemberUpdateContainer>
    );
  }

  return null;
};

EventIndicator.propTypes = {
  event: PropTypes.object,
};

EventIndicator = withTranslationAndStatics(EventIndicator);
export { EventIndicator };
