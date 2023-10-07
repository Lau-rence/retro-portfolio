import { Container, Box, Text, Image, HStack, VStack } from "@chakra-ui/react";

//Component
import WindowComponent from "./WindowComponent";

const Profile = () => {
    return ( 
        <Box 
            as={'section'}
            position={'relative'}
        >   
            <Box>{/** Picture */}
                <Box
                    pos={'absolute'}
                    zIndex={2}
                    left={0} 
                    top={0}
                >
                    <WindowComponent
                        title={'photo.jpg'}
                        windowStyle={'black'} 
                        content={
                            <Image height={'380px'} width={'auto'} src={'profilepic.jpg'}/>
                        }
                    />
                </Box>
                <Box
                    pos={'absolute'}
                    zIndex={1}
                    left={8} 
                    top={5}
                >
                    <WindowComponent
                        title={'photo.jpg'}
                        windowStyle={'black'} 
                        content={
                            <Image height={'380px'} width={'auto'} src={'profilepic.jpg'}/>
                        }
                    />
                </Box>
                <Box
                    pos={'absolute'}
                    zIndex={0}
                    left={16} 
                    top={10}
                >
                    <WindowComponent
                        title={'photo.jpg'}
                        windowStyle={'black'}  
                        content={
                            <Image height={'380px'} width={'auto'} src={'profilepic.jpg'}/>
                        }
                    />
                </Box>
            </Box>
            {/** About me*/}
            <Box 
                pos={'absolute'}
                right={0}
                top={'80px'}
            >
                <WindowComponent
                    title={'About me~'}
                    windowStyle={'white'}
                    content={ //Content Design
                        <Box 
                            color={'white'}
                            width={'880px'}
                            pl={'15px'}
                        >   <HStack>
                                <VStack>
                                    <Text>1 #</Text>
                                    <Text>2 #</Text>
                                    <Text>3 #</Text>
                                    <Text>4 #</Text>
                                    <Text>5 #</Text>
                                    <Text>6 #</Text>
                                    <Text>7 #</Text>
                                </VStack>
                                <Text
                                    fontSize={'50px'}
                                >
                                    Laurence Santos
                                </Text>
                            </HStack>
                            <HStack>
                                <Box width={'33.33%'} borderColor={'white'} borderStyle="dashed" borderWidth="1px"></Box>
                                <Text width={'33.33%'}>Junior Full-Stack Developer</Text>
                                <Box width={'33.33%'} borderColor={'white'} borderStyle="dashed" borderWidth="1px"></Box>
                            </HStack>
                        </Box>
                    }
                />
            </Box>
        </Box>
     );
}
 
export default Profile;