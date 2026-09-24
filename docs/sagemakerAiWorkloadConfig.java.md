# `sagemakerAiWorkloadConfig` Submodule <a name="`sagemakerAiWorkloadConfig` Submodule" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerAiWorkloadConfig <a name="SagemakerAiWorkloadConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_ai_workload_config awscc_sagemaker_ai_workload_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_ai_workload_config.SagemakerAiWorkloadConfig;

SagemakerAiWorkloadConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .aiWorkloadConfigName(java.lang.String)
//  .aiWorkloadConfigs(SagemakerAiWorkloadConfigAiWorkloadConfigs)
//  .datasetConfig(SagemakerAiWorkloadConfigDatasetConfig)
//  .tags(IResolvable|java.util.List<SagemakerAiWorkloadConfigTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.aiWorkloadConfigName">aiWorkloadConfigName</a></code> | <code>java.lang.String</code> | The name of the AI workload configuration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.aiWorkloadConfigs">aiWorkloadConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs">SagemakerAiWorkloadConfigAiWorkloadConfigs</a></code> | The benchmark tool configuration and workload specification. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.datasetConfig">datasetConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig">SagemakerAiWorkloadConfigDatasetConfig</a></code> | The dataset configuration for the workload. Specify input data channels with their data sources for benchmark workloads. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags">SagemakerAiWorkloadConfigTags</a>></code> | The metadata that you apply to the AI workload configuration to help you categorize and organize it. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `aiWorkloadConfigName`<sup>Required</sup> <a name="aiWorkloadConfigName" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.aiWorkloadConfigName"></a>

- *Type:* java.lang.String

The name of the AI workload configuration.

The name must be unique within your AWS account in the current AWS Region. Only lowercase letters and digits are accepted: DeleteAIWorkloadConfig lowercases the name before looking it up, so a name containing an uppercase letter produces a configuration that can be created and read but never deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_ai_workload_config#ai_workload_config_name SagemakerAiWorkloadConfig#ai_workload_config_name}

---

##### `aiWorkloadConfigs`<sup>Optional</sup> <a name="aiWorkloadConfigs" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.aiWorkloadConfigs"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs">SagemakerAiWorkloadConfigAiWorkloadConfigs</a>

The benchmark tool configuration and workload specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_ai_workload_config#ai_workload_configs SagemakerAiWorkloadConfig#ai_workload_configs}

---

##### `datasetConfig`<sup>Optional</sup> <a name="datasetConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.datasetConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig">SagemakerAiWorkloadConfigDatasetConfig</a>

The dataset configuration for the workload. Specify input data channels with their data sources for benchmark workloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_ai_workload_config#dataset_config SagemakerAiWorkloadConfig#dataset_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags">SagemakerAiWorkloadConfigTags</a>>

The metadata that you apply to the AI workload configuration to help you categorize and organize it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_ai_workload_config#tags SagemakerAiWorkloadConfig#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putAiWorkloadConfigs">putAiWorkloadConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putDatasetConfig">putDatasetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.resetAiWorkloadConfigs">resetAiWorkloadConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.resetDatasetConfig">resetDatasetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAiWorkloadConfigs` <a name="putAiWorkloadConfigs" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putAiWorkloadConfigs"></a>

