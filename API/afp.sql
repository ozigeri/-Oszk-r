-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2025. Okt 03. 18:47
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `afp`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `caradvertisements`
--

CREATE TABLE `caradvertisements` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `from` varchar(255) NOT NULL,
  `to` varchar(255) NOT NULL,
  `spaces` int(3) NOT NULL,
  `price` int(8) NOT NULL,
  `timestamp` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `caradvertisements`
--

INSERT INTO `caradvertisements` (`id`, `userid`, `from`, `to`, `spaces`, `price`, `timestamp`) VALUES
(1, 1, 'Budapest', 'Debrecen', 3, 4500, '2025-10-12 08:00:00'),
(2, 2, 'Szeged', 'Budapest', 2, 4000, '2025-10-13 09:30:00'),
(3, 5, 'Győr', 'Pécs', 4, 6000, '2025-10-14 10:00:00'),
(4, 7, 'Debrecen', 'Nyíregyháza', 3, 2500, '2025-10-15 07:45:00'),
(5, 10, 'Miskolc', 'Budapest', 2, 5000, '2025-10-16 11:00:00'),
(6, 11, 'Budapest', 'Sopron', 3, 6500, '2025-10-17 13:00:00'),
(7, 13, 'Pécs', 'Budapest', 2, 5500, '2025-10-18 14:30:00'),
(8, 15, 'Szolnok', 'Debrecen', 3, 3000, '2025-10-19 08:20:00'),
(9, 18, 'Budapest', 'Győr', 4, 4500, '2025-10-20 09:10:00'),
(10, 20, 'Kecskemét', 'Budapest', 2, 3200, '2025-10-21 07:00:00'),
(11, 21, 'Eger', 'Budapest', 3, 4000, '2025-10-22 06:45:00'),
(12, 23, 'Budapest', 'Szeged', 4, 4800, '2025-10-23 15:00:00'),
(13, 25, 'Tatabánya', 'Győr', 2, 2500, '2025-10-24 16:30:00'),
(14, 26, 'Budapest', 'Pécs', 3, 5700, '2025-10-25 10:10:00'),
(15, 28, 'Debrecen', 'Budapest', 4, 5000, '2025-10-26 08:45:00'),
(16, 30, 'Nyíregyháza', 'Debrecen', 2, 2200, '2025-10-27 09:25:00'),
(17, 1, 'Budapest', 'Szolnok', 3, 2600, '2025-10-28 14:00:00'),
(18, 2, 'Pécs', 'Szeged', 2, 4500, '2025-10-29 12:30:00'),
(19, 5, 'Győr', 'Budapest', 4, 4900, '2025-10-30 13:15:00'),
(20, 7, 'Debrecen', 'Miskolc', 3, 3500, '2025-10-31 11:40:00'),
(21, 10, 'Budapest', 'Tatabánya', 2, 2700, '2025-11-01 07:55:00'),
(22, 11, 'Sopron', 'Győr', 3, 3300, '2025-11-02 08:35:00'),
(23, 13, 'Székesfehérvár', 'Budapest', 2, 3100, '2025-11-03 06:50:00'),
(24, 15, 'Szolnok', 'Szeged', 3, 4600, '2025-11-04 09:45:00'),
(25, 18, 'Budapest', 'Miskolc', 4, 5200, '2025-11-05 10:25:00'),
(26, 20, 'Kecskemét', 'Debrecen', 2, 4800, '2025-11-06 13:50:00'),
(27, 21, 'Eger', 'Szeged', 3, 6200, '2025-11-07 15:40:00'),
(28, 23, 'Budapest', 'Pécs', 4, 7000, '2025-11-08 16:55:00'),
(29, 25, 'Győr', 'Sopron', 2, 3600, '2025-11-09 17:20:00'),
(30, 26, 'Budapest', 'Eger', 3, 4000, '2025-11-10 07:25:00');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `carapplications`
--

