# `sagemakerExperimentTrialComponent` Submodule <a name="`sagemakerExperimentTrialComponent` Submodule" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerExperimentTrialComponent <a name="SagemakerExperimentTrialComponent" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component awscc_sagemaker_experiment_trial_component}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_experiment_trial_component.SagemakerExperimentTrialComponent;

SagemakerExperimentTrialComponent.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .trialComponentName(java.lang.String)
//  .displayName(java.lang.String)
//  .endTime(java.lang.String)
//  .metadataProperties(SagemakerExperimentTrialComponentMetadataProperties)
//  .startTime(java.lang.String)
//  .status(SagemakerExperimentTrialComponentStatus)
//  .tags(IResolvable|java.util.List<SagemakerExperimentTrialComponentTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.trialComponentName">trialComponentName</a></code> | <code>java.lang.String</code> | The name of the trial component. The name must be unique in your AWS account and is not case-sensitive. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The name of the component as displayed. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.endTime">endTime</a></code> | <code>java.lang.String</code> | When the component ended. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.metadataProperties">metadataProperties</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties">SagemakerExperimentTrialComponentMetadataProperties</a></code> | Metadata properties of the tracking entity, trial, or trial component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.startTime">startTime</a></code> | <code>java.lang.String</code> | When the component started. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.status">status</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus">SagemakerExperimentTrialComponentStatus</a></code> | The status of the trial component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags">SagemakerExperimentTrialComponentTags</a>></code> | A list of tags to associate with the component. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `trialComponentName`<sup>Required</sup> <a name="trialComponentName" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.trialComponentName"></a>

- *Type:* java.lang.String

The name of the trial component. The name must be unique in your AWS account and is not case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#trial_component_name SagemakerExperimentTrialComponent#trial_component_name}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The name of the component as displayed.

The name doesn't need to be unique. If DisplayName isn't specified, TrialComponentName is displayed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#display_name SagemakerExperimentTrialComponent#display_name}

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.endTime"></a>

- *Type:* java.lang.String

When the component ended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#end_time SagemakerExperimentTrialComponent#end_time}

---

##### `metadataProperties`<sup>Optional</sup> <a name="metadataProperties" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.metadataProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties">SagemakerExperimentTrialComponentMetadataProperties</a>

Metadata properties of the tracking entity, trial, or trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#metadata_properties SagemakerExperimentTrialComponent#metadata_properties}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.startTime"></a>

- *Type:* java.lang.String

When the component started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#start_time SagemakerExperimentTrialComponent#start_time}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.status"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus">SagemakerExperimentTrialComponentStatus</a>

The status of the trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#status SagemakerExperimentTrialComponent#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags">SagemakerExperimentTrialComponentTags</a>>

A list of tags to associate with the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#tags SagemakerExperimentTrialComponent#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putMetadataProperties">putMetadataProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putStatus">putStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetMetadataProperties">resetMetadataProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetadataProperties` <a name="putMetadataProperties" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putMetadataProperties"></a>

