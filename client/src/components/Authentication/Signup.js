import React , {useState} from 'react'
import axios from 'axios';
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
import { useNavigate } from "react-router-dom";







const Signup = () => {
    const toast = useToast();
    const [show, setShow] = useState(false);
    const [confirmshow, setConfirmshow] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [pic, setPic] = useState();
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  




    const handleClick = () => setShow(!show);
    const confirmClick = () => setConfirmshow(!confirmshow);


    const postDetail = (pics) => {
        setLoading(true);
        if(pics === undefined){
            toast({
              title: "Please Select an Image.",
              status: "warning",
              duration: 5000,
              isClosable: true,
              position: 'bottom',
            });
            return;
        }
        if(pics.type === "image/jpeg" || pics.type === "image/png"){
          const data = new FormData();
          data.append("file",pics);
          data.append("upload_preset", "chat-app");
          data.append("cloud_name", "devcode01");
          fetch("https://api.cloudinary.com/v1_1/devcode01", {
            method: "post",
            body: data,
          }).then((res) => res.json())
          .then((data) => {
            setPic(data.url.toString());
            setLoading(false);
          }).catch((err) => {
            console.log(err);
            setLoading(false);
          });
        }else{
          toast({
            title: "Please Select an Image.",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          setLoading(false);
          return;
        }
    }
  const submitHandler = async () => {
    setLoading(true);
    if (!name || !email || !password || !confirmpassword) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });
      setLoading(false);
      return;
    }
    if (password !== confirmpassword) {
      toast({
        title: "Password Do Not Match",
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
          "Content-type":"application/json",
        },
      };
      const { data } = await axios.post("/api/user/signup", { name, email, password, pic },
        config);
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/chats");
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Registration Failed",
        description: "There was an error during registration.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    } 
  };

  return (
    <VStack>
      <FormControl id="firts-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="Password"
            type={show ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width={"4.5rem"}>
            <Button h={"1.75rem"} size={"sm"} onClick={handleClick}>
              {show ? "hide" : "show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="Confirm Password"
            type={confirmshow ? "text" : "password"}
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <InputRightElement width={"4.5rem"}>
            <Button h={"1.75rem"} size={"sm"} onClick={confirmClick}>
              {confirmshow ? "hide" : "show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="pic" isRequired>
        <FormLabel>Upload Your Picture</FormLabel>
        <Input
          type={"file"}
          p={1.5}
          accept="image/"
          onChange={(e) => postDetail(e.target.value[0])}
        />
        <Button
          colorScheme="blue"
          width={"100%"}
          style={{ margin: 15 }}
          onClick={submitHandler}
          isLoading={loading}
        >
          Sign Up
        </Button>
      </FormControl>
    </VStack>
  );
}

export default Signup