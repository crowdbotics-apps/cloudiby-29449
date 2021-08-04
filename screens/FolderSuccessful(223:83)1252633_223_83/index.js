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
      <View style={styles.View_509_214}>
        <View style={styles.View_223_104}>
          <Text style={styles.Text_223_104}>Yay!!</Text>
        </View>
        <View style={styles.View_223_105}>
          <Text style={styles.Text_223_105}>your folder has been created </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8d7/10a2/5d4ac99aa5336e049383b60cb88a86fd"
          }}
          style={styles.ImageBackground_223_106}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_635_148}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("83_98"))
        }
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_509_214: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("42.443729903536976%"),
    minHeight: hp("42.443729903536976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333332%"),
    top: hp("36.655948553054664%")
  },
  View_223_104: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    minHeight: hp("7.395498392282958%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.466666666666672%"),
    top: hp("28.295819935691306%"),
    justifyContent: "flex-start"
  },
  Text_223_104: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_223_105: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    minHeight: hp("5.144694533762058%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37.29903536977492%"),
    justifyContent: "flex-start"
  },
  Text_223_105: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  ImageBackground_223_106: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("19.292604501607716%"),
    minHeight: hp("19.292604501607716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  TouchableOpacity_635_148: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("1.929260450160772%"),
    minHeight: hp("1.929260450160772%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666666%"),
    top: hp("7.717041800643088%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
