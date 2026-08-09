# `iotsitewiseAsset` Submodule <a name="`iotsitewiseAsset` Submodule" id="@cdktn/provider-awscc.iotsitewiseAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotsitewiseAsset <a name="IotsitewiseAsset" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset awscc_iotsitewise_asset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_asset.IotsitewiseAsset;

IotsitewiseAsset.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .assetModelId(java.lang.String)
    .assetName(java.lang.String)
//  .assetDescription(java.lang.String)
//  .assetExternalId(java.lang.String)
//  .assetHierarchies(IResolvable|java.util.List<IotsitewiseAssetAssetHierarchies>)
//  .assetProperties(IResolvable|java.util.List<IotsitewiseAssetAssetProperties>)
//  .tags(IResolvable|java.util.List<IotsitewiseAssetTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.assetModelId">assetModelId</a></code> | <code>java.lang.String</code> | The ID of the asset model from which to create the asset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.assetName">assetName</a></code> | <code>java.lang.String</code> | A unique, friendly name for the asset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.assetDescription">assetDescription</a></code> | <code>java.lang.String</code> | A description for the asset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.assetExternalId">assetExternalId</a></code> | <code>java.lang.String</code> | The External ID of the asset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.assetHierarchies">assetHierarchies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset#asset_hierarchies IotsitewiseAsset#asset_hierarchies}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.assetProperties">assetProperties</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset#asset_properties IotsitewiseAsset#asset_properties}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>></code> | A list of key-value pairs that contain metadata for the asset. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `assetModelId`<sup>Required</sup> <a name="assetModelId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.assetModelId"></a>

- *Type:* java.lang.String

The ID of the asset model from which to create the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset#asset_model_id IotsitewiseAsset#asset_model_id}

---

##### `assetName`<sup>Required</sup> <a name="assetName" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.assetName"></a>

- *Type:* java.lang.String

A unique, friendly name for the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset#asset_name IotsitewiseAsset#asset_name}

---

##### `assetDescription`<sup>Optional</sup> <a name="assetDescription" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.assetDescription"></a>

- *Type:* java.lang.String

A description for the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset#asset_description IotsitewiseAsset#asset_description}

---

##### `assetExternalId`<sup>Optional</sup> <a name="assetExternalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.assetExternalId"></a>

- *Type:* java.lang.String

The External ID of the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset#asset_external_id IotsitewiseAsset#asset_external_id}

---

##### `assetHierarchies`<sup>Optional</sup> <a name="assetHierarchies" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.assetHierarchies"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset#asset_hierarchies IotsitewiseAsset#asset_hierarchies}.

---

##### `assetProperties`<sup>Optional</sup> <a name="assetProperties" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.assetProperties"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset#asset_properties IotsitewiseAsset#asset_properties}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>>

A list of key-value pairs that contain metadata for the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset#tags IotsitewiseAsset#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putAssetHierarchies">putAssetHierarchies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putAssetProperties">putAssetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetAssetDescription">resetAssetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetAssetExternalId">resetAssetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetAssetHierarchies">resetAssetHierarchies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetAssetProperties">resetAssetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAssetHierarchies` <a name="putAssetHierarchies" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putAssetHierarchies"></a>

