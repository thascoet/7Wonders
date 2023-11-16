import {
    addPassiveImmediateEffect,
    applyFunctionImmediateEffect,
    concatImmediateEffects,
    goldImmediateEffect,
    militaryImmediateEffect,
    ressourceImmediateEffect,
    scientificImmediateEffect
} from "./effect";
import { Card } from "./type";
import { countCardsByType, countCardsByTypes, countWonderStagesBuilded, isWonderFinished } from "./utils";

const cardsList: Card[] = [
    {
        id: 0,
        name: "LUMBER YARD",
        type: "Raw Material",
        imgUrl: "",
        cost: null,
        chain: null,
        effect: {
            immediate: ressourceImmediateEffect(["wood"], true),
        },
        chainsProvided: [],
    },
    {
        id: 1,
        name: "STONE PIT",
        type: "Raw Material",
        imgUrl: "",
        cost: null,
        chain: null,
        effect: {
            immediate: ressourceImmediateEffect(["stone"], true),
        },
        chainsProvided: [],
    },
    {
        id: 2,
        name: "CLAY POOL",
        type: "Raw Material",
        imgUrl: "",
        cost: null,
        chain: null,
        effect: {
            immediate: ressourceImmediateEffect(["clay"], true),
        },
        chainsProvided: [],
    },
    {
        id: 3,
        name: "ORE VEIN",
        type: "Raw Material",
        imgUrl: "",
        cost: null,
        chain: null,
        effect: {
            immediate: ressourceImmediateEffect(["ore"], true),
        },
        chainsProvided: [],
    },
    {
        id: 4,
        name: "TREE FARM",
        type: "Raw Material",
        imgUrl: "",
        cost: {
            gold: 1,
        },
        chain: null,
        effect: {
            immediate: ressourceImmediateEffect(["wood", "clay"], true),
        },
        chainsProvided: [],
    },
    {
        id: 5,
        name: "EXCAVATION",
        type: "Raw Material",
        imgUrl: "",
        cost: {
            gold: 1,
        },
        chain: null,
        effect: {
            immediate: ressourceImmediateEffect(["stone", "clay"], true),
        },
        chainsProvided: [],
    },
    {
        id: 6,
        name: "CLAY PIT",
        type: "Raw Material",
        imgUrl: "",
        cost: {
            gold: 1,
        },
        chain: null,
        effect: {
            immediate: ressourceImmediateEffect(["clay", "ore"], true),
        },
        chainsProvided: [],
    },
    {
        id: 7,
        name: "TIMBER YARD",
        type: "Raw Material",
        imgUrl: "",
        cost: {
            gold: 1,
        },
        chain: null,
        effect: {
            immediate: ressourceImmediateEffect(["wood", "stone"], true),
        },
        chainsProvided: [],
    },
    {
        id: 8,
        name: "FOREST CAVE",
        type: "Raw Material",
        imgUrl: "",
        cost: {
            gold: 1,
        },
        chain: null,
        effect: {
            immediate: ressourceImmediateEffect(["wood", "ore"], true),
        },
        chainsProvided: [],
    },
    {
        id: 9,
        name: "CAVE",
        type: "Raw Material",
        imgUrl: "",
        cost: {
            gold: 1,
        },
        chain: null,
        effect: {
            immediate: ressourceImmediateEffect(["stone", "ore"], true),
        },
        chainsProvided: [],
    },
    {
        id: 10,
        name: "SAWMILL",
        type: "Raw Material",
        imgUrl: "",
        cost: {
            gold: 1,
        },
        chain: null,
        effect: {
            immediate: concatImmediateEffects(
                ressourceImmediateEffect(["wood"], true),
                ressourceImmediateEffect(["wood"], true)
            ),
        },
        chainsProvided: [],
    },
    {
        id: 11,
        name: "QUARRY",
        type: "Raw Material",
        imgUrl: "",
        cost: {
            gold: 1,
        },
        chain: null,
        effect: {
            immediate: concatImmediateEffects(
                ressourceImmediateEffect(["stone"], true),
                ressourceImmediateEffect(["stone"], true)
            ),
        },
        chainsProvided: [],
    },
    {
        id: 12,
        name: "BRICKYARD",
        type: "Raw Material",
        imgUrl: "",
        cost: {
            gold: 1,
        },
        chain: null,
        effect: {
            immediate: concatImmediateEffects(
                ressourceImmediateEffect(["clay"], true),
                ressourceImmediateEffect(["clay"], true)
            ),
        },
        chainsProvided: [],
    },
    {
        id: 13,
        name: "FOUNDRY",
        type: "Raw Material",
        imgUrl: "",
        cost: {
            gold: 1,
        },
        chain: null,
        effect: {
            immediate: concatImmediateEffects(
                ressourceImmediateEffect(["ore"], true),
                ressourceImmediateEffect(["ore"], true)
            ),
        },
        chainsProvided: [],
    },
    {
        id: 14,
        name: "LOOM",
        type: "Manufactured Goods",
        imgUrl: "",
        cost: null,
        chain: null,
        effect: {
            immediate: ressourceImmediateEffect(["loom"], true),
        },
        chainsProvided: [],
    },
    {
        id: 15,
        name: "GLASSWORKS",
        type: "Manufactured Goods",
        imgUrl: "",
        cost: null,
        chain: null,
        effect: {
            immediate: ressourceImmediateEffect(["glass"], true),
        },
        chainsProvided: [],
    },
    {
        id: 16,
        name: "PRESS",
        type: "Manufactured Goods",
        imgUrl: "",
        cost: null,
        chain: null,
        effect: {
            immediate: ressourceImmediateEffect(["papyrus"], true),
        },
        chainsProvided: [],
    },
    {
        id: 17,
        name: "WELL",
        type: "Civilian Structures",
        imgUrl: "",
        cost: null,
        chain: null,
        effect: {
            points: 3,
        },
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
        effect: {
            points: 3,
        },
        chainsProvided: [1],
    },
    {
        id: 19,
        name: "ALTAR",
        type: "Civilian Structures",
        imgUrl: "",
        cost: null,
        chain: null,
        effect: {
            points: 3,
        },
        chainsProvided: [2],
    },
    {
        id: 20,
        name: "THEATER",
        type: "Civilian Structures",
        imgUrl: "",
        cost: null,
        chain: null,
        effect: {
            points: 3,
        },
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
        effect: {
            points: 4,
        },
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
        effect: {
            points: 5,
        },
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
        effect: {
            points: 4,
        },
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
        effect: {
            points: 4,
        },
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
        effect: {
            points: 7,
        },
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
        effect: {
            points: 5,
        },
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
        effect: {
            points: 6,
        },
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
        effect: {
            points: 8,
        },
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
        effect: {
            points: 6,
        },
        chainsProvided: [],
    },
    {
        id: 30,
        name: "TAVERN",
        type: "Commercial Structures",
        imgUrl: "",
        cost: null,
        chain: null,
        effect: {
            immediate: goldImmediateEffect(5),
        },
        chainsProvided: [],
    },
    {
        id: 31,
        name: "MARKETPLACE",
        type: "Commercial Structures",
        imgUrl: "",
        cost: null,
        chain: null,
        effect: {
            immediate: addPassiveImmediateEffect(0),
        },
        chainsProvided: [4],
    },
    {
        id: 32,
        name: "WEST TRADING POST",
        type: "Commercial Structures",
        imgUrl: "",
        cost: null,
        chain: null,
        effect: {
            immediate: addPassiveImmediateEffect(0),
        },
        chainsProvided: [6],
    },
    {
        id: 33,
        name: "EAST TRADING POST",
        type: "Commercial Structures",
        imgUrl: "",
        cost: null,
        chain: null,
        effect: {
            immediate: addPassiveImmediateEffect(0),
        },
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
        effect: {
            immediate: ressourceImmediateEffect(
                ["wood", "stone", "clay", "ore"],
                false
            ),
        },
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
        effect: {
            immediate: ressourceImmediateEffect(
                ["loom", "glass", "papyrus"],
                false
            ),
        },
        chainsProvided: [7],
    },
    {
        id: 36,
        name: "VINEYARD",
        type: "Commercial Structures",
        imgUrl: "",
        cost: null,
        chain: null,
        effect: {
            immediate: applyFunctionImmediateEffect(
                countCardsByType("Raw Material", [-1, 0, 1]),
                goldImmediateEffect
            ),
        },
        chainsProvided: [],
    },
    {
        id: 37,
        name: "BAZAR",
        type: "Commercial Structures",
        imgUrl: "",
        cost: null,
        chain: null,
        effect: {
            immediate: applyFunctionImmediateEffect(
                countCardsByType("Manufactured Goods", [-1, 0, 1], 2),
                goldImmediateEffect
            ),
        },
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
        effect: {
            immediate: applyFunctionImmediateEffect(
                countCardsByType("Commercial Structures", [0]),
                goldImmediateEffect
            ),
            points: countCardsByType("Commercial Structures", [0]),
        },
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
        effect: {
            immediate: applyFunctionImmediateEffect(
                countCardsByType("Raw Material", [0]),
                goldImmediateEffect
            ),
            points: countCardsByType("Raw Material", [0]),
        },
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
        effect: {
            immediate: applyFunctionImmediateEffect(
                countCardsByType("Manufactured Goods", [0], 2),
                goldImmediateEffect
            ),
            points: countCardsByType("Manufactured Goods", [0], 2),
        },
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
        effect: {
            immediate: applyFunctionImmediateEffect(
                countCardsByType("Military Structures", [0], 3),
                goldImmediateEffect
            ),
            points: countCardsByType("Military Structures", [0]),
        },
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
        effect: {
            immediate: applyFunctionImmediateEffect(
                countWonderStagesBuilded([0], 3),
                goldImmediateEffect
            ),
            points: countWonderStagesBuilded([0]),
        },
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
        effect: {
            immediate: militaryImmediateEffect(1),
        },
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
        effect: {
            immediate: militaryImmediateEffect(1),
        },
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
        effect: {
            immediate: militaryImmediateEffect(1),
        },
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
        effect: {
            immediate: militaryImmediateEffect(2),
        },
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
        effect: {
            immediate: militaryImmediateEffect(2),
        },
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
        effect: {
            immediate: militaryImmediateEffect(2),
        },
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
        effect: {
            immediate: militaryImmediateEffect(2),
        },
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
        effect: {
            immediate: militaryImmediateEffect(3),
        },
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
        effect: {
            immediate: militaryImmediateEffect(3),
        },
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
        effect: {
            immediate: militaryImmediateEffect(3),
        },
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
        effect: {
            immediate: militaryImmediateEffect(3),
        },
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
        effect: {
            immediate: militaryImmediateEffect(3),
        },
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
        effect: {
            immediate: scientificImmediateEffect("compas"),
        },
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
        effect: {
            immediate: scientificImmediateEffect("wheel"),
        },
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
        effect: {
            immediate: scientificImmediateEffect("tablet"),
        },
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
        effect: {
            immediate: scientificImmediateEffect("compas"),
        },
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
        effect: {
            immediate: scientificImmediateEffect("wheel"),
        },
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
        effect: {
            immediate: scientificImmediateEffect("tablet"),
        },
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
        effect: {
            immediate: scientificImmediateEffect("tablet"),
        },
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
        effect: {
            immediate: scientificImmediateEffect("compas"),
        },
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
        effect: {
            immediate: scientificImmediateEffect("compas"),
        },
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
        effect: {
            immediate: scientificImmediateEffect("wheel"),
        },
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
        effect: {
            immediate: scientificImmediateEffect("wheel"),
        },
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
        effect: {
            immediate: scientificImmediateEffect("tablet"),
        },
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
        effect: {
            points: countCardsByType("Scientific Structures", [-1, 1])
        },
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
        effect: {
            points: countCardsByType("Manufactured Goods", [-1, 1], 2)
        },
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
        effect: {
            points: countCardsByType("Civilian Structures", [-1, 1])
        },
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
        effect: {
            points: countCardsByType("Commercial Structures", [-1, 1])
        },
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
        effect: {
            points: countWonderStagesBuilded([-1, 0, 1])
        },
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
        effect: {
            points: countCardsByType("Military Structures", [-1, 1])
        },
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
        effect: {
            points: countCardsByType("Scientific Structures", [-1, 1])
        },
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
        effect: {
            points: isWonderFinished(7, 0),
        },
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
        effect: {
            immediate: addPassiveImmediateEffect(0),
        },
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
        effect: {
            points: countCardsByTypes(["Raw Material", "Manufactured Goods", "Guilds"], [0])
        },
        chainsProvided: [],
    },
];

const cardsMap: Map<number, Card> = new Map();

cardsList.forEach((card) => cardsMap.set(card.id, card));

export { cardsMap };

