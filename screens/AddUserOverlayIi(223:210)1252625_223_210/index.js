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
      <View style={styles.View_695_182}>
        <View style={styles.View_247_5} />
        <View style={styles.View_247_7}>
          <Text style={styles.Text_247_7}>Username</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_695_181}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("695_207"))
        }
      >
        <View style={styles.View_247_6} />
        <View style={styles.View_247_8}>
          <Text style={styles.Text_247_8}>Add</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_412_141}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fce/4661/e5d2c7b7e6a8a478c1630b153dd45b48"
          }}
          style={styles.ImageBackground_412_138}
        />
      </View>
      <View style={styles.View_410_135}>
        <Text style={styles.Text_410_135}>Add a new contact</Text>
      </View>
      <View style={styles.View_695_203}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16dc/36c2/15d796f644e5a3d5db1bb44bbe0a3c4a"
          }}
          style={styles.ImageBackground_394_127}
        />
        <View style={styles.View_695_184}>
          <View style={styles.View_695_185}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f6d/98fd/66b07b1e7941c0ae837d63ac533e0105"
              }}
              style={styles.ImageBackground_695_186}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_695_182: {
    width: wp("82.59587020648968%"),
    minWidth: wp("82.59587020648968%"),
    height: hp("7.586206896551724%"),
    minHeight: hp("7.586206896551724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.55457227138643%"),
    top: hp("57.58620689655173%")
  },
  View_247_5: {
    width: wp("82.59587020648968%"),
    minWidth: wp("82.59587020648968%"),
    height: hp("0.3448275862068966%"),
    minHeight: hp("0.3448275862068966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.241379310344811%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.4000000059604645
  },
  View_247_7: {
    width: wp("15.929203539823009%"),
    minWidth: wp("15.929203539823009%"),
    minHeight: hp("5.517241379310345%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2949852507374633%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_247_7: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  TouchableOpacity_695_181: {
    width: wp("82.59587020648968%"),
    minWidth: wp("82.59587020648968%"),
    height: hp("14.827586206896552%"),
    minHeight: hp("14.827586206896552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.849557522123893%"),
    top: hp("73.79310344827587%")
  },
  View_247_6: {
    width: wp("82.59587020648968%"),
    minWidth: wp("82.59587020648968%"),
    height: hp("14.827586206896552%"),
    minHeight: hp("14.827586206896552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(23, 72, 226, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_247_8: {
    width: wp("8.259587020648967%"),
    minWidth: wp("8.259587020648967%"),
    minHeight: hp("6.896551724137931%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.16814159292035%"),
    top: hp("4.137931034482747%"),
    justifyContent: "flex-start"
  },
  Text_247_8: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_412_141: {
    width: wp("5.899705014749262%"),
    minWidth: wp("5.899705014749262%"),
    height: hp("6.896551724137931%"),
    minHeight: hp("6.896551724137931%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.49557522123894%"),
    top: hp("7.241379310344828%")
  },
  ImageBackground_412_138: {
    width: wp("5.899705014749262%"),
    height: hp("6.896551724137931%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_410_135: {
    width: wp("37.16814159292036%"),
    minWidth: wp("37.16814159292036%"),
    minHeight: hp("6.896551724137931%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.563421828908556%"),
    top: hp("36.55172413793103%"),
    justifyContent: "flex-start"
  },
  Text_410_135: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_695_203: {
    width: wp("17.699115044247787%"),
    minWidth: wp("17.699115044247787%"),
    height: hp("20.689655172413794%"),
    minHeight: hp("20.689655172413794%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.29793510324484%"),
    top: hp("8.620689655172415%")
  },
  ImageBackground_394_127: {
    width: wp("17.699115044247787%"),
    minWidth: wp("17.699115044247787%"),
    height: hp("20.689655172413794%"),
    minHeight: hp("20.689655172413794%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_695_184: {
    width: wp("8.849557522123893%"),
    minWidth: wp("8.849557522123893%"),
    height: hp("10.344827586206897%"),
    minHeight: hp("10.344827586206897%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.424778761061944%"),
    top: hp("5.172413793103447%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_695_185: {
    width: wp("8.849557522123893%"),
    height: hp("10.344827586206897%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_695_186: {
    width: wp("8.849557522123893%"),
    height: hp("10.344827586206897%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
