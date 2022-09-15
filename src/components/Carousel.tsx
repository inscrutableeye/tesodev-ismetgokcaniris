import {
  IconButton,
  Flex,
  Image,
  Text,
  Box,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/react'

import React from 'react'

// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 2500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const cards: Array<{
  image: String
  desc: string
  desc2: string
  date: string
}> = [
  {
    image: 'image.png',
    desc: 'A Plan to Rebuild the Bus Terminal',
    desc2: 'Everyone Loves to Hate',
    date: '1h ago · by Troy Corlson'
  },
  {
    image: 'image.png',
    desc: 'A Plan to Rebuild the Bus Terminal ',
    desc2: 'Everyone Loves to Hate',
    date: '1h ago · by Troy Corlson'
  },
  {
    image: 'image.png',
    desc: 'A Plan to Rebuild the Bus Terminal ',
    desc2: 'Everyone Loves to Hate',
    date: '1h ago · by Troy Corlson'
  },
  {
    image: 'image.png',
    desc: 'A Plan to Rebuild the Bus Terminal ',
    desc2: 'Everyone Loves to Hate',
    date: '1h ago · by Troy Corlson'
  },
  {
    image: 'image.png',
    desc: 'A Plan to Rebuild the Bus Terminal',
    desc2: 'Everyone Loves to Hate',
    date: '1h ago · by Troy Corlson'
  },
  {
    image: 'image.png',
    desc: 'A Plan to Rebuild the Bus Terminal',
    desc2: 'Everyone Loves to Hate',
    date: '1h ago · by Troy Corlson'
  }
]

export default function Carousel () {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes

  // These are the images used in the slide

  return (
    <>
      <Box
        display='flex'
        flexDirection={'row'}
        justifyContent={{ base: 'center', lg: 'space-between' }}
        mt={'-5%'}
        ml={{ base: '100px', lg: '0' }}
      >
        <link
          rel='stylesheet'
          type='text/css'
          charSet='UTF-8'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
        {/* Left Icon */}
        <IconButton
          aria-label='left-arrow'
          colorScheme='messenger'
          borderRadius='full'
          transform={{ base: '', lg: 'translate(0%, 525%)' }}
          onClick={() => slider?.slickPrev()}
          zIndex={2}
        >
          <BiLeftArrowAlt />
        </IconButton>
        {/* Right Icon */}

        <IconButton
          aria-label='right-arrow'
          colorScheme='messenger'
          borderRadius='full'
          transform={{ base: '', lg: 'translate(0%, 525%)' }}
          onClick={() => slider?.slickNext()}
          zIndex={2}
        >
          <BiRightArrowAlt />
        </IconButton>
        {/* Slider */}
      </Box>
      <Slider {...settings} ref={slider => setSlider(slider)}>
        {cards.map((val, index) => (
          <Flex
            key={index}
            alignItems='center'
            justifyContent={{ base: 'center', lg: 'flex-start' }}
            flexDirection={'column'}
            ml={{ base: '0%', lg: '2%' }}
            pl={{ base: '100px', lg: '' }}
          >
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
              <LinkOverlay href='#'>
                <Image src={val.image} />

                <Text textColor={'#090A0A'}>{val.desc}</Text>
                <Text textColor={'#090A0A'}>{val.desc2}</Text>
                <Text textColor={'gray.400'}>{val.date}</Text>
              </LinkOverlay>
            </LinkBox>
          </Flex>
        ))}
      </Slider>
    </>
  )
}
