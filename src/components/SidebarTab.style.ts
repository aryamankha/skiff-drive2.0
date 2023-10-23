import React from 'react'
import { sva } from '../../styled-system/css'
import { createStyleContext } from '../style-contexts'

export type SidebarTabProps = {
    status: 'Selected' | 'Inactive' | 'Highlighted',
    label: string,
    icon: React.ReactNode,
}

const SidebarTabStyles = sva({
    slots: ["root", "inbox", "content"],
    base: {
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            height: 'fit-content',
            padding: '0px 6px',
            width: '100%',
        },
        inbox: {
            fontSize: '15px',
            fontWeight: 300,
            lineHeight: '19.5px',
        },
        content: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '2px 5px 2px 9px',
            borderRadius: '6px',
            width: '100%',
            height: '32px',
        },
    }, 
    variants: {
        status: {
            Selected: {
                root: {
                    justifyContent: 'center',
                },
                inbox: {
                    color: 'rgb(255, 255, 255)',
                },
                content: {
                    backgroundColor: 'rgb(41, 41, 41)',
                },
            },
            Inactive: {
                root: {
                    justifyContent: 'flex-start',
                },
                inbox: {
                    color: 'rgb(149, 149, 149)',
                },
                content: {
                    backgroundColor: 'rgb(25, 25, 25)',
                },
            },
            Highlighted: {
                root: {
                    justifyContent: 'flex-start',
                },
                inbox: {
                    color: 'rgb(255, 255, 255)',
                },
                content: {
                    borderStyle: 'solid',
                    borderColor: 'rgb(51, 51, 51)',
                    borderWidth: '1px',
                    backgroundColor: 'rgb(41, 41, 41)',
                },
            },
        },
    }
})

const { withProvider, withContext } = createStyleContext(SidebarTabStyles)

const Root = withProvider("div", "root");

const Inbox = withContext("p", "inbox");

const Content = withContext("div", "content");

export const SidebarTab = { Root, Inbox, Content};
