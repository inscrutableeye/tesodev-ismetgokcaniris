import {
  Button,
  Flex,
  Box,
  Image,
  Text,
  Input,
  InputLeftElement,
  InputGroup
} from '@chakra-ui/react'
import { NextPage } from 'next'
import { PhoneIcon, CheckIcon, SearchIcon } from '@chakra-ui/icons'
import TopNews from '../src/components/TopNews'
const Home: NextPage = () => {
  return (
    <Flex flexDirection={'column'}>
      <Flex alignItems={'flex-end'} justifyContent='flex-end'>
        <Button>Add New Record</Button>
      </Flex>
      <Flex
        alignItems={'center'}
        justifyContent={'space-around'}
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
          justifyContent='space-around'
          flexDirection={'row'}
          mt={'-50px'}
          ml={'15%'}
        >
          <InputGroup>
            <InputLeftElement color='gray.400' pointerEvents='none'>
              <SearchIcon color={'gray.300'} mt='2' />
            </InputLeftElement>
            <Input
              w={'640px'}
              placeholder='Search'
              fontSize={'10pt'}
              _placeholder={{ color: 'gray.500' }}
              textColor='black'
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
    </Flex>
  )
}

export default Home
