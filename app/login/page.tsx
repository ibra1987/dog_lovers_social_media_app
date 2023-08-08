import Link from "next/link";
import Image from "next/image";
import Login from "./components/Login";

function page() {
  return (
    <div className="w-full h-screen    flex justify-center items-center ">
      <div className="hidden md:flex   h-full overflow-y-hidden justify-start  items-start w-1/2 relative">
        <div className="absolute top-0 z-10 left-0 bg-opacity-40 w-full h-full bg-blue-400"></div>
        <Image
          alt="dog and man"
          className=""
          fill={true}
          src="/assets/dog_and_man.jpg"
        />
      </div>
      <div className="w-11/12 md:w-1/2 h-full  border-t  bg-white  flex flex-col justify-center items-center">
        <h1 className="text-4xl text-blue-400 font-extrabold mt-20 mb-6 md:my-6">
          Sign In To Your Account
        </h1>
        <div className="w-full md:w-4/5 rounded p-4 bg-[#fdfdfd] shadow-md border py-10">
          <Login />
          <div className="font-medium text-gray-600">
            Don't have an account? Sign Up{" "}
            <Link
              className={
                "text-blue-600 transition duration-200 border-b border-b-white hover:border-b-blue-600"
              }
              href={"/signup"}
            >
              here
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
