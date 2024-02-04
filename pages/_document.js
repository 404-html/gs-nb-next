import fontsCSS from '@native-base/icons/FontsCSS';
import { AppRegistry } from 'react-native-web';
import { flush } from '@gluestack-style/react';
import { Main } from 'next/document';
import * as React from 'react';
import NextDocument, { Html, Head, NextScript } from 'next/document';

function Document() {
    return (
        <Html className="gs" lang="en">
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

async function getInitialProps({ renderPage }) {
    AppRegistry.registerComponent('Main', () => Main);
    const { getStyleElement } = AppRegistry.getApplication('Main');
    const page = await renderPage();
    const styles = [
        // eslint-disable-next-line react/jsx-key
        <style dangerouslySetInnerHTML={{ __html: fontsCSS }} />,
        getStyleElement(),
        ...flush(),
    ];
    return { ...page, styles: React.Children.toArray(styles) };
}

Document.getInitialProps = getInitialProps;

export default Document;
