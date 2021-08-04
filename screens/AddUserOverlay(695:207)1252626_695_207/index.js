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
      <View style={styles.View_695_214}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fce/4661/e5d2c7b7e6a8a478c1630b153dd45b48"
          }}
          style={styles.ImageBackground_695_215}
        />
      </View>
      <View style={styles.View_695_226}>
        <View style={styles.View_695_218}>
          <Text style={styles.Text_695_218}>
            You’ve added Melly as a contact
          </Text>
        </View>
        <View style={styles.View_695_219}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16dc/36c2/15d796f644e5a3d5db1bb44bbe0a3c4a"
            }}
            style={styles.ImageBackground_695_220}
          />
          <View style={styles.View_695_221}>
            <View style={styles.View_695_222}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f6d/98fd/66b07b1e7941c0ae837d63ac533e0105"
                }}
                style={styles.ImageBackground_695_223}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_695_214: {
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
  ImageBackground_695_215: {
    width: wp("5.899705014749262%"),
    height: hp("6.896551724137931%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_695_226: {
    width: wp("63.12684365781711%"),
    minWidth: wp("63.12684365781711%"),
    height: hp("43.103448275862064%"),
    minHeight: hp("43.103448275862064%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.58407079646018%"),
    top: hp("28.620689655172416%")
  },
  View_695_218: {
    width: wp("63.12684365781711%"),
    minWidth: wp("63.12684365781711%"),
    minHeight: hp("6.896551724137931%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.20689655172413%"),
    justifyContent: "flex-start"
  },
  Text_695_218: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_695_219: {
    width: wp("17.699115044247787%"),
    minWidth: wp("17.699115044247787%"),
    height: hp("20.689655172413794%"),
    minHeight: hp("20.689655172413794%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.71386430678466%"),
    top: hp("0%")
  },
  ImageBackground_695_220: {
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
  View_695_221: {
    width: wp("8.849557522123893%"),
    minWidth: wp("8.849557522123893%"),
    height: hp("10.344827586206897%"),
    minHeight: hp("10.344827586206897%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.424778761061944%"),
    top: hp("5.172413793103448%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_695_222: {
    width: wp("8.849557522123893%"),
    height: hp("10.344827586206897%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_695_223: {
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
