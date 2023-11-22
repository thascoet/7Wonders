import { Board, Effect, Event, Passive, ResourceProvided, ScientificRessource, VictoryPoint } from "./type";

export const concatEffects =
    (initialEffect: Effect, ...EffectsList: Effect[]): Effect =>
    (board: Board, playerIndex: number) =>
        EffectsList.reduce(
            (currentBoard, currentEffect) => currentEffect(currentBoard, playerIndex),
            initialEffect(board, playerIndex)
        );

export const applyFunctionEffect =
    <T>(func: (board: Board, playerIndex: number) => T, EffectFunc: (arg: T) => Effect): Effect =>
    (board: Board, playerIndex: number) =>
        EffectFunc(func(board, playerIndex))(board, playerIndex);

export const militaryEffect =
    (militaryPower: number): Effect =>
    (board: Board, playerIndex: number) => {
        board.playersBoards[playerIndex].militaryPower += militaryPower;
        return board;
    };

export const scientificEffect = (scientificRessource: ScientificRessource) => (board: Board, playerIndex: number) => {
    board.playersBoards[playerIndex].scientificsRessources[scientificRessource] += 1;
    return board;
};

export const goldEffect =
    (gold: number): Effect =>
    (board: Board, playerIndex: number) => {
        board.playersBoards[playerIndex].gold += gold;
        return board;
    };

export const ressourceEffect =
    (resourceProvided: ResourceProvided): Effect =>
    (board: Board, playerIndex: number) => {
        board.playersBoards[playerIndex].resources.push(resourceProvided);
        return board;
    };

export const addPassiveEffect =
    (passive: Passive): Effect =>
    (board: Board, playerIndex: number) => {
        board.playersBoards[playerIndex].passives.push(passive);
        return board;
    };

export const triggerEventEffect = (unknownPlayerEvent: Omit<Event, "playerIndex">) => (board: Board, playerIndex: number) => {
    board.events.push({
        playerIndex,
        ...unknownPlayerEvent,
    });
    return board;
};
export const victoryPoint =
    (points: number): VictoryPoint =>
    (_board: Board, _playerIndex: number) =>
        points;
