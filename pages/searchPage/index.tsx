/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
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
  Select,
  Container,
  ButtonProps,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react'
import react, { useState, useEffect, ChangeEvent } from 'react'
import Data from '../../src/components/Data/mockData.json'
import { useStorken } from '../../data/Storken/data'
import {
  Paginator,
  Previous,
  PageGroup,
  Next,
  usePaginator,
  generatePages,
  Page
} from 'chakra-paginator'
import { globalAgent } from 'http'
const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [globalData, setGlobalData] = useStorken<string>('getData')
  const getData = Data[0].data
  const nameSort = Data[0].data.sort()

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
  const [searchData, setSearchData] = useState<string>('')
  const dataFunnction = async (pageSize: number, offset: number) => {
    await fetch(globalData, { pageSize }, { offset }).then(res => res.json())
  }
  const [datass, setDatas] = useState<any[]>(filteredData)
  const baseStyles: ButtonProps = {
    w: 10,
    fontSize: 'sm',
    color: 'black'
  }

  const normalStyles: ButtonProps = {
    ...baseStyles,
    _hover: {
      bg: '#204080',
      color: 'white'
    },
    bg: 'white'
  }
  const activeStyles: ButtonProps = {
    ...baseStyles,
    _hover: {
      bg: '#204080'
    },
    bg: '#204080',
    color: 'white'
  }
  const separatorStyles: ButtonProps = {
    w: 10,
    bg: 'green.200'
  }
  // eslint-disable-line react-hooks/rules-of-hooks
  const [dataTotal, setDataTotal] = useState<number | undefined>(undefined)
  // eslint-disable-line react-hooks/rules-of-hooks
  const {
    pagesQuantity,
    currentPage,
    setCurrentPage,
    pageSize,
    offset,
    setPageSize
  } = usePaginator({
    total: 20,
    initialState: { pageSize: 5, currentPage: 1 }
  })
  const handlePageChange = (nextPage: number) => {
    // -> request new data using the page number
    setCurrentPage(nextPage)
    console.log('request new data with ->', nextPage)
  }
  const handlePageSizeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const pageSize = Number(event.target.value)
    setPageSize(pageSize)
  }
  useEffect(() => {
    dataFunnction(pageSize, offset).then(datass => {
      setDataTotal(datass.count)
      setDatas(datass.result)
    })
  }, [])
  const outerLimit = 2
  const innerLimit = 2
  console.log('data burada', globalData)

  const Desc = () => {
    nameSort

    console.log(nameSort)
  }

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
        <Flex flexDirection='row' ml={{ base: '10%', md: '30%' }}>
          <InputGroup mt='60px' ml={{ md: '', xl: '-25%' }}>
            <InputLeftElement color='gray.400' pointerEvents='none'>
              <SearchIcon color={'gray.300'} mt='2' />
            </InputLeftElement>
            <Input
              w={{ base: '250px', lg: '640px' }}
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
          <Button ml={{ md: '-10%', xl: '-40%' }}>
            <Text paddingX='40px' paddingY={'12px'}>
              Search {searchData}
            </Text>
          </Button>
          <Flex
            alignItems={{ base: 'center', lg: 'flex-end' }}
            justifyContent={{ base: 'center', lg: 'flex-end' }}
          >
            <Link href='/Record'>
              <Button>Add New Record </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDirection={'row'}>
        <Flex
          flexDirection='column'
          w={'750px'}
          ml={'25%'}
          borderRadius={'24px'}
          justifyContent={'center'}
        >
          {datass?.map((item: any) => (
            <Link
              href=''
              key={item}
              display='flex'
              onChange={Desc}
              borderRadius='24px'
              justifyContent={'space-around'}
              _hover={{
                bg: 'rgba(79, 117, 194, 0.21);'
              }}
            >
              <Flex flexDirection='column' w='600px' padding={30}>
                <Flex flexDirection={'row'} gap='100'>
                  <Image src='location.png' w='18px' h='22px' ml='10px' />
                  <Flex flexDirection={'column'} w={'80%'} alignItems='start'>
                    <Text
                      color={'black'}
                      textAlign='start'
                      fontStyle='normal'
                      fontWeight='400'
                      fontSize='16px'
                      lineHeight='20px'
                    >
                      {item[1]}
                    </Text>
                    <Text
                      color={'#72777A'}
                      textAlign='start'
                      fontStyle='normal'
                      fontWeight='400'
                      fontSize='14px'
                      lineHeight='20px'
                    >
                      {item[4]}
                    </Text>
                    <Divider orientation='vertical' />
                  </Flex>
                  <Text
                    textAlign='start'
                    fontStyle='normal'
                    fontWeight='400'
                    fontSize='16px'
                    lineHeight='20px'
                    color={'#484848'}
                  >
                    {item[3]}
                  </Text>
                </Flex>
              </Flex>
              <Divider orientation='vertical' />
            </Link>
          ))}
        </Flex>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                bg={'white'}
                _hover={{
                  bg: '#B3B3B3',
                  textColor: 'white'
                }}
                isActive={isOpen}
                as={Button}
                textColor='black'
                rightIcon={<ChevronDownIcon />}
              >
                {isOpen ? 'Close' : 'Order By'}
              </MenuButton>
              <MenuList bg={'white'} padding='10px'>
                <MenuItem
                  fontWeight={'500'}
                  fontSize='14px'
                  lineHeight={'16px'}
                  textColor={'black'}
                  borderRadius='10px'
                  _hover={{
                    bg: '#B3B3B3',
                    textColor: 'white'
                  }}
                  onClick={Desc}
                >
                  Name ascending
                </MenuItem>
                <MenuItem
                  fontWeight={'500'}
                  fontSize='14px'
                  lineHeight={'16px'}
                  textColor={'black'}
                  borderRadius='10px'
                  _hover={{
                    bg: '#B3B3B3',
                    textColor: 'white'
                  }}
                >
                  Year ascending
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </Flex>
      <Paginator
        pagesQuantity={pagesQuantity}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        innerLimit={innerLimit}
        outerLimit={outerLimit}
        normalStyles={normalStyles}
        separatorStyles={separatorStyles}
        activeStyles={activeStyles}
      >
        <Container
          w='full'
          p={4}
          ml={'15%'}
          display='flex'
          flexDirection={'row'}
        >
          <Previous>Prev</Previous>
          <PageGroup isInline align='center' />
          <Next>
            Next
            {/* Or an icon from `react-icons` */}
          </Next>
        </Container>
      </Paginator>
    </Flex>
  )
}

export default index
