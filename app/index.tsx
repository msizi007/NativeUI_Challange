import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import capsules from "../assets/capsules.png";
import icon from "../assets/icon2.png";

export default function ProductScreen() {
  return (
    <View style={styles.container}>
      {/* ----- ROW 1: header ----- */}
      <View style={styles.row1}>
        <Pressable style={styles.iconCircle}>
          <Ionicons name="chevron-back" size={26} color="black" />
        </Pressable>

        <Text style={styles.logo}>
          <Image source={icon} style={styles.icon} />
          xefag
        </Text>

        <View style={styles.rightIcons}>
          <Pressable style={styles.iconCircle}>
            <Feather name="user" size={20} color="black" />
          </Pressable>

          <Pressable style={styles.iconCircle}>
            <MaterialIcons name="shopping-cart" size={20} color="black" />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>3</Text>
            </View>
          </Pressable>
        </View>
      </View>

      {/* ----- ROW 2: categories and 30 circle ----- */}
      <View style={styles.row2}>
        <View style={styles.categories}>
          <View style={styles.categoryItem}>
            <Feather name="smile" size={20} color="black" />
            <Text style={styles.categoryText}>Relax</Text>
          </View>

          <View style={styles.categoryItem}>
            <Feather name="moon" size={20} color="#A1844F" />
            <Text style={[styles.categoryText, { color: "#A1844F" }]}>
              Sleep
            </Text>
          </View>
        </View>

        {/* 30 circle */}
        <View style={styles.circle30}>
          <Text style={styles.amountTextActive}>30</Text>
        </View>
      </View>

      {/* ----- PRODUCT IMAGE ----- */}
      <View style={styles.imageContainer}>
        <Image source={capsules} style={styles.productImage} />

        {/* 60 and 90 stacked on top-right */}
        <View style={styles.rightStack}>
          <View style={styles.amountCircleInactive}>
            <Text style={styles.amountTextInactive}>60</Text>
          </View>
          <View style={[styles.amountCircleInactive, { marginTop: 12 }]}>
            <Text style={styles.amountTextInactive}>90</Text>
          </View>
        </View>
      </View>

      {/* ----- WHITE CARD ----- */}
      <View style={styles.whiteCard}>
        <Text style={styles.title}>
          Relax 30 <br />
          Dissolvable Wafers
        </Text>
        <Text style={styles.mg}>250 mg</Text>

        <View style={styles.row5}>
          <Text style={styles.price}>$25.50</Text>

          <View style={styles.qtyControls}>
            <Pressable style={styles.qtyBtn}>
              <Text style={styles.qtyBtnText}>-</Text>
            </Pressable>

            <Text style={styles.qtyValue}>2</Text>

            <Pressable style={styles.qtyBtn}>
              <Text style={styles.qtyBtnText}>+</Text>
            </Pressable>
          </View>
        </View>

        <Pressable style={styles.buyBtn}>
          <Text style={styles.buyBtnText}>
            <MaterialCommunityIcons
              name="qrcode"
              size={20}
              color="black"
              style={{ marginRight: 5 }}
            />
            Buy Now
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  categories: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#F8C21A",
    paddingHorizontal: 10,
  },

  /* ROW 1 HEADER */
  row1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 0.15,
  },

  logo: {
    fontSize: 28,
    fontWeight: "900",
  },

  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.6)",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  badge: {
    position: "absolute",
    top: -2,
    right: -2,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  badgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "700",
  },

  /* ROW 2: categories + 30 circle */
  row2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 0.15,
  },

  categoryItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  categoryText: {
    fontSize: 18,
    fontWeight: "700",
  },

  circle30: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  amountTextActive: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },

  /* PRODUCT IMAGE + 60/90 circles */
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    flex: 0.4,
  },

  productImage: {
    width: 220,
    height: 280,
    resizeMode: "contain",
  },

  rightStack: {
    position: "absolute",
    top: -10,
    right: 0,
    alignItems: "center",
  },

  amountCircleInactive: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(0,0,0,0.25)",
    alignItems: "center",
    justifyContent: "center",
  },

  amountTextInactive: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },

  /* WHITE CARD */
  whiteCard: {
    backgroundColor: "white",
    borderRadius: 40,
    paddingVertical: 30,
    paddingHorizontal: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
    flex: 0.4,
  },

  title: {
    fontSize: 40,
    fontWeight: "700",
    marginBottom: 10,
  },

  mg: {
    fontSize: 20,
    color: "#777",
    marginBottom: 30,
  },

  /* ROW 5: price + qty */
  row5: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  price: {
    fontSize: 40,
    fontWeight: "700",
  },

  qtyControls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  qtyBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  qtyBtnText: {
    color: "white",
    fontSize: 22,
    fontWeight: "700",
  },

  qtyValue: {
    fontSize: 30,
    fontWeight: "500",
  },

  /* ROW 6: buy button */
  buyBtn: {
    marginTop: 20,
    backgroundColor: "#FFC400",
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: "center",
  },

  buyBtnText: {
    fontSize: 20,
    fontWeight: "700",
  },
});
