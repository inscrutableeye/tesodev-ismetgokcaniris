import { Flex , Image, Text } from '@chakra-ui/react';
import React from 'react';
import Mapx from '../Map/Mapx';



const Footer:React.FC = () => {
    
    return (
        <Flex w={"full"} bg="rgba(41, 78, 152, 0.72);" mt="60px">
            <Flex flexDirection={{base:"column", md:"column", lg:"row"}}>
                <Image src='image 1.png' px={{base:"100px", md:"60px", lg:"60px"}} py={{base:"100px", lg:"50px"}}></Image>
                <Flex flexDirection={"column"} alignItems="start" justifyContent={"center"}> 
                <Text pl={{base:"25px"}} pr={{base:"20px"}} fontSize={"18px"} fontWeight="400" lineHeight={"21px"} fontStyle="normal">İletişim Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. <br></br> Kuluçka Merkezi D2 Blok No: 151/1F İç Kapı No: <br></br> 2B03 Esenler/İstanbul </Text>
                <Text pl={{base:"25px"}} pr={{base:"20px"}} fontSize={"18px"} fontWeight="700" lineHeight={"21px"} fontStyle="normal" pt="30px">Email: bilgi@tesodev.com</Text>
                </Flex>

            <Mapx/>
            </Flex>
        </Flex>
    )
}
export default Footer;