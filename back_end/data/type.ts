export type CardType =
    | "Raw Materials"
    | "Manufactured Goods"
    | "Civilian Structures"
    | "Commercial Structures"
    | "Military Structures"
    | "Scientific Structures"
    | "Guilds";

export type Resource = "wood" | "stone" | "clay" | "ore" | "glass" | "loom" | "papyrus";

export type ResourcesList = Resource[][];

export type ScientificRessource = "compas" | "wheel" | "tablet";

export type Action = "build" | "wonder" | "sell";

export type Side = "day" | "night";

export type MilitaryToken = "age1Victory" | "age2Victory" | "age3Victory" | "defeat";

export type Cost = null | { [key in Resource | "gold"]?: number };

export type Card = {
    id: number;
    name: string;
    type: CardType;
    imgUrl: string;
    cost: Cost;
    chain: number | null;
    effect: Effect | null;
    victoryPoint: VictoryPoint;
    chainsProvided: number[];
};

export type Wonder = {
    id: number;
    name: string;
    side: Side;
    startingRessource: Resource;
    stages: {
        cost: Cost;
        effect: Effect | null;
        victoryPoint: VictoryPoint;
    }[];
};

export type PlayerBoard = {
    wonder: number;
    wonderStagesBuilded: number;
    wonderStagesCardsUsed: number[];
    cardsBuilded: number[];
    gold: number;
    militaryPower: number;
    militaryTokens: { [key in MilitaryToken]: number };
    scientificsRessources: { [key in ScientificRessource]: number };
    publicResources: ResourcesList;
    privateResources: ResourcesList;
    passives: Passive[];
};

export type Board = {
    playersNumber: number;
    playersBoards: PlayerBoard[];
    discards: number[];
    events: Event[];
};

export type Play = {
    cardPlayed: number;
    action: Action;
    ressource: {
        self: Cost;
        left: Cost;
        right: Cost;
    };
};

export type Effect = (board: Board, playerIndex: number) => Board;

export type VictoryPoint = number | ((board: Board, playerIndex: number) => number);

export type Passive =
    | "Manufactured Goods Discount"
    | "West Raw Materials Discount"
    | "East Raw Materials Discount"
    | "Bonus Scientific Resource"
    | "Last Card Played"
    | "Free Card First Color"
    | "Free Card First Age"
    | "Free Card Last Age";

export type EventType = "Free Build From Discard";

export type Event = {
    playerIndex: number;
    type: EventType;
    priority: number;
};
