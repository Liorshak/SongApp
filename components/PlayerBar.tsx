import {Flex, Box, Text} from '@chakra-ui/layout'
import Player from './player';

const PlayerBar= ()=>{
    return (
        <Box height="100" width="100vw" bg="gray.900" padding="10px" >
            <Flex align="center" justify="space-between">
        <Box padding="20px" color="white" width="30%">
            <Text fontSize="large">Song Name</Text>
            <Text fontSize="sm">Artist Name</Text>
        </Box>

        <Box width="40%"><Player/></Box>

            </Flex>

        </Box>
    )
}
export default PlayerBar
