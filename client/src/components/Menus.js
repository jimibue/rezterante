import React, { PureComponent } from "react";
import { Accordion, Icon } from "semantic-ui-react";
import Menu from "./Menu";

export default class Menus extends PureComponent {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    console.log(titleProps);
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;
    const { menus, addItem } = this.props;

    return (
      <Accordion styled>
        {menus.map((menu, index) => (
          <Menu
            addItem={addItem}
            key={`menu-${menu.menu_id}`}
            {...menu}
            accordionIndex={index}
            activeIndex={activeIndex}
            handleAccordionClick={this.handleClick}
          />
        ))}
      </Accordion>
    );
  }
}