```java
public void putAssetHierarchies(IResolvable|java.util.List<IotsitewiseAssetAssetHierarchies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putAssetHierarchies.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>>

---

##### `putAssetProperties` <a name="putAssetProperties" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putAssetProperties"></a>

```java
public void putAssetProperties(IResolvable|java.util.List<IotsitewiseAssetAssetProperties> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putAssetProperties.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<IotsitewiseAssetTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>>

---

##### `resetAssetDescription` <a name="resetAssetDescription" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetAssetDescription"></a>

```java
public void resetAssetDescription()
```

##### `resetAssetExternalId` <a name="resetAssetExternalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetAssetExternalId"></a>

```java
public void resetAssetExternalId()
```

##### `resetAssetHierarchies` <a name="resetAssetHierarchies" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetAssetHierarchies"></a>

```java
public void resetAssetHierarchies()
```

##### `resetAssetProperties` <a name="resetAssetProperties" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetAssetProperties"></a>

```java
public void resetAssetProperties()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotsitewiseAsset resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isConstruct"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_asset.IotsitewiseAsset;

IotsitewiseAsset.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_asset.IotsitewiseAsset;

IotsitewiseAsset.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_asset.IotsitewiseAsset;

IotsitewiseAsset.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_asset.IotsitewiseAsset;

IotsitewiseAsset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotsitewiseAsset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IotsitewiseAsset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotsitewiseAsset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotsitewiseAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IotsitewiseAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetArn">assetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetHierarchies">assetHierarchies</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList">IotsitewiseAssetAssetHierarchiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetId">assetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetProperties">assetProperties</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList">IotsitewiseAssetAssetPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList">IotsitewiseAssetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetDescriptionInput">assetDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetExternalIdInput">assetExternalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetHierarchiesInput">assetHierarchiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetModelIdInput">assetModelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetNameInput">assetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetPropertiesInput">assetPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetDescription">assetDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetExternalId">assetExternalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetModelId">assetModelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetName">assetName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `assetArn`<sup>Required</sup> <a name="assetArn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetArn"></a>

```java
public java.lang.String getAssetArn();
```

- *Type:* java.lang.String

---

##### `assetHierarchies`<sup>Required</sup> <a name="assetHierarchies" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetHierarchies"></a>

```java
public IotsitewiseAssetAssetHierarchiesList getAssetHierarchies();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList">IotsitewiseAssetAssetHierarchiesList</a>

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetId"></a>

```java
public java.lang.String getAssetId();
```

- *Type:* java.lang.String

---

##### `assetProperties`<sup>Required</sup> <a name="assetProperties" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetProperties"></a>

```java
public IotsitewiseAssetAssetPropertiesList getAssetProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList">IotsitewiseAssetAssetPropertiesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.tags"></a>

```java
public IotsitewiseAssetTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList">IotsitewiseAssetTagsList</a>

---

##### `assetDescriptionInput`<sup>Optional</sup> <a name="assetDescriptionInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetDescriptionInput"></a>

```java
public java.lang.String getAssetDescriptionInput();
```

- *Type:* java.lang.String

---

##### `assetExternalIdInput`<sup>Optional</sup> <a name="assetExternalIdInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetExternalIdInput"></a>

```java
public java.lang.String getAssetExternalIdInput();
```

- *Type:* java.lang.String

---

##### `assetHierarchiesInput`<sup>Optional</sup> <a name="assetHierarchiesInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetHierarchiesInput"></a>

```java
public IResolvable|java.util.List<IotsitewiseAssetAssetHierarchies> getAssetHierarchiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>>

---

##### `assetModelIdInput`<sup>Optional</sup> <a name="assetModelIdInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetModelIdInput"></a>

```java
public java.lang.String getAssetModelIdInput();
```

- *Type:* java.lang.String

---

##### `assetNameInput`<sup>Optional</sup> <a name="assetNameInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetNameInput"></a>

```java
public java.lang.String getAssetNameInput();
```

- *Type:* java.lang.String

---

##### `assetPropertiesInput`<sup>Optional</sup> <a name="assetPropertiesInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetPropertiesInput"></a>

```java
public IResolvable|java.util.List<IotsitewiseAssetAssetProperties> getAssetPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.tagsInput"></a>

```java
public IResolvable|java.util.List<IotsitewiseAssetTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>>

---

##### `assetDescription`<sup>Required</sup> <a name="assetDescription" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetDescription"></a>

```java
public java.lang.String getAssetDescription();
```

- *Type:* java.lang.String

---

##### `assetExternalId`<sup>Required</sup> <a name="assetExternalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetExternalId"></a>

```java
public java.lang.String getAssetExternalId();
```

- *Type:* java.lang.String

---

##### `assetModelId`<sup>Required</sup> <a name="assetModelId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetModelId"></a>

```java
public java.lang.String getAssetModelId();
```

- *Type:* java.lang.String

---

##### `assetName`<sup>Required</sup> <a name="assetName" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetName"></a>

```java
public java.lang.String getAssetName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotsitewiseAssetAssetHierarchies <a name="IotsitewiseAssetAssetHierarchies" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_asset.IotsitewiseAssetAssetHierarchies;

IotsitewiseAssetAssetHierarchies.builder()
//  .childAssetId(java.lang.String)
//  .externalId(java.lang.String)
//  .id(java.lang.String)
//  .logicalId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.property.childAssetId">childAssetId</a></code> | <code>java.lang.String</code> | The ID of the child asset to be associated. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.property.externalId">externalId</a></code> | <code>java.lang.String</code> | String-friendly customer provided external ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.property.id">id</a></code> | <code>java.lang.String</code> | Customer provided actual UUID for property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.property.logicalId">logicalId</a></code> | <code>java.lang.String</code> | The LogicalID of a hierarchy in the parent asset's model. |

---

##### `childAssetId`<sup>Optional</sup> <a name="childAssetId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.property.childAssetId"></a>

```java
public java.lang.String getChildAssetId();
```

- *Type:* java.lang.String

The ID of the child asset to be associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset#child_asset_id IotsitewiseAsset#child_asset_id}

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

String-friendly customer provided external ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset#external_id IotsitewiseAsset#external_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Customer provided actual UUID for property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset#id IotsitewiseAsset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logicalId`<sup>Optional</sup> <a name="logicalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.property.logicalId"></a>

```java
public java.lang.String getLogicalId();
```

- *Type:* java.lang.String

The LogicalID of a hierarchy in the parent asset's model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset#logical_id IotsitewiseAsset#logical_id}

---

### IotsitewiseAssetAssetProperties <a name="IotsitewiseAssetAssetProperties" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_asset.IotsitewiseAssetAssetProperties;

IotsitewiseAssetAssetProperties.builder()
//  .alias(java.lang.String)
//  .externalId(java.lang.String)
//  .id(java.lang.String)
//  .logicalId(java.lang.String)
//  .notificationState(java.lang.String)
//  .unit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.alias">alias</a></code> | <code>java.lang.String</code> | The property alias that identifies the property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.externalId">externalId</a></code> | <code>java.lang.String</code> | String-friendly customer provided external ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.id">id</a></code> | <code>java.lang.String</code> | Customer provided actual UUID for property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.logicalId">logicalId</a></code> | <code>java.lang.String</code> | Customer provided ID for property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.notificationState">notificationState</a></code> | <code>java.lang.String</code> | The MQTT notification state (ENABLED or DISABLED) for this asset property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.unit">unit</a></code> | <code>java.lang.String</code> | The unit of measure (such as Newtons or RPM) of the asset property. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

The property alias that identifies the property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset#alias IotsitewiseAsset#alias}

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

String-friendly customer provided external ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset#external_id IotsitewiseAsset#external_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Customer provided actual UUID for property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset#id IotsitewiseAsset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logicalId`<sup>Optional</sup> <a name="logicalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.logicalId"></a>

```java
public java.lang.String getLogicalId();
```

- *Type:* java.lang.String

Customer provided ID for property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset#logical_id IotsitewiseAsset#logical_id}

---

##### `notificationState`<sup>Optional</sup> <a name="notificationState" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.notificationState"></a>

```java
public java.lang.String getNotificationState();
```

- *Type:* java.lang.String

The MQTT notification state (ENABLED or DISABLED) for this asset property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset#notification_state IotsitewiseAsset#notification_state}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

The unit of measure (such as Newtons or RPM) of the asset property.

If you don't specify a value for this parameter, the service uses the value of the assetModelProperty in the asset model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset#unit IotsitewiseAsset#unit}

---

### IotsitewiseAssetConfig <a name="IotsitewiseAssetConfig" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_asset.IotsitewiseAssetConfig;

IotsitewiseAssetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .assetModelId(java.lang.String)
    .assetName(java.lang.String)
//  .assetDescription(java.lang.String)
//  .assetExternalId(java.lang.String)
//  .assetHierarchies(IResolvable|java.util.List<IotsitewiseAssetAssetHierarchies>)
//  .assetProperties(IResolvable|java.util.List<IotsitewiseAssetAssetProperties>)
//  .tags(IResolvable|java.util.List<IotsitewiseAssetTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetModelId">assetModelId</a></code> | <code>java.lang.String</code> | The ID of the asset model from which to create the asset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetName">assetName</a></code> | <code>java.lang.String</code> | A unique, friendly name for the asset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetDescription">assetDescription</a></code> | <code>java.lang.String</code> | A description for the asset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetExternalId">assetExternalId</a></code> | <code>java.lang.String</code> | The External ID of the asset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetHierarchies">assetHierarchies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset#asset_hierarchies IotsitewiseAsset#asset_hierarchies}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetProperties">assetProperties</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset#asset_properties IotsitewiseAsset#asset_properties}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>></code> | A list of key-value pairs that contain metadata for the asset. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `assetModelId`<sup>Required</sup> <a name="assetModelId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetModelId"></a>

```java
public java.lang.String getAssetModelId();
```

- *Type:* java.lang.String

The ID of the asset model from which to create the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset#asset_model_id IotsitewiseAsset#asset_model_id}

---

##### `assetName`<sup>Required</sup> <a name="assetName" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetName"></a>

```java
public java.lang.String getAssetName();
```

- *Type:* java.lang.String

A unique, friendly name for the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset#asset_name IotsitewiseAsset#asset_name}

---

##### `assetDescription`<sup>Optional</sup> <a name="assetDescription" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetDescription"></a>

```java
public java.lang.String getAssetDescription();
```

- *Type:* java.lang.String

A description for the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset#asset_description IotsitewiseAsset#asset_description}

---

##### `assetExternalId`<sup>Optional</sup> <a name="assetExternalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetExternalId"></a>

```java
public java.lang.String getAssetExternalId();
```

- *Type:* java.lang.String

The External ID of the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset#asset_external_id IotsitewiseAsset#asset_external_id}

---

##### `assetHierarchies`<sup>Optional</sup> <a name="assetHierarchies" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetHierarchies"></a>

```java
public IResolvable|java.util.List<IotsitewiseAssetAssetHierarchies> getAssetHierarchies();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset#asset_hierarchies IotsitewiseAsset#asset_hierarchies}.

---

##### `assetProperties`<sup>Optional</sup> <a name="assetProperties" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetProperties"></a>

```java
public IResolvable|java.util.List<IotsitewiseAssetAssetProperties> getAssetProperties();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset#asset_properties IotsitewiseAsset#asset_properties}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.tags"></a>

```java
public IResolvable|java.util.List<IotsitewiseAssetTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>>

A list of key-value pairs that contain metadata for the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset#tags IotsitewiseAsset#tags}

---

### IotsitewiseAssetTags <a name="IotsitewiseAssetTags" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_asset.IotsitewiseAssetTags;

IotsitewiseAssetTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset#key IotsitewiseAsset#key}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset#value IotsitewiseAsset#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset#key IotsitewiseAsset#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_asset#value IotsitewiseAsset#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotsitewiseAssetAssetHierarchiesList <a name="IotsitewiseAssetAssetHierarchiesList" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_asset.IotsitewiseAssetAssetHierarchiesList;

new IotsitewiseAssetAssetHierarchiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.get"></a>

```java
public IotsitewiseAssetAssetHierarchiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotsitewiseAssetAssetHierarchies> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>>

---


### IotsitewiseAssetAssetHierarchiesOutputReference <a name="IotsitewiseAssetAssetHierarchiesOutputReference" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_asset.IotsitewiseAssetAssetHierarchiesOutputReference;

new IotsitewiseAssetAssetHierarchiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resetChildAssetId">resetChildAssetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resetLogicalId">resetLogicalId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChildAssetId` <a name="resetChildAssetId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resetChildAssetId"></a>

```java
public void resetChildAssetId()
```

##### `resetExternalId` <a name="resetExternalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resetExternalId"></a>

```java
public void resetExternalId()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetLogicalId` <a name="resetLogicalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resetLogicalId"></a>

```java
public void resetLogicalId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.childAssetIdInput">childAssetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.logicalIdInput">logicalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.childAssetId">childAssetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.logicalId">logicalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `childAssetIdInput`<sup>Optional</sup> <a name="childAssetIdInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.childAssetIdInput"></a>

```java
public java.lang.String getChildAssetIdInput();
```

- *Type:* java.lang.String

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.externalIdInput"></a>

```java
public java.lang.String getExternalIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logicalIdInput`<sup>Optional</sup> <a name="logicalIdInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.logicalIdInput"></a>

```java
public java.lang.String getLogicalIdInput();
```

- *Type:* java.lang.String

---

##### `childAssetId`<sup>Required</sup> <a name="childAssetId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.childAssetId"></a>

```java
public java.lang.String getChildAssetId();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logicalId`<sup>Required</sup> <a name="logicalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.logicalId"></a>

```java
public java.lang.String getLogicalId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.internalValue"></a>

```java
public IResolvable|IotsitewiseAssetAssetHierarchies getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>

---


### IotsitewiseAssetAssetPropertiesList <a name="IotsitewiseAssetAssetPropertiesList" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_asset.IotsitewiseAssetAssetPropertiesList;

new IotsitewiseAssetAssetPropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.get"></a>

```java
public IotsitewiseAssetAssetPropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotsitewiseAssetAssetProperties> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>>

---


### IotsitewiseAssetAssetPropertiesOutputReference <a name="IotsitewiseAssetAssetPropertiesOutputReference" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_asset.IotsitewiseAssetAssetPropertiesOutputReference;

new IotsitewiseAssetAssetPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetLogicalId">resetLogicalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetNotificationState">resetNotificationState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetExternalId` <a name="resetExternalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetExternalId"></a>

```java
public void resetExternalId()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetLogicalId` <a name="resetLogicalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetLogicalId"></a>

```java
public void resetLogicalId()
```

##### `resetNotificationState` <a name="resetNotificationState" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetNotificationState"></a>

```java
public void resetNotificationState()
```

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetUnit"></a>

```java
public void resetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.logicalIdInput">logicalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.notificationStateInput">notificationStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.logicalId">logicalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.notificationState">notificationState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.externalIdInput"></a>

```java
public java.lang.String getExternalIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logicalIdInput`<sup>Optional</sup> <a name="logicalIdInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.logicalIdInput"></a>

```java
public java.lang.String getLogicalIdInput();
```

- *Type:* java.lang.String

---

##### `notificationStateInput`<sup>Optional</sup> <a name="notificationStateInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.notificationStateInput"></a>

```java
public java.lang.String getNotificationStateInput();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logicalId`<sup>Required</sup> <a name="logicalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.logicalId"></a>

```java
public java.lang.String getLogicalId();
```

- *Type:* java.lang.String

---

##### `notificationState`<sup>Required</sup> <a name="notificationState" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.notificationState"></a>

```java
public java.lang.String getNotificationState();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|IotsitewiseAssetAssetProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>

---


### IotsitewiseAssetTagsList <a name="IotsitewiseAssetTagsList" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_asset.IotsitewiseAssetTagsList;

new IotsitewiseAssetTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.get"></a>

```java
public IotsitewiseAssetTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotsitewiseAssetTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>>

---


### IotsitewiseAssetTagsOutputReference <a name="IotsitewiseAssetTagsOutputReference" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_asset.IotsitewiseAssetTagsOutputReference;

new IotsitewiseAssetTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotsitewiseAssetTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>

---



