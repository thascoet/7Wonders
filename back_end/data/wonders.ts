import { Wonder } from "./type";

const wondersList: Wonder[] = [
    {
        id: 0,
        name: "BABYLON",
        side: "day",
        startingRessource: "wood",
        stages: [
            {
                cost: {
                    clay: 2,
                },
                effect: 0,
            },
            {
                cost: {
                    ore: 2,
                    loom: 1,
                },
                effect: 0,
            },
            {
                cost: {
                    wood: 4,
                },
                effect: 0,
            },
        ],
    },
    {
        id: 1,
        name: "BABYLON",
        side: "night",
        startingRessource: "wood",
        stages: [
            {
                cost: {
                    stone: 2,
                },
                effect: 0,
            },
            {
                cost: {
                    clay: 3,
                    glass: 1,
                },
                effect: 0,
            },
        ],
    },
    {
        id: 2,
        name: "GIZAH",
        side: "day",
        startingRessource: "stone",
        stages: [
            {
                cost: {
                    wood: 2,
                },
                effect: 0,
            },
            {
                cost: {
                    clay: 2,
                    loom: 1,
                },
                effect: 0,
            },
            {
                cost: {
                    stone: 4,
                },
                effect: 0,
            },
        ],
    },
    {
        id: 3,
        name: "GIZAH",
        side: "night",
        startingRessource: "stone",
        stages: [
            {
                cost: {
                    wood: 2,
                },
                effect: 0,
            },
            {
                cost: {
                    stone: 3,
                },
                effect: 0,
            },
            {
                cost: {
                    clay: 3,
                },
                effect: 0,
            },
            {
                cost: {
                    stone: 4,
                    papyrus: 1,
                },
                effect: 0,
            },
        ],
    },
    {
        id: 4,
        name: "OLYMPIA",
        side: "day",
        startingRessource: "clay",
        stages: [
            {
                cost: {
                    stone: 2,
                },
                effect: 0,
            },
            {
                cost: {
                    wood: 2,
                },
                effect: 0,
            },
            {
                cost: {
                    clay: 3,
                },
                effect: 0,
            },
        ],
    },
    {
        id: 5,
        name: "OLYMPIA",
        side: "night",
        startingRessource: "clay",
        stages: [
            {
                cost: {
                    ore: 2,
                },
                effect: 0,
            },
            {
                cost: {
                    clay: 3,
                },
                effect: 0,
            },
            {
                cost: {
                    glass: 1,
                    papyrus: 1,
                    loom: 1,
                },
                effect: 0,
            },
        ],
    },
    {
        id: 6,
        name: "RHODOS",
        side: "day",
        startingRessource: "ore",
        stages: [
            {
                cost: {
                    wood: 2,
                },
                effect: 0,
            },
            {
                cost: {
                    clay: 3,
                },
                effect: 0,
            },
            {
                cost: {
                    ore: 4,
                },
                effect: 0,
            },
        ],
    },
    {
        id: 7,
        name: "RHODOS",
        side: "night",
        startingRessource: "ore",
        stages: [
            {
                cost: {
                    stone: 3,
                },
                effect: 0,
            },
            {
                cost: {
                    ore: 4,
                },
                effect: 0,
            },
        ],
    },
    {
        id: 8,
        name: "ALEXANDRIA",
        side: "day",
        startingRessource: "glass",
        stages: [
            {
                cost: {
                    stone: 2,
                },
                effect: 0,
            },
            {
                cost: {
                    ore: 2,
                },
                effect: 0,
            },
            {
                cost: {
                    papyrus: 1,
                    loom: 1,
                },
                effect: 0,
            },
        ],
    },
    {
        id: 9,
        name: "ALEXANDRIA",
        side: "night",
        startingRessource: "glass",
        stages: [
            {
                cost: {
                    clay: 2,
                },
                effect: 0,
            },
            {
                cost: {
                    ore: 3,
                },
                effect: 0,
            },
            {
                cost: {
                    wood: 4,
                },
                effect: 0,
            },
        ],
    },
    {
        id: 10,
        name: "HALIKARNASSOS",
        side: "day",
        startingRessource: "loom",
        stages: [
            {
                cost: {
                    ore: 2,
                },
                effect: 0,
            },
            {
                cost: {
                    glass: 1,
                    papyrus: 1,
                },
                effect: 0,
            },
            {
                cost: {
                    stone: 3,
                },
                effect: 0,
            },
        ],
    },
    {
        id: 11,
        name: "HALIKARNASSOS",
        side: "night",
        startingRessource: "loom",
        stages: [
            {
                cost: {
                    clay: 2,
                },
                effect: 0,
            },
            {
                cost: {
                    glass: 1,
                    papyrus: 1,
                },
                effect: 0,
            },
            {
                cost: {
                    wood: 3,
                },
                effect: 0,
            },
        ],
    },
    {
        id: 12,
        name: "EPHESOS",
        side: "day",
        startingRessource: "papyrus",
        stages: [
            {
                cost: {
                    clay: 2,
                },
                effect: 0,
            },
            {
                cost: {
                    wood: 2,
                },
                effect: 0,
            },
            {
                cost: {
                    ore: 2,
                    glass: 1,
                },
                effect: 0,
            },
        ],
    },
    {
        id: 13,
        name: "EPHESOS",
        side: "night",
        startingRessource: "papyrus",
        stages: [
            {
                cost: {
                    stone: 2,
                },
                effect: 0,
            },
            {
                cost: {
                    wood: 2,
                },
                effect: 0,
            },
            {
                cost: {
                    ore: 2,
                    loom: 1,
                },
                effect: 0,
            },
        ],
    },
];

const wondersMap: Map<number, Wonder> = new Map();

wondersList.forEach((card) => wondersMap.set(card.id, card));

export { wondersMap };
