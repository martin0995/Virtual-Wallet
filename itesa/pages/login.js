import {
  Box,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Text,
  Input,
  HStack,
  Checkbox,
  Button,
  Image,
} from "@chakra-ui/react";
import handleInput from "../reactHooks/handleInput";
import { login } from "../store/reducers/userSlice";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../config/axios";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Login() {
  const nickName = handleInput();
  const password = handleInput();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = {
      nick_name: nickName.value,
      password: password.value,
    };
    const loggedUser = await axios.post("/login", user);
    console.log(loggedUser);

    if (loggedUser.status === 200) {
      dispatch(login(loggedUser.data));
      router.push("/2fa");
    } else {
      console.log("hay algo mal");
    }
  };

  return (
    <Box
      backgroundColor="#080B0E"
      h="99vh"
      w={["full", "md"]}
      p={[8, 10]}
      mx="auto"
      border={["none", "1px"]}
      borderColor={["", "gray.300"]}
      borderRadius={10}
    >
      <VStack spacing={4} align="flex-start" w="full">
        <VStack spacing={1} align={["center", "center"]} mb={3} w="full">
          {" "}
          <HStack mb={20}>
            <Link href="/home">
              <Image
                boxSize="40px"
                objectFit="cover"
                src="/banana.png"
                alt="Itesa Coin"
              />
            </Link>
              <Heading color="white"> Itesa </Heading>{" "}
              <Heading color="#9d39fe"> Coin</Heading>{" "}
          </HStack>
          <Heading color="white"> Login</Heading>
        </VStack>
        <FormControl>
          <FormLabel color="white"> Nombre de Usuario</FormLabel>{" "}
          <Input
            _focusVisible={"white"}
            rounded="2xl"
            variant="filled"
            {...nickName}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel color="white"> Contraseña</FormLabel>{" "}
          <Input
            rounded="2xl"
            variant="filled"
            _focusVisible={"white"}
            type="password"
            {...password}
            required
          />
        </FormControl>
        <HStack>
          <Checkbox color="white"> Remember me.</Checkbox>
          <Button variant="link" colorScheme="purple">
            {" "}
            Forgot Password?
          </Button>
        </HStack>

        <Link href="/2fa">
          <Button
            colorScheme=""
            variant="solid"
            w={["full", "auto"]}
            onClick={(e) => {
              handleLogin(e);
            }}
          >
            {" "}
            Login{" "}
          </Button>
        </Link>
      </VStack>
    </Box>
  );
}
