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
  useToast,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import tublianLogo from "../../assets/tublian_logo.svg";
import { PaymentType, PlanGroupType, PlanType } from "../../type";
import { IoIosArrowDown } from "react-icons/io";
import { CheckCircleIcon } from "@chakra-ui/icons";
import closeBtn from "../../assets/close_button.svg";
import lockIcon from "../../assets/lock.svg";
import logoVisa from "../../assets/logo_visa.svg";
import logoMaster from "../../assets/logo_master.svg";
import logoAmex from "../../assets/logo_amex.svg";
import logoStripe from "../../assets/logo_stripe.svg";
import bgConfetti from "../../assets/confetti.svg";
import checkMark from "../../assets/check_mark.svg";
import { useContext, useMemo, useState } from "react";
import { AppContext } from "../../contexts/appContext";

//@create checkable card group
function PlansComponent({ plans }: { plans: PlanType[] }) {
  const [selected, setSelected] = useState("Pro");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = (value: string) => {
    //Do something
    setSelected(value);
  };

  const handleModalOpen = () => {
    onOpen();
  };

  const { getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: !!selected ? selected : "Pro",
    onChange: handleChange,
  });

  const isSelectedPlan = useMemo(
    () => plans.filter((plan) => plan.name === selected),
    [plans, selected]
  );

  //@create a custom radio button
  function CustomRadio(props: any) {
    const { plan, ...radioProps } = props;
    const { state, getInputProps, getRadioProps, htmlProps } =
      useRadio(radioProps);

    const bgGradient =
      plan.name === "Pro"
        ? "linear(to-b,#855FEF,#5435AA)"
        : plan.name === "Business"
        ? "linear(to-b,#0881FF,#0B4F95)"
        : "linear(to-b,#068092,#043B43)";

    const borderColor =
      plan.name === "Pro"
        ? "#B29BF3"
        : plan.name === "Business"
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
                w={plan.type === "Pro" ? 69 : 160}
                h={29}
                variant={"unstyled"}
                borderRadius={10}
                bgGradient={bgGradient}
                sx={{ border: `1px solid ${borderColor}` }}
              >
                <Text fontSize={18} fontWeight={700} color={"#FEFEFE"}>
                  {plan.type}
                </Text>
              </Box>

              <Text fontSize={30} fontWeight={700} color="white">
                <Highlight
                  query={"/Month"}
                  styles={{ fontSize: 18, fontWeight: 500, color: "#B7B7B7" }}
                >
                  {plan.heading}
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
                {plan.features.map((text: string, index: number) => (
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
                {plan?.text}
              </Text>
            </VStack>
          </CardBody>
          <CardFooter>
            <Box
              as={Button}
              variant={"unstyled"}
              w={"full"}
              bgColor="brand.800"
              color={plan.name === "Enterprise" ? "#FEFEFE" : "gray.700"}
              rounded={30}
              fontWeight={500}
              fontSize={16}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              bgGradient={
                plan.name === "Enterprise"
                  ? "linear(to-r,#FBDA61,#FF5ACD 84%)"
                  : ""
              }
              onClick={() => handleModalOpen()}
            >
              {plan.name === "Enterprise" ? "Contact Us" : "Subscribe"}
            </Box>
          </CardFooter>
        </Card>
      </chakra.label>
    );
  }

  return (
    <>
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={6}
        align={"stretch"}
        {...getRootProps()}
      >
        {plans.map((plan: PlanType) => {
          return (
            <CustomRadio
              key={plan.name}
              plan={plan}
              image={plan.name}
              {...getRadioProps({ value: plan.name })}
            />
          );
        })}
      </Stack>
      <ModalComponent
        isModalOpen={isOpen}
        onModalClose={onClose}
        onModalOpen={onOpen}
        plan={isSelectedPlan[0]}
      />
    </>
  );
}

//@Create a button group that act like radio
function PaymentMethod() {
  const { paymentMethods } = useContext(AppContext);

  // const handleChange = (value: any) => {
  //   //Do Something
  //   toast({
  //     title: `The value got changed to ${value}!`,
  //     status: "success",
  //     duration: 2000,
  //   });
  // };

  const { getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: "Card",
    // onChange: handleChange,
  });

  //@create a custom radio button
  function CustomRadio(props: any) {
    const { paymentMethod, ...radioProps } = props;
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
              {state.isChecked && (
                <Image src={paymentMethod.tick} objectFit={"cover"} />
              )}
            </Flex>
            <Image src={paymentMethod.image} objectFit={"cover"} />
            <Text fontSize={20} fontWeight={700} color={"#FEFEFE"}>
              {paymentMethod?.text}
            </Text>
          </HStack>
        </Box>
      </chakra.label>
    );
  }

  return (
    <>
      <Stack w="full" direction={"column"} spacing={4}>
        <>
          <Text fontSize={20} fontWeight={700}>
            Payment method
          </Text>
          <Text fontSize={16} fontWeight={500} color={"#B7B7B7"}>
            Choose how you'd like to pay
          </Text>
        </>
        <VStack spacing={2} {...getRootProps()}>
          {paymentMethods.map((paymentMethod: PaymentType) => {
            return (
              <CustomRadio
                key={paymentMethod.name}
                paymentMethod={paymentMethod}
                image={paymentMethod.name}
                {...getRadioProps({ value: paymentMethod.name })}
              />
            );
          })}
        </VStack>
      </Stack>
    </>
  );
}

