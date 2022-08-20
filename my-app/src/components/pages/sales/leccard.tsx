import * as React from "react";
import { 
  Stack,
  Box,
  Text,
  Image,
  Tag,
  Heading,
  useColorModeValue,
  Center,
  Button,
  Link,
  Container,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
 
} from "@chakra-ui/react";

import "./../../../styles/card.css"


const LecCard = ({data} : {data:any}) =>{
    
  const Descriptionbg = "#010326 !important";
  const Tagcolor = "aquamarine !important";
  
    return(
        <Box
        className="boxbox"
          maxW={'400px'}
        //   w={'full'}
        //   rounded={'md'}
          overflow={'hidden'}
        //   h={'400px'}
        >
          <Image
            // h={'270px'}
            // w={'auto'}
            src={data.image}
            
            // p={2}
            // objectFit={"cover"}
            // rounded="2xl"
            className="card-img"
          />
          <Box 
          className="boxy"
        //    p={2}  fontSize={"15px"} fontWeight={500}
           >
            <Stack spacing={'1'} align={'center'}>
              {/* <Text as={'h3'} className="Tag" p={1}>
              <Tag  className="cardtext1">{data.year}</Tag>
              </Text> */}
              <Text as={'h3'} className="Tag" p={1}>
              <Tag  className="cardtext1">{data.topic}</Tag>
              </Text>
              <Text as={'h3'} className="Tag" p={1}>
              <Tag  className="cardtext1">{data.date}</Tag>
              </Text>
              {/* <Text as={'h3'} className="Tag" p={1}>
              <Tag  className="cardtext1">{data.dead}</Tag>
              </Text> */}
              {/* <Text className="cardtext" >{data.title}</Text> */}

              <Box className="overview" >
             <Center 
             className="centeridk"
            //  flexDirection={'column'} h={'270px'}
             >
               <Button className="lolbut" size={'lg'} colorScheme={'yellow'}> <Link href={data.linki} target="_blank" backgroundColor={'orange.300'}>Click here</Link></Button>

             <Heading as={"h3"} className="headh3"
            //  mb={"2"} fontSize={"30"} textAlign={'center'}
             >
               {data.year}
              </Heading>

              {/* <Text as={"h4"} className="descpa"
              
              >{data.title}</Text> */}
              <UnorderedList className="unord">
  <ListItem className="descpa">{data.title}</ListItem>
  <ListItem className="descpa">{data.list1}</ListItem>
  <ListItem className="descpa">{data.list2}</ListItem>
  <ListItem className="descpa">{data.list3}</ListItem>
</UnorderedList>
             {/* <Button className="lolbut" size={'lg'} colorScheme={'yellow'}> <Link href={data.link} target="_blank" backgroundColor={'orange.300'}>Submit</Link></Button> */}

              
              
             </Center>
            </Box>
            </Stack>
          
          </Box>
        </Box>
       
        )
}

export default LecCard;