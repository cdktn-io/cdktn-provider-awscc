/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/ec2_fca_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEc2FcaPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/ec2_fca_policy#id DataAwsccEc2FcaPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes {
}

export function dataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesToTerraform(struct?: DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesToHclTerraform(struct?: DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr_label - computed: true, optional: false, required: false
  public get cidrLabel() {
    return this.getStringAttribute('cidr_label');
  }

  // cidr_range - computed: true, optional: false, required: false
  public get cidrRange() {
    return this.getStringAttribute('cidr_range');
  }
}

export class DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference {
    return new DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications {
}

export function dataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsToTerraform(struct?: DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsToHclTerraform(struct?: DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefixes - computed: true, optional: false, required: false
  private _prefixes = new DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }

  // prefixes_type - computed: true, optional: false, required: false
  public get prefixesType() {
    return this.getStringAttribute('prefixes_type');
  }
}
export interface DataAwsccEc2FcaPolicyInstanceFcaPolicyDocument {
}

export function dataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentToTerraform(struct?: DataAwsccEc2FcaPolicyInstanceFcaPolicyDocument): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentToHclTerraform(struct?: DataAwsccEc2FcaPolicyInstanceFcaPolicyDocument): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2FcaPolicyInstanceFcaPolicyDocument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2FcaPolicyInstanceFcaPolicyDocument | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr_range_specifications - computed: true, optional: false, required: false
  private _cidrRangeSpecifications = new DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference(this, "cidr_range_specifications");
  public get cidrRangeSpecifications() {
    return this._cidrRangeSpecifications;
  }

  // dimensions - computed: true, optional: false, required: false
  public get dimensions() {
    return this.getListAttribute('dimensions');
  }

  // reporting_granularity - computed: true, optional: false, required: false
  public get reportingGranularity() {
    return this.getListAttribute('reporting_granularity');
  }
}
export interface DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes {
}

export function dataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesToTerraform(struct?: DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesToHclTerraform(struct?: DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr_label - computed: true, optional: false, required: false
  public get cidrLabel() {
    return this.getStringAttribute('cidr_label');
  }

  // cidr_range - computed: true, optional: false, required: false
  public get cidrRange() {
    return this.getStringAttribute('cidr_range');
  }
}

export class DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference {
    return new DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications {
}

export function dataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsToTerraform(struct?: DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsToHclTerraform(struct?: DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefixes - computed: true, optional: false, required: false
  private _prefixes = new DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }

  // prefixes_type - computed: true, optional: false, required: false
  public get prefixesType() {
    return this.getStringAttribute('prefixes_type');
  }
}
export interface DataAwsccEc2FcaPolicyNatFcaPolicyDocument {
}

export function dataAwsccEc2FcaPolicyNatFcaPolicyDocumentToTerraform(struct?: DataAwsccEc2FcaPolicyNatFcaPolicyDocument): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2FcaPolicyNatFcaPolicyDocumentToHclTerraform(struct?: DataAwsccEc2FcaPolicyNatFcaPolicyDocument): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2FcaPolicyNatFcaPolicyDocument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2FcaPolicyNatFcaPolicyDocument | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr_range_specifications - computed: true, optional: false, required: false
  private _cidrRangeSpecifications = new DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference(this, "cidr_range_specifications");
  public get cidrRangeSpecifications() {
    return this._cidrRangeSpecifications;
  }

  // dimensions - computed: true, optional: false, required: false
  public get dimensions() {
    return this.getListAttribute('dimensions');
  }

  // reporting_granularity - computed: true, optional: false, required: false
  public get reportingGranularity() {
    return this.getListAttribute('reporting_granularity');
  }
}
export interface DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes {
}

export function dataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesToTerraform(struct?: DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesToHclTerraform(struct?: DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr_label - computed: true, optional: false, required: false
  public get cidrLabel() {
    return this.getStringAttribute('cidr_label');
  }

  // cidr_range - computed: true, optional: false, required: false
  public get cidrRange() {
    return this.getStringAttribute('cidr_range');
  }
}

export class DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference {
    return new DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications {
}

export function dataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsToTerraform(struct?: DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsToHclTerraform(struct?: DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefixes - computed: true, optional: false, required: false
  private _prefixes = new DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }

  // prefixes_type - computed: true, optional: false, required: false
  public get prefixesType() {
    return this.getStringAttribute('prefixes_type');
  }
}
export interface DataAwsccEc2FcaPolicyPcxFcaPolicyDocument {
}

export function dataAwsccEc2FcaPolicyPcxFcaPolicyDocumentToTerraform(struct?: DataAwsccEc2FcaPolicyPcxFcaPolicyDocument): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2FcaPolicyPcxFcaPolicyDocumentToHclTerraform(struct?: DataAwsccEc2FcaPolicyPcxFcaPolicyDocument): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2FcaPolicyPcxFcaPolicyDocument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2FcaPolicyPcxFcaPolicyDocument | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr_range_specifications - computed: true, optional: false, required: false
  private _cidrRangeSpecifications = new DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference(this, "cidr_range_specifications");
  public get cidrRangeSpecifications() {
    return this._cidrRangeSpecifications;
  }

  // dimensions - computed: true, optional: false, required: false
  public get dimensions() {
    return this.getListAttribute('dimensions');
  }

  // reporting_granularity - computed: true, optional: false, required: false
  public get reportingGranularity() {
    return this.getListAttribute('reporting_granularity');
  }
}
export interface DataAwsccEc2FcaPolicyTags {
}

export function dataAwsccEc2FcaPolicyTagsToTerraform(struct?: DataAwsccEc2FcaPolicyTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2FcaPolicyTagsToHclTerraform(struct?: DataAwsccEc2FcaPolicyTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2FcaPolicyTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2FcaPolicyTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2FcaPolicyTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccEc2FcaPolicyTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2FcaPolicyTagsOutputReference {
    return new DataAwsccEc2FcaPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/ec2_fca_policy awscc_ec2_fca_policy}
*/
export class DataAwsccEc2FcaPolicy extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_fca_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEc2FcaPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEc2FcaPolicy to import
  * @param importFromId The id of the existing DataAwsccEc2FcaPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/ec2_fca_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEc2FcaPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_fca_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/ec2_fca_policy awscc_ec2_fca_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2FcaPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2FcaPolicyConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // fca_policy_id - computed: true, optional: false, required: false
  public get fcaPolicyId() {
    return this.getStringAttribute('fca_policy_id');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // instance_fca_policy_document - computed: true, optional: false, required: false
  private _instanceFcaPolicyDocument = new DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference(this, "instance_fca_policy_document");
  public get instanceFcaPolicyDocument() {
    return this._instanceFcaPolicyDocument;
  }

  // latest_version - computed: true, optional: false, required: false
  public get latestVersion() {
    return this.getNumberAttribute('latest_version');
  }

  // nat_fca_policy_document - computed: true, optional: false, required: false
  private _natFcaPolicyDocument = new DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference(this, "nat_fca_policy_document");
  public get natFcaPolicyDocument() {
    return this._natFcaPolicyDocument;
  }

  // network_resource_type - computed: true, optional: false, required: false
  public get networkResourceType() {
    return this.getStringAttribute('network_resource_type');
  }

  // owner_account - computed: true, optional: false, required: false
  public get ownerAccount() {
    return this.getStringAttribute('owner_account');
  }

  // pcx_fca_policy_document - computed: true, optional: false, required: false
  private _pcxFcaPolicyDocument = new DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference(this, "pcx_fca_policy_document");
  public get pcxFcaPolicyDocument() {
    return this._pcxFcaPolicyDocument;
  }

  // policy_created_at - computed: true, optional: false, required: false
  public get policyCreatedAt() {
    return this.getStringAttribute('policy_created_at');
  }

  // show_back_enabled - computed: true, optional: false, required: false
  public get showBackEnabled() {
    return this.getBooleanAttribute('show_back_enabled');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccEc2FcaPolicyTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
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
      id: cdktn.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
