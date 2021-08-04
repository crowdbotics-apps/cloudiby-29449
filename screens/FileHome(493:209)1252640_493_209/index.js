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
      <TouchableOpacity
        style={styles.TouchableOpacity_493_211}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("493_325"))
        }
      >
        <Text style={styles.Text_493_211}>Folders</Text>
      </TouchableOpacity>
      <View style={styles.View_493_212}>
        <Text style={styles.Text_493_212}>Files</Text>
      </View>
      <View style={styles.View_493_213} />
      <View style={styles.View_695_154}>
        <View style={styles.View_493_221} />
        <View style={styles.View_695_153}>
          <View style={styles.View_493_223}>
            <Text style={styles.Text_493_223}>Search Cloudiby</Text>
          </View>
          <View style={styles.View_493_224}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a816/50d6/06c7871e68e388306400fbd3cc706a11"
              }}
              style={styles.ImageBackground_493_225}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_493_233}>
        <TouchableOpacity
          style={styles.TouchableOpacity_493_234}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("581_120"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5916/c1a6/3c486d356549d5cd83bd243828d893e2"
            }}
            style={styles.ImageBackground_493_235}
          />
          <View style={styles.View_493_236}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86e6/59cd/a1ec21e7d0932e795c139211ef821a7d"
              }}
              style={styles.ImageBackground_I493_236_428_62}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.View_493_237}>
          <View style={styles.View_493_238}>
            <Text style={styles.Text_493_238}>Hey, Ade</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15b1/38e5/adecf4f71711b57aeeb22d8bd705e45b"
            }}
            style={styles.ImageBackground_493_239}
          />
        </View>
      </View>
      <View style={styles.View_798_1047}>
        <View style={styles.View_798_1046}>
          <View style={styles.View_798_1040}>
            <View style={styles.View_706_281}>
              <View style={styles.View_706_280}>
                <View style={styles.View_493_389}>
                  <Text style={styles.Text_493_389}>
                    Peace and conflict.docx
                  </Text>
                </View>
                <View style={styles.View_493_390}>
                  <Text style={styles.Text_493_390}>docx</Text>
                </View>
              </View>
              <View style={styles.View_706_181}>
                <View style={styles.View_493_388} />
                <View style={styles.View_706_154}>
                  <View style={styles.View_706_155} />
                  <View style={styles.View_706_156}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6292/a344/dd97f4c9184aa3ab2d67699a400f180f"
                      }}
                      style={styles.ImageBackground_706_157}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f15/b44a/7650ffd35b0f4c175be7e21a72f15846"
                      }}
                      style={styles.ImageBackground_706_158}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb4a/1e92/295bbb76df80970888a10a6371520847"
                      }}
                      style={styles.ImageBackground_706_159}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d7c/92ef/834284439ed2a475c1a5d846f7fd7d42"
                      }}
                      style={styles.ImageBackground_706_160}
                    />
                  </View>
                </View>
              </View>
            </View>
            <TouchableOpacity
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d1a/2275/ed55e62d32f7068ee59c18eabcee00f4"
              }}
              style={styles.TouchableOpacity_493_400}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("798_1048"))
              }
            />
          </View>
          <View style={styles.View_798_1044}>
            <View style={styles.View_706_296}>
              <View style={styles.View_706_294}>
                <View style={styles.View_493_420}>
                  <Text style={styles.Text_493_420}>UI certificate</Text>
                </View>
                <View style={styles.View_493_421}>
                  <Text style={styles.Text_493_421}>pdf</Text>
                </View>
              </View>
              <View style={styles.View_706_295}>
                <View style={styles.View_493_422} />
                <View style={styles.View_706_167}>
                  <View style={styles.View_I706_167_706_155} />
                  <View style={styles.View_I706_167_706_156}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6292/a344/dd97f4c9184aa3ab2d67699a400f180f"
                      }}
                      style={styles.ImageBackground_I706_167_706_157}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f15/b44a/7650ffd35b0f4c175be7e21a72f15846"
                      }}
                      style={styles.ImageBackground_I706_167_706_158}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb4a/1e92/295bbb76df80970888a10a6371520847"
                      }}
                      style={styles.ImageBackground_I706_167_706_159}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d7c/92ef/834284439ed2a475c1a5d846f7fd7d42"
                      }}
                      style={styles.ImageBackground_I706_167_706_160}
                    />
                  </View>
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d1a/2275/ed55e62d32f7068ee59c18eabcee00f4"
              }}
              style={styles.ImageBackground_798_1038}
            />
          </View>
          <View style={styles.View_798_1043}>
            <View style={styles.View_706_292}>
              <View style={styles.View_706_291}>
                <View style={styles.View_493_412}>
                  <Text style={styles.Text_493_412}>Project logo</Text>
                </View>
                <View style={styles.View_493_413}>
                  <Text style={styles.Text_493_413}>png</Text>
                </View>
              </View>
              <View style={styles.View_706_184}>
                <View style={styles.View_493_414} />
                <View style={styles.View_706_147}>
                  <View style={styles.View_706_148} />
                  <View style={styles.View_706_149}>
                    <View style={styles.View_706_150} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f5d/ee68/eb7373b093fcfe7eaa4de78cb6a3ae7a"
                      }}
                      style={styles.ImageBackground_706_151}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f84f/7c0e/49b7f47cc2e0c88ff59ac9d81e06a8e0"
                      }}
                      style={styles.ImageBackground_706_152}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aea9/e94e/9c8ef7d45f9eda4c4a0eafbe66e8172f"
                      }}
                      style={styles.ImageBackground_706_153}
                    />
                  </View>
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d1a/2275/ed55e62d32f7068ee59c18eabcee00f4"
              }}
              style={styles.ImageBackground_798_1034}
            />
          </View>
          <View style={styles.View_798_1045}>
            <View style={styles.View_706_300}>
              <View style={styles.View_706_299}>
                <View style={styles.View_493_384}>
                  <Text style={styles.Text_493_384}>Ilustration</Text>
                </View>
                <View style={styles.View_493_385}>
                  <Text style={styles.Text_493_385}>jpeg</Text>
                </View>
              </View>
              <View style={styles.View_706_298}>
                <View style={styles.View_493_386} />
                <View style={styles.View_706_174}>
                  <View style={styles.View_I706_174_706_148} />
                  <View style={styles.View_I706_174_706_149}>
                    <View style={styles.View_I706_174_706_150} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f5d/ee68/eb7373b093fcfe7eaa4de78cb6a3ae7a"
                      }}
                      style={styles.ImageBackground_I706_174_706_151}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f84f/7c0e/49b7f47cc2e0c88ff59ac9d81e06a8e0"
                      }}
                      style={styles.ImageBackground_I706_174_706_152}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aea9/e94e/9c8ef7d45f9eda4c4a0eafbe66e8172f"
                      }}
                      style={styles.ImageBackground_I706_174_706_153}
                    />
                  </View>
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d1a/2275/ed55e62d32f7068ee59c18eabcee00f4"
              }}
              style={styles.ImageBackground_798_1036}
            />
          </View>
          <View style={styles.View_798_1042}>
            <View style={styles.View_706_287}>
              <View style={styles.View_706_286}>
                <View style={styles.View_493_404}>
                  <Text style={styles.Text_493_404}>YouTube intro</Text>
                </View>
                <View style={styles.View_493_405}>
                  <Text style={styles.Text_493_405}>mp4</Text>
                </View>
              </View>
              <View style={styles.View_706_183}>
                <View style={styles.View_493_406} />
                <View style={styles.View_706_142}>
                  <View style={styles.View_706_143} />
                  <View style={styles.View_706_144}>
                    <View style={styles.View_706_145} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff95/80a4/874e5005fc4feb49c16c3d9ee3257646"
                      }}
                      style={styles.ImageBackground_706_146}
                    />
                  </View>
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d1a/2275/ed55e62d32f7068ee59c18eabcee00f4"
              }}
              style={styles.ImageBackground_798_1032}
            />
          </View>
          <View style={styles.View_798_1041}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d1a/2275/ed55e62d32f7068ee59c18eabcee00f4"
              }}
              style={styles.ImageBackground_798_1030}
            />
            <View style={styles.View_706_284}>
              <View style={styles.View_706_283}>
                <View style={styles.View_493_396}>
                  <Text style={styles.Text_493_396}>Jay’s verse</Text>
                </View>
                <View style={styles.View_493_397}>
                  <Text style={styles.Text_493_397}>mp3</Text>
                </View>
              </View>
              <View style={styles.View_706_182}>
                <View style={styles.View_493_398} />
                <View style={styles.View_706_161}>
                  <View style={styles.View_706_162} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ae6/1f11/32a62a589317d7ed1cce3bbfd85c0488"
                    }}
                    style={styles.ImageBackground_706_163}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_706_333}>
        <View style={styles.View_706_334}>
          <View style={styles.View_706_335}>
            <Text style={styles.Text_706_335}>Peace and conflict.docx</Text>
          </View>
          <View style={styles.View_706_336}>
            <Text style={styles.Text_706_336}>docx</Text>
          </View>
        </View>
        <View style={styles.View_706_337}>
          <View style={styles.View_706_338} />
          <View style={styles.View_706_339}>
            <View style={styles.View_I706_339_706_155} />
            <View style={styles.View_I706_339_706_156}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6292/a344/dd97f4c9184aa3ab2d67699a400f180f"
                }}
                style={styles.ImageBackground_I706_339_706_157}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f15/b44a/7650ffd35b0f4c175be7e21a72f15846"
                }}
                style={styles.ImageBackground_I706_339_706_158}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb4a/1e92/295bbb76df80970888a10a6371520847"
                }}
                style={styles.ImageBackground_I706_339_706_159}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d7c/92ef/834284439ed2a475c1a5d846f7fd7d42"
                }}
                style={styles.ImageBackground_I706_339_706_160}
              />
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_493_214}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("509_121"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6659/aa3a/d67a525970dc49b01aec7b1dea6f0df4"
          }}
          style={styles.ImageBackground_493_215}
        />
        <View style={styles.View_493_216}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e10/17f4/0af5ab4e40ab3f3a5501c3ffa39c4a9d"
            }}
            style={styles.ImageBackground_493_217}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_493_229} />
      <View style={styles.View_493_230}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56bb/4520/7622a64b5b413ff9c93325f65b95b134"
          }}
          style={styles.ImageBackground_I493_230_394_6}
        />
      </View>
      <View style={styles.View_493_231}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03dd/45c7/07814bc25a8193998df968e0ac665c07"
          }}
          style={styles.ImageBackground_I493_231_394_12}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_493_232}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("569_238"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4907/f304/0782186f2772b26b76d9104a4dacfcd8"
          }}
          style={styles.ImageBackground_I493_232_394_16}
        />
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  TouchableOpacity_493_211: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.86666666666667%"),
    top: hp("31.420765027322407%"),
    justifyContent: "flex-start"
  },
  Text_493_211: {
    color: "rgba(185, 185, 185, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_493_212: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("31.420765027322407%"),
    justifyContent: "flex-start"
  },
  Text_493_212: {
    color: "rgba(23, 72, 226, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_493_213: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("35.79234972677596%"),
    backgroundColor: "rgba(23, 72, 226, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_695_154: {
    width: wp("82.39999999999999%"),
    minWidth: wp("82.39999999999999%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("21.174863387978142%")
  },
  View_493_221: {
    width: wp("82.39999999999999%"),
    minWidth: wp("82.39999999999999%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_695_153: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.466666666666667%"),
    top: hp("2.1857923497267784%")
  },
  View_493_223: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_493_223: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_493_224: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579212%")
  },
  ImageBackground_493_225: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_493_233: {
    width: wp("82.39999999999999%"),
    minWidth: wp("82.39999999999999%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("11.612021857923498%")
  },
  TouchableOpacity_493_234: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.4%"),
    top: hp("0%")
  },
  ImageBackground_493_235: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_493_236: {
    width: wp("8.799999999999999%"),
    minWidth: wp("8.799999999999999%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000085%"),
    top: hp("0.8196721311475397%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I493_236_428_62: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    height: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_493_237: {
    width: wp("33.6%"),
    minWidth: wp("33.6%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9125683060109289%")
  },
  View_493_238: {
    width: wp("25.866666666666667%"),
    minWidth: wp("25.866666666666667%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_493_238: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  ImageBackground_493_239: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.733333333333334%"),
    top: hp("0.6830601092896167%"),
    resizeMode: "cover"
  },
  View_798_1047: {
    width: wp("82.39999999999999%"),
    minWidth: wp("82.39999999999999%"),
    height: hp("60.10928961748634%"),
    minHeight: hp("60.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("39.75409836065574%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_798_1046: {
    width: wp("82.39999999999999%"),
    minWidth: wp("82.39999999999999%"),
    height: hp("60.10928961748634%"),
    minHeight: hp("60.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_798_1040: {
    width: wp("82.39999999999999%"),
    minWidth: wp("82.39999999999999%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_706_281: {
    width: wp("54.93333333333334%"),
    minWidth: wp("54.93333333333334%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_706_280: {
    width: wp("39.733333333333334%"),
    minWidth: wp("39.733333333333334%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000001%"),
    top: hp("0.6830601092896202%")
  },
  View_493_389: {
    width: wp("39.733333333333334%"),
    minWidth: wp("39.733333333333334%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_493_389: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_493_390: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584668%"),
    justifyContent: "flex-start"
  },
  Text_493_390: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_706_181: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_493_388: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(64, 106, 236, 1)",
    opacity: 0.20000000298023224,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_706_154: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333336%"),
    top: hp("1.5027322404371617%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_706_155: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_706_156: {
    flexGrow: 1,
    width: wp("4.666666666666667%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("0.2732240437158424%")
  },
  ImageBackground_706_157: {
    width: wp("2.1960784912109377%"),
    minWidth: wp("2.1960784912109377%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_706_158: {
    width: wp("4.666666666666667%"),
    minWidth: wp("4.666666666666667%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_706_159: {
    width: wp("2.666666666666667%"),
    height: hp("1.2085175653166137e-7%"),
    top: hp("2.0491803278688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666682%")
  },
  ImageBackground_706_160: {
    width: wp("1.866666666666667%"),
    height: hp("8.459624743280004e-8%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666682%")
  },
  TouchableOpacity_493_400: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.5027322404371617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_798_1044: {
    width: wp("82.39999999999999%"),
    minWidth: wp("82.39999999999999%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43.16939890710382%")
  },
  View_706_296: {
    width: wp("36.266666666666666%"),
    minWidth: wp("36.266666666666666%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_706_294: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000001%"),
    top: hp("0.6830601092896273%")
  },
  View_493_420: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_493_420: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_493_421: {
    width: wp("5.066666666666666%"),
    minWidth: wp("5.066666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584668%"),
    justifyContent: "flex-start"
  },
  Text_493_421: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_706_295: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_493_422: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(64, 106, 236, 1)",
    opacity: 0.20000000298023224,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_706_167: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333336%"),
    top: hp("1.5027322404371688%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I706_167_706_155: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I706_167_706_156: {
    flexGrow: 1,
    width: wp("4.666666666666667%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("0.2732240437158424%")
  },
  ImageBackground_I706_167_706_157: {
    width: wp("2.1960784912109377%"),
    minWidth: wp("2.1960784912109377%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I706_167_706_158: {
    width: wp("4.666666666666667%"),
    minWidth: wp("4.666666666666667%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I706_167_706_159: {
    width: wp("2.666666666666667%"),
    height: hp("1.2085176429715575e-7%"),
    top: hp("2.0491803278688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666682%")
  },
  ImageBackground_I706_167_706_160: {
    width: wp("1.866666666666667%"),
    height: hp("8.459623966730566e-8%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666682%")
  },
  ImageBackground_798_1038: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.5027322404371688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_798_1043: {
    width: wp("82.39999999999999%"),
    minWidth: wp("82.39999999999999%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32.377049180327866%")
  },
  View_706_292: {
    width: wp("34.93333333333333%"),
    minWidth: wp("34.93333333333333%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_706_291: {
    width: wp("19.733333333333334%"),
    minWidth: wp("19.733333333333334%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000001%"),
    top: hp("0.6830601092896131%")
  },
  View_493_412: {
    width: wp("19.733333333333334%"),
    minWidth: wp("19.733333333333334%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_493_412: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_493_413: {
    width: wp("5.6000000000000005%"),
    minWidth: wp("5.6000000000000005%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.732240437158481%"),
    justifyContent: "flex-start"
  },
  Text_493_413: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_706_184: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_493_414: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(226, 23, 173, 1)",
    opacity: 0.20000000298023224,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_706_147: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333336%"),
    top: hp("1.5027322404371546%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_706_148: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_706_149: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333332%"),
    top: hp("0.2732240437158566%")
  },
  View_706_150: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(226, 23, 173, 1)",
    borderWidth: 1.399999976158142,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_706_151: {
    width: wp("3.8666666666666667%"),
    height: hp("1.2978142076502732%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13333333333333464%")
  },
  ImageBackground_706_152: {
    width: wp("2.1333333333333333%"),
    height: hp("0.6147540983606558%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333336%")
  },
  ImageBackground_706_153: {
    width: wp("1.0666666666666667%"),
    height: hp("0.546448087431694%"),
    top: hp("0.614754098360649%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.077441406250003%")
  },
  ImageBackground_798_1034: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_798_1045: {
    width: wp("82.39999999999999%"),
    minWidth: wp("82.39999999999999%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53.961748633879786%")
  },
  View_706_300: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_706_299: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000001%"),
    top: hp("0.6830601092896131%")
  },
  View_493_384: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_493_384: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_493_385: {
    width: wp("6.133333333333333%"),
    minWidth: wp("6.133333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584668%"),
    justifyContent: "flex-start"
  },
  Text_493_385: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_706_298: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_493_386: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(226, 23, 173, 1)",
    opacity: 0.20000000298023224,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_706_174: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333336%"),
    top: hp("1.5027322404371546%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I706_174_706_148: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I706_174_706_149: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333332%"),
    top: hp("0.2732240437158424%")
  },
  View_I706_174_706_150: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(226, 23, 173, 1)",
    borderWidth: 1.399999976158142,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_I706_174_706_151: {
    width: wp("3.8666666666666667%"),
    height: hp("1.2978142076502732%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13333333333333464%")
  },
  ImageBackground_I706_174_706_152: {
    width: wp("2.1333333333333333%"),
    height: hp("0.6147540983606558%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333336%")
  },
  ImageBackground_I706_174_706_153: {
    width: wp("1.0666666666666667%"),
    height: hp("0.546448087431694%"),
    top: hp("0.6147540983606632%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.077441406250003%")
  },
  ImageBackground_798_1036: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_798_1042: {
    width: wp("82.39999999999999%"),
    minWidth: wp("82.39999999999999%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.584699453551906%")
  },
  View_706_287: {
    width: wp("38.13333333333333%"),
    minWidth: wp("38.13333333333333%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_706_286: {
    width: wp("22.933333333333334%"),
    minWidth: wp("22.933333333333334%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000001%"),
    top: hp("0.6830601092896273%")
  },
  View_493_404: {
    width: wp("22.933333333333334%"),
    minWidth: wp("22.933333333333334%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_493_404: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_493_405: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.732240437158474%"),
    justifyContent: "flex-start"
  },
  Text_493_405: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_706_183: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_493_406: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(226, 177, 23, 1)",
    opacity: 0.20000000298023224,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_706_142: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333336%"),
    top: hp("1.5027322404371688%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_706_143: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_706_144: {
    flexGrow: 1,
    width: wp("5.066666666666666%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333332%"),
    top: hp("0.8196721311475414%")
  },
  View_706_145: {
    width: wp("3.4666666666666663%"),
    height: hp("1.7759562841530054%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(226, 177, 23, 1)",
    borderWidth: 1.399999976158142,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_706_146: {
    width: wp("1.6%"),
    height: hp("1.7759562841530054%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.466666666666667%")
  },
  ImageBackground_798_1032: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.5027322404371688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_798_1041: {
    width: wp("82.39999999999999%"),
    minWidth: wp("82.39999999999999%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.792349726775953%")
  },
  ImageBackground_798_1030: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_706_284: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_706_283: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000001%"),
    top: hp("0.6830601092896131%")
  },
  View_493_396: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_493_396: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_493_397: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.732240437158474%"),
    justifyContent: "flex-start"
  },
  Text_493_397: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_706_182: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_493_398: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(23, 226, 76, 1)",
    opacity: 0.20000000298023224,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_706_161: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333336%"),
    top: hp("1.5027322404371546%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_706_162: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_706_163: {
    flexGrow: 1,
    width: wp("4.933333333333334%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("0%")
  },
  View_706_333: {
    width: wp("54.93333333333334%"),
    minWidth: wp("54.93333333333334%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("104.50819672131149%")
  },
  View_706_334: {
    width: wp("39.733333333333334%"),
    minWidth: wp("39.733333333333334%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000001%"),
    top: hp("0.6830601092895989%")
  },
  View_706_335: {
    width: wp("39.733333333333334%"),
    minWidth: wp("39.733333333333334%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_706_335: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_706_336: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584668%"),
    justifyContent: "flex-start"
  },
  Text_706_336: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_706_337: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_706_338: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(23, 72, 226, 1)",
    opacity: 0.20000000298023224,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_706_339: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333336%"),
    top: hp("1.5027322404371546%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I706_339_706_155: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I706_339_706_156: {
    flexGrow: 1,
    width: wp("4.666666666666667%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("0.2732240437158282%")
  },
  ImageBackground_I706_339_706_157: {
    width: wp("2.1960784912109377%"),
    minWidth: wp("2.1960784912109377%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I706_339_706_158: {
    width: wp("4.666666666666667%"),
    minWidth: wp("4.666666666666667%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I706_339_706_159: {
    width: wp("2.666666666666667%"),
    height: hp("1.2085176429715575e-7%"),
    top: hp("2.0491803278688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666682%")
  },
  ImageBackground_I706_339_706_160: {
    width: wp("1.866666666666667%"),
    height: hp("8.459623966730566e-8%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666682%")
  },
  TouchableOpacity_493_214: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.2%"),
    top: hp("90.7103825136612%")
  },
  ImageBackground_493_215: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_493_216: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999997%"),
    top: hp("2.4590163934426243%")
  },
  ImageBackground_493_217: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_493_229: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("102.73224043715847%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 1
  },
  View_493_230: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    top: hp("105.19125683060109%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I493_230_394_6: {
    flexGrow: 1,
    width: wp("5.866666666666666%"),
    height: hp("2.8278686961189647%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666675%"),
    top: hp("0.2732240437158566%")
  },
  View_493_231: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.6%"),
    top: hp("105.19125683060109%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I493_231_394_12: {
    flexGrow: 1,
    width: wp("5.706667073567708%"),
    height: hp("2.377049388781271%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3466796875%"),
    top: hp("0.4508180045039296%")
  },
  TouchableOpacity_493_232: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.8%"),
    top: hp("105.19125683060109%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I493_232_394_16: {
    flexGrow: 1,
    width: wp("5.276285807291667%"),
    height: hp("2.9234974762129653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.53763020833334%"),
    top: hp("0.1775939607880872%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
