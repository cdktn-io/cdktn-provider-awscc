# `mediapackagePackagingGroup` Submodule <a name="`mediapackagePackagingGroup` Submodule" id="@cdktn/provider-awscc.mediapackagePackagingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediapackagePackagingGroup <a name="MediapackagePackagingGroup" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group awscc_mediapackage_packaging_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediapackage_packaging_group.MediapackagePackagingGroup;

MediapackagePackagingGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .packagingGroupId(java.lang.String)
//  .authorization(MediapackagePackagingGroupAuthorization)
//  .egressAccessLogs(MediapackagePackagingGroupEgressAccessLogs)
//  .tags(IResolvable|java.util.List<MediapackagePackagingGroupTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.packagingGroupId">packagingGroupId</a></code> | <code>java.lang.String</code> | The ID of the PackagingGroup. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.authorization">authorization</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a></code> | CDN Authorization. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.egressAccessLogs">egressAccessLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a></code> | The configuration parameters for egress access logging. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>></code> | A collection of tags associated with a resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `packagingGroupId`<sup>Required</sup> <a name="packagingGroupId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.packagingGroupId"></a>

- *Type:* java.lang.String

The ID of the PackagingGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#packaging_group_id MediapackagePackagingGroup#packaging_group_id}

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.authorization"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a>

CDN Authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#authorization MediapackagePackagingGroup#authorization}

---

##### `egressAccessLogs`<sup>Optional</sup> <a name="egressAccessLogs" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.egressAccessLogs"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a>

The configuration parameters for egress access logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#egress_access_logs MediapackagePackagingGroup#egress_access_logs}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>>

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#tags MediapackagePackagingGroup#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putAuthorization">putAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putEgressAccessLogs">putEgressAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetEgressAccessLogs">resetEgressAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthorization` <a name="putAuthorization" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putAuthorization"></a>

