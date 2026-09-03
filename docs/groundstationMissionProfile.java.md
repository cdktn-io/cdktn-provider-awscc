# `groundstationMissionProfile` Submodule <a name="`groundstationMissionProfile` Submodule" id="@cdktn/provider-awscc.groundstationMissionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroundstationMissionProfile <a name="GroundstationMissionProfile" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile awscc_groundstation_mission_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_mission_profile.GroundstationMissionProfile;

GroundstationMissionProfile.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataflowEdges(IResolvable|java.util.List<GroundstationMissionProfileDataflowEdges>)
    .minimumViableContactDurationSeconds(java.lang.Number)
    .name(java.lang.String)
    .trackingConfigArn(java.lang.String)
//  .contactPostPassDurationSeconds(java.lang.Number)
//  .contactPrePassDurationSeconds(java.lang.Number)
//  .streamsKmsKey(GroundstationMissionProfileStreamsKmsKey)
//  .streamsKmsRole(java.lang.String)
//  .tags(IResolvable|java.util.List<GroundstationMissionProfileTags>)
//  .telemetrySinkConfigArn(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.dataflowEdges">dataflowEdges</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#dataflow_edges GroundstationMissionProfile#dataflow_edges}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.minimumViableContactDurationSeconds">minimumViableContactDurationSeconds</a></code> | <code>java.lang.Number</code> | Visibilities with shorter duration than the specified minimum viable contact duration will be ignored when searching for available contacts. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A name used to identify a mission profile. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.trackingConfigArn">trackingConfigArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#tracking_config_arn GroundstationMissionProfile#tracking_config_arn}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.contactPostPassDurationSeconds">contactPostPassDurationSeconds</a></code> | <code>java.lang.Number</code> | Post-pass time needed after the contact. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.contactPrePassDurationSeconds">contactPrePassDurationSeconds</a></code> | <code>java.lang.Number</code> | Pre-pass time needed before the contact. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.streamsKmsKey">streamsKmsKey</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a></code> | The ARN of a KMS Key used for encrypting data during transmission from the source to destination locations. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.streamsKmsRole">streamsKmsRole</a></code> | <code>java.lang.String</code> | The ARN of the KMS Key or Alias Key role used to define permissions on KMS Key usage. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#tags GroundstationMissionProfile#tags}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.telemetrySinkConfigArn">telemetrySinkConfigArn</a></code> | <code>java.lang.String</code> | ARN of a Config resource of type TelemetrySinkConfig used for telemetry data sink configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataflowEdges`<sup>Required</sup> <a name="dataflowEdges" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.dataflowEdges"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#dataflow_edges GroundstationMissionProfile#dataflow_edges}.

---

##### `minimumViableContactDurationSeconds`<sup>Required</sup> <a name="minimumViableContactDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.minimumViableContactDurationSeconds"></a>

- *Type:* java.lang.Number

Visibilities with shorter duration than the specified minimum viable contact duration will be ignored when searching for available contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#minimum_viable_contact_duration_seconds GroundstationMissionProfile#minimum_viable_contact_duration_seconds}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A name used to identify a mission profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#name GroundstationMissionProfile#name}

---

##### `trackingConfigArn`<sup>Required</sup> <a name="trackingConfigArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.trackingConfigArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#tracking_config_arn GroundstationMissionProfile#tracking_config_arn}.

---

##### `contactPostPassDurationSeconds`<sup>Optional</sup> <a name="contactPostPassDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.contactPostPassDurationSeconds"></a>

- *Type:* java.lang.Number

Post-pass time needed after the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#contact_post_pass_duration_seconds GroundstationMissionProfile#contact_post_pass_duration_seconds}

---

##### `contactPrePassDurationSeconds`<sup>Optional</sup> <a name="contactPrePassDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.contactPrePassDurationSeconds"></a>

- *Type:* java.lang.Number

Pre-pass time needed before the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#contact_pre_pass_duration_seconds GroundstationMissionProfile#contact_pre_pass_duration_seconds}

