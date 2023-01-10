import { BiDrink } from "react-icons/bi";
import { FaTheaterMasks } from "react-icons/fa";
import { GiMountains } from "react-icons/gi";
import { HiOutlineCamera } from "react-icons/hi";

const card: Array<{
  id: number;
  img: string;
  state: string;
  icon: JSX.Element;
  country: string;
  type: string;
  price: string;
  paragraph: string;
  color: string;
  text: string;
  textColor: string;
  bg: string;
}> = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGtlbnlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    state: "Queen Elizabeth Park",
    icon: <BiDrink />,
    country: "Uganda",
    type: "Sport",
    price: "400 $",
    paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
      vitae iste voluptas, repellendus Cupiditate.`,
    color: "#E7B046",
    text: "Details",
    textColor: "#fff",
    bg: "#E7B046",
  },
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1596005554384-d293674c91d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8a2VueWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    state: "Nairobi",
    icon: <FaTheaterMasks />,
    country: "Kenya",
    type: "Sport",
    price: "400 $",
    paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
    vitae iste voluptas, repellendus Cupiditate.`,
    color: "#A07B5B",
    text: "Details",
    textColor: "#fff",
    bg: "#A07B5B",
  },
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1575999502951-4ab25b5ca889?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8WmFuemliYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    state: "Zanzibar",
    icon: <GiMountains />,
    country: "Tanzania",
    type: "Sport",
    price: "400 $",
    paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
    vitae iste voluptas, repellendus Cupiditate.`,
    color: "#3C92B6",
    text: "Details",
    textColor: "#fff",
    bg: "#3C92B6",
  },
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGtlbnlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    state: "Volcanoes National Park",
    icon: <HiOutlineCamera />,
    country: "Rwanda",
    type: "Sport",
    price: "400 $",
    paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
    vitae iste voluptas, repellendus Cupiditate.`,
    color: "#F19B6B",
    text: "Details",
    textColor: "#fff",
    bg: "#F19B6B",
  },
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1663924665428-e5b35266f7cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU0fHxyd2FuZGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    state: "Virunga National Park",
    icon: <BiDrink />,
    country: "Congo",
    type: "Sport",
    price: "400 $",
    paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
    vitae iste voluptas, repellendus Cupiditate.`,
    color: "#96C073",
    text: "Details",
    textColor: "#fff",
    bg: "#96C073",
  },
];

const destinations: Array<{
  id: number;
  hoverTitle: string;
  buttonText: string;
  icon: JSX.Element;
  cardHeading: string;
  packages: string;
  image: string;
}> = [
  {
    id: 1,
    hoverTitle: "Uganda Tours",
    buttonText: "View Destination",
    icon: <BiDrink />,
    cardHeading: "Uganda",
    packages: "6 Packages",
    image:
      "https://images.unsplash.com/photo-1588384244626-484b69024d9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHVnYW5kYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    hoverTitle: "Kenya Tours",
    buttonText: "View Destination",
    icon: <FaTheaterMasks />,
    cardHeading: "Kenya",
    packages: "5 Packages",
    image:
      "https://images.unsplash.com/photo-1579005318686-5a86bbb3bf03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGtlbnlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    hoverTitle: "Tanzania Tours",
    buttonText: "View Destination",
    icon: <GiMountains />,
    cardHeading: "Tanzania",
    packages: "2 Packages",
    image:
      "https://images.unsplash.com/photo-1631646109248-a7264aae1790?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a2lsaW1hbmphcm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    hoverTitle: "Rwanda Tours",
    buttonText: "View Destination",
    icon: <HiOutlineCamera />,
    cardHeading: "Rwanda",
    packages: "3 Packages",
    image:
      "https://images.unsplash.com/photo-1579518874869-1ad294d2596f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cndhbmRhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    hoverTitle: "RDC Tours",
    buttonText: "View Destination",
    icon: <HiOutlineCamera />,
    cardHeading: "Congo",
    packages: "3 Packages",
    image:
      "https://cdn.thecrazytourist.com/wp-content/uploads/2019/04/ccimage-shutterstock_694704898.jpg",
  },
];

const slideImages: Array<{ url: string; caption: string }> = [
  {
    url: "https://images.unsplash.com/photo-1575999502951-4ab25b5ca889?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8WmFuemliYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    caption: "Slide 1",
  },
  {
    url: "https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2018/09/35415175602_4ce19f8afd_b.jpg",
    caption: "Slide 2",
  },
  {
    url: "https://ajkenyasafaris.com/wp-content/uploads/2018/04/815-white-sand-beach-768x512.jpg",
    caption:
      "https://images.unsplash.com/photo-1646667642307-e2bf4541284e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fFphbnppYmFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

export { card, destinations, slideImages };
