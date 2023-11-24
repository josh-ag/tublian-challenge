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
  IconButton,
  Avatar,
  Tabs,
  TabList,
  Tab,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import tublianLogo from "../../assets/tublian_logo.svg";
import tickCircle from "../../assets/tick-circle.svg";
import teamProjectImage from "../../assets/team_project_card1.svg";
import personalProjectImage from "../../assets/personalProjectImage.svg";
import recruitingImage from "../../assets/recruitingImage.svg";

// @Onboarding page3
export default function PaymentPage() {
  return (
    <Flex
      w={"full"}
      direction={"column"}
      h={"100vh"}
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
        <HStack>
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
          <Heading fontWeight={700} fontSize={24} textAlign={"center"}>
            Payment Plan
          </Heading>
          <Text fontSize={16} fontWeight={500} color={"#CFCFCF"}>
            We will customize your experience based on your option.
          </Text>
        </VStack>

        <Tabs
          variant="unstyled"
          colorScheme="green"
          p={4}
          sx={{ border: "1px solid gray.600" }}
        >
          <TabList w="full" sx={{ border: "1px solid #222" }}>
            <Tab
              px={12}
              py={4}
              _selected={{
                borderRadius: 20,
                bgGradient: "linear(to-r, #FBDA61,#FF5ACD 84%)",
              }}
              fontSize={20}
              fontWeight={700}
              w="full"
            >
              Monthly
            </Tab>
            <Tab
              px={12}
              py={4}
              _selected={{
                borderRadius: 20,
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
          <HStack spacing={10}>
            <Card
              as={Link}
              shadow={"lg"}
              rounded={20}
              sx={{ padding: 0.5 }}
              boxShadow={"md"}
              w="sm"
              bgGradient="linear(to-r,#FBDA61,#FF5ACD 84%)"
            >
              <Box w="full" h="full" bgColor={"gray.800"} rounded={20}>
                <CardHeader display="flex" justifyContent={"flex-end"}>
                  <IconButton
                    size={"sm"}
                    rounded={20}
                    colorScheme="darkAlpha"
                    aria-label="checked mark"
                    icon={
                      <Avatar
                        src={tickCircle}
                        size={"xs"}
                        objectFit={"contain"}
                      />
                    }
                  />
                </CardHeader>

                <CardBody>
                  <VStack spacing={4}>
                    <Image
                      src={teamProjectImage}
                      objectFit={"cover"}
                      alignSelf={"center"}
                    />
                    <Heading fontSize={20} fontWeight={700} color="#FCFCFC">
                      Team Projects
                    </Heading>
                    <Text fontSize={16} fontWeight={500} textOverflow={"wrap"}>
                      Hire developers for team projects.
                    </Text>
                  </VStack>
                </CardBody>
              </Box>
            </Card>

            <Card
              shadow={"md"}
              rounded={20}
              sx={{ padding: 0.5, transition: "all 500ms linear" }}
              w="sm"
              _hover={{ bgGradient: "linear(to-r,#FBDA61,#FF5ACD 84%)" }}
            >
              <Box w="full" h="full" bgColor={"gray.800"} rounded={20}>
                <CardHeader display="flex" justifyContent={"flex-end"}>
                  <IconButton
                    size={"sm"}
                    rounded={20}
                    colorScheme="darkAlpha"
                    aria-label="checked mark"
                    icon={
                      <Avatar
                        src={tickCircle}
                        size={"xs"}
                        objectFit={"contain"}
                      />
                    }
                  />
                </CardHeader>

                <CardBody>
                  <VStack spacing={4}>
                    <Image
                      src={personalProjectImage}
                      objectFit={"cover"}
                      alignSelf={"center"}
                    />
                    <Heading fontSize={20} fontWeight={700} color="#FCFCFC">
                      Personal Project
                    </Heading>
                    <Text fontSize={16} fontWeight={500} textOverflow={"wrap"}>
                      Hire developers for team projects.
                    </Text>
                  </VStack>
                </CardBody>
              </Box>
            </Card>

            <Card
              shadow={"md"}
              rounded={20}
              sx={{ padding: 0.5 }}
              w="sm"
              _hover={{ bgGradient: "linear(to-r,#FBDA61,#FF5ACD 84%)" }}
            >
              <Box w="full" h="full" bgColor={"gray.800"} rounded={20}>
                <CardHeader display="flex" justifyContent={"flex-end"}>
                  <IconButton
                    size={"sm"}
                    rounded={20}
                    colorScheme="darkAlpha"
                    aria-label="checked mark"
                    icon={
                      <Avatar
                        src={tickCircle}
                        size={"xs"}
                        objectFit={"contain"}
                      />
                    }
                  />
                </CardHeader>

                <CardBody>
                  <VStack spacing={4}>
                    <Image
                      src={recruitingImage}
                      objectFit={"cover"}
                      alignSelf={"center"}
                    />
                    <Heading fontSize={20} fontWeight={700} color="#FCFCFC">
                      Personal Project
                    </Heading>
                    <Text fontSize={16} fontWeight={500} textOverflow={"wrap"}>
                      Hire developers for team projects.
                    </Text>
                  </VStack>
                </CardBody>
              </Box>
            </Card>
          </HStack>
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
