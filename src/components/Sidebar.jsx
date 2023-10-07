import { Icon, Text, VStack } from "@chakra-ui/react";
import { AiFillFolder } from "react-icons/ai";
const Sidebar = () => {
    const sidebar = [
        {
            title: 'Profile'
        },
        {
            title: 'Experience'
        },
        {
            title: 'Projects'
        },
        {
            title: 'Contact'
        }
    ]
    return ( 
        <>
            <VStack width={'10%'}>
                {sidebar.map(info=>(
                    <VStack justifyContent={'center'} spacing={0} cursor={'pointer'}>
                        <Icon as={AiFillFolder} boxSize={'80px'} color={'#ffe791'}/>
                        <Text
                            fontSize="sm"
                            fontFamily={'Courier New, monospace'}
                        >{info.title}</Text>
                    </VStack>
                ))}
            </VStack>
        </>
     );
}
 
export default Sidebar;