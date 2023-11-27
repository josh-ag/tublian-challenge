import {
  Box,
  Flex,
  Image,
  Heading,
  HStack,
  Button,
  VStack,
  FormControl,
  Input,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import onboardingImg from "../../assets/onboarding_img1.svg";
import tublianLogo from "../../assets/tublian_logo.svg";

// @Onboarding page1
export default function () {
  return (
    <Flex w={"full"} minH={"100vh"} h="full">
      {/*@onboarding1 image container */}
      <Box flex={1} h={"100%"}>
        <Image
          src={onboardingImg}
          alt="onboarding illustrator"
          objectFit={"cover"}
          h="100%"
          w="100%"
        />
      </Box>

      {/*@onboarding1 content container */}
      <Box
        flex={1}
        p={12}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <VStack
          spacing={20}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
        >
          {/* @Onboarding1 header  */}
          <HStack
            w="full"
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            spacing={6}
            flexWrap={"wrap"}
          >
            {/* content heading  */}
            <HStack cursor={"pointer"}>
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
                color={"#ccc"}
                bgClip="text"
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
              </Button>
              <Button
                as={Link}
                to={"/account/create"}
                variant={"unstyled"}
                // lineHeight={20}
                fontWeight={500}
                fontSize={14}
                size={"sm"}
                color={"#ccc"}
                _visited={{
                  bgClip: "text",
                  bgGradient: "linear(to-r, #FBDA61,#FF5ACD)",
                }}
                _hover={{
                  bgClip: "text",
                  bgGradient: "linear(to-r, #FBDA61,#FF5ACD 84%)",
                }}
                // _active={{
                //   bgClip: "text",
                //   bgGradient: "linear(to-r, #FBDA61,#FF5ACD 84%)",
                // }}
              >
                2:Create Account
              </Button>
              <Button
                as={Link}
                to="/account/setup"
                variant={"unstyled"}
                // lineHeight={20}
                fontWeight={500}
                fontSize={14}
                size={"sm"}
                color={"#ccc"}
                _visited={{
                  bgClip: "text",
                  bgGradient: "linear(to-r, #FBDA61,#FF5ACD)",
                }}
                _hover={{
                  bgClip: "text",
                  bgGradient: "linear(to-r, #FBDA61,#FF5ACD)",
                }}
                // _active={{
                //   bgClip: "text",
                //   bgGradient: "linear(to-r, #FBDA61,#FF5ACD 84%)",
                // }}
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
                Getting Started
              </Heading>
              <Text fontSize={16} fontWeight={500}>
                Start recruiting streetcred developers, Today!!
              </Text>
              <Input
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
              >
                Proceed
              </Button>
              <HStack flexWrap={"wrap"}>
                <Text fontSize={16} fontWeight={400}>
                  Dont have account?
                </Text>
                <Button
                  as={Link}
                  to="/account/create"
                  variant={"link"}
                  fontWeight={700}
                  fontSize={16}
                >
                  Create Account
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
