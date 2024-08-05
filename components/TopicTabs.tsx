import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Flame, Highlighter, Star } from "lucide-react";
import { Topic } from "./Topic";

export function TopicTabs() {
  return (
    <Tabs defaultValue="account" className="w-[500px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="popular" className="flex items-center gap-2">
          <Star />
          <p>Popular</p>
        </TabsTrigger>
        <TabsTrigger value="new" className="flex items-center gap-2">
          <Highlighter />
          <p>New</p>
        </TabsTrigger>
        <TabsTrigger value="hot" className="flex items-center gap-2">
          <Flame />
          <p>Hot</p>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="popular" className="flex flex-col gap-4">
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <Topic />
          ))}
      </TabsContent>
      <TabsContent value="new" className="flex flex-col gap-4">
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <Topic />
          ))}
      </TabsContent>
      <TabsContent value="hot" className="flex flex-col gap-4">
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <Topic />
          ))}
      </TabsContent>
    </Tabs>
  );
}
