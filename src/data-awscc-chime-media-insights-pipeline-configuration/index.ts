/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/chime_media_insights_pipeline_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccChimeMediaInsightsPipelineConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/chime_media_insights_pipeline_configuration#id DataAwsccChimeMediaInsightsPipelineConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings {
}

export function dataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsToTerraform(struct?: DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsToHclTerraform(struct?: DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_redaction_output - computed: true, optional: false, required: false
  public get contentRedactionOutput() {
    return this.getStringAttribute('content_redaction_output');
  }

  // data_access_role_arn - computed: true, optional: false, required: false
  public get dataAccessRoleArn() {
    return this.getStringAttribute('data_access_role_arn');
  }

  // output_encryption_kms_key_id - computed: true, optional: false, required: false
  public get outputEncryptionKmsKeyId() {
    return this.getStringAttribute('output_encryption_kms_key_id');
  }

  // output_location - computed: true, optional: false, required: false
  public get outputLocation() {
    return this.getStringAttribute('output_location');
  }
}
export interface DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration {
}

export function dataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationToTerraform(struct?: DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationToHclTerraform(struct?: DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // call_analytics_stream_categories - computed: true, optional: false, required: false
  public get callAnalyticsStreamCategories() {
    return this.getListAttribute('call_analytics_stream_categories');
  }

  // content_identification_type - computed: true, optional: false, required: false
  public get contentIdentificationType() {
    return this.getStringAttribute('content_identification_type');
  }

  // content_redaction_type - computed: true, optional: false, required: false
  public get contentRedactionType() {
    return this.getStringAttribute('content_redaction_type');
  }

  // enable_partial_results_stabilization - computed: true, optional: false, required: false
  public get enablePartialResultsStabilization() {
    return this.getBooleanAttribute('enable_partial_results_stabilization');
  }

  // filter_partial_results - computed: true, optional: false, required: false
  public get filterPartialResults() {
    return this.getBooleanAttribute('filter_partial_results');
  }

  // language_code - computed: true, optional: false, required: false
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }

  // language_model_name - computed: true, optional: false, required: false
  public get languageModelName() {
    return this.getStringAttribute('language_model_name');
  }

  // partial_results_stability - computed: true, optional: false, required: false
  public get partialResultsStability() {
    return this.getStringAttribute('partial_results_stability');
  }

  // pii_entity_types - computed: true, optional: false, required: false
  public get piiEntityTypes() {
    return this.getStringAttribute('pii_entity_types');
  }

  // post_call_analytics_settings - computed: true, optional: false, required: false
  private _postCallAnalyticsSettings = new DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference(this, "post_call_analytics_settings");
  public get postCallAnalyticsSettings() {
    return this._postCallAnalyticsSettings;
  }

  // vocabulary_filter_method - computed: true, optional: false, required: false
  public get vocabularyFilterMethod() {
    return this.getStringAttribute('vocabulary_filter_method');
  }

  // vocabulary_filter_name - computed: true, optional: false, required: false
  public get vocabularyFilterName() {
    return this.getStringAttribute('vocabulary_filter_name');
  }

  // vocabulary_name - computed: true, optional: false, required: false
  public get vocabularyName() {
    return this.getStringAttribute('vocabulary_name');
  }
}
export interface DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration {
}

export function dataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationToTerraform(struct?: DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationToHclTerraform(struct?: DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_identification_type - computed: true, optional: false, required: false
  public get contentIdentificationType() {
    return this.getStringAttribute('content_identification_type');
  }

  // content_redaction_type - computed: true, optional: false, required: false
  public get contentRedactionType() {
    return this.getStringAttribute('content_redaction_type');
  }

  // enable_partial_results_stabilization - computed: true, optional: false, required: false
  public get enablePartialResultsStabilization() {
    return this.getBooleanAttribute('enable_partial_results_stabilization');
  }

  // filter_partial_results - computed: true, optional: false, required: false
  public get filterPartialResults() {
    return this.getBooleanAttribute('filter_partial_results');
  }

  // identify_language - computed: true, optional: false, required: false
  public get identifyLanguage() {
    return this.getBooleanAttribute('identify_language');
  }

  // identify_multiple_languages - computed: true, optional: false, required: false
  public get identifyMultipleLanguages() {
    return this.getBooleanAttribute('identify_multiple_languages');
  }

  // language_code - computed: true, optional: false, required: false
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }

  // language_model_name - computed: true, optional: false, required: false
  public get languageModelName() {
    return this.getStringAttribute('language_model_name');
  }

  // language_options - computed: true, optional: false, required: false
  public get languageOptions() {
    return this.getStringAttribute('language_options');
  }

  // partial_results_stability - computed: true, optional: false, required: false
  public get partialResultsStability() {
    return this.getStringAttribute('partial_results_stability');
  }

  // pii_entity_types - computed: true, optional: false, required: false
  public get piiEntityTypes() {
    return this.getStringAttribute('pii_entity_types');
  }

  // preferred_language - computed: true, optional: false, required: false
  public get preferredLanguage() {
    return this.getStringAttribute('preferred_language');
  }

  // show_speaker_label - computed: true, optional: false, required: false
  public get showSpeakerLabel() {
    return this.getBooleanAttribute('show_speaker_label');
  }

  // vocabulary_filter_method - computed: true, optional: false, required: false
  public get vocabularyFilterMethod() {
    return this.getStringAttribute('vocabulary_filter_method');
  }

  // vocabulary_filter_name - computed: true, optional: false, required: false
  public get vocabularyFilterName() {
    return this.getStringAttribute('vocabulary_filter_name');
  }

  // vocabulary_filter_names - computed: true, optional: false, required: false
  public get vocabularyFilterNames() {
    return this.getStringAttribute('vocabulary_filter_names');
  }

  // vocabulary_name - computed: true, optional: false, required: false
  public get vocabularyName() {
    return this.getStringAttribute('vocabulary_name');
  }

  // vocabulary_names - computed: true, optional: false, required: false
  public get vocabularyNames() {
    return this.getStringAttribute('vocabulary_names');
  }
}
export interface DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration {
}

export function dataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationToTerraform(struct?: DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationToHclTerraform(struct?: DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insights_target - computed: true, optional: false, required: false
  public get insightsTarget() {
    return this.getStringAttribute('insights_target');
  }
}
export interface DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration {
}

export function dataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationToTerraform(struct?: DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationToHclTerraform(struct?: DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // recording_file_format - computed: true, optional: false, required: false
  public get recordingFileFormat() {
    return this.getStringAttribute('recording_file_format');
  }
}
export interface DataAwsccChimeMediaInsightsPipelineConfigurationElements {
}

export function dataAwsccChimeMediaInsightsPipelineConfigurationElementsToTerraform(struct?: DataAwsccChimeMediaInsightsPipelineConfigurationElements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccChimeMediaInsightsPipelineConfigurationElementsToHclTerraform(struct?: DataAwsccChimeMediaInsightsPipelineConfigurationElements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccChimeMediaInsightsPipelineConfigurationElements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccChimeMediaInsightsPipelineConfigurationElements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // amazon_transcribe_call_analytics_processor_configuration - computed: true, optional: false, required: false
  private _amazonTranscribeCallAnalyticsProcessorConfiguration = new DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference(this, "amazon_transcribe_call_analytics_processor_configuration");
  public get amazonTranscribeCallAnalyticsProcessorConfiguration() {
    return this._amazonTranscribeCallAnalyticsProcessorConfiguration;
  }

  // amazon_transcribe_processor_configuration - computed: true, optional: false, required: false
  private _amazonTranscribeProcessorConfiguration = new DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference(this, "amazon_transcribe_processor_configuration");
  public get amazonTranscribeProcessorConfiguration() {
    return this._amazonTranscribeProcessorConfiguration;
  }

  // kinesis_data_stream_sink_configuration - computed: true, optional: false, required: false
  private _kinesisDataStreamSinkConfiguration = new DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference(this, "kinesis_data_stream_sink_configuration");
  public get kinesisDataStreamSinkConfiguration() {
    return this._kinesisDataStreamSinkConfiguration;
  }

  // s3_recording_sink_configuration - computed: true, optional: false, required: false
  private _s3RecordingSinkConfiguration = new DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference(this, "s3_recording_sink_configuration");
  public get s3RecordingSinkConfiguration() {
    return this._s3RecordingSinkConfiguration;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccChimeMediaInsightsPipelineConfigurationElementsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference {
    return new DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration {
}

export function dataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationToTerraform(struct?: DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationToHclTerraform(struct?: DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
}
export interface DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration {
}

export function dataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationToTerraform(struct?: DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationToHclTerraform(struct?: DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // keywords - computed: true, optional: false, required: false
  public get keywords() {
    return this.getListAttribute('keywords');
  }

  // negate - computed: true, optional: false, required: false
  public get negate() {
    return this.getBooleanAttribute('negate');
  }

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
}
export interface DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration {
}

export function dataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationToTerraform(struct?: DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationToHclTerraform(struct?: DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }

  // sentiment_type - computed: true, optional: false, required: false
  public get sentimentType() {
    return this.getStringAttribute('sentiment_type');
  }

  // time_period - computed: true, optional: false, required: false
  public get timePeriod() {
    return this.getNumberAttribute('time_period');
  }
}
export interface DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules {
}

export function dataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesToTerraform(struct?: DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesToHclTerraform(struct?: DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // issue_detection_configuration - computed: true, optional: false, required: false
  private _issueDetectionConfiguration = new DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference(this, "issue_detection_configuration");
  public get issueDetectionConfiguration() {
    return this._issueDetectionConfiguration;
  }

  // keyword_match_configuration - computed: true, optional: false, required: false
  private _keywordMatchConfiguration = new DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference(this, "keyword_match_configuration");
  public get keywordMatchConfiguration() {
    return this._keywordMatchConfiguration;
  }

  // sentiment_configuration - computed: true, optional: false, required: false
  private _sentimentConfiguration = new DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference(this, "sentiment_configuration");
  public get sentimentConfiguration() {
    return this._sentimentConfiguration;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference {
    return new DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration {
}

export function dataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationToTerraform(struct?: DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationToHclTerraform(struct?: DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}
export interface DataAwsccChimeMediaInsightsPipelineConfigurationTags {
}

export function dataAwsccChimeMediaInsightsPipelineConfigurationTagsToTerraform(struct?: DataAwsccChimeMediaInsightsPipelineConfigurationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccChimeMediaInsightsPipelineConfigurationTagsToHclTerraform(struct?: DataAwsccChimeMediaInsightsPipelineConfigurationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccChimeMediaInsightsPipelineConfigurationTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccChimeMediaInsightsPipelineConfigurationTags | undefined) {
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

export class DataAwsccChimeMediaInsightsPipelineConfigurationTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference {
    return new DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/chime_media_insights_pipeline_configuration awscc_chime_media_insights_pipeline_configuration}
*/
export class DataAwsccChimeMediaInsightsPipelineConfiguration extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_chime_media_insights_pipeline_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccChimeMediaInsightsPipelineConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccChimeMediaInsightsPipelineConfiguration to import
  * @param importFromId The id of the existing DataAwsccChimeMediaInsightsPipelineConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/chime_media_insights_pipeline_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccChimeMediaInsightsPipelineConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_chime_media_insights_pipeline_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/chime_media_insights_pipeline_configuration awscc_chime_media_insights_pipeline_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccChimeMediaInsightsPipelineConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccChimeMediaInsightsPipelineConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_chime_media_insights_pipeline_configuration',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.102.0',
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

  // created_timestamp - computed: true, optional: false, required: false
  public get createdTimestamp() {
    return this.getStringAttribute('created_timestamp');
  }

  // elements - computed: true, optional: false, required: false
  private _elements = new DataAwsccChimeMediaInsightsPipelineConfigurationElementsList(this, "elements", false);
  public get elements() {
    return this._elements;
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

  // media_insights_pipeline_configuration_arn - computed: true, optional: false, required: false
  public get mediaInsightsPipelineConfigurationArn() {
    return this.getStringAttribute('media_insights_pipeline_configuration_arn');
  }

  // media_insights_pipeline_configuration_id - computed: true, optional: false, required: false
  public get mediaInsightsPipelineConfigurationId() {
    return this.getStringAttribute('media_insights_pipeline_configuration_id');
  }

  // media_insights_pipeline_configuration_name - computed: true, optional: false, required: false
  public get mediaInsightsPipelineConfigurationName() {
    return this.getStringAttribute('media_insights_pipeline_configuration_name');
  }

  // real_time_alert_configuration - computed: true, optional: false, required: false
  private _realTimeAlertConfiguration = new DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference(this, "real_time_alert_configuration");
  public get realTimeAlertConfiguration() {
    return this._realTimeAlertConfiguration;
  }

  // resource_access_role_arn - computed: true, optional: false, required: false
  public get resourceAccessRoleArn() {
    return this.getStringAttribute('resource_access_role_arn');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccChimeMediaInsightsPipelineConfigurationTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // updated_timestamp - computed: true, optional: false, required: false
  public get updatedTimestamp() {
    return this.getStringAttribute('updated_timestamp');
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
