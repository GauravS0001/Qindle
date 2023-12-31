/** @format */

import React, { PureComponent } from "react";

import { Cart } from "../containers";
import { SafeAreaView } from "../components";

export default class CartScreen extends PureComponent {
  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;

    return (
      <SafeAreaView>
        <Cart
          onMustLogin={() => {
            navigate("LoginScreen", { onCart: true });
          }}
          onBack={() => navigate("Default")}
          onFinishOrder={() => navigate("MyOrders")}
          onViewHome={() => navigate("Default")}
          onViewProduct={(product) => navigate("DetailScreen", product)}
          navigation={navigation}
        />
      </SafeAreaView>
    );
  }
}
