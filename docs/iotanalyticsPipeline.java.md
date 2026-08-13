# `iotanalyticsPipeline` Submodule <a name="`iotanalyticsPipeline` Submodule" id="@cdktn/provider-awscc.iotanalyticsPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotanalyticsPipeline <a name="IotanalyticsPipeline" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline awscc_iotanalytics_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_pipeline.IotanalyticsPipeline;

IotanalyticsPipeline.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .pipelineActivities(IResolvable|java.util.List<IotanalyticsPipelinePipelineActivities>)
//  .pipelineName(java.lang.String)
//  .tags(IResolvable|java.util.List<IotanalyticsPipelineTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.pipelineActivities">pipelineActivities</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities">IotanalyticsPipelinePipelineActivities</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#pipeline_activities IotanalyticsPipeline#pipeline_activities}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.pipelineName">pipelineName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#pipeline_name IotanalyticsPipeline#pipeline_name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags">IotanalyticsPipelineTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#tags IotanalyticsPipeline#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `pipelineActivities`<sup>Required</sup> <a name="pipelineActivities" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.pipelineActivities"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities">IotanalyticsPipelinePipelineActivities</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#pipeline_activities IotanalyticsPipeline#pipeline_activities}.

---

##### `pipelineName`<sup>Optional</sup> <a name="pipelineName" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.pipelineName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#pipeline_name IotanalyticsPipeline#pipeline_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags">IotanalyticsPipelineTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#tags IotanalyticsPipeline#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.putPipelineActivities">putPipelineActivities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.resetPipelineName">resetPipelineName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPipelineActivities` <a name="putPipelineActivities" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.putPipelineActivities"></a>

```java
public void putPipelineActivities(IResolvable|java.util.List<IotanalyticsPipelinePipelineActivities> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.putPipelineActivities.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities">IotanalyticsPipelinePipelineActivities</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<IotanalyticsPipelineTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags">IotanalyticsPipelineTags</a>>

---

##### `resetPipelineName` <a name="resetPipelineName" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.resetPipelineName"></a>

```java
public void resetPipelineName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotanalyticsPipeline resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.isConstruct"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_pipeline.IotanalyticsPipeline;

IotanalyticsPipeline.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_pipeline.IotanalyticsPipeline;

IotanalyticsPipeline.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_pipeline.IotanalyticsPipeline;

IotanalyticsPipeline.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_pipeline.IotanalyticsPipeline;

IotanalyticsPipeline.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotanalyticsPipeline.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IotanalyticsPipeline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotanalyticsPipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotanalyticsPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IotanalyticsPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.pipelineActivities">pipelineActivities</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList">IotanalyticsPipelinePipelineActivitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList">IotanalyticsPipelineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.pipelineActivitiesInput">pipelineActivitiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities">IotanalyticsPipelinePipelineActivities</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.pipelineNameInput">pipelineNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags">IotanalyticsPipelineTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.pipelineName">pipelineName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `pipelineActivities`<sup>Required</sup> <a name="pipelineActivities" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.pipelineActivities"></a>

```java
public IotanalyticsPipelinePipelineActivitiesList getPipelineActivities();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList">IotanalyticsPipelinePipelineActivitiesList</a>

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.pipelineId"></a>

```java
public java.lang.String getPipelineId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.tags"></a>

```java
public IotanalyticsPipelineTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList">IotanalyticsPipelineTagsList</a>

---

##### `pipelineActivitiesInput`<sup>Optional</sup> <a name="pipelineActivitiesInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.pipelineActivitiesInput"></a>

```java
public IResolvable|java.util.List<IotanalyticsPipelinePipelineActivities> getPipelineActivitiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities">IotanalyticsPipelinePipelineActivities</a>>

---

##### `pipelineNameInput`<sup>Optional</sup> <a name="pipelineNameInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.pipelineNameInput"></a>

```java
public java.lang.String getPipelineNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.tagsInput"></a>

```java
public IResolvable|java.util.List<IotanalyticsPipelineTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags">IotanalyticsPipelineTags</a>>

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.pipelineName"></a>

```java
public java.lang.String getPipelineName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotanalyticsPipelineConfig <a name="IotanalyticsPipelineConfig" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_pipeline.IotanalyticsPipelineConfig;

IotanalyticsPipelineConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .pipelineActivities(IResolvable|java.util.List<IotanalyticsPipelinePipelineActivities>)
//  .pipelineName(java.lang.String)
//  .tags(IResolvable|java.util.List<IotanalyticsPipelineTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.pipelineActivities">pipelineActivities</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities">IotanalyticsPipelinePipelineActivities</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#pipeline_activities IotanalyticsPipeline#pipeline_activities}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.pipelineName">pipelineName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#pipeline_name IotanalyticsPipeline#pipeline_name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags">IotanalyticsPipelineTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#tags IotanalyticsPipeline#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `pipelineActivities`<sup>Required</sup> <a name="pipelineActivities" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.pipelineActivities"></a>

```java
public IResolvable|java.util.List<IotanalyticsPipelinePipelineActivities> getPipelineActivities();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities">IotanalyticsPipelinePipelineActivities</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#pipeline_activities IotanalyticsPipeline#pipeline_activities}.

---

##### `pipelineName`<sup>Optional</sup> <a name="pipelineName" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.pipelineName"></a>

