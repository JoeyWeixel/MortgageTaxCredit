import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Testimonials: React.FC = () => {
  return (
    <div className="Testimonials w-screen display flex flex-wrap justify-around gap-y-8">
      <p className="w-screen text-center text-3xl">Success Stories</p>
      <Card>
        <CardHeader>Testimonial 1</CardHeader>
        <CardContent>
          <div className="Placeholder-Video h-[200px] w-[300px] bg-foreground"></div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>Testimonial 2</CardHeader>
        <CardContent>
          <div className="Placeholder-Video h-[200px] w-[300px] bg-foreground"></div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>Testimonial 3</CardHeader>
        <CardContent>
          <div className="Placeholder-Video h-[200px] w-[300px] bg-foreground"></div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Testimonials;

