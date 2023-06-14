import React, { useContext, useState, useEffect } from "react";
export const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [show, setShow] = useState(false);
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    setTopics([
      {
        id: "1",
        title:
          "The Importance of Establishing a Strong Online Presence for Small Business",
        keywords: [
          "online presence",
          "small businesses",
          "digital marketing",
          "branding",
        ],
      },
      {
        id: "2",
        title:
          "How Fast Turnaround Times in Logo and Website Design Benefits Your Business",
        keywords: [
          "fast turnaround",
          "logo design",
          "website design",
          "branding",
        ],
      },
      {
        id: "3",
        title: "Afforadable Branding solutions for Startups and Entrepreneurs",
        keywords: [
          "affordable branding",
          "startups",
          "entrepreneurs",
          "logo design",
          "website design",
        ],
      },
      {
        id: "4",
        title:
          "The Benifits of Comprehensive Branding Services for Small to Medium-sized Businesses",
        keywords: [
          "comprehensive branding",
          "small business",
          "logo design",
          "website design",
          "social media management",
        ],
      },
      {
        id: "5",
        title:
          "Expert Tips for Choosing Right Digital Marketing Agency for your Business",
        keywords: [
          "digital marketing agency",
          "tips",
          "branding",
          "website design",
          "social media management",
        ],
      },
    ]);
  }, []);

  function onClose() {
    setShow(false);
  }
  function open() {
    setShow(true);
  }
  function addTopics(topic) {
    setTopics((prev) => [...prev, topic]);
  }
  const value = {
    show,
    onClose,
    open,
    addTopics,
    topics,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
