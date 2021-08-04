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
      <TouchableOpacity
        style={styles.TouchableOpacity_509_123}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("223_111"))
        }
      >
        <View style={styles.View_509_124}>
          <Text style={styles.Text_509_124}>Upload files</Text>
        </View>
        <View style={styles.View_509_125}>
          <View style={styles.View_I509_125_509_115} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8a5/3af6/a323964e52b057bae82cd46dd931ce93"
            }}
            style={styles.ImageBackground_I509_125_509_116}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_509_130}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("223_33"))
        }
      >
        <View style={styles.View_509_131}>
          <View style={styles.View_I509_131_394_115} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3908/18dc/168b5186623d1aabbfb7082e7020503d"
            }}
            style={styles.ImageBackground_I509_131_394_116}
          />
        </View>
        <View style={styles.View_509_132}>
          <Text style={styles.Text_509_132}>Create folder</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_695_142}>
        <View style={styles.View_509_138} />
        <View style={styles.View_509_139}>
          <Text style={styles.Text_509_139}>Cancel</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_635_147}
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
  TouchableOpacity_509_123: {
    width: wp("38.666666666666664%"),
    minWidth: wp("38.666666666666664%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("28.46153846153846%")
  },
  View_509_124: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    minHeight: hp("9.615384615384617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0.38461538461538325%"),
    justifyContent: "flex-start"
  },
  Text_509_124: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_509_125: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I509_125_509_115: {
    flexGrow: 1,
    width: wp("6.933333333333333%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I509_125_509_116: {
    flexGrow: 1,
    width: wp("5.777778116861979%"),
    height: hp("7.291666911198543%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5777832031249996%"),
    top: hp("1.4583323552058332%")
  },
  TouchableOpacity_509_130: {
    width: wp("41.86666666666667%"),
    minWidth: wp("41.86666666666667%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("53.46153846153846%")
  },
  View_509_131: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I509_131_394_115: {
    flexGrow: 1,
    width: wp("6.933333333333333%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I509_131_394_116: {
    flexGrow: 1,
    width: wp("5.777778116861979%"),
    height: hp("7.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5777832031249996%"),
    top: hp("1.250000000000007%")
  },
  View_509_132: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    minHeight: hp("9.615384615384617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0.3846153846153868%"),
    justifyContent: "flex-start"
  },
  Text_509_132: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_695_142: {
    width: wp("82.39999999999999%"),
    minWidth: wp("82.39999999999999%"),
    height: hp("17.692307692307693%"),
    minHeight: hp("17.692307692307693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("74.23076923076923%")
  },
  View_509_138: {
    width: wp("82.39999999999999%"),
    minWidth: wp("82.39999999999999%"),
    height: hp("17.692307692307693%"),
    minHeight: hp("17.692307692307693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(23, 72, 226, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_509_139: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    minHeight: hp("7.6923076923076925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_509_139: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  TouchableOpacity_635_147: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("2.307692307692308%"),
    minHeight: hp("2.307692307692308%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666666%"),
    top: hp("9.230769230769232%"),
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
