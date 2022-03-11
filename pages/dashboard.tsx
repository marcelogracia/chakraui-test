import { Avatar, Flex, Heading, Icon, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { FiHome } from 'react-icons/fi'

const dashboard = () => {
  return (
    <Flex h="100vh" flexDir={'row'} overflow="hidden" maxW={'2000px'}>
      {/* column 1 */}
      <Flex
        w="15%"
        flexDir={'column'}
        alignItems="center"
        backgroundColor={'#020202'}
        color="#fff"
      >
        <Flex flexDirection={'column'} justifyContent="space-between" h="100vh">
          <Flex flexDir={'column'} as="nav">
            <Heading
              mt={50}
              mb={100}
              fontSize="4xl"
              alignSelf={'center'}
              letterSpacing="tight"
            >
              Raise.
            </Heading>
            <Flex
              flexDir={'column'}
              align="flex-start"
              justifyContent={'center'}
            >
              <Flex className="sidebar-items">
                <Link>
                  <Icon
                    as={FiHome}
                    fontSize="2xl"
                    className="active-icon"
                  ></Icon>
                </Link>
                <Link _hover={{ textDecor: 'none' }}>
                  <Text className="active">Home</Text>
                </Link>
              </Flex>

              <Flex className="sidebar-items">
                <Link>
                  <Icon as={FiHome} fontSize="2xl"></Icon>
                </Link>
                <Link _hover={{ textDecor: 'none' }}>
                  <Text>Home</Text>
                </Link>
              </Flex>

              <Flex className="sidebar-items">
                <Link>
                  <Icon as={FiHome} fontSize="2xl"></Icon>
                </Link>
                <Link _hover={{ textDecor: 'none' }}>
                  <Text>Home</Text>
                </Link>
              </Flex>
            </Flex>
          </Flex>

          <Flex flexDir={'column'} alignItems="center" mb={10} mt={5}>
            <Avatar my={2} src=""></Avatar>
            <Text textAlign={'center'}>Marcelo Gracia</Text>
          </Flex>
        </Flex>
      </Flex>
      {/* column 2 */}
      <Flex></Flex>
      {/* column 3 */}
      <Flex></Flex>
    </Flex>
  )
}

export default dashboard