```java
public void putAiWorkloadConfigs(SagemakerAiWorkloadConfigAiWorkloadConfigs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putAiWorkloadConfigs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs">SagemakerAiWorkloadConfigAiWorkloadConfigs</a>

---

##### `putDatasetConfig` <a name="putDatasetConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putDatasetConfig"></a>

```java
public void putDatasetConfig(SagemakerAiWorkloadConfigDatasetConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putDatasetConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig">SagemakerAiWorkloadConfigDatasetConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SagemakerAiWorkloadConfigTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags">SagemakerAiWorkloadConfigTags</a>>

---

##### `resetAiWorkloadConfigs` <a name="resetAiWorkloadConfigs" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.resetAiWorkloadConfigs"></a>

```java
public void resetAiWorkloadConfigs()
```

##### `resetDatasetConfig` <a name="resetDatasetConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.resetDatasetConfig"></a>

```java
public void resetDatasetConfig()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerAiWorkloadConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isConstruct"></a>

```java
import io.cdktn.providers.awscc.sagemaker_ai_workload_config.SagemakerAiWorkloadConfig;

SagemakerAiWorkloadConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.sagemaker_ai_workload_config.SagemakerAiWorkloadConfig;

SagemakerAiWorkloadConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.sagemaker_ai_workload_config.SagemakerAiWorkloadConfig;

SagemakerAiWorkloadConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.sagemaker_ai_workload_config.SagemakerAiWorkloadConfig;

SagemakerAiWorkloadConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SagemakerAiWorkloadConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SagemakerAiWorkloadConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SagemakerAiWorkloadConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SagemakerAiWorkloadConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_ai_workload_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerAiWorkloadConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigArn">aiWorkloadConfigArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigs">aiWorkloadConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference">SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.datasetConfig">datasetConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference">SagemakerAiWorkloadConfigDatasetConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList">SagemakerAiWorkloadConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigNameInput">aiWorkloadConfigNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigsInput">aiWorkloadConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs">SagemakerAiWorkloadConfigAiWorkloadConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.datasetConfigInput">datasetConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig">SagemakerAiWorkloadConfigDatasetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags">SagemakerAiWorkloadConfigTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigName">aiWorkloadConfigName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `aiWorkloadConfigArn`<sup>Required</sup> <a name="aiWorkloadConfigArn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigArn"></a>

```java
public java.lang.String getAiWorkloadConfigArn();
```

- *Type:* java.lang.String

---

##### `aiWorkloadConfigs`<sup>Required</sup> <a name="aiWorkloadConfigs" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigs"></a>

```java
public SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference getAiWorkloadConfigs();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference">SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference</a>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `datasetConfig`<sup>Required</sup> <a name="datasetConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.datasetConfig"></a>

```java
public SagemakerAiWorkloadConfigDatasetConfigOutputReference getDatasetConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference">SagemakerAiWorkloadConfigDatasetConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.tags"></a>

```java
public SagemakerAiWorkloadConfigTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList">SagemakerAiWorkloadConfigTagsList</a>

---

##### `aiWorkloadConfigNameInput`<sup>Optional</sup> <a name="aiWorkloadConfigNameInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigNameInput"></a>

```java
public java.lang.String getAiWorkloadConfigNameInput();
```

- *Type:* java.lang.String

---

##### `aiWorkloadConfigsInput`<sup>Optional</sup> <a name="aiWorkloadConfigsInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigsInput"></a>

```java
public IResolvable|SagemakerAiWorkloadConfigAiWorkloadConfigs getAiWorkloadConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs">SagemakerAiWorkloadConfigAiWorkloadConfigs</a>

---

##### `datasetConfigInput`<sup>Optional</sup> <a name="datasetConfigInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.datasetConfigInput"></a>

```java
public IResolvable|SagemakerAiWorkloadConfigDatasetConfig getDatasetConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig">SagemakerAiWorkloadConfigDatasetConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SagemakerAiWorkloadConfigTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags">SagemakerAiWorkloadConfigTags</a>>

---

##### `aiWorkloadConfigName`<sup>Required</sup> <a name="aiWorkloadConfigName" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigName"></a>

```java
public java.lang.String getAiWorkloadConfigName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerAiWorkloadConfigAiWorkloadConfigs <a name="SagemakerAiWorkloadConfigAiWorkloadConfigs" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_ai_workload_config.SagemakerAiWorkloadConfigAiWorkloadConfigs;

SagemakerAiWorkloadConfigAiWorkloadConfigs.builder()
//  .workloadSpec(SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs.property.workloadSpec">workloadSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec">SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec</a></code> | The workload specification that defines benchmark parameters. |

---

##### `workloadSpec`<sup>Optional</sup> <a name="workloadSpec" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs.property.workloadSpec"></a>

```java
public SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec getWorkloadSpec();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec">SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec</a>

The workload specification that defines benchmark parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_ai_workload_config#workload_spec SagemakerAiWorkloadConfig#workload_spec}

---

### SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec <a name="SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_ai_workload_config.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec;

SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec.builder()
//  .inline(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec.property.inline">inline</a></code> | <code>java.lang.String</code> | An inline YAML or JSON string that defines benchmark parameters. |

---

##### `inline`<sup>Optional</sup> <a name="inline" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec.property.inline"></a>

```java
public java.lang.String getInline();
```

- *Type:* java.lang.String

An inline YAML or JSON string that defines benchmark parameters.

The service validates the document against its own benchmark schema: it must declare a benchmark object whose type member matches the pattern ^(aiperf)$.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_ai_workload_config#inline SagemakerAiWorkloadConfig#inline}

---

### SagemakerAiWorkloadConfigConfig <a name="SagemakerAiWorkloadConfigConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_ai_workload_config.SagemakerAiWorkloadConfigConfig;

SagemakerAiWorkloadConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .aiWorkloadConfigName(java.lang.String)
//  .aiWorkloadConfigs(SagemakerAiWorkloadConfigAiWorkloadConfigs)
//  .datasetConfig(SagemakerAiWorkloadConfigDatasetConfig)
//  .tags(IResolvable|java.util.List<SagemakerAiWorkloadConfigTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.aiWorkloadConfigName">aiWorkloadConfigName</a></code> | <code>java.lang.String</code> | The name of the AI workload configuration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.aiWorkloadConfigs">aiWorkloadConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs">SagemakerAiWorkloadConfigAiWorkloadConfigs</a></code> | The benchmark tool configuration and workload specification. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.datasetConfig">datasetConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig">SagemakerAiWorkloadConfigDatasetConfig</a></code> | The dataset configuration for the workload. Specify input data channels with their data sources for benchmark workloads. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags">SagemakerAiWorkloadConfigTags</a>></code> | The metadata that you apply to the AI workload configuration to help you categorize and organize it. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `aiWorkloadConfigName`<sup>Required</sup> <a name="aiWorkloadConfigName" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.aiWorkloadConfigName"></a>

```java
public java.lang.String getAiWorkloadConfigName();
```

- *Type:* java.lang.String

The name of the AI workload configuration.

The name must be unique within your AWS account in the current AWS Region. Only lowercase letters and digits are accepted: DeleteAIWorkloadConfig lowercases the name before looking it up, so a name containing an uppercase letter produces a configuration that can be created and read but never deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_ai_workload_config#ai_workload_config_name SagemakerAiWorkloadConfig#ai_workload_config_name}

---

##### `aiWorkloadConfigs`<sup>Optional</sup> <a name="aiWorkloadConfigs" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.aiWorkloadConfigs"></a>

```java
public SagemakerAiWorkloadConfigAiWorkloadConfigs getAiWorkloadConfigs();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs">SagemakerAiWorkloadConfigAiWorkloadConfigs</a>

The benchmark tool configuration and workload specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_ai_workload_config#ai_workload_configs SagemakerAiWorkloadConfig#ai_workload_configs}

---

##### `datasetConfig`<sup>Optional</sup> <a name="datasetConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.datasetConfig"></a>

```java
public SagemakerAiWorkloadConfigDatasetConfig getDatasetConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig">SagemakerAiWorkloadConfigDatasetConfig</a>

The dataset configuration for the workload. Specify input data channels with their data sources for benchmark workloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_ai_workload_config#dataset_config SagemakerAiWorkloadConfig#dataset_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SagemakerAiWorkloadConfigTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags">SagemakerAiWorkloadConfigTags</a>>

The metadata that you apply to the AI workload configuration to help you categorize and organize it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_ai_workload_config#tags SagemakerAiWorkloadConfig#tags}

---

### SagemakerAiWorkloadConfigDatasetConfig <a name="SagemakerAiWorkloadConfigDatasetConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_ai_workload_config.SagemakerAiWorkloadConfigDatasetConfig;

SagemakerAiWorkloadConfigDatasetConfig.builder()
//  .inputDataConfig(IResolvable|java.util.List<SagemakerAiWorkloadConfigDatasetConfigInputDataConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig.property.inputDataConfig">inputDataConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig">SagemakerAiWorkloadConfigDatasetConfigInputDataConfig</a>></code> | An array of input data channel configurations for the workload. |

---

##### `inputDataConfig`<sup>Optional</sup> <a name="inputDataConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig.property.inputDataConfig"></a>

```java
public IResolvable|java.util.List<SagemakerAiWorkloadConfigDatasetConfigInputDataConfig> getInputDataConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig">SagemakerAiWorkloadConfigDatasetConfigInputDataConfig</a>>

An array of input data channel configurations for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_ai_workload_config#input_data_config SagemakerAiWorkloadConfig#input_data_config}

---

### SagemakerAiWorkloadConfigDatasetConfigInputDataConfig <a name="SagemakerAiWorkloadConfigDatasetConfigInputDataConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_ai_workload_config.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig;

SagemakerAiWorkloadConfigDatasetConfigInputDataConfig.builder()
//  .channelName(java.lang.String)
//  .dataSource(SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig.property.channelName">channelName</a></code> | <code>java.lang.String</code> | The logical name for the data channel. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig.property.dataSource">dataSource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource</a></code> | The data source for this channel. |

---

##### `channelName`<sup>Optional</sup> <a name="channelName" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

The logical name for the data channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_ai_workload_config#channel_name SagemakerAiWorkloadConfig#channel_name}

---

##### `dataSource`<sup>Optional</sup> <a name="dataSource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig.property.dataSource"></a>

```java
public SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource getDataSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource</a>

The data source for this channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_ai_workload_config#data_source SagemakerAiWorkloadConfig#data_source}

---

### SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource <a name="SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_ai_workload_config.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource;

SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource.builder()
//  .s3DataSource(SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource.property.s3DataSource">s3DataSource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource</a></code> | The Amazon S3 data source configuration. |

---

##### `s3DataSource`<sup>Optional</sup> <a name="s3DataSource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource.property.s3DataSource"></a>

```java
public SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource getS3DataSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource</a>

The Amazon S3 data source configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_ai_workload_config#s3_data_source SagemakerAiWorkloadConfig#s3_data_source}

---

### SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource <a name="SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_ai_workload_config.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource;

SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource.builder()
//  .s3Uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | The Amazon S3 URI of the data. |

---

##### `s3Uri`<sup>Optional</sup> <a name="s3Uri" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

The Amazon S3 URI of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_ai_workload_config#s3_uri SagemakerAiWorkloadConfig#s3_uri}

---

### SagemakerAiWorkloadConfigTags <a name="SagemakerAiWorkloadConfigTags" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_ai_workload_config.SagemakerAiWorkloadConfigTags;

SagemakerAiWorkloadConfigTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags.property.key">key</a></code> | <code>java.lang.String</code> | The tag key. Tag keys must be unique per resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags.property.value">value</a></code> | <code>java.lang.String</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The tag key. Tag keys must be unique per resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_ai_workload_config#key SagemakerAiWorkloadConfig#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_ai_workload_config#value SagemakerAiWorkloadConfig#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference <a name="SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_ai_workload_config.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference;

new SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.putWorkloadSpec">putWorkloadSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.resetWorkloadSpec">resetWorkloadSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWorkloadSpec` <a name="putWorkloadSpec" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.putWorkloadSpec"></a>

```java
public void putWorkloadSpec(SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.putWorkloadSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec">SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec</a>

---

##### `resetWorkloadSpec` <a name="resetWorkloadSpec" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.resetWorkloadSpec"></a>

```java
public void resetWorkloadSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.workloadSpec">workloadSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference">SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.workloadSpecInput">workloadSpecInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec">SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs">SagemakerAiWorkloadConfigAiWorkloadConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workloadSpec`<sup>Required</sup> <a name="workloadSpec" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.workloadSpec"></a>

```java
public SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference getWorkloadSpec();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference">SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference</a>

---

##### `workloadSpecInput`<sup>Optional</sup> <a name="workloadSpecInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.workloadSpecInput"></a>

```java
public IResolvable|SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec getWorkloadSpecInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec">SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerAiWorkloadConfigAiWorkloadConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs">SagemakerAiWorkloadConfigAiWorkloadConfigs</a>

---


### SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference <a name="SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_ai_workload_config.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference;

new SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.resetInline">resetInline</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInline` <a name="resetInline" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.resetInline"></a>

```java
public void resetInline()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.inlineInput">inlineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.inline">inline</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec">SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inlineInput`<sup>Optional</sup> <a name="inlineInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.inlineInput"></a>

```java
public java.lang.String getInlineInput();
```

- *Type:* java.lang.String

---

##### `inline`<sup>Required</sup> <a name="inline" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.inline"></a>

```java
public java.lang.String getInline();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec">SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec</a>

---


### SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference <a name="SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_ai_workload_config.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference;

new SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.putS3DataSource">putS3DataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.resetS3DataSource">resetS3DataSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3DataSource` <a name="putS3DataSource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.putS3DataSource"></a>

```java
public void putS3DataSource(SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.putS3DataSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource</a>

---

##### `resetS3DataSource` <a name="resetS3DataSource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.resetS3DataSource"></a>

```java
public void resetS3DataSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.s3DataSource">s3DataSource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.s3DataSourceInput">s3DataSourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3DataSource`<sup>Required</sup> <a name="s3DataSource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.s3DataSource"></a>

```java
public SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference getS3DataSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference</a>

---

##### `s3DataSourceInput`<sup>Optional</sup> <a name="s3DataSourceInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.s3DataSourceInput"></a>

```java
public IResolvable|SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource getS3DataSourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource</a>

---


### SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference <a name="SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_ai_workload_config.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference;

new SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.resetS3Uri">resetS3Uri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3Uri` <a name="resetS3Uri" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.resetS3Uri"></a>

```java
public void resetS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.s3UriInput"></a>

```java
public java.lang.String getS3UriInput();
```

- *Type:* java.lang.String

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource</a>

---


### SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList <a name="SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_ai_workload_config.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList;

new SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.get"></a>

```java
public SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig">SagemakerAiWorkloadConfigDatasetConfigInputDataConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerAiWorkloadConfigDatasetConfigInputDataConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig">SagemakerAiWorkloadConfigDatasetConfigInputDataConfig</a>>

---


### SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference <a name="SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_ai_workload_config.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference;

new SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.putDataSource">putDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resetChannelName">resetChannelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resetDataSource">resetDataSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataSource` <a name="putDataSource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.putDataSource"></a>

```java
public void putDataSource(SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.putDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource</a>

---

##### `resetChannelName` <a name="resetChannelName" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resetChannelName"></a>

```java
public void resetChannelName()
```

##### `resetDataSource` <a name="resetDataSource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resetDataSource"></a>

```java
public void resetDataSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.dataSource">dataSource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.channelNameInput">channelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.dataSourceInput">dataSourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.channelName">channelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig">SagemakerAiWorkloadConfigDatasetConfigInputDataConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.dataSource"></a>

```java
public SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference getDataSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference</a>

---

##### `channelNameInput`<sup>Optional</sup> <a name="channelNameInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.channelNameInput"></a>

```java
public java.lang.String getChannelNameInput();
```

- *Type:* java.lang.String

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.dataSourceInput"></a>

```java
public IResolvable|SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource getDataSourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource</a>

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerAiWorkloadConfigDatasetConfigInputDataConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig">SagemakerAiWorkloadConfigDatasetConfigInputDataConfig</a>

---


### SagemakerAiWorkloadConfigDatasetConfigOutputReference <a name="SagemakerAiWorkloadConfigDatasetConfigOutputReference" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_ai_workload_config.SagemakerAiWorkloadConfigDatasetConfigOutputReference;

new SagemakerAiWorkloadConfigDatasetConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.putInputDataConfig">putInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.resetInputDataConfig">resetInputDataConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInputDataConfig` <a name="putInputDataConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.putInputDataConfig"></a>

```java
public void putInputDataConfig(IResolvable|java.util.List<SagemakerAiWorkloadConfigDatasetConfigInputDataConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.putInputDataConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig">SagemakerAiWorkloadConfigDatasetConfigInputDataConfig</a>>

---

##### `resetInputDataConfig` <a name="resetInputDataConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.resetInputDataConfig"></a>

```java
public void resetInputDataConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.inputDataConfig">inputDataConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.inputDataConfigInput">inputDataConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig">SagemakerAiWorkloadConfigDatasetConfigInputDataConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig">SagemakerAiWorkloadConfigDatasetConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputDataConfig`<sup>Required</sup> <a name="inputDataConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.inputDataConfig"></a>

```java
public SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList getInputDataConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList</a>

---

##### `inputDataConfigInput`<sup>Optional</sup> <a name="inputDataConfigInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.inputDataConfigInput"></a>

```java
public IResolvable|java.util.List<SagemakerAiWorkloadConfigDatasetConfigInputDataConfig> getInputDataConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig">SagemakerAiWorkloadConfigDatasetConfigInputDataConfig</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerAiWorkloadConfigDatasetConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig">SagemakerAiWorkloadConfigDatasetConfig</a>

---


### SagemakerAiWorkloadConfigTagsList <a name="SagemakerAiWorkloadConfigTagsList" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_ai_workload_config.SagemakerAiWorkloadConfigTagsList;

new SagemakerAiWorkloadConfigTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.get"></a>

```java
public SagemakerAiWorkloadConfigTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags">SagemakerAiWorkloadConfigTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerAiWorkloadConfigTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags">SagemakerAiWorkloadConfigTags</a>>

---


### SagemakerAiWorkloadConfigTagsOutputReference <a name="SagemakerAiWorkloadConfigTagsOutputReference" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_ai_workload_config.SagemakerAiWorkloadConfigTagsOutputReference;

new SagemakerAiWorkloadConfigTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags">SagemakerAiWorkloadConfigTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerAiWorkloadConfigTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags">SagemakerAiWorkloadConfigTags</a>

---



