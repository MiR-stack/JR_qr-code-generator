import { HexColorPicker } from "react-colorful";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CustomizationTypes } from "@/hooks/useQrCode";

const qrStyles = ["dots", "classic"];
const innerShapes = [
  "rounded",
  "classy",
  "classy-rounded",
  "square",
  "extra-rounded",
];
const outerShapes = ["dot", "square", "extra-rounded"];

interface CustomizationProps {
  customization: CustomizationTypes;
  handleCustomization: (name: string, value: string) => void;
}

function Customization({
  customization,
  handleCustomization,
}: CustomizationProps) {
  const { qrStyle, innerShape, outerShape, color } = customization;

  return (
    <>
      <div>
        <Label className="text-lg font-semibold mb-2 block">QR Style</Label>
        <RadioGroup
          value={qrStyle}
          onValueChange={(value) => {
            handleCustomization("qrStyle", value);
          }}
          className="flex flex-wrap gap-4"
        >
          {qrStyles.map((style) => (
            <div
              key={style}
              className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2"
            >
              <RadioGroupItem value={style} id={`qr-style-${style}`} />
              <Label htmlFor={`qr-style-${style}`} className="cursor-pointer">
                {style.charAt(0).toUpperCase() + style.slice(1)}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div>
        <Label
          htmlFor="inner-shape"
          className="text-lg font-semibold mb-2 block"
        >
          Inner Shape
        </Label>
        <Select
          value={innerShape}
          onValueChange={(value) => {
            handleCustomization("innerShape", value);
          }}
        >
          <SelectTrigger id="inner-shape" className="w-full">
            <SelectValue placeholder="Select inner shape" />
          </SelectTrigger>
          <SelectContent>
            {innerShapes.map((shape) => (
              <SelectItem key={shape} value={shape}>
                {shape.charAt(0).toUpperCase() + shape.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label
          htmlFor="outer-shape"
          className="text-lg font-semibold mb-2 block"
        >
          Outer Shape
        </Label>
        <Select
          value={outerShape}
          onValueChange={(value) => {
            handleCustomization("outerShape", value);
          }}
        >
          <SelectTrigger id="outer-shape" className="w-full">
            <SelectValue placeholder="Select outer shape" />
          </SelectTrigger>
          <SelectContent>
            {outerShapes.map((shape) => (
              <SelectItem key={shape} value={shape}>
                {shape.charAt(0).toUpperCase() + shape.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="text-lg font-semibold mb-2 block">Color</Label>
        <HexColorPicker
          color={color}
          onChange={(value) => handleCustomization("color", value)}
          className="w-full max-w-[200px] mx-auto"
        />
        <div className="mt-4">
          <Label
            htmlFor="color-code"
            className="block text-sm font-medium text-gray-700"
          >
            Color Code (HEX or RGB)
          </Label>
          <input
            type="text"
            id="color-code"
            value={color}
            onChange={(e) => {
              const value = e.target.value;
              if (value.startsWith("#") || value.startsWith("rgb")) {
                handleCustomization("color", value);
              }
            }}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Enter HEX or RGB color"
          />
        </div>
      </div>
    </>
  );
}

export default Customization;
