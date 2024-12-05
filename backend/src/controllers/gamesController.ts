import { Request, Response } from 'express';
import { GameService } from '../services/gameService.js';

export class GameController {
    private readonly gameService: GameService;

    constructor() {
        this.gameService = new GameService();
    }

    // TODO implement getAllGames + postGame + updateGame
}
