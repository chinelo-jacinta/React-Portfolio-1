import React from 'react';
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
      'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
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
    image:
      'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'First Project',
    about:
      'Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Asperiores Aperiam Porro Impedit Tenetur Quo Hic Omnis Doloribus Dolores Enim Deleniti',
    icon1: <FaInstagramSquare />,
    icon2: <FaGithub />,
  },
  {
    id: 2,
    image:
      'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Second Project',
    about:
      'Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Asperiores Aperiam Porro Impedit Tenetur Quo Hic Omnis Doloribus Dolores Enim Deleniti',
    icon1: <FaInstagramSquare />,
    icon2: <FaGithub />,
  },
  {
    id: 3,
    image:
      'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Third Project',
    about:
      'Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Asperiores Aperiam Porro Impedit Tenetur Quo Hic Omnis Doloribus Dolores Enim Deleniti',
    icon1: <FaInstagramSquare />,
    icon2: <FaGithub />,
  },
];
