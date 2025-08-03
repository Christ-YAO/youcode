import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";
import { Card, CardContent } from "@/components/ui/card";

export default function Page() {
  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Account settings</LayoutTitle>
      </LayoutHeader>
      <LayoutContent>
        <Card>
          <CardContent className="mt-4"></CardContent>
        </Card>
      </LayoutContent>
    </Layout>
  );
}
