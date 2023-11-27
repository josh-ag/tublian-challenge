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
  Tabs,
  TabList,
  Tab,
  chakra,
  useRadioGroup,
  useRadio,
  useToast,
  Highlight,
  List,
  ListItem,
  ListIcon,
  CardFooter,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
  ModalHeader,
  ModalCloseButton,
  ModalOverlay,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import tublianLogo from "../../assets/tublian_logo.svg";
import { PaymentType } from "../../type";
import { CheckCircleIcon } from "@chakra-ui/icons";
import closeBtn from "../../assets/close_button.svg";

function CardGroup({ modalOpen }) {
  const toast = useToast();

  const cards: PaymentType[] = [
    {
      type: "Pro",
      name: "Pro",
      heading: "$19.99/Month",
      features: [
        "Advanced search for developer profiles with filters.",
        "Increased monthly messages to developers.",
        "Priority support.",
      ],
    },
    {
      type: "Business Plan",
      name: "Business",
      heading: "$49.99/Month",
      features: [
        "Premium access to developer profiles and advanced search filters.",
        "Increased monthly messages to developers.",
        "Dedicated account manager for personalized support.",
        "Early access to new features and updates.",
      ],
    },
    {
      type: "Enterprise Plan",
      name: "Enterprise",
      heading: "Cutom Pricing",
      features: [
        "Tailored solutions for large enterprises or agencies.",
        "Full access to all platform features, including custom integrations.",
        "Unlimited monthly messages to developers.",
        "Priority support with 24/7 availability.",
      ],
    },
  ];

  const handleChange = (value: any) => {
    toast({
      title: `The value got changed to ${value}!`,
      status: "success",
      duration: 2000,
    });
  };

  const { getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: "Pro",
    onChange: handleChange,
  });

  function CustomRadio(props: any) {
    const { card, ...radioProps } = props;
    const { state, getInputProps, getRadioProps, htmlProps, getLabelProps } =
      useRadio(radioProps);

    const bgGradient =
      card.name === "Pro"
        ? "linear(to-b,#855FEF,#5435AA)"
        : card.name === "Business"
        ? "linear(to-b,#0881FF,#0B4F95)"
        : "linear(to-b,#068092,#043B43)";

    const borderColor =
      card.name === "Pro"
        ? "#B29BF3"
        : card.name === "Business"
        ? "#79BBFF"
        : "#22BFD6";

    return (
      <chakra.label
        {...htmlProps}
        rounded={20}
        sx={{ padding: 0.5 }}
        boxShadow={"md"}
        w={300}
        minH={464}
        h="auto"
        bg={"#292929"}
        bgGradient={state.isChecked ? "linear(to-r,#FBDA61,#FF5ACD 84%)" : ""}
      >
        <input {...getInputProps({})} hidden />
        <Card
          {...getRadioProps()}
          w="full"
          minH="100%"
          h="full"
          bgColor={"gray.800"}
          rounded={20}
          // p={4}
        >
          <CardHeader display="flex" justifyContent={"flex-start"}>
            <VStack justify={"flex-start"} align={"flex-start"} spacing={4}>
              <Box
                w={card.type === "Pro" ? 69 : 160}
                h={29}
                variant={"unstyled"}
                as={Button}
                borderRadius={10}
                bgGradient={bgGradient}
                sx={{ border: `1px solid ${borderColor}` }}
              >
                <Text fontSize={18} fontWeight={700} color={"#FEFEFE"}>
                  {card.type}
                </Text>
              </Box>

              <Heading fontSize={30} fontWeight={700}>
                <Highlight
                  query={"/Month"}
                  styles={{ fontSize: 18, fontWeight: 500, color: "#B7B7B7" }}
                >
                  {card.heading}
                </Highlight>
              </Heading>
            </VStack>
          </CardHeader>

          <CardBody>
            <VStack spacing={4} align={"flex-start"}>
              <Heading fontSize={20} fontWeight={500} color="#B7B7B7">
                Features:
              </Heading>

              <List spacing={4}>
                {card.features.map((text: string, index: number) => (
                  <ListItem key={index}>
                    <HStack align={"flex-start"}>
                      <ListIcon
                        fontSize={"lg"}
                        as={CheckCircleIcon}
                        color={"#76F368"}
                      />{" "}
                      <Text fontSize={14} fontWeight={500} color={"#FEFEFE"}>
                        {text}
                      </Text>
                    </HStack>
                  </ListItem>
                ))}
              </List>
              <Text fontSize={16} fontWeight={500} textOverflow={"wrap"}>
                {card.text}
              </Text>
            </VStack>
          </CardBody>
          <CardFooter>
            <Box
              as={Button}
              variant={"unstyled"}
              w={"full"}
              bgColor="brand.800"
              color={card.name === "Enterprise" ? "#FEFEFE" : "gray.700"}
              rounded={30}
              fontWeight={500}
              fontSize={16}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              bgGradient={
                card.name === "Enterprise"
                  ? "linear(to-r,#FBDA61,#FF5ACD 84%)"
                  : ""
              }
              onClick={modalOpen}
            >
              {card.name === "Enterprise" ? "Contact Us" : "Subscribe"}
            </Box>
          </CardFooter>
        </Card>
      </chakra.label>
    );
  }

  return (
    <Stack {...getRootProps()}>
      <HStack spacing={6} align={"stretch"}>
        {cards.map((card) => {
          return (
            <CustomRadio
              key={card.name}
              card={card}
              image={card.name}
              {...getRadioProps({ value: card.name })}
            />
          );
        })}
      </HStack>
    </Stack>
  );
}

