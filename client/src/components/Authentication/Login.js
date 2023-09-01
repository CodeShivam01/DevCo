import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  useToast,
} from "@chakra-ui/react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";




const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();





  const handleClick = () => setShow(!show);
  
  const submitHandler = async () => {
    setLoading(true);
    console.log("login button working");
    if (!email || !password ) {
      console.log("login  working");
      toast({
        title: "Please Fill all the Fields",
         status: "warning",
         duration: 5000,
         isClosable: true,
         position: "bottom",
       });
       return;
     }
     
     try {
       const config = {
         headers: {
           "Content-type": "application/json",
         },
       };
       const { data } = await axios.post(
         "/api/user/login",
         { email, password },
         config
         );
         console.log("api workin");
       toast({
         title: "Login Successful",
         status: "success",
         duration: 5000,
         isClosable: true,
         position: "bottom",
       });
       localStorage.setItem("userInfo", JSON.stringify(data));
       navigate("/chats");
     } catch (error) {
       console.error("Error:", error);
       console.log(error.response.data)
       toast({
         title: "Login Failed",
         description: "There was an error during Login.",
         status: "error",
         duration: 5000,
         isClosable: true,
         position: "bottom",
       });
     } 
  };

  const setGuestCredentials = () => {
    setEmail("guest@guest.com");
    setPassword("guest123");
  };

  return (
    <VStack>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Email"
          value={email} // Bind the email state to the input value
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="Password"
            type={show ? "text" : "password"}
            value={password} // Bind the password state to the input value
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width={"4.5rem"}>
            <Button h={"1.75rem"} size={"sm"} onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        colorScheme="blue"
        width={"100%"}
        style={{ margin: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Log In
      </Button>
      <Button
        variant={"solid"}
        colorScheme="red"
        width={"100%"}
        style={{ margin: 5 }}
        onClick={setGuestCredentials}
      >
        Get Guest User Credentials
      </Button>
    </VStack>
  );
};

export default Login;












