import {
    Board,
    CountingPointsEffect,
    ImmediateEffect,
    Ressource,
    ScientificRessource,
} from "./type";

export const concatImmediateEffects =
    (
        initialImmediateEffect: ImmediateEffect,
        ...immediateEffectsList: ImmediateEffect[]
    ): ImmediateEffect =>
    (board: Board, playerIndex: number) =>
        immediateEffectsList.reduce(
            (currentBoard, currentImmediateEffect) =>
                currentImmediateEffect(currentBoard, playerIndex),
            initialImmediateEffect(board, playerIndex)
        );

export const applyFunctionImmediateEffect =
    <T>(
        func: (board: Board, playerIndex: number) => T,
        immediateEffectFunc: (arg: T) => ImmediateEffect
    ): ImmediateEffect =>
    (board: Board, playerIndex: number) =>
        immediateEffectFunc(func(board, playerIndex))(board, playerIndex);

export const militaryImmediateEffect =
    (militaryPower: number): ImmediateEffect =>
    (board: Board, playerIndex: number) => {
        board.playersBoards[playerIndex].militaryPower += militaryPower;
        return board;
    };

export const scientificImmediateEffect =
    (scientificRessource: ScientificRessource) =>
    (board: Board, playerIndex: number) => {
        board.playersBoards[playerIndex].scientificsRessources[
            scientificRessource
        ] += 1;
        return board;
    };

export const goldImmediateEffect =
    (gold: number): ImmediateEffect =>
    (board: Board, playerIndex: number) => {
        board.playersBoards[playerIndex].gold += gold;
        return board;
    };

export const ressourceImmediateEffect =
    (
        resources: Exclude<Ressource, "gold">[],
        isPublic: Boolean
    ): ImmediateEffect =>
    (board: Board, playerIndex: number) => {
        let resourcesList = isPublic
            ? board.playersBoards[playerIndex].ressorcesAvaliable.public
            : board.playersBoards[playerIndex].ressorcesAvaliable.private;
        resourcesList.push(resources);
        return board;
    };

export const addPassiveImmediateEffect =
    (passiveId: number): ImmediateEffect =>
    (board: Board, playerIndex: number) => {
        board.playersBoards[playerIndex].passives.push(passiveId);
        return board;
    };

export const victoryPoint =
    (points: number): CountingPointsEffect =>
    (_board: Board, _playerIndex: number) =>
        points;
