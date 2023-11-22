import { Board, Play } from "./type"



export const isPlayValid = (play: Play, board: Board, playerIndex: number): boolean => {

    if (play.action === "sell") return true;
    return true;
}