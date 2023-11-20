import {
    addPassiveEffect,
    applyFunctionEffect,
    concatEffects,
    goldEffect,
    militaryEffect,
    ressourceEffect,
    scientificEffect,
} from "./effect";
import { Card } from "./type";
import { countCardsByType, countCardsByTypes, countWonderStagesBuilded, isWonderFinished } from "./utils";

const cardsList: Card[] = [
    {
        id: 0,
        name: "LUMBER YARD",
        type: "Raw Materials",
        imgUrl: "",
        cost: null,
        chain: null,
        effect: ressourceEffect(["wood"], true),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 1,
        name: "STONE PIT",
        type: "Raw Materials",
        imgUrl: "",
        cost: null,
        chain: null,
        effect: ressourceEffect(["stone"], true),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 2,
        name: "CLAY POOL",
        type: "Raw Materials",
        imgUrl: "",
        cost: null,
        chain: null,
        effect: ressourceEffect(["clay"], true),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 3,
        name: "ORE VEIN",
        type: "Raw Materials",
        imgUrl: "",
        cost: null,
        chain: null,
        effect: ressourceEffect(["ore"], true),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 4,
        name: "TREE FARM",
        type: "Raw Materials",
        imgUrl: "",
        cost: {
            gold: 1,
        },
        chain: null,
        effect: ressourceEffect(["wood", "clay"], true),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 5,
        name: "EXCAVATION",
        type: "Raw Materials",
        imgUrl: "",
        cost: {
            gold: 1,
        },
        chain: null,
        effect: ressourceEffect(["stone", "clay"], true),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 6,
        name: "CLAY PIT",
        type: "Raw Materials",
        imgUrl: "",
        cost: {
            gold: 1,
        },
        chain: null,
        effect: ressourceEffect(["clay", "ore"], true),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 7,
        name: "TIMBER YARD",
        type: "Raw Materials",
        imgUrl: "",
        cost: {
            gold: 1,
        },
        chain: null,
        effect: ressourceEffect(["wood", "stone"], true),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 8,
        name: "FOREST CAVE",
        type: "Raw Materials",
        imgUrl: "",
        cost: {
            gold: 1,
        },
        chain: null,
        effect: ressourceEffect(["wood", "ore"], true),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 9,
        name: "CAVE",
        type: "Raw Materials",
        imgUrl: "",
        cost: {
            gold: 1,
        },
        chain: null,
        effect: ressourceEffect(["stone", "ore"], true),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 10,
        name: "SAWMILL",
        type: "Raw Materials",
        imgUrl: "",
        cost: {
            gold: 1,
        },
        chain: null,
        effect: concatEffects(ressourceEffect(["wood"], true), ressourceEffect(["wood"], true)),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 11,
        name: "QUARRY",
        type: "Raw Materials",
        imgUrl: "",
        cost: {
            gold: 1,
        },
        chain: null,
        effect: concatEffects(ressourceEffect(["stone"], true), ressourceEffect(["stone"], true)),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 12,
        name: "BRICKYARD",
        type: "Raw Materials",
        imgUrl: "",
        cost: {
            gold: 1,
        },
        chain: null,
        effect: concatEffects(ressourceEffect(["clay"], true), ressourceEffect(["clay"], true)),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 13,
        name: "FOUNDRY",
        type: "Raw Materials",
        imgUrl: "",
        cost: {
            gold: 1,
        },
        chain: null,
        effect: concatEffects(ressourceEffect(["ore"], true), ressourceEffect(["ore"], true)),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 14,
        name: "LOOM",
        type: "Manufactured Goods",
        imgUrl: "",
        cost: null,
        chain: null,
        effect: ressourceEffect(["loom"], true),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 15,
        name: "GLASSWORKS",
        type: "Manufactured Goods",
        imgUrl: "",
        cost: null,
        chain: null,
        effect: ressourceEffect(["glass"], true),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 16,
        name: "PRESS",
        type: "Manufactured Goods",
        imgUrl: "",
        cost: null,
        chain: null,
        effect: ressourceEffect(["papyrus"], true),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 17,
        name: "WELL",
        type: "Civilian Structures",
        imgUrl: "",
        cost: null,
        chain: null,
        effect: null,
        victoryPoint: 3,
        chainsProvided: [0],
    },
    {
        id: 18,
        name: "BATHS",
        type: "Civilian Structures",
        imgUrl: "",
        cost: {
            stone: 1,
        },
        chain: null,
        effect: null,
        victoryPoint: 3,
        chainsProvided: [1],
    },
    {
        id: 19,
        name: "ALTAR",
        type: "Civilian Structures",
        imgUrl: "",
        cost: null,
        chain: null,
        effect: null,
        victoryPoint: 3,
        chainsProvided: [2],
    },
    {
        id: 20,
        name: "THEATER",
        type: "Civilian Structures",
        imgUrl: "",
        cost: null,
        chain: null,
        effect: null,
        victoryPoint: 3,
        chainsProvided: [3],
    },
    {
        id: 21,
        name: "STATUE",
        type: "Civilian Structures",
        imgUrl: "",
        cost: {
            ore: 2,
            wood: 1,
        },
        chain: 0,
        effect: null,
        victoryPoint: 4,
        chainsProvided: [],
    },
    {
        id: 22,
        name: "AQUEDUCT",
        type: "Civilian Structures",
        imgUrl: "",
        cost: {
            stone: 3,
        },
        chain: 1,
        effect: null,
        victoryPoint: 5,
        chainsProvided: [],
    },
    {
        id: 23,
        name: "TEMPLE",
        type: "Civilian Structures",
        imgUrl: "",
        cost: {
            wood: 1,
            clay: 1,
            glass: 1,
        },
        chain: null,
        effect: null,
        victoryPoint: 4,
        chainsProvided: [],
    },
    {
        id: 24,
        name: "COURTHOUSE",
        type: "Civilian Structures",
        imgUrl: "",
        cost: {
            clay: 2,
            loom: 1,
        },
        chain: 16,
        effect: null,
        victoryPoint: 4,
        chainsProvided: [],
    },
    {
        id: 25,
        name: "PANTHEON",
        type: "Civilian Structures",
        imgUrl: "",
        cost: {
            clay: 2,
            ore: 1,
            glass: 1,
            papyrus: 1,
            loom: 1,
        },
        chain: 2,
        effect: null,
        victoryPoint: 7,
        chainsProvided: [],
    },
    {
        id: 26,
        name: "GARDENS",
        type: "Civilian Structures",
        imgUrl: "",
        cost: {
            clay: 2,
            wood: 1,
        },
        chain: 3,
        effect: null,
        victoryPoint: 5,
        chainsProvided: [],
    },
    {
        id: 27,
        name: "TOWN HALL",
        type: "Civilian Structures",
        imgUrl: "",
        cost: {
            stone: 2,
            ore: 1,
            glass: 1,
        },
        chain: null,
        effect: null,
        victoryPoint: 6,
        chainsProvided: [],
    },
    {
        id: 28,
        name: "PALACE",
        type: "Civilian Structures",
        imgUrl: "",
        cost: {
            wood: 1,
            stone: 1,
            ore: 1,
            clay: 1,
            glass: 1,
            papyrus: 1,
            loom: 1,
        },
        chain: null,
        effect: null,
        victoryPoint: 8,
        chainsProvided: [],
    },
    {
        id: 29,
        name: "SENATE",
        type: "Civilian Structures",
        imgUrl: "",
        cost: {
            wood: 2,
            stone: 1,
            ore: 1,
        },
        chain: 18,
        effect: null,
        victoryPoint: 6,
        chainsProvided: [],
    },
    {
        id: 30,
        name: "TAVERN",
        type: "Commercial Structures",
        imgUrl: "",
        cost: null,
        chain: null,
        effect: goldEffect(5),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 31,
        name: "MARKETPLACE",
        type: "Commercial Structures",
        imgUrl: "",
        cost: null,
        chain: null,
        effect: addPassiveEffect("Manufactured Goods Discount"),
        victoryPoint: 0,
        chainsProvided: [4],
    },
    {
        id: 32,
        name: "WEST TRADING POST",
        type: "Commercial Structures",
        imgUrl: "",
        cost: null,
        chain: null,
        effect: addPassiveEffect("West Raw Materials Discount"),
        victoryPoint: 0,
        chainsProvided: [6],
    },
    {
        id: 33,
        name: "EAST TRADING POST",
        type: "Commercial Structures",
        imgUrl: "",
        cost: null,
        chain: null,
        effect: addPassiveEffect("East Raw Materials Discount"),
        victoryPoint: 0,
        chainsProvided: [6],
    },
    {
        id: 34,
        name: "CARAVANSERY",
        type: "Commercial Structures",
        imgUrl: "",
        cost: {
            wood: 2,
        },
        chain: 4,
        effect: ressourceEffect(["wood", "stone", "clay", "ore"], false),
        victoryPoint: 0,
        chainsProvided: [5],
    },
    {
        id: 35,
        name: "FORUM",
        type: "Commercial Structures",
        imgUrl: "",
        cost: {
            clay: 2,
        },
        chain: 6,
        effect: ressourceEffect(["loom", "glass", "papyrus"], false),
        victoryPoint: 0,
        chainsProvided: [7],
    },
    {
        id: 36,
        name: "VINEYARD",
        type: "Commercial Structures",
        imgUrl: "",
        cost: null,
        chain: null,
        effect: applyFunctionEffect(countCardsByType("Raw Materials", [-1, 0, 1]), goldEffect),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 37,
        name: "BAZAR",
        type: "Commercial Structures",
        imgUrl: "",
        cost: null,
        chain: null,
        effect: applyFunctionEffect(countCardsByType("Manufactured Goods", [-1, 0, 1], 2), goldEffect),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 38,
        name: "LIGHTHOUSE",
        type: "Commercial Structures",
        imgUrl: "",
        cost: {
            stone: 1,
            glass: 1,
        },
        chain: 5,
        effect: applyFunctionEffect(countCardsByType("Commercial Structures", [0]), goldEffect),
        victoryPoint: countCardsByType("Commercial Structures", [0]),
        chainsProvided: [],
    },
    {
        id: 39,
        name: "HAVEN",
        type: "Commercial Structures",
        imgUrl: "",
        cost: {
            wood: 1,
            ore: 1,
            loom: 1,
        },
        chain: 7,
        effect: applyFunctionEffect(countCardsByType("Raw Materials", [0]), goldEffect),
        victoryPoint: countCardsByType("Raw Materials", [0]),
        chainsProvided: [],
    },
    {
        id: 40,
        name: "CHAMBER OF COMMERCE",
        type: "Commercial Structures",
        imgUrl: "",
        cost: {
            clay: 2,
            papyrus: 1,
        },
        chain: null,
        effect: applyFunctionEffect(countCardsByType("Manufactured Goods", [0], 2), goldEffect),
        victoryPoint: countCardsByType("Manufactured Goods", [0], 2),
        chainsProvided: [],
    },
    {
        id: 41,
        name: "LUDUS",
        type: "Commercial Structures",
        imgUrl: "",
        cost: {
            stone: 1,
            ore: 1,
        },
        chain: null,
        effect: applyFunctionEffect(countCardsByType("Military Structures", [0], 3), goldEffect),
        victoryPoint: countCardsByType("Military Structures", [0]),
        chainsProvided: [],
    },
    {
        id: 42,
        name: "ARENA",
        type: "Commercial Structures",
        imgUrl: "",
        cost: {
            stone: 2,
            ore: 1,
        },
        chain: 10,
        effect: applyFunctionEffect(countWonderStagesBuilded([0], 3), goldEffect),
        victoryPoint: countWonderStagesBuilded([0]),
        chainsProvided: [],
    },
    {
        id: 43,
        name: "STOCKADE",
        type: "Military Structures",
        imgUrl: "",
        cost: {
            wood: 1,
        },
        chain: null,
        effect: militaryEffect(1),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 44,
        name: "BARRACKS",
        type: "Military Structures",
        imgUrl: "",
        cost: {
            ore: 1,
        },
        chain: null,
        effect: militaryEffect(1),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 45,
        name: "GUARD TOWER",
        type: "Military Structures",
        imgUrl: "",
        cost: {
            clay: 1,
        },
        chain: null,
        effect: militaryEffect(1),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 46,
        name: "STABLE",
        type: "Military Structures",
        imgUrl: "",
        cost: {
            wood: 1,
            ore: 1,
            clay: 1,
        },
        chain: 8,
        effect: militaryEffect(2),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 47,
        name: "ARCHERY RANGE",
        type: "Military Structures",
        imgUrl: "",
        cost: {
            wood: 2,
            ore: 1,
        },
        chain: 12,
        effect: militaryEffect(2),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 48,
        name: "WALLS",
        type: "Military Structures",
        imgUrl: "",
        cost: {
            stone: 3,
        },
        chain: null,
        effect: militaryEffect(2),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 49,
        name: "TRAINING GROUND",
        type: "Military Structures",
        imgUrl: "",
        cost: {
            ore: 2,
            wood: 1,
        },
        chain: null,
        effect: militaryEffect(2),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 50,
        name: "CASTRUM",
        type: "Military Structures",
        imgUrl: "",
        cost: {
            clay: 2,
            wood: 1,
            papyrus: 1,
        },
        chain: null,
        effect: militaryEffect(3),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 51,
        name: "FORTIFICATION",
        type: "Military Structures",
        imgUrl: "",
        cost: {
            ore: 3,
            clay: 1,
        },
        chain: null,
        effect: militaryEffect(3),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 52,
        name: "CIRCUS",
        type: "Military Structures",
        imgUrl: "",
        cost: {
            stone: 3,
            ore: 1,
        },
        chain: null,
        effect: militaryEffect(3),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 53,
        name: "ARSENAL",
        type: "Military Structures",
        imgUrl: "",
        cost: {
            wood: 2,
            ore: 1,
            loom: 1,
        },
        chain: null,
        effect: militaryEffect(3),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 54,
        name: "SIEGE WORKSHOP",
        type: "Military Structures",
        imgUrl: "",
        cost: {
            clay: 3,
            wood: 1,
        },
        chain: 14,
        effect: militaryEffect(3),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 55,
        name: "APOTHECARY",
        type: "Scientific Structures",
        imgUrl: "",
        cost: {
            loom: 1,
        },
        chain: null,
        effect: scientificEffect("compas"),
        victoryPoint: 0,
        chainsProvided: [8, 9],
    },
    {
        id: 56,
        name: "WORKSHOP",
        type: "Scientific Structures",
        imgUrl: "",
        cost: {
            glass: 1,
        },
        chain: null,
        effect: scientificEffect("wheel"),
        victoryPoint: 0,
        chainsProvided: [12, 13],
    },
    {
        id: 57,
        name: "SCRIPTORIUM",
        type: "Scientific Structures",
        imgUrl: "",
        cost: {
            papyrus: 1,
        },
        chain: null,
        effect: scientificEffect("tablet"),
        victoryPoint: 0,
        chainsProvided: [16, 17],
    },
    {
        id: 58,
        name: "DISPENSARY",
        type: "Scientific Structures",
        imgUrl: "",
        cost: {
            ore: 2,
            glass: 1,
        },
        chain: 9,
        effect: scientificEffect("compas"),
        victoryPoint: 0,
        chainsProvided: [10, 11],
    },
    {
        id: 59,
        name: "LABORATORY",
        type: "Scientific Structures",
        imgUrl: "",
        cost: {
            clay: 2,
            papyrus: 1,
        },
        chain: 13,
        effect: scientificEffect("wheel"),
        victoryPoint: 0,
        chainsProvided: [14, 15],
    },
    {
        id: 60,
        name: "LIBRARY",
        type: "Scientific Structures",
        imgUrl: "",
        cost: {
            stone: 2,
            loom: 1,
        },
        chain: 17,
        effect: scientificEffect("tablet"),
        victoryPoint: 0,
        chainsProvided: [18, 19],
    },
    {
        id: 61,
        name: "SCHOOL",
        type: "Scientific Structures",
        imgUrl: "",
        cost: {
            wood: 1,
            papyrus: 1,
        },
        chain: null,
        effect: scientificEffect("tablet"),
        victoryPoint: 0,
        chainsProvided: [20, 21],
    },
    {
        id: 62,
        name: "LODGE",
        type: "Scientific Structures",
        imgUrl: "",
        cost: {
            clay: 2,
            papyrus: 1,
            loom: 1,
        },
        chain: 11,
        effect: scientificEffect("compas"),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 63,
        name: "ACADEMY",
        type: "Scientific Structures",
        imgUrl: "",
        cost: {
            stone: 3,
            glass: 1,
        },
        chain: 20,
        effect: scientificEffect("compas"),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 64,
        name: "OBSERVATORY",
        type: "Scientific Structures",
        imgUrl: "",
        cost: {
            ore: 2,
            glass: 1,
            loom: 1,
        },
        chain: 15,
        effect: scientificEffect("wheel"),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 65,
        name: "STUDY",
        type: "Scientific Structures",
        imgUrl: "",
        cost: {
            wood: 1,
            papyrus: 1,
            loom: 1,
        },
        chain: 21,
        effect: scientificEffect("wheel"),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 66,
        name: "UNIVERSITY",
        type: "Scientific Structures",
        imgUrl: "",
        cost: {
            wood: 2,
            glass: 1,
            papyrus: 1,
        },
        chain: 19,
        effect: scientificEffect("tablet"),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 67,
        name: "WORKERS GUILD",
        type: "Guilds",
        imgUrl: "",
        cost: {
            ore: 2,
            wood: 1,
            stone: 1,
            clay: 1,
        },
        chain: null,
        effect: null,
        victoryPoint: countCardsByType("Raw Materials", [-1, 1]),
        chainsProvided: [],
    },
    {
        id: 68,
        name: "CRAFTSMENS GUILD",
        type: "Guilds",
        imgUrl: "",
        cost: {
            stone: 2,
            ore: 2,
        },
        chain: null,
        effect: null,
        victoryPoint: countCardsByType("Manufactured Goods", [-1, 1], 2),
        chainsProvided: [],
    },
    {
        id: 69,
        name: "MAGISTRATES GUILD",
        type: "Guilds",
        imgUrl: "",
        cost: {
            wood: 3,
            stone: 1,
            loom: 1,
        },
        chain: null,
        effect: null,
        victoryPoint: countCardsByType("Civilian Structures", [-1, 1]),
        chainsProvided: [],
    },
    {
        id: 70,
        name: "TRADERS GUILD",
        type: "Guilds",
        imgUrl: "",
        cost: {
            glass: 1,
            papyrus: 1,
            loom: 1,
        },
        chain: null,
        effect: null,
        victoryPoint: countCardsByType("Commercial Structures", [-1, 1]),
        chainsProvided: [],
    },
    {
        id: 71,
        name: "BUILDERS GUILD",
        type: "Guilds",
        imgUrl: "",
        cost: {
            stone: 3,
            clay: 2,
            glass: 1,
        },
        chain: null,
        effect: null,
        victoryPoint: countWonderStagesBuilded([-1, 0, 1]),
        chainsProvided: [],
    },
    {
        id: 72,
        name: "SPIES GUILD",
        type: "Guilds",
        imgUrl: "",
        cost: {
            clay: 2,
            glass: 1,
        },
        chain: null,
        effect: null,
        victoryPoint: countCardsByType("Military Structures", [-1, 1]),
        chainsProvided: [],
    },
    {
        id: 73,
        name: "PHILOSOPHERS GUILD",
        type: "Guilds",
        imgUrl: "",
        cost: {
            clay: 3,
            papyrus: 1,
            loom: 1,
        },
        chain: null,
        effect: null,
        victoryPoint: countCardsByType("Scientific Structures", [-1, 1]),
        chainsProvided: [],
    },
    {
        id: 74,
        name: "DECORATORS GUILD",
        type: "Guilds",
        imgUrl: "",
        cost: {
            ore: 2,
            stone: 1,
            loom: 1,
        },
        chain: null,
        effect: null,
        victoryPoint: isWonderFinished(7, 0),
        chainsProvided: [],
    },
    {
        id: 75,
        name: "SCIENTISTS GUILD",
        type: "Guilds",
        imgUrl: "",
        cost: {
            wood: 2,
            ore: 2,
            papyrus: 1,
        },
        chain: null,
        effect: addPassiveEffect("Bonus Scientific Resource"),
        victoryPoint: 0,
        chainsProvided: [],
    },
    {
        id: 76,
        name: "SHIPOWNERS GUILD",
        type: "Guilds",
        imgUrl: "",
        cost: {
            wood: 3,
            glass: 1,
            papyrus: 1,
        },
        chain: null,
        effect: null,
        victoryPoint: countCardsByTypes(["Raw Materials", "Manufactured Goods", "Guilds"], [0]),
        chainsProvided: [],
    },
];

const cardsMap: Map<number, Card> = new Map();

cardsList.forEach((card) => cardsMap.set(card.id, card));

export { cardsMap };
