/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/sagemaker_endpoint_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSagemakerEndpointConfigAConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/sagemaker_endpoint_config#id DataAwsccSagemakerEndpointConfigA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig {
}

export function dataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigToTerraform(struct?: DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_concurrent_invocations_per_instance - computed: true, optional: false, required: false
  public get maxConcurrentInvocationsPerInstance() {
    return this.getNumberAttribute('max_concurrent_invocations_per_instance');
  }
}
export interface DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig {
}

export function dataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigToTerraform(struct?: DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_topic - computed: true, optional: false, required: false
  public get errorTopic() {
    return this.getStringAttribute('error_topic');
  }

  // include_inference_response_in - computed: true, optional: false, required: false
  public get includeInferenceResponseIn() {
    return this.getListAttribute('include_inference_response_in');
  }

  // success_topic - computed: true, optional: false, required: false
  public get successTopic() {
    return this.getStringAttribute('success_topic');
  }
}
export interface DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig {
}

export function dataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigToTerraform(struct?: DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // notification_config - computed: true, optional: false, required: false
  private _notificationConfig = new DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference(this, "notification_config");
  public get notificationConfig() {
    return this._notificationConfig;
  }

  // s3_failure_path - computed: true, optional: false, required: false
  public get s3FailurePath() {
    return this.getStringAttribute('s3_failure_path');
  }

  // s3_output_path - computed: true, optional: false, required: false
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
}
export interface DataAwsccSagemakerEndpointConfigAsyncInferenceConfig {
}

export function dataAwsccSagemakerEndpointConfigAsyncInferenceConfigToTerraform(struct?: DataAwsccSagemakerEndpointConfigAsyncInferenceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigAsyncInferenceConfigToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigAsyncInferenceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerEndpointConfigAsyncInferenceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigAsyncInferenceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_config - computed: true, optional: false, required: false
  private _clientConfig = new DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference(this, "client_config");
  public get clientConfig() {
    return this._clientConfig;
  }

  // output_config - computed: true, optional: false, required: false
  private _outputConfig = new DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference(this, "output_config");
  public get outputConfig() {
    return this._outputConfig;
  }
}
export interface DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader {
}

export function dataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderToTerraform(struct?: DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // csv_content_types - computed: true, optional: false, required: false
  public get csvContentTypes() {
    return this.getListAttribute('csv_content_types');
  }

  // json_content_types - computed: true, optional: false, required: false
  public get jsonContentTypes() {
    return this.getListAttribute('json_content_types');
  }
}
export interface DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions {
}

export function dataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsToTerraform(struct?: DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capture_mode - computed: true, optional: false, required: false
  public get captureMode() {
    return this.getStringAttribute('capture_mode');
  }
}

