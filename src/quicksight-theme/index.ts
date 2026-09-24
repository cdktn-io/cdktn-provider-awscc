/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface QuicksightThemeConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#aws_account_id QuicksightTheme#aws_account_id}
  */
  readonly awsAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#base_theme_id QuicksightTheme#base_theme_id}
  */
  readonly baseThemeId: string;
  /**
  * <p>The theme configuration. This configuration contains all of the display properties for
  *             a theme.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#configuration QuicksightTheme#configuration}
  */
  readonly configuration: QuicksightThemeConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#name QuicksightTheme#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#permissions QuicksightTheme#permissions}
  */
  readonly permissions?: QuicksightThemePermissions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#tags QuicksightTheme#tags}
  */
  readonly tags?: QuicksightThemeTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#theme_id QuicksightTheme#theme_id}
  */
  readonly themeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#version_description QuicksightTheme#version_description}
  */
  readonly versionDescription?: string;
}
export interface QuicksightThemeConfigurationDataColorPalette {
  /**
  * <p>The hexadecimal codes for the colors.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#colors QuicksightTheme#colors}
  */
  readonly colors?: string[];
  /**
  * <p>The hexadecimal code of a color that applies to charts where a lack of data is
  *             highlighted.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#empty_fill_color QuicksightTheme#empty_fill_color}
  */
  readonly emptyFillColor?: string;
  /**
  * <p>The minimum and maximum hexadecimal codes that describe a color gradient. </p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#min_max_gradient QuicksightTheme#min_max_gradient}
  */
  readonly minMaxGradient?: string[];
}

export function quicksightThemeConfigurationDataColorPaletteToTerraform(struct?: QuicksightThemeConfigurationDataColorPalette | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    colors: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.colors),
    empty_fill_color: cdktn.stringToTerraform(struct!.emptyFillColor),
    min_max_gradient: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.minMaxGradient),
  }
}


export function quicksightThemeConfigurationDataColorPaletteToHclTerraform(struct?: QuicksightThemeConfigurationDataColorPalette | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    colors: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.colors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    empty_fill_color: {
      value: cdktn.stringToHclTerraform(struct!.emptyFillColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_max_gradient: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.minMaxGradient),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationDataColorPaletteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfigurationDataColorPalette | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._colors !== undefined) {
      hasAnyValues = true;
      internalValueResult.colors = this._colors;
    }
    if (this._emptyFillColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyFillColor = this._emptyFillColor;
    }
    if (this._minMaxGradient !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMaxGradient = this._minMaxGradient;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationDataColorPalette | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._colors = undefined;
      this._emptyFillColor = undefined;
      this._minMaxGradient = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._colors = value.colors;
      this._emptyFillColor = value.emptyFillColor;
      this._minMaxGradient = value.minMaxGradient;
    }
  }

  // colors - computed: true, optional: true, required: false
  private _colors?: string[]; 
  public get colors() {
    return this.getListAttribute('colors');
  }
  public set colors(value: string[]) {
    this._colors = value;
  }
  public resetColors() {
    this._colors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors;
  }

  // empty_fill_color - computed: true, optional: true, required: false
  private _emptyFillColor?: string; 
  public get emptyFillColor() {
    return this.getStringAttribute('empty_fill_color');
  }
  public set emptyFillColor(value: string) {
    this._emptyFillColor = value;
  }
  public resetEmptyFillColor() {
    this._emptyFillColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyFillColorInput() {
    return this._emptyFillColor;
  }

  // min_max_gradient - computed: true, optional: true, required: false
  private _minMaxGradient?: string[]; 
  public get minMaxGradient() {
    return this.getListAttribute('min_max_gradient');
  }
  public set minMaxGradient(value: string[]) {
    this._minMaxGradient = value;
  }
  public resetMinMaxGradient() {
    this._minMaxGradient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMaxGradientInput() {
    return this._minMaxGradient;
  }
}
export interface QuicksightThemeConfigurationSheetBackground {
  /**
  * String to encapsulate the most generic way Color can be formatted (words, hexStrings etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#color QuicksightTheme#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#gradient QuicksightTheme#gradient}
  */
  readonly gradient?: string;
}

export function quicksightThemeConfigurationSheetBackgroundToTerraform(struct?: QuicksightThemeConfigurationSheetBackground | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    gradient: cdktn.stringToTerraform(struct!.gradient),
  }
}


export function quicksightThemeConfigurationSheetBackgroundToHclTerraform(struct?: QuicksightThemeConfigurationSheetBackground | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gradient: {
      value: cdktn.stringToHclTerraform(struct!.gradient),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationSheetBackgroundOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfigurationSheetBackground | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._gradient !== undefined) {
      hasAnyValues = true;
      internalValueResult.gradient = this._gradient;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationSheetBackground | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._gradient = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._gradient = value.gradient;
    }
  }

  // color - computed: true, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // gradient - computed: true, optional: true, required: false
  private _gradient?: string; 
  public get gradient() {
    return this.getStringAttribute('gradient');
  }
  public set gradient(value: string) {
    this._gradient = value;
  }
  public resetGradient() {
    this._gradient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gradientInput() {
    return this._gradient;
  }
}
export interface QuicksightThemeConfigurationSheetTileBorder {
  /**
  * String to encapsulate the most generic way Color can be formatted (words, hexStrings etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#color QuicksightTheme#color}
  */
  readonly color?: string;
  /**
  * <p>The option to enable display of borders for visuals.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#show QuicksightTheme#show}
  */
  readonly show?: boolean | cdktn.IResolvable;
  /**
  * String to encapsulate the most generic way Width can be formatted with whatever units (px, em etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#width QuicksightTheme#width}
  */
  readonly width?: string;
}

export function quicksightThemeConfigurationSheetTileBorderToTerraform(struct?: QuicksightThemeConfigurationSheetTileBorder | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    show: cdktn.booleanToTerraform(struct!.show),
    width: cdktn.stringToTerraform(struct!.width),
  }
}


export function quicksightThemeConfigurationSheetTileBorderToHclTerraform(struct?: QuicksightThemeConfigurationSheetTileBorder | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show: {
      value: cdktn.booleanToHclTerraform(struct!.show),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    width: {
      value: cdktn.stringToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationSheetTileBorderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfigurationSheetTileBorder | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._show !== undefined) {
      hasAnyValues = true;
      internalValueResult.show = this._show;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationSheetTileBorder | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._show = undefined;
      this._width = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._show = value.show;
      this._width = value.width;
    }
  }

  // color - computed: true, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // show - computed: true, optional: true, required: false
  private _show?: boolean | cdktn.IResolvable; 
  public get show() {
    return this.getBooleanAttribute('show');
  }
  public set show(value: boolean | cdktn.IResolvable) {
    this._show = value;
  }
  public resetShow() {
    this._show = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showInput() {
    return this._show;
  }

  // width - computed: true, optional: true, required: false
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }
}
export interface QuicksightThemeConfigurationSheetTile {
  /**
  * String to encapsulate the most generic way Color can be formatted (words, hexStrings etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#background_color QuicksightTheme#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * <p>The display options for tile borders for visuals.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#border QuicksightTheme#border}
  */
  readonly border?: QuicksightThemeConfigurationSheetTileBorder;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#border_radius QuicksightTheme#border_radius}
  */
  readonly borderRadius?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#padding QuicksightTheme#padding}
  */
  readonly padding?: string;
}

export function quicksightThemeConfigurationSheetTileToTerraform(struct?: QuicksightThemeConfigurationSheetTile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    background_color: cdktn.stringToTerraform(struct!.backgroundColor),
    border: quicksightThemeConfigurationSheetTileBorderToTerraform(struct!.border),
    border_radius: cdktn.stringToTerraform(struct!.borderRadius),
    padding: cdktn.stringToTerraform(struct!.padding),
  }
}


