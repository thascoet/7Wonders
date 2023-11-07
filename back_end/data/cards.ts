type CardType =
    | "Raw Material"
    | "Manufactured Goods"
    | "Civilian Structures"
    | "Scientific Structures"
    | "Commercial Structures"
    | "Military Structures"
    | "Guilds";

type Ressource =
    | "Gold"
    | "Wood"
    | "Stone"
    | "Clay"
    | "Ore"
    | "Glass"
    | "Loom"
    | "Papyrus";

type Card = {
    id: number;
    name: string;
    type: CardType;
    imgUrl: string;
    cost: { name: Ressource; quantity: number }[];
    chain: number | null;
    effect: number;
    chainsProvided: number[];
};

const cards: Card[] = [
    {
        id: 0,
        name: "LUMBER YARD",
        type: "Raw Material",
        imgUrl: "",
        cost: [],
        chain: null,
        effect: 0,
        chainsProvided: [],
    },
    {
        id: 1,
        name: "STONE PIT",
        type: "Raw Material",
        imgUrl: "",
        cost: [],
        chain: null,
        effect: 0,
        chainsProvided: [],
    },
    {
        id: 2,
        name: "CLAY POOL",
        type: "Raw Material",
        imgUrl: "",
        cost: [],
        chain: null,
        effect: 0,
        chainsProvided: [],
    },
    {
        id: 3,
        name: "ORE VEIN",
        type: "Raw Material",
        imgUrl: "",
        cost: [],
        chain: null,
        effect: 0,
        chainsProvided: [],
    },
    {
        id: 4,
        name: "TREE FARM",
        type: "Raw Material",
        imgUrl: "",
        cost: [
            {
                name: "Gold",
                quantity: 1,
            },
        ],
        chain: null,
        effect: 0,
        chainsProvided: [],
    },
    {
        id: 5,
        name: "EXCAVATION",
        type: "Raw Material",
        imgUrl: "",
        cost: [
            {
                name: "Gold",
                quantity: 1,
            },
        ],
        chain: null,
        effect: 0,
        chainsProvided: [],
    },
    {
        id: 6,
        name: "CLAY PIT",
        type: "Raw Material",
        imgUrl: "",
        cost: [
            {
                name: "Gold",
                quantity: 1,
            },
        ],
        chain: null,
        effect: 0,
        chainsProvided: [],
    },
    {
        id: 7,
        name: "TIMBER YARD",
        type: "Raw Material",
        imgUrl: "",
        cost: [
            {
                name: "Gold",
                quantity: 1,
            },
        ],
        chain: null,
        effect: 0,
        chainsProvided: [],
    },
    {
        id: 8,
        name: "FOREST CAVE",
        type: "Raw Material",
        imgUrl: "",
        cost: [
            {
                name: "Gold",
                quantity: 1,
            },
        ],
        chain: null,
        effect: 0,
        chainsProvided: [],
    },
    {
        id: 9,
        name: "CAVE",
        type: "Raw Material",
        imgUrl: "",
        cost: [
            {
                name: "Gold",
                quantity: 1,
            },
        ],
        chain: null,
        effect: 0,
        chainsProvided: [],
    },
    {
        id: 10,
        name: "SAWMILL",
        type: "Raw Material",
        imgUrl: "",
        cost: [
            {
                name: "Gold",
                quantity: 1,
            },
        ],
        chain: null,
        effect: 0,
        chainsProvided: [],
    },
    {
        id: 11,
        name: "QUARRY",
        type: "Raw Material",
        imgUrl: "",
        cost: [
            {
                name: "Gold",
                quantity: 1,
            },
        ],
        chain: null,
        effect: 0,
        chainsProvided: [],
    },
    {
        id: 12,
        name: "BRICKYARD",
        type: "Raw Material",
        imgUrl: "",
        cost: [
            {
                name: "Gold",
                quantity: 1,
            },
        ],
        chain: null,
        effect: 0,
        chainsProvided: [],
    },
    {
        id: 13,
        name: "FOUNDRY",
        type: "Raw Material",
        imgUrl: "",
        cost: [
            {
                name: "Gold",
                quantity: 1,
            },
        ],
        chain: null,
        effect: 0,
        chainsProvided: [],
    },
];
