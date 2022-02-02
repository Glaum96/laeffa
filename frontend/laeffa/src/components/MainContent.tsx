import { HomeTab } from "./HomeTab";
import { KanyeTab } from "./KanyeTab";
import { MemeTab } from "./MemeTab";
import { ChuckNorrisTab } from "./ChuckNorrisTab";
import { DadJokeTab } from "./DadJokeTab";
import { QuotesTab } from "./Quotes";
import { VingeSpennTab } from "./VingeSpennTab";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export function MainContent() {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Home</Tab>
          <Tab>Quotes</Tab>
          <Tab>Kanye Be$t</Tab>
          <Tab>C.N.</Tab>
          <Tab>Hello, Hungry</Tab>
          <Tab>Meme</Tab>
          <Tab>Secret</Tab>
        </TabList>
        <TabPanel>
          <HomeTab />
        </TabPanel>
        <TabPanel>
          <QuotesTab />
        </TabPanel>
        <TabPanel>
          <KanyeTab />
        </TabPanel>
        <TabPanel>
          <ChuckNorrisTab />
        </TabPanel>
        <TabPanel>
          <DadJokeTab />
        </TabPanel>
        <TabPanel>
          <MemeTab />
        </TabPanel>
        <TabPanel>
          <VingeSpennTab />
        </TabPanel>
      </Tabs>
    </div>
  );
}
