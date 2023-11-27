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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import onboardingImg2 from "../../assets/onboarding_img2.svg";
import tublianLogo from "../../assets/tublian_logo.svg";
import logoGoogle from "../../assets/icon_google.svg";

// @Onboarding page2
export default function CreateAccountPage() {
  return (
    <Flex w={"full"} minH={"100vh"} h={"full"} pos={"relative"}>
      {/*@onboarding2 image container */}
      <Box
        // pos={"absolute"}
        flex={1}
        // w={"50%"}
        // maxW={"50%"}
        h={"100vh"}
        minH={"100vh"}
        bgGradient={"linear(to-b, #FDD649,#BCC83D)"}
      >
        <Image
          src={onboardingImg2}
          alt="onboarding illustrator"
          objectFit={{ base: "fill", lg: "contain" }}
          h="100%"
          w="100%"
        />
      </Box>

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
          spacing={16}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          h="auto"
        >
          {/* @Onboarding2 header  */}
          <HStack
            w="full"
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            spacing={6}
            flexWrap={"wrap"}
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

            <HStack spacing={8}>
              {/* @step buttons */}
              <Button
                as={Link}
                to="/"
                variant={"unstyled"}
                // lineHeight={20}
                fontWeight={500}
                fontSize={14}
                size={"sm"}
                bgClip="text"
                // color={"#ccc"}
                _hover={{
                  bgClip: "text",
                  bgGradient: "linear(to-r, #FBDA61,#FF5ACD)",
                }}
                bgGradient={"linear(to-r, #FBDA61,#FF5ACD 84%)"}
              >
                1:Get Started
              </Button>
              <Button
                as={Link}
                to="/account/create"
                variant={"unstyled"}
                // lineHeight={20}
                fontWeight={500}
                fontSize={14}
                size={"sm"}
                color={"#ccc"}
                bgClip="text"
                bgGradient="linear(to-r, #FBDA61,#FF5ACD 84%)"
              >
                2:Create Account
              </Button>
              <Button
                as={Link}
                to="/setup"
                variant={"unstyled"}
                // lineHeight={20}
                fontWeight={500}
                fontSize={14}
                size={"sm"}
                color={"#ccc"}
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
              </Button>
              <Button
                as={Link}
                to="/payment"
                variant={"unstyled"}
                // lineHeight={20}
                fontWeight={500}
                fontSize={14}
                size={"sm"}
                color={"#ccc"}
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
              </Button>
            </HStack>
          </HStack>

          <FormControl w={{ base: "full", lg: "70%", xl: "50%" }}>
            <VStack
              spacing={8}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
            >
              <Heading fontWeight={700} fontSize={36}>
                Create Account
              </Heading>
              <Text fontSize={16} fontWeight={500}>
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
                <Button
                  as={Link}
                  to="/"
                  variant={"link"}
                  fontWeight={700}
                  fontSize={16}
                >
                  Login
                </Button>
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
