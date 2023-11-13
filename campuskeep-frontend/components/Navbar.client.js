'use client'

import React, { useState } from 'react';
import { 
  Box, 
  Flex, 
  Text, 
  IconButton, 
  Collapse, 
  Link, 
  useDisclosure, 
  Stack 
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [display, changeDisplay] = useState('none');

  return (
    <Box>
      <IconButton
        aria-label="Open Menu"
        size="lg"
        mr={2}
        icon={<HamburgerIcon />}
        onClick={() => changeDisplay('flex')}
        display={['flex', 'flex', 'none', 'none']}
      />

      <Flex align="center">
        <Text fontSize="xl" fontWeight="light">
          Campus Keep
        </Text>
      </Flex>
      
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        pb={8}
        p={8}
        bg='white'
        color='black'
      >

        <Stack
          direction={['column', 'row', 'row', 'row']}
          display={[display, display, 'flex', 'flex']}
          width={['full', 'full', 'auto', 'auto']}
          alignItems="center"
          flexGrow={1}
          mt={[4, 0, 0, 0]}
        >
          <Link href="#">Home</Link>
          <Link href="#">Lost Items</Link>
          <Link href="#">Categories</Link>
          <Link href="#">Sign Up / Sign In</Link>
        </Stack>

        <IconButton
          aria-label="Close Menu"
          size="lg"
          icon={<CloseIcon />}
          onClick={() => changeDisplay('none')}
          display={[display, display, 'none', 'none']}
        />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Flex
          display={[isOpen ? 'flex' : 'none', isOpen ? 'flex' : 'none', 'none', 'none']}
          direction="column"
          bg="primary.500"
          p={4}
          rounded="md"
          shadow="md"
        >
          <Link href="#">Home</Link>
          <Link href="#">Lost Items</Link>
          <Link href="#">Categories</Link>
          <Link href="#">Sign Up / Sign In</Link>
        </Flex>
      </Collapse>
    </Box>
  );
};

export default Navbar;
