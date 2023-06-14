import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/router";

const Editor = () => {
  const [value, setValue] = useState("");
  const router = useRouter();
  const { query } = router;
  console.log("Editor value", value, query);
  return (
    <div>
      <select>
        <option>one</option>
      </select>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        style={{ height: "100%", marginBottom: "2rem" }}
        modules={{
          toolbar: {
            container: [
              [
                { header: "1" },
                { header: "2" },
                { header: "3" },
                { header: "4" },
              ],
              ["blockquote", "code-block"],
              ["bold", "italic", "underline", "strike"],
              ["link", "image"],
              [{ list: "ordered" }, { list: "bullet" }],
              [{ script: "sub" }, { script: "super" }],
              [{ indent: "-1" }, { indent: "+1" }],
              [{ color: [] }, { background: [] }],
              [{ align: [] }], // Add text alignment options
              ["clean"],
            ],
          },
        }}
      />
      <button className="flex items-center w-fit m-auto border-2 border-red-200 bg-red-100 text-red-600 text-[1.5rem] px-1 py-2">
        {" "}
        Delete
      </button>
    </div>
  );
};

export default Editor;
