import React, { FC, useState } from "react";
import { TaskBar } from "../components/TaskBar";
import { DesktopIconGroup } from "../components/DesktopIconGroup";
import folderIcon from "../files/icons/Windows 2000 Closed Folder-6.png";
import internet from "../files/icons/Windows 2000 The Internet-2.png";
import computer from "../files/icons/Windows 2000 My Computer-3.png";
import { MyInformationWindow } from "../components/windows/MyInformationWindow";
import { FolderMenu } from "../components/windows/FolderMenu";
import {
  bookmarkIcons,
  languageIcons,
  myDocsIcons,
  projectIcons,
} from "../components/iconsFolder";

export const Desktop: FC = function () {
  const [openedWindows, setOpenedWindows] = useState<Array<string>>([]);
  const icons = [
    {
      text: "My Information",
      image: computer,
      onClick: (): void => {
        setOpenedWindows([...openedWindows, "my_information"]);
        return;
      },
    },
    {
      text: "Internet Explorer",
      image: internet,
      onClick: (): void => {
        window.open("https://www.spacejam.com/1996/", "_blank");
      },
    },
    {
      text: "My Documents",
      image: folderIcon,
      onClick: (): void => {
        setOpenedWindows([...openedWindows, "my_documents"]);
        return;
      },
    },
    {
      text: "Favorite Languages",
      image: folderIcon,
      onClick: (): void => {
        setOpenedWindows([...openedWindows, "my_languages"]);
        return;
      },
    },
    {
      text: "Projects",
      image: folderIcon,
      onClick: (): void => {
        setOpenedWindows([...openedWindows, "my_projects"]);
        return;
      },
    },
    {
      text: "Bookmarks",
      image: folderIcon,
      onClick: (): void => {
        setOpenedWindows([...openedWindows, "my_bookmarks"]);
        return;
      },
    },
  ];
  return (
    <>
      <DesktopIconGroup icons={icons} isFolder={false} />
      <TaskBar />
      <MyInformationWindow
        close={(): void =>
          setOpenedWindows(
            [...openedWindows].filter((window) => window !== "my_information")
          )
        }
        icon={computer}
        visible={openedWindows.includes("my_information")}
      />
      <FolderMenu
        icons={myDocsIcons}
        close={(): void =>
          setOpenedWindows(
            [...openedWindows].filter((window) => window !== "my_documents")
          )
        }
        title={"My Documents"}
        visible={openedWindows.includes("my_documents")}
      />
      <FolderMenu
        icons={languageIcons}
        close={(): void =>
          setOpenedWindows(
            [...openedWindows].filter((window) => window !== "my_languages")
          )
        }
        title={"Favorite Languages"}
        visible={openedWindows.includes("my_languages")}
      />
      <FolderMenu
        icons={projectIcons}
        close={(): void =>
          setOpenedWindows(
            [...openedWindows].filter((window) => window !== "my_projects")
          )
        }
        title={"My Projects"}
        visible={openedWindows.includes("my_projects")}
      />
      <FolderMenu
        icons={bookmarkIcons}
        close={(): void =>
          setOpenedWindows(
            [...openedWindows].filter((window) => window !== "my_bookmarks")
          )
        }
        title={"Bookmarks"}
        visible={openedWindows.includes("my_bookmarks")}
      />
    </>
  );
};

export default Desktop;
