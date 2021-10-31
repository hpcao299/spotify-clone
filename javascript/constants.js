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
