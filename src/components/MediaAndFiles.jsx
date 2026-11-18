import { useMemo, useState } from "react";
import {
  File,
  FileText,
  Grid2X2,
  Image,
  List,
  Search,
  Video,
} from "lucide-react";

import "../CSS/mediaFiles.css";

const categories = ["All files", "Images", "Videos", "Documents", "Others"];

const storedFiles = [
  {
    name: "Weekend getaway.jpg",
    category: "Images",
    size: "2.4 MB",
    date: "Today",
    kind: "image",
    color: "cyan",
  },
  {
    name: "Project preview.mp4",
    category: "Videos",
    size: "48.2 MB",
    date: "Yesterday",
    kind: "video",
    color: "violet",
  },
  {
    name: "Meeting notes.pdf",
    category: "Documents",
    size: "840 KB",
    date: "Nov 14, 2026",
    kind: "document",
    color: "orange",
  },
  {
    name: "Design references.png",
    category: "Images",
    size: "3.1 MB",
    date: "Nov 12, 2026",
    kind: "image",
    color: "pink",
  },
  {
    name: "Voice message.mp3",
    category: "Others",
    size: "1.8 MB",
    date: "Nov 10, 2026",
    kind: "other",
    color: "green",
  },
  {
    name: "Trip itinerary.docx",
    category: "Documents",
    size: "256 KB",
    date: "Nov 8, 2026",
    kind: "document",
    color: "blue",
  },
];

const fileIcons = {
  image: Image,
  video: Video,
  document: FileText,
  other: File,
};

const MediaAndFiles = () => {
  const [activeCategory, setActiveCategory] = useState("All files");
  const [search, setSearch] = useState("");
  const [view, setView] = useState("grid");

  const visibleFiles = useMemo(() => {
    const query = search.trim().toLowerCase();

    return storedFiles.filter((file) => {
      const matchesCategory =
        activeCategory === "All files" || file.category === activeCategory;
      const matchesSearch =
        !query ||
        file.name.toLowerCase().includes(query) ||
        file.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <section className="media-page">
      <header className="media-header">
        <div>
          <p className="media-eyebrow">Your library</p>
          <h1 className="media-title">Media &amp; Files</h1>
          <p className="media-description">
            A home for the photos, videos, and files you share.
          </p>
        </div>
        <div className="media-total">
          <span className="media-total-icon">
            <File size={18} aria-hidden="true" />
          </span>
          <span>
            <strong>{storedFiles.length} files</strong>
            <small>in your library</small>
          </span>
        </div>
      </header>

      <section className="media-storage-card" aria-label="Storage usage">
        <div className="media-storage-top">
          <div className="media-storage-icon">
            <File size={20} aria-hidden="true" />
          </div>
          <div className="media-storage-copy">
            <h2>Storage</h2>
            <p>Keep track of your shared files.</p>
          </div>
          <p className="media-storage-amount">
            <strong>2.6 GB</strong> <span>of 10 GB used</span>
          </p>
        </div>
        <div
          className="media-storage-progress"
          role="progressbar"
          aria-label="Storage used"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={26}
        >
          <span />
        </div>
        <div className="media-storage-legend">
          <span><i className="media-legend-images" /> Images</span>
          <span><i className="media-legend-videos" /> Videos</span>
          <span><i className="media-legend-files" /> Files</span>
          <span className="media-storage-free">7.4 GB available</span>
        </div>
      </section>

      <section className="media-library">
        <div className="media-library-heading">
          <div>
            <h2>Your files</h2>
            <p>Browse everything you have shared.</p>
          </div>
          <label className="media-search">
            <Search size={17} aria-hidden="true" />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search files"
              aria-label="Search files"
            />
          </label>
        </div>

        <div className="media-toolbar">
          <div className="media-category-list" aria-label="Filter by file type">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={`media-category ${
                  activeCategory === category ? "is-active" : ""
                }`}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="media-view-switch" role="group" aria-label="File layout">
            <button
              type="button"
              className={view === "grid" ? "is-active" : ""}
              aria-label="Grid view"
              aria-pressed={view === "grid"}
              onClick={() => setView("grid")}
            >
              <Grid2X2 size={17} aria-hidden="true" />
            </button>
            <button
              type="button"
              className={view === "list" ? "is-active" : ""}
              aria-label="List view"
              aria-pressed={view === "list"}
              onClick={() => setView("list")}
            >
              <List size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        {visibleFiles.length > 0 ? (
          <div className={`media-file-grid ${view === "list" ? "is-list" : ""}`}>
            {visibleFiles.map((file) => {
              const Icon = fileIcons[file.kind];

              return (
                <article className="media-file-card" key={file.name}>
                  <div className={`media-file-preview is-${file.color}`}>
                    <span className="media-preview-icon">
                      <Icon size={28} strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <span className="media-file-type">{file.category}</span>
                  </div>
                  <div className="media-file-info">
                    <div className="media-file-name-wrap">
                      <h3 title={file.name}>{file.name}</h3>
                      <p>{file.size}</p>
                    </div>
                    <time>{file.date}</time>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="media-empty-state">
            <span><Search size={22} aria-hidden="true" /></span>
            <h3>No files found</h3>
            <p>Try a different search or choose another file category.</p>
          </div>
        )}
      </section>
    </section>
  );
};

export default MediaAndFiles;
