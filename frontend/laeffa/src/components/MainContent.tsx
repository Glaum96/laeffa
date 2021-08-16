import React from 'react'
import { KanyeTab } from './KanyeTab';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export function MainContent() {
    
    return (
        <div >
            <Tabs>
                <TabList>
                    <Tab>Kanye Be$t</Tab>
                    <Tab>Title 2</Tab>
                </TabList>

                <TabPanel>
                    <KanyeTab />
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}
