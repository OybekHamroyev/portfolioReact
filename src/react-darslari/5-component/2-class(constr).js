import React from "react"
class Palestine2 extends React.Component {
constructor() {
    super()    //superni chaqirib react ni ajdodidagi konst ni chaqir
    this.state={capilatCity:"Quddus"}
}
    render () {
    return <h3>Men Falastin davlatiman. Poytaxtim: {this.state.capilatCity}</h3>
}
}
export default Palestine2;