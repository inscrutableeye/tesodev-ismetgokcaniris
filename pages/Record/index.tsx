import {
  Badge,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Link,
  Text,
  useToast,
  VStack
} from '@chakra-ui/react'
import { values } from 'lodash'
import React, { useEffect, useState } from 'react'

const Record: React.FC = () => {
  const [inputInfo, setInputInfo] = useState({
    nameSurname: '',
    country: '',
    city: '',
    mail: ''
  })
  const [disabled, setDisabled] = useState({
    ınputdisable: true,
    buttondisable: true,
    namesurnamebadge: 'inline',
    countrybadge: 'inline',
    citybadge: 'inline',
    mailbadge: 'inline'
  })
  const [buttonValue, setButtonValue] = useState(true)
  useEffect(() => {
    if (
      inputInfo.nameSurname === '' ||
      inputInfo.country === '' ||
      inputInfo.city === ' ' ||
      inputInfo.mail === ''
    ) {
      setDisabled({
        ...disabled,
        buttondisable: true
      })
    } else {
      setDisabled({
        ...disabled,
        buttondisable: false
      })
    }
  }, [inputInfo])

  const EditName = (text: string) => {
    console.log(text)
    setInputInfo({
      ...inputInfo,
      nameSurname: text
    })

    if (text === '') {
      setDisabled({
        ...disabled,
        namesurnamebadge: 'inline'
      })
    } else {
      setDisabled({
        ...disabled,
        namesurnamebadge: 'none'
      })
    }
  }
  const EditCountry = (text: string) => {
    console.log(text)
    setInputInfo({
      ...inputInfo,
      country: text
    })

    if (text === '') {
      setDisabled({
        ...disabled,
        countrybadge: 'inline'
      })
    } else {
      setDisabled({
        ...disabled,
        countrybadge: 'none'
      })
    }
  }
  const EditCity = (text: string) => {
    console.log(text)
    setInputInfo({
      ...inputInfo,
      city: text
    })

    if (text === '') {
      setDisabled({
        ...disabled,
        citybadge: 'inline'
      })
    } else {
      setDisabled({
        ...disabled,
        citybadge: 'none'
      })
    }
  }
  const EditMail = (text: string) => {
    console.log(text)
    setInputInfo({
      ...inputInfo,
      mail: text
    })

    if (text === '') {
      setDisabled({
        ...disabled,
        mailbadge: 'inline'
      })
    } else {
      setDisabled({
        ...disabled,
        mailbadge: 'none'
      })
    }
  }

  const Toast = useToast()

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
        <Badge display={disabled.namesurnamebadge} colorScheme='red'>
          Blank area
        </Badge>
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
          onChange={value => EditName(event.target.value)}
          borderColor={disabled.namesurnamebadge === 'inline' ? 'red' : 'white'}
        ></Input>
        <FormLabel color={'black'} ml='-41.5%' pt='37px'>
          Country
        </FormLabel>
        <Badge display={disabled.countrybadge} colorScheme='red'>
          Blank area
        </Badge>
        <Input
          onChange={value => EditCountry(event.target.value)}
          required
          w={'590px'}
          h='46px'
          placeholder='Enter a country'
          textColor={'black'}
          bg='#FFFFFF'
          _placeholder={{
            color: 'rgba(100, 100, 100, 0.5)'
          }}
          borderColor={disabled.countrybadge === 'inline' ? 'red' : 'white'}
        ></Input>
        <FormLabel color={'black'} ml='-44%' pt='37px'>
          City
        </FormLabel>
        <Badge display={disabled.citybadge} colorScheme='red'>
          Blank area
        </Badge>
        <Input
          onChange={value => EditCity(event.target.value)}
          required
          w={'590px'}
          h='46px'
          placeholder='Enter a city'
          textColor={'black'}
          bg='#FFFFFF'
          _placeholder={{
            color: 'rgba(100, 100, 100, 0.5)'
          }}
          borderColor={disabled.citybadge === 'inline' ? 'red' : 'white'}
        ></Input>
        <FormLabel color={'black'} ml='-42.5%' pt='37px'>
          E-mail
        </FormLabel>
        <Badge display={disabled.mailbadge} colorScheme='red'>
          Blank area
        </Badge>
        <Input
          onChange={value => EditMail(event.target.value)}
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
          borderColor={disabled.mailbadge === 'inline' ? 'red' : 'white'}
        ></Input>

        <Button
          type={'submit'}
          disabled={disabled.buttondisable}
          alignSelf={'end'}
          mr='26%'
          display={'flex'}
          textAlign='center'
        >
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
