import * as PIXI from 'pixi.js';
import IsoMap from './IsoMap';
declare class IsoTile extends PIXI.Container {
    private _z;
    private _tilemap;
    private _tileX;
    private _tileY;
    private _tileHeight;
    private _attributes;
    private _globalAttributes;
    private _frame;
    private _frameCount;
    private _topTexture;
    private _middleLeftTexture;
    private _bottomLeftTexture;
    private _topLeftWallTexture;
    private _middleRightTexture;
    private _bottomRightTexture;
    private _topRightWallTexture;
    constructor(tilemap: IsoMap, x: number, y: number, height: number, attributes: IsoTile.Attributes);
    onClick: (event: PIXI.interaction.InteractionEvent) => void;
    private _setupRects;
    private _updateRect;
    private _updatePosition;
    private _buildBottomSprite;
    private _buildMiddleSprites;
    private _buildTopSprite;
    private _calculateMaxHeight;
    private _buildSprites;
    private _updateFrame;
    get z(): number;
    set z(value: number);
    update(delta: number): void;
}
declare module IsoTile {
    interface Frame {
        x: number;
        y: number;
    }
    interface Attributes {
        tileset: number;
        frames: Frame[];
        frameDelay: number;
        type: string;
    }
}
export default IsoTile;
