import React, {FC} from "react";
import {IItem} from "../types/types";
import PortfolioItem from "./PortfolioItem";

interface ListItems {
    items: IItem[],
};

const PortfolioList: FC<ListItems> = ({items}) => {
    return (
        <ul id="works" className="portfolio-list">
            {items.map(item => 
                <PortfolioItem
                    item={item}
                    key={item.id}
                />
            )}
        </ul>
    );
};

export default PortfolioList;