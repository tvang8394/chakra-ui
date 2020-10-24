import Head from "next/head";
import { Box, Text, SimpleGrid, Icon } from "@chakra-ui/core";

export default function Home() {
  return (
    <>
      <Box paddingY='100px' height='100vh' width='auto'>
        <Box>
          <Head>
            <title>Pivot Trading</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Box
            maxW="lg"
            color="black"
            fontSize="60px"
            marginX="auto"
            mt="10"
          >
            Welcome to{" "}
            <Text display="inline" color="Green">
              Pivot Trading Strategy!
            </Text>
          </Box>
          <Box marginX="auto" maxW="sm">
            <Text fontSize="20px">Where we focus on ONE trading strategy. </Text>
          </Box>
        </Box>
        <Box maxW="700px" marginX="auto">
          <SimpleGrid columns={2} mt="10" spacing="30px">
            <Box border="1px" borderRadius="lg" padding="15px">
              <Text mb="2" fontSize="17px" fontWeight="bold">
                The Strategy <Icon name='arrow-forward' size='25px'/>
              </Text>
              Learn more about the PTS.
            </Box>
            <Box border="1px" borderRadius="lg" padding="15px">
              <Text mb="2" fontSize="17px" fontWeight="bold">
                Dashboard <Icon name='arrow-forward' size='25px'/>
              </Text>
              Customized dashboard just for the PTS.
            </Box>
            <Box border="1px" borderRadius="lg" padding="15px">
              <Text mb="2" fontSize="17px" fontWeight="bold" >
                Our Trades <Icon name='arrow-forward' size='25px'/>
              </Text>
              Whats a strategy without proof?
            </Box>
            <Box border="1px" borderRadius="lg" padding="15px">
              <Text mb="2" fontSize="17px" fontWeight="bold">
                Join Now <Icon name='arrow-forward' size='25px'/>
              </Text>
              Register for a free account and start using the PTS today.
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
