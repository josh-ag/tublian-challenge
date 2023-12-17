import { useContext } from "react";
import {
  Flex,
  Image,
  HStack,
  Button,
  Stack,
  VStack,
  Card,
  Text,
  CardBody,
  chakra,
  useRadioGroup,
  useRadio,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import tublianLogo from "../../assets/tublian_logo.svg";
import { UsageType } from "../../type";
import { AppContext } from "../../contexts/appContext";

function UsageGroup() {
  const { usages } = useContext(AppContext);

  const urlParams = new URLSearchParams(window.location.search);
  const authToken = urlParams.get("token");

  if (authToken) {
    localStorage.setItem("_token", authToken);
  }

  const { getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: "team",
    // onChange: handleChange,
  });

  function CustomRadio(props: any) {
    const { usage, ...radioProps } = props;
    const { state, getInputProps, getRadioProps, htmlProps, getLabelProps } =
      useRadio(radioProps);

    return (
      <chakra.label
        {...htmlProps}
        rounded={20}
        sx={{ padding: 0.5 }}
        boxShadow={"md"}
        w={{ base: "full", lg: 250 }}
        bg={"#292929"}
        bgGradient={state.isChecked ? "linear(to-r,#FBDA61,#FF5ACD 84%)" : ""}
      >
        <input {...getInputProps({})} hidden />
        <Card
          {...getRadioProps()}
          w="full"
          h="full"
          bgColor={"gray.800"}
          rounded={20}
        >
          <CardBody w={"full"}>
            <Stack
              direction={{ base: "row-reverse", lg: "column" }}
              spacing={6}
              justify={"space-between"}
            >
              <Flex
                {...getRadioProps()}
                w={6}
                h={6}
                rounded="full"
                sx={{ border: `1px solid #292929` }}
                alignSelf={{ base: "center", lg: "flex-end" }}
              >
                {state.isChecked ? (
                  <Image
                    src={usage.tick}
                    objectFit={"cover"}
                    rounded="full"
                    {...getLabelProps()}
                  />
                ) : null}
              </Flex>
              <Stack
                flex={1}
                direction={{ base: "row", lg: "column" }}
                justify={"flex-start"}
                align={"center"}
                spacing={4}
              >
                <Image
                  src={usage.image}
                  objectFit={"cover"}
                  w={{ base: 55, sm: "40%", md: "50%", lg: "auto" }}
                />

                <VStack align={{ base: "flex-start", lg: "center" }} w="full">
                  <Text
                    fontSize={{ base: 14, lg: 20, "2xl": 24 }}
                    fontWeight={700}
                    color="white"
                  >
                    {usage?.heading}
                  </Text>
                  <Text
                    textAlign={{ base: "left", lg: "center" }}
                    fontSize={{ base: 14, lg: 16 }}
                    fontWeight={500}
                    color={"#CFCFCF"}
                  >
                    {usage?.text}
                  </Text>
                </VStack>
              </Stack>
            </Stack>
          </CardBody>
        </Card>
      </chakra.label>
    );
  }

  return (
    <>
      <Stack spacing={2} direction={"column"}>
        <Text
          fontWeight={700}
          fontSize={{ base: 18, lg: 34, "2xl": 36 }}
          textAlign={"center"}
          color={"white"}
        >
          How are you planning to use Tublian?
        </Text>
        <Text
          textAlign={"center"}
          fontSize={{ base: 14, lg: 16 }}
          fontWeight={500}
          color={"#CFCFCF"}
        >
          We will customize your experience based on your option.
        </Text>
      </Stack>
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={6}
        align={"stretch"}
        {...getRootProps()}
      >
        {usages.map((usage: UsageType) => (
          <CustomRadio
            key={usage?.name}
            usage={usage}
            image={usage?.tick}
            {...getRadioProps({ value: usage?.name })}
          />
        ))}
      </Stack>
    </>
  );
}

// @Onboarding page3
function SetUpPage() {
  return (
    <Flex
      w={"full"}
      direction={"column"}
      minH={"100vh"}
      h="full"
      p={{ base: 4, lg: 10 }}
      alignItems={"center"}
      gap={10}
    >
      {/* @Onboarding3 header  */}
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
          <Text
            fontFamily={"Recepts"}
            fontWeight={"400"}
            fontSize={13}
            color={"white"}
          >
            TUBLIAN
          </Text>
        </HStack>

        <HStack
          spacing={{ base: 4, lg: 4, xl: 6, "2xl": 8 }}
          flexWrap={{ base: "wrap", lg: "nowrap" }}
          w={"auto"}
        >
          {/* @step buttons */}
          <Link
            as={RouterLink}
            to={"/"}
            fontWeight={500}
            fontSize={14}
            size={"sm"}
            bgClip="text"
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
            to="/create"
            fontWeight={500}
            fontSize={14}
            size={"sm"}
            color={"#ccc"}
            bgClip="text"
            bgGradient="linear(to-r, #FBDA61,#FF5ACD 84%)"
          >
            2:Create Account
          </Link>
          <Link
            as={RouterLink}
            to="/setup"
            fontWeight={500}
            fontSize={14}
            size={"sm"}
            bgClip="text"
            bgGradient="linear(to-r, #FBDA61,#FF5ACD 84%)"
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
            fontWeight={500}
            fontSize={14}
            size={"sm"}
            color={"disabled"}
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

      <VStack
        //@Setup page content
        spacing={8}
        justifyContent={"center"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        <UsageGroup />

        <Button
          //@Submit button
          as={RouterLink}
          to="/payment"
          variant={"unstyled"}
          w={{ base: "full", lg: 405 }}
          bgColor="brand.800"
          color={"gray.700"}
          rounded={30}
          fontWeight={500}
          size="lg"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          Next
        </Button>
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
    </Flex>
  );
}

export default SetUpPage;
