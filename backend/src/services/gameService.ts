import { GameRepository } from '../repositories/GameRepository.js';

export class GameService {
    private readonly gameRepository: GameRepository;

    constructor() {
        this.gameRepository = new GameRepository();
    }

    // TODO implement getAllGames + postGame + updateGame
}
