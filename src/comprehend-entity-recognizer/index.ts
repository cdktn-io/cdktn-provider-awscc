/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ComprehendEntityRecognizerConfig extends cdktn.TerraformMetaArguments {
  /**
  * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#data_access_role_arn ComprehendEntityRecognizer#data_access_role_arn}
  */
  readonly dataAccessRoleArn: string;
  /**
  * Specifies the format and location of the input data. The S3 bucket containing the input data must be located in the same Region as the entity recognizer being created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#input_data_config ComprehendEntityRecognizer#input_data_config}
  */
  readonly inputDataConfig: ComprehendEntityRecognizerInputDataConfig;
  /**
  * The language of the input documents. All documents must be in the same language.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#language_code ComprehendEntityRecognizer#language_code}
  */
  readonly languageCode: string;
  /**
  * ID for the AWS KMS key that Amazon Comprehend uses to encrypt trained custom models.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#model_kms_key_id ComprehendEntityRecognizer#model_kms_key_id}
  */
  readonly modelKmsKeyId?: string;
  /**
  * The JSON resource-based policy to attach to your custom entity recognizer model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#model_policy ComprehendEntityRecognizer#model_policy}
  */
  readonly modelPolicy?: string;
  /**
  * The name given to the entity recognizer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#recognizer_name ComprehendEntityRecognizer#recognizer_name}
  */
  readonly recognizerName: string;
  /**
  * Tags to associate with the entity recognizer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#tags ComprehendEntityRecognizer#tags}
  */
  readonly tags?: ComprehendEntityRecognizerTags[] | cdktn.IResolvable;
  /**
  * The version name given to the entity recognizer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#version_name ComprehendEntityRecognizer#version_name}
  */
  readonly versionName?: string;
  /**
  * ID for the AWS KMS key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#volume_kms_key_id ComprehendEntityRecognizer#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
  /**
  * Configuration parameters for an optional private VPC containing the resources you are using for your custom entity recognizer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#vpc_config ComprehendEntityRecognizer#vpc_config}
  */
  readonly vpcConfig?: ComprehendEntityRecognizerVpcConfig;
}
export interface ComprehendEntityRecognizerInputDataConfigAnnotations {
  /**
  * Specifies the Amazon S3 location where the annotations are located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}
  */
  readonly s3Uri?: string;
  /**
  * Specifies the Amazon S3 location where the test annotations are located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#test_s3_uri ComprehendEntityRecognizer#test_s3_uri}
  */
  readonly testS3Uri?: string;
}

export function comprehendEntityRecognizerInputDataConfigAnnotationsToTerraform(struct?: ComprehendEntityRecognizerInputDataConfigAnnotations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    test_s3_uri: cdktn.stringToTerraform(struct!.testS3Uri),
  }
}


export function comprehendEntityRecognizerInputDataConfigAnnotationsToHclTerraform(struct?: ComprehendEntityRecognizerInputDataConfigAnnotations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    test_s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.testS3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComprehendEntityRecognizerInputDataConfigAnnotations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    if (this._testS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.testS3Uri = this._testS3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComprehendEntityRecognizerInputDataConfigAnnotations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Uri = undefined;
      this._testS3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Uri = value.s3Uri;
      this._testS3Uri = value.testS3Uri;
    }
  }

  // s3_uri - computed: true, optional: true, required: false
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }

  // test_s3_uri - computed: true, optional: true, required: false
  private _testS3Uri?: string; 
  public get testS3Uri() {
    return this.getStringAttribute('test_s3_uri');
  }
  public set testS3Uri(value: string) {
    this._testS3Uri = value;
  }
  public resetTestS3Uri() {
    this._testS3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testS3UriInput() {
    return this._testS3Uri;
  }
}
export interface ComprehendEntityRecognizerInputDataConfigAugmentedManifests {
  /**
  * The S3 prefix to the annotation files that are referred in the augmented manifest file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#annotation_data_s3_uri ComprehendEntityRecognizer#annotation_data_s3_uri}
  */
  readonly annotationDataS3Uri?: string;
  /**
  * The JSON attribute that contains the annotations for your training documents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#attribute_names ComprehendEntityRecognizer#attribute_names}
  */
  readonly attributeNames?: string[];
  /**
  * The type of augmented manifest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#document_type ComprehendEntityRecognizer#document_type}
  */
  readonly documentType?: string;
  /**
  * The Amazon S3 location of the augmented manifest file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}
  */
  readonly s3Uri?: string;
  /**
  * The S3 prefix to the source files (PDFs) that are referred to in the augmented manifest file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#source_documents_s3_uri ComprehendEntityRecognizer#source_documents_s3_uri}
  */
  readonly sourceDocumentsS3Uri?: string;
  /**
  * The purpose of the data you've provided in the augmented manifest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#split ComprehendEntityRecognizer#split}
  */
  readonly split?: string;
}

