import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Icon,
  HStack,
  VStack,
  Box,
  Button
} from '@chakra-ui/react';

import { MdCheckCircle } from 'react-icons/md';
import { ReactElement } from 'react';



const list=[
  { id: 0,
    title: 'Adult Trauma Center',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
  },
  {id: 1,
  title: 'Heart Institute',
  text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
},{id: 2,
title: 'BLactation Classes',
text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
},
{
  id: 3,
  title: "Children's Trauma Center",
  text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
},
{
  id: 4,
  title: 'Plastic Surgery',
  text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
},
{
  id: 5,
  title: 'Oral Surgery',
  text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
},

]


export default function AboutLanding() {
  return (
    <Container maxW={'10xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Flex>
          <Image
            // rounded={'md'}
            alt={'services image'}
            src={
              'https://res.cloudinary.com/dsixdct6o/image/upload/v1686918246/Screenshot_2023-06-16_at_17.53.20_mjteso.png'
            }
            objectFit={'cover'}
          />
        </Flex>
        <Stack spacing={4} mt={{
          "md":'100px'
        }}>
          <Text
            
            
            
            
            p={2}
            alignSelf={'flex-start'}
            color={'#13d6a8'} fontWeight={"semibold"} fontSize='1xl'
            >
            
ABOUT OUR MEDICAL
          </Text>

          <Heading textAlign={"left"} color={"black"} fontSize='2xl' fontWeight={"semibold"}>We build hospitals to provide proper services to all the helpless people</Heading>
          <Text textAlign={"left"} color={"#8b8986"} fontSize={'lg'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
          </Text>
         <Text textAlign={"left"} color={"black"} fontSize='2xl' fontWeight={"semibold"}>Our Special features</Text>
          <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={5}>
          {list.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={MdCheckCircle} color="rgba(1, 213, 162, 1)"/>
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
              </VStack>
            </HStack>
          ))}
          <Flex>
          <Button borderRadius={0} color={"white"}  bg="rgba(1, 213, 162, 1)" variant='solid'  size={'lg'} fontSize={'xs'} mr={5} width={"200px"}>VIEW MORE</Button>
          <Button borderRadius={0} color={"#01D5A2"} colorScheme="#01D5A2" variant='outline' size={'lg'} fontSize={'xs'} fontWeight={"bold"} width={"200px"} border={"2px"}>CONTACT US</Button>
          </Flex>
        </SimpleGrid>
      </Container>
         </Stack>
        
      </SimpleGrid>
    </Container>
  );
}