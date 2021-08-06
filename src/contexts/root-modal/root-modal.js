import React from "react";
import RootModalManager from "./root-modal-manager";
import Modal from "../../components/modal/modal";

const modal = {
  fire({ title, render, actions, size }) {
    const modal = RootModalManager.get();
    modal.fire({ title, render, actions, size });
  },
  remove(id) {
    const modal = RootModalManager.get();
    modal.remove(id);
  },
};

class RootModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modals: [],
    };
    this.fire = this.fire.bind(this);
    this.remove = this.remove.bind(this);
    this._id = Math.floor(Math.random() * 999999);
  }

  fire({ title, render, actions, size }) {
    const id = Math.floor(Math.random() * 999999);
    this.setState((prevState) => ({
      modals: [
        ...prevState.modals,
        { id, title, children: render, actions, size },
      ],
    }));
  }

  remove(id) {
    this.setState((prevState) => ({
      modals: prevState.modals.filter((i) => i.id !== id),
    }));
  }

  componentDidMount() {
    RootModalManager.register(this);
  }
  componentWillUnmount() {
    RootModalManager.unregister(this);
  }
  render() {
    const { modals } = this.state;
    return (
      <React.Fragment>
        {this.props.children}
        {modals?.map((item) => (
          <Modal
            key={item.id}
            onClose={() => {
              this.remove(item.id);
            }}
            {...item}
          />
        ))}
      </React.Fragment>
    );
  }
}

export { RootModal, modal };
