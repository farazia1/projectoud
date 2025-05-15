"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import WhatsAppButton from "./wbutton";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items?: Gallery4Item[];
}

const data = [
  {
    id: "shadcn-ui",
    title: "shadcn/ui: Building a Modern Component Library",
    description: "",
    href: "https://ui.shadcn.com",
    image: "/1 (2).jpg",
  },
  {
    id: "tailwind",
    title: "Tailwind CSS: The Utility-First Revolution",
    description:
      "Discover how Tailwind CSS transformed the way developers style their applications...",
    href: "https://tailwindcss.com",
    image: "/1 (3).jpg",
  },
  {
    id: "astro",
    title: "Astro: The All-in-One Web Framework",
    description:
      "Learn how Astro's innovative 'Islands Architecture' and zero-JS-by-default approach is helping...",
    href: "https://astro.build",
    image: "/1 (1).jpg",
  },
  {
    id: "react",
    title: "React: Pioneering Component-Based UI",
    description: "See how React continues to shape modern web development...",
    href: "https://react.dev",
    image: "/1 (4).jpg",
  },
  {
    id: "nextjs2",
    title: "Next.js: The React Framework for Production",
    description: "Explore how Next.js has become the go-to framework...",
    href: "https://nextjs.org",
    image: "/1 (5).jpg",
  },
  {
    id: "nextjs1",
    title: "Next.js: The React Framework for Production",
    description: "Explore how Next.js has become the go-to framework...",
    href: "https://nextjs.org",
    image: "/1 (6).jpg",
  },
];

const Gallery4 = ({
  title = "Case Studies",
  description = "Discover how leading companies and developers are leveraging modern web technologies...",
  items = data,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

 return (
  <section className="py-auto">
    <div className="container">
      {/* ✅ Banner Image */}
      <div className="relative w-screen h-[250px] md:h-[350px] lg:h-[450px]  md:mb-14 lg:mb-16">
        <Image
          src="/banner.jpg"
          alt="Banner"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* ✅ Title & Description */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">{title}</h2>
        <p className="mt-2 text-muted-foreground max-w-xl mx-auto">{description}</p>
      </div>

      {/* Arrows */}
      <div className="flex justify-center md:justify-end gap-2 mb-8">
        <Button
          size="icon"
          variant="ghost"
          onClick={() => carouselApi?.scrollPrev()}
          disabled={!canScrollPrev}
          className="disabled:pointer-events-auto"
        >
          <ArrowLeft className="size-5" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => carouselApi?.scrollNext()}
          disabled={!canScrollNext}
          className="disabled:pointer-events-auto"
        >
          <ArrowRight className="size-5" />
        </Button>
      </div>
    </div>

      {/* Carousel */}
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{ breakpoints: { "(max-width: 768px)": { dragFree: true } } }}
        >
          <CarouselContent className="ml-0 px-4">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="w-full max-w-sm md:max-w-md lg:max-w-lg px-2"
              >
                <div className="group relative rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={600}
                    className="h-64 md:h-80 lg:h-96 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 h-full bg-[linear-gradient(transparent_20%,var(--primary)_100%)] mix-blend-multiply" />
                  <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-4 text-primary-foreground">
                    <div className="mb-2 text-lg font-semibold">
                      {item.title}
                    </div>
                    <div className="line-clamp-2 text-sm mb-2">
                      {item.description}
                    </div>
                    <div className="mt-1">
                      <WhatsAppButton
                        title={item.title}
                        price={"Contact for price"}
                        imageUrl={item.image}
                      />
                    </div>
                    <div className="flex items-center text-sm mt-2">
                      Read more{" "}
                      <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dots Navigation */}
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-primary" : "bg-primary/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery4;
