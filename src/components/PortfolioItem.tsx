import React, {FC} from "react";
import { IItem } from "../types/types";

interface PortItemProps {
    item: IItem,
}

const PortfolioItem:FC<PortItemProps> = ({item}) => {
    return (
        <li style={{backgroundColor: item.color}} className="portfolio-item">
            <div className="portfolio-item__content">
                <div>
                    <div className="portfolio-item__about">
                        <h2>{item.title}</h2>
                        <span>-</span>
                        <ul>
                            {item.technologies.map(tech => 
                                <li key={tech}>{tech}</li>
                            )}
                        </ul>
                    </div>
                    <p className="portfolio-item__about-description">{item.description}</p>
                </div>
                <div className="portfolio-item__btns">
                    <a target="_blank" rel="noreferrer" href={item.githubLink} className="social-btn"><span className="social-btn-icon social-btn-icon_github"></span></a>
                    <a target="_blank" rel="noreferrer" href={item.deployLink} className="social-btn"><span className="social-btn-icon social-btn-icon_deploy"></span></a>
                </div>
            </div>
            <div className="portfolio-item__image-content">
                <a target="_blank" rel="noreferrer" href={item.deployLink} className="portfolio-item__content-image-link"><img className="portfolio-item__content-image" alt={item.title} src={item.image}/></a>
            </div>
        </li>
    );
};

export default PortfolioItem;