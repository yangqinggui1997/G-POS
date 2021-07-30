import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import CategoryScreen from './CategoryScreen'
import ProductScreen from './ProductScreen'
import HomeScreen from './HomeScreen'
import CustomerScreen from './CustomerScreen'
import OrderScreen from './OrderScreen'
import CouponVoucherScreen from './CouponVoucherScreen'

const Drawer = createDrawerNavigator()

const HomeStaffScreen = () => {

    return <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" drawerPosition='right'>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Categories" component={CategoryScreen} />
            <Drawer.Screen name="Products" component={ProductScreen} />
            <Drawer.Screen name="Customers" component={CustomerScreen} />
            <Drawer.Screen name="Oders" component={OrderScreen} />
            <Drawer.Screen name="CouponVoucher" component={CouponVoucherScreen} />
            <Drawer.Screen name="Home1" component={HomeScreen} />
            <Drawer.Screen name="Categories1" component={CategoryScreen} />
            <Drawer.Screen name="Products1" component={ProductScreen} />
            <Drawer.Screen name="Customers1" component={CustomerScreen} />
            <Drawer.Screen name="Oders1" component={OrderScreen} />
        </Drawer.Navigator>
    </NavigationContainer>
}

const styles = StyleSheet.create({})

export default HomeStaffScreen
