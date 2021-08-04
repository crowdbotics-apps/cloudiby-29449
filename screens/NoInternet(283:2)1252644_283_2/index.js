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
      <View style={styles.View_283_19}>
        <View style={styles.View_283_20} />
      </View>
      <View style={styles.View_304_312}>
        <Text style={styles.Text_304_312}>
          Make sure Wi-Fi or mobile data is turned on, then try again.
        </Text>
      </View>
      <View style={styles.View_333_337}>
        <Text style={styles.Text_333_337}>Snap!!</Text>
      </View>
      <View style={styles.View_343_2}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba30/2a72/b80801c276e9a93f42aa24c905294b5e"
          }}
          style={styles.ImageBackground_343_3}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d02/2988/b85e6afef4c0065a1aca06a2e50b99f8"
          }}
          style={styles.ImageBackground_343_4}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f85/d832/68ce9c490d03adba2b613c23b56aff3a"
          }}
          style={styles.ImageBackground_343_5}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17a1/2630/46d9f41143e7c1f899001895cc62f856"
          }}
          style={styles.ImageBackground_343_6}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b25/72cd/28343bf31609c79458ce132203c5e538"
          }}
          style={styles.ImageBackground_343_7}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a4/9994/c11cf00fa6b629ef342d5157db11d088"
          }}
          style={styles.ImageBackground_343_11}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/340b/f2d0/2fd548a9d451906b5e867a97a2725e8a"
          }}
          style={styles.ImageBackground_343_12}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bef/2791/aee970027fb9abdc92b36d98dce8df31"
          }}
          style={styles.ImageBackground_343_13}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41a5/de45/da364dcd445318f2c30287b734a03903"
          }}
          style={styles.ImageBackground_343_14}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24d7/ebe2/abb93242090ddd3cd5f9694de2cc7cc8"
          }}
          style={styles.ImageBackground_343_15}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24d7/ebe2/abb93242090ddd3cd5f9694de2cc7cc8"
          }}
          style={styles.ImageBackground_343_16}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eaf0/651e/5ae64a7d1a6d19f5776aee23220d694a"
          }}
          style={styles.ImageBackground_343_17}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac66/3c6b/d46a0f81f0307d4784d05182c404f5fc"
          }}
          style={styles.ImageBackground_343_18}
        />
        <View style={styles.View_343_22}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6931/aef4/90fb22700c0f50f95d03679d5040e0bd"
            }}
            style={styles.ImageBackground_343_23}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce9c/a509/43b64756a853d3fd5f6f7a9502b5fba5"
            }}
            style={styles.ImageBackground_343_24}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de84/d986/bc6517ba00f792d6d2fdb00852124ea9"
            }}
            style={styles.ImageBackground_343_25}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb23/0230/3a5a696ebbf9b4ab8d94b0ebcb086547"
            }}
            style={styles.ImageBackground_343_28}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc74/664f/39bcd758041e105d04b7eeb1ac1f07fe"
            }}
            style={styles.ImageBackground_343_29}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b37/6e6a/b9a6824aaad0f6c5ec00cbcaba96fc18"
            }}
            style={styles.ImageBackground_343_30}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5943/86d8/9977e6dd50f31e944cfcc4ece10d3693"
            }}
            style={styles.ImageBackground_343_31}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3346/ef1a/b0324afa6201b230a5f14281e88d2fb2"
            }}
            style={styles.ImageBackground_343_32}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c618/aa4b/7f3719f17d2130994964c2ad6d99514c"
            }}
            style={styles.ImageBackground_343_33}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3346/ef1a/b0324afa6201b230a5f14281e88d2fb2"
            }}
            style={styles.ImageBackground_343_34}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8a9/362f/cf43d8ce7b792ff60385d711b9b10133"
            }}
            style={styles.ImageBackground_343_35}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c88b/4fa9/bd531577440f5854a0ac060688707796"
            }}
            style={styles.ImageBackground_343_36}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f26/6f1d/7e58049df0166958180f8df79a9a3a4b"
            }}
            style={styles.ImageBackground_343_37}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3533/efed/9a4beefff10e1aae45b0a92940d019cb"
            }}
            style={styles.ImageBackground_343_38}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6c8/5b36/847d2bee30a8d43c8120c9de98fa78f8"
            }}
            style={styles.ImageBackground_343_39}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e97/9611/e315fcaa47fc8656eb1e9eb9fe7a1eaa"
            }}
            style={styles.ImageBackground_343_55}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4de7/4234/5ea8d48db95ad949086635c250f91794"
            }}
            style={styles.ImageBackground_343_56}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7650/c8ea/e0329e1207d0a6db76edd5fef555711d"
            }}
            style={styles.ImageBackground_343_57}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5582/0057/4485203e372cd5021e7ef081d318a4d3"
            }}
            style={styles.ImageBackground_343_58}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4430/de3e/a8308c6ebeb6dbaff30535d98667180f"
            }}
            style={styles.ImageBackground_343_59}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b51/8bb7/5290c35e914e3cfa571a695bb7b581aa"
            }}
            style={styles.ImageBackground_343_62}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c98a/f253/5067ae1c690d9b2314135774b1a3355c"
            }}
            style={styles.ImageBackground_343_63}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c00d/1064/68d40c18e465a2c52d047b53abda19ed"
            }}
            style={styles.ImageBackground_343_64}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b274/f325/6d8f1ebe64d3e9a63a0ce62311440b02"
            }}
            style={styles.ImageBackground_343_65}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/495c/79a1/2ffdab045dbcaeac8100ba5e44c0c272"
            }}
            style={styles.ImageBackground_343_66}
          />
        </View>
      </View>
      <View style={styles.View_542_140}>
        <View style={styles.View_343_71} />
        <View style={styles.View_343_72}>
          <Text style={styles.Text_343_72}>Retry</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_283_19: {
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
  View_283_20: {
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
  View_304_312: {
    width: wp("76.8%"),
    minWidth: wp("76.8%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("65.02732240437157%"),
    justifyContent: "flex-start"
  },
  Text_304_312: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_333_337: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.4%"),
    top: hp("59.56284153005464%"),
    justifyContent: "flex-start"
  },
  Text_333_337: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_343_2: {
    width: wp("40%"),
    height: hp("20.491803278688526%"),
    top: hp("34.2896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.86666666666667%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_343_3: {
    flexGrow: 1,
    width: wp("27.2951416015625%"),
    height: hp("16.957267386014344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.582291666666659%"),
    top: hp("1.5930050709208459%")
  },
  ImageBackground_343_4: {
    flexGrow: 1,
    width: wp("0.6694834391276041%"),
    height: hp("0.12343985135438013%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.90286458333333%"),
    top: hp("16.945493937841526%")
  },
  ImageBackground_343_5: {
    flexGrow: 1,
    width: wp("6.86920166015625%"),
    height: hp("12.37948579214961%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.727669270833328%"),
    top: hp("7.159336277695957%")
  },
  ImageBackground_343_6: {
    flexGrow: 1,
    width: wp("6.837813313802084%"),
    height: hp("12.074953089646302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.613346354166662%"),
    top: hp("7.405236249412994%")
  },
  ImageBackground_343_7: {
    flexGrow: 1,
    width: wp("7.083180745442709%"),
    height: hp("5.137238215879012%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.853124999999995%"),
    top: hp("1.041770893367918%")
  },
  ImageBackground_343_11: {
    flexGrow: 1,
    width: wp("5.3058115641276045%"),
    height: hp("4.832874360631724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.269531249999996%"),
    top: hp("12.120606469326333%")
  },
  ImageBackground_343_12: {
    flexGrow: 1,
    width: wp("1.4900268554687501%"),
    height: hp("0.432069705483692%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.056640624999996%"),
    top: hp("15.1854551555029%")
  },
  ImageBackground_343_13: {
    flexGrow: 1,
    width: wp("1.2017242431640625%"),
    height: hp("0.3713430602693818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.857161458333334%"),
    top: hp("17.045693319351948%")
  },
  ImageBackground_343_14: {
    flexGrow: 1,
    width: wp("7.212202962239584%"),
    height: hp("4.420165807171598%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.297070312499994%"),
    top: hp("7.8085810760331285%")
  },
  ImageBackground_343_15: {
    flexGrow: 1,
    width: wp("0.2554880777994792%"),
    height: hp("0.13661254299142972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.320312499999996%"),
    top: hp("8.360653236264085%")
  },
  ImageBackground_343_16: {
    flexGrow: 1,
    width: wp("0.2314971923828125%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.892773437499994%"),
    top: hp("8.142077336545846%")
  },
  ImageBackground_343_17: {
    flexGrow: 1,
    width: wp("7.788372802734375%"),
    height: hp("7.215958996548679%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.719726562500004%"),
    top: hp("4.485233494492832%")
  },
  ImageBackground_343_18: {
    flexGrow: 1,
    width: wp("1.799175008138021%"),
    height: hp("2.04726881016799%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.941536458333328%"),
    top: hp("15.350717012999489%")
  },
  View_343_22: {
    flexGrow: 1,
    width: wp("18.76688028971354%"),
    height: hp("18.500568827644724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.613346354166662%"),
    top: hp("1.0382521999338294%")
  },
  ImageBackground_343_23: {
    width: wp("3.6022094726562504%"),
    height: hp("4.6739302046312%"),
    top: hp("0.10220470324239983%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.801367187500006%")
  },
  ImageBackground_343_24: {
    width: wp("3.925545247395833%"),
    height: hp("4.9468504275129135%"),
    top: hp("0.0874420332778385%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.239778645833333%")
  },
  ImageBackground_343_25: {
    width: wp("6.5931152343749995%"),
    height: hp("5.140754824779073%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.43776041666667%")
  },
  ImageBackground_343_28: {
    width: wp("2.06109619140625%"),
    height: hp("0.1213910149746254%"),
    top: hp("2.716064453125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.588411458333333%")
  },
  ImageBackground_343_29: {
    width: wp("1.2753621419270833%"),
    height: hp("2.1100633131350324%"),
    top: hp("6.383956325510162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.411523437500001%")
  },
  ImageBackground_343_30: {
    width: wp("1.357525634765625%"),
    height: hp("0.16808327429932976%"),
    top: hp("9.224738449346823%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.577994791666669%")
  },
  ImageBackground_343_31: {
    width: wp("0.5294148763020834%"),
    height: hp("0.4458067847079918%"),
    top: hp("7.9386768445291125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.603515625%")
  },
  ImageBackground_343_32: {
    width: wp("0.2529551188151042%"),
    height: hp("0.1170351205627775%"),
    top: hp("7.124691322201585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3738932291666615%")
  },
  ImageBackground_343_33: {
    width: wp("0.9397837320963541%"),
    height: hp("0.16013911513031506%"),
    top: hp("9.441213138767928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.435156249999999%")
  },
  ImageBackground_343_34: {
    width: wp("0.24967041015625%"),
    height: hp("0.12316781966412653%"),
    top: hp("6.9672673126387465%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.783333333333331%")
  },
  ImageBackground_343_35: {
    width: wp("0.30066324869791666%"),
    height: hp("0.15870599798817453%"),
    top: hp("6.963331712399672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.188867187500001%")
  },
  ImageBackground_343_36: {
    width: wp("0.2217254638671875%"),
    height: hp("0.16891083430722761%"),
    top: hp("7.124691322201585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.0987630208333385%")
  },
  ImageBackground_343_37: {
    width: wp("0.3059621175130208%"),
    height: hp("0.12883045634285348%"),
    top: hp("6.876198190157531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.598046875000001%")
  },
  ImageBackground_343_38: {
    width: wp("2.078871663411458%"),
    height: hp("0.2130894061646175%"),
    top: hp("10.37252040508666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.046093750000004%")
  },
  ImageBackground_343_39: {
    width: wp("10.071470133463542%"),
    height: hp("12.482782791221076%"),
    top: hp("6.0177870786906595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_343_55: {
    width: wp("0.37333170572916663%"),
    height: hp("0.27322508598285944%"),
    top: hp("7.3224052053983115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.119986979166669%")
  },
  ImageBackground_343_56: {
    width: wp("4.5621887207031255%"),
    height: hp("0.29471246271185536%"),
    top: hp("3.464904118105359%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.291536458333333%")
  },
  ImageBackground_343_57: {
    width: wp("1.8575276692708333%"),
    height: hp("1.2682555151767418%"),
    top: hp("4.46827789473403%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.904687499999994%")
  },
  ImageBackground_343_58: {
    width: wp("0.17531127929687498%"),
    height: hp("4.555617785844646%"),
    top: hp("4.443597011878843%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.540494791666667%")
  },
  ImageBackground_343_59: {
    width: wp("1.8590230305989583%"),
    height: hp("1.2597005875384222%"),
    top: hp("7.489351366387041%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.889257812500006%")
  },
  ImageBackground_343_62: {
    width: wp("1.8613016764322916%"),
    height: hp("1.3475980915007044%"),
    top: hp("5.904546852320273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.886067708333336%")
  },
  ImageBackground_343_63: {
    width: wp("0.7187540690104166%"),
    height: hp("6.987254867136803%"),
    top: hp("3.4743053665578003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.048111979166663%")
  },
  ImageBackground_343_64: {
    width: wp("2.506760660807292%"),
    height: hp("1.3684934605666197%"),
    top: hp("5.93236704341701%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.095572916666669%")
  },
  ImageBackground_343_65: {
    width: wp("0.96337890625%"),
    height: hp("1.3807630278373677%"),
    top: hp("5.803242667776637%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.0298828125%")
  },
  ImageBackground_343_66: {
    width: wp("7.963800048828125%"),
    height: hp("6.514461704942047%"),
    top: hp("4.04566780465548%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.747981770833334%")
  },
  View_542_140: {
    width: wp("54.400000000000006%"),
    minWidth: wp("54.400000000000006%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.933333333333334%"),
    top: hp("78.14207650273224%")
  },
  View_343_71: {
    width: wp("54.400000000000006%"),
    minWidth: wp("54.400000000000006%"),
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
  View_343_72: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.600000000000005%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_343_72: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
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
