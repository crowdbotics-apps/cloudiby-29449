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
      <View style={styles.View_130_92}>
        <View style={styles.View_130_93} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b944/33e0/127822231ccfcaa138f3153089695f3e"
        }}
        style={styles.ImageBackground_130_100}
      />
      <View style={styles.View_139_4}>
        <Text style={styles.Text_139_4}>
          Your files are most secure and easily accessibly anywhere, from any
          device
        </Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_297_2}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("130_52"))
        }
      >
        <View style={styles.View_297_3}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2813/d72b/26879eb4dab7b89f4d13b092df6218b3"
            }}
            style={styles.ImageBackground_297_4}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9dcd/343b/276020737199a6bf21d820e1af360127"
            }}
            style={styles.ImageBackground_297_5}
          />
          <View style={styles.View_297_6}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/233c/15a9/01da30aa056400b0631a31aba1daf19d"
              }}
              style={styles.ImageBackground_297_7}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf53/fa2b/a2c60db902517813a447936ffd1d928e"
              }}
              style={styles.ImageBackground_297_10}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf1d/9713/a1d0ccb6c32da47e8bf447bf1354c120"
              }}
              style={styles.ImageBackground_297_13}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da1b/3d35/2de11b991de1ea8efeb261e839149492"
            }}
            style={styles.ImageBackground_297_16}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5da3/cc6f/12683fdb59d961a6eafff3e3f5df6f6d"
            }}
            style={styles.ImageBackground_297_19}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4744/be9d/49fbfcf26ffd6159a3f29231a0b707ee"
            }}
            style={styles.ImageBackground_297_20}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/239f/e7bd/ca49dbfc4a3b127c09547ec8b5471fc9"
            }}
            style={styles.ImageBackground_297_21}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/239f/e7bd/ca49dbfc4a3b127c09547ec8b5471fc9"
            }}
            style={styles.ImageBackground_297_22}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba63/45d5/8130e9dd09ca1cda3e609345a521a625"
            }}
            style={styles.ImageBackground_297_23}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b5e/5c1c/46bddc94c094aa881e2e75c69fac5664"
            }}
            style={styles.ImageBackground_297_24}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0673/dad9/ceca4944f211031e699abfb8bc43a519"
            }}
            style={styles.ImageBackground_297_25}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb43/fa70/3857a951d0ae6effd4c64ac815a04eae"
            }}
            style={styles.ImageBackground_297_28}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf80/9a80/5cd8d4b84c2156d601c4d11a2b5f46df"
            }}
            style={styles.ImageBackground_297_29}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f77/ceeb/cc58fee4ba777b3eb8613c906040c409"
            }}
            style={styles.ImageBackground_297_30}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f782/c438/31341218a509875601485187bd49d734"
            }}
            style={styles.ImageBackground_297_31}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12ed/9e0e/106069922a045c0294c26e6b626f2ecd"
            }}
            style={styles.ImageBackground_297_32}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02d3/f73e/e1faa12ae9b7d7bd205abbd0c587e762"
            }}
            style={styles.ImageBackground_297_33}
          />
          <View style={styles.View_297_34}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2c1/22c0/bdff25bfefc12573fc2588f5e9aab318"
              }}
              style={styles.ImageBackground_297_35}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c089/a7e7/33b36de464a7249a821c5eeb33cb6fcf"
              }}
              style={styles.ImageBackground_297_38}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cba2/352e/7fbd3dfebddca26eb5990a55fbd00971"
              }}
              style={styles.ImageBackground_297_41}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfec/372e/bf33dc607b0429aa5a57d478487eda27"
              }}
              style={styles.ImageBackground_297_44}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de47/a13e/d4fbe4b9862cb802395da17dae906655"
              }}
              style={styles.ImageBackground_297_47}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b57/cf2b/19832ef83e7deda1ae201d5eb80266a0"
              }}
              style={styles.ImageBackground_297_50}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1b9/eca4/82266a8b04e48248e56a4a221d95f853"
              }}
              style={styles.ImageBackground_297_53}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1b9/eca4/82266a8b04e48248e56a4a221d95f853"
              }}
              style={styles.ImageBackground_297_56}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d79/9eaf/ed2c986af2705e702f491c9b75e01c1e"
              }}
              style={styles.ImageBackground_297_59}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7758/d913/53df1145105a0d4fec0d60ebb005d560"
              }}
              style={styles.ImageBackground_297_62}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ebc/1bac/f919fdc3feace098e819a9bad806fc34"
              }}
              style={styles.ImageBackground_297_65}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51cc/93cc/79bf3bdeab5ac26ebd71479f2e5e9f90"
              }}
              style={styles.ImageBackground_297_66}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1b9/eca4/82266a8b04e48248e56a4a221d95f853"
            }}
            style={styles.ImageBackground_297_67}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ec/a93b/f195e05e58882c6bf7b336a4ea8d92ef"
            }}
            style={styles.ImageBackground_297_70}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a77e/d1c6/28e3aa6ed48a469fe3a499383f9c1f8d"
            }}
            style={styles.ImageBackground_297_71}
          />
          <View style={styles.View_297_74}>
            <View style={styles.View_297_75}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d994/c349/b9a2c0b90db86805aaa0f8d20a0d4318"
                }}
                style={styles.ImageBackground_297_76}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c67/a083/889ea5b4a01c5a6f98992b48f02ccd27"
                }}
                style={styles.ImageBackground_297_79}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5621/51d8/2f2c8dfff426429ded95176e4b699b20"
                }}
                style={styles.ImageBackground_297_82}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64fb/3938/8bcef38244f83c9e7e1a84be37c9d4e9"
                }}
                style={styles.ImageBackground_297_85}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a361/589c/08611721e37dcfdfcdcc873775e5b6ca"
            }}
            style={styles.ImageBackground_297_88}
          />
          <View style={styles.View_297_89}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11c5/947e/e230c9d1e63e979b8f219637c8226aa3"
              }}
              style={styles.ImageBackground_297_90}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00f6/c15d/70166138dc98d3e3c925dceebceed8ae"
              }}
              style={styles.ImageBackground_297_93}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/488d/a139/f277c263632a6abc6dd7a612db72ea92"
              }}
              style={styles.ImageBackground_297_94}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d853/e42f/8a28fe0e8f8a45096bd133db28960750"
              }}
              style={styles.ImageBackground_297_95}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bc0/71e5/938e7660badf03cd709e9d2bf02ed379"
              }}
              style={styles.ImageBackground_297_96}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/518b/c3af/3b2a65180fbb4befadd3e47d4eef6df2"
            }}
            style={styles.ImageBackground_297_97}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_328_336}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("29_3"))
        }
      >
        <View style={styles.View_309_4} />
        <View style={styles.View_130_94}>
          <Text style={styles.Text_130_94}>Get started </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_321_267}>
        <Text style={styles.Text_321_267}>Security</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_130_92: {
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
  View_130_93: {
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
  ImageBackground_130_100: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.86666666666667%"),
    top: hp("87.56830601092896%")
  },
  View_139_4: {
    width: wp("82.39999999999999%"),
    minWidth: wp("82.39999999999999%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("70.3551912568306%"),
    justifyContent: "flex-start"
  },
  Text_139_4: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  TouchableOpacity_297_2: {
    width: wp("66.66666666666666%"),
    height: hp("34.15300546448087%"),
    top: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_297_3: {
    flexGrow: 1,
    width: wp("56.27548828125%"),
    height: hp("21.465847661586405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.155598958333336%"),
    top: hp("6.329689651239111%")
  },
  ImageBackground_297_4: {
    width: wp("56.27548828125%"),
    height: hp("4.552530590953722%"),
    top: hp("16.263365615261062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_297_5: {
    width: wp("52.79270833333334%"),
    height: hp("20.791179886281164%"),
    top: hp("0.6746698598392733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7623697916666679%")
  },
  View_297_6: {
    width: wp("2.615244547526042%"),
    height: hp("1.8339013792777974%"),
    top: hp("2.8274473596791765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.645703124999997%")
  },
  ImageBackground_297_7: {
    width: wp("0.6194498697916667%"),
    height: hp("0.43843066106077105%"),
    top: hp("1.0432279826513415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3764322916666707%")
  },
  ImageBackground_297_10: {
    width: wp("2.615244547526042%"),
    height: hp("1.5698260948306224%"),
    top: hp("0.26407502388042303%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_297_13: {
    width: wp("2.344435119628906%"),
    height: hp("1.188506063867788%"),
    top: hp("-0.1397409074293421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.4515624999999943%")
  },
  ImageBackground_297_16: {
    width: wp("56.27548828125%"),
    height: hp("4.552530590953722%"),
    top: hp("16.263365615261062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_297_19: {
    width: wp("28.879390462239584%"),
    height: hp("17.815457536874575%"),
    top: hp("0.24431364132407296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.916406250000001%")
  },
  ImageBackground_297_20: {
    width: wp("1.5638102213541667%"),
    height: hp("0.1115840640875811%"),
    top: hp("0.1821528367006131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.56223958333333%")
  },
  ImageBackground_297_21: {
    width: wp("0.4330057779947917%"),
    height: hp("0.21986205721162055%"),
    top: hp("16.467141323402284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.020442708333334%")
  },
  ImageBackground_297_22: {
    width: wp("0.4330037434895833%"),
    height: hp("0.21986622627967042%"),
    top: hp("17.34666459547366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.11875%")
  },
  ImageBackground_297_23: {
    width: wp("15.637141927083334%"),
    height: hp("16.626583161901255%"),
    top: hp("1.4088552506243666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.15859375%")
  },
  ImageBackground_297_24: {
    width: wp("0.3339436848958333%"),
    height: hp("0.21983287373527152%"),
    top: hp("16.66673128722144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.790234375%")
  },
  ImageBackground_297_25: {
    width: wp("1.00145263671875%"),
    height: hp("0.5619736968493853%"),
    top: hp("16.49567442513555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.456640625%")
  },
  ImageBackground_297_28: {
    width: wp("25.178912353515624%"),
    height: hp("15.906970748484461%"),
    top: hp("1.2305191957234065%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.875260416666663%")
  },
  ImageBackground_297_29: {
    width: wp("5.253243001302083%"),
    height: hp("5.4165209577383235%"),
    top: hp("7.341422409307764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.07578125%")
  },
  ImageBackground_297_30: {
    width: wp("1.8561767578125%"),
    height: hp("1.755121366573813%"),
    top: hp("10.291442454186953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.377734374999996%")
  },
  ImageBackground_297_31: {
    width: wp("2.625494384765625%"),
    height: hp("1.4498684575648906%"),
    top: hp("7.241756668507737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.586588541666664%")
  },
  ImageBackground_297_32: {
    width: wp("1.5360677083333334%"),
    height: hp("2.156206037177414%"),
    top: hp("1.405538756990694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.403515624999997%")
  },
  ImageBackground_297_33: {
    width: wp("6.81500244140625%"),
    height: hp("1.1654994526847464%"),
    top: hp("9.329892768234505%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.62669270833333%")
  },
  View_297_34: {
    width: wp("29.818003336588543%"),
    height: hp("19.75795349788145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.454687499999999%")
  },
  ImageBackground_297_35: {
    width: wp("29.818003336588543%"),
    height: hp("18.30411400299906%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_297_38: {
    width: wp("25.178914388020836%"),
    height: hp("15.906970748484461%"),
    top: hp("1.2305191957234065%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4205729166666643%")
  },
  ImageBackground_297_41: {
    width: wp("1.10067138671875%"),
    height: hp("0.5619340907029116%"),
    top: hp("0.45250230799607394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7342447916666686%")
  },
  ImageBackground_297_44: {
    width: wp("1.10059814453125%"),
    height: hp("0.6750544563668673%"),
    top: hp("1.3468966458013156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0572916666666714%")
  },
  ImageBackground_297_47: {
    width: wp("1.1006754557291667%"),
    height: hp("0.5619340907029116%"),
    top: hp("0.45250230799607394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.29283854166667%")
  },
  ImageBackground_297_50: {
    width: wp("1.4930739084879556%"),
    height: hp("0.764633137020257%"),
    top: hp("1.2308214531570236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.81302083333334%")
  },
  ImageBackground_297_53: {
    width: wp("1.54813601175944%"),
    height: hp("0.7928526466661463%"),
    top: hp("16.168440104833724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.984375%")
  },
  ImageBackground_297_56: {
    width: wp("1.5481433868408203%"),
    height: hp("0.7928503667070566%"),
    top: hp("17.047967545973147%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.082812500000003%")
  },
  ImageBackground_297_59: {
    width: wp("1.7408949534098308%"),
    height: hp("0.8978651520984421%"),
    top: hp("17.06667415431289%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.544010416666666%")
  },
  ImageBackground_297_62: {
    width: wp("1.00145263671875%"),
    height: hp("0.5619736968493853%"),
    top: hp("16.49567442513555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.001953125%")
  },
  ImageBackground_297_65: {
    width: wp("5.147526041666667%"),
    height: hp("1.771178532167862%"),
    top: hp("17.98677496571359%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3360677083333314%")
  },
  ImageBackground_297_66: {
    width: wp("4.852490234375%"),
    height: hp("1.4953404827847507%"),
    top: hp("18.040439209651428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.01328125%")
  },
  ImageBackground_297_67: {
    width: wp("1.5481433868408203%"),
    height: hp("0.7928503667070566%"),
    top: hp("17.047967545973147%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.537500000000001%")
  },
  ImageBackground_297_70: {
    width: wp("0.8003824869791667%"),
    height: hp("0.41604172336599216%"),
    top: hp("17.307562906233994%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.46901041666667%")
  },
  ImageBackground_297_71: {
    width: wp("4.023067220052083%"),
    height: hp("2.183324261441257%"),
    top: hp("6.884880274371373%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.26979166666667%")
  },
  View_297_74: {
    width: wp("11.006982421875%"),
    minWidth: wp("11.006982421875%"),
    height: hp("5.484345441307526%"),
    minHeight: hp("5.484345441307526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.32213541666666%"),
    top: hp("7.273600010272585%")
  },
  View_297_75: {
    width: wp("11.006982421875%"),
    height: hp("5.484345441307526%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_297_76: {
    width: wp("7.4810729980468755%"),
    height: hp("4.0574349992262215%"),
    top: hp("0.6532054129845477%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7694010416666686%")
  },
  ImageBackground_297_79: {
    width: wp("11.006982421875%"),
    height: hp("5.484345441307526%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_297_82: {
    width: wp("7.151261393229166%"),
    height: hp("3.9183757344230274%"),
    top: hp("0.7168295604935082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9302083333333329%")
  },
  ImageBackground_297_85: {
    width: wp("2.3623819986979164%"),
    height: hp("1.1468136896852588%"),
    top: hp("2.1656390747737433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.510807291666673%")
  },
  ImageBackground_297_88: {
    width: wp("8.580216471354166%"),
    height: hp("1.6549199005293718%"),
    top: hp("8.869815263591828%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.144791666666663%")
  },
  View_297_89: {
    width: wp("8.580220540364584%"),
    height: hp("1.6549219850633967%"),
    top: hp("8.893478893842858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.139583333333334%")
  },
  ImageBackground_297_90: {
    width: wp("8.580220540364584%"),
    height: hp("1.6549219850633967%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_297_93: {
    width: wp("0.5637044270833333%"),
    height: hp("1.572816358889387%"),
    top: hp("0.019444533384564977%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5863281249999943%")
  },
  ImageBackground_297_94: {
    width: wp("0.6017374674479167%"),
    height: hp("1.5467471763735912%"),
    top: hp("0.055832159323770725%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.397395833333334%")
  },
  ImageBackground_297_95: {
    width: wp("0.9313069661458333%"),
    height: hp("0.5771345128127134%"),
    top: hp("0.5335198074090641%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8485677083333343%")
  },
  ImageBackground_297_96: {
    width: wp("1.1210042317708333%"),
    height: hp("0.5624625200782317%"),
    top: hp("0.5130455142161878%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.507942708333331%")
  },
  ImageBackground_297_97: {
    width: wp("0.98134765625%"),
    height: hp("0.527466320600666%"),
    top: hp("9.424593148987153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.17174479166666%")
  },
  TouchableOpacity_328_336: {
    width: wp("82.39999999999999%"),
    minWidth: wp("82.39999999999999%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("95.21857923497268%")
  },
  View_309_4: {
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
  View_130_94: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.53333333333334%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_130_94: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_321_267: {
    width: wp("30.133333333333333%"),
    minWidth: wp("30.133333333333333%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333333%"),
    top: hp("60.245901639344254%"),
    justifyContent: "flex-start"
  },
  Text_321_267: {
    color: "rgba(23, 72, 226, 1)",
    fontSize: 23,
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
