import { createClient } from "@supabase/supabase-js";

const aneonKey= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InViZ2l3Z3J6YmNkYWNld2F3aG1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyNzkxNTIsImV4cCI6MjA3MTg1NTE1Mn0.B2oWPDMgCg0L3QfqnN9zrElFsc_Gxg1r-ABPlbPK2mQ";
const supabaseUrl = "https://ubgiwgrzbcdacewawhma.supabase.co";

const supabase = createClient(supabaseUrl, aneonKey);



    export default function mediaUpload(file){
        return new Promise((resolve,reject)=>{

            if (file == null){
                reject("No file provided");

            }else{

                const timeStamp = new Date().getTime();
                const fileName = timeStamp + file.name


                supabase.storage.from("Images").upload(fileName,file,{
                    upsert:false,
                    cacheControl:"3600",

                }).then(
                    ()=>{
                        const publicUrl = supabase.storage.from('Images').getPublicUrl(fileName).data.publicUrl;
                        resolve(publicUrl);

                    }
                ).catch(
                    ()=>{
                    reject("An error occurred");
                })
            }

        })
    }