import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/router";
import { useAuth } from "../context/context";

// import img1 from

const Editor = () => {
  const [value, setValue] = useState("");
  const { topics, deleteTopics } = useAuth();
  const [selectedTopics, setSelectedTopics] = useState({});
  const [seletedTone, setSelectedTone] = useState(0);
  const [editorGenerated, setEditorGenerated] = useState(false);
  const router = useRouter();
  const { query } = router;
  // console.log("Editor value", value, query?.id);
  // console.log(topics.filter((item) => item?.id == query?.id));

  useEffect(() => {
    setSelectedTopics(topics?.filter((item) => item?.id == query?.id)[0]);
    const tone = [
      `<h1 class="ql-indent-5">${
        selectedTopics?.title
      }</h1><p class="ql-indent-5">....................................................................................................</p><h2 class="ql-indent-8"><img src=${"/empty.jpg"}></h2>${selectedTopics?.keywords?.map(
        (item) => {
          return `<p class="ql-indent-5"><br></p><h2 class="ql-indent-2">${item}</h2><p class="ql-indent-5">...................</p><p class="ql-indent-5"><br></p>`;
        }
      )}<p class="ql-indent-5"><br></p></br><h2 class="ql-indent-2">    Conclusion:</h2>`,
      `<h1 class="ql-indent-5">${
        selectedTopics?.title
      }</h1><p class="ql-indent-5">....................................................................................................</p><h2 class="ql-indent-8"><br></h2>
      ${selectedTopics?.keywords?.map((item, index) => {
        return `<h2 class="ql-indent-2">${
          index + 1
        }) ${item}</h2><p class="ql-indent-5">...................</p><p class="ql-indent-5"><br></p>`;
      })}
      <p class="ql-indent-5"><img src=${"/empty2.png"}></p><p class="ql-indent-5"><br></p><h2 class="ql-indent-2">    Conclusion:</h2><p class="ql-indent-5"><br></p><p class="ql-indent-5"><br></p>`,
    ];
    // );
    setValue(tone[seletedTone]);
  }, [selectedTopics, seletedTone, editorGenerated]);
  return (
    <div className="p-4">
      <div className="flex text-[1.2rem] items-center flex-col w-fit m-auto">
        <div className="flex items-center">
          <p>Select Tone:</p>
          <select
            className="ml-[1rem] border-2 border-orange-600 mb-[10px] mt-[10px]"
            onChange={(e) => {
              setSelectedTone(e.target?.value);
            }}
            value={seletedTone}
          >
            <option name="rustic" value="0">
              Rustic
            </option>
            <option name="modren" value="1">
              Modern
            </option>
          </select>
        </div>
        <div className="flex justify-between w-full">
          <button
            className="border-2 border-green-200 bg-green-100 text-emerald-600 text-[1.5rem] px-1 py-2"
            onClick={() => {
              setEditorGenerated(true);
            }}
          >
            Generate
          </button>
          <button
            className="border-2 border-red-200 bg-red-100 text-red-600 text-[1.5rem] px-1 py-2"
            onClick={() => {
              deleteTopics(query?.id);
              router.push("/");
            }}
          >
            {" "}
            Delete
          </button>
        </div>
      </div>

      {editorGenerated && (
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          style={{ height: "100%", marginBottom: "2rem", marginTop: "2rem" }}
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
      )}
    </div>
  );
};

export default Editor;
