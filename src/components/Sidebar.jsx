import { Icon, Text, VStack } from "@chakra-ui/react";
import { AiFillFolder } from "react-icons/ai";
import { BsEnvelopeFill } from "react-icons/bs";
import { BiEnvelope } from "react-icons/bi";
import { FcFolder, FcAbout, FcOpenedFolder } from "react-icons/fc";
const Sidebar = () => {
    const sidebar = [
        {
            title: 'About me',
            icon: FcAbout,
            color: 'transparent'
        },
        {
            title: 'Skills & Experience',
            icon: FcFolder,
            color: 'transparent'
        },
        {
            title: 'Projects',
            icon: FcOpenedFolder,
            color: 'transparent'
        },
        {
            title: 'Contact',
            icon: BiEnvelope,
            color: 'red'
        }
    ]
    return ( 
        <>
            <VStack width={'10%'}>
                {sidebar.map(info=>(
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
                ))}
            </VStack>
        </>
     );
}
 
export default Sidebar;