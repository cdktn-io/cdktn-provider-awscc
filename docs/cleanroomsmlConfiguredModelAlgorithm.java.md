# `cleanroomsmlConfiguredModelAlgorithm` Submodule <a name="`cleanroomsmlConfiguredModelAlgorithm` Submodule" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsmlConfiguredModelAlgorithm <a name="CleanroomsmlConfiguredModelAlgorithm" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm awscc_cleanroomsml_configured_model_algorithm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanroomsml_configured_model_algorithm.CleanroomsmlConfiguredModelAlgorithm;

CleanroomsmlConfiguredModelAlgorithm.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .roleArn(java.lang.String)
//  .description(java.lang.String)
//  .inferenceContainerConfig(CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig)
//  .kmsKeyArn(java.lang.String)
//  .tags(IResolvable|java.util.List<CleanroomsmlConfiguredModelAlgorithmTags>)
//  .trainingContainerConfig(CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#name CleanroomsmlConfiguredModelAlgorithm#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#role_arn CleanroomsmlConfiguredModelAlgorithm#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#description CleanroomsmlConfiguredModelAlgorithm#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.inferenceContainerConfig">inferenceContainerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig">CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#inference_container_config CleanroomsmlConfiguredModelAlgorithm#inference_container_config}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#kms_key_arn CleanroomsmlConfiguredModelAlgorithm#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags">CleanroomsmlConfiguredModelAlgorithmTags</a>></code> | An arbitrary set of tags (key-value pairs) for this cleanrooms-ml configured model algorithm. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.trainingContainerConfig">trainingContainerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#training_container_config CleanroomsmlConfiguredModelAlgorithm#training_container_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#name CleanroomsmlConfiguredModelAlgorithm#name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#role_arn CleanroomsmlConfiguredModelAlgorithm#role_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#description CleanroomsmlConfiguredModelAlgorithm#description}.

---

##### `inferenceContainerConfig`<sup>Optional</sup> <a name="inferenceContainerConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.inferenceContainerConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig">CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#inference_container_config CleanroomsmlConfiguredModelAlgorithm#inference_container_config}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.kmsKeyArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#kms_key_arn CleanroomsmlConfiguredModelAlgorithm#kms_key_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags">CleanroomsmlConfiguredModelAlgorithmTags</a>>

An arbitrary set of tags (key-value pairs) for this cleanrooms-ml configured model algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#tags CleanroomsmlConfiguredModelAlgorithm#tags}

---

##### `trainingContainerConfig`<sup>Optional</sup> <a name="trainingContainerConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.trainingContainerConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#training_container_config CleanroomsmlConfiguredModelAlgorithm#training_container_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.putInferenceContainerConfig">putInferenceContainerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.putTrainingContainerConfig">putTrainingContainerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetInferenceContainerConfig">resetInferenceContainerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetTrainingContainerConfig">resetTrainingContainerConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInferenceContainerConfig` <a name="putInferenceContainerConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.putInferenceContainerConfig"></a>

