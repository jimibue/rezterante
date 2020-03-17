import React from "react";
import { Accordion, Icon } from "semantic-ui-react";
import ItemForm from "./ItemForm";

const Menu = ({
  name,
  menu_id,
  items,
  handleAccordionClick,
  accordionIndex,
  activeIndex,
  addItem
}) => {
  return (
    <h2>
      <Accordion.Title
        active={activeIndex === accordionIndex}
        index={accordionIndex}
        onClick={handleAccordionClick}
      >
        <Icon name="dropdown" />
      {`${name}  (menu-id: ${menu_id})`}
      </Accordion.Title>
      <Accordion.Content active={activeIndex === accordionIndex}>
        {items.map( item => (
          <div key={item.id}>
            {`${item.name} price:${item.price}`}
          </div>
        ))}
        <ItemForm menuId={menu_id} addItem={addItem} />
      </Accordion.Content>
    </h2>
  );
};
export default Menu;
