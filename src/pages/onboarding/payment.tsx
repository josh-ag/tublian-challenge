import {
  Box,
  Flex,
  Image,
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
  ModalOverlay,
  TabPanel,
  TabPanels,
  Divider,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import tublianLogo from "../../assets/tublian_logo.svg";
import { ButtonType, PaymentType } from "../../type";
import { IoIosArrowDown } from "react-icons/io";
import { CheckCircleIcon } from "@chakra-ui/icons";
import closeBtn from "../../assets/close_button.svg";
import cardLogo from "../../assets/card.svg";
import tickCircle from "../../assets/tick-circle.svg";
import googlePay from "../../assets/google_pay.svg";
import lockIcon from "../../assets/lock.svg";
import logoVisa from "../../assets/logo_visa.svg";
import logoMaster from "../../assets/logo_master.svg";
import logoAmex from "../../assets/logo_amex.svg";
import logoStripe from "../../assets/logo_stripe.svg";
import bgConfetti from "../../assets/confetti.svg";
import checkMark from "../../assets/check_mark.svg";

//@create checkable card group
function CardGroup({ modalOpen }: any) {
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

  //@create a custom radio button
  function CustomRadio(props: any) {
    const { card, ...radioProps } = props;
    const { state, getInputProps, getRadioProps, htmlProps } =
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
        boxShadow={"md"}
        w={{ base: "full", lg: 300 }}
        h="auto"
        bg={"#292929"}
        bgGradient={state.isChecked ? "linear(to-r,#FBDA61,#FF5ACD 84%)" : ""}
        sx={{ padding: 0.5 }}
      >
        <input {...getInputProps({})} hidden />
        <Card
          {...getRadioProps()}
          w="full"
          h="full"
          bgColor={"gray.800"}
          rounded={20}
        >
          <CardHeader display="flex" justifyContent={"flex-start"}>
            <VStack justify={"flex-start"} align={"flex-start"} spacing={4}>
              <Box
                as={Button}
                w={card.type === "Pro" ? 69 : 160}
                h={29}
                variant={"unstyled"}
                borderRadius={10}
                bgGradient={bgGradient}
                sx={{ border: `1px solid ${borderColor}` }}
              >
                <Text fontSize={18} fontWeight={700} color={"#FEFEFE"}>
                  {card.type}
                </Text>
              </Box>

              <Text fontSize={30} fontWeight={700} color="white">
                <Highlight
                  query={"/Month"}
                  styles={{ fontSize: 18, fontWeight: 500, color: "#B7B7B7" }}
                >
                  {card.heading}
                </Highlight>
              </Text>
            </VStack>
          </CardHeader>

          <CardBody>
            <VStack spacing={4} align={"flex-start"}>
              <Text fontSize={20} fontWeight={500} color="#B7B7B7">
                Features:
              </Text>

              <List spacing={4}>
                {card.features.map((text: string, index: number) => (
                  <ListItem key={index}>
                    <HStack align={"flex-start"}>
                      <ListIcon
                        fontSize={"lg"}
                        as={CheckCircleIcon}
                        color={"#76F368"}
                      />
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
    <Stack
      direction={{ base: "column", lg: "row" }}
      spacing={6}
      align={"stretch"}
      {...getRootProps()}
    >
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
    </Stack>
  );
}

//@Create a button group that act like radio
function ButtonGroup() {
  const toast = useToast();

  const buttons: ButtonType[] = [
    {
      name: "Card",
      tick: tickCircle,
      text: "Card Payment",
      image: cardLogo,
    },
    {
      name: "Google",
      tick: tickCircle,
      image: googlePay,
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
    defaultValue: "Card",
    onChange: handleChange,
  });

  //@create a custom radio button
  function CustomRadio(props: any) {
    const { card, ...radioProps } = props;
    const { state, getInputProps, getRadioProps, htmlProps } =
      useRadio(radioProps);

    return (
      <chakra.label
        {...htmlProps}
        sx={{ padding: 0.5 }}
        w={"full"}
        bg={"#292929"}
        borderRadius={10}
        bgGradient={state.isChecked ? "linear(to-r,#FBDA61,#FF5ACD 84%)" : ""}
        h={"60px"}
      >
        <input {...getInputProps({})} hidden />
        <Box w="full" h={"full"} borderRadius={10}>
          <HStack
            spacing={6}
            borderRadius={10}
            justify={"flex-start"}
            w="full"
            h="full"
            bg={"#292929"}
            pl={6}
          >
            <Flex
              {...getRadioProps()}
              w={6}
              h={6}
              rounded="full"
              bg={"#292929"}
              sx={{ border: `1px solid #414141` }}
            >
              {state.isChecked && <Image src={card.tick} objectFit={"cover"} />}
            </Flex>
            <Image src={card.image} objectFit={"cover"} />
            <Text fontSize={20} fontWeight={700} color={"#FEFEFE"}>
              {card?.text}
            </Text>
          </HStack>
        </Box>
      </chakra.label>
    );
  }

  return (
    <VStack spacing={2} {...getRootProps()}>
      {buttons.map((btn) => {
        return (
          <CustomRadio
            key={btn.name}
            card={btn}
            image={btn.name}
            {...getRadioProps({ value: btn.name })}
          />
        );
      })}
    </VStack>
  );
}

//Modal Component
export const ModalComponent = ({
  isModalOpen,
  onModalClose,
}: {
  isModalOpen: boolean;
  onModalOpen: () => void;
  onModalClose: () => void;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlePayment = () => {
    onModalClose();

    onOpen();
  };

  return (
    <>
      <Modal isCentered isOpen={isModalOpen} onClose={onModalClose}>
        <ModalOverlay bg="blackAlpha.500" backdropFilter="blur(50px)" />
        <ModalContent
          w={580}
          h="auto"
          borderRadius={20}
          bg={"#1E1E1E"}
          shadow={"none"}
        >
          <HStack p={4} align={"center"} justify={"space-between"} w={"full"}>
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
                color="white"
              >
                TUBLIAN
              </Text>
            </HStack>

            <Box as={Button} onClick={onModalClose} variant={"unstyled"}>
              <Image src={closeBtn} objectFit={"cover"} />
            </Box>
          </HStack>

          <ModalBody>
            <VStack
              spacing={8}
              w="full"
              h="auto"
              justify={"flex-start"}
              align={"flex-start"}
            >
              <Card
                variant={"outline"}
                bg={"#292929"}
                outline={"#414141"}
                w="full"
              >
                <CardHeader>
                  <HStack justify={"space-between"}>
                    <Text fontSize={20} fontWeight={700} color="white">
                      Monthly Plan
                    </Text>
                    <Button
                      onClick={onModalClose}
                      variant="unstyled"
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Text fontSize={16} fontWeight={500} color={"brand.900"}>
                        Change plan
                      </Text>
                    </Button>
                  </HStack>
                </CardHeader>
                <Divider />
                <CardBody>
                  <Stack
                    direction={"column"}
                    spacing={6}
                    justify={"flex-start"}
                  >
                    <Box
                      as={Button}
                      // w={card.type === "Pro" ? 69 : 160}
                      w={169}
                      h={29}
                      variant={"unstyled"}
                      borderRadius={10}
                      bgGradient={"linear(to-b,#0881FF,#0B4F95)"}
                      sx={{ border: `1px solid #79BBFF` }}
                    >
                      <Text fontSize={18} fontWeight={700} color={"white"}>
                        Business Plan
                      </Text>
                    </Box>

                    <HStack justify={"space-between"}>
                      <Text fontSize={18} fontWeight={500} color={"white"}>
                        Total
                      </Text>
                      <Text fontSize={18} fontWeight={500} color={"#B7B7B7"}>
                        <Highlight
                          query={"$49.99"}
                          styles={{
                            fontSize: 30,
                            fontWeight: 700,
                            color: "white",
                          }}
                        >
                          usd $49.99/Month
                        </Highlight>
                      </Text>
                    </HStack>
                  </Stack>
                </CardBody>
              </Card>

              <Stack w="full" direction={"column"} spacing={4}>
                <>
                  <Text fontSize={20} fontWeight={700}>
                    Payment method
                  </Text>
                  <Text fontSize={16} fontWeight={500} color={"#B7B7B7"}>
                    Choose how you'd like to pay
                  </Text>
                </>

                <ButtonGroup />
              </Stack>

              <FormControl w={"full"}>
                <VStack
                  spacing={6}
                  w={"full"}
                  justify={"flex-start"}
                  alignItems={"flex-start"}
                >
                  <Text fontSize={20} fontWeight={700} color={"white"}>
                    Payment Details
                  </Text>
                  <Input
                    type="email"
                    placeholder="Email"
                    variant={"flushed"}
                    fontSize={16}
                    fontWeight={500}
                    color={"#888888"}
                    p={4}
                    _focus={{ color: "#CFCFCF" }}
                    focusBorderColor="#CFCFCF"
                    borderColor={"#888888"}
                  />
                  <Input
                    type="holder"
                    placeholder="Card Holder"
                    variant={"flushed"}
                    fontSize={16}
                    fontWeight={500}
                    p={4}
                    color={"#888888"}
                    _focus={{ color: "#CFCFCF" }}
                    focusBorderColor="#CFCFCF"
                    borderColor={"#888888"}
                  />
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Image src={lockIcon} objectFit={"cover"} />
                    </InputLeftElement>
                    <Input
                      type="holder"
                      placeholder="Card Number"
                      variant={"flushed"}
                      fontSize={16}
                      fontWeight={500}
                      py={4}
                      px={12}
                      color={"#888888"}
                      _focus={{ color: "#CFCFCF" }}
                      focusBorderColor="#CFCFCF"
                      borderColor={"#888888"}
                    />
                    <InputRightElement>
                      <HStack align={"center"}>
                        <Image src={logoVisa} objectFit={"cover"} />
                        <Image src={logoMaster} objectFit={"cover"} />
                        <Image src={logoAmex} objectFit={"cover"} />
                      </HStack>
                    </InputRightElement>
                  </InputGroup>
                  <HStack>
                    <Input
                      type="mm/yy"
                      placeholder="MM/YY"
                      variant={"flushed"}
                      fontSize={16}
                      fontWeight={500}
                      py={4}
                      color={"#888888"}
                      _focus={{ color: "#CFCFCF" }}
                      focusBorderColor="#CFCFCF"
                      borderColor={"#888888"}
                    />
                    <Input
                      type="cvv"
                      placeholder="CVV"
                      variant={"flushed"}
                      fontSize={16}
                      fontWeight={500}
                      py={4}
                      color={"#888888"}
                      _focus={{ color: "#CFCFCF" }}
                      focusBorderColor="#CFCFCF"
                      borderColor={"#888888"}
                    />
                  </HStack>

                  <InputGroup>
                    <Input
                      type="cvv"
                      placeholder="Country"
                      variant={"flushed"}
                      fontSize={16}
                      fontWeight={500}
                      py={4}
                      color={"#888888"}
                      _focus={{ color: "#CFCFCF" }}
                      focusBorderColor="#CFCFCF"
                      borderColor={"#888888"}
                    />
                    <InputRightElement>
                      <IoIosArrowDown />
                    </InputRightElement>
                  </InputGroup>

                  <Text fontSize={16} fontWeight={500}>
                    By clicking below, you agree to our{" "}
                    <chakra.label color={"#91C3FD"}>Terms</chakra.label>,
                    <chakra.label color={"#91C3FD"}>
                      Privacy Policy
                    </chakra.label>{" "}
                    and{" "}
                    <chakra.label color={"brand.800"}>
                      Automatic Renewal
                    </chakra.label>
                    . Tublian will charge you $49.99 (plus Tax) each month until
                    you cancel you subscription in account settings.
                  </Text>
                </VStack>
              </FormControl>

              <Button
                //@Submit button
                variant={"unstyled"}
                w="100%"
                bgColor="brand.800"
                color={"gray.700"}
                rounded={30}
                fontWeight={500}
                size="lg"
                onClick={handlePayment}
              >
                Pay $49.99
              </Button>
            </VStack>
          </ModalBody>
          <ModalFooter justifyContent={"flex-start"}>
            <HStack spacing={6}>
              <Image src={logoStripe} objectFit={"cover"} />
              <Text fontSize={16} fontWeight={500} color="white">
                Powered by Stripe.com
              </Text>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isCentered onClose={onClose} isOpen={isOpen}>
        <ModalOverlay bg="blackAlpha.500" backdropFilter="blur(50px)" />
        <ModalContent
          w={580}
          h={491}
          borderRadius={20}
          bg={"#1E1E1E"}
          shadow={"none"}
        >
          <Flex
            h={314}
            w="full"
            p={4}
            backgroundImage={bgConfetti}
            // justify={"center"}
            align={"center"}
          >
            <HStack cursor={"pointer"} alignSelf={"flex-start"}>
              <Image
                src={tublianLogo}
                objectFit={"contain"}
                boxSize={"fit-content"}
              />
              <Text
                fontFamily={"Recepts"}
                fontWeight={"400"}
                fontSize={13}
                color="white"
              >
                TUBLIAN
              </Text>
            </HStack>

            <Image src={checkMark} objectFit={"cover"} />
          </Flex>
          <VStack spacing={6} px={4}>
            <Text color={"white"} fontSize={30} fontWeight={700}>
              Payment Successful
            </Text>
            <Text fontSize={16} fontWeight={500} color={"#CFCFCF"}>
              Your payment went through successfully.
            </Text>

            <Box
              as={Button}
              variant={"unstyled"}
              w={"full"}
              bgColor="brand.800"
              rounded={30}
              fontWeight={500}
              fontSize={16}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              color={"gray.800"}
              onClick={onClose}
            >
              Proceed
            </Box>
          </VStack>
        </ModalContent>
      </Modal>
    </>
  );
};

// @PAYMENT PAGE
export default function PaymentPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        w={"full"}
        direction={"column"}
        h="full"
        p={{ base: 4, lg: 10 }}
        alignItems={"center"}
        justify={{ md: "flex-start", lg: "space-between" }}
        gap={10}
      >
        {/* @Onboarding3 header  */}
        <HStack
          w="full"
          alignItems={"flex-start"}
          justifyContent={"space-between"}
          flexWrap={{ base: "wrap", "2xl": "nowrap" }}
          spacing={4}
        >
          {/* content heading  */}
          <HStack cursor={"pointer"}>
            <Image
              src={tublianLogo}
              objectFit={"contain"}
              boxSize={"fit-content"}
            />
            <Text
              color="white"
              fontFamily={"Recepts"}
              fontWeight={"400"}
              fontSize={13}
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
              to="/"
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
              to="/account/create"
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
              bgClip="text"
              bgGradient="linear(to-r, #FBDA61,#FF5ACD 84%)"
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
          spacing={10}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <VStack spacing={4}>
            <Text
              fontWeight={700}
              fontSize={{ base: 18, lg: 34, "2xl": 36 }}
              color={"white"}
              textAlign={"center"}
            >
              Payment Plan
            </Text>
            <Text
              fontSize={{ base: 14, lg: 16 }}
              fontWeight={500}
              color={"#CFCFCF"}
              textAlign={"center"}
            >
              We will customize your experience based on your option.
            </Text>
          </VStack>

          <Tabs
            variant="outline"
            bgColor={"gray.800"}
            w={"auto"}
            h={"auto"}
            rounded={20}
            size={"md"}
            isFitted={true}
          >
            <VStack mb={6}>
              <TabList
                bgColor={"#1E1E1E"}
                sx={{ border: "1px solid #292929", padding: 0.4 }}
                rounded={20}
                p={1}
                w={{ base: "full", lg: "md" }}
                alignSelf={"center"}
                display={"flex"}
              >
                <Tab
                  flex={1}
                  w="full"
                  _selected={{
                    borderRadius: 16,
                    bgGradient: "linear(to-r, #FBDA61,#FF5ACD 84%)",
                  }}
                >
                  <Text
                    fontSize={{ base: "18px", lg: 20 }}
                    fontWeight={700}
                    color={"white"}
                  >
                    Monthly
                  </Text>
                </Tab>
                <Tab
                  flex={1}
                  w="full"
                  _selected={{
                    borderRadius: 16,
                    bgGradient: "linear(to-r, #FBDA61,#FF5ACD 84%)",
                  }}
                >
                  <HStack>
                    <Text fontSize={20} fontWeight={700} color="white">
                      Annually
                    </Text>
                    <Box
                      bgColor={"rgba(68, 87, 66, 0.52)"}
                      fontSize={12}
                      fontWeight={700}
                      display="flex"
                      alignItems={"center"}
                      justifyContent={"center"}
                      color="#76F368"
                      w={"60px"}
                      h={"30px"}
                      overflow={"hidden"}
                      borderRadius={33}
                      py={3}
                    >
                      20% Off
                    </Box>
                  </HStack>
                </Tab>
              </TabList>
            </VStack>
            <TabPanels w="full" bg={"gray.800"}>
              <TabPanel>
                <CardGroup modalOpen={onOpen} />
              </TabPanel>
              <TabPanel>
                <CardGroup modalOpen={onOpen} />
              </TabPanel>
            </TabPanels>
          </Tabs>
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
      {/* @Payment Modal */}
      <ModalComponent
        isModalOpen={isOpen}
        onModalClose={onClose}
        onModalOpen={onOpen}
      />
    </>
  );
}
