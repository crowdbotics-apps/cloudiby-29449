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
      <View style={styles.View_798_1427}>
        <Text style={styles.Text_798_1427}>Folders</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_798_1428}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("493_209"))
        }
      >
        <Text style={styles.Text_798_1428}>Files</Text>
      </TouchableOpacity>
      <View style={styles.View_798_1429} />
      <View style={styles.View_798_1430}>
        <View style={styles.View_798_1431} />
        <View style={styles.View_798_1432}>
          <View style={styles.View_798_1433}>
            <Text style={styles.Text_798_1433}>Search Cloudiby</Text>
          </View>
          <View style={styles.View_798_1434}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a816/50d6/06c7871e68e388306400fbd3cc706a11"
              }}
              style={styles.ImageBackground_798_1435}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_798_1438}>
        <View style={styles.View_798_1439}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5916/c1a6/3c486d356549d5cd83bd243828d893e2"
            }}
            style={styles.ImageBackground_798_1440}
          />
          <View style={styles.View_798_1441}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86e6/59cd/a1ec21e7d0932e795c139211ef821a7d"
              }}
              style={styles.ImageBackground_I798_1441_428_62}
            />
          </View>
        </View>
        <View style={styles.View_798_1442}>
          <View style={styles.View_798_1443}>
            <Text style={styles.Text_798_1443}>Hey, Ade</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15b1/38e5/adecf4f71711b57aeeb22d8bd705e45b"
            }}
            style={styles.ImageBackground_798_1444}
          />
        </View>
      </View>
      <View style={styles.View_798_1658}>
        <View style={styles.View_798_1657}>
          <View style={styles.View_798_1450}>
            <View style={styles.View_798_1451}>
              <View style={styles.View_798_1452}>
                <Text style={styles.Text_798_1452}>Design resources</Text>
              </View>
              <View style={styles.View_798_1453}>
                <Text style={styles.Text_798_1453}>2 items</Text>
              </View>
            </View>
            <View style={styles.View_798_1454}>
              <View style={styles.View_798_1455} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be62/7c5a/ce6c034cd9e8987494ad53c22b6c8c6f"
                }}
                style={styles.ImageBackground_798_1456}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d1a/2275/ed55e62d32f7068ee59c18eabcee00f4"
            }}
            style={styles.ImageBackground_798_1461}
          />
          <View style={styles.View_798_1463}>
            <View style={styles.View_798_1464}>
              <View style={styles.View_798_1465}>
                <Text style={styles.Text_798_1465}>2 items</Text>
              </View>
              <View style={styles.View_798_1466}>
                <Text style={styles.Text_798_1466}>Jay’s album</Text>
              </View>
            </View>
            <View style={styles.View_798_1467}>
              <View style={styles.View_798_1468} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be62/7c5a/ce6c034cd9e8987494ad53c22b6c8c6f"
                }}
                style={styles.ImageBackground_798_1469}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d1a/2275/ed55e62d32f7068ee59c18eabcee00f4"
            }}
            style={styles.ImageBackground_798_1474}
          />
          <View style={styles.View_798_1476}>
            <View style={styles.View_798_1477}>
              <View style={styles.View_798_1478}>
                <Text style={styles.Text_798_1478}>2 items</Text>
              </View>
              <View style={styles.View_798_1479}>
                <Text style={styles.Text_798_1479}>Jay’s album</Text>
              </View>
            </View>
            <View style={styles.View_798_1480}>
              <View style={styles.View_798_1481} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be62/7c5a/ce6c034cd9e8987494ad53c22b6c8c6f"
                }}
                style={styles.ImageBackground_798_1482}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d1a/2275/ed55e62d32f7068ee59c18eabcee00f4"
            }}
            style={styles.ImageBackground_798_1487}
          />
          <View style={styles.View_798_1489}>
            <View style={styles.View_798_1490}>
              <View style={styles.View_798_1491}>
                <Text style={styles.Text_798_1491}>2 items</Text>
              </View>
              <View style={styles.View_798_1492}>
                <Text style={styles.Text_798_1492}>Jay’s album</Text>
              </View>
            </View>
            <View style={styles.View_798_1493}>
              <View style={styles.View_798_1494} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be62/7c5a/ce6c034cd9e8987494ad53c22b6c8c6f"
                }}
                style={styles.ImageBackground_798_1495}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d1a/2275/ed55e62d32f7068ee59c18eabcee00f4"
            }}
            style={styles.ImageBackground_798_1500}
          />
          <View style={styles.View_798_1502}>
            <View style={styles.View_798_1503}>
              <View style={styles.View_798_1504}>
                <Text style={styles.Text_798_1504}>2 items</Text>
              </View>
              <View style={styles.View_798_1505}>
                <Text style={styles.Text_798_1505}>Design resources</Text>
              </View>
            </View>
            <View style={styles.View_798_1506}>
              <View style={styles.View_798_1507} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be62/7c5a/ce6c034cd9e8987494ad53c22b6c8c6f"
                }}
                style={styles.ImageBackground_798_1508}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d1a/2275/ed55e62d32f7068ee59c18eabcee00f4"
            }}
            style={styles.ImageBackground_798_1513}
          />
          <View style={styles.View_798_1515}>
            <View style={styles.View_798_1516}>
              <View style={styles.View_798_1517}>
                <Text style={styles.Text_798_1517}>2 items</Text>
              </View>
              <View style={styles.View_798_1518}>
                <Text style={styles.Text_798_1518}>Design resources</Text>
              </View>
            </View>
            <View style={styles.View_798_1519}>
              <View style={styles.View_798_1520} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be62/7c5a/ce6c034cd9e8987494ad53c22b6c8c6f"
                }}
                style={styles.ImageBackground_798_1521}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d1a/2275/ed55e62d32f7068ee59c18eabcee00f4"
            }}
            style={styles.ImageBackground_798_1526}
          />
          <View style={styles.View_798_1528}>
            <View style={styles.View_798_1529}>
              <View style={styles.View_798_1530}>
                <Text style={styles.Text_798_1530}>2 items</Text>
              </View>
              <View style={styles.View_798_1531}>
                <Text style={styles.Text_798_1531}>Jay’s album</Text>
              </View>
            </View>
            <View style={styles.View_798_1532}>
              <View style={styles.View_798_1533} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be62/7c5a/ce6c034cd9e8987494ad53c22b6c8c6f"
                }}
                style={styles.ImageBackground_798_1534}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d1a/2275/ed55e62d32f7068ee59c18eabcee00f4"
            }}
            style={styles.ImageBackground_798_1539}
          />
          <View style={styles.View_798_1541}>
            <View style={styles.View_798_1542}>
              <View style={styles.View_798_1543}>
                <Text style={styles.Text_798_1543}>2 items</Text>
              </View>
              <View style={styles.View_798_1544}>
                <Text style={styles.Text_798_1544}>Jay’s album</Text>
              </View>
            </View>
            <View style={styles.View_798_1545}>
              <View style={styles.View_798_1546} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be62/7c5a/ce6c034cd9e8987494ad53c22b6c8c6f"
                }}
                style={styles.ImageBackground_798_1547}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d1a/2275/ed55e62d32f7068ee59c18eabcee00f4"
            }}
            style={styles.ImageBackground_798_1552}
          />
          <View style={styles.View_798_1554}>
            <View style={styles.View_798_1555}>
              <View style={styles.View_798_1556}>
                <Text style={styles.Text_798_1556}>2 items</Text>
              </View>
              <View style={styles.View_798_1557}>
                <Text style={styles.Text_798_1557}>Jay’s album</Text>
              </View>
            </View>
            <View style={styles.View_798_1558}>
              <View style={styles.View_798_1559} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be62/7c5a/ce6c034cd9e8987494ad53c22b6c8c6f"
                }}
                style={styles.ImageBackground_798_1560}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d1a/2275/ed55e62d32f7068ee59c18eabcee00f4"
            }}
            style={styles.ImageBackground_798_1565}
          />
          <View style={styles.View_798_1567}>
            <View style={styles.View_798_1568}>
              <View style={styles.View_798_1569}>
                <Text style={styles.Text_798_1569}>2 items</Text>
              </View>
              <View style={styles.View_798_1570}>
                <Text style={styles.Text_798_1570}>Design resources</Text>
              </View>
            </View>
            <View style={styles.View_798_1571}>
              <View style={styles.View_798_1572} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be62/7c5a/ce6c034cd9e8987494ad53c22b6c8c6f"
                }}
                style={styles.ImageBackground_798_1573}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d1a/2275/ed55e62d32f7068ee59c18eabcee00f4"
            }}
            style={styles.ImageBackground_798_1578}
          />
          <View style={styles.View_798_1580}>
            <View style={styles.View_798_1581}>
              <View style={styles.View_798_1582}>
                <Text style={styles.Text_798_1582}>2 items</Text>
              </View>
              <View style={styles.View_798_1583}>
                <Text style={styles.Text_798_1583}>Design resources</Text>
              </View>
            </View>
            <View style={styles.View_798_1584}>
              <View style={styles.View_798_1585} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be62/7c5a/ce6c034cd9e8987494ad53c22b6c8c6f"
                }}
                style={styles.ImageBackground_798_1586}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d1a/2275/ed55e62d32f7068ee59c18eabcee00f4"
            }}
            style={styles.ImageBackground_798_1591}
          />
          <View style={styles.View_798_1593}>
            <View style={styles.View_798_1594}>
              <View style={styles.View_798_1595}>
                <Text style={styles.Text_798_1595}>2 items</Text>
              </View>
              <View style={styles.View_798_1596}>
                <Text style={styles.Text_798_1596}>Jay’s album</Text>
              </View>
            </View>
            <View style={styles.View_798_1597}>
              <View style={styles.View_798_1598} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be62/7c5a/ce6c034cd9e8987494ad53c22b6c8c6f"
                }}
                style={styles.ImageBackground_798_1599}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d1a/2275/ed55e62d32f7068ee59c18eabcee00f4"
            }}
            style={styles.ImageBackground_798_1604}
          />
          <View style={styles.View_798_1606}>
            <View style={styles.View_798_1607}>
              <View style={styles.View_798_1608}>
                <Text style={styles.Text_798_1608}>2 items</Text>
              </View>
              <View style={styles.View_798_1609}>
                <Text style={styles.Text_798_1609}>Design resources</Text>
              </View>
            </View>
            <View style={styles.View_798_1610}>
              <View style={styles.View_798_1611} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be62/7c5a/ce6c034cd9e8987494ad53c22b6c8c6f"
                }}
                style={styles.ImageBackground_798_1612}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d1a/2275/ed55e62d32f7068ee59c18eabcee00f4"
            }}
            style={styles.ImageBackground_798_1617}
          />
          <View style={styles.View_798_1619}>
            <View style={styles.View_798_1620}>
              <View style={styles.View_798_1621}>
                <Text style={styles.Text_798_1621}>2 items</Text>
              </View>
              <View style={styles.View_798_1622}>
                <Text style={styles.Text_798_1622}>Design resources</Text>
              </View>
            </View>
            <View style={styles.View_798_1623}>
              <View style={styles.View_798_1624} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be62/7c5a/ce6c034cd9e8987494ad53c22b6c8c6f"
                }}
                style={styles.ImageBackground_798_1625}
              />
            </View>
          </View>
          <View style={styles.View_798_1652}>
            <View style={styles.View_798_1653}>
              <TouchableOpacity
                style={styles.TouchableOpacity_798_1654}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("493_325"))
                }
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbd2/7b31/78e9d83aa029b488c48e8831a020777d"
                  }}
                  style={styles.ImageBackground_798_1655}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b931/8663/a52956819627c9ad577b64d8d5631e87"
                  }}
                  style={styles.ImageBackground_798_1656}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_798_1629}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("509_121"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6659/aa3a/d67a525970dc49b01aec7b1dea6f0df4"
          }}
          style={styles.ImageBackground_798_1630}
        />
        <View style={styles.View_798_1631}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e10/17f4/0af5ab4e40ab3f3a5501c3ffa39c4a9d"
            }}
            style={styles.ImageBackground_798_1632}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_798_1635} />
      <View style={styles.View_798_1636}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56bb/4520/7622a64b5b413ff9c93325f65b95b134"
          }}
          style={styles.ImageBackground_I798_1636_394_6}
        />
      </View>
      <View style={styles.View_798_1637}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03dd/45c7/07814bc25a8193998df968e0ac665c07"
          }}
          style={styles.ImageBackground_I798_1637_394_12}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_798_1638}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("569_238"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4907/f304/0782186f2772b26b76d9104a4dacfcd8"
          }}
          style={styles.ImageBackground_I798_1638_394_16}
        />
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_798_1427: {
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
  Text_798_1427: {
    color: "rgba(255, 182, 29, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  TouchableOpacity_798_1428: {
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
  Text_798_1428: {
    color: "rgba(185, 185, 185, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_798_1429: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.86666666666667%"),
    top: hp("35.79234972677596%"),
    backgroundColor: "rgba(255, 182, 29, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_798_1430: {
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
  View_798_1431: {
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
  View_798_1432: {
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
  View_798_1433: {
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
  Text_798_1433: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_798_1434: {
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
  ImageBackground_798_1435: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_798_1438: {
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
  View_798_1439: {
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
  ImageBackground_798_1440: {
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
  View_798_1441: {
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
  ImageBackground_I798_1441_428_62: {
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
  View_798_1442: {
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
  View_798_1443: {
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
  Text_798_1443: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  ImageBackground_798_1444: {
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
  View_798_1658: {
    width: wp("82.39999999999999%"),
    minWidth: wp("82.39999999999999%"),
    height: hp("60.10928961748634%"),
    minHeight: hp("60.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("39.75409836065574%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_798_1657: {
    width: wp("82.39999999999999%"),
    minWidth: wp("82.39999999999999%"),
    height: hp("146.448087431694%"),
    minHeight: hp("146.448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_798_1450: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_798_1451: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000001%"),
    top: hp("0.4098360655737707%")
  },
  View_798_1452: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_798_1452: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_798_1453: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.1420765027322375%"),
    justifyContent: "flex-start"
  },
  Text_798_1453: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_798_1454: {
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
  View_798_1455: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 182, 29, 1)",
    opacity: 0.44999998807907104,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_798_1456: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.5027322404371617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333336%")
  },
  ImageBackground_798_1461: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("12.295081967213108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_798_1463: {
    width: wp("34.66666666666667%"),
    minWidth: wp("34.66666666666667%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.792349726775953%")
  },
  View_798_1464: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000001%"),
    top: hp("0.4098360655737707%")
  },
  View_798_1465: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.1420765027322446%"),
    justifyContent: "flex-start"
  },
  Text_798_1465: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_798_1466: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_798_1466: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_798_1467: {
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
  View_798_1468: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 182, 29, 1)",
    opacity: 0.44999998807907104,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_798_1469: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333336%")
  },
  ImageBackground_798_1474: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("33.87978142076502%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_798_1476: {
    width: wp("34.66666666666667%"),
    minWidth: wp("34.66666666666667%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32.377049180327866%")
  },
  View_798_1477: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000001%"),
    top: hp("0.4098360655737707%")
  },
  View_798_1478: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.1420765027322375%"),
    justifyContent: "flex-start"
  },
  Text_798_1478: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_798_1479: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_798_1479: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_798_1480: {
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
  View_798_1481: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 182, 29, 1)",
    opacity: 0.44999998807907104,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_798_1482: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333336%")
  },
  ImageBackground_798_1487: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("77.04918032786884%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_798_1489: {
    width: wp("34.66666666666667%"),
    minWidth: wp("34.66666666666667%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("75.54644808743168%")
  },
  View_798_1490: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000001%"),
    top: hp("0.4098360655737565%")
  },
  View_798_1491: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.142076502732266%"),
    justifyContent: "flex-start"
  },
  Text_798_1491: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_798_1492: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_798_1492: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_798_1493: {
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
  View_798_1494: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 182, 29, 1)",
    opacity: 0.44999998807907104,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_798_1495: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333336%")
  },
  ImageBackground_798_1500: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("109.42622950819671%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_798_1502: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("107.92349726775956%")
  },
  View_798_1503: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000001%"),
    top: hp("0.40983606557378494%")
  },
  View_798_1504: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.1420765027322375%"),
    justifyContent: "flex-start"
  },
  Text_798_1504: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_798_1505: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_798_1505: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_798_1506: {
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
  View_798_1507: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 182, 29, 1)",
    opacity: 0.44999998807907104,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_798_1508: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333336%")
  },
  ImageBackground_798_1513: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("131.01092896174862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_798_1515: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("129.50819672131146%")
  },
  View_798_1516: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000001%"),
    top: hp("0.40983606557378494%")
  },
  View_798_1517: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.1420765027322375%"),
    justifyContent: "flex-start"
  },
  Text_798_1517: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_798_1518: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_798_1518: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_798_1519: {
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
  View_798_1520: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 182, 29, 1)",
    opacity: 0.44999998807907104,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_798_1521: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333336%")
  },
  ImageBackground_798_1526: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("141.80327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_798_1528: {
    width: wp("34.66666666666667%"),
    minWidth: wp("34.66666666666667%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("140.3005464480874%")
  },
  View_798_1529: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000001%"),
    top: hp("0.40983606557378494%")
  },
  View_798_1530: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.1420765027322375%"),
    justifyContent: "flex-start"
  },
  Text_798_1530: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_798_1531: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_798_1531: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_798_1532: {
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
  View_798_1533: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 182, 29, 1)",
    opacity: 0.44999998807907104,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_798_1534: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.502732240437183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333336%")
  },
  ImageBackground_798_1539: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("120.21857923497265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_798_1541: {
    width: wp("34.66666666666667%"),
    minWidth: wp("34.66666666666667%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("118.7158469945355%")
  },
  View_798_1542: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000001%"),
    top: hp("0.40983606557378494%")
  },
  View_798_1543: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.1420765027322375%"),
    justifyContent: "flex-start"
  },
  Text_798_1543: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_798_1544: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_798_1544: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_798_1545: {
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
  View_798_1546: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 182, 29, 1)",
    opacity: 0.44999998807907104,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_798_1547: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333336%")
  },
  ImageBackground_798_1552: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("98.63387978142077%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_798_1554: {
    width: wp("34.66666666666667%"),
    minWidth: wp("34.66666666666667%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("97.13114754098362%")
  },
  View_798_1555: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000001%"),
    top: hp("0.4098360655737565%")
  },
  View_798_1556: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.1420765027322375%"),
    justifyContent: "flex-start"
  },
  Text_798_1556: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_798_1557: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_798_1557: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_798_1558: {
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
  View_798_1559: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 182, 29, 1)",
    opacity: 0.44999998807907104,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_798_1560: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333336%")
  },
  ImageBackground_798_1565: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("87.8415300546448%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_798_1567: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("86.33879781420765%")
  },
  View_798_1568: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000001%"),
    top: hp("0.4098360655737707%")
  },
  View_798_1569: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.1420765027322375%"),
    justifyContent: "flex-start"
  },
  Text_798_1569: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_798_1570: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_798_1570: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_798_1571: {
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
  View_798_1572: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 182, 29, 1)",
    opacity: 0.44999998807907104,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_798_1573: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333336%")
  },
  ImageBackground_798_1578: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("66.2568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_798_1580: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("64.75409836065575%")
  },
  View_798_1581: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000001%"),
    top: hp("0.4098360655737565%")
  },
  View_798_1582: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.1420765027322375%"),
    justifyContent: "flex-start"
  },
  Text_798_1582: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_798_1583: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_798_1583: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_798_1584: {
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
  View_798_1585: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 182, 29, 1)",
    opacity: 0.44999998807907104,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_798_1586: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333336%")
  },
  ImageBackground_798_1591: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("55.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_798_1593: {
    width: wp("34.66666666666667%"),
    minWidth: wp("34.66666666666667%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53.961748633879786%")
  },
  View_798_1594: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000001%"),
    top: hp("0.4098360655737565%")
  },
  View_798_1595: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.1420765027322517%"),
    justifyContent: "flex-start"
  },
  Text_798_1595: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_798_1596: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_798_1596: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_798_1597: {
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
  View_798_1598: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 182, 29, 1)",
    opacity: 0.44999998807907104,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_798_1599: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333336%")
  },
  ImageBackground_798_1604: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("44.67213114754099%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_798_1606: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43.16939890710382%")
  },
  View_798_1607: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000001%"),
    top: hp("0.40983606557378494%")
  },
  View_798_1608: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.1420765027322375%"),
    justifyContent: "flex-start"
  },
  Text_798_1608: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_798_1609: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_798_1609: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_798_1610: {
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
  View_798_1611: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 182, 29, 1)",
    opacity: 0.44999998807907104,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_798_1612: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.5027322404371688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333336%")
  },
  ImageBackground_798_1617: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("23.087431693989075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_798_1619: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.584699453551906%")
  },
  View_798_1620: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000001%"),
    top: hp("0.40983606557377783%")
  },
  View_798_1621: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.1420765027322375%"),
    justifyContent: "flex-start"
  },
  Text_798_1621: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_798_1622: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_798_1622: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_798_1623: {
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
  View_798_1624: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 182, 29, 1)",
    opacity: 0.44999998807907104,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_798_1625: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.5027322404371688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333336%")
  },
  View_798_1652: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("1.5027322404371617%")
  },
  View_798_1653: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_798_1654: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_798_1655: {
    width: wp("5.333333333333334%"),
    height: hp("2.598360718273726%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333456%")
  },
  ImageBackground_798_1656: {
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    resizeMode: "cover"
  },
  TouchableOpacity_798_1629: {
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
  ImageBackground_798_1630: {
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
  View_798_1631: {
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
  ImageBackground_798_1632: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_798_1635: {
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
  View_798_1636: {
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
  ImageBackground_I798_1636_394_6: {
    flexGrow: 1,
    width: wp("5.866666666666666%"),
    height: hp("2.8278686961189647%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666675%"),
    top: hp("0.2732240437158566%")
  },
  View_798_1637: {
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
  ImageBackground_I798_1637_394_12: {
    flexGrow: 1,
    width: wp("5.706667073567708%"),
    height: hp("2.377049388781271%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.34666341145833%"),
    top: hp("0.45082634264004184%")
  },
  TouchableOpacity_798_1638: {
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
  ImageBackground_I798_1638_394_16: {
    flexGrow: 1,
    width: wp("5.276285807291667%"),
    height: hp("2.9234974762129653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.53763020833334%"),
    top: hp("0.17760229892418522%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
