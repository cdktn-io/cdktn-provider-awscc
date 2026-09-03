# `chimeMediaPipelineKinesisVideoStreamPool` Submodule <a name="`chimeMediaPipelineKinesisVideoStreamPool` Submodule" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeMediaPipelineKinesisVideoStreamPool <a name="ChimeMediaPipelineKinesisVideoStreamPool" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool awscc_chime_media_pipeline_kinesis_video_stream_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_pipeline_kinesis_video_stream_pool.ChimeMediaPipelineKinesisVideoStreamPool;

ChimeMediaPipelineKinesisVideoStreamPool.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .poolName(java.lang.String)
    .streamConfiguration(ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration)
//  .tags(IResolvable|java.util.List<ChimeMediaPipelineKinesisVideoStreamPoolTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.poolName">poolName</a></code> | <code>java.lang.String</code> | The name of the Kinesis Video Stream Pool. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.streamConfiguration">streamConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration</a></code> | The configuration settings for the Kinesis video stream. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags">ChimeMediaPipelineKinesisVideoStreamPoolTags</a>></code> | The tags associated with the Kinesis Video Stream Pool. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `poolName`<sup>Required</sup> <a name="poolName" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.poolName"></a>

- *Type:* java.lang.String

The name of the Kinesis Video Stream Pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#pool_name ChimeMediaPipelineKinesisVideoStreamPool#pool_name}

---

##### `streamConfiguration`<sup>Required</sup> <a name="streamConfiguration" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.streamConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration</a>

The configuration settings for the Kinesis video stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#stream_configuration ChimeMediaPipelineKinesisVideoStreamPool#stream_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags">ChimeMediaPipelineKinesisVideoStreamPoolTags</a>>

The tags associated with the Kinesis Video Stream Pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#tags ChimeMediaPipelineKinesisVideoStreamPool#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.putStreamConfiguration">putStreamConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStreamConfiguration` <a name="putStreamConfiguration" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.putStreamConfiguration"></a>

```java
public void putStreamConfiguration(ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.putStreamConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ChimeMediaPipelineKinesisVideoStreamPoolTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags">ChimeMediaPipelineKinesisVideoStreamPoolTags</a>>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChimeMediaPipelineKinesisVideoStreamPool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isConstruct"></a>

```java
import io.cdktn.providers.awscc.chime_media_pipeline_kinesis_video_stream_pool.ChimeMediaPipelineKinesisVideoStreamPool;

ChimeMediaPipelineKinesisVideoStreamPool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.chime_media_pipeline_kinesis_video_stream_pool.ChimeMediaPipelineKinesisVideoStreamPool;

ChimeMediaPipelineKinesisVideoStreamPool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.chime_media_pipeline_kinesis_video_stream_pool.ChimeMediaPipelineKinesisVideoStreamPool;

ChimeMediaPipelineKinesisVideoStreamPool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.chime_media_pipeline_kinesis_video_stream_pool.ChimeMediaPipelineKinesisVideoStreamPool;

ChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ChimeMediaPipelineKinesisVideoStreamPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ChimeMediaPipelineKinesisVideoStreamPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ChimeMediaPipelineKinesisVideoStreamPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ChimeMediaPipelineKinesisVideoStreamPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.createdTimestamp">createdTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.poolId">poolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.poolStatus">poolStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.streamConfiguration">streamConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList">ChimeMediaPipelineKinesisVideoStreamPoolTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.updatedTimestamp">updatedTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.poolNameInput">poolNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.streamConfigurationInput">streamConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags">ChimeMediaPipelineKinesisVideoStreamPoolTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.poolName">poolName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.createdTimestamp"></a>

```java
public java.lang.String getCreatedTimestamp();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.poolId"></a>

```java
public java.lang.String getPoolId();
```

- *Type:* java.lang.String

---

##### `poolStatus`<sup>Required</sup> <a name="poolStatus" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.poolStatus"></a>

```java
public java.lang.String getPoolStatus();
```

- *Type:* java.lang.String

---

##### `streamConfiguration`<sup>Required</sup> <a name="streamConfiguration" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.streamConfiguration"></a>

```java
public ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference getStreamConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.tags"></a>

```java
public ChimeMediaPipelineKinesisVideoStreamPoolTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList">ChimeMediaPipelineKinesisVideoStreamPoolTagsList</a>

---

##### `updatedTimestamp`<sup>Required</sup> <a name="updatedTimestamp" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.updatedTimestamp"></a>

```java
public java.lang.String getUpdatedTimestamp();
```

- *Type:* java.lang.String

---

##### `poolNameInput`<sup>Optional</sup> <a name="poolNameInput" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.poolNameInput"></a>

```java
public java.lang.String getPoolNameInput();
```

- *Type:* java.lang.String

---

##### `streamConfigurationInput`<sup>Optional</sup> <a name="streamConfigurationInput" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.streamConfigurationInput"></a>

```java
public IResolvable|ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration getStreamConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ChimeMediaPipelineKinesisVideoStreamPoolTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags">ChimeMediaPipelineKinesisVideoStreamPoolTags</a>>

---

