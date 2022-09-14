import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Link,
  Text,
  VStack
} from '@chakra-ui/react'
import React from 'react'

type indexProps = {}

const Record: React.FC<indexProps> = () => {
  return (
    <Flex flexDirection={'column'}>
      <Flex flexDirection={'row'} alignItems='start' justifyContent={'start'}>
        <Image
          src='tesodevicon.png'
          w={'143px'}
          h='63px'
          mx={'37px'}
          my='27px'
        />

        <Link href='/' alignSelf={'center'}>
          <Text
            fontStyle='normal;'
            fontWeight='700;'
            fontSize='24px;'
            lineHeight='28px;'
            color='#484848;
          '
            display='flex'
            flexDirection={'row'}
          >
            <Image src='Arrow 1.png' mr={'5px'} />
            Return to List Page
          </Text>
        </Link>
      </Flex>

      <FormControl
        display={'flex'}
        alignItems='center'
        flexDirection={'column'}
        justifyContent='space-around'
      >
        <FormLabel color={'black'} ml='-37%'>
          Name Surname
        </FormLabel>
        <Input
          required
          w={'590px'}
          h='46px'
          placeholder='Enter name and surname'
          textColor={'black'}
          bg='#FFFFFF'
          _placeholder={{
            color: 'rgba(100, 100, 100, 0.5)'
          }}
        ></Input>
        <FormLabel color={'black'} ml='-41.5%' pt='37px'>
          Country
        </FormLabel>
        <Input
          required
          w={'590px'}
          h='46px'
          placeholder='Enter a country'
          textColor={'black'}
          bg='#FFFFFF'
          _placeholder={{
            color: 'rgba(100, 100, 100, 0.5)'
          }}
        ></Input>
        <FormLabel color={'black'} ml='-44%' pt='37px'>
          City
        </FormLabel>
        <Input
          required
          w={'590px'}
          h='46px'
          placeholder='Enter a city'
          textColor={'black'}
          bg='#FFFFFF'
          _placeholder={{
            color: 'rgba(100, 100, 100, 0.5)'
          }}
        ></Input>
        <FormLabel color={'black'} ml='-42.5%' pt='37px'>
          E-mail
        </FormLabel>
        <Input
          type={'email'}
          required
          w={'590px'}
          h='46px'
          placeholder='Enter a e-mail (abc@xyz.com)'
          textColor={'black'}
          bg='#FFFFFF'
          _placeholder={{
            color: 'rgba(100, 100, 100, 0.5)'
          }}
        ></Input>

        <Button alignSelf={'end'} mr='26%' display={'flex'} textAlign='center'>
          <Text
            fontStyle='normal;'
            fontWeight='700;'
            fontSize='18px;'
            lineHeight='21px;'
            textAlign='center'
            pl={'40px'}
            pr='40px'
          >
            Add
          </Text>
        </Button>
      </FormControl>
    </Flex>
  )
}
export default Record
