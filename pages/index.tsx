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
  LinkOverlay,
  LinkBox
} from '@chakra-ui/react'

import { NextPage } from 'next'
import { PhoneIcon, CheckIcon, SearchIcon } from '@chakra-ui/icons'
import TopNews from '../src/components/TopNews'
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import Data from '../src/components/Data/mockData.json'
import { useStorken } from '../data/Storken/data'
import Footer from '../src/components/Footer/Footer'

export var dataArray = new Array<string>()
const Home: NextPage = () => {
  const [GlobalData, setGlobalData] = useStorken('getData')
  const [searchData, setSearchData] = useStorken<string>('inputText')

  const getData = Data[0].data

  const [inputTexts, setInputTexts] = useStorken<string>('inputText')
  let inputHandler = (e: any) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase()
    setInputTexts(lowerCase)
    console.log(inputTexts)
  }

  const filteredData = getData.filter(el => {
    let elItem: string = el[1].toLowerCase()
    if (inputTexts === '') {
      //if query is empty
    } else if (elItem.toLowerCase().includes(inputTexts.toLowerCase())) {
      //returns filtered array
      return elItem
    }
  })
  const handleAdd = () => {
    setInputTexts(inputTexts)
    console.log('Input text', inputTexts)

    console.log('global data', GlobalData)
  }

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
          flexDirection={{ base: 'column', md: 'row' }}
          mt={{ base: '', md: '-50px' }}
          ml={{ base: '10%', lg: '15%' }}
        >
          <InputGroup>
            <InputLeftElement color='gray.400' pointerEvents='none'>
              <SearchIcon color={'gray.300'} mt='2' />
            </InputLeftElement>
            <Input
              value={inputTexts}
              onChange={e => setInputTexts(e.target.value)}
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
      <Flex
        w={'100%'}
        alignItems={'center'}
        display={'flex'}
        justifyContent={'center'}
      >
        <Flex
          w={{ base: '', md: '40%' }}
          style={{
            border: '2px #484848 solid',
            borderRadius: '24px'
          }}
          h={'40vh'}
          flexDirection={'column'}
          gap={2}
          overflowY={'auto'}
          padding={{ base: '5px', md: '16px' }}
        >
          {filteredData.map((item: any) => (
            <Link href='' key={item}>
              <Flex w={'100%'} flexDirection='row'>
                <Flex w={'10%'}>
                  <Image
                    src='location.png'
                    w='18px'
                    h='22px'
                    ml='10px'
                    alignSelf='center'
                  />
                </Flex>
                <Flex w={'80%'} flexDir={'column'} mb='20px'>
                  <Text fontSize={20} color={'black'}>
                    {item[1]}
                  </Text>
                  <Text fontSize={20} color={'#72777A'}>
                    {item[4]}
                  </Text>
                </Flex>
              </Flex>
            </Link>
          ))}
          <Flex alignItems={'center'} justifyContent='center'>
            <LinkBox
              as='article'
              maxW='sm'
              p='5'
              borderWidth='1px'
              rounded='md'
              _hover={{
                borderColor: 'black'
              }}
            >
              <LinkOverlay href='/searchPage' onClick={() => handleAdd()}>
                <Text
                  fontStyle='normal'
                  fontWeight='700'
                  fontSize='16px'
                  lineHeight='24px'
                  color={'#090A0A'}
                >
                  Show more...
                </Text>
              </LinkOverlay>
            </LinkBox>
          </Flex>
        </Flex>
      </Flex>

      <TopNews />
      <Footer />
    </>
  )
}

export default Home
