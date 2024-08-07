import React from 'react';
// import redraft from 'redraft';
// import { defineMessages, useIntl } from 'react-intl';
import { flattenToAppURL } from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';

import config from '@plone/registry';

// const messages = defineMessages({
//   cta_title_default: {
//     id: 'cta_title_default',
//     defaultMessage: 'Go to content',
//   },
// });

type Props = {
  data: Record<string, any>;
};

export default function View(props: Props) {
  // const intl = useIntl();
  const { data } = props;

  const img_column_width = data.img_column_width
    ? parseInt(data.img_column_width)
    : 6;

  return (
    <div className="block-text7">
      TEST
      {/* <Grid className="block-content" verticalAlign="middle">
        <Grid.Row
          columns={2}
          className={cx({
            'block-right': data.right,
          })}
        >
          <Grid.Column computer={img_column_width} tablet={12} mobile={12}>
            {data.url && (
              <Image
                src={`${flattenToAppURL(props.data.url)}/@@images/image/larger`}
                className="block-text7-image"
              />
            )}
          </Grid.Column>
          <Grid.Column computer={12 - img_column_width} tablet={12} mobile={12}>
            <div className="block-text7-body">
              {data.title && <h3 className="title">{data.title}</h3>}
              <div className="content">
                {redraft(
                  data.content,
                  config.settings.richtextViewSettings.ToHTMLRenderers,
                  config.settings.richtextViewSettings.ToHTMLOptions,
                )}
              </div>
              {data.has_cta && (
                <div className="buttonBottom">
                  <Button
                    as={UniversalLink}
                    size="small"
                    href={
                      data.link_to
                        ? flattenToAppURL(data.link_to[0]?.['@id'])
                        : data.link_to_external
                        ? data.link_to_external
                        : null
                    }
                    arrow={true}
                  >
                    {data.cta_title ||
                      intl.formatMessage(messages.cta_title_default)}
                  </Button>
                </div>
              )}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid> */}
    </div>
  );
}
