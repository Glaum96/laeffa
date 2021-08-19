import React from 'react'
import { KanyeTab } from './KanyeTab';
import { MemeTab } from './MemeTab';
import { ChuckNorrisTab } from './ChuckNorrisTab';
import { DadJokeTab } from './DadJokeTab';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export function MainContent() {
    
    return (
        <div >
            <Tabs>
                <TabList>
                    <Tab>Kanye Be$t</Tab>
                    <Tab>C.N.</Tab>
                    <Tab>Hello, Hungry</Tab>
                    <Tab>Meme</Tab>
                </TabList>

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
            </Tabs>
        </div>
    )
}
