import {
  Box,
  Flex,
  Image,
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
  useToast,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import onboardingImg2 from "../../assets/onboarding_img2.svg";
import tublianLogo from "../../assets/tublian_logo.svg";
import logoGoogle from "../../assets/icon_google.svg";
import { useContext, useState } from "react";
import { AppContext } from "../../contexts/appContext";

// @Onboarding page2
export default function CreateAccountPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCharLen, setIsCharLen] = useState<boolean>(false);
  const [isContainSymbol, setIsContainSymbol] = useState<boolean>(false);
  const [isContainUppercase, setIsContainUppercase] = useState<boolean>(false);

  const { register } = useContext(AppContext);
  const navigate = useNavigate();
  const toast = useToast();

  const emailPattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const testForUppercase = /[A-Z]/;
  const testSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  const handleRegister = async () => {
    setIsLoading(true);
    if (!email || !password) {
      setIsLoading(false);
      return toast({
        title: "Email and Password field is marked required",
        status: "error",
      });
    }

    if (email && !emailPattern.test(email)) {
      setIsLoading(false);
      return toast({ title: "Not a valid email address", status: "error" });
    }

    if (!isCharLen || !isContainSymbol || !isContainUppercase) {
      setIsLoading(false);
      return toast({ title: "Password must meet criteria", status: "error" });
    }

    try {
      //@register user
      const resp = await register({ email, password });
      console.log(resp);

      if (resp.statusText && (resp?.status === 500 || resp?.status === 401)) {
        //@reg failed
        setIsLoading(false);
        return toast({ title: resp?.statusText, status: "error" });
      }

      const res = await resp.json();

      if (res.statusCode !== 200) {
        //@reg failed
        setIsLoading(false);
        return toast({ title: res.msg, status: "error" });
      }

      //@registration succeeded
      setIsLoading(false);
      toast({ title: res.msg, status: "success" });
      return navigate("/");
    } catch (err) {
      if (err instanceof Error) {
        setIsLoading(false);
        if (err?.name === "AbortError") {
          return toast({ title: "Request timeout!", status: "error" });
        } else {
          return toast({ title: "Something went wrong", status: "error" });
        }
      }
    }
  };

  //@handle setting user password
  const handleSetPasswd = (passwd: string) => {
    // setPassword(passwd);

    if (testForUppercase.test(passwd)) {
      setIsContainUppercase(true);
    } else {
      setIsContainUppercase(false);
    }
    if (testSymbol.test(passwd)) {
      setIsContainSymbol(true);
    } else {
      setIsContainSymbol(false);
    }

    //test char len
    ((arg) => {
      if (arg.length >= 8) {
        setIsCharLen(true);
      } else {
        setIsCharLen(false);
      }
    })(passwd);

    setPassword(passwd);
  };

  return (
    <Flex w={"full"} minH={"100vh"} h={"full"} pos={"relative"}>
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
        p={{ base: 4, lg: 10 }}
        flex={1}
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
              <Text fontFamily={"Recepts"} fontWeight={"400"} fontSize={13}>
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
              spacing={2}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
            >
              <Text
                fontWeight={700}
                fontSize={{ base: 18, lg: 34, "2xl": 36 }}
                color={"white"}
              >
                Create Account
              </Text>
              <Text fontSize={16} fontWeight={500} color={"#CFCFCF"}>
                <Highlight query={"@John Doe"} styles={{ color: "#4BA3FF" }}>
                  Creating account for @John Doe
                </Highlight>
              </Text>

              <Input
                disabled={isLoading ? true : false}
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
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
                disabled={isLoading ? true : false}
                defaultValue={password}
                onChange={(e) => handleSetPasswd(e.target.value)}
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
                  isChecked={isCharLen}
                >
                  8 Characters minimum
                </Checkbox>
                <Checkbox
                  fontSize={12}
                  fontWeight={400}
                  color={"#888"}
                  isChecked={isContainUppercase}
                >
                  One Uppercase Character
                </Checkbox>
                <Checkbox
                  fontSize={12}
                  fontWeight={400}
                  color={"#888"}
                  isChecked={isContainSymbol}
                >
                  One symbol character
                </Checkbox>
              </Stack>
              <VStack w="full" spacing={6}>
                <Button
                  variant={isLoading ? "solid" : "unstyled"}
                  _hover={{ bgColor: "brand.800" }}
                  isLoading={isLoading}
                  loadingText={"Processing"}
                  disabled={isLoading ? true : false}
                  w="100%"
                  bgColor="brand.800"
                  color={"gray.700"}
                  rounded={30}
                  fontWeight={500}
                  size="lg"
                  onClick={handleRegister}
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
