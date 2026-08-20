# `medialiveMultiplexprogram` Submodule <a name="`medialiveMultiplexprogram` Submodule" id="@cdktn/provider-awscc.medialiveMultiplexprogram"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MedialiveMultiplexprogram <a name="MedialiveMultiplexprogram" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram awscc_medialive_multiplexprogram}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplexprogram.MedialiveMultiplexprogram;

MedialiveMultiplexprogram.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .multiplexId(java.lang.String)
//  .multiplexProgramSettings(MedialiveMultiplexprogramMultiplexProgramSettings)
//  .packetIdentifiersMap(MedialiveMultiplexprogramPacketIdentifiersMap)
//  .pipelineDetails(IResolvable|java.util.List<MedialiveMultiplexprogramPipelineDetails>)
//  .preferredChannelPipeline(java.lang.String)
//  .programName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.multiplexId">multiplexId</a></code> | <code>java.lang.String</code> | The ID of the multiplex that the program belongs to. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.multiplexProgramSettings">multiplexProgramSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings">MedialiveMultiplexprogramMultiplexProgramSettings</a></code> | The settings for this multiplex program. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.packetIdentifiersMap">packetIdentifiersMap</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap">MedialiveMultiplexprogramPacketIdentifiersMap</a></code> | The packet identifier map for this multiplex program. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.pipelineDetails">pipelineDetails</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails">MedialiveMultiplexprogramPipelineDetails</a>></code> | Contains information about the current sources for the specified program in the specified multiplex. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.preferredChannelPipeline">preferredChannelPipeline</a></code> | <code>java.lang.String</code> | The settings for this multiplex program. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.programName">programName</a></code> | <code>java.lang.String</code> | The name of the multiplex program. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `multiplexId`<sup>Optional</sup> <a name="multiplexId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.multiplexId"></a>

- *Type:* java.lang.String

The ID of the multiplex that the program belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#multiplex_id MedialiveMultiplexprogram#multiplex_id}

---

##### `multiplexProgramSettings`<sup>Optional</sup> <a name="multiplexProgramSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.multiplexProgramSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings">MedialiveMultiplexprogramMultiplexProgramSettings</a>

The settings for this multiplex program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#multiplex_program_settings MedialiveMultiplexprogram#multiplex_program_settings}

---

##### `packetIdentifiersMap`<sup>Optional</sup> <a name="packetIdentifiersMap" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.packetIdentifiersMap"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap">MedialiveMultiplexprogramPacketIdentifiersMap</a>

The packet identifier map for this multiplex program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#packet_identifiers_map MedialiveMultiplexprogram#packet_identifiers_map}

---

##### `pipelineDetails`<sup>Optional</sup> <a name="pipelineDetails" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.pipelineDetails"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails">MedialiveMultiplexprogramPipelineDetails</a>>

Contains information about the current sources for the specified program in the specified multiplex.

Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#pipeline_details MedialiveMultiplexprogram#pipeline_details}

---

##### `preferredChannelPipeline`<sup>Optional</sup> <a name="preferredChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.preferredChannelPipeline"></a>

- *Type:* java.lang.String

The settings for this multiplex program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#preferred_channel_pipeline MedialiveMultiplexprogram#preferred_channel_pipeline}

---

##### `programName`<sup>Optional</sup> <a name="programName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.programName"></a>

- *Type:* java.lang.String

The name of the multiplex program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#program_name MedialiveMultiplexprogram#program_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putMultiplexProgramSettings">putMultiplexProgramSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putPacketIdentifiersMap">putPacketIdentifiersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putPipelineDetails">putPipelineDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetMultiplexId">resetMultiplexId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetMultiplexProgramSettings">resetMultiplexProgramSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetPacketIdentifiersMap">resetPacketIdentifiersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetPipelineDetails">resetPipelineDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetPreferredChannelPipeline">resetPreferredChannelPipeline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetProgramName">resetProgramName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMultiplexProgramSettings` <a name="putMultiplexProgramSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putMultiplexProgramSettings"></a>

