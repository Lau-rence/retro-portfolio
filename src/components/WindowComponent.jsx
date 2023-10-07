import React from 'react';
import { Box, Button, HStack, Icon, Text } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { BiWindow } from "react-icons/bi";

const WindowComponent = ({ title, content, onClose, windowStyle }) => {
    let titleBGColor, titleColor, titleFont, titleWeight, titleSize, bodySide, footerBGColor;
    switch(windowStyle){
        case 'black': //Black Design Layout
            //Title Design
            titleBGColor = 'black';
            titleColor = 'white';
            titleFont = "Courier New, monospace";
            titleWeight = 400;
            titleSize = '15px';
            //Body Design
            bodySide = 'block';
            //Footer Design
            footerBGColor = '#b0b0b0';
        break;
        case 'white': //White Design Layout
            //Title Design
            titleBGColor = 'white';
            titleColor = 'black';
            titleFont = "Kanit";
            titleWeight = 500;
            titleSize = '18px';
            //Body Design
            bodySide = 'none';
            //Footer Design
            footerBGColor = '#515151';
        break;


    }

  return (
    <Box
      fontSize={"sm"}
      border={'1.5px solid black'}
      fontFamily={"Courier New, monospace"}
      height={'max-content'}
      borderRadius={'4px'}
      width={'fit-content'}
      boxShadow={'2px 5px 4px black'}
    >
        {/** Window Title Design */}
        <Box
            bg={titleBGColor}
            display={"flex"}
            alignItems={"center"}
            border={'1.6px solid gray'}
            justifyContent={"space-between"}
            color={titleColor}
        >
            <Box
                width={'24px'}
                height={'24px'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                borderRight={'1.6px solid gray'}
            >
                <Icon
                    boxSize={4}
                    as={ BiWindow } 
                />
            </Box>
            <Box
                pl={2}
                width={'100%'} 
                height={'24px'}
                display={'flex'}
                alignItems={'center'}
                borderX={'1.6px solid gray'}
                justifyContent={'center'}
            >
                <Text
                    fontFamily={titleFont}
                    fontWeight={titleWeight}
                    fontSize={titleSize}
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
                    m={0}
                    p={0}
                    size={"xs"}
                    onClick={onClose}
                    bgColor={'transparent'} 
                >
                    <CloseIcon
                        boxSize={2.5}
                        color={titleColor}
                    />
                </Button>
            </Box>
        </Box>
        {/** Window Body Design */}
        <Box 
            height={'100%'}
            display={'flex'}
            bgColor={"black"}
        >
            <Box
                display={bodySide}
                width={'18px'}
                bgColor={'#7e7d7d'}
                border={'1.6px solid #909090'}
            />
            <Box
                width={'fit-content'}
                height={'100%'}
            >
                {content}
            </Box>
        </Box>
        {/** Window Footer Design*/}
        <Box height={'10px'} width={'100%'} bgColor={footerBGColor}/>
    </Box>
  );
};

export default WindowComponent;
