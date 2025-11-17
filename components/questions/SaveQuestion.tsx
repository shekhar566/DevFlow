"use client";

import { toast } from "@/hooks/use-toast";
import { toggleSaveqQuestion } from "@/lib/actions/collection.action";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

const SaveQuestion = ({ questionId }: { questionId: string }) => {
  const session = useSession();
  const userId = session?.data?.user?.id;

  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    if (isLoading) return;
    if (!userId)
      return toast({
        title: "You need to be logged in to save a question",
        variant: "destructive",
      });

    setIsLoading(true);

    try {
      const { success, data, error } = await toggleSaveqQuestion({
        questionId,
      });

      if (!success) throw new Error(error?.message || "An error occurred ");

      toast({
        title: `Question ${data?.saved ? "saved" : "unsaved"} successfully`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "An error occurred ",
        variant: "destructive",
      });
    } finally {
      setIsLoading(true);
    }
  };

  const hasSaved = false;

  return (
    <Image
      src={hasSaved ? "/icons/star-filled.svg" : "/icons/star-red.svg"}
      width={18}
      height={18}
      alt="save"
      className={`cursor-pointer ${isLoading && "opacity-50"}`}
      aria-label="Save question"
      onClick={handleSave}
    />
  );
};

export default SaveQuestion;
