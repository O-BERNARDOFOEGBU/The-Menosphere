import Thumbnail1 from "./images/blog1.jpg";
import Thumbnail2 from "./images/blog2.jpg";
import Thumbnail3 from "./images/blog3.jpg";
import Thumbnail4 from "./images/blog4.jpg";

export const DUMMY_POSTS = [
  {
    id: "1",
    thumbnail: Thumbnail1,
    category: "education",
    title: "This is the very first post on this blog",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
  },
  {
    id: "2",
    thumbnail: Thumbnail2,
    category: "science",
    title: "This is the very second post on this blog",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam, eaque ipsa quae ab illo inventore",
    authorID: 1,
  },
  {
    id: "3",
    thumbnail: Thumbnail3,
    category: "weather",
    title: "This is the very third post on this blog",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
    authorID: 13,
  },
  {
    id: "4",
    thumbnail: Thumbnail4,
    category: "farming",
    title: "This is the very fourth post on this blog",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
    authorID: 11,
  },
];
