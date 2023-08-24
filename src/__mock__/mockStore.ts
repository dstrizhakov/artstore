import { ICart } from '../store/reducers/cart.slice';

export const mockProducts = {
  items: [
    {
      id: '0cf27560-a54c-416f-97cc-1994fc1f1e66',
      version: 19,
      versionModifiedAt: '2023-08-13T08:58:53.499Z',
      lastMessageSequenceNumber: 7,
      createdAt: '2023-08-05T08:14:31.744Z',
      lastModifiedAt: '2023-08-13T08:58:53.499Z',
      lastModifiedBy: {
        isPlatformClient: true,
        user: { typeId: 'user', id: '74af79e9-6dae-4e3d-a11c-0d4099291006' },
      },
      createdBy: { isPlatformClient: true, user: { typeId: 'user', id: '74af79e9-6dae-4e3d-a11c-0d4099291006' } },
      productType: { typeId: 'product-type', id: 'ec28cb5a-2e92-4c19-a4ac-b1c2704e9e67' },
      masterData: {
        current: {
          name: { 'en-US': 'Spring Flowers original oil painting on canvas garden artwork' },
          description: {
            'en-US':
              'Original oil painting on stretched canvas "Fireflies of Spring".\n\nPainting size: 18x24 inches (45x60 cm).\n\nSpring Flowers original oil painting on canvas garden artwork white anemones & pink tulips floral landscape wall art\n\nOn the front and back of the painting is the author\'s signature.\n\nThis painting will be sent STRETCHED, READY TO HANG\n\nPACKING AND SHIPPING POLICY\n- I ship out your paintings within 2 business days after I receive your payment\n- The Painting will be carefully packaged\n- Shipped with tracking number',
          },
          categories: [{ typeId: 'category', id: '4dad0f23-a694-4b4c-b2e8-26019b17e899' }],
          categoryOrderHints: {},
          slug: { 'en-US': 'some-artwork-template' },
          metaTitle: { 'en-US': '' },
          metaDescription: { 'en-US': '' },
          masterVariant: {
            id: 1,
            prices: [],
            images: [
              {
                url: 'https://d00cb446ab43a070ee45-65a4a7d498d3de1f230ce17f2863b2e9.ssl.cf1.rackcdn.com/DSC_1493-j5M7f8zA.jpg',
                dimensions: { w: 1024, h: 763 },
              },
            ],
            attributes: [
              { name: 'size', value: '20x30 cm' },
              { name: 'availability', value: true },
              { name: 'price', value: 100 },
            ],
            assets: [],
          },
          variants: [],
          searchKeywords: { 'en-US': [{ text: 'artwork' }, { text: 'oil' }, { text: 'canvas' }] },
        },
        staged: {
          name: { 'en-US': 'Spring Flowers original oil painting on canvas garden artwork' },
          description: {
            'en-US':
              'Original oil painting on stretched canvas "Fireflies of Spring".\n\nPainting size: 18x24 inches (45x60 cm).\n\nSpring Flowers original oil painting on canvas garden artwork white anemones & pink tulips floral landscape wall art\n\nOn the front and back of the painting is the author\'s signature.\n\nThis painting will be sent STRETCHED, READY TO HANG\n\nPACKING AND SHIPPING POLICY\n- I ship out your paintings within 2 business days after I receive your payment\n- The Painting will be carefully packaged\n- Shipped with tracking number',
          },
          categories: [{ typeId: 'category', id: '4dad0f23-a694-4b4c-b2e8-26019b17e899' }],
          categoryOrderHints: {},
          slug: { 'en-US': 'some-artwork-template' },
          metaTitle: { 'en-US': '' },
          metaDescription: { 'en-US': '' },
          masterVariant: {
            id: 1,
            prices: [
              {
                id: '0ca7017a-eab5-404c-93e8-8106de68f226',
                value: { type: 'centPrecision', currencyCode: 'USD', centAmount: 12300, fractionDigits: 2 },
                key: '123',
              },
            ],
            images: [
              {
                url: 'https://d00cb446ab43a070ee45-65a4a7d498d3de1f230ce17f2863b2e9.ssl.cf1.rackcdn.com/DSC_1493-j5M7f8zA.jpg',
                dimensions: { w: 1024, h: 763 },
              },
            ],
            attributes: [
              { name: 'size', value: '20x30 cm' },
              { name: 'availability', value: true },
              { name: 'price', value: 100 },
            ],
            assets: [],
          },
          variants: [],
          searchKeywords: { 'en-US': [{ text: 'artwork' }, { text: 'oil' }, { text: 'canvas' }] },
        },
        published: true,
        hasStagedChanges: true,
      },
      key: '1',
      priceMode: 'Standalone',
      lastVariantId: 1,
    },
    {
      id: '774b937a-7d07-47d5-86ca-f4898f85a272',
      version: 13,
      versionModifiedAt: '2023-08-13T08:59:26.021Z',
      lastMessageSequenceNumber: 5,
      createdAt: '2023-08-05T08:41:06.819Z',
      lastModifiedAt: '2023-08-13T08:59:26.021Z',
      lastModifiedBy: {
        isPlatformClient: true,
        user: { typeId: 'user', id: '74af79e9-6dae-4e3d-a11c-0d4099291006' },
      },
      createdBy: { isPlatformClient: true, user: { typeId: 'user', id: '74af79e9-6dae-4e3d-a11c-0d4099291006' } },
      productType: { typeId: 'product-type', id: 'ec28cb5a-2e92-4c19-a4ac-b1c2704e9e67' },
      masterData: {
        current: {
          name: {
            'en-US':
              'Lotus flower original oil painting pond flowers art pink lotus artwork floral landscape impressionism impasto wall art',
          },
          description: {
            'en-US':
              "Pink fluffy lotus flower in the pond oil painting. This artwork is made in impressionism style, impasto technique, textured with palette knife. Vibrant floral garden landscape painting.\n\nOn the back of the painting is the author's signature.",
          },
          categories: [],
          categoryOrderHints: {},
          slug: { 'en-US': 'lotus-flower-original-oil-painting' },
          metaTitle: { 'en-US': '' },
          metaDescription: { 'en-US': '' },
          masterVariant: {
            id: 1,
            prices: [],
            images: [],
            attributes: [
              { name: 'size', value: '13x18cm' },
              { name: 'availability', value: true },
              { name: 'price', value: 47 },
            ],
            assets: [],
          },
          variants: [],
          searchKeywords: { 'en-US': [{ text: 'lotus' }, { text: 'oil' }, { text: 'painting' }] },
        },
        staged: {
          name: { 'en-US': 'Lotus flower original oil painting pond flowers' },
          description: {
            'en-US':
              "Pink fluffy lotus flower in the pond oil painting. This artwork is made in impressionism style, impasto technique, textured with palette knife. Vibrant floral garden landscape painting.\n\nOn the back of the painting is the author's signature.",
          },
          categories: [{ typeId: 'category', id: '77faad28-ae26-4542-b827-3e281222521b' }],
          categoryOrderHints: {},
          slug: { 'en-US': 'lotus-flower-original-oil-painting' },
          metaTitle: { 'en-US': '' },
          metaDescription: { 'en-US': '' },
          masterVariant: {
            id: 1,
            prices: [
              {
                id: '6d5e1a78-a7d3-440b-b6d0-274e88d5600b',
                value: { type: 'centPrecision', currencyCode: 'USD', centAmount: 34500, fractionDigits: 2 },
              },
            ],
            images: [
              {
                url: 'https://d00cb446ab43a070ee45-65a4a7d498d3de1f230ce17f2863b2e9.ssl.cf1.rackcdn.com/DSC_3415-tF0AG8US.jpg',
                dimensions: { w: 1024, h: 762 },
              },
            ],
            attributes: [
              { name: 'size', value: '13x18cm' },
              { name: 'availability', value: true },
              { name: 'price', value: 47 },
            ],
            assets: [],
          },
          variants: [],
          searchKeywords: { 'en-US': [{ text: 'lotus' }, { text: 'oil' }, { text: 'painting' }] },
        },
        published: true,
        hasStagedChanges: true,
      },
      key: '2',
      priceMode: 'Standalone',
      lastVariantId: 1,
    },
    {
      id: '4a392b29-005b-48ed-8d24-d4ef3ef041d3',
      version: 14,
      versionModifiedAt: '2023-08-13T08:59:54.620Z',
      lastMessageSequenceNumber: 5,
      createdAt: '2023-08-05T10:39:32.461Z',
      lastModifiedAt: '2023-08-13T08:59:54.620Z',
      lastModifiedBy: {
        isPlatformClient: true,
        user: { typeId: 'user', id: '74af79e9-6dae-4e3d-a11c-0d4099291006' },
      },
      createdBy: { isPlatformClient: true, user: { typeId: 'user', id: '74af79e9-6dae-4e3d-a11c-0d4099291006' } },
      productType: { typeId: 'product-type', id: 'ec28cb5a-2e92-4c19-a4ac-b1c2704e9e67' },
      masterData: {
        current: {
          name: { 'en-US': 'Provence original oil painting on canvas lavender and sunflower fields ' },
          description: {
            'en-US':
              'Original oil painting on stretched canvas "Provence Lavender and Sunflower Fields".\n\nPainting size: 20x24 inches (50x60 cm).\n\nProvence original oil painting on canvas lavender and sunflower fields artwork impressionism floral landscape wall art\n\nOn the front and back of the painting is the author\'s signature.\n\nThis painting will be sent STRETCHED, READY TO HANG\n\nPACKING AND SHIPPING POLICY\n- I ship out your paintings within 2 business days after I receive your payment\n- The Painting will be carefully packaged\n- Shipped with tracking number',
          },
          categories: [],
          categoryOrderHints: {},
          slug: { 'en-US': 'provence-original-oil-painting' },
          metaTitle: { 'en-US': '' },
          metaDescription: { 'en-US': '' },
          masterVariant: {
            id: 1,
            prices: [],
            images: [
              {
                url: 'https://d00cb446ab43a070ee45-65a4a7d498d3de1f230ce17f2863b2e9.ssl.cf1.rackcdn.com/DSC_3344-4nV-WC7S.jpg',
                dimensions: { w: 768, h: 775 },
              },
            ],
            attributes: [
              { name: 'size', value: '50x60 cm' },
              { name: 'availability', value: true },
              { name: 'price', value: 240 },
            ],
            assets: [],
          },
          variants: [],
          searchKeywords: { 'en-US': [{ text: 'oil' }, { text: 'canvas' }] },
        },
        staged: {
          name: { 'en-US': 'Provence original oil painting on canvas lavender and sunflower fields ' },
          description: {
            'en-US':
              'Original oil painting on stretched canvas "Provence Lavender and Sunflower Fields".\n\nPainting size: 20x24 inches (50x60 cm).\n\nProvence original oil painting on canvas lavender and sunflower fields artwork impressionism floral landscape wall art\n\nOn the front and back of the painting is the author\'s signature.\n\nThis painting will be sent STRETCHED, READY TO HANG\n\nPACKING AND SHIPPING POLICY\n- I ship out your paintings within 2 business days after I receive your payment\n- The Painting will be carefully packaged\n- Shipped with tracking number',
          },
          categories: [{ typeId: 'category', id: '4dad0f23-a694-4b4c-b2e8-26019b17e899' }],
          categoryOrderHints: {},
          slug: { 'en-US': 'provence-original-oil-painting' },
          metaTitle: { 'en-US': '' },
          metaDescription: { 'en-US': '' },
          masterVariant: {
            id: 1,
            prices: [
              {
                id: '8ce1378e-a8c8-48f4-bd89-dd8719bfbfa7',
                value: { type: 'centPrecision', currencyCode: 'USD', centAmount: 6700, fractionDigits: 2 },
              },
            ],
            images: [
              {
                url: 'https://d00cb446ab43a070ee45-65a4a7d498d3de1f230ce17f2863b2e9.ssl.cf1.rackcdn.com/DSC_3344-4nV-WC7S.jpg',
                dimensions: { w: 768, h: 775 },
              },
            ],
            attributes: [
              { name: 'size', value: '50x60 cm' },
              { name: 'availability', value: true },
              { name: 'price', value: 240 },
            ],
            assets: [],
          },
          variants: [],
          searchKeywords: { 'en-US': [{ text: 'oil' }, { text: 'canvas' }] },
        },
        published: true,
        hasStagedChanges: true,
      },
      key: '3',
      taxCategory: { typeId: 'tax-category', id: '88fc7ffd-d44f-4755-8811-1be93a6e6a57' },
      priceMode: 'Standalone',
      lastVariantId: 1,
    },
    {
      id: '27225d0a-6252-444f-b9ba-e97c52f6fe7d',
      version: 9,
      versionModifiedAt: '2023-08-13T09:01:07.616Z',
      lastMessageSequenceNumber: 5,
      createdAt: '2023-08-05T10:55:43.795Z',
      lastModifiedAt: '2023-08-13T09:01:07.616Z',
      lastModifiedBy: {
        isPlatformClient: true,
        user: { typeId: 'user', id: '74af79e9-6dae-4e3d-a11c-0d4099291006' },
      },
      createdBy: { isPlatformClient: true, user: { typeId: 'user', id: '74af79e9-6dae-4e3d-a11c-0d4099291006' } },
      productType: { typeId: 'product-type', id: 'ec28cb5a-2e92-4c19-a4ac-b1c2704e9e67' },
      masterData: {
        current: {
          name: {
            'en-US':
              'Mount Rainier original oil painting Washington national park artwork impasto landscape mountain sunset wall art',
          },
          description: {
            'en-US':
              'Original oil painting on panel "Mount Rainier".\n\nPainting size: 10x12 inches (25x30 cm).\n\nMount Rainier Original oil painting Washington national park artwork impasto landscape mountain sunset wall art\n\nOn the back of the painting is the author\'s signature.\n\nPACKING AND SHIPPING POLICY\n- I ship out your paintings within 2 business days after I receive your payment\n- The Painting will be carefully packaged\n- Shipped with tracking number',
          },
          categories: [],
          categoryOrderHints: {},
          slug: { 'en-US': 'mount-rainier-original-oil' },
          metaTitle: { 'en-US': '' },
          metaDescription: { 'en-US': '' },
          masterVariant: {
            id: 1,
            prices: [],
            images: [
              {
                url: 'https://d00cb446ab43a070ee45-65a4a7d498d3de1f230ce17f2863b2e9.ssl.cf1.rackcdn.com/DSC_3492-2-eyF6bgap.jpg',
                dimensions: { w: 886, h: 768 },
              },
            ],
            attributes: [
              { name: 'size', value: '25x30 cm' },
              { name: 'availability', value: true },
              { name: 'price', value: 50 },
            ],
            assets: [],
          },
          variants: [],
          searchKeywords: { 'en-US': [{ text: 'oil' }, { text: 'canvas' }] },
        },
        staged: {
          name: {
            'en-US':
              'Mount Rainier original oil painting Washington national park artwork impasto landscape mountain sunset wall art',
          },
          description: {
            'en-US':
              'Original oil painting on panel "Mount Rainier".\n\nPainting size: 10x12 inches (25x30 cm).\n\nMount Rainier Original oil painting Washington national park artwork impasto landscape mountain sunset wall art\n\nOn the back of the painting is the author\'s signature.\n\nPACKING AND SHIPPING POLICY\n- I ship out your paintings within 2 business days after I receive your payment\n- The Painting will be carefully packaged\n- Shipped with tracking number',
          },
          categories: [{ typeId: 'category', id: '4dad0f23-a694-4b4c-b2e8-26019b17e899' }],
          categoryOrderHints: {},
          slug: { 'en-US': 'mount-rainier-original-oil' },
          metaTitle: { 'en-US': '' },
          metaDescription: { 'en-US': '' },
          masterVariant: {
            id: 1,
            prices: [
              {
                id: 'da05fd29-de98-4a9c-a9f5-4eb3fe89c05c',
                value: { type: 'centPrecision', currencyCode: 'USD', centAmount: 9900, fractionDigits: 2 },
              },
            ],
            images: [
              {
                url: 'https://d00cb446ab43a070ee45-65a4a7d498d3de1f230ce17f2863b2e9.ssl.cf1.rackcdn.com/DSC_3492-2-eyF6bgap.jpg',
                dimensions: { w: 886, h: 768 },
              },
            ],
            attributes: [
              { name: 'size', value: '25x30 cm' },
              { name: 'availability', value: true },
              { name: 'price', value: 50 },
            ],
            assets: [],
          },
          variants: [],
          searchKeywords: { 'en-US': [{ text: 'oil' }, { text: 'canvas' }] },
        },
        published: true,
        hasStagedChanges: true,
      },
      key: '4',
      taxCategory: { typeId: 'tax-category', id: '88fc7ffd-d44f-4755-8811-1be93a6e6a57' },
      priceMode: 'Embedded',
      lastVariantId: 1,
    },
    {
      id: '1012fa29-da84-4c13-bf80-5ec7d783f81a',
      version: 6,
      versionModifiedAt: '2023-08-13T09:00:34.839Z',
      lastMessageSequenceNumber: 4,
      createdAt: '2023-08-05T11:06:36.807Z',
      lastModifiedAt: '2023-08-13T09:00:34.839Z',
      lastModifiedBy: {
        isPlatformClient: true,
        user: { typeId: 'user', id: '74af79e9-6dae-4e3d-a11c-0d4099291006' },
      },
      createdBy: { isPlatformClient: true, user: { typeId: 'user', id: '74af79e9-6dae-4e3d-a11c-0d4099291006' } },
      productType: { typeId: 'product-type', id: 'ec28cb5a-2e92-4c19-a4ac-b1c2704e9e67' },
      masterData: {
        current: {
          name: {
            'en-US':
              'Alps original oil painting on canvas Swiss landscape mountain valley painting alpine wall art Switzerland artwork',
          },
          description: {
            'en-US':
              'Original oil painting on stretched canvas "Alpine mountains".\n\nPainting size: 16x24 inches (40x60 cm).\n\nAlps original oil painting on canvas Swiss landscape mountain valley painting alpine wall art Switzerland artwork\n\nOn the front and back of the painting is the author\'s signature.\n\nThis painting will be sent STRETCHED, READY TO HANG\n\nPACKING AND SHIPPING POLICY\n- I ship out your paintings within 2 business days after I receive your payment\n- The Painting will be carefully packaged\n- Shipped with tracking number',
          },
          categories: [{ typeId: 'category', id: '197c95bc-ab49-4ea1-a9d1-18e11a90ddc7' }],
          categoryOrderHints: {},
          slug: { 'en-US': 'alps-original-oil-painting-on-canvas-' },
          metaTitle: { 'en-US': '' },
          metaDescription: { 'en-US': '' },
          masterVariant: {
            id: 1,
            prices: [],
            images: [
              {
                url: 'https://d00cb446ab43a070ee45-65a4a7d498d3de1f230ce17f2863b2e9.ssl.cf1.rackcdn.com/DSC_9952-Pano-2e3Zd4sJ.jpg',
                dimensions: { w: 1024, h: 507 },
              },
            ],
            attributes: [
              { name: 'size', value: '70x35 cm' },
              { name: 'availability', value: true },
              { name: 'price', value: 235 },
            ],
            assets: [],
          },
          variants: [],
          searchKeywords: {},
        },
        staged: {
          name: {
            'en-US':
              'Alps original oil painting on canvas Swiss landscape mountain valley painting alpine wall art Switzerland artwork',
          },
          description: {
            'en-US':
              'Original oil painting on stretched canvas "Alpine mountains".\n\nPainting size: 16x24 inches (40x60 cm).\n\nAlps original oil painting on canvas Swiss landscape mountain valley painting alpine wall art Switzerland artwork\n\nOn the front and back of the painting is the author\'s signature.\n\nThis painting will be sent STRETCHED, READY TO HANG\n\nPACKING AND SHIPPING POLICY\n- I ship out your paintings within 2 business days after I receive your payment\n- The Painting will be carefully packaged\n- Shipped with tracking number',
          },
          categories: [{ typeId: 'category', id: '197c95bc-ab49-4ea1-a9d1-18e11a90ddc7' }],
          categoryOrderHints: {},
          slug: { 'en-US': 'alps-original-oil-painting-on-canvas-' },
          metaTitle: { 'en-US': '' },
          metaDescription: { 'en-US': '' },
          masterVariant: {
            id: 1,
            prices: [
              {
                id: 'e093f507-87c6-4768-aa83-f5eb4b975136',
                value: { type: 'centPrecision', currencyCode: 'USD', centAmount: 9800, fractionDigits: 2 },
              },
            ],
            images: [
              {
                url: 'https://d00cb446ab43a070ee45-65a4a7d498d3de1f230ce17f2863b2e9.ssl.cf1.rackcdn.com/DSC_9952-Pano-2e3Zd4sJ.jpg',
                dimensions: { w: 1024, h: 507 },
              },
            ],
            attributes: [
              { name: 'size', value: '70x35 cm' },
              { name: 'availability', value: true },
              { name: 'price', value: 235 },
            ],
            assets: [],
          },
          variants: [],
          searchKeywords: {},
        },
        published: true,
        hasStagedChanges: true,
      },
      key: '5',
      taxCategory: { typeId: 'tax-category', id: '88fc7ffd-d44f-4755-8811-1be93a6e6a57' },
      priceMode: 'Standalone',
      lastVariantId: 1,
    },
    {
      id: '03fab178-798a-4436-a62d-11d083fa55b2',
      version: 6,
      versionModifiedAt: '2023-08-13T09:00:50.546Z',
      lastMessageSequenceNumber: 4,
      createdAt: '2023-08-05T11:09:24.739Z',
      lastModifiedAt: '2023-08-13T09:00:50.546Z',
      lastModifiedBy: {
        isPlatformClient: true,
        user: { typeId: 'user', id: '74af79e9-6dae-4e3d-a11c-0d4099291006' },
      },
      createdBy: { isPlatformClient: true, user: { typeId: 'user', id: '74af79e9-6dae-4e3d-a11c-0d4099291006' } },
      productType: { typeId: 'product-type', id: 'ec28cb5a-2e92-4c19-a4ac-b1c2704e9e67' },
      masterData: {
        current: {
          name: {
            'en-US':
              'Oregon forest original oil painting on canvas Mirror lake artwork autumn nature fall landscape wall art',
          },
          description: {
            'en-US':
              'Original oil painting on stretched canvas "Oregon in Fall".\n\nPainting size: 16x24 inches (40x60 cm).\n\nOregon forest original oil painting on canvas Mirror lake artwork autumn nature fall landscape wall art\n\nOn the front and back of the painting is the author\'s signature.\n\nThis painting will be sent STRETCHED, READY TO HANG\n\nPACKING AND SHIPPING POLICY\n- I ship out your paintings within 2 business days after I receive your payment\n- The Painting will be carefully packaged\n- Shipped with tracking number',
          },
          categories: [{ typeId: 'category', id: 'c0da52eb-7b78-4e88-b76f-2f53663fc930' }],
          categoryOrderHints: {},
          slug: { 'en-US': 'oregon-forest-original-oil-painting-on-canvas' },
          metaTitle: { 'en-US': '' },
          metaDescription: { 'en-US': '' },
          masterVariant: {
            id: 1,
            prices: [],
            images: [
              {
                url: 'https://d00cb446ab43a070ee45-65a4a7d498d3de1f230ce17f2863b2e9.ssl.cf1.rackcdn.com/DSC_3247-RhTEjm-h.jpg',
                dimensions: { w: 986, h: 768 },
              },
            ],
            attributes: [
              { name: 'size', value: '60x40 cm' },
              { name: 'availability', value: true },
              { name: 'price', value: 125 },
            ],
            assets: [],
          },
          variants: [],
          searchKeywords: {},
        },
        staged: {
          name: {
            'en-US':
              'Oregon forest original oil painting on canvas Mirror lake artwork autumn nature fall landscape wall art',
          },
          description: {
            'en-US':
              'Original oil painting on stretched canvas "Oregon in Fall".\n\nPainting size: 16x24 inches (40x60 cm).\n\nOregon forest original oil painting on canvas Mirror lake artwork autumn nature fall landscape wall art\n\nOn the front and back of the painting is the author\'s signature.\n\nThis painting will be sent STRETCHED, READY TO HANG\n\nPACKING AND SHIPPING POLICY\n- I ship out your paintings within 2 business days after I receive your payment\n- The Painting will be carefully packaged\n- Shipped with tracking number',
          },
          categories: [{ typeId: 'category', id: 'c0da52eb-7b78-4e88-b76f-2f53663fc930' }],
          categoryOrderHints: {},
          slug: { 'en-US': 'oregon-forest-original-oil-painting-on-canvas' },
          metaTitle: { 'en-US': '' },
          metaDescription: { 'en-US': '' },
          masterVariant: {
            id: 1,
            prices: [
              {
                id: '7b22c4bf-dcc1-43ae-bcf6-81f4ddccec75',
                value: { type: 'centPrecision', currencyCode: 'USD', centAmount: 7600, fractionDigits: 2 },
              },
            ],
            images: [
              {
                url: 'https://d00cb446ab43a070ee45-65a4a7d498d3de1f230ce17f2863b2e9.ssl.cf1.rackcdn.com/DSC_3247-RhTEjm-h.jpg',
                dimensions: { w: 986, h: 768 },
              },
            ],
            attributes: [
              { name: 'size', value: '60x40 cm' },
              { name: 'availability', value: true },
              { name: 'price', value: 125 },
            ],
            assets: [],
          },
          variants: [],
          searchKeywords: {},
        },
        published: true,
        hasStagedChanges: true,
      },
      key: '6',
      taxCategory: { typeId: 'tax-category', id: '88fc7ffd-d44f-4755-8811-1be93a6e6a57' },
      priceMode: 'Standalone',
      lastVariantId: 1,
    },
    {
      id: 'e642209e-6c68-4bac-9c15-96bf1feb17d9',
      version: 6,
      versionModifiedAt: '2023-08-13T09:00:18.645Z',
      lastMessageSequenceNumber: 4,
      createdAt: '2023-08-05T11:12:07.633Z',
      lastModifiedAt: '2023-08-13T09:00:18.645Z',
      lastModifiedBy: {
        isPlatformClient: true,
        user: { typeId: 'user', id: '74af79e9-6dae-4e3d-a11c-0d4099291006' },
      },
      createdBy: { isPlatformClient: true, user: { typeId: 'user', id: '74af79e9-6dae-4e3d-a11c-0d4099291006' } },
      productType: { typeId: 'product-type', id: 'ec28cb5a-2e92-4c19-a4ac-b1c2704e9e67' },
      masterData: {
        current: {
          name: {
            'en-US':
              'Amsterdam original oil painting impasto cityscape european city wall art Netherlands colorful houses vibrant artwork',
          },
          description: {
            'en-US':
              'Original oil painting on hardboard "Colorful Amsterdam".\n\nPainting size: 5x7 inches (13x18 cm).\n\nAmsterdam cityscape oil painting, colorful dutch houses facades along canal view. This artwork is made in impressionism style, impasto technique, textured with palette knife. Vibrant Netherlands architecture painting.\n\nOn the back of the painting is the author\'s signature.\n\nPACKING AND SHIPPING POLICY\n- I ship out your paintings within 2 business days after I receive your payment\n- The Painting will be carefully packaged\n- Shipped with tracking number\n\nThank you for visiting my art store. :)',
          },
          categories: [{ typeId: 'category', id: 'e021a670-d822-4bf6-bb45-4728529d94d9' }],
          categoryOrderHints: {},
          slug: {
            'en-US':
              'amsterdam-original-oil-painting-impasto-cityscape-european-city-wall-art-netherlands-colorful-houses-vibrant-artwork',
          },
          metaTitle: { 'en-US': '' },
          metaDescription: { 'en-US': '' },
          masterVariant: {
            id: 1,
            prices: [],
            images: [
              {
                url: 'https://d00cb446ab43a070ee45-65a4a7d498d3de1f230ce17f2863b2e9.ssl.cf1.rackcdn.com/DSC_9149-Pano-mpHbcfAw.jpg',
                dimensions: { w: 895, h: 768 },
              },
            ],
            attributes: [
              { name: 'size', value: '55x60 cm' },
              { name: 'availability', value: true },
              { name: 'price', value: 321 },
            ],
            assets: [],
          },
          variants: [],
          searchKeywords: {},
        },
        staged: {
          name: {
            'en-US':
              'Amsterdam original oil painting impasto cityscape european city wall art Netherlands colorful houses vibrant artwork',
          },
          description: {
            'en-US':
              'Original oil painting on hardboard "Colorful Amsterdam".\n\nPainting size: 5x7 inches (13x18 cm).\n\nAmsterdam cityscape oil painting, colorful dutch houses facades along canal view. This artwork is made in impressionism style, impasto technique, textured with palette knife. Vibrant Netherlands architecture painting.\n\nOn the back of the painting is the author\'s signature.\n\nPACKING AND SHIPPING POLICY\n- I ship out your paintings within 2 business days after I receive your payment\n- The Painting will be carefully packaged\n- Shipped with tracking number\n\nThank you for visiting my art store. :)',
          },
          categories: [{ typeId: 'category', id: 'e021a670-d822-4bf6-bb45-4728529d94d9' }],
          categoryOrderHints: {},
          slug: {
            'en-US':
              'amsterdam-original-oil-painting-impasto-cityscape-european-city-wall-art-netherlands-colorful-houses-vibrant-artwork',
          },
          metaTitle: { 'en-US': '' },
          metaDescription: { 'en-US': '' },
          masterVariant: {
            id: 1,
            prices: [
              {
                id: '78a27990-1a47-4610-a9a4-4efc35f91fa8',
                value: { type: 'centPrecision', currencyCode: 'USD', centAmount: 8900, fractionDigits: 2 },
              },
            ],
            images: [
              {
                url: 'https://d00cb446ab43a070ee45-65a4a7d498d3de1f230ce17f2863b2e9.ssl.cf1.rackcdn.com/DSC_9149-Pano-mpHbcfAw.jpg',
                dimensions: { w: 895, h: 768 },
              },
            ],
            attributes: [
              { name: 'size', value: '55x60 cm' },
              { name: 'availability', value: true },
              { name: 'price', value: 321 },
            ],
            assets: [],
          },
          variants: [],
          searchKeywords: {},
        },
        published: true,
        hasStagedChanges: true,
      },
      key: '7',
      taxCategory: { typeId: 'tax-category', id: '88fc7ffd-d44f-4755-8811-1be93a6e6a57' },
      priceMode: 'Standalone',
      lastVariantId: 1,
    },
    {
      id: 'c029b093-e5c6-4e1b-811f-df46eef0f168',
      version: 5,
      versionModifiedAt: '2023-08-05T11:15:44.853Z',
      lastMessageSequenceNumber: 3,
      createdAt: '2023-08-05T11:14:35.620Z',
      lastModifiedAt: '2023-08-05T11:15:44.853Z',
      lastModifiedBy: {
        isPlatformClient: true,
        user: { typeId: 'user', id: '74af79e9-6dae-4e3d-a11c-0d4099291006' },
      },
      createdBy: { isPlatformClient: true, user: { typeId: 'user', id: '74af79e9-6dae-4e3d-a11c-0d4099291006' } },
      productType: { typeId: 'product-type', id: 'ec28cb5a-2e92-4c19-a4ac-b1c2704e9e67' },
      masterData: {
        current: {
          name: {
            'en-US':
              'Venice original oil painting Venice Grand Canal Italy artwork impasto cityscape gondolas and gondoliers venice wall art',
          },
          description: {
            'en-US':
              'Original oil painting on hardboard "Colorful Venice".\n\nPainting size: 12x12 inches (30x30 cm).\n\nVenice cityscape with gondolas and gondoliers. This artwork is made in impressionism style, impasto technique with palette knife. Beautiful Venice Grand Canal view, old Italian city street painting.\n\nOn the back of the painting is the author\'s signature.\n\nPACKING AND SHIPPING POLICY\n- I ship out your paintings within 2 business days after I receive your payment\n- The Painting will be carefully packaged\n- Shipped with tracking number\n\nThank you for visiting my art store. :)',
          },
          categories: [{ typeId: 'category', id: '4dad0f23-a694-4b4c-b2e8-26019b17e899' }],
          categoryOrderHints: {},
          slug: {
            'en-US':
              'venice-original-oil-painting-venice-grand-canal-italy-artwork-impasto-cityscape-gondolas-and-gondoliers-venice-wall-art',
          },
          metaTitle: { 'en-US': '' },
          metaDescription: { 'en-US': '' },
          masterVariant: {
            id: 1,
            prices: [],
            images: [
              {
                url: 'https://d00cb446ab43a070ee45-65a4a7d498d3de1f230ce17f2863b2e9.ssl.cf1.rackcdn.com/DSC_9115-Pano-cbpTie1E.jpg',
                label: 'Main view',
                dimensions: { w: 1024, h: 496 },
              },
            ],
            attributes: [
              { name: 'size', value: '120x60 cm' },
              { name: 'availability', value: true },
              { name: 'price', value: 450 },
            ],
            assets: [],
          },
          variants: [],
          searchKeywords: {},
        },
        staged: {
          name: {
            'en-US':
              'Venice original oil painting Venice Grand Canal Italy artwork impasto cityscape gondolas and gondoliers venice wall art',
          },
          description: {
            'en-US':
              'Original oil painting on hardboard "Colorful Venice".\n\nPainting size: 12x12 inches (30x30 cm).\n\nVenice cityscape with gondolas and gondoliers. This artwork is made in impressionism style, impasto technique with palette knife. Beautiful Venice Grand Canal view, old Italian city street painting.\n\nOn the back of the painting is the author\'s signature.\n\nPACKING AND SHIPPING POLICY\n- I ship out your paintings within 2 business days after I receive your payment\n- The Painting will be carefully packaged\n- Shipped with tracking number\n\nThank you for visiting my art store. :)',
          },
          categories: [{ typeId: 'category', id: '4dad0f23-a694-4b4c-b2e8-26019b17e899' }],
          categoryOrderHints: {},
          slug: {
            'en-US':
              'venice-original-oil-painting-venice-grand-canal-italy-artwork-impasto-cityscape-gondolas-and-gondoliers-venice-wall-art',
          },
          metaTitle: { 'en-US': '' },
          metaDescription: { 'en-US': '' },
          masterVariant: {
            id: 1,
            prices: [],
            images: [
              {
                url: 'https://d00cb446ab43a070ee45-65a4a7d498d3de1f230ce17f2863b2e9.ssl.cf1.rackcdn.com/DSC_9115-Pano-cbpTie1E.jpg',
                label: 'Main view',
                dimensions: { w: 1024, h: 496 },
              },
            ],
            attributes: [
              { name: 'size', value: '120x60 cm' },
              { name: 'availability', value: true },
              { name: 'price', value: 450 },
            ],
            assets: [],
          },
          variants: [],
          searchKeywords: {},
        },
        published: true,
        hasStagedChanges: false,
      },
      key: '8',
      taxCategory: { typeId: 'tax-category', id: '88fc7ffd-d44f-4755-8811-1be93a6e6a57' },
      priceMode: 'Standalone',
      lastVariantId: 1,
    },
    {
      id: '1bbb8413-f8a9-46b7-9f97-6be206946d5c',
      version: 5,
      versionModifiedAt: '2023-08-05T11:19:04.214Z',
      lastMessageSequenceNumber: 3,
      createdAt: '2023-08-05T11:17:58.201Z',
      lastModifiedAt: '2023-08-05T11:19:04.214Z',
      lastModifiedBy: {
        isPlatformClient: true,
        user: { typeId: 'user', id: '74af79e9-6dae-4e3d-a11c-0d4099291006' },
      },
      createdBy: { isPlatformClient: true, user: { typeId: 'user', id: '74af79e9-6dae-4e3d-a11c-0d4099291006' } },
      productType: { typeId: 'product-type', id: 'ec28cb5a-2e92-4c19-a4ac-b1c2704e9e67' },
      masterData: {
        current: {
          name: {
            'en-US':
              'Vineyard grapes original oil painting winery wall decor impressionism garden fruit artwork wine wall art',
          },
          description: {
            'en-US':
              'Original oil painting on hardboard "Vineyard Grapes".\n\nPainting size: 11x14 inches (28x36 cm).\n\nVineyard grapes original oil painting winery wall decor impressionism garden fruit artwork wine wall art\n\nOn the back of the painting is the author\'s signature.\n\nPACKING AND SHIPPING POLICY\n- I ship out your paintings within 2 business days after I receive your payment\n- The Painting will be carefully packaged\n- Shipped with tracking number\n\nThank you for visiting my art store. :)',
          },
          categories: [{ typeId: 'category', id: '77faad28-ae26-4542-b827-3e281222521b' }],
          categoryOrderHints: {},
          slug: {
            'en-US':
              'vineyard-grapes-original-oil-painting-winery-wall-decor-impressionism-garden-fruit-artwork-wine-wall-art',
          },
          metaTitle: { 'en-US': '' },
          metaDescription: { 'en-US': '' },
          masterVariant: {
            id: 1,
            prices: [],
            images: [
              {
                url: 'https://d00cb446ab43a070ee45-65a4a7d498d3de1f230ce17f2863b2e9.ssl.cf1.rackcdn.com/DSC_9107-PtUkZlPo.jpg',
                label: 'Front view',
                dimensions: { w: 963, h: 768 },
              },
            ],
            attributes: [
              { name: 'size', value: '75x55 cm' },
              { name: 'availability', value: true },
              { name: 'price', value: 345 },
            ],
            assets: [],
          },
          variants: [],
          searchKeywords: {},
        },
        staged: {
          name: {
            'en-US':
              'Vineyard grapes original oil painting winery wall decor impressionism garden fruit artwork wine wall art',
          },
          description: {
            'en-US':
              'Original oil painting on hardboard "Vineyard Grapes".\n\nPainting size: 11x14 inches (28x36 cm).\n\nVineyard grapes original oil painting winery wall decor impressionism garden fruit artwork wine wall art\n\nOn the back of the painting is the author\'s signature.\n\nPACKING AND SHIPPING POLICY\n- I ship out your paintings within 2 business days after I receive your payment\n- The Painting will be carefully packaged\n- Shipped with tracking number\n\nThank you for visiting my art store. :)',
          },
          categories: [{ typeId: 'category', id: '77faad28-ae26-4542-b827-3e281222521b' }],
          categoryOrderHints: {},
          slug: {
            'en-US':
              'vineyard-grapes-original-oil-painting-winery-wall-decor-impressionism-garden-fruit-artwork-wine-wall-art',
          },
          metaTitle: { 'en-US': '' },
          metaDescription: { 'en-US': '' },
          masterVariant: {
            id: 1,
            prices: [],
            images: [
              {
                url: 'https://d00cb446ab43a070ee45-65a4a7d498d3de1f230ce17f2863b2e9.ssl.cf1.rackcdn.com/DSC_9107-PtUkZlPo.jpg',
                label: 'Front view',
                dimensions: { w: 963, h: 768 },
              },
            ],
            attributes: [
              { name: 'size', value: '75x55 cm' },
              { name: 'availability', value: true },
              { name: 'price', value: 345 },
            ],
            assets: [],
          },
          variants: [],
          searchKeywords: {},
        },
        published: true,
        hasStagedChanges: false,
      },
      key: '9',
      taxCategory: { typeId: 'tax-category', id: '88fc7ffd-d44f-4755-8811-1be93a6e6a57' },
      priceMode: 'Standalone',
      lastVariantId: 1,
    },
    {
      id: '177ac5fb-9ebb-44f3-94c3-f92db5f806eb',
      version: 4,
      versionModifiedAt: '2023-08-05T11:21:21.759Z',
      lastMessageSequenceNumber: 3,
      createdAt: '2023-08-05T11:20:41.486Z',
      lastModifiedAt: '2023-08-05T11:21:21.759Z',
      lastModifiedBy: {
        isPlatformClient: true,
        user: { typeId: 'user', id: '74af79e9-6dae-4e3d-a11c-0d4099291006' },
      },
      createdBy: { isPlatformClient: true, user: { typeId: 'user', id: '74af79e9-6dae-4e3d-a11c-0d4099291006' } },
      productType: { typeId: 'product-type', id: 'ec28cb5a-2e92-4c19-a4ac-b1c2704e9e67' },
      masterData: {
        current: {
          name: {
            'en-US':
              'Birch Trees original oil painting birch grove artwork birch forest impressionism landscape birch tree wall art',
          },
          description: {
            'en-US':
              'Original oil painting on hardboard "Birch Trees".\n\nPainting size: 16x12 inches (40x30 cm).\n\nBirch Trees original oil painting birch grove artwork birch forest impressionism landscape birch tree wall art\n\nOn the back of the painting is the author\'s signature.\n\nPACKING AND SHIPPING POLICY\n- I ship out your paintings within 2 business days after I receive your payment\n- The Painting will be carefully packaged\n- Shipped with tracking number\n\nThank you for visiting my art store. :)',
          },
          categories: [{ typeId: 'category', id: '4dad0f23-a694-4b4c-b2e8-26019b17e899' }],
          categoryOrderHints: {},
          slug: {
            'en-US':
              'birch-trees-original-oil-painting-birch-grove-artwork-birch-forest-impressionism-landscape-birch-tree-wall-art',
          },
          metaTitle: { 'en-US': '' },
          metaDescription: { 'en-US': '' },
          masterVariant: {
            id: 1,
            prices: [],
            images: [
              {
                url: 'https://d00cb446ab43a070ee45-65a4a7d498d3de1f230ce17f2863b2e9.ssl.cf1.rackcdn.com/DSC_3364-SCUGIMR6.jpg',
                dimensions: { w: 1024, h: 732 },
              },
            ],
            attributes: [
              { name: 'size', value: '78x47 cm' },
              { name: 'availability', value: true },
              { name: 'price', value: 237 },
            ],
            assets: [],
          },
          variants: [],
          searchKeywords: {},
        },
        staged: {
          name: {
            'en-US':
              'Birch Trees original oil painting birch grove artwork birch forest impressionism landscape birch tree wall art',
          },
          description: {
            'en-US':
              'Original oil painting on hardboard "Birch Trees".\n\nPainting size: 16x12 inches (40x30 cm).\n\nBirch Trees original oil painting birch grove artwork birch forest impressionism landscape birch tree wall art\n\nOn the back of the painting is the author\'s signature.\n\nPACKING AND SHIPPING POLICY\n- I ship out your paintings within 2 business days after I receive your payment\n- The Painting will be carefully packaged\n- Shipped with tracking number\n\nThank you for visiting my art store. :)',
          },
          categories: [{ typeId: 'category', id: '4dad0f23-a694-4b4c-b2e8-26019b17e899' }],
          categoryOrderHints: {},
          slug: {
            'en-US':
              'birch-trees-original-oil-painting-birch-grove-artwork-birch-forest-impressionism-landscape-birch-tree-wall-art',
          },
          metaTitle: { 'en-US': '' },
          metaDescription: { 'en-US': '' },
          masterVariant: {
            id: 1,
            prices: [],
            images: [
              {
                url: 'https://d00cb446ab43a070ee45-65a4a7d498d3de1f230ce17f2863b2e9.ssl.cf1.rackcdn.com/DSC_3364-SCUGIMR6.jpg',
                dimensions: { w: 1024, h: 732 },
              },
            ],
            attributes: [
              { name: 'size', value: '78x47 cm' },
              { name: 'availability', value: true },
              { name: 'price', value: 237 },
            ],
            assets: [],
          },
          variants: [],
          searchKeywords: {},
        },
        published: true,
        hasStagedChanges: false,
      },
      key: '10',
      taxCategory: { typeId: 'tax-category', id: '88fc7ffd-d44f-4755-8811-1be93a6e6a57' },
      priceMode: 'Standalone',
      lastVariantId: 1,
    },
    {
      id: '0f55e260-a1f0-4494-8f37-e7e16f6006db',
      version: 12,
      versionModifiedAt: '2023-08-05T12:15:00.589Z',
      lastMessageSequenceNumber: 6,
      createdAt: '2023-08-05T11:53:17.350Z',
      lastModifiedAt: '2023-08-05T12:15:00.589Z',
      lastModifiedBy: { isPlatformClient: true },
      createdBy: { isPlatformClient: true, user: { typeId: 'user', id: '74af79e9-6dae-4e3d-a11c-0d4099291006' } },
      productType: { typeId: 'product-type', id: 'ec28cb5a-2e92-4c19-a4ac-b1c2704e9e67' },
      masterData: {
        current: {
          name: {
            'en-US':
              'Tulip field original oil painting Windmill artwork floral landscape sunset impasto Netherlands wall art',
          },
          description: {
            'en-US':
              'Original oil painting on hardboard "Tulip field on sunset".\n\nPainting size: 8x10 inches (20x25 cm).\n\nTulip field original oil painting Windmill artwork floral landscape sunset impasto Netherlands wall art\n\nOn the back of the painting is the author\'s signature.\n\nPACKING AND SHIPPING POLICY\n- I ship out your paintings within 2 business days after I receive your payment\n- The Painting will be carefully packaged\n- Shipped with tracking number\n\nThank you for visiting my art store. :)',
          },
          categories: [{ typeId: 'category', id: '197c95bc-ab49-4ea1-a9d1-18e11a90ddc7' }],
          categoryOrderHints: {},
          slug: {
            'en-US':
              'tulip-field-original-oil-painting-windmill-artwork-floral-landscape-sunset-impasto-netherlands-wall-art',
          },
          metaTitle: { 'en-US': '' },
          metaDescription: { 'en-US': '' },
          masterVariant: {
            id: 1,
            sku: '123',
            key: '321',
            prices: [],
            images: [
              {
                url: 'https://d00cb446ab43a070ee45-65a4a7d498d3de1f230ce17f2863b2e9.ssl.cf1.rackcdn.com/DSC_9107-lfipmOFv.jpg',
                dimensions: { w: 963, h: 768 },
              },
            ],
            attributes: [
              { name: 'size', value: '34x56 cm' },
              { name: 'availability', value: true },
              { name: 'price', value: 23 },
            ],
            assets: [],
            availability: {
              isOnStock: true,
              availableQuantity: 1,
              version: 1,
              id: 'f3b2f11b-326c-435d-ab99-2fd901a39afe',
            },
          },
          variants: [],
          searchKeywords: {},
        },
        staged: {
          name: {
            'en-US':
              'Tulip field original oil painting Windmill artwork floral landscape sunset impasto Netherlands wall art',
          },
          description: {
            'en-US':
              'Original oil painting on hardboard "Tulip field on sunset".\n\nPainting size: 8x10 inches (20x25 cm).\n\nTulip field original oil painting Windmill artwork floral landscape sunset impasto Netherlands wall art\n\nOn the back of the painting is the author\'s signature.\n\nPACKING AND SHIPPING POLICY\n- I ship out your paintings within 2 business days after I receive your payment\n- The Painting will be carefully packaged\n- Shipped with tracking number\n\nThank you for visiting my art store. :)',
          },
          categories: [{ typeId: 'category', id: '197c95bc-ab49-4ea1-a9d1-18e11a90ddc7' }],
          categoryOrderHints: {},
          slug: {
            'en-US':
              'tulip-field-original-oil-painting-windmill-artwork-floral-landscape-sunset-impasto-netherlands-wall-art',
          },
          metaTitle: { 'en-US': '' },
          metaDescription: { 'en-US': '' },
          masterVariant: {
            id: 1,
            sku: '123',
            key: '321',
            prices: [
              {
                id: '86f5da85-5ef1-4612-84a7-b666dbfdb7f9',
                value: { type: 'centPrecision', currencyCode: 'USD', centAmount: 12300, fractionDigits: 2 },
                country: 'US',
                validFrom: '2023-08-03T21:00:00.000Z',
                validUntil: '2024-07-31T21:00:00.000Z',
              },
            ],
            images: [
              {
                url: 'https://d00cb446ab43a070ee45-65a4a7d498d3de1f230ce17f2863b2e9.ssl.cf1.rackcdn.com/DSC_9107-lfipmOFv.jpg',
                dimensions: { w: 963, h: 768 },
              },
            ],
            attributes: [
              { name: 'size', value: '34x56 cm' },
              { name: 'availability', value: true },
              { name: 'price', value: 23 },
            ],
            assets: [],
            availability: {
              isOnStock: true,
              availableQuantity: 1,
              version: 1,
              id: 'f3b2f11b-326c-435d-ab99-2fd901a39afe',
            },
          },
          variants: [],
          searchKeywords: {},
        },
        published: true,
        hasStagedChanges: true,
      },
      key: '11',
      taxCategory: { typeId: 'tax-category', id: '88fc7ffd-d44f-4755-8811-1be93a6e6a57' },
      priceMode: 'Embedded',
      lastVariantId: 1,
    },
  ],
  item: {},
  loading: false,
  error: null,
};

