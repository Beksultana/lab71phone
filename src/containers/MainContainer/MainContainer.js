import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import {connect} from "react-redux";
import {getDishes} from "../../store/actions/actions-type";

class MainContainer extends Component {

    componentDidMount(){
        this.props.getDish();
    }

    render() {

        return (
            <View>
                <View style={{paddingTop: 30, flex: 0.4, textAlign: 'center', paddingLeft: 30}}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>Turtle Pizza</Text>
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
                                                    <TouchableOpacity style={{backgroundColor: '#009E6C', padding: 10, marginTop: 5, borderRadius: 5,}}>
                                                        <Text style={{textAlign: 'center', color: '#fff', fontSize: 15, fontWeight: 'bold'}}>+</Text>
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
                    <TouchableOpacity style={{backgroundColor: '#DF270E', padding: 15, }}>
                        <Text style={{textAlign: 'center', color: '#fff', fontSize: 18}}>Checkout</Text>
                    </TouchableOpacity>
                </View>
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
        getDish: () => dispatch(getDishes())
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
        flex: 10,
    },
    dishInfoBlock: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    footerText: {
        flex: 1
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);