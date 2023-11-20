import { getFromMap, min, mod } from "../utils/utils";
import { cardsMap } from "./cards";
import { Board, CardType, Resource, ResourcesList } from "./type";
import { wondersMap } from "./wonders";

export const countCardsByType =
    (cardType: CardType, scope: number[], multiplicator: number = 1): ((board: Board, playerIndex: number) => number) =>
    (board: Board, playerIndex: number) =>
        scope.reduce(
            (accumulator, playerIndexOffset) =>
                accumulator +
                multiplicator *
                    board.playersBoards[mod(playerIndex + playerIndexOffset, board.playersNumber)].cardsBuilded
                        .map(getFromMap(cardsMap))
                        .filter((card) => card.type === cardType).length,
            0
        );

export const countCardsByTypes =
    (
        cardTypes: CardType[],
        scope: number[],
        multiplicator: number = 1
    ): ((board: Board, playerIndex: number) => number) =>
    (board: Board, playerIndex: number) =>
        cardTypes.reduce(
            (accumulator, currentCardType) =>
                accumulator + countCardsByType(currentCardType, scope, multiplicator)(board, playerIndex),
            0
        );

export const countWonderStagesBuilded =
    (scope: number[], multiplicator: number = 1): ((board: Board, playerIndex: number) => number) =>
    (board: Board, playerIndex: number) =>
        scope.reduce(
            (accumulator, playerIndexOffset) =>
                accumulator +
                multiplicator *
                    board.playersBoards[mod(playerIndex + playerIndexOffset, board.playersNumber)].wonderStagesBuilded,
            0
        );

export const isWonderFinished =
    <T>(finishedValue: T, notFinishedValue: T) =>
    (board: Board, playerIndex: number): T =>
        board.playersBoards[playerIndex].wonderStagesBuilded ===
        getFromMap(wondersMap)(board.playersBoards[playerIndex].wonder).stages.length
            ? finishedValue
            : notFinishedValue;

const compareRessources = (resource1: Resource, resource2: Resource): number => {
    if (resource1 === resource2) return 0;
    if (resource1 === "wood") return -1;
    if (resource2 === "wood") return 1;
    if (resource1 === "stone") return -1;
    if (resource2 === "stone") return 1;
    if (resource1 === "clay") return -1;
    if (resource2 === "clay") return 1;
    if (resource1 === "ore") return -1;
    if (resource2 === "ore") return 1;
    if (resource1 === "glass") return -1;
    if (resource2 === "glass") return 1;
    if (resource1 === "papyrus") return -1;
    if (resource2 === "papyrus") return 1;
    return 0;
};

export const sortRessourceList = (ressourceList: ResourcesList): ResourcesList =>
    ressourceList.sort((resources1: Resource[], resources2: Resource[]) =>
        compareRessources(
            min<Resource>(compareRessources, "loom")(resources1),
            min<Resource>(compareRessources, "loom")(resources2)
        )
    );
