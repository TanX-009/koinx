import Panel from "@/components/background/Panel";
import Sub3Title from "@/components/ui/Sub3Title";
import React from "react";
import { IoIosInformationCircle } from "react-icons/io";
import InfoCard from "./components/InfoCard";
import styles from "./styles.module.css";
import Estimate from "./components/Estimate";
import Scroller from "@/systems/ui/Scroller";
import { RiNewspaperFill } from "react-icons/ri";
import { BsGraphUpArrow } from "react-icons/bs";

const cards = [
  {
    background: "var(--pri-light)",
    iconBackground: "var(--pri-dark)",
    icon: <RiNewspaperFill />,
    title:
      "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
  },
  {
    background: "var(--green-light)",
    iconBackground: "var(--green-dark)",
    icon: <BsGraphUpArrow />,
    title:
      "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
  },
  {
    background: "var(--green-light)",
    iconBackground: "var(--green-dark)",
    icon: <RiNewspaperFill />,
    title:
      "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
  },
];

export default function SentimentSection() {
  return (
    <Panel background="var(--pri-light)">
      <h3>Sentiment</h3>
      <Sub3Title>
        Key Events <IoIosInformationCircle />
      </Sub3Title>
      <div className={styles.scrollContainer}>
        <Scroller>
          {cards.map((card, index) => {
            return <InfoCard key={index} {...card} />;
          })}
        </Scroller>
      </div>
      <Sub3Title>
        Analyst Estimates <IoIosInformationCircle />
      </Sub3Title>
      <Estimate buy={76} hold={8} sell={16} />
    </Panel>
  );
}