```java
public java.lang.String getPipelineName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#pipeline_name IotanalyticsPipeline#pipeline_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.tags"></a>

```java
public IResolvable|java.util.List<IotanalyticsPipelineTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags">IotanalyticsPipelineTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#tags IotanalyticsPipeline#tags}.

---

### IotanalyticsPipelinePipelineActivities <a name="IotanalyticsPipelinePipelineActivities" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_pipeline.IotanalyticsPipelinePipelineActivities;

IotanalyticsPipelinePipelineActivities.builder()
//  .addAttributes(IotanalyticsPipelinePipelineActivitiesAddAttributes)
//  .channel(IotanalyticsPipelinePipelineActivitiesChannel)
//  .datastore(IotanalyticsPipelinePipelineActivitiesDatastore)
//  .deviceRegistryEnrich(IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich)
//  .deviceShadowEnrich(IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich)
//  .filter(IotanalyticsPipelinePipelineActivitiesFilter)
//  .lambda(IotanalyticsPipelinePipelineActivitiesLambda)
//  .math(IotanalyticsPipelinePipelineActivitiesMath)
//  .removeAttributes(IotanalyticsPipelinePipelineActivitiesRemoveAttributes)
//  .selectAttributes(IotanalyticsPipelinePipelineActivitiesSelectAttributes)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.addAttributes">addAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributes">IotanalyticsPipelinePipelineActivitiesAddAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#add_attributes IotanalyticsPipeline#add_attributes}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.channel">channel</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannel">IotanalyticsPipelinePipelineActivitiesChannel</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#channel IotanalyticsPipeline#channel}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.datastore">datastore</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastore">IotanalyticsPipelinePipelineActivitiesDatastore</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#datastore IotanalyticsPipeline#datastore}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.deviceRegistryEnrich">deviceRegistryEnrich</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich">IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#device_registry_enrich IotanalyticsPipeline#device_registry_enrich}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.deviceShadowEnrich">deviceShadowEnrich</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich">IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#device_shadow_enrich IotanalyticsPipeline#device_shadow_enrich}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilter">IotanalyticsPipelinePipelineActivitiesFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#filter IotanalyticsPipeline#filter}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.lambda">lambda</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda">IotanalyticsPipelinePipelineActivitiesLambda</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#lambda IotanalyticsPipeline#lambda}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.math">math</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath">IotanalyticsPipelinePipelineActivitiesMath</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#math IotanalyticsPipeline#math}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.removeAttributes">removeAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributes">IotanalyticsPipelinePipelineActivitiesRemoveAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#remove_attributes IotanalyticsPipeline#remove_attributes}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.selectAttributes">selectAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributes">IotanalyticsPipelinePipelineActivitiesSelectAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#select_attributes IotanalyticsPipeline#select_attributes}. |

---

##### `addAttributes`<sup>Optional</sup> <a name="addAttributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.addAttributes"></a>

```java
public IotanalyticsPipelinePipelineActivitiesAddAttributes getAddAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributes">IotanalyticsPipelinePipelineActivitiesAddAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#add_attributes IotanalyticsPipeline#add_attributes}.

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.channel"></a>

```java
public IotanalyticsPipelinePipelineActivitiesChannel getChannel();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannel">IotanalyticsPipelinePipelineActivitiesChannel</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#channel IotanalyticsPipeline#channel}.

---

##### `datastore`<sup>Optional</sup> <a name="datastore" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.datastore"></a>

```java
public IotanalyticsPipelinePipelineActivitiesDatastore getDatastore();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastore">IotanalyticsPipelinePipelineActivitiesDatastore</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#datastore IotanalyticsPipeline#datastore}.

---

##### `deviceRegistryEnrich`<sup>Optional</sup> <a name="deviceRegistryEnrich" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.deviceRegistryEnrich"></a>

```java
public IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich getDeviceRegistryEnrich();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich">IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#device_registry_enrich IotanalyticsPipeline#device_registry_enrich}.

---

##### `deviceShadowEnrich`<sup>Optional</sup> <a name="deviceShadowEnrich" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.deviceShadowEnrich"></a>

```java
public IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich getDeviceShadowEnrich();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich">IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#device_shadow_enrich IotanalyticsPipeline#device_shadow_enrich}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.filter"></a>

```java
public IotanalyticsPipelinePipelineActivitiesFilter getFilter();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilter">IotanalyticsPipelinePipelineActivitiesFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#filter IotanalyticsPipeline#filter}.

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.lambda"></a>

```java
public IotanalyticsPipelinePipelineActivitiesLambda getLambda();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda">IotanalyticsPipelinePipelineActivitiesLambda</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#lambda IotanalyticsPipeline#lambda}.

---

##### `math`<sup>Optional</sup> <a name="math" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.math"></a>

```java
public IotanalyticsPipelinePipelineActivitiesMath getMath();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath">IotanalyticsPipelinePipelineActivitiesMath</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#math IotanalyticsPipeline#math}.

---

##### `removeAttributes`<sup>Optional</sup> <a name="removeAttributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.removeAttributes"></a>

```java
public IotanalyticsPipelinePipelineActivitiesRemoveAttributes getRemoveAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributes">IotanalyticsPipelinePipelineActivitiesRemoveAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#remove_attributes IotanalyticsPipeline#remove_attributes}.

---

##### `selectAttributes`<sup>Optional</sup> <a name="selectAttributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.selectAttributes"></a>

```java
public IotanalyticsPipelinePipelineActivitiesSelectAttributes getSelectAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributes">IotanalyticsPipelinePipelineActivitiesSelectAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#select_attributes IotanalyticsPipeline#select_attributes}.

