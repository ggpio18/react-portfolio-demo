-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 14, 2024 at 09:14 AM
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
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
CREATE TABLE `contact` (
  `contact_aid` int(11) NOT NULL,
  `contact_is_active` tinyint(1) NOT NULL,
  `contact_fullname` varchar(200) NOT NULL,
  `contact_publicemail` varchar(200) NOT NULL,
  `contact_publicnumber` int(255) NOT NULL,
  `contact_datetime` varchar(20) NOT NULL,
  `contact_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`contact_aid`, `contact_is_active`, `contact_fullname`, `contact_publicemail`, `contact_publicnumber`, `contact_datetime`, `contact_created`) VALUES
(1, 1, 'john doe1.1', 'public@gmail.com1.1', 2147483647, '2024-05-14 08:13:05', '2024-05-14 07:21:10'),
(2, 1, 'john doe', 'public@gmail.com', 164923366, '2024-05-14 07:22:51', '2024-05-14 07:22:51'),
(3, 1, 'john doe2', 'public@gmail.com2', 2147483647, '2024-05-14 08:35:12', '2024-05-14 07:23:04'),
(4, 1, 'john doe5', 'public@gmail.com5', 2147483647, '2024-05-14 14:53:42', '2024-05-14 14:53:42'),
(5, 1, 'john doe6.6', 'public@gmail.com6.6', 2147483647, '2024-05-14 15:02:56', '2024-05-14 15:02:32'),
(6, 1, 'asdasd', 'asdasdsad@gmail.com', 123, '2024-05-14 15:11:47', '2024-05-14 15:11:47');

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
(10, 'dsa', 'asd', 'asd', 1, 'asd', 'asd', '2024-05-13 10:37:33', '2024-05-13 10:37:33'),
(11, 'we', 'cat-bc-fbr.jpg', 'wqe', 1, 'qwe', 'qw', '2024-05-14 10:00:54', '2024-05-14 09:52:33');

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
  `project_img` varchar(150) NOT NULL,
  `project_created` varchar(20) NOT NULL,
  `project_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`project_aid`, `project_is_active`, `project_pl`, `project_title`, `project_description`, `project_img`, `project_created`, `project_datetime`) VALUES
(8, 0, 'html/css', 'try image', 'try image', 'drink-fbb.jpg', '2024-05-14 11:54:52', '2024-05-14 12:59:17'),
(9, 1, 'Bootsrap', 'Dolores Tourism AR', 'The Dolores Tourism is our capstone idea in where we created a informational, navigational and AR function website in order to boos the tourist of the Dolores Quezon.', 'proj11.PNG', '2024-05-14 12:56:44', '2024-05-14 13:03:10'),
(10, 1, 'c++', 'The Explorer', 'The Explorer is my first project created using unity. This is action/adventure game in where you need to survive 3 level in order to finish the game', 'proj13.PNG', '2024-05-14 12:59:14', '2024-05-14 12:59:14'),
(11, 1, 'Wordpress', 'GreenPlanet Ecommerce', 'The first project I created using wordpress in which we have a client for a bike shop and help them increased their sales and reached of customer', 'proj4.jpg', '2024-05-14 12:59:54', '2024-05-14 12:59:54'),
(12, 1, 'java', 'Pearl Design UI', 'The Pearl Design UI is where i created my first UI/UX in android having a Dashboard template with complete login functionality and UI', 'proj15.PNG', '2024-05-14 13:00:14', '2024-05-14 13:00:14'),
(13, 1, 'java', 'Matching Game', 'Android Matching Game is my first experienced on creating a game using android studio and using java programming language', 'proj14.PNG', '2024-05-14 13:01:09', '2024-05-14 13:01:09'),
(14, 1, 'html/css', 'Photo Quote', 'PhotoQuote is a web template that I created targeting the Photography and quotations  which anyone can use as a template', 'proj9.jpg', '2024-05-14 13:01:33', '2024-05-14 13:01:33'),
(15, 1, 'html/css', 'Modern', 'The modern website is my approach in creating Modern design with the use of html/css.', 'proj8.jpg', '2024-05-14 13:02:02', '2024-05-14 13:02:02'),
(16, 1, 'html/css', 'COOL QUOTES', 'This my first and ever experienced of web designing and coding where i was tasked to create a simple html/css website.', 'proj1.jpg', '2024-05-14 13:02:34', '2024-05-14 13:02:34'),
(17, 1, 'html/css', 'particle animation', 'particle animation is  a first take in creating a particle js using only html/css and animation only', 'proj7.png', '2024-05-14 13:04:44', '2024-05-14 13:04:44'),
(18, 1, 'html/css', 'Nav typing animation', 'This project is the take in creating an animation for typewriter in the navigation menu', 'proj6.png', '2024-05-14 13:05:32', '2024-05-14 13:05:32'),
(19, 1, 'C# ASP.NET', '3rd portfolio', 'This project is my take in creating my 3rdportfolio design using C# ASP.net', 'Latest project 2.PNG', '2024-05-14 13:20:23', '2024-05-14 13:20:23');

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
(1, 1, 'Web dev', 'We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.', '', '2024-05-14 13:12:30'),
(7, 1, 'Based on Tailwind CSS', 'We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.', '2024-05-13 09:29:00', '2024-05-13 11:43:10'),
(9, 1, '100+ Components', 'We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.', '2024-05-13 10:43:15', '2024-05-13 11:43:25'),
(10, 1, 'Speed Optimized', 'We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.', '2024-05-13 11:43:37', '2024-05-13 11:43:37'),
(11, 1, 'Fully Customizable', 'We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.', '2024-05-13 11:43:50', '2024-05-13 11:43:50'),
(12, 1, 'Regular Updates', 'We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.', '2024-05-13 11:44:01', '2024-05-13 11:44:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`contact_aid`);

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
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `contact_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `portfolio`
--
ALTER TABLE `portfolio`
  MODIFY `portfolio_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `project_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `services_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