---

##### `streamsKmsKey`<sup>Optional</sup> <a name="streamsKmsKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.streamsKmsKey"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a>

The ARN of a KMS Key used for encrypting data during transmission from the source to destination locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#streams_kms_key GroundstationMissionProfile#streams_kms_key}

---

##### `streamsKmsRole`<sup>Optional</sup> <a name="streamsKmsRole" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.streamsKmsRole"></a>

- *Type:* java.lang.String

The ARN of the KMS Key or Alias Key role used to define permissions on KMS Key usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#streams_kms_role GroundstationMissionProfile#streams_kms_role}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#tags GroundstationMissionProfile#tags}.

---

##### `telemetrySinkConfigArn`<sup>Optional</sup> <a name="telemetrySinkConfigArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.telemetrySinkConfigArn"></a>

- *Type:* java.lang.String

ARN of a Config resource of type TelemetrySinkConfig used for telemetry data sink configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#telemetry_sink_config_arn GroundstationMissionProfile#telemetry_sink_config_arn}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putDataflowEdges">putDataflowEdges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putStreamsKmsKey">putStreamsKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetContactPostPassDurationSeconds">resetContactPostPassDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetContactPrePassDurationSeconds">resetContactPrePassDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetStreamsKmsKey">resetStreamsKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetStreamsKmsRole">resetStreamsKmsRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetTelemetrySinkConfigArn">resetTelemetrySinkConfigArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataflowEdges` <a name="putDataflowEdges" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putDataflowEdges"></a>

