# `sagemakerSpace` Submodule <a name="`sagemakerSpace` Submodule" id="@cdktn/provider-awscc.sagemakerSpace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerSpace <a name="SagemakerSpace" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space awscc_sagemaker_space}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpace;

SagemakerSpace.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domainId(java.lang.String)
    .spaceName(java.lang.String)
//  .ownershipSettings(SagemakerSpaceOwnershipSettings)
//  .spaceDisplayName(java.lang.String)
//  .spaceSettings(SagemakerSpaceSpaceSettings)
//  .spaceSharingSettings(SagemakerSpaceSpaceSharingSettings)
//  .tags(IResolvable|java.util.List<SagemakerSpaceTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.domainId">domainId</a></code> | <code>java.lang.String</code> | The ID of the associated Domain. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.spaceName">spaceName</a></code> | <code>java.lang.String</code> | A name for the Space. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.ownershipSettings">ownershipSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettings">SagemakerSpaceOwnershipSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#ownership_settings SagemakerSpace#ownership_settings}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.spaceDisplayName">spaceDisplayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#space_display_name SagemakerSpace#space_display_name}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.spaceSettings">spaceSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings">SagemakerSpaceSpaceSettings</a></code> | A collection of settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.spaceSharingSettings">spaceSharingSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettings">SagemakerSpaceSpaceSharingSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#space_sharing_settings SagemakerSpace#space_sharing_settings}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTags">SagemakerSpaceTags</a>></code> | A list of tags to apply to the space. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.domainId"></a>

- *Type:* java.lang.String

The ID of the associated Domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#domain_id SagemakerSpace#domain_id}

---

##### `spaceName`<sup>Required</sup> <a name="spaceName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.spaceName"></a>

- *Type:* java.lang.String

A name for the Space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#space_name SagemakerSpace#space_name}

---

##### `ownershipSettings`<sup>Optional</sup> <a name="ownershipSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.ownershipSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettings">SagemakerSpaceOwnershipSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#ownership_settings SagemakerSpace#ownership_settings}.

---

##### `spaceDisplayName`<sup>Optional</sup> <a name="spaceDisplayName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.spaceDisplayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#space_display_name SagemakerSpace#space_display_name}.

---

##### `spaceSettings`<sup>Optional</sup> <a name="spaceSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.spaceSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings">SagemakerSpaceSpaceSettings</a>

A collection of settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#space_settings SagemakerSpace#space_settings}

---

##### `spaceSharingSettings`<sup>Optional</sup> <a name="spaceSharingSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.spaceSharingSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettings">SagemakerSpaceSpaceSharingSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#space_sharing_settings SagemakerSpace#space_sharing_settings}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTags">SagemakerSpaceTags</a>>

A list of tags to apply to the space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#tags SagemakerSpace#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.putOwnershipSettings">putOwnershipSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.putSpaceSettings">putSpaceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.putSpaceSharingSettings">putSpaceSharingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.resetOwnershipSettings">resetOwnershipSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.resetSpaceDisplayName">resetSpaceDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.resetSpaceSettings">resetSpaceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.resetSpaceSharingSettings">resetSpaceSharingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOwnershipSettings` <a name="putOwnershipSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.putOwnershipSettings"></a>

