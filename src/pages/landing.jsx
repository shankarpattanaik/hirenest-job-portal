import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companies from "../data/companies.json";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 pt-2 sm:pt-2 pb-10 sm:pb-20">
      <section className="text-center">
        <h1 className="font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4 gradient-title">
          <span className="block mb-4 sm:mb-6">Your Dream Job Awaits Shankar</span>
          <span className="block flex items-center justify-center gap-2 sm:gap-6">
            Get Hired with HireNest
          </span>
        </h1>
        <p className="text-gray-300 mt-6 sm:mt-8 text-xs sm:text-xl">
          Explore a wide range of job listings or find the perfect candidate
        </p>
      </section>

      <div className="flex flex-col gap-4 justify-center sm:flex-row sm:gap-6">
        <Link to="/jobs" className="w-full sm:w-auto">
          <Button variant="blue" size="xl" className="w-full sm:w-auto">
            Find Jobs
          </Button>
        </Link>

        <Link to="/post-job" className="w-full sm:w-auto">
          <Button variant="destructive" size="xl" className="w-full sm:w-auto">
            Post a Job
          </Button>
        </Link>
      </div>

      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-10"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
              <img
                src={path}
                alt={name}
                className="h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Candidates</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Recruiters</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, manage applications, and find the best candidates.
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default LandingPage;
