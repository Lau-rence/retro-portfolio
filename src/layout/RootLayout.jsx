import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
const RootLayout = () => {
    return ( 
        <>
            <Box 
                bgImage={'url(https://th.bing.com/th/id/R.34eb12435387ac20223261aecfd67491?rik=AGjF1viF9OX3pw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fe%2fc%2f5%2f240271.jpg&ehk=%2fMavB7wOxOVdaoGYBMooza4%2b6B0Gc76atJUhi%2bGEXoE%3d&risl=&pid=ImgRaw&r=0)'}
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