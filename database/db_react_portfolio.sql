-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 13, 2024 at 09:23 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_react_portfolio`
--
CREATE DATABASE IF NOT EXISTS `db_react_portfolio` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `db_react_portfolio`;

-- --------------------------------------------------------

--
-- Table structure for table `portfolio`
--

DROP TABLE IF EXISTS `portfolio`;
CREATE TABLE `portfolio` (
  `portfolio_aid` int(11) NOT NULL,
  `portfolio_title` varchar(50) NOT NULL,
  `portfolio_image` varchar(50) NOT NULL,
  `portfolio_category` varchar(20) NOT NULL,
  `portfolio_is_active` tinyint(1) NOT NULL,
  `portfolio_description` text NOT NULL,
  `portfolio_publish_date` varchar(20) NOT NULL,
  `portfolio_datetime` varchar(20) NOT NULL,
  `portfolio_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `portfolio`
--

INSERT INTO `portfolio` (`portfolio_aid`, `portfolio_title`, `portfolio_image`, `portfolio_category`, `portfolio_is_active`, `portfolio_description`, `portfolio_publish_date`, `portfolio_datetime`, `portfolio_created`) VALUES
(3, 'port title4', 'port img3', 'port cat3', 1, 'port descript3', 'port date3', '2024-05-13 10:37:47', '2024-05-10 09:37:18'),
(4, 'try11111', 'try111', 'try11111', 1, 'try111', 'try111', '2024-05-10 13:08:08', '2024-05-10 10:31:07'),
(5, 'hello', 'img1', 'helllocat', 1, 'adasdasd', 'may 8 2024', '2024-05-10 13:04:55', '2024-05-10 12:29:13'),
(8, 'toast', 'toast', 'toast', 1, 'toast', 'toast', '2024-05-10 12:59:28', '2024-05-10 12:59:28'),
(9, 'sad', 'asd', 'as', 0, 'das', 'as', '2024-05-10 13:20:53', '2024-05-10 13:20:43'),
(10, 'dsa', 'asd', 'asd', 1, 'asd', 'asd', '2024-05-13 10:37:33', '2024-05-13 10:37:33');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
CREATE TABLE `project` (
  `project_aid` int(11) NOT NULL,
  `project_is_active` tinyint(1) NOT NULL,
  `project_pl` varchar(300) NOT NULL,
  `project_title` varchar(300) NOT NULL,
  `project_description` varchar(500) NOT NULL,
  `project_created` varchar(20) NOT NULL,
  `project_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`project_aid`, `project_is_active`, `project_pl`, `project_title`, `project_description`, `project_created`, `project_datetime`) VALUES
(1, 1, 'prog lang project1.1', 'proj title1.1', 'proj description1.1', '2024-05-13 12:22:50', '2024-05-13 13:25:13'),
(2, 1, 'prog lang project2.2', 'proj title2.2', 'proj description2.2', '2024-05-13 12:23:03', '2024-05-13 13:05:30'),
(4, 1, 'prog lang project4', 'proj title4', 'proj description4', '2024-05-13 13:11:31', '2024-05-13 13:11:31'),
(5, 1, 'prog lang project5.5', 'proj title5.5', 'proj description5.5', '2024-05-13 13:11:45', '2024-05-13 13:12:07'),
(6, 1, 'prog lang6', 'proj tittl6', 'projectd esc 6', '2024-05-13 13:25:42', '2024-05-13 13:25:42');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
CREATE TABLE `services` (
  `services_aid` int(11) NOT NULL,
  `services_is_active` tinyint(1) NOT NULL,
  `services_title` varchar(30) NOT NULL,
  `services_par` varchar(300) NOT NULL,
  `services_created` varchar(20) NOT NULL,
  `services_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`services_aid`, `services_is_active`, `services_title`, `services_par`, `services_created`, `services_datetime`) VALUES
(1, 1, 'Refreshing Design', 'We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.', '', '2024-05-13 11:41:38'),
(7, 1, 'Based on Tailwind CSS', 'We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.', '2024-05-13 09:29:00', '2024-05-13 11:43:10'),
(9, 1, '100+ Components', 'We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.', '2024-05-13 10:43:15', '2024-05-13 11:43:25'),
(10, 1, 'Speed Optimized', 'We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.', '2024-05-13 11:43:37', '2024-05-13 11:43:37'),
(11, 1, 'Fully Customizable', 'We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.', '2024-05-13 11:43:50', '2024-05-13 11:43:50'),
(12, 1, 'Regular Updates', 'We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.', '2024-05-13 11:44:01', '2024-05-13 11:44:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `portfolio`
--
ALTER TABLE `portfolio`
  ADD PRIMARY KEY (`portfolio_aid`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`project_aid`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`services_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `portfolio`
--
ALTER TABLE `portfolio`
  MODIFY `portfolio_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `project_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `services_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
