import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import { Button, HStack, Heading, Stack, Text } from "@chakra-ui/react";

export const ErrorComponent = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <Stack
      w={"100vw"}
      h={"100vh"}
      alignItems={"center"}
      justify={"center"}
      gap={4}
    >
      <HStack flexWrap={"wrap"} align="center" justify="center">
        <Heading>Oops!</Heading>
        <Text
          fontSize={{ base: 14, md: 16 }}
          fontWeight={400}
          textAlign={"center"}
        >
          Something went wrong
        </Text>
      </HStack>

      <Text fontSize={14} fontWeight={700} color="white">
        {(isRouteErrorResponse(error) && error?.statusText) ||
          (error instanceof Error && error?.message)}
      </Text>

      <Button onClick={() => navigate(-1)} variant={"outline"}>
        Take Me Back
      </Button>
    </Stack>
  );
};
