# `panoramaPackageVersion` Submodule <a name="`panoramaPackageVersion` Submodule" id="@cdktn/provider-awscc.panoramaPackageVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PanoramaPackageVersion <a name="PanoramaPackageVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_package_version awscc_panorama_package_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer"></a>

```java
import io.cdktn.providers.awscc.panorama_package_version.PanoramaPackageVersion;

PanoramaPackageVersion.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .packageId(java.lang.String)
    .packageVersion(java.lang.String)
    .patchVersion(java.lang.String)
//  .markLatest(java.lang.Boolean|IResolvable)
//  .ownerAccount(java.lang.String)
//  .updatedLatestPatchVersion(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.packageId">packageId</a></code> | <code>java.lang.String</code> | A package ID. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.packageVersion">packageVersion</a></code> | <code>java.lang.String</code> | A package version. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.patchVersion">patchVersion</a></code> | <code>java.lang.String</code> | A patch version. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.markLatest">markLatest</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to mark the new version as the latest version. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.ownerAccount">ownerAccount</a></code> | <code>java.lang.String</code> | An owner account. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.updatedLatestPatchVersion">updatedLatestPatchVersion</a></code> | <code>java.lang.String</code> | If the version was marked latest, the new version to maker as latest. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `packageId`<sup>Required</sup> <a name="packageId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.packageId"></a>

- *Type:* java.lang.String

A package ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_package_version#package_id PanoramaPackageVersion#package_id}

---

##### `packageVersion`<sup>Required</sup> <a name="packageVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.packageVersion"></a>

- *Type:* java.lang.String

A package version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_package_version#package_version PanoramaPackageVersion#package_version}

---

##### `patchVersion`<sup>Required</sup> <a name="patchVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.patchVersion"></a>

- *Type:* java.lang.String

A patch version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_package_version#patch_version PanoramaPackageVersion#patch_version}

---

##### `markLatest`<sup>Optional</sup> <a name="markLatest" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.markLatest"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to mark the new version as the latest version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_package_version#mark_latest PanoramaPackageVersion#mark_latest}

---

##### `ownerAccount`<sup>Optional</sup> <a name="ownerAccount" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.ownerAccount"></a>

- *Type:* java.lang.String

An owner account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_package_version#owner_account PanoramaPackageVersion#owner_account}

---

##### `updatedLatestPatchVersion`<sup>Optional</sup> <a name="updatedLatestPatchVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.updatedLatestPatchVersion"></a>

- *Type:* java.lang.String

If the version was marked latest, the new version to maker as latest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_package_version#updated_latest_patch_version PanoramaPackageVersion#updated_latest_patch_version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetMarkLatest">resetMarkLatest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetOwnerAccount">resetOwnerAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetUpdatedLatestPatchVersion">resetUpdatedLatestPatchVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetMarkLatest` <a name="resetMarkLatest" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetMarkLatest"></a>

```java
public void resetMarkLatest()
```

##### `resetOwnerAccount` <a name="resetOwnerAccount" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetOwnerAccount"></a>

```java
public void resetOwnerAccount()
```

##### `resetUpdatedLatestPatchVersion` <a name="resetUpdatedLatestPatchVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetUpdatedLatestPatchVersion"></a>

```java
public void resetUpdatedLatestPatchVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PanoramaPackageVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isConstruct"></a>

```java
import io.cdktn.providers.awscc.panorama_package_version.PanoramaPackageVersion;

PanoramaPackageVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.panorama_package_version.PanoramaPackageVersion;

PanoramaPackageVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.panorama_package_version.PanoramaPackageVersion;

PanoramaPackageVersion.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.panorama_package_version.PanoramaPackageVersion;

PanoramaPackageVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PanoramaPackageVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PanoramaPackageVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PanoramaPackageVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PanoramaPackageVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_package_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PanoramaPackageVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.isLatestPatch">isLatestPatch</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageArn">packageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageName">packageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.registeredTime">registeredTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.statusDescription">statusDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.markLatestInput">markLatestInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.ownerAccountInput">ownerAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageIdInput">packageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageVersionInput">packageVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.patchVersionInput">patchVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.updatedLatestPatchVersionInput">updatedLatestPatchVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.markLatest">markLatest</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.ownerAccount">ownerAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageId">packageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageVersion">packageVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.patchVersion">patchVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.updatedLatestPatchVersion">updatedLatestPatchVersion</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isLatestPatch`<sup>Required</sup> <a name="isLatestPatch" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.isLatestPatch"></a>

