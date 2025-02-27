import { getTestimonials } from "@/actions/dashboard/space/getTestimonials";
import { TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import TestimonialChart from "@/components/dashboard/space/TestimonialChart"; // Import Client Component

export default async function AnalyticsPage({ params }: { params: { slug: string } }) {
  const testimonials = await getTestimonials(params.slug);
  console.log("Fetched Testimonials:", testimonials);

  // Sort testimonials by date (oldest to newest)
  testimonials.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());

  // Create intervals dynamically based on available data
  const groupedData: any[] = [];
  let startDate = new Date(testimonials[0]?.createdAt || new Date());

  while (startDate <= new Date()) {
    let endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 2); // 3-day interval

    const groupLabel = `${startDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })} - ${endDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`;

    groupedData.push({ 
      range: groupLabel, 
      pending: 0, 
      approved: 0, 
      rejected: 0 
    });

    startDate.setDate(startDate.getDate() + 3);
  }

  // Assign testimonials to their respective 3-day intervals
  testimonials.forEach(testimonial => {
    const testimonialDate = new Date(testimonial.createdAt);

    for (let i = 0; i < groupedData.length; i++) {
      let [startStr, endStr] = groupedData[i].range.split(" - ");
      let startDate = new Date(`${startStr} ${testimonialDate.getFullYear()}`);
      let endDate = new Date(`${endStr} ${testimonialDate.getFullYear()}`);

      if (testimonialDate >= startDate && testimonialDate <= endDate) {
        if (testimonial.status === "PENDING") groupedData[i].pending += 1;
        else if (testimonial.status === "APPROVED") groupedData[i].approved += 1;
        else if (testimonial.status === "REJECTED") groupedData[i].rejected += 1;
        break;
      }
    }
  });

  console.log("Processed Chart Data:", groupedData);

  return (
    <Card className="mt-4 w-[500px]">
      <CardHeader>
        <CardTitle>Testimonials Overview</CardTitle>
        <CardDescription>Showing testimonial statistics over every 3-day interval</CardDescription>
      </CardHeader>
      <CardContent>
        <TestimonialChart groupedData={groupedData} /> {/* Use the Client Component */}
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Total Testimonials: {testimonials.length} <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Grouped by 3-day intervals
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
