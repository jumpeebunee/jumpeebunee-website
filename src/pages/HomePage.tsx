import React from 'react'
import ContactButtons from '../components/ContactButtons';
import mainImage from "../assets/egor-image.png";
import data from '../data/data';
import PortfolioList from '../components/PortfolioList';

const HomePage = () => {

  return (
    <main>
        <div className='container'>
            <div className='main-page__about'>
                <div className='main-page__about-me'>
                    <h1>Hey, I'm Egor, a junior  frontend developer with more pet-projects </h1>
                    <p>I like to create applications in JS. I like to make up and use React in my projects. I am taking RSschool courses. I solve puzzles on Codewars, leetcode and read books.</p>
                    <ContactButtons/>
                </div>
                <div className='main-page__photo'>
                    <img alt="junior frontend developer" src={mainImage}/>
                </div>
            </div>
            <PortfolioList items={data}/>
        </div>
    </main>
  );
};

export default HomePage;