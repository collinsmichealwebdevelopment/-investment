 //@ts-nocheck
import { useState } from "react";
import { MdCloudUpload, MdDelete } from "react-icons/md";

const Uploader = () => {
  const [fields, setFields] = useState(false) 
  const [image, setImage] = useState(null)

    /*else {
      setFields(true);
      setTimeout(() => setFields(false), 2000)
    }*/
  
  return (
    <div>
      {fields && (
        <p className="text-red mt-1 ml-10  text-xl transition-all duration-150 ease-in">please upload a screenshot.</p>
      )}
    <main className="flex justify-center items-center flex-col">
      <div className="w-full px-5 lg:px-10 ">
        <div  className="flex flex-col justify-center items-center bg-dark-4 border  
        cursor-pointer p-12 m-3 h-80 lg:h-[480px]  w-full rounded-[24px] object-cover object-top" 
        >
            {!image ? (
              <label>
              <div className="item-center flex flex-col justify-center h-full">
                <div className="flex flex-col justify-center items-center">
                  <p>
                  <MdCloudUpload color='#1475cf' size={60} />
                  </p>
                  <p className="text-sm text-slate-200 ">Select from device</p>
            </div>
             </div>
                  <input type="file" name="upload-image" className="w-0 h-0" 
            />
             </label>
            ) : (
              <div className="relative h-full">
              <img src={image} alt="uploaded-pic" className="h-full w-full"/>
              <button
              type="button"
              className="absolute bottom-3 right-3 p-3 rounded-full bg-red text-xl cursor-pointer outline-none
              hover:shadow-md transition-all duration-500 ease-in-out"
              onClick={() => setImage(null)}>
                <MdDelete/>
              </button>
              </div>
            )
}
        </div>
        </div>
    </main>
    </div>
  );
}

export default Uploader;
