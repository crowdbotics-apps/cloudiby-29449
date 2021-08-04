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
      <View style={styles.View_223_167} />
      <View style={styles.View_223_168}>
        <Text style={styles.Text_223_168}>Upload files</Text>
      </View>
      <View style={styles.View_223_170}>
        <Text style={styles.Text_223_170}>
          .png, .jpeg, .mp3, .mp4, .docx, .pptx, .xsls, .pdf{" "}
        </Text>
      </View>
      <View style={styles.View_223_169}>
        <Text style={styles.Text_223_169}>Uploaded files</Text>
      </View>
      <View style={styles.View_223_176}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbdc/405d/13956f6ede1a8729e9d9f343818d4921"
          }}
          style={styles.ImageBackground_223_177}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8109/af42/84ef0952d00fb55e11a926618fcfc217"
          }}
          style={styles.ImageBackground_223_178}
        />
      </View>
      <View style={styles.View_223_181} />
      <View style={styles.View_223_182}>
        <Text style={styles.Text_223_182}>Sexy traps</Text>
      </View>
      <View style={styles.View_223_183}>
        <Text style={styles.Text_223_183}>100%</Text>
      </View>
      <View style={styles.View_223_192}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2a8/6a98/aace2c57a6bc978e393fa4d1b608f35a"
          }}
          style={styles.ImageBackground_223_193}
        />
      </View>
      <View style={styles.View_509_212}>
        <View style={styles.View_509_209} />
        <View style={styles.View_509_210}>
          <Text style={styles.Text_509_210}>Upload file</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_635_150}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("83_98"))
        }
      />
      <View style={styles.View_716_184}>
        <View style={styles.View_716_185}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6df/c6cf/bef2993a7a2ac3318777e9ff441079fe"
            }}
            style={styles.ImageBackground_716_186}
          />
        </View>
        <View style={styles.View_716_190}>
          <Text style={styles.Text_716_190}>File is too big</Text>
        </View>
      </View>
      <View style={styles.View_716_208}>
        <Text style={styles.Text_716_208}>
          Tap here to upload files, max size: 100MB
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_223_167: {
    width: wp("75.46666666666667%"),
    minWidth: wp("75.46666666666667%"),
    height: hp("20.18348623853211%"),
    minHeight: hp("20.18348623853211%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("28.440366972477065%"),
    backgroundColor: "rgba(23, 72, 226, 1)",
    opacity: 0.10000000149011612,
    borderColor: "rgba(23, 72, 226, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_223_168: {
    width: wp("28.799999999999997%"),
    minWidth: wp("28.799999999999997%"),
    minHeight: hp("5.963302752293578%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.733333333333334%"),
    top: hp("12.614678899082568%"),
    justifyContent: "flex-start"
  },
  Text_223_168: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_223_170: {
    width: wp("63.46666666666667%"),
    minWidth: wp("63.46666666666667%"),
    minHeight: hp("3.669724770642202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.599999999999998%"),
    top: hp("19.26605504587156%"),
    justifyContent: "flex-start"
  },
  Text_223_170: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_223_169: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    minHeight: hp("4.128440366972478%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("61.00917431192661%"),
    justifyContent: "flex-start"
  },
  Text_223_169: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_223_176: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    height: hp("8.027522935779817%"),
    minHeight: hp("8.027522935779817%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("69.03669724770643%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_223_177: {
    width: wp("9.333333333333334%"),
    height: hp("8.027522935779817%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_223_178: {
    width: wp("3.888800303141276%"),
    height: hp("4.013516487331565%"),
    top: hp("2.0068807339449393%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.722094726562501%")
  },
  View_223_181: {
    width: wp("55.2%"),
    minWidth: wp("55.2%"),
    height: hp("0.6880733944954129%"),
    minHeight: hp("0.6880733944954129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.733333333333334%"),
    top: hp("75%"),
    backgroundColor: "rgba(23, 72, 226, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_223_182: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    minHeight: hp("3.669724770642202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.733333333333334%"),
    top: hp("69.95412844036697%"),
    justifyContent: "flex-start"
  },
  Text_223_182: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_223_183: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    minHeight: hp("2.981651376146789%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.53333333333333%"),
    top: hp("69.95412844036697%"),
    justifyContent: "flex-start"
  },
  Text_223_183: {
    color: "rgba(23, 72, 226, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_223_192: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("3.669724770642202%"),
    minHeight: hp("3.669724770642202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.46666666666667%"),
    top: hp("71.3302752293578%")
  },
  ImageBackground_223_193: {
    width: wp("4.266666666666667%"),
    height: hp("3.669724770642202%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_509_212: {
    width: wp("75.46666666666667%"),
    minWidth: wp("75.46666666666667%"),
    height: hp("10.321100917431194%"),
    minHeight: hp("10.321100917431194%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("83.25688073394495%")
  },
  View_509_209: {
    width: wp("75.46666666666667%"),
    minWidth: wp("75.46666666666667%"),
    height: hp("10.321100917431194%"),
    minHeight: hp("10.321100917431194%"),
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
  View_509_210: {
    width: wp("25.066666666666666%"),
    minWidth: wp("25.066666666666666%"),
    minHeight: hp("4.587155963302752%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.333333333333336%"),
    top: hp("2.9816513761468%"),
    justifyContent: "flex-start"
  },
  Text_509_210: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  TouchableOpacity_635_150: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("1.3761467889908259%"),
    minHeight: hp("1.3761467889908259%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666666%"),
    top: hp("5.5045871559633035%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_716_184: {
    width: wp("25.866666666666667%"),
    minWidth: wp("25.866666666666667%"),
    height: hp("3.669724770642202%"),
    minHeight: hp("3.669724770642202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.06666666666666%"),
    top: hp("52.981651376146786%")
  },
  View_716_185: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("3.669724770642202%"),
    minHeight: hp("3.669724770642202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_716_186: {
    width: wp("4.266666666666667%"),
    height: hp("3.669724770642202%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_716_190: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    minHeight: hp("3.669724770642202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.200000000000003%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_716_190: {
    color: "rgba(239, 35, 60, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_716_208: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    minHeight: hp("3.211009174311927%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.200000000000003%"),
    top: hp("36.92660550458716%"),
    justifyContent: "flex-start"
  },
  Text_716_208: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 9,
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
