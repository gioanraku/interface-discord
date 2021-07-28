import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
       <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage 
                        key={n}
                        author="Xofanna"
                        date="13/07/2021"
                        content="Hidrate-se <3"
                    />
                ))}
                <ChannelMessage
                    author="Groovy"
                    date="15/07/2021"
                    content= {
                        <>
                            <Mention>@Xofanna</Mention>,  Esta é uma mensagem *--* 
                        </>
                    }
                    hasMention
                    isBot
                />
                <ChannelMessage
                    author="Fulano"
                    date="15/07/2021"
                    content= "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                />                    
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre"/>
                <InputIcon />
            </InputWrapper>
       </Container>
    );    
};

export default ChannelData;

