import { Box, Text, Image, HStack, VStack, Spacer } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

//Component
import WindowComponent from "./WindowComponent";

//About me information
const info = [
    {
        type: 'Location',
        color: '#0c7fe0',
        value: 'Santa Maria, Bulacan'     
    },
    {
        type: 'Phone Number',
        color: '#dc0314',
        value: '+63 947 603 2456'     
    },
    {
        type: 'Email',
        color: '#02d3bb',
        value: 'rencesantos14@gmail.com'     
    },
]

//Skills
const skills = [
    {
        title: 'HTML',
        src: ''
    },
    {
        title: 'CSS',
        src: ''
    },
    {
        title: 'JavaScript',
        src: ''
    },
    {
        title: 'React JS',
        src: ''
    },
    {
        title: 'Node JS',
        src: ''
    },
    {
        title: 'Express JS',
        src: ''
    },
    {
        title: 'MySQL',
        src: ''
    },
    {
        title: 'MongoDB',
        src: ''
    },
    {
        title: 'Chakra UI',
        src: ''
    },
    {
        title: 'Git',
        src: ''
    },
    {
        title: 'Github',
        src: ''
    },
    {
        title: 'Bitbucket',
        src: ''
    },
    {
        title: 'C#',
        src: ''
    },
    {
        title: 'PHP',
        src: ''
    },
]

