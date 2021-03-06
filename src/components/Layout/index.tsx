//EM TYPESCRIPT
import React from 'react';

import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelInfo from '../ChannelInfo'
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';
import ChannelData from '../ChannelData';
import UserList from '../UserList';

import { Grid } from './styles';

const Layout: React.FC = () => {
    return (
        <Grid>
            <ServerList />
            <ServerName />
            <ChannelInfo />
            <ChannelList />
            <UserInfo />
            <ChannelData />
            <UserList />
        </Grid>
    );    
};

export default Layout;

//EM JAVASCRIPT
/*import React from 'react';

export default function(){
    return(
        <div>Oi mundo!</div>
    )
}
*/