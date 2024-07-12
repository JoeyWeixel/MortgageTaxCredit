import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Testimonials: React.FC = () => {
  return (
    <div className="Testimonials w-screen display flex justify-around">
      <Card>
        <CardHeader>Testimonial 1</CardHeader>
        <CardContent>
          <div className="Placeholder-Video h-[200px] w-[350px] bg-foreground"></div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>Testimonial 2</CardHeader>
        <CardContent>
          <div className="Placeholder-Video h-[200px] w-[350px] bg-foreground"></div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>Testimonial 3</CardHeader>
        <CardContent>
          <div className="Placeholder-Video h-[200px] w-[350px] bg-foreground"></div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Testimonials;

