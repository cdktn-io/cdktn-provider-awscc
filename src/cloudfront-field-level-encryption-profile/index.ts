/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudfront_field_level_encryption_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CloudfrontFieldLevelEncryptionProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * The configuration of a field-level encryption profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudfront_field_level_encryption_profile#field_level_encryption_profile_config CloudfrontFieldLevelEncryptionProfile#field_level_encryption_profile_config}
  */
  readonly fieldLevelEncryptionProfileConfig: CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig;
}
export interface CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities {
  /**
  * The request-body field names to encrypt. A pattern is either a full field name or leading characters followed by a wildcard (*). Patterns are case-sensitive and must not overlap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudfront_field_level_encryption_profile#field_patterns CloudfrontFieldLevelEncryptionProfile#field_patterns}
  */
  readonly fieldPatterns: string[];
  /**
  * The provider associated with the public key. The same value must be supplied with the private key for an application to decrypt the data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudfront_field_level_encryption_profile#provider_id CloudfrontFieldLevelEncryptionProfile#provider_id}
  */
  readonly providerId: string;
  /**
  * The identifier of the CloudFront public key used to encrypt the fields that match the patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudfront_field_level_encryption_profile#public_key_id CloudfrontFieldLevelEncryptionProfile#public_key_id}
  */
  readonly publicKeyId: string;
}

export function cloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesToTerraform(struct?: CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fieldPatterns),
    provider_id: cdktn.stringToTerraform(struct!.providerId),
    public_key_id: cdktn.stringToTerraform(struct!.publicKeyId),
  }
}


export function cloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesToHclTerraform(struct?: CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field_patterns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fieldPatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    provider_id: {
      value: cdktn.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_key_id: {
      value: cdktn.stringToHclTerraform(struct!.publicKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPatterns = this._fieldPatterns;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._publicKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKeyId = this._publicKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldPatterns = undefined;
      this._providerId = undefined;
      this._publicKeyId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldPatterns = value.fieldPatterns;
      this._providerId = value.providerId;
      this._publicKeyId = value.publicKeyId;
    }
  }

  // field_patterns - computed: false, optional: false, required: true
  private _fieldPatterns?: string[]; 
  public get fieldPatterns() {
    return this.getListAttribute('field_patterns');
  }
  public set fieldPatterns(value: string[]) {
    this._fieldPatterns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPatternsInput() {
    return this._fieldPatterns;
  }

  // provider_id - computed: false, optional: false, required: true
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // public_key_id - computed: false, optional: false, required: true
  private _publicKeyId?: string; 
  public get publicKeyId() {
    return this.getStringAttribute('public_key_id');
  }
  public set publicKeyId(value: string) {
    this._publicKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyIdInput() {
    return this._publicKeyId;
  }
}

export class CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList extends cdktn.ComplexList {
  public internalValue? : CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities[] | cdktn.IResolvable

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
  public get(index: number): CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference {
    return new CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig {
  /**
  * A unique value that identifies the creation request. Caller references are unique within an AWS account and cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudfront_field_level_encryption_profile#caller_reference CloudfrontFieldLevelEncryptionProfile#caller_reference}
  */
  readonly callerReference: string;
  /**
  * An optional comment describing the field-level encryption profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudfront_field_level_encryption_profile#comment CloudfrontFieldLevelEncryptionProfile#comment}
  */
  readonly comment?: string;
  /**
  * The encryption entities of the field-level encryption profile. At least one entity is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudfront_field_level_encryption_profile#encryption_entities CloudfrontFieldLevelEncryptionProfile#encryption_entities}
  */
  readonly encryptionEntities: CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities[] | cdktn.IResolvable;
  /**
  * The name of the field-level encryption profile. Names are unique within an AWS account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudfront_field_level_encryption_profile#name CloudfrontFieldLevelEncryptionProfile#name}
  */
  readonly name: string;
}

export function cloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigToTerraform(struct?: CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    caller_reference: cdktn.stringToTerraform(struct!.callerReference),
    comment: cdktn.stringToTerraform(struct!.comment),
    encryption_entities: cdktn.listMapper(cloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesToTerraform, false)(struct!.encryptionEntities),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function cloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigToHclTerraform(struct?: CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    caller_reference: {
      value: cdktn.stringToHclTerraform(struct!.callerReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktn.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_entities: {
      value: cdktn.listMapperHcl(cloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesToHclTerraform, false)(struct!.encryptionEntities),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList",
    },
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

export class CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._callerReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.callerReference = this._callerReference;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._encryptionEntities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionEntities = this._encryptionEntities?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._callerReference = undefined;
      this._comment = undefined;
      this._encryptionEntities.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._callerReference = value.callerReference;
      this._comment = value.comment;
      this._encryptionEntities.internalValue = value.encryptionEntities;
      this._name = value.name;
    }
  }

  // caller_reference - computed: false, optional: false, required: true
  private _callerReference?: string; 
  public get callerReference() {
    return this.getStringAttribute('caller_reference');
  }
  public set callerReference(value: string) {
    this._callerReference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get callerReferenceInput() {
    return this._callerReference;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // encryption_entities - computed: false, optional: false, required: true
  private _encryptionEntities = new CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList(this, "encryption_entities", false);
  public get encryptionEntities() {
    return this._encryptionEntities;
  }
  public putEncryptionEntities(value: CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities[] | cdktn.IResolvable) {
    this._encryptionEntities.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionEntitiesInput() {
    return this._encryptionEntities.internalValue;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudfront_field_level_encryption_profile awscc_cloudfront_field_level_encryption_profile}
*/
export class CloudfrontFieldLevelEncryptionProfile extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cloudfront_field_level_encryption_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CloudfrontFieldLevelEncryptionProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudfrontFieldLevelEncryptionProfile to import
  * @param importFromId The id of the existing CloudfrontFieldLevelEncryptionProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudfront_field_level_encryption_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudfrontFieldLevelEncryptionProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudfront_field_level_encryption_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudfront_field_level_encryption_profile awscc_cloudfront_field_level_encryption_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontFieldLevelEncryptionProfileConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontFieldLevelEncryptionProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudfront_field_level_encryption_profile',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.105.0',
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
    this._fieldLevelEncryptionProfileConfig.internalValue = config.fieldLevelEncryptionProfileConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // field_level_encryption_profile_config - computed: false, optional: false, required: true
  private _fieldLevelEncryptionProfileConfig = new CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference(this, "field_level_encryption_profile_config");
  public get fieldLevelEncryptionProfileConfig() {
    return this._fieldLevelEncryptionProfileConfig;
  }
  public putFieldLevelEncryptionProfileConfig(value: CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig) {
    this._fieldLevelEncryptionProfileConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldLevelEncryptionProfileConfigInput() {
    return this._fieldLevelEncryptionProfileConfig.internalValue;
  }

  // field_level_encryption_profile_id - computed: true, optional: false, required: false
  public get fieldLevelEncryptionProfileId() {
    return this.getStringAttribute('field_level_encryption_profile_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      field_level_encryption_profile_config: cloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigToTerraform(this._fieldLevelEncryptionProfileConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      field_level_encryption_profile_config: {
        value: cloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigToHclTerraform(this._fieldLevelEncryptionProfileConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
