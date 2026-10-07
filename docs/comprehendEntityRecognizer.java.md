# `comprehendEntityRecognizer` Submodule <a name="`comprehendEntityRecognizer` Submodule" id="@cdktn/provider-awscc.comprehendEntityRecognizer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComprehendEntityRecognizer <a name="ComprehendEntityRecognizer" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer awscc_comprehend_entity_recognizer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer.ComprehendEntityRecognizer;

ComprehendEntityRecognizer.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataAccessRoleArn(java.lang.String)
    .inputDataConfig(ComprehendEntityRecognizerInputDataConfig)
    .languageCode(java.lang.String)
    .recognizerName(java.lang.String)
//  .modelKmsKeyId(java.lang.String)
//  .modelPolicy(java.lang.String)
//  .tags(IResolvable|java.util.List<ComprehendEntityRecognizerTags>)
//  .versionName(java.lang.String)
//  .volumeKmsKeyId(java.lang.String)
//  .vpcConfig(ComprehendEntityRecognizerVpcConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.inputDataConfig">inputDataConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig">ComprehendEntityRecognizerInputDataConfig</a></code> | Specifies the format and location of the input data. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.languageCode">languageCode</a></code> | <code>java.lang.String</code> | The language of the input documents. All documents must be in the same language. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.recognizerName">recognizerName</a></code> | <code>java.lang.String</code> | The name given to the entity recognizer. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.modelKmsKeyId">modelKmsKeyId</a></code> | <code>java.lang.String</code> | ID for the AWS KMS key that Amazon Comprehend uses to encrypt trained custom models. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.modelPolicy">modelPolicy</a></code> | <code>java.lang.String</code> | The JSON resource-based policy to attach to your custom entity recognizer model. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags">ComprehendEntityRecognizerTags</a>></code> | Tags to associate with the entity recognizer. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.versionName">versionName</a></code> | <code>java.lang.String</code> | The version name given to the entity recognizer. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.volumeKmsKeyId">volumeKmsKeyId</a></code> | <code>java.lang.String</code> | ID for the AWS KMS key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s). |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig">ComprehendEntityRecognizerVpcConfig</a></code> | Configuration parameters for an optional private VPC containing the resources you are using for your custom entity recognizer. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataAccessRoleArn`<sup>Required</sup> <a name="dataAccessRoleArn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.dataAccessRoleArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#data_access_role_arn ComprehendEntityRecognizer#data_access_role_arn}

---

##### `inputDataConfig`<sup>Required</sup> <a name="inputDataConfig" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.inputDataConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig">ComprehendEntityRecognizerInputDataConfig</a>

Specifies the format and location of the input data.

The S3 bucket containing the input data must be located in the same Region as the entity recognizer being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#input_data_config ComprehendEntityRecognizer#input_data_config}

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.languageCode"></a>

- *Type:* java.lang.String

The language of the input documents. All documents must be in the same language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#language_code ComprehendEntityRecognizer#language_code}

---

##### `recognizerName`<sup>Required</sup> <a name="recognizerName" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.recognizerName"></a>

- *Type:* java.lang.String

The name given to the entity recognizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#recognizer_name ComprehendEntityRecognizer#recognizer_name}

---

##### `modelKmsKeyId`<sup>Optional</sup> <a name="modelKmsKeyId" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.modelKmsKeyId"></a>

- *Type:* java.lang.String

ID for the AWS KMS key that Amazon Comprehend uses to encrypt trained custom models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#model_kms_key_id ComprehendEntityRecognizer#model_kms_key_id}

---

##### `modelPolicy`<sup>Optional</sup> <a name="modelPolicy" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.modelPolicy"></a>

- *Type:* java.lang.String

The JSON resource-based policy to attach to your custom entity recognizer model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#model_policy ComprehendEntityRecognizer#model_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags">ComprehendEntityRecognizerTags</a>>

Tags to associate with the entity recognizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#tags ComprehendEntityRecognizer#tags}

---

##### `versionName`<sup>Optional</sup> <a name="versionName" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.versionName"></a>

- *Type:* java.lang.String

The version name given to the entity recognizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#version_name ComprehendEntityRecognizer#version_name}

---

##### `volumeKmsKeyId`<sup>Optional</sup> <a name="volumeKmsKeyId" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.volumeKmsKeyId"></a>

- *Type:* java.lang.String

ID for the AWS KMS key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#volume_kms_key_id ComprehendEntityRecognizer#volume_kms_key_id}

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.vpcConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig">ComprehendEntityRecognizerVpcConfig</a>

Configuration parameters for an optional private VPC containing the resources you are using for your custom entity recognizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#vpc_config ComprehendEntityRecognizer#vpc_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.putInputDataConfig">putInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetModelKmsKeyId">resetModelKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetModelPolicy">resetModelPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetVersionName">resetVersionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetVolumeKmsKeyId">resetVolumeKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInputDataConfig` <a name="putInputDataConfig" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.putInputDataConfig"></a>