//loops for design
const textElements = [];
for (let i = 1; i <= 7; i++) {
  textElements.push(<Text key={i}>{i} #</Text>);
}

const textElements2 = [];
for (let i = 1; i <= 8; i++) {
    textElements2.push(<Text key={i}>{i}</Text>);
  }

//arrays for design
const myColors = ['#dc0314', '#02d3bb', '#0c7fe0', '#595959', 'white'];
const menubar = ['File', 'Edit', 'Options', 'Buffers', 'Tools', 'Table', 'Org', 'Text', 'Format', 'View'];

const Profile = () => {
    return ( 
        <Box 
            as={'section'}
            w={'100%'}
            h={'100%'}
        >  
            <HStack
                spacing={0}
                position={'relative'}
                align={'start'}    
            >
                <Box
                    width={'320px'}
                    height={'475px'}
                >{/** Picture */}
                    <Box
                        top={'20px'}
                        left={0} 
                        zIndex={2}
                        pos={'absolute'}
                    >
                        <WindowComponent
                            title={'photo.jpg'}
                            windowStyle={'black'} 
                            content={
                                <Image
                                    width={'auto'} 
                                    height={'350px'} 
                                    src={'profilepic.jpg'}
                                />
                            }
                        />
                    </Box>
                    <Box
                        top={'50px'}
                        left={8} 
                        zIndex={1}
                        pos={'absolute'}
                    >
                        <WindowComponent
                            title={'photo.jpg'}
                            windowStyle={'black'} 
                            content={
                                <Image
                                    width={'auto'} 
                                    height={'350px'} 
                                    src={'profilepic.jpg'}
                                />
                            }
                        />
                    </Box>
                    <Box
                        top={'80px'}
                        left={16} 
                        zIndex={0}
                        pos={'absolute'}
                    >
                        <WindowComponent
                            title={'photo.jpg'}
                            windowStyle={'black'}  
                            content={
                                <Image
                                    width={'auto'} 
                                    height={'350px'} 
                                    src={'profilepic.jpg'}
                                />
                            }
                        />
                    </Box>
                </Box>
                {/** About me*/}
                <Box
                    mt={'20px'}
                >
                    <WindowComponent
                        title={'About me~'}
                        windowStyle={'white'}
                        content={ //Content Design
                            <Box 
                                color={'white'}
                                width={'600px'}
                                px={'15px'}
                                pb={'15px'}
                            >   <HStack>
                                    <VStack
                                        spacing={0}
                                    >
                                        {textElements}
                                    </VStack>
                                    <Box
                                        width={'90%'}
                                        display={'flex'} 
                                        justifyContent={'center'} 
                                    >
                                        <Image
                                            src={'name.png'}
                                        />
                                    </Box>
                                </HStack>
                                <HStack>
                                    <Box
                                        width={'36%'} 
                                        borderWidth={"1px"}
                                        borderColor={'white'} 
                                        borderStyle={"dashed"} 
                                    />
                                    <Text
                                        width={'28%'}
                                        textAlign={'center'}
                                    >
                                        JUNIOR FULL-STACK DEVELOPER
                                    </Text>
                                    <Box
                                        width={'36%'} 
                                        borderWidth={"1px"}
                                        borderColor={'white'} 
                                        borderStyle={"dashed"} 
                                    />
                                </HStack>
                                {info.map(i=>(
                                    <HStack>
                                        <Text color={i.color}>{i.type}:</Text>
                                        <Text color={'white'}>{i.value}</Text>
                                    </HStack>
                                ))}
                                <Box
                                    my={'15px'}
                                    width={'100%'} 
                                    borderWidth={"1px"}
                                    borderColor={'white'} 
                                    borderStyle={"dashed"} 
                                />
                                <Box
                                    display={'flex'}
                                    justifyContent={'space-between'}
                                >
                                    <Text
                                        cursor={'pointer'}
                                        textDecoration={'underline'}
                                    >
                                        Download CV here.
                                    </Text>
                                    <HStack
                                        spacing={0}
                                    >
                                        {myColors.map(value=>(
                                            <Box 
                                            width={'20px'}
                                            height={'15px'}
                                            bgColor={value}
                                        />
                                        ))}
                                    </HStack>
                                </Box>
                            </Box>
                        }
                    />
                </Box>
            </HStack>
            {/** Education */}
            <HStack
                spacing={0}
                pos={'relative'}
            >
                <Box
                    pos={'absolute'}
                    top={0}
                    zIndex={1}
                >
                    <WindowComponent
                        title={''}
                        windowStyle={'black'}
                        content={
                            <Box
                                bgColor={'white'}
                            >
                                <Text
                                    fontSize={'40px'}
                                >
                                    @My Education
                                </Text>
                            </Box>
                        }
                    />
                </Box>
                <Box
                    pos={'absolute'}
                    top={'-90px'}
                    left={'320px'}
                    zIndex={0}
                >
                    <WindowComponent
                        title={''}
                        windowStyle={'gray'}
                        content={
                            <Box
                                width={'fit-content'}
                                bgColor={"white"}
                            >
                                <Box
                                    display={'flex'}
                                    flexDir={'row'}
                                    bgColor={'#Fbf8f9'}
                                    gap={5}
                                    pl={3}
                                    borderBottom={'1.5px solid #a6a6a6' }
                                >
                                    {menubar.map(value=>(
                                        <Text>{value}</Text>
                                    ))}
                                </Box>
                                <HStack
                                    pt={2}
                                    px={5}
                                    spacing={10}
                                >
                                    <VStack
                                        spacing={0}
                                    >
                                        {textElements2}
                                    </VStack>
                                    <Box>
                                        <HStack
                                            fontWeight={'bold'}
                                        >
                                            <Text
                                                color={'blue'}
                                            >
                                                # Secondary |
                                            </Text>
                                            <Text
                                                color={'red'}
                                            >
                                                2017-2019
                                            </Text>
                                        </HStack>
                                        <Text 
                                            fontStyle={'italic'}
                                        >
                                            Sacred Heart Academy of Sta. Maria (Bulacan), Inc.
                                        </Text>
                                        <Text
                                            fontWeight={'bold'}
                                        >
                                            Science Technology Engineering Mathematics (STEM)
                                        </Text>
                                        <Spacer 
                                            height={'5px'}
                                        />
                                        <HStack
                                            fontWeight={'bold'}
                                        >
                                            <Text
                                                color={'blue'}
                                            >
                                                # Tertiary |
                                            </Text>
                                            <Text
                                                color={'red'}
                                            >
                                                2019-2023
                                            </Text>
                                        </HStack>
                                        <Text 
                                            fontStyle={'italic'}
                                        >
                                            Polytechnic University of the Philippines Santa Maria Bulacan Campus
                                        </Text>
                                        <Text 
                                            fontWeight={'bold'}
                                        >
                                            Bachelor of Science in Information Technology (BSIT)
                                        </Text>
                                    </Box>
                                </HStack>
                            </Box>
                        }
                    />
                </Box>
            </HStack>
        </Box>
     );
}
 
export default Profile;