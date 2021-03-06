/**
 * Created by: Umrzoq Toshkentov ()
 */
import {join} from 'path';

import CopyPlugin from 'copy-webpack-plugin';

import {rootDir} from '../utils/env';

const config = {
    patterns: [
        {from: join(rootDir, './src/assets'), to: 'assets'},
        {from: join(rootDir, './src/manifest.json'), to: 'manifest'},
    ],
};

export const copyPlugin = new CopyPlugin(config);
