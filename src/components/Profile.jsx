import { Container, Box, Text } from "@chakra-ui/react";

//Component
import WindowComponent from "./WindowComponent";

const Profile = () => {
    return ( 
        <Box 
            as={'section'}
        >
            <WindowComponent title={'Title'} content={<Text color={'white'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</Text>}/>
        </Box>
     );
}
 
export default Profile;