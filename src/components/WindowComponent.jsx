import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';

const CmdStyleWindow = ({ title, content, onClose, onMinimize, onMaximize, isMaximized }) => {
  return (
    <Box
      bg="black"
      color="white"
      width={400}
      height={300}
      fontFamily="Courier New, monospace"
      fontSize="sm"
      border={'1.5px solid black'}
    >
      <Box
        bg="white"  // Add a white background to the title area
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        border={'2px solid gray'}
      >
        <Text color={'black'}>{title}</Text>
        <Box height={'100%'} borderLeft={'2px solid gray'} cursor={'pointer'}>
          <Button bgColor={'transparent'} size="xs" mx={1} onClick={onClose}>
            X
          </Button>
        </Box>
      </Box>
      <Box p={2}>{content}</Box>
    </Box>
  );
};

export default CmdStyleWindow;
