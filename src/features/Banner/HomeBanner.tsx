import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { Link } from "react-router";

const HomeBanner = () => {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white overflow-hidden">
      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')] opacity-10"></div>

      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center">
        {/* Icon */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <BookOpen className="h-12 w-12 animate-bounce" />
          <h1 className="text-4xl md:text-6xl font-bold">Library Management</h1>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/80 mb-8">
          Organize, manage, and explore books with ease. A modern way to handle
          your digital library.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/all-books">
            <Button
              size="lg"
              className="rounded-2xl shadow-lg bg-white text-indigo-600 hover:bg-gray-100"
            >
              See Collection
            </Button>
          </Link>
          <Link to="/add-new-book">
            <Button
              size="lg"
              variant="outline"
              className="rounded-2xl shadow-lg border-white text-white bg-transparent hover:bg-white hover:text-indigo-600"
            >
              Add New Book
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default HomeBanner;
