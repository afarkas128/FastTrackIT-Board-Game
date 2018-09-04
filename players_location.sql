-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 04, 2018 at 09:04 AM
-- Server version: 5.7.21
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fast-track-it-board-game-project-db`
--

-- --------------------------------------------------------

--
-- Table structure for table `players_location`
--

DROP TABLE IF EXISTS `players_location`;
CREATE TABLE IF NOT EXISTS `players_location` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `board` int(11) NOT NULL,
  `player` int(11) NOT NULL,
  `position` int(11) NOT NULL,
  `nextPlayer` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `players_location`
--

INSERT INTO `players_location` (`id`, `board`, `player`, `position`, `nextPlayer`) VALUES
(1, 1, 1, 1, 2),
(2, 1, 2, 1, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
