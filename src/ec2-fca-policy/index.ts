/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Ec2FcaPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * The description of the FCA policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#description Ec2FcaPolicy#description}
  */
  readonly description?: string;
  /**
  * The FCA policy document for EC2 instance cost allocation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#instance_fca_policy_document Ec2FcaPolicy#instance_fca_policy_document}
  */
  readonly instanceFcaPolicyDocument?: Ec2FcaPolicyInstanceFcaPolicyDocument;
  /**
  * The FCA policy document for NAT gateway cost allocation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#nat_fca_policy_document Ec2FcaPolicy#nat_fca_policy_document}
  */
  readonly natFcaPolicyDocument?: Ec2FcaPolicyNatFcaPolicyDocument;
  /**
  * The type of network resource the FCA policy applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#network_resource_type Ec2FcaPolicy#network_resource_type}
  */
  readonly networkResourceType: string;
  /**
  * The FCA policy document for VPC peering connection cost allocation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#pcx_fca_policy_document Ec2FcaPolicy#pcx_fca_policy_document}
  */
  readonly pcxFcaPolicyDocument?: Ec2FcaPolicyPcxFcaPolicyDocument;
  /**
  * Indicates whether show-back reporting is enabled for the FCA policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#show_back_enabled Ec2FcaPolicy#show_back_enabled}
  */
  readonly showBackEnabled?: boolean | cdktn.IResolvable;
  /**
  * The tags for the FCA policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#tags Ec2FcaPolicy#tags}
  */
  readonly tags?: Ec2FcaPolicyTags[] | cdktn.IResolvable;
}
export interface Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes {
  /**
  * The label for the CIDR range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_label Ec2FcaPolicy#cidr_label}
  */
  readonly cidrLabel?: string;
  /**
  * The CIDR range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range Ec2FcaPolicy#cidr_range}
  */
  readonly cidrRange?: string;
}

export function ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesToTerraform(struct?: Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cidr_label: cdktn.stringToTerraform(struct!.cidrLabel),
    cidr_range: cdktn.stringToTerraform(struct!.cidrRange),
  }
}


