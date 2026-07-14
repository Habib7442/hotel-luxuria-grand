"use client";

import React, { useCallback, useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuPages = [
  "/assets/menu/final menu 160426_compressed_page-0001.webp",
  "/assets/menu/final menu 160426_compressed_page-0002.webp",
  "/assets/menu/final menu 160426_compressed_page-0003.webp",
  "/assets/menu/final menu 160426_compressed_page-0004.webp",
  "/assets/menu/final menu 160426_compressed_page-0005.webp",
  "/assets/menu/final menu 160426_compressed_page-0006.webp",
  "/assets/menu/final menu 160426_compressed_page-0007.webp",
  "/assets/menu/final menu 160426_compressed_page-0008.webp",
  "/assets/menu/final menu 160426_compressed_page-0009.webp",
];

const Page = React.forwardRef<HTMLDivElement, { src: string; number: number }>((props, ref) => {
  return (
    <div 
      className="bg-onyx flex items-center justify-center overflow-hidden shadow-2xl w-full h-full" 
      ref={ref} 
      style={{ willChange: "transform" }}
    >
      <div className="relative w-full h-full aspect-[550/733]">
        <Image
          src={props.src}
          alt={`Menu Page ${props.number}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
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
  const [usePortrait, setUsePortrait] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setUsePortrait(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onFlip = useCallback((e: any) => {
    setCurrentPage(e.data);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto pt-12 pb-4 px-4" style={{ isolation: "isolate" }}>
      <div className="relative w-full min-h-[500px] md:min-h-[700px] flex items-center justify-center bg-black/40 rounded-3xl p-4 md:p-12 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
        {/* Decorative Inner Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.03)_0%,transparent_70%)] pointer-events-none" />

        {/* @ts-ignore */}
        <HTMLFlipBook
          width={550}
          height={733}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={420}
          maxHeight={1333}
          maxShadowOpacity={0.4}
          showCover={false}
          mobileScrollSupport={true}
          onFlip={onFlip}
          className="menu-book"
          ref={book}
          style={{ margin: "0 auto", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
          drawShadow={true}
          flippingTime={1500}
          usePortrait={usePortrait}
          startZIndex={1}
          autoSize={true}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={30}
          showPageCorners={true}
          disableFlipByClick={false}
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
            aria-label="Previous Page"
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
            aria-label="Next Page"
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
            aria-label="Download Menu PDF"
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

