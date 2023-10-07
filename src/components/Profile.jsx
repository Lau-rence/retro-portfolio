import { Container, Box } from "@chakra-ui/react";

//Component
import WindowComponent from "./WindowComponent";

const Profile = () => {
    return ( 
        <Container 
            as={'section'}
        >
            <WindowComponent title={'Title'} content={'Content'}/>
        </Container>
     );
}
 
export default Profile;