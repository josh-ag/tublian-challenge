import {
  Box,
  Flex,
  Image,
  HStack,
  Button,
  VStack,
  FormControl,
  Input,
  Text,
  Link,
  useToast,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import onboardingImg from "../../assets/onboarding_img1.svg";
import tublianLogo from "../../assets/tublian_logo.svg";
import { useContext, useState } from "react";
import { AppContext } from "../../contexts/appContext";

// @Onboarding page1
export default function () {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const { login } = useContext(AppContext);
  const navigate = useNavigate();
  const toast = useToast();

  //@handle login
  const handleLogin = async () => {
    if (!firstname || !lastname) {
      return toast({
        title: "First and Last Name is marked required.",
        status: "error",
      });
    }

    try {
      const res = await login({ firstname, lastname });
      if (res.statusCode == 200) {
        //@success
        console.log(res);

        return navigate("/account/create");
      }
    } catch (err) {
      throw err;
    }
  };

  return (
    <Flex w={"full"} minH={"100vh"} h="full">
      {/*@onboarding1 image container */}
      <Box
        flex={1}
        h={"100vh"}
        backgroundImage={onboardingImg}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
        backgroundSize={"cover"}
        display={{ base: "none", lg: "block" }}
      />

      <Box
        flex={1}
        p={{ base: 4, lg: 10 }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <VStack
          spacing={8}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
        >
          {/* @Onboarding1 header  */}
          <HStack
            w="full"
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            flexWrap={{ base: "wrap", "2xl": "nowrap" }}
          >
            {/* content heading  */}
            <HStack cursor={"pointer"}>
              <Image
                src={tublianLogo}
                objectFit={"contain"}
                boxSize={"fit-content"}
              />
              <Text fontFamily={"Recepts"} fontWeight={400} fontSize={13}>
                TUBLIAN
              </Text>
            </HStack>

            <HStack
              spacing={{ base: 4, lg: 4, xl: 6, "2xl": 8 }}
              flexWrap={{ base: "wrap", lg: "nowrap" }}
            >
              {/* @step buttons */}
              <Link
                as={RouterLink}
                to="/"
                fontWeight={500}
                fontSize={14}
                bgClip="text"
                textOverflow={"ellipsis"}
                _visited={{
                  bgClip: "text",
                  bgGradient: "linear(to-r, #FBDA61,#FF5ACD)",
                }}
                _hover={{
                  bgClip: "text",
                  bgGradient: "linear(to-r, #FBDA61,#FF5ACD)",
                }}
                bgGradient={"linear(to-r, #FBDA61,#FF5ACD 84%)"}
              >
                1:Get Started
              </Link>
              <Link
                as={RouterLink}
                to={"/account/create"}
                fontWeight={500}
                fontSize={14}
                size={"sm"}
                color={"#696969"}
                _hover={{
                  bgClip: "text",
                  bgGradient: "linear(to-r, #FBDA61,#FF5ACD 84%)",
                }}
              >
                2:Create Account
              </Link>
              <Link
                as={RouterLink}
                to="/setup"
                fontWeight={500}
                fontSize={14}
                size={"sm"}
                color={"#696969"}
                _hover={{
                  bgClip: "text",
                  bgGradient: "linear(to-r, #FBDA61,#FF5ACD)",
                }}
              >
                3:Account Setup
              </Link>
              <Link
                as={RouterLink}
                to="/payment"
                color={"#696969"}
                fontWeight={500}
                fontSize={14}
                size={"sm"}
                _hover={{
                  bgClip: "text",
                  bgGradient: "linear(to-r, #FBDA61,#FF5ACD 84%)",
                }}
              >
                4:Payment
              </Link>
            </HStack>
          </HStack>

          <FormControl w={{ base: "full", lg: "80%", xl: "70%", "2xl": "50%" }}>
            <VStack
              spacing={4}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              w={"full"}
            >
              <Text
                fontWeight={700}
                fontSize={{ base: 18, lg: 34, "2xl": 36 }}
                w="auto"
              >
                Getting Started
              </Text>
              <Text fontSize={16} fontWeight={500} color={"#CFCFCF"}>
                Start recruiting streetcred developers, Today!!
              </Text>
              <Input
                defaultValue={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                type="firstname"
                placeholder="First Name"
                variant={"flushed"}
                fontSize={16}
                fontWeight={500}
                color={"#888888"}
                _focus={{ color: "#CFCFCF" }}
                focusBorderColor="#CFCFCF"
                borderColor={"#888888"}
              />
              <Input
                defaultValue={lastname}
                onChange={(e) => setLastname(e.target.value)}
                type="lastname"
                placeholder="Last Name"
                variant={"flushed"}
                fontSize={16}
                fontWeight={500}
                _focus={{ color: "#CFCFCF" }}
                focusBorderColor="#CFCFCF"
                borderColor={"#888888"}
              />

              <Button
                variant={"unstyled"}
                w="100%"
                bgColor="brand.800"
                color={"gray.700"}
                rounded={30}
                fontWeight={500}
                size={"lg"}
                onClick={handleLogin}
              >
                Proceed
              </Button>
              <HStack flexWrap={"wrap"}>
                <Text fontSize={16} fontWeight={400}>
                  Dont have account?
                </Text>
                <Link
                  as={RouterLink}
                  to="/account/create"
                  fontWeight={700}
                  fontSize={16}
                >
                  Create Account
                </Link>
              </HStack>
            </VStack>
          </FormControl>
        </VStack>

        {/* @footer */}
        <HStack spacing={4}>
          <Button variant={"link"} fontSize={16} fontWeight={400}>
            Policy Privacy
          </Button>
          <Button variant={"link"} fontSize={16} fontWeight={400}>
            Terms
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
}