export const mockUser = {
  isAuth: true,
  customer: {
    id: '2daa4958-0552-4d57-af86-b4615b7fa274',
    version: 51,
    versionModifiedAt: '2023-08-21T16:55:25.954Z',
    lastMessageSequenceNumber: 43,
    createdAt: '2023-08-05T11:24:38.332Z',
    lastModifiedAt: '2023-08-21T16:55:25.954Z',
    lastModifiedBy: { clientId: 'oefQRrbPAzqbzYezPqaW0LCC', isPlatformClient: false },
    createdBy: { isPlatformClient: true, user: { typeId: 'user', id: '74af79e9-6dae-4e3d-a11c-0d4099291006' } },
    customerNumber: '1',
    email: 'admiral@gmail.com',
    firstName: 'Admiral',
    lastName: 'Asomov',
    middleName: 'Asomovich1',
    title: '',
    salutation: '',
    password: '****OqI=',
    addresses: [
      {
        id: 'CCjlJxnh',
        title: 'Mr.',
        firstName: '1111',
        lastName: '1111',
        streetName: '1111',
        streetNumber: '111',
        postalCode: '12213423e',
        city: '1111',
        state: '1111',
        country: 'US',
        building: '111',
        apartment: '111',
        mobile: '1111',
      },
      {
        id: 'Wr7U9gLd',
        firstName: 'Admiral',
        lastName: 'Bostonston',
        streetName: 'Redline st',
        streetNumber: '2334',
        postalCode: '2345BSrgr',
        city: 'Boston',
        state: 'BS',
        country: 'US',
        building: '3',
        apartment: '233',
      },
    ],
    shippingAddressIds: ['CCjlJxnh'],
    billingAddressIds: ['Wr7U9gLd'],
    isEmailVerified: false,
    stores: [],
    authenticationMode: 'Password',
  },
};
export const mockCart: ICart = {
  items: [
    {
      id: '774b937a-7d07-47d5-86ca-f4898f85a272',
      product: {
        id: '774b937a-7d07-47d5-86ca-f4898f85a272',
        version: 13,
        createdAt: '2023-08-05T08:41:06.819Z',
        lastModifiedAt: '2023-08-13T08:59:26.021Z',

        createdBy: {},
        productType: {
          typeId: 'product-type',
          id: 'ec28cb5a-2e92-4c19-a4ac-b1c2704e9e67',
        },
        masterData: {
          current: {
            name: {
              'en-US': 'Product Name',
            },
            description: {
              'en-US': 'Product Description',
            },
            categories: [],
            categoryOrderHints: {},
            slug: {
              'en-US': 'Product slug',
            },
            metaTitle: {
              'en-US': '',
            },
            metaDescription: {
              'en-US': '',
            },
            masterVariant: {
              id: 1,
              prices: [],
              images: [],
              attributes: [
                {
                  name: 'size',
                  value: '13x18cm',
                },
                {
                  name: 'availability',
                  value: true,
                },
                {
                  name: 'price',
                  value: 47,
                },
              ],
              assets: [],
            },
            variants: [],
            searchKeywords: {
              'en-US': [
                {
                  text: 'lotus',
                },
                {
                  text: 'oil',
                },
                {
                  text: 'painting',
                },
              ],
            },
          },
          staged: {
            name: {
              'en-US': 'Lotus flower original oil painting pond flowers',
            },
            description: {
              'en-US':
                "Pink fluffy lotus flower in the pond oil painting. This artwork is made in impressionism style, impasto technique, textured with palette knife. Vibrant floral garden landscape painting.\n\nOn the back of the painting is the author's signature.",
            },
            categories: [
              {
                typeId: 'category',
                id: '77faad28-ae26-4542-b827-3e281222521b',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-US': 'lotus-flower-original-oil-painting',
            },
            metaTitle: {
              'en-US': '',
            },
            metaDescription: {
              'en-US': '',
            },
            masterVariant: {
              id: 1,
              prices: [
                {
                  id: '6d5e1a78-a7d3-440b-b6d0-274e88d5600b',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 34500,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://d00cb446ab43a070ee45-65a4a7d498d3de1f230ce17f2863b2e9.ssl.cf1.rackcdn.com/DSC_3415-tF0AG8US.jpg',
                  dimensions: {
                    w: 1024,
                    h: 762,
                  },
                },
              ],
              attributes: [
                {
                  name: 'size',
                  value: '13x18cm',
                },
                {
                  name: 'availability',
                  value: true,
                },
                {
                  name: 'price',
                  value: 47,
                },
              ],
              assets: [],
            },
            variants: [],
            searchKeywords: {
              'en-US': [
                {
                  text: 'lotus',
                },
                {
                  text: 'oil',
                },
                {
                  text: 'painting',
                },
              ],
            },
          },
          published: true,
          hasStagedChanges: true,
        },
        key: '2',
        priceMode: 'Standalone',
      },
      count: 2,
    },
  ],
  total: 2,
  price: 345,
};
export const mockAddresses = { shipping: { country: '' }, billing: { country: '' }, isBillingSame: false };
