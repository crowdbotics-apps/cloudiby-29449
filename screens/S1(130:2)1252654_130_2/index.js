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
      <View style={styles.View_130_18}>
        <View style={styles.View_130_19} />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_130_21}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("29_3"))
        }
      >
        <Text style={styles.Text_130_21}>Skip </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_321_141}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("130_28"))
        }
      >
        <Text style={styles.Text_321_141}>Next</Text>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8dd/41da/9087bb127cebd9bb4307753dc8c16c58"
        }}
        style={styles.ImageBackground_130_26}
      />
      <View style={styles.View_137_9}>
        <Text style={styles.Text_137_9}>
          Welcome to Cloudiby, we help you store and manage your files the 21st
          century way.{" "}
        </Text>
      </View>
      <View style={styles.View_321_143}>
        <Text style={styles.Text_321_143}>Cloudiby</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_358_2}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("130_28"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8cb/473a/ad7fae975aa66214fb48862d71fb3cad"
          }}
          style={styles.ImageBackground_358_3}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/263c/e564/3d949fde76013fecc4b419ce9d397fc4"
          }}
          style={styles.ImageBackground_358_4}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24e9/5acd/9338e6326df9f8c262b35eaf19b4e9a5"
          }}
          style={styles.ImageBackground_358_5}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9e6/875e/850ef7c420f7b874e6ff0862eb4c68bb"
          }}
          style={styles.ImageBackground_358_6}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9991/e5bc/9a6e63670133b8959ec1658c8e6988d6"
          }}
          style={styles.ImageBackground_358_7}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8c5/19b1/5d08f19f408c754eeb6daf8eae463dd6"
          }}
          style={styles.ImageBackground_358_16}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a55a/2f7b/390057b6f2665907295916440b7a7f44"
          }}
          style={styles.ImageBackground_358_17}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cef/c421/2c64523fb11fe4be3c18ecac3295d803"
          }}
          style={styles.ImageBackground_358_18}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cb9/8b4e/5b084e5dd3d3485038ecd737b1aed923"
          }}
          style={styles.ImageBackground_358_19}
        />
        <View style={styles.View_358_20}>
          <View style={styles.View_358_21}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c135/e42d/84e92d4c5e6dc300a76520dd0e4b64fe"
              }}
              style={styles.ImageBackground_358_22}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e888/4faf/27389b32375cbc46994c8941da21bcad"
              }}
              style={styles.ImageBackground_358_37}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df49/cefa/abd86fb7898e756a777aba3be96c8f3d"
              }}
              style={styles.ImageBackground_358_41}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/959f/9737/0e32b0d1cb6bb2e298b46b1fa910c70c"
              }}
              style={styles.ImageBackground_358_42}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/959f/9737/0e32b0d1cb6bb2e298b46b1fa910c70c"
              }}
              style={styles.ImageBackground_358_43}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2929/58a1/1d564a70588207b0a4d155780509eaa6"
              }}
              style={styles.ImageBackground_358_44}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1590/ed20/6aca4cd25ada1af370830a27583bb557"
              }}
              style={styles.ImageBackground_358_45}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ad1/42ea/14e9a17ea7dae6b34490f5d069987444"
              }}
              style={styles.ImageBackground_358_46}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d516/1343/336a926ce36983a639ec62e84081f68d"
              }}
              style={styles.ImageBackground_358_47}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e81c/720b/9c5199ac3c17fff081593495d1e08656"
            }}
            style={styles.ImageBackground_358_48}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4464/9335/9a55c5b9083e5eb60d3b7ca756ee9c7e"
            }}
            style={styles.ImageBackground_358_49}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42a0/2ce1/f2f773397bafecee8d921c0fecb11f0d"
            }}
            style={styles.ImageBackground_358_50}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef32/3de0/0255af74cef9845277307871d040b19c"
          }}
          style={styles.ImageBackground_358_51}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/869b/20b4/eb24f7ec731ea3d331cbff228ff5f86a"
          }}
          style={styles.ImageBackground_358_52}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/337f/e2b4/ee70fa6c83dc8a8c4d7bced8e17084f9"
          }}
          style={styles.ImageBackground_358_56}
        />
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_130_18: {
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
  View_130_19: {
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
  TouchableOpacity_130_21: {
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
  Text_130_21: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  TouchableOpacity_321_141: {
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
  Text_321_141: {
    color: "rgba(23, 72, 226, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  ImageBackground_130_26: {
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
  View_137_9: {
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
  Text_137_9: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_321_143: {
    width: wp("32.266666666666666%"),
    minWidth: wp("32.266666666666666%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.86666666666667%"),
    top: hp("60.245901639344254%"),
    justifyContent: "flex-start"
  },
  Text_321_143: {
    color: "rgba(23, 72, 226, 1)",
    fontSize: 23,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  TouchableOpacity_358_2: {
    width: wp("66.66666666666666%"),
    height: hp("34.15300546448087%"),
    top: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_358_3: {
    flexGrow: 1,
    width: wp("53.333333333333336%"),
    height: hp("21.690737614866162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666671%"),
    top: hp("6.1930776293811896%")
  },
  ImageBackground_358_4: {
    flexGrow: 1,
    width: wp("22.793772379557293%"),
    height: hp("6.905783981573387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.095182291666667%"),
    top: hp("17.85194105137893%")
  },
  ImageBackground_358_5: {
    flexGrow: 1,
    width: wp("3.5262410481770834%"),
    height: hp("2.2053411098125855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.17643229166666%"),
    top: hp("17.752900670786374%")
  },
  ImageBackground_358_6: {
    flexGrow: 1,
    width: wp("16.886820475260418%"),
    height: hp("11.088403587132856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.803385416666664%"),
    top: hp("7.962786565061474%")
  },
  ImageBackground_358_7: {
    flexGrow: 1,
    width: wp("13.049143473307293%"),
    height: hp("7.08732292300365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.483984375%"),
    top: hp("10.89698499669143%")
  },
  ImageBackground_358_16: {
    flexGrow: 1,
    width: wp("9.416943359375%"),
    height: hp("9.951888537797773%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.80221354166667%"),
    top: hp("8.518510828904112%")
  },
  ImageBackground_358_17: {
    flexGrow: 1,
    width: wp("1.9457478841145834%"),
    height: hp("1.4801953008266093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.37721354166666%"),
    top: hp("17.402065256254268%")
  },
  ImageBackground_358_18: {
    flexGrow: 1,
    width: wp("8.475435384114585%"),
    height: hp("9.332963286853227%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.86380208333333%"),
    top: hp("17.107420540898225%")
  },
  ImageBackground_358_19: {
    flexGrow: 1,
    width: wp("0.9120686848958334%"),
    height: hp("0.458953940803236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.57239583333334%"),
    top: hp("26.82697733894723%")
  },
  View_358_20: {
    flexGrow: 1,
    width: wp("49.68888753255209%"),
    height: hp("26.593726319693477%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333336%"),
    top: hp("3.597528426373593%")
  },
  View_358_21: {
    width: wp("49.68888753255209%"),
    height: hp("26.5937284042275%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_358_22: {
    width: wp("43.733280436197916%"),
    height: hp("24.316860678417434%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_358_37: {
    width: wp("27.55555419921875%"),
    height: hp("3.278688524590164%"),
    top: hp("23.04181583592149%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.44440104166667%")
  },
  ImageBackground_358_41: {
    width: wp("20.266668701171874%"),
    height: hp("0.1821465830985314%"),
    top: hp("26.366043090820312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.644401041666665%")
  },
  ImageBackground_358_42: {
    width: wp("8.799999999999999%"),
    height: hp("0.18215075216658128%"),
    top: hp("26.41157765206092%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.688932291666664%")
  },
  ImageBackground_358_43: {
    width: wp("8.799995930989583%"),
    height: hp("0.18215075216658128%"),
    top: hp("26.41157765206092%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.88893229166666%")
  },
  ImageBackground_358_44: {
    width: wp("1.15606689453125%"),
    height: hp("0.16553232578631957%"),
    top: hp("2.470531359396343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.19101562499999%")
  },
  ImageBackground_358_45: {
    width: wp("0.24131266276041669%"),
    height: hp("0.27445496105756917%"),
    top: hp("2.913828365138322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.647395833333334%")
  },
  ImageBackground_358_46: {
    width: wp("0.7111083984375%"),
    height: hp("0.4098360655737705%"),
    top: hp("25.364220207506186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.88893229166666%")
  },
  ImageBackground_358_47: {
    width: wp("0.7999918619791666%"),
    height: hp("0.36430150433316255%"),
    top: hp("25.364220207506186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.488932291666668%")
  },
  ImageBackground_358_48: {
    width: wp("4.14072265625%"),
    height: hp("0.9397574461222998%"),
    top: hp("4.720752486765711%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.139453125%")
  },
  ImageBackground_358_49: {
    width: wp("26.400299072265625%"),
    height: hp("1.092008163368767%"),
    top: hp("23.64387929113836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.82291666666666%")
  },
  ImageBackground_358_50: {
    width: wp("0.7999989827473958%"),
    height: hp("0.45537479588242824%"),
    top: hp("18.39700709275209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8444010416666643%")
  },
  ImageBackground_358_51: {
    flexGrow: 1,
    width: wp("1.2444417317708334%"),
    height: hp("0.6375229423814784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.733333333333334%"),
    top: hp("7.058286406303367%")
  },
  ImageBackground_358_52: {
    flexGrow: 1,
    width: wp("8.175537109375%"),
    height: hp("2.5108775154488985%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.592187499999994%"),
    top: hp("8.819192354796364%")
  },
  ImageBackground_358_56: {
    flexGrow: 1,
    width: wp("8.538549804687499%"),
    height: hp("6.358646955646452%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.210416666666674%"),
    top: hp("11.648021760534068%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
