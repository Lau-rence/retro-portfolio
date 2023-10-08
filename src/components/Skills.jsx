import { Box, HStack, Image, Text } from "@chakra-ui/react";
import Marquee from 'react-fast-marquee';

const Skills = () => {
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
    return ( 
        <>
            {/**Skills */}
            <Box
                width={'100%'}
                display={'flex'}
                flexDir={'row'}
                bgColor={'#242424'}
                height={'max-content'}
                justifyContent={'center'}
            >
                <Box
                    w={'10%'}
                    p={'10px'}
                    m={'10px'}
                    bgColor={'black'}
                    display={'flex'}
                    flexDir={'column'}
                    align={'center'}
                >
                    <Text
                        color={'#FFF'}
                    >
                        Skills
                    </Text>
                    <Box display={'flex'} justifyContent={'center'}>
                        <Image
                            height={'40px'}
                            width={'40px'}
                            src={"https://silly.cf/img/logo.png"}
                        />
                    </Box>
                </Box>
                <Box
                    color={'white'}
                    width={'90%'}
                    pt={10}
                    pl={4}
                >
                    <Marquee style={{width: '1050px'}} autoFill>
                        <HStack spacing={10}>
                            {skills.map(info=>(
                                    <Text>{info.title}</Text>
                            ))}
                       </HStack>
                    </Marquee>
                </Box>
            </Box>
        </>
     );
}
 
export default Skills;