```java
public void putInputDataConfig(ComprehendEntityRecognizerInputDataConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.putInputDataConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig">ComprehendEntityRecognizerInputDataConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ComprehendEntityRecognizerTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags">ComprehendEntityRecognizerTags</a>>

---

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.putVpcConfig"></a>

```java
public void putVpcConfig(ComprehendEntityRecognizerVpcConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig">ComprehendEntityRecognizerVpcConfig</a>

---

##### `resetModelKmsKeyId` <a name="resetModelKmsKeyId" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetModelKmsKeyId"></a>

```java
public void resetModelKmsKeyId()
```

##### `resetModelPolicy` <a name="resetModelPolicy" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetModelPolicy"></a>

```java
public void resetModelPolicy()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetTags"></a>

```java
public void resetTags()
```

##### `resetVersionName` <a name="resetVersionName" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetVersionName"></a>

```java
public void resetVersionName()
```

##### `resetVolumeKmsKeyId` <a name="resetVolumeKmsKeyId" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetVolumeKmsKeyId"></a>

```java
public void resetVolumeKmsKeyId()
```

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetVpcConfig"></a>

```java
public void resetVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComprehendEntityRecognizer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.isConstruct"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer.ComprehendEntityRecognizer;

ComprehendEntityRecognizer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer.ComprehendEntityRecognizer;

ComprehendEntityRecognizer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer.ComprehendEntityRecognizer;

ComprehendEntityRecognizer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer.ComprehendEntityRecognizer;

ComprehendEntityRecognizer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComprehendEntityRecognizer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ComprehendEntityRecognizer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComprehendEntityRecognizer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComprehendEntityRecognizer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ComprehendEntityRecognizer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.inputDataConfig">inputDataConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference">ComprehendEntityRecognizerInputDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList">ComprehendEntityRecognizerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference">ComprehendEntityRecognizerVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.dataAccessRoleArnInput">dataAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.inputDataConfigInput">inputDataConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig">ComprehendEntityRecognizerInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.languageCodeInput">languageCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.modelKmsKeyIdInput">modelKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.modelPolicyInput">modelPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.recognizerNameInput">recognizerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags">ComprehendEntityRecognizerTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.versionNameInput">versionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.volumeKmsKeyIdInput">volumeKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.vpcConfigInput">vpcConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig">ComprehendEntityRecognizerVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.modelKmsKeyId">modelKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.modelPolicy">modelPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.recognizerName">recognizerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.versionName">versionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.volumeKmsKeyId">volumeKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inputDataConfig`<sup>Required</sup> <a name="inputDataConfig" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.inputDataConfig"></a>

```java
public ComprehendEntityRecognizerInputDataConfigOutputReference getInputDataConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference">ComprehendEntityRecognizerInputDataConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.tags"></a>

```java
public ComprehendEntityRecognizerTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList">ComprehendEntityRecognizerTagsList</a>

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.vpcConfig"></a>

```java
public ComprehendEntityRecognizerVpcConfigOutputReference getVpcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference">ComprehendEntityRecognizerVpcConfigOutputReference</a>

---

##### `dataAccessRoleArnInput`<sup>Optional</sup> <a name="dataAccessRoleArnInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.dataAccessRoleArnInput"></a>

```java
public java.lang.String getDataAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `inputDataConfigInput`<sup>Optional</sup> <a name="inputDataConfigInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.inputDataConfigInput"></a>

```java
public IResolvable|ComprehendEntityRecognizerInputDataConfig getInputDataConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig">ComprehendEntityRecognizerInputDataConfig</a>

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.languageCodeInput"></a>

```java
public java.lang.String getLanguageCodeInput();
```

- *Type:* java.lang.String

---

##### `modelKmsKeyIdInput`<sup>Optional</sup> <a name="modelKmsKeyIdInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.modelKmsKeyIdInput"></a>

```java
public java.lang.String getModelKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `modelPolicyInput`<sup>Optional</sup> <a name="modelPolicyInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.modelPolicyInput"></a>

```java
public java.lang.String getModelPolicyInput();
```

- *Type:* java.lang.String

---

##### `recognizerNameInput`<sup>Optional</sup> <a name="recognizerNameInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.recognizerNameInput"></a>

```java
public java.lang.String getRecognizerNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ComprehendEntityRecognizerTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags">ComprehendEntityRecognizerTags</a>>

---

##### `versionNameInput`<sup>Optional</sup> <a name="versionNameInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.versionNameInput"></a>

```java
public java.lang.String getVersionNameInput();
```

- *Type:* java.lang.String

---

##### `volumeKmsKeyIdInput`<sup>Optional</sup> <a name="volumeKmsKeyIdInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.volumeKmsKeyIdInput"></a>

```java
public java.lang.String getVolumeKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.vpcConfigInput"></a>

```java
public IResolvable|ComprehendEntityRecognizerVpcConfig getVpcConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig">ComprehendEntityRecognizerVpcConfig</a>

---

##### `dataAccessRoleArn`<sup>Required</sup> <a name="dataAccessRoleArn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.dataAccessRoleArn"></a>

```java
public java.lang.String getDataAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

---

##### `modelKmsKeyId`<sup>Required</sup> <a name="modelKmsKeyId" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.modelKmsKeyId"></a>

```java
public java.lang.String getModelKmsKeyId();
```

- *Type:* java.lang.String

---

##### `modelPolicy`<sup>Required</sup> <a name="modelPolicy" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.modelPolicy"></a>

```java
public java.lang.String getModelPolicy();
```

- *Type:* java.lang.String

---

##### `recognizerName`<sup>Required</sup> <a name="recognizerName" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.recognizerName"></a>

```java
public java.lang.String getRecognizerName();
```

- *Type:* java.lang.String

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.versionName"></a>

```java
public java.lang.String getVersionName();
```

- *Type:* java.lang.String

---

##### `volumeKmsKeyId`<sup>Required</sup> <a name="volumeKmsKeyId" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.volumeKmsKeyId"></a>

```java
public java.lang.String getVolumeKmsKeyId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComprehendEntityRecognizerConfig <a name="ComprehendEntityRecognizerConfig" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer.ComprehendEntityRecognizerConfig;

ComprehendEntityRecognizerConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataAccessRoleArn(java.lang.String)
    .inputDataConfig(ComprehendEntityRecognizerInputDataConfig)
    .languageCode(java.lang.String)
    .recognizerName(java.lang.String)
//  .modelKmsKeyId(java.lang.String)
//  .modelPolicy(java.lang.String)
//  .tags(IResolvable|java.util.List<ComprehendEntityRecognizerTags>)
//  .versionName(java.lang.String)
//  .volumeKmsKeyId(java.lang.String)
//  .vpcConfig(ComprehendEntityRecognizerVpcConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.inputDataConfig">inputDataConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig">ComprehendEntityRecognizerInputDataConfig</a></code> | Specifies the format and location of the input data. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | The language of the input documents. All documents must be in the same language. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.recognizerName">recognizerName</a></code> | <code>java.lang.String</code> | The name given to the entity recognizer. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.modelKmsKeyId">modelKmsKeyId</a></code> | <code>java.lang.String</code> | ID for the AWS KMS key that Amazon Comprehend uses to encrypt trained custom models. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.modelPolicy">modelPolicy</a></code> | <code>java.lang.String</code> | The JSON resource-based policy to attach to your custom entity recognizer model. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags">ComprehendEntityRecognizerTags</a>></code> | Tags to associate with the entity recognizer. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.versionName">versionName</a></code> | <code>java.lang.String</code> | The version name given to the entity recognizer. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.volumeKmsKeyId">volumeKmsKeyId</a></code> | <code>java.lang.String</code> | ID for the AWS KMS key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s). |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig">ComprehendEntityRecognizerVpcConfig</a></code> | Configuration parameters for an optional private VPC containing the resources you are using for your custom entity recognizer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataAccessRoleArn`<sup>Required</sup> <a name="dataAccessRoleArn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.dataAccessRoleArn"></a>

```java
public java.lang.String getDataAccessRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#data_access_role_arn ComprehendEntityRecognizer#data_access_role_arn}

---

##### `inputDataConfig`<sup>Required</sup> <a name="inputDataConfig" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.inputDataConfig"></a>

```java
public ComprehendEntityRecognizerInputDataConfig getInputDataConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig">ComprehendEntityRecognizerInputDataConfig</a>

Specifies the format and location of the input data.

The S3 bucket containing the input data must be located in the same Region as the entity recognizer being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#input_data_config ComprehendEntityRecognizer#input_data_config}

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

The language of the input documents. All documents must be in the same language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#language_code ComprehendEntityRecognizer#language_code}

---

##### `recognizerName`<sup>Required</sup> <a name="recognizerName" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.recognizerName"></a>

```java
public java.lang.String getRecognizerName();
```

- *Type:* java.lang.String

The name given to the entity recognizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#recognizer_name ComprehendEntityRecognizer#recognizer_name}

---

##### `modelKmsKeyId`<sup>Optional</sup> <a name="modelKmsKeyId" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.modelKmsKeyId"></a>

```java
public java.lang.String getModelKmsKeyId();
```

- *Type:* java.lang.String

ID for the AWS KMS key that Amazon Comprehend uses to encrypt trained custom models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#model_kms_key_id ComprehendEntityRecognizer#model_kms_key_id}

---

##### `modelPolicy`<sup>Optional</sup> <a name="modelPolicy" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.modelPolicy"></a>

```java
public java.lang.String getModelPolicy();
```

- *Type:* java.lang.String

The JSON resource-based policy to attach to your custom entity recognizer model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#model_policy ComprehendEntityRecognizer#model_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ComprehendEntityRecognizerTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags">ComprehendEntityRecognizerTags</a>>

Tags to associate with the entity recognizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#tags ComprehendEntityRecognizer#tags}

---

##### `versionName`<sup>Optional</sup> <a name="versionName" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.versionName"></a>

```java
public java.lang.String getVersionName();
```

- *Type:* java.lang.String

The version name given to the entity recognizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#version_name ComprehendEntityRecognizer#version_name}

---

##### `volumeKmsKeyId`<sup>Optional</sup> <a name="volumeKmsKeyId" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.volumeKmsKeyId"></a>

```java
public java.lang.String getVolumeKmsKeyId();
```

- *Type:* java.lang.String

ID for the AWS KMS key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#volume_kms_key_id ComprehendEntityRecognizer#volume_kms_key_id}

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.vpcConfig"></a>

```java
public ComprehendEntityRecognizerVpcConfig getVpcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig">ComprehendEntityRecognizerVpcConfig</a>

Configuration parameters for an optional private VPC containing the resources you are using for your custom entity recognizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#vpc_config ComprehendEntityRecognizer#vpc_config}

---

### ComprehendEntityRecognizerInputDataConfig <a name="ComprehendEntityRecognizerInputDataConfig" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer.ComprehendEntityRecognizerInputDataConfig;

ComprehendEntityRecognizerInputDataConfig.builder()
    .entityTypes(IResolvable|java.util.List<ComprehendEntityRecognizerInputDataConfigEntityTypes>)
//  .annotations(ComprehendEntityRecognizerInputDataConfigAnnotations)
//  .augmentedManifests(IResolvable|java.util.List<ComprehendEntityRecognizerInputDataConfigAugmentedManifests>)
//  .dataFormat(java.lang.String)
//  .documents(ComprehendEntityRecognizerInputDataConfigDocuments)
//  .entityList(ComprehendEntityRecognizerInputDataConfigEntityListStruct)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.entityTypes">entityTypes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a>></code> | The entity types in the labeled training data. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.annotations">annotations</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations">ComprehendEntityRecognizerInputDataConfigAnnotations</a></code> | The S3 location of the CSV file that annotates your training documents. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.augmentedManifests">augmentedManifests</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>></code> | A list of augmented manifest files that provide training data for a custom model. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.dataFormat">dataFormat</a></code> | <code>java.lang.String</code> | The format of your training data. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.documents">documents</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments">ComprehendEntityRecognizerInputDataConfigDocuments</a></code> | The S3 location of the folder that contains the training documents. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.entityList">entityList</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct">ComprehendEntityRecognizerInputDataConfigEntityListStruct</a></code> | The S3 location of the CSV file that has the entity list. |

---

##### `entityTypes`<sup>Required</sup> <a name="entityTypes" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.entityTypes"></a>

```java
public IResolvable|java.util.List<ComprehendEntityRecognizerInputDataConfigEntityTypes> getEntityTypes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a>>

The entity types in the labeled training data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#entity_types ComprehendEntityRecognizer#entity_types}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.annotations"></a>

```java
public ComprehendEntityRecognizerInputDataConfigAnnotations getAnnotations();
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations">ComprehendEntityRecognizerInputDataConfigAnnotations</a>

The S3 location of the CSV file that annotates your training documents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#annotations ComprehendEntityRecognizer#annotations}

---

##### `augmentedManifests`<sup>Optional</sup> <a name="augmentedManifests" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.augmentedManifests"></a>

```java
public IResolvable|java.util.List<ComprehendEntityRecognizerInputDataConfigAugmentedManifests> getAugmentedManifests();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>>

A list of augmented manifest files that provide training data for a custom model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#augmented_manifests ComprehendEntityRecognizer#augmented_manifests}

---

##### `dataFormat`<sup>Optional</sup> <a name="dataFormat" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.dataFormat"></a>

```java
public java.lang.String getDataFormat();
```

- *Type:* java.lang.String

The format of your training data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#data_format ComprehendEntityRecognizer#data_format}

---

##### `documents`<sup>Optional</sup> <a name="documents" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.documents"></a>

```java
public ComprehendEntityRecognizerInputDataConfigDocuments getDocuments();
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments">ComprehendEntityRecognizerInputDataConfigDocuments</a>

The S3 location of the folder that contains the training documents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#documents ComprehendEntityRecognizer#documents}

---

##### `entityList`<sup>Optional</sup> <a name="entityList" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.entityList"></a>

```java
public ComprehendEntityRecognizerInputDataConfigEntityListStruct getEntityList();
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct">ComprehendEntityRecognizerInputDataConfigEntityListStruct</a>

The S3 location of the CSV file that has the entity list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#entity_list ComprehendEntityRecognizer#entity_list}

---

### ComprehendEntityRecognizerInputDataConfigAnnotations <a name="ComprehendEntityRecognizerInputDataConfigAnnotations" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer.ComprehendEntityRecognizerInputDataConfigAnnotations;

ComprehendEntityRecognizerInputDataConfigAnnotations.builder()
//  .s3Uri(java.lang.String)
//  .testS3Uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | Specifies the Amazon S3 location where the annotations are located. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations.property.testS3Uri">testS3Uri</a></code> | <code>java.lang.String</code> | Specifies the Amazon S3 location where the test annotations are located. |

---

##### `s3Uri`<sup>Optional</sup> <a name="s3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

Specifies the Amazon S3 location where the annotations are located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}

