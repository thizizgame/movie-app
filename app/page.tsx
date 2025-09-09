import { CardDemo } from "@/components/home/MovieCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[1250px] m-auto">
      
      <h1 className="pt-6 pb-6 text-4xl font-semibold">Upcoming</h1>
      <div className="flex gap-6 m-auto flex-wrap ">

        <CardDemo title="Aquaman" scores={6.9} imageURL="https://timesofindia.indiatimes.com/photo/90355881.cms"></CardDemo>
        <CardDemo title="Alien" scores={4.9} imageURL="images/post1.png"></CardDemo>
        <CardDemo title="How you train your dragon" scores={7.9} imageURL="images/post2.png"></CardDemo>
        <CardDemo title="Ashes" scores={7.8} imageURL="images/post3.png"></CardDemo>
        <CardDemo title="Space Dogg" scores={5.5} imageURL="images/post4.png"></CardDemo>
        <CardDemo title="The Order" scores={5.4} imageURL="images/post5.png"></CardDemo>
      </div>
      <h1 className="pt-6 pb-6 text-4xl font-semibold">Popular</h1>
      <div className="flex gap-6 m-auto flex-wrap ">
                <CardDemo title="Aquaman" scores={6.9} imageURL="https://timesofindia.indiatimes.com/photo/90355881.cms"></CardDemo>
        <CardDemo title="Alien" scores={4.9} imageURL="images/post1.png"></CardDemo>
        <CardDemo title="How you train your dragon" scores={7.9} imageURL="images/post2.png"></CardDemo>
        <CardDemo title="Ashes" scores={7.8} imageURL="images/post3.png"></CardDemo>
        <CardDemo title="Space Dogg" scores={5.5} imageURL="images/post4.png"></CardDemo>
        <CardDemo title="The Order" scores={5.4} imageURL="images/post5.png"></CardDemo>
      </div>
      <h1 className="pt-6 pb-6 text-4xl font-semibold">Top Rated</h1>
      <div className="flex gap-6 m-auto flex-wrap ">
                <CardDemo title="Aquaman" scores={6.9} imageURL="https://timesofindia.indiatimes.com/photo/90355881.cms"></CardDemo>
        <CardDemo title="Alien" scores={4.9} imageURL="images/post1.png"></CardDemo>
        <CardDemo title="How you train your dragon" scores={7.9} imageURL="images/post2.png"></CardDemo>
        <CardDemo title="Ashes" scores={7.8} imageURL="images/post3.png"></CardDemo>
        <CardDemo title="Space Dogg" scores={5.5} imageURL="images/post4.png"></CardDemo>
        <CardDemo title="The Order" scores={5.4} imageURL="images/post5.png"></CardDemo>
      </div>
      
    </div>
    

  );
}
