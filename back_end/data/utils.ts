import { getFromMap, min, mod } from "../utils/utils";
import { cardsMap } from "./cards";
import { Board, CardType, Cost, Resource, ResourcesList } from "./type";
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

export const costToArray = (cost: Cost): number[] => {
    if (cost === null) return Array<number>(8).fill(0);

    return (["gold", "wood", "stone", "clay", "ore", "glass", "loom", "papyrus"] as (Resource | "gold")[]).map(
        (resource) => (cost[resource] !== undefined ? (cost[resource] as number) : 0)
    );
};