export class DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference {
    return new DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerEndpointConfigDataCaptureConfig {
}

export function dataAwsccSagemakerEndpointConfigDataCaptureConfigToTerraform(struct?: DataAwsccSagemakerEndpointConfigDataCaptureConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigDataCaptureConfigToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigDataCaptureConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerEndpointConfigDataCaptureConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigDataCaptureConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capture_content_type_header - computed: true, optional: false, required: false
  private _captureContentTypeHeader = new DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference(this, "capture_content_type_header");
  public get captureContentTypeHeader() {
    return this._captureContentTypeHeader;
  }

  // capture_options - computed: true, optional: false, required: false
  private _captureOptions = new DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList(this, "capture_options", false);
  public get captureOptions() {
    return this._captureOptions;
  }

  // destination_s3_uri - computed: true, optional: false, required: false
  public get destinationS3Uri() {
    return this.getStringAttribute('destination_s3_uri');
  }

  // enable_capture - computed: true, optional: false, required: false
  public get enableCapture() {
    return this.getBooleanAttribute('enable_capture');
  }

  // initial_sampling_percentage - computed: true, optional: false, required: false
  public get initialSamplingPercentage() {
    return this.getNumberAttribute('initial_sampling_percentage');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
}
export interface DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig {
}

export function dataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigToTerraform(struct?: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_template - computed: true, optional: false, required: false
  public get contentTemplate() {
    return this.getStringAttribute('content_template');
  }

  // feature_headers - computed: true, optional: false, required: false
  public get featureHeaders() {
    return this.getListAttribute('feature_headers');
  }

  // feature_types - computed: true, optional: false, required: false
  public get featureTypes() {
    return this.getListAttribute('feature_types');
  }

  // features_attribute - computed: true, optional: false, required: false
  public get featuresAttribute() {
    return this.getStringAttribute('features_attribute');
  }

  // label_attribute - computed: true, optional: false, required: false
  public get labelAttribute() {
    return this.getStringAttribute('label_attribute');
  }

  // label_headers - computed: true, optional: false, required: false
  public get labelHeaders() {
    return this.getListAttribute('label_headers');
  }

  // label_index - computed: true, optional: false, required: false
  public get labelIndex() {
    return this.getNumberAttribute('label_index');
  }

  // max_payload_in_mb - computed: true, optional: false, required: false
  public get maxPayloadInMb() {
    return this.getNumberAttribute('max_payload_in_mb');
  }

  // max_record_count - computed: true, optional: false, required: false
  public get maxRecordCount() {
    return this.getNumberAttribute('max_record_count');
  }

  // probability_attribute - computed: true, optional: false, required: false
  public get probabilityAttribute() {
    return this.getStringAttribute('probability_attribute');
  }

  // probability_index - computed: true, optional: false, required: false
  public get probabilityIndex() {
    return this.getNumberAttribute('probability_index');
  }
}
export interface DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig {
}

export function dataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigToTerraform(struct?: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mime_type - computed: true, optional: false, required: false
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }

  // shap_baseline - computed: true, optional: false, required: false
  public get shapBaseline() {
    return this.getStringAttribute('shap_baseline');
  }

  // shap_baseline_uri - computed: true, optional: false, required: false
  public get shapBaselineUri() {
    return this.getStringAttribute('shap_baseline_uri');
  }
}
export interface DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig {
}

export function dataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigToTerraform(struct?: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // granularity - computed: true, optional: false, required: false
  public get granularity() {
    return this.getStringAttribute('granularity');
  }

  // language - computed: true, optional: false, required: false
  public get language() {
    return this.getStringAttribute('language');
  }
}
export interface DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig {
}

export function dataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigToTerraform(struct?: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number_of_samples - computed: true, optional: false, required: false
  public get numberOfSamples() {
    return this.getNumberAttribute('number_of_samples');
  }

  // seed - computed: true, optional: false, required: false
  public get seed() {
    return this.getNumberAttribute('seed');
  }

  // shap_baseline_config - computed: true, optional: false, required: false
  private _shapBaselineConfig = new DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference(this, "shap_baseline_config");
  public get shapBaselineConfig() {
    return this._shapBaselineConfig;
  }

  // text_config - computed: true, optional: false, required: false
  private _textConfig = new DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference(this, "text_config");
  public get textConfig() {
    return this._textConfig;
  }

  // use_logit - computed: true, optional: false, required: false
  public get useLogit() {
    return this.getBooleanAttribute('use_logit');
  }
}
export interface DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig {
}

export function dataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigToTerraform(struct?: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_explanations - computed: true, optional: false, required: false
  public get enableExplanations() {
    return this.getStringAttribute('enable_explanations');
  }

  // inference_config - computed: true, optional: false, required: false
  private _inferenceConfig = new DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference(this, "inference_config");
  public get inferenceConfig() {
    return this._inferenceConfig;
  }

  // shap_config - computed: true, optional: false, required: false
  private _shapConfig = new DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference(this, "shap_config");
  public get shapConfig() {
    return this._shapConfig;
  }
}
export interface DataAwsccSagemakerEndpointConfigExplainerConfig {
}

export function dataAwsccSagemakerEndpointConfigExplainerConfigToTerraform(struct?: DataAwsccSagemakerEndpointConfigExplainerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigExplainerConfigToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigExplainerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerEndpointConfigExplainerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigExplainerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clarify_explainer_config - computed: true, optional: false, required: false
  private _clarifyExplainerConfig = new DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference(this, "clarify_explainer_config");
  public get clarifyExplainerConfig() {
    return this._clarifyExplainerConfig;
  }
}
export interface DataAwsccSagemakerEndpointConfigMetricsConfig {
}

export function dataAwsccSagemakerEndpointConfigMetricsConfigToTerraform(struct?: DataAwsccSagemakerEndpointConfigMetricsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigMetricsConfigToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigMetricsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerEndpointConfigMetricsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigMetricsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_detailed_observability - computed: true, optional: false, required: false
  public get enableDetailedObservability() {
    return this.getBooleanAttribute('enable_detailed_observability');
  }

  // enable_enhanced_metrics - computed: true, optional: false, required: false
  public get enableEnhancedMetrics() {
    return this.getBooleanAttribute('enable_enhanced_metrics');
  }

  // metric_publish_frequency_in_seconds - computed: true, optional: false, required: false
  public get metricPublishFrequencyInSeconds() {
    return this.getNumberAttribute('metric_publish_frequency_in_seconds');
  }
}
export interface DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig {
}

export function dataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigToTerraform(struct?: DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_reservation_preference - computed: true, optional: false, required: false
  public get capacityReservationPreference() {
    return this.getStringAttribute('capacity_reservation_preference');
  }

  // ml_reservation_arn - computed: true, optional: false, required: false
  public get mlReservationArn() {
    return this.getStringAttribute('ml_reservation_arn');
  }
}
export interface DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig {
}

export function dataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigToTerraform(struct?: DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_s3_uri - computed: true, optional: false, required: false
  public get destinationS3Uri() {
    return this.getStringAttribute('destination_s3_uri');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
}
export interface DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools {
}

export function dataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsToTerraform(struct?: DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // model_name_override - computed: true, optional: false, required: false
  public get modelNameOverride() {
    return this.getStringAttribute('model_name_override');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }
}

export class DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference {
    return new DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy {
}

export function dataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyToTerraform(struct?: DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cooldown_in_minutes - computed: true, optional: false, required: false
  public get cooldownInMinutes() {
    return this.getNumberAttribute('cooldown_in_minutes');
  }

  // maximum_step_size - computed: true, optional: false, required: false
  public get maximumStepSize() {
    return this.getNumberAttribute('maximum_step_size');
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
}
export interface DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling {
}

export function dataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingToTerraform(struct?: DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_instance_count - computed: true, optional: false, required: false
  public get maxInstanceCount() {
    return this.getNumberAttribute('max_instance_count');
  }

  // min_instance_count - computed: true, optional: false, required: false
  public get minInstanceCount() {
    return this.getNumberAttribute('min_instance_count');
  }

  // scale_in_policy - computed: true, optional: false, required: false
  private _scaleInPolicy = new DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference(this, "scale_in_policy");
  public get scaleInPolicy() {
    return this._scaleInPolicy;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig {
}

export function dataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigToTerraform(struct?: DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // concurrency_threshold - computed: true, optional: false, required: false
  public get concurrencyThreshold() {
    return this.getNumberAttribute('concurrency_threshold');
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
}
export interface DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig {
}

export function dataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigToTerraform(struct?: DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_aware_routing_config - computed: true, optional: false, required: false
  private _prefixAwareRoutingConfig = new DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference(this, "prefix_aware_routing_config");
  public get prefixAwareRoutingConfig() {
    return this._prefixAwareRoutingConfig;
  }

  // routing_strategy - computed: true, optional: false, required: false
  public get routingStrategy() {
    return this.getStringAttribute('routing_strategy');
  }
}
export interface DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig {
}

export function dataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigToTerraform(struct?: DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_concurrency - computed: true, optional: false, required: false
  public get maxConcurrency() {
    return this.getNumberAttribute('max_concurrency');
  }

  // memory_size_in_mb - computed: true, optional: false, required: false
  public get memorySizeInMb() {
    return this.getNumberAttribute('memory_size_in_mb');
  }

  // provisioned_concurrency - computed: true, optional: false, required: false
  public get provisionedConcurrency() {
    return this.getNumberAttribute('provisioned_concurrency');
  }
}
export interface DataAwsccSagemakerEndpointConfigProductionVariants {
}

export function dataAwsccSagemakerEndpointConfigProductionVariantsToTerraform(struct?: DataAwsccSagemakerEndpointConfigProductionVariants): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigProductionVariantsToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigProductionVariants): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerEndpointConfigProductionVariants | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigProductionVariants | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_reservation_config - computed: true, optional: false, required: false
  private _capacityReservationConfig = new DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference(this, "capacity_reservation_config");
  public get capacityReservationConfig() {
    return this._capacityReservationConfig;
  }

  // container_startup_health_check_timeout_in_seconds - computed: true, optional: false, required: false
  public get containerStartupHealthCheckTimeoutInSeconds() {
    return this.getNumberAttribute('container_startup_health_check_timeout_in_seconds');
  }

  // core_dump_config - computed: true, optional: false, required: false
  private _coreDumpConfig = new DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference(this, "core_dump_config");
  public get coreDumpConfig() {
    return this._coreDumpConfig;
  }

  // enable_ssm_access - computed: true, optional: false, required: false
  public get enableSsmAccess() {
    return this.getBooleanAttribute('enable_ssm_access');
  }

  // inference_ami_version - computed: true, optional: false, required: false
  public get inferenceAmiVersion() {
    return this.getStringAttribute('inference_ami_version');
  }

  // initial_instance_count - computed: true, optional: false, required: false
  public get initialInstanceCount() {
    return this.getNumberAttribute('initial_instance_count');
  }

  // initial_variant_weight - computed: true, optional: false, required: false
  public get initialVariantWeight() {
    return this.getNumberAttribute('initial_variant_weight');
  }

  // instance_pools - computed: true, optional: false, required: false
  private _instancePools = new DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList(this, "instance_pools", false);
  public get instancePools() {
    return this._instancePools;
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // managed_instance_scaling - computed: true, optional: false, required: false
  private _managedInstanceScaling = new DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference(this, "managed_instance_scaling");
  public get managedInstanceScaling() {
    return this._managedInstanceScaling;
  }

  // model_data_download_timeout_in_seconds - computed: true, optional: false, required: false
  public get modelDataDownloadTimeoutInSeconds() {
    return this.getNumberAttribute('model_data_download_timeout_in_seconds');
  }

  // model_name - computed: true, optional: false, required: false
  public get modelName() {
    return this.getStringAttribute('model_name');
  }

  // routing_config - computed: true, optional: false, required: false
  private _routingConfig = new DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference(this, "routing_config");
  public get routingConfig() {
    return this._routingConfig;
  }

  // serverless_config - computed: true, optional: false, required: false
  private _serverlessConfig = new DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference(this, "serverless_config");
  public get serverlessConfig() {
    return this._serverlessConfig;
  }

  // variant_instance_provision_timeout_in_seconds - computed: true, optional: false, required: false
  public get variantInstanceProvisionTimeoutInSeconds() {
    return this.getNumberAttribute('variant_instance_provision_timeout_in_seconds');
  }

  // variant_name - computed: true, optional: false, required: false
  public get variantName() {
    return this.getStringAttribute('variant_name');
  }

  // volume_size_in_gb - computed: true, optional: false, required: false
  public get volumeSizeInGb() {
    return this.getNumberAttribute('volume_size_in_gb');
  }
}

export class DataAwsccSagemakerEndpointConfigProductionVariantsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference {
    return new DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig {
}

export function dataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigToTerraform(struct?: DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_reservation_preference - computed: true, optional: false, required: false
  public get capacityReservationPreference() {
    return this.getStringAttribute('capacity_reservation_preference');
  }

  // ml_reservation_arn - computed: true, optional: false, required: false
  public get mlReservationArn() {
    return this.getStringAttribute('ml_reservation_arn');
  }
}
export interface DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig {
}

export function dataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigToTerraform(struct?: DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_s3_uri - computed: true, optional: false, required: false
  public get destinationS3Uri() {
    return this.getStringAttribute('destination_s3_uri');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
}
export interface DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools {
}

export function dataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsToTerraform(struct?: DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // model_name_override - computed: true, optional: false, required: false
  public get modelNameOverride() {
    return this.getStringAttribute('model_name_override');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }
}

export class DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference {
    return new DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy {
}

export function dataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyToTerraform(struct?: DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cooldown_in_minutes - computed: true, optional: false, required: false
  public get cooldownInMinutes() {
    return this.getNumberAttribute('cooldown_in_minutes');
  }

  // maximum_step_size - computed: true, optional: false, required: false
  public get maximumStepSize() {
    return this.getNumberAttribute('maximum_step_size');
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
}
export interface DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling {
}

export function dataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingToTerraform(struct?: DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_instance_count - computed: true, optional: false, required: false
  public get maxInstanceCount() {
    return this.getNumberAttribute('max_instance_count');
  }

  // min_instance_count - computed: true, optional: false, required: false
  public get minInstanceCount() {
    return this.getNumberAttribute('min_instance_count');
  }

  // scale_in_policy - computed: true, optional: false, required: false
  private _scaleInPolicy = new DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference(this, "scale_in_policy");
  public get scaleInPolicy() {
    return this._scaleInPolicy;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig {
}

export function dataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigToTerraform(struct?: DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // concurrency_threshold - computed: true, optional: false, required: false
  public get concurrencyThreshold() {
    return this.getNumberAttribute('concurrency_threshold');
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
}
export interface DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig {
}

export function dataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigToTerraform(struct?: DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_aware_routing_config - computed: true, optional: false, required: false
  private _prefixAwareRoutingConfig = new DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference(this, "prefix_aware_routing_config");
  public get prefixAwareRoutingConfig() {
    return this._prefixAwareRoutingConfig;
  }

  // routing_strategy - computed: true, optional: false, required: false
  public get routingStrategy() {
    return this.getStringAttribute('routing_strategy');
  }
}
export interface DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig {
}

export function dataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigToTerraform(struct?: DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_concurrency - computed: true, optional: false, required: false
  public get maxConcurrency() {
    return this.getNumberAttribute('max_concurrency');
  }

  // memory_size_in_mb - computed: true, optional: false, required: false
  public get memorySizeInMb() {
    return this.getNumberAttribute('memory_size_in_mb');
  }

  // provisioned_concurrency - computed: true, optional: false, required: false
  public get provisionedConcurrency() {
    return this.getNumberAttribute('provisioned_concurrency');
  }
}
export interface DataAwsccSagemakerEndpointConfigShadowProductionVariants {
}

export function dataAwsccSagemakerEndpointConfigShadowProductionVariantsToTerraform(struct?: DataAwsccSagemakerEndpointConfigShadowProductionVariants): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigShadowProductionVariantsToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigShadowProductionVariants): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerEndpointConfigShadowProductionVariants | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigShadowProductionVariants | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_reservation_config - computed: true, optional: false, required: false
  private _capacityReservationConfig = new DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference(this, "capacity_reservation_config");
  public get capacityReservationConfig() {
    return this._capacityReservationConfig;
  }

  // container_startup_health_check_timeout_in_seconds - computed: true, optional: false, required: false
  public get containerStartupHealthCheckTimeoutInSeconds() {
    return this.getNumberAttribute('container_startup_health_check_timeout_in_seconds');
  }

  // core_dump_config - computed: true, optional: false, required: false
  private _coreDumpConfig = new DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference(this, "core_dump_config");
  public get coreDumpConfig() {
    return this._coreDumpConfig;
  }

  // enable_ssm_access - computed: true, optional: false, required: false
  public get enableSsmAccess() {
    return this.getBooleanAttribute('enable_ssm_access');
  }

  // inference_ami_version - computed: true, optional: false, required: false
  public get inferenceAmiVersion() {
    return this.getStringAttribute('inference_ami_version');
  }

  // initial_instance_count - computed: true, optional: false, required: false
  public get initialInstanceCount() {
    return this.getNumberAttribute('initial_instance_count');
  }

  // initial_variant_weight - computed: true, optional: false, required: false
  public get initialVariantWeight() {
    return this.getNumberAttribute('initial_variant_weight');
  }

  // instance_pools - computed: true, optional: false, required: false
  private _instancePools = new DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList(this, "instance_pools", false);
  public get instancePools() {
    return this._instancePools;
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // managed_instance_scaling - computed: true, optional: false, required: false
  private _managedInstanceScaling = new DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference(this, "managed_instance_scaling");
  public get managedInstanceScaling() {
    return this._managedInstanceScaling;
  }

  // model_data_download_timeout_in_seconds - computed: true, optional: false, required: false
  public get modelDataDownloadTimeoutInSeconds() {
    return this.getNumberAttribute('model_data_download_timeout_in_seconds');
  }

  // model_name - computed: true, optional: false, required: false
  public get modelName() {
    return this.getStringAttribute('model_name');
  }

  // routing_config - computed: true, optional: false, required: false
  private _routingConfig = new DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference(this, "routing_config");
  public get routingConfig() {
    return this._routingConfig;
  }

  // serverless_config - computed: true, optional: false, required: false
  private _serverlessConfig = new DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference(this, "serverless_config");
  public get serverlessConfig() {
    return this._serverlessConfig;
  }

  // variant_instance_provision_timeout_in_seconds - computed: true, optional: false, required: false
  public get variantInstanceProvisionTimeoutInSeconds() {
    return this.getNumberAttribute('variant_instance_provision_timeout_in_seconds');
  }

  // variant_name - computed: true, optional: false, required: false
  public get variantName() {
    return this.getStringAttribute('variant_name');
  }

  // volume_size_in_gb - computed: true, optional: false, required: false
  public get volumeSizeInGb() {
    return this.getNumberAttribute('volume_size_in_gb');
  }
}

export class DataAwsccSagemakerEndpointConfigShadowProductionVariantsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference {
    return new DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerEndpointConfigTags {
}

export function dataAwsccSagemakerEndpointConfigTagsToTerraform(struct?: DataAwsccSagemakerEndpointConfigTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigTagsToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerEndpointConfigTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigTags | undefined) {
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

export class DataAwsccSagemakerEndpointConfigTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerEndpointConfigTagsOutputReference {
    return new DataAwsccSagemakerEndpointConfigTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerEndpointConfigVpcConfig {
}

export function dataAwsccSagemakerEndpointConfigVpcConfigToTerraform(struct?: DataAwsccSagemakerEndpointConfigVpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerEndpointConfigVpcConfigToHclTerraform(struct?: DataAwsccSagemakerEndpointConfigVpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerEndpointConfigVpcConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerEndpointConfigVpcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerEndpointConfigVpcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/sagemaker_endpoint_config awscc_sagemaker_endpoint_config}
*/
export class DataAwsccSagemakerEndpointConfigA extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_endpoint_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSagemakerEndpointConfigA resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSagemakerEndpointConfigA to import
  * @param importFromId The id of the existing DataAwsccSagemakerEndpointConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/sagemaker_endpoint_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSagemakerEndpointConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_endpoint_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/sagemaker_endpoint_config awscc_sagemaker_endpoint_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSagemakerEndpointConfigAConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSagemakerEndpointConfigAConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_endpoint_config',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.100.0',
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

  // async_inference_config - computed: true, optional: false, required: false
  private _asyncInferenceConfig = new DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference(this, "async_inference_config");
  public get asyncInferenceConfig() {
    return this._asyncInferenceConfig;
  }

  // data_capture_config - computed: true, optional: false, required: false
  private _dataCaptureConfig = new DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference(this, "data_capture_config");
  public get dataCaptureConfig() {
    return this._dataCaptureConfig;
  }

  // enable_network_isolation - computed: true, optional: false, required: false
  public get enableNetworkIsolation() {
    return this.getBooleanAttribute('enable_network_isolation');
  }

  // endpoint_config_arn - computed: true, optional: false, required: false
  public get endpointConfigArn() {
    return this.getStringAttribute('endpoint_config_arn');
  }

  // endpoint_config_name - computed: true, optional: false, required: false
  public get endpointConfigName() {
    return this.getStringAttribute('endpoint_config_name');
  }

  // execution_role_arn - computed: true, optional: false, required: false
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }

  // explainer_config - computed: true, optional: false, required: false
  private _explainerConfig = new DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference(this, "explainer_config");
  public get explainerConfig() {
    return this._explainerConfig;
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

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // metrics_config - computed: true, optional: false, required: false
  private _metricsConfig = new DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference(this, "metrics_config");
  public get metricsConfig() {
    return this._metricsConfig;
  }

  // production_variants - computed: true, optional: false, required: false
  private _productionVariants = new DataAwsccSagemakerEndpointConfigProductionVariantsList(this, "production_variants", false);
  public get productionVariants() {
    return this._productionVariants;
  }

  // shadow_production_variants - computed: true, optional: false, required: false
  private _shadowProductionVariants = new DataAwsccSagemakerEndpointConfigShadowProductionVariantsList(this, "shadow_production_variants", false);
  public get shadowProductionVariants() {
    return this._shadowProductionVariants;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccSagemakerEndpointConfigTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // vpc_config - computed: true, optional: false, required: false
  private _vpcConfig = new DataAwsccSagemakerEndpointConfigVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
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