// @Onboarding page3
export default function PaymentPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
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
              bgClip="text"
              bgGradient="linear(to-r, #FBDA61,#FF5ACD 84%)"
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
              Payment Plan
            </Heading>
            <Text fontSize={16} fontWeight={500} color={"#CFCFCF"}>
              We will customize your experience based on your option.
            </Text>
          </VStack>

          <Tabs
            variant="outline"
            colorScheme="green"
            bgColor={"#292929"}
            maxW={"lg"}
            w="lg"
            h={"auto"}
            sx={{ border: "1px solid #292929", padding: 0.4 }}
            rounded={20}
            size={"md"}
            isFitted={true}
          >
            <TabList bgColor={"#1E1E1E"} rounded={20} p={1}>
              <Tab
                _selected={{
                  borderRadius: 16,
                  bgGradient: "linear(to-r, #FBDA61,#FF5ACD 84%)",
                }}
                fontSize={20}
                fontWeight={700}
              >
                Monthly
              </Tab>
              <Tab
                _selected={{
                  borderRadius: 16,
                  bgGradient: "linear(to-r, #FBDA61,#FF5ACD 84%)",
                }}
              >
                <HStack>
                  <Text fontSize={20} fontWeight={700}>
                    Annually
                  </Text>
                  <Button
                    variant={"unstyled"}
                    bgColor={"rgba(68, 87, 66, 0.52)"}
                    fontSize={12}
                    fontWeight={700}
                    display="flex"
                    alignItems={"center"}
                    justifyContent={"center"}
                    color="#76F368"
                    sx={{ width: 100, height: 10, borderRadius: 33 }}
                  >
                    20% Off
                  </Button>
                </HStack>
              </Tab>
            </TabList>
          </Tabs>

          <Box>
            <CardGroup modalOpen={onOpen} />
          </Box>
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

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.500" backdropFilter="blur(50px)" />
        <ModalContent
          w={580}
          // minH={800}
          h={"full"}
          borderRadius={20}
          bgGradient={"linear(to-b,#292929,#1E1E1E)"}
        >
          <HStack p={4} align={"center"} justify={"space-between"} w={"full"}>
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

            <Box as={Button} onClick={onClose} variant={"unstyled"}>
              <Image src={closeBtn} objectFit={"cover"} />
            </Box>
          </HStack>

          <ModalBody>
            <Text>Make your payment!</Text>
          </ModalBody>
          <ModalFooter>
            {/* <Button onClick={onClose}>Close</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
