export type Product = {
  id: string
  name: string
  category: string
  image: string
  spec: string
  description: string
  applications: string[]
  compatibility: string[]
  specifications: {
    label: string
    value: string
  }[]
}

export const PRODUCTS: Product[] = [
  // =========================================================
  // STANDARD QRC
  // =========================================================

  {
    id: 'qrc-1-2-x-3-8',
    name: '1/2 x 3/8 Quick Release Coupling (QRC)',
    category: 'Standard QRC',
    image: '/qrc_1.png',
    spec: 'Size: 1/2 x 3/8',

    description:
      'Heavy-duty quick release coupling designed for reliable connection and disconnection in high-pressure hydraulic applications.',

    applications: [
      'Industrial Hydraulic Applications',
      'Agricultural Hydraulic Applications',
      'Hydraulic Connect / Disconnect Systems',
    ],

    compatibility: [
      'General Hydraulic Applications',
    ],

    specifications: [
      {
        label: 'Product Type',
        value: 'Quick Release Coupling',
      },
      {
        label: 'Category',
        value: 'Standard QRC',
      },
      {
        label: 'Size',
        value: '1/2 x 3/8',
      },
    ],
  },

  {
    id: 'qrc-1-2-x-1-2',
    name: '1/2 x 1/2 Quick Release Coupling (QRC)',
    category: 'Standard QRC',
    image: '/qrc_2.png',
    spec: 'Size: 1/2 x 1/2',

    description:
      'Heavy-duty quick release coupling designed for reliable connection and disconnection in high-pressure hydraulic applications.',

    applications: [
      'Industrial Hydraulic Applications',
      'Agricultural Hydraulic Applications',
      'Hydraulic Connect / Disconnect Systems',
    ],

    compatibility: [
      'General Hydraulic Applications',
    ],

    specifications: [
      {
        label: 'Product Type',
        value: 'Quick Release Coupling',
      },
      {
        label: 'Category',
        value: 'Standard QRC',
      },
      {
        label: 'Size',
        value: '1/2 x 1/2',
      },
    ],
  },

  {
    id: 'qrc-male-female-old-type',
    name: '1/2 x 3/8 Male-Female (Old Type)',
    category: 'Standard QRC',
    image: '/male_female(old_type).png',
    spec: 'Size: 1/2 x 3/8 · Old Type',

    description:
      'Standard quick release coupling in the old-type male-female configuration for hydraulic connection applications.',

    applications: [
      'Hydraulic Applications',
      'Agricultural Equipment',
      'Industrial Equipment',
    ],

    compatibility: [
      'General Hydraulic Applications',
    ],

    specifications: [
      {
        label: 'Product Type',
        value: 'Male-Female Quick Release Coupling',
      },
      {
        label: 'Category',
        value: 'Standard QRC',
      },
      {
        label: 'Size',
        value: '1/2 x 3/8',
      },
      {
        label: 'Type',
        value: 'Old Type',
      },
    ],
  },

  // =========================================================
  // TRACTOR QRC
  // =========================================================

  {
    id: 'qrc-eicher',
    name: 'QRC. Eicher',
    category: 'Tractor QRC',
    image: '/qrc_eicher.png',
    spec: 'Compatible: Eicher',

    description:
      'Direct-fit quick coupling designed for Eicher tractor hydraulic applications, providing secure and efficient hydraulic connections.',

    applications: [
      'Tractor Hydraulic Systems',
      'Agricultural Equipment',
    ],

    compatibility: [
      'Eicher',
    ],

    specifications: [
      {
        label: 'Product Type',
        value: 'Tractor Quick Release Coupling',
      },
      {
        label: 'Category',
        value: 'Tractor QRC',
      },
      {
        label: 'Compatibility',
        value: 'Eicher',
      },
      {
        label: 'Fitment',
        value: 'Direct-Fit',
      },
    ],
  },

  {
    id: 'qrc-sonalika',
    name: 'QRC. Sonalika',
    category: 'Tractor QRC',
    image: '/qrc_sonalika.png',
    spec: 'Compatible: Sonalika',

    description:
      'Direct-fit quick coupling designed for Sonalika tractor hydraulic applications, providing secure and efficient hydraulic connections.',

    applications: [
      'Tractor Hydraulic Systems',
      'Agricultural Equipment',
    ],

    compatibility: [
      'Sonalika',
    ],

    specifications: [
      {
        label: 'Product Type',
        value: 'Tractor Quick Release Coupling',
      },
      {
        label: 'Category',
        value: 'Tractor QRC',
      },
      {
        label: 'Compatibility',
        value: 'Sonalika',
      },
      {
        label: 'Fitment',
        value: 'Direct-Fit',
      },
    ],
  },

  {
    id: 'qrc-farm-track',
    name: 'QRC. Farm Track',
    category: 'Tractor QRC',
    image: '/qrc_farmtech.png',
    spec: 'Compatible: Farm Track',

    description:
      'Direct-fit quick coupling designed for Farm Track tractor hydraulic applications, providing secure and efficient hydraulic connections.',

    applications: [
      'Tractor Hydraulic Systems',
      'Agricultural Equipment',
    ],

    compatibility: [
      'Farm Track',
    ],

    specifications: [
      {
        label: 'Product Type',
        value: 'Tractor Quick Release Coupling',
      },
      {
        label: 'Category',
        value: 'Tractor QRC',
      },
      {
        label: 'Compatibility',
        value: 'Farm Track',
      },
      {
        label: 'Fitment',
        value: 'Direct-Fit',
      },
    ],
  },

  {
    id: 'qrc-john-deere',
    name: 'QRC. John Deere',
    category: 'Tractor QRC',
    image: '/qrc_john_deere.png',
    spec: 'Compatible: John Deere',

    description:
      'Direct-fit quick coupling designed for John Deere tractor hydraulic applications, providing secure and efficient hydraulic connections.',

    applications: [
      'Tractor Hydraulic Systems',
      'Agricultural Equipment',
    ],

    compatibility: [
      'John Deere',
    ],

    specifications: [
      {
        label: 'Product Type',
        value: 'Tractor Quick Release Coupling',
      },
      {
        label: 'Category',
        value: 'Tractor QRC',
      },
      {
        label: 'Compatibility',
        value: 'John Deere',
      },
      {
        label: 'Fitment',
        value: 'Direct-Fit',
      },
    ],
  },

  {
    id: 'qrc-massey',
    name: 'QRC. Massey',
    category: 'Tractor QRC',
    image: '/qrc_massey.png',
    spec: 'Compatible: Massey',

    description:
      'Direct-fit quick coupling designed for Massey tractor hydraulic applications, providing secure and efficient hydraulic connections.',

    applications: [
      'Tractor Hydraulic Systems',
      'Agricultural Equipment',
    ],

    compatibility: [
      'Massey',
    ],

    specifications: [
      {
        label: 'Product Type',
        value: 'Tractor Quick Release Coupling',
      },
      {
        label: 'Category',
        value: 'Tractor QRC',
      },
      {
        label: 'Compatibility',
        value: 'Massey',
      },
      {
        label: 'Fitment',
        value: 'Direct-Fit',
      },
    ],
  },

  {
    id: 'qrc-power-tech',
    name: 'QRC. Power Tech',
    category: 'Tractor QRC',
    image: '/qrc_powertech.png',
    spec: 'Compatible: Power Tech',

    description:
      'Direct-fit quick coupling designed for Power Tech tractor hydraulic applications, providing secure and efficient hydraulic connections.',

    applications: [
      'Tractor Hydraulic Systems',
      'Agricultural Equipment',
    ],

    compatibility: [
      'Power Tech',
    ],

    specifications: [
      {
        label: 'Product Type',
        value: 'Tractor Quick Release Coupling',
      },
      {
        label: 'Category',
        value: 'Tractor QRC',
      },
      {
        label: 'Compatibility',
        value: 'Power Tech',
      },
      {
        label: 'Fitment',
        value: 'Direct-Fit',
      },
    ],
  },

  {
    id: 'qrc-mahindra',
    name: 'QRC. Mahindra',
    category: 'Tractor QRC',
    image: '/qrc_mahindra.png',
    spec: 'Compatible: Mahindra',

    description:
      'Direct-fit quick coupling designed for Mahindra tractor hydraulic applications, providing secure and efficient hydraulic connections.',

    applications: [
      'Tractor Hydraulic Systems',
      'Agricultural Equipment',
    ],

    compatibility: [
      'Mahindra',
    ],

    specifications: [
      {
        label: 'Product Type',
        value: 'Tractor Quick Release Coupling',
      },
      {
        label: 'Category',
        value: 'Tractor QRC',
      },
      {
        label: 'Compatibility',
        value: 'Mahindra',
      },
      {
        label: 'Fitment',
        value: 'Direct-Fit',
      },
    ],
  },

  {
    id: 'qrc-dust-cap',
    name: 'QRC. Dust Cap (Hose Set)',
    category: 'Tractor QRC',
    image: '/qrc_dustcap.png',
    spec: 'Compatible: Dust Cap',

    description:
      'Dust cap hose set designed for hydraulic coupling protection and suitable for tractor hydraulic applications.',

    applications: [
      'Tractor Hydraulic Systems',
      'Hydraulic Coupling Protection',
      'Agricultural Equipment',
    ],

    compatibility: [
      'Dust Cap',
    ],

    specifications: [
      {
        label: 'Product Type',
        value: 'Dust Cap (Hose Set)',
      },
      {
        label: 'Category',
        value: 'Tractor QRC',
      },
      {
        label: 'Compatibility',
        value: 'Dust Cap',
      },
    ],
  },

  // =========================================================
  // METRIC QRC
  // =========================================================

  {
    id: 'qrc-20-1-2-x-20-1-2',
    name: 'QRC. 20/1.2 x 20/1.2',
    category: 'Metric QRC',
    image: '/qrc_18_1.2.png',
    spec: 'Size: 20/1.2 x 20/1.2',

    description:
      'Precision-manufactured metric quick release coupling designed for reliable fluid connections in hydraulic circuits.',

    applications: [
      'OEM Hydraulic Circuits',
      'Agricultural Hydraulic Systems',
      'Industrial Hydraulic Systems',
    ],

    compatibility: [
      'Metric Hydraulic Applications',
    ],

    specifications: [
      {
        label: 'Product Type',
        value: 'Metric Quick Release Coupling',
      },
      {
        label: 'Category',
        value: 'Metric QRC',
      },
      {
        label: 'Size',
        value: '20/1.2 x 20/1.2',
      },
    ],
  },

  {
    id: 'qrc-18-1-2-x-18-1-2',
    name: 'QRC. 18/1.2 x 18/1.2',
    category: 'Metric QRC',
    image: '/qrc_18_1.2.png',
    spec: 'Size: 18/1.2 x 18/1.2',

    description:
      'Precision-manufactured metric quick release coupling designed for reliable fluid connections in hydraulic circuits.',

    applications: [
      'OEM Hydraulic Circuits',
      'Agricultural Hydraulic Systems',
      'Industrial Hydraulic Systems',
    ],

    compatibility: [
      'Metric Hydraulic Applications',
    ],

    specifications: [
      {
        label: 'Product Type',
        value: 'Metric Quick Release Coupling',
      },
      {
        label: 'Category',
        value: 'Metric QRC',
      },
      {
        label: 'Size',
        value: '18/1.2 x 18/1.2',
      },
    ],
  },

  // =========================================================
  // FITTINGS
  // =========================================================

  {
    id: 'qrc-3-8-male',
    name: 'QRC. 3/8 Male',
    category: 'Fittings',
    image: '/round_male.png',
    spec: 'Thread: 3/8 Male',

    description:
      'Male-thread hydraulic fitting designed for secure hose and cylinder connections.',

    applications: [
      'Hydraulic Hose Connections',
      'Hydraulic Cylinder Connections',
      'Agricultural Equipment',
    ],

    compatibility: [
      'Hydraulic Hose Systems',
    ],

    specifications: [
      {
        label: 'Product Type',
        value: 'Hydraulic Fitting',
      },
      {
        label: 'Category',
        value: 'Fittings',
      },
      {
        label: 'Thread',
        value: '3/8 Male',
      },
    ],
  },

  {
    id: 'qrc-1-2-male',
    name: 'QRC. 1/2 Male',
    category: 'Fittings',
    image: '/qrc_1.2_male.png',
    spec: 'Thread: 1/2 Male',

    description:
      'Male-thread hydraulic fitting designed for secure hose and cylinder connections.',

    applications: [
      'Hydraulic Hose Connections',
      'Hydraulic Cylinder Connections',
      'Agricultural Equipment',
    ],

    compatibility: [
      'Hydraulic Hose Systems',
    ],

    specifications: [
      {
        label: 'Product Type',
        value: 'Hydraulic Fitting',
      },
      {
        label: 'Category',
        value: 'Fittings',
      },
      {
        label: 'Thread',
        value: '1/2 Male',
      },
    ],
  },
]