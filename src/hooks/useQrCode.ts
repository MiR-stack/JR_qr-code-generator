import QRCodeStyling from "qr-code-styling";
import { useEffect, useRef, useState } from "react";

interface ShapesTypes {
  innerShape:
    | "rounded"
    | "classy"
    | "classy-rounded"
    | "square"
    | "extra-rounded";
  outerShape: "dot" | "square" | "extra-rounded";
}

export interface CustomizationTypes extends ShapesTypes {
  qrStyle: "dots" | "clasic";

  color: string;
}

const qrCode = new QRCodeStyling({
  width: 200,
  height: 200,
});

function useQrCode() {
  const [inputData, setInputData] = useState<string>(
    "https://heavenjourney.com/"
  );
  const [imageUrl, setImageUrl] = useState<string>(
    "https://res.cloudinary.com/du2jmkqrk/image/upload/v1732110877/favicon-modified_umvgk9.png"
  );

  const handleInputData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  const handleImageUrl = (url: string) => {
    setImageUrl(url);
  };

  // handle customization
  const [customization, setCustomization] = useState<CustomizationTypes>({
    qrStyle: "dots",
    innerShape: "rounded",
    outerShape: "dot",
    color: "#00695b",
  });

  const handleCustomization = (name: string, value: string) => {
    if (name === "qrStyle") {
      let styles: ShapesTypes = {
        innerShape: "square",
        outerShape: "square",
      };

      if (value === "dots") {
        styles = {
          innerShape: "rounded",
          outerShape: "dot",
        };
      }
      console.log(styles, "styles:");
      setCustomization({ ...customization, ...styles });
    }
    setCustomization((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const { innerShape, outerShape, color } = customization;

  const ref = useRef(null);

  useEffect(() => {
    qrCode.append(ref.current || undefined);
  }, []);

  // update qr code
  useEffect(() => {
    qrCode.update({
      data: inputData,
      image: imageUrl,
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 5,
      },
      dotsOptions: {
        type: innerShape,
        color,
      },
      cornersSquareOptions: {
        type: outerShape,
        color,
      },
      cornersDotOptions: {
        type: outerShape === "extra-rounded" ? "dot" : outerShape,
      },
    });
  }, [inputData, imageUrl, color, innerShape, outerShape]);

  const handleRegenerate = () => {
    qrCode.update();
  };

  const handleDownload = () => {
    qrCode.download();
  };

  return {
    ref,
    inputData,
    imageUrl,
    customization,
    handleInputData,
    handleImageUrl,
    handleCustomization,
    handleRegenerate,
    handleDownload,
  };
}

export default useQrCode;