export function quicksightThemeConfigurationSheetTileToHclTerraform(struct?: QuicksightThemeConfigurationSheetTile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    background_color: {
      value: cdktn.stringToHclTerraform(struct!.backgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    border: {
      value: quicksightThemeConfigurationSheetTileBorderToHclTerraform(struct!.border),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightThemeConfigurationSheetTileBorder",
    },
    border_radius: {
      value: cdktn.stringToHclTerraform(struct!.borderRadius),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    padding: {
      value: cdktn.stringToHclTerraform(struct!.padding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationSheetTileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfigurationSheetTile | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._border?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.border = this._border?.internalValue;
    }
    if (this._borderRadius !== undefined) {
      hasAnyValues = true;
      internalValueResult.borderRadius = this._borderRadius;
    }
    if (this._padding !== undefined) {
      hasAnyValues = true;
      internalValueResult.padding = this._padding;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationSheetTile | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backgroundColor = undefined;
      this._border.internalValue = undefined;
      this._borderRadius = undefined;
      this._padding = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backgroundColor = value.backgroundColor;
      this._border.internalValue = value.border;
      this._borderRadius = value.borderRadius;
      this._padding = value.padding;
    }
  }

  // background_color - computed: true, optional: true, required: false
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  public resetBackgroundColor() {
    this._backgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }

  // border - computed: true, optional: true, required: false
  private _border = new QuicksightThemeConfigurationSheetTileBorderOutputReference(this, "border");
  public get border() {
    return this._border;
  }
  public putBorder(value: QuicksightThemeConfigurationSheetTileBorder) {
    this._border.internalValue = value;
  }
  public resetBorder() {
    this._border.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderInput() {
    return this._border.internalValue;
  }

  // border_radius - computed: true, optional: true, required: false
  private _borderRadius?: string; 
  public get borderRadius() {
    return this.getStringAttribute('border_radius');
  }
  public set borderRadius(value: string) {
    this._borderRadius = value;
  }
  public resetBorderRadius() {
    this._borderRadius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderRadiusInput() {
    return this._borderRadius;
  }

  // padding - computed: true, optional: true, required: false
  private _padding?: string; 
  public get padding() {
    return this.getStringAttribute('padding');
  }
  public set padding(value: string) {
    this._padding = value;
  }
  public resetPadding() {
    this._padding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paddingInput() {
    return this._padding;
  }
}
export interface QuicksightThemeConfigurationSheetTileLayoutGutter {
  /**
  * <p>This Boolean value controls whether to display a gutter space between sheet tiles.
  *         </p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#show QuicksightTheme#show}
  */
  readonly show?: boolean | cdktn.IResolvable;
}

export function quicksightThemeConfigurationSheetTileLayoutGutterToTerraform(struct?: QuicksightThemeConfigurationSheetTileLayoutGutter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    show: cdktn.booleanToTerraform(struct!.show),
  }
}


export function quicksightThemeConfigurationSheetTileLayoutGutterToHclTerraform(struct?: QuicksightThemeConfigurationSheetTileLayoutGutter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    show: {
      value: cdktn.booleanToHclTerraform(struct!.show),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfigurationSheetTileLayoutGutter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._show !== undefined) {
      hasAnyValues = true;
      internalValueResult.show = this._show;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationSheetTileLayoutGutter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._show = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._show = value.show;
    }
  }

  // show - computed: true, optional: true, required: false
  private _show?: boolean | cdktn.IResolvable; 
  public get show() {
    return this.getBooleanAttribute('show');
  }
  public set show(value: boolean | cdktn.IResolvable) {
    this._show = value;
  }
  public resetShow() {
    this._show = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showInput() {
    return this._show;
  }
}
export interface QuicksightThemeConfigurationSheetTileLayoutMargin {
  /**
  * <p>This Boolean value controls whether to display sheet margins.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#show QuicksightTheme#show}
  */
  readonly show?: boolean | cdktn.IResolvable;
}

export function quicksightThemeConfigurationSheetTileLayoutMarginToTerraform(struct?: QuicksightThemeConfigurationSheetTileLayoutMargin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    show: cdktn.booleanToTerraform(struct!.show),
  }
}


export function quicksightThemeConfigurationSheetTileLayoutMarginToHclTerraform(struct?: QuicksightThemeConfigurationSheetTileLayoutMargin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    show: {
      value: cdktn.booleanToHclTerraform(struct!.show),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfigurationSheetTileLayoutMargin | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._show !== undefined) {
      hasAnyValues = true;
      internalValueResult.show = this._show;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationSheetTileLayoutMargin | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._show = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._show = value.show;
    }
  }

  // show - computed: true, optional: true, required: false
  private _show?: boolean | cdktn.IResolvable; 
  public get show() {
    return this.getBooleanAttribute('show');
  }
  public set show(value: boolean | cdktn.IResolvable) {
    this._show = value;
  }
  public resetShow() {
    this._show = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showInput() {
    return this._show;
  }
}
export interface QuicksightThemeConfigurationSheetTileLayout {
  /**
  * <p>The display options for gutter spacing between tiles on a sheet.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#gutter QuicksightTheme#gutter}
  */
  readonly gutter?: QuicksightThemeConfigurationSheetTileLayoutGutter;
  /**
  * <p>The display options for margins around the outside edge of sheets.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#margin QuicksightTheme#margin}
  */
  readonly margin?: QuicksightThemeConfigurationSheetTileLayoutMargin;
}

export function quicksightThemeConfigurationSheetTileLayoutToTerraform(struct?: QuicksightThemeConfigurationSheetTileLayout | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gutter: quicksightThemeConfigurationSheetTileLayoutGutterToTerraform(struct!.gutter),
    margin: quicksightThemeConfigurationSheetTileLayoutMarginToTerraform(struct!.margin),
  }
}


export function quicksightThemeConfigurationSheetTileLayoutToHclTerraform(struct?: QuicksightThemeConfigurationSheetTileLayout | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    gutter: {
      value: quicksightThemeConfigurationSheetTileLayoutGutterToHclTerraform(struct!.gutter),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightThemeConfigurationSheetTileLayoutGutter",
    },
    margin: {
      value: quicksightThemeConfigurationSheetTileLayoutMarginToHclTerraform(struct!.margin),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightThemeConfigurationSheetTileLayoutMargin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationSheetTileLayoutOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfigurationSheetTileLayout | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gutter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gutter = this._gutter?.internalValue;
    }
    if (this._margin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.margin = this._margin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationSheetTileLayout | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gutter.internalValue = undefined;
      this._margin.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gutter.internalValue = value.gutter;
      this._margin.internalValue = value.margin;
    }
  }

  // gutter - computed: true, optional: true, required: false
  private _gutter = new QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference(this, "gutter");
  public get gutter() {
    return this._gutter;
  }
  public putGutter(value: QuicksightThemeConfigurationSheetTileLayoutGutter) {
    this._gutter.internalValue = value;
  }
  public resetGutter() {
    this._gutter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gutterInput() {
    return this._gutter.internalValue;
  }

  // margin - computed: true, optional: true, required: false
  private _margin = new QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference(this, "margin");
  public get margin() {
    return this._margin;
  }
  public putMargin(value: QuicksightThemeConfigurationSheetTileLayoutMargin) {
    this._margin.internalValue = value;
  }
  public resetMargin() {
    this._margin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marginInput() {
    return this._margin.internalValue;
  }
}
export interface QuicksightThemeConfigurationSheet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#background QuicksightTheme#background}
  */
  readonly background?: QuicksightThemeConfigurationSheetBackground;
  /**
  * <p>Display options related to tiles on a sheet.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#tile QuicksightTheme#tile}
  */
  readonly tile?: QuicksightThemeConfigurationSheetTile;
  /**
  * <p>The display options for the layout of tiles on a sheet.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#tile_layout QuicksightTheme#tile_layout}
  */
  readonly tileLayout?: QuicksightThemeConfigurationSheetTileLayout;
}

export function quicksightThemeConfigurationSheetToTerraform(struct?: QuicksightThemeConfigurationSheet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    background: quicksightThemeConfigurationSheetBackgroundToTerraform(struct!.background),
    tile: quicksightThemeConfigurationSheetTileToTerraform(struct!.tile),
    tile_layout: quicksightThemeConfigurationSheetTileLayoutToTerraform(struct!.tileLayout),
  }
}


export function quicksightThemeConfigurationSheetToHclTerraform(struct?: QuicksightThemeConfigurationSheet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    background: {
      value: quicksightThemeConfigurationSheetBackgroundToHclTerraform(struct!.background),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightThemeConfigurationSheetBackground",
    },
    tile: {
      value: quicksightThemeConfigurationSheetTileToHclTerraform(struct!.tile),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightThemeConfigurationSheetTile",
    },
    tile_layout: {
      value: quicksightThemeConfigurationSheetTileLayoutToHclTerraform(struct!.tileLayout),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightThemeConfigurationSheetTileLayout",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationSheetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfigurationSheet | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._background?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.background = this._background?.internalValue;
    }
    if (this._tile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tile = this._tile?.internalValue;
    }
    if (this._tileLayout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tileLayout = this._tileLayout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationSheet | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._background.internalValue = undefined;
      this._tile.internalValue = undefined;
      this._tileLayout.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._background.internalValue = value.background;
      this._tile.internalValue = value.tile;
      this._tileLayout.internalValue = value.tileLayout;
    }
  }

  // background - computed: true, optional: true, required: false
  private _background = new QuicksightThemeConfigurationSheetBackgroundOutputReference(this, "background");
  public get background() {
    return this._background;
  }
  public putBackground(value: QuicksightThemeConfigurationSheetBackground) {
    this._background.internalValue = value;
  }
  public resetBackground() {
    this._background.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundInput() {
    return this._background.internalValue;
  }

  // tile - computed: true, optional: true, required: false
  private _tile = new QuicksightThemeConfigurationSheetTileOutputReference(this, "tile");
  public get tile() {
    return this._tile;
  }
  public putTile(value: QuicksightThemeConfigurationSheetTile) {
    this._tile.internalValue = value;
  }
  public resetTile() {
    this._tile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tileInput() {
    return this._tile.internalValue;
  }

  // tile_layout - computed: true, optional: true, required: false
  private _tileLayout = new QuicksightThemeConfigurationSheetTileLayoutOutputReference(this, "tile_layout");
  public get tileLayout() {
    return this._tileLayout;
  }
  public putTileLayout(value: QuicksightThemeConfigurationSheetTileLayout) {
    this._tileLayout.internalValue = value;
  }
  public resetTileLayout() {
    this._tileLayout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tileLayoutInput() {
    return this._tileLayout.internalValue;
  }
}
export interface QuicksightThemeConfigurationTypographyAxisLabelFontConfigurationFontSize {
  /**
  * <p>The font size that you want to use in px.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#absolute QuicksightTheme#absolute}
  */
  readonly absolute?: string;
}

export function quicksightThemeConfigurationTypographyAxisLabelFontConfigurationFontSizeToTerraform(struct?: QuicksightThemeConfigurationTypographyAxisLabelFontConfigurationFontSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    absolute: cdktn.stringToTerraform(struct!.absolute),
  }
}


export function quicksightThemeConfigurationTypographyAxisLabelFontConfigurationFontSizeToHclTerraform(struct?: QuicksightThemeConfigurationTypographyAxisLabelFontConfigurationFontSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    absolute: {
      value: cdktn.stringToHclTerraform(struct!.absolute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationTypographyAxisLabelFontConfigurationFontSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfigurationTypographyAxisLabelFontConfigurationFontSize | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absolute !== undefined) {
      hasAnyValues = true;
      internalValueResult.absolute = this._absolute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationTypographyAxisLabelFontConfigurationFontSize | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._absolute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._absolute = value.absolute;
    }
  }

  // absolute - computed: true, optional: true, required: false
  private _absolute?: string; 
  public get absolute() {
    return this.getStringAttribute('absolute');
  }
  public set absolute(value: string) {
    this._absolute = value;
  }
  public resetAbsolute() {
    this._absolute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteInput() {
    return this._absolute;
  }
}
export interface QuicksightThemeConfigurationTypographyAxisLabelFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#name QuicksightTheme#name}
  */
  readonly name?: string;
}

export function quicksightThemeConfigurationTypographyAxisLabelFontConfigurationFontWeightToTerraform(struct?: QuicksightThemeConfigurationTypographyAxisLabelFontConfigurationFontWeight | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function quicksightThemeConfigurationTypographyAxisLabelFontConfigurationFontWeightToHclTerraform(struct?: QuicksightThemeConfigurationTypographyAxisLabelFontConfigurationFontWeight | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationTypographyAxisLabelFontConfigurationFontWeightOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfigurationTypographyAxisLabelFontConfigurationFontWeight | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationTypographyAxisLabelFontConfigurationFontWeight | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface QuicksightThemeConfigurationTypographyAxisLabelFontConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_color QuicksightTheme#font_color}
  */
  readonly fontColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_decoration QuicksightTheme#font_decoration}
  */
  readonly fontDecoration?: string;
  /**
  * <p>The font family that you want to use.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_family QuicksightTheme#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_size QuicksightTheme#font_size}
  */
  readonly fontSize?: QuicksightThemeConfigurationTypographyAxisLabelFontConfigurationFontSize;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_style QuicksightTheme#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_weight QuicksightTheme#font_weight}
  */
  readonly fontWeight?: QuicksightThemeConfigurationTypographyAxisLabelFontConfigurationFontWeight;
}

export function quicksightThemeConfigurationTypographyAxisLabelFontConfigurationToTerraform(struct?: QuicksightThemeConfigurationTypographyAxisLabelFontConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: cdktn.stringToTerraform(struct!.fontColor),
    font_decoration: cdktn.stringToTerraform(struct!.fontDecoration),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: quicksightThemeConfigurationTypographyAxisLabelFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: quicksightThemeConfigurationTypographyAxisLabelFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}


export function quicksightThemeConfigurationTypographyAxisLabelFontConfigurationToHclTerraform(struct?: QuicksightThemeConfigurationTypographyAxisLabelFontConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: cdktn.stringToHclTerraform(struct!.fontColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_decoration: {
      value: cdktn.stringToHclTerraform(struct!.fontDecoration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_family: {
      value: cdktn.stringToHclTerraform(struct!.fontFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_size: {
      value: quicksightThemeConfigurationTypographyAxisLabelFontConfigurationFontSizeToHclTerraform(struct!.fontSize),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightThemeConfigurationTypographyAxisLabelFontConfigurationFontSize",
    },
    font_style: {
      value: cdktn.stringToHclTerraform(struct!.fontStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_weight: {
      value: quicksightThemeConfigurationTypographyAxisLabelFontConfigurationFontWeightToHclTerraform(struct!.fontWeight),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightThemeConfigurationTypographyAxisLabelFontConfigurationFontWeight",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationTypographyAxisLabelFontConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfigurationTypographyAxisLabelFontConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor;
    }
    if (this._fontDecoration !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontDecoration = this._fontDecoration;
    }
    if (this._fontFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontFamily = this._fontFamily;
    }
    if (this._fontSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize?.internalValue;
    }
    if (this._fontStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontStyle = this._fontStyle;
    }
    if (this._fontWeight?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontWeight = this._fontWeight?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationTypographyAxisLabelFontConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fontColor = undefined;
      this._fontDecoration = undefined;
      this._fontFamily = undefined;
      this._fontSize.internalValue = undefined;
      this._fontStyle = undefined;
      this._fontWeight.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fontColor = value.fontColor;
      this._fontDecoration = value.fontDecoration;
      this._fontFamily = value.fontFamily;
      this._fontSize.internalValue = value.fontSize;
      this._fontStyle = value.fontStyle;
      this._fontWeight.internalValue = value.fontWeight;
    }
  }

  // font_color - computed: true, optional: true, required: false
  private _fontColor?: string; 
  public get fontColor() {
    return this.getStringAttribute('font_color');
  }
  public set fontColor(value: string) {
    this._fontColor = value;
  }
  public resetFontColor() {
    this._fontColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor;
  }

  // font_decoration - computed: true, optional: true, required: false
  private _fontDecoration?: string; 
  public get fontDecoration() {
    return this.getStringAttribute('font_decoration');
  }
  public set fontDecoration(value: string) {
    this._fontDecoration = value;
  }
  public resetFontDecoration() {
    this._fontDecoration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontDecorationInput() {
    return this._fontDecoration;
  }

  // font_family - computed: true, optional: true, required: false
  private _fontFamily?: string; 
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }
  public set fontFamily(value: string) {
    this._fontFamily = value;
  }
  public resetFontFamily() {
    this._fontFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontFamilyInput() {
    return this._fontFamily;
  }

  // font_size - computed: true, optional: true, required: false
  private _fontSize = new QuicksightThemeConfigurationTypographyAxisLabelFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightThemeConfigurationTypographyAxisLabelFontConfigurationFontSize) {
    this._fontSize.internalValue = value;
  }
  public resetFontSize() {
    this._fontSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize.internalValue;
  }

  // font_style - computed: true, optional: true, required: false
  private _fontStyle?: string; 
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }
  public set fontStyle(value: string) {
    this._fontStyle = value;
  }
  public resetFontStyle() {
    this._fontStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontStyleInput() {
    return this._fontStyle;
  }

  // font_weight - computed: true, optional: true, required: false
  private _fontWeight = new QuicksightThemeConfigurationTypographyAxisLabelFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightThemeConfigurationTypographyAxisLabelFontConfigurationFontWeight) {
    this._fontWeight.internalValue = value;
  }
  public resetFontWeight() {
    this._fontWeight.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontWeightInput() {
    return this._fontWeight.internalValue;
  }
}
export interface QuicksightThemeConfigurationTypographyAxisTitleFontConfigurationFontSize {
  /**
  * <p>The font size that you want to use in px.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#absolute QuicksightTheme#absolute}
  */
  readonly absolute?: string;
}

export function quicksightThemeConfigurationTypographyAxisTitleFontConfigurationFontSizeToTerraform(struct?: QuicksightThemeConfigurationTypographyAxisTitleFontConfigurationFontSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    absolute: cdktn.stringToTerraform(struct!.absolute),
  }
}


export function quicksightThemeConfigurationTypographyAxisTitleFontConfigurationFontSizeToHclTerraform(struct?: QuicksightThemeConfigurationTypographyAxisTitleFontConfigurationFontSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    absolute: {
      value: cdktn.stringToHclTerraform(struct!.absolute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationTypographyAxisTitleFontConfigurationFontSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfigurationTypographyAxisTitleFontConfigurationFontSize | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absolute !== undefined) {
      hasAnyValues = true;
      internalValueResult.absolute = this._absolute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationTypographyAxisTitleFontConfigurationFontSize | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._absolute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._absolute = value.absolute;
    }
  }

  // absolute - computed: true, optional: true, required: false
  private _absolute?: string; 
  public get absolute() {
    return this.getStringAttribute('absolute');
  }
  public set absolute(value: string) {
    this._absolute = value;
  }
  public resetAbsolute() {
    this._absolute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteInput() {
    return this._absolute;
  }
}
export interface QuicksightThemeConfigurationTypographyAxisTitleFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#name QuicksightTheme#name}
  */
  readonly name?: string;
}

export function quicksightThemeConfigurationTypographyAxisTitleFontConfigurationFontWeightToTerraform(struct?: QuicksightThemeConfigurationTypographyAxisTitleFontConfigurationFontWeight | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function quicksightThemeConfigurationTypographyAxisTitleFontConfigurationFontWeightToHclTerraform(struct?: QuicksightThemeConfigurationTypographyAxisTitleFontConfigurationFontWeight | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationTypographyAxisTitleFontConfigurationFontWeightOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfigurationTypographyAxisTitleFontConfigurationFontWeight | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationTypographyAxisTitleFontConfigurationFontWeight | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface QuicksightThemeConfigurationTypographyAxisTitleFontConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_color QuicksightTheme#font_color}
  */
  readonly fontColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_decoration QuicksightTheme#font_decoration}
  */
  readonly fontDecoration?: string;
  /**
  * <p>The font family that you want to use.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_family QuicksightTheme#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_size QuicksightTheme#font_size}
  */
  readonly fontSize?: QuicksightThemeConfigurationTypographyAxisTitleFontConfigurationFontSize;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_style QuicksightTheme#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_weight QuicksightTheme#font_weight}
  */
  readonly fontWeight?: QuicksightThemeConfigurationTypographyAxisTitleFontConfigurationFontWeight;
}

export function quicksightThemeConfigurationTypographyAxisTitleFontConfigurationToTerraform(struct?: QuicksightThemeConfigurationTypographyAxisTitleFontConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: cdktn.stringToTerraform(struct!.fontColor),
    font_decoration: cdktn.stringToTerraform(struct!.fontDecoration),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: quicksightThemeConfigurationTypographyAxisTitleFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: quicksightThemeConfigurationTypographyAxisTitleFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}


export function quicksightThemeConfigurationTypographyAxisTitleFontConfigurationToHclTerraform(struct?: QuicksightThemeConfigurationTypographyAxisTitleFontConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: cdktn.stringToHclTerraform(struct!.fontColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_decoration: {
      value: cdktn.stringToHclTerraform(struct!.fontDecoration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_family: {
      value: cdktn.stringToHclTerraform(struct!.fontFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_size: {
      value: quicksightThemeConfigurationTypographyAxisTitleFontConfigurationFontSizeToHclTerraform(struct!.fontSize),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightThemeConfigurationTypographyAxisTitleFontConfigurationFontSize",
    },
    font_style: {
      value: cdktn.stringToHclTerraform(struct!.fontStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_weight: {
      value: quicksightThemeConfigurationTypographyAxisTitleFontConfigurationFontWeightToHclTerraform(struct!.fontWeight),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightThemeConfigurationTypographyAxisTitleFontConfigurationFontWeight",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationTypographyAxisTitleFontConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfigurationTypographyAxisTitleFontConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor;
    }
    if (this._fontDecoration !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontDecoration = this._fontDecoration;
    }
    if (this._fontFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontFamily = this._fontFamily;
    }
    if (this._fontSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize?.internalValue;
    }
    if (this._fontStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontStyle = this._fontStyle;
    }
    if (this._fontWeight?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontWeight = this._fontWeight?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationTypographyAxisTitleFontConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fontColor = undefined;
      this._fontDecoration = undefined;
      this._fontFamily = undefined;
      this._fontSize.internalValue = undefined;
      this._fontStyle = undefined;
      this._fontWeight.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fontColor = value.fontColor;
      this._fontDecoration = value.fontDecoration;
      this._fontFamily = value.fontFamily;
      this._fontSize.internalValue = value.fontSize;
      this._fontStyle = value.fontStyle;
      this._fontWeight.internalValue = value.fontWeight;
    }
  }

  // font_color - computed: true, optional: true, required: false
  private _fontColor?: string; 
  public get fontColor() {
    return this.getStringAttribute('font_color');
  }
  public set fontColor(value: string) {
    this._fontColor = value;
  }
  public resetFontColor() {
    this._fontColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor;
  }

  // font_decoration - computed: true, optional: true, required: false
  private _fontDecoration?: string; 
  public get fontDecoration() {
    return this.getStringAttribute('font_decoration');
  }
  public set fontDecoration(value: string) {
    this._fontDecoration = value;
  }
  public resetFontDecoration() {
    this._fontDecoration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontDecorationInput() {
    return this._fontDecoration;
  }

  // font_family - computed: true, optional: true, required: false
  private _fontFamily?: string; 
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }
  public set fontFamily(value: string) {
    this._fontFamily = value;
  }
  public resetFontFamily() {
    this._fontFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontFamilyInput() {
    return this._fontFamily;
  }

  // font_size - computed: true, optional: true, required: false
  private _fontSize = new QuicksightThemeConfigurationTypographyAxisTitleFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightThemeConfigurationTypographyAxisTitleFontConfigurationFontSize) {
    this._fontSize.internalValue = value;
  }
  public resetFontSize() {
    this._fontSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize.internalValue;
  }

  // font_style - computed: true, optional: true, required: false
  private _fontStyle?: string; 
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }
  public set fontStyle(value: string) {
    this._fontStyle = value;
  }
  public resetFontStyle() {
    this._fontStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontStyleInput() {
    return this._fontStyle;
  }

  // font_weight - computed: true, optional: true, required: false
  private _fontWeight = new QuicksightThemeConfigurationTypographyAxisTitleFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightThemeConfigurationTypographyAxisTitleFontConfigurationFontWeight) {
    this._fontWeight.internalValue = value;
  }
  public resetFontWeight() {
    this._fontWeight.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontWeightInput() {
    return this._fontWeight.internalValue;
  }
}
export interface QuicksightThemeConfigurationTypographyDataLabelFontConfigurationFontSize {
  /**
  * <p>The font size that you want to use in px.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#absolute QuicksightTheme#absolute}
  */
  readonly absolute?: string;
}

export function quicksightThemeConfigurationTypographyDataLabelFontConfigurationFontSizeToTerraform(struct?: QuicksightThemeConfigurationTypographyDataLabelFontConfigurationFontSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    absolute: cdktn.stringToTerraform(struct!.absolute),
  }
}


export function quicksightThemeConfigurationTypographyDataLabelFontConfigurationFontSizeToHclTerraform(struct?: QuicksightThemeConfigurationTypographyDataLabelFontConfigurationFontSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    absolute: {
      value: cdktn.stringToHclTerraform(struct!.absolute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationTypographyDataLabelFontConfigurationFontSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfigurationTypographyDataLabelFontConfigurationFontSize | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absolute !== undefined) {
      hasAnyValues = true;
      internalValueResult.absolute = this._absolute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationTypographyDataLabelFontConfigurationFontSize | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._absolute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._absolute = value.absolute;
    }
  }

  // absolute - computed: true, optional: true, required: false
  private _absolute?: string; 
  public get absolute() {
    return this.getStringAttribute('absolute');
  }
  public set absolute(value: string) {
    this._absolute = value;
  }
  public resetAbsolute() {
    this._absolute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteInput() {
    return this._absolute;
  }
}
export interface QuicksightThemeConfigurationTypographyDataLabelFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#name QuicksightTheme#name}
  */
  readonly name?: string;
}

export function quicksightThemeConfigurationTypographyDataLabelFontConfigurationFontWeightToTerraform(struct?: QuicksightThemeConfigurationTypographyDataLabelFontConfigurationFontWeight | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function quicksightThemeConfigurationTypographyDataLabelFontConfigurationFontWeightToHclTerraform(struct?: QuicksightThemeConfigurationTypographyDataLabelFontConfigurationFontWeight | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationTypographyDataLabelFontConfigurationFontWeightOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfigurationTypographyDataLabelFontConfigurationFontWeight | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationTypographyDataLabelFontConfigurationFontWeight | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface QuicksightThemeConfigurationTypographyDataLabelFontConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_color QuicksightTheme#font_color}
  */
  readonly fontColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_decoration QuicksightTheme#font_decoration}
  */
  readonly fontDecoration?: string;
  /**
  * <p>The font family that you want to use.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_family QuicksightTheme#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_size QuicksightTheme#font_size}
  */
  readonly fontSize?: QuicksightThemeConfigurationTypographyDataLabelFontConfigurationFontSize;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_style QuicksightTheme#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_weight QuicksightTheme#font_weight}
  */
  readonly fontWeight?: QuicksightThemeConfigurationTypographyDataLabelFontConfigurationFontWeight;
}

export function quicksightThemeConfigurationTypographyDataLabelFontConfigurationToTerraform(struct?: QuicksightThemeConfigurationTypographyDataLabelFontConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: cdktn.stringToTerraform(struct!.fontColor),
    font_decoration: cdktn.stringToTerraform(struct!.fontDecoration),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: quicksightThemeConfigurationTypographyDataLabelFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: quicksightThemeConfigurationTypographyDataLabelFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}


export function quicksightThemeConfigurationTypographyDataLabelFontConfigurationToHclTerraform(struct?: QuicksightThemeConfigurationTypographyDataLabelFontConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: cdktn.stringToHclTerraform(struct!.fontColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_decoration: {
      value: cdktn.stringToHclTerraform(struct!.fontDecoration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_family: {
      value: cdktn.stringToHclTerraform(struct!.fontFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_size: {
      value: quicksightThemeConfigurationTypographyDataLabelFontConfigurationFontSizeToHclTerraform(struct!.fontSize),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightThemeConfigurationTypographyDataLabelFontConfigurationFontSize",
    },
    font_style: {
      value: cdktn.stringToHclTerraform(struct!.fontStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_weight: {
      value: quicksightThemeConfigurationTypographyDataLabelFontConfigurationFontWeightToHclTerraform(struct!.fontWeight),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightThemeConfigurationTypographyDataLabelFontConfigurationFontWeight",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationTypographyDataLabelFontConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfigurationTypographyDataLabelFontConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor;
    }
    if (this._fontDecoration !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontDecoration = this._fontDecoration;
    }
    if (this._fontFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontFamily = this._fontFamily;
    }
    if (this._fontSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize?.internalValue;
    }
    if (this._fontStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontStyle = this._fontStyle;
    }
    if (this._fontWeight?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontWeight = this._fontWeight?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationTypographyDataLabelFontConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fontColor = undefined;
      this._fontDecoration = undefined;
      this._fontFamily = undefined;
      this._fontSize.internalValue = undefined;
      this._fontStyle = undefined;
      this._fontWeight.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fontColor = value.fontColor;
      this._fontDecoration = value.fontDecoration;
      this._fontFamily = value.fontFamily;
      this._fontSize.internalValue = value.fontSize;
      this._fontStyle = value.fontStyle;
      this._fontWeight.internalValue = value.fontWeight;
    }
  }

  // font_color - computed: true, optional: true, required: false
  private _fontColor?: string; 
  public get fontColor() {
    return this.getStringAttribute('font_color');
  }
  public set fontColor(value: string) {
    this._fontColor = value;
  }
  public resetFontColor() {
    this._fontColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor;
  }

  // font_decoration - computed: true, optional: true, required: false
  private _fontDecoration?: string; 
  public get fontDecoration() {
    return this.getStringAttribute('font_decoration');
  }
  public set fontDecoration(value: string) {
    this._fontDecoration = value;
  }
  public resetFontDecoration() {
    this._fontDecoration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontDecorationInput() {
    return this._fontDecoration;
  }

  // font_family - computed: true, optional: true, required: false
  private _fontFamily?: string; 
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }
  public set fontFamily(value: string) {
    this._fontFamily = value;
  }
  public resetFontFamily() {
    this._fontFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontFamilyInput() {
    return this._fontFamily;
  }

  // font_size - computed: true, optional: true, required: false
  private _fontSize = new QuicksightThemeConfigurationTypographyDataLabelFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightThemeConfigurationTypographyDataLabelFontConfigurationFontSize) {
    this._fontSize.internalValue = value;
  }
  public resetFontSize() {
    this._fontSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize.internalValue;
  }

  // font_style - computed: true, optional: true, required: false
  private _fontStyle?: string; 
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }
  public set fontStyle(value: string) {
    this._fontStyle = value;
  }
  public resetFontStyle() {
    this._fontStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontStyleInput() {
    return this._fontStyle;
  }

  // font_weight - computed: true, optional: true, required: false
  private _fontWeight = new QuicksightThemeConfigurationTypographyDataLabelFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightThemeConfigurationTypographyDataLabelFontConfigurationFontWeight) {
    this._fontWeight.internalValue = value;
  }
  public resetFontWeight() {
    this._fontWeight.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontWeightInput() {
    return this._fontWeight.internalValue;
  }
}
export interface QuicksightThemeConfigurationTypographyFontFamilies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_family QuicksightTheme#font_family}
  */
  readonly fontFamily?: string;
}

export function quicksightThemeConfigurationTypographyFontFamiliesToTerraform(struct?: QuicksightThemeConfigurationTypographyFontFamilies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
  }
}


export function quicksightThemeConfigurationTypographyFontFamiliesToHclTerraform(struct?: QuicksightThemeConfigurationTypographyFontFamilies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_family: {
      value: cdktn.stringToHclTerraform(struct!.fontFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationTypographyFontFamiliesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): QuicksightThemeConfigurationTypographyFontFamilies | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontFamily = this._fontFamily;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationTypographyFontFamilies | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fontFamily = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fontFamily = value.fontFamily;
    }
  }

  // font_family - computed: true, optional: true, required: false
  private _fontFamily?: string; 
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }
  public set fontFamily(value: string) {
    this._fontFamily = value;
  }
  public resetFontFamily() {
    this._fontFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontFamilyInput() {
    return this._fontFamily;
  }
}

export class QuicksightThemeConfigurationTypographyFontFamiliesList extends cdktn.ComplexList {
  public internalValue? : QuicksightThemeConfigurationTypographyFontFamilies[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightThemeConfigurationTypographyFontFamiliesOutputReference {
    return new QuicksightThemeConfigurationTypographyFontFamiliesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightThemeConfigurationTypographyLegendTitleFontConfigurationFontSize {
  /**
  * <p>The font size that you want to use in px.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#absolute QuicksightTheme#absolute}
  */
  readonly absolute?: string;
}

export function quicksightThemeConfigurationTypographyLegendTitleFontConfigurationFontSizeToTerraform(struct?: QuicksightThemeConfigurationTypographyLegendTitleFontConfigurationFontSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    absolute: cdktn.stringToTerraform(struct!.absolute),
  }
}


export function quicksightThemeConfigurationTypographyLegendTitleFontConfigurationFontSizeToHclTerraform(struct?: QuicksightThemeConfigurationTypographyLegendTitleFontConfigurationFontSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    absolute: {
      value: cdktn.stringToHclTerraform(struct!.absolute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationTypographyLegendTitleFontConfigurationFontSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfigurationTypographyLegendTitleFontConfigurationFontSize | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absolute !== undefined) {
      hasAnyValues = true;
      internalValueResult.absolute = this._absolute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationTypographyLegendTitleFontConfigurationFontSize | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._absolute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._absolute = value.absolute;
    }
  }

  // absolute - computed: true, optional: true, required: false
  private _absolute?: string; 
  public get absolute() {
    return this.getStringAttribute('absolute');
  }
  public set absolute(value: string) {
    this._absolute = value;
  }
  public resetAbsolute() {
    this._absolute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteInput() {
    return this._absolute;
  }
}
export interface QuicksightThemeConfigurationTypographyLegendTitleFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#name QuicksightTheme#name}
  */
  readonly name?: string;
}

export function quicksightThemeConfigurationTypographyLegendTitleFontConfigurationFontWeightToTerraform(struct?: QuicksightThemeConfigurationTypographyLegendTitleFontConfigurationFontWeight | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function quicksightThemeConfigurationTypographyLegendTitleFontConfigurationFontWeightToHclTerraform(struct?: QuicksightThemeConfigurationTypographyLegendTitleFontConfigurationFontWeight | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationTypographyLegendTitleFontConfigurationFontWeightOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfigurationTypographyLegendTitleFontConfigurationFontWeight | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationTypographyLegendTitleFontConfigurationFontWeight | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface QuicksightThemeConfigurationTypographyLegendTitleFontConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_color QuicksightTheme#font_color}
  */
  readonly fontColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_decoration QuicksightTheme#font_decoration}
  */
  readonly fontDecoration?: string;
  /**
  * <p>The font family that you want to use.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_family QuicksightTheme#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_size QuicksightTheme#font_size}
  */
  readonly fontSize?: QuicksightThemeConfigurationTypographyLegendTitleFontConfigurationFontSize;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_style QuicksightTheme#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_weight QuicksightTheme#font_weight}
  */
  readonly fontWeight?: QuicksightThemeConfigurationTypographyLegendTitleFontConfigurationFontWeight;
}

export function quicksightThemeConfigurationTypographyLegendTitleFontConfigurationToTerraform(struct?: QuicksightThemeConfigurationTypographyLegendTitleFontConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: cdktn.stringToTerraform(struct!.fontColor),
    font_decoration: cdktn.stringToTerraform(struct!.fontDecoration),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: quicksightThemeConfigurationTypographyLegendTitleFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: quicksightThemeConfigurationTypographyLegendTitleFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}


export function quicksightThemeConfigurationTypographyLegendTitleFontConfigurationToHclTerraform(struct?: QuicksightThemeConfigurationTypographyLegendTitleFontConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: cdktn.stringToHclTerraform(struct!.fontColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_decoration: {
      value: cdktn.stringToHclTerraform(struct!.fontDecoration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_family: {
      value: cdktn.stringToHclTerraform(struct!.fontFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_size: {
      value: quicksightThemeConfigurationTypographyLegendTitleFontConfigurationFontSizeToHclTerraform(struct!.fontSize),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightThemeConfigurationTypographyLegendTitleFontConfigurationFontSize",
    },
    font_style: {
      value: cdktn.stringToHclTerraform(struct!.fontStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_weight: {
      value: quicksightThemeConfigurationTypographyLegendTitleFontConfigurationFontWeightToHclTerraform(struct!.fontWeight),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightThemeConfigurationTypographyLegendTitleFontConfigurationFontWeight",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationTypographyLegendTitleFontConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfigurationTypographyLegendTitleFontConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor;
    }
    if (this._fontDecoration !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontDecoration = this._fontDecoration;
    }
    if (this._fontFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontFamily = this._fontFamily;
    }
    if (this._fontSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize?.internalValue;
    }
    if (this._fontStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontStyle = this._fontStyle;
    }
    if (this._fontWeight?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontWeight = this._fontWeight?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationTypographyLegendTitleFontConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fontColor = undefined;
      this._fontDecoration = undefined;
      this._fontFamily = undefined;
      this._fontSize.internalValue = undefined;
      this._fontStyle = undefined;
      this._fontWeight.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fontColor = value.fontColor;
      this._fontDecoration = value.fontDecoration;
      this._fontFamily = value.fontFamily;
      this._fontSize.internalValue = value.fontSize;
      this._fontStyle = value.fontStyle;
      this._fontWeight.internalValue = value.fontWeight;
    }
  }

  // font_color - computed: true, optional: true, required: false
  private _fontColor?: string; 
  public get fontColor() {
    return this.getStringAttribute('font_color');
  }
  public set fontColor(value: string) {
    this._fontColor = value;
  }
  public resetFontColor() {
    this._fontColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor;
  }

  // font_decoration - computed: true, optional: true, required: false
  private _fontDecoration?: string; 
  public get fontDecoration() {
    return this.getStringAttribute('font_decoration');
  }
  public set fontDecoration(value: string) {
    this._fontDecoration = value;
  }
  public resetFontDecoration() {
    this._fontDecoration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontDecorationInput() {
    return this._fontDecoration;
  }

  // font_family - computed: true, optional: true, required: false
  private _fontFamily?: string; 
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }
  public set fontFamily(value: string) {
    this._fontFamily = value;
  }
  public resetFontFamily() {
    this._fontFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontFamilyInput() {
    return this._fontFamily;
  }

  // font_size - computed: true, optional: true, required: false
  private _fontSize = new QuicksightThemeConfigurationTypographyLegendTitleFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightThemeConfigurationTypographyLegendTitleFontConfigurationFontSize) {
    this._fontSize.internalValue = value;
  }
  public resetFontSize() {
    this._fontSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize.internalValue;
  }

  // font_style - computed: true, optional: true, required: false
  private _fontStyle?: string; 
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }
  public set fontStyle(value: string) {
    this._fontStyle = value;
  }
  public resetFontStyle() {
    this._fontStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontStyleInput() {
    return this._fontStyle;
  }

  // font_weight - computed: true, optional: true, required: false
  private _fontWeight = new QuicksightThemeConfigurationTypographyLegendTitleFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightThemeConfigurationTypographyLegendTitleFontConfigurationFontWeight) {
    this._fontWeight.internalValue = value;
  }
  public resetFontWeight() {
    this._fontWeight.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontWeightInput() {
    return this._fontWeight.internalValue;
  }
}
export interface QuicksightThemeConfigurationTypographyLegendValueFontConfigurationFontSize {
  /**
  * <p>The font size that you want to use in px.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#absolute QuicksightTheme#absolute}
  */
  readonly absolute?: string;
}

export function quicksightThemeConfigurationTypographyLegendValueFontConfigurationFontSizeToTerraform(struct?: QuicksightThemeConfigurationTypographyLegendValueFontConfigurationFontSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    absolute: cdktn.stringToTerraform(struct!.absolute),
  }
}


export function quicksightThemeConfigurationTypographyLegendValueFontConfigurationFontSizeToHclTerraform(struct?: QuicksightThemeConfigurationTypographyLegendValueFontConfigurationFontSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    absolute: {
      value: cdktn.stringToHclTerraform(struct!.absolute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationTypographyLegendValueFontConfigurationFontSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfigurationTypographyLegendValueFontConfigurationFontSize | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absolute !== undefined) {
      hasAnyValues = true;
      internalValueResult.absolute = this._absolute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationTypographyLegendValueFontConfigurationFontSize | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._absolute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._absolute = value.absolute;
    }
  }

  // absolute - computed: true, optional: true, required: false
  private _absolute?: string; 
  public get absolute() {
    return this.getStringAttribute('absolute');
  }
  public set absolute(value: string) {
    this._absolute = value;
  }
  public resetAbsolute() {
    this._absolute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteInput() {
    return this._absolute;
  }
}
export interface QuicksightThemeConfigurationTypographyLegendValueFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#name QuicksightTheme#name}
  */
  readonly name?: string;
}

export function quicksightThemeConfigurationTypographyLegendValueFontConfigurationFontWeightToTerraform(struct?: QuicksightThemeConfigurationTypographyLegendValueFontConfigurationFontWeight | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function quicksightThemeConfigurationTypographyLegendValueFontConfigurationFontWeightToHclTerraform(struct?: QuicksightThemeConfigurationTypographyLegendValueFontConfigurationFontWeight | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationTypographyLegendValueFontConfigurationFontWeightOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfigurationTypographyLegendValueFontConfigurationFontWeight | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationTypographyLegendValueFontConfigurationFontWeight | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface QuicksightThemeConfigurationTypographyLegendValueFontConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_color QuicksightTheme#font_color}
  */
  readonly fontColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_decoration QuicksightTheme#font_decoration}
  */
  readonly fontDecoration?: string;
  /**
  * <p>The font family that you want to use.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_family QuicksightTheme#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_size QuicksightTheme#font_size}
  */
  readonly fontSize?: QuicksightThemeConfigurationTypographyLegendValueFontConfigurationFontSize;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_style QuicksightTheme#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_weight QuicksightTheme#font_weight}
  */
  readonly fontWeight?: QuicksightThemeConfigurationTypographyLegendValueFontConfigurationFontWeight;
}

export function quicksightThemeConfigurationTypographyLegendValueFontConfigurationToTerraform(struct?: QuicksightThemeConfigurationTypographyLegendValueFontConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: cdktn.stringToTerraform(struct!.fontColor),
    font_decoration: cdktn.stringToTerraform(struct!.fontDecoration),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: quicksightThemeConfigurationTypographyLegendValueFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: quicksightThemeConfigurationTypographyLegendValueFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}


export function quicksightThemeConfigurationTypographyLegendValueFontConfigurationToHclTerraform(struct?: QuicksightThemeConfigurationTypographyLegendValueFontConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: cdktn.stringToHclTerraform(struct!.fontColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_decoration: {
      value: cdktn.stringToHclTerraform(struct!.fontDecoration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_family: {
      value: cdktn.stringToHclTerraform(struct!.fontFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_size: {
      value: quicksightThemeConfigurationTypographyLegendValueFontConfigurationFontSizeToHclTerraform(struct!.fontSize),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightThemeConfigurationTypographyLegendValueFontConfigurationFontSize",
    },
    font_style: {
      value: cdktn.stringToHclTerraform(struct!.fontStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_weight: {
      value: quicksightThemeConfigurationTypographyLegendValueFontConfigurationFontWeightToHclTerraform(struct!.fontWeight),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightThemeConfigurationTypographyLegendValueFontConfigurationFontWeight",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationTypographyLegendValueFontConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfigurationTypographyLegendValueFontConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor;
    }
    if (this._fontDecoration !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontDecoration = this._fontDecoration;
    }
    if (this._fontFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontFamily = this._fontFamily;
    }
    if (this._fontSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize?.internalValue;
    }
    if (this._fontStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontStyle = this._fontStyle;
    }
    if (this._fontWeight?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontWeight = this._fontWeight?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationTypographyLegendValueFontConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fontColor = undefined;
      this._fontDecoration = undefined;
      this._fontFamily = undefined;
      this._fontSize.internalValue = undefined;
      this._fontStyle = undefined;
      this._fontWeight.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fontColor = value.fontColor;
      this._fontDecoration = value.fontDecoration;
      this._fontFamily = value.fontFamily;
      this._fontSize.internalValue = value.fontSize;
      this._fontStyle = value.fontStyle;
      this._fontWeight.internalValue = value.fontWeight;
    }
  }

  // font_color - computed: true, optional: true, required: false
  private _fontColor?: string; 
  public get fontColor() {
    return this.getStringAttribute('font_color');
  }
  public set fontColor(value: string) {
    this._fontColor = value;
  }
  public resetFontColor() {
    this._fontColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor;
  }

  // font_decoration - computed: true, optional: true, required: false
  private _fontDecoration?: string; 
  public get fontDecoration() {
    return this.getStringAttribute('font_decoration');
  }
  public set fontDecoration(value: string) {
    this._fontDecoration = value;
  }
  public resetFontDecoration() {
    this._fontDecoration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontDecorationInput() {
    return this._fontDecoration;
  }

  // font_family - computed: true, optional: true, required: false
  private _fontFamily?: string; 
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }
  public set fontFamily(value: string) {
    this._fontFamily = value;
  }
  public resetFontFamily() {
    this._fontFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontFamilyInput() {
    return this._fontFamily;
  }

  // font_size - computed: true, optional: true, required: false
  private _fontSize = new QuicksightThemeConfigurationTypographyLegendValueFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightThemeConfigurationTypographyLegendValueFontConfigurationFontSize) {
    this._fontSize.internalValue = value;
  }
  public resetFontSize() {
    this._fontSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize.internalValue;
  }

  // font_style - computed: true, optional: true, required: false
  private _fontStyle?: string; 
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }
  public set fontStyle(value: string) {
    this._fontStyle = value;
  }
  public resetFontStyle() {
    this._fontStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontStyleInput() {
    return this._fontStyle;
  }

  // font_weight - computed: true, optional: true, required: false
  private _fontWeight = new QuicksightThemeConfigurationTypographyLegendValueFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightThemeConfigurationTypographyLegendValueFontConfigurationFontWeight) {
    this._fontWeight.internalValue = value;
  }
  public resetFontWeight() {
    this._fontWeight.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontWeightInput() {
    return this._fontWeight.internalValue;
  }
}
export interface QuicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontSize {
  /**
  * <p>The font size that you want to use in px.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#absolute QuicksightTheme#absolute}
  */
  readonly absolute?: string;
}

export function quicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontSizeToTerraform(struct?: QuicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    absolute: cdktn.stringToTerraform(struct!.absolute),
  }
}


export function quicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontSizeToHclTerraform(struct?: QuicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    absolute: {
      value: cdktn.stringToHclTerraform(struct!.absolute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontSize | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absolute !== undefined) {
      hasAnyValues = true;
      internalValueResult.absolute = this._absolute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontSize | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._absolute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._absolute = value.absolute;
    }
  }

  // absolute - computed: true, optional: true, required: false
  private _absolute?: string; 
  public get absolute() {
    return this.getStringAttribute('absolute');
  }
  public set absolute(value: string) {
    this._absolute = value;
  }
  public resetAbsolute() {
    this._absolute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteInput() {
    return this._absolute;
  }
}
export interface QuicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#name QuicksightTheme#name}
  */
  readonly name?: string;
}

export function quicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontWeightToTerraform(struct?: QuicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontWeight | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function quicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontWeightToHclTerraform(struct?: QuicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontWeight | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontWeightOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontWeight | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontWeight | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface QuicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_color QuicksightTheme#font_color}
  */
  readonly fontColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_decoration QuicksightTheme#font_decoration}
  */
  readonly fontDecoration?: string;
  /**
  * <p>The font family that you want to use.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_family QuicksightTheme#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_size QuicksightTheme#font_size}
  */
  readonly fontSize?: QuicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontSize;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_style QuicksightTheme#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_weight QuicksightTheme#font_weight}
  */
  readonly fontWeight?: QuicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontWeight;
}

export function quicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationToTerraform(struct?: QuicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: cdktn.stringToTerraform(struct!.fontColor),
    font_decoration: cdktn.stringToTerraform(struct!.fontDecoration),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: quicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: quicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}


export function quicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationToHclTerraform(struct?: QuicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: cdktn.stringToHclTerraform(struct!.fontColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_decoration: {
      value: cdktn.stringToHclTerraform(struct!.fontDecoration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_family: {
      value: cdktn.stringToHclTerraform(struct!.fontFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_size: {
      value: quicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontSizeToHclTerraform(struct!.fontSize),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontSize",
    },
    font_style: {
      value: cdktn.stringToHclTerraform(struct!.fontStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_weight: {
      value: quicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontWeightToHclTerraform(struct!.fontWeight),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontWeight",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor;
    }
    if (this._fontDecoration !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontDecoration = this._fontDecoration;
    }
    if (this._fontFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontFamily = this._fontFamily;
    }
    if (this._fontSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize?.internalValue;
    }
    if (this._fontStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontStyle = this._fontStyle;
    }
    if (this._fontWeight?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontWeight = this._fontWeight?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fontColor = undefined;
      this._fontDecoration = undefined;
      this._fontFamily = undefined;
      this._fontSize.internalValue = undefined;
      this._fontStyle = undefined;
      this._fontWeight.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fontColor = value.fontColor;
      this._fontDecoration = value.fontDecoration;
      this._fontFamily = value.fontFamily;
      this._fontSize.internalValue = value.fontSize;
      this._fontStyle = value.fontStyle;
      this._fontWeight.internalValue = value.fontWeight;
    }
  }

  // font_color - computed: true, optional: true, required: false
  private _fontColor?: string; 
  public get fontColor() {
    return this.getStringAttribute('font_color');
  }
  public set fontColor(value: string) {
    this._fontColor = value;
  }
  public resetFontColor() {
    this._fontColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor;
  }

  // font_decoration - computed: true, optional: true, required: false
  private _fontDecoration?: string; 
  public get fontDecoration() {
    return this.getStringAttribute('font_decoration');
  }
  public set fontDecoration(value: string) {
    this._fontDecoration = value;
  }
  public resetFontDecoration() {
    this._fontDecoration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontDecorationInput() {
    return this._fontDecoration;
  }

  // font_family - computed: true, optional: true, required: false
  private _fontFamily?: string; 
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }
  public set fontFamily(value: string) {
    this._fontFamily = value;
  }
  public resetFontFamily() {
    this._fontFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontFamilyInput() {
    return this._fontFamily;
  }

  // font_size - computed: true, optional: true, required: false
  private _fontSize = new QuicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontSize) {
    this._fontSize.internalValue = value;
  }
  public resetFontSize() {
    this._fontSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize.internalValue;
  }

  // font_style - computed: true, optional: true, required: false
  private _fontStyle?: string; 
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }
  public set fontStyle(value: string) {
    this._fontStyle = value;
  }
  public resetFontStyle() {
    this._fontStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontStyleInput() {
    return this._fontStyle;
  }

  // font_weight - computed: true, optional: true, required: false
  private _fontWeight = new QuicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontWeight) {
    this._fontWeight.internalValue = value;
  }
  public resetFontWeight() {
    this._fontWeight.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontWeightInput() {
    return this._fontWeight.internalValue;
  }
}
export interface QuicksightThemeConfigurationTypographyVisualSubtitleFontConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_configuration QuicksightTheme#font_configuration}
  */
  readonly fontConfiguration?: QuicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#text_alignment QuicksightTheme#text_alignment}
  */
  readonly textAlignment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#text_transform QuicksightTheme#text_transform}
  */
  readonly textTransform?: string;
}

export function quicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationToTerraform(struct?: QuicksightThemeConfigurationTypographyVisualSubtitleFontConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_configuration: quicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationToTerraform(struct!.fontConfiguration),
    text_alignment: cdktn.stringToTerraform(struct!.textAlignment),
    text_transform: cdktn.stringToTerraform(struct!.textTransform),
  }
}


export function quicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationToHclTerraform(struct?: QuicksightThemeConfigurationTypographyVisualSubtitleFontConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_configuration: {
      value: quicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationToHclTerraform(struct!.fontConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfiguration",
    },
    text_alignment: {
      value: cdktn.stringToHclTerraform(struct!.textAlignment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_transform: {
      value: cdktn.stringToHclTerraform(struct!.textTransform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfigurationTypographyVisualSubtitleFontConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontConfiguration = this._fontConfiguration?.internalValue;
    }
    if (this._textAlignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.textAlignment = this._textAlignment;
    }
    if (this._textTransform !== undefined) {
      hasAnyValues = true;
      internalValueResult.textTransform = this._textTransform;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationTypographyVisualSubtitleFontConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fontConfiguration.internalValue = undefined;
      this._textAlignment = undefined;
      this._textTransform = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fontConfiguration.internalValue = value.fontConfiguration;
      this._textAlignment = value.textAlignment;
      this._textTransform = value.textTransform;
    }
  }

  // font_configuration - computed: true, optional: true, required: false
  private _fontConfiguration = new QuicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationFontConfiguration) {
    this._fontConfiguration.internalValue = value;
  }
  public resetFontConfiguration() {
    this._fontConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontConfigurationInput() {
    return this._fontConfiguration.internalValue;
  }

  // text_alignment - computed: true, optional: true, required: false
  private _textAlignment?: string; 
  public get textAlignment() {
    return this.getStringAttribute('text_alignment');
  }
  public set textAlignment(value: string) {
    this._textAlignment = value;
  }
  public resetTextAlignment() {
    this._textAlignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textAlignmentInput() {
    return this._textAlignment;
  }

  // text_transform - computed: true, optional: true, required: false
  private _textTransform?: string; 
  public get textTransform() {
    return this.getStringAttribute('text_transform');
  }
  public set textTransform(value: string) {
    this._textTransform = value;
  }
  public resetTextTransform() {
    this._textTransform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformInput() {
    return this._textTransform;
  }
}
export interface QuicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontSize {
  /**
  * <p>The font size that you want to use in px.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#absolute QuicksightTheme#absolute}
  */
  readonly absolute?: string;
}

export function quicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontSizeToTerraform(struct?: QuicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    absolute: cdktn.stringToTerraform(struct!.absolute),
  }
}


export function quicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontSizeToHclTerraform(struct?: QuicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    absolute: {
      value: cdktn.stringToHclTerraform(struct!.absolute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontSize | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absolute !== undefined) {
      hasAnyValues = true;
      internalValueResult.absolute = this._absolute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontSize | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._absolute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._absolute = value.absolute;
    }
  }

  // absolute - computed: true, optional: true, required: false
  private _absolute?: string; 
  public get absolute() {
    return this.getStringAttribute('absolute');
  }
  public set absolute(value: string) {
    this._absolute = value;
  }
  public resetAbsolute() {
    this._absolute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteInput() {
    return this._absolute;
  }
}
export interface QuicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#name QuicksightTheme#name}
  */
  readonly name?: string;
}

export function quicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontWeightToTerraform(struct?: QuicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontWeight | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function quicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontWeightToHclTerraform(struct?: QuicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontWeight | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontWeightOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontWeight | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontWeight | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface QuicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_color QuicksightTheme#font_color}
  */
  readonly fontColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_decoration QuicksightTheme#font_decoration}
  */
  readonly fontDecoration?: string;
  /**
  * <p>The font family that you want to use.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_family QuicksightTheme#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_size QuicksightTheme#font_size}
  */
  readonly fontSize?: QuicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontSize;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_style QuicksightTheme#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_weight QuicksightTheme#font_weight}
  */
  readonly fontWeight?: QuicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontWeight;
}

export function quicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationToTerraform(struct?: QuicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_color: cdktn.stringToTerraform(struct!.fontColor),
    font_decoration: cdktn.stringToTerraform(struct!.fontDecoration),
    font_family: cdktn.stringToTerraform(struct!.fontFamily),
    font_size: quicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_style: cdktn.stringToTerraform(struct!.fontStyle),
    font_weight: quicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}


export function quicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationToHclTerraform(struct?: QuicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_color: {
      value: cdktn.stringToHclTerraform(struct!.fontColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_decoration: {
      value: cdktn.stringToHclTerraform(struct!.fontDecoration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_family: {
      value: cdktn.stringToHclTerraform(struct!.fontFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_size: {
      value: quicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontSizeToHclTerraform(struct!.fontSize),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontSize",
    },
    font_style: {
      value: cdktn.stringToHclTerraform(struct!.fontStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_weight: {
      value: quicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontWeightToHclTerraform(struct!.fontWeight),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontWeight",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor;
    }
    if (this._fontDecoration !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontDecoration = this._fontDecoration;
    }
    if (this._fontFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontFamily = this._fontFamily;
    }
    if (this._fontSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize?.internalValue;
    }
    if (this._fontStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontStyle = this._fontStyle;
    }
    if (this._fontWeight?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontWeight = this._fontWeight?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fontColor = undefined;
      this._fontDecoration = undefined;
      this._fontFamily = undefined;
      this._fontSize.internalValue = undefined;
      this._fontStyle = undefined;
      this._fontWeight.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fontColor = value.fontColor;
      this._fontDecoration = value.fontDecoration;
      this._fontFamily = value.fontFamily;
      this._fontSize.internalValue = value.fontSize;
      this._fontStyle = value.fontStyle;
      this._fontWeight.internalValue = value.fontWeight;
    }
  }

  // font_color - computed: true, optional: true, required: false
  private _fontColor?: string; 
  public get fontColor() {
    return this.getStringAttribute('font_color');
  }
  public set fontColor(value: string) {
    this._fontColor = value;
  }
  public resetFontColor() {
    this._fontColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor;
  }

  // font_decoration - computed: true, optional: true, required: false
  private _fontDecoration?: string; 
  public get fontDecoration() {
    return this.getStringAttribute('font_decoration');
  }
  public set fontDecoration(value: string) {
    this._fontDecoration = value;
  }
  public resetFontDecoration() {
    this._fontDecoration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontDecorationInput() {
    return this._fontDecoration;
  }

  // font_family - computed: true, optional: true, required: false
  private _fontFamily?: string; 
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }
  public set fontFamily(value: string) {
    this._fontFamily = value;
  }
  public resetFontFamily() {
    this._fontFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontFamilyInput() {
    return this._fontFamily;
  }

  // font_size - computed: true, optional: true, required: false
  private _fontSize = new QuicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontSize) {
    this._fontSize.internalValue = value;
  }
  public resetFontSize() {
    this._fontSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize.internalValue;
  }

  // font_style - computed: true, optional: true, required: false
  private _fontStyle?: string; 
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }
  public set fontStyle(value: string) {
    this._fontStyle = value;
  }
  public resetFontStyle() {
    this._fontStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontStyleInput() {
    return this._fontStyle;
  }

  // font_weight - computed: true, optional: true, required: false
  private _fontWeight = new QuicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontWeight) {
    this._fontWeight.internalValue = value;
  }
  public resetFontWeight() {
    this._fontWeight.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontWeightInput() {
    return this._fontWeight.internalValue;
  }
}
export interface QuicksightThemeConfigurationTypographyVisualTitleFontConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_configuration QuicksightTheme#font_configuration}
  */
  readonly fontConfiguration?: QuicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#text_alignment QuicksightTheme#text_alignment}
  */
  readonly textAlignment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#text_transform QuicksightTheme#text_transform}
  */
  readonly textTransform?: string;
}

export function quicksightThemeConfigurationTypographyVisualTitleFontConfigurationToTerraform(struct?: QuicksightThemeConfigurationTypographyVisualTitleFontConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    font_configuration: quicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationToTerraform(struct!.fontConfiguration),
    text_alignment: cdktn.stringToTerraform(struct!.textAlignment),
    text_transform: cdktn.stringToTerraform(struct!.textTransform),
  }
}


export function quicksightThemeConfigurationTypographyVisualTitleFontConfigurationToHclTerraform(struct?: QuicksightThemeConfigurationTypographyVisualTitleFontConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    font_configuration: {
      value: quicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationToHclTerraform(struct!.fontConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfiguration",
    },
    text_alignment: {
      value: cdktn.stringToHclTerraform(struct!.textAlignment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_transform: {
      value: cdktn.stringToHclTerraform(struct!.textTransform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationTypographyVisualTitleFontConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfigurationTypographyVisualTitleFontConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontConfiguration = this._fontConfiguration?.internalValue;
    }
    if (this._textAlignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.textAlignment = this._textAlignment;
    }
    if (this._textTransform !== undefined) {
      hasAnyValues = true;
      internalValueResult.textTransform = this._textTransform;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationTypographyVisualTitleFontConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fontConfiguration.internalValue = undefined;
      this._textAlignment = undefined;
      this._textTransform = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fontConfiguration.internalValue = value.fontConfiguration;
      this._textAlignment = value.textAlignment;
      this._textTransform = value.textTransform;
    }
  }

  // font_configuration - computed: true, optional: true, required: false
  private _fontConfiguration = new QuicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightThemeConfigurationTypographyVisualTitleFontConfigurationFontConfiguration) {
    this._fontConfiguration.internalValue = value;
  }
  public resetFontConfiguration() {
    this._fontConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontConfigurationInput() {
    return this._fontConfiguration.internalValue;
  }

  // text_alignment - computed: true, optional: true, required: false
  private _textAlignment?: string; 
  public get textAlignment() {
    return this.getStringAttribute('text_alignment');
  }
  public set textAlignment(value: string) {
    this._textAlignment = value;
  }
  public resetTextAlignment() {
    this._textAlignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textAlignmentInput() {
    return this._textAlignment;
  }

  // text_transform - computed: true, optional: true, required: false
  private _textTransform?: string; 
  public get textTransform() {
    return this.getStringAttribute('text_transform');
  }
  public set textTransform(value: string) {
    this._textTransform = value;
  }
  public resetTextTransform() {
    this._textTransform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformInput() {
    return this._textTransform;
  }
}
export interface QuicksightThemeConfigurationTypography {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#axis_label_font_configuration QuicksightTheme#axis_label_font_configuration}
  */
  readonly axisLabelFontConfiguration?: QuicksightThemeConfigurationTypographyAxisLabelFontConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#axis_title_font_configuration QuicksightTheme#axis_title_font_configuration}
  */
  readonly axisTitleFontConfiguration?: QuicksightThemeConfigurationTypographyAxisTitleFontConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#data_label_font_configuration QuicksightTheme#data_label_font_configuration}
  */
  readonly dataLabelFontConfiguration?: QuicksightThemeConfigurationTypographyDataLabelFontConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#font_families QuicksightTheme#font_families}
  */
  readonly fontFamilies?: QuicksightThemeConfigurationTypographyFontFamilies[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#legend_title_font_configuration QuicksightTheme#legend_title_font_configuration}
  */
  readonly legendTitleFontConfiguration?: QuicksightThemeConfigurationTypographyLegendTitleFontConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#legend_value_font_configuration QuicksightTheme#legend_value_font_configuration}
  */
  readonly legendValueFontConfiguration?: QuicksightThemeConfigurationTypographyLegendValueFontConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#visual_subtitle_font_configuration QuicksightTheme#visual_subtitle_font_configuration}
  */
  readonly visualSubtitleFontConfiguration?: QuicksightThemeConfigurationTypographyVisualSubtitleFontConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#visual_title_font_configuration QuicksightTheme#visual_title_font_configuration}
  */
  readonly visualTitleFontConfiguration?: QuicksightThemeConfigurationTypographyVisualTitleFontConfiguration;
}

export function quicksightThemeConfigurationTypographyToTerraform(struct?: QuicksightThemeConfigurationTypography | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    axis_label_font_configuration: quicksightThemeConfigurationTypographyAxisLabelFontConfigurationToTerraform(struct!.axisLabelFontConfiguration),
    axis_title_font_configuration: quicksightThemeConfigurationTypographyAxisTitleFontConfigurationToTerraform(struct!.axisTitleFontConfiguration),
    data_label_font_configuration: quicksightThemeConfigurationTypographyDataLabelFontConfigurationToTerraform(struct!.dataLabelFontConfiguration),
    font_families: cdktn.listMapper(quicksightThemeConfigurationTypographyFontFamiliesToTerraform, false)(struct!.fontFamilies),
    legend_title_font_configuration: quicksightThemeConfigurationTypographyLegendTitleFontConfigurationToTerraform(struct!.legendTitleFontConfiguration),
    legend_value_font_configuration: quicksightThemeConfigurationTypographyLegendValueFontConfigurationToTerraform(struct!.legendValueFontConfiguration),
    visual_subtitle_font_configuration: quicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationToTerraform(struct!.visualSubtitleFontConfiguration),
    visual_title_font_configuration: quicksightThemeConfigurationTypographyVisualTitleFontConfigurationToTerraform(struct!.visualTitleFontConfiguration),
  }
}


export function quicksightThemeConfigurationTypographyToHclTerraform(struct?: QuicksightThemeConfigurationTypography | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    axis_label_font_configuration: {
      value: quicksightThemeConfigurationTypographyAxisLabelFontConfigurationToHclTerraform(struct!.axisLabelFontConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightThemeConfigurationTypographyAxisLabelFontConfiguration",
    },
    axis_title_font_configuration: {
      value: quicksightThemeConfigurationTypographyAxisTitleFontConfigurationToHclTerraform(struct!.axisTitleFontConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightThemeConfigurationTypographyAxisTitleFontConfiguration",
    },
    data_label_font_configuration: {
      value: quicksightThemeConfigurationTypographyDataLabelFontConfigurationToHclTerraform(struct!.dataLabelFontConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightThemeConfigurationTypographyDataLabelFontConfiguration",
    },
    font_families: {
      value: cdktn.listMapperHcl(quicksightThemeConfigurationTypographyFontFamiliesToHclTerraform, false)(struct!.fontFamilies),
      isBlock: true,
      type: "list",
      storageClassType: "QuicksightThemeConfigurationTypographyFontFamiliesList",
    },
    legend_title_font_configuration: {
      value: quicksightThemeConfigurationTypographyLegendTitleFontConfigurationToHclTerraform(struct!.legendTitleFontConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightThemeConfigurationTypographyLegendTitleFontConfiguration",
    },
    legend_value_font_configuration: {
      value: quicksightThemeConfigurationTypographyLegendValueFontConfigurationToHclTerraform(struct!.legendValueFontConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightThemeConfigurationTypographyLegendValueFontConfiguration",
    },
    visual_subtitle_font_configuration: {
      value: quicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationToHclTerraform(struct!.visualSubtitleFontConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightThemeConfigurationTypographyVisualSubtitleFontConfiguration",
    },
    visual_title_font_configuration: {
      value: quicksightThemeConfigurationTypographyVisualTitleFontConfigurationToHclTerraform(struct!.visualTitleFontConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightThemeConfigurationTypographyVisualTitleFontConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationTypographyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfigurationTypography | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._axisLabelFontConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.axisLabelFontConfiguration = this._axisLabelFontConfiguration?.internalValue;
    }
    if (this._axisTitleFontConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.axisTitleFontConfiguration = this._axisTitleFontConfiguration?.internalValue;
    }
    if (this._dataLabelFontConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLabelFontConfiguration = this._dataLabelFontConfiguration?.internalValue;
    }
    if (this._fontFamilies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontFamilies = this._fontFamilies?.internalValue;
    }
    if (this._legendTitleFontConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.legendTitleFontConfiguration = this._legendTitleFontConfiguration?.internalValue;
    }
    if (this._legendValueFontConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.legendValueFontConfiguration = this._legendValueFontConfiguration?.internalValue;
    }
    if (this._visualSubtitleFontConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualSubtitleFontConfiguration = this._visualSubtitleFontConfiguration?.internalValue;
    }
    if (this._visualTitleFontConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualTitleFontConfiguration = this._visualTitleFontConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationTypography | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._axisLabelFontConfiguration.internalValue = undefined;
      this._axisTitleFontConfiguration.internalValue = undefined;
      this._dataLabelFontConfiguration.internalValue = undefined;
      this._fontFamilies.internalValue = undefined;
      this._legendTitleFontConfiguration.internalValue = undefined;
      this._legendValueFontConfiguration.internalValue = undefined;
      this._visualSubtitleFontConfiguration.internalValue = undefined;
      this._visualTitleFontConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._axisLabelFontConfiguration.internalValue = value.axisLabelFontConfiguration;
      this._axisTitleFontConfiguration.internalValue = value.axisTitleFontConfiguration;
      this._dataLabelFontConfiguration.internalValue = value.dataLabelFontConfiguration;
      this._fontFamilies.internalValue = value.fontFamilies;
      this._legendTitleFontConfiguration.internalValue = value.legendTitleFontConfiguration;
      this._legendValueFontConfiguration.internalValue = value.legendValueFontConfiguration;
      this._visualSubtitleFontConfiguration.internalValue = value.visualSubtitleFontConfiguration;
      this._visualTitleFontConfiguration.internalValue = value.visualTitleFontConfiguration;
    }
  }

  // axis_label_font_configuration - computed: true, optional: true, required: false
  private _axisLabelFontConfiguration = new QuicksightThemeConfigurationTypographyAxisLabelFontConfigurationOutputReference(this, "axis_label_font_configuration");
  public get axisLabelFontConfiguration() {
    return this._axisLabelFontConfiguration;
  }
  public putAxisLabelFontConfiguration(value: QuicksightThemeConfigurationTypographyAxisLabelFontConfiguration) {
    this._axisLabelFontConfiguration.internalValue = value;
  }
  public resetAxisLabelFontConfiguration() {
    this._axisLabelFontConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axisLabelFontConfigurationInput() {
    return this._axisLabelFontConfiguration.internalValue;
  }

  // axis_title_font_configuration - computed: true, optional: true, required: false
  private _axisTitleFontConfiguration = new QuicksightThemeConfigurationTypographyAxisTitleFontConfigurationOutputReference(this, "axis_title_font_configuration");
  public get axisTitleFontConfiguration() {
    return this._axisTitleFontConfiguration;
  }
  public putAxisTitleFontConfiguration(value: QuicksightThemeConfigurationTypographyAxisTitleFontConfiguration) {
    this._axisTitleFontConfiguration.internalValue = value;
  }
  public resetAxisTitleFontConfiguration() {
    this._axisTitleFontConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axisTitleFontConfigurationInput() {
    return this._axisTitleFontConfiguration.internalValue;
  }

  // data_label_font_configuration - computed: true, optional: true, required: false
  private _dataLabelFontConfiguration = new QuicksightThemeConfigurationTypographyDataLabelFontConfigurationOutputReference(this, "data_label_font_configuration");
  public get dataLabelFontConfiguration() {
    return this._dataLabelFontConfiguration;
  }
  public putDataLabelFontConfiguration(value: QuicksightThemeConfigurationTypographyDataLabelFontConfiguration) {
    this._dataLabelFontConfiguration.internalValue = value;
  }
  public resetDataLabelFontConfiguration() {
    this._dataLabelFontConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLabelFontConfigurationInput() {
    return this._dataLabelFontConfiguration.internalValue;
  }

  // font_families - computed: true, optional: true, required: false
  private _fontFamilies = new QuicksightThemeConfigurationTypographyFontFamiliesList(this, "font_families", false);
  public get fontFamilies() {
    return this._fontFamilies;
  }
  public putFontFamilies(value: QuicksightThemeConfigurationTypographyFontFamilies[] | cdktn.IResolvable) {
    this._fontFamilies.internalValue = value;
  }
  public resetFontFamilies() {
    this._fontFamilies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontFamiliesInput() {
    return this._fontFamilies.internalValue;
  }

  // legend_title_font_configuration - computed: true, optional: true, required: false
  private _legendTitleFontConfiguration = new QuicksightThemeConfigurationTypographyLegendTitleFontConfigurationOutputReference(this, "legend_title_font_configuration");
  public get legendTitleFontConfiguration() {
    return this._legendTitleFontConfiguration;
  }
  public putLegendTitleFontConfiguration(value: QuicksightThemeConfigurationTypographyLegendTitleFontConfiguration) {
    this._legendTitleFontConfiguration.internalValue = value;
  }
  public resetLegendTitleFontConfiguration() {
    this._legendTitleFontConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendTitleFontConfigurationInput() {
    return this._legendTitleFontConfiguration.internalValue;
  }

  // legend_value_font_configuration - computed: true, optional: true, required: false
  private _legendValueFontConfiguration = new QuicksightThemeConfigurationTypographyLegendValueFontConfigurationOutputReference(this, "legend_value_font_configuration");
  public get legendValueFontConfiguration() {
    return this._legendValueFontConfiguration;
  }
  public putLegendValueFontConfiguration(value: QuicksightThemeConfigurationTypographyLegendValueFontConfiguration) {
    this._legendValueFontConfiguration.internalValue = value;
  }
  public resetLegendValueFontConfiguration() {
    this._legendValueFontConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendValueFontConfigurationInput() {
    return this._legendValueFontConfiguration.internalValue;
  }

  // visual_subtitle_font_configuration - computed: true, optional: true, required: false
  private _visualSubtitleFontConfiguration = new QuicksightThemeConfigurationTypographyVisualSubtitleFontConfigurationOutputReference(this, "visual_subtitle_font_configuration");
  public get visualSubtitleFontConfiguration() {
    return this._visualSubtitleFontConfiguration;
  }
  public putVisualSubtitleFontConfiguration(value: QuicksightThemeConfigurationTypographyVisualSubtitleFontConfiguration) {
    this._visualSubtitleFontConfiguration.internalValue = value;
  }
  public resetVisualSubtitleFontConfiguration() {
    this._visualSubtitleFontConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualSubtitleFontConfigurationInput() {
    return this._visualSubtitleFontConfiguration.internalValue;
  }

  // visual_title_font_configuration - computed: true, optional: true, required: false
  private _visualTitleFontConfiguration = new QuicksightThemeConfigurationTypographyVisualTitleFontConfigurationOutputReference(this, "visual_title_font_configuration");
  public get visualTitleFontConfiguration() {
    return this._visualTitleFontConfiguration;
  }
  public putVisualTitleFontConfiguration(value: QuicksightThemeConfigurationTypographyVisualTitleFontConfiguration) {
    this._visualTitleFontConfiguration.internalValue = value;
  }
  public resetVisualTitleFontConfiguration() {
    this._visualTitleFontConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualTitleFontConfigurationInput() {
    return this._visualTitleFontConfiguration.internalValue;
  }
}
export interface QuicksightThemeConfigurationUiColorPalette {
  /**
  * <p>This color is that applies to selected states and buttons.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#accent QuicksightTheme#accent}
  */
  readonly accent?: string;
  /**
  * <p>The foreground color that applies to any text or other elements that appear over the
  *             accent color.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#accent_foreground QuicksightTheme#accent_foreground}
  */
  readonly accentForeground?: string;
  /**
  * <p>The color that applies to error messages.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#danger QuicksightTheme#danger}
  */
  readonly danger?: string;
  /**
  * <p>The foreground color that applies to any text or other elements that appear over the
  *             error color.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#danger_foreground QuicksightTheme#danger_foreground}
  */
  readonly dangerForeground?: string;
  /**
  * <p>The color that applies to the names of fields that are identified as
  *             dimensions.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#dimension QuicksightTheme#dimension}
  */
  readonly dimension?: string;
  /**
  * <p>The foreground color that applies to any text or other elements that appear over the
  *             dimension color.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#dimension_foreground QuicksightTheme#dimension_foreground}
  */
  readonly dimensionForeground?: string;
  /**
  * <p>The color that applies to the names of fields that are identified as measures.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#measure QuicksightTheme#measure}
  */
  readonly measure?: string;
  /**
  * <p>The foreground color that applies to any text or other elements that appear over the
  *             measure color.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#measure_foreground QuicksightTheme#measure_foreground}
  */
  readonly measureForeground?: string;
  /**
  * <p>The background color that applies to visuals and other high emphasis UI.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#primary_background QuicksightTheme#primary_background}
  */
  readonly primaryBackground?: string;
  /**
  * <p>The color of text and other foreground elements that appear over the primary
  *             background regions, such as grid lines, borders, table banding, icons, and so on.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#primary_foreground QuicksightTheme#primary_foreground}
  */
  readonly primaryForeground?: string;
  /**
  * <p>The background color that applies to the sheet background and sheet controls.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#secondary_background QuicksightTheme#secondary_background}
  */
  readonly secondaryBackground?: string;
  /**
  * <p>The foreground color that applies to any sheet title, sheet control text, or UI that
  *             appears over the secondary background.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#secondary_foreground QuicksightTheme#secondary_foreground}
  */
  readonly secondaryForeground?: string;
  /**
  * <p>The color that applies to success messages, for example the check mark for a
  *             successful download.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#success QuicksightTheme#success}
  */
  readonly success?: string;
  /**
  * <p>The foreground color that applies to any text or other elements that appear over the
  *             success color.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#success_foreground QuicksightTheme#success_foreground}
  */
  readonly successForeground?: string;
  /**
  * <p>This color that applies to warning and informational messages.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#warning QuicksightTheme#warning}
  */
  readonly warning?: string;
  /**
  * <p>The foreground color that applies to any text or other elements that appear over the
  *             warning color.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#warning_foreground QuicksightTheme#warning_foreground}
  */
  readonly warningForeground?: string;
}

export function quicksightThemeConfigurationUiColorPaletteToTerraform(struct?: QuicksightThemeConfigurationUiColorPalette | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accent: cdktn.stringToTerraform(struct!.accent),
    accent_foreground: cdktn.stringToTerraform(struct!.accentForeground),
    danger: cdktn.stringToTerraform(struct!.danger),
    danger_foreground: cdktn.stringToTerraform(struct!.dangerForeground),
    dimension: cdktn.stringToTerraform(struct!.dimension),
    dimension_foreground: cdktn.stringToTerraform(struct!.dimensionForeground),
    measure: cdktn.stringToTerraform(struct!.measure),
    measure_foreground: cdktn.stringToTerraform(struct!.measureForeground),
    primary_background: cdktn.stringToTerraform(struct!.primaryBackground),
    primary_foreground: cdktn.stringToTerraform(struct!.primaryForeground),
    secondary_background: cdktn.stringToTerraform(struct!.secondaryBackground),
    secondary_foreground: cdktn.stringToTerraform(struct!.secondaryForeground),
    success: cdktn.stringToTerraform(struct!.success),
    success_foreground: cdktn.stringToTerraform(struct!.successForeground),
    warning: cdktn.stringToTerraform(struct!.warning),
    warning_foreground: cdktn.stringToTerraform(struct!.warningForeground),
  }
}


export function quicksightThemeConfigurationUiColorPaletteToHclTerraform(struct?: QuicksightThemeConfigurationUiColorPalette | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accent: {
      value: cdktn.stringToHclTerraform(struct!.accent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accent_foreground: {
      value: cdktn.stringToHclTerraform(struct!.accentForeground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    danger: {
      value: cdktn.stringToHclTerraform(struct!.danger),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    danger_foreground: {
      value: cdktn.stringToHclTerraform(struct!.dangerForeground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimension: {
      value: cdktn.stringToHclTerraform(struct!.dimension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimension_foreground: {
      value: cdktn.stringToHclTerraform(struct!.dimensionForeground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    measure: {
      value: cdktn.stringToHclTerraform(struct!.measure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    measure_foreground: {
      value: cdktn.stringToHclTerraform(struct!.measureForeground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_background: {
      value: cdktn.stringToHclTerraform(struct!.primaryBackground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_foreground: {
      value: cdktn.stringToHclTerraform(struct!.primaryForeground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_background: {
      value: cdktn.stringToHclTerraform(struct!.secondaryBackground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_foreground: {
      value: cdktn.stringToHclTerraform(struct!.secondaryForeground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    success: {
      value: cdktn.stringToHclTerraform(struct!.success),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    success_foreground: {
      value: cdktn.stringToHclTerraform(struct!.successForeground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning: {
      value: cdktn.stringToHclTerraform(struct!.warning),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning_foreground: {
      value: cdktn.stringToHclTerraform(struct!.warningForeground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationUiColorPaletteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfigurationUiColorPalette | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accent !== undefined) {
      hasAnyValues = true;
      internalValueResult.accent = this._accent;
    }
    if (this._accentForeground !== undefined) {
      hasAnyValues = true;
      internalValueResult.accentForeground = this._accentForeground;
    }
    if (this._danger !== undefined) {
      hasAnyValues = true;
      internalValueResult.danger = this._danger;
    }
    if (this._dangerForeground !== undefined) {
      hasAnyValues = true;
      internalValueResult.dangerForeground = this._dangerForeground;
    }
    if (this._dimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension;
    }
    if (this._dimensionForeground !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionForeground = this._dimensionForeground;
    }
    if (this._measure !== undefined) {
      hasAnyValues = true;
      internalValueResult.measure = this._measure;
    }
    if (this._measureForeground !== undefined) {
      hasAnyValues = true;
      internalValueResult.measureForeground = this._measureForeground;
    }
    if (this._primaryBackground !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryBackground = this._primaryBackground;
    }
    if (this._primaryForeground !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryForeground = this._primaryForeground;
    }
    if (this._secondaryBackground !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryBackground = this._secondaryBackground;
    }
    if (this._secondaryForeground !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryForeground = this._secondaryForeground;
    }
    if (this._success !== undefined) {
      hasAnyValues = true;
      internalValueResult.success = this._success;
    }
    if (this._successForeground !== undefined) {
      hasAnyValues = true;
      internalValueResult.successForeground = this._successForeground;
    }
    if (this._warning !== undefined) {
      hasAnyValues = true;
      internalValueResult.warning = this._warning;
    }
    if (this._warningForeground !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningForeground = this._warningForeground;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationUiColorPalette | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accent = undefined;
      this._accentForeground = undefined;
      this._danger = undefined;
      this._dangerForeground = undefined;
      this._dimension = undefined;
      this._dimensionForeground = undefined;
      this._measure = undefined;
      this._measureForeground = undefined;
      this._primaryBackground = undefined;
      this._primaryForeground = undefined;
      this._secondaryBackground = undefined;
      this._secondaryForeground = undefined;
      this._success = undefined;
      this._successForeground = undefined;
      this._warning = undefined;
      this._warningForeground = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accent = value.accent;
      this._accentForeground = value.accentForeground;
      this._danger = value.danger;
      this._dangerForeground = value.dangerForeground;
      this._dimension = value.dimension;
      this._dimensionForeground = value.dimensionForeground;
      this._measure = value.measure;
      this._measureForeground = value.measureForeground;
      this._primaryBackground = value.primaryBackground;
      this._primaryForeground = value.primaryForeground;
      this._secondaryBackground = value.secondaryBackground;
      this._secondaryForeground = value.secondaryForeground;
      this._success = value.success;
      this._successForeground = value.successForeground;
      this._warning = value.warning;
      this._warningForeground = value.warningForeground;
    }
  }

  // accent - computed: true, optional: true, required: false
  private _accent?: string; 
  public get accent() {
    return this.getStringAttribute('accent');
  }
  public set accent(value: string) {
    this._accent = value;
  }
  public resetAccent() {
    this._accent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accentInput() {
    return this._accent;
  }

  // accent_foreground - computed: true, optional: true, required: false
  private _accentForeground?: string; 
  public get accentForeground() {
    return this.getStringAttribute('accent_foreground');
  }
  public set accentForeground(value: string) {
    this._accentForeground = value;
  }
  public resetAccentForeground() {
    this._accentForeground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accentForegroundInput() {
    return this._accentForeground;
  }

  // danger - computed: true, optional: true, required: false
  private _danger?: string; 
  public get danger() {
    return this.getStringAttribute('danger');
  }
  public set danger(value: string) {
    this._danger = value;
  }
  public resetDanger() {
    this._danger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dangerInput() {
    return this._danger;
  }

  // danger_foreground - computed: true, optional: true, required: false
  private _dangerForeground?: string; 
  public get dangerForeground() {
    return this.getStringAttribute('danger_foreground');
  }
  public set dangerForeground(value: string) {
    this._dangerForeground = value;
  }
  public resetDangerForeground() {
    this._dangerForeground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dangerForegroundInput() {
    return this._dangerForeground;
  }

  // dimension - computed: true, optional: true, required: false
  private _dimension?: string; 
  public get dimension() {
    return this.getStringAttribute('dimension');
  }
  public set dimension(value: string) {
    this._dimension = value;
  }
  public resetDimension() {
    this._dimension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension;
  }

  // dimension_foreground - computed: true, optional: true, required: false
  private _dimensionForeground?: string; 
  public get dimensionForeground() {
    return this.getStringAttribute('dimension_foreground');
  }
  public set dimensionForeground(value: string) {
    this._dimensionForeground = value;
  }
  public resetDimensionForeground() {
    this._dimensionForeground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionForegroundInput() {
    return this._dimensionForeground;
  }

  // measure - computed: true, optional: true, required: false
  private _measure?: string; 
  public get measure() {
    return this.getStringAttribute('measure');
  }
  public set measure(value: string) {
    this._measure = value;
  }
  public resetMeasure() {
    this._measure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get measureInput() {
    return this._measure;
  }

  // measure_foreground - computed: true, optional: true, required: false
  private _measureForeground?: string; 
  public get measureForeground() {
    return this.getStringAttribute('measure_foreground');
  }
  public set measureForeground(value: string) {
    this._measureForeground = value;
  }
  public resetMeasureForeground() {
    this._measureForeground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get measureForegroundInput() {
    return this._measureForeground;
  }

  // primary_background - computed: true, optional: true, required: false
  private _primaryBackground?: string; 
  public get primaryBackground() {
    return this.getStringAttribute('primary_background');
  }
  public set primaryBackground(value: string) {
    this._primaryBackground = value;
  }
  public resetPrimaryBackground() {
    this._primaryBackground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryBackgroundInput() {
    return this._primaryBackground;
  }

  // primary_foreground - computed: true, optional: true, required: false
  private _primaryForeground?: string; 
  public get primaryForeground() {
    return this.getStringAttribute('primary_foreground');
  }
  public set primaryForeground(value: string) {
    this._primaryForeground = value;
  }
  public resetPrimaryForeground() {
    this._primaryForeground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryForegroundInput() {
    return this._primaryForeground;
  }

  // secondary_background - computed: true, optional: true, required: false
  private _secondaryBackground?: string; 
  public get secondaryBackground() {
    return this.getStringAttribute('secondary_background');
  }
  public set secondaryBackground(value: string) {
    this._secondaryBackground = value;
  }
  public resetSecondaryBackground() {
    this._secondaryBackground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryBackgroundInput() {
    return this._secondaryBackground;
  }

  // secondary_foreground - computed: true, optional: true, required: false
  private _secondaryForeground?: string; 
  public get secondaryForeground() {
    return this.getStringAttribute('secondary_foreground');
  }
  public set secondaryForeground(value: string) {
    this._secondaryForeground = value;
  }
  public resetSecondaryForeground() {
    this._secondaryForeground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryForegroundInput() {
    return this._secondaryForeground;
  }

  // success - computed: true, optional: true, required: false
  private _success?: string; 
  public get success() {
    return this.getStringAttribute('success');
  }
  public set success(value: string) {
    this._success = value;
  }
  public resetSuccess() {
    this._success = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successInput() {
    return this._success;
  }

  // success_foreground - computed: true, optional: true, required: false
  private _successForeground?: string; 
  public get successForeground() {
    return this.getStringAttribute('success_foreground');
  }
  public set successForeground(value: string) {
    this._successForeground = value;
  }
  public resetSuccessForeground() {
    this._successForeground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successForegroundInput() {
    return this._successForeground;
  }

  // warning - computed: true, optional: true, required: false
  private _warning?: string; 
  public get warning() {
    return this.getStringAttribute('warning');
  }
  public set warning(value: string) {
    this._warning = value;
  }
  public resetWarning() {
    this._warning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning;
  }

  // warning_foreground - computed: true, optional: true, required: false
  private _warningForeground?: string; 
  public get warningForeground() {
    return this.getStringAttribute('warning_foreground');
  }
  public set warningForeground(value: string) {
    this._warningForeground = value;
  }
  public resetWarningForeground() {
    this._warningForeground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningForegroundInput() {
    return this._warningForeground;
  }
}
export interface QuicksightThemeConfiguration {
  /**
  * <p>The theme colors that are used for data colors in charts. The colors description is a
  *             hexadecimal color code that consists of six alphanumerical characters, prefixed with
  *                 <code>#</code>, for example #37BFF5. </p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#data_color_palette QuicksightTheme#data_color_palette}
  */
  readonly dataColorPalette?: QuicksightThemeConfigurationDataColorPalette;
  /**
  * <p>The theme display options for sheets. </p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#sheet QuicksightTheme#sheet}
  */
  readonly sheet?: QuicksightThemeConfigurationSheet;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#typography QuicksightTheme#typography}
  */
  readonly typography?: QuicksightThemeConfigurationTypography;
  /**
  * <p>The theme colors that apply to UI and to charts, excluding data colors. The colors
  *             description is a hexadecimal color code that consists of six alphanumerical characters,
  *             prefixed with <code>#</code>, for example #37BFF5. For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/themes-in-quicksight.html">Using Themes in Amazon Quick</a> in the <i>Amazon Quick User
  *                 Guide.</i>
  *          </p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#ui_color_palette QuicksightTheme#ui_color_palette}
  */
  readonly uiColorPalette?: QuicksightThemeConfigurationUiColorPalette;
}

export function quicksightThemeConfigurationToTerraform(struct?: QuicksightThemeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_color_palette: quicksightThemeConfigurationDataColorPaletteToTerraform(struct!.dataColorPalette),
    sheet: quicksightThemeConfigurationSheetToTerraform(struct!.sheet),
    typography: quicksightThemeConfigurationTypographyToTerraform(struct!.typography),
    ui_color_palette: quicksightThemeConfigurationUiColorPaletteToTerraform(struct!.uiColorPalette),
  }
}


export function quicksightThemeConfigurationToHclTerraform(struct?: QuicksightThemeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_color_palette: {
      value: quicksightThemeConfigurationDataColorPaletteToHclTerraform(struct!.dataColorPalette),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightThemeConfigurationDataColorPalette",
    },
    sheet: {
      value: quicksightThemeConfigurationSheetToHclTerraform(struct!.sheet),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightThemeConfigurationSheet",
    },
    typography: {
      value: quicksightThemeConfigurationTypographyToHclTerraform(struct!.typography),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightThemeConfigurationTypography",
    },
    ui_color_palette: {
      value: quicksightThemeConfigurationUiColorPaletteToHclTerraform(struct!.uiColorPalette),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightThemeConfigurationUiColorPalette",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataColorPalette?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataColorPalette = this._dataColorPalette?.internalValue;
    }
    if (this._sheet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sheet = this._sheet?.internalValue;
    }
    if (this._typography?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.typography = this._typography?.internalValue;
    }
    if (this._uiColorPalette?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uiColorPalette = this._uiColorPalette?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataColorPalette.internalValue = undefined;
      this._sheet.internalValue = undefined;
      this._typography.internalValue = undefined;
      this._uiColorPalette.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataColorPalette.internalValue = value.dataColorPalette;
      this._sheet.internalValue = value.sheet;
      this._typography.internalValue = value.typography;
      this._uiColorPalette.internalValue = value.uiColorPalette;
    }
  }

  // data_color_palette - computed: true, optional: true, required: false
  private _dataColorPalette = new QuicksightThemeConfigurationDataColorPaletteOutputReference(this, "data_color_palette");
  public get dataColorPalette() {
    return this._dataColorPalette;
  }
  public putDataColorPalette(value: QuicksightThemeConfigurationDataColorPalette) {
    this._dataColorPalette.internalValue = value;
  }
  public resetDataColorPalette() {
    this._dataColorPalette.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataColorPaletteInput() {
    return this._dataColorPalette.internalValue;
  }

  // sheet - computed: true, optional: true, required: false
  private _sheet = new QuicksightThemeConfigurationSheetOutputReference(this, "sheet");
  public get sheet() {
    return this._sheet;
  }
  public putSheet(value: QuicksightThemeConfigurationSheet) {
    this._sheet.internalValue = value;
  }
  public resetSheet() {
    this._sheet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sheetInput() {
    return this._sheet.internalValue;
  }

  // typography - computed: true, optional: true, required: false
  private _typography = new QuicksightThemeConfigurationTypographyOutputReference(this, "typography");
  public get typography() {
    return this._typography;
  }
  public putTypography(value: QuicksightThemeConfigurationTypography) {
    this._typography.internalValue = value;
  }
  public resetTypography() {
    this._typography.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typographyInput() {
    return this._typography.internalValue;
  }

  // ui_color_palette - computed: true, optional: true, required: false
  private _uiColorPalette = new QuicksightThemeConfigurationUiColorPaletteOutputReference(this, "ui_color_palette");
  public get uiColorPalette() {
    return this._uiColorPalette;
  }
  public putUiColorPalette(value: QuicksightThemeConfigurationUiColorPalette) {
    this._uiColorPalette.internalValue = value;
  }
  public resetUiColorPalette() {
    this._uiColorPalette.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiColorPaletteInput() {
    return this._uiColorPalette.internalValue;
  }
}
export interface QuicksightThemePermissions {
  /**
  * <p>The IAM action to grant or revoke permissions on.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#actions QuicksightTheme#actions}
  */
  readonly actions?: string[];
  /**
  * <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
  *             following:</p>
  *          <ul>
  *             <li>
  *                <p>The ARN of an Amazon Quick user or group associated with a data source or dataset. (This is common.)</p>
  *             </li>
  *             <li>
  *                <p>The ARN of an Amazon Quick user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
  *             </li>
  *             <li>
  *                <p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
  *                     ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
  *                     (This is less common.) </p>
  *             </li>
  *          </ul>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#principal QuicksightTheme#principal}
  */
  readonly principal?: string;
}

export function quicksightThemePermissionsToTerraform(struct?: QuicksightThemePermissions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
    principal: cdktn.stringToTerraform(struct!.principal),
  }
}


export function quicksightThemePermissionsToHclTerraform(struct?: QuicksightThemePermissions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    principal: {
      value: cdktn.stringToHclTerraform(struct!.principal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemePermissionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): QuicksightThemePermissions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemePermissions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._principal = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._principal = value.principal;
    }
  }

  // actions - computed: true, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // principal - computed: true, optional: true, required: false
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  public resetPrincipal() {
    this._principal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }
}

export class QuicksightThemePermissionsList extends cdktn.ComplexList {
  public internalValue? : QuicksightThemePermissions[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightThemePermissionsOutputReference {
    return new QuicksightThemePermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightThemeTags {
  /**
  * <p>Tag key.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#key QuicksightTheme#key}
  */
  readonly key?: string;
  /**
  * <p>Tag value.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#value QuicksightTheme#value}
  */
  readonly value?: string;
}

export function quicksightThemeTagsToTerraform(struct?: QuicksightThemeTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function quicksightThemeTagsToHclTerraform(struct?: QuicksightThemeTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightThemeTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): QuicksightThemeTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class QuicksightThemeTagsList extends cdktn.ComplexList {
  public internalValue? : QuicksightThemeTags[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightThemeTagsOutputReference {
    return new QuicksightThemeTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightThemeVersionConfigurationDataColorPalette {
}

export function quicksightThemeVersionConfigurationDataColorPaletteToTerraform(struct?: QuicksightThemeVersionConfigurationDataColorPalette): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationDataColorPaletteToHclTerraform(struct?: QuicksightThemeVersionConfigurationDataColorPalette): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationDataColorPaletteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationDataColorPalette | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationDataColorPalette | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // colors - computed: true, optional: false, required: false
  public get colors() {
    return this.getListAttribute('colors');
  }

  // empty_fill_color - computed: true, optional: false, required: false
  public get emptyFillColor() {
    return this.getStringAttribute('empty_fill_color');
  }

  // min_max_gradient - computed: true, optional: false, required: false
  public get minMaxGradient() {
    return this.getListAttribute('min_max_gradient');
  }
}
export interface QuicksightThemeVersionConfigurationSheetBackground {
}

export function quicksightThemeVersionConfigurationSheetBackgroundToTerraform(struct?: QuicksightThemeVersionConfigurationSheetBackground): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationSheetBackgroundToHclTerraform(struct?: QuicksightThemeVersionConfigurationSheetBackground): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationSheetBackgroundOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationSheetBackground | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationSheetBackground | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // gradient - computed: true, optional: false, required: false
  public get gradient() {
    return this.getStringAttribute('gradient');
  }
}
export interface QuicksightThemeVersionConfigurationSheetTileBorder {
}

export function quicksightThemeVersionConfigurationSheetTileBorderToTerraform(struct?: QuicksightThemeVersionConfigurationSheetTileBorder): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationSheetTileBorderToHclTerraform(struct?: QuicksightThemeVersionConfigurationSheetTileBorder): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationSheetTileBorderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationSheetTileBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationSheetTileBorder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // show - computed: true, optional: false, required: false
  public get show() {
    return this.getBooleanAttribute('show');
  }

  // width - computed: true, optional: false, required: false
  public get width() {
    return this.getStringAttribute('width');
  }
}
export interface QuicksightThemeVersionConfigurationSheetTile {
}

export function quicksightThemeVersionConfigurationSheetTileToTerraform(struct?: QuicksightThemeVersionConfigurationSheetTile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationSheetTileToHclTerraform(struct?: QuicksightThemeVersionConfigurationSheetTile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationSheetTileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationSheetTile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationSheetTile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background_color - computed: true, optional: false, required: false
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }

  // border - computed: true, optional: false, required: false
  private _border = new QuicksightThemeVersionConfigurationSheetTileBorderOutputReference(this, "border");
  public get border() {
    return this._border;
  }

  // border_radius - computed: true, optional: false, required: false
  public get borderRadius() {
    return this.getStringAttribute('border_radius');
  }

  // padding - computed: true, optional: false, required: false
  public get padding() {
    return this.getStringAttribute('padding');
  }
}
export interface QuicksightThemeVersionConfigurationSheetTileLayoutGutter {
}

export function quicksightThemeVersionConfigurationSheetTileLayoutGutterToTerraform(struct?: QuicksightThemeVersionConfigurationSheetTileLayoutGutter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationSheetTileLayoutGutterToHclTerraform(struct?: QuicksightThemeVersionConfigurationSheetTileLayoutGutter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationSheetTileLayoutGutter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationSheetTileLayoutGutter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // show - computed: true, optional: false, required: false
  public get show() {
    return this.getBooleanAttribute('show');
  }
}
export interface QuicksightThemeVersionConfigurationSheetTileLayoutMargin {
}

export function quicksightThemeVersionConfigurationSheetTileLayoutMarginToTerraform(struct?: QuicksightThemeVersionConfigurationSheetTileLayoutMargin): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationSheetTileLayoutMarginToHclTerraform(struct?: QuicksightThemeVersionConfigurationSheetTileLayoutMargin): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationSheetTileLayoutMargin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationSheetTileLayoutMargin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // show - computed: true, optional: false, required: false
  public get show() {
    return this.getBooleanAttribute('show');
  }
}
export interface QuicksightThemeVersionConfigurationSheetTileLayout {
}

export function quicksightThemeVersionConfigurationSheetTileLayoutToTerraform(struct?: QuicksightThemeVersionConfigurationSheetTileLayout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationSheetTileLayoutToHclTerraform(struct?: QuicksightThemeVersionConfigurationSheetTileLayout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationSheetTileLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationSheetTileLayout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gutter - computed: true, optional: false, required: false
  private _gutter = new QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference(this, "gutter");
  public get gutter() {
    return this._gutter;
  }

  // margin - computed: true, optional: false, required: false
  private _margin = new QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference(this, "margin");
  public get margin() {
    return this._margin;
  }
}
export interface QuicksightThemeVersionConfigurationSheet {
}

export function quicksightThemeVersionConfigurationSheetToTerraform(struct?: QuicksightThemeVersionConfigurationSheet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationSheetToHclTerraform(struct?: QuicksightThemeVersionConfigurationSheet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationSheetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationSheet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationSheet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background - computed: true, optional: false, required: false
  private _background = new QuicksightThemeVersionConfigurationSheetBackgroundOutputReference(this, "background");
  public get background() {
    return this._background;
  }

  // tile - computed: true, optional: false, required: false
  private _tile = new QuicksightThemeVersionConfigurationSheetTileOutputReference(this, "tile");
  public get tile() {
    return this._tile;
  }

  // tile_layout - computed: true, optional: false, required: false
  private _tileLayout = new QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference(this, "tile_layout");
  public get tileLayout() {
    return this._tileLayout;
  }
}
export interface QuicksightThemeVersionConfigurationTypographyAxisLabelFontConfigurationFontSize {
}

export function quicksightThemeVersionConfigurationTypographyAxisLabelFontConfigurationFontSizeToTerraform(struct?: QuicksightThemeVersionConfigurationTypographyAxisLabelFontConfigurationFontSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationTypographyAxisLabelFontConfigurationFontSizeToHclTerraform(struct?: QuicksightThemeVersionConfigurationTypographyAxisLabelFontConfigurationFontSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationTypographyAxisLabelFontConfigurationFontSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationTypographyAxisLabelFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationTypographyAxisLabelFontConfigurationFontSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  public get absolute() {
    return this.getStringAttribute('absolute');
  }
}
export interface QuicksightThemeVersionConfigurationTypographyAxisLabelFontConfigurationFontWeight {
}

export function quicksightThemeVersionConfigurationTypographyAxisLabelFontConfigurationFontWeightToTerraform(struct?: QuicksightThemeVersionConfigurationTypographyAxisLabelFontConfigurationFontWeight): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationTypographyAxisLabelFontConfigurationFontWeightToHclTerraform(struct?: QuicksightThemeVersionConfigurationTypographyAxisLabelFontConfigurationFontWeight): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationTypographyAxisLabelFontConfigurationFontWeightOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationTypographyAxisLabelFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationTypographyAxisLabelFontConfigurationFontWeight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface QuicksightThemeVersionConfigurationTypographyAxisLabelFontConfiguration {
}

export function quicksightThemeVersionConfigurationTypographyAxisLabelFontConfigurationToTerraform(struct?: QuicksightThemeVersionConfigurationTypographyAxisLabelFontConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationTypographyAxisLabelFontConfigurationToHclTerraform(struct?: QuicksightThemeVersionConfigurationTypographyAxisLabelFontConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationTypographyAxisLabelFontConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationTypographyAxisLabelFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationTypographyAxisLabelFontConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // font_color - computed: true, optional: false, required: false
  public get fontColor() {
    return this.getStringAttribute('font_color');
  }

  // font_decoration - computed: true, optional: false, required: false
  public get fontDecoration() {
    return this.getStringAttribute('font_decoration');
  }

  // font_family - computed: true, optional: false, required: false
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }

  // font_size - computed: true, optional: false, required: false
  private _fontSize = new QuicksightThemeVersionConfigurationTypographyAxisLabelFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }

  // font_style - computed: true, optional: false, required: false
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }

  // font_weight - computed: true, optional: false, required: false
  private _fontWeight = new QuicksightThemeVersionConfigurationTypographyAxisLabelFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
}
export interface QuicksightThemeVersionConfigurationTypographyAxisTitleFontConfigurationFontSize {
}

export function quicksightThemeVersionConfigurationTypographyAxisTitleFontConfigurationFontSizeToTerraform(struct?: QuicksightThemeVersionConfigurationTypographyAxisTitleFontConfigurationFontSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationTypographyAxisTitleFontConfigurationFontSizeToHclTerraform(struct?: QuicksightThemeVersionConfigurationTypographyAxisTitleFontConfigurationFontSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationTypographyAxisTitleFontConfigurationFontSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationTypographyAxisTitleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationTypographyAxisTitleFontConfigurationFontSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  public get absolute() {
    return this.getStringAttribute('absolute');
  }
}
export interface QuicksightThemeVersionConfigurationTypographyAxisTitleFontConfigurationFontWeight {
}

export function quicksightThemeVersionConfigurationTypographyAxisTitleFontConfigurationFontWeightToTerraform(struct?: QuicksightThemeVersionConfigurationTypographyAxisTitleFontConfigurationFontWeight): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationTypographyAxisTitleFontConfigurationFontWeightToHclTerraform(struct?: QuicksightThemeVersionConfigurationTypographyAxisTitleFontConfigurationFontWeight): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationTypographyAxisTitleFontConfigurationFontWeightOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationTypographyAxisTitleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationTypographyAxisTitleFontConfigurationFontWeight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface QuicksightThemeVersionConfigurationTypographyAxisTitleFontConfiguration {
}

export function quicksightThemeVersionConfigurationTypographyAxisTitleFontConfigurationToTerraform(struct?: QuicksightThemeVersionConfigurationTypographyAxisTitleFontConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationTypographyAxisTitleFontConfigurationToHclTerraform(struct?: QuicksightThemeVersionConfigurationTypographyAxisTitleFontConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationTypographyAxisTitleFontConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationTypographyAxisTitleFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationTypographyAxisTitleFontConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // font_color - computed: true, optional: false, required: false
  public get fontColor() {
    return this.getStringAttribute('font_color');
  }

  // font_decoration - computed: true, optional: false, required: false
  public get fontDecoration() {
    return this.getStringAttribute('font_decoration');
  }

  // font_family - computed: true, optional: false, required: false
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }

  // font_size - computed: true, optional: false, required: false
  private _fontSize = new QuicksightThemeVersionConfigurationTypographyAxisTitleFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }

  // font_style - computed: true, optional: false, required: false
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }

  // font_weight - computed: true, optional: false, required: false
  private _fontWeight = new QuicksightThemeVersionConfigurationTypographyAxisTitleFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
}
export interface QuicksightThemeVersionConfigurationTypographyDataLabelFontConfigurationFontSize {
}

export function quicksightThemeVersionConfigurationTypographyDataLabelFontConfigurationFontSizeToTerraform(struct?: QuicksightThemeVersionConfigurationTypographyDataLabelFontConfigurationFontSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationTypographyDataLabelFontConfigurationFontSizeToHclTerraform(struct?: QuicksightThemeVersionConfigurationTypographyDataLabelFontConfigurationFontSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationTypographyDataLabelFontConfigurationFontSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationTypographyDataLabelFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationTypographyDataLabelFontConfigurationFontSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  public get absolute() {
    return this.getStringAttribute('absolute');
  }
}
export interface QuicksightThemeVersionConfigurationTypographyDataLabelFontConfigurationFontWeight {
}

export function quicksightThemeVersionConfigurationTypographyDataLabelFontConfigurationFontWeightToTerraform(struct?: QuicksightThemeVersionConfigurationTypographyDataLabelFontConfigurationFontWeight): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationTypographyDataLabelFontConfigurationFontWeightToHclTerraform(struct?: QuicksightThemeVersionConfigurationTypographyDataLabelFontConfigurationFontWeight): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationTypographyDataLabelFontConfigurationFontWeightOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationTypographyDataLabelFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationTypographyDataLabelFontConfigurationFontWeight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface QuicksightThemeVersionConfigurationTypographyDataLabelFontConfiguration {
}

export function quicksightThemeVersionConfigurationTypographyDataLabelFontConfigurationToTerraform(struct?: QuicksightThemeVersionConfigurationTypographyDataLabelFontConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationTypographyDataLabelFontConfigurationToHclTerraform(struct?: QuicksightThemeVersionConfigurationTypographyDataLabelFontConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationTypographyDataLabelFontConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationTypographyDataLabelFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationTypographyDataLabelFontConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // font_color - computed: true, optional: false, required: false
  public get fontColor() {
    return this.getStringAttribute('font_color');
  }

  // font_decoration - computed: true, optional: false, required: false
  public get fontDecoration() {
    return this.getStringAttribute('font_decoration');
  }

  // font_family - computed: true, optional: false, required: false
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }

  // font_size - computed: true, optional: false, required: false
  private _fontSize = new QuicksightThemeVersionConfigurationTypographyDataLabelFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }

  // font_style - computed: true, optional: false, required: false
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }

  // font_weight - computed: true, optional: false, required: false
  private _fontWeight = new QuicksightThemeVersionConfigurationTypographyDataLabelFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
}
export interface QuicksightThemeVersionConfigurationTypographyFontFamilies {
}

export function quicksightThemeVersionConfigurationTypographyFontFamiliesToTerraform(struct?: QuicksightThemeVersionConfigurationTypographyFontFamilies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationTypographyFontFamiliesToHclTerraform(struct?: QuicksightThemeVersionConfigurationTypographyFontFamilies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationTypographyFontFamilies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationTypographyFontFamilies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // font_family - computed: true, optional: false, required: false
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }
}

export class QuicksightThemeVersionConfigurationTypographyFontFamiliesList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference {
    return new QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightThemeVersionConfigurationTypographyLegendTitleFontConfigurationFontSize {
}

export function quicksightThemeVersionConfigurationTypographyLegendTitleFontConfigurationFontSizeToTerraform(struct?: QuicksightThemeVersionConfigurationTypographyLegendTitleFontConfigurationFontSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationTypographyLegendTitleFontConfigurationFontSizeToHclTerraform(struct?: QuicksightThemeVersionConfigurationTypographyLegendTitleFontConfigurationFontSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationTypographyLegendTitleFontConfigurationFontSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationTypographyLegendTitleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationTypographyLegendTitleFontConfigurationFontSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  public get absolute() {
    return this.getStringAttribute('absolute');
  }
}
export interface QuicksightThemeVersionConfigurationTypographyLegendTitleFontConfigurationFontWeight {
}

export function quicksightThemeVersionConfigurationTypographyLegendTitleFontConfigurationFontWeightToTerraform(struct?: QuicksightThemeVersionConfigurationTypographyLegendTitleFontConfigurationFontWeight): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationTypographyLegendTitleFontConfigurationFontWeightToHclTerraform(struct?: QuicksightThemeVersionConfigurationTypographyLegendTitleFontConfigurationFontWeight): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationTypographyLegendTitleFontConfigurationFontWeightOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationTypographyLegendTitleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationTypographyLegendTitleFontConfigurationFontWeight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface QuicksightThemeVersionConfigurationTypographyLegendTitleFontConfiguration {
}

export function quicksightThemeVersionConfigurationTypographyLegendTitleFontConfigurationToTerraform(struct?: QuicksightThemeVersionConfigurationTypographyLegendTitleFontConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationTypographyLegendTitleFontConfigurationToHclTerraform(struct?: QuicksightThemeVersionConfigurationTypographyLegendTitleFontConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationTypographyLegendTitleFontConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationTypographyLegendTitleFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationTypographyLegendTitleFontConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // font_color - computed: true, optional: false, required: false
  public get fontColor() {
    return this.getStringAttribute('font_color');
  }

  // font_decoration - computed: true, optional: false, required: false
  public get fontDecoration() {
    return this.getStringAttribute('font_decoration');
  }

  // font_family - computed: true, optional: false, required: false
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }

  // font_size - computed: true, optional: false, required: false
  private _fontSize = new QuicksightThemeVersionConfigurationTypographyLegendTitleFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }

  // font_style - computed: true, optional: false, required: false
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }

  // font_weight - computed: true, optional: false, required: false
  private _fontWeight = new QuicksightThemeVersionConfigurationTypographyLegendTitleFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
}
export interface QuicksightThemeVersionConfigurationTypographyLegendValueFontConfigurationFontSize {
}

export function quicksightThemeVersionConfigurationTypographyLegendValueFontConfigurationFontSizeToTerraform(struct?: QuicksightThemeVersionConfigurationTypographyLegendValueFontConfigurationFontSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationTypographyLegendValueFontConfigurationFontSizeToHclTerraform(struct?: QuicksightThemeVersionConfigurationTypographyLegendValueFontConfigurationFontSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationTypographyLegendValueFontConfigurationFontSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationTypographyLegendValueFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationTypographyLegendValueFontConfigurationFontSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  public get absolute() {
    return this.getStringAttribute('absolute');
  }
}
export interface QuicksightThemeVersionConfigurationTypographyLegendValueFontConfigurationFontWeight {
}

export function quicksightThemeVersionConfigurationTypographyLegendValueFontConfigurationFontWeightToTerraform(struct?: QuicksightThemeVersionConfigurationTypographyLegendValueFontConfigurationFontWeight): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationTypographyLegendValueFontConfigurationFontWeightToHclTerraform(struct?: QuicksightThemeVersionConfigurationTypographyLegendValueFontConfigurationFontWeight): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationTypographyLegendValueFontConfigurationFontWeightOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationTypographyLegendValueFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationTypographyLegendValueFontConfigurationFontWeight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface QuicksightThemeVersionConfigurationTypographyLegendValueFontConfiguration {
}

export function quicksightThemeVersionConfigurationTypographyLegendValueFontConfigurationToTerraform(struct?: QuicksightThemeVersionConfigurationTypographyLegendValueFontConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationTypographyLegendValueFontConfigurationToHclTerraform(struct?: QuicksightThemeVersionConfigurationTypographyLegendValueFontConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationTypographyLegendValueFontConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationTypographyLegendValueFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationTypographyLegendValueFontConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // font_color - computed: true, optional: false, required: false
  public get fontColor() {
    return this.getStringAttribute('font_color');
  }

  // font_decoration - computed: true, optional: false, required: false
  public get fontDecoration() {
    return this.getStringAttribute('font_decoration');
  }

  // font_family - computed: true, optional: false, required: false
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }

  // font_size - computed: true, optional: false, required: false
  private _fontSize = new QuicksightThemeVersionConfigurationTypographyLegendValueFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }

  // font_style - computed: true, optional: false, required: false
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }

  // font_weight - computed: true, optional: false, required: false
  private _fontWeight = new QuicksightThemeVersionConfigurationTypographyLegendValueFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
}
export interface QuicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontSize {
}

export function quicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontSizeToTerraform(struct?: QuicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontSizeToHclTerraform(struct?: QuicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  public get absolute() {
    return this.getStringAttribute('absolute');
  }
}
export interface QuicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontWeight {
}

export function quicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontWeightToTerraform(struct?: QuicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontWeight): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontWeightToHclTerraform(struct?: QuicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontWeight): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontWeightOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontWeight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface QuicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfigurationFontConfiguration {
}

export function quicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationToTerraform(struct?: QuicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfigurationFontConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationToHclTerraform(struct?: QuicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfigurationFontConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfigurationFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfigurationFontConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // font_color - computed: true, optional: false, required: false
  public get fontColor() {
    return this.getStringAttribute('font_color');
  }

  // font_decoration - computed: true, optional: false, required: false
  public get fontDecoration() {
    return this.getStringAttribute('font_decoration');
  }

  // font_family - computed: true, optional: false, required: false
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }

  // font_size - computed: true, optional: false, required: false
  private _fontSize = new QuicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }

  // font_style - computed: true, optional: false, required: false
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }

  // font_weight - computed: true, optional: false, required: false
  private _fontWeight = new QuicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
}
export interface QuicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfiguration {
}

export function quicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfigurationToTerraform(struct?: QuicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfigurationToHclTerraform(struct?: QuicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // font_configuration - computed: true, optional: false, required: false
  private _fontConfiguration = new QuicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfigurationFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }

  // text_alignment - computed: true, optional: false, required: false
  public get textAlignment() {
    return this.getStringAttribute('text_alignment');
  }

  // text_transform - computed: true, optional: false, required: false
  public get textTransform() {
    return this.getStringAttribute('text_transform');
  }
}
export interface QuicksightThemeVersionConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontSize {
}

export function quicksightThemeVersionConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontSizeToTerraform(struct?: QuicksightThemeVersionConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontSizeToHclTerraform(struct?: QuicksightThemeVersionConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute - computed: true, optional: false, required: false
  public get absolute() {
    return this.getStringAttribute('absolute');
  }
}
export interface QuicksightThemeVersionConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontWeight {
}

export function quicksightThemeVersionConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontWeightToTerraform(struct?: QuicksightThemeVersionConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontWeight): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontWeightToHclTerraform(struct?: QuicksightThemeVersionConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontWeight): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontWeightOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontWeight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface QuicksightThemeVersionConfigurationTypographyVisualTitleFontConfigurationFontConfiguration {
}

export function quicksightThemeVersionConfigurationTypographyVisualTitleFontConfigurationFontConfigurationToTerraform(struct?: QuicksightThemeVersionConfigurationTypographyVisualTitleFontConfigurationFontConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationTypographyVisualTitleFontConfigurationFontConfigurationToHclTerraform(struct?: QuicksightThemeVersionConfigurationTypographyVisualTitleFontConfigurationFontConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationTypographyVisualTitleFontConfigurationFontConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationTypographyVisualTitleFontConfigurationFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationTypographyVisualTitleFontConfigurationFontConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // font_color - computed: true, optional: false, required: false
  public get fontColor() {
    return this.getStringAttribute('font_color');
  }

  // font_decoration - computed: true, optional: false, required: false
  public get fontDecoration() {
    return this.getStringAttribute('font_decoration');
  }

  // font_family - computed: true, optional: false, required: false
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }

  // font_size - computed: true, optional: false, required: false
  private _fontSize = new QuicksightThemeVersionConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }

  // font_style - computed: true, optional: false, required: false
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }

  // font_weight - computed: true, optional: false, required: false
  private _fontWeight = new QuicksightThemeVersionConfigurationTypographyVisualTitleFontConfigurationFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
}
export interface QuicksightThemeVersionConfigurationTypographyVisualTitleFontConfiguration {
}

export function quicksightThemeVersionConfigurationTypographyVisualTitleFontConfigurationToTerraform(struct?: QuicksightThemeVersionConfigurationTypographyVisualTitleFontConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationTypographyVisualTitleFontConfigurationToHclTerraform(struct?: QuicksightThemeVersionConfigurationTypographyVisualTitleFontConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationTypographyVisualTitleFontConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationTypographyVisualTitleFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationTypographyVisualTitleFontConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // font_configuration - computed: true, optional: false, required: false
  private _fontConfiguration = new QuicksightThemeVersionConfigurationTypographyVisualTitleFontConfigurationFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }

  // text_alignment - computed: true, optional: false, required: false
  public get textAlignment() {
    return this.getStringAttribute('text_alignment');
  }

  // text_transform - computed: true, optional: false, required: false
  public get textTransform() {
    return this.getStringAttribute('text_transform');
  }
}
export interface QuicksightThemeVersionConfigurationTypography {
}

export function quicksightThemeVersionConfigurationTypographyToTerraform(struct?: QuicksightThemeVersionConfigurationTypography): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationTypographyToHclTerraform(struct?: QuicksightThemeVersionConfigurationTypography): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationTypographyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationTypography | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationTypography | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // axis_label_font_configuration - computed: true, optional: false, required: false
  private _axisLabelFontConfiguration = new QuicksightThemeVersionConfigurationTypographyAxisLabelFontConfigurationOutputReference(this, "axis_label_font_configuration");
  public get axisLabelFontConfiguration() {
    return this._axisLabelFontConfiguration;
  }

  // axis_title_font_configuration - computed: true, optional: false, required: false
  private _axisTitleFontConfiguration = new QuicksightThemeVersionConfigurationTypographyAxisTitleFontConfigurationOutputReference(this, "axis_title_font_configuration");
  public get axisTitleFontConfiguration() {
    return this._axisTitleFontConfiguration;
  }

  // data_label_font_configuration - computed: true, optional: false, required: false
  private _dataLabelFontConfiguration = new QuicksightThemeVersionConfigurationTypographyDataLabelFontConfigurationOutputReference(this, "data_label_font_configuration");
  public get dataLabelFontConfiguration() {
    return this._dataLabelFontConfiguration;
  }

  // font_families - computed: true, optional: false, required: false
  private _fontFamilies = new QuicksightThemeVersionConfigurationTypographyFontFamiliesList(this, "font_families", false);
  public get fontFamilies() {
    return this._fontFamilies;
  }

  // legend_title_font_configuration - computed: true, optional: false, required: false
  private _legendTitleFontConfiguration = new QuicksightThemeVersionConfigurationTypographyLegendTitleFontConfigurationOutputReference(this, "legend_title_font_configuration");
  public get legendTitleFontConfiguration() {
    return this._legendTitleFontConfiguration;
  }

  // legend_value_font_configuration - computed: true, optional: false, required: false
  private _legendValueFontConfiguration = new QuicksightThemeVersionConfigurationTypographyLegendValueFontConfigurationOutputReference(this, "legend_value_font_configuration");
  public get legendValueFontConfiguration() {
    return this._legendValueFontConfiguration;
  }

  // visual_subtitle_font_configuration - computed: true, optional: false, required: false
  private _visualSubtitleFontConfiguration = new QuicksightThemeVersionConfigurationTypographyVisualSubtitleFontConfigurationOutputReference(this, "visual_subtitle_font_configuration");
  public get visualSubtitleFontConfiguration() {
    return this._visualSubtitleFontConfiguration;
  }

  // visual_title_font_configuration - computed: true, optional: false, required: false
  private _visualTitleFontConfiguration = new QuicksightThemeVersionConfigurationTypographyVisualTitleFontConfigurationOutputReference(this, "visual_title_font_configuration");
  public get visualTitleFontConfiguration() {
    return this._visualTitleFontConfiguration;
  }
}
export interface QuicksightThemeVersionConfigurationUiColorPalette {
}

export function quicksightThemeVersionConfigurationUiColorPaletteToTerraform(struct?: QuicksightThemeVersionConfigurationUiColorPalette): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationUiColorPaletteToHclTerraform(struct?: QuicksightThemeVersionConfigurationUiColorPalette): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationUiColorPaletteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfigurationUiColorPalette | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfigurationUiColorPalette | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accent - computed: true, optional: false, required: false
  public get accent() {
    return this.getStringAttribute('accent');
  }

  // accent_foreground - computed: true, optional: false, required: false
  public get accentForeground() {
    return this.getStringAttribute('accent_foreground');
  }

  // danger - computed: true, optional: false, required: false
  public get danger() {
    return this.getStringAttribute('danger');
  }

  // danger_foreground - computed: true, optional: false, required: false
  public get dangerForeground() {
    return this.getStringAttribute('danger_foreground');
  }

  // dimension - computed: true, optional: false, required: false
  public get dimension() {
    return this.getStringAttribute('dimension');
  }

  // dimension_foreground - computed: true, optional: false, required: false
  public get dimensionForeground() {
    return this.getStringAttribute('dimension_foreground');
  }

  // measure - computed: true, optional: false, required: false
  public get measure() {
    return this.getStringAttribute('measure');
  }

  // measure_foreground - computed: true, optional: false, required: false
  public get measureForeground() {
    return this.getStringAttribute('measure_foreground');
  }

  // primary_background - computed: true, optional: false, required: false
  public get primaryBackground() {
    return this.getStringAttribute('primary_background');
  }

  // primary_foreground - computed: true, optional: false, required: false
  public get primaryForeground() {
    return this.getStringAttribute('primary_foreground');
  }

  // secondary_background - computed: true, optional: false, required: false
  public get secondaryBackground() {
    return this.getStringAttribute('secondary_background');
  }

  // secondary_foreground - computed: true, optional: false, required: false
  public get secondaryForeground() {
    return this.getStringAttribute('secondary_foreground');
  }

  // success - computed: true, optional: false, required: false
  public get success() {
    return this.getStringAttribute('success');
  }

  // success_foreground - computed: true, optional: false, required: false
  public get successForeground() {
    return this.getStringAttribute('success_foreground');
  }

  // warning - computed: true, optional: false, required: false
  public get warning() {
    return this.getStringAttribute('warning');
  }

  // warning_foreground - computed: true, optional: false, required: false
  public get warningForeground() {
    return this.getStringAttribute('warning_foreground');
  }
}
export interface QuicksightThemeVersionConfiguration {
}

export function quicksightThemeVersionConfigurationToTerraform(struct?: QuicksightThemeVersionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionConfigurationToHclTerraform(struct?: QuicksightThemeVersionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_color_palette - computed: true, optional: false, required: false
  private _dataColorPalette = new QuicksightThemeVersionConfigurationDataColorPaletteOutputReference(this, "data_color_palette");
  public get dataColorPalette() {
    return this._dataColorPalette;
  }

  // sheet - computed: true, optional: false, required: false
  private _sheet = new QuicksightThemeVersionConfigurationSheetOutputReference(this, "sheet");
  public get sheet() {
    return this._sheet;
  }

  // typography - computed: true, optional: false, required: false
  private _typography = new QuicksightThemeVersionConfigurationTypographyOutputReference(this, "typography");
  public get typography() {
    return this._typography;
  }

  // ui_color_palette - computed: true, optional: false, required: false
  private _uiColorPalette = new QuicksightThemeVersionConfigurationUiColorPaletteOutputReference(this, "ui_color_palette");
  public get uiColorPalette() {
    return this._uiColorPalette;
  }
}
export interface QuicksightThemeVersionErrors {
}

export function quicksightThemeVersionErrorsToTerraform(struct?: QuicksightThemeVersionErrors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionErrorsToHclTerraform(struct?: QuicksightThemeVersionErrors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionErrorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): QuicksightThemeVersionErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersionErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class QuicksightThemeVersionErrorsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightThemeVersionErrorsOutputReference {
    return new QuicksightThemeVersionErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightThemeVersion {
}

export function quicksightThemeVersionToTerraform(struct?: QuicksightThemeVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightThemeVersionToHclTerraform(struct?: QuicksightThemeVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightThemeVersionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // base_theme_id - computed: true, optional: false, required: false
  public get baseThemeId() {
    return this.getStringAttribute('base_theme_id');
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new QuicksightThemeVersionConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // errors - computed: true, optional: false, required: false
  private _errors = new QuicksightThemeVersionErrorsList(this, "errors", false);
  public get errors() {
    return this._errors;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version_number - computed: true, optional: false, required: false
  public get versionNumber() {
    return this.getNumberAttribute('version_number');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme awscc_quicksight_theme}
*/
export class QuicksightTheme extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_quicksight_theme";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a QuicksightTheme resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QuicksightTheme to import
  * @param importFromId The id of the existing QuicksightTheme that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QuicksightTheme to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_theme", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/quicksight_theme awscc_quicksight_theme} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuicksightThemeConfig
  */
  public constructor(scope: Construct, id: string, config: QuicksightThemeConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_quicksight_theme',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.103.0',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsAccountId = config.awsAccountId;
    this._baseThemeId = config.baseThemeId;
    this._configuration.internalValue = config.configuration;
    this._name = config.name;
    this._permissions.internalValue = config.permissions;
    this._tags.internalValue = config.tags;
    this._themeId = config.themeId;
    this._versionDescription = config.versionDescription;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_account_id - computed: false, optional: false, required: true
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // base_theme_id - computed: false, optional: false, required: true
  private _baseThemeId?: string; 
  public get baseThemeId() {
    return this.getStringAttribute('base_theme_id');
  }
  public set baseThemeId(value: string) {
    this._baseThemeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseThemeIdInput() {
    return this._baseThemeId;
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration = new QuicksightThemeConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: QuicksightThemeConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // permissions - computed: true, optional: true, required: false
  private _permissions = new QuicksightThemePermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: QuicksightThemePermissions[] | cdktn.IResolvable) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new QuicksightThemeTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: QuicksightThemeTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // theme_id - computed: false, optional: false, required: true
  private _themeId?: string; 
  public get themeId() {
    return this.getStringAttribute('theme_id');
  }
  public set themeId(value: string) {
    this._themeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get themeIdInput() {
    return this._themeId;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  private _version = new QuicksightThemeVersionOutputReference(this, "version");
  public get version() {
    return this._version;
  }

  // version_description - computed: true, optional: true, required: false
  private _versionDescription?: string; 
  public get versionDescription() {
    return this.getStringAttribute('version_description');
  }
  public set versionDescription(value: string) {
    this._versionDescription = value;
  }
  public resetVersionDescription() {
    this._versionDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionDescriptionInput() {
    return this._versionDescription;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_id: cdktn.stringToTerraform(this._awsAccountId),
      base_theme_id: cdktn.stringToTerraform(this._baseThemeId),
      configuration: quicksightThemeConfigurationToTerraform(this._configuration.internalValue),
      name: cdktn.stringToTerraform(this._name),
      permissions: cdktn.listMapper(quicksightThemePermissionsToTerraform, false)(this._permissions.internalValue),
      tags: cdktn.listMapper(quicksightThemeTagsToTerraform, false)(this._tags.internalValue),
      theme_id: cdktn.stringToTerraform(this._themeId),
      version_description: cdktn.stringToTerraform(this._versionDescription),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_account_id: {
        value: cdktn.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_theme_id: {
        value: cdktn.stringToHclTerraform(this._baseThemeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: quicksightThemeConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QuicksightThemeConfiguration",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions: {
        value: cdktn.listMapperHcl(quicksightThemePermissionsToHclTerraform, false)(this._permissions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QuicksightThemePermissionsList",
      },
      tags: {
        value: cdktn.listMapperHcl(quicksightThemeTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QuicksightThemeTagsList",
      },
      theme_id: {
        value: cdktn.stringToHclTerraform(this._themeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_description: {
        value: cdktn.stringToHclTerraform(this._versionDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
