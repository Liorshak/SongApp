import NextImage from "next/image"

import {
    Box,
    List,
    ListItem,
    ListIcon,
    Divider,
    Center,
    LinkBox,
    LinkOverlay
} from "@chakra-ui/layout"


const SideBar =()=>{

    return (
        <Box width="100%" height="calc(100vh - 100px)" bg="black" color="gray" paddingX="5px">
            <Box paddingY="20px">

            <Box width="120px" paddingX="20px" marginBottom="20px">
                <NextImage src="/logo.svg" width={120} height={60} />
            </Box>

            </Box>
        </Box>
    )
}
export default SideBar