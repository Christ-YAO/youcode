import {
  Layout,
  LayoutBackLink,
  LayoutContent,
  LayoutDescription,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Info } from "lucide-react";

export default function Page() {
  return (
    <Layout className="max-w-2xl">
      <LayoutBackLink href="/admin/courses">Courses</LayoutBackLink>
      <LayoutHeader>
        <LayoutTitle>Create course</LayoutTitle>
        <LayoutDescription>
          Name, image and presentation.
        </LayoutDescription>
      </LayoutHeader>
      <LayoutContent className="flex flex-col gap-4">
        <Alert>
          <Info size={16} />
          <AlertTitle>Coming soon</AlertTitle>
          <AlertDescription>
            Course creation is not available yet.
          </AlertDescription>
        </Alert>
        <Card>
          <fieldset disabled>
            <CardContent className="flex flex-col gap-4 pt-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Introduction to React" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="image">Image URL</Label>
                <Input
                  id="image"
                  type="url"
                  placeholder="https://example.com/cover.png"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="presentation">Presentation</Label>
                <Textarea
                  id="presentation"
                  rows={6}
                  placeholder="Describe your course. Markdown is supported."
                />
              </div>
            </CardContent>
            <CardFooter className="justify-end">
              <Button>Create course</Button>
            </CardFooter>
          </fieldset>
        </Card>
      </LayoutContent>
    </Layout>
  );
}
