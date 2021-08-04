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
      <View style={styles.View_147_28}>
        <View style={styles.View_147_29} />
      </View>
      <View style={styles.View_147_36}>
        <View style={styles.View_147_32} />
        <View style={styles.View_147_33}>
          <Text style={styles.Text_147_33}>Resend</Text>
        </View>
      </View>
      <View style={styles.View_147_34}>
        <Text style={styles.Text_147_34}>
          Didn’t recieve the email? Check your spam folder or try another email
          address
        </Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_147_37}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("35_181"))
        }
      >
        <Text style={styles.Text_147_37}>Change email</Text>
      </TouchableOpacity>
      <View style={styles.View_543_148}>
        <Text style={styles.Text_543_148}>
          We have sent a password recovery link to your email.
        </Text>
      </View>
      <View style={styles.View_543_149}>
        <Text style={styles.Text_543_149}>Email sent</Text>
      </View>
      <View style={styles.View_543_150}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13ee/ac93/7363bd6da999339ea76a29e194e8ba7b"
          }}
          style={styles.ImageBackground_543_151}
        />
      </View>
      <View style={styles.View_557_124}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc2a/d5b8/9d234e58d59f89d9cdc2bd618c45372c"
          }}
          style={styles.ImageBackground_557_125}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b932/d7af/781925069bb4e5d86d28a64fd79c6586"
          }}
          style={styles.ImageBackground_557_126}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b541/0c2a/691f996061479ab13fd3faba441bdfdf"
          }}
          style={styles.ImageBackground_557_127}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28fe/3d19/717ad199d6c7df86dd6b659a5d6bac73"
          }}
          style={styles.ImageBackground_557_128}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e76e/1afe/e3d76c4b4c3ced4b398989ab67c91827"
          }}
          style={styles.ImageBackground_557_129}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9929/068f/3c8327c57f843e707b6de776a68ec9ad"
          }}
          style={styles.ImageBackground_557_130}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb6b/2f17/f0c7b73e4282040849327e2e522ef756"
          }}
          style={styles.ImageBackground_557_131}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f4c/6ad9/3c6b09b8b80861323ed635bc4ca3ef6a"
          }}
          style={styles.ImageBackground_557_132}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28f9/4b0a/4c2cda0fc71b690fd8c82e3545702ffb"
          }}
          style={styles.ImageBackground_557_133}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/440d/2455/319cf6f6cd16a552441ca707087eea79"
          }}
          style={styles.ImageBackground_557_135}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b772/5b91/304aaea495a7da4b0a746a7a53079f59"
          }}
          style={styles.ImageBackground_557_136}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ee7/c027/87bb6a987562d73ec9de172e111eaad4"
          }}
          style={styles.ImageBackground_557_139}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e517/52a8/748ab8bc58be0276bd0428c34590ea23"
          }}
          style={styles.ImageBackground_557_140}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e517/52a8/748ab8bc58be0276bd0428c34590ea23"
          }}
          style={styles.ImageBackground_557_142}
        />
        <View style={styles.View_557_143}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/785e/83a6/7d7ee3e19ad51d1c45201ba155c12af5"
            }}
            style={styles.ImageBackground_557_144}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2cc1/da47/daea2a88817efc38638d050e21f417c5"
            }}
            style={styles.ImageBackground_557_145}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89de/c78c/9a9be4980efbbf22967490f886496452"
            }}
            style={styles.ImageBackground_557_146}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cdb/44ca/e4ac0ca74bc29940e36ea8437ce358f6"
            }}
            style={styles.ImageBackground_557_147}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82b5/b284/a23f7358dd3cf005cb0356242a172fce"
            }}
            style={styles.ImageBackground_557_148}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b17f/a0e0/ac664573017bdb25156c315563bacb4d"
            }}
            style={styles.ImageBackground_557_149}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f35/f54d/192b34cf070d0326443e03f4ab817f40"
            }}
            style={styles.ImageBackground_557_150}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c530/1efd/3c8b28f1ca7ecfd91be0483b8310d6ad"
            }}
            style={styles.ImageBackground_557_151}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a6c/2cc0/45a85535db736a87c3beff41939a78fd"
            }}
            style={styles.ImageBackground_557_152}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98f5/f5dd/81c16fcd3bd2fa3d1299844556a20888"
            }}
            style={styles.ImageBackground_557_155}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebbf/0de8/da8b8249a1dce15a8f3d7bd46d8ca839"
            }}
            style={styles.ImageBackground_557_156}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc4e/3ad9/e787512541c1214df6dc7ff55114c5ff"
            }}
            style={styles.ImageBackground_557_157}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ee7/c027/87bb6a987562d73ec9de172e111eaad4"
            }}
            style={styles.ImageBackground_557_160}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_147_28: {
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
  View_147_29: {
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
  View_147_36: {
    width: wp("82.39999999999999%"),
    minWidth: wp("82.39999999999999%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("56.284153005464475%")
  },
  View_147_32: {
    width: wp("82.39999999999999%"),
    minWidth: wp("82.39999999999999%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
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
  View_147_33: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.333333333333336%"),
    top: hp("1.9125683060109324%"),
    justifyContent: "flex-start"
  },
  Text_147_33: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_147_34: {
    width: wp("78.13333333333333%"),
    minWidth: wp("78.13333333333333%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333334%"),
    top: hp("99.72677595628416%"),
    justifyContent: "flex-start"
  },
  Text_147_34: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  TouchableOpacity_147_37: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.4%"),
    top: hp("66.39344262295081%"),
    justifyContent: "flex-start"
  },
  Text_147_37: {
    color: "rgba(23, 72, 226, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_543_148: {
    width: wp("76.53333333333333%"),
    minWidth: wp("76.53333333333333%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("16.530054644808743%"),
    justifyContent: "flex-start"
  },
  Text_543_148: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_543_149: {
    width: wp("22.933333333333334%"),
    minWidth: wp("22.933333333333334%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.666666666666664%"),
    top: hp("10.245901639344263%"),
    justifyContent: "flex-start"
  },
  Text_543_149: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_543_150: {
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
  ImageBackground_543_151: {
    width: wp("2.736133066813151%"),
    height: hp("2.4590111821075604%"),
    top: hp("0.00010214216722381764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0319661458333327%")
  },
  View_557_124: {
    width: wp("40%"),
    height: hp("20.491803278688526%"),
    top: hp("28.688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.133333333333333%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_557_125: {
    flexGrow: 1,
    width: wp("33.60577596028646%"),
    height: hp("10.71197426384264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.354231770833337%"),
    top: hp("5.014457077276514%")
  },
  ImageBackground_557_126: {
    flexGrow: 1,
    width: wp("2.4523783365885414%"),
    height: hp("1.2796615642276619%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.887695312499993%"),
    top: hp("7.871388086204323%")
  },
  ImageBackground_557_127: {
    flexGrow: 1,
    width: wp("2.164642842610677%"),
    height: hp("1.0701799653266948%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.354166666666664%"),
    top: hp("3.087436696870732%")
  },
  ImageBackground_557_128: {
    flexGrow: 1,
    width: wp("5.624266052246093%"),
    height: hp("2.7376758596284794%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.482486979166666%"),
    top: hp("3.196341092469261%")
  },
  ImageBackground_557_129: {
    flexGrow: 1,
    width: wp("1.5995503743489583%"),
    height: hp("1.0410486023282743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.02083333333333%"),
    top: hp("7.928992099449285%")
  },
  ImageBackground_557_130: {
    flexGrow: 1,
    width: wp("0.5101053873697916%"),
    height: hp("0.8277575174967448%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.389192708333333%"),
    top: hp("8.17131917984759%")
  },
  ImageBackground_557_131: {
    flexGrow: 1,
    width: wp("0.576025390625%"),
    height: hp("0.6666225162360186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.459244791666663%"),
    top: hp("8.021653805925549%")
  },
  ImageBackground_557_132: {
    flexGrow: 1,
    width: wp("18.177242024739584%"),
    height: hp("3.2791174174657933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.630208333333336%"),
    top: hp("8.686315817911119%")
  },
  ImageBackground_557_133: {
    flexGrow: 1,
    width: wp("17.523722330729168%"),
    height: hp("3.182966722165301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.617773437499999%"),
    top: hp("8.385767702196464%")
  },
  ImageBackground_557_135: {
    flexGrow: 1,
    width: wp("2.164642842610677%"),
    height: hp("0.9512932574162717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.354166666666664%"),
    top: hp("3.087436696870732%")
  },
  ImageBackground_557_136: {
    flexGrow: 1,
    width: wp("6.080000305175782%"),
    height: hp("2.9508293652143633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.293359375000001%"),
    top: hp("3.0737621536671824%")
  },
  ImageBackground_557_139: {
    flexGrow: 1,
    width: wp("0.37333221435546876%"),
    height: hp("0.19125756018800164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.653385416666666%"),
    top: hp("4.234972677595625%")
  },
  ImageBackground_557_140: {
    flexGrow: 1,
    width: wp("0.5866668701171875%"),
    height: hp("0.24590153511756105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.706640624999999%"),
    top: hp("4.562840696241036%")
  },
  ImageBackground_557_142: {
    flexGrow: 1,
    width: wp("0.5866668701171875%"),
    height: hp("0.24590153511756105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.706640624999999%"),
    top: hp("4.562840696241036%")
  },
  View_557_143: {
    flexGrow: 1,
    width: wp("32.96336873372396%"),
    height: hp("10.934332550549117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.786653645833333%"),
    top: hp("3.0737621536671824%")
  },
  ImageBackground_557_144: {
    width: wp("2.0632344563802083%"),
    height: hp("1.5642958260624789%"),
    top: hp("4.911670789041157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.18541666666666%")
  },
  ImageBackground_557_145: {
    width: wp("2.4523783365885414%"),
    height: hp("1.2796615642276619%"),
    top: hp("4.797625932537141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.101106770833333%")
  },
  ImageBackground_557_146: {
    width: wp("32.96336873372396%"),
    height: hp("1.6726113407989667%"),
    top: hp("7.4863454683230835%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_557_147: {
    width: wp("10.179178873697916%"),
    height: hp("1.224278100852758%"),
    top: hp("9.71005549196337%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.045052083333338544%")
  },
  ImageBackground_557_148: {
    width: wp("7.341482543945313%"),
    height: hp("0.7745523921778945%"),
    top: hp("10.00723500069373%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.781119791666669%")
  },
  ImageBackground_557_149: {
    width: wp("18.50938720703125%"),
    height: hp("3.734973740707981%"),
    top: hp("5.219894159035601%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.644921875000001%")
  },
  ImageBackground_557_150: {
    width: wp("3.3140279134114583%"),
    height: hp("0.6841398979145321%"),
    top: hp("8.044938050984033%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.287369791666663%")
  },
  ImageBackground_557_151: {
    width: wp("5.867415364583333%"),
    height: hp("1.4098725032285262%"),
    top: hp("6.546933533715421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.479361979166669%")
  },
  ImageBackground_557_152: {
    width: wp("2.554549153645833%"),
    height: hp("1.3631664338659069%"),
    top: hp("6.633433357613978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.872005208333334%")
  },
  ImageBackground_557_155: {
    width: wp("1.7670247395833334%"),
    height: hp("0.958041415188482%"),
    top: hp("6.5029248513810565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.797786458333334%")
  },
  ImageBackground_557_156: {
    width: wp("2.164642842610677%"),
    height: hp("0.9512916940157532%"),
    top: hp("0.01367454320354966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5675130208333314%")
  },
  ImageBackground_557_157: {
    width: wp("6.080000813802084%"),
    height: hp("2.9508293652143633%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5067057291666686%")
  },
  ImageBackground_557_160: {
    width: wp("0.37333221435546876%"),
    height: hp("0.19125756018800164%"),
    top: hp("1.1612105239284425%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8667317708333329%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