export function ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesToHclTerraform(struct?: Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cidr_label: {
      value: cdktn.stringToHclTerraform(struct!.cidrLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cidr_range: {
      value: cdktn.stringToHclTerraform(struct!.cidrRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrLabel = this._cidrLabel;
    }
    if (this._cidrRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrRange = this._cidrRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrLabel = undefined;
      this._cidrRange = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrLabel = value.cidrLabel;
      this._cidrRange = value.cidrRange;
    }
  }

  // cidr_label - computed: true, optional: true, required: false
  private _cidrLabel?: string; 
  public get cidrLabel() {
    return this.getStringAttribute('cidr_label');
  }
  public set cidrLabel(value: string) {
    this._cidrLabel = value;
  }
  public resetCidrLabel() {
    this._cidrLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrLabelInput() {
    return this._cidrLabel;
  }

  // cidr_range - computed: true, optional: true, required: false
  private _cidrRange?: string; 
  public get cidrRange() {
    return this.getStringAttribute('cidr_range');
  }
  public set cidrRange(value: string) {
    this._cidrRange = value;
  }
  public resetCidrRange() {
    this._cidrRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrRangeInput() {
    return this._cidrRange;
  }
}

export class Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList extends cdktn.ComplexList {
  public internalValue? : Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes[] | cdktn.IResolvable

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
  public get(index: number): Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference {
    return new Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications {
  /**
  * The CIDR range to label mappings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes Ec2FcaPolicy#prefixes}
  */
  readonly prefixes?: Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes[] | cdktn.IResolvable;
  /**
  * The type of prefixes the mappings apply to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes_type Ec2FcaPolicy#prefixes_type}
  */
  readonly prefixesType?: string;
}

export function ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsToTerraform(struct?: Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    prefixes: cdktn.listMapper(ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesToTerraform, false)(struct!.prefixes),
    prefixes_type: cdktn.stringToTerraform(struct!.prefixesType),
  }
}


export function ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsToHclTerraform(struct?: Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    prefixes: {
      value: cdktn.listMapperHcl(ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesToHclTerraform, false)(struct!.prefixes),
      isBlock: true,
      type: "list",
      storageClassType: "Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList",
    },
    prefixes_type: {
      value: cdktn.stringToHclTerraform(struct!.prefixesType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes?.internalValue;
    }
    if (this._prefixesType !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixesType = this._prefixesType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixes.internalValue = undefined;
      this._prefixesType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixes.internalValue = value.prefixes;
      this._prefixesType = value.prefixesType;
    }
  }

  // prefixes - computed: true, optional: true, required: false
  private _prefixes = new Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes[] | cdktn.IResolvable) {
    this._prefixes.internalValue = value;
  }
  public resetPrefixes() {
    this._prefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes.internalValue;
  }

  // prefixes_type - computed: true, optional: true, required: false
  private _prefixesType?: string; 
  public get prefixesType() {
    return this.getStringAttribute('prefixes_type');
  }
  public set prefixesType(value: string) {
    this._prefixesType = value;
  }
  public resetPrefixesType() {
    this._prefixesType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesTypeInput() {
    return this._prefixesType;
  }
}
export interface Ec2FcaPolicyInstanceFcaPolicyDocument {
  /**
  * CIDR range specifications, used when the reporting granularity is 'cidr'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range_specifications Ec2FcaPolicy#cidr_range_specifications}
  */
  readonly cidrRangeSpecifications?: Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications;
  /**
  * The cost dimensions to allocate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#dimensions Ec2FcaPolicy#dimensions}
  */
  readonly dimensions?: string[];
  /**
  * The granularity at which costs are reported. Contains exactly one value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#reporting_granularity Ec2FcaPolicy#reporting_granularity}
  */
  readonly reportingGranularity?: string[];
}

export function ec2FcaPolicyInstanceFcaPolicyDocumentToTerraform(struct?: Ec2FcaPolicyInstanceFcaPolicyDocument | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cidr_range_specifications: ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsToTerraform(struct!.cidrRangeSpecifications),
    dimensions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dimensions),
    reporting_granularity: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.reportingGranularity),
  }
}


export function ec2FcaPolicyInstanceFcaPolicyDocumentToHclTerraform(struct?: Ec2FcaPolicyInstanceFcaPolicyDocument | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cidr_range_specifications: {
      value: ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsToHclTerraform(struct!.cidrRangeSpecifications),
      isBlock: true,
      type: "struct",
      storageClassType: "Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications",
    },
    dimensions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dimensions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    reporting_granularity: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.reportingGranularity),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2FcaPolicyInstanceFcaPolicyDocument | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrRangeSpecifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrRangeSpecifications = this._cidrRangeSpecifications?.internalValue;
    }
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    if (this._reportingGranularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportingGranularity = this._reportingGranularity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2FcaPolicyInstanceFcaPolicyDocument | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrRangeSpecifications.internalValue = undefined;
      this._dimensions = undefined;
      this._reportingGranularity = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrRangeSpecifications.internalValue = value.cidrRangeSpecifications;
      this._dimensions = value.dimensions;
      this._reportingGranularity = value.reportingGranularity;
    }
  }

  // cidr_range_specifications - computed: true, optional: true, required: false
  private _cidrRangeSpecifications = new Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference(this, "cidr_range_specifications");
  public get cidrRangeSpecifications() {
    return this._cidrRangeSpecifications;
  }
  public putCidrRangeSpecifications(value: Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications) {
    this._cidrRangeSpecifications.internalValue = value;
  }
  public resetCidrRangeSpecifications() {
    this._cidrRangeSpecifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrRangeSpecificationsInput() {
    return this._cidrRangeSpecifications.internalValue;
  }

  // dimensions - computed: true, optional: true, required: false
  private _dimensions?: string[]; 
  public get dimensions() {
    return this.getListAttribute('dimensions');
  }
  public set dimensions(value: string[]) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
  }

  // reporting_granularity - computed: true, optional: true, required: false
  private _reportingGranularity?: string[]; 
  public get reportingGranularity() {
    return this.getListAttribute('reporting_granularity');
  }
  public set reportingGranularity(value: string[]) {
    this._reportingGranularity = value;
  }
  public resetReportingGranularity() {
    this._reportingGranularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportingGranularityInput() {
    return this._reportingGranularity;
  }
}
export interface Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes {
  /**
  * The label for the CIDR range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_label Ec2FcaPolicy#cidr_label}
  */
  readonly cidrLabel?: string;
  /**
  * The CIDR range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range Ec2FcaPolicy#cidr_range}
  */
  readonly cidrRange?: string;
}