CREATE TABLE `carapplications` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `caradv_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `carapplications`
--

INSERT INTO `carapplications` (`id`, `userid`, `caradv_id`) VALUES
(1, 3, 1),
(2, 4, 2),
(3, 6, 3),
(4, 8, 4),
(5, 9, 5),
(6, 12, 6),
(7, 14, 7),
(8, 16, 8),
(9, 17, 9),
(10, 19, 10),
(11, 22, 11),
(12, 24, 12),
(13, 27, 13),
(14, 29, 14),
(15, 30, 15),
(16, 5, 16),
(17, 7, 17),
(18, 10, 18),
(19, 11, 19),
(20, 13, 20),
(21, 15, 21),
(22, 18, 22),
(23, 20, 23),
(24, 21, 24),
(25, 23, 25),
(26, 25, 26),
(27, 26, 27),
(28, 28, 28),
(29, 1, 29),
(30, 2, 30);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `content` varchar(1000) NOT NULL,
  `author_name` varchar(255) DEFAULT NULL,
  `thread_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `comment`
--

INSERT INTO `comment` (`id`, `content`, `author_name`, `thread_id`, `created_at`) VALUES
(1, 'Érdekelne, csatlakoznék.', 'Nagy Péter', 1, '2025-09-01 10:30:00'),
(2, 'Jó tippek, köszönöm!', 'Tóth Lilla', 2, '2025-09-02 11:15:00'),
(3, 'Én is ajánlom ezt a kiegészítőt.', 'Kiss Mária', 3, '2025-09-03 12:20:00'),
(4, 'Szerintem mindig induljunk időben.', 'Farkas Zsuzsanna', 4, '2025-09-04 13:05:00'),
(5, 'Remek ötletek!', 'Molnár András', 5, '2025-09-05 14:10:00'),
(6, 'Ezt kipróbálom.', 'Lakatos Eszter', 6, '2025-09-06 15:25:00'),
(7, 'Én is keresnék utasokat.', 'Takács Hajnalka', 7, '2025-09-07 16:40:00'),
(8, 'Tapasztalatom szerint működik.', 'Simon Beáta', 8, '2025-09-08 17:50:00'),
(9, 'Köszi az infót!', 'Kelemen Ivett', 9, '2025-09-09 18:30:00'),
(10, 'Hasznos volt!', 'Boros Dénes', 10, '2025-09-10 19:15:00'),
(11, 'Megosztom a tapasztalatom.', 'Hegedűs Edit', 11, '2025-09-11 10:20:00'),
(12, 'Csatlakoznék a fuvarhoz.', 'Sárközi Milán', 12, '2025-09-12 11:25:00'),
(13, 'Mi a teendő vészhelyzet esetén?', 'Székely Tünde', 13, '2025-09-13 12:40:00'),
(14, 'Köszönöm a tippeket!', 'Császár Áron', 14, '2025-09-14 13:55:00'),
(15, 'Én is keresnék gyors útvonalat.', 'Major Dóra', 15, '2025-09-15 14:30:00'),
(16, 'Utasaim mindig rendesek.', 'Illés Gergely', 16, '2025-09-16 15:20:00'),
(17, 'Karbantartás fontos!', 'Fehér Orsolya', 17, '2025-09-17 16:10:00'),
(18, 'Foglalás gyorsan megy.', 'Huszár Balázs', 18, '2025-09-18 17:00:00'),
(19, 'Általános kérdések mindig hasznosak.', 'Kiss Ágnes', 19, '2025-09-19 18:10:00'),
(20, 'Ellenőrzés mindig kötelező.', 'Lengyel Zoltán', 20, '2025-09-20 19:05:00'),
(21, 'Örülök, hogy megosztottad.', 'Kovács János', 21, '2025-09-21 10:15:00'),
(22, 'Kiegészítést javaslok.', 'Szabó Anna', 22, '2025-09-22 11:35:00'),
(23, 'Csatlakoznék az úthoz.', 'Varga Ferenc', 23, '2025-09-23 12:45:00'),
(24, 'Tippek nagyon hasznosak.', 'Balogh Róbert', 24, '2025-09-24 13:50:00'),
(25, 'Legjobb útvonalakat keresem.', 'Horváth Katalin', 25, '2025-09-25 14:55:00'),
(26, 'Biztonság mindig fontos.', 'Szűcs Levente', 26, '2025-09-26 15:15:00'),
(27, 'Mit vigyünk az útra?', 'Papp Gergő', 27, '2025-09-27 16:05:00'),
(28, 'Jó tippek, köszönöm!', 'Németh Tamás', 28, '2025-09-28 17:20:00'),
(29, 'Érdekes megoldások.', 'Veres Márton', 29, '2025-09-29 18:30:00'),
(30, 'Problémák elkerülése fontos.', 'Boros Dénes', 30, '2025-09-30 19:45:00');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `peopleadvertisements`
--

