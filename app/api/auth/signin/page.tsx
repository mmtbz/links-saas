import { Button, Flex, Grid, Text } from "@radix-ui/themes";
import WorkPerson from "../../../../public/svg/working_person.svg";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  return (
    <Grid columns={{ sm: "1", lg: "2" }}>
      <Flex direction="column" className="px-2 lg:mx-auto">
        <Text size="7" mb="5">
          Welcome back 👋
        </Text>
        <Text size="2">Today is a new day. It's your day. You shape it.</Text>
        <Text size="2" mb="3">
          Sign in to manage your projects
        </Text>
        <Flex direction="column" mb="3">
          <label>Email</label>
          <input
            placeholder="example@email.com"
            className="border border-solid border-grey px-3 py-2 rounded-xl bg-blue-50 outline-none"
          />
        </Flex>
        <Flex direction="column" mb="3">
          <label>Password</label>
          <input
            placeholder="At least 8 characters"
            type="password"
            className="border border-solid border-grey px-3 py-2 rounded-xl bg-blue-50 outline-none"
          />
        </Flex>
        <Flex justify="end" className="mb-3">
          <Button
            variant="ghost"
            color="blue"
            className="outline-none hover:bg-inherit hover:cursor-pointer"
          >
            Forgot Password?
          </Button>
        </Flex>

        <button className="px-3 py-2 bg-slate-800 text-white rounded-xl mb-5">
          Sign In
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-1 border-t border-gray-300" />
          <span className="mx-4 text-gray-500">Or</span>
          <hr className="flex-1 border-t border-gray-300" />
        </div>

        <button className="px-3 py-2 bg-sky-50 text-black rounded-xl mb-5 flex gap-2 justify-center items-center">
          <FcGoogle size={20} />
          <Text>Sign In with Google</Text>
        </button>

        <button className="px-3 py-2 bg-sky-50 text-black rounded-xl mb-5">
          Sign In with Facebook
        </button>

        <Flex gap="2" align="center" justify="end">
          <Text>Don't have an account?</Text>
          <a className="outline-none hover:bg-inherit hover:cursor-pointer text-sky-600">
            Sign Up
          </a>
        </Flex>
      </Flex>
      <Image src={WorkPerson} alt="My Happy SVG" />
    </Grid>
  );
};

export default LoginPage;