---

##### `testS3Uri`<sup>Optional</sup> <a name="testS3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations.property.testS3Uri"></a>

```java
public java.lang.String getTestS3Uri();
```

- *Type:* java.lang.String

Specifies the Amazon S3 location where the test annotations are located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#test_s3_uri ComprehendEntityRecognizer#test_s3_uri}

---

### ComprehendEntityRecognizerInputDataConfigAugmentedManifests <a name="ComprehendEntityRecognizerInputDataConfigAugmentedManifests" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests;

ComprehendEntityRecognizerInputDataConfigAugmentedManifests.builder()
//  .annotationDataS3Uri(java.lang.String)
//  .attributeNames(java.util.List<java.lang.String>)
//  .documentType(java.lang.String)
//  .s3Uri(java.lang.String)
//  .sourceDocumentsS3Uri(java.lang.String)
//  .split(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.annotationDataS3Uri">annotationDataS3Uri</a></code> | <code>java.lang.String</code> | The S3 prefix to the annotation files that are referred in the augmented manifest file. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.attributeNames">attributeNames</a></code> | <code>java.util.List<java.lang.String></code> | The JSON attribute that contains the annotations for your training documents. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.documentType">documentType</a></code> | <code>java.lang.String</code> | The type of augmented manifest. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | The Amazon S3 location of the augmented manifest file. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.sourceDocumentsS3Uri">sourceDocumentsS3Uri</a></code> | <code>java.lang.String</code> | The S3 prefix to the source files (PDFs) that are referred to in the augmented manifest file. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.split">split</a></code> | <code>java.lang.String</code> | The purpose of the data you've provided in the augmented manifest. |

