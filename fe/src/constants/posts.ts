import { authors } from "./authors";

export const posts = [
  {
    id: crypto.randomUUID(),
    title: "Title 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repellendus temporibus fuga, suscipit quos quidem. Explicabo vel magnam quas est deserunt expedita earum atque! Facere in dicta et nesciunt aliquid.",
    author: authors[0],
  },
  {
    id: crypto.randomUUID(),
    title: "Title 2",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    author: authors[1],
  },
  {
    id: crypto.randomUUID(),
    title: "Title 3",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
    author: authors[2],
  },
  {
    id: crypto.randomUUID(),
    title: "Title 4",
    content:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio.",
    author: authors[3],
  },
  {
    id: crypto.randomUUID(),
    title: "Title 5",
    content:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    author: authors[4],
  },
  {
    id: crypto.randomUUID(),
    title: "Title 6",
    content:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    author: authors[0],
  },
  {
    id: crypto.randomUUID(),
    title: "Title 7",
    content:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    author: authors[1],
  },
  {
    id: crypto.randomUUID(),
    title: "Title 8",
    content:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    author: authors[2],
  },
  {
    id: crypto.randomUUID(),
    title: "Title 9",
    content:
      "Cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.",
    author: authors[3],
  },
  {
    id: crypto.randomUUID(),
    title: "Title 10",
    content:
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus.",
    author: authors[4],
  },
];
