export const HomePageFilters = [
  { name: "Newest Cases", value: "newest" },
  { name: "Trending", value: "popular" },
  { name: "Unresolved", value: "unanswered" }, // "Unresolved" sounds more professional than "Unanswered"
  { name: "Recommended", value: "recommended" },
];

export const AnswerFilters = [
  { name: "Latest Opinions", value: "latest" }, // Doctors give "Opinions"
  { name: "Oldest", value: "oldest" },
  { name: "Top Rated", value: "popular" },
];

export const CollectionFilters = [
  { name: "Oldest", value: "oldest" },
  { name: "Most Endorsed", value: "mostvoted" }, // "Endorsed" instead of "Voted"
  { name: "Most Viewed", value: "mostviewed" },
  { name: "Most Recent", value: "mostrecent" },
  { name: "Most Discussed", value: "mostanswered" }, // "Discussed" instead of "Answered"
];

export const TagFilters = [
  { name: "A-Z", value: "name" },
  { name: "Recent", value: "recent" },
  { name: "Oldest", value: "oldest" },
  { name: "Most Common", value: "popular" }, // Specialties are "Common", not "Popular"
];

export const UserFilters = [
  { name: "Newest Members", value: "newest" },
  { name: "Oldest Members", value: "oldest" },
  { name: "Top Contributors", value: "popular" },
];

export const GlobalSearchFilters = [
  { name: "Medical Case", value: "question" }, // Critical change
  { name: "Clinical Opinion", value: "answer" }, // Critical change
  { name: "Doctor / Nurse", value: "user" }, // Critical change
  { name: "Specialty", value: "tag" }, // Critical change
];
