import {
  Box,
  Flex,
  Image,
  Heading,
  HStack,
  Button,
  Stack,
  VStack,
  Card,
  CardHeader,
  Text,
  CardBody,
  chakra,
  useRadioGroup,
  useRadio,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import tublianLogo from "../../assets/tublian_logo.svg";
import tickCircle from "../../assets/tick-circle.svg";
import teamProjectImage from "../../assets/team_project_card1.svg";
import personalProjectImage from "../../assets/personalProjectImage.svg";
import recruitingImage from "../../assets/recruitingImage.svg";
import { RadioType } from "../../type";

function CardGroup() {
  const toast = useToast();

  const cards: RadioType[] = [
    {
      name: "team",
      tick: tickCircle,
      image: teamProjectImage,
      heading: "Team Projects",
      text: "Hire developer for team projects",
    },
    {
      name: "personal",
      tick: tickCircle,
      image: personalProjectImage,
      heading: "Personal Project",
      text: "Hire developer for personal projects",
    },

    {
      name: "recruiting",
      tick: tickCircle,
      heading: "Recruiting",
      image: recruitingImage,
      text: "Recruit developer for outstanding companies",
    },
  ];

  const handleChange = (value: string) => {
    toast({
      title: `The value got changed to ${value}!`,
      status: "success",
      duration: 2000,
    });
  };

  const { getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: "team",
    onChange: handleChange,
  });

  function CustomRadio(props: any) {
    const { card, ...radioProps } = props;
    const { state, getInputProps, getRadioProps, htmlProps, getLabelProps } =
      useRadio(radioProps);

    return (
      <chakra.label
        {...htmlProps}
        rounded={20}
        sx={{ padding: 0.5 }}
        boxShadow={"md"}
        w="sm"
        bg={"#292929"}
        bgGradient={state.isChecked ? "linear(to-r,#FBDA61,#FF5ACD 84%)" : ""}
        // _hover={{
        //   bgGradient: "linear(to-r,#FBDA61,#FF5ACD 84%)",
        // }}
      >
        <input {...getInputProps({})} hidden />
        <Card
          {...getRadioProps()}
          w="full"
          h="full"
          bgColor={"gray.800"}
          rounded={20}
        >
          <CardHeader display="flex" justifyContent={"flex-end"}>
            <Flex
              {...getRadioProps()}
              w={6}
              h={6}
              rounded="full"
              sx={{ border: `1px solid #292929` }}
            >
              {state.isChecked ? (
                <Image
                  src={card.tick}
                  objectFit={"cover"}
                  rounded="full"
                  {...getLabelProps()}
                />
              ) : null}
            </Flex>
          </CardHeader>

          <CardBody>
            <VStack spacing={4}>
              <Image
                src={card.image}
                objectFit={"cover"}
                alignSelf={"center"}
              />
              <Heading fontSize={20} fontWeight={700} color="#FCFCFC">
                {card?.heading}
              </Heading>
              <Text
                fontSize={16}
                fontWeight={500}
                textOverflow={"wrap"}
                textAlign={"center"}
              >
                {card.text}
              </Text>
            </VStack>
          </CardBody>
        </Card>
      </chakra.label>
    );
  }

  return (
    <Stack {...getRootProps()}>
      <HStack spacing={6}>
        {cards.map((card) => {
          return (
            <CustomRadio
              key={card.name}
              card={card}
              image={card.tick}
              {...getRadioProps({ value: card.name })}
            />
          );
        })}
      </HStack>
    </Stack>
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
      p={10}
      alignItems={"center"}
      justify={"space-between"}
      gap={10}
    >
      {/* @Onboarding3 header  */}
      <Stack
        w="full"
        direction={"row"}
        alignItems={"flex-start"}
        justify={"space-between"}
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
            bgClip="text"
            bgGradient="linear(to-r, #FBDA61,#FF5ACD 84%)"
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
      </Stack>

      <VStack
        //@Setup page content
        spacing={10}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <VStack spacing={4}>
          <Heading fontWeight={700} fontSize={36} textAlign={"center"}>
            How are you planning to use Tublian?
          </Heading>
          <Text fontSize={16} fontWeight={500} color={"#CFCFCF"}>
            We will customize your experience based on your option.
          </Text>
        </VStack>

        <Box>
          <CardGroup />
        </Box>

        <Button
          //@Submit button
          as={Link}
          to="/payment"
          variant={"unstyled"}
          w={405}
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
