import {PureComponent} from 'react';
import FilterableProductTable from "./FilterableProductTable";
const API_URL="http://amock.io/api/vd/products";
class Products extends PureComponent {        //PureComponent ortiqcha rendering bajarilmaydi, shouldComponentUpdate(lifecycle) ishlatmaganda foydalaniladi, dastur tezroq ishlaydi
    constructor(props) {
        super(props);
        this.state = { products: [], isLoading:true }
    }
    render() { 
        if(this.state.isLoading){
        return <p>Iltimos, sabr qiling. Malumot yuklanyapti....</p>;}
        else {
            return <FilterableProductTable products={this.state.products}/>
        }
    }
    componentDidMount(){
        fetch(API_URL).then(res=>res.json())
        .then(data=>{
           let jsonData=eval('('+ data +')'); //eslint-disable-line(eval-bu fya. chunki data objectlar qatori kurinishida
                                                // '('+ data +')' bunday yozilsa warning chiqmas emish) shuni yozmasa butun massivni ichida keladi
                                                //eval bulsa massivdan olib alohida qilib beradi
            this.setState({ products:jsonData, isLoading:false });
    }).catch(error=>{this.setState({ error, isLoading:false });})
    }
}
 
export default Products;