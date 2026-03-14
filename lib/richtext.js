export function renderRichText(doc) {
  if (!doc || typeof doc === "string") return doc;
  if (doc.type === "doc" && doc.content) {
    return doc.content.map((block, i) => {
      if (block.type === "paragraph" && block.content) {
        const text = block.content.map(c => c.text || "").join("");
        return <p key={i}>{text}</p>;
      }
      return null;
    });
  }
  return null;
}
