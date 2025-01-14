import React, { useEffect, useState } from "react";
import axios from "axios";
import MoodFilter from "./MoodFilter";
import ContentList from "./ContentList";
import NavBar from "./NavBar";
import Footer from "./Footer";
const ContentContainer = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [animeList, setAnimeList] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedMood, setSelectedMood] = useState("");
  const [hiddenAnime, setHiddenAnime] = useState(new Set());
  const [showAnimeContent, setShowAnimeContent] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/anime")
      .then((response) => setGenres(response.data.data))
      .catch((err) => console.error(err, "failed to fetch anime"));
  }, []);

  //feetch anime FileList

  useEffect(() => {
    setError(null);
    setLoading(true);
    axios
      .get("https://api.jikan.moe/v4/anime", {
        params: {
          order_by: "popularity",
          sort: "asc",
          limit: 1,
          min_score: 7.5,
          page,
          unapproved: false,
          ...(selectedGenres.includes("Highrated Anime this year")
            ? { start_date: `${new Date().getFullYear()}-01-01` }
            : selectedGenres.length > 0
            ? { genres: selectedGenres.join(",") }
            : {}),
        },
      })
      .then((response) => setAnimeList(response.data.data))
      .catch((err) => console.error("Failed to fetch AnimeList:", err))
      .finally(() => setLoading(false));
  }, [page, selectedGenres]);

  const toggleGenre = (moodName, genreName) => {
    setSelectedGenres((prev) => {
      if (genreName === "Highrated Anime this year") {
        return prev.includes(genreName)
          ? prev.filter((item) => item !== genreName)
          : [...prev, genreName];
      }
      const genreId = genres.find((genre) => genre.name === genreName)?.mal_id;
      return genreId
        ? prev.includes(genreId)
          ? prev.filter((id) => id !== genreId)
          : [...prev, genreId]
        : prev;
    });
    setPage(1);
    setShowAnimeContent(true);
    setSelectedMood(moodName);
  };

  return (
    <>
    <NavBar  onBackClick={handleBackButtonClick} selectedMood={selectedMood}/>
      {!showAnimeContent && (
        <MoodFilter
          selectedGenre={selectedGenres}
          selectedMood={selectedMood}
        />
      )}
      {showAnimeContent && (
        <>
          <ContentList
            animeList={animeList}
            Loading={loading}
            error={error}
            page={page}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            hiddenAnime={hiddenAnime}
            handleHideClick={handleHideClick}
          />
        </>
      )}
      <Footer />

    </>
  );
};

export default ContentContainer;