```java
public void putDataflowEdges(IResolvable|java.util.List<GroundstationMissionProfileDataflowEdges> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putDataflowEdges.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>>

---

##### `putStreamsKmsKey` <a name="putStreamsKmsKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putStreamsKmsKey"></a>

```java
public void putStreamsKmsKey(GroundstationMissionProfileStreamsKmsKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putStreamsKmsKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<GroundstationMissionProfileTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>>

---

##### `resetContactPostPassDurationSeconds` <a name="resetContactPostPassDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetContactPostPassDurationSeconds"></a>

```java
public void resetContactPostPassDurationSeconds()
```

##### `resetContactPrePassDurationSeconds` <a name="resetContactPrePassDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetContactPrePassDurationSeconds"></a>

```java
public void resetContactPrePassDurationSeconds()
```

##### `resetStreamsKmsKey` <a name="resetStreamsKmsKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetStreamsKmsKey"></a>

```java
public void resetStreamsKmsKey()
```

##### `resetStreamsKmsRole` <a name="resetStreamsKmsRole" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetStreamsKmsRole"></a>

```java
public void resetStreamsKmsRole()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetTags"></a>

```java
public void resetTags()
```

##### `resetTelemetrySinkConfigArn` <a name="resetTelemetrySinkConfigArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetTelemetrySinkConfigArn"></a>

```java
public void resetTelemetrySinkConfigArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GroundstationMissionProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isConstruct"></a>

```java
import io.cdktn.providers.awscc.groundstation_mission_profile.GroundstationMissionProfile;

GroundstationMissionProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.groundstation_mission_profile.GroundstationMissionProfile;

GroundstationMissionProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.groundstation_mission_profile.GroundstationMissionProfile;

GroundstationMissionProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.groundstation_mission_profile.GroundstationMissionProfile;

GroundstationMissionProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GroundstationMissionProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GroundstationMissionProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GroundstationMissionProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GroundstationMissionProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GroundstationMissionProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.dataflowEdges">dataflowEdges</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList">GroundstationMissionProfileDataflowEdgesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.missionProfileId">missionProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsKey">streamsKmsKey</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference">GroundstationMissionProfileStreamsKmsKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList">GroundstationMissionProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPostPassDurationSecondsInput">contactPostPassDurationSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPrePassDurationSecondsInput">contactPrePassDurationSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.dataflowEdgesInput">dataflowEdgesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.minimumViableContactDurationSecondsInput">minimumViableContactDurationSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsKeyInput">streamsKmsKeyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsRoleInput">streamsKmsRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.telemetrySinkConfigArnInput">telemetrySinkConfigArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.trackingConfigArnInput">trackingConfigArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPostPassDurationSeconds">contactPostPassDurationSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPrePassDurationSeconds">contactPrePassDurationSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.minimumViableContactDurationSeconds">minimumViableContactDurationSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsRole">streamsKmsRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.telemetrySinkConfigArn">telemetrySinkConfigArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.trackingConfigArn">trackingConfigArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `dataflowEdges`<sup>Required</sup> <a name="dataflowEdges" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.dataflowEdges"></a>

```java
public GroundstationMissionProfileDataflowEdgesList getDataflowEdges();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList">GroundstationMissionProfileDataflowEdgesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `missionProfileId`<sup>Required</sup> <a name="missionProfileId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.missionProfileId"></a>

```java
public java.lang.String getMissionProfileId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `streamsKmsKey`<sup>Required</sup> <a name="streamsKmsKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsKey"></a>

```java
public GroundstationMissionProfileStreamsKmsKeyOutputReference getStreamsKmsKey();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference">GroundstationMissionProfileStreamsKmsKeyOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.tags"></a>

```java
public GroundstationMissionProfileTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList">GroundstationMissionProfileTagsList</a>

---

##### `contactPostPassDurationSecondsInput`<sup>Optional</sup> <a name="contactPostPassDurationSecondsInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPostPassDurationSecondsInput"></a>

```java
public java.lang.Number getContactPostPassDurationSecondsInput();
```

- *Type:* java.lang.Number

---

##### `contactPrePassDurationSecondsInput`<sup>Optional</sup> <a name="contactPrePassDurationSecondsInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPrePassDurationSecondsInput"></a>

```java
public java.lang.Number getContactPrePassDurationSecondsInput();
```

- *Type:* java.lang.Number

---

##### `dataflowEdgesInput`<sup>Optional</sup> <a name="dataflowEdgesInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.dataflowEdgesInput"></a>

```java
public IResolvable|java.util.List<GroundstationMissionProfileDataflowEdges> getDataflowEdgesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>>

---

##### `minimumViableContactDurationSecondsInput`<sup>Optional</sup> <a name="minimumViableContactDurationSecondsInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.minimumViableContactDurationSecondsInput"></a>

```java
public java.lang.Number getMinimumViableContactDurationSecondsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `streamsKmsKeyInput`<sup>Optional</sup> <a name="streamsKmsKeyInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsKeyInput"></a>

```java
public IResolvable|GroundstationMissionProfileStreamsKmsKey getStreamsKmsKeyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a>

---

##### `streamsKmsRoleInput`<sup>Optional</sup> <a name="streamsKmsRoleInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsRoleInput"></a>

```java
public java.lang.String getStreamsKmsRoleInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.tagsInput"></a>

```java
public IResolvable|java.util.List<GroundstationMissionProfileTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>>

---

##### `telemetrySinkConfigArnInput`<sup>Optional</sup> <a name="telemetrySinkConfigArnInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.telemetrySinkConfigArnInput"></a>

```java
public java.lang.String getTelemetrySinkConfigArnInput();
```

- *Type:* java.lang.String

---

##### `trackingConfigArnInput`<sup>Optional</sup> <a name="trackingConfigArnInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.trackingConfigArnInput"></a>

```java
public java.lang.String getTrackingConfigArnInput();
```

- *Type:* java.lang.String

---

##### `contactPostPassDurationSeconds`<sup>Required</sup> <a name="contactPostPassDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPostPassDurationSeconds"></a>

```java
public java.lang.Number getContactPostPassDurationSeconds();
```

- *Type:* java.lang.Number

---

##### `contactPrePassDurationSeconds`<sup>Required</sup> <a name="contactPrePassDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPrePassDurationSeconds"></a>

```java
public java.lang.Number getContactPrePassDurationSeconds();
```

- *Type:* java.lang.Number

---

##### `minimumViableContactDurationSeconds`<sup>Required</sup> <a name="minimumViableContactDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.minimumViableContactDurationSeconds"></a>

```java
public java.lang.Number getMinimumViableContactDurationSeconds();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `streamsKmsRole`<sup>Required</sup> <a name="streamsKmsRole" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsRole"></a>

```java
public java.lang.String getStreamsKmsRole();
```

- *Type:* java.lang.String

---

##### `telemetrySinkConfigArn`<sup>Required</sup> <a name="telemetrySinkConfigArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.telemetrySinkConfigArn"></a>

```java
public java.lang.String getTelemetrySinkConfigArn();
```

- *Type:* java.lang.String

---

##### `trackingConfigArn`<sup>Required</sup> <a name="trackingConfigArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.trackingConfigArn"></a>

```java
public java.lang.String getTrackingConfigArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GroundstationMissionProfileConfig <a name="GroundstationMissionProfileConfig" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_mission_profile.GroundstationMissionProfileConfig;

GroundstationMissionProfileConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataflowEdges(IResolvable|java.util.List<GroundstationMissionProfileDataflowEdges>)
    .minimumViableContactDurationSeconds(java.lang.Number)
    .name(java.lang.String)
    .trackingConfigArn(java.lang.String)
//  .contactPostPassDurationSeconds(java.lang.Number)
//  .contactPrePassDurationSeconds(java.lang.Number)
//  .streamsKmsKey(GroundstationMissionProfileStreamsKmsKey)
//  .streamsKmsRole(java.lang.String)
//  .tags(IResolvable|java.util.List<GroundstationMissionProfileTags>)
//  .telemetrySinkConfigArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.dataflowEdges">dataflowEdges</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#dataflow_edges GroundstationMissionProfile#dataflow_edges}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.minimumViableContactDurationSeconds">minimumViableContactDurationSeconds</a></code> | <code>java.lang.Number</code> | Visibilities with shorter duration than the specified minimum viable contact duration will be ignored when searching for available contacts. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.name">name</a></code> | <code>java.lang.String</code> | A name used to identify a mission profile. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.trackingConfigArn">trackingConfigArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#tracking_config_arn GroundstationMissionProfile#tracking_config_arn}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.contactPostPassDurationSeconds">contactPostPassDurationSeconds</a></code> | <code>java.lang.Number</code> | Post-pass time needed after the contact. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.contactPrePassDurationSeconds">contactPrePassDurationSeconds</a></code> | <code>java.lang.Number</code> | Pre-pass time needed before the contact. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.streamsKmsKey">streamsKmsKey</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a></code> | The ARN of a KMS Key used for encrypting data during transmission from the source to destination locations. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.streamsKmsRole">streamsKmsRole</a></code> | <code>java.lang.String</code> | The ARN of the KMS Key or Alias Key role used to define permissions on KMS Key usage. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#tags GroundstationMissionProfile#tags}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.telemetrySinkConfigArn">telemetrySinkConfigArn</a></code> | <code>java.lang.String</code> | ARN of a Config resource of type TelemetrySinkConfig used for telemetry data sink configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataflowEdges`<sup>Required</sup> <a name="dataflowEdges" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.dataflowEdges"></a>

```java
public IResolvable|java.util.List<GroundstationMissionProfileDataflowEdges> getDataflowEdges();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#dataflow_edges GroundstationMissionProfile#dataflow_edges}.

---

##### `minimumViableContactDurationSeconds`<sup>Required</sup> <a name="minimumViableContactDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.minimumViableContactDurationSeconds"></a>

```java
public java.lang.Number getMinimumViableContactDurationSeconds();
```

- *Type:* java.lang.Number

Visibilities with shorter duration than the specified minimum viable contact duration will be ignored when searching for available contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#minimum_viable_contact_duration_seconds GroundstationMissionProfile#minimum_viable_contact_duration_seconds}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A name used to identify a mission profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#name GroundstationMissionProfile#name}

---

##### `trackingConfigArn`<sup>Required</sup> <a name="trackingConfigArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.trackingConfigArn"></a>

```java
public java.lang.String getTrackingConfigArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#tracking_config_arn GroundstationMissionProfile#tracking_config_arn}.

---

##### `contactPostPassDurationSeconds`<sup>Optional</sup> <a name="contactPostPassDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.contactPostPassDurationSeconds"></a>

```java
public java.lang.Number getContactPostPassDurationSeconds();
```

- *Type:* java.lang.Number

Post-pass time needed after the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#contact_post_pass_duration_seconds GroundstationMissionProfile#contact_post_pass_duration_seconds}

---

##### `contactPrePassDurationSeconds`<sup>Optional</sup> <a name="contactPrePassDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.contactPrePassDurationSeconds"></a>

```java
public java.lang.Number getContactPrePassDurationSeconds();
```

- *Type:* java.lang.Number

Pre-pass time needed before the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#contact_pre_pass_duration_seconds GroundstationMissionProfile#contact_pre_pass_duration_seconds}

---

##### `streamsKmsKey`<sup>Optional</sup> <a name="streamsKmsKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.streamsKmsKey"></a>

```java
public GroundstationMissionProfileStreamsKmsKey getStreamsKmsKey();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a>

The ARN of a KMS Key used for encrypting data during transmission from the source to destination locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#streams_kms_key GroundstationMissionProfile#streams_kms_key}

---

##### `streamsKmsRole`<sup>Optional</sup> <a name="streamsKmsRole" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.streamsKmsRole"></a>

```java
public java.lang.String getStreamsKmsRole();
```

- *Type:* java.lang.String

The ARN of the KMS Key or Alias Key role used to define permissions on KMS Key usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#streams_kms_role GroundstationMissionProfile#streams_kms_role}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.tags"></a>

```java
public IResolvable|java.util.List<GroundstationMissionProfileTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#tags GroundstationMissionProfile#tags}.

---

##### `telemetrySinkConfigArn`<sup>Optional</sup> <a name="telemetrySinkConfigArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.telemetrySinkConfigArn"></a>

```java
public java.lang.String getTelemetrySinkConfigArn();
```

- *Type:* java.lang.String

ARN of a Config resource of type TelemetrySinkConfig used for telemetry data sink configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#telemetry_sink_config_arn GroundstationMissionProfile#telemetry_sink_config_arn}

---

### GroundstationMissionProfileDataflowEdges <a name="GroundstationMissionProfileDataflowEdges" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_mission_profile.GroundstationMissionProfileDataflowEdges;

GroundstationMissionProfileDataflowEdges.builder()
//  .destination(java.lang.String)
//  .source(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges.property.destination">destination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#destination GroundstationMissionProfile#destination}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges.property.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#source GroundstationMissionProfile#source}. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#destination GroundstationMissionProfile#destination}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#source GroundstationMissionProfile#source}.

---

### GroundstationMissionProfileStreamsKmsKey <a name="GroundstationMissionProfileStreamsKmsKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_mission_profile.GroundstationMissionProfileStreamsKmsKey;

GroundstationMissionProfileStreamsKmsKey.builder()
//  .kmsAliasArn(java.lang.String)
//  .kmsAliasName(java.lang.String)
//  .kmsKeyArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.property.kmsAliasArn">kmsAliasArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#kms_alias_arn GroundstationMissionProfile#kms_alias_arn}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.property.kmsAliasName">kmsAliasName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#kms_alias_name GroundstationMissionProfile#kms_alias_name}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#kms_key_arn GroundstationMissionProfile#kms_key_arn}. |

---

##### `kmsAliasArn`<sup>Optional</sup> <a name="kmsAliasArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.property.kmsAliasArn"></a>

```java
public java.lang.String getKmsAliasArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#kms_alias_arn GroundstationMissionProfile#kms_alias_arn}.

---

##### `kmsAliasName`<sup>Optional</sup> <a name="kmsAliasName" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.property.kmsAliasName"></a>

```java
public java.lang.String getKmsAliasName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#kms_alias_name GroundstationMissionProfile#kms_alias_name}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#kms_key_arn GroundstationMissionProfile#kms_key_arn}.

---

### GroundstationMissionProfileTags <a name="GroundstationMissionProfileTags" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_mission_profile.GroundstationMissionProfileTags;

GroundstationMissionProfileTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#key GroundstationMissionProfile#key}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#value GroundstationMissionProfile#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#key GroundstationMissionProfile#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#value GroundstationMissionProfile#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### GroundstationMissionProfileDataflowEdgesList <a name="GroundstationMissionProfileDataflowEdgesList" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_mission_profile.GroundstationMissionProfileDataflowEdgesList;

new GroundstationMissionProfileDataflowEdgesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.get"></a>

```java
public GroundstationMissionProfileDataflowEdgesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GroundstationMissionProfileDataflowEdges> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>>

---


### GroundstationMissionProfileDataflowEdgesOutputReference <a name="GroundstationMissionProfileDataflowEdgesOutputReference" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_mission_profile.GroundstationMissionProfileDataflowEdgesOutputReference;

new GroundstationMissionProfileDataflowEdgesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestination` <a name="resetDestination" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resetDestination"></a>

```java
public void resetDestination()
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resetSource"></a>

```java
public void resetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.internalValue"></a>

```java
public IResolvable|GroundstationMissionProfileDataflowEdges getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>

---


### GroundstationMissionProfileStreamsKmsKeyOutputReference <a name="GroundstationMissionProfileStreamsKmsKeyOutputReference" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_mission_profile.GroundstationMissionProfileStreamsKmsKeyOutputReference;

new GroundstationMissionProfileStreamsKmsKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resetKmsAliasArn">resetKmsAliasArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resetKmsAliasName">resetKmsAliasName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsAliasArn` <a name="resetKmsAliasArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resetKmsAliasArn"></a>

```java
public void resetKmsAliasArn()
```

##### `resetKmsAliasName` <a name="resetKmsAliasName" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resetKmsAliasName"></a>

```java
public void resetKmsAliasName()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasArnInput">kmsAliasArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasNameInput">kmsAliasNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasArn">kmsAliasArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasName">kmsAliasName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsAliasArnInput`<sup>Optional</sup> <a name="kmsAliasArnInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasArnInput"></a>

```java
public java.lang.String getKmsAliasArnInput();
```

- *Type:* java.lang.String

---

##### `kmsAliasNameInput`<sup>Optional</sup> <a name="kmsAliasNameInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasNameInput"></a>

```java
public java.lang.String getKmsAliasNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `kmsAliasArn`<sup>Required</sup> <a name="kmsAliasArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasArn"></a>

```java
public java.lang.String getKmsAliasArn();
```

- *Type:* java.lang.String

---

##### `kmsAliasName`<sup>Required</sup> <a name="kmsAliasName" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasName"></a>

```java
public java.lang.String getKmsAliasName();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.internalValue"></a>

```java
public IResolvable|GroundstationMissionProfileStreamsKmsKey getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a>

---


### GroundstationMissionProfileTagsList <a name="GroundstationMissionProfileTagsList" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_mission_profile.GroundstationMissionProfileTagsList;

new GroundstationMissionProfileTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.get"></a>

```java
public GroundstationMissionProfileTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GroundstationMissionProfileTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>>

---


### GroundstationMissionProfileTagsOutputReference <a name="GroundstationMissionProfileTagsOutputReference" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_mission_profile.GroundstationMissionProfileTagsOutputReference;

new GroundstationMissionProfileTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|GroundstationMissionProfileTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>

---



