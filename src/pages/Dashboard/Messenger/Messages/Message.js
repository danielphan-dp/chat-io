import React from 'react';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import Avatar from '../../../../components/Avatar';

const Wrapper = styled('div')({ width: '97%', display: 'flex', marginTop: '10px' });
const MessageWrapper = styled('div')({ display: 'flex', flexDirection: 'column' });
const AvatarWrapper = styled('div')({ width: '70px' });
const MessageContent = styled('div')({ color: '#DCDDDE' });

const SameAuthorMessageText = styled('span')({ marginLeft: '70px' });
const SameAuthorMessageContent = styled('div')({ color: '#DCDDDE', width: '97%' });

const Message = ({ content, sameAuthor, username, date, sameDay }) => {
  if (sameAuthor && sameDay) {
    return (
      <SameAuthorMessageContent>
        <SameAuthorMessageText>{content}</SameAuthorMessageText>
      </SameAuthorMessageContent>
    );
  }

  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar username={username} />
      </AvatarWrapper>
      <MessageWrapper>
        <Typography style={{ fontSize: '16px', color: 'white' }}>
          {username} <span style={{ fontSize: '12px', color: '#72767d' }}>{date}</span>
        </Typography>
        <MessageContent>{content}</MessageContent>
      </MessageWrapper>
    </Wrapper>
  );
};

export default Message;
