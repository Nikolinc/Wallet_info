import TopLine from "../assets/TopLine.svg";
import DownLine from "../assets/DownLine.svg";
import { useEffect, useRef, useState } from "react";
import { getDate, setDate } from "../service/localstore";
import { IHome } from "../types/home";

function Home() {
  const date: IHome = getDate();

  const [name, setName] = useState(date.name);
  const [description, setDescription] = useState(date.description);
  const inputFile = useRef<HTMLInputElement | any>(null);
  const [image, setImage] = useState<File | null>(null);
  const [defaultUserImage, setDefaultUserImage] = useState(date.image);

  const handleImageUpload = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files != null) {
      evt.stopPropagation();
      evt.preventDefault();
      let file = evt.target.files[0];
      setImage(file);
    }
  };

  const onButtonClick = () => {
    inputFile.current.click();
  };

  const handleNameUpload = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (evt.target.value != null) {
      evt.stopPropagation();
      evt.preventDefault();
      const newName = evt.target.value;
      setName(newName);
    }
  };

  const handleDescriptionUpload = (
    evt: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (evt.target.value != null) {
      evt.stopPropagation();
      evt.preventDefault();
      const newDescription = evt.target.value;
      setDescription(newDescription);
    }
  };

  const SaveDate = () => {
    const image: string = String(defaultUserImage);
    console.log("image", image);
    console.log("defaultUserImage", defaultUserImage);
    const homeDate: IHome = {
      image,
      name,
      description,
    };
    setDate(homeDate);
  };

  useEffect(() => {
    if (image) {
      const objectURL = URL.createObjectURL(image);
      setDefaultUserImage(objectURL);
      console.log(defaultUserImage);
      return () => URL.revokeObjectURL(objectURL);
    }
  }, [image]);

  return (
    <div className="h-full lg:my-0 my-12">
      <img
        src={TopLine}
        width="100%"
        height="5%"
        className=" lg:block hidden"
      />
      <div className="flex justify-center items-center lg:h-[70vh] h-[70%]">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6  mx-0 lg:mx-36">
          <div className="flex justify-center">
            <div className="flex justify-center">
              <div className="grid grid-cols-1 gap-6 lg:gap-0">
                <button
                  className=" flex justify-center bg-[url('../assets/Logo.svg')]"
                  onClick={onButtonClick}
                >
                  <img
                    src={defaultUserImage}
                    className="w-64 hover:brightness-50 drop-shadow-xl"
                  />
                  <input
                    type="file"
                    id="file"
                    ref={inputFile}
                    style={{ display: "none" }}
                    onChange={(event) => handleImageUpload(event)}
                  />
                </button>

                <textarea
                  onChange={(event) => {
                    handleNameUpload(event);
                  }}
                  className="text-4xl font-black text-[#fff] bg-[#4B4E59] h-[70px] flex items-center justify-center w-[300px] text-center rounded-lg hover:brightness-50 drop-shadow-xl pt-3"
                >
                  {name}
                </textarea>
              </div>
            </div>
          </div>
          <div className="gap-6 grid grid-cols-1">
            <textarea
              className=" lg:text-3xl text-lg font-black text-[#fff] bg-[#4B4E59] w-[350px] lg:w-[600px] py-12 lg:px-[25px] px-[10px] text-center rounded-lg hover:brightness-50 drop-shadow-xl h-[500px] overflow-hidden"
              onChange={(event) => {
                handleDescriptionUpload(event);
              }}
            >
              {description}
            </textarea>
            <button
              onClick={() => SaveDate()}
              className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-[#FFF] text-3xl px-6 py-3  rounded-lg drop-shadow-xl w-[250px]"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
      <img
        src={DownLine}
        width="100%"
        height="5%"
        className="absolute bottom-0 lg:block hidden"
      />
    </div>
  );
}

export default Home;
