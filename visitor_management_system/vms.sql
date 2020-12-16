-- phpMyAdmin SQL Dump
-- version 4.9.7deb1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 16, 2020 at 02:31 PM
-- Server version: 8.0.22-0ubuntu0.20.10.2
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `visitor_managment_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_table`
--

CREATE TABLE `admin_table` (
  `admin_id` int NOT NULL,
  `admin_name` varchar(250) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `admin_contact_no` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `admin_email` varchar(250) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `admin_password` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `admin_profile` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `admin_type` enum('Master','User') CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `admin_created_on` datetime NOT NULL,
  `admin_status` enum('Enable','Disable') CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `admin_table`
--

INSERT INTO `admin_table` (`admin_id`, `admin_name`, `admin_contact_no`, `admin_email`, `admin_password`, `admin_profile`, `admin_type`, `admin_created_on`, `admin_status`) VALUES
(1, 'John Smith', '8569874587', 'johnsmith@gmail.com', '$2y$10$SY7Mc5BZsLlTjvNl70xhIOCyIVF9G7Xc1xqMzPmaSYTCrH.LG545q', 'images/22041.jpg', 'Master', '2020-11-06 14:17:27', 'Enable'),
(2, 'Donna Huber', '8523698520', 'donnahuber@gmail.com', '$2y$10$2H2wHdkV8GJrV30TouhkXuTcP1gQeAY1rp7EGM4fYzOf/mibjzEg.', 'images/22308.jpg', 'User', '2020-11-08 09:08:33', 'Enable'),
(3, 'Colin Newton', '7453952852', 'colinnewton@gmail.com', '$2y$10$O.7mlW5/JC5ji5nF5YHDfuTFphnSbpsNN7FaQoG1BHEIEg4TVbLKW', 'images/31598.jpg', 'User', '2020-11-09 12:44:57', 'Enable'),
(4, 'Carl Meza', '9632585203', 'carlmeza@gmail.com', '$2y$10$gyv/CokUtimUAdXlQt9aRO8UBTnjSz.FqQQEk24vfQjgTppkFSz4q', 'images/1604922343.png', 'User', '2020-11-09 12:45:44', 'Enable'),
(5, 'Tyron Stein', '96369852635', 'tyronstein@gmail.com', '$2y$10$WIHtgnX5EqrKuruE31exGeZv.CLIHm52CggX1/vn.vr1d4tceFtsq', 'images/1604922395.png', 'User', '2020-11-09 12:46:35', 'Enable'),
(6, 'Peter Parker', '8569852632', 'peterparker@gmail.com', '$2y$10$uBTtPvR0YLH9f4FZt5uumeDz3HOmO8W2c.sNy8pvm7zvo8LHQ5zh.', 'images/6614.jpg', 'User', '2020-11-11 14:00:27', 'Enable');

-- --------------------------------------------------------

--
-- Table structure for table `department_table`
--

CREATE TABLE `department_table` (
  `department_id` int NOT NULL,
  `department_name` varchar(250) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `department_contact_person` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `department_created_on` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `department_table`
--

INSERT INTO `department_table` (`department_id`, `department_name`, `department_contact_person`, `department_created_on`) VALUES
(3, 'Marketing', 'Leon Batz, Dessie Labadie, Jayda Keebler', '2020-11-07 08:07:09'),
(4, 'HR', 'Peter Parker', '2020-11-07 08:08:47'),
(5, 'Production', 'Aubrey Nelson, Zayan Humphrey, Harris Lowe, Imaan Villa', '2020-11-09 12:41:59'),
(6, 'Accounting', 'Youssef Hook, Yousef Haigh, Marlie Booker', '2020-11-09 12:42:43'),
(7, 'Purchase', 'Harlee Murillo, Helena Lloyd, Kairon Bauer', '2020-11-09 12:43:17');

-- --------------------------------------------------------

--
-- Table structure for table `visitor_table`
--

CREATE TABLE `visitor_table` (
  `visitor_id` int NOT NULL,
  `visitor_name` varchar(250) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `visitor_email` varchar(250) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `visitor_mobile_no` int NOT NULL,
  `visitor_address` tinytext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `visitor_meet_person_name` varchar(250) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `visitor_department` varchar(250) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `visitor_reason_to_meet` tinytext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `visitor_enter_time` datetime NOT NULL,
  `visitor_outing_remark` tinytext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `visitor_out_time` datetime NOT NULL,
  `visitor_status` enum('In','Out') CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `visitor_enter_by` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `visitor_table`
--

INSERT INTO `visitor_table` (`visitor_id`, `visitor_name`, `visitor_email`, `visitor_mobile_no`, `visitor_address`, `visitor_meet_person_name`, `visitor_department`, `visitor_reason_to_meet`, `visitor_enter_time`, `visitor_outing_remark`, `visitor_out_time`, `visitor_status`, `visitor_enter_by`) VALUES
(1, 'Jenny Titus', 'jennytitus@mailinator.com', 2147483647, '1693 Isaacs Creek Road, Decatur, Illinois - 62522', 'Peter Parker', 'HR', 'For Job Interview', '2020-11-02 13:27:44', 'Inteview Completed', '2020-11-02 13:34:45', 'Out', 5),
(2, 'Mary Washington', 'marywashington@gmail.com', 2147483647, '1308 Hornor Avenue, Bartlesville, 74003 Oklahoma', 'Yousef Haigh', 'Accounting', 'For get pending due check...', '2020-11-09 13:29:28', 'This person leave office, without get his due amount.', '2020-11-09 13:34:30', 'Out', 4),
(3, 'Francisco Moyer', 'franciscomoyer@gmail.com', 2147483647, '1256 Ross Street, Metropolis, 62960 - Illinois', 'Jayda Keebler', 'Marketing', 'For get the sample of product.', '2020-11-09 13:31:11', 'Take product and leave our facility.', '2020-11-09 13:33:47', 'Out', 2),
(4, 'Jennifer Brown', 'jenniferbrown@gmail.com', 2147483647, '3870 Summit Park Avenue, Southfield, 48075 Michigan', 'Peter Parker', 'HR', 'For Job Interview...', '2020-11-09 13:33:13', 'Interview Completed..', '2020-11-09 13:35:02', 'Out', 3),
(5, 'Benny Cochran', 'bennycochran@gmail.com', 2147483647, '1930 Seneca Drive, Portland, 97225 Oregon', 'Harris Lowe', 'Production', 'Deliver inventory item like nuts &amp; bolts.', '2020-11-09 13:36:43', 'After deliver item he leave this place.', '2020-11-09 14:39:04', 'Out', 4),
(6, 'Kristina Johnston', 'kristinajohnson@gmail.com', 2147483647, '2730 Felosa Drive, Brownwood, 76801, Texas', 'Kairon Bauer', 'Purchase', 'Give sample product catalog.', '2020-11-09 13:38:21', 'He received our product cataclog from Mr. Kairon', '2020-11-09 14:37:11', 'Out', 5),
(7, 'William Sherrill', 'williamsherrill@gmail.com', 2147483647, '2852 Alfred Drive, Bayside 11361, New York', 'Peter Parker', 'HR', 'For Job Inteview.', '2020-11-09 13:39:58', 'Leave office after completing his inteview.', '2020-11-09 14:34:47', 'Out', 2),
(8, 'Chuck Stjohn', 'chuckstjohn@gmail.com', 2147483647, '3855 Fincham Road, San Diego 92103, California', 'Aubrey Nelson', 'Production', 'For Repair Machine', '2020-11-09 14:14:56', 'After repair machine of production department, he leave this place.', '2020-11-09 14:39:29', 'Out', 4),
(9, 'Francesca Holland', 'francesca_holland@gmail.com', 2147483647, '3944 Hillhaven Drive, Mira Loma 91752, California', 'Peter Parker', 'HR', 'For Job Interview.', '2020-11-09 14:16:11', 'He completed job interview and leave our place.', '2020-11-09 14:37:29', 'Out', 5),
(10, 'Florence Linn', 'florencelinn@yahoo.com', 2147483647, '2920 Valley Drive, Philadelphia 19146, Pennsylvania', 'Harlee Murillo', 'Purchase', 'For give product quote price.', '2020-11-09 14:17:46', 'He give quote price to Mr. Harlee.', '2020-11-09 14:35:18', 'Out', 2),
(11, 'Christa Castaneda', 'chirsta_castaneda@gmail.com', 2147483647, '3377 Smith Road, Hampton 30228, Georgia', 'Marlie Booker', 'Accounting', 'For get the last stationary bill amount', '2020-11-09 14:19:40', 'He received bill amount and leave office.', '2020-11-09 14:33:15', 'Out', 3),
(12, 'Lisa Tschida', 'lisatschida@mail.com', 2147483647, '986 Bassel Street, Metairie 70001, Louisiana', 'Peter Parker', 'HR', 'For Receptionist Post job interview.', '2020-11-09 14:21:03', 'Interview completed', '2020-11-09 14:33:31', 'Out', 3),
(13, 'Anthony Justice', 'anthony.justice@ymail.com', 2147483647, '964 Pointe Lane, Hollywood 33023, Florida', 'Dessie Labadie', 'Marketing', 'For Received new product sample.', '2020-11-09 14:22:35', 'Ms. Dessie give product sample to Anthony and after this he leave this place.', '2020-11-09 14:40:09', 'Out', 4),
(14, 'William McClure', 'williammcclure@gmail.com', 2147483647, '1411 Elsie Drive, Sergeant Bluff 51054, South Dakota', 'Peter Parker', 'HR', 'For attend Junior Assistance post interview.', '2020-11-09 14:24:11', 'Completed Job Interview.', '2020-11-09 14:37:51', 'Out', 5),
(15, 'Kevin Greene', 'kevingreene@gmail.com', 2147483647, '2786 Armbrester Drive, Rancho Dominguez 90220, California', 'Jayda Keebler', 'Marketing', 'For repair office AC.', '2020-11-09 14:25:33', 'Kevin complete working on repairing of Marketing department AC.', '2020-11-09 14:35:57', 'Out', 2),
(16, 'Misty Pedersen', 'mistypedersen@gmail.com', 2147483647, '4975 Sardis Station, Minneapolis 55402, Minnesota', 'Harlee Murillo', 'Purchase', 'For deliver courier.', '2020-11-09 14:26:59', 'Send courier to Harlee and leave our place.', '2020-11-09 14:34:02', 'Out', 3),
(17, 'Kevin Fenner', 'kevinfenner@gmail.com', 2147483647, '1329 Ray Court, Rockingham 28379, North Carolina', 'Yousef Haigh', 'Accounting', 'Deliver Lunch Tiffin.', '2020-11-09 14:28:19', 'Kevein deliver tiffin to Youset and leave this place.', '2020-11-09 14:40:35', 'Out', 4),
(18, 'Ray McGee', 'raymcgee@gmail.com', 2147483647, '2620 Vineyard Drive, Garfield Heights\r\n 44128, Ohio', 'Youssef Hook', 'Accounting', 'Give us our electricity bill', '2020-11-09 14:29:48', 'Give electricity bill to Youssef of Accounting department and then after leave our place.', '2020-11-09 14:38:32', 'Out', 5),
(19, 'Antonio Krouse', 'antoniokrouse@gmail.com', 2147483647, '414 Hilltop Haven Drive, Rochelle Park 07662, New Jersey', 'Harris Lowe', 'Production', 'For deliver new electrical motor.', '2020-11-09 14:31:22', 'Mr. Harris has received electrical motor from Antonio and and Mr. Antonio leave our office.', '2020-11-09 14:36:40', 'Out', 2),
(20, 'Florence Graham', 'florencegraham@gmail.com', 2147483647, '4441 Patton Lane, Garner 27529, North Carolina', 'Peter Parker', 'HR', 'For Attend receptionist job interview.', '2020-11-09 14:32:47', 'Interview Completed.', '2020-11-09 14:34:18', 'Out', 3),
(21, 'Eliana Martinez', 'elianamartinez@gmail.com', 2147483647, '1137 Nash Street Northbrook, IL 60062', 'Peter Parker', 'HR', 'For Job Interview', '2020-11-11 06:09:55', 'Interview completed and leave our premises.', '2020-11-11 06:19:44', 'Out', 2),
(22, 'Andru Symonds', 'andrusymonds@gmail.com', 2147483647, '1881 Progress Way Cedar Rapids, IA 52401', 'Youssef Hook', 'Accounting', 'Amazon Delivery boy for deliver item of Youssef Hook', '2020-11-11 10:29:29', 'He gave parcel to Youset Hook and leave our facility.', '2020-11-11 10:29:58', 'Out', 3),
(23, 'Adam Smith', 'adamsmith@gmail.com', 2147483647, '964 Pointe Lane, Hollywood 33023, Florida', 'Peter Parker', 'HR', 'For Job Interview.', '2020-11-11 14:24:58', 'Job Interview Completed.', '2020-11-11 14:26:48', 'Out', 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_table`
--
ALTER TABLE `admin_table`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `department_table`
--
ALTER TABLE `department_table`
  ADD PRIMARY KEY (`department_id`);

--
-- Indexes for table `visitor_table`
--
ALTER TABLE `visitor_table`
  ADD PRIMARY KEY (`visitor_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_table`
--
ALTER TABLE `admin_table`
  MODIFY `admin_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `department_table`
--
ALTER TABLE `department_table`
  MODIFY `department_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `visitor_table`
--
ALTER TABLE `visitor_table`
  MODIFY `visitor_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;