import { IoMdBasketball } from "react-icons/io";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { GiShuttlecock } from "react-icons/gi";
import { LuMicVocal } from "react-icons/lu";
import { FaKaaba, FaQuran } from "react-icons/fa";
import { GiVintageRobot } from "react-icons/gi";
import { SiPoetry, SiMaterialdesignicons } from "react-icons/si";
import { Competition, TimelineData, YearData } from "./type";

export const competitions: Competition[] = [
  {
    title: "Futsal",
    category: "Senior High School",
    icon: <MdOutlineSportsSoccer />,
    color: "bg-gray-200",
    contactName: "Hiro",
    contactPhone: "+62 811 1687 707",
    form: "https://docs.google.com/forms/d/e/1FAIpQLScwFi8ADNTbDa71kYNW1b3yKqi_fo_A70FFEeYG2VpBptxztA/viewform?usp=publish-editor",
  },
  {
    title: "Basketball Boys",
    category: "Senior High School",
    icon: <IoMdBasketball />,
    color: "bg-gray-200",
    contactName: "Mitsal",
    contactPhone: "+62 812 9522 1595",
    form: "https://docs.google.com/forms/d/e/1FAIpQLSe0aeHPS-hqJDABJQPe7cclAa88BtjHI4Lutu0WhvbPz0tAFA/viewform?usp=publish-editor",
  },
  {
    title: "Basketball Girls",
    category: "Senior High School",
    icon: <IoMdBasketball />,
    color: "bg-gray-200",
    contactName: "Abbas",
    contactPhone: "+62 877 9000 8814",
    form: "https://docs.google.com/forms/d/e/1FAIpQLSfZwMa-S8mzs-6zFshsp0htKD2RM3Raajjr7Vmi8yDRqpPp7g/viewform?usp=publish-editor",
  },
  {
    title: "Badminton Boys",
    category: "Senior High School",
    icon: <GiShuttlecock />,
    color: "bg-gray-200",
    contactName: "Laras",
    contactPhone: "+62 813 8812 9662",
    form: "https://docs.google.com/forms/d/e/1FAIpQLSfg8_Nihcd1Xi-_dnQvTW_QNyFvcJdSiQOzMh_cJwmZU6KP5A/viewform?usp=publish-editor",
  },
  {
    title: "Badminton Girls",
    category: "Senior High School",
    icon: <GiShuttlecock />,
    color: "bg-gray-200",
    contactName: "Laras",
    contactPhone: "+62 813 8812 9662",
    form: "https://docs.google.com/forms/d/e/1FAIpQLSfZDnqmt2uVwA8-01TKzTlLWEc4bBbSDtcSVRPbwmwv1kSI7w/viewform?usp=publish-editor",
  },
  {
    title: "Solo Vocal",
    category: "Senior High School",
    icon: <LuMicVocal />,
    color: "bg-gray-200",
    contactName: "Raisya",
    contactPhone: "+62 812 7180 2098",
    form: "https://docs.google.com/forms/d/e/1FAIpQLSdBaH9AcG1atuSnkxmhk_a9xXNTvJkUXcmz8fDSbRTLq-9Jmg/viewform?usp=publish-editor",
  },
  {
    title: "Poetry",
    category: "Junior & Senior High School",
    icon: <SiPoetry />,
    color: "bg-gray-200",
    contactName: "Yazzam",
    contactPhone: "+62 811 1044 323",
    form: "https://docs.google.com/forms/d/e/1FAIpQLScd-FgswNO9GCQBwDFJcZnECi611bxz5kXszXHUl3cP7VzvNw/viewform?usp=publish-editor",
  },
  {
    title: "Graphic Design",
    category: "Junior & Senior High School",
    icon: <SiMaterialdesignicons />,
    color: "bg-gray-200",
    contactName: "Nayyara",
    contactPhone: "+62 813 8390 2137",
    form: "https://docs.google.com/forms/d/e/1FAIpQLSc89eXWfb8q6UbQv3PvEUELX3wHFJx3TyyUMKuk5Z5J_wkXXQ/viewform?usp=publish-editor",
  },
  {
    title: "MSQ",
    category: "Junior High School",
    icon: <FaKaaba />,
    color: "bg-gray-200",
    contactName: "Abim",
    contactPhone: "+62 818 0600 6790",
    form: "https://docs.google.com/forms/d/e/1FAIpQLSeFdI4TRdpZMIii_b8M8RqWNGF8ZswA2IZca42cEn6nCkkxsw/viewform?usp=publish-editor",
  },
  {
    title: "MHQ",
    category: "Junior High School",
    icon: <FaQuran />,
    color: "bg-gray-200",
    contactName: "Zidane",
    contactPhone: "+62 858 6134 6229",
    form: "https://docs.google.com/forms/d/e/1FAIpQLSc7T5slWxjGuo7vs4h5JPwmEiDq0CqqMq6S1k6yPoLST89pRQ/viewform?usp=publish-editor",
  },
  {
    title: "Robotics",
    category: "Junior High School",
    icon: <GiVintageRobot />,
    color: "bg-gray-200",
    contactName: "Langit",
    contactPhone: "+62 812 8826 1500",
    form: "https://docs.google.com/forms/d/e/1FAIpQLScAHzWQLJo7d-owQKSA2o1Wcji9lxF6kFwwfPF0yeKNXzuLYw/viewform?usp=publish-editor",
  },
];

