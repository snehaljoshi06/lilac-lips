import { Product, GalleryPhoto, TimelineMilestone, DiaryEntry, IngredientInfo } from '../types';

export const BRAND_CONFIG = {
  name: 'LILAC LIPS',
  tagline: 'A Little Love for Your Lips.',
  subtagline: 'A lip balm we made in our college chemistry lab, now with a little brand of its own.',
  currency: '₹',
  unitPrice: 200,
  storySnippet: 'Lilac Lips started as a product-making project in our college chemistry lab. We wanted to create something of our own, so we made a lip balm and turned our idea into a little brand. This is our first step, and we\'re excited to share it with you.',
  projectNotice: 'Student Chemistry Project · Batch 01 Prototype',
};

export const LILAC_LIP_BALM: Product = {
  id: 'lilac-lips-balm-01',
  name: 'Lilac Lips Lip Balm',
  tagline: 'A Little Love for Your Lips.',
  price: 200,
  packaging: 'Small transparent round jar',
  appearance: 'Pink-purple balm with subtle two-tone swirl',
  description: 'A little lip balm made with care in our college chemistry lab.',
  batch: 'Batch 01 — Chemistry Lab Prototype',
  images: [
    {
      src: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_11.35.22_AM_6729fdd5.jpeg',
      alt: 'Our actual handmade Lilac Lips balm in its transparent round jar held in hand',
      label: 'Our Actual Jar',
      isPrimary: true,
    },
    {
      src: '/assets/aistudio/image_1af657a5.png',
      alt: 'Professionally styled concept photography for Lilac Lips with floral background',
      label: 'Styled Presentation',
      isPrimary: false,
    },
    {
      src: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_11.35.21_AM_a5601248.jpeg',
      alt: 'Blending the emollient base into the rich berry pigment on the laboratory tile',
      label: 'Lab Blending',
      isPrimary: false,
    },
    {
      src: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_11.35.21_AM__1__0dac55d1.jpeg',
      alt: 'College students heating the formulation beaker over the Bunsen burner',
      label: 'Chemistry Lab Work',
      isPrimary: false,
    },
  ],
};

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'photo-jar',
    src: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_11.35.22_AM_6729fdd5.jpeg',
    alt: 'The finished Lilac Lips lip balm held in hand right after cooling',
    title: 'Our Finished Lip Balm Jar',
    caption: 'Our actual handmade product: a compact transparent round jar filled with our freshly settled pink-purple lip balm, photographed in college.',
    category: 'product',
  },
  {
    id: 'photo-heating',
    src: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_11.35.21_AM__1__0dac55d1.jpeg',
    alt: 'Student lab partners heating the formulation in a glass beaker over a blue Bunsen burner flame',
    title: 'Bunsen Burner Heating',
    caption: 'Carefully regulating heat over the Bunsen burner in our college chemistry lab while stirring the deep ruby-plum blend with a glass rod.',
    category: 'lab',
  },
  {
    id: 'photo-blending',
    src: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_11.35.21_AM_a5601248.jpeg',
    alt: 'Lab spatula mixing the white emollient base into the berry extract on a laboratory watch glass',
    title: 'Base & Pigment Blending',
    caption: 'Using a lab spatula to incorporate the emollient base into our botanical berry pigment on the ceramic tile before filling.',
    category: 'lab',
  },
  {
    id: 'photo-styled',
    src: '/assets/aistudio/image_1af657a5.png',
    alt: 'Styled studio photograph of a rose-gold trimmed balm jar with soft pink floral blossoms',
    title: 'Creative Brand Vision',
    caption: 'Our promotional styling concept shot celebrating the soft lilac and floral aesthetic we envision for the brand as we grow.',
    category: 'styling',
  },
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    step: '01',
    title: 'The Idea',
    description: 'During our college chemistry laboratory coursework on formulations and emulsions, we decided to make a real cosmetic product we would love using ourselves.',
    note: 'Lab experiment brainstorm',
  },
  {
    step: '02',
    title: 'Making the First Batch',
    description: 'We measured the emollient base, heated the mixture over the Bunsen burner, blended the rich berry tint, and hand-poured our first trial jars.',
    note: 'College Chemistry Lab',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_11.35.21_AM__1__0dac55d1.jpeg',
  },
  {
    step: '03',
    title: 'Photographing Our Product',
    description: 'We captured our actual jar on campus and composed aesthetic studio photos to honestly show what we crafted with our own hands.',
    note: 'Real student photography',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_11.35.22_AM_6729fdd5.jpeg',
  },
  {
    step: '04',
    title: 'Building the Website',
    description: 'To share our journey, document our chemistry lessons, and build our brand identity, we designed and coded this digital home for Lilac Lips.',
    note: 'From lab bench to web',
  },
];