##### `poolName`<sup>Required</sup> <a name="poolName" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.poolName"></a>

```java
public java.lang.String getPoolName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeMediaPipelineKinesisVideoStreamPoolConfig <a name="ChimeMediaPipelineKinesisVideoStreamPoolConfig" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_pipeline_kinesis_video_stream_pool.ChimeMediaPipelineKinesisVideoStreamPoolConfig;

ChimeMediaPipelineKinesisVideoStreamPoolConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .poolName(java.lang.String)
    .streamConfiguration(ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration)
//  .tags(IResolvable|java.util.List<ChimeMediaPipelineKinesisVideoStreamPoolTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.poolName">poolName</a></code> | <code>java.lang.String</code> | The name of the Kinesis Video Stream Pool. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.streamConfiguration">streamConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration</a></code> | The configuration settings for the Kinesis video stream. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags">ChimeMediaPipelineKinesisVideoStreamPoolTags</a>></code> | The tags associated with the Kinesis Video Stream Pool. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `poolName`<sup>Required</sup> <a name="poolName" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.poolName"></a>

```java
public java.lang.String getPoolName();
```

- *Type:* java.lang.String

The name of the Kinesis Video Stream Pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#pool_name ChimeMediaPipelineKinesisVideoStreamPool#pool_name}

---

##### `streamConfiguration`<sup>Required</sup> <a name="streamConfiguration" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.streamConfiguration"></a>

```java
public ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration getStreamConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration</a>

The configuration settings for the Kinesis video stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#stream_configuration ChimeMediaPipelineKinesisVideoStreamPool#stream_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ChimeMediaPipelineKinesisVideoStreamPoolTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags">ChimeMediaPipelineKinesisVideoStreamPoolTags</a>>

The tags associated with the Kinesis Video Stream Pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#tags ChimeMediaPipelineKinesisVideoStreamPool#tags}

---

### ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration <a name="ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_pipeline_kinesis_video_stream_pool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration;

ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration.builder()
    .region(java.lang.String)
//  .dataRetentionInHours(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration.property.region">region</a></code> | <code>java.lang.String</code> | The AWS Region of the video stream. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration.property.dataRetentionInHours">dataRetentionInHours</a></code> | <code>java.lang.Number</code> | The amount of time that data is retained, in hours. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The AWS Region of the video stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#region ChimeMediaPipelineKinesisVideoStreamPool#region}

---

##### `dataRetentionInHours`<sup>Optional</sup> <a name="dataRetentionInHours" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration.property.dataRetentionInHours"></a>

```java
public java.lang.Number getDataRetentionInHours();
```

- *Type:* java.lang.Number

The amount of time that data is retained, in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#data_retention_in_hours ChimeMediaPipelineKinesisVideoStreamPool#data_retention_in_hours}

---

### ChimeMediaPipelineKinesisVideoStreamPoolTags <a name="ChimeMediaPipelineKinesisVideoStreamPoolTags" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_pipeline_kinesis_video_stream_pool.ChimeMediaPipelineKinesisVideoStreamPoolTags;

ChimeMediaPipelineKinesisVideoStreamPoolTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#key ChimeMediaPipelineKinesisVideoStreamPool#key}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#value ChimeMediaPipelineKinesisVideoStreamPool#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#key ChimeMediaPipelineKinesisVideoStreamPool#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#value ChimeMediaPipelineKinesisVideoStreamPool#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference <a name="ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_pipeline_kinesis_video_stream_pool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference;

new ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.resetDataRetentionInHours">resetDataRetentionInHours</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataRetentionInHours` <a name="resetDataRetentionInHours" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.resetDataRetentionInHours"></a>

```java
public void resetDataRetentionInHours()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.dataRetentionInHoursInput">dataRetentionInHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.dataRetentionInHours">dataRetentionInHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataRetentionInHoursInput`<sup>Optional</sup> <a name="dataRetentionInHoursInput" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.dataRetentionInHoursInput"></a>

```java
public java.lang.Number getDataRetentionInHoursInput();
```

- *Type:* java.lang.Number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `dataRetentionInHours`<sup>Required</sup> <a name="dataRetentionInHours" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.dataRetentionInHours"></a>

```java
public java.lang.Number getDataRetentionInHours();
```

- *Type:* java.lang.Number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration</a>

---


### ChimeMediaPipelineKinesisVideoStreamPoolTagsList <a name="ChimeMediaPipelineKinesisVideoStreamPoolTagsList" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_pipeline_kinesis_video_stream_pool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList;

new ChimeMediaPipelineKinesisVideoStreamPoolTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.get"></a>

```java
public ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags">ChimeMediaPipelineKinesisVideoStreamPoolTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ChimeMediaPipelineKinesisVideoStreamPoolTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags">ChimeMediaPipelineKinesisVideoStreamPoolTags</a>>

---


### ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference <a name="ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_pipeline_kinesis_video_stream_pool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference;

new ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags">ChimeMediaPipelineKinesisVideoStreamPoolTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ChimeMediaPipelineKinesisVideoStreamPoolTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags">ChimeMediaPipelineKinesisVideoStreamPoolTags</a>

---