```java
public void putMetadataProperties(SagemakerExperimentTrialComponentMetadataProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putMetadataProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties">SagemakerExperimentTrialComponentMetadataProperties</a>

---

##### `putStatus` <a name="putStatus" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putStatus"></a>

```java
public void putStatus(SagemakerExperimentTrialComponentStatus value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putStatus.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus">SagemakerExperimentTrialComponentStatus</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SagemakerExperimentTrialComponentTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags">SagemakerExperimentTrialComponentTags</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetMetadataProperties` <a name="resetMetadataProperties" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetMetadataProperties"></a>

```java
public void resetMetadataProperties()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetStartTime"></a>

```java
public void resetStartTime()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerExperimentTrialComponent resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isConstruct"></a>

```java
import io.cdktn.providers.awscc.sagemaker_experiment_trial_component.SagemakerExperimentTrialComponent;

SagemakerExperimentTrialComponent.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.sagemaker_experiment_trial_component.SagemakerExperimentTrialComponent;

SagemakerExperimentTrialComponent.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.sagemaker_experiment_trial_component.SagemakerExperimentTrialComponent;

SagemakerExperimentTrialComponent.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.sagemaker_experiment_trial_component.SagemakerExperimentTrialComponent;

SagemakerExperimentTrialComponent.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SagemakerExperimentTrialComponent.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SagemakerExperimentTrialComponent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SagemakerExperimentTrialComponent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SagemakerExperimentTrialComponent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerExperimentTrialComponent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.lastModifiedTime">lastModifiedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.lineageGroupArn">lineageGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.metadataProperties">metadataProperties</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference">SagemakerExperimentTrialComponentMetadataPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.status">status</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference">SagemakerExperimentTrialComponentStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList">SagemakerExperimentTrialComponentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.metadataPropertiesInput">metadataPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties">SagemakerExperimentTrialComponentMetadataProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.statusInput">statusInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus">SagemakerExperimentTrialComponentStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags">SagemakerExperimentTrialComponentTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.trialComponentNameInput">trialComponentNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.trialComponentName">trialComponentName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.lastModifiedTime"></a>

```java
public java.lang.String getLastModifiedTime();
```

- *Type:* java.lang.String

---

##### `lineageGroupArn`<sup>Required</sup> <a name="lineageGroupArn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.lineageGroupArn"></a>

```java
public java.lang.String getLineageGroupArn();
```

- *Type:* java.lang.String

---

##### `metadataProperties`<sup>Required</sup> <a name="metadataProperties" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.metadataProperties"></a>

```java
public SagemakerExperimentTrialComponentMetadataPropertiesOutputReference getMetadataProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference">SagemakerExperimentTrialComponentMetadataPropertiesOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.status"></a>

```java
public SagemakerExperimentTrialComponentStatusOutputReference getStatus();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference">SagemakerExperimentTrialComponentStatusOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.tags"></a>

```java
public SagemakerExperimentTrialComponentTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList">SagemakerExperimentTrialComponentTagsList</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `metadataPropertiesInput`<sup>Optional</sup> <a name="metadataPropertiesInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.metadataPropertiesInput"></a>

```java
public IResolvable|SagemakerExperimentTrialComponentMetadataProperties getMetadataPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties">SagemakerExperimentTrialComponentMetadataProperties</a>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.statusInput"></a>

```java
public IResolvable|SagemakerExperimentTrialComponentStatus getStatusInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus">SagemakerExperimentTrialComponentStatus</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SagemakerExperimentTrialComponentTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags">SagemakerExperimentTrialComponentTags</a>>

---

##### `trialComponentNameInput`<sup>Optional</sup> <a name="trialComponentNameInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.trialComponentNameInput"></a>

```java
public java.lang.String getTrialComponentNameInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `trialComponentName`<sup>Required</sup> <a name="trialComponentName" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.trialComponentName"></a>

```java
public java.lang.String getTrialComponentName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerExperimentTrialComponentConfig <a name="SagemakerExperimentTrialComponentConfig" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_experiment_trial_component.SagemakerExperimentTrialComponentConfig;

SagemakerExperimentTrialComponentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .trialComponentName(java.lang.String)
//  .displayName(java.lang.String)
//  .endTime(java.lang.String)
//  .metadataProperties(SagemakerExperimentTrialComponentMetadataProperties)
//  .startTime(java.lang.String)
//  .status(SagemakerExperimentTrialComponentStatus)
//  .tags(IResolvable|java.util.List<SagemakerExperimentTrialComponentTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.trialComponentName">trialComponentName</a></code> | <code>java.lang.String</code> | The name of the trial component. The name must be unique in your AWS account and is not case-sensitive. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The name of the component as displayed. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.endTime">endTime</a></code> | <code>java.lang.String</code> | When the component ended. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.metadataProperties">metadataProperties</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties">SagemakerExperimentTrialComponentMetadataProperties</a></code> | Metadata properties of the tracking entity, trial, or trial component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.startTime">startTime</a></code> | <code>java.lang.String</code> | When the component started. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.status">status</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus">SagemakerExperimentTrialComponentStatus</a></code> | The status of the trial component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags">SagemakerExperimentTrialComponentTags</a>></code> | A list of tags to associate with the component. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `trialComponentName`<sup>Required</sup> <a name="trialComponentName" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.trialComponentName"></a>

```java
public java.lang.String getTrialComponentName();
```

- *Type:* java.lang.String

The name of the trial component. The name must be unique in your AWS account and is not case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#trial_component_name SagemakerExperimentTrialComponent#trial_component_name}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The name of the component as displayed.

The name doesn't need to be unique. If DisplayName isn't specified, TrialComponentName is displayed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#display_name SagemakerExperimentTrialComponent#display_name}

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

When the component ended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#end_time SagemakerExperimentTrialComponent#end_time}

---

##### `metadataProperties`<sup>Optional</sup> <a name="metadataProperties" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.metadataProperties"></a>

```java
public SagemakerExperimentTrialComponentMetadataProperties getMetadataProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties">SagemakerExperimentTrialComponentMetadataProperties</a>

Metadata properties of the tracking entity, trial, or trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#metadata_properties SagemakerExperimentTrialComponent#metadata_properties}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

When the component started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#start_time SagemakerExperimentTrialComponent#start_time}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.status"></a>

```java
public SagemakerExperimentTrialComponentStatus getStatus();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus">SagemakerExperimentTrialComponentStatus</a>

The status of the trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#status SagemakerExperimentTrialComponent#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SagemakerExperimentTrialComponentTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags">SagemakerExperimentTrialComponentTags</a>>

A list of tags to associate with the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#tags SagemakerExperimentTrialComponent#tags}

---

### SagemakerExperimentTrialComponentMetadataProperties <a name="SagemakerExperimentTrialComponentMetadataProperties" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_experiment_trial_component.SagemakerExperimentTrialComponentMetadataProperties;

SagemakerExperimentTrialComponentMetadataProperties.builder()
//  .commitId(java.lang.String)
//  .generatedBy(java.lang.String)
//  .projectId(java.lang.String)
//  .repository(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.property.commitId">commitId</a></code> | <code>java.lang.String</code> | The commit ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.property.generatedBy">generatedBy</a></code> | <code>java.lang.String</code> | The entity this entity was generated by. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The project ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.property.repository">repository</a></code> | <code>java.lang.String</code> | The repository. |

---

##### `commitId`<sup>Optional</sup> <a name="commitId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.property.commitId"></a>

```java
public java.lang.String getCommitId();
```

- *Type:* java.lang.String

The commit ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#commit_id SagemakerExperimentTrialComponent#commit_id}

---

##### `generatedBy`<sup>Optional</sup> <a name="generatedBy" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.property.generatedBy"></a>

```java
public java.lang.String getGeneratedBy();
```

- *Type:* java.lang.String

The entity this entity was generated by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#generated_by SagemakerExperimentTrialComponent#generated_by}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#project_id SagemakerExperimentTrialComponent#project_id}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

The repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#repository SagemakerExperimentTrialComponent#repository}

---

### SagemakerExperimentTrialComponentStatus <a name="SagemakerExperimentTrialComponentStatus" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_experiment_trial_component.SagemakerExperimentTrialComponentStatus;

SagemakerExperimentTrialComponentStatus.builder()
//  .message(java.lang.String)
//  .primaryStatus(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus.property.message">message</a></code> | <code>java.lang.String</code> | If the component failed, a message describing why. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus.property.primaryStatus">primaryStatus</a></code> | <code>java.lang.String</code> | The status of the trial component. |

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

If the component failed, a message describing why.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#message SagemakerExperimentTrialComponent#message}

---

##### `primaryStatus`<sup>Optional</sup> <a name="primaryStatus" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus.property.primaryStatus"></a>

```java
public java.lang.String getPrimaryStatus();
```

- *Type:* java.lang.String

The status of the trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#primary_status SagemakerExperimentTrialComponent#primary_status}

---

### SagemakerExperimentTrialComponentTags <a name="SagemakerExperimentTrialComponentTags" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_experiment_trial_component.SagemakerExperimentTrialComponentTags;

SagemakerExperimentTrialComponentTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags.property.key">key</a></code> | <code>java.lang.String</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags.property.value">value</a></code> | <code>java.lang.String</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#key SagemakerExperimentTrialComponent#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#value SagemakerExperimentTrialComponent#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerExperimentTrialComponentMetadataPropertiesOutputReference <a name="SagemakerExperimentTrialComponentMetadataPropertiesOutputReference" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_experiment_trial_component.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference;

new SagemakerExperimentTrialComponentMetadataPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resetCommitId">resetCommitId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resetGeneratedBy">resetGeneratedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resetRepository">resetRepository</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommitId` <a name="resetCommitId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resetCommitId"></a>

```java
public void resetCommitId()
```

##### `resetGeneratedBy` <a name="resetGeneratedBy" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resetGeneratedBy"></a>

```java
public void resetGeneratedBy()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetRepository` <a name="resetRepository" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resetRepository"></a>

```java
public void resetRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.commitIdInput">commitIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.generatedByInput">generatedByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.commitId">commitId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.generatedBy">generatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties">SagemakerExperimentTrialComponentMetadataProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commitIdInput`<sup>Optional</sup> <a name="commitIdInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.commitIdInput"></a>

```java
public java.lang.String getCommitIdInput();
```

- *Type:* java.lang.String

---

##### `generatedByInput`<sup>Optional</sup> <a name="generatedByInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.generatedByInput"></a>

```java
public java.lang.String getGeneratedByInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `commitId`<sup>Required</sup> <a name="commitId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.commitId"></a>

```java
public java.lang.String getCommitId();
```

- *Type:* java.lang.String

---

##### `generatedBy`<sup>Required</sup> <a name="generatedBy" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.generatedBy"></a>

```java
public java.lang.String getGeneratedBy();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerExperimentTrialComponentMetadataProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties">SagemakerExperimentTrialComponentMetadataProperties</a>

---


### SagemakerExperimentTrialComponentStatusOutputReference <a name="SagemakerExperimentTrialComponentStatusOutputReference" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_experiment_trial_component.SagemakerExperimentTrialComponentStatusOutputReference;

new SagemakerExperimentTrialComponentStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.resetPrimaryStatus">resetPrimaryStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessage` <a name="resetMessage" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.resetMessage"></a>

```java
public void resetMessage()
```

##### `resetPrimaryStatus` <a name="resetPrimaryStatus" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.resetPrimaryStatus"></a>

```java
public void resetPrimaryStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.messageInput">messageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.primaryStatusInput">primaryStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.primaryStatus">primaryStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus">SagemakerExperimentTrialComponentStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.messageInput"></a>

```java
public java.lang.String getMessageInput();
```

- *Type:* java.lang.String

---

##### `primaryStatusInput`<sup>Optional</sup> <a name="primaryStatusInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.primaryStatusInput"></a>

```java
public java.lang.String getPrimaryStatusInput();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `primaryStatus`<sup>Required</sup> <a name="primaryStatus" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.primaryStatus"></a>

```java
public java.lang.String getPrimaryStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerExperimentTrialComponentStatus getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus">SagemakerExperimentTrialComponentStatus</a>

---


### SagemakerExperimentTrialComponentTagsList <a name="SagemakerExperimentTrialComponentTagsList" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_experiment_trial_component.SagemakerExperimentTrialComponentTagsList;

new SagemakerExperimentTrialComponentTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.get"></a>

```java
public SagemakerExperimentTrialComponentTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags">SagemakerExperimentTrialComponentTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerExperimentTrialComponentTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags">SagemakerExperimentTrialComponentTags</a>>

---


### SagemakerExperimentTrialComponentTagsOutputReference <a name="SagemakerExperimentTrialComponentTagsOutputReference" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_experiment_trial_component.SagemakerExperimentTrialComponentTagsOutputReference;

new SagemakerExperimentTrialComponentTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags">SagemakerExperimentTrialComponentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerExperimentTrialComponentTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags">SagemakerExperimentTrialComponentTags</a>

---



