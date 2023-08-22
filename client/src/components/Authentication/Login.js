import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => setShow(!show);
  const submitHandler = () => {
    // Add your login logic here using the email and password state values
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



















// import React, { useState } from "react";
// import {
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   InputGroup,
//   InputRightElement,
//   VStack,
// } from "@chakra-ui/react";

// const Login = () => {

//     const [show, setShow] = useState(false);
//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState();

//     const handleClick = () => setShow(!show);
//     const submitHandler = () => {};

//     return (
//       <VStack>

//         <FormControl id="email" isRequired>
//           <FormLabel>Email</FormLabel>
//                 <Input
//                     value={''}
//             placeholder="Email"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </FormControl>
//         <FormControl id="password" isRequired>
//           <FormLabel>Password</FormLabel>
//           <InputGroup>
//                     <Input
//                         value={''}
//               placeholder="Password"
//               type={show ? "text" : "password"}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <InputRightElement width={"4.5rem"}>
//               <Button h={"1.75rem"} size={"sm"} onClick={handleClick}>
//                 {show ? "hide" : "show"}
//               </Button>
//             </InputRightElement>
//           </InputGroup>
//         </FormControl>

//           <Button
//             colorScheme="blue"
//             width={"100%"}
//             style={{ margin: 15 }}
//             onClick={submitHandler}
//           >
//             Log In
//           </Button>
//             <Button
//                 variant={"solid"}
//             colorScheme="red"
//             width={"100%"}
//             style={{ margin: 5 }}
//                 onClick={() => {
//                     setEmail("guest@guest.com");
//                     setPassword("guest123");
//                     console.log('click');
//                 }
//             }
//           >
//             Get Guest User Credentials
//           </Button>
//       </VStack>
//     );
// }

// export default Login
