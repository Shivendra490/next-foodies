"use client";
import { useRef, useState } from "react";
import styles from "./ImagePicker.module.css";
import Image from "next/image";
export default function ImagePicker({label,name}) {
    const [pickedImage,setPickedImage]=useState(null)
    const imageRef=useRef()

    let imagePickClickHandler=()=>{
        imageRef.current.click()
    }

    const handleImageChange=(e)=>{
        //get the imagefile
        const file=e.target.files[0]
        // console.log('e',e)
        // console.log('file',file)

        if(!file){
            setPickedImage(null)
            return
        }

        //show the image file as preview
        //we want urlpath for src in img tag
        const fileReader=new FileReader()

        fileReader.onload=()=>{
            setPickedImage(fileReader.result)
            console.log('after-in',fileReader.result)
        }
        //onLoad will trigger once below line completed
        console.log('before - out')
        fileReader.readAsDataURL(file)
    }
    console.log('pickedImg',pickedImage)
  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}> 
            {!pickedImage && <p>NO Image picked yet.</p>}
            {pickedImage && (
                <Image src={pickedImage}
                alt="img selected by user"
                fill
                />
            )}
        </div>
        <input
          className={styles.input}
          type="file"
          accept={"image/png, image/jpeg, image/jpg"}
          id={name}
          required
          name={name}
          ref={imageRef}
          onChange={handleImageChange}

        />
        <button className={styles.button} onClick={imagePickClickHandler} type="button">Pick an Image</button>
      </div>
    </div>
  );
}
