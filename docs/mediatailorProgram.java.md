# `mediatailorProgram` Submodule <a name="`mediatailorProgram` Submodule" id="@cdktn/provider-awscc.mediatailorProgram"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediatailorProgram <a name="MediatailorProgram" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program awscc_mediatailor_program}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgram;

MediatailorProgram.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .channelName(java.lang.String)
    .programName(java.lang.String)
    .sourceLocationName(java.lang.String)
//  .adBreaks(IResolvable|java.util.List<MediatailorProgramAdBreaks>)
//  .audienceMedia(IResolvable|java.util.List<MediatailorProgramAudienceMedia>)
//  .liveSourceName(java.lang.String)
//  .scheduleConfiguration(MediatailorProgramScheduleConfiguration)
//  .vodSourceName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.channelName">channelName</a></code> | <code>java.lang.String</code> | The name of the channel for this Program. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.programName">programName</a></code> | <code>java.lang.String</code> | The name of the Program. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.sourceLocationName">sourceLocationName</a></code> | <code>java.lang.String</code> | The name of the source location. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.adBreaks">adBreaks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks">MediatailorProgramAdBreaks</a>></code> | The ad break configuration settings. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.audienceMedia">audienceMedia</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia">MediatailorProgramAudienceMedia</a>></code> | The list of AudienceMedia defined in program. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.liveSourceName">liveSourceName</a></code> | <code>java.lang.String</code> | The name of the LiveSource for this Program. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.scheduleConfiguration">scheduleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration">MediatailorProgramScheduleConfiguration</a></code> | The schedule configuration settings. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.vodSourceName">vodSourceName</a></code> | <code>java.lang.String</code> | The name that's used to refer to a VOD source. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.channelName"></a>

- *Type:* java.lang.String

The name of the channel for this Program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#channel_name MediatailorProgram#channel_name}

---

##### `programName`<sup>Required</sup> <a name="programName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.programName"></a>

- *Type:* java.lang.String

The name of the Program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#program_name MediatailorProgram#program_name}

---

##### `sourceLocationName`<sup>Required</sup> <a name="sourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.sourceLocationName"></a>

- *Type:* java.lang.String

The name of the source location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#source_location_name MediatailorProgram#source_location_name}

---

##### `adBreaks`<sup>Optional</sup> <a name="adBreaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.adBreaks"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks">MediatailorProgramAdBreaks</a>>

The ad break configuration settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#ad_breaks MediatailorProgram#ad_breaks}

---

##### `audienceMedia`<sup>Optional</sup> <a name="audienceMedia" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.audienceMedia"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia">MediatailorProgramAudienceMedia</a>>

The list of AudienceMedia defined in program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#audience_media MediatailorProgram#audience_media}

---

##### `liveSourceName`<sup>Optional</sup> <a name="liveSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.liveSourceName"></a>

- *Type:* java.lang.String

The name of the LiveSource for this Program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#live_source_name MediatailorProgram#live_source_name}

---

##### `scheduleConfiguration`<sup>Optional</sup> <a name="scheduleConfiguration" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.scheduleConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration">MediatailorProgramScheduleConfiguration</a>

The schedule configuration settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#schedule_configuration MediatailorProgram#schedule_configuration}

---

##### `vodSourceName`<sup>Optional</sup> <a name="vodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.vodSourceName"></a>

- *Type:* java.lang.String

The name that's used to refer to a VOD source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#vod_source_name MediatailorProgram#vod_source_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putAdBreaks">putAdBreaks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putAudienceMedia">putAudienceMedia</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putScheduleConfiguration">putScheduleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetAdBreaks">resetAdBreaks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetAudienceMedia">resetAudienceMedia</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetLiveSourceName">resetLiveSourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetScheduleConfiguration">resetScheduleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetVodSourceName">resetVodSourceName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdBreaks` <a name="putAdBreaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putAdBreaks"></a>

