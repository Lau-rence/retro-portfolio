import { Icon, Text, VStack } from "@chakra-ui/react";
import { BiEnvelope } from "react-icons/bi";
import { FcFolder, FcAbout, FcOpenedFolder } from "react-icons/fc";
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const sidebar = [
        {
            title: 'About me',
            icon: FcAbout,
            color: 'transparent',
            link: '/'
        },
        {
            title: 'Skills & Experience',
            icon: FcFolder,
            color: 'transparent',
            link: '/awards&experience'
        },
        {
            title: 'Projects',
            icon: FcOpenedFolder,
            color: 'transparent',
            link: '/'
        },
        {
            title: 'Contact',
            icon: BiEnvelope,
            color: 'red',
            link: '/'
        }
    ]
    return ( 
        <>
            <VStack width={'10%'} mt={'30px'}>
                {sidebar.map(info=>(
                    <Link  
                    to={info.link}
                    >
                        <VStack justifyContent={'center'} spacing={0} cursor={'pointer'}>
                            <Icon as={info.icon} boxSize={'50px'} color={info.color}/>
                            <Text
                                color={'white'}
                                textShadow="2px 2px 4px black"
                                fontSize="sm"
                                fontFamily={'Courier New, monospace'}
                                align={'center'}
                            >{info.title}</Text>
                        </VStack>
                    </Link>
                ))}
            </VStack>
        </>
     );
}
 
export default Sidebar;