export const leaderboardData: YearData[] = [
  {
    edition: "Quatrolympic 18",
    year: "2025",
    results: [
      {
        category: "Basket Putri",
        champion: "SMAN 11 Bekasi",
        runnerUp: "SMAN 9 Bekasi",
      },
      {
        category: "Basket Putra",
        champion: "SMAI AL AZHAR 4 (B)",
        runnerUp: "SMAN 3 BEKASI",
      },
      {
        category: "Ratoh Jaroe",
        champion: "SMAN 6 Jakarta",
        runnerUp: "SMA PB Soedirman 2",
      },
      {
        category: "Badminton ganda putra",
        champion: "SMAN 14 Bekasi",
        runnerUp: "SMAN 2 Bekasi",
      },
      {
        category: "Badminton tunggal putri",
        champion: "SMAN 15 Bekasi",
        runnerUp: "SMAN 3 Bekasi",
      },
      {
        category: "MSQ",
        champion: "SMPI Al Azhar 8",
        runnerUp: "SMPIT Al Muchtar Bekasi",
      },
      {
        category: "Futsal",
        champion: "SMAN 2 Bekasi",
        runnerUp: "SMAI Al Azhar 4 (C)",
      },
      {
        category: "MHQ",
        champion: "PPQ At Tayba (A)",
        runnerUp: "PPQ At Tayba (B)",
      },
      {
        category: "Solo Vocal",
        champion: "SMAN 70 Jakarta Selatan",
        runnerUp: "SMA Marsudirini Bekasi",
      },
    ],
  },
  {
    edition: "Quatrolympic 17",
    year: "2024",
    results: [
      {
        category: "Basket Putri",
        champion: "SMAN 5 Karawang",
        runnerUp: "SMAN 1 Klari",
      },
      {
        category: "Basket Putra",
        champion: "Sekolah Victory Plus (SVP)",
        runnerUp: "SMA Marsudirini Bekasi",
      },
      {
        category: "Ratoh Jaroe",
        champion: "SMA PB Soedirman",
        runnerUp: "SMAN 8 Bekasi",
      },
      {
        category: "Badminton ganda putra",
        champion: "SMAN 103 Bekasi",
        runnerUp: "SMAN 14 Bekasi",
      },
      {
        category: "Badminton tunggal putri",
        champion: "SMAN 2 Bekasi",
        runnerUp: "SMA Telkom",
      },
      {
        category: "Futsal",
        champion: "SMAN 5 Tambun Selatan",
        runnerUp: "SMAN 6 Bekasi",
      },
      {
        category: "Solo Vocal",
        champion: "SMAN 8 Bekasi",
        runnerUp: "SMAN 2 Bekasi",
      },
    ],
  },
];

export const driveLinks = [
  {
    title: "Quatrolympic Documentation",
    subtitle: "Photos, videos, and competition results from last year",
    icon: "📁",
    color: "bg-lime-300",
    href: "https://drive.google.com/drive/folders/1qtu9SuOmzwniFJfO7dgKpIdTxqogAtlf",
  },
  {
    title: "Al Azhar Creative Steps Documentation",
    subtitle: "Photos, videos, and event recap from last year's ACS",
    icon: "🗂️",
    color: "bg-cyan-300",
    href: "https://drive.google.com/drive/folders/1ErqbmsiOd9AfOi4LQsACM8l6Qv3UiAsA",
  },
];

export const Timelines: TimelineData[] = [
  {
    name: "Open Registration",
    date: "1 July - 27 August",
  },
  {
    name: "Al Azhar Creative Steps",
    date: "23 August 2026",
  },
  {
    name: "Technical Meeting",
    date: "28 August 2026",
  },
  {
    name: "Opening Ceremony of Quatrolympic 19",
    date: "31 August, 2026",
  },
  {
    name: "Competitions",
    date: "31 August - 5 September 2026",
  },
  {
    name: "Closing Ceremony & Art Performance",
    date: "5 September 2026",
  },
];
