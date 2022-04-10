// Source:
// Countries with long/lat => https://developers.google.com/public-data/docs/canonical/countries_csv
// Countries images => https://github.com/djaiss/mapsicon
import { flag } from "country-emoji";

const countryCodesWithImage = [
  "ad",
  "ao",
  "bg",
  "bo",
  "by",
  "ch",
  "cr",
  "de",
  "ee",
  "fj",
  "ge",
  "gn",
  "gw",
  "hu",
  "iq",
  "ke",
  "kr",
  "li",
  "ly",
  "mk",
  "mz",
  "nl",
  "pa",
  "sc",
  "sk",
  "st",
  "tn",
  "ug",
  "ae",
  "az",
  "bh",
  "bq",
  "bz",
  "ci",
  "cu",
  "dj",
  "eg",
  "gy",
  "id",
  "ir",
  "kg",
  "kw",
  "lk",
  "ma",
  "ml",
  "mt",
  "na",
  "no",
  "pe",
  "ro",
  "sd",
  "sl",
  "sv",
  "tg",
  "to",
  "us",
  "za",
  "af",
  "ar",
  "ba",
  "bi",
  "br",
  "ca",
  "cv",
  "dk",
  "gq",
  "hk",
  "ie",
  "is",
  "kh",
  "lr",
  "mc",
  "mm",
  "mu",
  "np",
  "rs",
  "se",
  "sm",
  "th",
  "tr",
  "uy",
  "vn",
  "zm",
  "ag",
  "bb",
  "bj",
  "bs",
  "cl",
  "dm",
  "er",
  "fr",
  "gh",
  "gr",
  "il",
  "it",
  "ki",
  "kz",
  "ls",
  "md",
  "mn",
  "mv",
  "ne",
  "nr",
  "pg",
  "pt",
  "ru",
  "sg",
  "sn",
  "sy",
  "tj",
  "tt",
  "uz",
  "vu",
  "zw",
  "at",
  "bd",
  "bt",
  "cd",
  "cm",
  "do",
  "es",
  "ga",
  "hn",
  "jm",
  "km",
  "la",
  "lt",
  "me",
  "mw",
  "ph",
  "pw",
  "rw",
  "so",
  "sz",
  "tw",
  "va",
  "al",
  "au",
  "be",
  "cf",
  "cn",
  "cy",
  "dz",
  "et",
  "gb",
  "gt",
  "hr",
  "in",
  "jo",
  "kn",
  "lb",
  "lu",
  "mx",
  "ng",
  "nz",
  "pk",
  "py",
  "sa",
  "si",
  "sr",
  "tl",
  "tz",
  "tw",
  "vc",
  "ws",
  "am",
  "bf",
  "bn",
  "bw",
  "cg",
  "co",
  "cz",
  "ec",
  "fi",
  "gd",
  "gm",
  "ht",
  "jp",
  "kp",
  "lc",
  "lv",
  "mg",
  "mr",
  "my",
  "ni",
  "om",
  "pl",
  "qa",
  "sb",
  "ss",
  "td",
  "tm",
  "ua",
  "ve",
  "ye",
  "fm",
  "mh",
  "tv",
  "ps",
];

export interface Country {
  code: string;
  latitude: number;
  longitude: number;
  name: string;
}

