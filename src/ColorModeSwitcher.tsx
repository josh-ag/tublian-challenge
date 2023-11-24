// @If you need to implement dark/light theme?
//Plug this code to any section to your app
//**CAUTION: This project was not styled with diverse theme in mind. Thread carefully!

import * as React from "react";
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const color = useColorModeValue("gray.700", "brand.100");

  return (
    <IconButton
      size={["sm", "sm", "md"]}
      color={color}
      fontSize={["sm", "sm", "md"]}
      variant="ghost"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  );
};