---

### IotanalyticsPipelinePipelineActivitiesAddAttributes <a name="IotanalyticsPipelinePipelineActivitiesAddAttributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributes.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_pipeline.IotanalyticsPipelinePipelineActivitiesAddAttributes;

IotanalyticsPipelinePipelineActivitiesAddAttributes.builder()
//  .attributes(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
//  .next(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributes.property.attributes">attributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#attributes IotanalyticsPipeline#attributes}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributes.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributes.property.next">next</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributes.property.attributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#attributes IotanalyticsPipeline#attributes}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}.

---

##### `next`<sup>Optional</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributes.property.next"></a>

```java
public java.lang.String getNext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}.

---

### IotanalyticsPipelinePipelineActivitiesChannel <a name="IotanalyticsPipelinePipelineActivitiesChannel" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannel.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_pipeline.IotanalyticsPipelinePipelineActivitiesChannel;

IotanalyticsPipelinePipelineActivitiesChannel.builder()
//  .channelName(java.lang.String)
//  .name(java.lang.String)
//  .next(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannel.property.channelName">channelName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#channel_name IotanalyticsPipeline#channel_name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannel.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannel.property.next">next</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}. |

---

##### `channelName`<sup>Optional</sup> <a name="channelName" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannel.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#channel_name IotanalyticsPipeline#channel_name}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannel.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}.

---

##### `next`<sup>Optional</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannel.property.next"></a>

```java
public java.lang.String getNext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}.

---

### IotanalyticsPipelinePipelineActivitiesDatastore <a name="IotanalyticsPipelinePipelineActivitiesDatastore" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastore.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_pipeline.IotanalyticsPipelinePipelineActivitiesDatastore;

IotanalyticsPipelinePipelineActivitiesDatastore.builder()
//  .datastoreName(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastore.property.datastoreName">datastoreName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#datastore_name IotanalyticsPipeline#datastore_name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastore.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}. |

---

##### `datastoreName`<sup>Optional</sup> <a name="datastoreName" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastore.property.datastoreName"></a>

```java
public java.lang.String getDatastoreName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#datastore_name IotanalyticsPipeline#datastore_name}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastore.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}.

---

### IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich <a name="IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_pipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich;

IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich.builder()
//  .attribute(java.lang.String)
//  .name(java.lang.String)
//  .next(java.lang.String)
//  .roleArn(java.lang.String)
//  .thingName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich.property.attribute">attribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#attribute IotanalyticsPipeline#attribute}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich.property.next">next</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#role_arn IotanalyticsPipeline#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich.property.thingName">thingName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#thing_name IotanalyticsPipeline#thing_name}. |

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#attribute IotanalyticsPipeline#attribute}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}.

---

##### `next`<sup>Optional</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich.property.next"></a>

```java
public java.lang.String getNext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#role_arn IotanalyticsPipeline#role_arn}.

---

##### `thingName`<sup>Optional</sup> <a name="thingName" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich.property.thingName"></a>

```java
public java.lang.String getThingName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#thing_name IotanalyticsPipeline#thing_name}.

---

### IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich <a name="IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_pipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich;

IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich.builder()
//  .attribute(java.lang.String)
//  .name(java.lang.String)
//  .next(java.lang.String)
//  .roleArn(java.lang.String)
//  .thingName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich.property.attribute">attribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#attribute IotanalyticsPipeline#attribute}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich.property.next">next</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#role_arn IotanalyticsPipeline#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich.property.thingName">thingName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#thing_name IotanalyticsPipeline#thing_name}. |

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#attribute IotanalyticsPipeline#attribute}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}.

---

##### `next`<sup>Optional</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich.property.next"></a>

```java
public java.lang.String getNext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#role_arn IotanalyticsPipeline#role_arn}.

---

##### `thingName`<sup>Optional</sup> <a name="thingName" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich.property.thingName"></a>

```java
public java.lang.String getThingName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#thing_name IotanalyticsPipeline#thing_name}.

---

### IotanalyticsPipelinePipelineActivitiesFilter <a name="IotanalyticsPipelinePipelineActivitiesFilter" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilter.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_pipeline.IotanalyticsPipelinePipelineActivitiesFilter;

IotanalyticsPipelinePipelineActivitiesFilter.builder()
//  .filter(java.lang.String)
//  .name(java.lang.String)
//  .next(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilter.property.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#filter IotanalyticsPipeline#filter}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilter.property.next">next</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilter.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#filter IotanalyticsPipeline#filter}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}.

---

##### `next`<sup>Optional</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilter.property.next"></a>

```java
public java.lang.String getNext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}.

---

### IotanalyticsPipelinePipelineActivitiesLambda <a name="IotanalyticsPipelinePipelineActivitiesLambda" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_pipeline.IotanalyticsPipelinePipelineActivitiesLambda;

