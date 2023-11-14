import { Board, ImmediateEffect, Play } from "../data/type";
import { mod } from "../utils/utils";

export const concatImmediateEffects =
    (
        immediateEffect: ImmediateEffect,
        ...immediateEffectsList: ImmediateEffect[]
    ): ImmediateEffect =>
    (playerIndex: number, plays: Play[], board: Board) =>
        immediateEffectsList.reduce(
            (currentBoard, immediateEffectListElement) =>
                immediateEffectListElement(playerIndex, plays, currentBoard),
            immediateEffect(playerIndex, plays, board)
        );

export const militaryImmediateEffect =
    (militaryPower: number): ImmediateEffect =>
    (playerIndex: number, _plays: Play[], board: Board) => {
        board.playersBoards[playerIndex].militaryPower += militaryPower;
        return board;
    };

export const goldImmediateEffect =
    (gold: number, playerIndexOffset: number): ImmediateEffect =>
    (playerIndex: number, plays: Play[], board: Board) => {
        board.playersBoards[
            mod(playerIndex + playerIndexOffset, board.playersNumber)
        ].gold += gold;
        return board;
    };
