import React from 'react';
import Cart from '../public/images/Cart.png';
import Cocktail from '../public/images/Cocktail.jpg';
import Questions from '../public/images/Q&A.jpg';
import { FaHtml5 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { FaInstagramSquare, FaGithub } from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '#home',
    name: 'home',
  },
  {
    id: 2,
    url: '#skills-section',
    name: 'skills',
  },
  {
    id: 3,
    url: '#about-section',
    name: 'about',
  },
  {
    id: 4,
    url: '#projects',
    name: 'projects',
  },
];
export const skills = [
  {
    id: 1,
    icon: <FaHtml5 />,
    name: 'HTML&CSS',
    aboutSkill:
      'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: 2,
    icon: <IoLogoJavascript />,
    name: 'Javascript',
    aboutSkill:
      'Skilled in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: 3,
    icon: <FaReact />,
    name: 'React',
    aboutSkill:
      'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];
export const projects = [
  {
    id: 1,
    // image:
    //   'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    image: Cart,
    title: 'Cart',
    about:
      'Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Asperiores Aperiam Porro Impedit Tenetur Quo Hic Omnis Doloribus Dolores Enim Deleniti',
    icon1: <FaInstagramSquare />,
    icon2: <FaGithub />,
  },
  {
    id: 2,
    image: Cocktail,
    title: 'Cocktail App',
    about:
      'Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Asperiores Aperiam Porro Impedit Tenetur Quo Hic Omnis Doloribus Dolores Enim Deleniti',
    icon1: <FaInstagramSquare />,
    icon2: <FaGithub />,
  },
  {
    id: 3,
    image: Questions,
    title: 'Questions and Answers',
    about:
      'Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Asperiores Aperiam Porro Impedit Tenetur Quo Hic Omnis Doloribus Dolores Enim Deleniti',
    icon1: <FaInstagramSquare />,
    icon2: <FaGithub />,
  },
];
