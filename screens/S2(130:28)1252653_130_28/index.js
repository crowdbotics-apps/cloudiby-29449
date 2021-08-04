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
      <View style={styles.View_130_44}>
        <View style={styles.View_130_45} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c9d/34c4/11046b955db3cb492492e85b48c72983"
        }}
        style={styles.ImageBackground_309_2}
      />
      <View style={styles.View_139_2}>
        <Text style={styles.Text_139_2}>
          Most stress free communication with team members and friends using our
          inbox feature.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_304_152}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("130_52"))
        }
      >
        <View style={styles.View_304_153}>
          <View style={styles.View_304_154}>
            <View style={styles.View_304_155}>
              <View style={styles.View_304_156}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df61/0615/72df88bbf42ba14fd4519d7d5b49d588"
                  }}
                  style={styles.ImageBackground_304_157}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da67/89a1/eb1ac9a6b3dd41d63aac940de76d82c0"
                  }}
                  style={styles.ImageBackground_304_158}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38bd/1ef6/9d55adff8d0d53dc0557704f75aa5694"
                  }}
                  style={styles.ImageBackground_304_159}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f08e/3c7a/794a38aea9168f00bc9df567d9b9a1c3"
                  }}
                  style={styles.ImageBackground_304_183}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3123/dcbf/043dd226150c06b1001dc30342656808"
                  }}
                  style={styles.ImageBackground_304_184}
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_321_269}>
        <Text style={styles.Text_321_269}>Communicate</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_321_270}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("130_52"))
        }
      >
        <Text style={styles.Text_321_270}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_543_159}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("29_3"))
        }
      >
        <Text style={styles.Text_543_159}>Skip </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_130_44: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106.28415300546447%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_130_45: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_309_2: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.86666666666667%"),
    top: hp("90.30054644808743%")
  },
  View_139_2: {
    width: wp("82.39999999999999%"),
    minWidth: wp("82.39999999999999%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("70.3551912568306%"),
    justifyContent: "flex-start"
  },
  Text_139_2: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  TouchableOpacity_304_152: {
    width: wp("66.66666666666666%"),
    height: hp("34.15300546448087%"),
    top: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_304_153: {
    flexGrow: 1,
    width: wp("66.66666666666666%"),
    height: hp("34.15300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_304_154: {
    width: wp("59.834826660156246%"),
    height: hp("26.3205835728046%"),
    top: hp("3.9162119881051467%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4212239583333357%")
  },
  View_304_155: {
    width: wp("59.834826660156246%"),
    height: hp("26.3205835728046%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_304_156: {
    width: wp("59.834826660156246%"),
    height: hp("26.3205835728046%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_304_157: {
    width: wp("56.6253662109375%"),
    height: hp("17.18342473598126%"),
    top: hp("1.800228598339313%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.209505208333333%")
  },
  ImageBackground_304_158: {
    width: wp("11.669771321614583%"),
    height: hp("4.200601838325542%"),
    top: hp("10.526607075675592%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.802604166666661%")
  },
  ImageBackground_304_159: {
    width: wp("58.69552408854166%"),
    height: hp("26.3205835728046%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_304_183: {
    width: wp("0.928515625%"),
    height: hp("0.28691109412354854%"),
    top: hp("12.127625095388282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.80703125%")
  },
  ImageBackground_304_184: {
    width: wp("0.569964599609375%"),
    height: hp("0.20678473300621159%"),
    top: hp("11.782013523122657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.573697916666667%")
  },
  View_321_269: {
    width: wp("51.2%"),
    minWidth: wp("51.2%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.266666666666666%"),
    top: hp("60.245901639344254%"),
    justifyContent: "flex-start"
  },
  Text_321_269: {
    color: "rgba(23, 72, 226, 1)",
    fontSize: 23,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  TouchableOpacity_321_270: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.53333333333333%"),
    top: hp("96.17486338797814%"),
    justifyContent: "flex-start"
  },
  Text_321_270: {
    color: "rgba(23, 72, 226, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  TouchableOpacity_543_159: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("96.17486338797814%"),
    justifyContent: "flex-start"
  },
  Text_543_159: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 14,
    fontWeight: "700",
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
