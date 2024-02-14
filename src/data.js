export const API = 'AIzaSyB2cdRs9NT7zPmWupkA-8iICNnzghIMU6I';

export const valueConverter = (value) => {
  if (value > 1000000) {
    return Math.floor(value / 1000000) + 'M';
  } else if (value > 1000) {
    return Math.floor(value / 1000) + 'K';
  } else {
    return value;
  }
};
