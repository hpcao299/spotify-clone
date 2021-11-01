const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Main Page Elements //

// For First Greetings
export const firstGreetingElement = $('.recent-playlist-first-greeting');

// For Opening User Options
export const userOptionElement = $('.js-user-btn');

// For Toast Message
export const nonUpdatedElements = $$('.js-no-updated');
export const nonSupportedElements = $$('.js-no-supported');
export const nonUpdatedInfo = $$('.js-non-updated-info')

// Header Element
export const headerElement = $('.content__header');

// //////////////////////////////////////////////////////////////////////////////////
// Playlist Options
export const playlistOptionWrapper = $('.js-playlist-options-wrapper')

// Playlist Like Button
export const playlistLikeBtn = $('.js-playlist-like-btn');

// Song Like Button
export const songLikeBtns = $$('.js-liked-btn');

// Header Play Button & Playlist Name
export const headerPlayBtn = $('.js-header-play-btn');
export const headerPlaylistName = $('.js-header-playlist-name');

// Song Element
export const songElement = $('.song');

// For Description see more / show less
export const playlistDescription = $('.js-playlist-description');
export const seeMoreBtn = $('.js-description-see-more');
export const showLessBtn = $('.js-description-show-less');

// //////////////////////////////////////////////////////////////////////////////////

// Audio Elements
export const audio = $('#audio');

// Audio Elements Options
export const playBtn = $$('.js-audio-play-btn');
export const previousBtn = $('.js-audio-previous')
export const previous15sBtn = $('.js-audio-previous-15s');
export const nextBtn = $('.js-audio-next');
export const next15sBtn = $('.js-audio-next-15s');
export const audioTimeRange = $('#js-song-range');
export const volumeBar = $('.player-volume-range');
export const volumeIconWrapper = $('.player-volume');

// Audio Time Control
export const audioCurrentTime = $('.js-song-currenttime');
export const audioDuration = $('.js-song-duration');
