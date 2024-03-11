import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { mainTheme } from 'src/theme';
import { ThemeProvider } from 'styled-components';
import { beforeEach, expect, test } from 'vitest';
import { FavsContextProvider } from '@contexts/FavsContext';
import ComicsCardList from './ComicsCardList';

const comicsMock = [
  {
    id: 27649,
    digitalId: 0,
    title: 'Incredible Hulks (2010) #604 (DJURDJEVIC 70TH ANNIVERSARY VARIANT)',
    issueNumber: 604,
    variantDescription: 'DJURDJEVIC 70TH ANNIVERSARY VARIANT',
    description: '',
    modified: '-0001-11-30T00:00:00-0500',
    isbn: '',
    upc: '5960606637-60421',
    diamondCode: '',
    ean: '',
    issn: '',
    format: 'Comic',
    pageCount: 40,
    textObjects: [
      {
        type: 'issue_solicit_text',
        language: 'en-us',
        text: "After picking fights with the Juggernaut, Norman Osborn, and the Wolverine clan, the most insane father and son team in the Marvel Universe might actually be bonding.  But everything's about to blow wide open for Bruce Banner and his big, green, barbarian son Skaar when one of the Hulk's greatest enemies brings back the most important villainess Bruce Banner's ever faced.  Who is the Harpy?  And whose side will Banner take when she and Skaar meet sword to claw in a gamma-powered deathmatch?  Stone might bleed, feathers might fly, and hearts might break in the highest stakes battle yet for Banner and Son! Plus, The Savage SHE-HULK continues her quest to find\r\nJennifer Walters in a back-up by Fred Van Lente and\r\nMichael Ryan!\r\nRated A ...$3.99",
      },
    ],
    resourceURI: 'http://gateway.marvel.com/v1/public/comics/27649',
    urls: [
      {
        type: 'detail',
        url: 'http://marvel.com/comics/issue/27649/incredible_hulks_2010_604_djurdjevic_70th_anniversary_variant/djurdjevic_70th_anniversary_variant?utm_campaign=apiRef&utm_source=d20131bc7707c02324ec158386bf2711',
      },
    ],
    series: {
      resourceURI: 'http://gateway.marvel.com/v1/public/series/8842',
      name: 'Incredible Hulks (2010 - 2011)',
    },
    variants: [
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/27648',
        name: 'Incredible Hulks (2010) #604',
      },
    ],
    collections: [],
    collectedIssues: [],
    dates: [
      {
        type: 'onsaleDate',
        date: '2029-12-31T00:00:00-0500',
      },
      {
        type: 'focDate',
        date: '2009-10-29T00:00:00-0400',
      },
    ],
    prices: [
      {
        type: 'printPrice',
        price: 3.99,
      },
    ],
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/d0/4badb223f33c9',
      extension: 'jpg',
    },
    images: [
      {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/d0/4badb223f33c9',
        extension: 'jpg',
      },
    ],
    creators: {
      available: 5,
      collectionURI: 'http://gateway.marvel.com/v1/public/comics/27649/creators',
      items: [
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/creators/10288',
          name: 'Marko Djurdjevic',
          role: 'colorist',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/creators/1082',
          name: 'Ariel Olivetti',
          role: 'penciller',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/creators/434',
          name: 'Michael Ryan',
          role: 'penciller',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/creators/536',
          name: 'Greg Pak',
          role: 'writer',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/creators/7894',
          name: 'Fred Van Lente',
          role: 'writer',
        },
      ],
      returned: 5,
    },
    characters: {
      available: 1,
      collectionURI: 'http://gateway.marvel.com/v1/public/comics/27649/characters',
      items: [
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009351',
          name: 'Hulk',
        },
      ],
      returned: 1,
    },
    stories: {
      available: 2,
      collectionURI: 'http://gateway.marvel.com/v1/public/comics/27649/stories',
      items: [
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/60567',
          name: 'Cover #60567',
          type: 'cover',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/60568',
          name: 'Interior #60568',
          type: 'interiorStory',
        },
      ],
      returned: 2,
    },
    events: {
      available: 0,
      collectionURI: 'http://gateway.marvel.com/v1/public/comics/27649/events',
      items: [],
      returned: 0,
    },
  },
  {
    id: 183,
    digitalId: 0,
    title: 'Startling Stories: The Incorrigible Hulk (2004) #1',
    issueNumber: 1,
    variantDescription: '',
    description: '',
    modified: '-0001-11-30T00:00:00-0500',
    isbn: '',
    upc: '5960605429-00811',
    diamondCode: '',
    ean: '',
    issn: '',
    format: 'Comic',
    pageCount: 0,
    textObjects: [
      {
        type: 'issue_solicit_text',
        language: 'en-us',
        text: 'For Doctor Bruce Banner life is anything but normal. But what happens when two women get between him and his alter ego, the Incorrigible Hulk? Hulk confused! \r\nIndy superstar Peter Bagge (THE MEGALOMANIACAL SPIDER-MAN) takes a satirical jab at the Hulk mythos with a tale of dames, debauchery and destruction.\r\n32 PGS./MARVEL PSR...$2.99',
      },
    ],
    resourceURI: 'http://gateway.marvel.com/v1/public/comics/183',
    urls: [
      {
        type: 'detail',
        url: 'http://marvel.com/comics/issue/183/startling_stories_the_incorrigible_hulk_2004_1?utm_campaign=apiRef&utm_source=d20131bc7707c02324ec158386bf2711',
      },
    ],
    series: {
      resourceURI: 'http://gateway.marvel.com/v1/public/series/565',
      name: 'Startling Stories: The Incorrigible Hulk (2004)',
    },
    variants: [],
    collections: [],
    collectedIssues: [],
    dates: [
      {
        type: 'onsaleDate',
        date: '2029-12-31T00:00:00-0500',
      },
      {
        type: 'focDate',
        date: '-0001-11-30T00:00:00-0500',
      },
    ],
    prices: [
      {
        type: 'printPrice',
        price: 2.99,
      },
    ],
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
      extension: 'jpg',
    },
    images: [],
    creators: {
      available: 1,
      collectionURI: 'http://gateway.marvel.com/v1/public/comics/183/creators',
      items: [
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/creators/6291',
          name: 'Peter Bagge',
          role: 'penciller (cover)',
        },
      ],
      returned: 1,
    },
    characters: {
      available: 1,
      collectionURI: 'http://gateway.marvel.com/v1/public/comics/183/characters',
      items: [
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009351',
          name: 'Hulk',
        },
      ],
      returned: 1,
    },
    stories: {
      available: 2,
      collectionURI: 'http://gateway.marvel.com/v1/public/comics/183/stories',
      items: [
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/1891',
          name: 'Cover #1891',
          type: 'cover',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/1892',
          name: 'Interior #1892',
          type: 'interiorStory',
        },
      ],
      returned: 2,
    },
    events: {
      available: 0,
      collectionURI: 'http://gateway.marvel.com/v1/public/comics/183/events',
      items: [],
      returned: 0,
    },
  },
  {
    id: 109662,
    digitalId: 0,
    title: 'Incredible Hulk (2023) #11',
    issueNumber: 11,
    variantDescription: '',
    description:
      "HULK SMASHES FROZEN CHARLOTTE ONCE AND FOR ALL! The monstrous, ethereal, demonic/angelic Frozen Charlotte has plagued New Orleans for centuries, and it's high time to put a stop to it. And Hulk is just the guy to do it. Plus, Eldest makes another tempting offer to Bruce Banner…",
    modified: '2024-02-28T12:22:34-0500',
    isbn: '',
    upc: '75960620663601111',
    diamondCode: '',
    ean: '',
    issn: '',
    format: 'Comic',
    pageCount: 32,
    textObjects: [],
    resourceURI: 'http://gateway.marvel.com/v1/public/comics/109662',
    urls: [
      {
        type: 'detail',
        url: 'http://marvel.com/comics/issue/109662/incredible_hulk_2023_11?utm_campaign=apiRef&utm_source=d20131bc7707c02324ec158386bf2711',
      },
    ],
    series: {
      resourceURI: 'http://gateway.marvel.com/v1/public/series/37422',
      name: 'Incredible Hulk (2023 - Present)',
    },
    variants: [],
    collections: [],
    collectedIssues: [],
    dates: [
      {
        type: 'onsaleDate',
        date: '2024-04-10T00:00:00-0400',
      },
      {
        type: 'focDate',
        date: '2024-03-11T00:00:00-0400',
      },
    ],
    prices: [
      {
        type: 'printPrice',
        price: 3.99,
      },
    ],
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/4/00/65b268a6a6686',
      extension: 'jpg',
    },
    images: [
      {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/4/00/65b268a6a6686',
        extension: 'jpg',
      },
    ],
    creators: {
      available: 6,
      collectionURI: 'http://gateway.marvel.com/v1/public/comics/109662/creators',
      items: [
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/creators/14561',
          name: 'Daniel Earls',
          role: 'inker',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/creators/13750',
          name: 'Phillip Kennedy Johnson',
          role: 'writer',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/creators/4989',
          name: 'Nic Klein',
          role: 'penciler (cover)',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/creators/12376',
          name: 'Wilson Moss',
          role: 'editor',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/creators/12980',
          name: 'Vc Cory Petit',
          role: 'letterer',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/creators/10279',
          name: 'Matthew Wilson',
          role: 'colorist',
        },
      ],
      returned: 6,
    },
    characters: {
      available: 1,
      collectionURI: 'http://gateway.marvel.com/v1/public/comics/109662/characters',
      items: [
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009351',
          name: 'Hulk',
        },
      ],
      returned: 1,
    },
    stories: {
      available: 2,
      collectionURI: 'http://gateway.marvel.com/v1/public/comics/109662/stories',
      items: [
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/240450',
          name: 'cover from Incredible Hulk (2023) #11',
          type: 'cover',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/240451',
          name: 'story from Incredible Hulk (2023) #11',
          type: 'interiorStory',
        },
      ],
      returned: 2,
    },
    events: {
      available: 0,
      collectionURI: 'http://gateway.marvel.com/v1/public/comics/109662/events',
      items: [],
      returned: 0,
    },
  },
  {
    id: 113503,
    digitalId: 0,
    title: 'Giant-Size Hulk (2024) #1',
    issueNumber: 1,
    variantDescription: '',
    description:
      'THE ONLY WAY TO CONTAIN THE HULK…IS IN A GIANT-SIZE STORY! Riding the rails is no walk in the park - especially for the INCREDIBLE HULK! And particularly when something - no, someONE - has been stolen from him by a gruesome new threat with evil machinations in mind. Clear the tracks - the HULK is coming through!!! PLUS: Includes a reprinting of INCREDIBLE HULK #372 by Peter David and Dale Keown, featuring high-speed action and heartrending drama in a Hulk tale for the ages!',
    modified: '2024-02-28T12:04:19-0500',
    isbn: '',
    upc: '75960620845600111',
    diamondCode: '',
    ean: '',
    issn: '',
    format: 'Comic',
    pageCount: 48,
    textObjects: [],
    resourceURI: 'http://gateway.marvel.com/v1/public/comics/113503',
    urls: [
      {
        type: 'detail',
        url: 'http://marvel.com/comics/issue/113503/giant-size_hulk_2024_1?utm_campaign=apiRef&utm_source=d20131bc7707c02324ec158386bf2711',
      },
    ],
    series: {
      resourceURI: 'http://gateway.marvel.com/v1/public/series/38954',
      name: 'Giant-Size Hulk (2024 - Present)',
    },
    variants: [],
    collections: [],
    collectedIssues: [],
    dates: [
      {
        type: 'onsaleDate',
        date: '2024-04-03T00:00:00-0400',
      },
      {
        type: 'focDate',
        date: '2024-03-04T00:00:00-0500',
      },
    ],
    prices: [
      {
        type: 'printPrice',
        price: 6.99,
      },
    ],
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/d0/65b268a4c4ba0',
      extension: 'jpg',
    },
    images: [
      {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/d0/65b268a4c4ba0',
        extension: 'jpg',
      },
    ],
    creators: {
      available: 6,
      collectionURI: 'http://gateway.marvel.com/v1/public/comics/113503/creators',
      items: [
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/creators/13523',
          name: 'Annalise Bissa',
          role: 'editor',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/creators/12815',
          name: 'Andrea Broccardo',
          role: 'inker',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/creators/339',
          name: 'Bryan Hitch',
          role: 'penciler (cover)',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/creators/13750',
          name: 'Phillip Kennedy Johnson',
          role: 'writer',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/creators/12980',
          name: 'Vc Cory Petit',
          role: 'letterer',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/creators/14265',
          name: 'Alex Sinclair',
          role: 'colorist (cover)',
        },
      ],
      returned: 6,
    },
    characters: {
      available: 1,
      collectionURI: 'http://gateway.marvel.com/v1/public/comics/113503/characters',
      items: [
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009351',
          name: 'Hulk',
        },
      ],
      returned: 1,
    },
    stories: {
      available: 2,
      collectionURI: 'http://gateway.marvel.com/v1/public/comics/113503/stories',
      items: [
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/248219',
          name: 'cover from Giant-Size: TBD D (2024) #1',
          type: 'cover',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/248220',
          name: 'story from Giant-Size: TBD D (2024) #1',
          type: 'interiorStory',
        },
      ],
      returned: 2,
    },
    events: {
      available: 0,
      collectionURI: 'http://gateway.marvel.com/v1/public/comics/113503/events',
      items: [],
      returned: 0,
    },
  },
];

beforeEach(() => {
  render(
    <ThemeProvider theme={mainTheme}>
      <BrowserRouter>
        <FavsContextProvider>
          <ComicsCardList comics={comicsMock} />
        </FavsContextProvider>
      </BrowserRouter>
    </ThemeProvider>,
  );
});

test('Renders Comics list component', async () => {
  expect(await screen.findAllByText('Incredible Hulk (2023) #11')).not.toBeNull();
});
