import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView , Modal} from 'react-native';
import {connect} from "react-redux";
import {getDishes} from "../../store/actions/actions-type";

class MainContainer extends Component {

    state = {
        modalVisible: false
    };

    componentDidMount(){
        this.props.getDish();
    }

    modalOnClick = () => {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    };

    render() {

        return (
            <View>
                <View style={{paddingTop: 30, flex: 1, textAlign: 'center', paddingLeft: 30, backgroundColor: "#92121A"}}>
                    <Text style={{fontWeight: 'bold', fontSize: 20, color: '#fff'}}>Turtle Pizza</Text>
                </View>

                <View style={styles.MainContainer}>
                    <ScrollView>
                        <View style={styles.MainContent}>
                            {
                                Object.keys(this.props.dishes).map((dish) => {
                                    return (
                                        <View key={dish} style={{ margin: 2, padding: 5 }}>
                                            <View style={styles.dishInfoBlock}>
                                                <Image source={{uri: this.props.dishes[dish].dishesImage}} style={{width: 152, height: 152}} />
                                                <Text style={{textAlign: "center", fontSize: 18, fontWeight: 'bold'}}>{this.props.dishes[dish].dishesTitle}</Text>
                                                <Text style={{textAlign: "center", fontSize: 14}}>Price: {this.props.dishes[dish].dishesPrice} KGS</Text>
                                                <View>
                                                    <TouchableOpacity style={{backgroundColor: '#009E6C', padding: 5, marginTop: 5, borderRadius: 5,}}>
                                                        <Text style={{textAlign: 'center', color: '#fff', fontSize: 20, fontWeight: 'bold'}}>+</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.footerText}>
                    <Text style={{textAlign: 'center', color: '#fff', fontSize: 18, marginLeft: 15, padding: 10}}>Total price:  KGS</Text>
                    <TouchableOpacity onPress={this.modalOnClick} style={{backgroundColor: '#DF270E', padding: 15, }}>
                        <Text style={{textAlign: 'center', color: '#fff', fontSize: 18}}>Checkout</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {}}>
                    <View style={{marginTop: 22}}>
                        <View>
                            <Text>Hello World!</Text>
                            <TouchableOpacity
                                onPress={this.modalOnClick}>
                                <Text>Hide Modal</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const mapStateToProps = state => {

    return {
        dishes: state.getDishesReducer.dishes,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getDish: () => dispatch(getDishes()),
    }
};

const styles = StyleSheet.create({
    MainContent: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        paddingTop: 5
    },
    MainContainer: {
        flex: 11,
    },
    dishInfoBlock: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    footerText: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#92121A"
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);