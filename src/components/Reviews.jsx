import { ReviewsData } from '../data/ReviewsData';
import { Fragment } from 'react';

function Reviews() {
  const data1 = ReviewsData.slice(0, 3);
  const data2 = ReviewsData.slice(3, 6);
  const data3 = ReviewsData.slice(6, 9);
  const getRating = (rating) => {
    return (
      <div className="flex flex-row justify-end items-center gap-1.5">
        {[...Array(5)].map((_, index) => (
          <i
            key={index}
            className={`bi ${
              index < rating
                ? 'bi-star-fill text-amber-500'
                : 'bi bi-star-half text-amber-500'
            } text-sm`}
          ></i>
        ))}
      </div>
    );
  };
  return (
    <Fragment>
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-5 py-6">
        <div className="flex flex-col justify-start items-center gap-5">
          {data1.map((review) => {
            return (
              <div
                key={review.id}
                className="h-max p-4 rounded-2xl flex flex-col gap-3 border border-dashed border-[var(--primary-color)]/50"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 bg-[var(--primary-color)]/10 flex justify-center items-center rounded-full">
                      <span className="uppercase text-[var(--primary-color)] font-semibold">
                        {review.name.slice(0, 1) +
                          review.name.slice(
                            review.name.indexOf(' ') + 1,
                            review.name.indexOf(' ') + 2,
                          )}
                      </span>
                    </div>
                    <p className="capitalize text-black text-base font-medium">
                      {review.name}
                    </p>
                  </div>
                  {getRating(review.ratting)}
                </div>

                <p className="text-sm text-gray-500 leading-relaxed overflow-hidden">
                  {review.review}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col justify-start items-center gap-5">
          {data2.map((review) => {
            return (
              <div
                key={review.id}
                className="h-max p-4 rounded-2xl flex flex-col gap-3 border border-dashed border-[var(--primary-color)]/50"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 bg-[var(--primary-color)]/10 flex justify-center items-center rounded-full">
                      <span className="uppercase text-[var(--primary-color)] font-semibold">
                        {review.name.slice(0, 1) +
                          review.name.slice(
                            review.name.indexOf(' ') + 1,
                            review.name.indexOf(' ') + 2,
                          )}
                      </span>
                    </div>
                    <p className="capitalize text-black text-base font-medium">
                      {review.name}
                    </p>
                  </div>
                  {getRating(review.ratting)}
                </div>

                <p className="text-sm text-gray-500 leading-relaxed overflow-hidden">
                  {review.review}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col justify-start items-center gap-5">
          {data3.map((review) => {
            return (
              <div
                key={review.id}
                className="h-max p-4 rounded-2xl flex flex-col gap-3 border border-dashed border-[var(--primary-color)]/50"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 bg-[var(--primary-color)]/10 flex justify-center items-center rounded-full">
                      <span className="uppercase text-[var(--primary-color)] font-semibold">
                        {review.name.slice(0, 1) +
                          review.name.slice(
                            review.name.indexOf(' ') + 1,
                            review.name.indexOf(' ') + 2,
                          )}
                      </span>
                    </div>
                    <p className="capitalize text-black text-base font-medium">
                      {review.name}
                    </p>
                  </div>
                  {getRating(review.ratting)}
                </div>

                <p className="text-sm text-gray-500 leading-relaxed overflow-hidden">
                  {review.review}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
}

export default Reviews;