---

##### `annotationDataS3Uri`<sup>Optional</sup> <a name="annotationDataS3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.annotationDataS3Uri"></a>

```java
public java.lang.String getAnnotationDataS3Uri();
```

- *Type:* java.lang.String

The S3 prefix to the annotation files that are referred in the augmented manifest file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#annotation_data_s3_uri ComprehendEntityRecognizer#annotation_data_s3_uri}

---

##### `attributeNames`<sup>Optional</sup> <a name="attributeNames" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.attributeNames"></a>

```java
public java.util.List<java.lang.String> getAttributeNames();
```

- *Type:* java.util.List<java.lang.String>

The JSON attribute that contains the annotations for your training documents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#attribute_names ComprehendEntityRecognizer#attribute_names}

---

##### `documentType`<sup>Optional</sup> <a name="documentType" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.documentType"></a>

```java
public java.lang.String getDocumentType();
```

- *Type:* java.lang.String

The type of augmented manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#document_type ComprehendEntityRecognizer#document_type}

---

##### `s3Uri`<sup>Optional</sup> <a name="s3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

The Amazon S3 location of the augmented manifest file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}

---

##### `sourceDocumentsS3Uri`<sup>Optional</sup> <a name="sourceDocumentsS3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.sourceDocumentsS3Uri"></a>

