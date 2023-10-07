import React from 'react';
import { Box, Button, Icon, Text } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { BiWindow } from "react-icons/bi";

const WindowComponent = ({ title, content, onClose }) => {
  return (
    <Box
      bg={"black"}
      fontSize={"sm"}
      border={'1.5px solid black'}
      fontFamily={"Courier New, monospace"}
    >
      <Box
        bg={"white"}
        display={"flex"}
        alignItems={"center"}
        border={'1.6px solid gray'}
        justifyContent={"space-between"}
      >
        <Box
            width={'24px'}
            height={'24px'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            borderRight={'1.6px solid gray'}
        >
            <Icon as={BiWindow} boxSize={4}></Icon>
        </Box>
        <Box
            pl={2}
            width={'100%'} 
            height={'24px'}
            display={'flex'}
            alignItems={'center'}
            borderX={'1.6px solid gray'}
        >
            <Text
                color={'black'}
            >
                {title}
            </Text>
        </Box>
        <Box
            height={'100%'} 
            cursor={'pointer'}
            borderLeft={'1.6px solid gray'} 
        >
            <Button 
                mx={1}
                size={"xs"}
                onClick={onClose}
                bgColor={'transparent'} 
            >
                <CloseIcon
                    boxSize={2.5}
                />
            </Button>
        </Box>
      </Box>
      <Box>
        {content}
      </Box>
      
    </Box>
  );
};

export default WindowComponent;
