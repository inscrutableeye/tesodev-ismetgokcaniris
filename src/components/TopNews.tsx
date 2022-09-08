import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import Carousels from './Carousel'

const TopNews: React.FC = () => {
  return (
    <Flex flexDirection={'column'}>
      <Text>Top News</Text>
      <Carousels />
    </Flex>
  )
}
export default TopNews