export function ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesToTerraform(struct?: Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cidr_label: cdktn.stringToTerraform(struct!.cidrLabel),
    cidr_range: cdktn.stringToTerraform(struct!.cidrRange),
  }
}


export function ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesToHclTerraform(struct?: Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cidr_label: {
      value: cdktn.stringToHclTerraform(struct!.cidrLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cidr_range: {
      value: cdktn.stringToHclTerraform(struct!.cidrRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrLabel = this._cidrLabel;
    }
    if (this._cidrRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrRange = this._cidrRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrLabel = undefined;
      this._cidrRange = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrLabel = value.cidrLabel;
      this._cidrRange = value.cidrRange;
    }
  }

  // cidr_label - computed: true, optional: true, required: false
  private _cidrLabel?: string; 
  public get cidrLabel() {
    return this.getStringAttribute('cidr_label');
  }
  public set cidrLabel(value: string) {
    this._cidrLabel = value;
  }
  public resetCidrLabel() {
    this._cidrLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrLabelInput() {
    return this._cidrLabel;
  }

  // cidr_range - computed: true, optional: true, required: false
  private _cidrRange?: string; 
  public get cidrRange() {
    return this.getStringAttribute('cidr_range');
  }
  public set cidrRange(value: string) {
    this._cidrRange = value;
  }
  public resetCidrRange() {
    this._cidrRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrRangeInput() {
    return this._cidrRange;
  }
}

export class Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList extends cdktn.ComplexList {
  public internalValue? : Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes[] | cdktn.IResolvable

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
  public get(index: number): Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference {
    return new Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications {
  /**
  * The CIDR range to label mappings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes Ec2FcaPolicy#prefixes}
  */
  readonly prefixes?: Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes[] | cdktn.IResolvable;
  /**
  * The type of prefixes the mappings apply to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes_type Ec2FcaPolicy#prefixes_type}
  */
  readonly prefixesType?: string;
}

export function ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsToTerraform(struct?: Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    prefixes: cdktn.listMapper(ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesToTerraform, false)(struct!.prefixes),
    prefixes_type: cdktn.stringToTerraform(struct!.prefixesType),
  }
}


export function ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsToHclTerraform(struct?: Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    prefixes: {
      value: cdktn.listMapperHcl(ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesToHclTerraform, false)(struct!.prefixes),
      isBlock: true,
      type: "list",
      storageClassType: "Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList",
    },
    prefixes_type: {
      value: cdktn.stringToHclTerraform(struct!.prefixesType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes?.internalValue;
    }
    if (this._prefixesType !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixesType = this._prefixesType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixes.internalValue = undefined;
      this._prefixesType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixes.internalValue = value.prefixes;
      this._prefixesType = value.prefixesType;
    }
  }

  // prefixes - computed: true, optional: true, required: false
  private _prefixes = new Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes[] | cdktn.IResolvable) {
    this._prefixes.internalValue = value;
  }
  public resetPrefixes() {
    this._prefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes.internalValue;
  }

  // prefixes_type - computed: true, optional: true, required: false
  private _prefixesType?: string; 
  public get prefixesType() {
    return this.getStringAttribute('prefixes_type');
  }
  public set prefixesType(value: string) {
    this._prefixesType = value;
  }
  public resetPrefixesType() {
    this._prefixesType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesTypeInput() {
    return this._prefixesType;
  }
}
export interface Ec2FcaPolicyNatFcaPolicyDocument {
  /**
  * CIDR range specifications, used when the reporting granularity is 'cidr'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range_specifications Ec2FcaPolicy#cidr_range_specifications}
  */
  readonly cidrRangeSpecifications?: Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications;
  /**
  * The cost dimensions to allocate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#dimensions Ec2FcaPolicy#dimensions}
  */
  readonly dimensions?: string[];
  /**
  * The granularity at which costs are reported. Contains exactly one value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#reporting_granularity Ec2FcaPolicy#reporting_granularity}
  */
  readonly reportingGranularity?: string[];
}

export function ec2FcaPolicyNatFcaPolicyDocumentToTerraform(struct?: Ec2FcaPolicyNatFcaPolicyDocument | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cidr_range_specifications: ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsToTerraform(struct!.cidrRangeSpecifications),
    dimensions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dimensions),
    reporting_granularity: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.reportingGranularity),
  }
}


export function ec2FcaPolicyNatFcaPolicyDocumentToHclTerraform(struct?: Ec2FcaPolicyNatFcaPolicyDocument | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cidr_range_specifications: {
      value: ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsToHclTerraform(struct!.cidrRangeSpecifications),
      isBlock: true,
      type: "struct",
      storageClassType: "Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications",
    },
    dimensions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dimensions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    reporting_granularity: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.reportingGranularity),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2FcaPolicyNatFcaPolicyDocumentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2FcaPolicyNatFcaPolicyDocument | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrRangeSpecifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrRangeSpecifications = this._cidrRangeSpecifications?.internalValue;
    }
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    if (this._reportingGranularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportingGranularity = this._reportingGranularity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2FcaPolicyNatFcaPolicyDocument | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrRangeSpecifications.internalValue = undefined;
      this._dimensions = undefined;
      this._reportingGranularity = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrRangeSpecifications.internalValue = value.cidrRangeSpecifications;
      this._dimensions = value.dimensions;
      this._reportingGranularity = value.reportingGranularity;
    }
  }

  // cidr_range_specifications - computed: true, optional: true, required: false
  private _cidrRangeSpecifications = new Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference(this, "cidr_range_specifications");
  public get cidrRangeSpecifications() {
    return this._cidrRangeSpecifications;
  }
  public putCidrRangeSpecifications(value: Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications) {
    this._cidrRangeSpecifications.internalValue = value;
  }
  public resetCidrRangeSpecifications() {
    this._cidrRangeSpecifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrRangeSpecificationsInput() {
    return this._cidrRangeSpecifications.internalValue;
  }

  // dimensions - computed: true, optional: true, required: false
  private _dimensions?: string[]; 
  public get dimensions() {
    return this.getListAttribute('dimensions');
  }
  public set dimensions(value: string[]) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
  }

  // reporting_granularity - computed: true, optional: true, required: false
  private _reportingGranularity?: string[]; 
  public get reportingGranularity() {
    return this.getListAttribute('reporting_granularity');
  }
  public set reportingGranularity(value: string[]) {
    this._reportingGranularity = value;
  }
  public resetReportingGranularity() {
    this._reportingGranularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportingGranularityInput() {
    return this._reportingGranularity;
  }
}
export interface Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes {
  /**
  * The label for the CIDR range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_label Ec2FcaPolicy#cidr_label}
  */
  readonly cidrLabel?: string;
  /**
  * The CIDR range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range Ec2FcaPolicy#cidr_range}
  */
  readonly cidrRange?: string;
}

