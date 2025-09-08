import { CardDemo } from "@/components/home/MovieCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[1250px] m-auto">
      <h1 className="pt-6 pb-6 text-4xl font-semibold">Upcoming</h1>
      <div className="flex gap-6 m-auto flex-wrap ">

        <CardDemo title="Santa Dear" scores={6.9} imageURL="https://timesofindia.indiatimes.com/photo/90355881.cms"></CardDemo>
        <CardDemo title="Chi Santa" scores={7.9} imageURL="images/post1.png"></CardDemo>
        <CardDemo title="Chi Santa" scores={7.9} imageURL="images/post2.png"></CardDemo>
        <CardDemo title="Chi Santa" scores={7.9} imageURL="images/post3.png"></CardDemo>
        <CardDemo title="Chi Santa" scores={7.9} imageURL="images/post4.png"></CardDemo>
        <CardDemo title="Chi Santa" scores={7.9} imageURL="images/post5.png"></CardDemo>
      </div>
    </div>

  );
}
