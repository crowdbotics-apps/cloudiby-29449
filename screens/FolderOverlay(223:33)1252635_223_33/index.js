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
      <View style={styles.View_223_56}>
        <Text style={styles.Text_223_56}>Create a folder</Text>
      </View>
      <View style={styles.View_223_57}>
        <Text style={styles.Text_223_57}>maximum of 30 characters</Text>
      </View>
      <View style={styles.View_223_58} />
      <View style={styles.View_223_59}>
        <Text style={styles.Text_223_59}>Folder name</Text>
      </View>
      <View style={styles.View_223_60}>
        <Text style={styles.Text_223_60}>Shared folder</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_223_64}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("223_66"))
        }
      />
      <View style={styles.View_509_156}>
        <View style={styles.View_509_157} />
        <View style={styles.View_509_158}>
          <Text style={styles.Text_509_158}>Create</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_635_146}
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
  View_223_56: {
    width: wp("36.53333333333333%"),
    minWidth: wp("36.53333333333333%"),
    minHeight: hp("8.360128617363344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.733333333333334%"),
    top: hp("19.292604501607716%"),
    justifyContent: "flex-start"
  },
  Text_223_56: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_223_57: {
    width: wp("46.13333333333333%"),
    minWidth: wp("46.13333333333333%"),
    minHeight: hp("5.787781350482315%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.93333333333333%"),
    top: hp("28.617363344051448%"),
    justifyContent: "flex-start"
  },
  Text_223_57: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_223_58: {
    width: wp("75.19283854166666%"),
    minWidth: wp("75.19283854166666%"),
    height: hp("0.7402105730062896%"),
    minHeight: hp("0.7402105730062896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.310677083333333%"),
    top: hp("55.41790045342645%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_223_59: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("5.144694533762058%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("49.19614147909968%"),
    justifyContent: "flex-start"
  },
  Text_223_59: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_223_60: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("5.466237942122187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.933333333333334%"),
    top: hp("63.9871382636656%"),
    justifyContent: "flex-start"
  },
  Text_223_60: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  TouchableOpacity_223_64: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("5.787781350482315%"),
    minHeight: hp("5.787781350482315%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("63.665594855305464%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.5,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_509_156: {
    width: wp("75.46666666666667%"),
    minWidth: wp("75.46666666666667%"),
    height: hp("14.469453376205788%"),
    minHeight: hp("14.469453376205788%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("78.77813504823152%")
  },
  View_509_157: {
    width: wp("75.46666666666667%"),
    minWidth: wp("75.46666666666667%"),
    height: hp("14.469453376205788%"),
    minHeight: hp("14.469453376205788%"),
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
  View_509_158: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("6.752411575562702%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.46666666666667%"),
    top: hp("3.858520900321537%"),
    justifyContent: "flex-start"
  },
  Text_509_158: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  TouchableOpacity_635_146: {
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