export const countries: Country[] = [
  { code: "AD", latitude: 42.546245, longitude: 1.601554, name: "Andorra" },
  {
    code: "AE",
    latitude: 23.424076,
    longitude: 53.847818,
    name: "United Arab Emirates",
  },
  { code: "AF", latitude: 33.93911, longitude: 67.709953, name: "Afghanistan" },
  {
    code: "AG",
    latitude: 17.060816,
    longitude: -61.796428,
    name: "Antigua and Barbuda",
  },
  { code: "AL", latitude: 41.153332, longitude: 20.168331, name: "Albania" },
  { code: "AM", latitude: 40.069099, longitude: 45.038189, name: "Armenia" },
  { code: "AO", latitude: -11.202692, longitude: 17.873887, name: "Angola" },
  {
    code: "AR",
    latitude: -38.416097,
    longitude: -63.616672,
    name: "Argentina",
  },
  { code: "AT", latitude: 47.516231, longitude: 14.550072, name: "Austria" },
  {
    code: "AU",
    latitude: -25.274398,
    longitude: 133.775136,
    name: "Australia",
  },
  { code: "AZ", latitude: 40.143105, longitude: 47.576927, name: "Azerbaijan" },
  {
    code: "BA",
    latitude: 43.915886,
    longitude: 17.679076,
    name: "Bosnia and Herzegovina",
  },
  { code: "BB", latitude: 13.193887, longitude: -59.543198, name: "Barbados" },
  { code: "BD", latitude: 23.684994, longitude: 90.356331, name: "Bangladesh" },
  { code: "BE", latitude: 50.503887, longitude: 4.469936, name: "Belgium" },
  {
    code: "BF",
    latitude: 12.238333,
    longitude: -1.561593,
    name: "Burkina Faso",
  },
  { code: "BG", latitude: 42.733883, longitude: 25.48583, name: "Bulgaria" },
  { code: "BH", latitude: 25.930414, longitude: 50.637772, name: "Bahrain" },
  { code: "BI", latitude: -3.373056, longitude: 29.918886, name: "Burundi" },
  { code: "BJ", latitude: 9.30769, longitude: 2.315834, name: "Benin" },
  { code: "BN", latitude: 4.535277, longitude: 114.727669, name: "Brunei" },
  { code: "BO", latitude: -16.290154, longitude: -63.588653, name: "Bolivia" },
  { code: "BR", latitude: -14.235004, longitude: -51.92528, name: "Brazil" },
  { code: "BS", latitude: 25.03428, longitude: -77.39628, name: "Bahamas" },
  { code: "BT", latitude: 27.514162, longitude: 90.433601, name: "Bhutan" },
  { code: "BW", latitude: -22.328474, longitude: 24.684866, name: "Botswana" },
  { code: "BY", latitude: 53.709807, longitude: 27.953389, name: "Belarus" },
  { code: "BZ", latitude: 17.189877, longitude: -88.49765, name: "Belize" },
  { code: "CA", latitude: 56.130366, longitude: -106.346771, name: "Canada" },
  {
    code: "CD",
    latitude: -4.038333,
    longitude: 21.758664,
    name: "Democratic Republic of the Congo",
  },
  {
    code: "CF",
    latitude: 6.611111,
    longitude: 20.939444,
    name: "Central African Republic",
  },
  {
    code: "CG",
    latitude: -0.228021,
    longitude: 15.827659,
    name: "Congo",
  },
  { code: "CH", latitude: 46.818188, longitude: 8.227512, name: "Switzerland" },
  {
    code: "CI",
    latitude: 7.539989,
    longitude: -5.54708,
    name: "Côte d'Ivoire",
  },
  { code: "CL", latitude: -35.675147, longitude: -71.542969, name: "Chile" },
  { code: "CM", latitude: 7.369722, longitude: 12.354722, name: "Cameroon" },
  { code: "CN", latitude: 35.86166, longitude: 104.195397, name: "China" },
  { code: "CO", latitude: 4.570868, longitude: -74.297333, name: "Colombia" },
  { code: "CR", latitude: 9.748917, longitude: -83.753428, name: "Costa Rica" },
  { code: "CU", latitude: 21.521757, longitude: -77.781167, name: "Cuba" },
  {
    code: "CV",
    latitude: 16.002082,
    longitude: -24.013197,
    name: "Cape Verde",
  },
  { code: "CY", latitude: 35.126413, longitude: 33.429859, name: "Cyprus" },
  {
    code: "CZ",
    latitude: 49.817492,
    longitude: 15.472962,
    name: "Czechia",
  },
  { code: "DE", latitude: 51.165691, longitude: 10.451526, name: "Germany" },
  { code: "DJ", latitude: 11.825138, longitude: 42.590275, name: "Djibouti" },
  { code: "DK", latitude: 56.26392, longitude: 9.501785, name: "Denmark" },
  { code: "DM", latitude: 15.414999, longitude: -61.370976, name: "Dominica" },
  {
    code: "DO",
    latitude: 18.735693,
    longitude: -70.162651,
    name: "Dominican Republic",
  },
  { code: "DZ", latitude: 28.033886, longitude: 1.659626, name: "Algeria" },
  { code: "EC", latitude: -1.831239, longitude: -78.183406, name: "Ecuador" },
  { code: "EE", latitude: 58.595272, longitude: 25.013607, name: "Estonia" },
  { code: "EG", latitude: 26.820553, longitude: 30.802498, name: "Egypt" },
  { code: "ER", latitude: 15.179384, longitude: 39.782334, name: "Eritrea" },
  { code: "ES", latitude: 40.463667, longitude: -3.74922, name: "Spain" },
  { code: "ET", latitude: 9.145, longitude: 40.489673, name: "Ethiopia" },
  { code: "FI", latitude: 61.92411, longitude: 25.748151, name: "Finland" },
  { code: "FJ", latitude: -16.578193, longitude: 179.414413, name: "Fiji" },
  { code: "FM", latitude: 7.425554, longitude: 150.550812, name: "Micronesia" },
  { code: "FR", latitude: 46.227638, longitude: 2.213749, name: "France" },
  { code: "GA", latitude: -0.803689, longitude: 11.609444, name: "Gabon" },
  {
    code: "GB",
    latitude: 55.378051,
    longitude: -3.435973,
    name: "United Kingdom",
  },
  { code: "GD", latitude: 12.262776, longitude: -61.604171, name: "Grenada" },
  { code: "GE", latitude: 42.315407, longitude: 43.356892, name: "Georgia" },
  { code: "GH", latitude: 7.946527, longitude: -1.023194, name: "Ghana" },
  { code: "GM", latitude: 13.443182, longitude: -15.310139, name: "Gambia" },
  { code: "GN", latitude: 9.945587, longitude: -9.696645, name: "Guinea" },
  {
    code: "GQ",
    latitude: 1.650801,
    longitude: 10.267895,
    name: "Equatorial Guinea",
  },
  { code: "GR", latitude: 39.074208, longitude: 21.824312, name: "Greece" },
  { code: "GT", latitude: 15.783471, longitude: -90.230759, name: "Guatemala" },
  {
    code: "GW",
    latitude: 11.803749,
    longitude: -15.180413,
    name: "Guinea-Bissau",
  },
  { code: "GY", latitude: 4.860416, longitude: -58.93018, name: "Guyana" },
  { code: "HK", latitude: 22.396428, longitude: 114.109497, name: "Hong Kong" },
  { code: "HN", latitude: 15.199999, longitude: -86.241905, name: "Honduras" },
  { code: "HR", latitude: 45.1, longitude: 15.2, name: "Croatia" },
  { code: "HT", latitude: 18.971187, longitude: -72.285215, name: "Haiti" },
  { code: "HU", latitude: 47.162494, longitude: 19.503304, name: "Hungary" },
  { code: "ID", latitude: -0.789275, longitude: 113.921327, name: "Indonesia" },
  { code: "IE", latitude: 53.41291, longitude: -8.24389, name: "Ireland" },
  { code: "IL", latitude: 31.046051, longitude: 34.851612, name: "Israel" },
  { code: "IN", latitude: 20.593684, longitude: 78.96288, name: "India" },
  { code: "IQ", latitude: 33.223191, longitude: 43.679291, name: "Iraq" },
  { code: "IR", latitude: 32.427908, longitude: 53.688046, name: "Iran" },
  { code: "IS", latitude: 64.963051, longitude: -19.020835, name: "Iceland" },
  { code: "IT", latitude: 41.87194, longitude: 12.56738, name: "Italy" },
  { code: "JM", latitude: 18.109581, longitude: -77.297508, name: "Jamaica" },
  { code: "JO", latitude: 30.585164, longitude: 36.238414, name: "Jordan" },
  { code: "JP", latitude: 36.204824, longitude: 138.252924, name: "Japan" },
  { code: "KE", latitude: -0.023559, longitude: 37.906193, name: "Kenya" },
  { code: "KG", latitude: 41.20438, longitude: 74.766098, name: "Kyrgyzstan" },
  { code: "KH", latitude: 12.565679, longitude: 104.990963, name: "Cambodia" },
  { code: "KI", latitude: -3.370417, longitude: -168.734039, name: "Kiribati" },
  { code: "KM", latitude: -11.875001, longitude: 43.872219, name: "Comoros" },
  {
    code: "KN",
    latitude: 17.357822,
    longitude: -62.782998,
    name: "Saint Kitts and Nevis",
  },
  {
    code: "KP",
    latitude: 40.339852,
    longitude: 127.510093,
    name: "North Korea",
  },
  {
    code: "KR",
    latitude: 35.907757,
    longitude: 127.766922,
    name: "South Korea",
  },
  { code: "KW", latitude: 29.31166, longitude: 47.481766, name: "Kuwait" },
  { code: "KZ", latitude: 48.019573, longitude: 66.923684, name: "Kazakhstan" },
  { code: "LA", latitude: 19.85627, longitude: 102.495496, name: "Laos" },
  { code: "LB", latitude: 33.854721, longitude: 35.862285, name: "Lebanon" },
  {
    code: "LC",
    latitude: 13.909444,
    longitude: -60.978893,
    name: "Saint Lucia",
  },
  { code: "LI", latitude: 47.166, longitude: 9.555373, name: "Liechtenstein" },
  { code: "LK", latitude: 7.873054, longitude: 80.771797, name: "Sri Lanka" },
  { code: "LR", latitude: 6.428055, longitude: -9.429499, name: "Liberia" },
  { code: "LS", latitude: -29.609988, longitude: 28.233608, name: "Lesotho" },
  { code: "LT", latitude: 55.169438, longitude: 23.881275, name: "Lithuania" },
  { code: "LU", latitude: 49.815273, longitude: 6.129583, name: "Luxembourg" },
  { code: "LV", latitude: 56.879635, longitude: 24.603189, name: "Latvia" },
  { code: "LY", latitude: 26.3351, longitude: 17.228331, name: "Libya" },
  { code: "MA", latitude: 31.791702, longitude: -7.09262, name: "Morocco" },
  { code: "MC", latitude: 43.750298, longitude: 7.412841, name: "Monaco" },
  { code: "MD", latitude: 47.411631, longitude: 28.369885, name: "Moldova" },
  { code: "ME", latitude: 42.708678, longitude: 19.37439, name: "Montenegro" },
  {
    code: "MG",
    latitude: -18.766947,
    longitude: 46.869107,
    name: "Madagascar",
  },
  {
    code: "MH",
    latitude: 7.131474,
    longitude: 171.184478,
    name: "Marshall Islands",
  },
  {
    code: "MK",
    latitude: 41.608635,
    longitude: 21.745275,
    name: "Macedonia",
  },
  { code: "ML", latitude: 17.570692, longitude: -3.996166, name: "Mali" },
  {
    code: "MM",
    latitude: 21.913965,
    longitude: 95.956223,
    name: "Myanmar",
  },
  { code: "MN", latitude: 46.862496, longitude: 103.846656, name: "Mongolia" },
  { code: "MR", latitude: 21.00789, longitude: -10.940835, name: "Mauritania" },
  { code: "MT", latitude: 35.937496, longitude: 14.375416, name: "Malta" },
  { code: "MU", latitude: -20.348404, longitude: 57.552152, name: "Mauritius" },
  { code: "MV", latitude: 3.202778, longitude: 73.22068, name: "Maldives" },
  { code: "MW", latitude: -13.254308, longitude: 34.301525, name: "Malawi" },
  { code: "MX", latitude: 23.634501, longitude: -102.552784, name: "Mexico" },
  { code: "MY", latitude: 4.040255, longitude: 109.091912, name: "Malaysia" },
  {
    code: "MZ",
    latitude: -18.665695,
    longitude: 35.529562,
    name: "Mozambique",
  },
  { code: "NA", latitude: -22.95764, longitude: 18.49041, name: "Namibia" },
  { code: "NE", latitude: 17.607789, longitude: 8.081666, name: "Niger" },
  { code: "NG", latitude: 9.081999, longitude: 8.675277, name: "Nigeria" },
  { code: "NI", latitude: 12.865416, longitude: -85.207229, name: "Nicaragua" },
  { code: "NL", latitude: 52.132633, longitude: 5.291266, name: "Netherlands" },
  { code: "NO", latitude: 60.472024, longitude: 8.468946, name: "Norway" },
  { code: "NP", latitude: 28.394857, longitude: 84.124008, name: "Nepal" },
  { code: "NR", latitude: -0.522778, longitude: 166.931503, name: "Nauru" },
  {
    code: "NZ",
    latitude: -40.900557,
    longitude: 174.885971,
    name: "New Zealand",
  },
  { code: "OM", latitude: 21.512583, longitude: 55.923255, name: "Oman" },
  { code: "PA", latitude: 8.537981, longitude: -80.782127, name: "Panama" },
  { code: "PE", latitude: -9.189967, longitude: -75.015152, name: "Peru" },
  {
    code: "PG",
    latitude: -6.314993,
    longitude: 143.95555,
    name: "Papua New Guinea",
  },
  {
    code: "PH",
    latitude: 12.879721,
    longitude: 121.774017,
    name: "Philippines",
  },
  { code: "PK", latitude: 30.375321, longitude: 69.345116, name: "Pakistan" },
  { code: "PL", latitude: 51.919438, longitude: 19.145136, name: "Poland" },
  {
    code: "PS",
    latitude: 31.952162,
    longitude: 35.233154,
    name: "Palestine",
  },
  { code: "PT", latitude: 39.399872, longitude: -8.224454, name: "Portugal" },
  { code: "PW", latitude: 7.51498, longitude: 134.58252, name: "Palau" },
  { code: "PY", latitude: -23.442503, longitude: -58.443832, name: "Paraguay" },
  { code: "QA", latitude: 25.354826, longitude: 51.183884, name: "Qatar" },
  { code: "RO", latitude: 45.943161, longitude: 24.96676, name: "Romania" },
  { code: "RS", latitude: 44.016521, longitude: 21.005859, name: "Serbia" },
  { code: "RU", latitude: 61.52401, longitude: 105.318756, name: "Russia" },
  { code: "RW", latitude: -1.940278, longitude: 29.873888, name: "Rwanda" },
  {
    code: "SA",
    latitude: 23.885942,
    longitude: 45.079162,
    name: "Saudi Arabia",
  },
  {
    code: "SB",
    latitude: -9.64571,
    longitude: 160.156194,
    name: "Solomon Islands",
  },
  { code: "SC", latitude: -4.679574, longitude: 55.491977, name: "Seychelles" },
  { code: "SD", latitude: 15.8905231, longitude: 30.7671933, name: "Sudan" },
  { code: "SS", latitude: 6.85065, longitude: 30.659016, name: "South Sudan" },
  { code: "SE", latitude: 60.128161, longitude: 18.643501, name: "Sweden" },
  { code: "SG", latitude: 1.352083, longitude: 103.819836, name: "Singapore" },
  { code: "SI", latitude: 46.151241, longitude: 14.995463, name: "Slovenia" },
  { code: "SK", latitude: 48.669026, longitude: 19.699024, name: "Slovakia" },
  {
    code: "SL",
    latitude: 8.460555,
    longitude: -11.779889,
    name: "Sierra Leone",
  },
  { code: "SM", latitude: 43.94236, longitude: 12.457777, name: "San Marino" },
  { code: "SN", latitude: 14.497401, longitude: -14.452362, name: "Senegal" },
  { code: "SO", latitude: 5.152149, longitude: 46.199616, name: "Somalia" },
  { code: "SR", latitude: 3.919305, longitude: -56.027783, name: "Suriname" },
  {
    code: "ST",
    latitude: 0.18636,
    longitude: 6.613081,
    name: "São Tomé and Príncipe",
  },
  {
    code: "SV",
    latitude: 13.794185,
    longitude: -88.89653,
    name: "El Salvador",
  },
  { code: "SY", latitude: 34.802075, longitude: 38.996815, name: "Syria" },
  { code: "SZ", latitude: -26.522503, longitude: 31.465866, name: "Swaziland" },
  { code: "TD", latitude: 15.454166, longitude: 18.732207, name: "Chad" },
  { code: "TG", latitude: 8.619543, longitude: 0.824782, name: "Togo" },
  { code: "TH", latitude: 15.870032, longitude: 100.992541, name: "Thailand" },
  { code: "TJ", latitude: 38.861034, longitude: 71.276093, name: "Tajikistan" },
  {
    code: "TL",
    latitude: -8.874217,
    longitude: 125.727539,
    name: "Timor-Leste",
  },
  {
    code: "TM",
    latitude: 38.969719,
    longitude: 59.556278,
    name: "Turkmenistan",
  },
  { code: "TN", latitude: 33.886917, longitude: 9.537499, name: "Tunisia" },
  { code: "TO", latitude: -21.178986, longitude: -175.198242, name: "Tonga" },
  { code: "TR", latitude: 38.963745, longitude: 35.243322, name: "Turkey" },
  {
    code: "TT",
    latitude: 10.691803,
    longitude: -61.222503,
    name: "Trinidad and Tobago",
  },
  { code: "TV", latitude: -7.109535, longitude: 177.64933, name: "Tuvalu" },
  { code: "TZ", latitude: -6.369028, longitude: 34.888822, name: "Tanzania" },
  { code: "UA", latitude: 48.379433, longitude: 31.16558, name: "Ukraine" },
  { code: "UG", latitude: 1.373333, longitude: 32.290275, name: "Uganda" },
  {
    code: "US",
    latitude: 37.09024,
    longitude: -95.712891,
    name: "United States",
  },
  { code: "UY", latitude: -32.522779, longitude: -55.765835, name: "Uruguay" },
  { code: "UZ", latitude: 41.377491, longitude: 64.585262, name: "Uzbekistan" },
  {
    code: "VA",
    latitude: 41.902916,
    longitude: 12.453389,
    name: "Vatican City",
  },
  {
    code: "VC",
    latitude: 12.984305,
    longitude: -61.287228,
    name: "Saint Vincent and the Grenadines",
  },
  { code: "VE", latitude: 6.42375, longitude: -66.58973, name: "Venezuela" },
  { code: "VN", latitude: 14.058324, longitude: 108.277199, name: "Vietnam" },
  { code: "VU", latitude: -15.376706, longitude: 166.959158, name: "Vanuatu" },
  { code: "WS", latitude: -13.759029, longitude: -172.104629, name: "Samoa" },
  { code: "XK", latitude: 42.602636, longitude: 20.902977, name: "Kosovo" },
  { code: "YE", latitude: 15.552727, longitude: 48.516388, name: "Yemen" },
  {
    code: "ZA",
    latitude: -30.559482,
    longitude: 22.937506,
    name: "South Africa",
  },
  { code: "ZM", latitude: -13.133897, longitude: 27.849332, name: "Zambia" },
  { code: "ZW", latitude: -19.015438, longitude: 29.154857, name: "Zimbabwe" },
];

