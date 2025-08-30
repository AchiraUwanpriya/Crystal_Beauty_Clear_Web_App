import { useState } from "react";
import mediaUpload from "../src/utils/mediaUpload";




export default function TestPage() {
const[file,setfile]=useState(null);


async function uploadImage(){
  const link = await mediaUpload(file);
  console.log(link);

  

}

    return (
        <div className="w-full h-full flex items-center justify-center">
            
             <input type="file" onChange={
              (e) => {
                setfile(e.target.files[0]);
                
                  
              }
             } />

              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={uploadImage}>Upload</button>
        </div>
    );

}