export const LAB_DIARY_ENTRIES: DiaryEntry[] = [
  {
    id: 'diary-1',
    title: 'The Bunsen Burner Trial',
    dateTag: 'Lab Session #1',
    text: 'Getting the temperature right took patience. If it gets too hot, the natural oils oxidize; too cool, and the wax hardens before uniform blending. We watched the beaker closely as the deep ruby hues started swirling.',
    annotation: 'Observation: Constant stirring with glass rod prevents hot-spots.',
    photo: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_11.35.21_AM__1__0dac55d1.jpeg',
    photoAlt: 'Two students watching the beaker closely over the flame',
  },
  {
    id: 'diary-2',
    title: 'Blending on the Tile',
    dateTag: 'Formulation Log',
    text: 'We spatula-tested the white base with our berry solution. Watching the white paste transform into a smooth, buttery lilac tint was the most satisfying moment of the day.',
    annotation: 'Note: Ratio adjusted for soft spreadability at room temperature (~25°C).',
    photo: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_11.35.21_AM_a5601248.jpeg',
    photoAlt: 'Spatula mixing base into the red pigment',
  },
  {
    id: 'diary-3',
    title: 'The Two-Tone Settle',
    dateTag: 'Batch 01 Jar #1',
    text: 'When we poured into the clear acrylic jar, the mixture naturally settled with a deeper purple base and a delicate soft pink surface. It gave each jar a one-of-a-kind handmade personality.',
    annotation: 'Result: Perfectly sealed, smooth balm with a gentle satin sheen.',
    photo: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_11.35.22_AM_6729fdd5.jpeg',
    photoAlt: 'Hand holding the finished lip balm jar',
  },
];

export const CHEMISTRY_INSIGHTS = [
  {
    title: 'Occlusive & Emollient Harmony',
    subtitle: 'Moisture Barrier Chemistry',
    description: 'Occlusives form a physical hydrophobic layer that traps moisture and slows transepidermal water loss (TEWL), while emollients fill microscopic lip grooves for immediate smoothness.',
  },
  {
    title: 'Phase Transition Equilibrium',
    subtitle: 'Thermal Stability (~25°C to 37°C)',
    description: 'A great lip balm must remain structurally solid inside the jar in a warm classroom (~25°C), yet melt gently when swiped across lips at human physiological temperature (~37°C).',
  },
  {
    title: 'Colloidal Pigment Dispersion',
    subtitle: 'Gentle Lilac Hue',
    description: 'Suspending safe cosmetic pigments uniformly throughout a non-polar oil/wax matrix requires careful kinetic agitation so the color glides on translucent rather than patchy.',
  },
];

export const INGREDIENT_PLACEHOLDERS: IngredientInfo[] = [
  {
    name: 'Emollient Wax Matrix',
    role: 'Provides structural firmness in the jar and delivers long-lasting moisture barrier on lips.',
    status: 'pending',
    note: 'Lab notes confirmation pending',
  },
  {
    name: 'Conditioning Oil Phase',
    role: 'Softens chapped skin, prevents dry flaking, and imparts smooth glide during application.',
    status: 'pending',
    note: 'Lab notes confirmation pending',
  },
  {
    name: 'Berry Lilac Pigment',
    role: 'Gives the balm its signature soft pink-purple tint and gentle translucent wash on lips.',
    status: 'pending',
    note: 'Lab notes confirmation pending',
  },
];
