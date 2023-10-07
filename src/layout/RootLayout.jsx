import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
const RootLayout = () => {
    return ( 
        <>
            <Box 
                bgImage={'url(https://img.wallpapersafari.com/desktop/800/450/28/33/DQ9F3O.jpg)'}
                height={'100vh'}
                width={'100%'}
                bgRepeat={'no-repeat'}
                bgPosition={'center'}
                bgSize={'cover'}
                display={'flex'}
                flexDir={'row'}
            >
                <Sidebar/>
                <Outlet/>
            </Box>
        </>
     );
}
 
export default RootLayout;