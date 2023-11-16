export type CardType =
    | "Raw Material"
    | "Manufactured Goods"
    | "Civilian Structures"
    | "Commercial Structures"
    | "Military Structures"
    | "Scientific Structures"
    | "Guilds";

export type Ressource =
    | "gold"
    | "wood"
    | "stone"
    | "clay"
    | "ore"
    | "glass"
    | "loom"
    | "papyrus";

export type RessourceList = Exclude<Ressource, "gold">[][];

export type ScientificRessource = "compas" | "wheel" | "tablet";

export type Action = "build" | "wonder" | "sell";

export type Side = "day" | "night";

export type MilitaryToken =
    | "age1Victory"
    | "age2Victory"
    | "age3Victory"
    | "defeat";

export type Cost = null | { [key in Ressource]?: number };

export type Card = {
    id: number;
    name: string;
    type: CardType;
    imgUrl: string;
    cost: Cost;
    chain: number | null;
    effect: Effect;
    chainsProvided: number[];
};

export type Wonder = {
    id: number;
    name: string;
    side: Side;
    startingRessource: Ressource;
    stages: {
        cost: Cost;
        effect: number;
    }[];
};

export type PlayerBoard = {
    wonder: number;
    wonderStagesBuilded: number;
    cardsBuilded: number[];
    gold: number;
    militaryPower: number;
    militaryTokens: { [key in MilitaryToken]: number };
    scientificsRessources: { [key in ScientificRessource]: number };
    ressorcesAvaliable: {
        public: RessourceList;
        private: RessourceList;
    };
    passives: number[];
};

export type Board = {
    playersNumber: number;
    playersBoards: PlayerBoard[];
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

export type Effect = {
    immediate?: ImmediateEffect;
    points?:  CountingPointsEffect;
};

export type ImmediateEffect =  (board: Board, playerIndex: number) => Board;

export type CountingPointsEffect = number | ((board: Board, playerIndex: number) => number);