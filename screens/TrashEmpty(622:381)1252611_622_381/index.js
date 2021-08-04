import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_622_382}>
        <Text style={styles.Text_622_382}>Trash</Text>
      </View>
      <View style={styles.View_622_383}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13ee/ac93/7363bd6da999339ea76a29e194e8ba7b"
          }}
          style={styles.ImageBackground_622_384}
        />
      </View>
      <View style={styles.View_622_386}>
        <Text style={styles.Text_622_386}>
          Items will be permanently deleted after 30 days.
        </Text>
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6827/4b99/170204d6ff3c00fe319754f099386c51"
        }}
        style={styles.TouchableOpacity_622_429}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("622_284"))
        }
      />
      <View style={styles.View_622_466}>
        <Text style={styles.Text_622_466}>Nothing in Trash</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_622_382: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.4%"),
    top: hp("9.836065573770492%"),
    justifyContent: "flex-start"
  },
  Text_622_382: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_622_383: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("10.655737704918032%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_622_384: {
    width: wp("2.736133066813151%"),
    height: hp("2.4590111821075604%"),
    top: hp("0.00010214216722381764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.031901041666667%")
  },
  View_622_386: {
    width: wp("67.2%"),
    minWidth: wp("67.2%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%"),
    top: hp("14.89071038251366%"),
    justifyContent: "flex-start"
  },
  Text_622_386: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  TouchableOpacity_622_429: {
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    top: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%")
  },
  View_622_466: {
    width: wp("39.46666666666667%"),
    minWidth: wp("39.46666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.4%"),
    top: hp("53.68852459016394%"),
    justifyContent: "flex-start"
  },
  Text_622_466: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