IotanalyticsPipelinePipelineActivitiesLambda.builder()
//  .batchSize(java.lang.Number)
//  .lambdaName(java.lang.String)
//  .name(java.lang.String)
//  .next(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda.property.batchSize">batchSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#batch_size IotanalyticsPipeline#batch_size}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda.property.lambdaName">lambdaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#lambda_name IotanalyticsPipeline#lambda_name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda.property.next">next</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}. |

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda.property.batchSize"></a>

```java
public java.lang.Number getBatchSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#batch_size IotanalyticsPipeline#batch_size}.

---

##### `lambdaName`<sup>Optional</sup> <a name="lambdaName" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda.property.lambdaName"></a>

```java
public java.lang.String getLambdaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#lambda_name IotanalyticsPipeline#lambda_name}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}.

---

##### `next`<sup>Optional</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda.property.next"></a>

```java
public java.lang.String getNext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}.

---

### IotanalyticsPipelinePipelineActivitiesMath <a name="IotanalyticsPipelinePipelineActivitiesMath" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_pipeline.IotanalyticsPipelinePipelineActivitiesMath;

IotanalyticsPipelinePipelineActivitiesMath.builder()
//  .attribute(java.lang.String)
//  .math(java.lang.String)
//  .name(java.lang.String)
//  .next(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath.property.attribute">attribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#attribute IotanalyticsPipeline#attribute}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath.property.math">math</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#math IotanalyticsPipeline#math}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath.property.next">next</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}. |

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#attribute IotanalyticsPipeline#attribute}.

---

##### `math`<sup>Optional</sup> <a name="math" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath.property.math"></a>

```java
public java.lang.String getMath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#math IotanalyticsPipeline#math}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}.

---

##### `next`<sup>Optional</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath.property.next"></a>

```java
public java.lang.String getNext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}.

---

### IotanalyticsPipelinePipelineActivitiesRemoveAttributes <a name="IotanalyticsPipelinePipelineActivitiesRemoveAttributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributes.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_pipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributes;

IotanalyticsPipelinePipelineActivitiesRemoveAttributes.builder()
//  .attributes(java.util.List<java.lang.String>)
//  .name(java.lang.String)
//  .next(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributes.property.attributes">attributes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#attributes IotanalyticsPipeline#attributes}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributes.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributes.property.next">next</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributes.property.attributes"></a>

```java
public java.util.List<java.lang.String> getAttributes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#attributes IotanalyticsPipeline#attributes}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}.

---

##### `next`<sup>Optional</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributes.property.next"></a>

```java
public java.lang.String getNext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}.

---

### IotanalyticsPipelinePipelineActivitiesSelectAttributes <a name="IotanalyticsPipelinePipelineActivitiesSelectAttributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributes.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_pipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributes;

IotanalyticsPipelinePipelineActivitiesSelectAttributes.builder()
//  .attributes(java.util.List<java.lang.String>)
//  .name(java.lang.String)
//  .next(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributes.property.attributes">attributes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#attributes IotanalyticsPipeline#attributes}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributes.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributes.property.next">next</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributes.property.attributes"></a>

```java
public java.util.List<java.lang.String> getAttributes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#attributes IotanalyticsPipeline#attributes}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}.

---

##### `next`<sup>Optional</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributes.property.next"></a>

```java
public java.lang.String getNext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}.

---

### IotanalyticsPipelineTags <a name="IotanalyticsPipelineTags" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_pipeline.IotanalyticsPipelineTags;

IotanalyticsPipelineTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#key IotanalyticsPipeline#key}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#value IotanalyticsPipeline#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#key IotanalyticsPipeline#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_pipeline#value IotanalyticsPipeline#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference <a name="IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_pipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference;

new IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.resetNext">resetNext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNext` <a name="resetNext" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.resetNext"></a>

```java
public void resetNext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.attributesInput">attributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.nextInput">nextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.attributes">attributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.next">next</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributes">IotanalyticsPipelinePipelineActivitiesAddAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.attributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nextInput`<sup>Optional</sup> <a name="nextInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.nextInput"></a>

```java
public java.lang.String getNextInput();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.attributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `next`<sup>Required</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.next"></a>

```java
public java.lang.String getNext();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsPipelinePipelineActivitiesAddAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributes">IotanalyticsPipelinePipelineActivitiesAddAttributes</a>

---


### IotanalyticsPipelinePipelineActivitiesChannelOutputReference <a name="IotanalyticsPipelinePipelineActivitiesChannelOutputReference" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_pipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference;

new IotanalyticsPipelinePipelineActivitiesChannelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.resetChannelName">resetChannelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.resetNext">resetNext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChannelName` <a name="resetChannelName" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.resetChannelName"></a>

```java
public void resetChannelName()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNext` <a name="resetNext" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.resetNext"></a>

```java
public void resetNext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.channelNameInput">channelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.nextInput">nextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.channelName">channelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.next">next</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannel">IotanalyticsPipelinePipelineActivitiesChannel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `channelNameInput`<sup>Optional</sup> <a name="channelNameInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.channelNameInput"></a>

```java
public java.lang.String getChannelNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nextInput`<sup>Optional</sup> <a name="nextInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.nextInput"></a>

```java
public java.lang.String getNextInput();
```

- *Type:* java.lang.String

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `next`<sup>Required</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.next"></a>

```java
public java.lang.String getNext();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsPipelinePipelineActivitiesChannel getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannel">IotanalyticsPipelinePipelineActivitiesChannel</a>

---


### IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference <a name="IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_pipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference;

new IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.resetDatastoreName">resetDatastoreName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatastoreName` <a name="resetDatastoreName" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.resetDatastoreName"></a>

