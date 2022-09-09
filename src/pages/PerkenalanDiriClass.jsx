import React, { Component } from 'react';

//Stateful Component
class PerkenalanDiriClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: 'Dinda',
    };
    // this.handleNama = this.handleNama.bind(this);
  }

  render() {
    // const { namaku, changeNama } = this.props;
    const { nama } = this.state;
    console.log('render');
    // this.setState({
    //   nama: 'Paundra',
    // });

    return (
      <>
        <div>Nama Saya {nama}, ini dari class component</div>
        <input value={nama} onChange={(e) => this.handleNama(e)} />
        <a href="https://www.google.co.id/">google</a>
        {/* <div>Nama Saya {namaku}, ini dari class component</div>
        <input value={namaku} onChange={(e) => changeNama(e.target.value)} /> */}
      </>
    );
  }
}

export default PerkenalanDiriClass;
