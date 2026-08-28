# `nimblestudioLaunchProfile` Submodule <a name="`nimblestudioLaunchProfile` Submodule" id="@cdktn/provider-awscc.nimblestudioLaunchProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NimblestudioLaunchProfile <a name="NimblestudioLaunchProfile" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile awscc_nimblestudio_launch_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_launch_profile.NimblestudioLaunchProfile;

NimblestudioLaunchProfile.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .ec2SubnetIds(java.util.List<java.lang.String>)
    .launchProfileProtocolVersions(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .streamConfiguration(NimblestudioLaunchProfileStreamConfiguration)
    .studioComponentIds(java.util.List<java.lang.String>)
    .studioId(java.lang.String)
//  .description(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.ec2SubnetIds">ec2SubnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#ec_2_subnet_ids NimblestudioLaunchProfile#ec_2_subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.launchProfileProtocolVersions">launchProfileProtocolVersions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#launch_profile_protocol_versions NimblestudioLaunchProfile#launch_profile_protocol_versions}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#name NimblestudioLaunchProfile#name}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.streamConfiguration">streamConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration">NimblestudioLaunchProfileStreamConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#stream_configuration NimblestudioLaunchProfile#stream_configuration}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.studioComponentIds">studioComponentIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#studio_component_ids NimblestudioLaunchProfile#studio_component_ids}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.studioId">studioId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#studio_id NimblestudioLaunchProfile#studio_id}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#description NimblestudioLaunchProfile#description}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#tags NimblestudioLaunchProfile#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ec2SubnetIds`<sup>Required</sup> <a name="ec2SubnetIds" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.ec2SubnetIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#ec_2_subnet_ids NimblestudioLaunchProfile#ec_2_subnet_ids}.

---

##### `launchProfileProtocolVersions`<sup>Required</sup> <a name="launchProfileProtocolVersions" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.launchProfileProtocolVersions"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#launch_profile_protocol_versions NimblestudioLaunchProfile#launch_profile_protocol_versions}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#name NimblestudioLaunchProfile#name}.

---

##### `streamConfiguration`<sup>Required</sup> <a name="streamConfiguration" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.streamConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration">NimblestudioLaunchProfileStreamConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#stream_configuration NimblestudioLaunchProfile#stream_configuration}.

---

##### `studioComponentIds`<sup>Required</sup> <a name="studioComponentIds" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.studioComponentIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#studio_component_ids NimblestudioLaunchProfile#studio_component_ids}.

---

##### `studioId`<sup>Required</sup> <a name="studioId" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.studioId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#studio_id NimblestudioLaunchProfile#studio_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#description NimblestudioLaunchProfile#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#tags NimblestudioLaunchProfile#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.putStreamConfiguration">putStreamConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStreamConfiguration` <a name="putStreamConfiguration" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.putStreamConfiguration"></a>

```java
public void putStreamConfiguration(NimblestudioLaunchProfileStreamConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.putStreamConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration">NimblestudioLaunchProfileStreamConfiguration</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NimblestudioLaunchProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.isConstruct"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_launch_profile.NimblestudioLaunchProfile;

NimblestudioLaunchProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_launch_profile.NimblestudioLaunchProfile;

NimblestudioLaunchProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_launch_profile.NimblestudioLaunchProfile;

NimblestudioLaunchProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_launch_profile.NimblestudioLaunchProfile;

NimblestudioLaunchProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NimblestudioLaunchProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NimblestudioLaunchProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NimblestudioLaunchProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NimblestudioLaunchProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NimblestudioLaunchProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.launchProfileId">launchProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.streamConfiguration">streamConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference">NimblestudioLaunchProfileStreamConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.ec2SubnetIdsInput">ec2SubnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.launchProfileProtocolVersionsInput">launchProfileProtocolVersionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.streamConfigurationInput">streamConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration">NimblestudioLaunchProfileStreamConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.studioComponentIdsInput">studioComponentIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.studioIdInput">studioIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.ec2SubnetIds">ec2SubnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.launchProfileProtocolVersions">launchProfileProtocolVersions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.studioComponentIds">studioComponentIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.studioId">studioId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `launchProfileId`<sup>Required</sup> <a name="launchProfileId" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.launchProfileId"></a>

```java
public java.lang.String getLaunchProfileId();
```

- *Type:* java.lang.String

---

##### `streamConfiguration`<sup>Required</sup> <a name="streamConfiguration" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.streamConfiguration"></a>

```java
public NimblestudioLaunchProfileStreamConfigurationOutputReference getStreamConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference">NimblestudioLaunchProfileStreamConfigurationOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `ec2SubnetIdsInput`<sup>Optional</sup> <a name="ec2SubnetIdsInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.ec2SubnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getEc2SubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `launchProfileProtocolVersionsInput`<sup>Optional</sup> <a name="launchProfileProtocolVersionsInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.launchProfileProtocolVersionsInput"></a>

```java
public java.util.List<java.lang.String> getLaunchProfileProtocolVersionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `streamConfigurationInput`<sup>Optional</sup> <a name="streamConfigurationInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.streamConfigurationInput"></a>

```java
public IResolvable|NimblestudioLaunchProfileStreamConfiguration getStreamConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration">NimblestudioLaunchProfileStreamConfiguration</a>

---

##### `studioComponentIdsInput`<sup>Optional</sup> <a name="studioComponentIdsInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.studioComponentIdsInput"></a>

```java
public java.util.List<java.lang.String> getStudioComponentIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `studioIdInput`<sup>Optional</sup> <a name="studioIdInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.studioIdInput"></a>

```java
public java.lang.String getStudioIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `ec2SubnetIds`<sup>Required</sup> <a name="ec2SubnetIds" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.ec2SubnetIds"></a>

```java
public java.util.List<java.lang.String> getEc2SubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `launchProfileProtocolVersions`<sup>Required</sup> <a name="launchProfileProtocolVersions" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.launchProfileProtocolVersions"></a>

```java
public java.util.List<java.lang.String> getLaunchProfileProtocolVersions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `studioComponentIds`<sup>Required</sup> <a name="studioComponentIds" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.studioComponentIds"></a>

```java
public java.util.List<java.lang.String> getStudioComponentIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `studioId`<sup>Required</sup> <a name="studioId" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.studioId"></a>

```java
public java.lang.String getStudioId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NimblestudioLaunchProfileConfig <a name="NimblestudioLaunchProfileConfig" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_launch_profile.NimblestudioLaunchProfileConfig;

NimblestudioLaunchProfileConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .ec2SubnetIds(java.util.List<java.lang.String>)
    .launchProfileProtocolVersions(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .streamConfiguration(NimblestudioLaunchProfileStreamConfiguration)
    .studioComponentIds(java.util.List<java.lang.String>)
    .studioId(java.lang.String)
//  .description(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.ec2SubnetIds">ec2SubnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#ec_2_subnet_ids NimblestudioLaunchProfile#ec_2_subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.launchProfileProtocolVersions">launchProfileProtocolVersions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#launch_profile_protocol_versions NimblestudioLaunchProfile#launch_profile_protocol_versions}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#name NimblestudioLaunchProfile#name}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.streamConfiguration">streamConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration">NimblestudioLaunchProfileStreamConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#stream_configuration NimblestudioLaunchProfile#stream_configuration}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.studioComponentIds">studioComponentIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#studio_component_ids NimblestudioLaunchProfile#studio_component_ids}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.studioId">studioId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#studio_id NimblestudioLaunchProfile#studio_id}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#description NimblestudioLaunchProfile#description}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#tags NimblestudioLaunchProfile#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ec2SubnetIds`<sup>Required</sup> <a name="ec2SubnetIds" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.ec2SubnetIds"></a>

```java
public java.util.List<java.lang.String> getEc2SubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#ec_2_subnet_ids NimblestudioLaunchProfile#ec_2_subnet_ids}.

---

##### `launchProfileProtocolVersions`<sup>Required</sup> <a name="launchProfileProtocolVersions" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.launchProfileProtocolVersions"></a>

```java
public java.util.List<java.lang.String> getLaunchProfileProtocolVersions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#launch_profile_protocol_versions NimblestudioLaunchProfile#launch_profile_protocol_versions}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#name NimblestudioLaunchProfile#name}.

---

##### `streamConfiguration`<sup>Required</sup> <a name="streamConfiguration" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.streamConfiguration"></a>

```java
public NimblestudioLaunchProfileStreamConfiguration getStreamConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration">NimblestudioLaunchProfileStreamConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#stream_configuration NimblestudioLaunchProfile#stream_configuration}.

---

##### `studioComponentIds`<sup>Required</sup> <a name="studioComponentIds" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.studioComponentIds"></a>

```java
public java.util.List<java.lang.String> getStudioComponentIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#studio_component_ids NimblestudioLaunchProfile#studio_component_ids}.

---

##### `studioId`<sup>Required</sup> <a name="studioId" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.studioId"></a>

```java
public java.lang.String getStudioId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#studio_id NimblestudioLaunchProfile#studio_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#description NimblestudioLaunchProfile#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#tags NimblestudioLaunchProfile#tags}.

---

### NimblestudioLaunchProfileStreamConfiguration <a name="NimblestudioLaunchProfileStreamConfiguration" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_launch_profile.NimblestudioLaunchProfileStreamConfiguration;

NimblestudioLaunchProfileStreamConfiguration.builder()
    .clipboardMode(java.lang.String)
    .ec2InstanceTypes(java.util.List<java.lang.String>)
    .streamingImageIds(java.util.List<java.lang.String>)
//  .automaticTerminationMode(java.lang.String)
//  .maxSessionLengthInMinutes(java.lang.Number)
//  .maxStoppedSessionLengthInMinutes(java.lang.Number)
//  .sessionBackup(NimblestudioLaunchProfileStreamConfigurationSessionBackup)
//  .sessionPersistenceMode(java.lang.String)
//  .sessionStorage(NimblestudioLaunchProfileStreamConfigurationSessionStorage)
//  .volumeConfiguration(NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.clipboardMode">clipboardMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#clipboard_mode NimblestudioLaunchProfile#clipboard_mode}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.ec2InstanceTypes">ec2InstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#ec_2_instance_types NimblestudioLaunchProfile#ec_2_instance_types}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.streamingImageIds">streamingImageIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#streaming_image_ids NimblestudioLaunchProfile#streaming_image_ids}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.automaticTerminationMode">automaticTerminationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#automatic_termination_mode NimblestudioLaunchProfile#automatic_termination_mode}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.maxSessionLengthInMinutes">maxSessionLengthInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#max_session_length_in_minutes NimblestudioLaunchProfile#max_session_length_in_minutes}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.maxStoppedSessionLengthInMinutes">maxStoppedSessionLengthInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#max_stopped_session_length_in_minutes NimblestudioLaunchProfile#max_stopped_session_length_in_minutes}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.sessionBackup">sessionBackup</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup">NimblestudioLaunchProfileStreamConfigurationSessionBackup</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#session_backup NimblestudioLaunchProfile#session_backup}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.sessionPersistenceMode">sessionPersistenceMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#session_persistence_mode NimblestudioLaunchProfile#session_persistence_mode}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.sessionStorage">sessionStorage</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage">NimblestudioLaunchProfileStreamConfigurationSessionStorage</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#session_storage NimblestudioLaunchProfile#session_storage}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.volumeConfiguration">volumeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration">NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#volume_configuration NimblestudioLaunchProfile#volume_configuration}. |

---

##### `clipboardMode`<sup>Required</sup> <a name="clipboardMode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.clipboardMode"></a>

```java
public java.lang.String getClipboardMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#clipboard_mode NimblestudioLaunchProfile#clipboard_mode}.

---

##### `ec2InstanceTypes`<sup>Required</sup> <a name="ec2InstanceTypes" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.ec2InstanceTypes"></a>

```java
public java.util.List<java.lang.String> getEc2InstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#ec_2_instance_types NimblestudioLaunchProfile#ec_2_instance_types}.

---

##### `streamingImageIds`<sup>Required</sup> <a name="streamingImageIds" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.streamingImageIds"></a>

```java
public java.util.List<java.lang.String> getStreamingImageIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#streaming_image_ids NimblestudioLaunchProfile#streaming_image_ids}.

---

##### `automaticTerminationMode`<sup>Optional</sup> <a name="automaticTerminationMode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.automaticTerminationMode"></a>

```java
public java.lang.String getAutomaticTerminationMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#automatic_termination_mode NimblestudioLaunchProfile#automatic_termination_mode}.

---

##### `maxSessionLengthInMinutes`<sup>Optional</sup> <a name="maxSessionLengthInMinutes" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.maxSessionLengthInMinutes"></a>

```java
public java.lang.Number getMaxSessionLengthInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#max_session_length_in_minutes NimblestudioLaunchProfile#max_session_length_in_minutes}.

---

##### `maxStoppedSessionLengthInMinutes`<sup>Optional</sup> <a name="maxStoppedSessionLengthInMinutes" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.maxStoppedSessionLengthInMinutes"></a>

```java
public java.lang.Number getMaxStoppedSessionLengthInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#max_stopped_session_length_in_minutes NimblestudioLaunchProfile#max_stopped_session_length_in_minutes}.

---

##### `sessionBackup`<sup>Optional</sup> <a name="sessionBackup" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.sessionBackup"></a>

```java
public NimblestudioLaunchProfileStreamConfigurationSessionBackup getSessionBackup();
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup">NimblestudioLaunchProfileStreamConfigurationSessionBackup</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#session_backup NimblestudioLaunchProfile#session_backup}.

---

##### `sessionPersistenceMode`<sup>Optional</sup> <a name="sessionPersistenceMode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.sessionPersistenceMode"></a>

```java
public java.lang.String getSessionPersistenceMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#session_persistence_mode NimblestudioLaunchProfile#session_persistence_mode}.

---

##### `sessionStorage`<sup>Optional</sup> <a name="sessionStorage" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.sessionStorage"></a>

```java
public NimblestudioLaunchProfileStreamConfigurationSessionStorage getSessionStorage();
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage">NimblestudioLaunchProfileStreamConfigurationSessionStorage</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#session_storage NimblestudioLaunchProfile#session_storage}.

---

##### `volumeConfiguration`<sup>Optional</sup> <a name="volumeConfiguration" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.volumeConfiguration"></a>

```java
public NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration getVolumeConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration">NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#volume_configuration NimblestudioLaunchProfile#volume_configuration}.

---

### NimblestudioLaunchProfileStreamConfigurationSessionBackup <a name="NimblestudioLaunchProfileStreamConfigurationSessionBackup" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_launch_profile.NimblestudioLaunchProfileStreamConfigurationSessionBackup;

NimblestudioLaunchProfileStreamConfigurationSessionBackup.builder()
//  .maxBackupsToRetain(java.lang.Number)
//  .mode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup.property.maxBackupsToRetain">maxBackupsToRetain</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#max_backups_to_retain NimblestudioLaunchProfile#max_backups_to_retain}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#mode NimblestudioLaunchProfile#mode}. |

---

##### `maxBackupsToRetain`<sup>Optional</sup> <a name="maxBackupsToRetain" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup.property.maxBackupsToRetain"></a>

```java
public java.lang.Number getMaxBackupsToRetain();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#max_backups_to_retain NimblestudioLaunchProfile#max_backups_to_retain}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#mode NimblestudioLaunchProfile#mode}.

---

### NimblestudioLaunchProfileStreamConfigurationSessionStorage <a name="NimblestudioLaunchProfileStreamConfigurationSessionStorage" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_launch_profile.NimblestudioLaunchProfileStreamConfigurationSessionStorage;

NimblestudioLaunchProfileStreamConfigurationSessionStorage.builder()
//  .mode(java.util.List<java.lang.String>)
//  .root(NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage.property.mode">mode</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#mode NimblestudioLaunchProfile#mode}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage.property.root">root</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot">NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#root NimblestudioLaunchProfile#root}. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage.property.mode"></a>

```java
public java.util.List<java.lang.String> getMode();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#mode NimblestudioLaunchProfile#mode}.

---

##### `root`<sup>Optional</sup> <a name="root" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage.property.root"></a>

```java
public NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot getRoot();
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot">NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#root NimblestudioLaunchProfile#root}.

---

### NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot <a name="NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_launch_profile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot;

NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot.builder()
//  .linux(java.lang.String)
//  .windows(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot.property.linux">linux</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#linux NimblestudioLaunchProfile#linux}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot.property.windows">windows</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#windows NimblestudioLaunchProfile#windows}. |

---

##### `linux`<sup>Optional</sup> <a name="linux" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot.property.linux"></a>

```java
public java.lang.String getLinux();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#linux NimblestudioLaunchProfile#linux}.

---

##### `windows`<sup>Optional</sup> <a name="windows" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot.property.windows"></a>

```java
public java.lang.String getWindows();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#windows NimblestudioLaunchProfile#windows}.

---

### NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration <a name="NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_launch_profile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration;

NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration.builder()
//  .iops(java.lang.Number)
//  .size(java.lang.Number)
//  .throughput(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration.property.iops">iops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#iops NimblestudioLaunchProfile#iops}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#size NimblestudioLaunchProfile#size}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#throughput NimblestudioLaunchProfile#throughput}. |

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#iops NimblestudioLaunchProfile#iops}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#size NimblestudioLaunchProfile#size}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_launch_profile#throughput NimblestudioLaunchProfile#throughput}.

---

## Classes <a name="Classes" id="Classes"></a>

### NimblestudioLaunchProfileStreamConfigurationOutputReference <a name="NimblestudioLaunchProfileStreamConfigurationOutputReference" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_launch_profile.NimblestudioLaunchProfileStreamConfigurationOutputReference;

new NimblestudioLaunchProfileStreamConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.putSessionBackup">putSessionBackup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.putSessionStorage">putSessionStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.putVolumeConfiguration">putVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetAutomaticTerminationMode">resetAutomaticTerminationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetMaxSessionLengthInMinutes">resetMaxSessionLengthInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetMaxStoppedSessionLengthInMinutes">resetMaxStoppedSessionLengthInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetSessionBackup">resetSessionBackup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetSessionPersistenceMode">resetSessionPersistenceMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetSessionStorage">resetSessionStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetVolumeConfiguration">resetVolumeConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSessionBackup` <a name="putSessionBackup" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.putSessionBackup"></a>

```java
public void putSessionBackup(NimblestudioLaunchProfileStreamConfigurationSessionBackup value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.putSessionBackup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup">NimblestudioLaunchProfileStreamConfigurationSessionBackup</a>

---

##### `putSessionStorage` <a name="putSessionStorage" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.putSessionStorage"></a>

```java
public void putSessionStorage(NimblestudioLaunchProfileStreamConfigurationSessionStorage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.putSessionStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage">NimblestudioLaunchProfileStreamConfigurationSessionStorage</a>

---

##### `putVolumeConfiguration` <a name="putVolumeConfiguration" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.putVolumeConfiguration"></a>

```java
public void putVolumeConfiguration(NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.putVolumeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration">NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration</a>

---

##### `resetAutomaticTerminationMode` <a name="resetAutomaticTerminationMode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetAutomaticTerminationMode"></a>

```java
public void resetAutomaticTerminationMode()
```

##### `resetMaxSessionLengthInMinutes` <a name="resetMaxSessionLengthInMinutes" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetMaxSessionLengthInMinutes"></a>

```java
public void resetMaxSessionLengthInMinutes()
```

##### `resetMaxStoppedSessionLengthInMinutes` <a name="resetMaxStoppedSessionLengthInMinutes" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetMaxStoppedSessionLengthInMinutes"></a>

```java
public void resetMaxStoppedSessionLengthInMinutes()
```

##### `resetSessionBackup` <a name="resetSessionBackup" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetSessionBackup"></a>

```java
public void resetSessionBackup()
```

##### `resetSessionPersistenceMode` <a name="resetSessionPersistenceMode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetSessionPersistenceMode"></a>

```java
public void resetSessionPersistenceMode()
```

##### `resetSessionStorage` <a name="resetSessionStorage" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetSessionStorage"></a>

```java
public void resetSessionStorage()
```

##### `resetVolumeConfiguration` <a name="resetVolumeConfiguration" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetVolumeConfiguration"></a>

```java
public void resetVolumeConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionBackup">sessionBackup</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference">NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionStorage">sessionStorage</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference">NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.volumeConfiguration">volumeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference">NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.automaticTerminationModeInput">automaticTerminationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.clipboardModeInput">clipboardModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.ec2InstanceTypesInput">ec2InstanceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.maxSessionLengthInMinutesInput">maxSessionLengthInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.maxStoppedSessionLengthInMinutesInput">maxStoppedSessionLengthInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionBackupInput">sessionBackupInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup">NimblestudioLaunchProfileStreamConfigurationSessionBackup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionPersistenceModeInput">sessionPersistenceModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionStorageInput">sessionStorageInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage">NimblestudioLaunchProfileStreamConfigurationSessionStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.streamingImageIdsInput">streamingImageIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.volumeConfigurationInput">volumeConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration">NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.automaticTerminationMode">automaticTerminationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.clipboardMode">clipboardMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.ec2InstanceTypes">ec2InstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.maxSessionLengthInMinutes">maxSessionLengthInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.maxStoppedSessionLengthInMinutes">maxStoppedSessionLengthInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionPersistenceMode">sessionPersistenceMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.streamingImageIds">streamingImageIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration">NimblestudioLaunchProfileStreamConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sessionBackup`<sup>Required</sup> <a name="sessionBackup" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionBackup"></a>

```java
public NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference getSessionBackup();
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference">NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference</a>

---

##### `sessionStorage`<sup>Required</sup> <a name="sessionStorage" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionStorage"></a>

```java
public NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference getSessionStorage();
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference">NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference</a>

---

##### `volumeConfiguration`<sup>Required</sup> <a name="volumeConfiguration" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.volumeConfiguration"></a>

```java
public NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference getVolumeConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference">NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference</a>

---

##### `automaticTerminationModeInput`<sup>Optional</sup> <a name="automaticTerminationModeInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.automaticTerminationModeInput"></a>

```java
public java.lang.String getAutomaticTerminationModeInput();
```

- *Type:* java.lang.String

---

##### `clipboardModeInput`<sup>Optional</sup> <a name="clipboardModeInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.clipboardModeInput"></a>

```java
public java.lang.String getClipboardModeInput();
```

- *Type:* java.lang.String

---

##### `ec2InstanceTypesInput`<sup>Optional</sup> <a name="ec2InstanceTypesInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.ec2InstanceTypesInput"></a>

```java
public java.util.List<java.lang.String> getEc2InstanceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxSessionLengthInMinutesInput`<sup>Optional</sup> <a name="maxSessionLengthInMinutesInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.maxSessionLengthInMinutesInput"></a>

```java
public java.lang.Number getMaxSessionLengthInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `maxStoppedSessionLengthInMinutesInput`<sup>Optional</sup> <a name="maxStoppedSessionLengthInMinutesInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.maxStoppedSessionLengthInMinutesInput"></a>

```java
public java.lang.Number getMaxStoppedSessionLengthInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `sessionBackupInput`<sup>Optional</sup> <a name="sessionBackupInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionBackupInput"></a>

```java
public IResolvable|NimblestudioLaunchProfileStreamConfigurationSessionBackup getSessionBackupInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup">NimblestudioLaunchProfileStreamConfigurationSessionBackup</a>

---

##### `sessionPersistenceModeInput`<sup>Optional</sup> <a name="sessionPersistenceModeInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionPersistenceModeInput"></a>

```java
public java.lang.String getSessionPersistenceModeInput();
```

- *Type:* java.lang.String

---

##### `sessionStorageInput`<sup>Optional</sup> <a name="sessionStorageInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionStorageInput"></a>

```java
public IResolvable|NimblestudioLaunchProfileStreamConfigurationSessionStorage getSessionStorageInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage">NimblestudioLaunchProfileStreamConfigurationSessionStorage</a>

---

##### `streamingImageIdsInput`<sup>Optional</sup> <a name="streamingImageIdsInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.streamingImageIdsInput"></a>

```java
public java.util.List<java.lang.String> getStreamingImageIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `volumeConfigurationInput`<sup>Optional</sup> <a name="volumeConfigurationInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.volumeConfigurationInput"></a>

```java
public IResolvable|NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration getVolumeConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration">NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration</a>

---

##### `automaticTerminationMode`<sup>Required</sup> <a name="automaticTerminationMode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.automaticTerminationMode"></a>

```java
public java.lang.String getAutomaticTerminationMode();
```

- *Type:* java.lang.String

---

##### `clipboardMode`<sup>Required</sup> <a name="clipboardMode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.clipboardMode"></a>

```java
public java.lang.String getClipboardMode();
```

- *Type:* java.lang.String

---

##### `ec2InstanceTypes`<sup>Required</sup> <a name="ec2InstanceTypes" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.ec2InstanceTypes"></a>

```java
public java.util.List<java.lang.String> getEc2InstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxSessionLengthInMinutes`<sup>Required</sup> <a name="maxSessionLengthInMinutes" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.maxSessionLengthInMinutes"></a>

```java
public java.lang.Number getMaxSessionLengthInMinutes();
```

- *Type:* java.lang.Number

---

##### `maxStoppedSessionLengthInMinutes`<sup>Required</sup> <a name="maxStoppedSessionLengthInMinutes" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.maxStoppedSessionLengthInMinutes"></a>

```java
public java.lang.Number getMaxStoppedSessionLengthInMinutes();
```

- *Type:* java.lang.Number

---

##### `sessionPersistenceMode`<sup>Required</sup> <a name="sessionPersistenceMode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionPersistenceMode"></a>

```java
public java.lang.String getSessionPersistenceMode();
```

- *Type:* java.lang.String

---

##### `streamingImageIds`<sup>Required</sup> <a name="streamingImageIds" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.streamingImageIds"></a>

```java
public java.util.List<java.lang.String> getStreamingImageIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|NimblestudioLaunchProfileStreamConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration">NimblestudioLaunchProfileStreamConfiguration</a>

---


### NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference <a name="NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_launch_profile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference;

new NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.resetMaxBackupsToRetain">resetMaxBackupsToRetain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxBackupsToRetain` <a name="resetMaxBackupsToRetain" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.resetMaxBackupsToRetain"></a>

```java
public void resetMaxBackupsToRetain()
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.resetMode"></a>

```java
public void resetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.maxBackupsToRetainInput">maxBackupsToRetainInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.maxBackupsToRetain">maxBackupsToRetain</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup">NimblestudioLaunchProfileStreamConfigurationSessionBackup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxBackupsToRetainInput`<sup>Optional</sup> <a name="maxBackupsToRetainInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.maxBackupsToRetainInput"></a>

```java
public java.lang.Number getMaxBackupsToRetainInput();
```

- *Type:* java.lang.Number

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `maxBackupsToRetain`<sup>Required</sup> <a name="maxBackupsToRetain" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.maxBackupsToRetain"></a>

```java
public java.lang.Number getMaxBackupsToRetain();
```

- *Type:* java.lang.Number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.internalValue"></a>

```java
public IResolvable|NimblestudioLaunchProfileStreamConfigurationSessionBackup getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup">NimblestudioLaunchProfileStreamConfigurationSessionBackup</a>

---


### NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference <a name="NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_launch_profile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference;

new NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.putRoot">putRoot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.resetRoot">resetRoot</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRoot` <a name="putRoot" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.putRoot"></a>

```java
public void putRoot(NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.putRoot.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot">NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot</a>

---

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetRoot` <a name="resetRoot" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.resetRoot"></a>

```java
public void resetRoot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.root">root</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference">NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.modeInput">modeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.rootInput">rootInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot">NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.mode">mode</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage">NimblestudioLaunchProfileStreamConfigurationSessionStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `root`<sup>Required</sup> <a name="root" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.root"></a>

```java
public NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference getRoot();
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference">NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference</a>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.modeInput"></a>

```java
public java.util.List<java.lang.String> getModeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rootInput`<sup>Optional</sup> <a name="rootInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.rootInput"></a>

```java
public IResolvable|NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot getRootInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot">NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot</a>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.mode"></a>

```java
public java.util.List<java.lang.String> getMode();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.internalValue"></a>

```java
public IResolvable|NimblestudioLaunchProfileStreamConfigurationSessionStorage getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage">NimblestudioLaunchProfileStreamConfigurationSessionStorage</a>

---


### NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference <a name="NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_launch_profile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference;

new NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.resetLinux">resetLinux</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.resetWindows">resetWindows</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLinux` <a name="resetLinux" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.resetLinux"></a>

```java
public void resetLinux()
```

##### `resetWindows` <a name="resetWindows" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.resetWindows"></a>

```java
public void resetWindows()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.linuxInput">linuxInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.windowsInput">windowsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.linux">linux</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.windows">windows</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot">NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `linuxInput`<sup>Optional</sup> <a name="linuxInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.linuxInput"></a>

```java
public java.lang.String getLinuxInput();
```

- *Type:* java.lang.String

---

##### `windowsInput`<sup>Optional</sup> <a name="windowsInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.windowsInput"></a>

```java
public java.lang.String getWindowsInput();
```

- *Type:* java.lang.String

---

##### `linux`<sup>Required</sup> <a name="linux" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.linux"></a>

```java
public java.lang.String getLinux();
```

- *Type:* java.lang.String

---

##### `windows`<sup>Required</sup> <a name="windows" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.windows"></a>

```java
public java.lang.String getWindows();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.internalValue"></a>

```java
public IResolvable|NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot">NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot</a>

---


### NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference <a name="NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_launch_profile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference;

new NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIops` <a name="resetIops" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.resetIops"></a>

```java
public void resetIops()
```

##### `resetSize` <a name="resetSize" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.resetSize"></a>

```java
public void resetSize()
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.resetThroughput"></a>

```java
public void resetThroughput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.throughputInput">throughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration">NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.throughputInput"></a>

```java
public java.lang.Number getThroughputInput();
```

- *Type:* java.lang.Number

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration">NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration</a>

---