CREATE TABLE `peopleadvertisements` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `date` date NOT NULL,
  `from` varchar(255) NOT NULL,
  `to` varchar(255) NOT NULL,
  `countofpeople` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `peopleadvertisements`
--

INSERT INTO `peopleadvertisements` (`id`, `userid`, `date`, `from`, `to`, `countofpeople`) VALUES
(1, 3, '2025-10-12', 'Budapest', 'Debrecen', 1),
(2, 4, '2025-10-13', 'Szeged', 'Budapest', 2),
(3, 6, '2025-10-14', 'Pécs', 'Győr', 1),
(4, 8, '2025-10-15', 'Debrecen', 'Nyíregyháza', 3),
(5, 9, '2025-10-16', 'Miskolc', 'Budapest', 2),
(6, 12, '2025-10-17', 'Budapest', 'Sopron', 1),
(7, 14, '2025-10-18', 'Pécs', 'Budapest', 2),
(8, 16, '2025-10-19', 'Szolnok', 'Debrecen', 1),
(9, 17, '2025-10-20', 'Budapest', 'Győr', 2),
(10, 19, '2025-10-21', 'Kecskemét', 'Budapest', 1),
(11, 22, '2025-10-22', 'Eger', 'Budapest', 2),
(12, 24, '2025-10-23', 'Budapest', 'Szeged', 3),
(13, 27, '2025-10-24', 'Tatabánya', 'Győr', 1),
(14, 29, '2025-10-25', 'Budapest', 'Pécs', 2),
(15, 30, '2025-10-26', 'Debrecen', 'Budapest', 1),
(16, 3, '2025-10-27', 'Nyíregyháza', 'Debrecen', 2),
(17, 4, '2025-10-28', 'Budapest', 'Szolnok', 1),
(18, 6, '2025-10-29', 'Pécs', 'Szeged', 2),
(19, 8, '2025-10-30', 'Győr', 'Budapest', 1),
(20, 9, '2025-10-31', 'Debrecen', 'Miskolc', 2),
(21, 12, '2025-11-01', 'Budapest', 'Tatabánya', 1),
(22, 14, '2025-11-02', 'Sopron', 'Győr', 2),
(23, 16, '2025-11-03', 'Székesfehérvár', 'Budapest', 1),
(24, 17, '2025-11-04', 'Szolnok', 'Szeged', 3),
(25, 19, '2025-11-05', 'Budapest', 'Miskolc', 1),
(26, 22, '2025-11-06', 'Kecskemét', 'Debrecen', 2),
(27, 24, '2025-11-07', 'Eger', 'Szeged', 1),
(28, 27, '2025-11-08', 'Budapest', 'Pécs', 2),
(29, 29, '2025-11-09', 'Győr', 'Sopron', 1),
(30, 30, '2025-11-10', 'Budapest', 'Eger', 2);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `peopleapplications`
--

