import { Heart } from "lucide-react";
import CommentHeader from "./CommentHeader";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Replies } from "./reply/Replies";

export default function Comment({
  author,
  content,
  created_at,
  like_count,
  reply_count,
}) {
  return (
    <>
      <div>
        <CommentHeader
          profilePicture={author.profile_pic}
          username={author.username}
          isVerified={author.is_verified}
          firstName={author.first_name}
          lastName={author.last_name}
          createdAt={created_at}
          followingCount={author.following_count}
          followerCount={author.follower_count}
        />
        <div className="flex flex-col ml-6 justify-between items-center max-w-[29rem]">
          <div className="flex flex-row items-center w-full justify-between">
            <p className="text-sm text-wrap">{content}</p>
            <div className="flex items-center">
              <button className="mr-1">
                <Heart size={12} />
              </button>
              <Link className="text-xs hover:underline">{like_count}</Link>
            </div>
          </div>
          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  View {reply_count} {reply_count < 2 ? "reply" : "replies"}
                </AccordionTrigger>
                <AccordionContent>
                  <Replies />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}