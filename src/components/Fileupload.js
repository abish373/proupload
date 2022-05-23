import { useEffect, useRef, useState } from "react";
import { useImageURLs } from "../App";

export default function FileUpload() {
  const [file, setFile] = useState();
  const [previewURL, setPreviewURL] = useState("");
  const [urls, setUrls] = useImageURLs();

  const ref = useRef();

  useEffect(() => {
    if (file) {
      const objectURL = URL.createObjectURL(file);
      setPreviewURL(objectURL);
    }
  }, [file]);

  const handleUpload = (e) => {
    setUrls([...urls, previewURL]);
    ref.current.value = "";
    setPreviewURL("");
  };

  return (
    <div>
      <div className="preview">
        <img className="preview-img" src={previewURL} alt="Please upload" />
      </div>
      <div className="file-upload">
        <input
          ref={ref}
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          accept="png"
        />
      </div>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
