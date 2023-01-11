import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Card from "../../components/package/Card";
import { card } from "../../data/data";

type Props = {};

const Category = (props: Props) => {
  const { id } = useParams();

  let bg = headerBackground(id)

  return (
    <div className="category__container">
      <Header headerTitle={id} bg={bg} />
      <div className="middle category__wrapper">
        <div className="package__grid">
          {card.map(
            ({
              id,
              img,
              state,
              icon,
              country,
              type,
              price,
              paragraph,
              textColor,
              bg,
            }) => (
              <Card
                id={id}
                img={img}
                state={state}
                icon={icon}
                country={country}
                price={price}
                paragraph={paragraph}
                textColor={textColor}
                type={type}
                bg={bg}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;

function headerBackground(id?: string) {
  if (id === "Relax")
    return "https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVsYXh8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";

  if (id === "Sports")
    return "https://images.unsplash.com/photo-1444491741275-3747c53c99b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNwb3J0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";

  if (id === "Cultural")
    return "https://images.unsplash.com/photo-1519011985187-444d62641929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGN1bHR1cmFsJTIwYWZyaWNhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

  return "https://plus.unsplash.com/premium_photo-1661963789085-b057eb0185c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGlzdG9yeSUyMGFmcmljYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
}
