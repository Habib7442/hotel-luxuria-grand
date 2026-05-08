"use client";

import React, { useCallback, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuPages = [
  "/assets/menu/final menu 160426_compressed_page-0001.jpg",
  "/assets/menu/final menu 160426_compressed_page-0002.jpg",
  "/assets/menu/final menu 160426_compressed_page-0003.jpg",
  "/assets/menu/final menu 160426_compressed_page-0004.jpg",
  "/assets/menu/final menu 160426_compressed_page-0005.jpg",
  "/assets/menu/final menu 160426_compressed_page-0006.jpg",
  "/assets/menu/final menu 160426_compressed_page-0007.jpg",
  "/assets/menu/final menu 160426_compressed_page-0008.jpg",
  "/assets/menu/final menu 160426_compressed_page-0009.jpg",
];

const Page = React.forwardRef<HTMLDivElement, { src: string; number: number }>((props, ref) => {
  return (
    <div className="bg-onyx flex items-center justify-center overflow-hidden shadow-2xl" ref={ref}>
      <div className="relative w-full h-full">
        <Image
          src={props.src}
          alt={`Menu Page ${props.number}`}
          fill
          className="object-contain"
          priority={props.number <= 2}
        />
      </div>
    </div>
  );
});

Page.displayName = "Page";

export function MenuFlipbook() {
  const book = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const onFlip = useCallback((e: any) => {
    setCurrentPage(e.data);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto py-12 px-4">
      <div className="relative w-full aspect-[1.4/1] flex items-center justify-center bg-black/20 rounded-xl p-4 md:p-8 backdrop-blur-sm border border-white/5">
        {/* @ts-ignore */}
        <HTMLFlipBook
          width={550}
          height={733}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={420}
          maxHeight={1333}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={onFlip}
          className="menu-book shadow-2xl"
          ref={book}
          style={{ margin: "0 auto" }}
        >
          {menuPages.map((page, index) => (
            <Page key={index} src={page} number={index + 1} />
          ))}
        </HTMLFlipBook>

        {/* Navigation Controls */}
        <div className="absolute inset-y-0 left-0 flex items-center px-2 md:px-4 pointer-events-none">
          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 rounded-full bg-onyx/80 text-champagne border border-white/10 hover:bg-champagne/20 pointer-events-auto transition-all shadow-lg"
            onClick={() => book.current.pageFlip().flipPrev()}
            disabled={currentPage === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 md:px-4 pointer-events-none">
          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 rounded-full bg-onyx/80 text-champagne border border-white/10 hover:bg-champagne/20 pointer-events-auto transition-all shadow-lg"
            onClick={() => book.current.pageFlip().flipNext()}
            disabled={currentPage === menuPages.length - 1}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Info Bar */}
      <div className="flex items-center justify-between w-full mt-8 px-4 text-champagne/60 font-jakarta text-sm">
        <div className="flex items-center space-x-4">
          <span className="uppercase tracking-[0.2em] font-bold">
            Page {currentPage + 1} of {menuPages.length}
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <a 
            href="/final menu 160426.pdf" 
            download
            className="flex items-center space-x-2 text-champagne/60 hover:text-champagne transition-colors"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Download PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
}
