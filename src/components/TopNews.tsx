import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import Carousels from './Carousel'

const TopNews = () => {
  return (
    <Flex flexDirection={'column'}>
      <Text
      fontStyle= "normal;"
      fontWeight= "700;"
      fontSize= "32px;"
      lineHeight= "36px;"
      color= "#090A0A"
      pl={{base:"20px", md:"100px"}}
      mt={{base:"100px", md:"100px"}}
      >Top News</Text>
      <Carousels />
    </Flex>
  )
}
export default TopNews
