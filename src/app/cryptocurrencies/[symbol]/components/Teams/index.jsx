import Panel from "@/components/background/Panel";
import React from "react";
import TeamsCard from "./components/TeamsCard";
import styles from "./styles.module.css";

export default function Teams() {
  return (
    <Panel>
      <div className={styles.teams}>
        <h3>Teams</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
          nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
          quam. Facilisis purus convallis quam augue.
        </p>
        <TeamsCard
          image={"/images/user1.png"}
          name={"John Smith"}
          designation={"Designation here"}
          description={
            "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
          }
        />
        <TeamsCard
          image={"/images/user2.png"}
          name={"Eliza Williams"}
          designation={"Designation here"}
          description={
            "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
          }
        />
        <TeamsCard
          image={"/images/user3.png"}
          name={"John Smith"}
          designation={"Designation here"}
          description={
            "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
          }
        />
      </div>
    </Panel>
  );
}
