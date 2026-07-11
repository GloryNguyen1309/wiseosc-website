import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function StudioSection() {
  return (
    <section className="border p-10 border-gray-700 bg-[#1c1f37] rounded-xl w-full h-full flex flex-col lg:flex-row items-center gap-[50px]">
      <div className="flex flex-col gap-[50px] lg:pl-40">
        <div className="w-full flex items-center lg:items-start flex-col gap-4 max-w-[800px]">
          <h1 className="text-5xl text-center lg:text-start md:text-6xl lg:text-7xl font-bold">
            Our <span className="text-[#39B7FF]">Studio</span>
          </h1>
          <p className="text-[#B3B3C9] text-center lg:text-start">
            Our development studio is where innovation meets execution. We bring together talented developers, cutting-edge technologies, and proven methodologies to deliver exceptional software solutions for businesses worldwide.
          </p>
        </div>
        <div className="flex w-full max-w-[800px] items-end justify-between">
          <Button className="py-3 bg-gradient-to-r from-[#39B7FF] to-[#0080FF] hover:opacity-90 transition-opacity rounded-xl">
            Get directions
            <ArrowRight color="white" className="shrink-0 ml-2 h-5 w-5" />
          </Button>

          <div className="space-y-2">
            <p className="text-sm font-medium">Follow us</p>
            <div className="flex space-x-3">
              <Button
                size="icon"
                variant="outline"
                className="rounded-md bg-[#1877F2] border-0 hover:bg-[#1877F2]/90 h-10 w-10 p-2"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="rounded-md bg-[#1DA1F2] border-0 hover:bg-[#1DA1F2]/90 h-10 w-10 p-2"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="rounded-md bg-[#FF0000] border-0 hover:bg-[#FF0000]/90 h-10 w-10 p-2"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="rounded-md bg-[#E4405F] border-0 hover:bg-[#E4405F]/90 h-10 w-10 p-2"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[600px] relative aspect-square">
        <Image
          src="/placeholder.svg?height=600&width=800"
          fill
          alt="Our studio"
          className="size-full rounded-xl object-cover"
        />
      </div>
    </section>
  );
}
