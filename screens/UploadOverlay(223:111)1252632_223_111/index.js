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
      <View style={styles.View_223_128} />
      <View style={styles.View_223_129}>
        <Text style={styles.Text_223_129}>Upload files</Text>
      </View>
      <View style={styles.View_223_131}>
        <Text style={styles.Text_223_131}>
          .png, .jpeg, .mp3, .mp4, .docx, .pptx, .xsls, .pdf{" "}
        </Text>
      </View>
      <View style={styles.View_223_132}>
        <Text style={styles.Text_223_132}>
          Tap here to upload files, max size: 100MB
        </Text>
      </View>
      <View style={styles.View_509_206}>
        <View style={styles.View_223_152} />
        <View style={styles.View_223_153}>
          <Text style={styles.Text_223_153}>Upload 2 files</Text>
        </View>
      </View>
      <View style={styles.View_223_130}>
        <Text style={styles.Text_223_130}>Uploaded files</Text>
      </View>
      <View style={styles.View_223_134}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbdc/405d/13956f6ede1a8729e9d9f343818d4921"
          }}
          style={styles.ImageBackground_223_135}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8109/af42/84ef0952d00fb55e11a926618fcfc217"
          }}
          style={styles.ImageBackground_223_136}
        />
      </View>
      <View style={styles.View_223_139} />
      <View style={styles.View_223_140}>
        <Text style={styles.Text_223_140}>Sexy traps</Text>
      </View>
      <View style={styles.View_223_141}>
        <Text style={styles.Text_223_141}>100%</Text>
      </View>
      <View style={styles.View_223_143}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbdc/405d/13956f6ede1a8729e9d9f343818d4921"
          }}
          style={styles.ImageBackground_223_144}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8109/af42/84ef0952d00fb55e11a926618fcfc217"
          }}
          style={styles.ImageBackground_223_145}
        />
      </View>
      <View style={styles.View_223_148} />
      <View style={styles.View_223_149}>
        <Text style={styles.Text_223_149}>100%</Text>
      </View>
      <View style={styles.View_223_150}>
        <Text style={styles.Text_223_150}>Project logo</Text>
      </View>
      <View style={styles.View_223_154}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2a8/6a98/aace2c57a6bc978e393fa4d1b608f35a"
          }}
          style={styles.ImageBackground_223_155}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_223_158}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("223_165"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2a8/6a98/aace2c57a6bc978e393fa4d1b608f35a"
          }}
          style={styles.ImageBackground_223_159}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_635_149}
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
  View_223_128: {
    width: wp("75.46666666666667%"),
    minWidth: wp("75.46666666666667%"),
    height: hp("19.469026548672566%"),
    minHeight: hp("19.469026548672566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("27.43362831858407%"),
    backgroundColor: "rgba(23, 72, 226, 1)",
    opacity: 0.10000000149011612,
    borderColor: "rgba(23, 72, 226, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_223_129: {
    width: wp("28.799999999999997%"),
    minWidth: wp("28.799999999999997%"),
    minHeight: hp("5.752212389380531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.733333333333334%"),
    top: hp("12.168141592920353%"),
    justifyContent: "flex-start"
  },
  Text_223_129: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_223_131: {
    width: wp("63.46666666666667%"),
    minWidth: wp("63.46666666666667%"),
    minHeight: hp("3.5398230088495577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.599999999999998%"),
    top: hp("18.58407079646018%"),
    justifyContent: "flex-start"
  },
  Text_223_131: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_223_132: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    minHeight: hp("3.0973451327433628%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.200000000000003%"),
    top: hp("35.61946902654867%"),
    justifyContent: "flex-start"
  },
  Text_223_132: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_509_206: {
    width: wp("75.46666666666667%"),
    minWidth: wp("75.46666666666667%"),
    height: hp("9.955752212389381%"),
    minHeight: hp("9.955752212389381%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("84.51327433628319%")
  },
  View_223_152: {
    width: wp("75.46666666666667%"),
    minWidth: wp("75.46666666666667%"),
    height: hp("9.955752212389381%"),
    minHeight: hp("9.955752212389381%"),
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
  View_223_153: {
    width: wp("25.066666666666666%"),
    minWidth: wp("25.066666666666666%"),
    minHeight: hp("4.424778761061947%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.333333333333336%"),
    top: hp("2.8761061946902657%"),
    justifyContent: "flex-start"
  },
  Text_223_153: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_223_130: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    minHeight: hp("3.982300884955752%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("52.654867256637175%"),
    justifyContent: "flex-start"
  },
  Text_223_130: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_223_134: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    height: hp("7.7433628318584065%"),
    minHeight: hp("7.7433628318584065%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("60.39823008849557%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_223_135: {
    width: wp("9.333333333333334%"),
    height: hp("7.7433628318584065%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_223_136: {
    width: wp("3.888800303141276%"),
    height: hp("3.8714451072490323%"),
    top: hp("1.9358407079646014%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.722094726562501%")
  },
  View_223_139: {
    width: wp("55.2%"),
    minWidth: wp("55.2%"),
    height: hp("0.6637168141592921%"),
    minHeight: hp("0.6637168141592921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.733333333333334%"),
    top: hp("66.1504424778761%"),
    backgroundColor: "rgba(23, 72, 226, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_223_140: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    minHeight: hp("3.5398230088495577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.733333333333334%"),
    top: hp("61.283185840707965%"),
    justifyContent: "flex-start"
  },
  Text_223_140: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_223_141: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    minHeight: hp("2.8761061946902653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.53333333333333%"),
    top: hp("61.283185840707965%"),
    justifyContent: "flex-start"
  },
  Text_223_141: {
    color: "rgba(23, 72, 226, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_223_143: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    height: hp("7.7433628318584065%"),
    minHeight: hp("7.7433628318584065%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("71.46017699115043%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_223_144: {
    width: wp("9.333333333333334%"),
    height: hp("7.7433628318584065%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_223_145: {
    width: wp("3.888800303141276%"),
    height: hp("3.8714451072490323%"),
    top: hp("1.9358407079646156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.722094726562501%")
  },
  View_223_148: {
    width: wp("55.2%"),
    minWidth: wp("55.2%"),
    height: hp("0.6637168141592921%"),
    minHeight: hp("0.6637168141592921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.733333333333334%"),
    top: hp("77.21238938053098%"),
    backgroundColor: "rgba(23, 72, 226, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_223_149: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    minHeight: hp("2.8761061946902653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.53333333333333%"),
    top: hp("72.78761061946902%"),
    justifyContent: "flex-start"
  },
  Text_223_149: {
    color: "rgba(23, 72, 226, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_223_150: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    minHeight: hp("3.5398230088495577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.733333333333334%"),
    top: hp("72.34513274336283%"),
    justifyContent: "flex-start"
  },
  Text_223_150: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_223_154: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("3.5398230088495577%"),
    minHeight: hp("3.5398230088495577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.46666666666667%"),
    top: hp("62.61061946902655%")
  },
  ImageBackground_223_155: {
    width: wp("4.266666666666667%"),
    height: hp("3.5398230088495577%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_223_158: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("3.5398230088495577%"),
    minHeight: hp("3.5398230088495577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.46666666666667%"),
    top: hp("73.67256637168141%")
  },
  ImageBackground_223_159: {
    width: wp("4.266666666666667%"),
    height: hp("3.5398230088495577%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_635_149: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("1.3274336283185841%"),
    minHeight: hp("1.3274336283185841%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666666%"),
    top: hp("5.3097345132743365%"),
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
