import React , {useState} from 'react'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";



const Signup = () => {

    const [show, setShow] = useState(false);
    const [confirmshow, setConfirmshow] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [pic, setPic] = useState();
  




    const handleClick = () => setShow(!show);
    const confirmClick = () => setConfirmshow(!confirmshow);


    const postDetail = (pics) => {

    }
    const submitHandler = () => {};

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
            type={'file'}
            p={1.5}
            accept='image/'
            onChange={(e) => postDetail(e.target.value[0])}
          />
              <Button
              colorScheme='blue'
              width={'100%'}
              style={{margin:15}}
              onClick={submitHandler}
              >
                  Sign Up
            </Button>
      </FormControl>
    </VStack>
  );
}

export default Signup