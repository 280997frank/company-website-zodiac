import photo1 from "@/assets/images/labs/Header Image.png";

export interface TBlogList {
  id: number;
  img: any;
  category: string;
  title: string;
  createdAt: string;
  description: string;
  shortDescription: string;
  color: string;
}

export const dataLabs: TBlogList[] = [
  {
    id: 1,
    img: photo1.src,
    category: "category1",
    title: "Blog Post/Article Title Goes Here",
    createdAt: "08 JUNE 2022",
    shortDescription:
      "Short synopsis of the post to tease reader to click. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar sed congue viverra volutpat ridiculus amet. Congue eget diam velit ornare dictum.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet nullam eu sapien velit morbi sapien nisi. Cursus ornare rhoncus sollicitudin urna dolor felis, consectetur. Aliquam, nulla neque id curabitur. Quis vitae commodo, ultrices eros posuere felis sagittis. Donec cursus pellentesque pellentesque felis cursus tincidunt non. Scelerisque libero orci, turpis eget lorem id turpis lorem. Enim molestie tellus massa quam magnis congue. Nibh eu tristique orci neque, mauris. Eget bibendum imperdiet cursus nulla pulvinar. Lectus morbi enim vitae nisl netus in. Sed leo aliquam augue augue dignissim rhoncus. Ac, lobortis penatibus elementum turpis varius. Ante ultrices risus quis etiam tortor commodo eu nunc.<br/><br/><br/>\n" +
      "\n" +
      "Nisl, tristique tincidunt cursus ultrices quisque nullam aenean sit amet. Rhoncus posuere vivamus eget nunc. Nullam enim molestie aliquam iaculis. Vitae sed egestas tortor semper vehicula sed. Diam, convallis placerat elit commodo. Laoreet sed habitant nunc adipiscing amet, scelerisque mi quisque. Ante maecenas orci, varius suscipit est vitae, amet. Vitae id lacus mi hac id pellentesque sit turpis.<br/><br/><br/>\n" +
      "\n" +
      "Platea in cras pharetra posuere sollicitudin ultrices erat sagittis vel. Convallis vitae dictum nec senectus faucibus quis. Lectus facilisis lobortis sollicitudin amet arcu ultrices. Facilisis fermentum quis mauris amet cum non semper. Vulputate tristique vitae pharetra ultrices nec pulvinar eget dolor, egestas. Placerat morbi aenean ut mi blandit. Diam.",
    color: "#00FFDA",
  },
  {
    id: 2,
    img: photo1.src,
    category: "category2",
    title: "Blog Post/Article Title Goes Here",
    createdAt: "08 JUNE 2022",
    shortDescription:
      "Short synopsis of the post to tease reader to click. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar sed congue viverra volutpat ridiculus amet. Congue eget diam velit ornare dictum.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet nullam eu sapien velit morbi sapien nisi. Cursus ornare rhoncus sollicitudin urna dolor felis, consectetur. Aliquam, nulla neque id curabitur. Quis vitae commodo, ultrices eros posuere felis sagittis. Donec cursus pellentesque pellentesque felis cursus tincidunt non. Scelerisque libero orci, turpis eget lorem id turpis lorem. Enim molestie tellus massa quam magnis congue. Nibh eu tristique orci neque, mauris. Eget bibendum imperdiet cursus nulla pulvinar. Lectus morbi enim vitae nisl netus in. Sed leo aliquam augue augue dignissim rhoncus. Ac, lobortis penatibus elementum turpis varius. Ante ultrices risus quis etiam tortor commodo eu nunc.<br/><br/><br/>\n" +
      "\n" +
      "Nisl, tristique tincidunt cursus ultrices quisque nullam aenean sit amet. Rhoncus posuere vivamus eget nunc. Nullam enim molestie aliquam iaculis. Vitae sed egestas tortor semper vehicula sed. Diam, convallis placerat elit commodo. Laoreet sed habitant nunc adipiscing amet, scelerisque mi quisque. Ante maecenas orci, varius suscipit est vitae, amet. Vitae id lacus mi hac id pellentesque sit turpis.<br/><br/><br/>\n" +
      "\n" +
      "Platea in cras pharetra posuere sollicitudin ultrices erat sagittis vel. Convallis vitae dictum nec senectus faucibus quis. Lectus facilisis lobortis sollicitudin amet arcu ultrices. Facilisis fermentum quis mauris amet cum non semper. Vulputate tristique vitae pharetra ultrices nec pulvinar eget dolor, egestas. Placerat morbi aenean ut mi blandit. Diam.",
    color: "#C992FF",
  },
  {
    id: 3,
    img: photo1.src,
    category: "category3",
    title: "Blog Post/Article Title Goes Here",
    createdAt: "08 JUNE 2022",
    shortDescription:
      "Short synopsis of the post to tease reader to click. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar sed congue viverra volutpat ridiculus amet. Congue eget diam velit ornare dictum.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet nullam eu sapien velit morbi sapien nisi. Cursus ornare rhoncus sollicitudin urna dolor felis, consectetur. Aliquam, nulla neque id curabitur. Quis vitae commodo, ultrices eros posuere felis sagittis. Donec cursus pellentesque pellentesque felis cursus tincidunt non. Scelerisque libero orci, turpis eget lorem id turpis lorem. Enim molestie tellus massa quam magnis congue. Nibh eu tristique orci neque, mauris. Eget bibendum imperdiet cursus nulla pulvinar. Lectus morbi enim vitae nisl netus in. Sed leo aliquam augue augue dignissim rhoncus. Ac, lobortis penatibus elementum turpis varius. Ante ultrices risus quis etiam tortor commodo eu nunc.<br/><br/><br/>\n" +
      "\n" +
      "Nisl, tristique tincidunt cursus ultrices quisque nullam aenean sit amet. Rhoncus posuere vivamus eget nunc. Nullam enim molestie aliquam iaculis. Vitae sed egestas tortor semper vehicula sed. Diam, convallis placerat elit commodo. Laoreet sed habitant nunc adipiscing amet, scelerisque mi quisque. Ante maecenas orci, varius suscipit est vitae, amet. Vitae id lacus mi hac id pellentesque sit turpis.<br/><br/><br/>\n" +
      "\n" +
      "Platea in cras pharetra posuere sollicitudin ultrices erat sagittis vel. Convallis vitae dictum nec senectus faucibus quis. Lectus facilisis lobortis sollicitudin amet arcu ultrices. Facilisis fermentum quis mauris amet cum non semper. Vulputate tristique vitae pharetra ultrices nec pulvinar eget dolor, egestas. Placerat morbi aenean ut mi blandit. Diam.",
    color: "#22CBFF",
  },
  {
    id: 4,
    img: photo1.src,
    category: "category4",
    title: "Blog Post/Article Title Goes Here",
    createdAt: "08 JUNE 2022",
    shortDescription:
      "Short synopsis of the post to tease reader to click. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar sed congue viverra volutpat ridiculus amet. Congue eget diam velit ornare dictum.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet nullam eu sapien velit morbi sapien nisi. Cursus ornare rhoncus sollicitudin urna dolor felis, consectetur. Aliquam, nulla neque id curabitur. Quis vitae commodo, ultrices eros posuere felis sagittis. Donec cursus pellentesque pellentesque felis cursus tincidunt non. Scelerisque libero orci, turpis eget lorem id turpis lorem. Enim molestie tellus massa quam magnis congue. Nibh eu tristique orci neque, mauris. Eget bibendum imperdiet cursus nulla pulvinar. Lectus morbi enim vitae nisl netus in. Sed leo aliquam augue augue dignissim rhoncus. Ac, lobortis penatibus elementum turpis varius. Ante ultrices risus quis etiam tortor commodo eu nunc.<br/><br/><br/>\n" +
      "\n" +
      "Nisl, tristique tincidunt cursus ultrices quisque nullam aenean sit amet. Rhoncus posuere vivamus eget nunc. Nullam enim molestie aliquam iaculis. Vitae sed egestas tortor semper vehicula sed. Diam, convallis placerat elit commodo. Laoreet sed habitant nunc adipiscing amet, scelerisque mi quisque. Ante maecenas orci, varius suscipit est vitae, amet. Vitae id lacus mi hac id pellentesque sit turpis.<br/><br/><br/>\n" +
      "\n" +
      "Platea in cras pharetra posuere sollicitudin ultrices erat sagittis vel. Convallis vitae dictum nec senectus faucibus quis. Lectus facilisis lobortis sollicitudin amet arcu ultrices. Facilisis fermentum quis mauris amet cum non semper. Vulputate tristique vitae pharetra ultrices nec pulvinar eget dolor, egestas. Placerat morbi aenean ut mi blandit. Diam.",
    color: "#00FFDA",
  },
  {
    id: 5,
    img: photo1.src,
    category: "category5",
    title: "Blog Post/Article Title Goes Here",
    createdAt: "08 JUNE 2022",
    shortDescription:
      "Short synopsis of the post to tease reader to click. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar sed congue viverra volutpat ridiculus amet. Congue eget diam velit ornare dictum.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet nullam eu sapien velit morbi sapien nisi. Cursus ornare rhoncus sollicitudin urna dolor felis, consectetur. Aliquam, nulla neque id curabitur. Quis vitae commodo, ultrices eros posuere felis sagittis. Donec cursus pellentesque pellentesque felis cursus tincidunt non. Scelerisque libero orci, turpis eget lorem id turpis lorem. Enim molestie tellus massa quam magnis congue. Nibh eu tristique orci neque, mauris. Eget bibendum imperdiet cursus nulla pulvinar. Lectus morbi enim vitae nisl netus in. Sed leo aliquam augue augue dignissim rhoncus. Ac, lobortis penatibus elementum turpis varius. Ante ultrices risus quis etiam tortor commodo eu nunc.<br/><br/><br/>\n" +
      "\n" +
      "Nisl, tristique tincidunt cursus ultrices quisque nullam aenean sit amet. Rhoncus posuere vivamus eget nunc. Nullam enim molestie aliquam iaculis. Vitae sed egestas tortor semper vehicula sed. Diam, convallis placerat elit commodo. Laoreet sed habitant nunc adipiscing amet, scelerisque mi quisque. Ante maecenas orci, varius suscipit est vitae, amet. Vitae id lacus mi hac id pellentesque sit turpis.<br/><br/><br/>\n" +
      "\n" +
      "Platea in cras pharetra posuere sollicitudin ultrices erat sagittis vel. Convallis vitae dictum nec senectus faucibus quis. Lectus facilisis lobortis sollicitudin amet arcu ultrices. Facilisis fermentum quis mauris amet cum non semper. Vulputate tristique vitae pharetra ultrices nec pulvinar eget dolor, egestas. Placerat morbi aenean ut mi blandit. Diam.",
    color: "#00FFDA",
  },
];
