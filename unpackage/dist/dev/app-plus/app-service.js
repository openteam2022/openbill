var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
      throw reason;
    }));
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const ON_RESIZE = "onResize";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onResize = /* @__PURE__ */ createHook(ON_RESIZE);
  var icons = {
    "id": "2852637",
    "name": "uniui\u56FE\u6807\u5E93",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$d = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return unescape(`%u${code.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("text", {
      style: vue.normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
      class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
    }, null, 6);
  }
  var __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-a2e81f6e"], ["__file", "E:/app/vue-app/openbill/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const __default__$1 = {
    name: "StatusBar",
    props: {
      bgColor: {
        type: String,
        default: ""
      }
    }
  };
  const __injectCSSVars__$1 = () => {
    vue.useCssVars((_ctx) => ({
      "6f195d57-bgColor": _ctx.bgColor
    }));
  };
  const __setup__$1 = __default__$1.setup;
  __default__$1.setup = __setup__$1 ? (props, ctx) => {
    __injectCSSVars__$1();
    return __setup__$1(props, ctx);
  } : __injectCSSVars__$1;
  const _sfc_main$c = __default__$1;
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "status-bar" });
  }
  var StatusBar = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-6f195d57"], ["__file", "E:/app/vue-app/openbill/components/layout/statusBar.vue"]]);
  var _imports_0$3 = "/static/img/back.png";
  const __default__ = {
    name: "Navbar",
    props: {
      title: {
        type: String,
        default: "\u6807\u9898"
      },
      positions: {
        type: String,
        default: "center"
      },
      borderColor: {
        type: String,
        default: "#ededed"
      },
      bagColor: {
        type: String,
        default: "#fff"
      },
      type: {
        type: String,
        default: "default"
      },
      color: {
        type: String,
        default: "#333"
      }
    },
    data() {
      return {};
    },
    methods: {
      onBack() {
        this.$emit("onBack");
      },
      onOption() {
        this.$emit("onOption");
      }
    }
  };
  const __injectCSSVars__ = () => {
    vue.useCssVars((_ctx) => ({
      "5484aa2c-borderColor": _ctx.borderColor,
      "5484aa2c-bagColor": _ctx.bagColor,
      "5484aa2c-positions": _ctx.positions,
      "5484aa2c-color": _ctx.color
    }));
  };
  const __setup__ = __default__.setup;
  __default__.setup = __setup__ ? (props, ctx) => {
    __injectCSSVars__();
    return __setup__(props, ctx);
  } : __injectCSSVars__;
  const _sfc_main$b = __default__;
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "navbar" }, [
      $props.type == "default" || "" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "navbar-box"
      }, vue.toDisplayString($props.title), 1)) : vue.createCommentVNode("v-if", true),
      $props.type == "back" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "navbar-box"
      }, [
        vue.createElementVNode("image", {
          class: "navbar-img back",
          src: _imports_0$3,
          mode: "",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.onBack && $options.onBack(...args))
        }),
        vue.createElementVNode("view", { class: "navbar-box" }, vue.toDisplayString($props.title), 1)
      ])) : vue.createCommentVNode("v-if", true),
      $props.type == "option" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 2,
        class: "navbar-box"
      }, [
        vue.createElementVNode("image", {
          class: "navbar-img back",
          src: _imports_0$3,
          mode: "",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.onBack && $options.onBack(...args))
        }),
        vue.createElementVNode("view", { class: "navbar-box" }, vue.toDisplayString($props.title), 1),
        vue.createElementVNode("image", {
          class: "navbar-img more",
          src: _imports_0$3,
          mode: "",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.onOption && $options.onOption(...args))
        })
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-5484aa2c"], ["__file", "E:/app/vue-app/openbill/components/layout/navbar.vue"]]);
  var _imports_0$2 = "/static/img/notBill.png";
  const _sfc_main$a = {
    name: "BillList",
    props: {
      data: {
        type: Object,
        default: function(data) {
          return data;
        }
      }
    },
    data() {
      return {};
    },
    methods: {
      goBillDetails(i) {
        let name = this.getName(i, "name");
        uni.navigateTo({
          url: `/pages/index/bill_details?id=${i.id}&bill_time=${i.bill_time}&category_id=${i.category_id}&type=${i.type}&cost=${i.cost}&other=${i.other}&name=${name}&create_time=${i.create_time}`
        });
      },
      getName(item) {
        return this.getNode(item, "name");
      },
      getImg(item) {
        return this.getNode(item, "imgUrl");
      },
      getNode(item, nodeName) {
        let income = this.$store.state.incomeList;
        let pay = this.$store.state.payList;
        let node;
        if (item.type == 0) {
          for (let i = 0; i < pay.length; i++) {
            if (pay[i].id == item.category_id) {
              node = pay[i][nodeName];
              break;
            }
          }
        } else {
          for (let i = 0; i < income.length; i++) {
            if (income[i].id == item.category_id) {
              node = income[i][nodeName];
              break;
            }
          }
        }
        return node;
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "bill-list" }, [
      vue.createCommentVNode(" \u8BB0\u8D26\u5217\u8868 "),
      vue.createElementVNode("view", { class: "bill-list-box" }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.data, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", { class: "bill-list-box-item" }, [
            vue.createElementVNode("view", { class: "blbi-title" }, [
              vue.createElementVNode("view", { class: "blbi-title-date" }, vue.toDisplayString(item.name), 1),
              vue.createElementVNode("view", { class: "blbi-title-info" }, [
                item.income ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "blbi-title-info-income"
                }, [
                  vue.createElementVNode("span", null, "\u6536\u5165\xA0"),
                  vue.createElementVNode("text", null, vue.toDisplayString(item.income.toFixed(2)), 1)
                ])) : vue.createCommentVNode("v-if", true),
                item.pay ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 1,
                  class: "blbi-title-info-pay"
                }, [
                  vue.createElementVNode("span", null, "\u652F\u51FA\xA0"),
                  vue.createElementVNode("text", null, vue.toDisplayString(item.pay.toFixed(2)), 1)
                ])) : vue.createCommentVNode("v-if", true)
              ])
            ]),
            vue.createElementVNode("view", { class: "blbi-item" }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.items, (i) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "blbi-list",
                  onClick: ($event) => $options.goBillDetails(i)
                }, [
                  vue.createElementVNode("view", { class: "blbi-list-img" }, [
                    vue.createElementVNode("image", {
                      src: $options.getImg(i),
                      mode: ""
                    }, null, 8, ["src"])
                  ]),
                  vue.createElementVNode("view", { class: "blbi-list-content" }, [
                    vue.createElementVNode("view", null, vue.toDisplayString($options.getName(i)), 1),
                    vue.createElementVNode("view", { class: "blbi-list-content-tip" }, vue.toDisplayString(i.other), 1)
                  ]),
                  i.type == 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "blbi-list-number-pay"
                  }, " -" + vue.toDisplayString(i.cost), 1)) : vue.createCommentVNode("v-if", true),
                  i.type == 1 ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "blbi-list-number-income"
                  }, " +" + vue.toDisplayString(i.cost), 1)) : vue.createCommentVNode("v-if", true)
                ], 8, ["onClick"]);
              }), 256))
            ])
          ]);
        }), 256))
      ]),
      vue.createCommentVNode(" \u521D\u59CB\u5316\u6CA1\u6709\u6570\u636E\u65F6\u663E\u793A "),
      $props.data.length == 0 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "not_bill"
      }, [
        vue.createElementVNode("img", {
          src: _imports_0$2,
          alt: ""
        }),
        vue.createElementVNode("view", { class: "" }, [
          vue.createElementVNode("text", null, "\u672C\u6708\u8FD8\u6CA1\u6709\u8BB0\u8D26\uFF01\u8D76\u5FEB\u6DFB\u52A0\u5427\uFF01")
        ])
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var BillList = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-3a720fee"], ["__file", "E:/app/vue-app/openbill/components/index/bill_list.vue"]]);
  class Dates {
    constructor() {
      this.date = new Date();
      this.getYear();
      this.getMonth();
      this.getDay();
      this.getHour();
      this.getMinute();
      this.getSecond();
    }
    getWeek() {
      let week = new Date(this.getTime());
      let day = week.getDay() == 0 ? 7 : week.getDay();
      return day;
    }
    getYear() {
      this.year = this.date.getFullYear();
      return this.year;
    }
    getMonth() {
      this.month = this.date.getMonth() + 1;
      return this.month;
    }
    getDay() {
      let day = this.date.getDate();
      this.day = day < 10 ? `0${day}` : day;
      return this.day;
    }
    getHour() {
      this.hour = this.date.getHours();
      return this.hour;
    }
    getMinute() {
      let minute = this.date.getMinutes();
      this.minute = minute < 10 ? `0${minute}` : minute;
      return this.minute;
    }
    getSecond() {
      let second = this.date.getSeconds();
      this.second = second < 10 ? `0${second}` : second;
      return this.second;
    }
    getDate() {
      let date2 = `${this.year}-${this.month}-${this.day}`;
      return date2;
    }
    getTime() {
      let time = `${this.getDate()} ${this.hour}:${this.minute}:${this.second}`;
      return time;
    }
  }
  class comm {
    constructor() {
      this.list = {};
    }
    on(name, fn) {
      if (typeof fn !== "function") {
        throw "Error: " + fn + "is not function;\u62A5\u9519\uFF1A " + fn + "\u4E0D\u662F\u4E00\u4E2A\u65B9\u6CD5\uFF1B";
      }
      if (this.list[name]) {
        this.list[name].push(fn);
      } else {
        this.list[name] = [fn];
      }
    }
    off(name, fn) {
      let nameArr = this.list[name] || [];
      if (nameArr) {
        let index = nameArr.findIndex(fn);
        if (index > -1) {
          nameArr.splice(index, 1);
        }
      }
    }
    emit(name, param) {
      let nameArr = this.list[name] || [];
      if (nameArr) {
        nameArr.forEach((fn) => {
          fn(param);
        });
      }
    }
  }
  const open = new comm();
  async function openSqlite() {
    return new Promise((resolve, reject) => {
      plus.sqlite.openDatabase({
        name: "openbill",
        path: "_doc/openbill.db",
        success() {
          resolve(true);
        },
        fail(error) {
          reject(error);
        }
      });
    });
  }
  async function isOpen() {
    return new Promise((resolve, reject) => {
      let res = plus.sqlite.isOpenDatabase({
        name: "openbill",
        path: "_doc/openbill.db"
      });
      if (res) {
        resolve(true);
      } else {
        reject(false);
      }
    });
  }
  async function isTable(tabName) {
    return new Promise((resolve, reject) => {
      plus.sqlite.executeSql({
        name: "openbill",
        sql: "select * from " + tabName + " where id = 1",
        success(data) {
          resolve(data);
        },
        fail() {
          reject(false);
        }
      });
    });
  }
  async function createBill() {
    return new Promise((resolve, reject) => {
      plus.sqlite.executeSql({
        name: "openbill",
        sql: 'create table if not exists open_bill ("id" INTEGER PRIMARY KEY AUTOINCREMENT,"category_id" int(15) NOT NULL,"cost" varchar(16) NOT NULL,"type" int(1) NOT NULL,"other" varchar(28),"week" int(1) NOT NULL,"year" int(4) NOT NULL,"month" int(2) NOT NULL,"day" int(2) NOT NULL,"bill_time" datetime NOT NULL,"create_time" datetime NOT NULL,"update_time" datetime)',
        success(e) {
          resolve(true);
        },
        fail(error) {
          reject(error);
        }
      });
    });
  }
  async function addBill(data) {
    return new Promise((resolve, reject) => {
      plus.sqlite.executeSql({
        name: "openbill",
        sql: 'insert into open_bill(category_id,other,cost,type,week,year,month,day,bill_time,create_time) values(" ' + data.category_id + '","' + data.other + '","' + data.cost + '","' + data.type + '","' + data.week + '","' + data.year + '","' + data.month + '","' + data.day + '","' + data.bill_time + '"," ' + data.create_time + '")',
        success() {
          resolve(true);
        },
        fail(error) {
          reject(error);
        }
      });
    });
  }
  async function updateBill(data) {
    return new Promise((resolve, reject) => {
      plus.sqlite.executeSql({
        name: "openbill",
        sql: 'update open_bill set other ="' + data.other + '" ,cost = "' + data.cost + '" ,category_id = "' + data.category_id + '" ,type = "' + data.type + '" ,week = "' + data.week + '" ,year = "' + data.year + '" ,month = "' + data.month + '" ,day = "' + data.day + '" ,bill_time = "' + data.bill_time + '" ,update_time = "' + data.update_time + '" where id = ' + data.id,
        success(e) {
          resolve(true);
        },
        fail(e) {
          reject(e);
        }
      });
    });
  }
  async function getBillData(data) {
    return new Promise((resolve, reject) => {
      plus.sqlite.selectSql({
        name: "openbill",
        sql: "select DISTINCT (day),year,month from open_bill where year = " + data.year + " and month =" + data.month + " order by day desc",
        success(data2) {
          resolve(data2);
        },
        fail(error) {
          reject(error);
        }
      });
    });
  }
  function getBill(data) {
    return new Promise((resolve, reject) => {
      plus.sqlite.selectSql({
        name: "openbill",
        sql: "select * from open_bill where year =" + data.year + " and month = " + data.month + " and day = " + data.day + " order by bill_time desc",
        success(data2) {
          resolve(data2);
        },
        fail(error) {
          reject(error);
        }
      });
    });
  }
  async function createTotalData() {
    return new Promise((resolve, reject) => {
      plus.sqlite.executeSql({
        name: "openbill",
        sql: 'create table if not exists open_total_data ("id" INTEGER PRIMARY KEY AUTOINCREMENT,"total_day" int(11) DEFAULT 0,"total_number" int(11) DEFAULT 0,"last_time" varchar(20) DEFAULT NULL)',
        success() {
          resolve(true);
        },
        fail(error) {
          reject(error);
        }
      });
    });
  }
  async function getTotalData() {
    return new Promise((resolve, reject) => {
      plus.sqlite.selectSql({
        name: "openbill",
        sql: "select * from open_total_data",
        success(data) {
          resolve(data);
        },
        fail(e) {
          reject(false);
        }
      });
    });
  }
  async function addTotalData(data) {
    return new Promise((resolve, reject) => {
      plus.sqlite.executeSql({
        name: "openbill",
        sql: 'insert into open_total_data(total_day,total_number,last_time) values("' + data.total_day + '","' + data.total_number + '","' + data.last + '")',
        success() {
          resolve(true);
        },
        fail(e) {
          reject(false);
        }
      });
    });
  }
  async function updateTotalData(data) {
    return new Promise((resolve, reject) => {
      plus.sqlite.executeSql({
        name: "openbill",
        sql: 'update  open_total_data set total_day ="' + data.total_day + '" ,total_number = "' + data.total_number + '" ,last_time = "' + data.last_time + '" where id = 1',
        success() {
          formatAppLog("log", "at common/sqlite.js:272", "\u66F4\u65B0\u6210\u529F");
          resolve(true);
        },
        fail(error) {
          reject(error);
        }
      });
    });
  }
  async function createNotes() {
    return new Promise((resolve, reject) => {
      plus.sqlite.executeSql({
        name: "openbill",
        sql: 'create table if not exists open_notes ("id" INTEGER PRIMARY KEY AUTOINCREMENT,"name" varchar(11) not null)',
        success(e) {
          resolve(true);
        },
        fail(e) {
          reject(false);
        }
      });
    });
  }
  async function getNotes() {
    return new Promise((resolve, reject) => {
      plus.sqlite.selectSql({
        name: "openbill",
        sql: "select * from open_notes",
        success(data) {
          resolve(data);
        },
        fail(e) {
          reject(false);
        }
      });
    });
  }
  async function addNotes(data) {
    return new Promise((resolve, reject) => {
      plus.sqlite.executeSql({
        name: "openbill",
        sql: 'insert into open_notes(name) values("' + data.name + '")',
        success() {
          resolve(true);
        },
        fail(e) {
          reject(false);
        }
      });
    });
  }
  async function deleteRowBill(id) {
    return new Promise((resolve, reject) => {
      plus.sqlite.executeSql({
        name: "openbill",
        sql: "delete from open_bill where id =" + id,
        success() {
          resolve(true);
        },
        fail(error) {
          reject(error);
        }
      });
    });
  }
  const date$2 = new Dates();
  const _sfc_main$9 = {
    components: {
      StatusBar,
      Navbar,
      BillList
    },
    data() {
      return {
        year: date$2.getYear(),
        month: date$2.getMonth(),
        date: date$2.getDate(),
        endDate: date$2.getTime(),
        startDate: "2020-01-01",
        billData: [],
        monthPay: 0,
        monthIncome: 0
      };
    },
    onLoad() {
      this.getBillDatas();
    },
    mounted() {
      this.initData();
      open.on("get_bill", () => {
        this.getBillDatas();
      });
    },
    methods: {
      getBillDatas() {
        let month = this.date.substring(5, 7);
        month = month.slice(0, 1) == 0 ? month.slice(1, 2) : month;
        let data = {
          year: this.date.substring(0, 4),
          month,
          day: date$2.getDay()
        };
        getBillData(data).then((datas) => {
          this.getBillDataItem(datas, (data2) => {
            this.billData = data2;
          });
        }).catch((error) => {
          formatAppLog("log", "at pages/index/index.vue:83", error);
        });
      },
      async getBillDataItem(data, fn) {
        let billdata = [];
        let monthPay = 0;
        let monthIncome = 0;
        for (let i = 0; i < data.length; i++) {
          let billDataItem = {
            name: `${data[i].month}\u6708${data[i].day}\u65E5`,
            items: [],
            income: 0,
            pay: 0
          };
          await getBill(data[i]).then((res) => {
            billDataItem.items = res;
            for (let j = 0; j < res.length; j++) {
              if (res[j].type === 0) {
                billDataItem.pay += parseFloat(res[j].cost);
              } else {
                billDataItem.income += parseFloat(res[j].cost);
              }
            }
          });
          monthIncome += billDataItem.income;
          monthPay += billDataItem.pay;
          billdata.push(billDataItem);
        }
        this.monthIncome = monthIncome;
        this.monthPay = monthPay;
        fn(billdata);
      },
      forEachItem(data) {
        let billDataItem = {
          name: `${data.month}\u6708${data.day}\u65E5`,
          items: [],
          income: 0,
          pay: 0
        };
        getBill(data).then((res) => {
          billDataItem.items = res;
          res.forEach((item) => {
            if (item.type === 0) {
              billDataItem.pay += parseFloat(item.cost);
            } else {
              billDataItem.income += parseFloat(item.cost);
            }
          });
        });
        return billDataItem;
      },
      async initData() {
        await getNotes().then((res) => {
          if (res.length <= 0) {
            let data = {
              name: "\u9ED8\u8BA4"
            };
            addNotes(data).then(() => {
              formatAppLog("log", "at pages/index/index.vue:144", "\u8D26\u672C\u6DFB\u52A0\u6210\u529F");
            }).catch(() => {
              formatAppLog("log", "at pages/index/index.vue:146", "\u8D26\u672C\u6DFB\u52A0\u5931\u8D25");
            });
          }
        });
        await getTotalData().then((res) => {
          if (res.length === 0) {
            let data = {
              total_day: 0,
              total_number: 0,
              last_time: date$2.getDate()
            };
            addTotalData(data).then(() => {
              formatAppLog("log", "at pages/index/index.vue:158", "\u603B\u6570\u636E\u6DFB\u52A0\u6210\u529F");
            }).catch(() => {
              formatAppLog("log", "at pages/index/index.vue:160", "\u603B\u6570\u636E\u6DFB\u52A0\u5931\u8D25");
            });
          }
        });
      },
      bindDateChange(e) {
        this.date = e.detail.value, formatAppLog("log", "at pages/index/index.vue:167", this.date);
        this.getBillDatas();
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
    const _component_bill_list = vue.resolveComponent("bill-list");
    return vue.openBlock(), vue.createElementBlock("view", { class: "index" }, [
      vue.createElementVNode("view", { class: "index-header" }, [
        vue.createVNode(_component_status_bar),
        vue.createElementVNode("view", { class: "index-header-content" }, [
          vue.createElementVNode("view", { class: "index-header-title" }, [
            vue.createElementVNode("span", null, "\u6211\u7684\u8D26\u5355"),
            vue.createElementVNode("picker", {
              mode: "date",
              value: $data.date,
              start: $data.startDate,
              end: $data.endDate,
              fields: "month",
              onChange: _cache[0] || (_cache[0] = (...args) => $options.bindDateChange && $options.bindDateChange(...args))
            }, [
              vue.createVNode(_component_uni_icons, {
                color: "#888",
                type: "calendar-filled",
                size: "26"
              })
            ], 40, ["value", "start", "end"])
          ]),
          vue.createElementVNode("view", { class: "index-header-box" }, [
            vue.createElementVNode("view", { class: "index-header-box-date" }, [
              vue.createElementVNode("text", { class: "index-header-box-title" }, vue.toDisplayString($data.date.substring(0, 4)) + "\u5E74 ", 1),
              vue.createElementVNode("view", {
                class: "ihbd-text",
                style: { "color": "#333333" }
              }, vue.toDisplayString(`${$data.date.substring(5, 7)}\u6708`), 1)
            ]),
            vue.createElementVNode("view", { class: "index-header-box-income" }, [
              vue.createElementVNode("text", { class: "index-header-box-title" }, "\u652F\u51FA"),
              vue.createElementVNode("text", { class: "ihbi-text" }, vue.toDisplayString($data.monthPay.toFixed(2)), 1)
            ]),
            vue.createElementVNode("view", { class: "index-header-box-pay" }, [
              vue.createElementVNode("text", { class: "index-header-box-title" }, "\u6536\u5165"),
              vue.createElementVNode("text", { class: "ihbp-text" }, vue.toDisplayString($data.monthIncome.toFixed(2)), 1)
            ])
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "index-bill" }, [
        vue.createVNode(_component_bill_list, { data: $data.billData }, null, 8, ["data"])
      ])
    ]);
  }
  var PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-57280228"], ["__file", "E:/app/vue-app/openbill/pages/index/index.vue"]]);
  function goReturn() {
    uni.navigateBack({
      delita: 1
    });
  }
  function goUrl(url) {
    uni.navigateTo({
      url
    });
  }
  function showInfo(message) {
    uni.showToast({
      title: message,
      icon: "none"
    });
  }
  const _sfc_main$8 = {
    components: {
      StatusBar
    },
    data() {
      return {
        billId: "",
        billType: "",
        billCost: "",
        billCreateTime: "",
        billContent: "",
        billName: "",
        billDate: "",
        billTime: "",
        billCategoryId: ""
      };
    },
    onLoad(option) {
      const that = this;
      that.billId = option.id;
      that.billType = option.type;
      that.billCost = option.cost;
      that.billCreateTime = option.create_time;
      that.billOther = option.other;
      that.billName = option.name;
      that.billDate = option.bill_time.substring(0, 10);
      that.billTime = option.bill_time;
      that.billCategoryId = option.category_id;
    },
    methods: {
      goBack() {
        uni.navigateBack({
          delta: 1
        });
      },
      removeInfo(id) {
        uni.showModal({
          title: "\u786E\u8BA4\u5220\u9664",
          content: "\u5220\u9664\u540E\u6570\u636E\u65E0\u6CD5\u56DE\u590D",
          success: function(res) {
            if (res.confirm) {
              deleteRowBill(id).then(() => {
                showInfo("\u5220\u9664\u6210\u529F");
                open.emit("get_bill");
                uni.switchTab({
                  url: "/pages/index/index"
                });
              }).catch(() => {
                showInfo("\u5220\u9664\u5931\u8D25");
              });
            } else if (res.cancel) {
              formatAppLog("log", "at pages/index/bill_details.vue:103", "\u7528\u6237\u70B9\u51FB\u53D6\u6D88");
            }
          }
        });
      },
      editInfo(id) {
        uni.navigateTo({
          url: `/pages/add/edit?id=${id}&bill_time=${this.billTime}&type=${this.billType}&cost=${this.billCost}&other=${this.billOther}&create_time=${this.billCreateTime}&category_id=${this.billCategoryId}`
        });
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    return vue.openBlock(), vue.createElementBlock("view", { class: "bill-details" }, [
      vue.createCommentVNode(" \u72B6\u6001\u680F\u5360\u4F4D "),
      vue.createElementVNode("view", { class: "bill-details-header" }, [
        vue.createVNode(_component_status_bar),
        vue.createElementVNode("view", { class: "topBar" }, [
          vue.createElementVNode("image", {
            class: "topBar-back",
            onClick: _cache[0] || (_cache[0] = ($event) => $options.goBack()),
            src: "/static/img/back.png",
            alt: "\u8FD4\u56DE"
          }),
          vue.createElementVNode("view", { class: "tabbar-category" }, [
            vue.createElementVNode("text", null, "\u8D26\u5355\u7F16\u8F91")
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "bill-details-main" }, [
        vue.createElementVNode("view", { class: "Info" }, [
          vue.createElementVNode("view", { class: "infoItem" }, [
            vue.createElementVNode("text", { class: "infoTitle" }, "\u65E5\xA0\xA0\xA0\u671F\uFF1A"),
            vue.createElementVNode("text", { class: "infoContent" }, vue.toDisplayString($data.billDate), 1)
          ]),
          vue.createElementVNode("view", { class: "infoItem" }, [
            vue.createElementVNode("text", { class: "infoTitle" }, "\u7C7B\xA0\xA0\xA0\u578B\uFF1A"),
            $data.billType == 0 ? (vue.openBlock(), vue.createElementBlock("text", {
              key: 0,
              class: "infoContent"
            }, "\u652F\u51FA")) : vue.createCommentVNode("v-if", true),
            $data.billType == 1 ? (vue.openBlock(), vue.createElementBlock("text", {
              key: 1,
              class: "infoContent"
            }, "\u6536\u5165")) : vue.createCommentVNode("v-if", true)
          ]),
          vue.createElementVNode("view", { class: "infoItem" }, [
            vue.createElementVNode("text", { class: "infoTitle" }, "\u91D1\xA0\xA0\xA0\u989D\uFF1A"),
            vue.createElementVNode("text", { class: "infoContent" }, vue.toDisplayString($data.billCost), 1)
          ]),
          vue.createElementVNode("view", { class: "infoItem" }, [
            vue.createElementVNode("text", { class: "infoTitle" }, "\u7C7B\xA0\xA0\xA0\u522B\uFF1A"),
            vue.createElementVNode("text", { class: "infoContent" }, vue.toDisplayString($data.billName), 1)
          ]),
          vue.createCommentVNode(' <view class="infoItem">\r\n					<text class="infoTitle">\u8D26&nbsp;&nbsp;&nbsp;\u672C\uFF1A</text><text class="infoContent">\u652F\u51FA</text>\r\n				</view> '),
          vue.createElementVNode("view", { class: "infoItem" }, [
            vue.createElementVNode("text", { class: "infoTitle" }, "\u5907\xA0\xA0\xA0\u6CE8\uFF1A"),
            vue.createElementVNode("text", { class: "infoContent" }, vue.toDisplayString(_ctx.billOther), 1)
          ]),
          vue.createElementVNode("view", { class: "infoItem" }, [
            vue.createElementVNode("text", { class: "infoTitle" }, "\u521B\xA0\xA0\xA0\u5EFA\uFF1A"),
            vue.createElementVNode("text", { class: "infoContent" }, vue.toDisplayString($data.billCreateTime), 1)
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "bill-details-Btn" }, [
        vue.createElementVNode("text", {
          class: "mbRemove",
          onClick: _cache[1] || (_cache[1] = ($event) => $options.removeInfo($data.billId))
        }, "\u5220\u9664"),
        vue.createElementVNode("text", {
          class: "mbEdit",
          onClick: _cache[2] || (_cache[2] = ($event) => $options.editInfo($data.billId))
        }, "\u7F16\u8F91")
      ])
    ]);
  }
  var PagesIndexBill_details = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__file", "E:/app/vue-app/openbill/pages/index/bill_details.vue"]]);
  const _sfc_main$7 = {
    name: "PageMeta",
    setup(props, { emit }) {
      onResize((evt) => {
        emit("resize", evt);
      });
    },
    props: {
      backgroundTextStyle: {
        type: String,
        default: "dark",
        validator(value) {
          return ["dark", "light"].indexOf(value) !== -1;
        }
      },
      backgroundColor: {
        type: String,
        default: "#ffffff"
      },
      backgroundColorTop: {
        type: String,
        default: "#ffffff"
      },
      backgroundColorBottom: {
        type: String,
        default: "#ffffff"
      },
      scrollTop: {
        type: String,
        default: ""
      },
      scrollDuration: {
        type: Number,
        default: 300
      },
      pageStyle: {
        type: String,
        default: ""
      },
      enablePullDownRefresh: {
        type: [Boolean, String],
        default: false
      },
      rootFontSize: {
        type: String,
        default: ""
      }
    },
    created() {
      const page = getCurrentPages()[0];
      this.$pageVm = page.$vm || page;
      this._currentWebview = page.$getAppWebview();
      if (this.enablePullDownRefresh) {
        this.setPullDownRefresh(this._currentWebview, true);
      }
      this.$watch("enablePullDownRefresh", (val) => {
        this.setPullDownRefresh(this._currentWebview, val);
      });
      this.$watch("backgroundTextStyle", () => {
        this.setBackgroundTextStyle();
      });
      this.$watch(() => [
        this.rootFontSize,
        this.pageStyle
      ], () => {
        this.setPageMeta();
      });
      this.$watch(() => [
        this.backgroundColor,
        this.backgroundColorTop,
        this.backgroundColorBottom
      ], () => {
        this.setBackgroundColor();
      });
      this.$watch(() => [
        this.scrollTop,
        this.scrollDuration
      ], () => {
        this.pageScrollTo();
      });
    },
    beforeMount() {
      this.setBackgroundColor();
      if (this.rootFontSize || this.pageStyle) {
        this.setPageMeta();
      }
      this.backgroundTextStyle && this.setBackgroundTextStyle();
      this.scrollTop && this.pageScrollTo();
    },
    methods: {
      setPullDownRefresh(webview, enabled) {
        webview.setStyle({
          pullToRefresh: {
            support: enabled,
            style: plus.os.name === "Android" ? "circle" : "default"
          }
        });
      },
      setPageMeta() {
        uni.setPageMeta({
          pageStyle: this.pageStyle,
          rootFontSize: this.rootFontSize
        });
      },
      setBackgroundTextStyle() {
      },
      setBackgroundColor() {
      },
      pageScrollTo() {
        let scrollTop = String(this.scrollTop);
        if (scrollTop.indexOf("rpx") !== -1) {
          scrollTop = uni.upx2px(scrollTop.replace("rpx", ""));
        }
        scrollTop = parseFloat(scrollTop);
        if (isNaN(scrollTop)) {
          return;
        }
        uni.pageScrollTo({
          scrollTop,
          duration: this.scrollDuration,
          success: () => {
          }
        });
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { style: { "display": "none" } }, [
      vue.renderSlot(_ctx.$slots, "default")
    ]);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "D:/code/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-components/lib/page-meta/page-meta.vue"]]);
  var calendar = {
    lunarInfo: [
      19416,
      19168,
      42352,
      21717,
      53856,
      55632,
      91476,
      22176,
      39632,
      21970,
      19168,
      42422,
      42192,
      53840,
      119381,
      46400,
      54944,
      44450,
      38320,
      84343,
      18800,
      42160,
      46261,
      27216,
      27968,
      109396,
      11104,
      38256,
      21234,
      18800,
      25958,
      54432,
      59984,
      28309,
      23248,
      11104,
      100067,
      37600,
      116951,
      51536,
      54432,
      120998,
      46416,
      22176,
      107956,
      9680,
      37584,
      53938,
      43344,
      46423,
      27808,
      46416,
      86869,
      19872,
      42416,
      83315,
      21168,
      43432,
      59728,
      27296,
      44710,
      43856,
      19296,
      43748,
      42352,
      21088,
      62051,
      55632,
      23383,
      22176,
      38608,
      19925,
      19152,
      42192,
      54484,
      53840,
      54616,
      46400,
      46752,
      103846,
      38320,
      18864,
      43380,
      42160,
      45690,
      27216,
      27968,
      44870,
      43872,
      38256,
      19189,
      18800,
      25776,
      29859,
      59984,
      27480,
      23232,
      43872,
      38613,
      37600,
      51552,
      55636,
      54432,
      55888,
      30034,
      22176,
      43959,
      9680,
      37584,
      51893,
      43344,
      46240,
      47780,
      44368,
      21977,
      19360,
      42416,
      86390,
      21168,
      43312,
      31060,
      27296,
      44368,
      23378,
      19296,
      42726,
      42208,
      53856,
      60005,
      54576,
      23200,
      30371,
      38608,
      19195,
      19152,
      42192,
      118966,
      53840,
      54560,
      56645,
      46496,
      22224,
      21938,
      18864,
      42359,
      42160,
      43600,
      111189,
      27936,
      44448,
      84835,
      37744,
      18936,
      18800,
      25776,
      92326,
      59984,
      27424,
      108228,
      43744,
      41696,
      53987,
      51552,
      54615,
      54432,
      55888,
      23893,
      22176,
      42704,
      21972,
      21200,
      43448,
      43344,
      46240,
      46758,
      44368,
      21920,
      43940,
      42416,
      21168,
      45683,
      26928,
      29495,
      27296,
      44368,
      84821,
      19296,
      42352,
      21732,
      53600,
      59752,
      54560,
      55968,
      92838,
      22224,
      19168,
      43476,
      41680,
      53584,
      62034,
      54560
    ],
    solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    Gan: ["\u7532", "\u4E59", "\u4E19", "\u4E01", "\u620A", "\u5DF1", "\u5E9A", "\u8F9B", "\u58EC", "\u7678"],
    Zhi: ["\u5B50", "\u4E11", "\u5BC5", "\u536F", "\u8FB0", "\u5DF3", "\u5348", "\u672A", "\u7533", "\u9149", "\u620C", "\u4EA5"],
    Animals: ["\u9F20", "\u725B", "\u864E", "\u5154", "\u9F99", "\u86C7", "\u9A6C", "\u7F8A", "\u7334", "\u9E21", "\u72D7", "\u732A"],
    solarTerm: ["\u5C0F\u5BD2", "\u5927\u5BD2", "\u7ACB\u6625", "\u96E8\u6C34", "\u60CA\u86F0", "\u6625\u5206", "\u6E05\u660E", "\u8C37\u96E8", "\u7ACB\u590F", "\u5C0F\u6EE1", "\u8292\u79CD", "\u590F\u81F3", "\u5C0F\u6691", "\u5927\u6691", "\u7ACB\u79CB", "\u5904\u6691", "\u767D\u9732", "\u79CB\u5206", "\u5BD2\u9732", "\u971C\u964D", "\u7ACB\u51AC", "\u5C0F\u96EA", "\u5927\u96EA", "\u51AC\u81F3"],
    sTermInfo: [
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c3598082c95f8c965cc920f",
      "97bd0b06bdb0722c965ce1cfcc920f",
      "b027097bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd0b06bdb0722c965ce1cfcc920f",
      "b027097bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd0b06bdb0722c965ce1cfcc920f",
      "b027097bd097c36b0b6fc9274c91aa",
      "9778397bd19801ec9210c965cc920e",
      "97b6b97bd19801ec95f8c965cc920f",
      "97bd09801d98082c95f8e1cfcc920f",
      "97bd097bd097c36b0b6fc9210c8dc2",
      "9778397bd197c36c9210c9274c91aa",
      "97b6b97bd19801ec95f8c965cc920e",
      "97bd09801d98082c95f8e1cfcc920f",
      "97bd097bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c91aa",
      "97b6b97bd19801ec95f8c965cc920e",
      "97bcf97c3598082c95f8e1cfcc920f",
      "97bd097bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c3598082c95f8c965cc920f",
      "97bd097bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c3598082c95f8c965cc920f",
      "97bd097bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd097bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd097bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd097bd07f595b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9210c8dc2",
      "9778397bd19801ec9210c9274c920e",
      "97b6b97bd19801ec95f8c965cc920f",
      "97bd07f5307f595b0b0bc920fb0722",
      "7f0e397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c920e",
      "97b6b97bd19801ec95f8c965cc920f",
      "97bd07f5307f595b0b0bc920fb0722",
      "7f0e397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bd07f1487f595b0b0bc920fb0722",
      "7f0e397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf7f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf7f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf7f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf7f1487f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c9274c920e",
      "97bcf7f0e47f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9210c91aa",
      "97b6b97bd197c36c9210c9274c920e",
      "97bcf7f0e47f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c920e",
      "97b6b7f0e47f531b0723b0b6fb0722",
      "7f0e37f5307f595b0b0bc920fb0722",
      "7f0e397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36b0b70c9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e37f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc9210c8dc2",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0787b0721",
      "7f0e27f0e47f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9210c91aa",
      "97b6b7f0e47f149b0723b0787b0721",
      "7f0e27f0e47f531b0723b0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9210c8dc2",
      "977837f0e37f149b0723b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e37f5307f595b0b0bc920fb0722",
      "7f0e397bd097c35b0b6fc9210c8dc2",
      "977837f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e37f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc9210c8dc2",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f149b0723b0787b0721",
      "7f0e27f0e47f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "977837f0e37f14998082b0723b06bd",
      "7f07e7f0e37f149b0723b0787b0721",
      "7f0e27f0e47f531b0723b0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "977837f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e37f1487f595b0b0bb0b6fb0722",
      "7f0e37f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e37f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e37f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e37f14898082b072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e37f14898082b072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e366aa89801eb072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f149b0723b0787b0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e366aa89801eb072297c35",
      "7ec967f0e37f14998082b0723b06bd",
      "7f07e7f0e47f149b0723b0787b0721",
      "7f0e27f0e47f531b0723b0b6fb0722",
      "7f0e37f0e366aa89801eb072297c35",
      "7ec967f0e37f14998082b0723b06bd",
      "7f07e7f0e37f14998083b0787b0721",
      "7f0e27f0e47f531b0723b0b6fb0722",
      "7f0e37f0e366aa89801eb072297c35",
      "7ec967f0e37f14898082b0723b02d5",
      "7f07e7f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e36665b66aa89801e9808297c35",
      "665f67f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e36665b66a449801e9808297c35",
      "665f67f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e36665b66a449801e9808297c35",
      "665f67f0e37f14898082b072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e26665b66a449801e9808297c35",
      "665f67f0e37f1489801eb072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722"
    ],
    nStr1: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341"],
    nStr2: ["\u521D", "\u5341", "\u5EFF", "\u5345"],
    nStr3: ["\u6B63", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341", "\u51AC", "\u814A"],
    lYearDays: function(y) {
      var i;
      var sum = 348;
      for (i = 32768; i > 8; i >>= 1) {
        sum += this.lunarInfo[y - 1900] & i ? 1 : 0;
      }
      return sum + this.leapDays(y);
    },
    leapMonth: function(y) {
      return this.lunarInfo[y - 1900] & 15;
    },
    leapDays: function(y) {
      if (this.leapMonth(y)) {
        return this.lunarInfo[y - 1900] & 65536 ? 30 : 29;
      }
      return 0;
    },
    monthDays: function(y, m) {
      if (m > 12 || m < 1) {
        return -1;
      }
      return this.lunarInfo[y - 1900] & 65536 >> m ? 30 : 29;
    },
    solarDays: function(y, m) {
      if (m > 12 || m < 1) {
        return -1;
      }
      var ms = m - 1;
      if (ms == 1) {
        return y % 4 == 0 && y % 100 != 0 || y % 400 == 0 ? 29 : 28;
      } else {
        return this.solarMonth[ms];
      }
    },
    toGanZhiYear: function(lYear) {
      var ganKey = (lYear - 3) % 10;
      var zhiKey = (lYear - 3) % 12;
      if (ganKey == 0)
        ganKey = 10;
      if (zhiKey == 0)
        zhiKey = 12;
      return this.Gan[ganKey - 1] + this.Zhi[zhiKey - 1];
    },
    toAstro: function(cMonth, cDay) {
      var s = "\u9B54\u7FAF\u6C34\u74F6\u53CC\u9C7C\u767D\u7F8A\u91D1\u725B\u53CC\u5B50\u5DE8\u87F9\u72EE\u5B50\u5904\u5973\u5929\u79E4\u5929\u874E\u5C04\u624B\u9B54\u7FAF";
      var arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
      return s.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + "\u5EA7";
    },
    toGanZhi: function(offset) {
      return this.Gan[offset % 10] + this.Zhi[offset % 12];
    },
    getTerm: function(y, n) {
      if (y < 1900 || y > 2100) {
        return -1;
      }
      if (n < 1 || n > 24) {
        return -1;
      }
      var _table = this.sTermInfo[y - 1900];
      var _info = [
        parseInt("0x" + _table.substr(0, 5)).toString(),
        parseInt("0x" + _table.substr(5, 5)).toString(),
        parseInt("0x" + _table.substr(10, 5)).toString(),
        parseInt("0x" + _table.substr(15, 5)).toString(),
        parseInt("0x" + _table.substr(20, 5)).toString(),
        parseInt("0x" + _table.substr(25, 5)).toString()
      ];
      var _calday = [
        _info[0].substr(0, 1),
        _info[0].substr(1, 2),
        _info[0].substr(3, 1),
        _info[0].substr(4, 2),
        _info[1].substr(0, 1),
        _info[1].substr(1, 2),
        _info[1].substr(3, 1),
        _info[1].substr(4, 2),
        _info[2].substr(0, 1),
        _info[2].substr(1, 2),
        _info[2].substr(3, 1),
        _info[2].substr(4, 2),
        _info[3].substr(0, 1),
        _info[3].substr(1, 2),
        _info[3].substr(3, 1),
        _info[3].substr(4, 2),
        _info[4].substr(0, 1),
        _info[4].substr(1, 2),
        _info[4].substr(3, 1),
        _info[4].substr(4, 2),
        _info[5].substr(0, 1),
        _info[5].substr(1, 2),
        _info[5].substr(3, 1),
        _info[5].substr(4, 2)
      ];
      return parseInt(_calday[n - 1]);
    },
    toChinaMonth: function(m) {
      if (m > 12 || m < 1) {
        return -1;
      }
      var s = this.nStr3[m - 1];
      s += "\u6708";
      return s;
    },
    toChinaDay: function(d) {
      var s;
      switch (d) {
        case 10:
          s = "\u521D\u5341";
          break;
        case 20:
          s = "\u4E8C\u5341";
          break;
        case 30:
          s = "\u4E09\u5341";
          break;
        default:
          s = this.nStr2[Math.floor(d / 10)];
          s += this.nStr1[d % 10];
      }
      return s;
    },
    getAnimal: function(y) {
      return this.Animals[(y - 4) % 12];
    },
    solar2lunar: function(y, m, d) {
      if (y < 1900 || y > 2100) {
        return -1;
      }
      if (y == 1900 && m == 1 && d < 31) {
        return -1;
      }
      if (!y) {
        var objDate = new Date();
      } else {
        var objDate = new Date(y, parseInt(m) - 1, d);
      }
      var i;
      var leap = 0;
      var temp = 0;
      var y = objDate.getFullYear();
      var m = objDate.getMonth() + 1;
      var d = objDate.getDate();
      var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 864e5;
      for (i = 1900; i < 2101 && offset > 0; i++) {
        temp = this.lYearDays(i);
        offset -= temp;
      }
      if (offset < 0) {
        offset += temp;
        i--;
      }
      var isTodayObj = new Date();
      var isToday = false;
      if (isTodayObj.getFullYear() == y && isTodayObj.getMonth() + 1 == m && isTodayObj.getDate() == d) {
        isToday = true;
      }
      var nWeek = objDate.getDay();
      var cWeek = this.nStr1[nWeek];
      if (nWeek == 0) {
        nWeek = 7;
      }
      var year = i;
      var leap = this.leapMonth(i);
      var isLeap = false;
      for (i = 1; i < 13 && offset > 0; i++) {
        if (leap > 0 && i == leap + 1 && isLeap == false) {
          --i;
          isLeap = true;
          temp = this.leapDays(year);
        } else {
          temp = this.monthDays(year, i);
        }
        if (isLeap == true && i == leap + 1) {
          isLeap = false;
        }
        offset -= temp;
      }
      if (offset == 0 && leap > 0 && i == leap + 1) {
        if (isLeap) {
          isLeap = false;
        } else {
          isLeap = true;
          --i;
        }
      }
      if (offset < 0) {
        offset += temp;
        --i;
      }
      var month = i;
      var day = offset + 1;
      var sm = m - 1;
      var gzY = this.toGanZhiYear(year);
      var firstNode = this.getTerm(y, m * 2 - 1);
      var secondNode = this.getTerm(y, m * 2);
      var gzM = this.toGanZhi((y - 1900) * 12 + m + 11);
      if (d >= firstNode) {
        gzM = this.toGanZhi((y - 1900) * 12 + m + 12);
      }
      var isTerm = false;
      var Term = null;
      if (firstNode == d) {
        isTerm = true;
        Term = this.solarTerm[m * 2 - 2];
      }
      if (secondNode == d) {
        isTerm = true;
        Term = this.solarTerm[m * 2 - 1];
      }
      var dayCyclical = Date.UTC(y, sm, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10;
      var gzD = this.toGanZhi(dayCyclical + d - 1);
      var astro = this.toAstro(m, d);
      return { "lYear": year, "lMonth": month, "lDay": day, "Animal": this.getAnimal(year), "IMonthCn": (isLeap ? "\u95F0" : "") + this.toChinaMonth(month), "IDayCn": this.toChinaDay(day), "cYear": y, "cMonth": m, "cDay": d, "gzYear": gzY, "gzMonth": gzM, "gzDay": gzD, "isToday": isToday, "isLeap": isLeap, "nWeek": nWeek, "ncWeek": "\u661F\u671F" + cWeek, "isTerm": isTerm, "Term": Term, "astro": astro };
    },
    lunar2solar: function(y, m, d, isLeapMonth) {
      var isLeapMonth = !!isLeapMonth;
      var leapMonth = this.leapMonth(y);
      this.leapDays(y);
      if (isLeapMonth && leapMonth != m) {
        return -1;
      }
      if (y == 2100 && m == 12 && d > 1 || y == 1900 && m == 1 && d < 31) {
        return -1;
      }
      var day = this.monthDays(y, m);
      var _day = day;
      if (isLeapMonth) {
        _day = this.leapDays(y, m);
      }
      if (y < 1900 || y > 2100 || d > _day) {
        return -1;
      }
      var offset = 0;
      for (var i = 1900; i < y; i++) {
        offset += this.lYearDays(i);
      }
      var leap = 0;
      var isAdd = false;
      for (var i = 1; i < m; i++) {
        leap = this.leapMonth(y);
        if (!isAdd) {
          if (leap <= i && leap > 0) {
            offset += this.leapDays(y);
            isAdd = true;
          }
        }
        offset += this.monthDays(y, i);
      }
      if (isLeapMonth) {
        offset += day;
      }
      var stmap = Date.UTC(1900, 1, 30, 0, 0, 0);
      var calObj = new Date((offset + d - 31) * 864e5 + stmap);
      var cY = calObj.getUTCFullYear();
      var cM = calObj.getUTCMonth() + 1;
      var cD = calObj.getUTCDate();
      return this.solar2lunar(cY, cM, cD);
    }
  };
  class Calendar {
    constructor({
      date: date2,
      selected,
      startDate,
      endDate,
      range
    } = {}) {
      this.date = this.getDate(new Date());
      this.selected = selected || [];
      this.startDate = startDate;
      this.endDate = endDate;
      this.range = range;
      this.cleanMultipleStatus();
      this.weeks = {};
    }
    setDate(date2) {
      this.selectDate = this.getDate(date2);
      this._getWeek(this.selectDate.fullDate);
    }
    cleanMultipleStatus() {
      this.multipleStatus = {
        before: "",
        after: "",
        data: []
      };
    }
    resetSatrtDate(startDate) {
      this.startDate = startDate;
    }
    resetEndDate(endDate) {
      this.endDate = endDate;
    }
    getDate(date2, AddDayCount = 0, str = "day") {
      if (!date2) {
        date2 = new Date();
      }
      if (typeof date2 !== "object") {
        date2 = date2.replace(/-/g, "/");
      }
      const dd = new Date(date2);
      switch (str) {
        case "day":
          dd.setDate(dd.getDate() + AddDayCount);
          break;
        case "month":
          if (dd.getDate() === 31) {
            dd.setDate(dd.getDate() + AddDayCount);
          } else {
            dd.setMonth(dd.getMonth() + AddDayCount);
          }
          break;
        case "year":
          dd.setFullYear(dd.getFullYear() + AddDayCount);
          break;
      }
      const y = dd.getFullYear();
      const m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
      const d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
      return {
        fullDate: y + "-" + m + "-" + d,
        year: y,
        month: m,
        date: d,
        day: dd.getDay()
      };
    }
    _getLastMonthDays(firstDay, full) {
      let dateArr = [];
      for (let i = firstDay; i > 0; i--) {
        const beforeDate = new Date(full.year, full.month - 1, -i + 1).getDate();
        dateArr.push({
          date: beforeDate,
          month: full.month - 1,
          lunar: this.getlunar(full.year, full.month - 1, beforeDate),
          disable: true
        });
      }
      return dateArr;
    }
    _currentMonthDys(dateData, full) {
      let dateArr = [];
      let fullDate = this.date.fullDate;
      for (let i = 1; i <= dateData; i++) {
        let nowDate = full.year + "-" + (full.month < 10 ? full.month : full.month) + "-" + (i < 10 ? "0" + i : i);
        let isDay = fullDate === nowDate;
        let info = this.selected && this.selected.find((item) => {
          if (this.dateEqual(nowDate, item.date)) {
            return item;
          }
        });
        let disableBefore = true;
        let disableAfter = true;
        if (this.startDate) {
          disableBefore = this.dateCompare(this.startDate, nowDate);
        }
        if (this.endDate) {
          disableAfter = this.dateCompare(nowDate, this.endDate);
        }
        let multiples = this.multipleStatus.data;
        let checked = false;
        let multiplesStatus = -1;
        if (this.range) {
          if (multiples) {
            multiplesStatus = multiples.findIndex((item) => {
              return this.dateEqual(item, nowDate);
            });
          }
          if (multiplesStatus !== -1) {
            checked = true;
          }
        }
        let data = {
          fullDate: nowDate,
          year: full.year,
          date: i,
          multiple: this.range ? checked : false,
          beforeMultiple: this.dateEqual(this.multipleStatus.before, nowDate),
          afterMultiple: this.dateEqual(this.multipleStatus.after, nowDate),
          month: full.month,
          lunar: this.getlunar(full.year, full.month, i),
          disable: !(disableBefore && disableAfter),
          isDay
        };
        if (info) {
          data.extraInfo = info;
        }
        dateArr.push(data);
      }
      return dateArr;
    }
    _getNextMonthDays(surplus, full) {
      let dateArr = [];
      for (let i = 1; i < surplus + 1; i++) {
        dateArr.push({
          date: i,
          month: Number(full.month) + 1,
          lunar: this.getlunar(full.year, Number(full.month) + 1, i),
          disable: true
        });
      }
      return dateArr;
    }
    getInfo(date2) {
      if (!date2) {
        date2 = new Date();
      }
      const dateInfo = this.canlender.find((item) => item.fullDate === this.getDate(date2).fullDate);
      return dateInfo;
    }
    dateCompare(startDate, endDate) {
      startDate = new Date(startDate.replace("-", "/").replace("-", "/"));
      endDate = new Date(endDate.replace("-", "/").replace("-", "/"));
      if (startDate <= endDate) {
        return true;
      } else {
        return false;
      }
    }
    dateEqual(before, after) {
      before = new Date(before.replace("-", "/").replace("-", "/"));
      after = new Date(after.replace("-", "/").replace("-", "/"));
      if (before.getTime() - after.getTime() === 0) {
        return true;
      } else {
        return false;
      }
    }
    geDateAll(begin, end) {
      var arr = [];
      var ab = begin.split("-");
      var ae = end.split("-");
      var db = new Date();
      db.setFullYear(ab[0], ab[1] - 1, ab[2]);
      var de = new Date();
      de.setFullYear(ae[0], ae[1] - 1, ae[2]);
      var unixDb = db.getTime() - 24 * 60 * 60 * 1e3;
      var unixDe = de.getTime() - 24 * 60 * 60 * 1e3;
      for (var k = unixDb; k <= unixDe; ) {
        k = k + 24 * 60 * 60 * 1e3;
        arr.push(this.getDate(new Date(parseInt(k))).fullDate);
      }
      return arr;
    }
    getlunar(year, month, date2) {
      return calendar.solar2lunar(year, month, date2);
    }
    setSelectInfo(data, value) {
      this.selected = value;
      this._getWeek(data);
    }
    setMultiple(fullDate) {
      let {
        before,
        after
      } = this.multipleStatus;
      if (!this.range)
        return;
      if (before && after) {
        this.multipleStatus.before = "";
        this.multipleStatus.after = "";
        this.multipleStatus.data = [];
      } else {
        if (!before) {
          this.multipleStatus.before = fullDate;
        } else {
          this.multipleStatus.after = fullDate;
          if (this.dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
          } else {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
          }
        }
      }
      this._getWeek(fullDate);
    }
    _getWeek(dateData) {
      const {
        year,
        month
      } = this.getDate(dateData);
      let firstDay = new Date(year, month - 1, 1).getDay();
      let currentDay = new Date(year, month, 0).getDate();
      let dates = {
        lastMonthDays: this._getLastMonthDays(firstDay, this.getDate(dateData)),
        currentMonthDys: this._currentMonthDys(currentDay, this.getDate(dateData)),
        nextMonthDays: [],
        weeks: []
      };
      let canlender = [];
      const surplus = 42 - (dates.lastMonthDays.length + dates.currentMonthDys.length);
      dates.nextMonthDays = this._getNextMonthDays(surplus, this.getDate(dateData));
      canlender = canlender.concat(dates.lastMonthDays, dates.currentMonthDys, dates.nextMonthDays);
      let weeks = {};
      for (let i = 0; i < canlender.length; i++) {
        if (i % 7 === 0) {
          weeks[parseInt(i / 7)] = new Array(7);
        }
        weeks[parseInt(i / 7)][i % 7] = canlender[i];
      }
      this.canlender = canlender;
      this.weeks = weeks;
    }
  }
  const isObject$1 = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject$1(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    const lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      [locale, messages2] = [
        messages2,
        locale
      ];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  var en = {
    "uni-calender.ok": "ok",
    "uni-calender.cancel": "cancel",
    "uni-calender.today": "today",
    "uni-calender.MON": "MON",
    "uni-calender.TUE": "TUE",
    "uni-calender.WED": "WED",
    "uni-calender.THU": "THU",
    "uni-calender.FRI": "FRI",
    "uni-calender.SAT": "SAT",
    "uni-calender.SUN": "SUN"
  };
  var zhHans = {
    "uni-calender.ok": "\u786E\u5B9A",
    "uni-calender.cancel": "\u53D6\u6D88",
    "uni-calender.today": "\u4ECA\u65E5",
    "uni-calender.SUN": "\u65E5",
    "uni-calender.MON": "\u4E00",
    "uni-calender.TUE": "\u4E8C",
    "uni-calender.WED": "\u4E09",
    "uni-calender.THU": "\u56DB",
    "uni-calender.FRI": "\u4E94",
    "uni-calender.SAT": "\u516D"
  };
  var zhHant = {
    "uni-calender.ok": "\u78BA\u5B9A",
    "uni-calender.cancel": "\u53D6\u6D88",
    "uni-calender.today": "\u4ECA\u65E5",
    "uni-calender.SUN": "\u65E5",
    "uni-calender.MON": "\u4E00",
    "uni-calender.TUE": "\u4E8C",
    "uni-calender.WED": "\u4E09",
    "uni-calender.THU": "\u56DB",
    "uni-calender.FRI": "\u4E94",
    "uni-calender.SAT": "\u516D"
  };
  var messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const { t: t$1 } = initVueI18n(messages);
  const _sfc_main$6 = {
    emits: ["change"],
    props: {
      weeks: {
        type: Object,
        default() {
          return {};
        }
      },
      calendar: {
        type: Object,
        default: () => {
          return {};
        }
      },
      selected: {
        type: Array,
        default: () => {
          return [];
        }
      },
      lunar: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      todayText() {
        return t$1("uni-calender.today");
      }
    },
    methods: {
      choiceDate(weeks) {
        let date2 = new Date();
        let year = date2.getFullYear();
        let month = date2.getMonth() + 1;
        let day = date2.getDate();
        if (weeks.year >= year && weeks.month >= month && weeks.date > day) {
          return false;
        }
        this.$emit("change", weeks);
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["uni-calendar-item__weeks-box", {
        "uni-calendar-item--disable": $props.weeks.disable,
        "uni-calendar-item--isDay": $props.calendar.fullDate === $props.weeks.fullDate && $props.weeks.isDay,
        "uni-calendar-item--checked": $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay,
        "uni-calendar-item--before-checked": $props.weeks.beforeMultiple,
        "uni-calendar-item--multiple": $props.weeks.multiple,
        "uni-calendar-item--after-checked": $props.weeks.afterMultiple
      }]),
      onClick: _cache[0] || (_cache[0] = ($event) => $options.choiceDate($props.weeks))
    }, [
      vue.createElementVNode("view", { class: "uni-calendar-item__weeks-box-item" }, [
        $props.selected && $props.weeks.extraInfo ? (vue.openBlock(), vue.createElementBlock("text", {
          key: 0,
          class: "uni-calendar-item__weeks-box-circle"
        })) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("text", {
          class: vue.normalizeClass(["uni-calendar-item__weeks-box-text", {
            "uni-calendar-item--isDay-text": $props.weeks.isDay,
            "uni-calendar-item--isDay": $props.calendar.fullDate === $props.weeks.fullDate && $props.weeks.isDay,
            "uni-calendar-item--checked": $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay,
            "uni-calendar-item--before-checked": $props.weeks.beforeMultiple,
            "uni-calendar-item--multiple": $props.weeks.multiple,
            "uni-calendar-item--after-checked": $props.weeks.afterMultiple,
            "uni-calendar-item--disable": $props.weeks.disable
          }])
        }, vue.toDisplayString($props.weeks.date), 3),
        !$props.lunar && !$props.weeks.extraInfo && $props.weeks.isDay ? (vue.openBlock(), vue.createElementBlock("text", {
          key: 1,
          class: vue.normalizeClass(["uni-calendar-item__weeks-lunar-text", {
            "uni-calendar-item--isDay-text": $props.weeks.isDay,
            "uni-calendar-item--isDay": $props.calendar.fullDate === $props.weeks.fullDate && $props.weeks.isDay,
            "uni-calendar-item--checked": $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay,
            "uni-calendar-item--before-checked": $props.weeks.beforeMultiple,
            "uni-calendar-item--multiple": $props.weeks.multiple,
            "uni-calendar-item--after-checked": $props.weeks.afterMultiple
          }])
        }, vue.toDisplayString($options.todayText), 3)) : vue.createCommentVNode("v-if", true),
        $props.lunar && !$props.weeks.extraInfo ? (vue.openBlock(), vue.createElementBlock("text", {
          key: 2,
          class: vue.normalizeClass(["uni-calendar-item__weeks-lunar-text", {
            "uni-calendar-item--isDay-text": $props.weeks.isDay,
            "uni-calendar-item--isDay": $props.calendar.fullDate === $props.weeks.fullDate && $props.weeks.isDay,
            "uni-calendar-item--checked": $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay,
            "uni-calendar-item--before-checked": $props.weeks.beforeMultiple,
            "uni-calendar-item--multiple": $props.weeks.multiple,
            "uni-calendar-item--after-checked": $props.weeks.afterMultiple,
            "uni-calendar-item--disable": $props.weeks.disable
          }])
        }, vue.toDisplayString($props.weeks.isDay ? $options.todayText : $props.weeks.lunar.IDayCn === "\u521D\u4E00" ? $props.weeks.lunar.IMonthCn : $props.weeks.lunar.IDayCn), 3)) : vue.createCommentVNode("v-if", true),
        $props.weeks.extraInfo && $props.weeks.extraInfo.info ? (vue.openBlock(), vue.createElementBlock("text", {
          key: 3,
          class: vue.normalizeClass(["uni-calendar-item__weeks-lunar-text", {
            "uni-calendar-item--extra": $props.weeks.extraInfo.info,
            "uni-calendar-item--isDay-text": $props.weeks.isDay,
            "uni-calendar-item--isDay": $props.calendar.fullDate === $props.weeks.fullDate && $props.weeks.isDay,
            "uni-calendar-item--checked": $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay,
            "uni-calendar-item--before-checked": $props.weeks.beforeMultiple,
            "uni-calendar-item--multiple": $props.weeks.multiple,
            "uni-calendar-item--after-checked": $props.weeks.afterMultiple,
            "uni-calendar-item--disable": $props.weeks.disable
          }])
        }, vue.toDisplayString($props.weeks.extraInfo.info), 3)) : vue.createCommentVNode("v-if", true)
      ])
    ], 2);
  }
  var calendarItem = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-6097fd5b"], ["__file", "E:/app/vue-app/openbill/uni_modules/uni-calendar/components/uni-calendar/uni-calendar-item.vue"]]);
  const { t } = initVueI18n(messages);
  const _sfc_main$5 = {
    components: {
      calendarItem
    },
    emits: ["close", "confirm", "change", "monthSwitch"],
    props: {
      date: {
        type: String,
        default: ""
      },
      selected: {
        type: Array,
        default() {
          return [];
        }
      },
      lunar: {
        type: Boolean,
        default: false
      },
      startDate: {
        type: String,
        default: ""
      },
      endDate: {
        type: String,
        default: ""
      },
      range: {
        type: Boolean,
        default: false
      },
      insert: {
        type: Boolean,
        default: true
      },
      showMonth: {
        type: Boolean,
        default: true
      },
      clearDate: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        show: false,
        weeks: [],
        calendar: {},
        nowDate: "",
        aniMaskShow: false
      };
    },
    computed: {
      okText() {
        return t("uni-calender.ok");
      },
      cancelText() {
        return t("uni-calender.cancel");
      },
      todayText() {
        return t("uni-calender.today");
      },
      monText() {
        return t("uni-calender.MON");
      },
      TUEText() {
        return t("uni-calender.TUE");
      },
      WEDText() {
        return t("uni-calender.WED");
      },
      THUText() {
        return t("uni-calender.THU");
      },
      FRIText() {
        return t("uni-calender.FRI");
      },
      SATText() {
        return t("uni-calender.SAT");
      },
      SUNText() {
        return t("uni-calender.SUN");
      }
    },
    watch: {
      date(newVal) {
        this.init(newVal);
      },
      startDate(val) {
        this.cale.resetSatrtDate(val);
        this.cale.setDate(this.nowDate.fullDate);
        this.weeks = this.cale.weeks;
      },
      endDate(val) {
        this.cale.resetEndDate(val);
        this.cale.setDate(this.nowDate.fullDate);
        this.weeks = this.cale.weeks;
      },
      selected(newVal) {
        this.cale.setSelectInfo(this.nowDate.fullDate, newVal);
        this.weeks = this.cale.weeks;
      }
    },
    created() {
      this.cale = new Calendar({
        selected: this.selected,
        startDate: this.startDate,
        endDate: this.endDate,
        range: this.range
      });
      this.init(this.date);
    },
    methods: {
      clean() {
      },
      bindDateChange(e) {
        const value = e.detail.value + "-1";
        formatAppLog("log", "at uni_modules/uni-calendar/components/uni-calendar/uni-calendar.vue:220", this.cale.getDate(value));
        this.setDate(value);
      },
      init(date2) {
        this.cale.setDate(date2);
        this.weeks = this.cale.weeks;
        this.nowDate = this.calendar = this.cale.getInfo(date2);
      },
      open() {
        if (this.clearDate && !this.insert) {
          this.cale.cleanMultipleStatus();
          this.init(this.date);
        }
        this.show = true;
        this.$nextTick(() => {
          setTimeout(() => {
            this.aniMaskShow = true;
          }, 50);
        });
      },
      close() {
        this.aniMaskShow = false;
        this.$nextTick(() => {
          setTimeout(() => {
            this.show = false;
            this.$emit("close");
          }, 300);
        });
      },
      confirm() {
        this.setEmit("confirm");
        this.close();
      },
      change() {
        if (!this.insert)
          return;
        this.setEmit("change");
      },
      monthSwitch() {
        let {
          year,
          month
        } = this.nowDate;
        this.$emit("monthSwitch", {
          year,
          month: Number(month)
        });
      },
      setEmit(name) {
        let {
          year,
          month,
          date: date2,
          fullDate,
          lunar,
          extraInfo
        } = this.calendar;
        this.$emit(name, {
          range: this.cale.multipleStatus,
          year,
          month,
          date: date2,
          fulldate: fullDate,
          lunar,
          extraInfo: extraInfo || {}
        });
      },
      choiceDate(weeks) {
        if (weeks.disable)
          return;
        this.calendar = weeks;
        this.cale.setMultiple(this.calendar.fullDate);
        this.weeks = this.cale.weeks;
        this.change();
      },
      backtoday() {
        formatAppLog("log", "at uni_modules/uni-calendar/components/uni-calendar/uni-calendar.vue:327", this.cale.getDate(new Date()).fullDate);
        let date2 = this.cale.getDate(new Date()).fullDate;
        this.init(date2);
        this.change();
      },
      pre() {
        const preDate = this.cale.getDate(this.nowDate.fullDate, -1, "month").fullDate;
        this.setDate(preDate);
        this.monthSwitch();
      },
      next() {
        const nextDate = this.cale.getDate(this.nowDate.fullDate, 1, "month").fullDate;
        this.setDate(nextDate);
        this.monthSwitch();
      },
      setDate(date2) {
        this.cale.setDate(date2);
        this.weeks = this.cale.weeks;
        this.nowDate = this.cale.getInfo(date2);
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_calendar_item = vue.resolveComponent("calendar-item");
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-calendar" }, [
      !$props.insert && $data.show ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: vue.normalizeClass(["uni-calendar__mask", { "uni-calendar--mask-show": $data.aniMaskShow }]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.clean && $options.clean(...args))
      }, null, 2)) : vue.createCommentVNode("v-if", true),
      $props.insert || $data.show ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: vue.normalizeClass(["uni-calendar__content", { "uni-calendar--fixed": !$props.insert, "uni-calendar--ani-show": $data.aniMaskShow }])
      }, [
        !$props.insert ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uni-calendar__header uni-calendar--fixed-top"
        }, [
          vue.createElementVNode("view", {
            class: "uni-calendar__header-btn-box",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.close && $options.close(...args))
          }, [
            vue.createElementVNode("text", { class: "uni-calendar__header-text uni-calendar--fixed-width" }, vue.toDisplayString($options.cancelText), 1)
          ]),
          vue.createElementVNode("view", {
            class: "uni-calendar__header-btn-box",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.confirm && $options.confirm(...args))
          }, [
            vue.createElementVNode("text", { class: "uni-calendar__header-text uni-calendar--fixed-width" }, vue.toDisplayString($options.okText), 1)
          ])
        ])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", { class: "uni-calendar__header" }, [
          vue.createElementVNode("view", {
            class: "uni-calendar__header-btn-box",
            onClick: _cache[3] || (_cache[3] = vue.withModifiers((...args) => $options.pre && $options.pre(...args), ["stop"]))
          }, [
            vue.createElementVNode("view", { class: "uni-calendar__header-btn uni-calendar--left" })
          ]),
          vue.createElementVNode("picker", {
            mode: "date",
            value: $props.date,
            fields: "month",
            onChange: _cache[4] || (_cache[4] = (...args) => $options.bindDateChange && $options.bindDateChange(...args))
          }, [
            vue.createElementVNode("text", { class: "uni-calendar__header-text" }, vue.toDisplayString(($data.nowDate.year || "") + " / " + ($data.nowDate.month || "")), 1)
          ], 40, ["value"]),
          vue.createElementVNode("view", {
            class: "uni-calendar__header-btn-box",
            onClick: _cache[5] || (_cache[5] = vue.withModifiers((...args) => $options.next && $options.next(...args), ["stop"]))
          }, [
            vue.createElementVNode("view", { class: "uni-calendar__header-btn uni-calendar--right" })
          ]),
          vue.createElementVNode("text", {
            class: "uni-calendar__backtoday",
            onClick: _cache[6] || (_cache[6] = (...args) => $options.backtoday && $options.backtoday(...args))
          }, vue.toDisplayString($options.todayText), 1)
        ]),
        vue.createElementVNode("view", { class: "uni-calendar__box" }, [
          $props.showMonth ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "uni-calendar__box-bg"
          }, [
            vue.createElementVNode("text", { class: "uni-calendar__box-bg-text" }, vue.toDisplayString($data.nowDate.month), 1)
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", { class: "uni-calendar__weeks" }, [
            vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
              vue.createElementVNode("text", { class: "uni-calendar__weeks-day-text" }, vue.toDisplayString($options.SUNText), 1)
            ]),
            vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
              vue.createElementVNode("text", { class: "uni-calendar__weeks-day-text" }, vue.toDisplayString($options.monText), 1)
            ]),
            vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
              vue.createElementVNode("text", { class: "uni-calendar__weeks-day-text" }, vue.toDisplayString($options.TUEText), 1)
            ]),
            vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
              vue.createElementVNode("text", { class: "uni-calendar__weeks-day-text" }, vue.toDisplayString($options.WEDText), 1)
            ]),
            vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
              vue.createElementVNode("text", { class: "uni-calendar__weeks-day-text" }, vue.toDisplayString($options.THUText), 1)
            ]),
            vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
              vue.createElementVNode("text", { class: "uni-calendar__weeks-day-text" }, vue.toDisplayString($options.FRIText), 1)
            ]),
            vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
              vue.createElementVNode("text", { class: "uni-calendar__weeks-day-text" }, vue.toDisplayString($options.SATText), 1)
            ])
          ]),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.weeks, (item, weekIndex) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "uni-calendar__weeks",
              key: weekIndex
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item, (weeks, weeksIndex) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "uni-calendar__weeks-item",
                  key: weeksIndex
                }, [
                  vue.createVNode(_component_calendar_item, {
                    class: "uni-calendar-item--hook",
                    weeks,
                    calendar: $data.calendar,
                    selected: $props.selected,
                    lunar: $props.lunar,
                    onChange: $options.choiceDate
                  }, null, 8, ["weeks", "calendar", "selected", "lunar", "onChange"])
                ]);
              }), 128))
            ]);
          }), 128))
        ])
      ], 2)) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-0682a296"], ["__file", "E:/app/vue-app/openbill/uni_modules/uni-calendar/components/uni-calendar/uni-calendar.vue"]]);
  function checkNull(name, message) {
    if (name == "" || name == void 0 || name == null || name == 0) {
      uni.showToast({
        title: message,
        icon: "none"
      });
      return false;
    } else {
      return true;
    }
  }
  var _imports_0$1 = "/static/img/other.png";
  var _imports_1 = "/static/img/datetime.png";
  var _imports_2 = "/static/img/clear.png";
  const _sfc_main$4 = {
    name: "Counter",
    props: {
      selectCategory: {
        type: Object,
        default: function(data) {
          return data;
        }
      },
      addNotes: {
        type: Boolean,
        default: false
      },
      currentTime: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        money: 0,
        moneys: [],
        startNumber: "",
        endNumber: "",
        tempType: "",
        nowNumber: "",
        index: 100,
        indexMark: false,
        floatMark: false,
        other: "\u8BF7\u8F93\u5165\u5907\u6CE8\u4FE1\u606F"
      };
    },
    mounted() {
      open.on("add_other", (data) => {
        this.other = data;
      });
      open.on("add_money", (data) => {
        this.money = data;
        this.moneys = [...data];
      });
    },
    methods: {
      chooseDate() {
        this.$emit("chooseDate");
      },
      saveBill() {
        this.$emit("save");
      },
      btnNum(e) {
        const indexFloat = this.moneys.indexOf(".");
        if (e == "+" || e == "-") {
          if (this.moneys.length === 0) {
            return false;
          }
          if (this.indexMark == true) {
            return;
          }
        }
        if (e == ".") {
          if (this.floatMark == true) {
            return;
          }
        }
        if (e == "c") {
          this.money = 0;
          this.moneys = [0];
          this.index = 100;
          this.startNumber = "";
          this.tempType = "";
          this.endNumber = "";
          this.nowNumber = "";
          this.indexMark = false;
          this.floatMark = false;
          return;
        }
        if (e == "x") {
          if (this.moneys.length === 0) {
            return false;
          }
          if (!this.money) {
            this.money = 0;
            this.moneys = [0];
          } else {
            formatAppLog("log", "at components/add/counter.vue:146", this.money);
            this.moneys = this.moneys.slice(0, this.moneys.length - 1);
            if (this.moneys.length == this.index) {
              this.index = 100;
              this.startNumber = "";
              this.endNumber = "";
              this.nowNumber = "";
              this.indexMark = false;
            }
          }
        }
        if (indexFloat >= 1) {
          if (this.moneys.length - indexFloat >= 3) {
            uni.showToast({
              title: "\u6700\u5C0F\u8BB0\u5F55\u5230\u5206",
              icon: "none"
            });
            return false;
          }
        }
        if (e == ".") {
          this.floatMark = true;
        }
        if (this.moneys.length <= 12) {
          if (e == "x") {
            formatAppLog("log", "at components/add/counter.vue:173", "x");
          } else {
            if (this.money[0] == 0 || this.money[0] == ".") {
              this.moneys.push(e);
              this.moneys.shift();
            } else {
              this.moneys.push(e);
            }
          }
        } else {
          uni.showToast({
            title: "\u91D1\u989D\u592A\u5927",
            icon: "error"
          });
          return;
        }
        var start = "";
        var end = "";
        var strNumber = "";
        for (var i = 0; i < this.moneys.length; i++) {
          if (this.moneys[i] == "+") {
            this.index = i;
            this.tempType = "+";
            this.indexMark = true;
          } else if (this.moneys[i] == "-") {
            this.index = i;
            this.tempType = "-";
            this.indexMark = true;
          }
          strNumber += this.moneys[i];
        }
        if (this.index > 0 && this.index < 100) {
          start = this.moneys.slice(0, this.index);
          end = this.moneys.slice(this.index + 1, this.moneys.length);
          this.startNumber = "";
          this.endNumber = "";
          for (var i = 0; i < start.length; i++) {
            this.startNumber += start[i];
          }
          for (var i = 0; i < end.length; i++) {
            this.endNumber += end[i];
          }
          if (this.tempType == "+") {
            if (this.index == this.moneys.length - 1) {
              this.money = this.startNumber;
            } else {
              this.money = parseFloat(this.startNumber) + parseFloat(this.endNumber);
            }
          } else if (this.tempType == "-") {
            formatAppLog("log", "at components/add/counter.vue:225", "\u7B97\u4ED8" + this.tempType);
            if (this.index == this.moneys.length - 1) {
              this.money = this.startNumber;
            } else {
              this.money = parseFloat(this.startNumber) - parseFloat(this.endNumber);
            }
          }
          this.nowNumber = strNumber;
        } else if (this.index == 0) {
          this.moneys.shift();
        } else if (this.index == 100) {
          this.money = strNumber;
        }
        this.$emit("onChange", this.money);
      },
      addOther() {
        this.$emit("addOther");
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "counter",
      onTouchmove: _cache[18] || (_cache[18] = vue.withModifiers(() => {
      }, ["prevent"]))
    }, [
      vue.createElementVNode("view", { class: "counter-view" }, [
        vue.createElementVNode("view", { class: "counter-view-category" }, [
          vue.createElementVNode("image", {
            src: $props.selectCategory.imgUrl,
            mode: ""
          }, null, 8, ["src"]),
          vue.createElementVNode("text", null, vue.toDisplayString($props.selectCategory.name), 1)
        ]),
        vue.createElementVNode("text", null, vue.toDisplayString($data.money || 0), 1),
        vue.createElementVNode("text", { class: "counter-view-now-number" }, vue.toDisplayString($data.nowNumber), 1)
      ]),
      vue.createElementVNode("view", { class: "counter-info" }, [
        vue.createElementVNode("view", { class: "counter-info-other" }, [
          vue.createElementVNode("image", {
            src: _imports_0$1,
            mode: ""
          }),
          vue.createElementVNode("text", {
            class: "counter-info-input",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.addOther && $options.addOther(...args))
          }, vue.toDisplayString($data.other || "\u8BF7\u8F93\u5165\u5907\u6CE8\u4FE1\u606F"), 1)
        ]),
        vue.createElementVNode("view", {
          class: "counter-info-date",
          onClick: _cache[1] || (_cache[1] = ($event) => $options.chooseDate())
        }, [
          vue.createElementVNode("image", {
            src: _imports_1,
            mode: ""
          }),
          vue.createTextVNode(" " + vue.toDisplayString($props.currentTime), 1)
        ])
      ]),
      vue.createElementVNode("view", { class: "counter-btn-item" }, [
        vue.createElementVNode("ul", null, [
          vue.createElementVNode("li", {
            onClick: _cache[2] || (_cache[2] = ($event) => $options.btnNum("7"))
          }, "7"),
          vue.createElementVNode("li", {
            onClick: _cache[3] || (_cache[3] = ($event) => $options.btnNum("8"))
          }, "8"),
          vue.createElementVNode("li", {
            onClick: _cache[4] || (_cache[4] = ($event) => $options.btnNum("9"))
          }, "9"),
          vue.createElementVNode("li", {
            onClick: _cache[5] || (_cache[5] = ($event) => $options.btnNum("x"))
          }, [
            vue.createElementVNode("image", {
              class: "clear",
              src: _imports_2,
              mode: ""
            })
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "counter-btn-item" }, [
        vue.createElementVNode("ul", null, [
          vue.createElementVNode("li", {
            onClick: _cache[6] || (_cache[6] = ($event) => $options.btnNum("4"))
          }, "4"),
          vue.createElementVNode("li", {
            onClick: _cache[7] || (_cache[7] = ($event) => $options.btnNum("5"))
          }, "5"),
          vue.createElementVNode("li", {
            onClick: _cache[8] || (_cache[8] = ($event) => $options.btnNum("6"))
          }, "6"),
          vue.createElementVNode("li", {
            onClick: _cache[9] || (_cache[9] = ($event) => $options.btnNum("+"))
          }, "+")
        ])
      ]),
      vue.createElementVNode("view", { class: "counter-btn-item" }, [
        vue.createElementVNode("ul", null, [
          vue.createElementVNode("li", {
            onClick: _cache[10] || (_cache[10] = ($event) => $options.btnNum("1"))
          }, "1"),
          vue.createElementVNode("li", {
            onClick: _cache[11] || (_cache[11] = ($event) => $options.btnNum("2"))
          }, "2"),
          vue.createElementVNode("li", {
            onClick: _cache[12] || (_cache[12] = ($event) => $options.btnNum("3"))
          }, "3"),
          vue.createElementVNode("li", {
            onClick: _cache[13] || (_cache[13] = ($event) => $options.btnNum("-"))
          }, "-")
        ])
      ]),
      vue.createElementVNode("view", { class: "counter-btn-item" }, [
        vue.createElementVNode("ul", null, [
          vue.createElementVNode("li", {
            onClick: _cache[14] || (_cache[14] = ($event) => $options.btnNum("c"))
          }, "\u6E05\u9664"),
          vue.createElementVNode("li", {
            onClick: _cache[15] || (_cache[15] = ($event) => $options.btnNum("0"))
          }, "0"),
          vue.createElementVNode("li", {
            onClick: _cache[16] || (_cache[16] = ($event) => $options.btnNum("."))
          }, "."),
          vue.createElementVNode("li", {
            onClick: _cache[17] || (_cache[17] = ($event) => $options.saveBill())
          }, "\u786E\u5B9A")
        ])
      ])
    ], 32);
  }
  var Counter = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-5f60cda3"], ["__file", "E:/app/vue-app/openbill/components/add/counter.vue"]]);
  const date$1 = new Dates();
  const _sfc_main$3 = {
    components: {
      StatusBar,
      Counter,
      UniCalendar: __easycom_2
    },
    data() {
      return {
        userInfo: this.$store.state.userInfo,
        markDays: [],
        addNotes: false,
        other: "",
        otherShow: false,
        selectTab: "selectTab",
        defaultTab: "defaultTab",
        chooseCategory: "chooseCategory",
        defaultCategory: "defaultCategory",
        categoryChoose: 0,
        type: 0,
        dateShow: false,
        categoryList: [],
        payCategoryList: [],
        incomeCategoryList: [],
        selectCategory: {
          id: 1,
          imgUrl: "@/static/img/default1.png",
          name: "\u9ED8\u8BA4",
          type: "1"
        },
        selectId: 1,
        nowTime: "",
        nowYear: date$1.getYear(),
        nowMonth: date$1.getMonth(),
        nowDay: date$1.getDay(),
        nowWeek: date$1.getWeek(),
        currentTime: "",
        billDate: "",
        trueYear: "",
        trueMonth: "",
        trueDay: "",
        incomeData: this.$store.state.incomeList,
        selectIncomeId: 0,
        payData: this.$store.state.payList,
        selectPayId: 0,
        money: 0,
        date: []
      };
    },
    created() {
      this.currentTime = `${date$1.getMonth()}\u6708${date$1.getDay()}\u65E5`;
      this.selectCategory = this.payData[0];
    },
    methods: {
      goBack() {
        goReturn();
      },
      goDate() {
        uni.navigateTo({
          url: "../date/index"
        });
      },
      onChange(e) {
        this.money = e;
      },
      saveBill() {
        const that = this;
        if (that.userInfo.id) {
          if (!checkNull(that.money, "\u8BF7\u8F93\u5165\u91D1\u989D"))
            return false;
          const date2 = new Dates();
          let billTime = that.billDate || date2.getTime();
          formatAppLog("log", "at pages/add/index.vue:159", that.billDate);
          formatAppLog("log", "at pages/add/index.vue:160", date2.getTime());
          let money = parseFloat(that.money).toFixed(2);
          if (money.indexOf(0) == 0 || money.indexOf("0") == 0) {
            money.slice(1, money.length);
          }
          let data = {
            category_id: that.selectId,
            type: that.type,
            cost: money,
            day: that.nowDay,
            week: that.nowWeek,
            month: that.nowMonth,
            year: that.nowYear,
            other: that.other || "",
            bill_time: billTime,
            create_time: date2.getTime()
          };
          addBill(data).then(() => {
            showInfo("\u6DFB\u52A0\u6210\u529F");
            open.emit("get_bill");
            open.emit("updateMeTotalData");
            this.onUpdateTotalData();
          }).catch((error) => {
            formatAppLog("log", "at pages/add/index.vue:190", error);
            showInfo("\u6DFB\u52A0\u5931\u8D25");
          });
        } else {
          uni.showToast({
            title: "\u672A\u767B\u5F55\u8D26\u53F7\uFF01",
            icon: "error"
          });
        }
      },
      initCounterData() {
        this.money = 0;
        this.moneys = ["0"];
        this.nowNumber = "";
        this.indexMark = false;
        this.index = 100;
        this.startNumber = "";
        this.endNumber = "";
        this.nowNumber = "";
        this.other = "";
      },
      onUpdateTotalData() {
        this.billDate = "";
        let { total_day, total_number, last_time, notes } = this.$store.state.totalData;
        if (last_time != date$1.getDate()) {
          last_time = date$1.getDate();
          total_day += 1;
        }
        total_number += 1;
        let totalData = {
          total_day,
          total_number,
          last_time
        };
        this.$store.state.totalData = __spreadProps(__spreadValues({}, totalData), { notes });
        updateTotalData(totalData).then(() => {
          formatAppLog("log", "at pages/add/index.vue:230", "\u7EDF\u8BA1\u6570\u636E\u8868\u6DFB\u52A0\u6210\u529F");
          this.initCounterData();
          uni.switchTab({
            url: "/pages/index/index"
          });
        }).catch((error) => {
          formatAppLog("log", "at pages/add/index.vue:237", error);
          formatAppLog("log", "at pages/add/index.vue:238", "\u7EDF\u8BA1\u6570\u636E\u8868\u6DFB\u52A0\u5931\u8D25");
        });
      },
      choiceCategory(id, index) {
        if (this.type === 0) {
          this.selectPayId = id - 1;
          this.selectId = id;
          this.selectCategory = this.payData[index];
        } else {
          this.selectIncomeId = id - 1;
          this.selectId = id;
          this.selectCategory = this.incomeData[index];
        }
      },
      hideEdit() {
        this.categoryShow = false;
      },
      addOther() {
        this.otherShow = true;
      },
      hideOther() {
        this.otherShow = false;
        this.other = "";
        open.emit("add_other");
      },
      saveOther() {
        this.other = this.other.replace(/\s*/g, "");
        open.emit("add_other", this.other);
        this.otherShow = false;
      },
      clickTab(e) {
        this.type = e;
        if (e == 0) {
          this.selectCategory = this.payData[0];
        } else if (e == 1) {
          this.selectCategory = this.incomeData[0];
        }
      },
      moveHandle() {
        return false;
      },
      chooseDate() {
        this.dateShow = true;
        this.$refs.datebox.open();
      },
      hideDate() {
        this.dateShow = false;
      },
      onDateClick(data) {
        this.dateShow = false;
        let year = data.year;
        let month = data.month;
        let day = data.date;
        data.nWeek;
        this.billDate = `${data.fulldate} 23:59:59`;
        this.nowYear = year;
        this.nowMonth = month;
        this.nowDay = day;
        this.currentTime = `${month}\u6708${day}\u65E5`;
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_page_meta = resolveEasycom(vue.resolveDynamicComponent("page-meta"), __easycom_0);
    const _component_status_bar = vue.resolveComponent("status-bar");
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
    const _component_counter = vue.resolveComponent("counter");
    const _component_uni_calendar = resolveEasycom(vue.resolveDynamicComponent("uni-calendar"), __easycom_2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "add" }, [
      vue.createCommentVNode(" \u7981\u6B62\u5F39\u51FA\u6846\u6ED1\u52A8\u9875\u9762 \u7A7F\u900F "),
      vue.createVNode(_component_page_meta, {
        "page-style": "overflow:" + ($data.dateShow ? "hidden" : "visible")
      }, null, 8, ["page-style"]),
      vue.createCommentVNode(" \u72B6\u6001\u680F\u5360\u4F4D "),
      vue.createElementVNode("view", { class: "add-header" }, [
        vue.createVNode(_component_status_bar, { bgColor: "#fff" }),
        vue.createElementVNode("view", { class: "add-header-box" }, [
          vue.createElementVNode("text", {
            class: "add-header-back",
            onClick: _cache[0] || (_cache[0] = ($event) => $options.goBack())
          }, [
            vue.createVNode(_component_uni_icons, {
              type: "back",
              size: "25",
              color: "#333"
            })
          ]),
          vue.createElementVNode("view", { class: "tabbar-category" }, [
            vue.createElementVNode("text", {
              class: vue.normalizeClass([$data.type == 0 ? $data.selectTab : $data.defaultTab]),
              onClick: _cache[1] || (_cache[1] = ($event) => $options.clickTab(0))
            }, "\u652F\u51FA", 2),
            vue.createElementVNode("text", {
              class: vue.normalizeClass([$data.type == 1 ? $data.selectTab : $data.defaultTab]),
              onClick: _cache[2] || (_cache[2] = ($event) => $options.clickTab(1))
            }, "\u6536\u5165", 2)
          ])
        ])
      ]),
      vue.createCommentVNode(" \u5206\u7C7B\u7F16\u8F91 "),
      $data.otherShow ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "otherBody",
        onTouchmove: _cache[6] || (_cache[6] = vue.withModifiers((...args) => $options.moveHandle && $options.moveHandle(...args), ["stop", "prevent"]))
      }, [
        vue.createElementVNode("view", { class: "otherInput" }, [
          vue.withDirectives(vue.createElementVNode("input", {
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.other = $event),
            placeholder: "\u8BF7\u8F93\u5165\u5907\u6CE8\u4FE1\u606F",
            focus: true
          }, null, 512), [
            [vue.vModelText, $data.other]
          ]),
          vue.createElementVNode("view", { class: "otherBtn" }, [
            vue.createElementVNode("text", {
              onClick: _cache[4] || (_cache[4] = ($event) => $options.hideOther())
            }, "\u53D6\u6D88"),
            vue.createElementVNode("text", {
              onClick: _cache[5] || (_cache[5] = ($event) => $options.saveOther())
            }, "\u4FDD\u5B58")
          ])
        ])
      ], 32)) : vue.createCommentVNode("v-if", true),
      $data.type == 0 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "category"
      }, [
        vue.createElementVNode("view", { class: "category-item" }, [
          vue.createElementVNode("ul", null, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.payData, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("li", {
                onClick: ($event) => $options.choiceCategory(item.id, index)
              }, [
                vue.createElementVNode("image", {
                  src: item.imgUrl,
                  class: vue.normalizeClass([$data.selectPayId == index ? $data.chooseCategory : $data.defaultCategory])
                }, null, 10, ["src"]),
                vue.createElementVNode("text", null, vue.toDisplayString(item.name), 1)
              ], 8, ["onClick"]);
            }), 256)),
            vue.createCommentVNode(' <li @click="goEditCategory()">\r\n						<image src="@/static/img/add.png"/>\r\n						<text >\u7F16\u8F91</text>\r\n					</li> ')
          ])
        ])
      ])) : (vue.openBlock(), vue.createElementBlock("view", {
        key: 2,
        class: "category"
      }, [
        vue.createElementVNode("view", { class: "category-item" }, [
          vue.createElementVNode("ul", null, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.incomeData, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("li", {
                onClick: ($event) => $options.choiceCategory(item.id, index)
              }, [
                vue.createElementVNode("image", {
                  src: item.imgUrl,
                  class: vue.normalizeClass([$data.selectIncomeId == index ? $data.chooseCategory : $data.defaultCategory])
                }, null, 10, ["src"]),
                vue.createElementVNode("text", null, vue.toDisplayString(item.name), 1)
              ], 8, ["onClick"]);
            }), 256)),
            vue.createCommentVNode(' <li @click="goEditCategory()">\r\n						<image src="../../static/imgs/add.png"/>\r\n						<text >\u7F16\u8F91</text>\r\n					</li> ')
          ])
        ])
      ])),
      vue.createVNode(_component_counter, {
        selectCategory: $data.selectCategory,
        addNotes: $data.addNotes,
        currentTime: $data.currentTime,
        onOnChange: $options.onChange,
        onSave: $options.saveBill,
        onChooseDate: $options.chooseDate,
        onAddOther: $options.addOther
      }, null, 8, ["selectCategory", "addNotes", "currentTime", "onOnChange", "onSave", "onChooseDate", "onAddOther"]),
      vue.createVNode(_component_uni_calendar, {
        ref: "datebox",
        insert: false,
        lunar: true,
        "clear-date": true,
        showMonth: false,
        selected: $data.date,
        onConfirm: $options.onDateClick,
        onClose: $options.hideDate
      }, null, 8, ["selected", "onConfirm", "onClose"])
    ]);
  }
  var PagesAddIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "E:/app/vue-app/openbill/pages/add/index.vue"]]);
  const date = new Dates();
  const _sfc_main$2 = {
    components: {
      StatusBar,
      Counter,
      UniCalendar: __easycom_2
    },
    data() {
      return {
        id: "",
        userInfo: this.$store.state.userInfo,
        markDays: [],
        addNotes: false,
        other: "",
        otherShow: false,
        selectTab: "selectTab",
        defaultTab: "defaultTab",
        chooseCategory: "chooseCategory",
        defaultCategory: "defaultCategory",
        categoryChoose: 0,
        type: 0,
        dateShow: false,
        categoryList: [],
        payCategoryList: [],
        incomeCategoryList: [],
        selectCategory: {},
        selectId: 0,
        nowTime: "",
        nowYear: date.getYear(),
        nowMonth: date.getMonth(),
        nowDay: date.getDay(),
        nowWeek: date.getWeek(),
        currentTime: "",
        billDate: "",
        trueYear: "",
        trueMonth: "",
        trueDay: "",
        incomeData: this.$store.state.incomeList,
        selectIncomeId: 0,
        payData: this.$store.state.payList,
        selectPayId: 0,
        money: 0,
        date: []
      };
    },
    onLoad(option) {
      this.id = option.id;
      this.money = option.cost;
      this.nowDay = option.bill_time.substring(8, 10);
      this.nowMonth = option.bill_time.substring(5, 7);
      this.nowYear = option.bill_time.substring(0, 4);
      this.type = option.type;
      if (this.type == 0) {
        this.selectPayId = option.category_id - 1;
        this.selectCategory = this.payData[option.category_id - 1];
      } else {
        this.selectIncomeId = option.category_id - 1;
        this.selectCategory = this.incomeData[option.category_id - 1];
      }
      this.selectId = option.category_id;
      this.other = option.other;
      this.currentTime = `${this.nowMonth}\u6708${this.nowDay}\u65E5`;
    },
    mounted() {
      open.emit("add_other", this.other);
      open.emit("add_money", this.money);
    },
    methods: {
      goBack() {
        uni.navigateBack({
          delta: 1
        });
      },
      goDate() {
        uni.navigateTo({
          url: "../date/index"
        });
      },
      onChange(e) {
        this.money = e;
      },
      saveBill() {
        if (this.userInfo.id) {
          if (!checkNull(this.money, "\u8BF7\u8F93\u5165\u91D1\u989D"))
            return false;
          const date2 = new Dates();
          const billTime = this.billDate || date2.getTime();
          let money = parseFloat(this.money).toFixed(2);
          if (money.indexOf(0) == 0 || money.indexOf("0") == 0) {
            money.slice(1, money.length);
          }
          formatAppLog("log", "at pages/add/edit.vue:180", this.selectId);
          let data = {
            id: this.id,
            category_id: this.selectId,
            type: this.type,
            cost: money,
            day: this.nowDay,
            week: this.nowWeek,
            month: this.nowMonth,
            year: this.nowYear,
            other: this.other || "",
            bill_time: billTime,
            update_time: date2.getTime()
          };
          updateBill(data).then(() => {
            open.emit("get_bill");
            showInfo("\u66F4\u65B0\u6210\u529F");
            this.initCounterData();
            uni.switchTab({
              url: "/pages/index/index"
            });
          }).catch((e) => {
            formatAppLog("log", "at pages/add/edit.vue:205", e);
            showInfo("\u66F4\u65B0\u5931\u8D25");
          });
        } else {
          uni.showToast({
            title: "\u672A\u767B\u5F55\u8D26\u53F7\uFF01",
            icon: "error"
          });
        }
      },
      initCounterData() {
        this.money = 0;
        this.moneys = ["0"];
        this.nowNumber = "";
        this.indexMark = false;
        this.index = 100;
        this.startNumber = "";
        this.endNumber = "";
        this.nowNumber = "";
        this.other = "";
      },
      choiceCategory(id, index) {
        if (this.type == 0) {
          this.selectPayId = id - 1;
          this.selectId = id;
          this.selectCategory = this.payData[index];
        } else {
          this.selectIncomeId = id - 1;
          this.selectId = id;
          this.selectCategory = this.incomeData[index];
        }
        formatAppLog("log", "at pages/add/edit.vue:243", this.selectId);
      },
      hideEdit() {
        this.categoryShow = false;
      },
      addOther() {
        formatAppLog("log", "at pages/add/edit.vue:250", "\u70B9\u51FB\u4E86");
        this.otherShow = true;
      },
      hideOther() {
        this.otherShow = false;
        this.other = "";
        open.emit("add_other", this.other);
      },
      saveOther() {
        this.other = this.other.replace(/\s*/g, "");
        open.emit("add_other", this.other);
        this.otherShow = false;
      },
      clickTab(e) {
        this.type = e;
        if (e == 0) {
          this.selectCategory = this.payData[0];
        } else if (e == 1) {
          this.selectCategory = this.incomeData[0];
        }
      },
      moveHandle() {
        return false;
      },
      chooseDate() {
        this.dateShow = true;
        this.$refs.datebox.open();
      },
      hideDate() {
        this.dateShow = false;
      },
      onDateClick(data) {
        this.dateShow = false;
        let year = data.year;
        let month = data.month;
        let day = data.date;
        data.nWeek;
        this.billDate = `${data.fulldate} 23:59:59`;
        this.nowYear = year;
        this.nowMonth = month;
        this.nowDay = day;
        this.currentTime = `${month}\u6708${day}\u65E5`;
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_page_meta = resolveEasycom(vue.resolveDynamicComponent("page-meta"), __easycom_0);
    const _component_status_bar = vue.resolveComponent("status-bar");
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
    const _component_counter = vue.resolveComponent("counter");
    const _component_uni_calendar = resolveEasycom(vue.resolveDynamicComponent("uni-calendar"), __easycom_2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "add" }, [
      vue.createCommentVNode(" \u7981\u6B62\u5F39\u51FA\u6846\u6ED1\u52A8\u9875\u9762 \u7A7F\u900F "),
      vue.createVNode(_component_page_meta, {
        "page-style": "overflow:" + ($data.dateShow ? "hidden" : "visible")
      }, null, 8, ["page-style"]),
      vue.createCommentVNode(" \u72B6\u6001\u680F\u5360\u4F4D "),
      vue.createElementVNode("view", { class: "add-header" }, [
        vue.createVNode(_component_status_bar, { bgColor: "#fff" }),
        vue.createElementVNode("view", { class: "add-header-box" }, [
          vue.createElementVNode("text", {
            class: "add-header-back",
            onClick: _cache[0] || (_cache[0] = ($event) => $options.goBack())
          }, [
            vue.createVNode(_component_uni_icons, {
              type: "back",
              size: "25",
              color: "#333"
            })
          ]),
          vue.createElementVNode("view", { class: "tabbar-category" }, [
            vue.createElementVNode("text", {
              class: vue.normalizeClass([$data.type == 0 ? $data.selectTab : $data.defaultTab]),
              onClick: _cache[1] || (_cache[1] = ($event) => $options.clickTab(0))
            }, "\u652F\u51FA", 2),
            vue.createElementVNode("text", {
              class: vue.normalizeClass([$data.type == 1 ? $data.selectTab : $data.defaultTab]),
              onClick: _cache[2] || (_cache[2] = ($event) => $options.clickTab(1))
            }, "\u6536\u5165", 2)
          ])
        ])
      ]),
      vue.createCommentVNode(" \u5206\u7C7B\u7F16\u8F91 "),
      $data.otherShow ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "otherBody",
        onTouchmove: _cache[6] || (_cache[6] = vue.withModifiers((...args) => $options.moveHandle && $options.moveHandle(...args), ["stop", "prevent"]))
      }, [
        vue.createElementVNode("view", { class: "otherInput" }, [
          vue.withDirectives(vue.createElementVNode("input", {
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.other = $event),
            placeholder: "\u8BF7\u8F93\u5165\u5907\u6CE8\u4FE1\u606F",
            focus: true
          }, null, 512), [
            [vue.vModelText, $data.other]
          ]),
          vue.createElementVNode("view", { class: "otherBtn" }, [
            vue.createElementVNode("text", {
              onClick: _cache[4] || (_cache[4] = ($event) => $options.hideOther())
            }, "\u53D6\u6D88"),
            vue.createElementVNode("text", {
              onClick: _cache[5] || (_cache[5] = ($event) => $options.saveOther())
            }, "\u4FDD\u5B58")
          ])
        ])
      ], 32)) : vue.createCommentVNode("v-if", true),
      $data.type == 0 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "category"
      }, [
        vue.createElementVNode("view", { class: "category-item" }, [
          vue.createElementVNode("ul", null, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.payData, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("li", {
                onClick: ($event) => $options.choiceCategory(item.id, index)
              }, [
                vue.createElementVNode("image", {
                  src: item.imgUrl,
                  class: vue.normalizeClass([$data.selectPayId == index ? $data.chooseCategory : $data.defaultCategory])
                }, null, 10, ["src"]),
                vue.createElementVNode("text", null, vue.toDisplayString(item.name), 1)
              ], 8, ["onClick"]);
            }), 256)),
            vue.createCommentVNode(' <li @click="goEditCategory()">\r\n						<image src="@/static/img/add.png"/>\r\n						<text >\u7F16\u8F91</text>\r\n					</li> ')
          ])
        ])
      ])) : (vue.openBlock(), vue.createElementBlock("view", {
        key: 2,
        class: "category"
      }, [
        vue.createElementVNode("view", { class: "category-item" }, [
          vue.createElementVNode("ul", null, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.incomeData, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("li", {
                onClick: ($event) => $options.choiceCategory(item.id, index)
              }, [
                vue.createElementVNode("image", {
                  src: item.imgUrl,
                  class: vue.normalizeClass([$data.selectIncomeId == index ? $data.chooseCategory : $data.defaultCategory])
                }, null, 10, ["src"]),
                vue.createElementVNode("text", null, vue.toDisplayString(item.name), 1)
              ], 8, ["onClick"]);
            }), 256)),
            vue.createCommentVNode(' <li @click="goEditCategory()">\r\n						<image src="../../static/imgs/add.png"/>\r\n						<text >\u7F16\u8F91</text>\r\n					</li> ')
          ])
        ])
      ])),
      vue.createVNode(_component_counter, {
        selectCategory: $data.selectCategory,
        money: $data.money,
        onAddOther: $options.addOther,
        addNotes: $data.addNotes,
        currentTime: $data.currentTime,
        onOnChange: $options.onChange,
        onSave: $options.saveBill,
        onChooseDate: $options.chooseDate
      }, null, 8, ["selectCategory", "money", "onAddOther", "addNotes", "currentTime", "onOnChange", "onSave", "onChooseDate"]),
      vue.createVNode(_component_uni_calendar, {
        ref: "datebox",
        insert: false,
        lunar: true,
        "clear-date": true,
        showMonth: false,
        selected: $data.date,
        onConfirm: $options.onDateClick,
        onClose: $options.hideDate
      }, null, 8, ["selected", "onConfirm", "onClose"])
    ]);
  }
  var PagesAddEdit = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "E:/app/vue-app/openbill/pages/add/edit.vue"]]);
  var _imports_0 = "/static/logo.png";
  const _sfc_main$1 = {
    name: "Me",
    components: {
      StatusBar
    },
    data() {
      return {
        name: "\u6B22\u8FCE\u4F7F\u7528openbill",
        img: "",
        http: "",
        totalData: this.$store.state.totalData
      };
    },
    computed: {
      listenTotalData() {
        return this.$store.state.totalData;
      }
    },
    watch: {
      listenTotalData(n, o) {
        this.totalData = n;
      }
    },
    mounted() {
      var that = this;
      that.getData();
      uni.$on("loadMe", function() {
        that.name = app.globalData.userInfo.name;
        that.img = app.globalData.userInfo.user_img;
      });
      uni.$on("removeMe", function() {
        that.name = "";
        that.img = "";
      });
    },
    methods: {
      async getData() {
        await getNotes().then((res) => {
          this.$store.state.totalData.notes = res.length;
        });
        await getTotalData().then((res) => {
          this.$store.state.totalData.total_day = res[0].total_day;
          this.$store.state.totalData.total_number = res[0].total_number;
          this.$store.state.totalData.last_time = res[0].last_time;
        });
      },
      goNewUser() {
        goUrl("./module/newUser");
      },
      goNeeds() {
        if (!checkNull(app.globalData.userInfo.id, "\u8BF7\u5148\u767B\u5F55")) {
          setTimeout(() => {
            goUrl("../login/login");
          }, 1500);
        } else {
          goUrl("./module/needs");
        }
      },
      goFeedback() {
        if (!checkNull(app.globalData.userInfo.id, "\u8BF7\u5148\u767B\u5F55")) {
          setTimeout(() => {
            goUrl("../login/login");
          }, 1500);
        } else {
          goUrl("./module/feedback");
        }
      },
      goAbout() {
        goUrl("./module/about");
      },
      goSet() {
        if (!checkNull(app.globalData.userInfo.id, "\u8BF7\u5148\u767B\u5F55")) {
          setTimeout(() => {
            goUrl("../login/login");
          }, 1500);
        } else {
          goUrl("./module/set");
        }
      },
      goLogin() {
        goUrl("../login/login");
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createVNode(_component_status_bar),
      vue.createElementVNode("view", { class: "header" }, [
        $data.name ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "header-logo"
        }, [
          vue.createElementVNode("view", { class: "logo" }, [
            $data.img.length > 0 ? (vue.openBlock(), vue.createElementBlock("image", {
              key: 0,
              src: $data.http + $data.img,
              mode: ""
            }, null, 8, ["src"])) : (vue.openBlock(), vue.createElementBlock("image", {
              key: 1,
              src: _imports_0,
              mode: ""
            })),
            vue.createElementVNode("text", null, vue.toDisplayString($data.name), 1)
          ])
        ])) : (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "header-logo"
        }, [
          vue.createElementVNode("view", {
            class: "logo",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.goLogin && $options.goLogin(...args))
          }, [
            vue.createElementVNode("image", {
              src: _imports_0,
              mode: ""
            }),
            vue.createElementVNode("text", null, "\u672A\u767B\u5F55")
          ]),
          vue.createElementVNode("view", null, [
            vue.createVNode(_component_uni_icons, {
              color: "#ccc",
              type: "right",
              size: "18"
            })
          ])
        ]))
      ]),
      vue.createElementVNode("view", { class: "view" }, [
        vue.createElementVNode("view", { class: "view-item" }, [
          vue.createElementVNode("view", { class: "view-item-title" }, vue.toDisplayString($data.totalData.total_day), 1),
          vue.createElementVNode("view", { class: "view-item-tip" }, " \u8BB0\u8D26\u5929\u6570 ")
        ]),
        vue.createElementVNode("view", { class: "view-item" }, [
          vue.createElementVNode("view", { class: "view-item-title" }, vue.toDisplayString($data.totalData.total_number), 1),
          vue.createElementVNode("view", { class: "view-item-tip" }, " \u8BB0\u8D26\u7B14\u6570 ")
        ]),
        vue.createElementVNode("view", { class: "view-item" }, [
          vue.createElementVNode("view", { class: "view-item-title" }, vue.toDisplayString($data.totalData.notes), 1),
          vue.createElementVNode("view", { class: "view-item-tip" }, " \u8D26\u672C ")
        ])
      ]),
      vue.createCommentVNode(' <view class="list">\r\n			<view class="list-item" @click="goFeedback()">\r\n				<view class="item-left">\r\n					<text>\u4E3B\u9898</text>\r\n				</view>\r\n				<view class="item-right">\r\n					<uni-icons color="#ccc" type="right" size="18"></uni-icons>\r\n				</view>\r\n			</view>\r\n			<view class="list-item" @click="goAbout()">\r\n				<view class="item-left">\r\n					<text>\u8BBE\u7F6E</text>\r\n				</view>\r\n				<view class="item-right">\r\n					<uni-icons color="#ccc" type="right" size="18"></uni-icons>\r\n				</view>\r\n			</view>\r\n		</view> ')
    ]);
  }
  var PagesMeIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "E:/app/vue-app/openbill/pages/me/index.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/index/bill_details", PagesIndexBill_details);
  __definePage("pages/add/index", PagesAddIndex);
  __definePage("pages/add/edit", PagesAddEdit);
  __definePage("pages/me/index", PagesMeIndex);
  const _sfc_main = {
    onLaunch: function() {
      isOpen().then(() => {
        formatAppLog("log", "at App.vue:6", "\u6570\u636E\u5E93\u5DF2\u6253\u5F00");
      }).catch(() => {
        openSqlite().then(() => {
          formatAppLog("log", "at App.vue:9", "\u521B\u5EFA\u6210\u529F");
          createBill().then(() => {
            formatAppLog("log", "at App.vue:11", "\u521B\u5EFA\u8D26\u5355\u8868\u6210\u529F");
          }).catch((error) => {
            formatAppLog("log", "at App.vue:13", "\u521B\u5EFA\u8D26\u5355\u8868\u5931\u8D25");
          });
          createTotalData().then(() => {
            formatAppLog("log", "at App.vue:16", "\u521B\u5EFA\u603B\u6570\u636E\u8868\u6210\u529F");
          }).catch((error) => {
            formatAppLog("log", "at App.vue:24", "\u521B\u5EFA\u603B\u6570\u636E\u8868\u5931\u8D25");
          });
          createNotes().then(() => {
            formatAppLog("log", "at App.vue:27", "\u521B\u5EFA\u8D26\u672C\u8868\u6210\u529F");
          }).catch((error) => {
            formatAppLog("log", "at App.vue:29", "\u521B\u5EFA\u8D26\u672C\u8868\u5931\u8D25");
          });
          let tabel = ["open_bill", "open_total_data"];
          for (let i = 0; i < tabel.length; i++) {
            isTable(tabel[i]).then(() => {
              this.$store.state.dbList.push(tabel[i]);
            });
          }
        }).catch(() => {
          formatAppLog("log", "at App.vue:38", "\u521B\u5EFA\u5931\u8D25");
        });
      });
      uni.onTabBarMidButtonTap(() => {
        uni.navigateTo({
          url: "/pages/add/index",
          animationType: "slide-in-bottom"
        });
      });
    },
    onShow: function() {
    },
    onHide: function() {
    }
  };
  var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "E:/app/vue-app/openbill/App.vue"]]);
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = __spreadValues({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        }
      };
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && pluginDescriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(pluginDescriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * vuex v4.0.2
   * (c) 2021 Evan You
   * @license MIT
   */
  var storeKey = "store";
  function forEachValue(obj, fn) {
    Object.keys(obj).forEach(function(key) {
      return fn(obj[key], key);
    });
  }
  function isObject(obj) {
    return obj !== null && typeof obj === "object";
  }
  function isPromise(val) {
    return val && typeof val.then === "function";
  }
  function assert(condition, msg) {
    if (!condition) {
      throw new Error("[vuex] " + msg);
    }
  }
  function partial(fn, arg) {
    return function() {
      return fn(arg);
    };
  }
  function genericSubscribe(fn, subs, options) {
    if (subs.indexOf(fn) < 0) {
      options && options.prepend ? subs.unshift(fn) : subs.push(fn);
    }
    return function() {
      var i = subs.indexOf(fn);
      if (i > -1) {
        subs.splice(i, 1);
      }
    };
  }
  function resetStore(store2, hot) {
    store2._actions = /* @__PURE__ */ Object.create(null);
    store2._mutations = /* @__PURE__ */ Object.create(null);
    store2._wrappedGetters = /* @__PURE__ */ Object.create(null);
    store2._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    var state = store2.state;
    installModule(store2, state, [], store2._modules.root, true);
    resetStoreState(store2, state, hot);
  }
  function resetStoreState(store2, state, hot) {
    var oldState = store2._state;
    store2.getters = {};
    store2._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    var wrappedGetters = store2._wrappedGetters;
    var computedObj = {};
    forEachValue(wrappedGetters, function(fn, key) {
      computedObj[key] = partial(fn, store2);
      Object.defineProperty(store2.getters, key, {
        get: function() {
          return computedObj[key]();
        },
        enumerable: true
      });
    });
    store2._state = vue.reactive({
      data: state
    });
    if (store2.strict) {
      enableStrictMode(store2);
    }
    if (oldState) {
      if (hot) {
        store2._withCommit(function() {
          oldState.data = null;
        });
      }
    }
  }
  function installModule(store2, rootState, path, module, hot) {
    var isRoot = !path.length;
    var namespace = store2._modules.getNamespace(path);
    if (module.namespaced) {
      if (store2._modulesNamespaceMap[namespace] && true) {
        console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
      }
      store2._modulesNamespaceMap[namespace] = module;
    }
    if (!isRoot && !hot) {
      var parentState = getNestedState(rootState, path.slice(0, -1));
      var moduleName = path[path.length - 1];
      store2._withCommit(function() {
        {
          if (moduleName in parentState) {
            console.warn('[vuex] state field "' + moduleName + '" was overridden by a module with the same name at "' + path.join(".") + '"');
          }
        }
        parentState[moduleName] = module.state;
      });
    }
    var local = module.context = makeLocalContext(store2, namespace, path);
    module.forEachMutation(function(mutation, key) {
      var namespacedType = namespace + key;
      registerMutation(store2, namespacedType, mutation, local);
    });
    module.forEachAction(function(action, key) {
      var type = action.root ? key : namespace + key;
      var handler = action.handler || action;
      registerAction(store2, type, handler, local);
    });
    module.forEachGetter(function(getter, key) {
      var namespacedType = namespace + key;
      registerGetter(store2, namespacedType, getter, local);
    });
    module.forEachChild(function(child, key) {
      installModule(store2, rootState, path.concat(key), child, hot);
    });
  }
  function makeLocalContext(store2, namespace, path) {
    var noNamespace = namespace === "";
    var local = {
      dispatch: noNamespace ? store2.dispatch : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._actions[type]) {
            console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
            return;
          }
        }
        return store2.dispatch(type, payload);
      },
      commit: noNamespace ? store2.commit : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._mutations[type]) {
            console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
            return;
          }
        }
        store2.commit(type, payload, options);
      }
    };
    Object.defineProperties(local, {
      getters: {
        get: noNamespace ? function() {
          return store2.getters;
        } : function() {
          return makeLocalGetters(store2, namespace);
        }
      },
      state: {
        get: function() {
          return getNestedState(store2.state, path);
        }
      }
    });
    return local;
  }
  function makeLocalGetters(store2, namespace) {
    if (!store2._makeLocalGettersCache[namespace]) {
      var gettersProxy = {};
      var splitPos = namespace.length;
      Object.keys(store2.getters).forEach(function(type) {
        if (type.slice(0, splitPos) !== namespace) {
          return;
        }
        var localType = type.slice(splitPos);
        Object.defineProperty(gettersProxy, localType, {
          get: function() {
            return store2.getters[type];
          },
          enumerable: true
        });
      });
      store2._makeLocalGettersCache[namespace] = gettersProxy;
    }
    return store2._makeLocalGettersCache[namespace];
  }
  function registerMutation(store2, type, handler, local) {
    var entry = store2._mutations[type] || (store2._mutations[type] = []);
    entry.push(function wrappedMutationHandler(payload) {
      handler.call(store2, local.state, payload);
    });
  }
  function registerAction(store2, type, handler, local) {
    var entry = store2._actions[type] || (store2._actions[type] = []);
    entry.push(function wrappedActionHandler(payload) {
      var res = handler.call(store2, {
        dispatch: local.dispatch,
        commit: local.commit,
        getters: local.getters,
        state: local.state,
        rootGetters: store2.getters,
        rootState: store2.state
      }, payload);
      if (!isPromise(res)) {
        res = Promise.resolve(res);
      }
      if (store2._devtoolHook) {
        return res.catch(function(err) {
          store2._devtoolHook.emit("vuex:error", err);
          throw err;
        });
      } else {
        return res;
      }
    });
  }
  function registerGetter(store2, type, rawGetter, local) {
    if (store2._wrappedGetters[type]) {
      {
        console.error("[vuex] duplicate getter key: " + type);
      }
      return;
    }
    store2._wrappedGetters[type] = function wrappedGetter(store3) {
      return rawGetter(local.state, local.getters, store3.state, store3.getters);
    };
  }
  function enableStrictMode(store2) {
    vue.watch(function() {
      return store2._state.data;
    }, function() {
      {
        assert(store2._committing, "do not mutate vuex store state outside mutation handlers.");
      }
    }, { deep: true, flush: "sync" });
  }
  function getNestedState(state, path) {
    return path.reduce(function(state2, key) {
      return state2[key];
    }, state);
  }
  function unifyObjectStyle(type, payload, options) {
    if (isObject(type) && type.type) {
      options = payload;
      payload = type;
      type = type.type;
    }
    {
      assert(typeof type === "string", "expects string as the type, but found " + typeof type + ".");
    }
    return { type, payload, options };
  }
  var LABEL_VUEX_BINDINGS = "vuex bindings";
  var MUTATIONS_LAYER_ID = "vuex:mutations";
  var ACTIONS_LAYER_ID = "vuex:actions";
  var INSPECTOR_ID = "vuex";
  var actionId = 0;
  function addDevtools(app2, store2) {
    setupDevtoolsPlugin({
      id: "org.vuejs.vuex",
      app: app2,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [LABEL_VUEX_BINDINGS]
    }, function(api) {
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: "Vuex Mutations",
        color: COLOR_LIME_500
      });
      api.addTimelineLayer({
        id: ACTIONS_LAYER_ID,
        label: "Vuex Actions",
        color: COLOR_LIME_500
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: "Vuex",
        icon: "storage",
        treeFilterPlaceholder: "Filter stores..."
      });
      api.on.getInspectorTree(function(payload) {
        if (payload.app === app2 && payload.inspectorId === INSPECTOR_ID) {
          if (payload.filter) {
            var nodes = [];
            flattenStoreForInspectorTree(nodes, store2._modules.root, payload.filter, "");
            payload.rootNodes = nodes;
          } else {
            payload.rootNodes = [
              formatStoreForInspectorTree(store2._modules.root, "")
            ];
          }
        }
      });
      api.on.getInspectorState(function(payload) {
        if (payload.app === app2 && payload.inspectorId === INSPECTOR_ID) {
          var modulePath = payload.nodeId;
          makeLocalGetters(store2, modulePath);
          payload.state = formatStoreForInspectorState(getStoreModule(store2._modules, modulePath), modulePath === "root" ? store2.getters : store2._makeLocalGettersCache, modulePath);
        }
      });
      api.on.editInspectorState(function(payload) {
        if (payload.app === app2 && payload.inspectorId === INSPECTOR_ID) {
          var modulePath = payload.nodeId;
          var path = payload.path;
          if (modulePath !== "root") {
            path = modulePath.split("/").filter(Boolean).concat(path);
          }
          store2._withCommit(function() {
            payload.set(store2._state.data, path, payload.state.value);
          });
        }
      });
      store2.subscribe(function(mutation, state) {
        var data = {};
        if (mutation.payload) {
          data.payload = mutation.payload;
        }
        data.state = state;
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: Date.now(),
            title: mutation.type,
            data
          }
        });
      });
      store2.subscribeAction({
        before: function(action, state) {
          var data = {};
          if (action.payload) {
            data.payload = action.payload;
          }
          action._id = actionId++;
          action._time = Date.now();
          data.state = state;
          api.addTimelineEvent({
            layerId: ACTIONS_LAYER_ID,
            event: {
              time: action._time,
              title: action.type,
              groupId: action._id,
              subtitle: "start",
              data
            }
          });
        },
        after: function(action, state) {
          var data = {};
          var duration = Date.now() - action._time;
          data.duration = {
            _custom: {
              type: "duration",
              display: duration + "ms",
              tooltip: "Action duration",
              value: duration
            }
          };
          if (action.payload) {
            data.payload = action.payload;
          }
          data.state = state;
          api.addTimelineEvent({
            layerId: ACTIONS_LAYER_ID,
            event: {
              time: Date.now(),
              title: action.type,
              groupId: action._id,
              subtitle: "end",
              data
            }
          });
        }
      });
    });
  }
  var COLOR_LIME_500 = 8702998;
  var COLOR_DARK = 6710886;
  var COLOR_WHITE = 16777215;
  var TAG_NAMESPACED = {
    label: "namespaced",
    textColor: COLOR_WHITE,
    backgroundColor: COLOR_DARK
  };
  function extractNameFromPath(path) {
    return path && path !== "root" ? path.split("/").slice(-2, -1)[0] : "Root";
  }
  function formatStoreForInspectorTree(module, path) {
    return {
      id: path || "root",
      label: extractNameFromPath(path),
      tags: module.namespaced ? [TAG_NAMESPACED] : [],
      children: Object.keys(module._children).map(function(moduleName) {
        return formatStoreForInspectorTree(module._children[moduleName], path + moduleName + "/");
      })
    };
  }
  function flattenStoreForInspectorTree(result, module, filter, path) {
    if (path.includes(filter)) {
      result.push({
        id: path || "root",
        label: path.endsWith("/") ? path.slice(0, path.length - 1) : path || "Root",
        tags: module.namespaced ? [TAG_NAMESPACED] : []
      });
    }
    Object.keys(module._children).forEach(function(moduleName) {
      flattenStoreForInspectorTree(result, module._children[moduleName], filter, path + moduleName + "/");
    });
  }
  function formatStoreForInspectorState(module, getters, path) {
    getters = path === "root" ? getters : getters[path];
    var gettersKeys = Object.keys(getters);
    var storeState = {
      state: Object.keys(module.state).map(function(key) {
        return {
          key,
          editable: true,
          value: module.state[key]
        };
      })
    };
    if (gettersKeys.length) {
      var tree = transformPathsToObjectTree(getters);
      storeState.getters = Object.keys(tree).map(function(key) {
        return {
          key: key.endsWith("/") ? extractNameFromPath(key) : key,
          editable: false,
          value: canThrow(function() {
            return tree[key];
          })
        };
      });
    }
    return storeState;
  }
  function transformPathsToObjectTree(getters) {
    var result = {};
    Object.keys(getters).forEach(function(key) {
      var path = key.split("/");
      if (path.length > 1) {
        var target = result;
        var leafKey = path.pop();
        path.forEach(function(p) {
          if (!target[p]) {
            target[p] = {
              _custom: {
                value: {},
                display: p,
                tooltip: "Module",
                abstract: true
              }
            };
          }
          target = target[p]._custom.value;
        });
        target[leafKey] = canThrow(function() {
          return getters[key];
        });
      } else {
        result[key] = canThrow(function() {
          return getters[key];
        });
      }
    });
    return result;
  }
  function getStoreModule(moduleMap, path) {
    var names = path.split("/").filter(function(n) {
      return n;
    });
    return names.reduce(function(module, moduleName, i) {
      var child = module[moduleName];
      if (!child) {
        throw new Error('Missing module "' + moduleName + '" for path "' + path + '".');
      }
      return i === names.length - 1 ? child : child._children;
    }, path === "root" ? moduleMap : moduleMap.root._children);
  }
  function canThrow(cb) {
    try {
      return cb();
    } catch (e) {
      return e;
    }
  }
  var Module = function Module2(rawModule, runtime) {
    this.runtime = runtime;
    this._children = /* @__PURE__ */ Object.create(null);
    this._rawModule = rawModule;
    var rawState = rawModule.state;
    this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
  };
  var prototypeAccessors$1 = { namespaced: { configurable: true } };
  prototypeAccessors$1.namespaced.get = function() {
    return !!this._rawModule.namespaced;
  };
  Module.prototype.addChild = function addChild(key, module) {
    this._children[key] = module;
  };
  Module.prototype.removeChild = function removeChild(key) {
    delete this._children[key];
  };
  Module.prototype.getChild = function getChild(key) {
    return this._children[key];
  };
  Module.prototype.hasChild = function hasChild(key) {
    return key in this._children;
  };
  Module.prototype.update = function update2(rawModule) {
    this._rawModule.namespaced = rawModule.namespaced;
    if (rawModule.actions) {
      this._rawModule.actions = rawModule.actions;
    }
    if (rawModule.mutations) {
      this._rawModule.mutations = rawModule.mutations;
    }
    if (rawModule.getters) {
      this._rawModule.getters = rawModule.getters;
    }
  };
  Module.prototype.forEachChild = function forEachChild(fn) {
    forEachValue(this._children, fn);
  };
  Module.prototype.forEachGetter = function forEachGetter(fn) {
    if (this._rawModule.getters) {
      forEachValue(this._rawModule.getters, fn);
    }
  };
  Module.prototype.forEachAction = function forEachAction(fn) {
    if (this._rawModule.actions) {
      forEachValue(this._rawModule.actions, fn);
    }
  };
  Module.prototype.forEachMutation = function forEachMutation(fn) {
    if (this._rawModule.mutations) {
      forEachValue(this._rawModule.mutations, fn);
    }
  };
  Object.defineProperties(Module.prototype, prototypeAccessors$1);
  var ModuleCollection = function ModuleCollection2(rawRootModule) {
    this.register([], rawRootModule, false);
  };
  ModuleCollection.prototype.get = function get(path) {
    return path.reduce(function(module, key) {
      return module.getChild(key);
    }, this.root);
  };
  ModuleCollection.prototype.getNamespace = function getNamespace(path) {
    var module = this.root;
    return path.reduce(function(namespace, key) {
      module = module.getChild(key);
      return namespace + (module.namespaced ? key + "/" : "");
    }, "");
  };
  ModuleCollection.prototype.update = function update$1(rawRootModule) {
    update([], this.root, rawRootModule);
  };
  ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
    var this$1$1 = this;
    if (runtime === void 0)
      runtime = true;
    {
      assertRawModule(path, rawModule);
    }
    var newModule = new Module(rawModule, runtime);
    if (path.length === 0) {
      this.root = newModule;
    } else {
      var parent = this.get(path.slice(0, -1));
      parent.addChild(path[path.length - 1], newModule);
    }
    if (rawModule.modules) {
      forEachValue(rawModule.modules, function(rawChildModule, key) {
        this$1$1.register(path.concat(key), rawChildModule, runtime);
      });
    }
  };
  ModuleCollection.prototype.unregister = function unregister(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    var child = parent.getChild(key);
    if (!child) {
      {
        console.warn("[vuex] trying to unregister module '" + key + "', which is not registered");
      }
      return;
    }
    if (!child.runtime) {
      return;
    }
    parent.removeChild(key);
  };
  ModuleCollection.prototype.isRegistered = function isRegistered(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    if (parent) {
      return parent.hasChild(key);
    }
    return false;
  };
  function update(path, targetModule, newModule) {
    {
      assertRawModule(path, newModule);
    }
    targetModule.update(newModule);
    if (newModule.modules) {
      for (var key in newModule.modules) {
        if (!targetModule.getChild(key)) {
          {
            console.warn("[vuex] trying to add a new module '" + key + "' on hot reloading, manual reload is needed");
          }
          return;
        }
        update(path.concat(key), targetModule.getChild(key), newModule.modules[key]);
      }
    }
  }
  var functionAssert = {
    assert: function(value) {
      return typeof value === "function";
    },
    expected: "function"
  };
  var objectAssert = {
    assert: function(value) {
      return typeof value === "function" || typeof value === "object" && typeof value.handler === "function";
    },
    expected: 'function or object with "handler" function'
  };
  var assertTypes = {
    getters: functionAssert,
    mutations: functionAssert,
    actions: objectAssert
  };
  function assertRawModule(path, rawModule) {
    Object.keys(assertTypes).forEach(function(key) {
      if (!rawModule[key]) {
        return;
      }
      var assertOptions = assertTypes[key];
      forEachValue(rawModule[key], function(value, type) {
        assert(assertOptions.assert(value), makeAssertionMessage(path, key, type, value, assertOptions.expected));
      });
    });
  }
  function makeAssertionMessage(path, key, type, value, expected) {
    var buf = key + " should be " + expected + ' but "' + key + "." + type + '"';
    if (path.length > 0) {
      buf += ' in module "' + path.join(".") + '"';
    }
    buf += " is " + JSON.stringify(value) + ".";
    return buf;
  }
  function createStore(options) {
    return new Store(options);
  }
  var Store = function Store2(options) {
    var this$1$1 = this;
    if (options === void 0)
      options = {};
    {
      assert(typeof Promise !== "undefined", "vuex requires a Promise polyfill in this browser.");
      assert(this instanceof Store2, "store must be called with the new operator.");
    }
    var plugins = options.plugins;
    if (plugins === void 0)
      plugins = [];
    var strict = options.strict;
    if (strict === void 0)
      strict = false;
    var devtools = options.devtools;
    this._committing = false;
    this._actions = /* @__PURE__ */ Object.create(null);
    this._actionSubscribers = [];
    this._mutations = /* @__PURE__ */ Object.create(null);
    this._wrappedGetters = /* @__PURE__ */ Object.create(null);
    this._modules = new ModuleCollection(options);
    this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    this._subscribers = [];
    this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    this._devtools = devtools;
    var store2 = this;
    var ref = this;
    var dispatch = ref.dispatch;
    var commit = ref.commit;
    this.dispatch = function boundDispatch(type, payload) {
      return dispatch.call(store2, type, payload);
    };
    this.commit = function boundCommit(type, payload, options2) {
      return commit.call(store2, type, payload, options2);
    };
    this.strict = strict;
    var state = this._modules.root.state;
    installModule(this, state, [], this._modules.root);
    resetStoreState(this, state);
    plugins.forEach(function(plugin) {
      return plugin(this$1$1);
    });
  };
  var prototypeAccessors = { state: { configurable: true } };
  Store.prototype.install = function install(app2, injectKey) {
    app2.provide(injectKey || storeKey, this);
    app2.config.globalProperties.$store = this;
    var useDevtools = this._devtools !== void 0 ? this._devtools : true;
    if (useDevtools) {
      addDevtools(app2, this);
    }
  };
  prototypeAccessors.state.get = function() {
    return this._state.data;
  };
  prototypeAccessors.state.set = function(v) {
    {
      assert(false, "use store.replaceState() to explicit replace store state.");
    }
  };
  Store.prototype.commit = function commit(_type, _payload, _options) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;
    var mutation = { type, payload };
    var entry = this._mutations[type];
    if (!entry) {
      {
        console.error("[vuex] unknown mutation type: " + type);
      }
      return;
    }
    this._withCommit(function() {
      entry.forEach(function commitIterator(handler) {
        handler(payload);
      });
    });
    this._subscribers.slice().forEach(function(sub) {
      return sub(mutation, this$1$1.state);
    });
    if (options && options.silent) {
      console.warn("[vuex] mutation type: " + type + ". Silent option has been removed. Use the filter functionality in the vue-devtools");
    }
  };
  Store.prototype.dispatch = function dispatch(_type, _payload) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;
    var action = { type, payload };
    var entry = this._actions[type];
    if (!entry) {
      {
        console.error("[vuex] unknown action type: " + type);
      }
      return;
    }
    try {
      this._actionSubscribers.slice().filter(function(sub) {
        return sub.before;
      }).forEach(function(sub) {
        return sub.before(action, this$1$1.state);
      });
    } catch (e) {
      {
        console.warn("[vuex] error in before action subscribers: ");
        console.error(e);
      }
    }
    var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
      return handler(payload);
    })) : entry[0](payload);
    return new Promise(function(resolve, reject) {
      result.then(function(res) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.after;
          }).forEach(function(sub) {
            return sub.after(action, this$1$1.state);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in after action subscribers: ");
            console.error(e);
          }
        }
        resolve(res);
      }, function(error) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.error;
          }).forEach(function(sub) {
            return sub.error(action, this$1$1.state, error);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in error action subscribers: ");
            console.error(e);
          }
        }
        reject(error);
      });
    });
  };
  Store.prototype.subscribe = function subscribe(fn, options) {
    return genericSubscribe(fn, this._subscribers, options);
  };
  Store.prototype.subscribeAction = function subscribeAction(fn, options) {
    var subs = typeof fn === "function" ? { before: fn } : fn;
    return genericSubscribe(subs, this._actionSubscribers, options);
  };
  Store.prototype.watch = function watch$1(getter, cb, options) {
    var this$1$1 = this;
    {
      assert(typeof getter === "function", "store.watch only accepts a function.");
    }
    return vue.watch(function() {
      return getter(this$1$1.state, this$1$1.getters);
    }, cb, Object.assign({}, options));
  };
  Store.prototype.replaceState = function replaceState(state) {
    var this$1$1 = this;
    this._withCommit(function() {
      this$1$1._state.data = state;
    });
  };
  Store.prototype.registerModule = function registerModule(path, rawModule, options) {
    if (options === void 0)
      options = {};
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
      assert(path.length > 0, "cannot register the root module by using registerModule.");
    }
    this._modules.register(path, rawModule);
    installModule(this, this.state, path, this._modules.get(path), options.preserveState);
    resetStoreState(this, this.state);
  };
  Store.prototype.unregisterModule = function unregisterModule(path) {
    var this$1$1 = this;
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    this._modules.unregister(path);
    this._withCommit(function() {
      var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
      delete parentState[path[path.length - 1]];
    });
    resetStore(this);
  };
  Store.prototype.hasModule = function hasModule(path) {
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    return this._modules.isRegistered(path);
  };
  Store.prototype.hotUpdate = function hotUpdate(newOptions) {
    this._modules.update(newOptions);
    resetStore(this, true);
  };
  Store.prototype._withCommit = function _withCommit(fn) {
    var committing = this._committing;
    this._committing = true;
    fn();
    this._committing = committing;
  };
  Object.defineProperties(Store.prototype, prototypeAccessors);
  var store = createStore({
    state: {
      userInfo: {
        "id": "1",
        "img": "../static/img/avator.png",
        "name": "\u6211\u5C31\u662F\u6211 \u4E0D\u4E00\u6837\u7684\u70DF\u706B"
      },
      totalData: {
        total_day: 0,
        total_number: 0,
        last_time: "",
        notes: 1
      },
      token: "",
      http: "http://billserver/",
      dbList: [],
      payList: [
        {
          id: 1,
          imgUrl: "../../static/img/default1.png",
          name: "\u9ED8\u8BA4",
          type: "1"
        },
        {
          id: 2,
          imgUrl: "../../static/img/moring1.png",
          name: "\u65E9\u9910",
          type: "1"
        },
        {
          id: 3,
          imgUrl: "../../static/img/afternoon1.png",
          name: "\u5348\u9910",
          type: "1"
        },
        {
          id: 4,
          imgUrl: "../../static/img/eventing1.png",
          name: "\u665A\u9910",
          type: "1"
        },
        {
          id: 5,
          imgUrl: "../../static/img/snacks1.png",
          name: "\u96F6\u98DF",
          type: "1"
        },
        {
          id: 6,
          imgUrl: "../../static/img/dringks1.png",
          name: "\u996E\u6599",
          type: "1"
        },
        {
          id: 7,
          imgUrl: "../../static/img/education1.png",
          name: "\u6559\u80B2",
          type: "1"
        },
        {
          id: 8,
          imgUrl: "../../static/img/entertainment1.png",
          name: "\u5A31\u4E50",
          type: "1"
        },
        {
          id: 9,
          imgUrl: "../../static/img/hongbao1.png",
          name: "\u7EA2\u5305",
          type: "1"
        },
        {
          id: 10,
          imgUrl: "../../static/img/Fruits1.png",
          name: "\u6C34\u679C",
          type: "1"
        },
        {
          id: 11,
          imgUrl: "../../static/img/cosmetology1.png",
          name: "\u7F8E\u5BB9\u7F8E\u7532",
          type: "1"
        },
        {
          id: 12,
          imgUrl: "../../static/img/jiaotong1.png",
          name: "\u4EA4\u901A",
          type: "1"
        },
        {
          id: 13,
          imgUrl: "../../static/img/life1.png",
          name: "\u751F\u6D3B\u7528\u54C1",
          type: "1"
        },
        {
          id: 14,
          imgUrl: "../../static/img/study1.png",
          name: "\u5B66\u4E60",
          type: "1"
        },
        {
          id: 15,
          imgUrl: "../../static/img/Vegetables1.png",
          name: "\u4E70\u83DC",
          type: "1"
        },
        {
          id: 16,
          imgUrl: "../../static/img/yiyao1.png",
          name: "\u533B\u836F",
          type: "1"
        },
        {
          id: 17,
          imgUrl: "../../static/img/taobao1.png",
          name: "\u6DD8\u5B9D",
          type: "1"
        },
        {
          id: 18,
          imgUrl: "../../static/img/house1.png",
          name: "\u623F\u79DF",
          type: "1"
        },
        {
          id: 19,
          imgUrl: "../../static/img/iphone1.png",
          name: "\u8BDD\u8D39",
          type: "1"
        },
        {
          id: 20,
          imgUrl: "../../static/img/Digital1.png",
          name: "\u6570\u7801",
          type: "1"
        },
        {
          id: 21,
          imgUrl: "../../static/img/water1.png",
          name: "\u6C34\u8D39",
          type: "1"
        },
        {
          id: 22,
          imgUrl: "../../static/img/electric1.png",
          name: "\u7535\u8D39",
          type: "1"
        },
        {
          id: 23,
          imgUrl: "../../static/img/mortgage1.png",
          name: "\u623F\u8D37",
          type: "1"
        },
        {
          id: 24,
          imgUrl: "../../static/img/weixin1.png",
          name: "\u5FAE\u4FE1",
          type: "1"
        },
        {
          id: 25,
          imgUrl: "../../static/img/zhi1.png",
          name: "\u652F\u4ED8\u5B9D",
          type: "1"
        },
        {
          id: 26,
          imgUrl: "../../static/img/work1.png",
          name: "\u529E\u516C\u7528\u54C1",
          type: "1"
        },
        {
          id: 27,
          imgUrl: "../../static/img/cmyy1.png",
          name: "\u67F4\u7C73\u6CB9\u76D0",
          type: "1"
        },
        {
          id: 28,
          imgUrl: "../../static/img/jiaju1.png",
          name: "\u5BB6\u5177\u7528\u54C1",
          type: "1"
        },
        {
          id: 29,
          imgUrl: "../../static/img/rose1.png",
          name: "\u670D\u9970\u978B\u5E3D",
          type: "1"
        },
        {
          id: 30,
          imgUrl: "../../static/img/mian1.png",
          name: "\u8C37\u7269\u7CAE\u9762",
          type: "1"
        },
        {
          id: 31,
          imgUrl: "../../static/img/Travel1.png",
          name: "\u65C5\u6E38",
          type: "1"
        },
        {
          id: 32,
          imgUrl: "../../static/img/express1.png",
          name: "\u5FEB\u9012",
          type: "1"
        },
        {
          id: 33,
          imgUrl: "../../static/img/tv1.png",
          name: "\u5BB6\u7528\u7535\u5668",
          type: "1"
        }
      ],
      incomeList: [
        {
          id: 1,
          imgUrl: "../../static/img/cunqianguan.png",
          name: "\u5176\u4ED6\u6536\u5165",
          type: "2"
        },
        {
          id: 2,
          imgUrl: "../../static/img/gongzi.png",
          name: "\u5DE5\u8D44",
          type: "2"
        },
        {
          id: 3,
          imgUrl: "../../static/img/licai.png",
          name: "\u7406\u8D22",
          type: "2"
        },
        {
          id: 4,
          imgUrl: "../../static/img/hongbao1.png",
          name: "\u7EA2\u5305",
          type: "2"
        },
        {
          id: 5,
          imgUrl: "../../static/img/shangye.png",
          name: "\u8425\u4E1A\u6536\u5165",
          type: "2"
        },
        {
          id: 6,
          imgUrl: "../../static/img/jianzhi.png",
          name: "\u517C\u804C\u5916\u5FEB",
          type: "2"
        }
      ]
    },
    mutations: {}
  });
  function createApp() {
    const app2 = vue.createVueApp(App);
    app2.use(store);
    return {
      app: app2
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