CREATE TABLE `peopleapplications` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `peopleadv_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `peopleapplications`
--

INSERT INTO `peopleapplications` (`id`, `userid`, `peopleadv_id`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 5, 3),
(4, 7, 4),
(5, 10, 5),
(6, 11, 6),
(7, 13, 7),
(8, 15, 8),
(9, 18, 9),
(10, 20, 10),
(11, 21, 11),
(12, 23, 12),
(13, 25, 13),
(14, 26, 14),
(15, 28, 15),
(16, 30, 16),
(17, 3, 17),
(18, 4, 18),
(19, 6, 19),
(20, 8, 20),
(21, 9, 21),
(22, 12, 22),
(23, 14, 23),
(24, 16, 24),
(25, 17, 25),
(26, 19, 26),
(27, 22, 27),
(28, 24, 28),
(29, 27, 29),
(30, 29, 30);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `section`
--

CREATE TABLE `section` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `section`
--

INSERT INTO `section` (`id`, `name`) VALUES
(1, 'Általános'),
(2, 'Járművek'),
(3, 'Utasbiztonság'),
(4, 'Felszerelések'),
(5, 'Problémák');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `thread`
--

CREATE TABLE `thread` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `author_name` varchar(255) DEFAULT NULL,
  `content` varchar(1000) NOT NULL,
  `is_archived` tinyint(1) NOT NULL DEFAULT 0,
  `section_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `thread`
--

