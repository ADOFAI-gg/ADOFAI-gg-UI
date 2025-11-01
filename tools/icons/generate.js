import { importDirectory } from '@iconify/tools/lib/import/directory.cjs';
import { cleanupSVG } from '@iconify/tools/lib/svg/cleanup';
import { runSVGO } from '@iconify/tools/lib/optimise/svgo';
import { parseColors, isEmptyColor } from '@iconify/tools/lib/colors/parse';
import { promises as fs } from 'fs';

(async () => {
	const iconSet = await importDirectory('svg', {
		prefix: 'gg'
	});

	iconSet.forEachSync((name, type) => {
		if (type !== 'icon') {
			return;
		}

		const svg = iconSet.toSVG(name);
		if (!svg) {
			// Invalid icon
			iconSet.remove(name);
			return;
		}

		// Clean up and optimise icons
		try {
			cleanupSVG(svg);
			parseColors(svg, {
				defaultColor: 'currentColor',
				callback: (attr, colorStr, color) => {
					return !color || isEmptyColor(color) ? colorStr : 'currentColor';
				}
			});
			runSVGO(svg);
		} catch (err) {
			// Invalid icon
			console.error(`Error parsing ${name}:`, err);
			iconSet.remove(name);
			return;
		}

		// Update icon
		iconSet.fromSVG(name, svg);
	});

	// Export as IconifyJSON
	const exported = JSON.stringify(iconSet.export(), null, '\t') + '\n';

	// Save to file
	await fs.writeFile(`../../src/lib/icons/global.json`, exported, 'utf8');
})();
