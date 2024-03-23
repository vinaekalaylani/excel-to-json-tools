import {
    SET_URL,

    SET_CAT_STAFF,
    SET_CAT_STATE,
    SET_CAT_CITY,
    SET_CAT_BRANCH,
    SET_CAT_BRANCH_AREA,
    SET_CAT_CLIENT,
    SET_CAT_MACHINES,
    SET_CAT_MACHINE_TYPE,
    SET_CAT_MACHINE_BRAND,
    SET_CAT_MACHINE_MODEL,
    SET_CAT_PROBLEM_GROUP,
    SET_CAT_PROBLEM,

    SET_IS_LOADING,
    SET_IS_ERROR,
} from "store/constants/app";

const initialState = {
    url: "http://10.10.10.101:8181/cpm-ticketing-flm/api/web/v1",

    catStaff: [],
    catState: [
        {
            "id": 1,
            "name": "Aceh",
            "status": 1,
            "notes": ""
        },
        {
            "id": 2,
            "name": "Sumatera Utara",
            "status": 1,
            "notes": ""
        },
        {
            "id": 3,
            "name": "Sumatera Barat",
            "status": 1,
            "notes": ""
        },
        {
            "id": 4,
            "name": "Riau",
            "status": 1,
            "notes": ""
        },
        {
            "id": 5,
            "name": "Jambi",
            "status": 1,
            "notes": ""
        },
        {
            "id": 6,
            "name": "Sumatera Selatan",
            "status": 1,
            "notes": ""
        },
        {
            "id": 7,
            "name": "Bengkulu",
            "status": 1,
            "notes": ""
        },
        {
            "id": 8,
            "name": "Lampung",
            "status": 1,
            "notes": ""
        },
        {
            "id": 9,
            "name": "Kepulauan Riau",
            "status": 1,
            "notes": ""
        },
        {
            "id": 10,
            "name": "Kepulauan Bangka Belitung",
            "status": 1,
            "notes": ""
        },
        {
            "id": 11,
            "name": "DKI Jakarta",
            "status": 1,
            "notes": ""
        },
        {
            "id": 12,
            "name": "Jawa Barat",
            "status": 1,
            "notes": ""
        },
        {
            "id": 13,
            "name": "Jawa Tengah",
            "status": 1,
            "notes": ""
        },
        {
            "id": 14,
            "name": "DI Yogyakarta",
            "status": 1,
            "notes": ""
        },
        {
            "id": 15,
            "name": "Jawa Timur",
            "status": 1,
            "notes": ""
        },
        {
            "id": 16,
            "name": "Banten",
            "status": 1,
            "notes": ""
        },
        {
            "id": 17,
            "name": "Bali",
            "status": 1,
            "notes": ""
        },
        {
            "id": 18,
            "name": "Nusa Tenggara Barat",
            "status": 1,
            "notes": ""
        },
        {
            "id": 19,
            "name": "Nusa Tenggara Timur",
            "status": 1,
            "notes": ""
        },
        {
            "id": 20,
            "name": "Kalimantan Barat",
            "status": 1,
            "notes": ""
        },
        {
            "id": 21,
            "name": "Kalimantan Tengah",
            "status": 1,
            "notes": ""
        },
        {
            "id": 22,
            "name": "Kalimantan Selatan",
            "status": 1,
            "notes": ""
        },
        {
            "id": 23,
            "name": "Kalimantan Timur",
            "status": 1,
            "notes": ""
        },
        {
            "id": 24,
            "name": "Kalimantan Utara",
            "status": 1,
            "notes": ""
        },
        {
            "id": 25,
            "name": "Sulawesi Utara",
            "status": 1,
            "notes": ""
        },
        {
            "id": 26,
            "name": "Sulawesi Tengah",
            "status": 1,
            "notes": ""
        },
        {
            "id": 27,
            "name": "Sulawesi Selatan",
            "status": 1,
            "notes": ""
        },
        {
            "id": 28,
            "name": "Sulawesi Tenggara",
            "status": 1,
            "notes": ""
        },
        {
            "id": 29,
            "name": "Gorontalo",
            "status": 1,
            "notes": ""
        },
        {
            "id": 30,
            "name": "Sulawesi Barat",
            "status": 1,
            "notes": ""
        },
        {
            "id": 31,
            "name": "Maluku",
            "status": 1,
            "notes": ""
        },
        {
            "id": 32,
            "name": "Maluku Utara",
            "status": 1,
            "notes": ""
        },
        {
            "id": 33,
            "name": "Papua",
            "status": 1,
            "notes": ""
        },
        {
            "id": 34,
            "name": "Papua Barat",
            "status": 1,
            "notes": ""
        },
        {
            "id": 35,
            "name": "Papua Selatan",
            "status": 1,
            "notes": ""
        },
        {
            "id": 36,
            "name": "Papua Tengah",
            "status": 1,
            "notes": ""
        },
        {
            "id": 37,
            "name": "Papua Pegunungan",
            "status": 1,
            "notes": ""
        },
        {
            "id": 38,
            "name": "Papua Barat Daya",
            "status": 1,
            "notes": ""
        }
    ],
    catCity: [
        {
            "id": 1,
            "name": "Kabupaten Aceh Barat",
            "status": 1,
            "state": {
                "id": 1,
                "name": "Aceh",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 2,
            "name": "Kabupaten Aceh Barat Daya",
            "status": 1,
            "state": {
                "id": 1,
                "name": "Aceh",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 3,
            "name": "Kabupaten Aceh Besar",
            "status": 1,
            "state": {
                "id": 1,
                "name": "Aceh",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 4,
            "name": "Kabupaten Aceh Jaya",
            "status": 1,
            "state": {
                "id": 1,
                "name": "Aceh",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 5,
            "name": "Kabupaten Aceh Selatan",
            "status": 1,
            "state": {
                "id": 1,
                "name": "Aceh",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 6,
            "name": "Kabupaten Aceh Singkil",
            "status": 1,
            "state": {
                "id": 1,
                "name": "Aceh",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 7,
            "name": "Kabupaten Aceh Tamiang",
            "status": 1,
            "state": {
                "id": 1,
                "name": "Aceh",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 8,
            "name": "Kabupaten Aceh Tengah",
            "status": 1,
            "state": {
                "id": 1,
                "name": "Aceh",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 9,
            "name": "Kabupaten Aceh Tenggara",
            "status": 1,
            "state": {
                "id": 1,
                "name": "Aceh",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 10,
            "name": "Kabupaten Aceh Timur",
            "status": 1,
            "state": {
                "id": 1,
                "name": "Aceh",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 11,
            "name": "Kabupaten Aceh Utara",
            "status": 1,
            "state": {
                "id": 1,
                "name": "Aceh",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 12,
            "name": "Kabupaten Aceh Bener Meriah",
            "status": 1,
            "state": {
                "id": 1,
                "name": "Aceh",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 13,
            "name": "Kabupaten Bireuen",
            "status": 1,
            "state": {
                "id": 1,
                "name": "Aceh",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 14,
            "name": "Kabupaten Gayo Lues",
            "status": 1,
            "state": {
                "id": 1,
                "name": "Aceh",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 15,
            "name": "Kabupaten Nagan Raya",
            "status": 1,
            "state": {
                "id": 1,
                "name": "Aceh",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 16,
            "name": "Kabupaten Pidie",
            "status": 1,
            "state": {
                "id": 1,
                "name": "Aceh",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 17,
            "name": "Kabupaten Pidie Jaya",
            "status": 1,
            "state": {
                "id": 1,
                "name": "Aceh",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 18,
            "name": "Kabupaten Simeulue",
            "status": 1,
            "state": {
                "id": 1,
                "name": "Aceh",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 19,
            "name": "Kota Banda Aceh",
            "status": 1,
            "state": {
                "id": 1,
                "name": "Aceh",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 20,
            "name": "Kota Langsa",
            "status": 1,
            "state": {
                "id": 1,
                "name": "Aceh",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 21,
            "name": "Kota Lhokseumawe",
            "status": 1,
            "state": {
                "id": 1,
                "name": "Aceh",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 22,
            "name": "Kota Sabang",
            "status": 1,
            "state": {
                "id": 1,
                "name": "Aceh",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 23,
            "name": "Kota Subulussalam",
            "status": 1,
            "state": {
                "id": 1,
                "name": "Aceh",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 24,
            "name": "Kabupaten Asahan",
            "status": 1,
            "state": {
                "id": 2,
                "name": "Sumatera Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 25,
            "name": "Kabupaten Batu Bara",
            "status": 1,
            "state": {
                "id": 2,
                "name": "Sumatera Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 26,
            "name": "Kabupaten Dairi",
            "status": 1,
            "state": {
                "id": 2,
                "name": "Sumatera Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 27,
            "name": "Kabupaten Deli Serdang",
            "status": 1,
            "state": {
                "id": 2,
                "name": "Sumatera Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 28,
            "name": "Kabupaten Humbang Hasundutan",
            "status": 1,
            "state": {
                "id": 2,
                "name": "Sumatera Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 29,
            "name": "Kabupaten Karo",
            "status": 1,
            "state": {
                "id": 2,
                "name": "Sumatera Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 30,
            "name": "Kabupaten Labuhanbatu",
            "status": 1,
            "state": {
                "id": 2,
                "name": "Sumatera Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 31,
            "name": "Kabupaten Labuhanbatu Selatan",
            "status": 1,
            "state": {
                "id": 2,
                "name": "Sumatera Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 32,
            "name": "Kabupaten Labuhanbatu Utara",
            "status": 1,
            "state": {
                "id": 2,
                "name": "Sumatera Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 33,
            "name": "Kabupaten Langkat",
            "status": 1,
            "state": {
                "id": 2,
                "name": "Sumatera Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 34,
            "name": "Kabupaten Mandailing Natal",
            "status": 1,
            "state": {
                "id": 2,
                "name": "Sumatera Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 35,
            "name": "Kabupaten Nias",
            "status": 1,
            "state": {
                "id": 2,
                "name": "Sumatera Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 36,
            "name": "Kabupaten Nias Barat",
            "status": 1,
            "state": {
                "id": 2,
                "name": "Sumatera Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 37,
            "name": "Kabupaten Nias Selatan",
            "status": 1,
            "state": {
                "id": 2,
                "name": "Sumatera Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 38,
            "name": "Kabupaten Nias Utara",
            "status": 1,
            "state": {
                "id": 2,
                "name": "Sumatera Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 39,
            "name": "Kabupaten Padang Lawas",
            "status": 1,
            "state": {
                "id": 2,
                "name": "Sumatera Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 40,
            "name": "Kabupaten Padang Lawas Utara",
            "status": 1,
            "state": {
                "id": 2,
                "name": "Sumatera Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 41,
            "name": "Kabupaten Pakpak Bharat",
            "status": 1,
            "state": {
                "id": 2,
                "name": "Sumatera Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 42,
            "name": "Kabupaten Samosir",
            "status": 1,
            "state": {
                "id": 2,
                "name": "Sumatera Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 43,
            "name": "Kabupaten Serdang Bedagai",
            "status": 1,
            "state": {
                "id": 2,
                "name": "Sumatera Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 44,
            "name": "Kabupaten Simalungun",
            "status": 1,
            "state": {
                "id": 2,
                "name": "Sumatera Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 45,
            "name": "Kabupaten Tapanuli Selatan",
            "status": 1,
            "state": {
                "id": 2,
                "name": "Sumatera Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 46,
            "name": "Kabupaten Tapanuli Tengah",
            "status": 1,
            "state": {
                "id": 2,
                "name": "Sumatera Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 47,
            "name": "Kabupaten Tapanuli Utara",
            "status": 1,
            "state": {
                "id": 2,
                "name": "Sumatera Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 48,
            "name": "Kabupaten Toba",
            "status": 1,
            "state": {
                "id": 2,
                "name": "Sumatera Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 49,
            "name": "Kota Binjai",
            "status": 1,
            "state": {
                "id": 2,
                "name": "Sumatera Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 50,
            "name": "Kota Gunungsitoli",
            "status": 1,
            "state": {
                "id": 2,
                "name": "Sumatera Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 51,
            "name": "Kota Medan",
            "status": 1,
            "state": {
                "id": 2,
                "name": "Sumatera Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 52,
            "name": "Kota Padangsidimpuan",
            "status": 1,
            "state": {
                "id": 2,
                "name": "Sumatera Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 53,
            "name": "Kota Pematangsiantar",
            "status": 1,
            "state": {
                "id": 2,
                "name": "Sumatera Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 54,
            "name": "Kota Sibolga",
            "status": 1,
            "state": {
                "id": 2,
                "name": "Sumatera Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 55,
            "name": "Kota Tanjungbalai",
            "status": 1,
            "state": {
                "id": 2,
                "name": "Sumatera Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 56,
            "name": "Kota Tebing Tinggi",
            "status": 1,
            "state": {
                "id": 2,
                "name": "Sumatera Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 57,
            "name": "Kabupaten Agam",
            "status": 1,
            "state": {
                "id": 3,
                "name": "Sumatera Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 58,
            "name": "Kabupaten Dharmasraya",
            "status": 1,
            "state": {
                "id": 3,
                "name": "Sumatera Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 59,
            "name": "Kabupaten Kepulauan Mentawai",
            "status": 1,
            "state": {
                "id": 3,
                "name": "Sumatera Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 60,
            "name": "Kabupaten Lima Puluh Kota",
            "status": 1,
            "state": {
                "id": 3,
                "name": "Sumatera Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 61,
            "name": "Kabupaten Padang Pariaman",
            "status": 1,
            "state": {
                "id": 3,
                "name": "Sumatera Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 62,
            "name": "Kabupaten Pasaman",
            "status": 1,
            "state": {
                "id": 3,
                "name": "Sumatera Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 63,
            "name": "Kabupaten Pasaman Barat",
            "status": 1,
            "state": {
                "id": 3,
                "name": "Sumatera Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 64,
            "name": "Kabupaten Pesisir Selatan",
            "status": 1,
            "state": {
                "id": 3,
                "name": "Sumatera Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 65,
            "name": "Kabupaten Sijunjung",
            "status": 1,
            "state": {
                "id": 3,
                "name": "Sumatera Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 66,
            "name": "Kabupaten Solok",
            "status": 1,
            "state": {
                "id": 3,
                "name": "Sumatera Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 67,
            "name": "Kabupaten Solok Selatan",
            "status": 1,
            "state": {
                "id": 3,
                "name": "Sumatera Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 68,
            "name": "Kabupaten Tanah Datar",
            "status": 1,
            "state": {
                "id": 3,
                "name": "Sumatera Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 69,
            "name": "Kota Bukittinggi",
            "status": 1,
            "state": {
                "id": 3,
                "name": "Sumatera Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 70,
            "name": "Kota Padang",
            "status": 1,
            "state": {
                "id": 3,
                "name": "Sumatera Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 71,
            "name": "Kota Padang Panjang",
            "status": 1,
            "state": {
                "id": 3,
                "name": "Sumatera Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 72,
            "name": "Kota Pariaman",
            "status": 1,
            "state": {
                "id": 3,
                "name": "Sumatera Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 73,
            "name": "Kota Payakumbuh",
            "status": 1,
            "state": {
                "id": 3,
                "name": "Sumatera Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 74,
            "name": "Kota Sawahlunto",
            "status": 1,
            "state": {
                "id": 3,
                "name": "Sumatera Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 75,
            "name": "Kota Solok",
            "status": 1,
            "state": {
                "id": 3,
                "name": "Sumatera Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 76,
            "name": "Kabupaten Bengkalis",
            "status": 1,
            "state": {
                "id": 4,
                "name": "Riau",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 77,
            "name": "Kabupaten Indragiri Hilir",
            "status": 1,
            "state": {
                "id": 4,
                "name": "Riau",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 78,
            "name": "Kabupaten Indragiri Hulu",
            "status": 1,
            "state": {
                "id": 4,
                "name": "Riau",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 79,
            "name": "Kabupaten Kampar",
            "status": 1,
            "state": {
                "id": 4,
                "name": "Riau",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 80,
            "name": "Kabupaten Kepulauan Meranti",
            "status": 1,
            "state": {
                "id": 4,
                "name": "Riau",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 81,
            "name": "Kabupaten Kuantan Singingi",
            "status": 1,
            "state": {
                "id": 4,
                "name": "Riau",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 82,
            "name": "Kabupaten Pelalawan",
            "status": 1,
            "state": {
                "id": 4,
                "name": "Riau",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 83,
            "name": "Kabupaten Rokan Hilir",
            "status": 1,
            "state": {
                "id": 4,
                "name": "Riau",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 84,
            "name": "Kabupaten Rokan Hulu",
            "status": 1,
            "state": {
                "id": 4,
                "name": "Riau",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 85,
            "name": "Kabupaten Siak",
            "status": 1,
            "state": {
                "id": 4,
                "name": "Riau",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 86,
            "name": "Kota Dumai",
            "status": 1,
            "state": {
                "id": 4,
                "name": "Riau",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 87,
            "name": "Kota Pekanbaru",
            "status": 1,
            "state": {
                "id": 4,
                "name": "Riau",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 88,
            "name": "Kabupaten Batanghari",
            "status": 1,
            "state": {
                "id": 5,
                "name": "Jambi",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 89,
            "name": "Kabupaten Bungo",
            "status": 1,
            "state": {
                "id": 5,
                "name": "Jambi",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 90,
            "name": "Kabupaten Kerinci",
            "status": 1,
            "state": {
                "id": 5,
                "name": "Jambi",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 91,
            "name": "Kabupaten Merangin",
            "status": 1,
            "state": {
                "id": 5,
                "name": "Jambi",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 92,
            "name": "Kabupaten Muaro Jambi",
            "status": 1,
            "state": {
                "id": 5,
                "name": "Jambi",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 93,
            "name": "Kabupaten Sarolangun",
            "status": 1,
            "state": {
                "id": 5,
                "name": "Jambi",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 94,
            "name": "Kabupaten Tanjung Jabung Barat",
            "status": 1,
            "state": {
                "id": 5,
                "name": "Jambi",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 95,
            "name": "Kabupaten Tanjung Jabung Timur",
            "status": 1,
            "state": {
                "id": 5,
                "name": "Jambi",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 96,
            "name": "Kabupaten Tebo",
            "status": 1,
            "state": {
                "id": 5,
                "name": "Jambi",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 97,
            "name": "Kota Jambi",
            "status": 1,
            "state": {
                "id": 5,
                "name": "Jambi",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 98,
            "name": "Kota Sungai Penuh",
            "status": 1,
            "state": {
                "id": 5,
                "name": "Jambi",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 99,
            "name": "Kabupaten Banyuasin",
            "status": 1,
            "state": {
                "id": 6,
                "name": "Sumatera Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 100,
            "name": "Kabupaten Empat Lawang",
            "status": 1,
            "state": {
                "id": 6,
                "name": "Sumatera Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 101,
            "name": "Kabupaten Lahat",
            "status": 1,
            "state": {
                "id": 6,
                "name": "Sumatera Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 102,
            "name": "Kabupaten Muara Enim",
            "status": 1,
            "state": {
                "id": 6,
                "name": "Sumatera Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 103,
            "name": "Kabupaten Musi Banyuasin",
            "status": 1,
            "state": {
                "id": 6,
                "name": "Sumatera Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 104,
            "name": "Kabupaten Musi Rawas",
            "status": 1,
            "state": {
                "id": 6,
                "name": "Sumatera Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 105,
            "name": "Kabupaten Musi Rawas Utara",
            "status": 1,
            "state": {
                "id": 6,
                "name": "Sumatera Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 106,
            "name": "Kabupaten Ogan Ilir",
            "status": 1,
            "state": {
                "id": 6,
                "name": "Sumatera Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 107,
            "name": "Kabupaten Ogan Komering Ilir",
            "status": 1,
            "state": {
                "id": 6,
                "name": "Sumatera Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 108,
            "name": "Kabupaten Ogan Komering Ulu",
            "status": 1,
            "state": {
                "id": 6,
                "name": "Sumatera Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 109,
            "name": "Kabupaten Ogan Komering Ulu Selatan",
            "status": 1,
            "state": {
                "id": 6,
                "name": "Sumatera Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 110,
            "name": "Kabupaten Ogan Komering Ulu Timur",
            "status": 1,
            "state": {
                "id": 6,
                "name": "Sumatera Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 111,
            "name": "Kabupaten Penukal Abab Lematang Ilir",
            "status": 1,
            "state": {
                "id": 6,
                "name": "Sumatera Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 112,
            "name": "Kota Lubuk Linggau",
            "status": 1,
            "state": {
                "id": 6,
                "name": "Sumatera Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 113,
            "name": "Kota Pagaralam",
            "status": 1,
            "state": {
                "id": 6,
                "name": "Sumatera Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 114,
            "name": "Kota Palembang",
            "status": 1,
            "state": {
                "id": 6,
                "name": "Sumatera Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 115,
            "name": "Kota Prabumulih",
            "status": 1,
            "state": {
                "id": 6,
                "name": "Sumatera Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 116,
            "name": "Kabupaten Bengkulu Selatan",
            "status": 1,
            "state": {
                "id": 7,
                "name": "Bengkulu",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 117,
            "name": "Kabupaten Bengkulu Tengah",
            "status": 1,
            "state": {
                "id": 7,
                "name": "Bengkulu",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 118,
            "name": "Kabupaten Bengkulu Utara",
            "status": 1,
            "state": {
                "id": 7,
                "name": "Bengkulu",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 119,
            "name": "Kabupaten Kaur",
            "status": 1,
            "state": {
                "id": 7,
                "name": "Bengkulu",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 120,
            "name": "Kabupaten Kepahiang",
            "status": 1,
            "state": {
                "id": 7,
                "name": "Bengkulu",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 121,
            "name": "Kabupaten Lebong",
            "status": 1,
            "state": {
                "id": 7,
                "name": "Bengkulu",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 122,
            "name": "Kabupaten Mukomuko",
            "status": 1,
            "state": {
                "id": 7,
                "name": "Bengkulu",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 123,
            "name": "Kabupaten Rejang Lebong",
            "status": 1,
            "state": {
                "id": 7,
                "name": "Bengkulu",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 124,
            "name": "Kabupaten Seluma",
            "status": 1,
            "state": {
                "id": 7,
                "name": "Bengkulu",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 125,
            "name": "Kota Bengkulu",
            "status": 1,
            "state": {
                "id": 7,
                "name": "Bengkulu",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 126,
            "name": "Kabupaten Lampung Barat",
            "status": 1,
            "state": {
                "id": 8,
                "name": "Lampung",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 127,
            "name": "Kabupaten Lampung Selatan",
            "status": 1,
            "state": {
                "id": 8,
                "name": "Lampung",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 128,
            "name": "Kabupaten Lampung Tengah",
            "status": 1,
            "state": {
                "id": 8,
                "name": "Lampung",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 129,
            "name": "Kabupaten Lampung Timur",
            "status": 1,
            "state": {
                "id": 8,
                "name": "Lampung",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 130,
            "name": "Kabupaten Lampung Utara",
            "status": 1,
            "state": {
                "id": 8,
                "name": "Lampung",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 131,
            "name": "Kabupaten Mesuji",
            "status": 1,
            "state": {
                "id": 8,
                "name": "Lampung",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 132,
            "name": "Kabupaten Pesawaran",
            "status": 1,
            "state": {
                "id": 8,
                "name": "Lampung",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 133,
            "name": "Kabupaten Pesisir Barat",
            "status": 1,
            "state": {
                "id": 8,
                "name": "Lampung",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 134,
            "name": "Kabupaten Pringsewu",
            "status": 1,
            "state": {
                "id": 8,
                "name": "Lampung",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 135,
            "name": "Kabupaten Tanggamus",
            "status": 1,
            "state": {
                "id": 8,
                "name": "Lampung",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 136,
            "name": "Kabupaten Tulang Bawang",
            "status": 1,
            "state": {
                "id": 8,
                "name": "Lampung",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 137,
            "name": "Kabupaten Tulang Bawang Barat",
            "status": 1,
            "state": {
                "id": 8,
                "name": "Lampung",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 138,
            "name": "Kabupaten Way Kanan",
            "status": 1,
            "state": {
                "id": 8,
                "name": "Lampung",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 139,
            "name": "Kota Bandar Lampung",
            "status": 1,
            "state": {
                "id": 8,
                "name": "Lampung",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 140,
            "name": "Kota Metro",
            "status": 1,
            "state": {
                "id": 8,
                "name": "Lampung",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 141,
            "name": "Kabupaten Bintan",
            "status": 1,
            "state": {
                "id": 9,
                "name": "Kepulauan Riau",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 142,
            "name": "Kabupaten Karimun",
            "status": 1,
            "state": {
                "id": 9,
                "name": "Kepulauan Riau",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 143,
            "name": "Kabupaten Kepulauan Anambas",
            "status": 1,
            "state": {
                "id": 9,
                "name": "Kepulauan Riau",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 144,
            "name": "Kabupaten Lingga",
            "status": 1,
            "state": {
                "id": 9,
                "name": "Kepulauan Riau",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 145,
            "name": "Kabupaten Natuna",
            "status": 1,
            "state": {
                "id": 9,
                "name": "Kepulauan Riau",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 146,
            "name": "Kota Batam",
            "status": 1,
            "state": {
                "id": 9,
                "name": "Kepulauan Riau",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 147,
            "name": "Kota Tanjungpinang",
            "status": 1,
            "state": {
                "id": 9,
                "name": "Kepulauan Riau",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 148,
            "name": "Kabupaten Bangka",
            "status": 1,
            "state": {
                "id": 10,
                "name": "Kepulauan Bangka Belitung",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 149,
            "name": "Kabupaten Bangka Barat",
            "status": 1,
            "state": {
                "id": 10,
                "name": "Kepulauan Bangka Belitung",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 150,
            "name": "Kabupaten Bangka Selatan",
            "status": 1,
            "state": {
                "id": 10,
                "name": "Kepulauan Bangka Belitung",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 151,
            "name": "Kabupaten Bangka Tengah",
            "status": 1,
            "state": {
                "id": 10,
                "name": "Kepulauan Bangka Belitung",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 152,
            "name": "Kabupaten Belitung",
            "status": 1,
            "state": {
                "id": 10,
                "name": "Kepulauan Bangka Belitung",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 153,
            "name": "Kabupaten Belitung Timur",
            "status": 1,
            "state": {
                "id": 10,
                "name": "Kepulauan Bangka Belitung",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 154,
            "name": "Kota Pangkalpinang",
            "status": 1,
            "state": {
                "id": 10,
                "name": "Kepulauan Bangka Belitung",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 155,
            "name": "Kabupaten Administrasi Kepulauan Seribu",
            "status": 1,
            "state": {
                "id": 11,
                "name": "DKI Jakarta",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 156,
            "name": "Kota Administrasi Jakarta Barat",
            "status": 1,
            "state": {
                "id": 11,
                "name": "DKI Jakarta",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 157,
            "name": "Kota Administrasi Jakarta Pusat",
            "status": 1,
            "state": {
                "id": 11,
                "name": "DKI Jakarta",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 158,
            "name": "Kota Administrasi Jakarta Selatan",
            "status": 1,
            "state": {
                "id": 11,
                "name": "DKI Jakarta",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 159,
            "name": "Kota Administrasi Jakarta Timur",
            "status": 1,
            "state": {
                "id": 11,
                "name": "DKI Jakarta",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 160,
            "name": "Kota Administrasi Jakarta Utara",
            "status": 1,
            "state": {
                "id": 11,
                "name": "DKI Jakarta",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 161,
            "name": "Kabupaten Bandung",
            "status": 1,
            "state": {
                "id": 12,
                "name": "Jawa Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 162,
            "name": "Kabupaten Bandung Barat",
            "status": 1,
            "state": {
                "id": 12,
                "name": "Jawa Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 163,
            "name": "Kabupaten Bekasi",
            "status": 1,
            "state": {
                "id": 12,
                "name": "Jawa Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 164,
            "name": "Kabupaten Bogor",
            "status": 1,
            "state": {
                "id": 12,
                "name": "Jawa Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 165,
            "name": "Kabupaten Ciamis",
            "status": 1,
            "state": {
                "id": 12,
                "name": "Jawa Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 166,
            "name": "Kabupaten Cianjur",
            "status": 1,
            "state": {
                "id": 12,
                "name": "Jawa Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 167,
            "name": "Kabupaten Cirebon",
            "status": 1,
            "state": {
                "id": 12,
                "name": "Jawa Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 168,
            "name": "Kabupaten Garut",
            "status": 1,
            "state": {
                "id": 12,
                "name": "Jawa Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 169,
            "name": "Kabupaten Indramayu",
            "status": 1,
            "state": {
                "id": 12,
                "name": "Jawa Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 170,
            "name": "Kabupaten Karawang",
            "status": 1,
            "state": {
                "id": 12,
                "name": "Jawa Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 171,
            "name": "Kabupaten Kuningan",
            "status": 1,
            "state": {
                "id": 12,
                "name": "Jawa Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 172,
            "name": "Kabupaten Majalengka",
            "status": 1,
            "state": {
                "id": 12,
                "name": "Jawa Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 173,
            "name": "Kabupaten Pangandaran",
            "status": 1,
            "state": {
                "id": 12,
                "name": "Jawa Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 174,
            "name": "Kabupaten Purwakarta",
            "status": 1,
            "state": {
                "id": 12,
                "name": "Jawa Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 175,
            "name": "Kabupaten Subang",
            "status": 1,
            "state": {
                "id": 12,
                "name": "Jawa Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 176,
            "name": "Kabupaten Sukabumi",
            "status": 1,
            "state": {
                "id": 12,
                "name": "Jawa Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 177,
            "name": "Kabupaten Sumedang",
            "status": 1,
            "state": {
                "id": 12,
                "name": "Jawa Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 178,
            "name": "Kabupaten Tasikmalaya",
            "status": 1,
            "state": {
                "id": 12,
                "name": "Jawa Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 179,
            "name": "Kota Bandung",
            "status": 1,
            "state": {
                "id": 12,
                "name": "Jawa Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 180,
            "name": "Kota Banjar",
            "status": 1,
            "state": {
                "id": 12,
                "name": "Jawa Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 181,
            "name": "Kota Bekasi",
            "status": 1,
            "state": {
                "id": 12,
                "name": "Jawa Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 182,
            "name": "Kota Bogor",
            "status": 1,
            "state": {
                "id": 12,
                "name": "Jawa Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 183,
            "name": "Kota Cimahi",
            "status": 1,
            "state": {
                "id": 12,
                "name": "Jawa Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 184,
            "name": "Kota Cirebon",
            "status": 1,
            "state": {
                "id": 12,
                "name": "Jawa Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 185,
            "name": "Kota Depok",
            "status": 1,
            "state": {
                "id": 12,
                "name": "Jawa Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 186,
            "name": "Kota Sukabumi",
            "status": 1,
            "state": {
                "id": 12,
                "name": "Jawa Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 187,
            "name": "Kota Tasikmalaya",
            "status": 1,
            "state": {
                "id": 12,
                "name": "Jawa Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 188,
            "name": "Kabupaten Banjarnegara",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 189,
            "name": "Kabupaten Banyumas",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 190,
            "name": "Kabupaten Batang",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 191,
            "name": "Kabupaten Blora",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 192,
            "name": "Kabupaten Boyolali",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 193,
            "name": "Kabupaten Brebes",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 194,
            "name": "Kabupaten Cilacap",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 195,
            "name": "Kabupaten Demak",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 196,
            "name": "Kabupaten Grobogan",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 197,
            "name": "Kabupaten Jepara",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 198,
            "name": "Kabupaten Karanganyar",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 199,
            "name": "Kabupaten Kebumen",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 200,
            "name": "Kabupaten Kendal",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 201,
            "name": "Kabupaten Klaten",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 202,
            "name": "Kabupaten Kudus",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 203,
            "name": "Kabupaten Magelang",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 204,
            "name": "Kabupaten Pati",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 205,
            "name": "Kabupaten Pekalongan",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 206,
            "name": "Kabupaten Pemalang",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 207,
            "name": "Kabupaten Purbalingga",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 208,
            "name": "Kabupaten Purworejo",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 209,
            "name": "Kabupaten Rembang",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 210,
            "name": "Kabupaten Semarang",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 211,
            "name": "Kabupaten Sragen",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 212,
            "name": "Kabupaten Sukoharjo",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 213,
            "name": "Kabupaten Tegal",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 214,
            "name": "Kabupaten Temanggung",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 215,
            "name": "Kabupaten Wonogiri",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 216,
            "name": "Kabupaten Wonosobo",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 217,
            "name": "Kota Magelang",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 218,
            "name": "Kota Pekalongan",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 219,
            "name": "Kota Salatiga",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 220,
            "name": "Kota Semarang",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 221,
            "name": "Kota Surakarta",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 222,
            "name": "Kota Tegal",
            "status": 1,
            "state": {
                "id": 13,
                "name": "Jawa Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 223,
            "name": "Kabupaten Bantul",
            "status": 1,
            "state": {
                "id": 14,
                "name": "DI Yogyakarta",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 224,
            "name": "Kabupaten Gunungkidul",
            "status": 1,
            "state": {
                "id": 14,
                "name": "DI Yogyakarta",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 225,
            "name": "Kabupaten Kulon Progo",
            "status": 1,
            "state": {
                "id": 14,
                "name": "DI Yogyakarta",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 226,
            "name": "Kabupaten Sleman",
            "status": 1,
            "state": {
                "id": 14,
                "name": "DI Yogyakarta",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 227,
            "name": "Kota Yogyakarta",
            "status": 1,
            "state": {
                "id": 14,
                "name": "DI Yogyakarta",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 228,
            "name": "Kabupaten Bangkalan",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 229,
            "name": "Kabupaten Banyuwangi",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 230,
            "name": "Kabupaten Blitar",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 231,
            "name": "Kabupaten Bojonegoro",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 232,
            "name": "Kabupaten Bondowoso",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 233,
            "name": "Kabupaten Gresik",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 234,
            "name": "Kabupaten Jember",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 235,
            "name": "Kabupaten Jombang",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 236,
            "name": "Kabupaten Kediri",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 237,
            "name": "Kabupaten Lamongan",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 238,
            "name": "Kabupaten Lumajang",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 239,
            "name": "Kabupaten Madiun",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 240,
            "name": "Kabupaten Magetan",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 241,
            "name": "Kabupaten Malang",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 242,
            "name": "Kabupaten Mojokerto",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 243,
            "name": "Kabupaten Nganjuk",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 244,
            "name": "Kabupaten Ngawi",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 245,
            "name": "Kabupaten Pacitan",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 246,
            "name": "Kabupaten Pamekasan",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 247,
            "name": "Kabupaten Pasuruan",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 248,
            "name": "Kabupaten Ponorogo",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 249,
            "name": "Kabupaten Probolinggo",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 250,
            "name": "Kabupaten Sampang",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 251,
            "name": "Kabupaten Sidoarjo",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 252,
            "name": "Kabupaten Situbondo",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 253,
            "name": "Kabupaten Sumenep",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 254,
            "name": "Kabupaten Trenggalek",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 255,
            "name": "Kabupaten Tuban",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 256,
            "name": "Kabupaten Tulungagung",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 257,
            "name": "Kota Batu",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 258,
            "name": "Kota Blitar",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 259,
            "name": "Kota Kediri",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 260,
            "name": "Kota Madiun",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 261,
            "name": "Kota Malang",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 262,
            "name": "Kota Mojokerto",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 263,
            "name": "Kota Pasuruan",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 264,
            "name": "Kota Probolinggo",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 265,
            "name": "Kota Surabaya",
            "status": 1,
            "state": {
                "id": 15,
                "name": "Jawa Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 266,
            "name": "Kabupaten Lebak",
            "status": 1,
            "state": {
                "id": 16,
                "name": "Banten",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 267,
            "name": "Kabupaten Pandeglang",
            "status": 1,
            "state": {
                "id": 16,
                "name": "Banten",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 268,
            "name": "Kabupaten Serang",
            "status": 1,
            "state": {
                "id": 16,
                "name": "Banten",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 269,
            "name": "Kabupaten Tangerang",
            "status": 1,
            "state": {
                "id": 16,
                "name": "Banten",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 270,
            "name": "Kota Cilegon",
            "status": 1,
            "state": {
                "id": 16,
                "name": "Banten",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 271,
            "name": "Kota Serang",
            "status": 1,
            "state": {
                "id": 16,
                "name": "Banten",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 272,
            "name": "Kota Tangerang",
            "status": 1,
            "state": {
                "id": 16,
                "name": "Banten",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 273,
            "name": "Kota Tangerang Selatan",
            "status": 1,
            "state": {
                "id": 16,
                "name": "Banten",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 274,
            "name": "Kabupaten Badung",
            "status": 1,
            "state": {
                "id": 17,
                "name": "Bali",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 275,
            "name": "Kabupaten Bangli",
            "status": 1,
            "state": {
                "id": 17,
                "name": "Bali",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 276,
            "name": "Kabupaten Buleleng",
            "status": 1,
            "state": {
                "id": 17,
                "name": "Bali",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 277,
            "name": "Kabupaten Gianyar",
            "status": 1,
            "state": {
                "id": 17,
                "name": "Bali",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 278,
            "name": "Kabupaten Jembrana",
            "status": 1,
            "state": {
                "id": 17,
                "name": "Bali",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 279,
            "name": "Kabupaten Karangasem",
            "status": 1,
            "state": {
                "id": 17,
                "name": "Bali",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 280,
            "name": "Kabupaten Klungkung",
            "status": 1,
            "state": {
                "id": 17,
                "name": "Bali",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 281,
            "name": "Kabupaten Tabanan",
            "status": 1,
            "state": {
                "id": 17,
                "name": "Bali",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 282,
            "name": "Kota Denpasar",
            "status": 1,
            "state": {
                "id": 17,
                "name": "Bali",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 283,
            "name": "Kabupaten Bima",
            "status": 1,
            "state": {
                "id": 18,
                "name": "Nusa Tenggara Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 284,
            "name": "Kabupaten Dompu",
            "status": 1,
            "state": {
                "id": 18,
                "name": "Nusa Tenggara Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 285,
            "name": "Kabupaten Lombok Barat",
            "status": 1,
            "state": {
                "id": 18,
                "name": "Nusa Tenggara Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 286,
            "name": "Kabupaten Lombok Tengah",
            "status": 1,
            "state": {
                "id": 18,
                "name": "Nusa Tenggara Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 287,
            "name": "Kabupaten Lombok Timur",
            "status": 1,
            "state": {
                "id": 18,
                "name": "Nusa Tenggara Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 288,
            "name": "Kabupaten Lombok Utara",
            "status": 1,
            "state": {
                "id": 18,
                "name": "Nusa Tenggara Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 289,
            "name": "Kabupaten Sumbawa",
            "status": 1,
            "state": {
                "id": 18,
                "name": "Nusa Tenggara Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 290,
            "name": "Kabupaten Sumbawa Barat",
            "status": 1,
            "state": {
                "id": 18,
                "name": "Nusa Tenggara Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 291,
            "name": "Kota Bima",
            "status": 1,
            "state": {
                "id": 18,
                "name": "Nusa Tenggara Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 292,
            "name": "Kota Mataram",
            "status": 1,
            "state": {
                "id": 18,
                "name": "Nusa Tenggara Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 293,
            "name": "Kabupaten Alor",
            "status": 1,
            "state": {
                "id": 19,
                "name": "Nusa Tenggara Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 294,
            "name": "Kabupaten Belu",
            "status": 1,
            "state": {
                "id": 19,
                "name": "Nusa Tenggara Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 295,
            "name": "Kabupaten Ende",
            "status": 1,
            "state": {
                "id": 19,
                "name": "Nusa Tenggara Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 296,
            "name": "Kabupaten Flores Timur",
            "status": 1,
            "state": {
                "id": 19,
                "name": "Nusa Tenggara Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 297,
            "name": "Kabupaten Kupang",
            "status": 1,
            "state": {
                "id": 19,
                "name": "Nusa Tenggara Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 298,
            "name": "Kabupaten Lembata",
            "status": 1,
            "state": {
                "id": 19,
                "name": "Nusa Tenggara Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 299,
            "name": "Kabupaten Malaka",
            "status": 1,
            "state": {
                "id": 19,
                "name": "Nusa Tenggara Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 300,
            "name": "Kabupaten Manggarai",
            "status": 1,
            "state": {
                "id": 19,
                "name": "Nusa Tenggara Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 301,
            "name": "Kabupaten Manggarai Barat",
            "status": 1,
            "state": {
                "id": 19,
                "name": "Nusa Tenggara Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 302,
            "name": "Kabupaten Manggarai Timur",
            "status": 1,
            "state": {
                "id": 19,
                "name": "Nusa Tenggara Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 303,
            "name": "Kabupaten Nagekeo",
            "status": 1,
            "state": {
                "id": 19,
                "name": "Nusa Tenggara Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 304,
            "name": "Kabupaten Ngada",
            "status": 1,
            "state": {
                "id": 19,
                "name": "Nusa Tenggara Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 305,
            "name": "Kabupaten Rote Ndao",
            "status": 1,
            "state": {
                "id": 19,
                "name": "Nusa Tenggara Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 306,
            "name": "Kabupaten Sabu Raijua",
            "status": 1,
            "state": {
                "id": 19,
                "name": "Nusa Tenggara Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 307,
            "name": "Kabupaten Sikka",
            "status": 1,
            "state": {
                "id": 19,
                "name": "Nusa Tenggara Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 308,
            "name": "Kabupaten Sumba Barat",
            "status": 1,
            "state": {
                "id": 19,
                "name": "Nusa Tenggara Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 309,
            "name": "Kabupaten Sumba Barat Daya",
            "status": 1,
            "state": {
                "id": 19,
                "name": "Nusa Tenggara Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 310,
            "name": "Kabupaten Sumba Tengah",
            "status": 1,
            "state": {
                "id": 19,
                "name": "Nusa Tenggara Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 311,
            "name": "Kabupaten Sumba Timur",
            "status": 1,
            "state": {
                "id": 19,
                "name": "Nusa Tenggara Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 312,
            "name": "Kabupaten Timor Tengah Selatan",
            "status": 1,
            "state": {
                "id": 19,
                "name": "Nusa Tenggara Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 313,
            "name": "Kabupaten Timor Tengah Utara",
            "status": 1,
            "state": {
                "id": 19,
                "name": "Nusa Tenggara Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 314,
            "name": "Kota Kupang",
            "status": 1,
            "state": {
                "id": 19,
                "name": "Nusa Tenggara Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 315,
            "name": "Kabupaten Bengkayang",
            "status": 1,
            "state": {
                "id": 20,
                "name": "Kalimantan Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 316,
            "name": "Kabupaten Kapuas Hulu",
            "status": 1,
            "state": {
                "id": 20,
                "name": "Kalimantan Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 317,
            "name": "Kabupaten Kayong Utara",
            "status": 1,
            "state": {
                "id": 20,
                "name": "Kalimantan Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 318,
            "name": "Kabupaten Ketapang",
            "status": 1,
            "state": {
                "id": 20,
                "name": "Kalimantan Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 319,
            "name": "Kabupaten Kubu Raya",
            "status": 1,
            "state": {
                "id": 20,
                "name": "Kalimantan Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 320,
            "name": "Kabupaten Landak",
            "status": 1,
            "state": {
                "id": 20,
                "name": "Kalimantan Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 321,
            "name": "Kabupaten Melawi",
            "status": 1,
            "state": {
                "id": 20,
                "name": "Kalimantan Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 322,
            "name": "Kabupaten Mempawah",
            "status": 1,
            "state": {
                "id": 20,
                "name": "Kalimantan Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 323,
            "name": "Kabupaten Sambas",
            "status": 1,
            "state": {
                "id": 20,
                "name": "Kalimantan Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 324,
            "name": "Kabupaten Sanggau",
            "status": 1,
            "state": {
                "id": 20,
                "name": "Kalimantan Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 325,
            "name": "Kabupaten Sekadau",
            "status": 1,
            "state": {
                "id": 20,
                "name": "Kalimantan Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 326,
            "name": "Kabupaten Sintang",
            "status": 1,
            "state": {
                "id": 20,
                "name": "Kalimantan Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 327,
            "name": "Kota Pontianak",
            "status": 1,
            "state": {
                "id": 20,
                "name": "Kalimantan Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 328,
            "name": "Kota Singkawang",
            "status": 1,
            "state": {
                "id": 20,
                "name": "Kalimantan Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 329,
            "name": "Kabupaten Barito Selatan",
            "status": 1,
            "state": {
                "id": 21,
                "name": "Kalimantan Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 330,
            "name": "Kabupaten Barito Timur",
            "status": 1,
            "state": {
                "id": 21,
                "name": "Kalimantan Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 331,
            "name": "Kabupaten Barito Utara",
            "status": 1,
            "state": {
                "id": 21,
                "name": "Kalimantan Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 332,
            "name": "Kabupaten Gunung Mas",
            "status": 1,
            "state": {
                "id": 21,
                "name": "Kalimantan Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 333,
            "name": "Kabupaten Kapuas",
            "status": 1,
            "state": {
                "id": 21,
                "name": "Kalimantan Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 334,
            "name": "Kabupaten Katingan",
            "status": 1,
            "state": {
                "id": 21,
                "name": "Kalimantan Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 335,
            "name": "Kabupaten Kotawaringin Barat",
            "status": 1,
            "state": {
                "id": 21,
                "name": "Kalimantan Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 336,
            "name": "Kabupaten Kotawaringin Timur",
            "status": 1,
            "state": {
                "id": 21,
                "name": "Kalimantan Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 337,
            "name": "Kabupaten Lamandau",
            "status": 1,
            "state": {
                "id": 21,
                "name": "Kalimantan Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 338,
            "name": "Kabupaten Murung Raya",
            "status": 1,
            "state": {
                "id": 21,
                "name": "Kalimantan Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 339,
            "name": "Kabupaten Pulang Pisau",
            "status": 1,
            "state": {
                "id": 21,
                "name": "Kalimantan Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 340,
            "name": "Kabupaten Seruyan",
            "status": 1,
            "state": {
                "id": 21,
                "name": "Kalimantan Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 341,
            "name": "Kabupaten Sukamara",
            "status": 1,
            "state": {
                "id": 21,
                "name": "Kalimantan Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 342,
            "name": "Kota Palangka Raya",
            "status": 1,
            "state": {
                "id": 21,
                "name": "Kalimantan Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 343,
            "name": "Kabupaten Balangan",
            "status": 1,
            "state": {
                "id": 22,
                "name": "Kalimantan Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 344,
            "name": "Kabupaten Banjar",
            "status": 1,
            "state": {
                "id": 22,
                "name": "Kalimantan Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 345,
            "name": "Kabupaten Barito Kuala",
            "status": 1,
            "state": {
                "id": 22,
                "name": "Kalimantan Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 346,
            "name": "Kabupaten Hulu Sungai Selatan",
            "status": 1,
            "state": {
                "id": 22,
                "name": "Kalimantan Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 347,
            "name": "Kabupaten Hulu Sungai Tengah",
            "status": 1,
            "state": {
                "id": 22,
                "name": "Kalimantan Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 348,
            "name": "Kabupaten Hulu Sungai Utara",
            "status": 1,
            "state": {
                "id": 22,
                "name": "Kalimantan Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 349,
            "name": "Kabupaten Kotabaru",
            "status": 1,
            "state": {
                "id": 22,
                "name": "Kalimantan Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 350,
            "name": "Kabupaten Tabalong",
            "status": 1,
            "state": {
                "id": 22,
                "name": "Kalimantan Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 351,
            "name": "Kabupaten Tanah Bumbu",
            "status": 1,
            "state": {
                "id": 22,
                "name": "Kalimantan Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 352,
            "name": "Kabupaten Tanah Laut",
            "status": 1,
            "state": {
                "id": 22,
                "name": "Kalimantan Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 353,
            "name": "Kabupaten Tapin",
            "status": 1,
            "state": {
                "id": 22,
                "name": "Kalimantan Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 354,
            "name": "Kota Banjarbaru",
            "status": 1,
            "state": {
                "id": 22,
                "name": "Kalimantan Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 355,
            "name": "Kota Banjarmasin",
            "status": 1,
            "state": {
                "id": 22,
                "name": "Kalimantan Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 356,
            "name": "Kabupaten Berau",
            "status": 1,
            "state": {
                "id": 23,
                "name": "Kalimantan Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 357,
            "name": "Kabupaten Kutai Barat",
            "status": 1,
            "state": {
                "id": 23,
                "name": "Kalimantan Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 358,
            "name": "Kabupaten Kutai Kartanegara",
            "status": 1,
            "state": {
                "id": 23,
                "name": "Kalimantan Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 359,
            "name": "Kabupaten Kutai Timur",
            "status": 1,
            "state": {
                "id": 23,
                "name": "Kalimantan Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 360,
            "name": "Kabupaten Mahakam Ulu",
            "status": 1,
            "state": {
                "id": 23,
                "name": "Kalimantan Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 361,
            "name": "Kabupaten Paser",
            "status": 1,
            "state": {
                "id": 23,
                "name": "Kalimantan Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 362,
            "name": "Kabupaten Penajam Paser Utara",
            "status": 1,
            "state": {
                "id": 23,
                "name": "Kalimantan Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 363,
            "name": "Kota Kalimantan Timurkpapan",
            "status": 1,
            "state": {
                "id": 23,
                "name": "Kalimantan Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 364,
            "name": "Kota Bontang",
            "status": 1,
            "state": {
                "id": 23,
                "name": "Kalimantan Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 365,
            "name": "Kota Samarinda",
            "status": 1,
            "state": {
                "id": 23,
                "name": "Kalimantan Timur",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 366,
            "name": "Kabupaten Bulungan",
            "status": 1,
            "state": {
                "id": 24,
                "name": "Kalimantan Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 367,
            "name": "Kabupaten Malinau",
            "status": 1,
            "state": {
                "id": 24,
                "name": "Kalimantan Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 368,
            "name": "Kabupaten Nunukan",
            "status": 1,
            "state": {
                "id": 24,
                "name": "Kalimantan Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 369,
            "name": "Kabupaten Tana Tidung",
            "status": 1,
            "state": {
                "id": 24,
                "name": "Kalimantan Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 370,
            "name": "Kota Tarakan",
            "status": 1,
            "state": {
                "id": 24,
                "name": "Kalimantan Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 371,
            "name": "Kabupaten Bolaang Mongondow",
            "status": 1,
            "state": {
                "id": 25,
                "name": "Sulawesi Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 372,
            "name": "Kabupaten Bolaang Mongondow Selatan",
            "status": 1,
            "state": {
                "id": 25,
                "name": "Sulawesi Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 373,
            "name": "Kabupaten Bolaang Mongondow Timur",
            "status": 1,
            "state": {
                "id": 25,
                "name": "Sulawesi Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 374,
            "name": "Kabupaten Bolaang Mongondow Utara",
            "status": 1,
            "state": {
                "id": 25,
                "name": "Sulawesi Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 375,
            "name": "Kabupaten Kepulauan Sangihe",
            "status": 1,
            "state": {
                "id": 25,
                "name": "Sulawesi Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 376,
            "name": "Kabupaten Kepulauan Siau Tagulandang Biaro",
            "status": 1,
            "state": {
                "id": 25,
                "name": "Sulawesi Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 377,
            "name": "Kabupaten Kepulauan Talaud",
            "status": 1,
            "state": {
                "id": 25,
                "name": "Sulawesi Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 378,
            "name": "Kabupaten Minahasa",
            "status": 1,
            "state": {
                "id": 25,
                "name": "Sulawesi Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 379,
            "name": "Kabupaten Minahasa Selatan",
            "status": 1,
            "state": {
                "id": 25,
                "name": "Sulawesi Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 380,
            "name": "Kabupaten Minahasa Tenggara",
            "status": 1,
            "state": {
                "id": 25,
                "name": "Sulawesi Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 381,
            "name": "Kabupaten Minahasa Utara",
            "status": 1,
            "state": {
                "id": 25,
                "name": "Sulawesi Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 382,
            "name": "Kota Bitung",
            "status": 1,
            "state": {
                "id": 25,
                "name": "Sulawesi Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 383,
            "name": "Kota Kotamobagu",
            "status": 1,
            "state": {
                "id": 25,
                "name": "Sulawesi Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 384,
            "name": "Kota Manado",
            "status": 1,
            "state": {
                "id": 25,
                "name": "Sulawesi Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 385,
            "name": "Kota Tomohon",
            "status": 1,
            "state": {
                "id": 25,
                "name": "Sulawesi Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 386,
            "name": "Kabupaten Banggai",
            "status": 1,
            "state": {
                "id": 26,
                "name": "Sulawesi Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 387,
            "name": "Kabupaten Banggai Kepulauan",
            "status": 1,
            "state": {
                "id": 26,
                "name": "Sulawesi Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 388,
            "name": "Kabupaten Banggai Laut",
            "status": 1,
            "state": {
                "id": 26,
                "name": "Sulawesi Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 389,
            "name": "Kabupaten Buol",
            "status": 1,
            "state": {
                "id": 26,
                "name": "Sulawesi Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 390,
            "name": "Kabupaten Donggala",
            "status": 1,
            "state": {
                "id": 26,
                "name": "Sulawesi Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 391,
            "name": "Kabupaten Morowali",
            "status": 1,
            "state": {
                "id": 26,
                "name": "Sulawesi Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 392,
            "name": "Kabupaten Morowali Utara",
            "status": 1,
            "state": {
                "id": 26,
                "name": "Sulawesi Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 393,
            "name": "Kabupaten Parigi Moutong",
            "status": 1,
            "state": {
                "id": 26,
                "name": "Sulawesi Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 394,
            "name": "Kabupaten Poso",
            "status": 1,
            "state": {
                "id": 26,
                "name": "Sulawesi Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 395,
            "name": "Kabupaten Sigi",
            "status": 1,
            "state": {
                "id": 26,
                "name": "Sulawesi Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 396,
            "name": "Kabupaten Tojo Una-Una",
            "status": 1,
            "state": {
                "id": 26,
                "name": "Sulawesi Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 397,
            "name": "Kabupaten Tolitoli",
            "status": 1,
            "state": {
                "id": 26,
                "name": "Sulawesi Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 398,
            "name": "Kota Palu",
            "status": 1,
            "state": {
                "id": 26,
                "name": "Sulawesi Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 399,
            "name": "Kabupaten Bantaeng",
            "status": 1,
            "state": {
                "id": 27,
                "name": "Sulawesi Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 400,
            "name": "Kabupaten Barru",
            "status": 1,
            "state": {
                "id": 27,
                "name": "Sulawesi Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 401,
            "name": "Kabupaten Bone",
            "status": 1,
            "state": {
                "id": 27,
                "name": "Sulawesi Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 402,
            "name": "Kabupaten Bulukumba",
            "status": 1,
            "state": {
                "id": 27,
                "name": "Sulawesi Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 403,
            "name": "Kabupaten Enrekang",
            "status": 1,
            "state": {
                "id": 27,
                "name": "Sulawesi Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 404,
            "name": "Kabupaten Gowa",
            "status": 1,
            "state": {
                "id": 27,
                "name": "Sulawesi Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 405,
            "name": "Kabupaten Jeneponto",
            "status": 1,
            "state": {
                "id": 27,
                "name": "Sulawesi Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 406,
            "name": "Kabupaten Kepulauan Selayar",
            "status": 1,
            "state": {
                "id": 27,
                "name": "Sulawesi Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 407,
            "name": "Kabupaten Luwu",
            "status": 1,
            "state": {
                "id": 27,
                "name": "Sulawesi Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 408,
            "name": "Kabupaten Luwu Timur",
            "status": 1,
            "state": {
                "id": 27,
                "name": "Sulawesi Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 409,
            "name": "Kabupaten Luwu Utara",
            "status": 1,
            "state": {
                "id": 27,
                "name": "Sulawesi Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 410,
            "name": "Kabupaten Maros",
            "status": 1,
            "state": {
                "id": 27,
                "name": "Sulawesi Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 411,
            "name": "Kabupaten Pangkajene dan Kepulauan",
            "status": 1,
            "state": {
                "id": 27,
                "name": "Sulawesi Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 412,
            "name": "Kabupaten Pinrang",
            "status": 1,
            "state": {
                "id": 27,
                "name": "Sulawesi Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 413,
            "name": "Kabupaten Sidenreng Rappang",
            "status": 1,
            "state": {
                "id": 27,
                "name": "Sulawesi Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 414,
            "name": "Kabupaten Sinjai",
            "status": 1,
            "state": {
                "id": 27,
                "name": "Sulawesi Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 415,
            "name": "Kabupaten Soppeng",
            "status": 1,
            "state": {
                "id": 27,
                "name": "Sulawesi Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 416,
            "name": "Kabupaten Takalar",
            "status": 1,
            "state": {
                "id": 27,
                "name": "Sulawesi Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 417,
            "name": "Kabupaten Tana Toraja",
            "status": 1,
            "state": {
                "id": 27,
                "name": "Sulawesi Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 418,
            "name": "Kabupaten Toraja Utara",
            "status": 1,
            "state": {
                "id": 27,
                "name": "Sulawesi Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 419,
            "name": "Kabupaten Wajo",
            "status": 1,
            "state": {
                "id": 27,
                "name": "Sulawesi Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 420,
            "name": "Kota Makassar",
            "status": 1,
            "state": {
                "id": 27,
                "name": "Sulawesi Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 421,
            "name": "Kota Palopo",
            "status": 1,
            "state": {
                "id": 27,
                "name": "Sulawesi Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 422,
            "name": "Kota Parepare",
            "status": 1,
            "state": {
                "id": 27,
                "name": "Sulawesi Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 423,
            "name": "Kabupaten Bombana",
            "status": 1,
            "state": {
                "id": 28,
                "name": "Sulawesi Tenggara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 424,
            "name": "Kabupaten Buton",
            "status": 1,
            "state": {
                "id": 28,
                "name": "Sulawesi Tenggara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 425,
            "name": "Kabupaten Buton Selatan",
            "status": 1,
            "state": {
                "id": 28,
                "name": "Sulawesi Tenggara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 426,
            "name": "Kabupaten Buton Tengah",
            "status": 1,
            "state": {
                "id": 28,
                "name": "Sulawesi Tenggara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 427,
            "name": "Kabupaten Buton Utara",
            "status": 1,
            "state": {
                "id": 28,
                "name": "Sulawesi Tenggara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 428,
            "name": "Kabupaten Kolaka",
            "status": 1,
            "state": {
                "id": 28,
                "name": "Sulawesi Tenggara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 429,
            "name": "Kabupaten Kolaka Timur",
            "status": 1,
            "state": {
                "id": 28,
                "name": "Sulawesi Tenggara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 430,
            "name": "Kabupaten Kolaka Utara",
            "status": 1,
            "state": {
                "id": 28,
                "name": "Sulawesi Tenggara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 431,
            "name": "Kabupaten Konawe",
            "status": 1,
            "state": {
                "id": 28,
                "name": "Sulawesi Tenggara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 432,
            "name": "Kabupaten Konawe Kepulauan",
            "status": 1,
            "state": {
                "id": 28,
                "name": "Sulawesi Tenggara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 433,
            "name": "Kabupaten Konawe Selatan",
            "status": 1,
            "state": {
                "id": 28,
                "name": "Sulawesi Tenggara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 434,
            "name": "Kabupaten Konawe Utara",
            "status": 1,
            "state": {
                "id": 28,
                "name": "Sulawesi Tenggara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 435,
            "name": "Kabupaten Muna",
            "status": 1,
            "state": {
                "id": 28,
                "name": "Sulawesi Tenggara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 436,
            "name": "Kabupaten Muna Barat",
            "status": 1,
            "state": {
                "id": 28,
                "name": "Sulawesi Tenggara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 437,
            "name": "Kabupaten Wakatobi",
            "status": 1,
            "state": {
                "id": 28,
                "name": "Sulawesi Tenggara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 438,
            "name": "Kota Baubau",
            "status": 1,
            "state": {
                "id": 28,
                "name": "Sulawesi Tenggara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 439,
            "name": "Kota Kendari",
            "status": 1,
            "state": {
                "id": 28,
                "name": "Sulawesi Tenggara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 440,
            "name": "Kabupaten Boalemo",
            "status": 1,
            "state": {
                "id": 29,
                "name": "Gorontalo",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 441,
            "name": "Kabupaten Bone Bolango",
            "status": 1,
            "state": {
                "id": 29,
                "name": "Gorontalo",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 442,
            "name": "Kabupaten Gorontalo",
            "status": 1,
            "state": {
                "id": 29,
                "name": "Gorontalo",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 443,
            "name": "Kabupaten Gorontalo Utara",
            "status": 1,
            "state": {
                "id": 29,
                "name": "Gorontalo",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 444,
            "name": "Kabupaten Pohuwato",
            "status": 1,
            "state": {
                "id": 29,
                "name": "Gorontalo",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 445,
            "name": "Kota Gorontalo",
            "status": 1,
            "state": {
                "id": 29,
                "name": "Gorontalo",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 446,
            "name": "Kabupaten Majene",
            "status": 1,
            "state": {
                "id": 30,
                "name": "Sulawesi Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 447,
            "name": "Kabupaten Mamasa",
            "status": 1,
            "state": {
                "id": 30,
                "name": "Sulawesi Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 448,
            "name": "Kabupaten Mamuju",
            "status": 1,
            "state": {
                "id": 30,
                "name": "Sulawesi Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 449,
            "name": "Kabupaten Mamuju Tengah",
            "status": 1,
            "state": {
                "id": 30,
                "name": "Sulawesi Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 450,
            "name": "Kabupaten Pasangkayu",
            "status": 1,
            "state": {
                "id": 30,
                "name": "Sulawesi Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 451,
            "name": "Kabupaten Polewali Mandar",
            "status": 1,
            "state": {
                "id": 30,
                "name": "Sulawesi Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 452,
            "name": "Kabupaten Buru",
            "status": 1,
            "state": {
                "id": 31,
                "name": "Maluku",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 453,
            "name": "Kabupaten Buru Selatan",
            "status": 1,
            "state": {
                "id": 31,
                "name": "Maluku",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 454,
            "name": "Kabupaten Kepulauan Aru",
            "status": 1,
            "state": {
                "id": 31,
                "name": "Maluku",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 455,
            "name": "Kabupaten Kepulauan Tanimbar",
            "status": 1,
            "state": {
                "id": 31,
                "name": "Maluku",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 456,
            "name": "Kabupaten Maluku Barat Daya",
            "status": 1,
            "state": {
                "id": 31,
                "name": "Maluku",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 457,
            "name": "Kabupaten Maluku Tengah",
            "status": 1,
            "state": {
                "id": 31,
                "name": "Maluku",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 458,
            "name": "Kabupaten Maluku Tenggara",
            "status": 1,
            "state": {
                "id": 31,
                "name": "Maluku",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 459,
            "name": "Kabupaten Seram Bagian Barat",
            "status": 1,
            "state": {
                "id": 31,
                "name": "Maluku",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 460,
            "name": "Kabupaten Seram Bagian Timur",
            "status": 1,
            "state": {
                "id": 31,
                "name": "Maluku",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 461,
            "name": "Kota Ambon",
            "status": 1,
            "state": {
                "id": 31,
                "name": "Maluku",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 462,
            "name": "Kota Tual",
            "status": 1,
            "state": {
                "id": 31,
                "name": "Maluku",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 463,
            "name": "Kabupaten Halmahera Barat",
            "status": 1,
            "state": {
                "id": 32,
                "name": "Maluku Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 464,
            "name": "Kabupaten Halmahera Selatan",
            "status": 1,
            "state": {
                "id": 32,
                "name": "Maluku Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 465,
            "name": "Kabupaten Halmahera Tengah",
            "status": 1,
            "state": {
                "id": 32,
                "name": "Maluku Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 466,
            "name": "Kabupaten Halmahera Timur",
            "status": 1,
            "state": {
                "id": 32,
                "name": "Maluku Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 467,
            "name": "Kabupaten Halmahera Utara",
            "status": 1,
            "state": {
                "id": 32,
                "name": "Maluku Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 468,
            "name": "Kabupaten Kepulauan Sula",
            "status": 1,
            "state": {
                "id": 32,
                "name": "Maluku Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 469,
            "name": "Kabupaten Pulau Morotai",
            "status": 1,
            "state": {
                "id": 32,
                "name": "Maluku Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 470,
            "name": "Kabupaten Pulau Taliabu",
            "status": 1,
            "state": {
                "id": 32,
                "name": "Maluku Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 471,
            "name": "Kota Ternate",
            "status": 1,
            "state": {
                "id": 32,
                "name": "Maluku Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 472,
            "name": "Kota Tidore Kepulauan",
            "status": 1,
            "state": {
                "id": 32,
                "name": "Maluku Utara",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 473,
            "name": "Kabupaten Biak Numfor",
            "status": 1,
            "state": {
                "id": 33,
                "name": "Papua",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 474,
            "name": "Kabupaten Jayapura",
            "status": 1,
            "state": {
                "id": 33,
                "name": "Papua",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 475,
            "name": "Kabupaten Keerom",
            "status": 1,
            "state": {
                "id": 33,
                "name": "Papua",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 476,
            "name": "Kabupaten Kepulauan Yapen",
            "status": 1,
            "state": {
                "id": 33,
                "name": "Papua",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 477,
            "name": "Kabupaten Mamberamo Raya",
            "status": 1,
            "state": {
                "id": 33,
                "name": "Papua",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 478,
            "name": "Kabupaten Sarmi",
            "status": 1,
            "state": {
                "id": 33,
                "name": "Papua",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 479,
            "name": "Kabupaten Supiori",
            "status": 1,
            "state": {
                "id": 33,
                "name": "Papua",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 480,
            "name": "Kabupaten Waropen",
            "status": 1,
            "state": {
                "id": 33,
                "name": "Papua",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 481,
            "name": "Kota Jayapura",
            "status": 1,
            "state": {
                "id": 33,
                "name": "Papua",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 482,
            "name": "Kabupaten Fakfak",
            "status": 1,
            "state": {
                "id": 34,
                "name": "Papua Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 483,
            "name": "Kabupaten Kaimana",
            "status": 1,
            "state": {
                "id": 34,
                "name": "Papua Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 484,
            "name": "Kabupaten Manokwari",
            "status": 1,
            "state": {
                "id": 34,
                "name": "Papua Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 485,
            "name": "Kabupaten Manokwari Selatan",
            "status": 1,
            "state": {
                "id": 34,
                "name": "Papua Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 486,
            "name": "Kabupaten Pegunungan Arfak",
            "status": 1,
            "state": {
                "id": 34,
                "name": "Papua Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 487,
            "name": "Kabupaten Teluk Bintuni",
            "status": 1,
            "state": {
                "id": 34,
                "name": "Papua Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 488,
            "name": "Kabupaten Teluk Wondama",
            "status": 1,
            "state": {
                "id": 34,
                "name": "Papua Barat",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 489,
            "name": "Kabupaten Asmat",
            "status": 1,
            "state": {
                "id": 35,
                "name": "Papua Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 490,
            "name": "Kabupaten Boven Digoel",
            "status": 1,
            "state": {
                "id": 35,
                "name": "Papua Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 491,
            "name": "Kabupaten Mappi",
            "status": 1,
            "state": {
                "id": 35,
                "name": "Papua Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 492,
            "name": "Kabupaten Merauke",
            "status": 1,
            "state": {
                "id": 35,
                "name": "Papua Selatan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 493,
            "name": "Kabupaten Deiyai",
            "status": 1,
            "state": {
                "id": 36,
                "name": "Papua Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 494,
            "name": "Kabupaten Dogiyai",
            "status": 1,
            "state": {
                "id": 36,
                "name": "Papua Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 495,
            "name": "Kabupaten Intan Jaya",
            "status": 1,
            "state": {
                "id": 36,
                "name": "Papua Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 496,
            "name": "Kabupaten Mimika",
            "status": 1,
            "state": {
                "id": 36,
                "name": "Papua Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 497,
            "name": "Kabupaten Nabire",
            "status": 1,
            "state": {
                "id": 36,
                "name": "Papua Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 498,
            "name": "Kabupaten Paniai",
            "status": 1,
            "state": {
                "id": 36,
                "name": "Papua Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 499,
            "name": "Kabupaten Puncak",
            "status": 1,
            "state": {
                "id": 36,
                "name": "Papua Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 500,
            "name": "Kabupaten Puncak Jaya",
            "status": 1,
            "state": {
                "id": 36,
                "name": "Papua Tengah",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 501,
            "name": "Kabupaten Jayawijaya",
            "status": 1,
            "state": {
                "id": 37,
                "name": "Papua Pegunungan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 502,
            "name": "Kabupaten Lanny Jaya",
            "status": 1,
            "state": {
                "id": 37,
                "name": "Papua Pegunungan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 503,
            "name": "Kabupaten Mamberamo Tengah",
            "status": 1,
            "state": {
                "id": 37,
                "name": "Papua Pegunungan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 504,
            "name": "Kabupaten Nduga",
            "status": 1,
            "state": {
                "id": 37,
                "name": "Papua Pegunungan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 505,
            "name": "Kabupaten Pegunungan Bintang",
            "status": 1,
            "state": {
                "id": 37,
                "name": "Papua Pegunungan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 506,
            "name": "Kabupaten Tolikara",
            "status": 1,
            "state": {
                "id": 37,
                "name": "Papua Pegunungan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 507,
            "name": "Kabupaten Yalimo",
            "status": 1,
            "state": {
                "id": 37,
                "name": "Papua Pegunungan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 508,
            "name": "Kabupaten Yahukimo",
            "status": 1,
            "state": {
                "id": 37,
                "name": "Papua Pegunungan",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 509,
            "name": "Kabupaten Maybrat",
            "status": 1,
            "state": {
                "id": 38,
                "name": "Papua Barat Daya",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 510,
            "name": "Kabupaten Raja Ampat",
            "status": 1,
            "state": {
                "id": 38,
                "name": "Papua Barat Daya",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 511,
            "name": "Kabupaten Sorong",
            "status": 1,
            "state": {
                "id": 38,
                "name": "Papua Barat Daya",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 512,
            "name": "Kabupaten Sorong Selatan",
            "status": 1,
            "state": {
                "id": 38,
                "name": "Papua Barat Daya",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 513,
            "name": "Kabupaten Tambrauw",
            "status": 1,
            "state": {
                "id": 38,
                "name": "Papua Barat Daya",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        },
        {
            "id": 514,
            "name": "Kota Sorong",
            "status": 1,
            "state": {
                "id": 38,
                "name": "Papua Barat Daya",
                "status": 1,
                "notes": ""
            },
            "notes": ""
        }
    ],
    catBranch: [
        {
            "id": 1,
            "code": "JKT",
            "name": "Jakarta",
            "address": "",
            "latitude": -5,
            "longitude": 110,
            "status": 1,
            "notes": ""
        },
        {
            "id": 2,
            "code": "BKS",
            "name": "Bekasi",
            "address": "",
            "latitude": -5,
            "longitude": 110,
            "status": 1,
            "notes": ""
        },
        {
            "id": 3,
            "code": "TGR",
            "name": "Tangerang",
            "address": "",
            "latitude": -5,
            "longitude": 110,
            "status": 1,
            "notes": ""
        },
        {
            "id": 4,
            "code": "BDG",
            "name": "Bandung",
            "address": "",
            "latitude": -5,
            "longitude": 110,
            "status": 1,
            "notes": ""
        },
        {
            "id": 5,
            "code": "SBM",
            "name": "Sukabumi",
            "address": "",
            "latitude": -5,
            "longitude": 110,
            "status": 1,
            "notes": ""
        },
        {
            "id": 6,
            "code": "TSM",
            "name": "Tasikmalaya",
            "address": "",
            "latitude": -5,
            "longitude": 110,
            "status": 1,
            "notes": ""
        },
        {
            "id": 7,
            "code": "CRB",
            "name": "Cirebon",
            "address": "",
            "latitude": -5,
            "longitude": 110,
            "status": 1,
            "notes": ""
        },
        {
            "id": 8,
            "code": "SMG",
            "name": "Semarang",
            "address": "",
            "latitude": -5,
            "longitude": 110,
            "status": 1,
            "notes": ""
        },
        {
            "id": 9,
            "code": "YOG",
            "name": "Yogyakarta",
            "address": "",
            "latitude": -5,
            "longitude": 110,
            "status": 1,
            "notes": ""
        },
        {
            "id": 10,
            "code": "SKT",
            "name": "Solo",
            "address": "",
            "latitude": -5,
            "longitude": 110,
            "status": 1,
            "notes": ""
        },
        {
            "id": 11,
            "code": "SBY",
            "name": "Surabaya",
            "address": "",
            "latitude": -5,
            "longitude": 110,
            "status": 1,
            "notes": ""
        },
        {
            "id": 12,
            "code": "KDR",
            "name": "Kediri",
            "address": "",
            "latitude": -5,
            "longitude": 110,
            "status": 1,
            "notes": ""
        },
        {
            "id": 13,
            "code": "MLG",
            "name": "Malang",
            "address": "",
            "latitude": -5,
            "longitude": 110,
            "status": 1,
            "notes": ""
        },
        {
            "id": 14,
            "code": "DPS",
            "name": "Denpasar",
            "address": "",
            "latitude": -5,
            "longitude": 110,
            "status": 1,
            "notes": ""
        },
        {
            "id": 15,
            "code": "MDN",
            "name": "Medan",
            "address": "",
            "latitude": -5,
            "longitude": 110,
            "status": 1,
            "notes": ""
        },
        {
            "id": 16,
            "code": "LPG",
            "name": "Lampung",
            "address": "",
            "latitude": -5,
            "longitude": 110,
            "status": 1,
            "notes": ""
        },
        {
            "id": 17,
            "code": "PLB",
            "name": "Palembang",
            "address": "",
            "latitude": -5,
            "longitude": 110,
            "status": 1,
            "notes": ""
        },
        {
            "id": 18,
            "code": "MKS",
            "name": "Makassar",
            "address": "",
            "latitude": -5,
            "longitude": 110,
            "status": 1,
            "notes": ""
        },
        {
            "id": 19,
            "code": "PRE",
            "name": "Parepare",
            "address": "",
            "latitude": -5,
            "longitude": 110,
            "status": 1,
            "notes": ""
        },
        {
            "id": 20,
            "code": "KPG",
            "name": "Kupang",
            "address": "",
            "latitude": -5,
            "longitude": 110,
            "status": 1,
            "notes": ""
        }
    ],
    catBranchArea: [],
    catClient: [],
    catMachine: [],
    catMachineType: [
        {
            "id": 21,
            "code": "ATM",
            "name": "ATM",
            "orderNo": 0,
            "status": 1
        },
        {
            "id": 22,
            "code": "CRM",
            "name": "CRM",
            "orderNo": 0,
            "status": 1
        },
        {
            "id": 23,
            "code": "CDM",
            "name": "CDM",
            "orderNo": 0,
            "status": 1
        },
        {
            "id": 24,
            "code": "DPOS",
            "name": "DEPOS",
            "orderNo": 0,
            "status": 1
        }
    ],
    catMachineBrand: [
        {
            "id": 1,
            "name": "Wincor",
            "status": 1,
            "notes": ""
        },
        {
            "id": 2,
            "name": "Hyosung",
            "status": 1,
            "notes": ""
        },
        {
            "id": 3,
            "name": "Diebold",
            "status": 1,
            "notes": ""
        },
        {
            "id": 4,
            "name": "Hitachi",
            "status": 1,
            "notes": ""
        },
        {
            "id": 5,
            "name": "OKI",
            "status": 1,
            "notes": ""
        },
        {
            "id": 6,
            "name": "NCR",
            "status": 1,
            "notes": ""
        },
        {
            "id": 7,
            "name": "GRG",
            "status": 1,
            "notes": ""
        },
        {
            "id": 8,
            "name": "Norxel",
            "status": 1,
            "notes": ""
        }
    ],
    catMachineModel: [],
    catProblemGroup: [],
    catProblem: [],

    isLoading: true,
    isError: null,
}

const app = (state = initialState, action) => {
    switch (action.type) {
        case SET_URL:
            return { ...state, url: action.payload }

        case SET_CAT_STAFF:
            return { ...state, catStaff: action.payload }
        case SET_CAT_STATE:
            return { ...state, catState: action.payload }
        case SET_CAT_CITY:
            return { ...state, catCity: action.payload }
        case SET_CAT_BRANCH:
            return { ...state, catBranch: action.payload }
        case SET_CAT_BRANCH_AREA:
            return { ...state, catBranchArea: action.payload }
        case SET_CAT_CLIENT:
            return { ...state, catClient: action.payload }
        case SET_CAT_MACHINES:
            return { ...state, catMachine: action.payload }
        case SET_CAT_MACHINE_TYPE:
            return { ...state, catMachineType: action.payload }
        case SET_CAT_MACHINE_BRAND:
            return { ...state, catMachineBrand: action.payload }
        case SET_CAT_MACHINE_MODEL:
            return { ...state, catMachineModel: action.payload }
        case SET_CAT_PROBLEM_GROUP:
            return { ...state, catProblemGroup: action.payload }
        case SET_CAT_PROBLEM:
            return { ...state, catProblem: action.payload }

        case SET_IS_LOADING:
            return { ...state, isLoading: action.payload }
        case SET_IS_ERROR:
            return { ...state, isError: action.payload }
        default:
            return state
    }
}

export default app