```java
public void putAdBreaks(IResolvable|java.util.List<MediatailorProgramAdBreaks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putAdBreaks.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks">MediatailorProgramAdBreaks</a>>

---

##### `putAudienceMedia` <a name="putAudienceMedia" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putAudienceMedia"></a>

```java
public void putAudienceMedia(IResolvable|java.util.List<MediatailorProgramAudienceMedia> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putAudienceMedia.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia">MediatailorProgramAudienceMedia</a>>

---

##### `putScheduleConfiguration` <a name="putScheduleConfiguration" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putScheduleConfiguration"></a>

```java
public void putScheduleConfiguration(MediatailorProgramScheduleConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putScheduleConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration">MediatailorProgramScheduleConfiguration</a>

---

##### `resetAdBreaks` <a name="resetAdBreaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetAdBreaks"></a>

```java
public void resetAdBreaks()
```

##### `resetAudienceMedia` <a name="resetAudienceMedia" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetAudienceMedia"></a>

```java
public void resetAudienceMedia()
```

##### `resetLiveSourceName` <a name="resetLiveSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetLiveSourceName"></a>

```java
public void resetLiveSourceName()
```

##### `resetScheduleConfiguration` <a name="resetScheduleConfiguration" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetScheduleConfiguration"></a>

```java
public void resetScheduleConfiguration()
```

##### `resetVodSourceName` <a name="resetVodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetVodSourceName"></a>

```java
public void resetVodSourceName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MediatailorProgram resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isConstruct"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgram;

MediatailorProgram.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgram;

MediatailorProgram.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgram;

MediatailorProgram.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgram;

MediatailorProgram.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MediatailorProgram.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MediatailorProgram resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MediatailorProgram to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MediatailorProgram that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MediatailorProgram to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.adBreaks">adBreaks</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList">MediatailorProgramAdBreaksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.audienceMedia">audienceMedia</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList">MediatailorProgramAudienceMediaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.clipRange">clipRange</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference">MediatailorProgramClipRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.durationMillis">durationMillis</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.scheduleConfiguration">scheduleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference">MediatailorProgramScheduleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.scheduledStartTime">scheduledStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.adBreaksInput">adBreaksInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks">MediatailorProgramAdBreaks</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.audienceMediaInput">audienceMediaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia">MediatailorProgramAudienceMedia</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.channelNameInput">channelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.liveSourceNameInput">liveSourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.programNameInput">programNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.scheduleConfigurationInput">scheduleConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration">MediatailorProgramScheduleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.sourceLocationNameInput">sourceLocationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.vodSourceNameInput">vodSourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.channelName">channelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.liveSourceName">liveSourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.programName">programName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.sourceLocationName">sourceLocationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.vodSourceName">vodSourceName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `adBreaks`<sup>Required</sup> <a name="adBreaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.adBreaks"></a>

```java
public MediatailorProgramAdBreaksList getAdBreaks();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList">MediatailorProgramAdBreaksList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `audienceMedia`<sup>Required</sup> <a name="audienceMedia" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.audienceMedia"></a>

```java
public MediatailorProgramAudienceMediaList getAudienceMedia();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList">MediatailorProgramAudienceMediaList</a>

---

##### `clipRange`<sup>Required</sup> <a name="clipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.clipRange"></a>

```java
public MediatailorProgramClipRangeOutputReference getClipRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference">MediatailorProgramClipRangeOutputReference</a>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `durationMillis`<sup>Required</sup> <a name="durationMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.durationMillis"></a>

```java
public java.lang.Number getDurationMillis();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `scheduleConfiguration`<sup>Required</sup> <a name="scheduleConfiguration" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.scheduleConfiguration"></a>

```java
public MediatailorProgramScheduleConfigurationOutputReference getScheduleConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference">MediatailorProgramScheduleConfigurationOutputReference</a>

---

##### `scheduledStartTime`<sup>Required</sup> <a name="scheduledStartTime" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.scheduledStartTime"></a>

```java
public java.lang.String getScheduledStartTime();
```

- *Type:* java.lang.String

---

##### `adBreaksInput`<sup>Optional</sup> <a name="adBreaksInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.adBreaksInput"></a>

```java
public IResolvable|java.util.List<MediatailorProgramAdBreaks> getAdBreaksInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks">MediatailorProgramAdBreaks</a>>

---

##### `audienceMediaInput`<sup>Optional</sup> <a name="audienceMediaInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.audienceMediaInput"></a>

```java
public IResolvable|java.util.List<MediatailorProgramAudienceMedia> getAudienceMediaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia">MediatailorProgramAudienceMedia</a>>

---

##### `channelNameInput`<sup>Optional</sup> <a name="channelNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.channelNameInput"></a>

```java
public java.lang.String getChannelNameInput();
```

- *Type:* java.lang.String

---

##### `liveSourceNameInput`<sup>Optional</sup> <a name="liveSourceNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.liveSourceNameInput"></a>

```java
public java.lang.String getLiveSourceNameInput();
```

- *Type:* java.lang.String

---

##### `programNameInput`<sup>Optional</sup> <a name="programNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.programNameInput"></a>

```java
public java.lang.String getProgramNameInput();
```

- *Type:* java.lang.String

---

##### `scheduleConfigurationInput`<sup>Optional</sup> <a name="scheduleConfigurationInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.scheduleConfigurationInput"></a>

```java
public IResolvable|MediatailorProgramScheduleConfiguration getScheduleConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration">MediatailorProgramScheduleConfiguration</a>

---

##### `sourceLocationNameInput`<sup>Optional</sup> <a name="sourceLocationNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.sourceLocationNameInput"></a>

```java
public java.lang.String getSourceLocationNameInput();
```

- *Type:* java.lang.String

---

##### `vodSourceNameInput`<sup>Optional</sup> <a name="vodSourceNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.vodSourceNameInput"></a>

```java
public java.lang.String getVodSourceNameInput();
```

- *Type:* java.lang.String

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

---

##### `liveSourceName`<sup>Required</sup> <a name="liveSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.liveSourceName"></a>

```java
public java.lang.String getLiveSourceName();
```

- *Type:* java.lang.String

---

##### `programName`<sup>Required</sup> <a name="programName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.programName"></a>

```java
public java.lang.String getProgramName();
```

- *Type:* java.lang.String

---

##### `sourceLocationName`<sup>Required</sup> <a name="sourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.sourceLocationName"></a>

```java
public java.lang.String getSourceLocationName();
```

- *Type:* java.lang.String

---

##### `vodSourceName`<sup>Required</sup> <a name="vodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.vodSourceName"></a>

```java
public java.lang.String getVodSourceName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MediatailorProgramAdBreaks <a name="MediatailorProgramAdBreaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAdBreaks;

MediatailorProgramAdBreaks.builder()
//  .adBreakMetadata(IResolvable|java.util.List<MediatailorProgramAdBreaksAdBreakMetadata>)
//  .messageType(java.lang.String)
//  .offsetMillis(java.lang.Number)
//  .slate(MediatailorProgramAdBreaksSlate)
//  .spliceInsertMessage(MediatailorProgramAdBreaksSpliceInsertMessage)
//  .timeSignalMessage(MediatailorProgramAdBreaksTimeSignalMessage)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.adBreakMetadata">adBreakMetadata</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata">MediatailorProgramAdBreaksAdBreakMetadata</a>></code> | Defines a list of key/value pairs that MediaTailor generates within the EXT-X-ASSET tag for SCTE35_ENHANCED output. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.messageType">messageType</a></code> | <code>java.lang.String</code> | The SCTE-35 ad insertion type. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.offsetMillis">offsetMillis</a></code> | <code>java.lang.Number</code> | How long (in milliseconds) after the beginning of the program that an ad starts. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.slate">slate</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate">MediatailorProgramAdBreaksSlate</a></code> | Slate VOD source configuration. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.spliceInsertMessage">spliceInsertMessage</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage">MediatailorProgramAdBreaksSpliceInsertMessage</a></code> | Splice insert message configuration. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.timeSignalMessage">timeSignalMessage</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage">MediatailorProgramAdBreaksTimeSignalMessage</a></code> | The SCTE-35 time_signal message configuration. |

---

##### `adBreakMetadata`<sup>Optional</sup> <a name="adBreakMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.adBreakMetadata"></a>

```java
public IResolvable|java.util.List<MediatailorProgramAdBreaksAdBreakMetadata> getAdBreakMetadata();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata">MediatailorProgramAdBreaksAdBreakMetadata</a>>

Defines a list of key/value pairs that MediaTailor generates within the EXT-X-ASSET tag for SCTE35_ENHANCED output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#ad_break_metadata MediatailorProgram#ad_break_metadata}

---

##### `messageType`<sup>Optional</sup> <a name="messageType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.messageType"></a>

```java
public java.lang.String getMessageType();
```

- *Type:* java.lang.String

The SCTE-35 ad insertion type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#message_type MediatailorProgram#message_type}

---

##### `offsetMillis`<sup>Optional</sup> <a name="offsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.offsetMillis"></a>

```java
public java.lang.Number getOffsetMillis();
```

- *Type:* java.lang.Number

How long (in milliseconds) after the beginning of the program that an ad starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#offset_millis MediatailorProgram#offset_millis}

---

##### `slate`<sup>Optional</sup> <a name="slate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.slate"></a>

```java
public MediatailorProgramAdBreaksSlate getSlate();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate">MediatailorProgramAdBreaksSlate</a>

Slate VOD source configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#slate MediatailorProgram#slate}

---

##### `spliceInsertMessage`<sup>Optional</sup> <a name="spliceInsertMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.spliceInsertMessage"></a>

```java
public MediatailorProgramAdBreaksSpliceInsertMessage getSpliceInsertMessage();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage">MediatailorProgramAdBreaksSpliceInsertMessage</a>

Splice insert message configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#splice_insert_message MediatailorProgram#splice_insert_message}

---

##### `timeSignalMessage`<sup>Optional</sup> <a name="timeSignalMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.timeSignalMessage"></a>

```java
public MediatailorProgramAdBreaksTimeSignalMessage getTimeSignalMessage();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage">MediatailorProgramAdBreaksTimeSignalMessage</a>

The SCTE-35 time_signal message configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#time_signal_message MediatailorProgram#time_signal_message}

---

### MediatailorProgramAdBreaksAdBreakMetadata <a name="MediatailorProgramAdBreaksAdBreakMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAdBreaksAdBreakMetadata;

MediatailorProgramAdBreaksAdBreakMetadata.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata.property.key">key</a></code> | <code>java.lang.String</code> | The key. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata.property.value">value</a></code> | <code>java.lang.String</code> | The value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#key MediatailorProgram#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#value MediatailorProgram#value}

---

### MediatailorProgramAdBreaksSlate <a name="MediatailorProgramAdBreaksSlate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAdBreaksSlate;

MediatailorProgramAdBreaksSlate.builder()
//  .sourceLocationName(java.lang.String)
//  .vodSourceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate.property.sourceLocationName">sourceLocationName</a></code> | <code>java.lang.String</code> | The name of the source location where the slate VOD source is stored. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate.property.vodSourceName">vodSourceName</a></code> | <code>java.lang.String</code> | The slate VOD source name. |

---

##### `sourceLocationName`<sup>Optional</sup> <a name="sourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate.property.sourceLocationName"></a>

```java
public java.lang.String getSourceLocationName();
```

- *Type:* java.lang.String

The name of the source location where the slate VOD source is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#source_location_name MediatailorProgram#source_location_name}

---

##### `vodSourceName`<sup>Optional</sup> <a name="vodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate.property.vodSourceName"></a>

```java
public java.lang.String getVodSourceName();
```

- *Type:* java.lang.String

The slate VOD source name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#vod_source_name MediatailorProgram#vod_source_name}

---

### MediatailorProgramAdBreaksSpliceInsertMessage <a name="MediatailorProgramAdBreaksSpliceInsertMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAdBreaksSpliceInsertMessage;

MediatailorProgramAdBreaksSpliceInsertMessage.builder()
//  .availNum(java.lang.Number)
//  .availsExpected(java.lang.Number)
//  .spliceEventId(java.lang.Number)
//  .uniqueProgramId(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.property.availNum">availNum</a></code> | <code>java.lang.Number</code> | This is written to splice_insert.avail_num. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.property.availsExpected">availsExpected</a></code> | <code>java.lang.Number</code> | This is written to splice_insert.avails_expected. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.property.spliceEventId">spliceEventId</a></code> | <code>java.lang.Number</code> | This is written to splice_insert.splice_event_id. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.property.uniqueProgramId">uniqueProgramId</a></code> | <code>java.lang.Number</code> | This is written to splice_insert.unique_program_id. |

---

##### `availNum`<sup>Optional</sup> <a name="availNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.property.availNum"></a>

```java
public java.lang.Number getAvailNum();
```

- *Type:* java.lang.Number

This is written to splice_insert.avail_num.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#avail_num MediatailorProgram#avail_num}

---

##### `availsExpected`<sup>Optional</sup> <a name="availsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.property.availsExpected"></a>

```java
public java.lang.Number getAvailsExpected();
```

- *Type:* java.lang.Number

This is written to splice_insert.avails_expected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#avails_expected MediatailorProgram#avails_expected}

---

##### `spliceEventId`<sup>Optional</sup> <a name="spliceEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.property.spliceEventId"></a>

```java
public java.lang.Number getSpliceEventId();
```

- *Type:* java.lang.Number

This is written to splice_insert.splice_event_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#splice_event_id MediatailorProgram#splice_event_id}

---

##### `uniqueProgramId`<sup>Optional</sup> <a name="uniqueProgramId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.property.uniqueProgramId"></a>

```java
public java.lang.Number getUniqueProgramId();
```

- *Type:* java.lang.Number

This is written to splice_insert.unique_program_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#unique_program_id MediatailorProgram#unique_program_id}

---

### MediatailorProgramAdBreaksTimeSignalMessage <a name="MediatailorProgramAdBreaksTimeSignalMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAdBreaksTimeSignalMessage;

MediatailorProgramAdBreaksTimeSignalMessage.builder()
//  .segmentationDescriptors(IResolvable|java.util.List<MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage.property.segmentationDescriptors">segmentationDescriptors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors</a>></code> | The configurations for the SCTE-35 segmentation_descriptor message(s). |

---

##### `segmentationDescriptors`<sup>Optional</sup> <a name="segmentationDescriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage.property.segmentationDescriptors"></a>

```java
public IResolvable|java.util.List<MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors> getSegmentationDescriptors();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors</a>>

The configurations for the SCTE-35 segmentation_descriptor message(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#segmentation_descriptors MediatailorProgram#segmentation_descriptors}

---

### MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors <a name="MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors;

MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.builder()
//  .segmentationEventId(java.lang.Number)
//  .segmentationTypeId(java.lang.Number)
//  .segmentationUpid(java.lang.String)
//  .segmentationUpidType(java.lang.Number)
//  .segmentNum(java.lang.Number)
//  .segmentsExpected(java.lang.Number)
//  .subSegmentNum(java.lang.Number)
//  .subSegmentsExpected(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationEventId">segmentationEventId</a></code> | <code>java.lang.Number</code> | The Event Identifier to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationTypeId">segmentationTypeId</a></code> | <code>java.lang.Number</code> | The Type Identifier to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationUpid">segmentationUpid</a></code> | <code>java.lang.String</code> | The Upid to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationUpidType">segmentationUpidType</a></code> | <code>java.lang.Number</code> | The Upid Type to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentNum">segmentNum</a></code> | <code>java.lang.Number</code> | The segment number to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentsExpected">segmentsExpected</a></code> | <code>java.lang.Number</code> | The number of segments expected. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.subSegmentNum">subSegmentNum</a></code> | <code>java.lang.Number</code> | The sub-segment number to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.subSegmentsExpected">subSegmentsExpected</a></code> | <code>java.lang.Number</code> | The number of sub-segments expected. |

---

##### `segmentationEventId`<sup>Optional</sup> <a name="segmentationEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationEventId"></a>

```java
public java.lang.Number getSegmentationEventId();
```

- *Type:* java.lang.Number

The Event Identifier to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#segmentation_event_id MediatailorProgram#segmentation_event_id}

---

##### `segmentationTypeId`<sup>Optional</sup> <a name="segmentationTypeId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationTypeId"></a>

```java
public java.lang.Number getSegmentationTypeId();
```

- *Type:* java.lang.Number

The Type Identifier to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#segmentation_type_id MediatailorProgram#segmentation_type_id}

---

##### `segmentationUpid`<sup>Optional</sup> <a name="segmentationUpid" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationUpid"></a>

```java
public java.lang.String getSegmentationUpid();
```

- *Type:* java.lang.String

The Upid to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#segmentation_upid MediatailorProgram#segmentation_upid}

---

##### `segmentationUpidType`<sup>Optional</sup> <a name="segmentationUpidType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationUpidType"></a>

```java
public java.lang.Number getSegmentationUpidType();
```

- *Type:* java.lang.Number

The Upid Type to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#segmentation_upid_type MediatailorProgram#segmentation_upid_type}

---

##### `segmentNum`<sup>Optional</sup> <a name="segmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentNum"></a>

```java
public java.lang.Number getSegmentNum();
```

- *Type:* java.lang.Number

The segment number to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#segment_num MediatailorProgram#segment_num}

---

##### `segmentsExpected`<sup>Optional</sup> <a name="segmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentsExpected"></a>

```java
public java.lang.Number getSegmentsExpected();
```

- *Type:* java.lang.Number

The number of segments expected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#segments_expected MediatailorProgram#segments_expected}

---

##### `subSegmentNum`<sup>Optional</sup> <a name="subSegmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.subSegmentNum"></a>

```java
public java.lang.Number getSubSegmentNum();
```

- *Type:* java.lang.Number

The sub-segment number to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#sub_segment_num MediatailorProgram#sub_segment_num}

---

##### `subSegmentsExpected`<sup>Optional</sup> <a name="subSegmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.subSegmentsExpected"></a>

```java
public java.lang.Number getSubSegmentsExpected();
```

- *Type:* java.lang.Number

The number of sub-segments expected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#sub_segments_expected MediatailorProgram#sub_segments_expected}

---

### MediatailorProgramAudienceMedia <a name="MediatailorProgramAudienceMedia" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAudienceMedia;

MediatailorProgramAudienceMedia.builder()
//  .alternateMedia(IResolvable|java.util.List<MediatailorProgramAudienceMediaAlternateMedia>)
//  .audience(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia.property.alternateMedia">alternateMedia</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia">MediatailorProgramAudienceMediaAlternateMedia</a>></code> | The list of AlternateMedia defined in AudienceMedia. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia.property.audience">audience</a></code> | <code>java.lang.String</code> | The Audience defined in AudienceMedia. |

---

##### `alternateMedia`<sup>Optional</sup> <a name="alternateMedia" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia.property.alternateMedia"></a>

```java
public IResolvable|java.util.List<MediatailorProgramAudienceMediaAlternateMedia> getAlternateMedia();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia">MediatailorProgramAudienceMediaAlternateMedia</a>>

The list of AlternateMedia defined in AudienceMedia.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#alternate_media MediatailorProgram#alternate_media}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

The Audience defined in AudienceMedia.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#audience MediatailorProgram#audience}

---

### MediatailorProgramAudienceMediaAlternateMedia <a name="MediatailorProgramAudienceMediaAlternateMedia" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAudienceMediaAlternateMedia;

MediatailorProgramAudienceMediaAlternateMedia.builder()
//  .adBreaks(IResolvable|java.util.List<MediatailorProgramAudienceMediaAlternateMediaAdBreaks>)
//  .clipRange(MediatailorProgramAudienceMediaAlternateMediaClipRange)
//  .durationMillis(java.lang.Number)
//  .liveSourceName(java.lang.String)
//  .scheduledStartTimeMillis(java.lang.Number)
//  .sourceLocationName(java.lang.String)
//  .vodSourceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.adBreaks">adBreaks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks">MediatailorProgramAudienceMediaAlternateMediaAdBreaks</a>></code> | Ad break configuration parameters defined in AlternateMedia. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.clipRange">clipRange</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange">MediatailorProgramAudienceMediaAlternateMediaClipRange</a></code> | Clip range configuration for the VOD source associated with the program. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.durationMillis">durationMillis</a></code> | <code>java.lang.Number</code> | The duration of the alternateMedia in milliseconds. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.liveSourceName">liveSourceName</a></code> | <code>java.lang.String</code> | The name of the live source for alternateMedia. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.scheduledStartTimeMillis">scheduledStartTimeMillis</a></code> | <code>java.lang.Number</code> | The date and time that the alternateMedia is scheduled to start, in epoch milliseconds. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.sourceLocationName">sourceLocationName</a></code> | <code>java.lang.String</code> | The name of the source location for alternateMedia. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.vodSourceName">vodSourceName</a></code> | <code>java.lang.String</code> | The name of the VOD source for alternateMedia. |

---

##### `adBreaks`<sup>Optional</sup> <a name="adBreaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.adBreaks"></a>

```java
public IResolvable|java.util.List<MediatailorProgramAudienceMediaAlternateMediaAdBreaks> getAdBreaks();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks">MediatailorProgramAudienceMediaAlternateMediaAdBreaks</a>>

Ad break configuration parameters defined in AlternateMedia.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#ad_breaks MediatailorProgram#ad_breaks}

---

##### `clipRange`<sup>Optional</sup> <a name="clipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.clipRange"></a>

```java
public MediatailorProgramAudienceMediaAlternateMediaClipRange getClipRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange">MediatailorProgramAudienceMediaAlternateMediaClipRange</a>

Clip range configuration for the VOD source associated with the program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#clip_range MediatailorProgram#clip_range}

---

##### `durationMillis`<sup>Optional</sup> <a name="durationMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.durationMillis"></a>

```java
public java.lang.Number getDurationMillis();
```

- *Type:* java.lang.Number

The duration of the alternateMedia in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#duration_millis MediatailorProgram#duration_millis}

---

##### `liveSourceName`<sup>Optional</sup> <a name="liveSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.liveSourceName"></a>

```java
public java.lang.String getLiveSourceName();
```

- *Type:* java.lang.String

The name of the live source for alternateMedia.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#live_source_name MediatailorProgram#live_source_name}

---

##### `scheduledStartTimeMillis`<sup>Optional</sup> <a name="scheduledStartTimeMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.scheduledStartTimeMillis"></a>

```java
public java.lang.Number getScheduledStartTimeMillis();
```

- *Type:* java.lang.Number

The date and time that the alternateMedia is scheduled to start, in epoch milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#scheduled_start_time_millis MediatailorProgram#scheduled_start_time_millis}

---

##### `sourceLocationName`<sup>Optional</sup> <a name="sourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.sourceLocationName"></a>

```java
public java.lang.String getSourceLocationName();
```

- *Type:* java.lang.String

The name of the source location for alternateMedia.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#source_location_name MediatailorProgram#source_location_name}

---

##### `vodSourceName`<sup>Optional</sup> <a name="vodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.vodSourceName"></a>

```java
public java.lang.String getVodSourceName();
```

- *Type:* java.lang.String

The name of the VOD source for alternateMedia.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#vod_source_name MediatailorProgram#vod_source_name}

---

### MediatailorProgramAudienceMediaAlternateMediaAdBreaks <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAudienceMediaAlternateMediaAdBreaks;

MediatailorProgramAudienceMediaAlternateMediaAdBreaks.builder()
//  .adBreakMetadata(IResolvable|java.util.List<MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata>)
//  .messageType(java.lang.String)
//  .offsetMillis(java.lang.Number)
//  .slate(MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate)
//  .spliceInsertMessage(MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage)
//  .timeSignalMessage(MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.adBreakMetadata">adBreakMetadata</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata</a>></code> | Defines a list of key/value pairs that MediaTailor generates within the EXT-X-ASSET tag for SCTE35_ENHANCED output. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.messageType">messageType</a></code> | <code>java.lang.String</code> | The SCTE-35 ad insertion type. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.offsetMillis">offsetMillis</a></code> | <code>java.lang.Number</code> | How long (in milliseconds) after the beginning of the program that an ad starts. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.slate">slate</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate</a></code> | Slate VOD source configuration. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.spliceInsertMessage">spliceInsertMessage</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage</a></code> | Splice insert message configuration. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.timeSignalMessage">timeSignalMessage</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage</a></code> | The SCTE-35 time_signal message configuration. |

---

##### `adBreakMetadata`<sup>Optional</sup> <a name="adBreakMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.adBreakMetadata"></a>

```java
public IResolvable|java.util.List<MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata> getAdBreakMetadata();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata</a>>

Defines a list of key/value pairs that MediaTailor generates within the EXT-X-ASSET tag for SCTE35_ENHANCED output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#ad_break_metadata MediatailorProgram#ad_break_metadata}

---

##### `messageType`<sup>Optional</sup> <a name="messageType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.messageType"></a>

```java
public java.lang.String getMessageType();
```

- *Type:* java.lang.String

The SCTE-35 ad insertion type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#message_type MediatailorProgram#message_type}

---

##### `offsetMillis`<sup>Optional</sup> <a name="offsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.offsetMillis"></a>

```java
public java.lang.Number getOffsetMillis();
```

- *Type:* java.lang.Number

How long (in milliseconds) after the beginning of the program that an ad starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#offset_millis MediatailorProgram#offset_millis}

---

##### `slate`<sup>Optional</sup> <a name="slate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.slate"></a>

```java
public MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate getSlate();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate</a>

Slate VOD source configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#slate MediatailorProgram#slate}

---

##### `spliceInsertMessage`<sup>Optional</sup> <a name="spliceInsertMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.spliceInsertMessage"></a>

```java
public MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage getSpliceInsertMessage();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage</a>

Splice insert message configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#splice_insert_message MediatailorProgram#splice_insert_message}

---

##### `timeSignalMessage`<sup>Optional</sup> <a name="timeSignalMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.timeSignalMessage"></a>

```java
public MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage getTimeSignalMessage();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage</a>

The SCTE-35 time_signal message configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#time_signal_message MediatailorProgram#time_signal_message}

---

### MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata;

MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata.property.key">key</a></code> | <code>java.lang.String</code> | The key. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata.property.value">value</a></code> | <code>java.lang.String</code> | The value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#key MediatailorProgram#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#value MediatailorProgram#value}

---

### MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate;

MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate.builder()
//  .sourceLocationName(java.lang.String)
//  .vodSourceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate.property.sourceLocationName">sourceLocationName</a></code> | <code>java.lang.String</code> | The name of the source location where the slate VOD source is stored. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate.property.vodSourceName">vodSourceName</a></code> | <code>java.lang.String</code> | The slate VOD source name. |

---

##### `sourceLocationName`<sup>Optional</sup> <a name="sourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate.property.sourceLocationName"></a>

```java
public java.lang.String getSourceLocationName();
```

- *Type:* java.lang.String

The name of the source location where the slate VOD source is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#source_location_name MediatailorProgram#source_location_name}

---

##### `vodSourceName`<sup>Optional</sup> <a name="vodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate.property.vodSourceName"></a>

```java
public java.lang.String getVodSourceName();
```

- *Type:* java.lang.String

The slate VOD source name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#vod_source_name MediatailorProgram#vod_source_name}

---

### MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage;

MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.builder()
//  .availNum(java.lang.Number)
//  .availsExpected(java.lang.Number)
//  .spliceEventId(java.lang.Number)
//  .uniqueProgramId(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.property.availNum">availNum</a></code> | <code>java.lang.Number</code> | This is written to splice_insert.avail_num. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.property.availsExpected">availsExpected</a></code> | <code>java.lang.Number</code> | This is written to splice_insert.avails_expected. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.property.spliceEventId">spliceEventId</a></code> | <code>java.lang.Number</code> | This is written to splice_insert.splice_event_id. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.property.uniqueProgramId">uniqueProgramId</a></code> | <code>java.lang.Number</code> | This is written to splice_insert.unique_program_id. |

---

##### `availNum`<sup>Optional</sup> <a name="availNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.property.availNum"></a>

```java
public java.lang.Number getAvailNum();
```

- *Type:* java.lang.Number

This is written to splice_insert.avail_num.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#avail_num MediatailorProgram#avail_num}

---

##### `availsExpected`<sup>Optional</sup> <a name="availsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.property.availsExpected"></a>

```java
public java.lang.Number getAvailsExpected();
```

- *Type:* java.lang.Number

This is written to splice_insert.avails_expected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#avails_expected MediatailorProgram#avails_expected}

---

##### `spliceEventId`<sup>Optional</sup> <a name="spliceEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.property.spliceEventId"></a>

```java
public java.lang.Number getSpliceEventId();
```

- *Type:* java.lang.Number

This is written to splice_insert.splice_event_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#splice_event_id MediatailorProgram#splice_event_id}

---

##### `uniqueProgramId`<sup>Optional</sup> <a name="uniqueProgramId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.property.uniqueProgramId"></a>

```java
public java.lang.Number getUniqueProgramId();
```

- *Type:* java.lang.Number

This is written to splice_insert.unique_program_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#unique_program_id MediatailorProgram#unique_program_id}

---

### MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage;

MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage.builder()
//  .segmentationDescriptors(IResolvable|java.util.List<MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage.property.segmentationDescriptors">segmentationDescriptors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors</a>></code> | The configurations for the SCTE-35 segmentation_descriptor message(s). |

---

##### `segmentationDescriptors`<sup>Optional</sup> <a name="segmentationDescriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage.property.segmentationDescriptors"></a>

```java
public IResolvable|java.util.List<MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors> getSegmentationDescriptors();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors</a>>

The configurations for the SCTE-35 segmentation_descriptor message(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#segmentation_descriptors MediatailorProgram#segmentation_descriptors}

---

### MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors;

MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.builder()
//  .segmentationEventId(java.lang.Number)
//  .segmentationTypeId(java.lang.Number)
//  .segmentationUpid(java.lang.String)
//  .segmentationUpidType(java.lang.Number)
//  .segmentNum(java.lang.Number)
//  .segmentsExpected(java.lang.Number)
//  .subSegmentNum(java.lang.Number)
//  .subSegmentsExpected(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationEventId">segmentationEventId</a></code> | <code>java.lang.Number</code> | The Event Identifier to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationTypeId">segmentationTypeId</a></code> | <code>java.lang.Number</code> | The Type Identifier to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationUpid">segmentationUpid</a></code> | <code>java.lang.String</code> | The Upid to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationUpidType">segmentationUpidType</a></code> | <code>java.lang.Number</code> | The Upid Type to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentNum">segmentNum</a></code> | <code>java.lang.Number</code> | The segment number to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentsExpected">segmentsExpected</a></code> | <code>java.lang.Number</code> | The number of segments expected. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.subSegmentNum">subSegmentNum</a></code> | <code>java.lang.Number</code> | The sub-segment number to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.subSegmentsExpected">subSegmentsExpected</a></code> | <code>java.lang.Number</code> | The number of sub-segments expected. |

---

##### `segmentationEventId`<sup>Optional</sup> <a name="segmentationEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationEventId"></a>

```java
public java.lang.Number getSegmentationEventId();
```

- *Type:* java.lang.Number

The Event Identifier to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#segmentation_event_id MediatailorProgram#segmentation_event_id}

---

##### `segmentationTypeId`<sup>Optional</sup> <a name="segmentationTypeId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationTypeId"></a>

```java
public java.lang.Number getSegmentationTypeId();
```

- *Type:* java.lang.Number

The Type Identifier to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#segmentation_type_id MediatailorProgram#segmentation_type_id}

---

##### `segmentationUpid`<sup>Optional</sup> <a name="segmentationUpid" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationUpid"></a>

```java
public java.lang.String getSegmentationUpid();
```

- *Type:* java.lang.String

The Upid to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#segmentation_upid MediatailorProgram#segmentation_upid}

---

##### `segmentationUpidType`<sup>Optional</sup> <a name="segmentationUpidType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationUpidType"></a>

```java
public java.lang.Number getSegmentationUpidType();
```

- *Type:* java.lang.Number

The Upid Type to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#segmentation_upid_type MediatailorProgram#segmentation_upid_type}

---

##### `segmentNum`<sup>Optional</sup> <a name="segmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentNum"></a>

```java
public java.lang.Number getSegmentNum();
```

- *Type:* java.lang.Number

The segment number to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#segment_num MediatailorProgram#segment_num}

---

##### `segmentsExpected`<sup>Optional</sup> <a name="segmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentsExpected"></a>

```java
public java.lang.Number getSegmentsExpected();
```

- *Type:* java.lang.Number

The number of segments expected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#segments_expected MediatailorProgram#segments_expected}

---

##### `subSegmentNum`<sup>Optional</sup> <a name="subSegmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.subSegmentNum"></a>

```java
public java.lang.Number getSubSegmentNum();
```

- *Type:* java.lang.Number

The sub-segment number to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#sub_segment_num MediatailorProgram#sub_segment_num}

---

##### `subSegmentsExpected`<sup>Optional</sup> <a name="subSegmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.subSegmentsExpected"></a>

```java
public java.lang.Number getSubSegmentsExpected();
```

- *Type:* java.lang.Number

The number of sub-segments expected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#sub_segments_expected MediatailorProgram#sub_segments_expected}

---

### MediatailorProgramAudienceMediaAlternateMediaClipRange <a name="MediatailorProgramAudienceMediaAlternateMediaClipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAudienceMediaAlternateMediaClipRange;

MediatailorProgramAudienceMediaAlternateMediaClipRange.builder()
//  .endOffsetMillis(java.lang.Number)
//  .startOffsetMillis(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange.property.endOffsetMillis">endOffsetMillis</a></code> | <code>java.lang.Number</code> | The end offset of the clip range, in milliseconds. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange.property.startOffsetMillis">startOffsetMillis</a></code> | <code>java.lang.Number</code> | The start offset of the clip range, in milliseconds. |

---

##### `endOffsetMillis`<sup>Optional</sup> <a name="endOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange.property.endOffsetMillis"></a>

```java
public java.lang.Number getEndOffsetMillis();
```

- *Type:* java.lang.Number

The end offset of the clip range, in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#end_offset_millis MediatailorProgram#end_offset_millis}

---

##### `startOffsetMillis`<sup>Optional</sup> <a name="startOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange.property.startOffsetMillis"></a>

```java
public java.lang.Number getStartOffsetMillis();
```

- *Type:* java.lang.Number

The start offset of the clip range, in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#start_offset_millis MediatailorProgram#start_offset_millis}

---

### MediatailorProgramClipRange <a name="MediatailorProgramClipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRange.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramClipRange;

MediatailorProgramClipRange.builder()
    .build();
```


### MediatailorProgramConfig <a name="MediatailorProgramConfig" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramConfig;

MediatailorProgramConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .channelName(java.lang.String)
    .programName(java.lang.String)
    .sourceLocationName(java.lang.String)
//  .adBreaks(IResolvable|java.util.List<MediatailorProgramAdBreaks>)
//  .audienceMedia(IResolvable|java.util.List<MediatailorProgramAudienceMedia>)
//  .liveSourceName(java.lang.String)
//  .scheduleConfiguration(MediatailorProgramScheduleConfiguration)
//  .vodSourceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.channelName">channelName</a></code> | <code>java.lang.String</code> | The name of the channel for this Program. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.programName">programName</a></code> | <code>java.lang.String</code> | The name of the Program. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.sourceLocationName">sourceLocationName</a></code> | <code>java.lang.String</code> | The name of the source location. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.adBreaks">adBreaks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks">MediatailorProgramAdBreaks</a>></code> | The ad break configuration settings. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.audienceMedia">audienceMedia</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia">MediatailorProgramAudienceMedia</a>></code> | The list of AudienceMedia defined in program. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.liveSourceName">liveSourceName</a></code> | <code>java.lang.String</code> | The name of the LiveSource for this Program. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.scheduleConfiguration">scheduleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration">MediatailorProgramScheduleConfiguration</a></code> | The schedule configuration settings. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.vodSourceName">vodSourceName</a></code> | <code>java.lang.String</code> | The name that's used to refer to a VOD source. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

The name of the channel for this Program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#channel_name MediatailorProgram#channel_name}

---

##### `programName`<sup>Required</sup> <a name="programName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.programName"></a>

```java
public java.lang.String getProgramName();
```

- *Type:* java.lang.String

The name of the Program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#program_name MediatailorProgram#program_name}

---

##### `sourceLocationName`<sup>Required</sup> <a name="sourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.sourceLocationName"></a>

```java
public java.lang.String getSourceLocationName();
```

- *Type:* java.lang.String

The name of the source location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#source_location_name MediatailorProgram#source_location_name}

---

##### `adBreaks`<sup>Optional</sup> <a name="adBreaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.adBreaks"></a>

```java
public IResolvable|java.util.List<MediatailorProgramAdBreaks> getAdBreaks();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks">MediatailorProgramAdBreaks</a>>

The ad break configuration settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#ad_breaks MediatailorProgram#ad_breaks}

---

##### `audienceMedia`<sup>Optional</sup> <a name="audienceMedia" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.audienceMedia"></a>

```java
public IResolvable|java.util.List<MediatailorProgramAudienceMedia> getAudienceMedia();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia">MediatailorProgramAudienceMedia</a>>

The list of AudienceMedia defined in program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#audience_media MediatailorProgram#audience_media}

---

##### `liveSourceName`<sup>Optional</sup> <a name="liveSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.liveSourceName"></a>

```java
public java.lang.String getLiveSourceName();
```

- *Type:* java.lang.String

The name of the LiveSource for this Program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#live_source_name MediatailorProgram#live_source_name}

---

##### `scheduleConfiguration`<sup>Optional</sup> <a name="scheduleConfiguration" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.scheduleConfiguration"></a>

```java
public MediatailorProgramScheduleConfiguration getScheduleConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration">MediatailorProgramScheduleConfiguration</a>

The schedule configuration settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#schedule_configuration MediatailorProgram#schedule_configuration}

---

##### `vodSourceName`<sup>Optional</sup> <a name="vodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.vodSourceName"></a>

```java
public java.lang.String getVodSourceName();
```

- *Type:* java.lang.String

The name that's used to refer to a VOD source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#vod_source_name MediatailorProgram#vod_source_name}

---

### MediatailorProgramScheduleConfiguration <a name="MediatailorProgramScheduleConfiguration" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramScheduleConfiguration;

MediatailorProgramScheduleConfiguration.builder()
//  .clipRange(MediatailorProgramScheduleConfigurationClipRange)
//  .transition(MediatailorProgramScheduleConfigurationTransition)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration.property.clipRange">clipRange</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange">MediatailorProgramScheduleConfigurationClipRange</a></code> | Clip range configuration for the VOD source associated with the program. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration.property.transition">transition</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition">MediatailorProgramScheduleConfigurationTransition</a></code> | Program transition configuration. |

---

##### `clipRange`<sup>Optional</sup> <a name="clipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration.property.clipRange"></a>

```java
public MediatailorProgramScheduleConfigurationClipRange getClipRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange">MediatailorProgramScheduleConfigurationClipRange</a>

Clip range configuration for the VOD source associated with the program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#clip_range MediatailorProgram#clip_range}

---

##### `transition`<sup>Optional</sup> <a name="transition" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration.property.transition"></a>

```java
public MediatailorProgramScheduleConfigurationTransition getTransition();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition">MediatailorProgramScheduleConfigurationTransition</a>

Program transition configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#transition MediatailorProgram#transition}

---

### MediatailorProgramScheduleConfigurationClipRange <a name="MediatailorProgramScheduleConfigurationClipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramScheduleConfigurationClipRange;

MediatailorProgramScheduleConfigurationClipRange.builder()
//  .endOffsetMillis(java.lang.Number)
//  .startOffsetMillis(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange.property.endOffsetMillis">endOffsetMillis</a></code> | <code>java.lang.Number</code> | The end offset of the clip range, in milliseconds. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange.property.startOffsetMillis">startOffsetMillis</a></code> | <code>java.lang.Number</code> | The start offset of the clip range, in milliseconds. |

---

##### `endOffsetMillis`<sup>Optional</sup> <a name="endOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange.property.endOffsetMillis"></a>

```java
public java.lang.Number getEndOffsetMillis();
```

- *Type:* java.lang.Number

The end offset of the clip range, in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#end_offset_millis MediatailorProgram#end_offset_millis}

---

##### `startOffsetMillis`<sup>Optional</sup> <a name="startOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange.property.startOffsetMillis"></a>

```java
public java.lang.Number getStartOffsetMillis();
```

- *Type:* java.lang.Number

The start offset of the clip range, in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#start_offset_millis MediatailorProgram#start_offset_millis}

---

### MediatailorProgramScheduleConfigurationTransition <a name="MediatailorProgramScheduleConfigurationTransition" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramScheduleConfigurationTransition;

MediatailorProgramScheduleConfigurationTransition.builder()
//  .durationMillis(java.lang.Number)
//  .relativePosition(java.lang.String)
//  .relativeProgram(java.lang.String)
//  .scheduledStartTimeMillis(java.lang.Number)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.durationMillis">durationMillis</a></code> | <code>java.lang.Number</code> | The duration of the live program in seconds. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.relativePosition">relativePosition</a></code> | <code>java.lang.String</code> | The position where this program will be inserted relative to the RelativePosition. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.relativeProgram">relativeProgram</a></code> | <code>java.lang.String</code> | The name of the program that this program will be inserted next to. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.scheduledStartTimeMillis">scheduledStartTimeMillis</a></code> | <code>java.lang.Number</code> | The date and time that the program is scheduled to start, in epoch milliseconds. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.type">type</a></code> | <code>java.lang.String</code> | Defines when the program plays in the schedule. You can set the value to ABSOLUTE or RELATIVE. |

---

##### `durationMillis`<sup>Optional</sup> <a name="durationMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.durationMillis"></a>

```java
public java.lang.Number getDurationMillis();
```

- *Type:* java.lang.Number

The duration of the live program in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#duration_millis MediatailorProgram#duration_millis}

---

##### `relativePosition`<sup>Optional</sup> <a name="relativePosition" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.relativePosition"></a>

```java
public java.lang.String getRelativePosition();
```

- *Type:* java.lang.String

The position where this program will be inserted relative to the RelativePosition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#relative_position MediatailorProgram#relative_position}

---

##### `relativeProgram`<sup>Optional</sup> <a name="relativeProgram" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.relativeProgram"></a>

```java
public java.lang.String getRelativeProgram();
```

- *Type:* java.lang.String

The name of the program that this program will be inserted next to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#relative_program MediatailorProgram#relative_program}

---

##### `scheduledStartTimeMillis`<sup>Optional</sup> <a name="scheduledStartTimeMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.scheduledStartTimeMillis"></a>

```java
public java.lang.Number getScheduledStartTimeMillis();
```

- *Type:* java.lang.Number

The date and time that the program is scheduled to start, in epoch milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#scheduled_start_time_millis MediatailorProgram#scheduled_start_time_millis}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Defines when the program plays in the schedule. You can set the value to ABSOLUTE or RELATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#type MediatailorProgram#type}

---

## Classes <a name="Classes" id="Classes"></a>

### MediatailorProgramAdBreaksAdBreakMetadataList <a name="MediatailorProgramAdBreaksAdBreakMetadataList" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAdBreaksAdBreakMetadataList;

new MediatailorProgramAdBreaksAdBreakMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.get"></a>

```java
public MediatailorProgramAdBreaksAdBreakMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata">MediatailorProgramAdBreaksAdBreakMetadata</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MediatailorProgramAdBreaksAdBreakMetadata> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata">MediatailorProgramAdBreaksAdBreakMetadata</a>>

---


### MediatailorProgramAdBreaksAdBreakMetadataOutputReference <a name="MediatailorProgramAdBreaksAdBreakMetadataOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAdBreaksAdBreakMetadataOutputReference;

new MediatailorProgramAdBreaksAdBreakMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata">MediatailorProgramAdBreaksAdBreakMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorProgramAdBreaksAdBreakMetadata getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata">MediatailorProgramAdBreaksAdBreakMetadata</a>

---


### MediatailorProgramAdBreaksList <a name="MediatailorProgramAdBreaksList" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAdBreaksList;

new MediatailorProgramAdBreaksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.get"></a>

```java
public MediatailorProgramAdBreaksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks">MediatailorProgramAdBreaks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MediatailorProgramAdBreaks> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks">MediatailorProgramAdBreaks</a>>

---


### MediatailorProgramAdBreaksOutputReference <a name="MediatailorProgramAdBreaksOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAdBreaksOutputReference;

new MediatailorProgramAdBreaksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putAdBreakMetadata">putAdBreakMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putSlate">putSlate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putSpliceInsertMessage">putSpliceInsertMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putTimeSignalMessage">putTimeSignalMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetAdBreakMetadata">resetAdBreakMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetMessageType">resetMessageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetOffsetMillis">resetOffsetMillis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetSlate">resetSlate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetSpliceInsertMessage">resetSpliceInsertMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetTimeSignalMessage">resetTimeSignalMessage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdBreakMetadata` <a name="putAdBreakMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putAdBreakMetadata"></a>

```java
public void putAdBreakMetadata(IResolvable|java.util.List<MediatailorProgramAdBreaksAdBreakMetadata> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putAdBreakMetadata.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata">MediatailorProgramAdBreaksAdBreakMetadata</a>>

---

##### `putSlate` <a name="putSlate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putSlate"></a>

```java
public void putSlate(MediatailorProgramAdBreaksSlate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putSlate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate">MediatailorProgramAdBreaksSlate</a>

---

##### `putSpliceInsertMessage` <a name="putSpliceInsertMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putSpliceInsertMessage"></a>

```java
public void putSpliceInsertMessage(MediatailorProgramAdBreaksSpliceInsertMessage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putSpliceInsertMessage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage">MediatailorProgramAdBreaksSpliceInsertMessage</a>

---

##### `putTimeSignalMessage` <a name="putTimeSignalMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putTimeSignalMessage"></a>

```java
public void putTimeSignalMessage(MediatailorProgramAdBreaksTimeSignalMessage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putTimeSignalMessage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage">MediatailorProgramAdBreaksTimeSignalMessage</a>

---

##### `resetAdBreakMetadata` <a name="resetAdBreakMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetAdBreakMetadata"></a>

```java
public void resetAdBreakMetadata()
```

##### `resetMessageType` <a name="resetMessageType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetMessageType"></a>

```java
public void resetMessageType()
```

##### `resetOffsetMillis` <a name="resetOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetOffsetMillis"></a>

```java
public void resetOffsetMillis()
```

##### `resetSlate` <a name="resetSlate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetSlate"></a>

```java
public void resetSlate()
```

##### `resetSpliceInsertMessage` <a name="resetSpliceInsertMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetSpliceInsertMessage"></a>

```java
public void resetSpliceInsertMessage()
```

##### `resetTimeSignalMessage` <a name="resetTimeSignalMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetTimeSignalMessage"></a>

```java
public void resetTimeSignalMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.adBreakMetadata">adBreakMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList">MediatailorProgramAdBreaksAdBreakMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.slate">slate</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference">MediatailorProgramAdBreaksSlateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.spliceInsertMessage">spliceInsertMessage</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference">MediatailorProgramAdBreaksSpliceInsertMessageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.timeSignalMessage">timeSignalMessage</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference">MediatailorProgramAdBreaksTimeSignalMessageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.adBreakMetadataInput">adBreakMetadataInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata">MediatailorProgramAdBreaksAdBreakMetadata</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.messageTypeInput">messageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.offsetMillisInput">offsetMillisInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.slateInput">slateInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate">MediatailorProgramAdBreaksSlate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.spliceInsertMessageInput">spliceInsertMessageInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage">MediatailorProgramAdBreaksSpliceInsertMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.timeSignalMessageInput">timeSignalMessageInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage">MediatailorProgramAdBreaksTimeSignalMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.messageType">messageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.offsetMillis">offsetMillis</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks">MediatailorProgramAdBreaks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adBreakMetadata`<sup>Required</sup> <a name="adBreakMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.adBreakMetadata"></a>

```java
public MediatailorProgramAdBreaksAdBreakMetadataList getAdBreakMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList">MediatailorProgramAdBreaksAdBreakMetadataList</a>

---

##### `slate`<sup>Required</sup> <a name="slate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.slate"></a>

```java
public MediatailorProgramAdBreaksSlateOutputReference getSlate();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference">MediatailorProgramAdBreaksSlateOutputReference</a>

---

##### `spliceInsertMessage`<sup>Required</sup> <a name="spliceInsertMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.spliceInsertMessage"></a>

```java
public MediatailorProgramAdBreaksSpliceInsertMessageOutputReference getSpliceInsertMessage();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference">MediatailorProgramAdBreaksSpliceInsertMessageOutputReference</a>

---

##### `timeSignalMessage`<sup>Required</sup> <a name="timeSignalMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.timeSignalMessage"></a>

```java
public MediatailorProgramAdBreaksTimeSignalMessageOutputReference getTimeSignalMessage();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference">MediatailorProgramAdBreaksTimeSignalMessageOutputReference</a>

---

##### `adBreakMetadataInput`<sup>Optional</sup> <a name="adBreakMetadataInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.adBreakMetadataInput"></a>

```java
public IResolvable|java.util.List<MediatailorProgramAdBreaksAdBreakMetadata> getAdBreakMetadataInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata">MediatailorProgramAdBreaksAdBreakMetadata</a>>

---

##### `messageTypeInput`<sup>Optional</sup> <a name="messageTypeInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.messageTypeInput"></a>

```java
public java.lang.String getMessageTypeInput();
```

- *Type:* java.lang.String

---

##### `offsetMillisInput`<sup>Optional</sup> <a name="offsetMillisInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.offsetMillisInput"></a>

```java
public java.lang.Number getOffsetMillisInput();
```

- *Type:* java.lang.Number

---

##### `slateInput`<sup>Optional</sup> <a name="slateInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.slateInput"></a>

```java
public IResolvable|MediatailorProgramAdBreaksSlate getSlateInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate">MediatailorProgramAdBreaksSlate</a>

---

##### `spliceInsertMessageInput`<sup>Optional</sup> <a name="spliceInsertMessageInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.spliceInsertMessageInput"></a>

```java
public IResolvable|MediatailorProgramAdBreaksSpliceInsertMessage getSpliceInsertMessageInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage">MediatailorProgramAdBreaksSpliceInsertMessage</a>

---

##### `timeSignalMessageInput`<sup>Optional</sup> <a name="timeSignalMessageInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.timeSignalMessageInput"></a>

```java
public IResolvable|MediatailorProgramAdBreaksTimeSignalMessage getTimeSignalMessageInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage">MediatailorProgramAdBreaksTimeSignalMessage</a>

---

##### `messageType`<sup>Required</sup> <a name="messageType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.messageType"></a>

```java
public java.lang.String getMessageType();
```

- *Type:* java.lang.String

---

##### `offsetMillis`<sup>Required</sup> <a name="offsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.offsetMillis"></a>

```java
public java.lang.Number getOffsetMillis();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorProgramAdBreaks getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks">MediatailorProgramAdBreaks</a>

---


### MediatailorProgramAdBreaksSlateOutputReference <a name="MediatailorProgramAdBreaksSlateOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAdBreaksSlateOutputReference;

new MediatailorProgramAdBreaksSlateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.resetSourceLocationName">resetSourceLocationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.resetVodSourceName">resetVodSourceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceLocationName` <a name="resetSourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.resetSourceLocationName"></a>

```java
public void resetSourceLocationName()
```

##### `resetVodSourceName` <a name="resetVodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.resetVodSourceName"></a>

```java
public void resetVodSourceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.sourceLocationNameInput">sourceLocationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.vodSourceNameInput">vodSourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.sourceLocationName">sourceLocationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.vodSourceName">vodSourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate">MediatailorProgramAdBreaksSlate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceLocationNameInput`<sup>Optional</sup> <a name="sourceLocationNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.sourceLocationNameInput"></a>

```java
public java.lang.String getSourceLocationNameInput();
```

- *Type:* java.lang.String

---

##### `vodSourceNameInput`<sup>Optional</sup> <a name="vodSourceNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.vodSourceNameInput"></a>

```java
public java.lang.String getVodSourceNameInput();
```

- *Type:* java.lang.String

---

##### `sourceLocationName`<sup>Required</sup> <a name="sourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.sourceLocationName"></a>

```java
public java.lang.String getSourceLocationName();
```

- *Type:* java.lang.String

---

##### `vodSourceName`<sup>Required</sup> <a name="vodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.vodSourceName"></a>

```java
public java.lang.String getVodSourceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorProgramAdBreaksSlate getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate">MediatailorProgramAdBreaksSlate</a>

---


### MediatailorProgramAdBreaksSpliceInsertMessageOutputReference <a name="MediatailorProgramAdBreaksSpliceInsertMessageOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference;

new MediatailorProgramAdBreaksSpliceInsertMessageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resetAvailNum">resetAvailNum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resetAvailsExpected">resetAvailsExpected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resetSpliceEventId">resetSpliceEventId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resetUniqueProgramId">resetUniqueProgramId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailNum` <a name="resetAvailNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resetAvailNum"></a>

```java
public void resetAvailNum()
```

##### `resetAvailsExpected` <a name="resetAvailsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resetAvailsExpected"></a>

```java
public void resetAvailsExpected()
```

##### `resetSpliceEventId` <a name="resetSpliceEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resetSpliceEventId"></a>

```java
public void resetSpliceEventId()
```

##### `resetUniqueProgramId` <a name="resetUniqueProgramId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resetUniqueProgramId"></a>

```java
public void resetUniqueProgramId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availNumInput">availNumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availsExpectedInput">availsExpectedInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.spliceEventIdInput">spliceEventIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramIdInput">uniqueProgramIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availNum">availNum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availsExpected">availsExpected</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.spliceEventId">spliceEventId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramId">uniqueProgramId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage">MediatailorProgramAdBreaksSpliceInsertMessage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availNumInput`<sup>Optional</sup> <a name="availNumInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availNumInput"></a>

```java
public java.lang.Number getAvailNumInput();
```

- *Type:* java.lang.Number

---

##### `availsExpectedInput`<sup>Optional</sup> <a name="availsExpectedInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availsExpectedInput"></a>

```java
public java.lang.Number getAvailsExpectedInput();
```

- *Type:* java.lang.Number

---

##### `spliceEventIdInput`<sup>Optional</sup> <a name="spliceEventIdInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.spliceEventIdInput"></a>

```java
public java.lang.Number getSpliceEventIdInput();
```

- *Type:* java.lang.Number

---

##### `uniqueProgramIdInput`<sup>Optional</sup> <a name="uniqueProgramIdInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramIdInput"></a>

```java
public java.lang.Number getUniqueProgramIdInput();
```

- *Type:* java.lang.Number

---

##### `availNum`<sup>Required</sup> <a name="availNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availNum"></a>

```java
public java.lang.Number getAvailNum();
```

- *Type:* java.lang.Number

---

##### `availsExpected`<sup>Required</sup> <a name="availsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availsExpected"></a>

```java
public java.lang.Number getAvailsExpected();
```

- *Type:* java.lang.Number

---

##### `spliceEventId`<sup>Required</sup> <a name="spliceEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.spliceEventId"></a>

```java
public java.lang.Number getSpliceEventId();
```

- *Type:* java.lang.Number

---

##### `uniqueProgramId`<sup>Required</sup> <a name="uniqueProgramId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramId"></a>

```java
public java.lang.Number getUniqueProgramId();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorProgramAdBreaksSpliceInsertMessage getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage">MediatailorProgramAdBreaksSpliceInsertMessage</a>

---


### MediatailorProgramAdBreaksTimeSignalMessageOutputReference <a name="MediatailorProgramAdBreaksTimeSignalMessageOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAdBreaksTimeSignalMessageOutputReference;

new MediatailorProgramAdBreaksTimeSignalMessageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.putSegmentationDescriptors">putSegmentationDescriptors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.resetSegmentationDescriptors">resetSegmentationDescriptors</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSegmentationDescriptors` <a name="putSegmentationDescriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.putSegmentationDescriptors"></a>

```java
public void putSegmentationDescriptors(IResolvable|java.util.List<MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.putSegmentationDescriptors.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors</a>>

---

##### `resetSegmentationDescriptors` <a name="resetSegmentationDescriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.resetSegmentationDescriptors"></a>

```java
public void resetSegmentationDescriptors()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptors">segmentationDescriptors</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptorsInput">segmentationDescriptorsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage">MediatailorProgramAdBreaksTimeSignalMessage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `segmentationDescriptors`<sup>Required</sup> <a name="segmentationDescriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptors"></a>

```java
public MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList getSegmentationDescriptors();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList</a>

---

##### `segmentationDescriptorsInput`<sup>Optional</sup> <a name="segmentationDescriptorsInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptorsInput"></a>

```java
public IResolvable|java.util.List<MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors> getSegmentationDescriptorsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorProgramAdBreaksTimeSignalMessage getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage">MediatailorProgramAdBreaksTimeSignalMessage</a>

---


### MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList <a name="MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList;

new MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.get"></a>

```java
public MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors</a>>

---


### MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference <a name="MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference;

new MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationEventId">resetSegmentationEventId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationTypeId">resetSegmentationTypeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationUpid">resetSegmentationUpid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationUpidType">resetSegmentationUpidType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentNum">resetSegmentNum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentsExpected">resetSegmentsExpected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSubSegmentNum">resetSubSegmentNum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSubSegmentsExpected">resetSubSegmentsExpected</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSegmentationEventId` <a name="resetSegmentationEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationEventId"></a>

```java
public void resetSegmentationEventId()
```

##### `resetSegmentationTypeId` <a name="resetSegmentationTypeId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationTypeId"></a>

```java
public void resetSegmentationTypeId()
```

##### `resetSegmentationUpid` <a name="resetSegmentationUpid" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationUpid"></a>

```java
public void resetSegmentationUpid()
```

##### `resetSegmentationUpidType` <a name="resetSegmentationUpidType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationUpidType"></a>

```java
public void resetSegmentationUpidType()
```

##### `resetSegmentNum` <a name="resetSegmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentNum"></a>

```java
public void resetSegmentNum()
```

##### `resetSegmentsExpected` <a name="resetSegmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentsExpected"></a>

```java
public void resetSegmentsExpected()
```

##### `resetSubSegmentNum` <a name="resetSubSegmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSubSegmentNum"></a>

```java
public void resetSubSegmentNum()
```

##### `resetSubSegmentsExpected` <a name="resetSubSegmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSubSegmentsExpected"></a>

```java
public void resetSubSegmentsExpected()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventIdInput">segmentationEventIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeIdInput">segmentationTypeIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidInput">segmentationUpidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidTypeInput">segmentationUpidTypeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNumInput">segmentNumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpectedInput">segmentsExpectedInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNumInput">subSegmentNumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpectedInput">subSegmentsExpectedInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventId">segmentationEventId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeId">segmentationTypeId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpid">segmentationUpid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidType">segmentationUpidType</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNum">segmentNum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpected">segmentsExpected</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNum">subSegmentNum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpected">subSegmentsExpected</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `segmentationEventIdInput`<sup>Optional</sup> <a name="segmentationEventIdInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventIdInput"></a>

```java
public java.lang.Number getSegmentationEventIdInput();
```

- *Type:* java.lang.Number

---

##### `segmentationTypeIdInput`<sup>Optional</sup> <a name="segmentationTypeIdInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeIdInput"></a>

```java
public java.lang.Number getSegmentationTypeIdInput();
```

- *Type:* java.lang.Number

---

##### `segmentationUpidInput`<sup>Optional</sup> <a name="segmentationUpidInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidInput"></a>

```java
public java.lang.String getSegmentationUpidInput();
```

- *Type:* java.lang.String

---

##### `segmentationUpidTypeInput`<sup>Optional</sup> <a name="segmentationUpidTypeInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidTypeInput"></a>

```java
public java.lang.Number getSegmentationUpidTypeInput();
```

- *Type:* java.lang.Number

---

##### `segmentNumInput`<sup>Optional</sup> <a name="segmentNumInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNumInput"></a>

```java
public java.lang.Number getSegmentNumInput();
```

- *Type:* java.lang.Number

---

##### `segmentsExpectedInput`<sup>Optional</sup> <a name="segmentsExpectedInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpectedInput"></a>

```java
public java.lang.Number getSegmentsExpectedInput();
```

- *Type:* java.lang.Number

---

##### `subSegmentNumInput`<sup>Optional</sup> <a name="subSegmentNumInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNumInput"></a>

```java
public java.lang.Number getSubSegmentNumInput();
```

- *Type:* java.lang.Number

---

##### `subSegmentsExpectedInput`<sup>Optional</sup> <a name="subSegmentsExpectedInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpectedInput"></a>

```java
public java.lang.Number getSubSegmentsExpectedInput();
```

- *Type:* java.lang.Number

---

##### `segmentationEventId`<sup>Required</sup> <a name="segmentationEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventId"></a>

```java
public java.lang.Number getSegmentationEventId();
```

- *Type:* java.lang.Number

---

##### `segmentationTypeId`<sup>Required</sup> <a name="segmentationTypeId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeId"></a>

```java
public java.lang.Number getSegmentationTypeId();
```

- *Type:* java.lang.Number

---

##### `segmentationUpid`<sup>Required</sup> <a name="segmentationUpid" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpid"></a>

```java
public java.lang.String getSegmentationUpid();
```

- *Type:* java.lang.String

---

##### `segmentationUpidType`<sup>Required</sup> <a name="segmentationUpidType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidType"></a>

```java
public java.lang.Number getSegmentationUpidType();
```

- *Type:* java.lang.Number

---

##### `segmentNum`<sup>Required</sup> <a name="segmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNum"></a>

```java
public java.lang.Number getSegmentNum();
```

- *Type:* java.lang.Number

---

##### `segmentsExpected`<sup>Required</sup> <a name="segmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpected"></a>

```java
public java.lang.Number getSegmentsExpected();
```

- *Type:* java.lang.Number

---

##### `subSegmentNum`<sup>Required</sup> <a name="subSegmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNum"></a>

```java
public java.lang.Number getSubSegmentNum();
```

- *Type:* java.lang.Number

---

##### `subSegmentsExpected`<sup>Required</sup> <a name="subSegmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpected"></a>

```java
public java.lang.Number getSubSegmentsExpected();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors</a>

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList;

new MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.get"></a>

```java
public MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata</a>>

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference;

new MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata</a>

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksList <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksList" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList;

new MediatailorProgramAudienceMediaAlternateMediaAdBreaksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.get"></a>

```java
public MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks">MediatailorProgramAudienceMediaAlternateMediaAdBreaks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MediatailorProgramAudienceMediaAlternateMediaAdBreaks> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks">MediatailorProgramAudienceMediaAlternateMediaAdBreaks</a>>

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference;

new MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putAdBreakMetadata">putAdBreakMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putSlate">putSlate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putSpliceInsertMessage">putSpliceInsertMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putTimeSignalMessage">putTimeSignalMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetAdBreakMetadata">resetAdBreakMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetMessageType">resetMessageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetOffsetMillis">resetOffsetMillis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetSlate">resetSlate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetSpliceInsertMessage">resetSpliceInsertMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetTimeSignalMessage">resetTimeSignalMessage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdBreakMetadata` <a name="putAdBreakMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putAdBreakMetadata"></a>

```java
public void putAdBreakMetadata(IResolvable|java.util.List<MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putAdBreakMetadata.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata</a>>

---

##### `putSlate` <a name="putSlate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putSlate"></a>

```java
public void putSlate(MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putSlate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate</a>

---

##### `putSpliceInsertMessage` <a name="putSpliceInsertMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putSpliceInsertMessage"></a>

```java
public void putSpliceInsertMessage(MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putSpliceInsertMessage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage</a>

---

##### `putTimeSignalMessage` <a name="putTimeSignalMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putTimeSignalMessage"></a>

```java
public void putTimeSignalMessage(MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putTimeSignalMessage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage</a>

---

##### `resetAdBreakMetadata` <a name="resetAdBreakMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetAdBreakMetadata"></a>

```java
public void resetAdBreakMetadata()
```

##### `resetMessageType` <a name="resetMessageType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetMessageType"></a>

```java
public void resetMessageType()
```

##### `resetOffsetMillis` <a name="resetOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetOffsetMillis"></a>

```java
public void resetOffsetMillis()
```

##### `resetSlate` <a name="resetSlate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetSlate"></a>

```java
public void resetSlate()
```

##### `resetSpliceInsertMessage` <a name="resetSpliceInsertMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetSpliceInsertMessage"></a>

```java
public void resetSpliceInsertMessage()
```

##### `resetTimeSignalMessage` <a name="resetTimeSignalMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetTimeSignalMessage"></a>

```java
public void resetTimeSignalMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.adBreakMetadata">adBreakMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.slate">slate</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.spliceInsertMessage">spliceInsertMessage</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.timeSignalMessage">timeSignalMessage</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.adBreakMetadataInput">adBreakMetadataInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.messageTypeInput">messageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.offsetMillisInput">offsetMillisInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.slateInput">slateInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.spliceInsertMessageInput">spliceInsertMessageInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.timeSignalMessageInput">timeSignalMessageInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.messageType">messageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.offsetMillis">offsetMillis</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks">MediatailorProgramAudienceMediaAlternateMediaAdBreaks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adBreakMetadata`<sup>Required</sup> <a name="adBreakMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.adBreakMetadata"></a>

```java
public MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList getAdBreakMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList</a>

---

##### `slate`<sup>Required</sup> <a name="slate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.slate"></a>

```java
public MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference getSlate();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference</a>

---

##### `spliceInsertMessage`<sup>Required</sup> <a name="spliceInsertMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.spliceInsertMessage"></a>

```java
public MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference getSpliceInsertMessage();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference</a>

---

##### `timeSignalMessage`<sup>Required</sup> <a name="timeSignalMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.timeSignalMessage"></a>

```java
public MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference getTimeSignalMessage();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference</a>

---

##### `adBreakMetadataInput`<sup>Optional</sup> <a name="adBreakMetadataInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.adBreakMetadataInput"></a>

```java
public IResolvable|java.util.List<MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata> getAdBreakMetadataInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata</a>>

---

##### `messageTypeInput`<sup>Optional</sup> <a name="messageTypeInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.messageTypeInput"></a>

```java
public java.lang.String getMessageTypeInput();
```

- *Type:* java.lang.String

---

##### `offsetMillisInput`<sup>Optional</sup> <a name="offsetMillisInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.offsetMillisInput"></a>

```java
public java.lang.Number getOffsetMillisInput();
```

- *Type:* java.lang.Number

---

##### `slateInput`<sup>Optional</sup> <a name="slateInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.slateInput"></a>

```java
public IResolvable|MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate getSlateInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate</a>

---

##### `spliceInsertMessageInput`<sup>Optional</sup> <a name="spliceInsertMessageInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.spliceInsertMessageInput"></a>

```java
public IResolvable|MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage getSpliceInsertMessageInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage</a>

---

##### `timeSignalMessageInput`<sup>Optional</sup> <a name="timeSignalMessageInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.timeSignalMessageInput"></a>

```java
public IResolvable|MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage getTimeSignalMessageInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage</a>

---

##### `messageType`<sup>Required</sup> <a name="messageType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.messageType"></a>

```java
public java.lang.String getMessageType();
```

- *Type:* java.lang.String

---

##### `offsetMillis`<sup>Required</sup> <a name="offsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.offsetMillis"></a>

```java
public java.lang.Number getOffsetMillis();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorProgramAudienceMediaAlternateMediaAdBreaks getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks">MediatailorProgramAudienceMediaAlternateMediaAdBreaks</a>

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference;

new MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resetSourceLocationName">resetSourceLocationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resetVodSourceName">resetVodSourceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceLocationName` <a name="resetSourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resetSourceLocationName"></a>

```java
public void resetSourceLocationName()
```

##### `resetVodSourceName` <a name="resetVodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resetVodSourceName"></a>

```java
public void resetVodSourceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.sourceLocationNameInput">sourceLocationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.vodSourceNameInput">vodSourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.sourceLocationName">sourceLocationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.vodSourceName">vodSourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceLocationNameInput`<sup>Optional</sup> <a name="sourceLocationNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.sourceLocationNameInput"></a>

```java
public java.lang.String getSourceLocationNameInput();
```

- *Type:* java.lang.String

---

##### `vodSourceNameInput`<sup>Optional</sup> <a name="vodSourceNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.vodSourceNameInput"></a>

```java
public java.lang.String getVodSourceNameInput();
```

- *Type:* java.lang.String

---

##### `sourceLocationName`<sup>Required</sup> <a name="sourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.sourceLocationName"></a>

```java
public java.lang.String getSourceLocationName();
```

- *Type:* java.lang.String

---

##### `vodSourceName`<sup>Required</sup> <a name="vodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.vodSourceName"></a>

```java
public java.lang.String getVodSourceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate</a>

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference;

new MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resetAvailNum">resetAvailNum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resetAvailsExpected">resetAvailsExpected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resetSpliceEventId">resetSpliceEventId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resetUniqueProgramId">resetUniqueProgramId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailNum` <a name="resetAvailNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resetAvailNum"></a>

```java
public void resetAvailNum()
```

##### `resetAvailsExpected` <a name="resetAvailsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resetAvailsExpected"></a>

```java
public void resetAvailsExpected()
```

##### `resetSpliceEventId` <a name="resetSpliceEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resetSpliceEventId"></a>

```java
public void resetSpliceEventId()
```

##### `resetUniqueProgramId` <a name="resetUniqueProgramId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resetUniqueProgramId"></a>

```java
public void resetUniqueProgramId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availNumInput">availNumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availsExpectedInput">availsExpectedInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.spliceEventIdInput">spliceEventIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramIdInput">uniqueProgramIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availNum">availNum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availsExpected">availsExpected</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.spliceEventId">spliceEventId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramId">uniqueProgramId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availNumInput`<sup>Optional</sup> <a name="availNumInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availNumInput"></a>

```java
public java.lang.Number getAvailNumInput();
```

- *Type:* java.lang.Number

---

##### `availsExpectedInput`<sup>Optional</sup> <a name="availsExpectedInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availsExpectedInput"></a>

```java
public java.lang.Number getAvailsExpectedInput();
```

- *Type:* java.lang.Number

---

##### `spliceEventIdInput`<sup>Optional</sup> <a name="spliceEventIdInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.spliceEventIdInput"></a>

```java
public java.lang.Number getSpliceEventIdInput();
```

- *Type:* java.lang.Number

---

##### `uniqueProgramIdInput`<sup>Optional</sup> <a name="uniqueProgramIdInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramIdInput"></a>

```java
public java.lang.Number getUniqueProgramIdInput();
```

- *Type:* java.lang.Number

---

##### `availNum`<sup>Required</sup> <a name="availNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availNum"></a>

```java
public java.lang.Number getAvailNum();
```

- *Type:* java.lang.Number

---

##### `availsExpected`<sup>Required</sup> <a name="availsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availsExpected"></a>

```java
public java.lang.Number getAvailsExpected();
```

- *Type:* java.lang.Number

---

##### `spliceEventId`<sup>Required</sup> <a name="spliceEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.spliceEventId"></a>

```java
public java.lang.Number getSpliceEventId();
```

- *Type:* java.lang.Number

---

##### `uniqueProgramId`<sup>Required</sup> <a name="uniqueProgramId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramId"></a>

```java
public java.lang.Number getUniqueProgramId();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage</a>

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference;

new MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.putSegmentationDescriptors">putSegmentationDescriptors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.resetSegmentationDescriptors">resetSegmentationDescriptors</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSegmentationDescriptors` <a name="putSegmentationDescriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.putSegmentationDescriptors"></a>

```java
public void putSegmentationDescriptors(IResolvable|java.util.List<MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.putSegmentationDescriptors.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors</a>>

---

##### `resetSegmentationDescriptors` <a name="resetSegmentationDescriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.resetSegmentationDescriptors"></a>

```java
public void resetSegmentationDescriptors()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptors">segmentationDescriptors</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptorsInput">segmentationDescriptorsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `segmentationDescriptors`<sup>Required</sup> <a name="segmentationDescriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptors"></a>

```java
public MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList getSegmentationDescriptors();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList</a>

---

##### `segmentationDescriptorsInput`<sup>Optional</sup> <a name="segmentationDescriptorsInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptorsInput"></a>

```java
public IResolvable|java.util.List<MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors> getSegmentationDescriptorsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage</a>

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList;

new MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.get"></a>

```java
public MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors</a>>

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference;

new MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationEventId">resetSegmentationEventId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationTypeId">resetSegmentationTypeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationUpid">resetSegmentationUpid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationUpidType">resetSegmentationUpidType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentNum">resetSegmentNum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentsExpected">resetSegmentsExpected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSubSegmentNum">resetSubSegmentNum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSubSegmentsExpected">resetSubSegmentsExpected</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSegmentationEventId` <a name="resetSegmentationEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationEventId"></a>

```java
public void resetSegmentationEventId()
```

##### `resetSegmentationTypeId` <a name="resetSegmentationTypeId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationTypeId"></a>

```java
public void resetSegmentationTypeId()
```

##### `resetSegmentationUpid` <a name="resetSegmentationUpid" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationUpid"></a>

```java
public void resetSegmentationUpid()
```

##### `resetSegmentationUpidType` <a name="resetSegmentationUpidType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationUpidType"></a>

```java
public void resetSegmentationUpidType()
```

##### `resetSegmentNum` <a name="resetSegmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentNum"></a>

```java
public void resetSegmentNum()
```

##### `resetSegmentsExpected` <a name="resetSegmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentsExpected"></a>

```java
public void resetSegmentsExpected()
```

##### `resetSubSegmentNum` <a name="resetSubSegmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSubSegmentNum"></a>

```java
public void resetSubSegmentNum()
```

##### `resetSubSegmentsExpected` <a name="resetSubSegmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSubSegmentsExpected"></a>

```java
public void resetSubSegmentsExpected()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventIdInput">segmentationEventIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeIdInput">segmentationTypeIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidInput">segmentationUpidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidTypeInput">segmentationUpidTypeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNumInput">segmentNumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpectedInput">segmentsExpectedInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNumInput">subSegmentNumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpectedInput">subSegmentsExpectedInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventId">segmentationEventId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeId">segmentationTypeId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpid">segmentationUpid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidType">segmentationUpidType</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNum">segmentNum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpected">segmentsExpected</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNum">subSegmentNum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpected">subSegmentsExpected</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `segmentationEventIdInput`<sup>Optional</sup> <a name="segmentationEventIdInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventIdInput"></a>

```java
public java.lang.Number getSegmentationEventIdInput();
```

- *Type:* java.lang.Number

---

##### `segmentationTypeIdInput`<sup>Optional</sup> <a name="segmentationTypeIdInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeIdInput"></a>

```java
public java.lang.Number getSegmentationTypeIdInput();
```

- *Type:* java.lang.Number

---

##### `segmentationUpidInput`<sup>Optional</sup> <a name="segmentationUpidInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidInput"></a>

```java
public java.lang.String getSegmentationUpidInput();
```

- *Type:* java.lang.String

---

##### `segmentationUpidTypeInput`<sup>Optional</sup> <a name="segmentationUpidTypeInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidTypeInput"></a>

```java
public java.lang.Number getSegmentationUpidTypeInput();
```

- *Type:* java.lang.Number

---

##### `segmentNumInput`<sup>Optional</sup> <a name="segmentNumInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNumInput"></a>

```java
public java.lang.Number getSegmentNumInput();
```

- *Type:* java.lang.Number

---

##### `segmentsExpectedInput`<sup>Optional</sup> <a name="segmentsExpectedInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpectedInput"></a>

```java
public java.lang.Number getSegmentsExpectedInput();
```

- *Type:* java.lang.Number

---

##### `subSegmentNumInput`<sup>Optional</sup> <a name="subSegmentNumInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNumInput"></a>

```java
public java.lang.Number getSubSegmentNumInput();
```

- *Type:* java.lang.Number

---

##### `subSegmentsExpectedInput`<sup>Optional</sup> <a name="subSegmentsExpectedInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpectedInput"></a>

```java
public java.lang.Number getSubSegmentsExpectedInput();
```

- *Type:* java.lang.Number

---

##### `segmentationEventId`<sup>Required</sup> <a name="segmentationEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventId"></a>

```java
public java.lang.Number getSegmentationEventId();
```

- *Type:* java.lang.Number

---

##### `segmentationTypeId`<sup>Required</sup> <a name="segmentationTypeId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeId"></a>

```java
public java.lang.Number getSegmentationTypeId();
```

- *Type:* java.lang.Number

---

##### `segmentationUpid`<sup>Required</sup> <a name="segmentationUpid" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpid"></a>

```java
public java.lang.String getSegmentationUpid();
```

- *Type:* java.lang.String

---

##### `segmentationUpidType`<sup>Required</sup> <a name="segmentationUpidType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidType"></a>

```java
public java.lang.Number getSegmentationUpidType();
```

- *Type:* java.lang.Number

---

##### `segmentNum`<sup>Required</sup> <a name="segmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNum"></a>

```java
public java.lang.Number getSegmentNum();
```

- *Type:* java.lang.Number

---

##### `segmentsExpected`<sup>Required</sup> <a name="segmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpected"></a>

```java
public java.lang.Number getSegmentsExpected();
```

- *Type:* java.lang.Number

---

##### `subSegmentNum`<sup>Required</sup> <a name="subSegmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNum"></a>

```java
public java.lang.Number getSubSegmentNum();
```

- *Type:* java.lang.Number

---

##### `subSegmentsExpected`<sup>Required</sup> <a name="subSegmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpected"></a>

```java
public java.lang.Number getSubSegmentsExpected();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors</a>

---


### MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference <a name="MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference;

new MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resetEndOffsetMillis">resetEndOffsetMillis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resetStartOffsetMillis">resetStartOffsetMillis</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndOffsetMillis` <a name="resetEndOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resetEndOffsetMillis"></a>

```java
public void resetEndOffsetMillis()
```

##### `resetStartOffsetMillis` <a name="resetStartOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resetStartOffsetMillis"></a>

```java
public void resetStartOffsetMillis()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.endOffsetMillisInput">endOffsetMillisInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.startOffsetMillisInput">startOffsetMillisInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.endOffsetMillis">endOffsetMillis</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.startOffsetMillis">startOffsetMillis</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange">MediatailorProgramAudienceMediaAlternateMediaClipRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endOffsetMillisInput`<sup>Optional</sup> <a name="endOffsetMillisInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.endOffsetMillisInput"></a>

```java
public java.lang.Number getEndOffsetMillisInput();
```

- *Type:* java.lang.Number

---

##### `startOffsetMillisInput`<sup>Optional</sup> <a name="startOffsetMillisInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.startOffsetMillisInput"></a>

```java
public java.lang.Number getStartOffsetMillisInput();
```

- *Type:* java.lang.Number

---

##### `endOffsetMillis`<sup>Required</sup> <a name="endOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.endOffsetMillis"></a>

```java
public java.lang.Number getEndOffsetMillis();
```

- *Type:* java.lang.Number

---

##### `startOffsetMillis`<sup>Required</sup> <a name="startOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.startOffsetMillis"></a>

```java
public java.lang.Number getStartOffsetMillis();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorProgramAudienceMediaAlternateMediaClipRange getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange">MediatailorProgramAudienceMediaAlternateMediaClipRange</a>

---


### MediatailorProgramAudienceMediaAlternateMediaList <a name="MediatailorProgramAudienceMediaAlternateMediaList" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAudienceMediaAlternateMediaList;

new MediatailorProgramAudienceMediaAlternateMediaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.get"></a>

```java
public MediatailorProgramAudienceMediaAlternateMediaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia">MediatailorProgramAudienceMediaAlternateMedia</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MediatailorProgramAudienceMediaAlternateMedia> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia">MediatailorProgramAudienceMediaAlternateMedia</a>>

---


### MediatailorProgramAudienceMediaAlternateMediaOutputReference <a name="MediatailorProgramAudienceMediaAlternateMediaOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAudienceMediaAlternateMediaOutputReference;

new MediatailorProgramAudienceMediaAlternateMediaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.putAdBreaks">putAdBreaks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.putClipRange">putClipRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetAdBreaks">resetAdBreaks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetClipRange">resetClipRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetDurationMillis">resetDurationMillis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetLiveSourceName">resetLiveSourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetScheduledStartTimeMillis">resetScheduledStartTimeMillis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetSourceLocationName">resetSourceLocationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetVodSourceName">resetVodSourceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdBreaks` <a name="putAdBreaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.putAdBreaks"></a>

```java
public void putAdBreaks(IResolvable|java.util.List<MediatailorProgramAudienceMediaAlternateMediaAdBreaks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.putAdBreaks.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks">MediatailorProgramAudienceMediaAlternateMediaAdBreaks</a>>

---

##### `putClipRange` <a name="putClipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.putClipRange"></a>

```java
public void putClipRange(MediatailorProgramAudienceMediaAlternateMediaClipRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.putClipRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange">MediatailorProgramAudienceMediaAlternateMediaClipRange</a>

---

##### `resetAdBreaks` <a name="resetAdBreaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetAdBreaks"></a>

```java
public void resetAdBreaks()
```

##### `resetClipRange` <a name="resetClipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetClipRange"></a>

```java
public void resetClipRange()
```

##### `resetDurationMillis` <a name="resetDurationMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetDurationMillis"></a>

```java
public void resetDurationMillis()
```

##### `resetLiveSourceName` <a name="resetLiveSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetLiveSourceName"></a>

```java
public void resetLiveSourceName()
```

##### `resetScheduledStartTimeMillis` <a name="resetScheduledStartTimeMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetScheduledStartTimeMillis"></a>

```java
public void resetScheduledStartTimeMillis()
```

##### `resetSourceLocationName` <a name="resetSourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetSourceLocationName"></a>

```java
public void resetSourceLocationName()
```

##### `resetVodSourceName` <a name="resetVodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetVodSourceName"></a>

```java
public void resetVodSourceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.adBreaks">adBreaks</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList">MediatailorProgramAudienceMediaAlternateMediaAdBreaksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.clipRange">clipRange</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference">MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.adBreaksInput">adBreaksInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks">MediatailorProgramAudienceMediaAlternateMediaAdBreaks</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.clipRangeInput">clipRangeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange">MediatailorProgramAudienceMediaAlternateMediaClipRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.durationMillisInput">durationMillisInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.liveSourceNameInput">liveSourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.scheduledStartTimeMillisInput">scheduledStartTimeMillisInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.sourceLocationNameInput">sourceLocationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.vodSourceNameInput">vodSourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.durationMillis">durationMillis</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.liveSourceName">liveSourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.scheduledStartTimeMillis">scheduledStartTimeMillis</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.sourceLocationName">sourceLocationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.vodSourceName">vodSourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia">MediatailorProgramAudienceMediaAlternateMedia</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adBreaks`<sup>Required</sup> <a name="adBreaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.adBreaks"></a>

```java
public MediatailorProgramAudienceMediaAlternateMediaAdBreaksList getAdBreaks();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList">MediatailorProgramAudienceMediaAlternateMediaAdBreaksList</a>

---

##### `clipRange`<sup>Required</sup> <a name="clipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.clipRange"></a>

```java
public MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference getClipRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference">MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference</a>

---

##### `adBreaksInput`<sup>Optional</sup> <a name="adBreaksInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.adBreaksInput"></a>

```java
public IResolvable|java.util.List<MediatailorProgramAudienceMediaAlternateMediaAdBreaks> getAdBreaksInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks">MediatailorProgramAudienceMediaAlternateMediaAdBreaks</a>>

---

##### `clipRangeInput`<sup>Optional</sup> <a name="clipRangeInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.clipRangeInput"></a>

```java
public IResolvable|MediatailorProgramAudienceMediaAlternateMediaClipRange getClipRangeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange">MediatailorProgramAudienceMediaAlternateMediaClipRange</a>

---

##### `durationMillisInput`<sup>Optional</sup> <a name="durationMillisInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.durationMillisInput"></a>

```java
public java.lang.Number getDurationMillisInput();
```

- *Type:* java.lang.Number

---

##### `liveSourceNameInput`<sup>Optional</sup> <a name="liveSourceNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.liveSourceNameInput"></a>

```java
public java.lang.String getLiveSourceNameInput();
```

- *Type:* java.lang.String

---

##### `scheduledStartTimeMillisInput`<sup>Optional</sup> <a name="scheduledStartTimeMillisInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.scheduledStartTimeMillisInput"></a>

```java
public java.lang.Number getScheduledStartTimeMillisInput();
```

- *Type:* java.lang.Number

---

##### `sourceLocationNameInput`<sup>Optional</sup> <a name="sourceLocationNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.sourceLocationNameInput"></a>

```java
public java.lang.String getSourceLocationNameInput();
```

- *Type:* java.lang.String

---

##### `vodSourceNameInput`<sup>Optional</sup> <a name="vodSourceNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.vodSourceNameInput"></a>

```java
public java.lang.String getVodSourceNameInput();
```

- *Type:* java.lang.String

---

##### `durationMillis`<sup>Required</sup> <a name="durationMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.durationMillis"></a>

```java
public java.lang.Number getDurationMillis();
```

- *Type:* java.lang.Number

---

##### `liveSourceName`<sup>Required</sup> <a name="liveSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.liveSourceName"></a>

```java
public java.lang.String getLiveSourceName();
```

- *Type:* java.lang.String

---

##### `scheduledStartTimeMillis`<sup>Required</sup> <a name="scheduledStartTimeMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.scheduledStartTimeMillis"></a>

```java
public java.lang.Number getScheduledStartTimeMillis();
```

- *Type:* java.lang.Number

---

##### `sourceLocationName`<sup>Required</sup> <a name="sourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.sourceLocationName"></a>

```java
public java.lang.String getSourceLocationName();
```

- *Type:* java.lang.String

---

##### `vodSourceName`<sup>Required</sup> <a name="vodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.vodSourceName"></a>

```java
public java.lang.String getVodSourceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorProgramAudienceMediaAlternateMedia getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia">MediatailorProgramAudienceMediaAlternateMedia</a>

---


### MediatailorProgramAudienceMediaList <a name="MediatailorProgramAudienceMediaList" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAudienceMediaList;

new MediatailorProgramAudienceMediaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.get"></a>

```java
public MediatailorProgramAudienceMediaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia">MediatailorProgramAudienceMedia</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MediatailorProgramAudienceMedia> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia">MediatailorProgramAudienceMedia</a>>

---


### MediatailorProgramAudienceMediaOutputReference <a name="MediatailorProgramAudienceMediaOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramAudienceMediaOutputReference;

new MediatailorProgramAudienceMediaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.putAlternateMedia">putAlternateMedia</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.resetAlternateMedia">resetAlternateMedia</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.resetAudience">resetAudience</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAlternateMedia` <a name="putAlternateMedia" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.putAlternateMedia"></a>

```java
public void putAlternateMedia(IResolvable|java.util.List<MediatailorProgramAudienceMediaAlternateMedia> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.putAlternateMedia.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia">MediatailorProgramAudienceMediaAlternateMedia</a>>

---

##### `resetAlternateMedia` <a name="resetAlternateMedia" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.resetAlternateMedia"></a>

```java
public void resetAlternateMedia()
```

##### `resetAudience` <a name="resetAudience" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.resetAudience"></a>

```java
public void resetAudience()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.alternateMedia">alternateMedia</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList">MediatailorProgramAudienceMediaAlternateMediaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.alternateMediaInput">alternateMediaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia">MediatailorProgramAudienceMediaAlternateMedia</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.audienceInput">audienceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.audience">audience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia">MediatailorProgramAudienceMedia</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alternateMedia`<sup>Required</sup> <a name="alternateMedia" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.alternateMedia"></a>

```java
public MediatailorProgramAudienceMediaAlternateMediaList getAlternateMedia();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList">MediatailorProgramAudienceMediaAlternateMediaList</a>

---

##### `alternateMediaInput`<sup>Optional</sup> <a name="alternateMediaInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.alternateMediaInput"></a>

```java
public IResolvable|java.util.List<MediatailorProgramAudienceMediaAlternateMedia> getAlternateMediaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia">MediatailorProgramAudienceMediaAlternateMedia</a>>

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.audienceInput"></a>

```java
public java.lang.String getAudienceInput();
```

- *Type:* java.lang.String

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorProgramAudienceMedia getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia">MediatailorProgramAudienceMedia</a>

---


### MediatailorProgramClipRangeOutputReference <a name="MediatailorProgramClipRangeOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramClipRangeOutputReference;

new MediatailorProgramClipRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.endOffsetMillis">endOffsetMillis</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.startOffsetMillis">startOffsetMillis</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRange">MediatailorProgramClipRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endOffsetMillis`<sup>Required</sup> <a name="endOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.endOffsetMillis"></a>

```java
public java.lang.Number getEndOffsetMillis();
```

- *Type:* java.lang.Number

---

##### `startOffsetMillis`<sup>Required</sup> <a name="startOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.startOffsetMillis"></a>

```java
public java.lang.Number getStartOffsetMillis();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.internalValue"></a>

```java
public MediatailorProgramClipRange getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRange">MediatailorProgramClipRange</a>

---


### MediatailorProgramScheduleConfigurationClipRangeOutputReference <a name="MediatailorProgramScheduleConfigurationClipRangeOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramScheduleConfigurationClipRangeOutputReference;

new MediatailorProgramScheduleConfigurationClipRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.resetEndOffsetMillis">resetEndOffsetMillis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.resetStartOffsetMillis">resetStartOffsetMillis</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndOffsetMillis` <a name="resetEndOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.resetEndOffsetMillis"></a>

```java
public void resetEndOffsetMillis()
```

##### `resetStartOffsetMillis` <a name="resetStartOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.resetStartOffsetMillis"></a>

```java
public void resetStartOffsetMillis()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.endOffsetMillisInput">endOffsetMillisInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.startOffsetMillisInput">startOffsetMillisInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.endOffsetMillis">endOffsetMillis</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.startOffsetMillis">startOffsetMillis</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange">MediatailorProgramScheduleConfigurationClipRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endOffsetMillisInput`<sup>Optional</sup> <a name="endOffsetMillisInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.endOffsetMillisInput"></a>

```java
public java.lang.Number getEndOffsetMillisInput();
```

- *Type:* java.lang.Number

---

##### `startOffsetMillisInput`<sup>Optional</sup> <a name="startOffsetMillisInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.startOffsetMillisInput"></a>

```java
public java.lang.Number getStartOffsetMillisInput();
```

- *Type:* java.lang.Number

---

##### `endOffsetMillis`<sup>Required</sup> <a name="endOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.endOffsetMillis"></a>

```java
public java.lang.Number getEndOffsetMillis();
```

- *Type:* java.lang.Number

---

##### `startOffsetMillis`<sup>Required</sup> <a name="startOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.startOffsetMillis"></a>

```java
public java.lang.Number getStartOffsetMillis();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorProgramScheduleConfigurationClipRange getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange">MediatailorProgramScheduleConfigurationClipRange</a>

---


### MediatailorProgramScheduleConfigurationOutputReference <a name="MediatailorProgramScheduleConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramScheduleConfigurationOutputReference;

new MediatailorProgramScheduleConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.putClipRange">putClipRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.putTransition">putTransition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.resetClipRange">resetClipRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.resetTransition">resetTransition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClipRange` <a name="putClipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.putClipRange"></a>

```java
public void putClipRange(MediatailorProgramScheduleConfigurationClipRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.putClipRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange">MediatailorProgramScheduleConfigurationClipRange</a>

---

##### `putTransition` <a name="putTransition" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.putTransition"></a>

```java
public void putTransition(MediatailorProgramScheduleConfigurationTransition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.putTransition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition">MediatailorProgramScheduleConfigurationTransition</a>

---

##### `resetClipRange` <a name="resetClipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.resetClipRange"></a>

```java
public void resetClipRange()
```

##### `resetTransition` <a name="resetTransition" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.resetTransition"></a>

```java
public void resetTransition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.clipRange">clipRange</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference">MediatailorProgramScheduleConfigurationClipRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.transition">transition</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference">MediatailorProgramScheduleConfigurationTransitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.clipRangeInput">clipRangeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange">MediatailorProgramScheduleConfigurationClipRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.transitionInput">transitionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition">MediatailorProgramScheduleConfigurationTransition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration">MediatailorProgramScheduleConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clipRange`<sup>Required</sup> <a name="clipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.clipRange"></a>

```java
public MediatailorProgramScheduleConfigurationClipRangeOutputReference getClipRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference">MediatailorProgramScheduleConfigurationClipRangeOutputReference</a>

---

##### `transition`<sup>Required</sup> <a name="transition" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.transition"></a>

```java
public MediatailorProgramScheduleConfigurationTransitionOutputReference getTransition();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference">MediatailorProgramScheduleConfigurationTransitionOutputReference</a>

---

##### `clipRangeInput`<sup>Optional</sup> <a name="clipRangeInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.clipRangeInput"></a>

```java
public IResolvable|MediatailorProgramScheduleConfigurationClipRange getClipRangeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange">MediatailorProgramScheduleConfigurationClipRange</a>

---

##### `transitionInput`<sup>Optional</sup> <a name="transitionInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.transitionInput"></a>

```java
public IResolvable|MediatailorProgramScheduleConfigurationTransition getTransitionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition">MediatailorProgramScheduleConfigurationTransition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorProgramScheduleConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration">MediatailorProgramScheduleConfiguration</a>

---


### MediatailorProgramScheduleConfigurationTransitionOutputReference <a name="MediatailorProgramScheduleConfigurationTransitionOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_program.MediatailorProgramScheduleConfigurationTransitionOutputReference;

new MediatailorProgramScheduleConfigurationTransitionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetDurationMillis">resetDurationMillis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetRelativePosition">resetRelativePosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetRelativeProgram">resetRelativeProgram</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetScheduledStartTimeMillis">resetScheduledStartTimeMillis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDurationMillis` <a name="resetDurationMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetDurationMillis"></a>

```java
public void resetDurationMillis()
```

##### `resetRelativePosition` <a name="resetRelativePosition" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetRelativePosition"></a>

```java
public void resetRelativePosition()
```

##### `resetRelativeProgram` <a name="resetRelativeProgram" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetRelativeProgram"></a>

```java
public void resetRelativeProgram()
```

##### `resetScheduledStartTimeMillis` <a name="resetScheduledStartTimeMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetScheduledStartTimeMillis"></a>

```java
public void resetScheduledStartTimeMillis()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.durationMillisInput">durationMillisInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativePositionInput">relativePositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativeProgramInput">relativeProgramInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.scheduledStartTimeMillisInput">scheduledStartTimeMillisInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.durationMillis">durationMillis</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativePosition">relativePosition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativeProgram">relativeProgram</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.scheduledStartTimeMillis">scheduledStartTimeMillis</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition">MediatailorProgramScheduleConfigurationTransition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `durationMillisInput`<sup>Optional</sup> <a name="durationMillisInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.durationMillisInput"></a>

```java
public java.lang.Number getDurationMillisInput();
```

- *Type:* java.lang.Number

---

##### `relativePositionInput`<sup>Optional</sup> <a name="relativePositionInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativePositionInput"></a>

```java
public java.lang.String getRelativePositionInput();
```

- *Type:* java.lang.String

---

##### `relativeProgramInput`<sup>Optional</sup> <a name="relativeProgramInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativeProgramInput"></a>

```java
public java.lang.String getRelativeProgramInput();
```

- *Type:* java.lang.String

---

##### `scheduledStartTimeMillisInput`<sup>Optional</sup> <a name="scheduledStartTimeMillisInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.scheduledStartTimeMillisInput"></a>

```java
public java.lang.Number getScheduledStartTimeMillisInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `durationMillis`<sup>Required</sup> <a name="durationMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.durationMillis"></a>

```java
public java.lang.Number getDurationMillis();
```

- *Type:* java.lang.Number

---

##### `relativePosition`<sup>Required</sup> <a name="relativePosition" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativePosition"></a>

```java
public java.lang.String getRelativePosition();
```

- *Type:* java.lang.String

---

##### `relativeProgram`<sup>Required</sup> <a name="relativeProgram" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativeProgram"></a>

```java
public java.lang.String getRelativeProgram();
```

- *Type:* java.lang.String

---

##### `scheduledStartTimeMillis`<sup>Required</sup> <a name="scheduledStartTimeMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.scheduledStartTimeMillis"></a>

```java
public java.lang.Number getScheduledStartTimeMillis();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorProgramScheduleConfigurationTransition getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition">MediatailorProgramScheduleConfigurationTransition</a>

---



