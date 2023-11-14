import { cardsMap } from "../data/cards";
import { Board, CardType, ImmediateEffect } from "../data/type";
import { getFromMap, mod } from "../utils/utils";

export const concatImmediateEffects =
    (
        initialImmediateEffect: ImmediateEffect,
        ...immediateEffectsList: ImmediateEffect[]
    ): ImmediateEffect =>
    (board: Board) =>
    (playerIndex: number) =>
        immediateEffectsList.reduce(
            (currentBoard, currentImmediateEffect) =>
                currentImmediateEffect(currentBoard)(playerIndex),
            initialImmediateEffect(board)(playerIndex)
        );

export const countCardsAndApplyImmediateEffect =
    (
        cardType: CardType,
        func: (c: number) => ImmediateEffect
    ): ImmediateEffect =>
    (board: Board) =>
    (playerIndex: number) =>
        func(
            board.playersBoards[playerIndex].cardsBuilded
                .map(getFromMap(cardsMap))
                .filter((card) => card.type === cardType).length
        )(board)(playerIndex);

export const militaryImmediateEffect =
    (militaryPower: number): ImmediateEffect =>
    (board: Board) =>
    (playerIndex: number) => {
        board.playersBoards[playerIndex].militaryPower += militaryPower;
        return board;
    };

export const goldImmediateEffect =
    (gold: number, playerIndexOffset: number): ImmediateEffect =>
    (board: Board) =>
    (playerIndex: number) => {
        board.playersBoards[
            mod(playerIndex + playerIndexOffset, board.playersNumber)
        ].gold += gold;
        return board;
    };
