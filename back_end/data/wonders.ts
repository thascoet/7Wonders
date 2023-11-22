import {
    addPassiveEffect,
    concatEffects,
    goldEffect,
    militaryEffect,
    ressourceEffect,
    triggerEventEffect,
} from "./effect";
import { Wonder } from "./type";

const wondersList: Wonder[] = [
    {
        id: 0,
        name: "BABYLON",
        side: "day",
        startingEffect: ressourceEffect({ resources: ["wood"], public: true, starting: true }),
        stages: [
            {
                cost: {
                    clay: 2,
                },
                effect: null,
                victoryPoint: 3,
            },
            {
                cost: {
                    ore: 2,
                    loom: 1,
                },
                effect: addPassiveEffect("Bonus Scientific Resource"),
                victoryPoint: 0,
            },
            {
                cost: {
                    wood: 4,
                },
                effect: null,
                victoryPoint: 7,
            },
        ],
    },
    {
        id: 1,
        name: "BABYLON",
        side: "night",
        startingEffect: ressourceEffect({ resources: ["wood"], public: true, starting: true }),
        stages: [
            {
                cost: {
                    stone: 2,
                },
                effect: addPassiveEffect("Last Card Played"),
                victoryPoint: 0,
            },
            {
                cost: {
                    clay: 3,
                    glass: 1,
                },
                effect: addPassiveEffect("Bonus Scientific Resource"),
                victoryPoint: 0,
            },
        ],
    },
    {
        id: 2,
        name: "GIZAH",
        side: "day",
        startingEffect: ressourceEffect({ resources: ["stone"], public: true, starting: true }),
        stages: [
            {
                cost: {
                    wood: 2,
                },
                effect: null,
                victoryPoint: 3,
            },
            {
                cost: {
                    clay: 2,
                    loom: 1,
                },
                effect: null,
                victoryPoint: 5,
            },
            {
                cost: {
                    stone: 4,
                },
                effect: null,
                victoryPoint: 7,
            },
        ],
    },
    {
        id: 3,
        name: "GIZAH",
        side: "night",
        startingEffect: ressourceEffect({ resources: ["stone"], public: true, starting: true }),
        stages: [
            {
                cost: {
                    wood: 2,
                },
                effect: null,
                victoryPoint: 3,
            },
            {
                cost: {
                    stone: 3,
                },
                effect: null,
                victoryPoint: 5,
            },
            {
                cost: {
                    clay: 3,
                },
                effect: null,
                victoryPoint: 5,
            },
            {
                cost: {
                    stone: 4,
                    papyrus: 1,
                },
                effect: null,
                victoryPoint: 7,
            },
        ],
    },
    {
        id: 4,
        name: "OLYMPIA",
        side: "day",
        startingEffect: ressourceEffect({ resources: ["clay"], public: true, starting: true }),
        stages: [
            {
                cost: {
                    stone: 2,
                },
                effect: null,
                victoryPoint: 3,
            },
            {
                cost: {
                    wood: 2,
                },
                effect: addPassiveEffect("Free Card First Color"),
                victoryPoint: 0,
            },
            {
                cost: {
                    clay: 3,
                },
                effect: null,
                victoryPoint: 0,
            },
        ],
    },
    {
        id: 5,
        name: "OLYMPIA",
        side: "night",
        startingEffect: ressourceEffect({ resources: ["clay"], public: true, starting: true }),
        stages: [
            {
                cost: {
                    ore: 2,
                },
                effect: addPassiveEffect("Free Card First Age"),
                victoryPoint: 2,
            },
            {
                cost: {
                    clay: 3,
                },
                effect: addPassiveEffect("Free Card Last Age"),
                victoryPoint: 3,
            },
            {
                cost: {
                    glass: 1,
                    papyrus: 1,
                    loom: 1,
                },
                effect: null,
                victoryPoint: 5,
            },
        ],
    },
    {
        id: 6,
        name: "RHODOS",
        side: "day",
        startingEffect: ressourceEffect({ resources: ["ore"], public: true, starting: true }),
        stages: [
            {
                cost: {
                    wood: 2,
                },
                effect: null,
                victoryPoint: 3,
            },
            {
                cost: {
                    clay: 3,
                },
                effect: militaryEffect(2),
                victoryPoint: 0,
            },
            {
                cost: {
                    ore: 4,
                },
                effect: null,
                victoryPoint: 7,
            },
        ],
    },
    {
        id: 7,
        name: "RHODOS",
        side: "night",
        startingEffect: ressourceEffect({ resources: ["ore"], public: true, starting: true }),
        stages: [
            {
                cost: {
                    stone: 3,
                },
                effect: concatEffects(militaryEffect(1), goldEffect(3)),
                victoryPoint: 3,
            },
            {
                cost: {
                    ore: 4,
                },
                effect: concatEffects(militaryEffect(1), goldEffect(4)),
                victoryPoint: 4,
            },
        ],
    },
    {
        id: 8,
        name: "ALEXANDRIA",
        side: "day",
        startingEffect: ressourceEffect({ resources: ["glass"], public: true, starting: true }),
        stages: [
            {
                cost: {
                    stone: 2,
                },
                effect: null,
                victoryPoint: 3,
            },
            {
                cost: {
                    ore: 2,
                },
                effect: ressourceEffect({
                    resources: ["wood", "stone", "clay", "ore"],
                    public: false,
                    starting: false,
                }),
                victoryPoint: 0,
            },
            {
                cost: {
                    papyrus: 1,
                    loom: 1,
                },
                effect: null,
                victoryPoint: 7,
            },
        ],
    },
    {
        id: 9,
        name: "ALEXANDRIA",
        side: "night",
        startingEffect: ressourceEffect({ resources: ["glass"], public: true, starting: true }),
        stages: [
            {
                cost: {
                    clay: 2,
                },
                effect: ressourceEffect({
                    resources: ["wood", "stone", "clay", "ore"],
                    public: false,
                    starting: false,
                }),
                victoryPoint: 0,
            },
            {
                cost: {
                    ore: 3,
                },
                effect: ressourceEffect({ resources: ["glass", "loom", "papyrus"], public: false, starting: false }),
                victoryPoint: 0,
            },
            {
                cost: {
                    wood: 4,
                },
                effect: null,
                victoryPoint: 7,
            },
        ],
    },
    {
        id: 10,
        name: "HALIKARNASSOS",
        side: "day",
        startingEffect: ressourceEffect({ resources: ["loom"], public: true, starting: true }),
        stages: [
            {
                cost: {
                    ore: 2,
                },
                effect: null,
                victoryPoint: 3,
            },
            {
                cost: {
                    glass: 1,
                    papyrus: 1,
                },
                effect: triggerEventEffect({ type: "Free Build From Discard", priority: 0 }),
                victoryPoint: 0,
            },
            {
                cost: {
                    stone: 3,
                },
                effect: null,
                victoryPoint: 7,
            },
        ],
    },
    {
        id: 11,
        name: "HALIKARNASSOS",
        side: "night",
        startingEffect: ressourceEffect({ resources: ["loom"], public: true, starting: true }),
        stages: [
            {
                cost: {
                    clay: 2,
                },
                effect: triggerEventEffect({ type: "Free Build From Discard", priority: 0 }),
                victoryPoint: 2,
            },
            {
                cost: {
                    glass: 1,
                    papyrus: 1,
                },
                effect: triggerEventEffect({ type: "Free Build From Discard", priority: 0 }),
                victoryPoint: 1,
            },
            {
                cost: {
                    wood: 3,
                },
                effect: triggerEventEffect({ type: "Free Build From Discard", priority: 0 }),
                victoryPoint: 0,
            },
        ],
    },
    {
        id: 12,
        name: "EPHESOS",
        side: "day",
        startingEffect: ressourceEffect({ resources: ["papyrus"], public: true, starting: true }),
        stages: [
            {
                cost: {
                    clay: 2,
                },
                effect: null,
                victoryPoint: 3,
            },
            {
                cost: {
                    wood: 2,
                },
                effect: goldEffect(9),
                victoryPoint: 0,
            },
            {
                cost: {
                    ore: 2,
                    glass: 1,
                },
                effect: null,
                victoryPoint: 7,
            },
        ],
    },
    {
        id: 13,
        name: "EPHESOS",
        side: "night",
        startingEffect: ressourceEffect({ resources: ["papyrus"], public: true, starting: true }),
        stages: [
            {
                cost: {
                    stone: 2,
                },
                effect: goldEffect(4),
                victoryPoint: 2,
            },
            {
                cost: {
                    wood: 2,
                },
                effect: goldEffect(4),
                victoryPoint: 3,
            },
            {
                cost: {
                    ore: 2,
                    loom: 1,
                },
                effect: goldEffect(4),
                victoryPoint: 5,
            },
        ],
    },
];

const wondersMap: Map<number, Wonder> = new Map();

wondersList.forEach((card) => wondersMap.set(card.id, card));

export { wondersMap };
