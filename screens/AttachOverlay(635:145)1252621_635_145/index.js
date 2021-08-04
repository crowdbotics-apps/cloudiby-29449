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
      <View style={styles.View_666_142}>
        <View style={styles.View_666_143}>
          <Text style={styles.Text_666_143}>Upload from Cloudiby</Text>
        </View>
        <View style={styles.View_666_144}>
          <View style={styles.View_I666_144_475_78} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7381/cafe/0d28c98dd95fe29b5c8969bf62bdab1b"
            }}
            style={styles.ImageBackground_I666_144_475_79}
          />
        </View>
      </View>
      <View style={styles.View_666_146}>
        <View style={styles.View_666_147}>
          <Text style={styles.Text_666_147}>Photo</Text>
        </View>
        <View style={styles.View_666_148}>
          <View style={styles.View_I666_148_468_134} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e797/70d2/9eac0b805b4c90eb2576695f32a75fe4"
            }}
            style={styles.ImageBackground_I666_148_468_135}
          />
        </View>
      </View>
      <View style={styles.View_666_150}>
        <View style={styles.View_666_151}>
          <Text style={styles.Text_666_151}>Video</Text>
        </View>
        <View style={styles.View_666_152}>
          <View style={styles.View_I666_152_468_140} />
          <View style={styles.View_I666_152_468_141}>
            <View style={styles.View_I666_152_468_142} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8b4/8d9c/ff2e980adb7d72284a0c108f768f02ba"
              }}
              style={styles.ImageBackground_I666_152_468_143}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_666_154}>
        <View style={styles.View_666_155}>
          <Text style={styles.Text_666_155}>Audio</Text>
        </View>
        <View style={styles.View_666_156}>
          <View style={styles.View_I666_156_468_145} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89f8/eb73/b54ee9612d9b963f15319cb5791a1c4b"
            }}
            style={styles.ImageBackground_I666_156_468_146}
          />
        </View>
      </View>
      <View style={styles.View_666_158}>
        <View style={styles.View_666_159}>
          <Text style={styles.Text_666_159}>Document</Text>
        </View>
        <View style={styles.View_666_160}>
          <View style={styles.View_I666_160_468_125} />
          <View style={styles.View_I666_160_468_126}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4df7/535e/7301b3b8597bf4c8ffb7ceafa1e18772"
              }}
              style={styles.ImageBackground_I666_160_468_127}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc30/fa19/07b78b418622bc2f3bd133e2f68b2730"
              }}
              style={styles.ImageBackground_I666_160_468_128}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4590/6bf9/0a4bafb181b085b38c7b7707615a801f"
              }}
              style={styles.ImageBackground_I666_160_468_129}
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
  View_666_142: {
    width: wp("50.66666666666667%"),
    minWidth: wp("50.66666666666667%"),
    height: hp("8.391608391608392%"),
    minHeight: hp("8.391608391608392%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8.041958041958042%")
  },
  View_666_143: {
    width: wp("38.93333333333333%"),
    minWidth: wp("38.93333333333333%"),
    minHeight: hp("6.993006993006993%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("1.3986013986013983%"),
    justifyContent: "flex-start"
  },
  Text_666_143: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_666_144: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("8.391608391608392%"),
    minHeight: hp("8.391608391608392%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I666_144_475_78: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("8.391608391608392%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I666_144_475_79: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("6.118881118881119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333332%"),
    top: hp("1.2237762237762233%")
  },
  View_666_146: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    height: hp("8.391608391608392%"),
    minHeight: hp("8.391608391608392%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("26.923076923076923%")
  },
  View_666_147: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("6.993006993006993%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("1.3986013986014%"),
    justifyContent: "flex-start"
  },
  Text_666_147: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_666_148: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("8.391608391608392%"),
    minHeight: hp("8.391608391608392%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I666_148_468_134: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("8.391608391608392%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I666_148_468_135: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("5.769230769230769%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999998%"),
    top: hp("1.3986013986014%")
  },
  View_666_150: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    height: hp("8.391608391608392%"),
    minHeight: hp("8.391608391608392%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("45.8041958041958%")
  },
  View_666_151: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("6.993006993006993%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("1.3986013986014%"),
    justifyContent: "flex-start"
  },
  Text_666_151: {
    color: "rgba(0, 22, 10, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_666_152: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("8.391608391608392%"),
    minHeight: hp("8.391608391608392%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I666_152_468_140: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("8.391608391608392%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I666_152_468_141: {
    flexGrow: 1,
    width: wp("5.066666666666666%"),
    height: hp("4.545454545454546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333332%"),
    top: hp("2.0979020979021%")
  },
  View_I666_152_468_142: {
    width: wp("3.4666666666666663%"),
    height: hp("4.545454545454546%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(23, 72, 226, 1)",
    borderWidth: 1.399999976158142,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_I666_152_468_143: {
    width: wp("1.6%"),
    height: hp("4.545454545454546%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.466666666666667%")
  },
  View_666_154: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    height: hp("8.391608391608392%"),
    minHeight: hp("8.391608391608392%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("64.6853146853147%")
  },
  View_666_155: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("6.993006993006993%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("1.3986013986013859%"),
    justifyContent: "flex-start"
  },
  Text_666_155: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_666_156: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("8.391608391608392%"),
    minHeight: hp("8.391608391608392%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I666_156_468_145: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("8.391608391608392%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I666_156_468_146: {
    flexGrow: 1,
    width: wp("4.933333333333334%"),
    height: hp("8.391608391608392%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999998%"),
    top: hp("0%")
  },
  View_666_158: {
    width: wp("30.666666666666664%"),
    minWidth: wp("30.666666666666664%"),
    height: hp("8.391608391608392%"),
    minHeight: hp("8.391608391608392%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("83.56643356643356%")
  },
  View_666_159: {
    width: wp("18.933333333333334%"),
    minWidth: wp("18.933333333333334%"),
    minHeight: hp("6.993006993006993%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("1.3986013986014143%"),
    justifyContent: "flex-start"
  },
  Text_666_159: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_666_160: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("8.391608391608392%"),
    minHeight: hp("8.391608391608392%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I666_160_468_125: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("8.391608391608392%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I666_160_468_126: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("6.993008993722342%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999998%"),
    top: hp("0.6993006993007072%")
  },
  ImageBackground_I666_160_468_127: {
    width: wp("2.1960784912109377%"),
    height: hp("2.4475524475524475%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I666_160_468_128: {
    width: wp("4.8%"),
    height: hp("6.993006993006993%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I666_160_468_129: {
    width: wp("1.6%"),
    height: hp("2.7972031306553555%"),
    top: hp("3.1468531468531467%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000005%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