```java
public void putOwnershipSettings(SagemakerSpaceOwnershipSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.putOwnershipSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettings">SagemakerSpaceOwnershipSettings</a>

---

##### `putSpaceSettings` <a name="putSpaceSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.putSpaceSettings"></a>

```java
public void putSpaceSettings(SagemakerSpaceSpaceSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.putSpaceSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings">SagemakerSpaceSpaceSettings</a>

---

##### `putSpaceSharingSettings` <a name="putSpaceSharingSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.putSpaceSharingSettings"></a>

```java
public void putSpaceSharingSettings(SagemakerSpaceSpaceSharingSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.putSpaceSharingSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettings">SagemakerSpaceSpaceSharingSettings</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SagemakerSpaceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTags">SagemakerSpaceTags</a>>

---

##### `resetOwnershipSettings` <a name="resetOwnershipSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.resetOwnershipSettings"></a>

```java
public void resetOwnershipSettings()
```

##### `resetSpaceDisplayName` <a name="resetSpaceDisplayName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.resetSpaceDisplayName"></a>

```java
public void resetSpaceDisplayName()
```

##### `resetSpaceSettings` <a name="resetSpaceSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.resetSpaceSettings"></a>

```java
public void resetSpaceSettings()
```

##### `resetSpaceSharingSettings` <a name="resetSpaceSharingSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.resetSpaceSharingSettings"></a>

```java
public void resetSpaceSharingSettings()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerSpace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.isConstruct"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpace;

SagemakerSpace.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpace;

SagemakerSpace.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpace;

SagemakerSpace.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpace;

SagemakerSpace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SagemakerSpace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SagemakerSpace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SagemakerSpace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SagemakerSpace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerSpace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.ownershipSettings">ownershipSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference">SagemakerSpaceOwnershipSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceArn">spaceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceSettings">spaceSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference">SagemakerSpaceSpaceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceSharingSettings">spaceSharingSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference">SagemakerSpaceSpaceSharingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList">SagemakerSpaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.domainIdInput">domainIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.ownershipSettingsInput">ownershipSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettings">SagemakerSpaceOwnershipSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceDisplayNameInput">spaceDisplayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceNameInput">spaceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceSettingsInput">spaceSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings">SagemakerSpaceSpaceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceSharingSettingsInput">spaceSharingSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettings">SagemakerSpaceSpaceSharingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTags">SagemakerSpaceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.domainId">domainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceDisplayName">spaceDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceName">spaceName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ownershipSettings`<sup>Required</sup> <a name="ownershipSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.ownershipSettings"></a>

```java
public SagemakerSpaceOwnershipSettingsOutputReference getOwnershipSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference">SagemakerSpaceOwnershipSettingsOutputReference</a>

---

##### `spaceArn`<sup>Required</sup> <a name="spaceArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceArn"></a>

```java
public java.lang.String getSpaceArn();
```

- *Type:* java.lang.String

---

##### `spaceSettings`<sup>Required</sup> <a name="spaceSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceSettings"></a>

```java
public SagemakerSpaceSpaceSettingsOutputReference getSpaceSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference">SagemakerSpaceSpaceSettingsOutputReference</a>

---

##### `spaceSharingSettings`<sup>Required</sup> <a name="spaceSharingSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceSharingSettings"></a>

```java
public SagemakerSpaceSpaceSharingSettingsOutputReference getSpaceSharingSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference">SagemakerSpaceSpaceSharingSettingsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.tags"></a>

```java
public SagemakerSpaceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList">SagemakerSpaceTagsList</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.domainIdInput"></a>

```java
public java.lang.String getDomainIdInput();
```

- *Type:* java.lang.String

---

##### `ownershipSettingsInput`<sup>Optional</sup> <a name="ownershipSettingsInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.ownershipSettingsInput"></a>

```java
public IResolvable|SagemakerSpaceOwnershipSettings getOwnershipSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettings">SagemakerSpaceOwnershipSettings</a>

---

##### `spaceDisplayNameInput`<sup>Optional</sup> <a name="spaceDisplayNameInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceDisplayNameInput"></a>

```java
public java.lang.String getSpaceDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `spaceNameInput`<sup>Optional</sup> <a name="spaceNameInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceNameInput"></a>

```java
public java.lang.String getSpaceNameInput();
```

- *Type:* java.lang.String

---

##### `spaceSettingsInput`<sup>Optional</sup> <a name="spaceSettingsInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceSettingsInput"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettings getSpaceSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings">SagemakerSpaceSpaceSettings</a>

---

##### `spaceSharingSettingsInput`<sup>Optional</sup> <a name="spaceSharingSettingsInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceSharingSettingsInput"></a>

```java
public IResolvable|SagemakerSpaceSpaceSharingSettings getSpaceSharingSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettings">SagemakerSpaceSpaceSharingSettings</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SagemakerSpaceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTags">SagemakerSpaceTags</a>>

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

---

##### `spaceDisplayName`<sup>Required</sup> <a name="spaceDisplayName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceDisplayName"></a>

```java
public java.lang.String getSpaceDisplayName();
```

- *Type:* java.lang.String

---

##### `spaceName`<sup>Required</sup> <a name="spaceName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceName"></a>

```java
public java.lang.String getSpaceName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerSpaceConfig <a name="SagemakerSpaceConfig" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceConfig;

SagemakerSpaceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domainId(java.lang.String)
    .spaceName(java.lang.String)
//  .ownershipSettings(SagemakerSpaceOwnershipSettings)
//  .spaceDisplayName(java.lang.String)
//  .spaceSettings(SagemakerSpaceSpaceSettings)
//  .spaceSharingSettings(SagemakerSpaceSpaceSharingSettings)
//  .tags(IResolvable|java.util.List<SagemakerSpaceTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.domainId">domainId</a></code> | <code>java.lang.String</code> | The ID of the associated Domain. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.spaceName">spaceName</a></code> | <code>java.lang.String</code> | A name for the Space. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.ownershipSettings">ownershipSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettings">SagemakerSpaceOwnershipSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#ownership_settings SagemakerSpace#ownership_settings}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.spaceDisplayName">spaceDisplayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#space_display_name SagemakerSpace#space_display_name}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.spaceSettings">spaceSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings">SagemakerSpaceSpaceSettings</a></code> | A collection of settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.spaceSharingSettings">spaceSharingSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettings">SagemakerSpaceSpaceSharingSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#space_sharing_settings SagemakerSpace#space_sharing_settings}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTags">SagemakerSpaceTags</a>></code> | A list of tags to apply to the space. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

The ID of the associated Domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#domain_id SagemakerSpace#domain_id}

---

##### `spaceName`<sup>Required</sup> <a name="spaceName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.spaceName"></a>

```java
public java.lang.String getSpaceName();
```

- *Type:* java.lang.String

A name for the Space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#space_name SagemakerSpace#space_name}

---

##### `ownershipSettings`<sup>Optional</sup> <a name="ownershipSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.ownershipSettings"></a>

```java
public SagemakerSpaceOwnershipSettings getOwnershipSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettings">SagemakerSpaceOwnershipSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#ownership_settings SagemakerSpace#ownership_settings}.

---

##### `spaceDisplayName`<sup>Optional</sup> <a name="spaceDisplayName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.spaceDisplayName"></a>

```java
public java.lang.String getSpaceDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#space_display_name SagemakerSpace#space_display_name}.

---

##### `spaceSettings`<sup>Optional</sup> <a name="spaceSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.spaceSettings"></a>

```java
public SagemakerSpaceSpaceSettings getSpaceSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings">SagemakerSpaceSpaceSettings</a>

A collection of settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#space_settings SagemakerSpace#space_settings}

---

##### `spaceSharingSettings`<sup>Optional</sup> <a name="spaceSharingSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.spaceSharingSettings"></a>

```java
public SagemakerSpaceSpaceSharingSettings getSpaceSharingSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettings">SagemakerSpaceSpaceSharingSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#space_sharing_settings SagemakerSpace#space_sharing_settings}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SagemakerSpaceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTags">SagemakerSpaceTags</a>>

A list of tags to apply to the space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#tags SagemakerSpace#tags}

---

### SagemakerSpaceOwnershipSettings <a name="SagemakerSpaceOwnershipSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceOwnershipSettings;

SagemakerSpaceOwnershipSettings.builder()
//  .ownerUserProfileName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettings.property.ownerUserProfileName">ownerUserProfileName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#owner_user_profile_name SagemakerSpace#owner_user_profile_name}. |

---

##### `ownerUserProfileName`<sup>Optional</sup> <a name="ownerUserProfileName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettings.property.ownerUserProfileName"></a>

```java
public java.lang.String getOwnerUserProfileName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#owner_user_profile_name SagemakerSpace#owner_user_profile_name}.

---

### SagemakerSpaceSpaceSettings <a name="SagemakerSpaceSpaceSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettings;

SagemakerSpaceSpaceSettings.builder()
//  .appType(java.lang.String)
//  .codeEditorAppSettings(SagemakerSpaceSpaceSettingsCodeEditorAppSettings)
//  .customFileSystems(IResolvable|java.util.List<SagemakerSpaceSpaceSettingsCustomFileSystems>)
//  .jupyterLabAppSettings(SagemakerSpaceSpaceSettingsJupyterLabAppSettings)
//  .jupyterServerAppSettings(SagemakerSpaceSpaceSettingsJupyterServerAppSettings)
//  .kernelGatewayAppSettings(SagemakerSpaceSpaceSettingsKernelGatewayAppSettings)
//  .remoteAccess(java.lang.String)
//  .spaceManagedResources(java.lang.String)
//  .spaceStorageSettings(SagemakerSpaceSpaceSettingsSpaceStorageSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.appType">appType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#app_type SagemakerSpace#app_type}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.codeEditorAppSettings">codeEditorAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettings</a></code> | The CodeEditor app settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.customFileSystems">customFileSystems</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems">SagemakerSpaceSpaceSettingsCustomFileSystems</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#custom_file_systems SagemakerSpace#custom_file_systems}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.jupyterLabAppSettings">jupyterLabAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettings</a></code> | The JupyterLab app settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.jupyterServerAppSettings">jupyterServerAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings">SagemakerSpaceSpaceSettingsJupyterServerAppSettings</a></code> | The Jupyter server's app settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.kernelGatewayAppSettings">kernelGatewayAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings">SagemakerSpaceSpaceSettingsKernelGatewayAppSettings</a></code> | The kernel gateway app settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.remoteAccess">remoteAccess</a></code> | <code>java.lang.String</code> | This is a flag used to indicate if remote access is enabled. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.spaceManagedResources">spaceManagedResources</a></code> | <code>java.lang.String</code> | This is a flag used to indicate if space managed resources needs to be created. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.spaceStorageSettings">spaceStorageSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettings</a></code> | Default storage settings for a space. |

---

##### `appType`<sup>Optional</sup> <a name="appType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.appType"></a>

```java
public java.lang.String getAppType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#app_type SagemakerSpace#app_type}.

---

##### `codeEditorAppSettings`<sup>Optional</sup> <a name="codeEditorAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.codeEditorAppSettings"></a>

```java
public SagemakerSpaceSpaceSettingsCodeEditorAppSettings getCodeEditorAppSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettings</a>

The CodeEditor app settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#code_editor_app_settings SagemakerSpace#code_editor_app_settings}

---

##### `customFileSystems`<sup>Optional</sup> <a name="customFileSystems" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.customFileSystems"></a>

```java
public IResolvable|java.util.List<SagemakerSpaceSpaceSettingsCustomFileSystems> getCustomFileSystems();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems">SagemakerSpaceSpaceSettingsCustomFileSystems</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#custom_file_systems SagemakerSpace#custom_file_systems}.

---

##### `jupyterLabAppSettings`<sup>Optional</sup> <a name="jupyterLabAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.jupyterLabAppSettings"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterLabAppSettings getJupyterLabAppSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettings</a>

The JupyterLab app settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#jupyter_lab_app_settings SagemakerSpace#jupyter_lab_app_settings}

---

##### `jupyterServerAppSettings`<sup>Optional</sup> <a name="jupyterServerAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.jupyterServerAppSettings"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterServerAppSettings getJupyterServerAppSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings">SagemakerSpaceSpaceSettingsJupyterServerAppSettings</a>

The Jupyter server's app settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#jupyter_server_app_settings SagemakerSpace#jupyter_server_app_settings}

---

##### `kernelGatewayAppSettings`<sup>Optional</sup> <a name="kernelGatewayAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.kernelGatewayAppSettings"></a>

```java
public SagemakerSpaceSpaceSettingsKernelGatewayAppSettings getKernelGatewayAppSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings">SagemakerSpaceSpaceSettingsKernelGatewayAppSettings</a>

The kernel gateway app settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#kernel_gateway_app_settings SagemakerSpace#kernel_gateway_app_settings}

---

##### `remoteAccess`<sup>Optional</sup> <a name="remoteAccess" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.remoteAccess"></a>

```java
public java.lang.String getRemoteAccess();
```

- *Type:* java.lang.String

This is a flag used to indicate if remote access is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#remote_access SagemakerSpace#remote_access}

---

##### `spaceManagedResources`<sup>Optional</sup> <a name="spaceManagedResources" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.spaceManagedResources"></a>

```java
public java.lang.String getSpaceManagedResources();
```

- *Type:* java.lang.String

This is a flag used to indicate if space managed resources needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#space_managed_resources SagemakerSpace#space_managed_resources}

---

##### `spaceStorageSettings`<sup>Optional</sup> <a name="spaceStorageSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.spaceStorageSettings"></a>

```java
public SagemakerSpaceSpaceSettingsSpaceStorageSettings getSpaceStorageSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettings</a>

Default storage settings for a space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#space_storage_settings SagemakerSpace#space_storage_settings}

---

### SagemakerSpaceSpaceSettingsCodeEditorAppSettings <a name="SagemakerSpaceSpaceSettingsCodeEditorAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsCodeEditorAppSettings;

SagemakerSpaceSpaceSettingsCodeEditorAppSettings.builder()
//  .appLifecycleManagement(SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement)
//  .defaultResourceSpec(SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings.property.appLifecycleManagement">appLifecycleManagement</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#app_lifecycle_management SagemakerSpace#app_lifecycle_management}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#default_resource_spec SagemakerSpace#default_resource_spec}. |

---

##### `appLifecycleManagement`<sup>Optional</sup> <a name="appLifecycleManagement" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings.property.appLifecycleManagement"></a>

```java
public SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement getAppLifecycleManagement();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#app_lifecycle_management SagemakerSpace#app_lifecycle_management}.

---

##### `defaultResourceSpec`<sup>Optional</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings.property.defaultResourceSpec"></a>

```java
public SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#default_resource_spec SagemakerSpace#default_resource_spec}.

---

### SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement <a name="SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement;

SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement.builder()
//  .idleSettings(SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement.property.idleSettings">idleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#idle_settings SagemakerSpace#idle_settings}. |

---

##### `idleSettings`<sup>Optional</sup> <a name="idleSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement.property.idleSettings"></a>

```java
public SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings getIdleSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#idle_settings SagemakerSpace#idle_settings}.

---

### SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings <a name="SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings;

SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.builder()
//  .idleTimeoutInMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | The space idle timeout value set in minutes. |

---

##### `idleTimeoutInMinutes`<sup>Optional</sup> <a name="idleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.property.idleTimeoutInMinutes"></a>

```java
public java.lang.Number getIdleTimeoutInMinutes();
```

- *Type:* java.lang.Number

The space idle timeout value set in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#idle_timeout_in_minutes SagemakerSpace#idle_timeout_in_minutes}

---

### SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec <a name="SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec;

SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.builder()
//  .instanceType(java.lang.String)
//  .lifecycleConfigArn(java.lang.String)
//  .sageMakerImageArn(java.lang.String)
//  .sageMakerImageVersionArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | The instance type that the image version runs on. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>java.lang.String</code> | The ARN of the SageMaker image that the image version belongs to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>java.lang.String</code> | The ARN of the image version created on the instance. |

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

The instance type that the image version runs on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#instance_type SagemakerSpace#instance_type}

---

##### `lifecycleConfigArn`<sup>Optional</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#lifecycle_config_arn SagemakerSpace#lifecycle_config_arn}

---

##### `sageMakerImageArn`<sup>Optional</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sageMakerImageArn"></a>

```java
public java.lang.String getSageMakerImageArn();
```

- *Type:* java.lang.String

The ARN of the SageMaker image that the image version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#sage_maker_image_arn SagemakerSpace#sage_maker_image_arn}

---

##### `sageMakerImageVersionArn`<sup>Optional</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn"></a>

```java
public java.lang.String getSageMakerImageVersionArn();
```

- *Type:* java.lang.String

The ARN of the image version created on the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#sage_maker_image_version_arn SagemakerSpace#sage_maker_image_version_arn}

---

### SagemakerSpaceSpaceSettingsCustomFileSystems <a name="SagemakerSpaceSpaceSettingsCustomFileSystems" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsCustomFileSystems;

SagemakerSpaceSpaceSettingsCustomFileSystems.builder()
//  .efsFileSystem(SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem)
//  .fsxLustreFileSystem(SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem)
//  .s3FileSystem(SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems.property.efsFileSystem">efsFileSystem</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#efs_file_system SagemakerSpace#efs_file_system}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems.property.fsxLustreFileSystem">fsxLustreFileSystem</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#fsx_lustre_file_system SagemakerSpace#fsx_lustre_file_system}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems.property.s3FileSystem">s3FileSystem</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#s3_file_system SagemakerSpace#s3_file_system}. |

---

##### `efsFileSystem`<sup>Optional</sup> <a name="efsFileSystem" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems.property.efsFileSystem"></a>

```java
public SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem getEfsFileSystem();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#efs_file_system SagemakerSpace#efs_file_system}.

---

##### `fsxLustreFileSystem`<sup>Optional</sup> <a name="fsxLustreFileSystem" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems.property.fsxLustreFileSystem"></a>

```java
public SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem getFsxLustreFileSystem();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#fsx_lustre_file_system SagemakerSpace#fsx_lustre_file_system}.

---

##### `s3FileSystem`<sup>Optional</sup> <a name="s3FileSystem" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems.property.s3FileSystem"></a>

```java
public SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem getS3FileSystem();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#s3_file_system SagemakerSpace#s3_file_system}.

---

### SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem <a name="SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem;

SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem.builder()
//  .fileSystemId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#file_system_id SagemakerSpace#file_system_id}. |

---

##### `fileSystemId`<sup>Optional</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#file_system_id SagemakerSpace#file_system_id}.

---

### SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem <a name="SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem;

SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem.builder()
//  .fileSystemId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#file_system_id SagemakerSpace#file_system_id}. |

---

##### `fileSystemId`<sup>Optional</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#file_system_id SagemakerSpace#file_system_id}.

---

### SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem <a name="SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem;

SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem.builder()
//  .s3Uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#s3_uri SagemakerSpace#s3_uri}. |

---

##### `s3Uri`<sup>Optional</sup> <a name="s3Uri" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#s3_uri SagemakerSpace#s3_uri}.

---

### SagemakerSpaceSpaceSettingsJupyterLabAppSettings <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsJupyterLabAppSettings;

SagemakerSpaceSpaceSettingsJupyterLabAppSettings.builder()
//  .appLifecycleManagement(SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement)
//  .codeRepositories(IResolvable|java.util.List<SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories>)
//  .defaultResourceSpec(SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings.property.appLifecycleManagement">appLifecycleManagement</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#app_lifecycle_management SagemakerSpace#app_lifecycle_management}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings.property.codeRepositories">codeRepositories</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories</a>></code> | A list of CodeRepositories available for use with JupyterLab apps. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#default_resource_spec SagemakerSpace#default_resource_spec}. |

---

##### `appLifecycleManagement`<sup>Optional</sup> <a name="appLifecycleManagement" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings.property.appLifecycleManagement"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement getAppLifecycleManagement();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#app_lifecycle_management SagemakerSpace#app_lifecycle_management}.

---

##### `codeRepositories`<sup>Optional</sup> <a name="codeRepositories" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings.property.codeRepositories"></a>

```java
public IResolvable|java.util.List<SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories> getCodeRepositories();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories</a>>

A list of CodeRepositories available for use with JupyterLab apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#code_repositories SagemakerSpace#code_repositories}

---

##### `defaultResourceSpec`<sup>Optional</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings.property.defaultResourceSpec"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#default_resource_spec SagemakerSpace#default_resource_spec}.

---

### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement;

SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement.builder()
//  .idleSettings(SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement.property.idleSettings">idleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#idle_settings SagemakerSpace#idle_settings}. |

---

##### `idleSettings`<sup>Optional</sup> <a name="idleSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement.property.idleSettings"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings getIdleSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#idle_settings SagemakerSpace#idle_settings}.

---

### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings;

SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.builder()
//  .idleTimeoutInMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | The space idle timeout value set in minutes. |

---

##### `idleTimeoutInMinutes`<sup>Optional</sup> <a name="idleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.property.idleTimeoutInMinutes"></a>

```java
public java.lang.Number getIdleTimeoutInMinutes();
```

- *Type:* java.lang.Number

The space idle timeout value set in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#idle_timeout_in_minutes SagemakerSpace#idle_timeout_in_minutes}

---

### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories;

SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories.builder()
//  .repositoryUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories.property.repositoryUrl">repositoryUrl</a></code> | <code>java.lang.String</code> | A CodeRepository (valid URL) to be used within Jupyter's Git extension. |

---

##### `repositoryUrl`<sup>Optional</sup> <a name="repositoryUrl" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories.property.repositoryUrl"></a>

```java
public java.lang.String getRepositoryUrl();
```

- *Type:* java.lang.String

A CodeRepository (valid URL) to be used within Jupyter's Git extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#repository_url SagemakerSpace#repository_url}

---

### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec;

SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.builder()
//  .instanceType(java.lang.String)
//  .lifecycleConfigArn(java.lang.String)
//  .sageMakerImageArn(java.lang.String)
//  .sageMakerImageVersionArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | The instance type that the image version runs on. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>java.lang.String</code> | The ARN of the SageMaker image that the image version belongs to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>java.lang.String</code> | The ARN of the image version created on the instance. |

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

The instance type that the image version runs on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#instance_type SagemakerSpace#instance_type}

---

##### `lifecycleConfigArn`<sup>Optional</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#lifecycle_config_arn SagemakerSpace#lifecycle_config_arn}

---

##### `sageMakerImageArn`<sup>Optional</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sageMakerImageArn"></a>

```java
public java.lang.String getSageMakerImageArn();
```

- *Type:* java.lang.String

The ARN of the SageMaker image that the image version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#sage_maker_image_arn SagemakerSpace#sage_maker_image_arn}

---

##### `sageMakerImageVersionArn`<sup>Optional</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn"></a>

```java
public java.lang.String getSageMakerImageVersionArn();
```

- *Type:* java.lang.String

The ARN of the image version created on the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#sage_maker_image_version_arn SagemakerSpace#sage_maker_image_version_arn}

---

### SagemakerSpaceSpaceSettingsJupyterServerAppSettings <a name="SagemakerSpaceSpaceSettingsJupyterServerAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsJupyterServerAppSettings;

SagemakerSpaceSpaceSettingsJupyterServerAppSettings.builder()
//  .defaultResourceSpec(SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec)
//  .lifecycleConfigArns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#default_resource_spec SagemakerSpace#default_resource_spec}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>java.util.List<java.lang.String></code> | A list of LifecycleConfigArns available for use with JupyterServer apps. |

---

##### `defaultResourceSpec`<sup>Optional</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings.property.defaultResourceSpec"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#default_resource_spec SagemakerSpace#default_resource_spec}.

---

##### `lifecycleConfigArns`<sup>Optional</sup> <a name="lifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings.property.lifecycleConfigArns"></a>

```java
public java.util.List<java.lang.String> getLifecycleConfigArns();
```

- *Type:* java.util.List<java.lang.String>

A list of LifecycleConfigArns available for use with JupyterServer apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#lifecycle_config_arns SagemakerSpace#lifecycle_config_arns}

---

### SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec <a name="SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec;

SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.builder()
//  .instanceType(java.lang.String)
//  .lifecycleConfigArn(java.lang.String)
//  .sageMakerImageArn(java.lang.String)
//  .sageMakerImageVersionArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | The instance type that the image version runs on. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>java.lang.String</code> | The ARN of the SageMaker image that the image version belongs to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>java.lang.String</code> | The ARN of the image version created on the instance. |

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

The instance type that the image version runs on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#instance_type SagemakerSpace#instance_type}

---

##### `lifecycleConfigArn`<sup>Optional</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#lifecycle_config_arn SagemakerSpace#lifecycle_config_arn}

---

##### `sageMakerImageArn`<sup>Optional</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sageMakerImageArn"></a>

```java
public java.lang.String getSageMakerImageArn();
```

- *Type:* java.lang.String

The ARN of the SageMaker image that the image version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#sage_maker_image_arn SagemakerSpace#sage_maker_image_arn}

---

##### `sageMakerImageVersionArn`<sup>Optional</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn"></a>

```java
public java.lang.String getSageMakerImageVersionArn();
```

- *Type:* java.lang.String

The ARN of the image version created on the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#sage_maker_image_version_arn SagemakerSpace#sage_maker_image_version_arn}

---

### SagemakerSpaceSpaceSettingsKernelGatewayAppSettings <a name="SagemakerSpaceSpaceSettingsKernelGatewayAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings;

SagemakerSpaceSpaceSettingsKernelGatewayAppSettings.builder()
//  .customImages(IResolvable|java.util.List<SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages>)
//  .defaultResourceSpec(SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec)
//  .lifecycleConfigArns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings.property.customImages">customImages</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages</a>></code> | A list of custom SageMaker images that are configured to run as a KernelGateway app. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the KernelGateway app. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>java.util.List<java.lang.String></code> | A list of LifecycleConfigArns available for use with KernelGateway apps. |

---

##### `customImages`<sup>Optional</sup> <a name="customImages" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings.property.customImages"></a>

```java
public IResolvable|java.util.List<SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages> getCustomImages();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages</a>>

A list of custom SageMaker images that are configured to run as a KernelGateway app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#custom_images SagemakerSpace#custom_images}

---

##### `defaultResourceSpec`<sup>Optional</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings.property.defaultResourceSpec"></a>

```java
public SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the KernelGateway app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#default_resource_spec SagemakerSpace#default_resource_spec}

---

##### `lifecycleConfigArns`<sup>Optional</sup> <a name="lifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings.property.lifecycleConfigArns"></a>

```java
public java.util.List<java.lang.String> getLifecycleConfigArns();
```

- *Type:* java.util.List<java.lang.String>

A list of LifecycleConfigArns available for use with KernelGateway apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#lifecycle_config_arns SagemakerSpace#lifecycle_config_arns}

---

### SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages <a name="SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages;

SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages.builder()
//  .appImageConfigName(java.lang.String)
//  .imageName(java.lang.String)
//  .imageVersionNumber(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages.property.appImageConfigName">appImageConfigName</a></code> | <code>java.lang.String</code> | The Name of the AppImageConfig. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages.property.imageName">imageName</a></code> | <code>java.lang.String</code> | The name of the CustomImage. Must be unique to your account. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages.property.imageVersionNumber">imageVersionNumber</a></code> | <code>java.lang.Number</code> | The version number of the CustomImage. |

---

##### `appImageConfigName`<sup>Optional</sup> <a name="appImageConfigName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages.property.appImageConfigName"></a>

```java
public java.lang.String getAppImageConfigName();
```

- *Type:* java.lang.String

The Name of the AppImageConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#app_image_config_name SagemakerSpace#app_image_config_name}

---

##### `imageName`<sup>Optional</sup> <a name="imageName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

The name of the CustomImage. Must be unique to your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#image_name SagemakerSpace#image_name}

---

##### `imageVersionNumber`<sup>Optional</sup> <a name="imageVersionNumber" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages.property.imageVersionNumber"></a>

```java
public java.lang.Number getImageVersionNumber();
```

- *Type:* java.lang.Number

The version number of the CustomImage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#image_version_number SagemakerSpace#image_version_number}

---

### SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec <a name="SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec;

SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.builder()
//  .instanceType(java.lang.String)
//  .lifecycleConfigArn(java.lang.String)
//  .sageMakerImageArn(java.lang.String)
//  .sageMakerImageVersionArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | The instance type that the image version runs on. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>java.lang.String</code> | The ARN of the SageMaker image that the image version belongs to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>java.lang.String</code> | The ARN of the image version created on the instance. |

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

The instance type that the image version runs on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#instance_type SagemakerSpace#instance_type}

---

##### `lifecycleConfigArn`<sup>Optional</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#lifecycle_config_arn SagemakerSpace#lifecycle_config_arn}

---

##### `sageMakerImageArn`<sup>Optional</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sageMakerImageArn"></a>

```java
public java.lang.String getSageMakerImageArn();
```

- *Type:* java.lang.String

The ARN of the SageMaker image that the image version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#sage_maker_image_arn SagemakerSpace#sage_maker_image_arn}

---

##### `sageMakerImageVersionArn`<sup>Optional</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn"></a>

```java
public java.lang.String getSageMakerImageVersionArn();
```

- *Type:* java.lang.String

The ARN of the image version created on the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#sage_maker_image_version_arn SagemakerSpace#sage_maker_image_version_arn}

---

### SagemakerSpaceSpaceSettingsSpaceStorageSettings <a name="SagemakerSpaceSpaceSettingsSpaceStorageSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsSpaceStorageSettings;

SagemakerSpaceSpaceSettingsSpaceStorageSettings.builder()
//  .ebsStorageSettings(SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings.property.ebsStorageSettings">ebsStorageSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings</a></code> | Properties related to the space's Amazon Elastic Block Store volume. |

---

##### `ebsStorageSettings`<sup>Optional</sup> <a name="ebsStorageSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings.property.ebsStorageSettings"></a>

```java
public SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings getEbsStorageSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings</a>

Properties related to the space's Amazon Elastic Block Store volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#ebs_storage_settings SagemakerSpace#ebs_storage_settings}

---

### SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings <a name="SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings;

SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings.builder()
//  .ebsVolumeSizeInGb(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings.property.ebsVolumeSizeInGb">ebsVolumeSizeInGb</a></code> | <code>java.lang.Number</code> | Size of the Amazon EBS volume in Gb. |

---

##### `ebsVolumeSizeInGb`<sup>Optional</sup> <a name="ebsVolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings.property.ebsVolumeSizeInGb"></a>

```java
public java.lang.Number getEbsVolumeSizeInGb();
```

- *Type:* java.lang.Number

Size of the Amazon EBS volume in Gb.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#ebs_volume_size_in_gb SagemakerSpace#ebs_volume_size_in_gb}

---

### SagemakerSpaceSpaceSharingSettings <a name="SagemakerSpaceSpaceSharingSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSharingSettings;

SagemakerSpaceSpaceSharingSettings.builder()
//  .sharingType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettings.property.sharingType">sharingType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#sharing_type SagemakerSpace#sharing_type}. |

---

##### `sharingType`<sup>Optional</sup> <a name="sharingType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettings.property.sharingType"></a>

```java
public java.lang.String getSharingType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#sharing_type SagemakerSpace#sharing_type}.

---

### SagemakerSpaceTags <a name="SagemakerSpaceTags" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceTags;

SagemakerSpaceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#key SagemakerSpace#key}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#value SagemakerSpace#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#key SagemakerSpace#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#value SagemakerSpace#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerSpaceOwnershipSettingsOutputReference <a name="SagemakerSpaceOwnershipSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceOwnershipSettingsOutputReference;

new SagemakerSpaceOwnershipSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.resetOwnerUserProfileName">resetOwnerUserProfileName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOwnerUserProfileName` <a name="resetOwnerUserProfileName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.resetOwnerUserProfileName"></a>

```java
public void resetOwnerUserProfileName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.ownerUserProfileNameInput">ownerUserProfileNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.ownerUserProfileName">ownerUserProfileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettings">SagemakerSpaceOwnershipSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ownerUserProfileNameInput`<sup>Optional</sup> <a name="ownerUserProfileNameInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.ownerUserProfileNameInput"></a>

```java
public java.lang.String getOwnerUserProfileNameInput();
```

- *Type:* java.lang.String

---

##### `ownerUserProfileName`<sup>Required</sup> <a name="ownerUserProfileName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.ownerUserProfileName"></a>

```java
public java.lang.String getOwnerUserProfileName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerSpaceOwnershipSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettings">SagemakerSpaceOwnershipSettings</a>

---


### SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference;

new SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetIdleTimeoutInMinutes">resetIdleTimeoutInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdleTimeoutInMinutes` <a name="resetIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetIdleTimeoutInMinutes"></a>

```java
public void resetIdleTimeoutInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutesInput">idleTimeoutInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idleTimeoutInMinutesInput`<sup>Optional</sup> <a name="idleTimeoutInMinutesInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutesInput"></a>

```java
public java.lang.Number getIdleTimeoutInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `idleTimeoutInMinutes`<sup>Required</sup> <a name="idleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutes"></a>

```java
public java.lang.Number getIdleTimeoutInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a>

---


### SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference <a name="SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference;

new SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.putIdleSettings">putIdleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resetIdleSettings">resetIdleSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdleSettings` <a name="putIdleSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.putIdleSettings"></a>

```java
public void putIdleSettings(SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.putIdleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a>

---

##### `resetIdleSettings` <a name="resetIdleSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resetIdleSettings"></a>

```java
public void resetIdleSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.idleSettings">idleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.idleSettingsInput">idleSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idleSettings`<sup>Required</sup> <a name="idleSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.idleSettings"></a>

```java
public SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference getIdleSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference</a>

---

##### `idleSettingsInput`<sup>Optional</sup> <a name="idleSettingsInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.idleSettingsInput"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings getIdleSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement</a>

---


### SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference;

new SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">resetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn">resetSageMakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn">resetSageMakerImageVersionArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetLifecycleConfigArn` <a name="resetLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```java
public void resetLifecycleConfigArn()
```

##### `resetSageMakerImageArn` <a name="resetSageMakerImageArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn"></a>

```java
public void resetSageMakerImageArn()
```

##### `resetSageMakerImageVersionArn` <a name="resetSageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn"></a>

```java
public void resetSageMakerImageVersionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycleConfigArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput">sageMakerImageArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput">sageMakerImageVersionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArnInput`<sup>Optional</sup> <a name="lifecycleConfigArnInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```java
public java.lang.String getLifecycleConfigArnInput();
```

- *Type:* java.lang.String

---

##### `sageMakerImageArnInput`<sup>Optional</sup> <a name="sageMakerImageArnInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput"></a>

```java
public java.lang.String getSageMakerImageArnInput();
```

- *Type:* java.lang.String

---

##### `sageMakerImageVersionArnInput`<sup>Optional</sup> <a name="sageMakerImageVersionArnInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput"></a>

```java
public java.lang.String getSageMakerImageVersionArnInput();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArn`<sup>Required</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

---

##### `sageMakerImageArn`<sup>Required</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn"></a>

```java
public java.lang.String getSageMakerImageArn();
```

- *Type:* java.lang.String

---

##### `sageMakerImageVersionArn`<sup>Required</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn"></a>

```java
public java.lang.String getSageMakerImageVersionArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec</a>

---


### SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference;

new SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.putAppLifecycleManagement">putAppLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.putDefaultResourceSpec">putDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.resetAppLifecycleManagement">resetAppLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.resetDefaultResourceSpec">resetDefaultResourceSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAppLifecycleManagement` <a name="putAppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.putAppLifecycleManagement"></a>

```java
public void putAppLifecycleManagement(SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.putAppLifecycleManagement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement</a>

---

##### `putDefaultResourceSpec` <a name="putDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.putDefaultResourceSpec"></a>

```java
public void putDefaultResourceSpec(SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec</a>

---

##### `resetAppLifecycleManagement` <a name="resetAppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.resetAppLifecycleManagement"></a>

```java
public void resetAppLifecycleManagement()
```

##### `resetDefaultResourceSpec` <a name="resetDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```java
public void resetDefaultResourceSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.appLifecycleManagement">appLifecycleManagement</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.appLifecycleManagementInput">appLifecycleManagementInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpecInput">defaultResourceSpecInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appLifecycleManagement`<sup>Required</sup> <a name="appLifecycleManagement" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.appLifecycleManagement"></a>

```java
public SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference getAppLifecycleManagement();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference</a>

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpec"></a>

```java
public SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `appLifecycleManagementInput`<sup>Optional</sup> <a name="appLifecycleManagementInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.appLifecycleManagementInput"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement getAppLifecycleManagementInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement</a>

---

##### `defaultResourceSpecInput`<sup>Optional</sup> <a name="defaultResourceSpecInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec getDefaultResourceSpecInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsCodeEditorAppSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettings</a>

---


### SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference <a name="SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference;

new SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.resetFileSystemId">resetFileSystemId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileSystemId` <a name="resetFileSystemId" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.resetFileSystemId"></a>

```java
public void resetFileSystemId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.property.fileSystemIdInput"></a>

```java
public java.lang.String getFileSystemIdInput();
```

- *Type:* java.lang.String

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem</a>

---


### SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference <a name="SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference;

new SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.resetFileSystemId">resetFileSystemId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileSystemId` <a name="resetFileSystemId" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.resetFileSystemId"></a>

```java
public void resetFileSystemId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.property.fileSystemIdInput"></a>

```java
public java.lang.String getFileSystemIdInput();
```

- *Type:* java.lang.String

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem</a>

---


### SagemakerSpaceSpaceSettingsCustomFileSystemsList <a name="SagemakerSpaceSpaceSettingsCustomFileSystemsList" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsCustomFileSystemsList;

new SagemakerSpaceSpaceSettingsCustomFileSystemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.get"></a>

```java
public SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems">SagemakerSpaceSpaceSettingsCustomFileSystems</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerSpaceSpaceSettingsCustomFileSystems> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems">SagemakerSpaceSpaceSettingsCustomFileSystems</a>>

---


### SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference <a name="SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference;

new SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.putEfsFileSystem">putEfsFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.putFsxLustreFileSystem">putFsxLustreFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.putS3FileSystem">putS3FileSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.resetEfsFileSystem">resetEfsFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.resetFsxLustreFileSystem">resetFsxLustreFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.resetS3FileSystem">resetS3FileSystem</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEfsFileSystem` <a name="putEfsFileSystem" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.putEfsFileSystem"></a>

```java
public void putEfsFileSystem(SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.putEfsFileSystem.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem</a>

---

##### `putFsxLustreFileSystem` <a name="putFsxLustreFileSystem" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.putFsxLustreFileSystem"></a>

```java
public void putFsxLustreFileSystem(SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.putFsxLustreFileSystem.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem</a>

---

##### `putS3FileSystem` <a name="putS3FileSystem" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.putS3FileSystem"></a>

```java
public void putS3FileSystem(SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.putS3FileSystem.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem</a>

---

##### `resetEfsFileSystem` <a name="resetEfsFileSystem" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.resetEfsFileSystem"></a>

```java
public void resetEfsFileSystem()
```

##### `resetFsxLustreFileSystem` <a name="resetFsxLustreFileSystem" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.resetFsxLustreFileSystem"></a>

```java
public void resetFsxLustreFileSystem()
```

##### `resetS3FileSystem` <a name="resetS3FileSystem" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.resetS3FileSystem"></a>

```java
public void resetS3FileSystem()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.efsFileSystem">efsFileSystem</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference">SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.fsxLustreFileSystem">fsxLustreFileSystem</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference">SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.s3FileSystem">s3FileSystem</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference">SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.efsFileSystemInput">efsFileSystemInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.fsxLustreFileSystemInput">fsxLustreFileSystemInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.s3FileSystemInput">s3FileSystemInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems">SagemakerSpaceSpaceSettingsCustomFileSystems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `efsFileSystem`<sup>Required</sup> <a name="efsFileSystem" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.efsFileSystem"></a>

```java
public SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference getEfsFileSystem();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference">SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference</a>

---

##### `fsxLustreFileSystem`<sup>Required</sup> <a name="fsxLustreFileSystem" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.fsxLustreFileSystem"></a>

```java
public SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference getFsxLustreFileSystem();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference">SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference</a>

---

##### `s3FileSystem`<sup>Required</sup> <a name="s3FileSystem" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.s3FileSystem"></a>

```java
public SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference getS3FileSystem();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference">SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference</a>

---

##### `efsFileSystemInput`<sup>Optional</sup> <a name="efsFileSystemInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.efsFileSystemInput"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem getEfsFileSystemInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem</a>

---

##### `fsxLustreFileSystemInput`<sup>Optional</sup> <a name="fsxLustreFileSystemInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.fsxLustreFileSystemInput"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem getFsxLustreFileSystemInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem</a>

---

##### `s3FileSystemInput`<sup>Optional</sup> <a name="s3FileSystemInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.s3FileSystemInput"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem getS3FileSystemInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsCustomFileSystems getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems">SagemakerSpaceSpaceSettingsCustomFileSystems</a>

---


### SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference <a name="SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference;

new SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.resetS3Uri">resetS3Uri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3Uri` <a name="resetS3Uri" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.resetS3Uri"></a>

```java
public void resetS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.property.s3UriInput"></a>

```java
public java.lang.String getS3UriInput();
```

- *Type:* java.lang.String

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem</a>

---


### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference;

new SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetIdleTimeoutInMinutes">resetIdleTimeoutInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdleTimeoutInMinutes` <a name="resetIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetIdleTimeoutInMinutes"></a>

```java
public void resetIdleTimeoutInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutesInput">idleTimeoutInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idleTimeoutInMinutesInput`<sup>Optional</sup> <a name="idleTimeoutInMinutesInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutesInput"></a>

```java
public java.lang.Number getIdleTimeoutInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `idleTimeoutInMinutes`<sup>Required</sup> <a name="idleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutes"></a>

```java
public java.lang.Number getIdleTimeoutInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a>

---


### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference;

new SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.putIdleSettings">putIdleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resetIdleSettings">resetIdleSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdleSettings` <a name="putIdleSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.putIdleSettings"></a>

```java
public void putIdleSettings(SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.putIdleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a>

---

##### `resetIdleSettings` <a name="resetIdleSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resetIdleSettings"></a>

```java
public void resetIdleSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.idleSettings">idleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.idleSettingsInput">idleSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idleSettings`<sup>Required</sup> <a name="idleSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.idleSettings"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference getIdleSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference</a>

---

##### `idleSettingsInput`<sup>Optional</sup> <a name="idleSettingsInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.idleSettingsInput"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings getIdleSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement</a>

---


### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList;

new SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.get"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories</a>>

---


### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference;

new SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.resetRepositoryUrl">resetRepositoryUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRepositoryUrl` <a name="resetRepositoryUrl" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.resetRepositoryUrl"></a>

```java
public void resetRepositoryUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.repositoryUrlInput">repositoryUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.repositoryUrl">repositoryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `repositoryUrlInput`<sup>Optional</sup> <a name="repositoryUrlInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.repositoryUrlInput"></a>

```java
public java.lang.String getRepositoryUrlInput();
```

- *Type:* java.lang.String

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.repositoryUrl"></a>

```java
public java.lang.String getRepositoryUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories</a>

---


### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference;

new SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">resetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn">resetSageMakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn">resetSageMakerImageVersionArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetLifecycleConfigArn` <a name="resetLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```java
public void resetLifecycleConfigArn()
```

##### `resetSageMakerImageArn` <a name="resetSageMakerImageArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn"></a>

```java
public void resetSageMakerImageArn()
```

##### `resetSageMakerImageVersionArn` <a name="resetSageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn"></a>

```java
public void resetSageMakerImageVersionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycleConfigArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput">sageMakerImageArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput">sageMakerImageVersionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArnInput`<sup>Optional</sup> <a name="lifecycleConfigArnInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```java
public java.lang.String getLifecycleConfigArnInput();
```

- *Type:* java.lang.String

---

##### `sageMakerImageArnInput`<sup>Optional</sup> <a name="sageMakerImageArnInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput"></a>

```java
public java.lang.String getSageMakerImageArnInput();
```

- *Type:* java.lang.String

---

##### `sageMakerImageVersionArnInput`<sup>Optional</sup> <a name="sageMakerImageVersionArnInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput"></a>

```java
public java.lang.String getSageMakerImageVersionArnInput();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArn`<sup>Required</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

---

##### `sageMakerImageArn`<sup>Required</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn"></a>

```java
public java.lang.String getSageMakerImageArn();
```

- *Type:* java.lang.String

---

##### `sageMakerImageVersionArn`<sup>Required</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn"></a>

```java
public java.lang.String getSageMakerImageVersionArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec</a>

---


### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference;

new SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.putAppLifecycleManagement">putAppLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.putCodeRepositories">putCodeRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.putDefaultResourceSpec">putDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.resetAppLifecycleManagement">resetAppLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.resetCodeRepositories">resetCodeRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.resetDefaultResourceSpec">resetDefaultResourceSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAppLifecycleManagement` <a name="putAppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.putAppLifecycleManagement"></a>

```java
public void putAppLifecycleManagement(SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.putAppLifecycleManagement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement</a>

---

##### `putCodeRepositories` <a name="putCodeRepositories" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.putCodeRepositories"></a>

```java
public void putCodeRepositories(IResolvable|java.util.List<SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.putCodeRepositories.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories</a>>

---

##### `putDefaultResourceSpec` <a name="putDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.putDefaultResourceSpec"></a>

```java
public void putDefaultResourceSpec(SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec</a>

---

##### `resetAppLifecycleManagement` <a name="resetAppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.resetAppLifecycleManagement"></a>

```java
public void resetAppLifecycleManagement()
```

##### `resetCodeRepositories` <a name="resetCodeRepositories" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.resetCodeRepositories"></a>

```java
public void resetCodeRepositories()
```

##### `resetDefaultResourceSpec` <a name="resetDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```java
public void resetDefaultResourceSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.appLifecycleManagement">appLifecycleManagement</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.codeRepositories">codeRepositories</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.appLifecycleManagementInput">appLifecycleManagementInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.codeRepositoriesInput">codeRepositoriesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpecInput">defaultResourceSpecInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appLifecycleManagement`<sup>Required</sup> <a name="appLifecycleManagement" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.appLifecycleManagement"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference getAppLifecycleManagement();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference</a>

---

##### `codeRepositories`<sup>Required</sup> <a name="codeRepositories" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.codeRepositories"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList getCodeRepositories();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList</a>

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpec"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `appLifecycleManagementInput`<sup>Optional</sup> <a name="appLifecycleManagementInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.appLifecycleManagementInput"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement getAppLifecycleManagementInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement</a>

---

##### `codeRepositoriesInput`<sup>Optional</sup> <a name="codeRepositoriesInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.codeRepositoriesInput"></a>

```java
public IResolvable|java.util.List<SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories> getCodeRepositoriesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories</a>>

---

##### `defaultResourceSpecInput`<sup>Optional</sup> <a name="defaultResourceSpecInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec getDefaultResourceSpecInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsJupyterLabAppSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettings</a>

---


### SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference;

new SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">resetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn">resetSageMakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn">resetSageMakerImageVersionArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetLifecycleConfigArn` <a name="resetLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```java
public void resetLifecycleConfigArn()
```

##### `resetSageMakerImageArn` <a name="resetSageMakerImageArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn"></a>

```java
public void resetSageMakerImageArn()
```

##### `resetSageMakerImageVersionArn` <a name="resetSageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn"></a>

```java
public void resetSageMakerImageVersionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycleConfigArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput">sageMakerImageArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput">sageMakerImageVersionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArnInput`<sup>Optional</sup> <a name="lifecycleConfigArnInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```java
public java.lang.String getLifecycleConfigArnInput();
```

- *Type:* java.lang.String

---

##### `sageMakerImageArnInput`<sup>Optional</sup> <a name="sageMakerImageArnInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput"></a>

```java
public java.lang.String getSageMakerImageArnInput();
```

- *Type:* java.lang.String

---

##### `sageMakerImageVersionArnInput`<sup>Optional</sup> <a name="sageMakerImageVersionArnInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput"></a>

```java
public java.lang.String getSageMakerImageVersionArnInput();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArn`<sup>Required</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

---

##### `sageMakerImageArn`<sup>Required</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn"></a>

```java
public java.lang.String getSageMakerImageArn();
```

- *Type:* java.lang.String

---

##### `sageMakerImageVersionArn`<sup>Required</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn"></a>

```java
public java.lang.String getSageMakerImageVersionArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---


### SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference;

new SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec">putDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.resetDefaultResourceSpec">resetDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.resetLifecycleConfigArns">resetLifecycleConfigArns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefaultResourceSpec` <a name="putDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec"></a>

```java
public void putDefaultResourceSpec(SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---

##### `resetDefaultResourceSpec` <a name="resetDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```java
public void resetDefaultResourceSpec()
```

##### `resetLifecycleConfigArns` <a name="resetLifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```java
public void resetLifecycleConfigArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpecInput">defaultResourceSpecInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArnsInput">lifecycleConfigArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings">SagemakerSpaceSpaceSettingsJupyterServerAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpec"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `defaultResourceSpecInput`<sup>Optional</sup> <a name="defaultResourceSpecInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec getDefaultResourceSpecInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---

##### `lifecycleConfigArnsInput`<sup>Optional</sup> <a name="lifecycleConfigArnsInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```java
public java.util.List<java.lang.String> getLifecycleConfigArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lifecycleConfigArns`<sup>Required</sup> <a name="lifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```java
public java.util.List<java.lang.String> getLifecycleConfigArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsJupyterServerAppSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings">SagemakerSpaceSpaceSettingsJupyterServerAppSettings</a>

---


### SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList <a name="SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList;

new SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.get"></a>

```java
public SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages</a>>

---


### SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference <a name="SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference;

new SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resetAppImageConfigName">resetAppImageConfigName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resetImageName">resetImageName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resetImageVersionNumber">resetImageVersionNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppImageConfigName` <a name="resetAppImageConfigName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resetAppImageConfigName"></a>

```java
public void resetAppImageConfigName()
```

##### `resetImageName` <a name="resetImageName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resetImageName"></a>

```java
public void resetImageName()
```

##### `resetImageVersionNumber` <a name="resetImageVersionNumber" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resetImageVersionNumber"></a>

```java
public void resetImageVersionNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.appImageConfigNameInput">appImageConfigNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageNameInput">imageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageVersionNumberInput">imageVersionNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.appImageConfigName">appImageConfigName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageName">imageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageVersionNumber">imageVersionNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appImageConfigNameInput`<sup>Optional</sup> <a name="appImageConfigNameInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.appImageConfigNameInput"></a>

```java
public java.lang.String getAppImageConfigNameInput();
```

- *Type:* java.lang.String

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageNameInput"></a>

```java
public java.lang.String getImageNameInput();
```

- *Type:* java.lang.String

---

##### `imageVersionNumberInput`<sup>Optional</sup> <a name="imageVersionNumberInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageVersionNumberInput"></a>

```java
public java.lang.Number getImageVersionNumberInput();
```

- *Type:* java.lang.Number

---

##### `appImageConfigName`<sup>Required</sup> <a name="appImageConfigName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.appImageConfigName"></a>

```java
public java.lang.String getAppImageConfigName();
```

- *Type:* java.lang.String

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

---

##### `imageVersionNumber`<sup>Required</sup> <a name="imageVersionNumber" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageVersionNumber"></a>

```java
public java.lang.Number getImageVersionNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages</a>

---


### SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference;

new SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">resetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn">resetSageMakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn">resetSageMakerImageVersionArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetLifecycleConfigArn` <a name="resetLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```java
public void resetLifecycleConfigArn()
```

##### `resetSageMakerImageArn` <a name="resetSageMakerImageArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn"></a>

```java
public void resetSageMakerImageArn()
```

##### `resetSageMakerImageVersionArn` <a name="resetSageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn"></a>

```java
public void resetSageMakerImageVersionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycleConfigArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput">sageMakerImageArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput">sageMakerImageVersionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArnInput`<sup>Optional</sup> <a name="lifecycleConfigArnInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```java
public java.lang.String getLifecycleConfigArnInput();
```

- *Type:* java.lang.String

---

##### `sageMakerImageArnInput`<sup>Optional</sup> <a name="sageMakerImageArnInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput"></a>

```java
public java.lang.String getSageMakerImageArnInput();
```

- *Type:* java.lang.String

---

##### `sageMakerImageVersionArnInput`<sup>Optional</sup> <a name="sageMakerImageVersionArnInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput"></a>

```java
public java.lang.String getSageMakerImageVersionArnInput();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArn`<sup>Required</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

---

##### `sageMakerImageArn`<sup>Required</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn"></a>

```java
public java.lang.String getSageMakerImageArn();
```

- *Type:* java.lang.String

---

##### `sageMakerImageVersionArn`<sup>Required</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn"></a>

```java
public java.lang.String getSageMakerImageVersionArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---


### SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference;

new SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.putCustomImages">putCustomImages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec">putDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resetCustomImages">resetCustomImages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resetDefaultResourceSpec">resetDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resetLifecycleConfigArns">resetLifecycleConfigArns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomImages` <a name="putCustomImages" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.putCustomImages"></a>

```java
public void putCustomImages(IResolvable|java.util.List<SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.putCustomImages.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages</a>>

---

##### `putDefaultResourceSpec` <a name="putDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec"></a>

```java
public void putDefaultResourceSpec(SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---

##### `resetCustomImages` <a name="resetCustomImages" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resetCustomImages"></a>

```java
public void resetCustomImages()
```

##### `resetDefaultResourceSpec` <a name="resetDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```java
public void resetDefaultResourceSpec()
```

##### `resetLifecycleConfigArns` <a name="resetLifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```java
public void resetLifecycleConfigArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.customImages">customImages</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.customImagesInput">customImagesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpecInput">defaultResourceSpecInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArnsInput">lifecycleConfigArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings">SagemakerSpaceSpaceSettingsKernelGatewayAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customImages`<sup>Required</sup> <a name="customImages" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.customImages"></a>

```java
public SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList getCustomImages();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList</a>

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpec"></a>

```java
public SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `customImagesInput`<sup>Optional</sup> <a name="customImagesInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.customImagesInput"></a>

```java
public IResolvable|java.util.List<SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages> getCustomImagesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages</a>>

---

##### `defaultResourceSpecInput`<sup>Optional</sup> <a name="defaultResourceSpecInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec getDefaultResourceSpecInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---

##### `lifecycleConfigArnsInput`<sup>Optional</sup> <a name="lifecycleConfigArnsInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```java
public java.util.List<java.lang.String> getLifecycleConfigArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lifecycleConfigArns`<sup>Required</sup> <a name="lifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```java
public java.util.List<java.lang.String> getLifecycleConfigArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsKernelGatewayAppSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings">SagemakerSpaceSpaceSettingsKernelGatewayAppSettings</a>

---


### SagemakerSpaceSpaceSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsOutputReference;

new SagemakerSpaceSpaceSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putCodeEditorAppSettings">putCodeEditorAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putCustomFileSystems">putCustomFileSystems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putJupyterLabAppSettings">putJupyterLabAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putJupyterServerAppSettings">putJupyterServerAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putKernelGatewayAppSettings">putKernelGatewayAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putSpaceStorageSettings">putSpaceStorageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetAppType">resetAppType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetCodeEditorAppSettings">resetCodeEditorAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetCustomFileSystems">resetCustomFileSystems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetJupyterLabAppSettings">resetJupyterLabAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetJupyterServerAppSettings">resetJupyterServerAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetKernelGatewayAppSettings">resetKernelGatewayAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetRemoteAccess">resetRemoteAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetSpaceManagedResources">resetSpaceManagedResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetSpaceStorageSettings">resetSpaceStorageSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeEditorAppSettings` <a name="putCodeEditorAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putCodeEditorAppSettings"></a>

```java
public void putCodeEditorAppSettings(SagemakerSpaceSpaceSettingsCodeEditorAppSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putCodeEditorAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettings</a>

---

##### `putCustomFileSystems` <a name="putCustomFileSystems" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putCustomFileSystems"></a>

```java
public void putCustomFileSystems(IResolvable|java.util.List<SagemakerSpaceSpaceSettingsCustomFileSystems> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putCustomFileSystems.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems">SagemakerSpaceSpaceSettingsCustomFileSystems</a>>

---

##### `putJupyterLabAppSettings` <a name="putJupyterLabAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putJupyterLabAppSettings"></a>

```java
public void putJupyterLabAppSettings(SagemakerSpaceSpaceSettingsJupyterLabAppSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putJupyterLabAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettings</a>

---

##### `putJupyterServerAppSettings` <a name="putJupyterServerAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putJupyterServerAppSettings"></a>

```java
public void putJupyterServerAppSettings(SagemakerSpaceSpaceSettingsJupyterServerAppSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putJupyterServerAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings">SagemakerSpaceSpaceSettingsJupyterServerAppSettings</a>

---

##### `putKernelGatewayAppSettings` <a name="putKernelGatewayAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putKernelGatewayAppSettings"></a>

```java
public void putKernelGatewayAppSettings(SagemakerSpaceSpaceSettingsKernelGatewayAppSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putKernelGatewayAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings">SagemakerSpaceSpaceSettingsKernelGatewayAppSettings</a>

---

##### `putSpaceStorageSettings` <a name="putSpaceStorageSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putSpaceStorageSettings"></a>

```java
public void putSpaceStorageSettings(SagemakerSpaceSpaceSettingsSpaceStorageSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putSpaceStorageSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettings</a>

---

##### `resetAppType` <a name="resetAppType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetAppType"></a>

```java
public void resetAppType()
```

##### `resetCodeEditorAppSettings` <a name="resetCodeEditorAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetCodeEditorAppSettings"></a>

```java
public void resetCodeEditorAppSettings()
```

##### `resetCustomFileSystems` <a name="resetCustomFileSystems" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetCustomFileSystems"></a>

```java
public void resetCustomFileSystems()
```

##### `resetJupyterLabAppSettings` <a name="resetJupyterLabAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetJupyterLabAppSettings"></a>

```java
public void resetJupyterLabAppSettings()
```

##### `resetJupyterServerAppSettings` <a name="resetJupyterServerAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetJupyterServerAppSettings"></a>

```java
public void resetJupyterServerAppSettings()
```

##### `resetKernelGatewayAppSettings` <a name="resetKernelGatewayAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetKernelGatewayAppSettings"></a>

```java
public void resetKernelGatewayAppSettings()
```

##### `resetRemoteAccess` <a name="resetRemoteAccess" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetRemoteAccess"></a>

```java
public void resetRemoteAccess()
```

##### `resetSpaceManagedResources` <a name="resetSpaceManagedResources" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetSpaceManagedResources"></a>

```java
public void resetSpaceManagedResources()
```

##### `resetSpaceStorageSettings` <a name="resetSpaceStorageSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetSpaceStorageSettings"></a>

```java
public void resetSpaceStorageSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.codeEditorAppSettings">codeEditorAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.customFileSystems">customFileSystems</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList">SagemakerSpaceSpaceSettingsCustomFileSystemsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.jupyterLabAppSettings">jupyterLabAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.jupyterServerAppSettings">jupyterServerAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.kernelGatewayAppSettings">kernelGatewayAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.spaceStorageSettings">spaceStorageSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference">SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.appTypeInput">appTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.codeEditorAppSettingsInput">codeEditorAppSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.customFileSystemsInput">customFileSystemsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems">SagemakerSpaceSpaceSettingsCustomFileSystems</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.jupyterLabAppSettingsInput">jupyterLabAppSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.jupyterServerAppSettingsInput">jupyterServerAppSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings">SagemakerSpaceSpaceSettingsJupyterServerAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.kernelGatewayAppSettingsInput">kernelGatewayAppSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings">SagemakerSpaceSpaceSettingsKernelGatewayAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.remoteAccessInput">remoteAccessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.spaceManagedResourcesInput">spaceManagedResourcesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.spaceStorageSettingsInput">spaceStorageSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.appType">appType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.remoteAccess">remoteAccess</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.spaceManagedResources">spaceManagedResources</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings">SagemakerSpaceSpaceSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeEditorAppSettings`<sup>Required</sup> <a name="codeEditorAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.codeEditorAppSettings"></a>

```java
public SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference getCodeEditorAppSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference</a>

---

##### `customFileSystems`<sup>Required</sup> <a name="customFileSystems" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.customFileSystems"></a>

```java
public SagemakerSpaceSpaceSettingsCustomFileSystemsList getCustomFileSystems();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList">SagemakerSpaceSpaceSettingsCustomFileSystemsList</a>

---

##### `jupyterLabAppSettings`<sup>Required</sup> <a name="jupyterLabAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.jupyterLabAppSettings"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference getJupyterLabAppSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference</a>

---

##### `jupyterServerAppSettings`<sup>Required</sup> <a name="jupyterServerAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.jupyterServerAppSettings"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference getJupyterServerAppSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference</a>

---

##### `kernelGatewayAppSettings`<sup>Required</sup> <a name="kernelGatewayAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.kernelGatewayAppSettings"></a>

```java
public SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference getKernelGatewayAppSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference</a>

---

##### `spaceStorageSettings`<sup>Required</sup> <a name="spaceStorageSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.spaceStorageSettings"></a>

```java
public SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference getSpaceStorageSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference">SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference</a>

---

##### `appTypeInput`<sup>Optional</sup> <a name="appTypeInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.appTypeInput"></a>

```java
public java.lang.String getAppTypeInput();
```

- *Type:* java.lang.String

---

##### `codeEditorAppSettingsInput`<sup>Optional</sup> <a name="codeEditorAppSettingsInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.codeEditorAppSettingsInput"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsCodeEditorAppSettings getCodeEditorAppSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettings</a>

---

##### `customFileSystemsInput`<sup>Optional</sup> <a name="customFileSystemsInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.customFileSystemsInput"></a>

```java
public IResolvable|java.util.List<SagemakerSpaceSpaceSettingsCustomFileSystems> getCustomFileSystemsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems">SagemakerSpaceSpaceSettingsCustomFileSystems</a>>

---

##### `jupyterLabAppSettingsInput`<sup>Optional</sup> <a name="jupyterLabAppSettingsInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.jupyterLabAppSettingsInput"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsJupyterLabAppSettings getJupyterLabAppSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettings</a>

---

##### `jupyterServerAppSettingsInput`<sup>Optional</sup> <a name="jupyterServerAppSettingsInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.jupyterServerAppSettingsInput"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsJupyterServerAppSettings getJupyterServerAppSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings">SagemakerSpaceSpaceSettingsJupyterServerAppSettings</a>

---

##### `kernelGatewayAppSettingsInput`<sup>Optional</sup> <a name="kernelGatewayAppSettingsInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.kernelGatewayAppSettingsInput"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsKernelGatewayAppSettings getKernelGatewayAppSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings">SagemakerSpaceSpaceSettingsKernelGatewayAppSettings</a>

---

##### `remoteAccessInput`<sup>Optional</sup> <a name="remoteAccessInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.remoteAccessInput"></a>

```java
public java.lang.String getRemoteAccessInput();
```

- *Type:* java.lang.String

---

##### `spaceManagedResourcesInput`<sup>Optional</sup> <a name="spaceManagedResourcesInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.spaceManagedResourcesInput"></a>

```java
public java.lang.String getSpaceManagedResourcesInput();
```

- *Type:* java.lang.String

---

##### `spaceStorageSettingsInput`<sup>Optional</sup> <a name="spaceStorageSettingsInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.spaceStorageSettingsInput"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsSpaceStorageSettings getSpaceStorageSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettings</a>

---

##### `appType`<sup>Required</sup> <a name="appType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.appType"></a>

```java
public java.lang.String getAppType();
```

- *Type:* java.lang.String

---

##### `remoteAccess`<sup>Required</sup> <a name="remoteAccess" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.remoteAccess"></a>

```java
public java.lang.String getRemoteAccess();
```

- *Type:* java.lang.String

---

##### `spaceManagedResources`<sup>Required</sup> <a name="spaceManagedResources" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.spaceManagedResources"></a>

```java
public java.lang.String getSpaceManagedResources();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings">SagemakerSpaceSpaceSettings</a>

---


### SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference;

new SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.resetEbsVolumeSizeInGb">resetEbsVolumeSizeInGb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEbsVolumeSizeInGb` <a name="resetEbsVolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.resetEbsVolumeSizeInGb"></a>

```java
public void resetEbsVolumeSizeInGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.ebsVolumeSizeInGbInput">ebsVolumeSizeInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.ebsVolumeSizeInGb">ebsVolumeSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ebsVolumeSizeInGbInput`<sup>Optional</sup> <a name="ebsVolumeSizeInGbInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.ebsVolumeSizeInGbInput"></a>

```java
public java.lang.Number getEbsVolumeSizeInGbInput();
```

- *Type:* java.lang.Number

---

##### `ebsVolumeSizeInGb`<sup>Required</sup> <a name="ebsVolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.ebsVolumeSizeInGb"></a>

```java
public java.lang.Number getEbsVolumeSizeInGb();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings</a>

---


### SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference;

new SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.putEbsStorageSettings">putEbsStorageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.resetEbsStorageSettings">resetEbsStorageSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEbsStorageSettings` <a name="putEbsStorageSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.putEbsStorageSettings"></a>

```java
public void putEbsStorageSettings(SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.putEbsStorageSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings</a>

---

##### `resetEbsStorageSettings` <a name="resetEbsStorageSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.resetEbsStorageSettings"></a>

```java
public void resetEbsStorageSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.ebsStorageSettings">ebsStorageSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.ebsStorageSettingsInput">ebsStorageSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ebsStorageSettings`<sup>Required</sup> <a name="ebsStorageSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.ebsStorageSettings"></a>

```java
public SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference getEbsStorageSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference</a>

---

##### `ebsStorageSettingsInput`<sup>Optional</sup> <a name="ebsStorageSettingsInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.ebsStorageSettingsInput"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings getEbsStorageSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerSpaceSpaceSettingsSpaceStorageSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettings</a>

---


### SagemakerSpaceSpaceSharingSettingsOutputReference <a name="SagemakerSpaceSpaceSharingSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceSpaceSharingSettingsOutputReference;

new SagemakerSpaceSpaceSharingSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.resetSharingType">resetSharingType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSharingType` <a name="resetSharingType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.resetSharingType"></a>

```java
public void resetSharingType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.sharingTypeInput">sharingTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.sharingType">sharingType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettings">SagemakerSpaceSpaceSharingSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sharingTypeInput`<sup>Optional</sup> <a name="sharingTypeInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.sharingTypeInput"></a>

```java
public java.lang.String getSharingTypeInput();
```

- *Type:* java.lang.String

---

##### `sharingType`<sup>Required</sup> <a name="sharingType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.sharingType"></a>

```java
public java.lang.String getSharingType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerSpaceSpaceSharingSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettings">SagemakerSpaceSpaceSharingSettings</a>

---


### SagemakerSpaceTagsList <a name="SagemakerSpaceTagsList" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceTagsList;

new SagemakerSpaceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.get"></a>

```java
public SagemakerSpaceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTags">SagemakerSpaceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerSpaceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTags">SagemakerSpaceTags</a>>

---


### SagemakerSpaceTagsOutputReference <a name="SagemakerSpaceTagsOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_space.SagemakerSpaceTagsOutputReference;

new SagemakerSpaceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTags">SagemakerSpaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerSpaceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTags">SagemakerSpaceTags</a>

---



