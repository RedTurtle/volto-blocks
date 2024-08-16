import { defineMessages, type IntlShape } from 'react-intl';
import { addStyling } from '@plone/volto/helpers/Extensions/withBlockSchemaEnhancer';
import type { BlockConfigBase, JSONSchema } from '@plone/types';

export type Text7Data = {
  '@type': 'text7';
  images?: Array<{ '@id': string; image: string }>;
  img_column_width?: string;
  title?: string;
  text?: object;
  right?: boolean;
  // TODO fix any
  linkHref?: any;
  linkTitle?: string;
};

export const Text7Schema = ({
  data,
  intl,
}: {
  data: Text7Data;
  intl: IntlShape;
}): JSONSchema => {
  const schema = {
    title: intl.formatMessage(messages.title),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['title', 'img_column_width', 'images'],
      },
      {
        id: 'cta',
        title: intl.formatMessage(messages.cta_fieldset_title),
        fields: ['linkHref', 'linkTitle'],
      },
    ],
    properties: {
      images: {
        title: intl.formatMessage(messages.images_title),
        widget: 'object_list',
        schema: {
          title: intl.formatMessage(messages.image_title),
          fieldsets: [
            {
              id: 'default',
              title: 'Default',
              fields: ['image'],
            },
          ],
          properties: {
            image: {
              title: intl.formatMessage(messages.image_title),
              widget: 'image',
            },
          },
          required: [],
        },
      },
      img_column_width: {
        title: intl.formatMessage(messages.img_column_width_title),
        description: intl.formatMessage(messages.img_column_width_description),
        default: '6',
        choices: [
          ['1', '8%'],
          ['2', '16%'],
          ['3', '25%'],
          ['4', '33%'],
          ['5', '41%'],
          ['6', '50%'],
          ['7', '58%'],
          ['8', '66%'],
          ['9', '75%'],
          ['10', '83%'],
          ['11', '91%'],
        ],
      },
      title: {
        title: intl.formatMessage(messages.title_title),
      },
      // TODO necessary?
      // text: {
      //   title: intl.formatMessage(messages.text_title),
      //   widget: 'slate',
      // },
      linkTitle: {
        title: intl.formatMessage(messages.LinkTitle),
        default: intl.formatMessage(messages.cta_title_default),
      },
      linkHref: {
        title: intl.formatMessage(messages.LinkTo),
        widget: 'object_browser',
        mode: 'link',
        selectedItemAttrs: ['Title', 'Description'],
        allowExternals: true,
      },
    },
    required: ['title'],
  };

  addStyling({ schema, intl, formData: data });

  // @ts-ignore
  schema.properties.styles.schema.properties.align = {
    widget: 'align',
    title: intl.formatMessage(messages.align),
    // actions: ['left', 'right', 'center'],
    actions: ['left', 'right'],
    default: 'left',
  };

  // @ts-ignore
  schema.properties.styles.schema.fieldsets[0].fields = ['align'];

  return schema;
};

const messages = defineMessages({
  title: {
    id: 'redturtle__volto-blocks__text7_title',
    defaultMessage: 'Text 7',
  },
  images_title: {
    id: 'redturtle__volto-blocks__text7_images_title',
    defaultMessage: 'Images',
  },
  image_title: {
    id: 'redturtle__volto-blocks__text7_image_title',
    defaultMessage: 'Image',
  },
  img_column_width_title: {
    id: 'redturtle__volto-blocks__text7_img_column_width_title',
    defaultMessage: 'Image column width',
  },
  img_column_width_description: {
    id: 'redturtle__volto-blocks__text7_img_column_width_description',
    defaultMessage: 'Width of the image column',
  },
  title_title: {
    id: 'Title',
    defaultMessage: 'Title',
  },
  text_title: {
    id: 'Text',
    defaultMessage: 'Text',
  },
  cta_fieldset_title: {
    id: 'redturtle__volto-blocks__cta_fieldset_title',
    defaultMessage: 'Call to action',
  },
  // copied from core listing block
  LinkTitle: {
    id: 'Link title',
    defaultMessage: 'Link Title',
  },
  // copied from core listing block
  LinkTo: {
    id: 'Link to',
    defaultMessage: 'Link to',
  },
  cta_title_default: {
    id: 'redturtle__volto-blocks__cta_title_default',
    defaultMessage: 'Read more',
  },
  // copied from core teaser block
  align: {
    id: 'Alignment',
    defaultMessage: 'Alignment',
  },
});

export type Text7Config = Omit<BlockConfigBase, 'blockSchema'> & {
  blockSchema: typeof Text7Schema;
};
