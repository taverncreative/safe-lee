import { Star, Quote } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface Review {
  author: string;
  rating: number;
  reviewText: string;
  source: string;
}

interface TestimonialsProps {
  reviews: Review[];
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < count
              ? "fill-yellow-400 text-yellow-400"
              : "fill-sl-gray-200 text-sl-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

export function Testimonials({ reviews }: TestimonialsProps) {
  return (
    <section className="bg-sl-gray-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-sl-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>

            {/* Overall rating */}
            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-6 w-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-lg font-semibold text-sl-gray-900">
                5.0
              </span>
              <span className="text-sm text-sl-gray-600">on Google</span>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <div className="flex h-full flex-col rounded-xl border border-sl-gray-200 bg-white p-6 shadow-sm">
                <Quote className="mb-4 h-8 w-8 text-sl-red/20" />
                <p className="flex-1 text-sl-gray-700 leading-relaxed">
                  &ldquo;{review.reviewText}&rdquo;
                </p>
                <div className="mt-6 border-t border-sl-gray-100 pt-4">
                  <Stars count={review.rating} />
                  <p className="mt-2 text-sm font-semibold text-sl-gray-900">
                    {review.author}
                  </p>
                  <p className="text-xs text-sl-gray-600">
                    Reviewed on {review.source}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
