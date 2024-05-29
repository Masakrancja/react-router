import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Tytuł 1",
    author: "Jan Nowak",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsum iure minima cumque facilis adipisci, exercitationem obcaecati reiciendis. Suscipit praesentium labore temporibus rem animi ipsam aliquam! Molestias tenetur quas in.",
  },
  {
    id: 2,
    title: "Tytuł 2",
    author: "Jan Kowalski",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsum iure minima cumque facilis adipisci, exercitationem obcaecati reiciendis. Suscipit praesentium labore temporibus rem animi ipsam aliquam! Molestias tenetur quas in.",
  },
  {
    id: 3,
    title: "Tytuł 3",
    author: "Waldemar Nowak",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsum iure minima cumque facilis adipisci, exercitationem obcaecati reiciendis. Suscipit praesentium labore temporibus rem animi ipsam aliquam! Molestias tenetur quas in.",
  },
];
const HomePage = () => {
  return (
    <>
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </>
  );
};

export default HomePage;
