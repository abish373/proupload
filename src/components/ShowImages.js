import { useImageURLs } from "../App";

export default function ShowImages() {
  const [urls] = useImageURLs();

  return (
    <div className="preview">
      {urls.length === 0 && <span>No items</span>}
      {urls.map((url) => (
        <img className="preview-img" src={url} alt="Not found" />
      ))}
    </div>
  );
}
