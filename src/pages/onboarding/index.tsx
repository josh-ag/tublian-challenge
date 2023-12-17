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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading, setIsLoading } = useContext(AppContext);
  const navigate = useNavigate();
  const toast = useToast();

  const isValidEmailAddr =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //@handle login
  const handleLogin = async () => {
    setIsLoading(true);
    if (!email || !password) {
      setIsLoading(false);
      return toast({
        title: "Email and Password is marked required.",
        status: "error",
      });
    }

    if (email && !isValidEmailAddr.test(email)) {
      setIsLoading(false);
      return toast({ title: "Not a valid email address", status: "error" });
    }

    try {
      const resp = await login({ email, password });

      if (
        resp.statusText &&
        (resp?.status === 500 || resp?.status === 401 || resp?.status === 400)
      ) {
        //@reg failed
        setIsLoading(false);
        return toast({ title: resp?.statusText, status: "error" });
      }

      const res = await resp.json();
      if (res?.statusCode !== 200) {
        //@login failed
        setIsLoading(false);
        return toast({ title: res.msg, status: "error" });
      }

      //store token
      localStorage.setItem("_token", res?.user?.token);

      //@login succeeded
      setIsLoading(false);
      toast({ title: res.msg, status: "success" });
      return navigate("/setup");
    } catch (err) {
      if (err instanceof Error) {
        setIsLoading(false);
        if (err?.name === "AbortError") {
          return toast({ title: "Request timeout!", status: "error" });
        } else {
          return toast({
            title: "Oops!\nSomething went wrong",
            status: "error",
          });
        }
      }
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
                to={"/create"}
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
                disabled={isLoading ? true : false}
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
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
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                placeholder="Pasword"
                variant={"flushed"}
                fontSize={16}
                fontWeight={500}
                _focus={{ color: "#CFCFCF" }}
                focusBorderColor="#CFCFCF"
                borderColor={"#888888"}
              />

              <Button
                variant={isLoading ? "solid" : "unstyled"}
                isLoading={isLoading}
                loadingText={"Processing"}
                disabled={isLoading ? true : false}
                w="100%"
                bgColor="brand.800"
                color={"gray.700"}
                rounded={30}
                fontWeight={500}
                size={"lg"}
                onClick={handleLogin}
                _hover={{ bgColor: "brand.800" }}
              >
                Proceed
              </Button>
              <HStack flexWrap={"wrap"}>
                <Text fontSize={16} fontWeight={400}>
                  Dont have account?
                </Text>
                <Link
                  as={RouterLink}
                  to="/create"
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
