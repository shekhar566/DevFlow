// import ROUTES from "./routes";

// export const DEFAULT_EMPTY = {
//   title: "No Data Found",
//   message:
//     "Looks like the database is taking a nap. Wake it up with some new entries.",
//   button: {
//     text: "Add Data",
//     href: ROUTES.HOME,
//   },
// };

// export const DEFAULT_ERROR = {
//   title: "Something Went Wrong",
//   message: "Even our code can have a bad day. Give it another shot.",
//   button: {
//     text: "Retry Request",
//     href: ROUTES.HOME,
//   },
// };

// export const EMPTY_QUESTION = {
//   title: "Ahh, No Questions Yet!",
//   message:
//     "The question board is empty. Maybe it’s waiting for your brilliant question to get things rolling",
//   button: {
//     text: "Ask a Question",
//     href: ROUTES.ASK_QUESTION,
//   },
// };

// export const EMPTY_TAGS = {
//   title: "No Tags Found",
//   message: "The tag cloud is empty. Add some keywords to make it rain.",
//   button: {
//     text: "Create Tag",
//     href: ROUTES.TAGS,
//   },
// };

// export const EMPTY_ANSWERS = {
//   title: "No Answers Found",
//   message: "The answers board is empty. Make it rain with brilliant answers.",
// };
// export const EMPTY_COLLECTIONS = {
//   title: "Collections Are Empty",
//   message:
//     "Looks like you haven’t created any collections yet. Start curating something extraordinary today",
//   button: {
//     text: "Save to Collection",
//     href: ROUTES.COLLECTION,
//   },
// };

// export const EMPTY_USERS = {
//   title: "No Users Found",
//   message: "You're ALONE. The only one here. More uses are coming soon",
// };

import ROUTES from "./routes";

export const DEFAULT_EMPTY = {
  title: "No Records Found",
  message:
    "We couldn't find any data matching your request. Try adjusting your filters or search criteria.",
  button: {
    text: "Clear Search",
    href: ROUTES.HOME,
  },
};

export const DEFAULT_ERROR = {
  title: "System Error",
  message:
    "We encountered a temporary technical issue. Please try refreshing the page.",
  button: {
    text: "Retry Request",
    href: ROUTES.HOME,
  },
};

export const EMPTY_QUESTION = {
  title: "No Medical Cases Yet",
  message:
    "The rounds board is empty. Be the first to post a clinical case for peer review.",
  button: {
    text: "Post a Case",
    href: ROUTES.ASK_QUESTION,
  },
};

export const EMPTY_TAGS = {
  title: "No Specialties Found",
  message: "We couldn't find any medical specialties matching your search.",
  button: {
    text: "View All Specialties",
    href: ROUTES.TAGS,
  },
};

export const EMPTY_ANSWERS = {
  title: "No Clinical Opinions",
  message:
    "No one has provided a consultation on this case yet. Be the first to share your expertise.",
};

export const EMPTY_COLLECTIONS = {
  title: "No Saved Cases",
  message:
    "You haven't bookmarked any cases for reference yet. Save interesting cases to build your personal library.",
  button: {
    text: "Browse Cases",
    href: ROUTES.HOME,
  },
};

export const EMPTY_USERS = {
  title: "No Practitioners Found",
  message: "We couldn't find any doctors or nurses matching that criteria.",
};
