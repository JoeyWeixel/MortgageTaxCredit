import { Card, CardHeader, CardContent } from "@/components/ui/card";

const Benefits: React.FC = () => {
  return (
    <div className="Benefits w-screen display flex flex-wrap justify-around gap-y-8">
      <p className="w-screen text-center text-3xl">How a Mortgage Tax Credit Benefit You</p>
      <Card>
        <CardHeader>Video 1</CardHeader>
        <CardContent>
          <div className="Placeholder-Video h-[200px] w-[300px] bg-foreground"></div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>Video 2</CardHeader>
        <CardContent>
          <div className="Placeholder-Video h-[200px] w-[300px] bg-foreground"></div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>Video 3</CardHeader>
        <CardContent>
          <div className="Placeholder-Video h-[200px] w-[300px] bg-foreground"></div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Benefits;