export function comprehendEntityRecognizerInputDataConfigAugmentedManifestsToTerraform(struct?: ComprehendEntityRecognizerInputDataConfigAugmentedManifests | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    annotation_data_s3_uri: cdktn.stringToTerraform(struct!.annotationDataS3Uri),
    attribute_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.attributeNames),
    document_type: cdktn.stringToTerraform(struct!.documentType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    source_documents_s3_uri: cdktn.stringToTerraform(struct!.sourceDocumentsS3Uri),
    split: cdktn.stringToTerraform(struct!.split),
  }
}


export function comprehendEntityRecognizerInputDataConfigAugmentedManifestsToHclTerraform(struct?: ComprehendEntityRecognizerInputDataConfigAugmentedManifests | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    annotation_data_s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.annotationDataS3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.attributeNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    document_type: {
      value: cdktn.stringToHclTerraform(struct!.documentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_documents_s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.sourceDocumentsS3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    split: {
      value: cdktn.stringToHclTerraform(struct!.split),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComprehendEntityRecognizerInputDataConfigAugmentedManifests | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotationDataS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationDataS3Uri = this._annotationDataS3Uri;
    }
    if (this._attributeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeNames = this._attributeNames;
    }
    if (this._documentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentType = this._documentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    if (this._sourceDocumentsS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDocumentsS3Uri = this._sourceDocumentsS3Uri;
    }
    if (this._split !== undefined) {
      hasAnyValues = true;
      internalValueResult.split = this._split;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComprehendEntityRecognizerInputDataConfigAugmentedManifests | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotationDataS3Uri = undefined;
      this._attributeNames = undefined;
      this._documentType = undefined;
      this._s3Uri = undefined;
      this._sourceDocumentsS3Uri = undefined;
      this._split = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotationDataS3Uri = value.annotationDataS3Uri;
      this._attributeNames = value.attributeNames;
      this._documentType = value.documentType;
      this._s3Uri = value.s3Uri;
      this._sourceDocumentsS3Uri = value.sourceDocumentsS3Uri;
      this._split = value.split;
    }
  }

  // annotation_data_s3_uri - computed: true, optional: true, required: false
  private _annotationDataS3Uri?: string; 
  public get annotationDataS3Uri() {
    return this.getStringAttribute('annotation_data_s3_uri');
  }
  public set annotationDataS3Uri(value: string) {
    this._annotationDataS3Uri = value;
  }
  public resetAnnotationDataS3Uri() {
    this._annotationDataS3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationDataS3UriInput() {
    return this._annotationDataS3Uri;
  }

  // attribute_names - computed: true, optional: true, required: false
  private _attributeNames?: string[]; 
  public get attributeNames() {
    return this.getListAttribute('attribute_names');
  }
  public set attributeNames(value: string[]) {
    this._attributeNames = value;
  }
  public resetAttributeNames() {
    this._attributeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNamesInput() {
    return this._attributeNames;
  }

  // document_type - computed: true, optional: true, required: false
  private _documentType?: string; 
  public get documentType() {
    return this.getStringAttribute('document_type');
  }
  public set documentType(value: string) {
    this._documentType = value;
  }
  public resetDocumentType() {
    this._documentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentTypeInput() {
    return this._documentType;
  }

  // s3_uri - computed: true, optional: true, required: false
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }

  // source_documents_s3_uri - computed: true, optional: true, required: false
  private _sourceDocumentsS3Uri?: string; 
  public get sourceDocumentsS3Uri() {
    return this.getStringAttribute('source_documents_s3_uri');
  }
  public set sourceDocumentsS3Uri(value: string) {
    this._sourceDocumentsS3Uri = value;
  }
  public resetSourceDocumentsS3Uri() {
    this._sourceDocumentsS3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDocumentsS3UriInput() {
    return this._sourceDocumentsS3Uri;
  }

  // split - computed: true, optional: true, required: false
  private _split?: string; 
  public get split() {
    return this.getStringAttribute('split');
  }
  public set split(value: string) {
    this._split = value;
  }
  public resetSplit() {
    this._split = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitInput() {
    return this._split;
  }
}

export class ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList extends cdktn.ComplexList {
  public internalValue? : ComprehendEntityRecognizerInputDataConfigAugmentedManifests[] | cdktn.IResolvable

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
  public get(index: number): ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference {
    return new ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComprehendEntityRecognizerInputDataConfigDocuments {
  /**
  * Specifies how the text in an input file should be processed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#input_format ComprehendEntityRecognizer#input_format}
  */
  readonly inputFormat?: string;
  /**
  * Specifies the Amazon S3 location where the training documents are located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}
  */
  readonly s3Uri?: string;
  /**
  * Specifies the Amazon S3 location where the test documents are located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#test_s3_uri ComprehendEntityRecognizer#test_s3_uri}
  */
  readonly testS3Uri?: string;
}

export function comprehendEntityRecognizerInputDataConfigDocumentsToTerraform(struct?: ComprehendEntityRecognizerInputDataConfigDocuments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input_format: cdktn.stringToTerraform(struct!.inputFormat),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    test_s3_uri: cdktn.stringToTerraform(struct!.testS3Uri),
  }
}


export function comprehendEntityRecognizerInputDataConfigDocumentsToHclTerraform(struct?: ComprehendEntityRecognizerInputDataConfigDocuments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input_format: {
      value: cdktn.stringToHclTerraform(struct!.inputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    test_s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.testS3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComprehendEntityRecognizerInputDataConfigDocuments | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFormat = this._inputFormat;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    if (this._testS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.testS3Uri = this._testS3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComprehendEntityRecognizerInputDataConfigDocuments | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputFormat = undefined;
      this._s3Uri = undefined;
      this._testS3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputFormat = value.inputFormat;
      this._s3Uri = value.s3Uri;
      this._testS3Uri = value.testS3Uri;
    }
  }

  // input_format - computed: true, optional: true, required: false
  private _inputFormat?: string; 
  public get inputFormat() {
    return this.getStringAttribute('input_format');
  }
  public set inputFormat(value: string) {
    this._inputFormat = value;
  }
  public resetInputFormat() {
    this._inputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFormatInput() {
    return this._inputFormat;
  }

  // s3_uri - computed: true, optional: true, required: false
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }

  // test_s3_uri - computed: true, optional: true, required: false
  private _testS3Uri?: string; 
  public get testS3Uri() {
    return this.getStringAttribute('test_s3_uri');
  }
  public set testS3Uri(value: string) {
    this._testS3Uri = value;
  }
  public resetTestS3Uri() {
    this._testS3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testS3UriInput() {
    return this._testS3Uri;
  }
}
export interface ComprehendEntityRecognizerInputDataConfigEntityListStruct {
  /**
  * Specifies the Amazon S3 location where the entity list is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}
  */
  readonly s3Uri?: string;
}

export function comprehendEntityRecognizerInputDataConfigEntityListStructToTerraform(struct?: ComprehendEntityRecognizerInputDataConfigEntityListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function comprehendEntityRecognizerInputDataConfigEntityListStructToHclTerraform(struct?: ComprehendEntityRecognizerInputDataConfigEntityListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComprehendEntityRecognizerInputDataConfigEntityListStruct | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComprehendEntityRecognizerInputDataConfigEntityListStruct | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Uri = value.s3Uri;
    }
  }

  // s3_uri - computed: true, optional: true, required: false
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface ComprehendEntityRecognizerInputDataConfigEntityTypes {
  /**
  * An entity type within a labeled training dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#type ComprehendEntityRecognizer#type}
  */
  readonly type: string;
}

export function comprehendEntityRecognizerInputDataConfigEntityTypesToTerraform(struct?: ComprehendEntityRecognizerInputDataConfigEntityTypes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function comprehendEntityRecognizerInputDataConfigEntityTypesToHclTerraform(struct?: ComprehendEntityRecognizerInputDataConfigEntityTypes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComprehendEntityRecognizerInputDataConfigEntityTypes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComprehendEntityRecognizerInputDataConfigEntityTypes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ComprehendEntityRecognizerInputDataConfigEntityTypesList extends cdktn.ComplexList {
  public internalValue? : ComprehendEntityRecognizerInputDataConfigEntityTypes[] | cdktn.IResolvable

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
  public get(index: number): ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference {
    return new ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComprehendEntityRecognizerInputDataConfig {
  /**
  * The S3 location of the CSV file that annotates your training documents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#annotations ComprehendEntityRecognizer#annotations}
  */
  readonly annotations?: ComprehendEntityRecognizerInputDataConfigAnnotations;
  /**
  * A list of augmented manifest files that provide training data for a custom model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#augmented_manifests ComprehendEntityRecognizer#augmented_manifests}
  */
  readonly augmentedManifests?: ComprehendEntityRecognizerInputDataConfigAugmentedManifests[] | cdktn.IResolvable;
  /**
  * The format of your training data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#data_format ComprehendEntityRecognizer#data_format}
  */
  readonly dataFormat?: string;
  /**
  * The S3 location of the folder that contains the training documents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#documents ComprehendEntityRecognizer#documents}
  */
  readonly documents?: ComprehendEntityRecognizerInputDataConfigDocuments;
  /**
  * The S3 location of the CSV file that has the entity list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#entity_list ComprehendEntityRecognizer#entity_list}
  */
  readonly entityList?: ComprehendEntityRecognizerInputDataConfigEntityListStruct;
  /**
  * The entity types in the labeled training data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#entity_types ComprehendEntityRecognizer#entity_types}
  */
  readonly entityTypes: ComprehendEntityRecognizerInputDataConfigEntityTypes[] | cdktn.IResolvable;
}

export function comprehendEntityRecognizerInputDataConfigToTerraform(struct?: ComprehendEntityRecognizerInputDataConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    annotations: comprehendEntityRecognizerInputDataConfigAnnotationsToTerraform(struct!.annotations),
    augmented_manifests: cdktn.listMapper(comprehendEntityRecognizerInputDataConfigAugmentedManifestsToTerraform, false)(struct!.augmentedManifests),
    data_format: cdktn.stringToTerraform(struct!.dataFormat),
    documents: comprehendEntityRecognizerInputDataConfigDocumentsToTerraform(struct!.documents),
    entity_list: comprehendEntityRecognizerInputDataConfigEntityListStructToTerraform(struct!.entityList),
    entity_types: cdktn.listMapper(comprehendEntityRecognizerInputDataConfigEntityTypesToTerraform, false)(struct!.entityTypes),
  }
}


export function comprehendEntityRecognizerInputDataConfigToHclTerraform(struct?: ComprehendEntityRecognizerInputDataConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    annotations: {
      value: comprehendEntityRecognizerInputDataConfigAnnotationsToHclTerraform(struct!.annotations),
      isBlock: true,
      type: "struct",
      storageClassType: "ComprehendEntityRecognizerInputDataConfigAnnotations",
    },
    augmented_manifests: {
      value: cdktn.listMapperHcl(comprehendEntityRecognizerInputDataConfigAugmentedManifestsToHclTerraform, false)(struct!.augmentedManifests),
      isBlock: true,
      type: "list",
      storageClassType: "ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList",
    },
    data_format: {
      value: cdktn.stringToHclTerraform(struct!.dataFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    documents: {
      value: comprehendEntityRecognizerInputDataConfigDocumentsToHclTerraform(struct!.documents),
      isBlock: true,
      type: "struct",
      storageClassType: "ComprehendEntityRecognizerInputDataConfigDocuments",
    },
    entity_list: {
      value: comprehendEntityRecognizerInputDataConfigEntityListStructToHclTerraform(struct!.entityList),
      isBlock: true,
      type: "struct",
      storageClassType: "ComprehendEntityRecognizerInputDataConfigEntityListStruct",
    },
    entity_types: {
      value: cdktn.listMapperHcl(comprehendEntityRecognizerInputDataConfigEntityTypesToHclTerraform, false)(struct!.entityTypes),
      isBlock: true,
      type: "list",
      storageClassType: "ComprehendEntityRecognizerInputDataConfigEntityTypesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComprehendEntityRecognizerInputDataConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComprehendEntityRecognizerInputDataConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._augmentedManifests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.augmentedManifests = this._augmentedManifests?.internalValue;
    }
    if (this._dataFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFormat = this._dataFormat;
    }
    if (this._documents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.documents = this._documents?.internalValue;
    }
    if (this._entityList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityList = this._entityList?.internalValue;
    }
    if (this._entityTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityTypes = this._entityTypes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComprehendEntityRecognizerInputDataConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations.internalValue = undefined;
      this._augmentedManifests.internalValue = undefined;
      this._dataFormat = undefined;
      this._documents.internalValue = undefined;
      this._entityList.internalValue = undefined;
      this._entityTypes.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations.internalValue = value.annotations;
      this._augmentedManifests.internalValue = value.augmentedManifests;
      this._dataFormat = value.dataFormat;
      this._documents.internalValue = value.documents;
      this._entityList.internalValue = value.entityList;
      this._entityTypes.internalValue = value.entityTypes;
    }
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference(this, "annotations");
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: ComprehendEntityRecognizerInputDataConfigAnnotations) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // augmented_manifests - computed: true, optional: true, required: false
  private _augmentedManifests = new ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList(this, "augmented_manifests", false);
  public get augmentedManifests() {
    return this._augmentedManifests;
  }
  public putAugmentedManifests(value: ComprehendEntityRecognizerInputDataConfigAugmentedManifests[] | cdktn.IResolvable) {
    this._augmentedManifests.internalValue = value;
  }
  public resetAugmentedManifests() {
    this._augmentedManifests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get augmentedManifestsInput() {
    return this._augmentedManifests.internalValue;
  }

  // data_format - computed: true, optional: true, required: false
  private _dataFormat?: string; 
  public get dataFormat() {
    return this.getStringAttribute('data_format');
  }
  public set dataFormat(value: string) {
    this._dataFormat = value;
  }
  public resetDataFormat() {
    this._dataFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatInput() {
    return this._dataFormat;
  }

  // documents - computed: true, optional: true, required: false
  private _documents = new ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference(this, "documents");
  public get documents() {
    return this._documents;
  }
  public putDocuments(value: ComprehendEntityRecognizerInputDataConfigDocuments) {
    this._documents.internalValue = value;
  }
  public resetDocuments() {
    this._documents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentsInput() {
    return this._documents.internalValue;
  }

  // entity_list - computed: true, optional: true, required: false
  private _entityList = new ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference(this, "entity_list");
  public get entityList() {
    return this._entityList;
  }
  public putEntityList(value: ComprehendEntityRecognizerInputDataConfigEntityListStruct) {
    this._entityList.internalValue = value;
  }
  public resetEntityList() {
    this._entityList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityListInput() {
    return this._entityList.internalValue;
  }

  // entity_types - computed: false, optional: false, required: true
  private _entityTypes = new ComprehendEntityRecognizerInputDataConfigEntityTypesList(this, "entity_types", false);
  public get entityTypes() {
    return this._entityTypes;
  }
  public putEntityTypes(value: ComprehendEntityRecognizerInputDataConfigEntityTypes[] | cdktn.IResolvable) {
    this._entityTypes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypesInput() {
    return this._entityTypes.internalValue;
  }
}
export interface ComprehendEntityRecognizerTags {
  /**
  * The key of the key-value pair that forms a tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#key ComprehendEntityRecognizer#key}
  */
  readonly key?: string;
  /**
  * The value of the key-value pair that forms a tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#value ComprehendEntityRecognizer#value}
  */
  readonly value?: string;
}

export function comprehendEntityRecognizerTagsToTerraform(struct?: ComprehendEntityRecognizerTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function comprehendEntityRecognizerTagsToHclTerraform(struct?: ComprehendEntityRecognizerTags | cdktn.IResolvable): any {
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

export class ComprehendEntityRecognizerTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComprehendEntityRecognizerTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ComprehendEntityRecognizerTags | cdktn.IResolvable | undefined) {
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

export class ComprehendEntityRecognizerTagsList extends cdktn.ComplexList {
  public internalValue? : ComprehendEntityRecognizerTags[] | cdktn.IResolvable

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
  public get(index: number): ComprehendEntityRecognizerTagsOutputReference {
    return new ComprehendEntityRecognizerTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComprehendEntityRecognizerVpcConfig {
  /**
  * The ID number for a security group on an instance of your private VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#security_group_ids ComprehendEntityRecognizer#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * The ID for each subnet being used in your private VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#subnets ComprehendEntityRecognizer#subnets}
  */
  readonly subnets?: string[];
}

export function comprehendEntityRecognizerVpcConfigToTerraform(struct?: ComprehendEntityRecognizerVpcConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
  }
}


export function comprehendEntityRecognizerVpcConfigToHclTerraform(struct?: ComprehendEntityRecognizerVpcConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComprehendEntityRecognizerVpcConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComprehendEntityRecognizerVpcConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComprehendEntityRecognizerVpcConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIds = undefined;
      this._subnets = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupIds = value.securityGroupIds;
      this._subnets = value.subnets;
    }
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnets - computed: true, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer awscc_comprehend_entity_recognizer}
*/
export class ComprehendEntityRecognizer extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_comprehend_entity_recognizer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ComprehendEntityRecognizer resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComprehendEntityRecognizer to import
  * @param importFromId The id of the existing ComprehendEntityRecognizer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComprehendEntityRecognizer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_comprehend_entity_recognizer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer awscc_comprehend_entity_recognizer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComprehendEntityRecognizerConfig
  */
  public constructor(scope: Construct, id: string, config: ComprehendEntityRecognizerConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_comprehend_entity_recognizer',
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
    this._dataAccessRoleArn = config.dataAccessRoleArn;
    this._inputDataConfig.internalValue = config.inputDataConfig;
    this._languageCode = config.languageCode;
    this._modelKmsKeyId = config.modelKmsKeyId;
    this._modelPolicy = config.modelPolicy;
    this._recognizerName = config.recognizerName;
    this._tags.internalValue = config.tags;
    this._versionName = config.versionName;
    this._volumeKmsKeyId = config.volumeKmsKeyId;
    this._vpcConfig.internalValue = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // data_access_role_arn - computed: false, optional: false, required: true
  private _dataAccessRoleArn?: string; 
  public get dataAccessRoleArn() {
    return this.getStringAttribute('data_access_role_arn');
  }
  public set dataAccessRoleArn(value: string) {
    this._dataAccessRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAccessRoleArnInput() {
    return this._dataAccessRoleArn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // input_data_config - computed: false, optional: false, required: true
  private _inputDataConfig = new ComprehendEntityRecognizerInputDataConfigOutputReference(this, "input_data_config");
  public get inputDataConfig() {
    return this._inputDataConfig;
  }
  public putInputDataConfig(value: ComprehendEntityRecognizerInputDataConfig) {
    this._inputDataConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDataConfigInput() {
    return this._inputDataConfig.internalValue;
  }

  // language_code - computed: false, optional: false, required: true
  private _languageCode?: string; 
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string) {
    this._languageCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
  }

  // model_kms_key_id - computed: true, optional: true, required: false
  private _modelKmsKeyId?: string; 
  public get modelKmsKeyId() {
    return this.getStringAttribute('model_kms_key_id');
  }
  public set modelKmsKeyId(value: string) {
    this._modelKmsKeyId = value;
  }
  public resetModelKmsKeyId() {
    this._modelKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelKmsKeyIdInput() {
    return this._modelKmsKeyId;
  }

  // model_policy - computed: true, optional: true, required: false
  private _modelPolicy?: string; 
  public get modelPolicy() {
    return this.getStringAttribute('model_policy');
  }
  public set modelPolicy(value: string) {
    this._modelPolicy = value;
  }
  public resetModelPolicy() {
    this._modelPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelPolicyInput() {
    return this._modelPolicy;
  }

  // recognizer_name - computed: false, optional: false, required: true
  private _recognizerName?: string; 
  public get recognizerName() {
    return this.getStringAttribute('recognizer_name');
  }
  public set recognizerName(value: string) {
    this._recognizerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recognizerNameInput() {
    return this._recognizerName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ComprehendEntityRecognizerTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ComprehendEntityRecognizerTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // version_name - computed: true, optional: true, required: false
  private _versionName?: string; 
  public get versionName() {
    return this.getStringAttribute('version_name');
  }
  public set versionName(value: string) {
    this._versionName = value;
  }
  public resetVersionName() {
    this._versionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionNameInput() {
    return this._versionName;
  }

  // volume_kms_key_id - computed: true, optional: true, required: false
  private _volumeKmsKeyId?: string; 
  public get volumeKmsKeyId() {
    return this.getStringAttribute('volume_kms_key_id');
  }
  public set volumeKmsKeyId(value: string) {
    this._volumeKmsKeyId = value;
  }
  public resetVolumeKmsKeyId() {
    this._volumeKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeKmsKeyIdInput() {
    return this._volumeKmsKeyId;
  }

  // vpc_config - computed: true, optional: true, required: false
  private _vpcConfig = new ComprehendEntityRecognizerVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: ComprehendEntityRecognizerVpcConfig) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_access_role_arn: cdktn.stringToTerraform(this._dataAccessRoleArn),
      input_data_config: comprehendEntityRecognizerInputDataConfigToTerraform(this._inputDataConfig.internalValue),
      language_code: cdktn.stringToTerraform(this._languageCode),
      model_kms_key_id: cdktn.stringToTerraform(this._modelKmsKeyId),
      model_policy: cdktn.stringToTerraform(this._modelPolicy),
      recognizer_name: cdktn.stringToTerraform(this._recognizerName),
      tags: cdktn.listMapper(comprehendEntityRecognizerTagsToTerraform, false)(this._tags.internalValue),
      version_name: cdktn.stringToTerraform(this._versionName),
      volume_kms_key_id: cdktn.stringToTerraform(this._volumeKmsKeyId),
      vpc_config: comprehendEntityRecognizerVpcConfigToTerraform(this._vpcConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_access_role_arn: {
        value: cdktn.stringToHclTerraform(this._dataAccessRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input_data_config: {
        value: comprehendEntityRecognizerInputDataConfigToHclTerraform(this._inputDataConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComprehendEntityRecognizerInputDataConfig",
      },
      language_code: {
        value: cdktn.stringToHclTerraform(this._languageCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_kms_key_id: {
        value: cdktn.stringToHclTerraform(this._modelKmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_policy: {
        value: cdktn.stringToHclTerraform(this._modelPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recognizer_name: {
        value: cdktn.stringToHclTerraform(this._recognizerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(comprehendEntityRecognizerTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ComprehendEntityRecognizerTagsList",
      },
      version_name: {
        value: cdktn.stringToHclTerraform(this._versionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_kms_key_id: {
        value: cdktn.stringToHclTerraform(this._volumeKmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_config: {
        value: comprehendEntityRecognizerVpcConfigToHclTerraform(this._vpcConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComprehendEntityRecognizerVpcConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