```java
public void putAuthorization(MediapackagePackagingGroupAuthorization value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a>

---

##### `putEgressAccessLogs` <a name="putEgressAccessLogs" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putEgressAccessLogs"></a>

```java
public void putEgressAccessLogs(MediapackagePackagingGroupEgressAccessLogs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putEgressAccessLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<MediapackagePackagingGroupTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>>

---

##### `resetAuthorization` <a name="resetAuthorization" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetAuthorization"></a>

```java
public void resetAuthorization()
```

##### `resetEgressAccessLogs` <a name="resetEgressAccessLogs" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetEgressAccessLogs"></a>

```java
public void resetEgressAccessLogs()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MediapackagePackagingGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isConstruct"></a>

```java
import io.cdktn.providers.awscc.mediapackage_packaging_group.MediapackagePackagingGroup;

MediapackagePackagingGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.mediapackage_packaging_group.MediapackagePackagingGroup;

MediapackagePackagingGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.mediapackage_packaging_group.MediapackagePackagingGroup;

MediapackagePackagingGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.mediapackage_packaging_group.MediapackagePackagingGroup;

MediapackagePackagingGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MediapackagePackagingGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MediapackagePackagingGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MediapackagePackagingGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MediapackagePackagingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MediapackagePackagingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.authorization">authorization</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference">MediapackagePackagingGroupAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.egressAccessLogs">egressAccessLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference">MediapackagePackagingGroupEgressAccessLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList">MediapackagePackagingGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.authorizationInput">authorizationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.egressAccessLogsInput">egressAccessLogsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.packagingGroupIdInput">packagingGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.packagingGroupId">packagingGroupId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.authorization"></a>

```java
public MediapackagePackagingGroupAuthorizationOutputReference getAuthorization();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference">MediapackagePackagingGroupAuthorizationOutputReference</a>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `egressAccessLogs`<sup>Required</sup> <a name="egressAccessLogs" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.egressAccessLogs"></a>

```java
public MediapackagePackagingGroupEgressAccessLogsOutputReference getEgressAccessLogs();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference">MediapackagePackagingGroupEgressAccessLogsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.tags"></a>

```java
public MediapackagePackagingGroupTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList">MediapackagePackagingGroupTagsList</a>

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.authorizationInput"></a>

```java
public IResolvable|MediapackagePackagingGroupAuthorization getAuthorizationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a>

---

##### `egressAccessLogsInput`<sup>Optional</sup> <a name="egressAccessLogsInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.egressAccessLogsInput"></a>

```java
public IResolvable|MediapackagePackagingGroupEgressAccessLogs getEgressAccessLogsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a>

---

##### `packagingGroupIdInput`<sup>Optional</sup> <a name="packagingGroupIdInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.packagingGroupIdInput"></a>

```java
public java.lang.String getPackagingGroupIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.tagsInput"></a>

```java
public IResolvable|java.util.List<MediapackagePackagingGroupTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>>

---

##### `packagingGroupId`<sup>Required</sup> <a name="packagingGroupId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.packagingGroupId"></a>

```java
public java.lang.String getPackagingGroupId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MediapackagePackagingGroupAuthorization <a name="MediapackagePackagingGroupAuthorization" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediapackage_packaging_group.MediapackagePackagingGroupAuthorization;

MediapackagePackagingGroupAuthorization.builder()
//  .cdnIdentifierSecret(java.lang.String)
//  .secretsRoleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization.property.cdnIdentifierSecret">cdnIdentifierSecret</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) for the secret in AWS Secrets Manager that is used for CDN authorization. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization.property.secretsRoleArn">secretsRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager. |

---

##### `cdnIdentifierSecret`<sup>Optional</sup> <a name="cdnIdentifierSecret" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization.property.cdnIdentifierSecret"></a>

```java
public java.lang.String getCdnIdentifierSecret();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) for the secret in AWS Secrets Manager that is used for CDN authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#cdn_identifier_secret MediapackagePackagingGroup#cdn_identifier_secret}

---

##### `secretsRoleArn`<sup>Optional</sup> <a name="secretsRoleArn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization.property.secretsRoleArn"></a>

```java
public java.lang.String getSecretsRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#secrets_role_arn MediapackagePackagingGroup#secrets_role_arn}

---

### MediapackagePackagingGroupConfig <a name="MediapackagePackagingGroupConfig" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediapackage_packaging_group.MediapackagePackagingGroupConfig;

MediapackagePackagingGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .packagingGroupId(java.lang.String)
//  .authorization(MediapackagePackagingGroupAuthorization)
//  .egressAccessLogs(MediapackagePackagingGroupEgressAccessLogs)
//  .tags(IResolvable|java.util.List<MediapackagePackagingGroupTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.packagingGroupId">packagingGroupId</a></code> | <code>java.lang.String</code> | The ID of the PackagingGroup. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.authorization">authorization</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a></code> | CDN Authorization. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.egressAccessLogs">egressAccessLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a></code> | The configuration parameters for egress access logging. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>></code> | A collection of tags associated with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `packagingGroupId`<sup>Required</sup> <a name="packagingGroupId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.packagingGroupId"></a>

```java
public java.lang.String getPackagingGroupId();
```

- *Type:* java.lang.String

The ID of the PackagingGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#packaging_group_id MediapackagePackagingGroup#packaging_group_id}

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.authorization"></a>

```java
public MediapackagePackagingGroupAuthorization getAuthorization();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a>

CDN Authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#authorization MediapackagePackagingGroup#authorization}

---

##### `egressAccessLogs`<sup>Optional</sup> <a name="egressAccessLogs" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.egressAccessLogs"></a>

```java
public MediapackagePackagingGroupEgressAccessLogs getEgressAccessLogs();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a>

The configuration parameters for egress access logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#egress_access_logs MediapackagePackagingGroup#egress_access_logs}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.tags"></a>

```java
public IResolvable|java.util.List<MediapackagePackagingGroupTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>>

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#tags MediapackagePackagingGroup#tags}

---

### MediapackagePackagingGroupEgressAccessLogs <a name="MediapackagePackagingGroupEgressAccessLogs" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediapackage_packaging_group.MediapackagePackagingGroupEgressAccessLogs;

MediapackagePackagingGroupEgressAccessLogs.builder()
//  .logGroupName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs.property.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | Sets a custom AWS CloudWatch log group name for egress logs. |

---

##### `logGroupName`<sup>Optional</sup> <a name="logGroupName" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs.property.logGroupName"></a>

```java
public java.lang.String getLogGroupName();
```

- *Type:* java.lang.String

Sets a custom AWS CloudWatch log group name for egress logs.

If a log group name isn't specified, the default name is used: /aws/MediaPackage/VodEgressAccessLogs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#log_group_name MediapackagePackagingGroup#log_group_name}

---

### MediapackagePackagingGroupTags <a name="MediapackagePackagingGroupTags" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediapackage_packaging_group.MediapackagePackagingGroupTags;

MediapackagePackagingGroupTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#key MediapackagePackagingGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#value MediapackagePackagingGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#key MediapackagePackagingGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#value MediapackagePackagingGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediapackagePackagingGroupAuthorizationOutputReference <a name="MediapackagePackagingGroupAuthorizationOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediapackage_packaging_group.MediapackagePackagingGroupAuthorizationOutputReference;

new MediapackagePackagingGroupAuthorizationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resetCdnIdentifierSecret">resetCdnIdentifierSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resetSecretsRoleArn">resetSecretsRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCdnIdentifierSecret` <a name="resetCdnIdentifierSecret" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resetCdnIdentifierSecret"></a>

```java
public void resetCdnIdentifierSecret()
```

##### `resetSecretsRoleArn` <a name="resetSecretsRoleArn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resetSecretsRoleArn"></a>

```java
public void resetSecretsRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.cdnIdentifierSecretInput">cdnIdentifierSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.secretsRoleArnInput">secretsRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.cdnIdentifierSecret">cdnIdentifierSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.secretsRoleArn">secretsRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cdnIdentifierSecretInput`<sup>Optional</sup> <a name="cdnIdentifierSecretInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.cdnIdentifierSecretInput"></a>

```java
public java.lang.String getCdnIdentifierSecretInput();
```

- *Type:* java.lang.String

---

##### `secretsRoleArnInput`<sup>Optional</sup> <a name="secretsRoleArnInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.secretsRoleArnInput"></a>

```java
public java.lang.String getSecretsRoleArnInput();
```

- *Type:* java.lang.String

---

##### `cdnIdentifierSecret`<sup>Required</sup> <a name="cdnIdentifierSecret" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.cdnIdentifierSecret"></a>

```java
public java.lang.String getCdnIdentifierSecret();
```

- *Type:* java.lang.String

---

##### `secretsRoleArn`<sup>Required</sup> <a name="secretsRoleArn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.secretsRoleArn"></a>

```java
public java.lang.String getSecretsRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.internalValue"></a>

```java
public IResolvable|MediapackagePackagingGroupAuthorization getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a>

---


### MediapackagePackagingGroupEgressAccessLogsOutputReference <a name="MediapackagePackagingGroupEgressAccessLogsOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediapackage_packaging_group.MediapackagePackagingGroupEgressAccessLogsOutputReference;

new MediapackagePackagingGroupEgressAccessLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.resetLogGroupName">resetLogGroupName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroupName` <a name="resetLogGroupName" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.resetLogGroupName"></a>

```java
public void resetLogGroupName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.logGroupNameInput">logGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.logGroupNameInput"></a>

```java
public java.lang.String getLogGroupNameInput();
```

- *Type:* java.lang.String

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.logGroupName"></a>

```java
public java.lang.String getLogGroupName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.internalValue"></a>

```java
public IResolvable|MediapackagePackagingGroupEgressAccessLogs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a>

---


### MediapackagePackagingGroupTagsList <a name="MediapackagePackagingGroupTagsList" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediapackage_packaging_group.MediapackagePackagingGroupTagsList;

new MediapackagePackagingGroupTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.get"></a>

```java
public MediapackagePackagingGroupTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MediapackagePackagingGroupTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>>

---


### MediapackagePackagingGroupTagsOutputReference <a name="MediapackagePackagingGroupTagsOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediapackage_packaging_group.MediapackagePackagingGroupTagsOutputReference;

new MediapackagePackagingGroupTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|MediapackagePackagingGroupTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>

---



