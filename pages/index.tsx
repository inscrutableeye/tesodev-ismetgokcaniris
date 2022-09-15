import {
  Button,
  Flex,
  Box,
  Image,
  Text,
  Input,
  InputLeftElement,
  InputGroup,
  useDisclosure,
  Collapse,
  Link,
  LinkOverlay
} from '@chakra-ui/react'
import { NextPage } from 'next'
import { PhoneIcon, CheckIcon, SearchIcon } from '@chakra-ui/icons'
import TopNews from '../src/components/TopNews'
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'

const Home: NextPage = () => {
  return (
    <>
      <Flex
        alignItems={{ base: 'center', lg: 'flex-end' }}
        justifyContent={{ base: 'center', lg: 'flex-end' }}
      >
        <Link href='/Record'>
          <Button>Add New Record</Button>
        </Link>
      </Flex>
      <Flex
        alignItems={'center'}
        justifyContent={{ base: 'center', md: 'space-around' }}
        flexDirection={'column'}
      >
        <Image src='tesodevicon.png' />
        <Flex alignItems={'flex-end'} justifyContent='flex-end'>
          <Text textColor={'black'} marginLeft={'260px'}>
            Search app
          </Text>
        </Flex>
        <Text fontSize={'32px'} textColor={' #090A0A'} ml={'-35%'}>
          Find In Records
        </Text>
        <Flex
          alignItems={'center'}
          justifyContent={{ base: 'center', lg: 'space-around' }}
          flexDirection={'row'}
          mt={'-50px'}
          ml={{ base: '40%', lg: '15%' }}
        >
          <InputGroup>
            <InputLeftElement color='gray.400' pointerEvents='none'>
              <SearchIcon color={'gray.300'} mt='2' />
            </InputLeftElement>
            <Input
              w={{ base: '300px', lg: '640px' }}
              placeholder='Search'
              fontSize={'10pt'}
              _placeholder={{ color: 'gray.500' }}
              textColor='black'
              autoComplete='true'
              _hover={{
                bg: 'white',
                border: '2px solid',
                borderColor: '#204080'
              }}
              _focus={{
                outline: 'none',
                border: '1px solid',
                borderCollapse: '#204080'
              }}
              h='48px'
              bg='#FFFFFF'
            />
          </InputGroup>
          <Button ml={'-10px'}>
            <Text paddingX='40px' paddingY={'12px'}>
              Search
            </Text>
          </Button>
        </Flex>
      </Flex>

      <TopNews />
    </>
  )
}

export default Home