```java
public void resetDatastoreName()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.datastoreNameInput">datastoreNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.datastoreName">datastoreName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastore">IotanalyticsPipelinePipelineActivitiesDatastore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datastoreNameInput`<sup>Optional</sup> <a name="datastoreNameInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.datastoreNameInput"></a>

```java
public java.lang.String getDatastoreNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `datastoreName`<sup>Required</sup> <a name="datastoreName" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.datastoreName"></a>

```java
public java.lang.String getDatastoreName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsPipelinePipelineActivitiesDatastore getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastore">IotanalyticsPipelinePipelineActivitiesDatastore</a>

---


### IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference <a name="IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_pipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference;

new IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resetNext">resetNext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resetThingName">resetThingName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttribute` <a name="resetAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resetAttribute"></a>

```java
public void resetAttribute()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNext` <a name="resetNext" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resetNext"></a>

```java
public void resetNext()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetThingName` <a name="resetThingName" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resetThingName"></a>

```java
public void resetThingName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.attributeInput">attributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.nextInput">nextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.thingNameInput">thingNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.attribute">attribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.next">next</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.thingName">thingName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich">IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.attributeInput"></a>

```java
public java.lang.String getAttributeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nextInput`<sup>Optional</sup> <a name="nextInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.nextInput"></a>

```java
public java.lang.String getNextInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `thingNameInput`<sup>Optional</sup> <a name="thingNameInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.thingNameInput"></a>

```java
public java.lang.String getThingNameInput();
```

- *Type:* java.lang.String

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `next`<sup>Required</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.next"></a>

```java
public java.lang.String getNext();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `thingName`<sup>Required</sup> <a name="thingName" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.thingName"></a>

```java
public java.lang.String getThingName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich">IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich</a>

---


### IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference <a name="IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_pipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference;

new IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resetNext">resetNext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resetThingName">resetThingName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttribute` <a name="resetAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resetAttribute"></a>

```java
public void resetAttribute()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNext` <a name="resetNext" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resetNext"></a>

```java
public void resetNext()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetThingName` <a name="resetThingName" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resetThingName"></a>

```java
public void resetThingName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.attributeInput">attributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.nextInput">nextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.thingNameInput">thingNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.attribute">attribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.next">next</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.thingName">thingName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich">IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.attributeInput"></a>

```java
public java.lang.String getAttributeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nextInput`<sup>Optional</sup> <a name="nextInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.nextInput"></a>

```java
public java.lang.String getNextInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `thingNameInput`<sup>Optional</sup> <a name="thingNameInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.thingNameInput"></a>

```java
public java.lang.String getThingNameInput();
```

- *Type:* java.lang.String

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `next`<sup>Required</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.next"></a>

```java
public java.lang.String getNext();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `thingName`<sup>Required</sup> <a name="thingName" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.thingName"></a>

```java
public java.lang.String getThingName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich">IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich</a>

---


### IotanalyticsPipelinePipelineActivitiesFilterOutputReference <a name="IotanalyticsPipelinePipelineActivitiesFilterOutputReference" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_pipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference;

new IotanalyticsPipelinePipelineActivitiesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.resetNext">resetNext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNext` <a name="resetNext" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.resetNext"></a>

```java
public void resetNext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.nextInput">nextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.next">next</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilter">IotanalyticsPipelinePipelineActivitiesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nextInput`<sup>Optional</sup> <a name="nextInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.nextInput"></a>

```java
public java.lang.String getNextInput();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `next`<sup>Required</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.next"></a>

```java
public java.lang.String getNext();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsPipelinePipelineActivitiesFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilter">IotanalyticsPipelinePipelineActivitiesFilter</a>

---


### IotanalyticsPipelinePipelineActivitiesLambdaOutputReference <a name="IotanalyticsPipelinePipelineActivitiesLambdaOutputReference" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_pipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference;

new IotanalyticsPipelinePipelineActivitiesLambdaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.resetBatchSize">resetBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.resetLambdaName">resetLambdaName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.resetNext">resetNext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchSize` <a name="resetBatchSize" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.resetBatchSize"></a>

```java
public void resetBatchSize()
```

##### `resetLambdaName` <a name="resetLambdaName" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.resetLambdaName"></a>

```java
public void resetLambdaName()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNext` <a name="resetNext" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.resetNext"></a>

```java
public void resetNext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.batchSizeInput">batchSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.lambdaNameInput">lambdaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.nextInput">nextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.batchSize">batchSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.lambdaName">lambdaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.next">next</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda">IotanalyticsPipelinePipelineActivitiesLambda</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `batchSizeInput`<sup>Optional</sup> <a name="batchSizeInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.batchSizeInput"></a>

```java
public java.lang.Number getBatchSizeInput();
```

- *Type:* java.lang.Number

---

##### `lambdaNameInput`<sup>Optional</sup> <a name="lambdaNameInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.lambdaNameInput"></a>

```java
public java.lang.String getLambdaNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nextInput`<sup>Optional</sup> <a name="nextInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.nextInput"></a>

```java
public java.lang.String getNextInput();
```

- *Type:* java.lang.String

---

##### `batchSize`<sup>Required</sup> <a name="batchSize" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.batchSize"></a>

```java
public java.lang.Number getBatchSize();
```

- *Type:* java.lang.Number

---

##### `lambdaName`<sup>Required</sup> <a name="lambdaName" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.lambdaName"></a>

```java
public java.lang.String getLambdaName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `next`<sup>Required</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.next"></a>

