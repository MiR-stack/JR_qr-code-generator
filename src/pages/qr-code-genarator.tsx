"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, RefreshCw } from "lucide-react";
import { Customization, Inputs } from "@/components/qr-code-genarator";
import useQrCode from "@/hooks/useQrCode";

export default function Component() {
  const {
    ref,
    inputData,
    imageUrl,
    customization,
    handleInputData,
    handleImageUrl,
    handleCustomization,
    handleDownload,
    handleRegenerate,
  } = useQrCode();

  return (
    <div className="container mx-auto p-4 max-w-4xl ">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
        QR Code Customizer
      </h1>
      <div className="flex flex-col md:flex-row items-start gap-8">
        <Card className="p-6 space-y-6 w-full md:min-w-3xl">
          <Inputs
            imageUrl={imageUrl}
            inputData={inputData}
            handleImageUrl={handleImageUrl}
            handleInputData={handleInputData}
          />
          <Customization
            customization={customization}
            handleCustomization={handleCustomization}
          />
        </Card>
        <Card className="flex flex-col justify-between w-full md:w-auto">
          <CardContent className="flex-grow flex items-center justify-center p-6">
            <div className="w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center relative">
              <div
                className="w-48 h-48 rounded-lg flex items-center justify-center overflow-hidden"
                style={{
                  backgroundColor: customization.color,
                  boxShadow: `0 4px 14px ${customization.color}80`,
                }}
                ref={ref}
              ></div>
            </div>
          </CardContent>
          <div className="p-6 bg-gray-50 rounded-b-lg flex justify-between">
            <Button variant="outline" className="w-[calc(50%-0.5rem)]">
              <RefreshCw className="mr-2 h-4 w-4" onClick={handleRegenerate} />{" "}
              Regenerate
            </Button>
            <Button className="w-[calc(50%-0.5rem)]" onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" /> Download
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