```java
public void putInferenceContainerConfig(CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.putInferenceContainerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig">CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<CleanroomsmlConfiguredModelAlgorithmTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags">CleanroomsmlConfiguredModelAlgorithmTags</a>>

---

##### `putTrainingContainerConfig` <a name="putTrainingContainerConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.putTrainingContainerConfig"></a>

```java
public void putTrainingContainerConfig(CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.putTrainingContainerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetInferenceContainerConfig` <a name="resetInferenceContainerConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetInferenceContainerConfig"></a>

```java
public void resetInferenceContainerConfig()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetTags"></a>

```java
public void resetTags()
```

##### `resetTrainingContainerConfig` <a name="resetTrainingContainerConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetTrainingContainerConfig"></a>

```java
public void resetTrainingContainerConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CleanroomsmlConfiguredModelAlgorithm resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cleanroomsml_configured_model_algorithm.CleanroomsmlConfiguredModelAlgorithm;

CleanroomsmlConfiguredModelAlgorithm.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cleanroomsml_configured_model_algorithm.CleanroomsmlConfiguredModelAlgorithm;

CleanroomsmlConfiguredModelAlgorithm.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cleanroomsml_configured_model_algorithm.CleanroomsmlConfiguredModelAlgorithm;

CleanroomsmlConfiguredModelAlgorithm.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cleanroomsml_configured_model_algorithm.CleanroomsmlConfiguredModelAlgorithm;

CleanroomsmlConfiguredModelAlgorithm.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CleanroomsmlConfiguredModelAlgorithm.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CleanroomsmlConfiguredModelAlgorithm resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CleanroomsmlConfiguredModelAlgorithm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CleanroomsmlConfiguredModelAlgorithm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsmlConfiguredModelAlgorithm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.configuredModelAlgorithmArn">configuredModelAlgorithmArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.inferenceContainerConfig">inferenceContainerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference">CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList">CleanroomsmlConfiguredModelAlgorithmTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.trainingContainerConfig">trainingContainerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.inferenceContainerConfigInput">inferenceContainerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig">CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags">CleanroomsmlConfiguredModelAlgorithmTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.trainingContainerConfigInput">trainingContainerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configuredModelAlgorithmArn`<sup>Required</sup> <a name="configuredModelAlgorithmArn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.configuredModelAlgorithmArn"></a>

```java
public java.lang.String getConfiguredModelAlgorithmArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inferenceContainerConfig`<sup>Required</sup> <a name="inferenceContainerConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.inferenceContainerConfig"></a>

```java
public CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference getInferenceContainerConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference">CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.tags"></a>

```java
public CleanroomsmlConfiguredModelAlgorithmTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList">CleanroomsmlConfiguredModelAlgorithmTagsList</a>

---

##### `trainingContainerConfig`<sup>Required</sup> <a name="trainingContainerConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.trainingContainerConfig"></a>

```java
public CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference getTrainingContainerConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `inferenceContainerConfigInput`<sup>Optional</sup> <a name="inferenceContainerConfigInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.inferenceContainerConfigInput"></a>

```java
public IResolvable|CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig getInferenceContainerConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig">CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig</a>

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.tagsInput"></a>

```java
public IResolvable|java.util.List<CleanroomsmlConfiguredModelAlgorithmTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags">CleanroomsmlConfiguredModelAlgorithmTags</a>>

---

##### `trainingContainerConfigInput`<sup>Optional</sup> <a name="trainingContainerConfigInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.trainingContainerConfigInput"></a>

```java
public IResolvable|CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig getTrainingContainerConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsmlConfiguredModelAlgorithmConfig <a name="CleanroomsmlConfiguredModelAlgorithmConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanroomsml_configured_model_algorithm.CleanroomsmlConfiguredModelAlgorithmConfig;

CleanroomsmlConfiguredModelAlgorithmConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .roleArn(java.lang.String)
//  .description(java.lang.String)
//  .inferenceContainerConfig(CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig)
//  .kmsKeyArn(java.lang.String)
//  .tags(IResolvable|java.util.List<CleanroomsmlConfiguredModelAlgorithmTags>)
//  .trainingContainerConfig(CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#name CleanroomsmlConfiguredModelAlgorithm#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#role_arn CleanroomsmlConfiguredModelAlgorithm#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#description CleanroomsmlConfiguredModelAlgorithm#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.inferenceContainerConfig">inferenceContainerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig">CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#inference_container_config CleanroomsmlConfiguredModelAlgorithm#inference_container_config}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#kms_key_arn CleanroomsmlConfiguredModelAlgorithm#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags">CleanroomsmlConfiguredModelAlgorithmTags</a>></code> | An arbitrary set of tags (key-value pairs) for this cleanrooms-ml configured model algorithm. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.trainingContainerConfig">trainingContainerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#training_container_config CleanroomsmlConfiguredModelAlgorithm#training_container_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#name CleanroomsmlConfiguredModelAlgorithm#name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#role_arn CleanroomsmlConfiguredModelAlgorithm#role_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#description CleanroomsmlConfiguredModelAlgorithm#description}.

---

##### `inferenceContainerConfig`<sup>Optional</sup> <a name="inferenceContainerConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.inferenceContainerConfig"></a>

```java
public CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig getInferenceContainerConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig">CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#inference_container_config CleanroomsmlConfiguredModelAlgorithm#inference_container_config}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#kms_key_arn CleanroomsmlConfiguredModelAlgorithm#kms_key_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.tags"></a>

```java
public IResolvable|java.util.List<CleanroomsmlConfiguredModelAlgorithmTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags">CleanroomsmlConfiguredModelAlgorithmTags</a>>

An arbitrary set of tags (key-value pairs) for this cleanrooms-ml configured model algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#tags CleanroomsmlConfiguredModelAlgorithm#tags}

---

##### `trainingContainerConfig`<sup>Optional</sup> <a name="trainingContainerConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.trainingContainerConfig"></a>

```java
public CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig getTrainingContainerConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#training_container_config CleanroomsmlConfiguredModelAlgorithm#training_container_config}.

---

### CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig <a name="CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanroomsml_configured_model_algorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig;

CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig.builder()
//  .imageUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#image_uri CleanroomsmlConfiguredModelAlgorithm#image_uri}. |

---

##### `imageUri`<sup>Optional</sup> <a name="imageUri" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#image_uri CleanroomsmlConfiguredModelAlgorithm#image_uri}.

---

### CleanroomsmlConfiguredModelAlgorithmTags <a name="CleanroomsmlConfiguredModelAlgorithmTags" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanroomsml_configured_model_algorithm.CleanroomsmlConfiguredModelAlgorithmTags;

CleanroomsmlConfiguredModelAlgorithmTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#key CleanroomsmlConfiguredModelAlgorithm#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#value CleanroomsmlConfiguredModelAlgorithm#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#key CleanroomsmlConfiguredModelAlgorithm#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#value CleanroomsmlConfiguredModelAlgorithm#value}.

---

### CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig <a name="CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanroomsml_configured_model_algorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig;

CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig.builder()
//  .arguments(java.util.List<java.lang.String>)
//  .entrypoint(java.util.List<java.lang.String>)
//  .imageUri(java.lang.String)
//  .metricDefinitions(IResolvable|java.util.List<CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig.property.arguments">arguments</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#arguments CleanroomsmlConfiguredModelAlgorithm#arguments}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig.property.entrypoint">entrypoint</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#entrypoint CleanroomsmlConfiguredModelAlgorithm#entrypoint}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#image_uri CleanroomsmlConfiguredModelAlgorithm#image_uri}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig.property.metricDefinitions">metricDefinitions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#metric_definitions CleanroomsmlConfiguredModelAlgorithm#metric_definitions}. |

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig.property.arguments"></a>

```java
public java.util.List<java.lang.String> getArguments();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#arguments CleanroomsmlConfiguredModelAlgorithm#arguments}.

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig.property.entrypoint"></a>

```java
public java.util.List<java.lang.String> getEntrypoint();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#entrypoint CleanroomsmlConfiguredModelAlgorithm#entrypoint}.

---

##### `imageUri`<sup>Optional</sup> <a name="imageUri" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#image_uri CleanroomsmlConfiguredModelAlgorithm#image_uri}.

---

##### `metricDefinitions`<sup>Optional</sup> <a name="metricDefinitions" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig.property.metricDefinitions"></a>

```java
public IResolvable|java.util.List<CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions> getMetricDefinitions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#metric_definitions CleanroomsmlConfiguredModelAlgorithm#metric_definitions}.

---

### CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions <a name="CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanroomsml_configured_model_algorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions;

CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions.builder()
//  .name(java.lang.String)
//  .regex(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#name CleanroomsmlConfiguredModelAlgorithm#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions.property.regex">regex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#regex CleanroomsmlConfiguredModelAlgorithm#regex}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#name CleanroomsmlConfiguredModelAlgorithm#name}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#regex CleanroomsmlConfiguredModelAlgorithm#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanroomsml_configured_model_algorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference;

new CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.resetImageUri">resetImageUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImageUri` <a name="resetImageUri" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.resetImageUri"></a>

```java
public void resetImageUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.imageUriInput">imageUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig">CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `imageUriInput`<sup>Optional</sup> <a name="imageUriInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.imageUriInput"></a>

```java
public java.lang.String getImageUriInput();
```

- *Type:* java.lang.String

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig">CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig</a>

---


### CleanroomsmlConfiguredModelAlgorithmTagsList <a name="CleanroomsmlConfiguredModelAlgorithmTagsList" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanroomsml_configured_model_algorithm.CleanroomsmlConfiguredModelAlgorithmTagsList;

new CleanroomsmlConfiguredModelAlgorithmTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.get"></a>

```java
public CleanroomsmlConfiguredModelAlgorithmTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags">CleanroomsmlConfiguredModelAlgorithmTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CleanroomsmlConfiguredModelAlgorithmTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags">CleanroomsmlConfiguredModelAlgorithmTags</a>>

---


### CleanroomsmlConfiguredModelAlgorithmTagsOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanroomsml_configured_model_algorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference;

new CleanroomsmlConfiguredModelAlgorithmTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags">CleanroomsmlConfiguredModelAlgorithmTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CleanroomsmlConfiguredModelAlgorithmTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags">CleanroomsmlConfiguredModelAlgorithmTags</a>

---


### CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList <a name="CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanroomsml_configured_model_algorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList;

new CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.get"></a>

```java
public CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions</a>>

---


### CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanroomsml_configured_model_algorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference;

new CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetRegex` <a name="resetRegex" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.regex">regex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.regexInput"></a>

```java
public java.lang.String getRegexInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.internalValue"></a>

```java
public IResolvable|CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions</a>

---


### CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanroomsml_configured_model_algorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference;

new CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.putMetricDefinitions">putMetricDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resetArguments">resetArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resetEntrypoint">resetEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resetImageUri">resetImageUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resetMetricDefinitions">resetMetricDefinitions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetricDefinitions` <a name="putMetricDefinitions" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.putMetricDefinitions"></a>

```java
public void putMetricDefinitions(IResolvable|java.util.List<CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.putMetricDefinitions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions</a>>

---

##### `resetArguments` <a name="resetArguments" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resetArguments"></a>

```java
public void resetArguments()
```

##### `resetEntrypoint` <a name="resetEntrypoint" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resetEntrypoint"></a>

```java
public void resetEntrypoint()
```

##### `resetImageUri` <a name="resetImageUri" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resetImageUri"></a>

```java
public void resetImageUri()
```

##### `resetMetricDefinitions` <a name="resetMetricDefinitions" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resetMetricDefinitions"></a>

```java
public void resetMetricDefinitions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.metricDefinitions">metricDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.argumentsInput">argumentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.entrypointInput">entrypointInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.imageUriInput">imageUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.metricDefinitionsInput">metricDefinitionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.arguments">arguments</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.entrypoint">entrypoint</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricDefinitions`<sup>Required</sup> <a name="metricDefinitions" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.metricDefinitions"></a>

```java
public CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList getMetricDefinitions();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList</a>

---

##### `argumentsInput`<sup>Optional</sup> <a name="argumentsInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.argumentsInput"></a>

```java
public java.util.List<java.lang.String> getArgumentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `entrypointInput`<sup>Optional</sup> <a name="entrypointInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.entrypointInput"></a>

```java
public java.util.List<java.lang.String> getEntrypointInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `imageUriInput`<sup>Optional</sup> <a name="imageUriInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.imageUriInput"></a>

```java
public java.lang.String getImageUriInput();
```

- *Type:* java.lang.String

---

##### `metricDefinitionsInput`<sup>Optional</sup> <a name="metricDefinitionsInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.metricDefinitionsInput"></a>

```java
public IResolvable|java.util.List<CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions> getMetricDefinitionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions</a>>

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.arguments"></a>

```java
public java.util.List<java.lang.String> getArguments();
```

- *Type:* java.util.List<java.lang.String>

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.entrypoint"></a>

```java
public java.util.List<java.lang.String> getEntrypoint();
```

- *Type:* java.util.List<java.lang.String>

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig</a>

---



