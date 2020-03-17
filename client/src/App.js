import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, Header } from "semantic-ui-react";
import Menus from "./components/Menus";
import MenuForm from "./components/MenuForm";
import axios from "axios";

class App extends React.Component {
  state = { menus: [] };
  componentDidMount() {
    axios
      .get("api/menus")
      .then(res => {
        console.log(res);
        this.setState({
          menus: res.data
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  addMenu = menuName => {
    axios
      .post("api/menus", {
        name: menuName
      })
      .then(res => {
        console.log(res);
        this.setState({
          menus: [
            { ...res.data, menu_id: res.data.id, items: [] },
            ...this.state.menus
          ]
        });
      })
      .catch(e => {
        console.log(e);
      });
  };

  addItem = (menuId, itemName, ItemPrice) => {
    axios
      .post(`api/menus/${menuId}/items`, {
        name: itemName,
        price: ItemPrice
      })
      .then(res => {
        console.log(res);
        const newMenus = this.state.menus.map(menu => {
          if (menu.menu_id != menuId) return menu;
          else return { ...menu, items: [...menu.items, res.data] };
        });
        this.setState({
          menus: newMenus
        });
      })
      .catch(e => {
        console.log(e);
      });
  };
  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <hr />
        <Header as="h1">New Menu Form</Header>
        <MenuForm addMenu={this.addMenu} />
        <hr />
        <Header as="h1">Menu's</Header>
        <Menus addItem={this.addItem} menus={this.state.menus} />
      </Container>
    );
  }
}

export default App;
