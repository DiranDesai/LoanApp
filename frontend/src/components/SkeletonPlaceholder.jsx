import React from "react";

function SkeletonPlaceholder() {
  return (
    <div className="skeleton-container">
      <div className="skeleton-header">
        <div className="skeleton-avatar"></div>
        <div className="skeleton-lines">
          <div className="skeleton-line short"></div>
          <div className="skeleton-line long"></div>
        </div>
      </div>

      <div className="skeleton-card large"></div>

      <div className="skeleton-actions">
        <div className="skeleton-icon"></div>
        <div className="skeleton-icon"></div>
        <div className="skeleton-icon"></div>
      </div>

      <div className="skeleton-category">
        <div className="skeleton-box"></div>
        <div className="skeleton-box"></div>
      </div>
    </div>
  );
}

export default SkeletonPlaceholder;
