# `lookoutequipmentInferenceScheduler` Submodule <a name="`lookoutequipmentInferenceScheduler` Submodule" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LookoutequipmentInferenceScheduler <a name="LookoutequipmentInferenceScheduler" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler awscc_lookoutequipment_inference_scheduler}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer"></a>

```java
import io.cdktn.providers.awscc.lookoutequipment_inference_scheduler.LookoutequipmentInferenceScheduler;

LookoutequipmentInferenceScheduler.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataInputConfiguration(LookoutequipmentInferenceSchedulerDataInputConfiguration)
    .dataOutputConfiguration(LookoutequipmentInferenceSchedulerDataOutputConfiguration)
    .dataUploadFrequency(java.lang.String)
    .modelName(java.lang.String)
    .roleArn(java.lang.String)
//  .dataDelayOffsetInMinutes(java.lang.Number)
//  .inferenceSchedulerName(java.lang.String)
//  .serverSideKmsKeyId(java.lang.String)
//  .tags(IResolvable|java.util.List<LookoutequipmentInferenceSchedulerTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.dataInputConfiguration">dataInputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfiguration</a></code> | Specifies configuration information for the input data for the inference scheduler, including delimiter, format, and dataset location. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.dataOutputConfiguration">dataOutputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfiguration</a></code> | Specifies configuration information for the output results for the inference scheduler, including the S3 location for the output. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.dataUploadFrequency">dataUploadFrequency</a></code> | <code>java.lang.String</code> | How often data is uploaded to the source S3 bucket for the input data. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.modelName">modelName</a></code> | <code>java.lang.String</code> | The name of the previously trained ML model being used to create the inference scheduler. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of a role with permission to access the data source being used for the inference. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.dataDelayOffsetInMinutes">dataDelayOffsetInMinutes</a></code> | <code>java.lang.Number</code> | A period of time (in minutes) by which inference on the data is delayed after the data starts. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.inferenceSchedulerName">inferenceSchedulerName</a></code> | <code>java.lang.String</code> | The name of the inference scheduler being created. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.serverSideKmsKeyId">serverSideKmsKeyId</a></code> | <code>java.lang.String</code> | Provides the identifier of the AWS KMS customer master key (CMK) used to encrypt inference scheduler data by Amazon Lookout for Equipment. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>></code> | Any tags associated with the inference scheduler. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataInputConfiguration`<sup>Required</sup> <a name="dataInputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.dataInputConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfiguration</a>

Specifies configuration information for the input data for the inference scheduler, including delimiter, format, and dataset location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#data_input_configuration LookoutequipmentInferenceScheduler#data_input_configuration}

---

##### `dataOutputConfiguration`<sup>Required</sup> <a name="dataOutputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.dataOutputConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfiguration</a>

Specifies configuration information for the output results for the inference scheduler, including the S3 location for the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#data_output_configuration LookoutequipmentInferenceScheduler#data_output_configuration}

---

##### `dataUploadFrequency`<sup>Required</sup> <a name="dataUploadFrequency" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.dataUploadFrequency"></a>

- *Type:* java.lang.String

How often data is uploaded to the source S3 bucket for the input data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#data_upload_frequency LookoutequipmentInferenceScheduler#data_upload_frequency}

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.modelName"></a>

- *Type:* java.lang.String

The name of the previously trained ML model being used to create the inference scheduler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#model_name LookoutequipmentInferenceScheduler#model_name}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of a role with permission to access the data source being used for the inference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#role_arn LookoutequipmentInferenceScheduler#role_arn}

---

##### `dataDelayOffsetInMinutes`<sup>Optional</sup> <a name="dataDelayOffsetInMinutes" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.dataDelayOffsetInMinutes"></a>

- *Type:* java.lang.Number

A period of time (in minutes) by which inference on the data is delayed after the data starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#data_delay_offset_in_minutes LookoutequipmentInferenceScheduler#data_delay_offset_in_minutes}

---

##### `inferenceSchedulerName`<sup>Optional</sup> <a name="inferenceSchedulerName" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.inferenceSchedulerName"></a>

- *Type:* java.lang.String

