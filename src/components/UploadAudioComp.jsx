import { useEffect, useState } from "react";
import { storage } from "../firebase";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import { Button } from "react-bootstrap";

function UploadAudioComp() {
  const [mp3, setMp3] = useState("");
  const [mp3Url, setMp3Url] = useState([]);
  function handleChangeAudio(event) {
    setMp3(event.target.files[0]);
  }
  const handleUploadAudio = () => {
    if (!mp3) {
      alert("Please upload an audio first!");
    }

    const storageRef = ref(storage, `/mp3/${mp3.name}`);
    const uploadTask = uploadBytesResumable(storageRef, mp3);

    uploadTask.on(
      "state_changed",

      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      }
    );
  };

  useEffect(() => {
    listAll(ref(storage, "mp3")).then((audio) => {
      console.log(audio);
      audio.items.forEach((val) => {
        getDownloadURL(val).then((url) => {
          setMp3Url((data) => [...data, url]);
        });
      });
    });
  }, []);
  // console.log(mp3Url);
  return (
    <div className="my-3">
      <h3 className="mb-2">Load an audio:</h3>
      <div>
        <input type="file" onChange={handleChangeAudio} accept="/audio/mp3" />
        <Button onClick={handleUploadAudio}>Upload mp3</Button>
        {mp3Url.map((url) => {
          return <p>{url}</p>;
        })}
      </div>
    </div>
  );
}

export default UploadAudioComp;
