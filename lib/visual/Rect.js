/**
 * Rectangular Stimulus.
 *
 * @author Alain Pitiot
 * @copyright (c) 2017-2020 Ilixa Ltd. (http://ilixa.com) (c) 2020-2024 Open Science Tools Ltd. (https://opensciencetools.org)
 * @license Distributed under the terms of the MIT License
 */

import { Color } from "../util/Color.js";
import { ShapeStim } from "./ShapeStim.js";

/**
 * <p>Rectangular visual stimulus.</p>
 *
 * @extends ShapeStim
 */
export class Rect extends ShapeStim
{
	/**
	 * @memberOf module:visual
	 * @param {Object} options
	 * @param {String} options.name - the name used when logging messages from this stimulus
	 * @param {module:core.Window} options.win - the associated Window
	 * @param {number} [options.lineWidth= 1.5] - the line width
	 * @param {Color} [options.lineColor= 'white'] the line color
	 * @param {Color} [options.fillColor= undefined] - the fill color
	 * @param {number} [options.opacity= 1.0] - the opacity
	 * @param {number} [options.width= 0.5] - the width of the rectangle
	 * @param {number} [options.height= 0.5] - the height of the rectangle
	 * @param {Array.<number>} [options.pos= [0, 0]] - the position
	 * @param {string} [options.anchor = "center"] - sets the origin point of the stim
	 * @param {number} [options.size= 1.0] - the size
	 * @param {number} [options.ori= 0.0] - the orientation (in degrees)
	 * @param {string} [options.units= "height"] - the units of the stimulus vertices, size and position
	 * @param {number} [options.contrast= 1.0] - the contrast
	 * @param {number} [options.depth= 0] - the depth
	 * @param {boolean} [options.interpolate= true] - whether or not the shape is interpolated
	 * @param {boolean} [options.autoDraw= false] - whether or not the stimulus should be automatically drawn on every frame flip
	 * @param {boolean} [options.autoLog= false] - whether or not to log
	 */
	constructor({ name, win, lineWidth, lineColor, fillColor, opacity, width, height, pos, anchor, size, ori, units, contrast, depth, interpolate, autoDraw, autoLog } = {})
	{
		super({
			name,
			win,
			lineWidth,
			lineColor,
			fillColor,
			opacity,
			pos,
			anchor,
			ori,
			size,
			units,
			contrast,
			depth,
			interpolate,
			autoDraw,
			autoLog,
		});

		this._psychoJS.logger.debug("create a new Rect with name: ", name);

		this._addAttribute(
			"width",
			width,
			0.5,
		);
		this._addAttribute(
			"height",
			height,
			0.5,
		);

		this._updateVertices();

		if (this._autoLog)
		{
			this._psychoJS.experimentLogger.exp(`Created ${this.name} = ${this.toString()}`);
		}
	}

	/**
	 * Setter for the width attribute.
	 *
	 * @param {number} width - the rectangle width
	 * @param {boolean} [log= false] - whether of not to log
	 */
	setWidth(width, log = false)
	{
		this._psychoJS.logger.debug("set the width of Rect: ", this.name, "to: ", width);

		const hasChanged = this._setAttribute("width", width, log);

		if (hasChanged)
		{
			this._updateVertices();
		}
	}

	/**
	 * Setter for the height attribute.
	 *
	 * @param {number} height - the rectangle height
	 * @param {boolean} [log= false] - whether of not to log
	 */
	setHeight(height, log = false)
	{
		this._psychoJS.logger.debug("set the height of Rect: ", this.name, "to: ", height);

		const hasChanged = this._setAttribute("height", height, log);

		if (hasChanged)
		{
			this._updateVertices();
		}
	}

	/**
	 * Update the vertices.
	 *
	 * @protected
	 */
	_updateVertices()
	{
		this._psychoJS.logger.debug("update the vertices of Rect: ", this.name);

		const halfWidth = this._width / 2.0;
		const halfHeight = this._height / 2.0;

		this.setVertices([
			[-halfWidth, -halfHeight],
			[halfWidth, -halfHeight],
			[halfWidth, halfHeight],
			[-halfWidth, halfHeight],
		]);
	}
}
