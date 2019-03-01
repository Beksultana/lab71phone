import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, ScrollView , Modal} from 'react-native';
import {connect} from "react-redux";
import {addOrders, getDishes, modalDish} from "../../store/actions/actions-type";
import {styles} from './MainContainerCss';

class MainContainer extends Component {

    componentDidMount(){
        this.props.getDish();
    }

    render() {
        const dishesInfo = Object.keys(this.props.dishes).map((dish) => {
            const dishesPrice = parseInt(this.props.dishes[dish].dishesPrice);
            const dishesImage = this.props.dishes[dish].dishesImage;
            const dishesTitle = this.props.dishes[dish].dishesTitle;
            const dishesOrders = {
                id: dish,
                price: dishesPrice,
                title: dishesTitle
            };
            return (
                <View key={dish} style={{ margin: 2, padding: 5 }}>
                    <View style={styles.dishInfoBlock}>
                        <Image source={{uri: dishesImage}} style={{width: 152, height: 152}} />
                        <Text style={{textAlign: "center", fontSize: 18, fontWeight: 'bold'}}>{dishesTitle}</Text>
                        <Text style={{textAlign: "center", fontSize: 14}}>Price: {dishesPrice} KGS</Text>
                        <View>
                            <TouchableOpacity
                                onPress={() => this.props.addOrders(dishesOrders)}
                                style={{backgroundColor: '#009E6C', padding: 5, marginTop: 5, borderRadius: 5,}}>
                                <Text style={{textAlign: 'center', color: '#fff', fontSize: 20, fontWeight: 'bold'}}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )
        });
        const TextTotal = <Text style={{fontWeight: 'bold'}}>{this.props.dishesTotalPrice}</Text>;


        return (
            <View>
                <View style={{paddingTop: 30, flex: 1, textAlign: 'center', paddingLeft: 30, backgroundColor: "#92121A"}}>
                    <Text style={{fontWeight: 'bold', fontSize: 20, color: '#fff'}}>Turtle Pizza</Text>
                </View>

                <View style={styles.MainContainer}>
                    <ScrollView>
                        <View style={styles.MainContent}>
                            {dishesInfo}
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.footerText}>
                    <Text style={{textAlign: 'center', color: '#fff',
                            fontSize: 15, marginLeft: 15, padding: 10}}
                    >
                        Total price: {TextTotal} KGS
                    </Text>
                    <TouchableOpacity onPress={this.props.modalOrders} style={{backgroundColor: '#BE1822', padding: 12, }}>
                        <Text style={{textAlign: 'center', color: '#fff', fontSize: 16}}>Checkout</Text>
                    </TouchableOpacity>
                </View>
                <Modal style={{paddingHorizontal: 10,}}
                    animationType="slide"
                    transparent={false}
                    visible={this.props.modal}
                    onRequestClose={() => {}}>
                       <View style={{marginTop: 22, flex: 1, paddingHorizontal: 10}}>
                           <View>
                               <Text style={{fontSize: 20, marginLeft: 10, padding: 10, fontWeight: 'bold'}}>Your order:</Text>

                               {Object.keys(this.props.orders).map(dishId => (
                                   <View style={{flexDirection: 'row', justifyContent: 'space-between'}} key={dishId}>
                                       <Text style={{fontSize: 16}}>{this.props.dishes[dishId].dishesTitle}</Text>
                                       <Text style={{fontSize: 16}}>x { this.props.orders[dishId] }</Text>
                                       <Text style={{fontSize: 16}}>{ this.props.dishes[dishId].dishesPrice } KGS</Text>
                                   </View>
                               ))}
                               <Text style={{fontSize: 20,fontWeight: 'bold', marginTop: 30,
                                   paddingTop: 10, borderTopWidth: 1, borderColor: "#ccc"}}>Delivery: {this.props.delivery}</Text>
                               <Text style={{fontSize: 20,fontWeight: 'bold',
                                   paddingTop: 10,}}>Total: {this.props.ordersTotalPrice}</Text>
                           </View>
                       </View>
                       <View style={styles.footerButton}>
                           <TouchableOpacity style={{backgroundColor: '#BE1822', padding: 10, color: '#fff'}}
                                             onPress={this.props.modalOrders}>
                               <Text style={{fontSize: 16, textAlign: "center", color: "#fff"}}>Cancel</Text>
                           </TouchableOpacity>
                           <TouchableOpacity style={{backgroundColor: '#006BBC', padding: 10, color: '#fff', marginTop: 1}}
                                             onPress={() => {}}>
                               <Text style={{fontSize: 16, textAlign: "center", color: "#fff"}}>Order </Text>
                           </TouchableOpacity>
                       </View>
                </Modal>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        dishes: state.getDishesReducer.dishes,
        modal: state.getDishesReducer.modalVisible,
        orders: state.orderReducer.orders,
        dishesTotalPrice: state.orderReducer.dishesTotalPrice,
        ordersTotalPrice: state.orderReducer.ordersTotalPrice,
        delivery: state.orderReducer.delivery,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getDish: () => dispatch(getDishes()),
        modalOrders: () => dispatch(modalDish()),
        addOrders: (orders) => dispatch(addOrders(orders))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);