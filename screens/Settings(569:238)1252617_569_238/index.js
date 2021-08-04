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
      <View style={styles.View_569_270}>
        <Text style={styles.Text_569_270}>Settings</Text>
      </View>
      <View style={styles.View_569_294}>
        <View style={styles.View_569_286}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb79/7198/c3744c077493400af0022902e3a439c9"
            }}
            style={styles.ImageBackground_569_272}
          />
          <View style={styles.View_569_273}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/629c/06af/f1d18acdc837a06c89181252495cde30"
              }}
              style={styles.ImageBackground_I569_273_428_62}
            />
          </View>
        </View>
        <View style={styles.View_569_290}>
          <View style={styles.View_569_288}>
            <Text style={styles.Text_569_288}>Ade Oluwole</Text>
          </View>
          <View style={styles.View_569_289}>
            <Text style={styles.Text_569_289}>@adethedev</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_569_291}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/542e/3ff8/8e56cbae21a6131e94c02f58c9302cb7"
          }}
          style={styles.ImageBackground_569_292}
        />
      </View>
      <View style={styles.View_569_303}>
        <View style={styles.View_569_298} />
        <View style={styles.View_569_299}>
          <Text style={styles.Text_569_299}>MORE</Text>
        </View>
      </View>
      <View style={styles.View_569_301}>
        <View style={styles.View_569_295} />
        <View style={styles.View_569_300}>
          <Text style={styles.Text_569_300}>ACCOUNT</Text>
        </View>
      </View>
      <View style={styles.View_676_198}>
        <View style={styles.View_569_415}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/542e/3ff8/8e56cbae21a6131e94c02f58c9302cb7"
            }}
            style={styles.ImageBackground_569_416}
          />
        </View>
        <View style={styles.View_676_190}>
          <View style={styles.View_569_307}>
            <Text style={styles.Text_569_307}>Favourites</Text>
          </View>
          <View style={styles.View_676_147}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/baa6/777a/0d0b39dfeeaa33efab9744b2160322fd"
              }}
              style={styles.ImageBackground_569_297}
            />
            <View style={styles.View_569_308}>
              <View style={styles.View_569_309} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00a6/7b09/1e9c1e3f84238967732a25ca8dc27c1f"
                }}
                style={styles.ImageBackground_569_310}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_676_200}>
        <View style={styles.View_569_421}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/542e/3ff8/8e56cbae21a6131e94c02f58c9302cb7"
            }}
            style={styles.ImageBackground_569_422}
          />
        </View>
        <View style={styles.View_676_192}>
          <View style={styles.View_569_320}>
            <Text style={styles.Text_569_320}>Storage</Text>
          </View>
          <View style={styles.View_676_149}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/baa6/777a/0d0b39dfeeaa33efab9744b2160322fd"
              }}
              style={styles.ImageBackground_569_305}
            />
            <View style={styles.View_569_345}>
              <View style={styles.View_569_346}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f4a/4b9e/8ee9b18e6944678c3b5ca9c6c0e55f23"
                  }}
                  style={styles.ImageBackground_569_347}
                />
              </View>
              <View style={styles.View_569_349}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4bd/6e88/a8cabe06bf394031af5b846b0b10d154"
                  }}
                  style={styles.ImageBackground_569_350}
                />
              </View>
              <View style={styles.View_569_352}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4bd/6e88/a8cabe06bf394031af5b846b0b10d154"
                  }}
                  style={styles.ImageBackground_569_353}
                />
              </View>
              <View style={styles.View_569_355}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4bd/6e88/a8cabe06bf394031af5b846b0b10d154"
                  }}
                  style={styles.ImageBackground_569_356}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_676_197}>
        <View style={styles.View_569_385}>
          <Text style={styles.Text_569_385}>Logout</Text>
        </View>
        <View style={styles.View_676_196}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b312/9560/05be8ae2abf9a9ca80d846fc61e06886"
            }}
            style={styles.ImageBackground_569_383}
          />
          <View style={styles.View_569_386}>
            <View style={styles.View_569_387}>
              <View style={styles.View_569_388} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f346/7be5/9b69aa6705ffd32388596a1109347d62"
                }}
                style={styles.ImageBackground_569_389}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c41d/9af7/4a72c18d6bcf1418c87a9abeb40b5a5f"
                }}
                style={styles.ImageBackground_569_390}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_676_199}>
        <View style={styles.View_569_418}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/542e/3ff8/8e56cbae21a6131e94c02f58c9302cb7"
            }}
            style={styles.ImageBackground_569_419}
          />
        </View>
        <View style={styles.View_676_191}>
          <View style={styles.View_569_312}>
            <Text style={styles.Text_569_312}>Reset password</Text>
          </View>
          <View style={styles.View_676_176}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/baa6/777a/0d0b39dfeeaa33efab9744b2160322fd"
              }}
              style={styles.ImageBackground_569_304}
            />
            <View style={styles.View_666_194}>
              <View style={styles.View_666_195}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b30b/efdb/53ca2865877509f5dc4684e559dc0e05"
                  }}
                  style={styles.ImageBackground_666_196}
                />
              </View>
              <View style={styles.View_666_198}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee83/9364/42b8c61a9337988c10eab587c0843ede"
                  }}
                  style={styles.ImageBackground_666_199}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_676_202}>
        <View style={styles.View_569_427}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/542e/3ff8/8e56cbae21a6131e94c02f58c9302cb7"
            }}
            style={styles.ImageBackground_569_428}
          />
        </View>
        <View style={styles.View_676_194}>
          <View style={styles.View_569_384}>
            <Text style={styles.Text_569_384}>Developer</Text>
          </View>
          <View style={styles.View_676_177}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/baa6/777a/0d0b39dfeeaa33efab9744b2160322fd"
              }}
              style={styles.ImageBackground_569_382}
            />
            <View style={styles.View_676_151}>
              <View style={styles.View_676_152}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/738b/e16d/309b4fb64d8aae874c3098c5f90a1822"
                  }}
                  style={styles.ImageBackground_676_153}
                />
              </View>
              <View style={styles.View_676_155}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7820/10d5/a7bf364d339a06ca509906a31a0f1645"
                  }}
                  style={styles.ImageBackground_676_156}
                />
              </View>
              <View style={styles.View_676_158}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e85/3e92/6cc9783a95658b67e92efec904bb8469"
                  }}
                  style={styles.ImageBackground_676_159}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_676_203}>
        <View style={styles.View_666_189}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/542e/3ff8/8e56cbae21a6131e94c02f58c9302cb7"
            }}
            style={styles.ImageBackground_666_190}
          />
        </View>
        <View style={styles.View_676_195}>
          <View style={styles.View_666_192}>
            <Text style={styles.Text_666_192}>Terms and conditions</Text>
          </View>
          <View style={styles.View_676_189}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/baa6/777a/0d0b39dfeeaa33efab9744b2160322fd"
              }}
              style={styles.ImageBackground_666_193}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e162/d785/d4268ce84a689ddf193dbccac523ac9b"
              }}
              style={styles.ImageBackground_676_178}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_676_212}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f22/4054/68ec6ab297599340fd9947ef92e7de23"
          }}
          style={styles.ImageBackground_569_426}
        />
        <View style={styles.View_676_211}>
          <View style={styles.View_569_373}>
            <Text style={styles.Text_569_373}>Trash</Text>
          </View>
          <View style={styles.View_676_210}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/baa6/777a/0d0b39dfeeaa33efab9744b2160322fd"
              }}
              style={styles.ImageBackground_569_306}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dce/d203/6af1c39c8e3b6fc7e3d6db01bf47d5e5"
              }}
              style={styles.ImageBackground_676_205}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_569_255} />
      <View style={styles.View_569_258}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9ed/9e76/a01ed3278cee95d885ee2d6e958c7e83"
          }}
          style={styles.ImageBackground_I569_258_394_16}
        />
      </View>
      <View style={styles.View_569_257}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03dd/45c7/07814bc25a8193998df968e0ac665c07"
          }}
          style={styles.ImageBackground_I569_257_394_12}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_569_256}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("493_209"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b768/0ecc/7c450ad5da095c197e4acbcd22d7eebd"
          }}
          style={styles.ImageBackground_I569_256_394_6}
        />
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_569_270: {
    width: wp("30.666666666666664%"),
    minWidth: wp("30.666666666666664%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("10.792349726775956%"),
    justifyContent: "flex-start"
  },
  Text_569_270: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_569_294: {
    width: wp("47.733333333333334%"),
    minWidth: wp("47.733333333333334%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("24.453551912568305%")
  },
  View_569_286: {
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
  ImageBackground_569_272: {
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
  View_569_273: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666668%"),
    top: hp("1.366120218579237%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I569_273_428_62: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_569_290: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("1.092896174863391%")
  },
  View_569_288: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_569_288: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_569_289: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.688524590163933%"),
    justifyContent: "flex-start"
  },
  Text_569_289: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_569_291: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%"),
    top: hp("27.049180327868854%")
  },
  ImageBackground_569_292: {
    width: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_569_303: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.51912568306011%")
  },
  View_569_298: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.2786885245901587%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.20000000298023224
  },
  View_569_299: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_569_299: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_569_301: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.169398907103826%")
  },
  View_569_295: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.2786885245901622%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.20000000298023224
  },
  View_569_300: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_569_300: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_676_198: {
    width: wp("82.39999999999999%"),
    minWidth: wp("82.39999999999999%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("41.53005464480874%")
  },
  View_569_415: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.46666666666667%"),
    top: hp("0.9562841530054698%")
  },
  ImageBackground_569_416: {
    width: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_676_190: {
    width: wp("34.66666666666667%"),
    minWidth: wp("34.66666666666667%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_569_307: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000001%"),
    top: hp("1.3661202185792334%"),
    justifyContent: "flex-start"
  },
  Text_569_307: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_676_147: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_569_297: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_569_308: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333346%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_569_309: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_569_310: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333332%"),
    top: hp("0.2732240437158495%")
  },
  View_676_200: {
    width: wp("82.39999999999999%"),
    minWidth: wp("82.39999999999999%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("59.2896174863388%")
  },
  View_569_421: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.46666666666667%"),
    top: hp("0.9562841530054556%")
  },
  ImageBackground_569_422: {
    width: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_676_192: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_569_320: {
    width: wp("14.666666666666666%"),
    minWidth: wp("14.666666666666666%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000001%"),
    top: hp("1.3661202185792334%"),
    justifyContent: "flex-start"
  },
  Text_569_320: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_676_149: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_569_305: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_569_345: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666668%"),
    top: hp("1.3661202185792334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_569_346: {
    width: wp("3.904948933919271%"),
    height: hp("2.7322373103574327%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7141927083333339%")
  },
  ImageBackground_569_347: {
    width: wp("3.904948933919271%"),
    height: hp("2.7322373103574327%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_569_349: {
    width: wp("0.8648544311523438%"),
    height: hp("0.13426066747780055%"),
    top: hp("0.9834581385544752%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.234244791666667%")
  },
  ImageBackground_569_350: {
    width: wp("0.8648544311523438%"),
    height: hp("0.13426066747780055%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_569_352: {
    width: wp("0.8648544311523438%"),
    height: hp("0.13426288229520203%"),
    top: hp("1.6144841095137465%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.234244791666667%")
  },
  ImageBackground_569_353: {
    width: wp("0.8648544311523438%"),
    height: hp("0.13426288229520203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_569_355: {
    width: wp("0.8648544311523438%"),
    height: hp("0.13426092804455367%"),
    top: hp("2.2656508482219166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.234244791666667%")
  },
  ImageBackground_569_356: {
    width: wp("0.8648544311523438%"),
    height: hp("0.13426092804455367%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_676_197: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("94.80874316939891%")
  },
  View_569_385: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000001%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "flex-start"
  },
  Text_569_385: {
    color: "rgba(239, 35, 60, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_676_196: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_569_383: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_569_386: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.400000000000002%"),
    top: hp("1.2295081967213122%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_569_387: {
    flexGrow: 1,
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_569_388: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_569_389: {
    width: wp("4.3999999999999995%"),
    height: hp("2.003643030677337%"),
    top: hp("0.6261356541367888%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7333333333333325%")
  },
  ImageBackground_569_390: {
    width: wp("0%"),
    height: hp("0.8139799201423353%"),
    top: hp("0.2504525940274931%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333336%")
  },
  View_676_199: {
    width: wp("82.39999999999999%"),
    minWidth: wp("82.39999999999999%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("50.409836065573764%")
  },
  View_569_418: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.46666666666667%"),
    top: hp("0.9562841530054698%")
  },
  ImageBackground_569_419: {
    width: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_676_191: {
    width: wp("45.33333333333333%"),
    minWidth: wp("45.33333333333333%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_569_312: {
    width: wp("30.133333333333333%"),
    minWidth: wp("30.133333333333333%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000001%"),
    top: hp("1.3661202185792405%"),
    justifyContent: "flex-start"
  },
  Text_569_312: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_676_176: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_569_304: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_666_194: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.400000000000002%"),
    top: hp("1.2295081967213193%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_666_195: {
    width: wp("4.22991943359375%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8183593749999982%")
  },
  ImageBackground_666_196: {
    width: wp("4.22991943359375%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_666_198: {
    width: wp("0.8973775227864583%"),
    height: hp("0.6925882537508272%"),
    top: hp("1.9363153176229488%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.483723958333332%")
  },
  ImageBackground_666_199: {
    width: wp("0.8973775227864583%"),
    height: hp("0.6925882537508272%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_676_202: {
    width: wp("82.39999999999999%"),
    minWidth: wp("82.39999999999999%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("77.04918032786885%")
  },
  View_569_427: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.46666666666667%"),
    top: hp("0.9562841530054698%")
  },
  ImageBackground_569_428: {
    width: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_676_194: {
    width: wp("34.66666666666667%"),
    minWidth: wp("34.66666666666667%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_569_384: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000001%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "flex-start"
  },
  Text_569_384: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_676_177: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_569_382: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_676_151: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666668%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_676_152: {
    width: wp("1.6333269755045572%"),
    height: hp("1.543746229077949%"),
    top: hp("0.5942672979636257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.700000000000001%")
  },
  ImageBackground_676_153: {
    width: wp("1.6333269755045572%"),
    height: hp("1.543746229077949%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_676_155: {
    width: wp("1.6333793640136718%"),
    height: hp("1.5437596482657345%"),
    top: hp("0.5942672979636257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0001302083333332149%")
  },
  ImageBackground_676_156: {
    width: wp("1.6333793640136718%"),
    height: hp("1.5437596482657345%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_676_158: {
    width: wp("0.9867787679036458%"),
    height: hp("2.1721565006860617%"),
    top: hp("0.2800446390454283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.173307291666667%")
  },
  ImageBackground_676_159: {
    width: wp("0.9867787679036458%"),
    height: hp("2.1721565006860617%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_676_203: {
    width: wp("82.39999999999999%"),
    minWidth: wp("82.39999999999999%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("85.92896174863388%")
  },
  View_666_189: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.46666666666667%"),
    top: hp("0.9562841530054556%")
  },
  ImageBackground_666_190: {
    width: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_676_195: {
    width: wp("56.266666666666666%"),
    minWidth: wp("56.266666666666666%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_666_192: {
    width: wp("41.06666666666667%"),
    minWidth: wp("41.06666666666667%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000001%"),
    top: hp("1.3661202185792405%"),
    justifyContent: "flex-start"
  },
  Text_666_192: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_676_189: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_666_193: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_676_178: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666668%")
  },
  View_676_212: {
    width: wp("79.80000000000001%"),
    minWidth: wp("79.80000000000001%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("68.16939890710383%")
  },
  ImageBackground_569_426: {
    width: wp("1.7333333333333332%"),
    height: hp("1.7759562841530054%"),
    top: hp("1.9125683060109253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.06666666666668%")
  },
  View_676_211: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_569_373: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000001%"),
    top: hp("1.3661202185792405%"),
    justifyContent: "flex-start"
  },
  Text_569_373: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_676_210: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_569_306: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_676_205: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666668%")
  },
  View_569_255: {
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
  View_569_258: {
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
  ImageBackground_I569_258_394_16: {
    flexGrow: 1,
    width: wp("5.276285807291667%"),
    height: hp("2.9234974762129653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.53763020833334%"),
    top: hp("0.1775939607880872%")
  },
  View_569_257: {
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
  ImageBackground_I569_257_394_12: {
    flexGrow: 1,
    width: wp("5.706667073567708%"),
    height: hp("2.377049388781271%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3466145833333343%"),
    top: hp("0.4508180045039296%")
  },
  TouchableOpacity_569_256: {
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
  ImageBackground_I569_256_394_6: {
    flexGrow: 1,
    width: wp("5.866666666666666%"),
    height: hp("2.8278686961189647%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666675%"),
    top: hp("0.2732240437158566%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
