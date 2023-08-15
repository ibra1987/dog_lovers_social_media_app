import { FaImage, FaPlay, FaVideo } from "react-icons/fa";

function MediaUpload({
  handler,
  title,
  type,
  name,
}: {
  handler: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  title: string;
  type: string;
  name: string;
}) {
  return (
    <div className="p-2 cursor-pointer  flex justify-start items-center hover:bg-gray-50 transition duration-200 shadow-md">
      <label
        htmlFor={"userUploads"}
        className="flex justify-start  items-center space-x-2 cursor-pointer"
      >
        {type === "image" && (
          <>
            <FaImage className="text-emerald-300 " />{" "}
            <span className="text-sm font-light">{title} </span>
          </>
        )}
        {type === "video" && (
          <>
            <FaVideo className="text-emerald-300 " />{" "}
            <span className="text-sm font-light">{title} </span>
          </>
        )}
      </label>
      <input
        id={'userUploads'}
        className={"w-full bg-white outline-none rounded  font-medium hidden"}
        type={"file"}
        placeholder=""
        name={name}
        onChange={handler}
        multiple={true}
      />
    </div>
  );
}

export default MediaUpload;
