//EM TYPESCRIPT
import React from 'react';

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

export interface Props {
    channelName: string;
    selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({
    channelName,
    selected
}) => {
    return (
       <Container className={selected ? 'active' : ''} >
          <div className="left-div">
            <HashtagIcon className="hashtag-icon"/>
            <span>{channelName}</span>
          </div>
          <div className="right-div">
            <InviteIcon className="invite-icon"/>
            <SettingsIcon className="settings-icon"/>
          </div>
       </Container>
    );    
};

export default ChannelButton;


