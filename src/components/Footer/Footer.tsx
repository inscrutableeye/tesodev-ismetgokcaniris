import { Flex , Image, Text } from '@chakra-ui/react';
import React from 'react';
import Mapx from '../Map/Mapx';



const Footer:React.FC = () => {
    
    return (
        <Flex w={"100%"} bg="rgba(41, 78, 152, 0.72);" mt="60px">
            <Flex flexDirection={"row"}>
                <Image src='image 1.png' px={"60px"} py="50px"></Image>
                <Flex flexDirection={"column"} alignItems="start" justifyContent={"center"}> 
                <Text>İletişim Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. <br></br> Kuluçka Merkezi D2 Blok No: 151/1F İç Kapı No: <br></br> 2B03 Esenler/İstanbul </Text>
                <Text pt="30px">Email: bilgi@tesodev.com</Text>
                </Flex>

            <Mapx/>
            </Flex>
        </Flex>
    )
}
export default Footer;