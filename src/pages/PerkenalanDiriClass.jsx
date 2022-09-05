import React, { Component } from 'react';

//Stateful Component
class PerkenalanDiriClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: 'Dinda',
    };
  }

  render() {
    return (
      <>
        <div>Nama Saya {this.state.nama}, ini dari class component</div>
        <input
          value={this.state.nama}
          onChange={(e) =>
            this.setState({
              nama: e.target.value,
            })
          }
        />
      </>
    );
  }
}

export default PerkenalanDiriClass;
