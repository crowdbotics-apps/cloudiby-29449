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
      <View style={styles.View_130_68}>
        <View style={styles.View_130_69} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/873b/3e05/b71f938bedb3fab4496e20f03ed91e46"
        }}
        style={styles.ImageBackground_309_3}
      />
      <View style={styles.View_139_3}>
        <Text style={styles.Text_139_3}>
          Share your pictures, videos, audio files or documents with ease to
          anyone, anywhere in the world.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_304_2}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("130_76"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91d7/7dcc/a85fc0ed9b1275d85030c059e6a11035"
          }}
          style={styles.ImageBackground_304_3}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abe8/2861/981c65535d100c1eba4eeceaab0647cc"
          }}
          style={styles.ImageBackground_304_4}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bf3/a161/1e9ff3f3ef87d6b6441581ed3d114af6"
          }}
          style={styles.ImageBackground_304_5}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8030/bc3f/f915c2154214b6e61d00b1c1f712fff9"
          }}
          style={styles.ImageBackground_304_6}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f55/a4a5/f3eda437831d6e49227be793067b9037"
          }}
          style={styles.ImageBackground_304_7}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6812/f878/9704fc414344fa1e10498c0732c7a1ae"
          }}
          style={styles.ImageBackground_304_8}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc6d/8742/194f78f2f8d38fff75fafbc58ef66cc8"
          }}
          style={styles.ImageBackground_304_9}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6d3/9420/b747100ffd63b823a6d12024220e2032"
          }}
          style={styles.ImageBackground_304_10}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4527/f2f8/f74bfe7a4ef47157d0ef3188f3f12ca1"
          }}
          style={styles.ImageBackground_304_11}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a7e/ec57/bb23cb7b5e4a6a836972ad66a932dfd9"
          }}
          style={styles.ImageBackground_304_12}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25ef/5471/4bf69a1aba8bc18b8405e48a35c47932"
          }}
          style={styles.ImageBackground_304_13}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90de/85d1/de4b97b57367b279460458189914050a"
          }}
          style={styles.ImageBackground_304_14}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee55/b905/243b9e4514b5c102c6a2d40f7d233780"
          }}
          style={styles.ImageBackground_304_15}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57cd/4250/f944c6f7205184b8d8fdef79b832971a"
          }}
          style={styles.ImageBackground_304_16}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8ab/fc91/4b25408c8e635e2e89693efbd6b14c31"
          }}
          style={styles.ImageBackground_304_17}
        />
        <View style={styles.View_304_18}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c02a/7dea/54852f7d42e249ce7c77b3a6de16ce6b"
            }}
            style={styles.ImageBackground_304_19}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6a0/f452/837a6aabb4315912c54a4f217106339e"
            }}
            style={styles.ImageBackground_304_20}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8688/cd04/b16c25c310acce7abe7ba1027e513c5b"
            }}
            style={styles.ImageBackground_304_21}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15c0/7b04/102182b67e013bf3a17d77acaa14bfeb"
            }}
            style={styles.ImageBackground_304_22}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14ce/2e5f/dcec4b7ad32509b5658eb2766ba244e3"
            }}
            style={styles.ImageBackground_304_23}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f27/3526/870ee473c682fafbd13bfad48029173a"
            }}
            style={styles.ImageBackground_304_24}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b3d/6e6c/bff0c5624f0a74ad40e0676470a2c8c9"
            }}
            style={styles.ImageBackground_304_25}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41fe/f465/d8e5e20c8dcb4b4d7f8211d5fdb8a3fb"
            }}
            style={styles.ImageBackground_304_26}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02ad/eda5/b03b037793577130c1ee88c8c55fc240"
            }}
            style={styles.ImageBackground_304_29}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/deeb/5df7/1b55d7de1738b6c51a62a556331e5edd"
            }}
            style={styles.ImageBackground_304_30}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f26/6f1d/7e58049df0166958180f8df79a9a3a4b"
            }}
            style={styles.ImageBackground_304_31}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3346/ef1a/b0324afa6201b230a5f14281e88d2fb2"
            }}
            style={styles.ImageBackground_304_32}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/896c/c6d4/7809f682fad287573a2d0c5dcc05c05d"
            }}
            style={styles.ImageBackground_304_33}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31f0/3b65/fef48365c49b6a07f0b306d7b5855705"
            }}
            style={styles.ImageBackground_304_34}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b2c/fa2f/1b794b31220b36d0c8b4fb9a10d3babc"
            }}
            style={styles.ImageBackground_304_35}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec33/68b6/20dbbb0c515af3d38d4963590efaab6c"
            }}
            style={styles.ImageBackground_304_36}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbea/8bb4/4cff049609982a4e530d510fc74194e5"
            }}
            style={styles.ImageBackground_304_37}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1590/ed20/6aca4cd25ada1af370830a27583bb557"
            }}
            style={styles.ImageBackground_304_38}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5290/4bbd/a048a252a370b982996ba9cebb8f01c3"
            }}
            style={styles.ImageBackground_304_39}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd28/e2d5/0b3ff095d172fea4045e42444ed7ec8a"
            }}
            style={styles.ImageBackground_304_40}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f337/d717/2e0b4cabe9d51d915fdfa1e596365cab"
            }}
            style={styles.ImageBackground_304_43}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/076d/26de/47c156dac5c19eaa4a751991a6cf1a90"
            }}
            style={styles.ImageBackground_304_44}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/788f/04dd/d74181bd0c6423c528ab1cc4d4d5d0a1"
            }}
            style={styles.ImageBackground_304_45}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d31/4d4f/d31a21fce212ef312dd74e1aff4d7580"
            }}
            style={styles.ImageBackground_304_46}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95f1/0901/463879fe15476bd8aa7c7323b6570fd0"
            }}
            style={styles.ImageBackground_304_47}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6997/020e/2853f7c6885f423617625f345b9ba368"
            }}
            style={styles.ImageBackground_304_48}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12e2/aee7/68584e0d5670d42e88d2da1257b19ad3"
            }}
            style={styles.ImageBackground_304_49}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a57/856d/c2c1acea4ac6748e90efa3ddc5dc00d9"
            }}
            style={styles.ImageBackground_304_50}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/883a/9635/ee4823e99d4549e2e7569d486ecff372"
            }}
            style={styles.ImageBackground_304_51}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97da/b45b/a5c9e713dc9539e4cbf292cbf1cc3468"
            }}
            style={styles.ImageBackground_304_52}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/680d/b5df/b5f252f6340ed12e147d7d1542cfe798"
            }}
            style={styles.ImageBackground_304_53}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/877d/9102/74ade61bcb15b2a40c036a6f37e46a7f"
            }}
            style={styles.ImageBackground_304_56}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49eb/08f9/a841160c168b1274dec25247a850630a"
            }}
            style={styles.ImageBackground_304_57}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58b4/f737/13397c064b6fb746c99710156d5ccd35"
            }}
            style={styles.ImageBackground_304_65}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab78/25ad/a70aadee343fec5d62d04af017fdb5c4"
            }}
            style={styles.ImageBackground_304_86}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f55/a4a5/f3eda437831d6e49227be793067b9037"
            }}
            style={styles.ImageBackground_304_114}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18b9/7e86/bcaab4999bb91ddb52e0b6db5802d2f4"
          }}
          style={styles.ImageBackground_304_115}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/481b/bfca/709baac650ac0b670c46110b8d7dbd36"
          }}
          style={styles.ImageBackground_304_116}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f55/a4a5/f3eda437831d6e49227be793067b9037"
          }}
          style={styles.ImageBackground_304_117}
        />
      </TouchableOpacity>
      <View style={styles.View_321_268}>
        <Text style={styles.Text_321_268}>Share</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_321_271}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("130_76"))
        }
      >
        <Text style={styles.Text_321_271}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_543_160}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("29_3"))
        }
      >
        <Text style={styles.Text_543_160}>Skip </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_130_68: {
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
  View_130_69: {
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
  ImageBackground_309_3: {
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
  View_139_3: {
    width: wp("82.39999999999999%"),
    minWidth: wp("82.39999999999999%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("70.3551912568306%"),
    justifyContent: "flex-start"
  },
  Text_139_3: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  TouchableOpacity_304_2: {
    width: wp("66.66666666666666%"),
    height: hp("34.15300546448087%"),
    top: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_304_3: {
    flexGrow: 1,
    width: wp("60.0957275390625%"),
    height: hp("19.810077271174865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.370572916666667%"),
    top: hp("7.007573862544824%")
  },
  ImageBackground_304_4: {
    flexGrow: 1,
    width: wp("23.157830810546876%"),
    height: hp("15.772664221258111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.512760416666669%"),
    top: hp("9.954967394552593%")
  },
  ImageBackground_304_5: {
    flexGrow: 1,
    width: wp("0.21039835611979166%"),
    height: hp("0.18637194985249003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.428125%"),
    top: hp("18.167289358670594%")
  },
  ImageBackground_304_6: {
    flexGrow: 1,
    width: wp("20.53740234375%"),
    height: hp("17.003808777188993%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.41888020833334%"),
    top: hp("9.795806968146987%")
  },
  ImageBackground_304_7: {
    flexGrow: 1,
    width: wp("0.17777913411458332%"),
    height: hp("0.18215283670060622%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.68893229166666%"),
    top: hp("17.486334628746157%")
  },
  ImageBackground_304_8: {
    flexGrow: 1,
    width: wp("1.3448547363281251%"),
    height: hp("0.8543348051811176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.429036458333332%"),
    top: hp("12.572579305680073%")
  },
  ImageBackground_304_9: {
    flexGrow: 1,
    width: wp("1.739704386393229%"),
    height: hp("1.0299578390486253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.551432291666668%"),
    top: hp("12.7899503447319%")
  },
  ImageBackground_304_10: {
    flexGrow: 1,
    width: wp("1.462567138671875%"),
    height: hp("0.9411754503927595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.309765625000004%"),
    top: hp("12.853270150273225%")
  },
  ImageBackground_304_11: {
    flexGrow: 1,
    width: wp("1.2239929199218749%"),
    height: hp("0.8335467896174863%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.018619791666666%"),
    top: hp("12.785524878996966%")
  },
  ImageBackground_304_12: {
    flexGrow: 1,
    width: wp("1.4030314127604167%"),
    height: hp("0.723996188471226%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.596484375%"),
    top: hp("12.648106142471399%")
  },
  ImageBackground_304_13: {
    flexGrow: 1,
    width: wp("1.78758544921875%"),
    height: hp("0.8847919318193946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.905468750000004%"),
    top: hp("12.823628076438695%")
  },
  ImageBackground_304_14: {
    flexGrow: 1,
    width: wp("1.2390625%"),
    height: hp("0.6110926143458633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.32096354166666%"),
    top: hp("13.221576044468279%")
  },
  ImageBackground_304_15: {
    flexGrow: 1,
    width: wp("1.2782430013020833%"),
    height: hp("0.6151282722181309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.299739583333334%"),
    top: hp("13.257682258314126%")
  },
  ImageBackground_304_16: {
    flexGrow: 1,
    width: wp("3.966701253255208%"),
    height: hp("0.6440074065995347%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.21315104166667%"),
    top: hp("16.09546682222294%")
  },
  ImageBackground_304_17: {
    flexGrow: 1,
    width: wp("3.64793701171875%"),
    height: hp("0.6068870669505635%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.40833333333334%"),
    top: hp("13.791318799628591%")
  },
  View_304_18: {
    flexGrow: 1,
    width: wp("51.443485514322916%"),
    height: hp("17.37238149173924%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.512760416666669%"),
    top: hp("9.795806968146987%")
  },
  ImageBackground_304_19: {
    width: wp("0.9079833984375001%"),
    height: hp("0.4115412144061646%"),
    top: hp("15.297830300252944%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.88307291666666%")
  },
  ImageBackground_304_20: {
    width: wp("1.2078206380208334%"),
    height: hp("0.5952282681491206%"),
    top: hp("14.163451898293413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.92513020833334%")
  },
  ImageBackground_304_21: {
    width: wp("1.0670084635416668%"),
    height: hp("0.5689568858329064%"),
    top: hp("13.911206605004484%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.54088541666667%")
  },
  ImageBackground_304_22: {
    width: wp("1.1780029296874999%"),
    height: hp("0.550873553166624%"),
    top: hp("13.712312875549646%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.14075520833333%")
  },
  ImageBackground_304_23: {
    width: wp("0.8782552083333334%"),
    height: hp("0.46084461316384906%"),
    top: hp("14.783100482544615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.04648437499999%")
  },
  ImageBackground_304_24: {
    width: wp("0.6220133463541667%"),
    height: hp("0.3941291016959102%"),
    top: hp("16.39492055757449%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.610416666666666%")
  },
  ImageBackground_304_25: {
    width: wp("0.3617268880208333%"),
    height: hp("0.60409587589118%"),
    top: hp("16.196356184495603%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.594921875%")
  },
  ImageBackground_304_26: {
    width: wp("4.542032877604166%"),
    height: hp("0.9375942209379269%"),
    top: hp("6.158645296357367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.379296874999998%")
  },
  ImageBackground_304_29: {
    width: wp("0.3109944661458333%"),
    height: hp("0.29710238097143954%"),
    top: hp("15.307360789814933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.683723958333346%")
  },
  ImageBackground_304_30: {
    width: wp("0.30909830729166665%"),
    height: hp("0.21829448762487194%"),
    top: hp("16.263269726695913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.91575520833334%")
  },
  ImageBackground_304_31: {
    width: wp("0.29366861979166664%"),
    height: hp("0.12335021639130807%"),
    top: hp("16.596699282119832%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.19348958333333%")
  },
  ImageBackground_304_32: {
    width: wp("0.13720703125%"),
    height: hp("0.09293061136547985%"),
    top: hp("16.488049199672343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.23125%")
  },
  ImageBackground_304_33: {
    width: wp("0.43559570312499996%"),
    height: hp("0.37216853574325476%"),
    top: hp("15.275659196363772%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.825130208333334%")
  },
  ImageBackground_304_34: {
    width: wp("0.8461018880208334%"),
    height: hp("0.3471478738419997%"),
    top: hp("16.33717896508389%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.94010416666667%")
  },
  ImageBackground_304_35: {
    width: wp("0.5442382812500001%"),
    height: hp("1.0268310380112278%"),
    top: hp("16.345550453728013%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.41223958333333%")
  },
  ImageBackground_304_36: {
    width: wp("0.8966959635416667%"),
    height: hp("0.1383546923027664%"),
    top: hp("7.871773724998928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.2890625%")
  },
  ImageBackground_304_37: {
    width: wp("0.3192464192708333%"),
    height: hp("0.28890703545242064%"),
    top: hp("7.250357455894598%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.76875%")
  },
  ImageBackground_304_38: {
    width: wp("0.24512532552083333%"),
    height: hp("0.27559624343621925%"),
    top: hp("7.276764332922429%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.99036458333333%")
  },
  ImageBackground_304_39: {
    width: wp("0.3904052734375%"),
    height: hp("0.4007850188375171%"),
    top: hp("7.378318661549056%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.291927083333334%")
  },
  ImageBackground_304_40: {
    width: wp("4.3592529296875%"),
    height: hp("0.9574170972480148%"),
    top: hp("3.8376292244332753%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.596093749999998%")
  },
  ImageBackground_304_43: {
    width: wp("0.30390625%"),
    height: hp("0.05699116024163251%"),
    top: hp("13.944692559580982%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.431250000000002%")
  },
  ImageBackground_304_44: {
    width: wp("0.49638671875%"),
    height: hp("0.23206596166058316%"),
    top: hp("7.063362246654076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.92421875000001%")
  },
  ImageBackground_304_45: {
    width: wp("2.4090474446614585%"),
    height: hp("1.334785503116462%"),
    top: hp("11.810905164708206%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.001822916666665%")
  },
  ImageBackground_304_46: {
    width: wp("0.411627197265625%"),
    height: hp("0.21435888738580092%"),
    top: hp("14.746762885422005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.337760416666665%")
  },
  ImageBackground_304_47: {
    width: wp("0.8757507324218751%"),
    height: hp("0.7004701374658471%"),
    top: hp("13.817877847640244%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.98723958333333%")
  },
  ImageBackground_304_48: {
    width: wp("0.28293050130208336%"),
    height: hp("0.3675429547419313%"),
    top: hp("8.168690582442157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.72942708333333%")
  },
  ImageBackground_304_49: {
    width: wp("0.36177978515625%"),
    height: hp("0.2914553782978996%"),
    top: hp("7.985485056058952%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.262239583333336%")
  },
  ImageBackground_304_50: {
    width: wp("0.2703023274739583%"),
    height: hp("0.2438717201107838%"),
    top: hp("7.9709099941566315%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.990104166666665%")
  },
  ImageBackground_304_51: {
    width: wp("0.5450052897135417%"),
    height: hp("0.20933099131766564%"),
    top: hp("8.506885382647074%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.179296875000002%")
  },
  ImageBackground_304_52: {
    width: wp("0.575311279296875%"),
    height: hp("0.12640197420380805%"),
    top: hp("7.826393419276169%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.10026041666666%")
  },
  ImageBackground_304_53: {
    width: wp("1.2889923095703126%"),
    height: hp("0.356995212575777%"),
    top: hp("14.047076532749532%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.514973958333332%")
  },
  ImageBackground_304_56: {
    width: wp("1.1178649902343751%"),
    height: hp("0.4554540081753757%"),
    top: hp("14.456762511873503%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.309375000000003%")
  },
  ImageBackground_304_57: {
    width: wp("13.591136678059895%"),
    height: hp("11.274351318025849%"),
    top: hp("2.39097094926678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.997005208333334%")
  },
  ImageBackground_304_65: {
    width: wp("23.157830810546876%"),
    height: hp("15.772659009923048%"),
    top: hp("0.02255674268378627%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_304_86: {
    width: wp("20.626298014322916%"),
    height: hp("17.003808777188993%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.817187499999992%")
  },
  ImageBackground_304_114: {
    width: wp("0.17777506510416666%"),
    height: hp("0.18215075216658128%"),
    top: hp("7.736066390907833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.93177083333333%")
  },
  ImageBackground_304_115: {
    flexGrow: 1,
    width: wp("1.3607503255208333%"),
    height: hp("2.9005811514098787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.39231770833333%"),
    top: hp("19.863520554506067%")
  },
  ImageBackground_304_116: {
    flexGrow: 1,
    width: wp("5.039424641927083%"),
    height: hp("3.1407840916367826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.046614583333334%"),
    top: hp("19.541155705686478%")
  },
  ImageBackground_304_117: {
    flexGrow: 1,
    width: wp("0.17777506510416666%"),
    height: hp("0.18214866763255635%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.6%"),
    top: hp("18.07832561555456%")
  },
  View_321_268: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.733333333333334%"),
    top: hp("60.245901639344254%"),
    justifyContent: "flex-start"
  },
  Text_321_268: {
    color: "rgba(23, 72, 226, 1)",
    fontSize: 23,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  TouchableOpacity_321_271: {
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
  Text_321_271: {
    color: "rgba(23, 72, 226, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  TouchableOpacity_543_160: {
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
  Text_543_160: {
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
