import { Box, Flex, Link, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex as="nav" padding="4" bgColor="brand.900" color="white" align="center">
      <Box p="2">
        <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>Home</Link>
      </Box>
      <Spacer />
      <Box p="2">
        <Link as={RouterLink} to="/submit" _hover={{ textDecoration: 'none' }}>Submit Post</Link>
      </Box>
    </Flex>
  );
};

export default Navbar;