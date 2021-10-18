import React from 'react';
import {
  VStack,
  Image,
  Button,
  Text,
  Center,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  HStack,
  Box,
} from '@chakra-ui/react';
import community from '../../assets/photos/community.png';
import { Divider } from './Divider';

function Community() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <VStack as={Center} spacing={['5px', '10px', '40px', '45px']}>
        <Text fontSize={['24px', '24px', '32px', '36px']} fontWeight="medium">
          Join our community!
        </Text>
        <Text fontSize={['20px', '20px', '32px', '33px']} fontWeight="bold">
          Why to join us?
        </Text>
        <Flex
          p="40px 0px"
          justify={['stretch', 'stretch', 'stretch', 'space-evenly']}
          w={['95%', '95%', '95%', '95%']}
          h="full"
          overflowY="hidden"
          overflowX="auto"
        >
          <VStack
            boxShadow="5px 5px 11px 0px #0000001A"
            w={['121px', '121px', '121px', '290px']}
            h={['298px', '298px', '298px', '477px']}
            rounded={'17px'}
            bg={'white'}
            as={Center}
            mr="20px"
            flex="0 0 auto"
          >
            <VStack
              fontFamily="Poppins"
              spacing={['10px', '15px', '18px', '25px']}
            >
              <Box as={Center}>
                <Image w={['73px', '73px', '73px', 'full']} src={community} />
              </Box>
              <Text
                fontSize={['12px', '12px', '12px', '24px']}
                textAlign="center"
              >
                Sell Everywhere
              </Text>
              <Text
                w="95%"
                fontSize={['10px', '10px', '10px', '18px']}
                color="#707070"
                textAlign="center"
              >
                Blazing fast web hosting for <br />
                individuals and businesses of all <br />
                sizes backed by 24x7x365 <br />
                Support.Blazing fast web.
              </Text>
            </VStack>
          </VStack>
          <VStack
            boxShadow="5px 5px 11px 0px #0000001A"
            w={['121px', '121px', '121px', '290px']}
            h={['298px', '298px', '298px', '477px']}
            rounded={'17px'}
            bg={'white'}
            as={Center}
            mr="20px"
            flex="0 0 auto"
          >
            <VStack
              fontFamily="Poppins"
              spacing={['10px', '15px', '18px', '25px']}
            >
              <Box as={Center}>
                <Image w={['73px', '73px', '73px', 'full']} src={community} />
              </Box>
              <Text
                fontSize={['12px', '12px', '12px', '24px']}
                textAlign="center"
              >
                Sell Everywhere
              </Text>
              <Text
                w="95%"
                fontSize={['10px', '10px', '10px', '18px']}
                color="#707070"
                textAlign="center"
              >
                Blazing fast web hosting for <br />
                individuals and businesses of all <br />
                sizes backed by 24x7x365 <br />
                Support.Blazing fast web.
              </Text>
            </VStack>
          </VStack>
          <VStack
            boxShadow="5px 5px 11px 0px #0000001A"
            w={['121px', '121px', '121px', '290px']}
            h={['298px', '298px', '298px', '477px']}
            rounded={'17px'}
            bg={'white'}
            as={Center}
            mr="20px"
            flex="0 0 auto"
          >
            <VStack
              fontFamily="Poppins"
              spacing={['10px', '15px', '18px', '25px']}
            >
              <Box as={Center}>
                <Image w={['73px', '73px', '73px', 'full']} src={community} />
              </Box>
              <Text
                fontSize={['12px', '12px', '12px', '24px']}
                textAlign="center"
              >
                Sell Everywhere
              </Text>
              <Text
                w="95%"
                fontSize={['10px', '10px', '10px', '18px']}
                color="#707070"
                textAlign="center"
              >
                Blazing fast web hosting for <br />
                individuals and businesses of all <br />
                sizes backed by 24x7x365 <br />
                Support.Blazing fast web.
              </Text>
            </VStack>
          </VStack>
          <VStack
            boxShadow="5px 5px 11px 0px #0000001A"
            w={['121px', '121px', '121px', '290px']}
            h={['298px', '298px', '298px', '477px']}
            rounded={'17px'}
            bg={'white'}
            as={Center}
            mr="20px"
            flex="0 0 auto"
          >
            <VStack
              fontFamily="Poppins"
              spacing={['10px', '15px', '18px', '25px']}
            >
              <Box as={Center}>
                <Image w={['73px', '73px', '73px', 'full']} src={community} />
              </Box>
              <Text
                fontSize={['12px', '12px', '12px', '24px']}
                textAlign="center"
              >
                Sell Everywhere
              </Text>
              <Text
                w="95%"
                fontSize={['10px', '10px', '10px', '18px']}
                color="#707070"
                textAlign="center"
              >
                Blazing fast web hosting for <br />
                individuals and businesses of all <br />
                sizes backed by 24x7x365 <br />
                Support.Blazing fast web.
              </Text>
            </VStack>
          </VStack>
        </Flex>
      </VStack>
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem count={2} /> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <VStack height="300px" w="full" spacing="30px" as={Center}>
        <Text textAlign="center" fontSize={['20px', '22px', '32px', '36px']}>
          Join our community <br /> to help you grow as choreographers.
        </Text>
        <HStack spacing="30px">
          <Button onClick={onOpen} color="white" bgColor="brand.100" size="lg">
            Join us
          </Button>
          <Button variant="outline" size="lg" color="brand.100">
            {' '}
            Learn more
          </Button>
        </HStack>
      </VStack>
      <Divider />
    </>
  );
}

export default Community;
