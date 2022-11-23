//importamos un boton de chakra
import {
  Button,
  Container,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";

const Home = () => {
  //<Heading fontFamily={"poppins"} color={"white"} fontSize={"60px"} >Index</Heading>

  return (
    <Grid
      backgroundColor="black"
      placeItems={"center"}
      h={"100vh"}
      padding={"0"}
    >
      <HStack>
        <Image
          src="/banana.png"
          alt="logo"
          border="1px"
          boxSize="50px"
          borderRadius={"20%"}
        />
        <HStack spacing={"0"} align={"center"}>
          <Heading color={"white"}>Itesa</Heading>
          <Heading color="#9d39fe">Coin</Heading>
        </HStack>
      </HStack>
      <Image
        src="https://media.discordapp.net/attachments/1040681301201666089/1045049523577299075/Screen_Shot_2021-08-24_at_17.58.36.png?width=386&height=414"
        alt="logo"
        objectFit="cover"
        boxSize="300px"
        borderRadius={"20%"}
      />

      <HStack
        w={"100%"}
        h={"100%"}
        paddingBottom={"0"}
        justifyContent={"center"}
        bg={"white"}
      >
        <Link href="/register">
          <Button colorScheme="" variant="solid" w={["auto"]}>
            Register
          </Button>
        </Link>
        <Link href="/login">
          <Button colorScheme="" variant="solid" w={["auto"]}>
            Login
          </Button>
        </Link>
      </HStack>
    </Grid>
  );
};

export default Home;