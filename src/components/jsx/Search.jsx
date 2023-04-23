import Fuse from "fuse.js";
import { useState } from "react";

import { Input } from "antd";
import { baseUrl } from "/public/config.js";
const onSearch = (value) => console.log(value);

const options = {
  keys: ["frontmatter.title", "frontmatter.description", "frontmatter.slug"],
  includeMatches: true,
  minMatchCharLength: 2,
  threshold: 0.5,
};

function Search({ searchList }) {
  const [query, setQuery] = useState("");

  const fuse = new Fuse(searchList, options);
  const posts = fuse
    .search(query)
    .map((result) => result.item)
    .slice(0, 5);
  function handleOnSearch({ target = {} }) {
    const { value } = target;
    setQuery(value);
  }

  return (
    <>
      <h3 className="search-jsx text-3xl mb-5">Search</h3>
      <Input
        placeholder="Search posts"
        size="large"
        value={query}
        onChange={handleOnSearch}
      />

      {query.length > 1 && (
        <p className=" my-2">
          共查找到 {posts.length} 条关于'{query}'的搜索结果.
        </p>
      )}

      <ul>
        {posts &&
          posts.map((post) => (
            <li key={post.url}>
              <a
                className=" text-sky-500 hover:text-gray-600"
                href={`${baseUrl}${post.frontmatter.slug}`}
              >
                {post.frontmatter.title}
              </a>
              <p className=" text-xs text-gray-500">
                {post.frontmatter.description}
              </p>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Search;
