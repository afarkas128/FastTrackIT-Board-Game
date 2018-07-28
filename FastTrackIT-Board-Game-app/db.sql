-- Create table script --

CREATE TABLE `fast-track-it-board-game-project-db`.`players_location` ( `id` INT NOT NULL AUTO_INCREMENT , `board` INT NOT NULL , `player` TEXT NOT NULL , `position` INT NOT NULL , `nextPlayer` TEXT NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;

-- Insert rows script --

INSERT INTO `players_location` (`id`, `board`, `player`, `position`, `nextPlayer`) VALUES (NULL, '1', 'Player 1', '1', 'Player 2'), (NULL, '1', 'Player 2', '1', 'Player 1');