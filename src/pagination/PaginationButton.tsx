"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

type PaginationButtonProps = {
  totalPage: number;
  page: number;
  baseUrl: string;
};



export default function CoursePaginationButton(props: PaginationButtonProps) {
  // console.log(Math.ceil(props.totalPage / 5));
  const router = useRouter();
  return (
    <div className="mt-6 flex items-center justify-between gap-4">
      <Button
        variant={"outline"}
        size={"sm"}
        disabled={props.page === 0 ? true : false}
        onClick={() => {
          const searchParams = new URLSearchParams({
            page: String(props.page - 1),
          });
          const url = `${props.baseUrl}?${searchParams.toString()}`;
          router.push(url);
        }}
      >
        <ChevronLeft size={16} className="mr-1" /> Previous
      </Button>
      <span className="text-sm text-muted-foreground">
        Page {props.page + 1} of {Math.ceil(props.totalPage / 5)}
      </span>
      <Button
        variant={"outline"}
        size={"sm"}
        disabled={props.page === Math.ceil(props.totalPage / 5) - 1 ? true : false}
        onClick={() => {
          const searchParams = new URLSearchParams({
            page: String(props.page + 1),
          });
          const url = `${props.baseUrl}?${searchParams.toString()}`;
          router.push(url);
        }}
      >
        Next <ChevronRight size={16} className="ml-1" />
      </Button>
    </div>
  );
}
