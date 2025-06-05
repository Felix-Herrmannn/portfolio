import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Félix Herrmann",
  initials: "FH",
  url: "https://git.unistra.fr/felix.herrmann",
  location: "Strasbourg, France",
  locationLink: "https://www.google.com/maps/place/Strasbourg/",
  description:
    "Développeur informatique spécialisé dans l'image et la 3D",
  summary:
    "Récemment diplômé d'un Master Informatique, Image et 3D, j'ai eu l'occasion de réaliser différents projets que j'ai pu rassembler sur cette page. N'hésitez pas à y jeter un oeil.",
  avatarUrl: "/moi.png",
  skills: [
    "C",
    "C++",
    "C#",
    "Python",
    "JavaScript",
    "Unity",
    "Godot",
    "Blender",
    "Node.js",
    "Unreal Engine",
    "GLSL"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "felix.herrmann@etu.unistra.fr",
    tel: "06 52 92 92 31",
    social: {
      GitHub: {
        name: "GitLab",
        url: "https://git.unistra.fr/felix.herrmann",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://fr.linkedin.com/in/f%C3%A9lix-herrmann-596ab3234",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:felix.herrmann@etu.unistra.fr",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Laboratoire ICube - Equipe IGG",
      href: "https://icube.unistra.fr/",
      badges: [],
      location: "Remote",
      title: "Développeur Unity en Réalité Virtuelle",
      logoUrl: "/logo_igg.png",
      start: "Février 2025",
      end: "Juillet 2025",
      description:
        "L'objectif était de réaliser des applications collaboratives en réalité virtuelle, celles-ci devaient pouvoir être utilisées à la fois sur un casque et sur un CAVE. Une expérimentation a été menée sur l'une de ces applications.",
    },
    {
      company: "Laboratoire ICube - Equipe IGG",
      href: "https://icube.unistra.fr/",
      badges: [],
      location: "Remote",
      title: "Développeur Unity",
      logoUrl: "/logo_igg.png",
      start: "Mai 2023",
      end: "Juillet 2023",
      description:
        "L’objectif était de réaliser une application capable de lire les données d'une expérimentation en réalité virtuelle (telles que la positon et la rotation de la tête du participant) et de les rejouer à la manière d'un lecteur vidéo.",
    },
    {
      company: "Laboratoire ICube - Equipe IGG",
      href: "https://icube.unistra.fr/",
      badges: [],
      location: "Remote",
      title: "Développeur Unity en Réalité Virtuelle",
      logoUrl: "/logo_igg.png",
      start: "Mai 2021",
      end: "Juillet 2021",
      description:
        "L’objectif était de mettre en place une expérimentation et la faire passer à une vingtaine de personnes, l'expérimentation portait sur l'utilité des points de repère sur une carte.",
    },
  ],
  education: [
    {
      school: "Université de Strasbourg",
      href: "https://mathinfo.unistra.fr/formations/master/master-informatique/odf-parcours-image-et-3d-i3d-PR37-18105/",
      degree: "Master Informatique, Image et 3D",
      logoUrl: "/ufr.jpg",
      start: "2023",
      end: "2025",
    },
    {
      school: "Université de Strasbourg",
      href: "https://mathinfo.unistra.fr/formations/licence/informatique/",
      degree: "Licence Informatique",
      logoUrl: "/ufr.jpg",
      start: "2020",
      end: "2023",
    },
    {
      school: "Université de Strasbourg",
      href: "https://mathinfo.unistra.fr/formations/cursus-master-ingenierie-en-informatique/odf-parcours-cursus-master-ingenierie-cmi-informatique-image-realite-virtuelle-interactions-et-jeux-PR1234-18114/",
      degree: "Cursus Master Ingénierie - Informatique, Image, Réalité Virtuelle, Interactions et Jeux",
      logoUrl: "/ufr.jpg",
      start: "2020",
      end: "2023",
    },
    {
      school: "Le Gymnase Jean Sturm",
      href: "https://legymnase.eu/",
      degree: "Baccalauréat Scientifique spécialité Informatique et Sciences du Numérique",
      logoUrl: "/sturm.png",
      start: "2017",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Meta-PM",
      href: "",
      dates: "Octobre 2024 - Janvier 2025",
      active: true,
      description:
        "Dans le cadre de mon projet de Master, j'ai eu l'occasion de travailler sur cette application de planification chirurgicale en réalité mixte pour s'entrainer à la thermoablation de tumeurs. Mon travail a principalement été porté sur l'interface utilisateurs ainsi que les interactions avec les objets.",
      technologies: [
        "Unity",
        "C#",
        "XR Interaction Toolkit",
      ],
      links: [
      ],
      image: "",
      video:
        "/meta-pm.mp4",
    },
    {
      title: "Bombernyan",
      href: "",
      dates: "Janvier 2023 - Mai 2023",
      active: true,
      description:
        "Réalisé dans le cadre de mon projet intégrateur de troisième année de licence avec 10 autres camarades, Bombernyan est un jeu 3D multijoueur en ligne reprenant le classique Bomberman. J'ai eu l'occasion de travailler sur le code, les graphismes, la musique ainsi que la communication.",
      technologies: [
        "Godot",
        "C#",
        "Blender",
        "Ableton",
        "Canva"
      ],
      links: [
        {
          type: "Source",
          href: "https://git.unistra.fr/bombernyan/game",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/bombernyan.mp4",
    },
    {
      title: "Projet Racine de 3",
      href: "",
      dates: "Novembre 2024 - Janvier 2025",
      active: true,
      description:
        "Projet de modélisation géométrique dans lequel il était demandé de créer un octaèdre et de lui appliquer différentes transformations telles que du découpage ou basculement d'arêtes, ou encore de la triangulation de face. Dans le but final de pouvoir appliquer des subdivisions de type loop et racine de 3.",
      technologies: [
        "JavaScript",
      ],
      links: [
      ],
      image: "",
      video:
        "/modegeo.mp4",
    },
  ],
} as const;