export function ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesToTerraform(struct?: Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cidr_label: cdktn.stringToTerraform(struct!.cidrLabel),
    cidr_range: cdktn.stringToTerraform(struct!.cidrRange),
  }
}


export function ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesToHclTerraform(struct?: Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cidr_label: {
      value: cdktn.stringToHclTerraform(struct!.cidrLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cidr_range: {
      value: cdktn.stringToHclTerraform(struct!.cidrRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrLabel = this._cidrLabel;
    }
    if (this._cidrRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrRange = this._cidrRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrLabel = undefined;
      this._cidrRange = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrLabel = value.cidrLabel;
      this._cidrRange = value.cidrRange;
    }
  }

  // cidr_label - computed: true, optional: true, required: false
  private _cidrLabel?: string; 
  public get cidrLabel() {
    return this.getStringAttribute('cidr_label');
  }
  public set cidrLabel(value: string) {
    this._cidrLabel = value;
  }
  public resetCidrLabel() {
    this._cidrLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrLabelInput() {
    return this._cidrLabel;
  }

  // cidr_range - computed: true, optional: true, required: false
  private _cidrRange?: string; 
  public get cidrRange() {
    return this.getStringAttribute('cidr_range');
  }
  public set cidrRange(value: string) {
    this._cidrRange = value;
  }
  public resetCidrRange() {
    this._cidrRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrRangeInput() {
    return this._cidrRange;
  }
}

export class Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList extends cdktn.ComplexList {
  public internalValue? : Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes[] | cdktn.IResolvable

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
  public get(index: number): Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference {
    return new Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications {
  /**
  * The CIDR range to label mappings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes Ec2FcaPolicy#prefixes}
  */
  readonly prefixes?: Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes[] | cdktn.IResolvable;
  /**
  * The type of prefixes the mappings apply to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes_type Ec2FcaPolicy#prefixes_type}
  */
  readonly prefixesType?: string;
}

export function ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsToTerraform(struct?: Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    prefixes: cdktn.listMapper(ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesToTerraform, false)(struct!.prefixes),
    prefixes_type: cdktn.stringToTerraform(struct!.prefixesType),
  }
}


export function ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsToHclTerraform(struct?: Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    prefixes: {
      value: cdktn.listMapperHcl(ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesToHclTerraform, false)(struct!.prefixes),
      isBlock: true,
      type: "list",
      storageClassType: "Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList",
    },
    prefixes_type: {
      value: cdktn.stringToHclTerraform(struct!.prefixesType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes?.internalValue;
    }
    if (this._prefixesType !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixesType = this._prefixesType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixes.internalValue = undefined;
      this._prefixesType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixes.internalValue = value.prefixes;
      this._prefixesType = value.prefixesType;
    }
  }

  // prefixes - computed: true, optional: true, required: false
  private _prefixes = new Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes[] | cdktn.IResolvable) {
    this._prefixes.internalValue = value;
  }
  public resetPrefixes() {
    this._prefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes.internalValue;
  }

  // prefixes_type - computed: true, optional: true, required: false
  private _prefixesType?: string; 
  public get prefixesType() {
    return this.getStringAttribute('prefixes_type');
  }
  public set prefixesType(value: string) {
    this._prefixesType = value;
  }
  public resetPrefixesType() {
    this._prefixesType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesTypeInput() {
    return this._prefixesType;
  }
}
export interface Ec2FcaPolicyPcxFcaPolicyDocument {
  /**
  * CIDR range specifications, used when the reporting granularity is 'cidr'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range_specifications Ec2FcaPolicy#cidr_range_specifications}
  */
  readonly cidrRangeSpecifications?: Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications;
  /**
  * The cost dimensions to allocate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#dimensions Ec2FcaPolicy#dimensions}
  */
  readonly dimensions?: string[];
  /**
  * The granularity at which costs are reported. Contains exactly one value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#reporting_granularity Ec2FcaPolicy#reporting_granularity}
  */
  readonly reportingGranularity?: string[];
}

export function ec2FcaPolicyPcxFcaPolicyDocumentToTerraform(struct?: Ec2FcaPolicyPcxFcaPolicyDocument | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cidr_range_specifications: ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsToTerraform(struct!.cidrRangeSpecifications),
    dimensions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dimensions),
    reporting_granularity: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.reportingGranularity),
  }
}


export function ec2FcaPolicyPcxFcaPolicyDocumentToHclTerraform(struct?: Ec2FcaPolicyPcxFcaPolicyDocument | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cidr_range_specifications: {
      value: ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsToHclTerraform(struct!.cidrRangeSpecifications),
      isBlock: true,
      type: "struct",
      storageClassType: "Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications",
    },
    dimensions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dimensions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    reporting_granularity: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.reportingGranularity),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2FcaPolicyPcxFcaPolicyDocument | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrRangeSpecifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrRangeSpecifications = this._cidrRangeSpecifications?.internalValue;
    }
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    if (this._reportingGranularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportingGranularity = this._reportingGranularity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2FcaPolicyPcxFcaPolicyDocument | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrRangeSpecifications.internalValue = undefined;
      this._dimensions = undefined;
      this._reportingGranularity = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrRangeSpecifications.internalValue = value.cidrRangeSpecifications;
      this._dimensions = value.dimensions;
      this._reportingGranularity = value.reportingGranularity;
    }
  }

  // cidr_range_specifications - computed: true, optional: true, required: false
  private _cidrRangeSpecifications = new Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference(this, "cidr_range_specifications");
  public get cidrRangeSpecifications() {
    return this._cidrRangeSpecifications;
  }
  public putCidrRangeSpecifications(value: Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications) {
    this._cidrRangeSpecifications.internalValue = value;
  }
  public resetCidrRangeSpecifications() {
    this._cidrRangeSpecifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrRangeSpecificationsInput() {
    return this._cidrRangeSpecifications.internalValue;
  }

  // dimensions - computed: true, optional: true, required: false
  private _dimensions?: string[]; 
  public get dimensions() {
    return this.getListAttribute('dimensions');
  }
  public set dimensions(value: string[]) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
  }

  // reporting_granularity - computed: true, optional: true, required: false
  private _reportingGranularity?: string[]; 
  public get reportingGranularity() {
    return this.getListAttribute('reporting_granularity');
  }
  public set reportingGranularity(value: string[]) {
    this._reportingGranularity = value;
  }
  public resetReportingGranularity() {
    this._reportingGranularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportingGranularityInput() {
    return this._reportingGranularity;
  }
}
export interface Ec2FcaPolicyTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#key Ec2FcaPolicy#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#value Ec2FcaPolicy#value}
  */
  readonly value?: string;
}

