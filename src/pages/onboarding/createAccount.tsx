import {
  Box,
  Flex,
  Image,
  Heading,
  HStack,
  Button,
  Stack,
  VStack,
  FormControl,
  Input,
  Text,
  Highlight,
  Checkbox,
  Divider,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import onboardingImg2 from "../../assets/onboarding_img2.svg";
import tublianLogo from "../../assets/tublian_logo.svg";
import logoGoogle from "../../assets/icon_google.svg";

// @Onboarding page2
export default function CreateAccountPage() {
  const navigate = useNavigate();

  return (
    <Flex w={"full"} minH={"100vh"} h={"full"} pos={"relative"}>
      {/*@onboarding2 image container */}
      <Box
        flex={1}
        h={"100vh"}
        bg={"brand.800"}
        backgroundImage={onboardingImg2}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
        backgroundSize={{ lg: "fill", xl: "contain", "2xl": "contain" }}
        display={{ base: "none", lg: "block" }}
      />

      {/*@onboarding2 content container */}
      <Box
        // pos={"relative"}
        flex={1}
        p={12}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <VStack
          spacing={8}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          h="auto"
        >
          {/* @Onboarding2 header  */}
          <HStack
            w="full"
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            flexWrap={{ base: "wrap", "2xl": "nowrap" }}
          >
            {/* content heading  */}
            <HStack cursor={"pointer"} w="auto">
              <Image
                src={tublianLogo}
                objectFit={"contain"}
                boxSize={"fit-content"}
              />
              <Heading
                fontFamily={"Recepts"}
                fontWeight={"400"}
                fontSize={13}
                // lineHeight={18.3}
                // noOfLines={1}
              >
                TUBLIAN
              </Heading>
            </HStack>

            <HStack
              spacing={{ base: 4, lg: 4, xl: 6, "2xl": 8 }}
              flexWrap={{ base: "wrap", lg: "nowrap" }}
            >
              {/* @step buttons */}
              <Link
                as={RouterLink}
                to="/"
                // lineHeight={20}
                fontWeight={500}
                fontSize={14}
                size={"sm"}
                bgClip={"text"}
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
                to="/account/create"
                // lineHeight={20}
                fontWeight={500}
                fontSize={14}
                size={"sm"}
                color={"#696969"}
                bgClip="text"
                bgGradient="linear(to-r, #FBDA61,#FF5ACD 84%)"
              >
                2:Create Account
              </Link>
              <Link
                as={RouterLink}
                to="/setup"
                variant={"unstyled"}
                // lineHeight={20}
                fontWeight={500}
                fontSize={14}
                size={"sm"}
                color={"#696969"}
                _hover={{
                  bgClip: "text",
                  bgGradient: "linear(to-r, #FBDA61,#FF5ACD)",
                }}
                _active={{
                  bgClip: "text",
                  bgGradient: "linear(to-r, #FBDA61,#FF5ACD 84%)",
                }}
              >
                3:Account Setup
              </Link>
              <Link
                as={RouterLink}
                to="/payment"
                variant={"unstyled"}
                // lineHeight={20}
                fontWeight={500}
                fontSize={14}
                size={"sm"}
                color={"#696969"}
                _hover={{
                  bgClip: "text",
                  bgGradient: "linear(to-r, #FBDA61,#FF5ACD 84%)",
                }}
                _active={{
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
            >
              <Heading
                fontWeight={700}
                fontSize={{ base: 18, lg: 34, "2xl": 36 }}
                color={"white"}
              >
                Create Account
              </Heading>
              <Text fontSize={16} fontWeight={500} color={"#CFCFCF"}>
                <Highlight query={"@John Doe"} styles={{ color: "#4BA3FF" }}>
                  Creating account for @John Doe
                </Highlight>
              </Text>

              <Input
                type="email"
                placeholder="Email"
                variant={"flushed"}
                fontSize={16}
                fontWeight={500}
                color={"#888888"}
                _focus={{ color: "#CFCFCF" }}
                focusBorderColor="#CFCFCF"
                borderColor={"#888888"}
              />
              <Input
                type="password"
                placeholder="Password"
                variant={"flushed"}
                fontSize={16}
                fontWeight={500}
                _focus={{ color: "#CFCFCF" }}
                focusBorderColor="#CFCFCF"
                borderColor={"#888"}
              />
              <Stack direction="row" wrap={"wrap"}>
                <Checkbox
                  fontSize={12}
                  fontWeight={400}
                  color={"#888"}
                  borderRadius={10}
                >
                  8 Characters minimum
                </Checkbox>
                <Checkbox fontSize={12} fontWeight={400} color={"#888"}>
                  One Uppercase Character
                </Checkbox>
                <Checkbox fontSize={12} fontWeight={400} color={"#888"}>
                  One symbol character
                </Checkbox>
              </Stack>
              <VStack w="full" spacing={6}>
                <Button
                  //@Submit button
                  variant={"unstyled"}
                  w="100%"
                  bgColor="brand.800"
                  color={"gray.700"}
                  rounded={30}
                  fontWeight={500}
                  size="lg"
                  onClick={() => navigate("/setup")}
                >
                  Create Account
                </Button>

                <HStack w="full" spacing={4}>
                  <Divider flex={1} bgColor={"#414141"} />
                  <Text fontSize={14} fontWeight={500} color={"#B7B7B7"}>
                    Or
                  </Text>
                  <Divider flex={1} bgColor={"#414141"} />
                </HStack>

                <Box
                  // @Sign-in with google button
                  as={Button}
                  variant="unstyled"
                  w="full"
                  size={"lg"}
                  rounded={30}
                  bgGradient={"linear(to-r, #FBDA61,#FF5ACD 80%)"}
                  sx={{ padding: 0.5 }}
                >
                  <HStack
                    spacing={4}
                    rounded={30}
                    justify={"center"}
                    h={"full"}
                    w="full"
                    bgColor={"gray.800"}
                  >
                    <Image src={logoGoogle} objectFit={"cover"} />
                    <Text fontSize={16} fontWeight={500} color={"#FEFEFE"}>
                      Sign up with Google
                    </Text>
                  </HStack>
                </Box>
              </VStack>

              <HStack>
                <Text fontSize={16} fontWeight={400}>
                  Already have account?
                </Text>
                <Link as={RouterLink} to="/" fontWeight={700} fontSize={16}>
                  Login
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