//Modal Component
export const ModalComponent = ({
  isModalOpen,
  onModalClose,
  plan,
}: {
  isModalOpen: boolean;
  plan: PlanType;
  onModalOpen: () => void;
  onModalClose: () => void;
}) => {
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { pay } = useContext(AppContext);
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlePayment = async () => {
    setIsLoading(true);
    if (!email || !name || !country || !cvv || !number || !date) {
      setIsLoading(false);
      return toast({ title: "Some fields are missing", status: "error" });
    }

    const paymentData = {
      email,
      cvv,
      country,
      number,
      expiry_date: date,
      holder_name: name,
      amount: plan?.amount,
    };

    const resp = await pay(paymentData);
    if (
      resp.statusText &&
      (resp?.status === 500 || resp?.status === 401 || resp?.status === 400)
    ) {
      //@reg failed
      setIsLoading(false);
      return toast({ title: resp?.statusText, status: "error" });
    }

    const res = await resp.json();

    if (res.statusCode !== 200) {
      setIsLoading(false);
      //@payment failure response
      return toast({ title: res?.msg, status: "error" });
    }

    //@next
    setIsLoading(false);
    onModalClose();
    onOpen();
  };

  const bgGradient =
    plan?.name === "Pro"
      ? "linear(to-b,#855FEF,#5435AA)"
      : plan?.name === "Business"
      ? "linear(to-b,#0881FF,#0B4F95)"
      : "linear(to-b,#068092,#043B43)";

  const borderColor =
    plan?.name === "Pro"
      ? "#B29BF3"
      : plan?.name === "Business"
      ? "#79BBFF"
      : "#22BFD6";

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
                      w={plan?.type === "Pro" ? 69 : 160}
                      // w={169}
                      h={29}
                      variant={"unstyled"}
                      borderRadius={10}
                      bgGradient={bgGradient}
                      sx={{ border: `1px solid ${borderColor}` }}
                    >
                      <Text fontSize={18} fontWeight={700} color={"white"}>
                        {plan?.name}
                      </Text>
                    </Box>

                    <HStack justify={"space-between"}>
                      <Text fontSize={18} fontWeight={500} color={"white"}>
                        Total
                      </Text>
                      <Text fontSize={18} fontWeight={500} color={"#B7B7B7"}>
                        <Highlight
                          query={["$49.99", "$19.99", "Cutom Pricing"]}
                          styles={{
                            fontSize: 30,
                            fontWeight: 700,
                            color: "white",
                          }}
                        >
                          {plan?.name === "Enterprise"
                            ? plan?.heading
                            : `usd ${plan?.heading}`}
                        </Highlight>
                      </Text>
                    </HStack>
                  </Stack>
                </CardBody>
              </Card>

              <PaymentMethod />

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
                    name="email"
                    defaultValue={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    name="name"
                    defaultValue={name}
                    onChange={(e) => setName(e.target.value)}
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
                      name="number"
                      defaultValue={number}
                      onChange={(e) => setNumber(e.target.value)}
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
                      name="date"
                      defaultValue={date}
                      onChange={(e) => setDate(e.target.value)}
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
                      name="cvv"
                      defaultValue={cvv}
                      onChange={(e) => setCvv(e.target.value)}
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
                      type="country"
                      name="country"
                      defaultValue={country}
                      onChange={(e) => setCountry(e.target.value)}
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
                variant={isLoading ? "solid" : "unstyled"}
                _hover={{ bgColor: "brand.800" }}
                isLoading={isLoading}
                loadingText={"Processing"}
                disabled={isLoading ? true : false}
                w="100%"
                bgColor={"brand.800"}
                color={"gray.700"}
                rounded={30}
                fontWeight={500}
                size="lg"
                onClick={handlePayment}
              >
                Pay {plan?.amount}
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

const SubscriptionComponent = () => {
  const { planGroups } = useContext(AppContext);

  return (
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
            p={2}
            w={{ base: "full", lg: "md" }}
            alignSelf={"center"}
            display={"flex"}
          >
            {planGroups.map((planGroup: PlanGroupType) => (
              <Tab
                key={planGroup.type}
                flex={1}
                w="full"
                _selected={{
                  borderRadius: 16,
                  bgGradient: "linear(to-r, #FBDA61,#FF5ACD 84%)",
                }}
              >
                <HStack>
                  <Text fontSize={20} fontWeight={700} color="white">
                    {planGroup.type}
                  </Text>
                  {planGroup.type === "Annually" && (
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
                  )}
                </HStack>
              </Tab>
            ))}
          </TabList>
        </VStack>
        <TabPanels w="full" bg={"gray.800"}>
          {planGroups.map((planGroup: PlanGroupType) => {
            return (
              <TabPanel key={planGroup.type}>
                <Stack direction={{ base: "column", lg: "row" }} spacing={4}>
                  <PlansComponent plans={planGroup.plans} />
                </Stack>
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
    </VStack>
  );
};

// @PAYMENT PAGE
export default function PaymentPage() {
  // const { isOpen, onOpen, onClose } = useDisclosure();

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

        <SubscriptionComponent />

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
      {/* <ModalComponent
        isModalOpen={isOpen}
        onModalClose={onClose}
        onModalOpen={onOpen}
      /> */}
    </>
  );
}
