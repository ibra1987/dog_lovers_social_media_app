import Image from "next/image";
import SignUp from "./components/SignUp";

function page() {
  return (
    <div className="w-full  flex justify-center items-center bg-blue-400 ">
      {/* <div className="hidden md:flex h-full overflow-y-hidden justify-start  items-start w-1/2 relative">
        <div className="absolute top-0 z-10 left-0 bg-opacity-40 w-full h-full bg-blue-400"></div>
        <Image
          alt="dog and man"
          className="hidden md:flex"
          fill={true}
          src="/assets/dog_and_man.jpg"
          priority={false}
        />
      </div> */}
      <div className=" w-11/12 md:w-1/2    flex flex-col justify-center items-center">
        
        <SignUp />
      </div>
    </div>
  );
}

export default page;
