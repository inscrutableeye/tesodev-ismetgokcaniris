import { SearchIcon } from '@chakra-ui/icons'
import {
  Flex,
  Link,
  Text,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Divider,
  Select
} from '@chakra-ui/react'
import React from 'react'

import Data from '../../src/components/Data/mockData.json'
import { useStorken } from '../../data/Storken/data'

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [globalData, setGlobalData] = useStorken<string>('getData')
  const getData = Data[0].data
  const filteredData = getData.filter(el => {
    let elItem: string = el[1].toLowerCase()
    if (globalData === '') {
      //if query is empty
      return elItem
    } else if (elItem.toLowerCase().includes(globalData.toLowerCase())) {
      //returns filtered array

      return elItem
    }

    return elItem
  })

  console.log('data burada', globalData)
  return (
    <Flex flexDirection='column'>
      <Flex
        flexDirection='row'
        alignItems='start'
        justifyContent='space-between'
      >
        <Image
          src='tesodevicon.png'
          alignSelf='center'
          w={'143px'}
          h='63px'
          ml='37px'
          mr='34px'
        />
        <Flex flexDirection='row'>
          <InputGroup mt='60px'>
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
          <Flex
            alignItems={{ base: 'center', lg: 'flex-end' }}
            justifyContent={{ base: 'center', lg: 'flex-end' }}
          >
            <Link href='/Record'>
              <Button>Add New Record</Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>

      <Flex flexDirection='column' alignItems='center' justifyContent='center'>
        {filteredData.map((item: any) => (
          <Link href='' key={item}>
            <Flex w={'100%'} bgColor={'blue'}>
              <Flex w={'10%'}></Flex>
              <Flex w={'80%'} flexDir={'column'}>
                <Text fontSize={20} color={'black'}>
                  {item[1]}
                </Text>
                <Text fontSize={20} color={'black'}>
                  {item[4]}
                </Text>
              </Flex>
            </Flex>
          </Link>
        ))}
        <Divider orientation='vertical' />
      </Flex>
    </Flex>
  )
}

export default index