INSERT INTO `thread` (`id`, `name`, `author_name`, `content`, `is_archived`, `section_id`, `created_at`) VALUES
(1, 'Új telekocsi útvonal', 'Kovács János', 'Beszéljük meg az új útvonalakat!', 0, 2, '2025-09-01 10:00:00'),
(2, 'Biztonságos utazás', 'Szabó Anna', 'Tippek az utasbiztonságra', 0, 3, '2025-09-02 11:00:00'),
(3, 'Autó felszerelések', 'Nagy Péter', 'Milyen kiegészítőket ajánlotok?', 0, 4, '2025-09-03 12:00:00'),
(4, 'Problémák a fuvarokkal', 'Tóth Lilla', 'Mi a teendő késés esetén?', 0, 5, '2025-09-04 13:00:00'),
(5, 'Általános tippek', 'Varga Ferenc', 'Hogyan szervezzünk telekocsit?', 0, 1, '2025-09-05 14:00:00'),
(6, 'Autómosás tippek', 'Kiss Mária', 'Hogyan tartsuk tisztán az autót?', 0, 4, '2025-09-06 15:00:00'),
(7, 'Új fuvar Budapesten', 'Balogh Róbert', 'Van valaki aki utazna velem?', 0, 2, '2025-09-07 16:00:00'),
(8, 'Tapasztalatok', 'Farkas Zsuzsanna', 'Milyen tapasztalataitok vannak?', 0, 1, '2025-09-08 17:00:00'),
(9, 'Hogyan csökkentsük az árakat', 'Molnár András', 'Tippek az olcsóbb fuvarhoz', 0, 2, '2025-09-09 18:00:00'),
(10, 'Kényelmi felszerelések', 'Horváth Katalin', 'Mit vigyünk az útra?', 0, 4, '2025-09-10 19:00:00'),
(11, 'Szabályok', 'Szűcs Levente', 'Milyen szabályokat kövessünk?', 0, 3, '2025-09-11 10:00:00'),
(12, 'Új fuvar Szegedről', 'Lakatos Eszter', 'Keresek utasokat Szegedre', 0, 2, '2025-09-12 11:00:00'),
(13, 'Probléma jelentés', 'Papp Gergő', 'Mi a teendő baleset esetén?', 0, 5, '2025-09-13 12:00:00'),
(14, 'Tippek kezdőknek', 'Takács Hajnalka', 'Hogyan kezdjek telekocsit?', 0, 1, '2025-09-14 13:00:00'),
(15, 'Legjobb útvonalak', 'Németh Tamás', 'Melyik a leggyorsabb út?', 0, 2, '2025-09-15 14:00:00'),
(16, 'Utasok viselkedése', 'Simon Beáta', 'Milyen viselkedést várjunk?', 0, 3, '2025-09-16 15:00:00'),
(17, 'Autó karbantartás', 'Oláh Szilvia', 'Hogyan tartsuk karban az autót?', 0, 4, '2025-09-17 16:00:00'),
(18, 'Helyfoglalás tippek', 'Veres Márton', 'Hogyan foglaljunk helyet gyorsan?', 0, 2, '2025-09-18 17:00:00'),
(19, 'Általános kérdések', 'Kelemen Ivett', 'Kérdések a telekocsiról', 0, 1, '2025-09-19 18:00:00'),
(20, 'Utasbiztonság ellenőrzés', 'Boros Dénes', 'Mit ellenőrizzünk utazás előtt?', 0, 3, '2025-09-20 19:00:00'),
(21, 'Tapasztalatok megosztása', 'Hegedűs Edit', 'Osszátok meg élményeiteket', 0, 1, '2025-09-21 10:00:00'),
(22, 'Felszerelés lista', 'Sárközi Milán', 'Mit vigyek az útra?', 0, 4, '2025-09-22 11:00:00'),
(23, 'Új fuvar Egerbe', 'Székely Tünde', 'Van valaki aki utazna Egerbe?', 0, 2, '2025-09-23 12:00:00'),
(24, 'Autó takarítás', 'Császár Áron', 'Tippek autó takarításra', 0, 4, '2025-09-24 13:00:00'),
(25, 'Problémamegoldás', 'Major Dóra', 'Mit tegyünk, ha gond van?', 0, 5, '2025-09-25 14:00:00'),
(26, 'Új fuvar Tatabánya', 'Illés Gergely', 'Keresek utasokat Tatabányára', 0, 2, '2025-09-26 15:00:00'),
(27, 'Tippek haladóknak', 'Fehér Orsolya', 'Hogyan optimalizáljuk a fuvarokat?', 0, 1, '2025-09-27 16:00:00'),
(28, 'Autó biztonság', 'Huszár Balázs', 'Hogyan növeljük a biztonságot?', 0, 3, '2025-09-28 17:00:00'),
(29, 'Utasfelszerelés', 'Kiss Ágnes', 'Mit vigyünk az utasoknak?', 0, 4, '2025-09-29 18:00:00'),
(30, 'Fuvar problémák', 'Lengyel Zoltán', 'Problémák az utazások során', 0, 5, '2025-09-30 19:00:00');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phonenumber` varchar(20) NOT NULL,
  `date_of_birth` datetime NOT NULL,
  `male` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `name`, `phonenumber`, `date_of_birth`, `male`) VALUES
(1, 'jancsi01', '', '', 'Kovács János', '+36301234501', '1995-03-12 00:00:00', 1),
(2, 'anna92', '', '', 'Szabó Anna', '+36301234502', '1992-07-21 00:00:00', 1),
(3, 'petike', '', '', 'Nagy Péter', '+36301234503', '1998-11-05 00:00:00', 0),
(4, 'lilla11', '', '', 'Tóth Lilla', '+36301234504', '2000-01-15 00:00:00', 0),
(5, 'feri77', '', '', 'Varga Ferenc', '+36301234505', '1987-04-09 00:00:00', 1),
(6, 'mari88', '', '', 'Kiss Mária', '+36301234506', '1988-09-19 00:00:00', 1),
(7, 'robi07', '', '', 'Balogh Róbert', '+36301234507', '1993-12-01 00:00:00', 1),
(8, 'zsuzsi09', '', '', 'Farkas Zsuzsanna', '+36301234508', '1990-02-11 00:00:00', 0),
(9, 'andris12', '', '', 'Molnár András', '+36301234509', '1997-05-30 00:00:00', 1),
(10, 'kata34', '', '', 'Horváth Katalin', '+36301234510', '1991-06-22 00:00:00', 1),
(11, 'levi56', '', '', 'Szűcs Levente', '+36301234511', '1985-10-18 00:00:00', 1),
(12, 'eszter89', '', '', 'Lakatos Eszter', '+36301234512', '1999-12-20 00:00:00', 0),
(13, 'gergo33', '', '', 'Papp Gergő', '+36301234513', '1994-11-17 00:00:00', 1),
(14, 'hajni22', '', '', 'Takács Hajnalka', '+36301234514', '1996-08-25 00:00:00', 0),
(15, 'tomi08', '', '', 'Németh Tamás', '+36301234515', '1993-01-01 00:00:00', 1),
(16, 'bea19', '', '', 'Simon Beáta', '+36301234516', '1989-09-09 00:00:00', 1),
(17, 'szilvi31', '', '', 'Oláh Szilvia', '+36301234517', '1995-04-13 00:00:00', 0),
(18, 'marton77', '', '', 'Veres Márton', '+36301234518', '1987-03-07 00:00:00', 1),
(19, 'ivett40', '', '', 'Kelemen Ivett', '+36301234519', '1990-10-29 00:00:00', 0),
(20, 'denes05', '', '', 'Boros Dénes', '+36301234520', '1985-06-14 00:00:00', 1),
(21, 'edit61', '', '', 'Hegedűs Edit', '+36301234521', '1981-11-22 00:00:00', 1),
(22, 'milan44', '', '', 'Sárközi Milán', '+36301234522', '1999-07-17 00:00:00', 1),
(23, 'tunde25', '', '', 'Székely Tünde', '+36301234523', '1993-09-08 00:00:00', 0),
(24, 'aron18', '', '', 'Császár Áron', '+36301234524', '2001-05-01 00:00:00', 1),
(25, 'dori10', '', '', 'Major Dóra', '+36301234525', '1994-12-03 00:00:00', 0),
(26, 'gergely59', '', '', 'Illés Gergely', '+36301234526', '1986-01-20 00:00:00', 1),
(27, 'orsolya12', '', '', 'Fehér Orsolya', '+36301234527', '1992-08-12 00:00:00', 1),
(28, 'balazs21', '', '', 'Huszár Balázs', '+36301234528', '1997-07-27 00:00:00', 1),
(29, 'agnes34', '', '', 'Kiss Ágnes', '+36301234529', '1995-02-14 00:00:00', 1),
(30, 'zoltan72', '', '', 'Lengyel Zoltán', '+36301234530', '1980-06-06 00:00:00', 1);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `caradvertisements`
--
ALTER TABLE `caradvertisements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_caradv_user` (`userid`);

--
-- A tábla indexei `carapplications`
--
ALTER TABLE `carapplications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_carapp_user` (`userid`),
  ADD KEY `fk_carapp_caradv` (`caradv_id`);

--
-- A tábla indexei `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_comment_thread` (`thread_id`);

--
-- A tábla indexei `peopleadvertisements`
--
ALTER TABLE `peopleadvertisements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_peopleadv_user` (`userid`);

--
-- A tábla indexei `peopleapplications`
--
ALTER TABLE `peopleapplications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_peopleapp_user` (`userid`),
  ADD KEY `fk_peopleapp_peopleadv` (`peopleadv_id`);

--
-- A tábla indexei `section`
--
ALTER TABLE `section`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `thread`
--
ALTER TABLE `thread`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_thread_section` (`section_id`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `caradvertisements`
--
ALTER TABLE `caradvertisements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT a táblához `carapplications`
--
ALTER TABLE `carapplications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT a táblához `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT a táblához `peopleadvertisements`
--
ALTER TABLE `peopleadvertisements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT a táblához `peopleapplications`
--
ALTER TABLE `peopleapplications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT a táblához `section`
--
ALTER TABLE `section`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT a táblához `thread`
--
ALTER TABLE `thread`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `caradvertisements`
--
ALTER TABLE `caradvertisements`
  ADD CONSTRAINT `fk_caradv_user` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `carapplications`
--
ALTER TABLE `carapplications`
  ADD CONSTRAINT `fk_carapp_caradv` FOREIGN KEY (`caradv_id`) REFERENCES `caradvertisements` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_carapp_user` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `fk_comment_thread` FOREIGN KEY (`thread_id`) REFERENCES `thread` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `peopleadvertisements`
--
ALTER TABLE `peopleadvertisements`
  ADD CONSTRAINT `fk_peopleadv_user` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `peopleapplications`
--
ALTER TABLE `peopleapplications`
  ADD CONSTRAINT `fk_peopleapp_peopleadv` FOREIGN KEY (`peopleadv_id`) REFERENCES `peopleadvertisements` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_peopleapp_user` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `thread`
--
ALTER TABLE `thread`
  ADD CONSTRAINT `fk_thread_section` FOREIGN KEY (`section_id`) REFERENCES `section` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
