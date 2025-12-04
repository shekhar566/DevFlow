// import JobCard from "@/components/cards/JobCard";
// import JobsFilter from "@/components/filter/JobFilter";
// import Pagination from "@/components/Pagination";
// import {
//   fetchCountries,
//   fetchJobs,
//   fetchLocation,
// } from "@/lib/actions/job.action";

// const Page = async ({ searchParams }: RouteParams) => {
//   const { query, location, page } = await searchParams;
//   const userLocation = await fetchLocation();

//   const jobs = await fetchJobs({
//     query: `${query}, ${location}` || `Software Engineer in ${userLocation}`,
//     page: page ?? 1,
//   });

//   const countries = await fetchCountries();
//   const parsedPage = parseInt(page ?? 1);

//   console.log(jobs);

//   return (
//     <>
//       <h1 className="h1-bold text-dark100_light900">Jobs</h1>

//       <div className="flex">
//         <JobsFilter countriesList={countries} />
//       </div>

//       <section className="light-border mb-9 mt-11 flex flex-col gap-9 border-b pb-9">
//         {jobs?.length > 0 ? (
//           jobs
//             ?.filter((job: Job) => job.job_title)
//             .map((job: Job, index: number) => (
//               <JobCard
//                 key={job.job_id || job.job_google_link || index}
//                 job={job}
//               />
//             ))
//         ) : (
//           <div className="paragraph-regular text-dark200_light800 w-full text-center">
//             Oops! We couldn&apos;t find any jobs at the moment. Please try again
//             later
//           </div>
//         )}
//       </section>

//       {jobs?.length > 0 && (
//         <Pagination page={parsedPage} isNext={jobs?.length === 10} />
//       )}
//     </>
//   );
// };

// export default Page;

import JobCard from "@/components/cards/JobCard";
import JobsFilter from "@/components/filter/JobFilter";
import Pagination from "@/components/Pagination";
import {
  fetchCountries,
  fetchJobs,
  fetchLocation,
} from "@/lib/actions/job.action";

// import { Job } from "@/types"; // Assuming your types are centralized here

interface SearchParamsProps {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

const Page = async ({ searchParams }: SearchParamsProps) => {
  // 1. Await params (Next.js 15 requirement)
  const { q, location, page } = await searchParams;

  // 2. Fetch User Location for the "Smart Default"
  const userLocation = await fetchLocation();

  // 3. Construct the Search Query
  // Logic: If user searches, use their input. If not, default to Medical context.
  let searchQuery = "";

  if (q || location) {
    searchQuery = `${q || ""} ${location || ""}`.trim();
  } else {
    // CareConnect Default: Prevent "Software Engineer" results
    searchQuery = `Medical Physician in ${userLocation || "Remote"}`;
  }

  // 4. Fetch Data
  const jobs = await fetchJobs({
    query: searchQuery,
    page: page ?? "1",
  });

  const countries = await fetchCountries();
  const pageNumber = page ? +page : 1;

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Clinical Opportunities</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <JobsFilter countriesList={countries} />
      </div>

      <section className="light-border mb-9 mt-11 flex flex-col gap-9 border-b pb-9">
        {jobs?.length > 0 ? (
          jobs
            // 5. Data Hygiene: JSearch sometimes returns "undefined" as a string
            .filter(
              (job: Job) =>
                job.job_title && job.job_title.toLowerCase() !== "undefined"
            )
            .map((job: Job) => <JobCard key={job.job_id} job={job} />)
        ) : (
          <div className="paragraph-regular text-dark200_light800 w-full py-10 text-center">
            <p>
              No clinical opportunities found matching &quot;{searchQuery}
              &quot;.
            </p>
            <p className="mt-2 text-sm text-light-500">
              Try adjusting your filters or search for generic terms like
              &quot;Surgeon&quot;, &quot;Pediatrics&quot;, or &quot;Nurse&quot;.
            </p>
          </div>
        )}
      </section>

      {jobs?.length > 0 && (
        <Pagination page={pageNumber} isNext={jobs.length === 10} />
      )}
    </>
  );
};

export default Page;
