import { VideoCard } from "./VideoCard";

const VIDEOS = [
  {
    title: "PM Modi's reply to Motion of Thanks",
    author: "Narendra Modi",
    views: "10 Mn",
    timestamp: "2 hours ago",
    thumbnail: "./photo.jpg",
    profileimage: "./photo2.jpg",
  },
  {
    title: "PM Modi's reply to Motion of Thanks",
    author: "Narendra Modi",
    views: "10 Mn",
    timestamp: "2 hours ago",
    thumbnail: "./photo.jpg",
    profileimage: "./photo2.jpg",
  },
  {
    title: "PM Modi's reply to Motion of Thanks",
    author: "Narendra Modi",
    views: "10 Mn",
    timestamp: "2 hours ago",
    thumbnail: "./photo.jpg",
    profileimage: "./photo2.jpg",
  },
  {
    title: "PM Modi's reply to Motion of Thanks",
    author: "Narendra Modi",
    views: "10 Mn",
    timestamp: "2 hours ago",
    thumbnail: "./photo.jpg",
    profileimage: "./photo2.jpg",
  },
  {
    title: "PM Modi's reply to Motion of Thanks",
    author: "Narendra Modi",
    views: "10 Mn",
    timestamp: "2 hours ago",
    thumbnail: "./photo.jpg",
    profileimage: "./photo2.jpg",
  },
  {
    title: "PM Modi's reply to Motion of Thanks",
    author: "Narendra Modi",
    views: "10 Mn",
    timestamp: "2 hours ago",
    thumbnail: "./photo.jpg",
    profileimage: "./photo2.jpg",
  },
  {
    title: "PM Modi's reply to Motion of Thanks",
    author: "Narendra Modi",
    views: "10 Mn",
    timestamp: "2 hours ago",
    thumbnail: "./photo.jpg",
    profileimage: "./photo2.jpg",
  },
  {
    title: "PM Modi's reply to Motion of Thanks",
    author: "Narendra Modi",
    views: "10 Mn",
    timestamp: "2 hours ago",
    thumbnail: "./photo.jpg",
    profileimage: "./photo2.jpg",
  },
  {
    title: "PM Modi's reply to Motion of Thanks",
    author: "Narendra Modi",
    views: "10 Mn",
    timestamp: "2 hours ago",
    thumbnail: "./photo.jpg",
    profileimage: "./photo2.jpg",
  },
  {
    title: "PM Modi's reply to Motion of Thanks",
    author: "Narendra Modi",
    views: "10 Mn",
    timestamp: "2 hours ago",
    thumbnail: "./photo.jpg",
    profileimage: "./photo2.jpg",
  },
  {
    title: "PM Modi's reply to Motion of Thanks",
    author: "Narendra Modi",
    views: "10 Mn",
    timestamp: "2 hours ago",
    thumbnail: "./photo.jpg",
    profileimage: "./photo2.jpg",
  },
  {
    title: "PM Modi's reply to Motion of Thanks",
    author: "Narendra Modi",
    views: "10 Mn",
    timestamp: "2 hours ago",
    thumbnail: "./photo.jpg",
    profileimage: "./photo2.jpg",
  },
  {
    title: "PM Modi's reply to Motion of Thanks",
    author: "Narendra Modi",
    views: "10 Mn",
    timestamp: "2 hours ago",
    thumbnail: "./photo.jpg",
    profileimage: "./photo2.jpg",
  },
  {
    title: "PM Modi's reply to Motion of Thanks",
    author: "Narendra Modi",
    views: "10 Mn",
    timestamp: "2 hours ago",
    thumbnail: "./photo.jpg",
    profileimage: "./photo2.jpg",
  },
];

export function VideoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {VIDEOS.map((video) => (
        <div>
          <VideoCard
            title={video.title}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp}
            thumbnail={video.thumbnail}
            profileimage={video.profileimage}
          ></VideoCard>
        </div>
      ))}
    </div>
  );
}
