import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import TruncateText from "@/utils/TruncateText";
import formatDate from "@/utils/formatDate";
import { Link } from "react-router-dom";

export default function PostMedia(props) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return props.isDashboard ? (
    <Carousel
      plugins={[]}
      className="w-full max-w-md"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {props.media.map((item) => (
          <CarouselItem key={item.id}>
            <div className="">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2">
                  <img
                    src={item.file}
                    alt={`Media ${item.id}`}
                    className="rounded-lg w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <TruncateText className="ml-2 text-sm" text={props.caption} limit={48} />
      <p className="text-xs ml-2 opacity-50">{formatDate(props.postPosted)}</p>
    </Carousel>
  ) : (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-3xl"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {props.media.map((item) => (
          <CarouselItem key={item.id}>
            <div className="">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2">
                  <img
                    src={item.file}
                    alt={`Media ${item.id}`}
                    className="rounded-lg w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <TruncateText className="ml-2 text-sm" text={props.caption} limit={48} />
      <div className="flex justify-between items-baseline">
        <p className="text-xs ml-2 opacity-50">
          {formatDate(props.postPosted)}
        </p>
        <Link className="text-xs ml-2 opacity-50 hover:underline" to="/">
          {props.commentCount} {props.commentCount < 2 ? "comment" : "comments"}
        </Link>
      </div>
    </Carousel>
  );
}