export const countriesWithImage = countries.filter((c) =>
  countryCodesWithImage.includes(c.code.toLowerCase())
);

export function getCountryName(language: string, country: Country) {
  return country.name;
}

export function sanitizeCountryName(countryName: string): string {
  return countryName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[- '()]/g, "")
    .toLowerCase();
}

export interface Iso {
  [id: string]: string;
}

export const countryISOMapping: Iso = {
  AF: "AFG",
  AX: "ALA",
  AL: "ALB",
  DZ: "DZA",
  AS: "ASM",
  AD: "AND",
  AO: "AGO",
  AI: "AIA",
  AQ: "ATA",
  AG: "ATG",
  AR: "ARG",
  AM: "ARM",
  AW: "ABW",
  AU: "AUS",
  AT: "AUT",
  AZ: "AZE",
  BS: "BHS",
  BH: "BHR",
  BD: "BGD",
  BB: "BRB",
  BY: "BLR",
  BE: "BEL",
  BZ: "BLZ",
  BJ: "BEN",
  BM: "BMU",
  BT: "BTN",
  BO: "BOL",
  BA: "BIH",
  BW: "BWA",
  BV: "BVT",
  BR: "BRA",
  VG: "VGB",
  IO: "IOT",
  BN: "BRN",
  BG: "BGR",
  BF: "BFA",
  BI: "BDI",
  KH: "KHM",
  CM: "CMR",
  CA: "CAN",
  CV: "CPV",
  KY: "CYM",
  CF: "CAF",
  TD: "TCD",
  CL: "CHL",
  CN: "CHN",
  HK: "HKG",
  MO: "MAC",
  CX: "CXR",
  CC: "CCK",
  CO: "COL",
  KM: "COM",
  CG: "COG",
  CD: "COD",
  CK: "COK",
  CR: "CRI",
  CI: "CIV",
  HR: "HRV",
  CU: "CUB",
  CY: "CYP",
  CZ: "CZE",
  DK: "DNK",
  DJ: "DJI",
  DM: "DMA",
  DO: "DOM",
  EC: "ECU",
  EG: "EGY",
  SV: "SLV",
  GQ: "GNQ",
  ER: "ERI",
  EE: "EST",
  ET: "ETH",
  FK: "FLK",
  FO: "FRO",
  FJ: "FJI",
  FI: "FIN",
  FR: "FRA",
  GF: "GUF",
  PF: "PYF",
  TF: "ATF",
  GA: "GAB",
  GM: "GMB",
  GE: "GEO",
  DE: "DEU",
  GH: "GHA",
  GI: "GIB",
  GR: "GRC",
  GL: "GRL",
  GD: "GRD",
  GP: "GLP",
  GU: "GUM",
  GT: "GTM",
  GG: "GGY",
  GN: "GIN",
  GW: "GNB",
  GY: "GUY",
  HT: "HTI",
  HM: "HMD",
  VA: "VAT",
  HN: "HND",
  HU: "HUN",
  IS: "ISL",
  IN: "IND",
  ID: "IDN",
  IR: "IRN",
  IQ: "IRQ",
  IE: "IRL",
  IM: "IMN",
  IL: "ISR",
  IT: "ITA",
  JM: "JAM",
  JP: "JPN",
  JE: "JEY",
  JO: "JOR",
  KZ: "KAZ",
  KE: "KEN",
  KI: "KIR",
  KP: "PRK",
  KR: "KOR",
  KW: "KWT",
  KG: "KGZ",
  LA: "LAO",
  LV: "LVA",
  LB: "LBN",
  LS: "LSO",
  LR: "LBR",
  LY: "LBY",
  LI: "LIE",
  LT: "LTU",
  LU: "LUX",
  MK: "MKD",
  MG: "MDG",
  MW: "MWI",
  MY: "MYS",
  MV: "MDV",
  ML: "MLI",
  MT: "MLT",
  MH: "MHL",
  MQ: "MTQ",
  MR: "MRT",
  MU: "MUS",
  YT: "MYT",
  MX: "MEX",
  FM: "FSM",
  MD: "MDA",
  MC: "MCO",
  MN: "MNG",
  ME: "MNE",
  MS: "MSR",
  MA: "MAR",
  MZ: "MOZ",
  MM: "MMR",
  NA: "NAM",
  NR: "NRU",
  NP: "NPL",
  NL: "NLD",
  AN: "ANT",
  NC: "NCL",
  NZ: "NZL",
  NI: "NIC",
  NE: "NER",
  NG: "NGA",
  NU: "NIU",
  NF: "NFK",
  MP: "MNP",
  NO: "NOR",
  OM: "OMN",
  PK: "PAK",
  PW: "PLW",
  PS: "PSE",
  PA: "PAN",
  PG: "PNG",
  PY: "PRY",
  PE: "PER",
  PH: "PHL",
  PN: "PCN",
  PL: "POL",
  PT: "PRT",
  PR: "PRI",
  QA: "QAT",
  RE: "REU",
  RO: "ROU",
  RU: "RUS",
  RW: "RWA",
  BL: "BLM",
  SH: "SHN",
  KN: "KNA",
  LC: "LCA",
  MF: "MAF",
  PM: "SPM",
  VC: "VCT",
  WS: "WSM",
  SM: "SMR",
  ST: "STP",
  SA: "SAU",
  SN: "SEN",
  RS: "SRB",
  SC: "SYC",
  SL: "SLE",
  SG: "SGP",
  SK: "SVK",
  SI: "SVN",
  SB: "SLB",
  SO: "SOM",
  ZA: "ZAF",
  GS: "SGS",
  SS: "SSD",
  ES: "ESP",
  LK: "LKA",
  SD: "SDN",
  SR: "SUR",
  SJ: "SJM",
  SZ: "SWZ",
  SE: "SWE",
  CH: "CHE",
  SY: "SYR",
  TW: "TWN",
  TJ: "TJK",
  TZ: "TZA",
  TH: "THA",
  TL: "TLS",
  TG: "TGO",
  TK: "TKL",
  TO: "TON",
  TT: "TTO",
  TN: "TUN",
  TR: "TUR",
  TM: "TKM",
  TC: "TCA",
  TV: "TUV",
  UG: "UGA",
  UA: "UKR",
  AE: "ARE",
  GB: "GBR",
  US: "USA",
  UM: "UMI",
  UY: "URY",
  UZ: "UZB",
  VU: "VUT",
  VE: "VEN",
  VN: "VNM",
  VI: "VIR",
  WF: "WLF",
  EH: "ESH",
  YE: "YEM",
  ZM: "ZMB",
  ZW: "ZWE",
  XK: "XKX",
};

export function getCountryPrettyName(str: string | undefined): string {
  if (str) {
    const country = countries.find(
      (c) => sanitizeCountryName(c.name.toLowerCase()) === str
    );
    if (country) {
      return `${flag(country?.code)} ${country.name}`;
    }
  }
  return `${str}`;
}
