import { Label } from "@radix-ui/react-label";

interface InputPropTypes {
  inputData: string;
  imageUrl: string;
  handleInputData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleImageUrl: (url: string) => void;
}

function Inputs({
  inputData,
  imageUrl,
  handleInputData,
  handleImageUrl,
}: InputPropTypes) {
  return (
    <>
      <div>
        <Label
          htmlFor="input-data"
          className="text-lg font-semibold mb-2 block"
        >
          Input Data
        </Label>
        <input
          type="text"
          id="input-data"
          value={inputData}
          onChange={handleInputData}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          placeholder="Enter data to be encoded"
        />
      </div>

      <div>
        <Label htmlFor="image-url" className="text-lg font-semibold mb-2 block">
          Image URL
        </Label>
        <input
          type="text"
          id="image-url"
          value={imageUrl}
          onChange={(e) => handleImageUrl(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          placeholder="Enter image URL"
        />
      </div>

      <div>
        <Label
          htmlFor="image-upload"
          className="text-lg font-semibold mb-2 block"
        >
          Upload Image
        </Label>
        <input
          type="file"
          id="image-upload"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = (e) => handleImageUrl(e.target?.result as string);
              reader.readAsDataURL(file);
            }
          }}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          accept="image/*"
        />
      </div>
    </>
  );
}

export default Inputs;