```java
public java.lang.String getNext();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsPipelinePipelineActivitiesLambda getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda">IotanalyticsPipelinePipelineActivitiesLambda</a>

---


### IotanalyticsPipelinePipelineActivitiesList <a name="IotanalyticsPipelinePipelineActivitiesList" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_pipeline.IotanalyticsPipelinePipelineActivitiesList;

new IotanalyticsPipelinePipelineActivitiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.get"></a>

```java
public IotanalyticsPipelinePipelineActivitiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities">IotanalyticsPipelinePipelineActivities</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotanalyticsPipelinePipelineActivities> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities">IotanalyticsPipelinePipelineActivities</a>>

---


### IotanalyticsPipelinePipelineActivitiesMathOutputReference <a name="IotanalyticsPipelinePipelineActivitiesMathOutputReference" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_pipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference;

new IotanalyticsPipelinePipelineActivitiesMathOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.resetMath">resetMath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.resetNext">resetNext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttribute` <a name="resetAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.resetAttribute"></a>

```java
public void resetAttribute()
```

##### `resetMath` <a name="resetMath" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.resetMath"></a>

```java
public void resetMath()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNext` <a name="resetNext" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.resetNext"></a>

```java
public void resetNext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.attributeInput">attributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.mathInput">mathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.nextInput">nextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.attribute">attribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.math">math</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.next">next</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath">IotanalyticsPipelinePipelineActivitiesMath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.attributeInput"></a>

```java
public java.lang.String getAttributeInput();
```

- *Type:* java.lang.String

---

##### `mathInput`<sup>Optional</sup> <a name="mathInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.mathInput"></a>

```java
public java.lang.String getMathInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nextInput`<sup>Optional</sup> <a name="nextInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.nextInput"></a>

```java
public java.lang.String getNextInput();
```

- *Type:* java.lang.String

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

---

##### `math`<sup>Required</sup> <a name="math" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.math"></a>

```java
public java.lang.String getMath();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `next`<sup>Required</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.next"></a>

```java
public java.lang.String getNext();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsPipelinePipelineActivitiesMath getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath">IotanalyticsPipelinePipelineActivitiesMath</a>

---


### IotanalyticsPipelinePipelineActivitiesOutputReference <a name="IotanalyticsPipelinePipelineActivitiesOutputReference" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_pipeline.IotanalyticsPipelinePipelineActivitiesOutputReference;

new IotanalyticsPipelinePipelineActivitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putAddAttributes">putAddAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putChannel">putChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putDatastore">putDatastore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putDeviceRegistryEnrich">putDeviceRegistryEnrich</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putDeviceShadowEnrich">putDeviceShadowEnrich</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putLambda">putLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putMath">putMath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putRemoveAttributes">putRemoveAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putSelectAttributes">putSelectAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetAddAttributes">resetAddAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetChannel">resetChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetDatastore">resetDatastore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetDeviceRegistryEnrich">resetDeviceRegistryEnrich</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetDeviceShadowEnrich">resetDeviceShadowEnrich</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetLambda">resetLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetMath">resetMath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetRemoveAttributes">resetRemoveAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetSelectAttributes">resetSelectAttributes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAddAttributes` <a name="putAddAttributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putAddAttributes"></a>

```java
public void putAddAttributes(IotanalyticsPipelinePipelineActivitiesAddAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putAddAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributes">IotanalyticsPipelinePipelineActivitiesAddAttributes</a>

---

##### `putChannel` <a name="putChannel" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putChannel"></a>

```java
public void putChannel(IotanalyticsPipelinePipelineActivitiesChannel value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putChannel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannel">IotanalyticsPipelinePipelineActivitiesChannel</a>

---

##### `putDatastore` <a name="putDatastore" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putDatastore"></a>

```java
public void putDatastore(IotanalyticsPipelinePipelineActivitiesDatastore value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putDatastore.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastore">IotanalyticsPipelinePipelineActivitiesDatastore</a>

---

##### `putDeviceRegistryEnrich` <a name="putDeviceRegistryEnrich" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putDeviceRegistryEnrich"></a>

```java
public void putDeviceRegistryEnrich(IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putDeviceRegistryEnrich.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich">IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich</a>

---

##### `putDeviceShadowEnrich` <a name="putDeviceShadowEnrich" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putDeviceShadowEnrich"></a>

```java
public void putDeviceShadowEnrich(IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putDeviceShadowEnrich.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich">IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich</a>

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putFilter"></a>

```java
public void putFilter(IotanalyticsPipelinePipelineActivitiesFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilter">IotanalyticsPipelinePipelineActivitiesFilter</a>

---

##### `putLambda` <a name="putLambda" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putLambda"></a>

```java
public void putLambda(IotanalyticsPipelinePipelineActivitiesLambda value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putLambda.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda">IotanalyticsPipelinePipelineActivitiesLambda</a>

---

##### `putMath` <a name="putMath" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putMath"></a>

```java
public void putMath(IotanalyticsPipelinePipelineActivitiesMath value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putMath.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath">IotanalyticsPipelinePipelineActivitiesMath</a>

---

##### `putRemoveAttributes` <a name="putRemoveAttributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putRemoveAttributes"></a>

```java
public void putRemoveAttributes(IotanalyticsPipelinePipelineActivitiesRemoveAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putRemoveAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributes">IotanalyticsPipelinePipelineActivitiesRemoveAttributes</a>

---

##### `putSelectAttributes` <a name="putSelectAttributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putSelectAttributes"></a>

```java
public void putSelectAttributes(IotanalyticsPipelinePipelineActivitiesSelectAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putSelectAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributes">IotanalyticsPipelinePipelineActivitiesSelectAttributes</a>

---

##### `resetAddAttributes` <a name="resetAddAttributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetAddAttributes"></a>

```java
public void resetAddAttributes()
```

##### `resetChannel` <a name="resetChannel" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetChannel"></a>

```java
public void resetChannel()
```

##### `resetDatastore` <a name="resetDatastore" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetDatastore"></a>

```java
public void resetDatastore()
```

##### `resetDeviceRegistryEnrich` <a name="resetDeviceRegistryEnrich" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetDeviceRegistryEnrich"></a>

```java
public void resetDeviceRegistryEnrich()
```

##### `resetDeviceShadowEnrich` <a name="resetDeviceShadowEnrich" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetDeviceShadowEnrich"></a>

```java
public void resetDeviceShadowEnrich()
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetLambda` <a name="resetLambda" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetLambda"></a>

```java
public void resetLambda()
```

##### `resetMath` <a name="resetMath" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetMath"></a>

```java
public void resetMath()
```

##### `resetRemoveAttributes` <a name="resetRemoveAttributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetRemoveAttributes"></a>

```java
public void resetRemoveAttributes()
```

##### `resetSelectAttributes` <a name="resetSelectAttributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetSelectAttributes"></a>

```java
public void resetSelectAttributes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.addAttributes">addAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference">IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.channel">channel</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference">IotanalyticsPipelinePipelineActivitiesChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.datastore">datastore</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference">IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.deviceRegistryEnrich">deviceRegistryEnrich</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference">IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.deviceShadowEnrich">deviceShadowEnrich</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference">IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference">IotanalyticsPipelinePipelineActivitiesFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.lambda">lambda</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference">IotanalyticsPipelinePipelineActivitiesLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.math">math</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference">IotanalyticsPipelinePipelineActivitiesMathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.removeAttributes">removeAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference">IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.selectAttributes">selectAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference">IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.addAttributesInput">addAttributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributes">IotanalyticsPipelinePipelineActivitiesAddAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.channelInput">channelInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannel">IotanalyticsPipelinePipelineActivitiesChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.datastoreInput">datastoreInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastore">IotanalyticsPipelinePipelineActivitiesDatastore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.deviceRegistryEnrichInput">deviceRegistryEnrichInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich">IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.deviceShadowEnrichInput">deviceShadowEnrichInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich">IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.filterInput">filterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilter">IotanalyticsPipelinePipelineActivitiesFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.lambdaInput">lambdaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda">IotanalyticsPipelinePipelineActivitiesLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.mathInput">mathInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath">IotanalyticsPipelinePipelineActivitiesMath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.removeAttributesInput">removeAttributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributes">IotanalyticsPipelinePipelineActivitiesRemoveAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.selectAttributesInput">selectAttributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributes">IotanalyticsPipelinePipelineActivitiesSelectAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities">IotanalyticsPipelinePipelineActivities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addAttributes`<sup>Required</sup> <a name="addAttributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.addAttributes"></a>

```java
public IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference getAddAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference">IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference</a>

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.channel"></a>

```java
public IotanalyticsPipelinePipelineActivitiesChannelOutputReference getChannel();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference">IotanalyticsPipelinePipelineActivitiesChannelOutputReference</a>

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.datastore"></a>

```java
public IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference getDatastore();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference">IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference</a>

---

##### `deviceRegistryEnrich`<sup>Required</sup> <a name="deviceRegistryEnrich" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.deviceRegistryEnrich"></a>

```java
public IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference getDeviceRegistryEnrich();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference">IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference</a>

---

##### `deviceShadowEnrich`<sup>Required</sup> <a name="deviceShadowEnrich" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.deviceShadowEnrich"></a>

```java
public IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference getDeviceShadowEnrich();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference">IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.filter"></a>

```java
public IotanalyticsPipelinePipelineActivitiesFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference">IotanalyticsPipelinePipelineActivitiesFilterOutputReference</a>

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.lambda"></a>

```java
public IotanalyticsPipelinePipelineActivitiesLambdaOutputReference getLambda();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference">IotanalyticsPipelinePipelineActivitiesLambdaOutputReference</a>

---

##### `math`<sup>Required</sup> <a name="math" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.math"></a>

```java
public IotanalyticsPipelinePipelineActivitiesMathOutputReference getMath();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference">IotanalyticsPipelinePipelineActivitiesMathOutputReference</a>

---

##### `removeAttributes`<sup>Required</sup> <a name="removeAttributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.removeAttributes"></a>

```java
public IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference getRemoveAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference">IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference</a>

---

##### `selectAttributes`<sup>Required</sup> <a name="selectAttributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.selectAttributes"></a>

```java
public IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference getSelectAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference">IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference</a>

---

##### `addAttributesInput`<sup>Optional</sup> <a name="addAttributesInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.addAttributesInput"></a>

```java
public IResolvable|IotanalyticsPipelinePipelineActivitiesAddAttributes getAddAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributes">IotanalyticsPipelinePipelineActivitiesAddAttributes</a>

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.channelInput"></a>

```java
public IResolvable|IotanalyticsPipelinePipelineActivitiesChannel getChannelInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannel">IotanalyticsPipelinePipelineActivitiesChannel</a>

---

##### `datastoreInput`<sup>Optional</sup> <a name="datastoreInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.datastoreInput"></a>

```java
public IResolvable|IotanalyticsPipelinePipelineActivitiesDatastore getDatastoreInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastore">IotanalyticsPipelinePipelineActivitiesDatastore</a>

---

##### `deviceRegistryEnrichInput`<sup>Optional</sup> <a name="deviceRegistryEnrichInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.deviceRegistryEnrichInput"></a>

```java
public IResolvable|IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich getDeviceRegistryEnrichInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich">IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich</a>

---

##### `deviceShadowEnrichInput`<sup>Optional</sup> <a name="deviceShadowEnrichInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.deviceShadowEnrichInput"></a>

```java
public IResolvable|IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich getDeviceShadowEnrichInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich">IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.filterInput"></a>

```java
public IResolvable|IotanalyticsPipelinePipelineActivitiesFilter getFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilter">IotanalyticsPipelinePipelineActivitiesFilter</a>

---

##### `lambdaInput`<sup>Optional</sup> <a name="lambdaInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.lambdaInput"></a>

```java
public IResolvable|IotanalyticsPipelinePipelineActivitiesLambda getLambdaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda">IotanalyticsPipelinePipelineActivitiesLambda</a>

---

##### `mathInput`<sup>Optional</sup> <a name="mathInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.mathInput"></a>

```java
public IResolvable|IotanalyticsPipelinePipelineActivitiesMath getMathInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath">IotanalyticsPipelinePipelineActivitiesMath</a>

---

##### `removeAttributesInput`<sup>Optional</sup> <a name="removeAttributesInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.removeAttributesInput"></a>

```java
public IResolvable|IotanalyticsPipelinePipelineActivitiesRemoveAttributes getRemoveAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributes">IotanalyticsPipelinePipelineActivitiesRemoveAttributes</a>

---

##### `selectAttributesInput`<sup>Optional</sup> <a name="selectAttributesInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.selectAttributesInput"></a>

```java
public IResolvable|IotanalyticsPipelinePipelineActivitiesSelectAttributes getSelectAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributes">IotanalyticsPipelinePipelineActivitiesSelectAttributes</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsPipelinePipelineActivities getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities">IotanalyticsPipelinePipelineActivities</a>

---


### IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference <a name="IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_pipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference;

new IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.resetNext">resetNext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNext` <a name="resetNext" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.resetNext"></a>

```java
public void resetNext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.attributesInput">attributesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.nextInput">nextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.attributes">attributes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.next">next</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributes">IotanalyticsPipelinePipelineActivitiesRemoveAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.attributesInput"></a>

```java
public java.util.List<java.lang.String> getAttributesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nextInput`<sup>Optional</sup> <a name="nextInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.nextInput"></a>

```java
public java.lang.String getNextInput();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.attributes"></a>

```java
public java.util.List<java.lang.String> getAttributes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `next`<sup>Required</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.next"></a>

```java
public java.lang.String getNext();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsPipelinePipelineActivitiesRemoveAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributes">IotanalyticsPipelinePipelineActivitiesRemoveAttributes</a>

---


### IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference <a name="IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_pipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference;

new IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.resetNext">resetNext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNext` <a name="resetNext" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.resetNext"></a>

```java
public void resetNext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.attributesInput">attributesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.nextInput">nextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.attributes">attributes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.next">next</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributes">IotanalyticsPipelinePipelineActivitiesSelectAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.attributesInput"></a>

```java
public java.util.List<java.lang.String> getAttributesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nextInput`<sup>Optional</sup> <a name="nextInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.nextInput"></a>

```java
public java.lang.String getNextInput();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.attributes"></a>

```java
public java.util.List<java.lang.String> getAttributes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `next`<sup>Required</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.next"></a>

```java
public java.lang.String getNext();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsPipelinePipelineActivitiesSelectAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributes">IotanalyticsPipelinePipelineActivitiesSelectAttributes</a>

---


### IotanalyticsPipelineTagsList <a name="IotanalyticsPipelineTagsList" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_pipeline.IotanalyticsPipelineTagsList;

new IotanalyticsPipelineTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.get"></a>

```java
public IotanalyticsPipelineTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags">IotanalyticsPipelineTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotanalyticsPipelineTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags">IotanalyticsPipelineTags</a>>

---


### IotanalyticsPipelineTagsOutputReference <a name="IotanalyticsPipelineTagsOutputReference" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotanalytics_pipeline.IotanalyticsPipelineTagsOutputReference;

new IotanalyticsPipelineTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags">IotanalyticsPipelineTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotanalyticsPipelineTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags">IotanalyticsPipelineTags</a>

---