```java
public java.lang.String getSourceDocumentsS3Uri();
```

- *Type:* java.lang.String

The S3 prefix to the source files (PDFs) that are referred to in the augmented manifest file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#source_documents_s3_uri ComprehendEntityRecognizer#source_documents_s3_uri}

---

##### `split`<sup>Optional</sup> <a name="split" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.split"></a>

```java
public java.lang.String getSplit();
```

- *Type:* java.lang.String

The purpose of the data you've provided in the augmented manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#split ComprehendEntityRecognizer#split}

---

### ComprehendEntityRecognizerInputDataConfigDocuments <a name="ComprehendEntityRecognizerInputDataConfigDocuments" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer.ComprehendEntityRecognizerInputDataConfigDocuments;

ComprehendEntityRecognizerInputDataConfigDocuments.builder()
//  .inputFormat(java.lang.String)
//  .s3Uri(java.lang.String)
//  .testS3Uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments.property.inputFormat">inputFormat</a></code> | <code>java.lang.String</code> | Specifies how the text in an input file should be processed. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | Specifies the Amazon S3 location where the training documents are located. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments.property.testS3Uri">testS3Uri</a></code> | <code>java.lang.String</code> | Specifies the Amazon S3 location where the test documents are located. |

---

##### `inputFormat`<sup>Optional</sup> <a name="inputFormat" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments.property.inputFormat"></a>

```java
public java.lang.String getInputFormat();
```

- *Type:* java.lang.String

Specifies how the text in an input file should be processed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#input_format ComprehendEntityRecognizer#input_format}

---

##### `s3Uri`<sup>Optional</sup> <a name="s3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

Specifies the Amazon S3 location where the training documents are located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}

---

##### `testS3Uri`<sup>Optional</sup> <a name="testS3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments.property.testS3Uri"></a>

```java
public java.lang.String getTestS3Uri();
```

- *Type:* java.lang.String

Specifies the Amazon S3 location where the test documents are located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#test_s3_uri ComprehendEntityRecognizer#test_s3_uri}

---

### ComprehendEntityRecognizerInputDataConfigEntityListStruct <a name="ComprehendEntityRecognizerInputDataConfigEntityListStruct" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct;

ComprehendEntityRecognizerInputDataConfigEntityListStruct.builder()
//  .s3Uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | Specifies the Amazon S3 location where the entity list is located. |

---

##### `s3Uri`<sup>Optional</sup> <a name="s3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

Specifies the Amazon S3 location where the entity list is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}

---

### ComprehendEntityRecognizerInputDataConfigEntityTypes <a name="ComprehendEntityRecognizerInputDataConfigEntityTypes" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes;

ComprehendEntityRecognizerInputDataConfigEntityTypes.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes.property.type">type</a></code> | <code>java.lang.String</code> | An entity type within a labeled training dataset. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

An entity type within a labeled training dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#type ComprehendEntityRecognizer#type}

---

### ComprehendEntityRecognizerTags <a name="ComprehendEntityRecognizerTags" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer.ComprehendEntityRecognizerTags;

ComprehendEntityRecognizerTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags.property.key">key</a></code> | <code>java.lang.String</code> | The key of the key-value pair that forms a tag. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags.property.value">value</a></code> | <code>java.lang.String</code> | The value of the key-value pair that forms a tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the key-value pair that forms a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#key ComprehendEntityRecognizer#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the key-value pair that forms a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#value ComprehendEntityRecognizer#value}

---

### ComprehendEntityRecognizerVpcConfig <a name="ComprehendEntityRecognizerVpcConfig" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer.ComprehendEntityRecognizerVpcConfig;

ComprehendEntityRecognizerVpcConfig.builder()
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnets(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | The ID number for a security group on an instance of your private VPC. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | The ID for each subnet being used in your private VPC. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

The ID number for a security group on an instance of your private VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#security_group_ids ComprehendEntityRecognizer#security_group_ids}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

The ID for each subnet being used in your private VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#subnets ComprehendEntityRecognizer#subnets}

---

## Classes <a name="Classes" id="Classes"></a>

### ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference <a name="ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference;

new ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resetS3Uri">resetS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resetTestS3Uri">resetTestS3Uri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3Uri` <a name="resetS3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resetS3Uri"></a>

```java
public void resetS3Uri()
```

##### `resetTestS3Uri` <a name="resetTestS3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resetTestS3Uri"></a>

```java
public void resetTestS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.testS3UriInput">testS3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.testS3Uri">testS3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations">ComprehendEntityRecognizerInputDataConfigAnnotations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.s3UriInput"></a>

```java
public java.lang.String getS3UriInput();
```

- *Type:* java.lang.String

---

##### `testS3UriInput`<sup>Optional</sup> <a name="testS3UriInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.testS3UriInput"></a>

```java
public java.lang.String getTestS3UriInput();
```

- *Type:* java.lang.String

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

---

##### `testS3Uri`<sup>Required</sup> <a name="testS3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.testS3Uri"></a>

```java
public java.lang.String getTestS3Uri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.internalValue"></a>

```java
public IResolvable|ComprehendEntityRecognizerInputDataConfigAnnotations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations">ComprehendEntityRecognizerInputDataConfigAnnotations</a>

---


### ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList <a name="ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList;

new ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.get"></a>

```java
public ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ComprehendEntityRecognizerInputDataConfigAugmentedManifests> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>>

---


### ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference <a name="ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference;

new ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetAnnotationDataS3Uri">resetAnnotationDataS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetAttributeNames">resetAttributeNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetDocumentType">resetDocumentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetS3Uri">resetS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetSourceDocumentsS3Uri">resetSourceDocumentsS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetSplit">resetSplit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotationDataS3Uri` <a name="resetAnnotationDataS3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetAnnotationDataS3Uri"></a>

```java
public void resetAnnotationDataS3Uri()
```

##### `resetAttributeNames` <a name="resetAttributeNames" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetAttributeNames"></a>

```java
public void resetAttributeNames()
```

##### `resetDocumentType` <a name="resetDocumentType" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetDocumentType"></a>

```java
public void resetDocumentType()
```

##### `resetS3Uri` <a name="resetS3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetS3Uri"></a>

```java
public void resetS3Uri()
```

##### `resetSourceDocumentsS3Uri` <a name="resetSourceDocumentsS3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetSourceDocumentsS3Uri"></a>

```java
public void resetSourceDocumentsS3Uri()
```

##### `resetSplit` <a name="resetSplit" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetSplit"></a>

```java
public void resetSplit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3UriInput">annotationDataS3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.attributeNamesInput">attributeNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.documentTypeInput">documentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3UriInput">sourceDocumentsS3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.splitInput">splitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3Uri">annotationDataS3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.attributeNames">attributeNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.documentType">documentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3Uri">sourceDocumentsS3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.split">split</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `annotationDataS3UriInput`<sup>Optional</sup> <a name="annotationDataS3UriInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3UriInput"></a>

```java
public java.lang.String getAnnotationDataS3UriInput();
```

- *Type:* java.lang.String

---

##### `attributeNamesInput`<sup>Optional</sup> <a name="attributeNamesInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.attributeNamesInput"></a>

```java
public java.util.List<java.lang.String> getAttributeNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `documentTypeInput`<sup>Optional</sup> <a name="documentTypeInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.documentTypeInput"></a>

```java
public java.lang.String getDocumentTypeInput();
```

- *Type:* java.lang.String

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.s3UriInput"></a>

```java
public java.lang.String getS3UriInput();
```

- *Type:* java.lang.String

---

##### `sourceDocumentsS3UriInput`<sup>Optional</sup> <a name="sourceDocumentsS3UriInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3UriInput"></a>

```java
public java.lang.String getSourceDocumentsS3UriInput();
```

- *Type:* java.lang.String

---

##### `splitInput`<sup>Optional</sup> <a name="splitInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.splitInput"></a>

```java
public java.lang.String getSplitInput();
```

- *Type:* java.lang.String

---

##### `annotationDataS3Uri`<sup>Required</sup> <a name="annotationDataS3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3Uri"></a>

```java
public java.lang.String getAnnotationDataS3Uri();
```

- *Type:* java.lang.String

---

##### `attributeNames`<sup>Required</sup> <a name="attributeNames" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.attributeNames"></a>

```java
public java.util.List<java.lang.String> getAttributeNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `documentType`<sup>Required</sup> <a name="documentType" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.documentType"></a>

```java
public java.lang.String getDocumentType();
```

- *Type:* java.lang.String

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

---

##### `sourceDocumentsS3Uri`<sup>Required</sup> <a name="sourceDocumentsS3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3Uri"></a>

```java
public java.lang.String getSourceDocumentsS3Uri();
```

- *Type:* java.lang.String

---

##### `split`<sup>Required</sup> <a name="split" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.split"></a>

```java
public java.lang.String getSplit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.internalValue"></a>

```java
public IResolvable|ComprehendEntityRecognizerInputDataConfigAugmentedManifests getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>

---


### ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference <a name="ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference;

new ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resetInputFormat">resetInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resetS3Uri">resetS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resetTestS3Uri">resetTestS3Uri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInputFormat` <a name="resetInputFormat" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resetInputFormat"></a>

```java
public void resetInputFormat()
```

##### `resetS3Uri` <a name="resetS3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resetS3Uri"></a>

```java
public void resetS3Uri()
```

##### `resetTestS3Uri` <a name="resetTestS3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resetTestS3Uri"></a>

```java
public void resetTestS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.inputFormatInput">inputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.testS3UriInput">testS3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.inputFormat">inputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.testS3Uri">testS3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments">ComprehendEntityRecognizerInputDataConfigDocuments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputFormatInput`<sup>Optional</sup> <a name="inputFormatInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.inputFormatInput"></a>

```java
public java.lang.String getInputFormatInput();
```

- *Type:* java.lang.String

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.s3UriInput"></a>

```java
public java.lang.String getS3UriInput();
```

- *Type:* java.lang.String

---

##### `testS3UriInput`<sup>Optional</sup> <a name="testS3UriInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.testS3UriInput"></a>

```java
public java.lang.String getTestS3UriInput();
```

- *Type:* java.lang.String

---

##### `inputFormat`<sup>Required</sup> <a name="inputFormat" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.inputFormat"></a>

```java
public java.lang.String getInputFormat();
```

- *Type:* java.lang.String

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

---

##### `testS3Uri`<sup>Required</sup> <a name="testS3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.testS3Uri"></a>

```java
public java.lang.String getTestS3Uri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.internalValue"></a>

```java
public IResolvable|ComprehendEntityRecognizerInputDataConfigDocuments getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments">ComprehendEntityRecognizerInputDataConfigDocuments</a>

---


### ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference <a name="ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference;

new ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.resetS3Uri">resetS3Uri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3Uri` <a name="resetS3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.resetS3Uri"></a>

```java
public void resetS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct">ComprehendEntityRecognizerInputDataConfigEntityListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.s3UriInput"></a>

```java
public java.lang.String getS3UriInput();
```

- *Type:* java.lang.String

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.internalValue"></a>

```java
public IResolvable|ComprehendEntityRecognizerInputDataConfigEntityListStruct getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct">ComprehendEntityRecognizerInputDataConfigEntityListStruct</a>

---


### ComprehendEntityRecognizerInputDataConfigEntityTypesList <a name="ComprehendEntityRecognizerInputDataConfigEntityTypesList" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList;

new ComprehendEntityRecognizerInputDataConfigEntityTypesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.get"></a>

```java
public ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ComprehendEntityRecognizerInputDataConfigEntityTypes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a>>

---


### ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference <a name="ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference;

new ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.internalValue"></a>

```java
public IResolvable|ComprehendEntityRecognizerInputDataConfigEntityTypes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a>

---


### ComprehendEntityRecognizerInputDataConfigOutputReference <a name="ComprehendEntityRecognizerInputDataConfigOutputReference" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer.ComprehendEntityRecognizerInputDataConfigOutputReference;

new ComprehendEntityRecognizerInputDataConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putAnnotations">putAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putAugmentedManifests">putAugmentedManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putDocuments">putDocuments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putEntityList">putEntityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putEntityTypes">putEntityTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetAugmentedManifests">resetAugmentedManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetDataFormat">resetDataFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetDocuments">resetDocuments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetEntityList">resetEntityList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnnotations` <a name="putAnnotations" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putAnnotations"></a>

```java
public void putAnnotations(ComprehendEntityRecognizerInputDataConfigAnnotations value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putAnnotations.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations">ComprehendEntityRecognizerInputDataConfigAnnotations</a>

---

##### `putAugmentedManifests` <a name="putAugmentedManifests" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putAugmentedManifests"></a>

```java
public void putAugmentedManifests(IResolvable|java.util.List<ComprehendEntityRecognizerInputDataConfigAugmentedManifests> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putAugmentedManifests.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>>

---

##### `putDocuments` <a name="putDocuments" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putDocuments"></a>

```java
public void putDocuments(ComprehendEntityRecognizerInputDataConfigDocuments value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putDocuments.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments">ComprehendEntityRecognizerInputDataConfigDocuments</a>

---

##### `putEntityList` <a name="putEntityList" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putEntityList"></a>

```java
public void putEntityList(ComprehendEntityRecognizerInputDataConfigEntityListStruct value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putEntityList.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct">ComprehendEntityRecognizerInputDataConfigEntityListStruct</a>

---

##### `putEntityTypes` <a name="putEntityTypes" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putEntityTypes"></a>

```java
public void putEntityTypes(IResolvable|java.util.List<ComprehendEntityRecognizerInputDataConfigEntityTypes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putEntityTypes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a>>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetAugmentedManifests` <a name="resetAugmentedManifests" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetAugmentedManifests"></a>

```java
public void resetAugmentedManifests()
```

##### `resetDataFormat` <a name="resetDataFormat" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetDataFormat"></a>

```java
public void resetDataFormat()
```

##### `resetDocuments` <a name="resetDocuments" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetDocuments"></a>

```java
public void resetDocuments()
```

##### `resetEntityList` <a name="resetEntityList" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetEntityList"></a>

```java
public void resetEntityList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.annotations">annotations</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference">ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.augmentedManifests">augmentedManifests</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList">ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.documents">documents</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference">ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.entityList">entityList</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference">ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.entityTypes">entityTypes</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList">ComprehendEntityRecognizerInputDataConfigEntityTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations">ComprehendEntityRecognizerInputDataConfigAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.augmentedManifestsInput">augmentedManifestsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.dataFormatInput">dataFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.documentsInput">documentsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments">ComprehendEntityRecognizerInputDataConfigDocuments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.entityListInput">entityListInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct">ComprehendEntityRecognizerInputDataConfigEntityListStruct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.entityTypesInput">entityTypesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.dataFormat">dataFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig">ComprehendEntityRecognizerInputDataConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.annotations"></a>

```java
public ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference getAnnotations();
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference">ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference</a>

---

##### `augmentedManifests`<sup>Required</sup> <a name="augmentedManifests" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.augmentedManifests"></a>

```java
public ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList getAugmentedManifests();
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList">ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList</a>

---

##### `documents`<sup>Required</sup> <a name="documents" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.documents"></a>

```java
public ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference getDocuments();
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference">ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference</a>

---

##### `entityList`<sup>Required</sup> <a name="entityList" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.entityList"></a>

```java
public ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference getEntityList();
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference">ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference</a>

---

##### `entityTypes`<sup>Required</sup> <a name="entityTypes" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.entityTypes"></a>

```java
public ComprehendEntityRecognizerInputDataConfigEntityTypesList getEntityTypes();
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList">ComprehendEntityRecognizerInputDataConfigEntityTypesList</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.annotationsInput"></a>

```java
public IResolvable|ComprehendEntityRecognizerInputDataConfigAnnotations getAnnotationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations">ComprehendEntityRecognizerInputDataConfigAnnotations</a>

---

##### `augmentedManifestsInput`<sup>Optional</sup> <a name="augmentedManifestsInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.augmentedManifestsInput"></a>

```java
public IResolvable|java.util.List<ComprehendEntityRecognizerInputDataConfigAugmentedManifests> getAugmentedManifestsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>>

---

##### `dataFormatInput`<sup>Optional</sup> <a name="dataFormatInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.dataFormatInput"></a>

```java
public java.lang.String getDataFormatInput();
```

- *Type:* java.lang.String

---

##### `documentsInput`<sup>Optional</sup> <a name="documentsInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.documentsInput"></a>

```java
public IResolvable|ComprehendEntityRecognizerInputDataConfigDocuments getDocumentsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments">ComprehendEntityRecognizerInputDataConfigDocuments</a>

---

##### `entityListInput`<sup>Optional</sup> <a name="entityListInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.entityListInput"></a>

```java
public IResolvable|ComprehendEntityRecognizerInputDataConfigEntityListStruct getEntityListInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct">ComprehendEntityRecognizerInputDataConfigEntityListStruct</a>

---

##### `entityTypesInput`<sup>Optional</sup> <a name="entityTypesInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.entityTypesInput"></a>

```java
public IResolvable|java.util.List<ComprehendEntityRecognizerInputDataConfigEntityTypes> getEntityTypesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a>>

---

##### `dataFormat`<sup>Required</sup> <a name="dataFormat" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.dataFormat"></a>

```java
public java.lang.String getDataFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|ComprehendEntityRecognizerInputDataConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig">ComprehendEntityRecognizerInputDataConfig</a>

---


### ComprehendEntityRecognizerTagsList <a name="ComprehendEntityRecognizerTagsList" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer.ComprehendEntityRecognizerTagsList;

new ComprehendEntityRecognizerTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.get"></a>

```java
public ComprehendEntityRecognizerTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags">ComprehendEntityRecognizerTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ComprehendEntityRecognizerTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags">ComprehendEntityRecognizerTags</a>>

---


### ComprehendEntityRecognizerTagsOutputReference <a name="ComprehendEntityRecognizerTagsOutputReference" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer.ComprehendEntityRecognizerTagsOutputReference;

new ComprehendEntityRecognizerTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags">ComprehendEntityRecognizerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ComprehendEntityRecognizerTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags">ComprehendEntityRecognizerTags</a>

---


### ComprehendEntityRecognizerVpcConfigOutputReference <a name="ComprehendEntityRecognizerVpcConfigOutputReference" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_entity_recognizer.ComprehendEntityRecognizerVpcConfigOutputReference;

new ComprehendEntityRecognizerVpcConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.resetSubnets"></a>

```java
public void resetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig">ComprehendEntityRecognizerVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|ComprehendEntityRecognizerVpcConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig">ComprehendEntityRecognizerVpcConfig</a>

---