```java
public IResolvable getIsLatestPatch();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `packageArn`<sup>Required</sup> <a name="packageArn" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageArn"></a>

```java
public java.lang.String getPackageArn();
```

- *Type:* java.lang.String

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageName"></a>

```java
public java.lang.String getPackageName();
```

- *Type:* java.lang.String

---

##### `registeredTime`<sup>Required</sup> <a name="registeredTime" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.registeredTime"></a>

```java
public java.lang.Number getRegisteredTime();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusDescription`<sup>Required</sup> <a name="statusDescription" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.statusDescription"></a>

```java
public java.lang.String getStatusDescription();
```

- *Type:* java.lang.String

---

##### `markLatestInput`<sup>Optional</sup> <a name="markLatestInput" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.markLatestInput"></a>

```java
public java.lang.Boolean|IResolvable getMarkLatestInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ownerAccountInput`<sup>Optional</sup> <a name="ownerAccountInput" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.ownerAccountInput"></a>

```java
public java.lang.String getOwnerAccountInput();
```

- *Type:* java.lang.String

---

##### `packageIdInput`<sup>Optional</sup> <a name="packageIdInput" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageIdInput"></a>

```java
public java.lang.String getPackageIdInput();
```

- *Type:* java.lang.String

---

##### `packageVersionInput`<sup>Optional</sup> <a name="packageVersionInput" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageVersionInput"></a>

```java
public java.lang.String getPackageVersionInput();
```

- *Type:* java.lang.String

---

##### `patchVersionInput`<sup>Optional</sup> <a name="patchVersionInput" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.patchVersionInput"></a>

```java
public java.lang.String getPatchVersionInput();
```

- *Type:* java.lang.String

---

##### `updatedLatestPatchVersionInput`<sup>Optional</sup> <a name="updatedLatestPatchVersionInput" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.updatedLatestPatchVersionInput"></a>

```java
public java.lang.String getUpdatedLatestPatchVersionInput();
```

- *Type:* java.lang.String

---

##### `markLatest`<sup>Required</sup> <a name="markLatest" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.markLatest"></a>

```java
public java.lang.Boolean|IResolvable getMarkLatest();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ownerAccount`<sup>Required</sup> <a name="ownerAccount" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.ownerAccount"></a>

```java
public java.lang.String getOwnerAccount();
```

- *Type:* java.lang.String

---

##### `packageId`<sup>Required</sup> <a name="packageId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageId"></a>

```java
public java.lang.String getPackageId();
```

- *Type:* java.lang.String

---

##### `packageVersion`<sup>Required</sup> <a name="packageVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageVersion"></a>

```java
public java.lang.String getPackageVersion();
```

- *Type:* java.lang.String

---

##### `patchVersion`<sup>Required</sup> <a name="patchVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.patchVersion"></a>

```java
public java.lang.String getPatchVersion();
```

- *Type:* java.lang.String

---

##### `updatedLatestPatchVersion`<sup>Required</sup> <a name="updatedLatestPatchVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.updatedLatestPatchVersion"></a>

```java
public java.lang.String getUpdatedLatestPatchVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PanoramaPackageVersionConfig <a name="PanoramaPackageVersionConfig" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.panorama_package_version.PanoramaPackageVersionConfig;

PanoramaPackageVersionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .packageId(java.lang.String)
    .packageVersion(java.lang.String)
    .patchVersion(java.lang.String)
//  .markLatest(java.lang.Boolean|IResolvable)
//  .ownerAccount(java.lang.String)
//  .updatedLatestPatchVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.packageId">packageId</a></code> | <code>java.lang.String</code> | A package ID. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.packageVersion">packageVersion</a></code> | <code>java.lang.String</code> | A package version. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.patchVersion">patchVersion</a></code> | <code>java.lang.String</code> | A patch version. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.markLatest">markLatest</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to mark the new version as the latest version. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.ownerAccount">ownerAccount</a></code> | <code>java.lang.String</code> | An owner account. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.updatedLatestPatchVersion">updatedLatestPatchVersion</a></code> | <code>java.lang.String</code> | If the version was marked latest, the new version to maker as latest. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `packageId`<sup>Required</sup> <a name="packageId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.packageId"></a>

```java
public java.lang.String getPackageId();
```

- *Type:* java.lang.String

A package ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_package_version#package_id PanoramaPackageVersion#package_id}

---

##### `packageVersion`<sup>Required</sup> <a name="packageVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.packageVersion"></a>

```java
public java.lang.String getPackageVersion();
```

- *Type:* java.lang.String

A package version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_package_version#package_version PanoramaPackageVersion#package_version}

---

##### `patchVersion`<sup>Required</sup> <a name="patchVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.patchVersion"></a>

```java
public java.lang.String getPatchVersion();
```

- *Type:* java.lang.String

A patch version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_package_version#patch_version PanoramaPackageVersion#patch_version}

---

##### `markLatest`<sup>Optional</sup> <a name="markLatest" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.markLatest"></a>

```java
public java.lang.Boolean|IResolvable getMarkLatest();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to mark the new version as the latest version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_package_version#mark_latest PanoramaPackageVersion#mark_latest}

---

##### `ownerAccount`<sup>Optional</sup> <a name="ownerAccount" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.ownerAccount"></a>

```java
public java.lang.String getOwnerAccount();
```

- *Type:* java.lang.String

An owner account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_package_version#owner_account PanoramaPackageVersion#owner_account}

---

##### `updatedLatestPatchVersion`<sup>Optional</sup> <a name="updatedLatestPatchVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.updatedLatestPatchVersion"></a>

```java
public java.lang.String getUpdatedLatestPatchVersion();
```

- *Type:* java.lang.String

If the version was marked latest, the new version to maker as latest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_package_version#updated_latest_patch_version PanoramaPackageVersion#updated_latest_patch_version}

---



