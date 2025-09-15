import React from 'react';

import layout from '@splunk/react-page';
import { getUserTheme } from '@splunk/splunk-utils/themes';
import IndexList from './IndexList';
import { StyledContainer } from './StartStyles';

getUserTheme()
    .then((theme) => {
        layout(
            <StyledContainer>
                <IndexList />
            </StyledContainer>,
            {
                theme,
            }
        );
    })
    .catch((e) => {
        const errorEl = document.createElement('span');
        errorEl.innerHTML = e;
        document.body.appendChild(errorEl);
    });
