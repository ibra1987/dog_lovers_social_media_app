import Link from "next/link";
import Image from "next/image";
import Login from "./components/Login";

function page() {
  return (
    <div className="w-full py-20 bg-white  flex justify-end items-center relative ">
       <div className="hidden lg:flex h-full w-full overflow-y-hidden justify-start  items-start absolute">
        <div className="absolute z-10 top-0 left-0 bg-opacity-40 w-full h-full bg-blue-400 "></div>
        <Image
          alt="dog and man"
          className=""
          fill={true}
          src="/assets/dog_and_man.jpg"
        />
      </div>
     
      <div className="w-11/12 z-20  lg:w-1/3   bg-white shadow-dark shadow-md  flex flex-col justify-start py-6 mr-20 rounded-md  center items-center relative">
        <h1 className="text-2xl text-dark font-extrabold mt-20 mb-6 md:my-6">
          Sign In To Your Account
        </h1>
        <div className="w-full md:w-4/5 rounded p-4 border py-10">
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