The name of the inference scheduler being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#inference_scheduler_name LookoutequipmentInferenceScheduler#inference_scheduler_name}

---

##### `serverSideKmsKeyId`<sup>Optional</sup> <a name="serverSideKmsKeyId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.serverSideKmsKeyId"></a>

- *Type:* java.lang.String

Provides the identifier of the AWS KMS customer master key (CMK) used to encrypt inference scheduler data by Amazon Lookout for Equipment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#server_side_kms_key_id LookoutequipmentInferenceScheduler#server_side_kms_key_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>>

Any tags associated with the inference scheduler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#tags LookoutequipmentInferenceScheduler#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putDataInputConfiguration">putDataInputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putDataOutputConfiguration">putDataOutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetDataDelayOffsetInMinutes">resetDataDelayOffsetInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetInferenceSchedulerName">resetInferenceSchedulerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetServerSideKmsKeyId">resetServerSideKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataInputConfiguration` <a name="putDataInputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putDataInputConfiguration"></a>

```java
public void putDataInputConfiguration(LookoutequipmentInferenceSchedulerDataInputConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putDataInputConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfiguration</a>

---

##### `putDataOutputConfiguration` <a name="putDataOutputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putDataOutputConfiguration"></a>

```java
public void putDataOutputConfiguration(LookoutequipmentInferenceSchedulerDataOutputConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putDataOutputConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<LookoutequipmentInferenceSchedulerTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>>

---

##### `resetDataDelayOffsetInMinutes` <a name="resetDataDelayOffsetInMinutes" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetDataDelayOffsetInMinutes"></a>

```java
public void resetDataDelayOffsetInMinutes()
```

##### `resetInferenceSchedulerName` <a name="resetInferenceSchedulerName" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetInferenceSchedulerName"></a>

```java
public void resetInferenceSchedulerName()
```

##### `resetServerSideKmsKeyId` <a name="resetServerSideKmsKeyId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetServerSideKmsKeyId"></a>

```java
public void resetServerSideKmsKeyId()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LookoutequipmentInferenceScheduler resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isConstruct"></a>

```java
import io.cdktn.providers.awscc.lookoutequipment_inference_scheduler.LookoutequipmentInferenceScheduler;

LookoutequipmentInferenceScheduler.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.lookoutequipment_inference_scheduler.LookoutequipmentInferenceScheduler;

LookoutequipmentInferenceScheduler.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.lookoutequipment_inference_scheduler.LookoutequipmentInferenceScheduler;

LookoutequipmentInferenceScheduler.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.lookoutequipment_inference_scheduler.LookoutequipmentInferenceScheduler;

LookoutequipmentInferenceScheduler.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LookoutequipmentInferenceScheduler.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LookoutequipmentInferenceScheduler resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LookoutequipmentInferenceScheduler to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LookoutequipmentInferenceScheduler that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LookoutequipmentInferenceScheduler to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataInputConfiguration">dataInputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataOutputConfiguration">dataOutputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.inferenceSchedulerArn">inferenceSchedulerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList">LookoutequipmentInferenceSchedulerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataDelayOffsetInMinutesInput">dataDelayOffsetInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataInputConfigurationInput">dataInputConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataOutputConfigurationInput">dataOutputConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataUploadFrequencyInput">dataUploadFrequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.inferenceSchedulerNameInput">inferenceSchedulerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.modelNameInput">modelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.serverSideKmsKeyIdInput">serverSideKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataDelayOffsetInMinutes">dataDelayOffsetInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataUploadFrequency">dataUploadFrequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.inferenceSchedulerName">inferenceSchedulerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.modelName">modelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.serverSideKmsKeyId">serverSideKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataInputConfiguration`<sup>Required</sup> <a name="dataInputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataInputConfiguration"></a>

```java
public LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference getDataInputConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference</a>

---

##### `dataOutputConfiguration`<sup>Required</sup> <a name="dataOutputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataOutputConfiguration"></a>

```java
public LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference getDataOutputConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inferenceSchedulerArn`<sup>Required</sup> <a name="inferenceSchedulerArn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.inferenceSchedulerArn"></a>

```java
public java.lang.String getInferenceSchedulerArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.tags"></a>

```java
public LookoutequipmentInferenceSchedulerTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList">LookoutequipmentInferenceSchedulerTagsList</a>

---

##### `dataDelayOffsetInMinutesInput`<sup>Optional</sup> <a name="dataDelayOffsetInMinutesInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataDelayOffsetInMinutesInput"></a>

```java
public java.lang.Number getDataDelayOffsetInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `dataInputConfigurationInput`<sup>Optional</sup> <a name="dataInputConfigurationInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataInputConfigurationInput"></a>

```java
public IResolvable|LookoutequipmentInferenceSchedulerDataInputConfiguration getDataInputConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfiguration</a>

---

##### `dataOutputConfigurationInput`<sup>Optional</sup> <a name="dataOutputConfigurationInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataOutputConfigurationInput"></a>

```java
public IResolvable|LookoutequipmentInferenceSchedulerDataOutputConfiguration getDataOutputConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfiguration</a>

---

##### `dataUploadFrequencyInput`<sup>Optional</sup> <a name="dataUploadFrequencyInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataUploadFrequencyInput"></a>

```java
public java.lang.String getDataUploadFrequencyInput();
```

- *Type:* java.lang.String

---

##### `inferenceSchedulerNameInput`<sup>Optional</sup> <a name="inferenceSchedulerNameInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.inferenceSchedulerNameInput"></a>

```java
public java.lang.String getInferenceSchedulerNameInput();
```

- *Type:* java.lang.String

---

##### `modelNameInput`<sup>Optional</sup> <a name="modelNameInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.modelNameInput"></a>

```java
public java.lang.String getModelNameInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `serverSideKmsKeyIdInput`<sup>Optional</sup> <a name="serverSideKmsKeyIdInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.serverSideKmsKeyIdInput"></a>

```java
public java.lang.String getServerSideKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.tagsInput"></a>

```java
public IResolvable|java.util.List<LookoutequipmentInferenceSchedulerTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>>

---

##### `dataDelayOffsetInMinutes`<sup>Required</sup> <a name="dataDelayOffsetInMinutes" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataDelayOffsetInMinutes"></a>

```java
public java.lang.Number getDataDelayOffsetInMinutes();
```

- *Type:* java.lang.Number

---

##### `dataUploadFrequency`<sup>Required</sup> <a name="dataUploadFrequency" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.dataUploadFrequency"></a>

```java
public java.lang.String getDataUploadFrequency();
```

- *Type:* java.lang.String

---

##### `inferenceSchedulerName`<sup>Required</sup> <a name="inferenceSchedulerName" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.inferenceSchedulerName"></a>

```java
public java.lang.String getInferenceSchedulerName();
```

- *Type:* java.lang.String

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.modelName"></a>

```java
public java.lang.String getModelName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `serverSideKmsKeyId`<sup>Required</sup> <a name="serverSideKmsKeyId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.serverSideKmsKeyId"></a>

```java
public java.lang.String getServerSideKmsKeyId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceScheduler.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LookoutequipmentInferenceSchedulerConfig <a name="LookoutequipmentInferenceSchedulerConfig" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lookoutequipment_inference_scheduler.LookoutequipmentInferenceSchedulerConfig;

LookoutequipmentInferenceSchedulerConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataInputConfiguration(LookoutequipmentInferenceSchedulerDataInputConfiguration)
    .dataOutputConfiguration(LookoutequipmentInferenceSchedulerDataOutputConfiguration)
    .dataUploadFrequency(java.lang.String)
    .modelName(java.lang.String)
    .roleArn(java.lang.String)
//  .dataDelayOffsetInMinutes(java.lang.Number)
//  .inferenceSchedulerName(java.lang.String)
//  .serverSideKmsKeyId(java.lang.String)
//  .tags(IResolvable|java.util.List<LookoutequipmentInferenceSchedulerTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dataInputConfiguration">dataInputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfiguration</a></code> | Specifies configuration information for the input data for the inference scheduler, including delimiter, format, and dataset location. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dataOutputConfiguration">dataOutputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfiguration</a></code> | Specifies configuration information for the output results for the inference scheduler, including the S3 location for the output. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dataUploadFrequency">dataUploadFrequency</a></code> | <code>java.lang.String</code> | How often data is uploaded to the source S3 bucket for the input data. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.modelName">modelName</a></code> | <code>java.lang.String</code> | The name of the previously trained ML model being used to create the inference scheduler. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of a role with permission to access the data source being used for the inference. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dataDelayOffsetInMinutes">dataDelayOffsetInMinutes</a></code> | <code>java.lang.Number</code> | A period of time (in minutes) by which inference on the data is delayed after the data starts. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.inferenceSchedulerName">inferenceSchedulerName</a></code> | <code>java.lang.String</code> | The name of the inference scheduler being created. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.serverSideKmsKeyId">serverSideKmsKeyId</a></code> | <code>java.lang.String</code> | Provides the identifier of the AWS KMS customer master key (CMK) used to encrypt inference scheduler data by Amazon Lookout for Equipment. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>></code> | Any tags associated with the inference scheduler. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataInputConfiguration`<sup>Required</sup> <a name="dataInputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dataInputConfiguration"></a>

```java
public LookoutequipmentInferenceSchedulerDataInputConfiguration getDataInputConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfiguration</a>

Specifies configuration information for the input data for the inference scheduler, including delimiter, format, and dataset location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#data_input_configuration LookoutequipmentInferenceScheduler#data_input_configuration}

---

##### `dataOutputConfiguration`<sup>Required</sup> <a name="dataOutputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dataOutputConfiguration"></a>

```java
public LookoutequipmentInferenceSchedulerDataOutputConfiguration getDataOutputConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfiguration</a>

Specifies configuration information for the output results for the inference scheduler, including the S3 location for the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#data_output_configuration LookoutequipmentInferenceScheduler#data_output_configuration}

---

##### `dataUploadFrequency`<sup>Required</sup> <a name="dataUploadFrequency" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dataUploadFrequency"></a>

```java
public java.lang.String getDataUploadFrequency();
```

- *Type:* java.lang.String

How often data is uploaded to the source S3 bucket for the input data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#data_upload_frequency LookoutequipmentInferenceScheduler#data_upload_frequency}

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.modelName"></a>

```java
public java.lang.String getModelName();
```

- *Type:* java.lang.String

The name of the previously trained ML model being used to create the inference scheduler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#model_name LookoutequipmentInferenceScheduler#model_name}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of a role with permission to access the data source being used for the inference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#role_arn LookoutequipmentInferenceScheduler#role_arn}

---

##### `dataDelayOffsetInMinutes`<sup>Optional</sup> <a name="dataDelayOffsetInMinutes" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.dataDelayOffsetInMinutes"></a>

```java
public java.lang.Number getDataDelayOffsetInMinutes();
```

- *Type:* java.lang.Number

A period of time (in minutes) by which inference on the data is delayed after the data starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#data_delay_offset_in_minutes LookoutequipmentInferenceScheduler#data_delay_offset_in_minutes}

---

##### `inferenceSchedulerName`<sup>Optional</sup> <a name="inferenceSchedulerName" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.inferenceSchedulerName"></a>

```java
public java.lang.String getInferenceSchedulerName();
```

- *Type:* java.lang.String

The name of the inference scheduler being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#inference_scheduler_name LookoutequipmentInferenceScheduler#inference_scheduler_name}

---

##### `serverSideKmsKeyId`<sup>Optional</sup> <a name="serverSideKmsKeyId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.serverSideKmsKeyId"></a>

```java
public java.lang.String getServerSideKmsKeyId();
```

- *Type:* java.lang.String

Provides the identifier of the AWS KMS customer master key (CMK) used to encrypt inference scheduler data by Amazon Lookout for Equipment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#server_side_kms_key_id LookoutequipmentInferenceScheduler#server_side_kms_key_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerConfig.property.tags"></a>

```java
public IResolvable|java.util.List<LookoutequipmentInferenceSchedulerTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>>

Any tags associated with the inference scheduler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#tags LookoutequipmentInferenceScheduler#tags}

---

### LookoutequipmentInferenceSchedulerDataInputConfiguration <a name="LookoutequipmentInferenceSchedulerDataInputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.lookoutequipment_inference_scheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration;

LookoutequipmentInferenceSchedulerDataInputConfiguration.builder()
    .s3InputConfiguration(LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration)
//  .inferenceInputNameConfiguration(LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration)
//  .inputTimeZoneOffset(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration.property.s3InputConfiguration">s3InputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a></code> | Specifies configuration information for the input data for the inference, including input data S3 location. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration.property.inferenceInputNameConfiguration">inferenceInputNameConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a></code> | Specifies configuration information for the input data for the inference, including timestamp format and delimiter. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration.property.inputTimeZoneOffset">inputTimeZoneOffset</a></code> | <code>java.lang.String</code> | Indicates the difference between your time zone and Greenwich Mean Time (GMT). |

---

##### `s3InputConfiguration`<sup>Required</sup> <a name="s3InputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration.property.s3InputConfiguration"></a>

```java
public LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration getS3InputConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a>

Specifies configuration information for the input data for the inference, including input data S3 location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#s3_input_configuration LookoutequipmentInferenceScheduler#s3_input_configuration}

---

##### `inferenceInputNameConfiguration`<sup>Optional</sup> <a name="inferenceInputNameConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration.property.inferenceInputNameConfiguration"></a>

```java
public LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration getInferenceInputNameConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a>

Specifies configuration information for the input data for the inference, including timestamp format and delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#inference_input_name_configuration LookoutequipmentInferenceScheduler#inference_input_name_configuration}

---

##### `inputTimeZoneOffset`<sup>Optional</sup> <a name="inputTimeZoneOffset" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration.property.inputTimeZoneOffset"></a>

```java
public java.lang.String getInputTimeZoneOffset();
```

- *Type:* java.lang.String

Indicates the difference between your time zone and Greenwich Mean Time (GMT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#input_time_zone_offset LookoutequipmentInferenceScheduler#input_time_zone_offset}

---

### LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration <a name="LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.lookoutequipment_inference_scheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration;

LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration.builder()
//  .componentTimestampDelimiter(java.lang.String)
//  .timestampFormat(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration.property.componentTimestampDelimiter">componentTimestampDelimiter</a></code> | <code>java.lang.String</code> | Indicates the delimiter character used between items in the data. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration.property.timestampFormat">timestampFormat</a></code> | <code>java.lang.String</code> | The format of the timestamp, whether Epoch time, or standard, with or without hyphens (-). |

---

##### `componentTimestampDelimiter`<sup>Optional</sup> <a name="componentTimestampDelimiter" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration.property.componentTimestampDelimiter"></a>

```java
public java.lang.String getComponentTimestampDelimiter();
```

- *Type:* java.lang.String

Indicates the delimiter character used between items in the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#component_timestamp_delimiter LookoutequipmentInferenceScheduler#component_timestamp_delimiter}

---

##### `timestampFormat`<sup>Optional</sup> <a name="timestampFormat" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration.property.timestampFormat"></a>

```java
public java.lang.String getTimestampFormat();
```

- *Type:* java.lang.String

The format of the timestamp, whether Epoch time, or standard, with or without hyphens (-).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#timestamp_format LookoutequipmentInferenceScheduler#timestamp_format}

---

### LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration <a name="LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.lookoutequipment_inference_scheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration;

LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration.builder()
    .bucket(java.lang.String)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#bucket LookoutequipmentInferenceScheduler#bucket}. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#prefix LookoutequipmentInferenceScheduler#prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#bucket LookoutequipmentInferenceScheduler#bucket}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#prefix LookoutequipmentInferenceScheduler#prefix}.

---

### LookoutequipmentInferenceSchedulerDataOutputConfiguration <a name="LookoutequipmentInferenceSchedulerDataOutputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.lookoutequipment_inference_scheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration;

LookoutequipmentInferenceSchedulerDataOutputConfiguration.builder()
    .s3OutputConfiguration(LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration)
//  .kmsKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration.property.s3OutputConfiguration">s3OutputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a></code> | Specifies configuration information for the output results from the inference, including output S3 location. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The ID number for the AWS KMS key used to encrypt the inference output. |

---

##### `s3OutputConfiguration`<sup>Required</sup> <a name="s3OutputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration.property.s3OutputConfiguration"></a>

```java
public LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration getS3OutputConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a>

Specifies configuration information for the output results from the inference, including output S3 location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#s3_output_configuration LookoutequipmentInferenceScheduler#s3_output_configuration}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

The ID number for the AWS KMS key used to encrypt the inference output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#kms_key_id LookoutequipmentInferenceScheduler#kms_key_id}

---

### LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration <a name="LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.lookoutequipment_inference_scheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration;

LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration.builder()
    .bucket(java.lang.String)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#bucket LookoutequipmentInferenceScheduler#bucket}. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#prefix LookoutequipmentInferenceScheduler#prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#bucket LookoutequipmentInferenceScheduler#bucket}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#prefix LookoutequipmentInferenceScheduler#prefix}.

---

### LookoutequipmentInferenceSchedulerTags <a name="LookoutequipmentInferenceSchedulerTags" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.lookoutequipment_inference_scheduler.LookoutequipmentInferenceSchedulerTags;

LookoutequipmentInferenceSchedulerTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags.property.key">key</a></code> | <code>java.lang.String</code> | The key for the specified tag. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the specified tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key for the specified tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#key LookoutequipmentInferenceScheduler#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the specified tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutequipment_inference_scheduler#value LookoutequipmentInferenceScheduler#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference <a name="LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lookoutequipment_inference_scheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference;

new LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resetComponentTimestampDelimiter">resetComponentTimestampDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resetTimestampFormat">resetTimestampFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComponentTimestampDelimiter` <a name="resetComponentTimestampDelimiter" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resetComponentTimestampDelimiter"></a>

```java
public void resetComponentTimestampDelimiter()
```

##### `resetTimestampFormat` <a name="resetTimestampFormat" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resetTimestampFormat"></a>

```java
public void resetTimestampFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.componentTimestampDelimiterInput">componentTimestampDelimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.timestampFormatInput">timestampFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.componentTimestampDelimiter">componentTimestampDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.timestampFormat">timestampFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `componentTimestampDelimiterInput`<sup>Optional</sup> <a name="componentTimestampDelimiterInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.componentTimestampDelimiterInput"></a>

```java
public java.lang.String getComponentTimestampDelimiterInput();
```

- *Type:* java.lang.String

---

##### `timestampFormatInput`<sup>Optional</sup> <a name="timestampFormatInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.timestampFormatInput"></a>

```java
public java.lang.String getTimestampFormatInput();
```

- *Type:* java.lang.String

---

##### `componentTimestampDelimiter`<sup>Required</sup> <a name="componentTimestampDelimiter" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.componentTimestampDelimiter"></a>

```java
public java.lang.String getComponentTimestampDelimiter();
```

- *Type:* java.lang.String

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.timestampFormat"></a>

```java
public java.lang.String getTimestampFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a>

---


### LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference <a name="LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lookoutequipment_inference_scheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference;

new LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.putInferenceInputNameConfiguration">putInferenceInputNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.putS3InputConfiguration">putS3InputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resetInferenceInputNameConfiguration">resetInferenceInputNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resetInputTimeZoneOffset">resetInputTimeZoneOffset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInferenceInputNameConfiguration` <a name="putInferenceInputNameConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.putInferenceInputNameConfiguration"></a>

```java
public void putInferenceInputNameConfiguration(LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.putInferenceInputNameConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a>

---

##### `putS3InputConfiguration` <a name="putS3InputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.putS3InputConfiguration"></a>

```java
public void putS3InputConfiguration(LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.putS3InputConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a>

---

##### `resetInferenceInputNameConfiguration` <a name="resetInferenceInputNameConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resetInferenceInputNameConfiguration"></a>

```java
public void resetInferenceInputNameConfiguration()
```

##### `resetInputTimeZoneOffset` <a name="resetInputTimeZoneOffset" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resetInputTimeZoneOffset"></a>

```java
public void resetInputTimeZoneOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inferenceInputNameConfiguration">inferenceInputNameConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.s3InputConfiguration">s3InputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inferenceInputNameConfigurationInput">inferenceInputNameConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inputTimeZoneOffsetInput">inputTimeZoneOffsetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.s3InputConfigurationInput">s3InputConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inputTimeZoneOffset">inputTimeZoneOffset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inferenceInputNameConfiguration`<sup>Required</sup> <a name="inferenceInputNameConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inferenceInputNameConfiguration"></a>

```java
public LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference getInferenceInputNameConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference</a>

---

##### `s3InputConfiguration`<sup>Required</sup> <a name="s3InputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.s3InputConfiguration"></a>

```java
public LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference getS3InputConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference</a>

---

##### `inferenceInputNameConfigurationInput`<sup>Optional</sup> <a name="inferenceInputNameConfigurationInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inferenceInputNameConfigurationInput"></a>

```java
public IResolvable|LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration getInferenceInputNameConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a>

---

##### `inputTimeZoneOffsetInput`<sup>Optional</sup> <a name="inputTimeZoneOffsetInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inputTimeZoneOffsetInput"></a>

```java
public java.lang.String getInputTimeZoneOffsetInput();
```

- *Type:* java.lang.String

---

##### `s3InputConfigurationInput`<sup>Optional</sup> <a name="s3InputConfigurationInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.s3InputConfigurationInput"></a>

```java
public IResolvable|LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration getS3InputConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a>

---

##### `inputTimeZoneOffset`<sup>Required</sup> <a name="inputTimeZoneOffset" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inputTimeZoneOffset"></a>

```java
public java.lang.String getInputTimeZoneOffset();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|LookoutequipmentInferenceSchedulerDataInputConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfiguration</a>

---


### LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference <a name="LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lookoutequipment_inference_scheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference;

new LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">LookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a>

---


### LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference <a name="LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lookoutequipment_inference_scheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference;

new LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.putS3OutputConfiguration">putS3OutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3OutputConfiguration` <a name="putS3OutputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.putS3OutputConfiguration"></a>

```java
public void putS3OutputConfiguration(LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.putS3OutputConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a>

---

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.s3OutputConfiguration">s3OutputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.s3OutputConfigurationInput">s3OutputConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3OutputConfiguration`<sup>Required</sup> <a name="s3OutputConfiguration" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.s3OutputConfiguration"></a>

```java
public LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference getS3OutputConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference</a>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `s3OutputConfigurationInput`<sup>Optional</sup> <a name="s3OutputConfigurationInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.s3OutputConfigurationInput"></a>

```java
public IResolvable|LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration getS3OutputConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a>

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|LookoutequipmentInferenceSchedulerDataOutputConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfiguration</a>

---


### LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference <a name="LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lookoutequipment_inference_scheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference;

new LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">LookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a>

---


### LookoutequipmentInferenceSchedulerTagsList <a name="LookoutequipmentInferenceSchedulerTagsList" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.lookoutequipment_inference_scheduler.LookoutequipmentInferenceSchedulerTagsList;

new LookoutequipmentInferenceSchedulerTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.get"></a>

```java
public LookoutequipmentInferenceSchedulerTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LookoutequipmentInferenceSchedulerTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>>

---


### LookoutequipmentInferenceSchedulerTagsOutputReference <a name="LookoutequipmentInferenceSchedulerTagsOutputReference" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lookoutequipment_inference_scheduler.LookoutequipmentInferenceSchedulerTagsOutputReference;

new LookoutequipmentInferenceSchedulerTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|LookoutequipmentInferenceSchedulerTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutequipmentInferenceScheduler.LookoutequipmentInferenceSchedulerTags">LookoutequipmentInferenceSchedulerTags</a>

---