```java
public void putMultiplexProgramSettings(MedialiveMultiplexprogramMultiplexProgramSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putMultiplexProgramSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings">MedialiveMultiplexprogramMultiplexProgramSettings</a>

---

##### `putPacketIdentifiersMap` <a name="putPacketIdentifiersMap" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putPacketIdentifiersMap"></a>

```java
public void putPacketIdentifiersMap(MedialiveMultiplexprogramPacketIdentifiersMap value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putPacketIdentifiersMap.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap">MedialiveMultiplexprogramPacketIdentifiersMap</a>

---

##### `putPipelineDetails` <a name="putPipelineDetails" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putPipelineDetails"></a>

```java
public void putPipelineDetails(IResolvable|java.util.List<MedialiveMultiplexprogramPipelineDetails> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putPipelineDetails.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails">MedialiveMultiplexprogramPipelineDetails</a>>

---

##### `resetMultiplexId` <a name="resetMultiplexId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetMultiplexId"></a>

```java
public void resetMultiplexId()
```

##### `resetMultiplexProgramSettings` <a name="resetMultiplexProgramSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetMultiplexProgramSettings"></a>

```java
public void resetMultiplexProgramSettings()
```

##### `resetPacketIdentifiersMap` <a name="resetPacketIdentifiersMap" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetPacketIdentifiersMap"></a>

```java
public void resetPacketIdentifiersMap()
```

##### `resetPipelineDetails` <a name="resetPipelineDetails" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetPipelineDetails"></a>

```java
public void resetPipelineDetails()
```

##### `resetPreferredChannelPipeline` <a name="resetPreferredChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetPreferredChannelPipeline"></a>

```java
public void resetPreferredChannelPipeline()
```

##### `resetProgramName` <a name="resetProgramName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetProgramName"></a>

```java
public void resetProgramName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MedialiveMultiplexprogram resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isConstruct"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplexprogram.MedialiveMultiplexprogram;

MedialiveMultiplexprogram.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplexprogram.MedialiveMultiplexprogram;

MedialiveMultiplexprogram.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplexprogram.MedialiveMultiplexprogram;

MedialiveMultiplexprogram.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplexprogram.MedialiveMultiplexprogram;

MedialiveMultiplexprogram.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MedialiveMultiplexprogram.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MedialiveMultiplexprogram resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MedialiveMultiplexprogram to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MedialiveMultiplexprogram that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MedialiveMultiplexprogram to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.channelId">channelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.multiplexProgramSettings">multiplexProgramSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference">MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.packetIdentifiersMap">packetIdentifiersMap</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference">MedialiveMultiplexprogramPacketIdentifiersMapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.pipelineDetails">pipelineDetails</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList">MedialiveMultiplexprogramPipelineDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.multiplexIdInput">multiplexIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.multiplexProgramSettingsInput">multiplexProgramSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings">MedialiveMultiplexprogramMultiplexProgramSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.packetIdentifiersMapInput">packetIdentifiersMapInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap">MedialiveMultiplexprogramPacketIdentifiersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.pipelineDetailsInput">pipelineDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails">MedialiveMultiplexprogramPipelineDetails</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.preferredChannelPipelineInput">preferredChannelPipelineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.programNameInput">programNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.multiplexId">multiplexId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.preferredChannelPipeline">preferredChannelPipeline</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.programName">programName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.channelId"></a>

```java
public java.lang.String getChannelId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `multiplexProgramSettings`<sup>Required</sup> <a name="multiplexProgramSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.multiplexProgramSettings"></a>

```java
public MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference getMultiplexProgramSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference">MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference</a>

---

##### `packetIdentifiersMap`<sup>Required</sup> <a name="packetIdentifiersMap" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.packetIdentifiersMap"></a>

```java
public MedialiveMultiplexprogramPacketIdentifiersMapOutputReference getPacketIdentifiersMap();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference">MedialiveMultiplexprogramPacketIdentifiersMapOutputReference</a>

---

##### `pipelineDetails`<sup>Required</sup> <a name="pipelineDetails" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.pipelineDetails"></a>

```java
public MedialiveMultiplexprogramPipelineDetailsList getPipelineDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList">MedialiveMultiplexprogramPipelineDetailsList</a>

---

##### `multiplexIdInput`<sup>Optional</sup> <a name="multiplexIdInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.multiplexIdInput"></a>

```java
public java.lang.String getMultiplexIdInput();
```

- *Type:* java.lang.String

---

##### `multiplexProgramSettingsInput`<sup>Optional</sup> <a name="multiplexProgramSettingsInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.multiplexProgramSettingsInput"></a>

```java
public IResolvable|MedialiveMultiplexprogramMultiplexProgramSettings getMultiplexProgramSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings">MedialiveMultiplexprogramMultiplexProgramSettings</a>

---

##### `packetIdentifiersMapInput`<sup>Optional</sup> <a name="packetIdentifiersMapInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.packetIdentifiersMapInput"></a>

```java
public IResolvable|MedialiveMultiplexprogramPacketIdentifiersMap getPacketIdentifiersMapInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap">MedialiveMultiplexprogramPacketIdentifiersMap</a>

---

##### `pipelineDetailsInput`<sup>Optional</sup> <a name="pipelineDetailsInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.pipelineDetailsInput"></a>

```java
public IResolvable|java.util.List<MedialiveMultiplexprogramPipelineDetails> getPipelineDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails">MedialiveMultiplexprogramPipelineDetails</a>>

---

##### `preferredChannelPipelineInput`<sup>Optional</sup> <a name="preferredChannelPipelineInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.preferredChannelPipelineInput"></a>

```java
public java.lang.String getPreferredChannelPipelineInput();
```

- *Type:* java.lang.String

---

##### `programNameInput`<sup>Optional</sup> <a name="programNameInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.programNameInput"></a>

```java
public java.lang.String getProgramNameInput();
```

- *Type:* java.lang.String

---

##### `multiplexId`<sup>Required</sup> <a name="multiplexId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.multiplexId"></a>

```java
public java.lang.String getMultiplexId();
```

- *Type:* java.lang.String

---

##### `preferredChannelPipeline`<sup>Required</sup> <a name="preferredChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.preferredChannelPipeline"></a>

```java
public java.lang.String getPreferredChannelPipeline();
```

- *Type:* java.lang.String

---

##### `programName`<sup>Required</sup> <a name="programName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.programName"></a>

```java
public java.lang.String getProgramName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MedialiveMultiplexprogramConfig <a name="MedialiveMultiplexprogramConfig" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplexprogram.MedialiveMultiplexprogramConfig;

MedialiveMultiplexprogramConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .multiplexId(java.lang.String)
//  .multiplexProgramSettings(MedialiveMultiplexprogramMultiplexProgramSettings)
//  .packetIdentifiersMap(MedialiveMultiplexprogramPacketIdentifiersMap)
//  .pipelineDetails(IResolvable|java.util.List<MedialiveMultiplexprogramPipelineDetails>)
//  .preferredChannelPipeline(java.lang.String)
//  .programName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.multiplexId">multiplexId</a></code> | <code>java.lang.String</code> | The ID of the multiplex that the program belongs to. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.multiplexProgramSettings">multiplexProgramSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings">MedialiveMultiplexprogramMultiplexProgramSettings</a></code> | The settings for this multiplex program. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.packetIdentifiersMap">packetIdentifiersMap</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap">MedialiveMultiplexprogramPacketIdentifiersMap</a></code> | The packet identifier map for this multiplex program. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.pipelineDetails">pipelineDetails</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails">MedialiveMultiplexprogramPipelineDetails</a>></code> | Contains information about the current sources for the specified program in the specified multiplex. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.preferredChannelPipeline">preferredChannelPipeline</a></code> | <code>java.lang.String</code> | The settings for this multiplex program. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.programName">programName</a></code> | <code>java.lang.String</code> | The name of the multiplex program. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `multiplexId`<sup>Optional</sup> <a name="multiplexId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.multiplexId"></a>

```java
public java.lang.String getMultiplexId();
```

- *Type:* java.lang.String

The ID of the multiplex that the program belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#multiplex_id MedialiveMultiplexprogram#multiplex_id}

---

##### `multiplexProgramSettings`<sup>Optional</sup> <a name="multiplexProgramSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.multiplexProgramSettings"></a>

```java
public MedialiveMultiplexprogramMultiplexProgramSettings getMultiplexProgramSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings">MedialiveMultiplexprogramMultiplexProgramSettings</a>

The settings for this multiplex program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#multiplex_program_settings MedialiveMultiplexprogram#multiplex_program_settings}

---

##### `packetIdentifiersMap`<sup>Optional</sup> <a name="packetIdentifiersMap" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.packetIdentifiersMap"></a>

```java
public MedialiveMultiplexprogramPacketIdentifiersMap getPacketIdentifiersMap();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap">MedialiveMultiplexprogramPacketIdentifiersMap</a>

The packet identifier map for this multiplex program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#packet_identifiers_map MedialiveMultiplexprogram#packet_identifiers_map}

---

##### `pipelineDetails`<sup>Optional</sup> <a name="pipelineDetails" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.pipelineDetails"></a>

```java
public IResolvable|java.util.List<MedialiveMultiplexprogramPipelineDetails> getPipelineDetails();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails">MedialiveMultiplexprogramPipelineDetails</a>>

Contains information about the current sources for the specified program in the specified multiplex.

Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#pipeline_details MedialiveMultiplexprogram#pipeline_details}

---

##### `preferredChannelPipeline`<sup>Optional</sup> <a name="preferredChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.preferredChannelPipeline"></a>

```java
public java.lang.String getPreferredChannelPipeline();
```

- *Type:* java.lang.String

The settings for this multiplex program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#preferred_channel_pipeline MedialiveMultiplexprogram#preferred_channel_pipeline}

---

##### `programName`<sup>Optional</sup> <a name="programName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.programName"></a>

```java
public java.lang.String getProgramName();
```

- *Type:* java.lang.String

The name of the multiplex program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#program_name MedialiveMultiplexprogram#program_name}

---

### MedialiveMultiplexprogramMultiplexProgramSettings <a name="MedialiveMultiplexprogramMultiplexProgramSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings;

MedialiveMultiplexprogramMultiplexProgramSettings.builder()
//  .preferredChannelPipeline(java.lang.String)
//  .programNumber(java.lang.Number)
//  .serviceDescriptor(MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor)
//  .videoSettings(MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.property.preferredChannelPipeline">preferredChannelPipeline</a></code> | <code>java.lang.String</code> | Indicates which pipeline is preferred by the multiplex for program ingest. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.property.programNumber">programNumber</a></code> | <code>java.lang.Number</code> | Unique program number. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.property.serviceDescriptor">serviceDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor</a></code> | Transport stream service descriptor configuration for the Multiplex program. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.property.videoSettings">videoSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings</a></code> | Program video settings configuration. |

---

##### `preferredChannelPipeline`<sup>Optional</sup> <a name="preferredChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.property.preferredChannelPipeline"></a>

```java
public java.lang.String getPreferredChannelPipeline();
```

- *Type:* java.lang.String

Indicates which pipeline is preferred by the multiplex for program ingest.

If set to "PIPELINE_0" or "PIPELINE_1" and an unhealthy ingest causes the multiplex to switch to the non-preferred pipeline,
it will switch back once that ingest is healthy again. If set to "CURRENTLY_ACTIVE",
it will not switch back to the other pipeline based on it recovering to a healthy state,
it will only switch if the active pipeline becomes unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#preferred_channel_pipeline MedialiveMultiplexprogram#preferred_channel_pipeline}

---

##### `programNumber`<sup>Optional</sup> <a name="programNumber" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.property.programNumber"></a>

```java
public java.lang.Number getProgramNumber();
```

- *Type:* java.lang.Number

Unique program number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#program_number MedialiveMultiplexprogram#program_number}

---

##### `serviceDescriptor`<sup>Optional</sup> <a name="serviceDescriptor" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.property.serviceDescriptor"></a>

```java
public MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor getServiceDescriptor();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor</a>

Transport stream service descriptor configuration for the Multiplex program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#service_descriptor MedialiveMultiplexprogram#service_descriptor}

---

##### `videoSettings`<sup>Optional</sup> <a name="videoSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.property.videoSettings"></a>

```java
public MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings getVideoSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings</a>

Program video settings configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#video_settings MedialiveMultiplexprogram#video_settings}

---

### MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor <a name="MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor;

MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor.builder()
//  .providerName(java.lang.String)
//  .serviceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor.property.providerName">providerName</a></code> | <code>java.lang.String</code> | Name of the provider. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Name of the service. |

---

##### `providerName`<sup>Optional</sup> <a name="providerName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

Name of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#provider_name MedialiveMultiplexprogram#provider_name}

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

Name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#service_name MedialiveMultiplexprogram#service_name}

---

### MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings <a name="MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings;

MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings.builder()
//  .constantBitrate(java.lang.Number)
//  .statmuxSettings(MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings.property.constantBitrate">constantBitrate</a></code> | <code>java.lang.Number</code> | The constant bitrate configuration for the video encode. When this field is defined, StatmuxSettings must be undefined. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings.property.statmuxSettings">statmuxSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a></code> | Statmux rate control settings. When this field is defined, ConstantBitrate must be undefined. |

---

##### `constantBitrate`<sup>Optional</sup> <a name="constantBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings.property.constantBitrate"></a>

```java
public java.lang.Number getConstantBitrate();
```

- *Type:* java.lang.Number

The constant bitrate configuration for the video encode. When this field is defined, StatmuxSettings must be undefined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#constant_bitrate MedialiveMultiplexprogram#constant_bitrate}

---

##### `statmuxSettings`<sup>Optional</sup> <a name="statmuxSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings.property.statmuxSettings"></a>

```java
public MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings getStatmuxSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a>

Statmux rate control settings. When this field is defined, ConstantBitrate must be undefined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#statmux_settings MedialiveMultiplexprogram#statmux_settings}

---

### MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings <a name="MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings;

MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings.builder()
//  .maximumBitrate(java.lang.Number)
//  .minimumBitrate(java.lang.Number)
//  .priority(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.maximumBitrate">maximumBitrate</a></code> | <code>java.lang.Number</code> | Maximum statmux bitrate. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.minimumBitrate">minimumBitrate</a></code> | <code>java.lang.Number</code> | Minimum statmux bitrate. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.priority">priority</a></code> | <code>java.lang.Number</code> | The purpose of the priority is to use a combination of the\nmultiplex rate control algorithm and the QVBR capability of the\nencoder to prioritize the video quality of some channels in a\nmultiplex over others. |

---

##### `maximumBitrate`<sup>Optional</sup> <a name="maximumBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.maximumBitrate"></a>

```java
public java.lang.Number getMaximumBitrate();
```

- *Type:* java.lang.Number

Maximum statmux bitrate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#maximum_bitrate MedialiveMultiplexprogram#maximum_bitrate}

---

##### `minimumBitrate`<sup>Optional</sup> <a name="minimumBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.minimumBitrate"></a>

```java
public java.lang.Number getMinimumBitrate();
```

- *Type:* java.lang.Number

Minimum statmux bitrate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#minimum_bitrate MedialiveMultiplexprogram#minimum_bitrate}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

The purpose of the priority is to use a combination of the\nmultiplex rate control algorithm and the QVBR capability of the\nencoder to prioritize the video quality of some channels in a\nmultiplex over others.

Channels that have a higher priority will\nget higher video quality at the expense of the video quality of\nother channels in the multiplex with lower priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#priority MedialiveMultiplexprogram#priority}

---

### MedialiveMultiplexprogramPacketIdentifiersMap <a name="MedialiveMultiplexprogramPacketIdentifiersMap" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap;

MedialiveMultiplexprogramPacketIdentifiersMap.builder()
//  .audioPids(java.util.List<java.lang.Number>)
//  .dvbSubPids(java.util.List<java.lang.Number>)
//  .dvbTeletextPid(java.lang.Number)
//  .etvPlatformPid(java.lang.Number)
//  .etvSignalPid(java.lang.Number)
//  .klvDataPids(java.util.List<java.lang.Number>)
//  .pcrPid(java.lang.Number)
//  .pmtPid(java.lang.Number)
//  .privateMetadataPid(java.lang.Number)
//  .scte27Pids(java.util.List<java.lang.Number>)
//  .scte35Pid(java.lang.Number)
//  .timedMetadataPid(java.lang.Number)
//  .videoPid(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.audioPids">audioPids</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#audio_pids MedialiveMultiplexprogram#audio_pids}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.dvbSubPids">dvbSubPids</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#dvb_sub_pids MedialiveMultiplexprogram#dvb_sub_pids}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.dvbTeletextPid">dvbTeletextPid</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#dvb_teletext_pid MedialiveMultiplexprogram#dvb_teletext_pid}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.etvPlatformPid">etvPlatformPid</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#etv_platform_pid MedialiveMultiplexprogram#etv_platform_pid}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.etvSignalPid">etvSignalPid</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#etv_signal_pid MedialiveMultiplexprogram#etv_signal_pid}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.klvDataPids">klvDataPids</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#klv_data_pids MedialiveMultiplexprogram#klv_data_pids}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.pcrPid">pcrPid</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#pcr_pid MedialiveMultiplexprogram#pcr_pid}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.pmtPid">pmtPid</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#pmt_pid MedialiveMultiplexprogram#pmt_pid}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.privateMetadataPid">privateMetadataPid</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#private_metadata_pid MedialiveMultiplexprogram#private_metadata_pid}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.scte27Pids">scte27Pids</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#scte_27_pids MedialiveMultiplexprogram#scte_27_pids}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.scte35Pid">scte35Pid</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#scte_35_pid MedialiveMultiplexprogram#scte_35_pid}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.timedMetadataPid">timedMetadataPid</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#timed_metadata_pid MedialiveMultiplexprogram#timed_metadata_pid}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.videoPid">videoPid</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#video_pid MedialiveMultiplexprogram#video_pid}. |

---

##### `audioPids`<sup>Optional</sup> <a name="audioPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.audioPids"></a>

```java
public java.util.List<java.lang.Number> getAudioPids();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#audio_pids MedialiveMultiplexprogram#audio_pids}.

---

##### `dvbSubPids`<sup>Optional</sup> <a name="dvbSubPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.dvbSubPids"></a>

```java
public java.util.List<java.lang.Number> getDvbSubPids();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#dvb_sub_pids MedialiveMultiplexprogram#dvb_sub_pids}.

---

##### `dvbTeletextPid`<sup>Optional</sup> <a name="dvbTeletextPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.dvbTeletextPid"></a>

```java
public java.lang.Number getDvbTeletextPid();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#dvb_teletext_pid MedialiveMultiplexprogram#dvb_teletext_pid}.

---

##### `etvPlatformPid`<sup>Optional</sup> <a name="etvPlatformPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.etvPlatformPid"></a>

```java
public java.lang.Number getEtvPlatformPid();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#etv_platform_pid MedialiveMultiplexprogram#etv_platform_pid}.

---

##### `etvSignalPid`<sup>Optional</sup> <a name="etvSignalPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.etvSignalPid"></a>

```java
public java.lang.Number getEtvSignalPid();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#etv_signal_pid MedialiveMultiplexprogram#etv_signal_pid}.

---

##### `klvDataPids`<sup>Optional</sup> <a name="klvDataPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.klvDataPids"></a>

```java
public java.util.List<java.lang.Number> getKlvDataPids();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#klv_data_pids MedialiveMultiplexprogram#klv_data_pids}.

---

##### `pcrPid`<sup>Optional</sup> <a name="pcrPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.pcrPid"></a>

```java
public java.lang.Number getPcrPid();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#pcr_pid MedialiveMultiplexprogram#pcr_pid}.

---

##### `pmtPid`<sup>Optional</sup> <a name="pmtPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.pmtPid"></a>

```java
public java.lang.Number getPmtPid();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#pmt_pid MedialiveMultiplexprogram#pmt_pid}.

---

##### `privateMetadataPid`<sup>Optional</sup> <a name="privateMetadataPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.privateMetadataPid"></a>

```java
public java.lang.Number getPrivateMetadataPid();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#private_metadata_pid MedialiveMultiplexprogram#private_metadata_pid}.

---

##### `scte27Pids`<sup>Optional</sup> <a name="scte27Pids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.scte27Pids"></a>

```java
public java.util.List<java.lang.Number> getScte27Pids();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#scte_27_pids MedialiveMultiplexprogram#scte_27_pids}.

---

##### `scte35Pid`<sup>Optional</sup> <a name="scte35Pid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.scte35Pid"></a>

```java
public java.lang.Number getScte35Pid();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#scte_35_pid MedialiveMultiplexprogram#scte_35_pid}.

---

##### `timedMetadataPid`<sup>Optional</sup> <a name="timedMetadataPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.timedMetadataPid"></a>

```java
public java.lang.Number getTimedMetadataPid();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#timed_metadata_pid MedialiveMultiplexprogram#timed_metadata_pid}.

---

##### `videoPid`<sup>Optional</sup> <a name="videoPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.videoPid"></a>

```java
public java.lang.Number getVideoPid();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#video_pid MedialiveMultiplexprogram#video_pid}.

---

### MedialiveMultiplexprogramPipelineDetails <a name="MedialiveMultiplexprogramPipelineDetails" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplexprogram.MedialiveMultiplexprogramPipelineDetails;

MedialiveMultiplexprogramPipelineDetails.builder()
//  .activeChannelPipeline(java.lang.String)
//  .pipelineId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails.property.activeChannelPipeline">activeChannelPipeline</a></code> | <code>java.lang.String</code> | Identifies the channel pipeline that is currently active for the pipeline (identified by PipelineId) in the multiplex. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails.property.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | Identifies a specific pipeline in the multiplex. |

---

##### `activeChannelPipeline`<sup>Optional</sup> <a name="activeChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails.property.activeChannelPipeline"></a>

```java
public java.lang.String getActiveChannelPipeline();
```

- *Type:* java.lang.String

Identifies the channel pipeline that is currently active for the pipeline (identified by PipelineId) in the multiplex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#active_channel_pipeline MedialiveMultiplexprogram#active_channel_pipeline}

---

##### `pipelineId`<sup>Optional</sup> <a name="pipelineId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails.property.pipelineId"></a>

```java
public java.lang.String getPipelineId();
```

- *Type:* java.lang.String

Identifies a specific pipeline in the multiplex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#pipeline_id MedialiveMultiplexprogram#pipeline_id}

---

## Classes <a name="Classes" id="Classes"></a>

### MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference <a name="MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference;

new MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.putServiceDescriptor">putServiceDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.putVideoSettings">putVideoSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resetPreferredChannelPipeline">resetPreferredChannelPipeline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resetProgramNumber">resetProgramNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resetServiceDescriptor">resetServiceDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resetVideoSettings">resetVideoSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServiceDescriptor` <a name="putServiceDescriptor" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.putServiceDescriptor"></a>

```java
public void putServiceDescriptor(MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.putServiceDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor</a>

---

##### `putVideoSettings` <a name="putVideoSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.putVideoSettings"></a>

```java
public void putVideoSettings(MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.putVideoSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings</a>

---

##### `resetPreferredChannelPipeline` <a name="resetPreferredChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resetPreferredChannelPipeline"></a>

```java
public void resetPreferredChannelPipeline()
```

##### `resetProgramNumber` <a name="resetProgramNumber" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resetProgramNumber"></a>

```java
public void resetProgramNumber()
```

##### `resetServiceDescriptor` <a name="resetServiceDescriptor" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resetServiceDescriptor"></a>

```java
public void resetServiceDescriptor()
```

##### `resetVideoSettings` <a name="resetVideoSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resetVideoSettings"></a>

```java
public void resetVideoSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.serviceDescriptor">serviceDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference">MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.videoSettings">videoSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.preferredChannelPipelineInput">preferredChannelPipelineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.programNumberInput">programNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.serviceDescriptorInput">serviceDescriptorInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.videoSettingsInput">videoSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.preferredChannelPipeline">preferredChannelPipeline</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.programNumber">programNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings">MedialiveMultiplexprogramMultiplexProgramSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceDescriptor`<sup>Required</sup> <a name="serviceDescriptor" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.serviceDescriptor"></a>

```java
public MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference getServiceDescriptor();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference">MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference</a>

---

##### `videoSettings`<sup>Required</sup> <a name="videoSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.videoSettings"></a>

```java
public MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference getVideoSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference</a>

---

##### `preferredChannelPipelineInput`<sup>Optional</sup> <a name="preferredChannelPipelineInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.preferredChannelPipelineInput"></a>

```java
public java.lang.String getPreferredChannelPipelineInput();
```

- *Type:* java.lang.String

---

##### `programNumberInput`<sup>Optional</sup> <a name="programNumberInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.programNumberInput"></a>

```java
public java.lang.Number getProgramNumberInput();
```

- *Type:* java.lang.Number

---

##### `serviceDescriptorInput`<sup>Optional</sup> <a name="serviceDescriptorInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.serviceDescriptorInput"></a>

```java
public IResolvable|MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor getServiceDescriptorInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor</a>

---

##### `videoSettingsInput`<sup>Optional</sup> <a name="videoSettingsInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.videoSettingsInput"></a>

```java
public IResolvable|MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings getVideoSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings</a>

---

##### `preferredChannelPipeline`<sup>Required</sup> <a name="preferredChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.preferredChannelPipeline"></a>

```java
public java.lang.String getPreferredChannelPipeline();
```

- *Type:* java.lang.String

---

##### `programNumber`<sup>Required</sup> <a name="programNumber" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.programNumber"></a>

```java
public java.lang.Number getProgramNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|MedialiveMultiplexprogramMultiplexProgramSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings">MedialiveMultiplexprogramMultiplexProgramSettings</a>

---


### MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference <a name="MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference;

new MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resetProviderName">resetProviderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProviderName` <a name="resetProviderName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resetProviderName"></a>

```java
public void resetProviderName()
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resetServiceName"></a>

```java
public void resetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerNameInput">providerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerName">providerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerNameInput"></a>

```java
public java.lang.String getProviderNameInput();
```

- *Type:* java.lang.String

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.internalValue"></a>

```java
public IResolvable|MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor</a>

---


### MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference <a name="MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference;

new MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.putStatmuxSettings">putStatmuxSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resetConstantBitrate">resetConstantBitrate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resetStatmuxSettings">resetStatmuxSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStatmuxSettings` <a name="putStatmuxSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.putStatmuxSettings"></a>

```java
public void putStatmuxSettings(MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.putStatmuxSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a>

---

##### `resetConstantBitrate` <a name="resetConstantBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resetConstantBitrate"></a>

```java
public void resetConstantBitrate()
```

##### `resetStatmuxSettings` <a name="resetStatmuxSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resetStatmuxSettings"></a>

```java
public void resetStatmuxSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettings">statmuxSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrateInput">constantBitrateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettingsInput">statmuxSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrate">constantBitrate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statmuxSettings`<sup>Required</sup> <a name="statmuxSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettings"></a>

```java
public MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference getStatmuxSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference</a>

---

##### `constantBitrateInput`<sup>Optional</sup> <a name="constantBitrateInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrateInput"></a>

```java
public java.lang.Number getConstantBitrateInput();
```

- *Type:* java.lang.Number

---

##### `statmuxSettingsInput`<sup>Optional</sup> <a name="statmuxSettingsInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettingsInput"></a>

```java
public IResolvable|MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings getStatmuxSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a>

---

##### `constantBitrate`<sup>Required</sup> <a name="constantBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrate"></a>

```java
public java.lang.Number getConstantBitrate();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings</a>

---


### MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference <a name="MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference;

new MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetMaximumBitrate">resetMaximumBitrate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetMinimumBitrate">resetMinimumBitrate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetPriority">resetPriority</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumBitrate` <a name="resetMaximumBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetMaximumBitrate"></a>

```java
public void resetMaximumBitrate()
```

##### `resetMinimumBitrate` <a name="resetMinimumBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetMinimumBitrate"></a>

```java
public void resetMinimumBitrate()
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetPriority"></a>

```java
public void resetPriority()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrateInput">maximumBitrateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrateInput">minimumBitrateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrate">maximumBitrate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrate">minimumBitrate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maximumBitrateInput`<sup>Optional</sup> <a name="maximumBitrateInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrateInput"></a>

```java
public java.lang.Number getMaximumBitrateInput();
```

- *Type:* java.lang.Number

---

##### `minimumBitrateInput`<sup>Optional</sup> <a name="minimumBitrateInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrateInput"></a>

```java
public java.lang.Number getMinimumBitrateInput();
```

- *Type:* java.lang.Number

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `maximumBitrate`<sup>Required</sup> <a name="maximumBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrate"></a>

```java
public java.lang.Number getMaximumBitrate();
```

- *Type:* java.lang.Number

---

##### `minimumBitrate`<sup>Required</sup> <a name="minimumBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrate"></a>

```java
public java.lang.Number getMinimumBitrate();
```

- *Type:* java.lang.Number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a>

---


### MedialiveMultiplexprogramPacketIdentifiersMapOutputReference <a name="MedialiveMultiplexprogramPacketIdentifiersMapOutputReference" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference;

new MedialiveMultiplexprogramPacketIdentifiersMapOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetAudioPids">resetAudioPids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetDvbSubPids">resetDvbSubPids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetDvbTeletextPid">resetDvbTeletextPid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetEtvPlatformPid">resetEtvPlatformPid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetEtvSignalPid">resetEtvSignalPid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetKlvDataPids">resetKlvDataPids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetPcrPid">resetPcrPid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetPmtPid">resetPmtPid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetPrivateMetadataPid">resetPrivateMetadataPid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetScte27Pids">resetScte27Pids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetScte35Pid">resetScte35Pid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetTimedMetadataPid">resetTimedMetadataPid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetVideoPid">resetVideoPid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudioPids` <a name="resetAudioPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetAudioPids"></a>

```java
public void resetAudioPids()
```

##### `resetDvbSubPids` <a name="resetDvbSubPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetDvbSubPids"></a>

```java
public void resetDvbSubPids()
```

##### `resetDvbTeletextPid` <a name="resetDvbTeletextPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetDvbTeletextPid"></a>

```java
public void resetDvbTeletextPid()
```

##### `resetEtvPlatformPid` <a name="resetEtvPlatformPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetEtvPlatformPid"></a>

```java
public void resetEtvPlatformPid()
```

##### `resetEtvSignalPid` <a name="resetEtvSignalPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetEtvSignalPid"></a>

```java
public void resetEtvSignalPid()
```

##### `resetKlvDataPids` <a name="resetKlvDataPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetKlvDataPids"></a>

```java
public void resetKlvDataPids()
```

##### `resetPcrPid` <a name="resetPcrPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetPcrPid"></a>

```java
public void resetPcrPid()
```

##### `resetPmtPid` <a name="resetPmtPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetPmtPid"></a>

```java
public void resetPmtPid()
```

##### `resetPrivateMetadataPid` <a name="resetPrivateMetadataPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetPrivateMetadataPid"></a>

```java
public void resetPrivateMetadataPid()
```

##### `resetScte27Pids` <a name="resetScte27Pids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetScte27Pids"></a>

```java
public void resetScte27Pids()
```

##### `resetScte35Pid` <a name="resetScte35Pid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetScte35Pid"></a>

```java
public void resetScte35Pid()
```

##### `resetTimedMetadataPid` <a name="resetTimedMetadataPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetTimedMetadataPid"></a>

```java
public void resetTimedMetadataPid()
```

##### `resetVideoPid` <a name="resetVideoPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetVideoPid"></a>

```java
public void resetVideoPid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.audioPidsInput">audioPidsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbSubPidsInput">dvbSubPidsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbTeletextPidInput">dvbTeletextPidInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvPlatformPidInput">etvPlatformPidInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvSignalPidInput">etvSignalPidInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.klvDataPidsInput">klvDataPidsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pcrPidInput">pcrPidInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pmtPidInput">pmtPidInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.privateMetadataPidInput">privateMetadataPidInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte27PidsInput">scte27PidsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte35PidInput">scte35PidInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.timedMetadataPidInput">timedMetadataPidInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.videoPidInput">videoPidInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.audioPids">audioPids</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbSubPids">dvbSubPids</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbTeletextPid">dvbTeletextPid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvPlatformPid">etvPlatformPid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvSignalPid">etvSignalPid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.klvDataPids">klvDataPids</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pcrPid">pcrPid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pmtPid">pmtPid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.privateMetadataPid">privateMetadataPid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte27Pids">scte27Pids</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte35Pid">scte35Pid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.timedMetadataPid">timedMetadataPid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.videoPid">videoPid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap">MedialiveMultiplexprogramPacketIdentifiersMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `audioPidsInput`<sup>Optional</sup> <a name="audioPidsInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.audioPidsInput"></a>

```java
public java.util.List<java.lang.Number> getAudioPidsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `dvbSubPidsInput`<sup>Optional</sup> <a name="dvbSubPidsInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbSubPidsInput"></a>

```java
public java.util.List<java.lang.Number> getDvbSubPidsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `dvbTeletextPidInput`<sup>Optional</sup> <a name="dvbTeletextPidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbTeletextPidInput"></a>

```java
public java.lang.Number getDvbTeletextPidInput();
```

- *Type:* java.lang.Number

---

##### `etvPlatformPidInput`<sup>Optional</sup> <a name="etvPlatformPidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvPlatformPidInput"></a>

```java
public java.lang.Number getEtvPlatformPidInput();
```

- *Type:* java.lang.Number

---

##### `etvSignalPidInput`<sup>Optional</sup> <a name="etvSignalPidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvSignalPidInput"></a>

```java
public java.lang.Number getEtvSignalPidInput();
```

- *Type:* java.lang.Number

---

##### `klvDataPidsInput`<sup>Optional</sup> <a name="klvDataPidsInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.klvDataPidsInput"></a>

```java
public java.util.List<java.lang.Number> getKlvDataPidsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `pcrPidInput`<sup>Optional</sup> <a name="pcrPidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pcrPidInput"></a>

```java
public java.lang.Number getPcrPidInput();
```

- *Type:* java.lang.Number

---

##### `pmtPidInput`<sup>Optional</sup> <a name="pmtPidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pmtPidInput"></a>

```java
public java.lang.Number getPmtPidInput();
```

- *Type:* java.lang.Number

---

##### `privateMetadataPidInput`<sup>Optional</sup> <a name="privateMetadataPidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.privateMetadataPidInput"></a>

```java
public java.lang.Number getPrivateMetadataPidInput();
```

- *Type:* java.lang.Number

---

##### `scte27PidsInput`<sup>Optional</sup> <a name="scte27PidsInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte27PidsInput"></a>

```java
public java.util.List<java.lang.Number> getScte27PidsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `scte35PidInput`<sup>Optional</sup> <a name="scte35PidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte35PidInput"></a>

```java
public java.lang.Number getScte35PidInput();
```

- *Type:* java.lang.Number

---

##### `timedMetadataPidInput`<sup>Optional</sup> <a name="timedMetadataPidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.timedMetadataPidInput"></a>

```java
public java.lang.Number getTimedMetadataPidInput();
```

- *Type:* java.lang.Number

---

##### `videoPidInput`<sup>Optional</sup> <a name="videoPidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.videoPidInput"></a>

```java
public java.lang.Number getVideoPidInput();
```

- *Type:* java.lang.Number

---

##### `audioPids`<sup>Required</sup> <a name="audioPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.audioPids"></a>

```java
public java.util.List<java.lang.Number> getAudioPids();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `dvbSubPids`<sup>Required</sup> <a name="dvbSubPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbSubPids"></a>

```java
public java.util.List<java.lang.Number> getDvbSubPids();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `dvbTeletextPid`<sup>Required</sup> <a name="dvbTeletextPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbTeletextPid"></a>

```java
public java.lang.Number getDvbTeletextPid();
```

- *Type:* java.lang.Number

---

##### `etvPlatformPid`<sup>Required</sup> <a name="etvPlatformPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvPlatformPid"></a>

```java
public java.lang.Number getEtvPlatformPid();
```

- *Type:* java.lang.Number

---

##### `etvSignalPid`<sup>Required</sup> <a name="etvSignalPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvSignalPid"></a>

```java
public java.lang.Number getEtvSignalPid();
```

- *Type:* java.lang.Number

---

##### `klvDataPids`<sup>Required</sup> <a name="klvDataPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.klvDataPids"></a>

```java
public java.util.List<java.lang.Number> getKlvDataPids();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `pcrPid`<sup>Required</sup> <a name="pcrPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pcrPid"></a>

```java
public java.lang.Number getPcrPid();
```

- *Type:* java.lang.Number

---

##### `pmtPid`<sup>Required</sup> <a name="pmtPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pmtPid"></a>

```java
public java.lang.Number getPmtPid();
```

- *Type:* java.lang.Number

---

##### `privateMetadataPid`<sup>Required</sup> <a name="privateMetadataPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.privateMetadataPid"></a>

```java
public java.lang.Number getPrivateMetadataPid();
```

- *Type:* java.lang.Number

---

##### `scte27Pids`<sup>Required</sup> <a name="scte27Pids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte27Pids"></a>

```java
public java.util.List<java.lang.Number> getScte27Pids();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `scte35Pid`<sup>Required</sup> <a name="scte35Pid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte35Pid"></a>

```java
public java.lang.Number getScte35Pid();
```

- *Type:* java.lang.Number

---

##### `timedMetadataPid`<sup>Required</sup> <a name="timedMetadataPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.timedMetadataPid"></a>

```java
public java.lang.Number getTimedMetadataPid();
```

- *Type:* java.lang.Number

---

##### `videoPid`<sup>Required</sup> <a name="videoPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.videoPid"></a>

```java
public java.lang.Number getVideoPid();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.internalValue"></a>

```java
public IResolvable|MedialiveMultiplexprogramPacketIdentifiersMap getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap">MedialiveMultiplexprogramPacketIdentifiersMap</a>

---


### MedialiveMultiplexprogramPipelineDetailsList <a name="MedialiveMultiplexprogramPipelineDetailsList" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplexprogram.MedialiveMultiplexprogramPipelineDetailsList;

new MedialiveMultiplexprogramPipelineDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.get"></a>

```java
public MedialiveMultiplexprogramPipelineDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails">MedialiveMultiplexprogramPipelineDetails</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MedialiveMultiplexprogramPipelineDetails> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails">MedialiveMultiplexprogramPipelineDetails</a>>

---


### MedialiveMultiplexprogramPipelineDetailsOutputReference <a name="MedialiveMultiplexprogramPipelineDetailsOutputReference" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference;

new MedialiveMultiplexprogramPipelineDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.resetActiveChannelPipeline">resetActiveChannelPipeline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.resetPipelineId">resetPipelineId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActiveChannelPipeline` <a name="resetActiveChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.resetActiveChannelPipeline"></a>

```java
public void resetActiveChannelPipeline()
```

##### `resetPipelineId` <a name="resetPipelineId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.resetPipelineId"></a>

```java
public void resetPipelineId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.activeChannelPipelineInput">activeChannelPipelineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.pipelineIdInput">pipelineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.activeChannelPipeline">activeChannelPipeline</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails">MedialiveMultiplexprogramPipelineDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activeChannelPipelineInput`<sup>Optional</sup> <a name="activeChannelPipelineInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.activeChannelPipelineInput"></a>

```java
public java.lang.String getActiveChannelPipelineInput();
```

- *Type:* java.lang.String

---

##### `pipelineIdInput`<sup>Optional</sup> <a name="pipelineIdInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.pipelineIdInput"></a>

```java
public java.lang.String getPipelineIdInput();
```

- *Type:* java.lang.String

---

##### `activeChannelPipeline`<sup>Required</sup> <a name="activeChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.activeChannelPipeline"></a>

```java
public java.lang.String getActiveChannelPipeline();
```

- *Type:* java.lang.String

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.pipelineId"></a>

```java
public java.lang.String getPipelineId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|MedialiveMultiplexprogramPipelineDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails">MedialiveMultiplexprogramPipelineDetails</a>

---