export function ec2FcaPolicyTagsToTerraform(struct?: Ec2FcaPolicyTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ec2FcaPolicyTagsToHclTerraform(struct?: Ec2FcaPolicyTags | cdktn.IResolvable): any {
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

export class Ec2FcaPolicyTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2FcaPolicyTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Ec2FcaPolicyTags | cdktn.IResolvable | undefined) {
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

export class Ec2FcaPolicyTagsList extends cdktn.ComplexList {
  public internalValue? : Ec2FcaPolicyTags[] | cdktn.IResolvable

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
  public get(index: number): Ec2FcaPolicyTagsOutputReference {
    return new Ec2FcaPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy awscc_ec2_fca_policy}
*/
export class Ec2FcaPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_fca_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Ec2FcaPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2FcaPolicy to import
  * @param importFromId The id of the existing Ec2FcaPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2FcaPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_fca_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy awscc_ec2_fca_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2FcaPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2FcaPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_fca_policy',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.111.0',
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
    this._description = config.description;
    this._instanceFcaPolicyDocument.internalValue = config.instanceFcaPolicyDocument;
    this._natFcaPolicyDocument.internalValue = config.natFcaPolicyDocument;
    this._networkResourceType = config.networkResourceType;
    this._pcxFcaPolicyDocument.internalValue = config.pcxFcaPolicyDocument;
    this._showBackEnabled = config.showBackEnabled;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // fca_policy_id - computed: true, optional: false, required: false
  public get fcaPolicyId() {
    return this.getStringAttribute('fca_policy_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_fca_policy_document - computed: true, optional: true, required: false
  private _instanceFcaPolicyDocument = new Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference(this, "instance_fca_policy_document");
  public get instanceFcaPolicyDocument() {
    return this._instanceFcaPolicyDocument;
  }
  public putInstanceFcaPolicyDocument(value: Ec2FcaPolicyInstanceFcaPolicyDocument) {
    this._instanceFcaPolicyDocument.internalValue = value;
  }
  public resetInstanceFcaPolicyDocument() {
    this._instanceFcaPolicyDocument.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceFcaPolicyDocumentInput() {
    return this._instanceFcaPolicyDocument.internalValue;
  }

  // latest_version - computed: true, optional: false, required: false
  public get latestVersion() {
    return this.getNumberAttribute('latest_version');
  }

  // nat_fca_policy_document - computed: true, optional: true, required: false
  private _natFcaPolicyDocument = new Ec2FcaPolicyNatFcaPolicyDocumentOutputReference(this, "nat_fca_policy_document");
  public get natFcaPolicyDocument() {
    return this._natFcaPolicyDocument;
  }
  public putNatFcaPolicyDocument(value: Ec2FcaPolicyNatFcaPolicyDocument) {
    this._natFcaPolicyDocument.internalValue = value;
  }
  public resetNatFcaPolicyDocument() {
    this._natFcaPolicyDocument.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natFcaPolicyDocumentInput() {
    return this._natFcaPolicyDocument.internalValue;
  }

  // network_resource_type - computed: false, optional: false, required: true
  private _networkResourceType?: string; 
  public get networkResourceType() {
    return this.getStringAttribute('network_resource_type');
  }
  public set networkResourceType(value: string) {
    this._networkResourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkResourceTypeInput() {
    return this._networkResourceType;
  }

  // owner_account - computed: true, optional: false, required: false
  public get ownerAccount() {
    return this.getStringAttribute('owner_account');
  }

  // pcx_fca_policy_document - computed: true, optional: true, required: false
  private _pcxFcaPolicyDocument = new Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference(this, "pcx_fca_policy_document");
  public get pcxFcaPolicyDocument() {
    return this._pcxFcaPolicyDocument;
  }
  public putPcxFcaPolicyDocument(value: Ec2FcaPolicyPcxFcaPolicyDocument) {
    this._pcxFcaPolicyDocument.internalValue = value;
  }
  public resetPcxFcaPolicyDocument() {
    this._pcxFcaPolicyDocument.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcxFcaPolicyDocumentInput() {
    return this._pcxFcaPolicyDocument.internalValue;
  }

  // policy_created_at - computed: true, optional: false, required: false
  public get policyCreatedAt() {
    return this.getStringAttribute('policy_created_at');
  }

  // show_back_enabled - computed: true, optional: true, required: false
  private _showBackEnabled?: boolean | cdktn.IResolvable; 
  public get showBackEnabled() {
    return this.getBooleanAttribute('show_back_enabled');
  }
  public set showBackEnabled(value: boolean | cdktn.IResolvable) {
    this._showBackEnabled = value;
  }
  public resetShowBackEnabled() {
    this._showBackEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showBackEnabledInput() {
    return this._showBackEnabled;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new Ec2FcaPolicyTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: Ec2FcaPolicyTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // version_expected_effective_at - computed: true, optional: false, required: false
  public get versionExpectedEffectiveAt() {
    return this.getStringAttribute('version_expected_effective_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      instance_fca_policy_document: ec2FcaPolicyInstanceFcaPolicyDocumentToTerraform(this._instanceFcaPolicyDocument.internalValue),
      nat_fca_policy_document: ec2FcaPolicyNatFcaPolicyDocumentToTerraform(this._natFcaPolicyDocument.internalValue),
      network_resource_type: cdktn.stringToTerraform(this._networkResourceType),
      pcx_fca_policy_document: ec2FcaPolicyPcxFcaPolicyDocumentToTerraform(this._pcxFcaPolicyDocument.internalValue),
      show_back_enabled: cdktn.booleanToTerraform(this._showBackEnabled),
      tags: cdktn.listMapper(ec2FcaPolicyTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_fca_policy_document: {
        value: ec2FcaPolicyInstanceFcaPolicyDocumentToHclTerraform(this._instanceFcaPolicyDocument.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Ec2FcaPolicyInstanceFcaPolicyDocument",
      },
      nat_fca_policy_document: {
        value: ec2FcaPolicyNatFcaPolicyDocumentToHclTerraform(this._natFcaPolicyDocument.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Ec2FcaPolicyNatFcaPolicyDocument",
      },
      network_resource_type: {
        value: cdktn.stringToHclTerraform(this._networkResourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcx_fca_policy_document: {
        value: ec2FcaPolicyPcxFcaPolicyDocumentToHclTerraform(this._pcxFcaPolicyDocument.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Ec2FcaPolicyPcxFcaPolicyDocument",
      },
      show_back_enabled: {
        value: cdktn.booleanToHclTerraform(this._showBackEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktn.listMapperHcl(ec2FcaPolicyTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Ec2FcaPolicyTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
