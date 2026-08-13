# `odbCloudVmCluster` Submodule <a name="`odbCloudVmCluster` Submodule" id="@cdktn/provider-awscc.odbCloudVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdbCloudVmCluster <a name="OdbCloudVmCluster" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster awscc_odb_cloud_vm_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbCloudVmCluster(Construct Scope, string Id, OdbCloudVmClusterConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig">OdbCloudVmClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig">OdbCloudVmClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putDataCollectionOptions">PutDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putDbNodes">PutDbNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putIamRoles">PutIamRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetCloudExadataInfrastructureId">ResetCloudExadataInfrastructureId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetClusterName">ResetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetCpuCoreCount">ResetCpuCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDataCollectionOptions">ResetDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDataStorageSizeInTBs">ResetDataStorageSizeInTBs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDbNodes">ResetDbNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDbNodeStorageSizeInGBs">ResetDbNodeStorageSizeInGBs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDbServers">ResetDbServers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetGiVersion">ResetGiVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetIamRoles">ResetIamRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetIsLocalBackupEnabled">ResetIsLocalBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetIsSparseDiskgroupEnabled">ResetIsSparseDiskgroupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetLicenseModel">ResetLicenseModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetMemorySizeInGBs">ResetMemorySizeInGBs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetOdbNetworkId">ResetOdbNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetScanListenerPortTcp">ResetScanListenerPortTcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetSshPublicKeys">ResetSshPublicKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetSystemVersion">ResetSystemVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataCollectionOptions` <a name="PutDataCollectionOptions" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putDataCollectionOptions"></a>

```csharp
private void PutDataCollectionOptions(OdbCloudVmClusterDataCollectionOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putDataCollectionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a>

---

##### `PutDbNodes` <a name="PutDbNodes" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putDbNodes"></a>

```csharp
private void PutDbNodes(IResolvable|OdbCloudVmClusterDbNodes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putDbNodes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>[]

---

##### `PutIamRoles` <a name="PutIamRoles" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putIamRoles"></a>

```csharp
private void PutIamRoles(IResolvable|OdbCloudVmClusterIamRoles[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putIamRoles.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putTags"></a>

```csharp
private void PutTags(IResolvable|OdbCloudVmClusterTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>[]

---

##### `ResetCloudExadataInfrastructureId` <a name="ResetCloudExadataInfrastructureId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetCloudExadataInfrastructureId"></a>

```csharp
private void ResetCloudExadataInfrastructureId()
```

##### `ResetClusterName` <a name="ResetClusterName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetClusterName"></a>

```csharp
private void ResetClusterName()
```

##### `ResetCpuCoreCount` <a name="ResetCpuCoreCount" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetCpuCoreCount"></a>

```csharp
private void ResetCpuCoreCount()
```

##### `ResetDataCollectionOptions` <a name="ResetDataCollectionOptions" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDataCollectionOptions"></a>

```csharp
private void ResetDataCollectionOptions()
```

##### `ResetDataStorageSizeInTBs` <a name="ResetDataStorageSizeInTBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDataStorageSizeInTBs"></a>

```csharp
private void ResetDataStorageSizeInTBs()
```

##### `ResetDbNodes` <a name="ResetDbNodes" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDbNodes"></a>

```csharp
private void ResetDbNodes()
```

##### `ResetDbNodeStorageSizeInGBs` <a name="ResetDbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDbNodeStorageSizeInGBs"></a>

```csharp
private void ResetDbNodeStorageSizeInGBs()
```

##### `ResetDbServers` <a name="ResetDbServers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDbServers"></a>

```csharp
private void ResetDbServers()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetGiVersion` <a name="ResetGiVersion" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetGiVersion"></a>

```csharp
private void ResetGiVersion()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetHostname"></a>

```csharp
private void ResetHostname()
```

##### `ResetIamRoles` <a name="ResetIamRoles" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetIamRoles"></a>

```csharp
private void ResetIamRoles()
```

##### `ResetIsLocalBackupEnabled` <a name="ResetIsLocalBackupEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetIsLocalBackupEnabled"></a>

```csharp
private void ResetIsLocalBackupEnabled()
```

##### `ResetIsSparseDiskgroupEnabled` <a name="ResetIsSparseDiskgroupEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetIsSparseDiskgroupEnabled"></a>

```csharp
private void ResetIsSparseDiskgroupEnabled()
```

##### `ResetLicenseModel` <a name="ResetLicenseModel" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetLicenseModel"></a>

```csharp
private void ResetLicenseModel()
```

##### `ResetMemorySizeInGBs` <a name="ResetMemorySizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetMemorySizeInGBs"></a>

```csharp
private void ResetMemorySizeInGBs()
```

##### `ResetOdbNetworkId` <a name="ResetOdbNetworkId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetOdbNetworkId"></a>

```csharp
private void ResetOdbNetworkId()
```

##### `ResetScanListenerPortTcp` <a name="ResetScanListenerPortTcp" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetScanListenerPortTcp"></a>

```csharp
private void ResetScanListenerPortTcp()
```

##### `ResetSshPublicKeys` <a name="ResetSshPublicKeys" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetSshPublicKeys"></a>

```csharp
private void ResetSshPublicKeys()
```

##### `ResetSystemVersion` <a name="ResetSystemVersion" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetSystemVersion"></a>

```csharp
private void ResetSystemVersion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OdbCloudVmCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OdbCloudVmCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OdbCloudVmCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OdbCloudVmCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OdbCloudVmCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OdbCloudVmCluster resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OdbCloudVmCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OdbCloudVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OdbCloudVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudVmClusterArn">CloudVmClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudVmClusterId">CloudVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.computeModel">ComputeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataCollectionOptions">DataCollectionOptions</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference">OdbCloudVmClusterDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodes">DbNodes</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList">OdbCloudVmClusterDbNodesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.diskRedundancy">DiskRedundancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.iamRoles">IamRoles</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList">OdbCloudVmClusterIamRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.listenerPort">ListenerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.ociResourceAnchorName">OciResourceAnchorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.ociUrl">OciUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanDnsName">ScanDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanIpIds">ScanIpIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.storageSizeInGBs">StorageSizeInGBs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList">OdbCloudVmClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.vipIds">VipIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudExadataInfrastructureIdInput">CloudExadataInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cpuCoreCountInput">CpuCoreCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataCollectionOptionsInput">DataCollectionOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataStorageSizeInTBsInput">DataStorageSizeInTBsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodesInput">DbNodesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodeStorageSizeInGBsInput">DbNodeStorageSizeInGBsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbServersInput">DbServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.giVersionInput">GiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.iamRolesInput">IamRolesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isLocalBackupEnabledInput">IsLocalBackupEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isSparseDiskgroupEnabledInput">IsSparseDiskgroupEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.licenseModelInput">LicenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.memorySizeInGBsInput">MemorySizeInGBsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.odbNetworkIdInput">OdbNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanListenerPortTcpInput">ScanListenerPortTcpInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.sshPublicKeysInput">SshPublicKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.systemVersionInput">SystemVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudExadataInfrastructureId">CloudExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataStorageSizeInTBs">DataStorageSizeInTBs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodeStorageSizeInGBs">DbNodeStorageSizeInGBs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbServers">DbServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.giVersion">GiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isLocalBackupEnabled">IsLocalBackupEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isSparseDiskgroupEnabled">IsSparseDiskgroupEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.memorySizeInGBs">MemorySizeInGBs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.odbNetworkId">OdbNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanListenerPortTcp">ScanListenerPortTcp</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.sshPublicKeys">SshPublicKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.systemVersion">SystemVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CloudVmClusterArn`<sup>Required</sup> <a name="CloudVmClusterArn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudVmClusterArn"></a>

```csharp
public string CloudVmClusterArn { get; }
```

- *Type:* string

---

##### `CloudVmClusterId`<sup>Required</sup> <a name="CloudVmClusterId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudVmClusterId"></a>

```csharp
public string CloudVmClusterId { get; }
```

- *Type:* string

---

##### `ComputeModel`<sup>Required</sup> <a name="ComputeModel" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.computeModel"></a>

```csharp
public string ComputeModel { get; }
```

- *Type:* string

---

##### `DataCollectionOptions`<sup>Required</sup> <a name="DataCollectionOptions" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataCollectionOptions"></a>

```csharp
public OdbCloudVmClusterDataCollectionOptionsOutputReference DataCollectionOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference">OdbCloudVmClusterDataCollectionOptionsOutputReference</a>

---

##### `DbNodes`<sup>Required</sup> <a name="DbNodes" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodes"></a>

```csharp
public OdbCloudVmClusterDbNodesList DbNodes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList">OdbCloudVmClusterDbNodesList</a>

---

##### `DiskRedundancy`<sup>Required</sup> <a name="DiskRedundancy" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.diskRedundancy"></a>

```csharp
public string DiskRedundancy { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `IamRoles`<sup>Required</sup> <a name="IamRoles" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.iamRoles"></a>

```csharp
public OdbCloudVmClusterIamRolesList IamRoles { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList">OdbCloudVmClusterIamRolesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.listenerPort"></a>

```csharp
public double ListenerPort { get; }
```

- *Type:* double

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `OciResourceAnchorName`<sup>Required</sup> <a name="OciResourceAnchorName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.ociResourceAnchorName"></a>

```csharp
public string OciResourceAnchorName { get; }
```

- *Type:* string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.ociUrl"></a>

```csharp
public string OciUrl { get; }
```

- *Type:* string

---

##### `ScanDnsName`<sup>Required</sup> <a name="ScanDnsName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanDnsName"></a>

```csharp
public string ScanDnsName { get; }
```

- *Type:* string

---

##### `ScanIpIds`<sup>Required</sup> <a name="ScanIpIds" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanIpIds"></a>

```csharp
public string[] ScanIpIds { get; }
```

- *Type:* string[]

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `StorageSizeInGBs`<sup>Required</sup> <a name="StorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.storageSizeInGBs"></a>

```csharp
public double StorageSizeInGBs { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.tags"></a>

```csharp
public OdbCloudVmClusterTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList">OdbCloudVmClusterTagsList</a>

---

##### `VipIds`<sup>Required</sup> <a name="VipIds" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.vipIds"></a>

```csharp
public string[] VipIds { get; }
```

- *Type:* string[]

---

##### `CloudExadataInfrastructureIdInput`<sup>Optional</sup> <a name="CloudExadataInfrastructureIdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudExadataInfrastructureIdInput"></a>

```csharp
public string CloudExadataInfrastructureIdInput { get; }
```

- *Type:* string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `CpuCoreCountInput`<sup>Optional</sup> <a name="CpuCoreCountInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cpuCoreCountInput"></a>

```csharp
public double CpuCoreCountInput { get; }
```

- *Type:* double

---

##### `DataCollectionOptionsInput`<sup>Optional</sup> <a name="DataCollectionOptionsInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataCollectionOptionsInput"></a>

```csharp
public IResolvable|OdbCloudVmClusterDataCollectionOptions DataCollectionOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a>

---

##### `DataStorageSizeInTBsInput`<sup>Optional</sup> <a name="DataStorageSizeInTBsInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataStorageSizeInTBsInput"></a>

```csharp
public double DataStorageSizeInTBsInput { get; }
```

- *Type:* double

---

##### `DbNodesInput`<sup>Optional</sup> <a name="DbNodesInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodesInput"></a>

```csharp
public IResolvable|OdbCloudVmClusterDbNodes[] DbNodesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>[]

---

##### `DbNodeStorageSizeInGBsInput`<sup>Optional</sup> <a name="DbNodeStorageSizeInGBsInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodeStorageSizeInGBsInput"></a>

```csharp
public double DbNodeStorageSizeInGBsInput { get; }
```

- *Type:* double

---

##### `DbServersInput`<sup>Optional</sup> <a name="DbServersInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbServersInput"></a>

```csharp
public string[] DbServersInput { get; }
```

- *Type:* string[]

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `GiVersionInput`<sup>Optional</sup> <a name="GiVersionInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.giVersionInput"></a>

```csharp
public string GiVersionInput { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `IamRolesInput`<sup>Optional</sup> <a name="IamRolesInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.iamRolesInput"></a>

```csharp
public IResolvable|OdbCloudVmClusterIamRoles[] IamRolesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>[]

---

##### `IsLocalBackupEnabledInput`<sup>Optional</sup> <a name="IsLocalBackupEnabledInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isLocalBackupEnabledInput"></a>

```csharp
public bool|IResolvable IsLocalBackupEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsSparseDiskgroupEnabledInput`<sup>Optional</sup> <a name="IsSparseDiskgroupEnabledInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isSparseDiskgroupEnabledInput"></a>

```csharp
public bool|IResolvable IsSparseDiskgroupEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.licenseModelInput"></a>

```csharp
public string LicenseModelInput { get; }
```

- *Type:* string

---

##### `MemorySizeInGBsInput`<sup>Optional</sup> <a name="MemorySizeInGBsInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.memorySizeInGBsInput"></a>

```csharp
public double MemorySizeInGBsInput { get; }
```

- *Type:* double

---

##### `OdbNetworkIdInput`<sup>Optional</sup> <a name="OdbNetworkIdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.odbNetworkIdInput"></a>

```csharp
public string OdbNetworkIdInput { get; }
```

- *Type:* string

---

##### `ScanListenerPortTcpInput`<sup>Optional</sup> <a name="ScanListenerPortTcpInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanListenerPortTcpInput"></a>

```csharp
public double ScanListenerPortTcpInput { get; }
```

- *Type:* double

---

##### `SshPublicKeysInput`<sup>Optional</sup> <a name="SshPublicKeysInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.sshPublicKeysInput"></a>

```csharp
public string[] SshPublicKeysInput { get; }
```

- *Type:* string[]

---

##### `SystemVersionInput`<sup>Optional</sup> <a name="SystemVersionInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.systemVersionInput"></a>

```csharp
public string SystemVersionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.tagsInput"></a>

```csharp
public IResolvable|OdbCloudVmClusterTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>[]

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `CloudExadataInfrastructureId`<sup>Required</sup> <a name="CloudExadataInfrastructureId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudExadataInfrastructureId"></a>

```csharp
public string CloudExadataInfrastructureId { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; }
```

- *Type:* double

---

##### `DataStorageSizeInTBs`<sup>Required</sup> <a name="DataStorageSizeInTBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataStorageSizeInTBs"></a>

```csharp
public double DataStorageSizeInTBs { get; }
```

- *Type:* double

---

##### `DbNodeStorageSizeInGBs`<sup>Required</sup> <a name="DbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodeStorageSizeInGBs"></a>

```csharp
public double DbNodeStorageSizeInGBs { get; }
```

- *Type:* double

---

##### `DbServers`<sup>Required</sup> <a name="DbServers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbServers"></a>

```csharp
public string[] DbServers { get; }
```

- *Type:* string[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `GiVersion`<sup>Required</sup> <a name="GiVersion" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.giVersion"></a>

```csharp
public string GiVersion { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `IsLocalBackupEnabled`<sup>Required</sup> <a name="IsLocalBackupEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isLocalBackupEnabled"></a>

```csharp
public bool|IResolvable IsLocalBackupEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsSparseDiskgroupEnabled`<sup>Required</sup> <a name="IsSparseDiskgroupEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isSparseDiskgroupEnabled"></a>

```csharp
public bool|IResolvable IsSparseDiskgroupEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `MemorySizeInGBs`<sup>Required</sup> <a name="MemorySizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.memorySizeInGBs"></a>

```csharp
public double MemorySizeInGBs { get; }
```

- *Type:* double

---

##### `OdbNetworkId`<sup>Required</sup> <a name="OdbNetworkId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.odbNetworkId"></a>

```csharp
public string OdbNetworkId { get; }
```

- *Type:* string

---

##### `ScanListenerPortTcp`<sup>Required</sup> <a name="ScanListenerPortTcp" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanListenerPortTcp"></a>

```csharp
public double ScanListenerPortTcp { get; }
```

- *Type:* double

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.sshPublicKeys"></a>

```csharp
public string[] SshPublicKeys { get; }
```

- *Type:* string[]

---

##### `SystemVersion`<sup>Required</sup> <a name="SystemVersion" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.systemVersion"></a>

```csharp
public string SystemVersion { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OdbCloudVmClusterConfig <a name="OdbCloudVmClusterConfig" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbCloudVmClusterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CloudExadataInfrastructureId = null,
    string ClusterName = null,
    double CpuCoreCount = null,
    OdbCloudVmClusterDataCollectionOptions DataCollectionOptions = null,
    double DataStorageSizeInTBs = null,
    IResolvable|OdbCloudVmClusterDbNodes[] DbNodes = null,
    double DbNodeStorageSizeInGBs = null,
    string[] DbServers = null,
    string DisplayName = null,
    string GiVersion = null,
    string Hostname = null,
    IResolvable|OdbCloudVmClusterIamRoles[] IamRoles = null,
    bool|IResolvable IsLocalBackupEnabled = null,
    bool|IResolvable IsSparseDiskgroupEnabled = null,
    string LicenseModel = null,
    double MemorySizeInGBs = null,
    string OdbNetworkId = null,
    double ScanListenerPortTcp = null,
    string[] SshPublicKeys = null,
    string SystemVersion = null,
    IResolvable|OdbCloudVmClusterTags[] Tags = null,
    string TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.cloudExadataInfrastructureId">CloudExadataInfrastructureId</a></code> | <code>string</code> | The unique identifier of the Exadata infrastructure that this VM cluster belongs to. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | The name of the Grid Infrastructure (GI) cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | The number of CPU cores enabled on the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dataCollectionOptions">DataCollectionOptions</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a></code> | The set of diagnostic collection options enabled for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dataStorageSizeInTBs">DataStorageSizeInTBs</a></code> | <code>double</code> | The size of the data disk group, in terabytes (TB), that's allocated for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dbNodes">DbNodes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>[]</code> | The DB nodes that are implicitly created and managed as part of this VM Cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dbNodeStorageSizeInGBs">DbNodeStorageSizeInGBs</a></code> | <code>double</code> | The amount of local node storage, in gigabytes (GB), that's allocated for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dbServers">DbServers</a></code> | <code>string[]</code> | The list of database servers for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The user-friendly name for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.giVersion">GiVersion</a></code> | <code>string</code> | The software version of the Oracle Grid Infrastructure (GI) for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.hostname">Hostname</a></code> | <code>string</code> | The host name for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.iamRoles">IamRoles</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>[]</code> | The AWS Identity and Access Management (IAM) service roles associated with the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.isLocalBackupEnabled">IsLocalBackupEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether database backups to local Exadata storage is enabled for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.isSparseDiskgroupEnabled">IsSparseDiskgroupEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether the VM cluster is configured with a sparse disk group. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.licenseModel">LicenseModel</a></code> | <code>string</code> | The Oracle license model applied to the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.memorySizeInGBs">MemorySizeInGBs</a></code> | <code>double</code> | The amount of memory, in gigabytes (GB), that's allocated for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.odbNetworkId">OdbNetworkId</a></code> | <code>string</code> | The unique identifier of the ODB network for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.scanListenerPortTcp">ScanListenerPortTcp</a></code> | <code>double</code> | Property description not available. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.sshPublicKeys">SshPublicKeys</a></code> | <code>string[]</code> | The public key portion of one or more key pairs used for SSH access to the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.systemVersion">SystemVersion</a></code> | <code>string</code> | The operating system version of the image chosen for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>[]</code> | Tags to assign to the Vm Cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.timeZone">TimeZone</a></code> | <code>string</code> | The time zone of the VM cluster. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CloudExadataInfrastructureId`<sup>Optional</sup> <a name="CloudExadataInfrastructureId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.cloudExadataInfrastructureId"></a>

```csharp
public string CloudExadataInfrastructureId { get; set; }
```

- *Type:* string

The unique identifier of the Exadata infrastructure that this VM cluster belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#cloud_exadata_infrastructure_id OdbCloudVmCluster#cloud_exadata_infrastructure_id}

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

The name of the Grid Infrastructure (GI) cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#cluster_name OdbCloudVmCluster#cluster_name}

---

##### `CpuCoreCount`<sup>Optional</sup> <a name="CpuCoreCount" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; set; }
```

- *Type:* double

The number of CPU cores enabled on the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#cpu_core_count OdbCloudVmCluster#cpu_core_count}

---

##### `DataCollectionOptions`<sup>Optional</sup> <a name="DataCollectionOptions" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dataCollectionOptions"></a>

```csharp
public OdbCloudVmClusterDataCollectionOptions DataCollectionOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a>

The set of diagnostic collection options enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#data_collection_options OdbCloudVmCluster#data_collection_options}

---

##### `DataStorageSizeInTBs`<sup>Optional</sup> <a name="DataStorageSizeInTBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dataStorageSizeInTBs"></a>

```csharp
public double DataStorageSizeInTBs { get; set; }
```

- *Type:* double

The size of the data disk group, in terabytes (TB), that's allocated for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#data_storage_size_in_t_bs OdbCloudVmCluster#data_storage_size_in_t_bs}

---

##### `DbNodes`<sup>Optional</sup> <a name="DbNodes" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dbNodes"></a>

```csharp
public IResolvable|OdbCloudVmClusterDbNodes[] DbNodes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>[]

The DB nodes that are implicitly created and managed as part of this VM Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#db_nodes OdbCloudVmCluster#db_nodes}

---

##### `DbNodeStorageSizeInGBs`<sup>Optional</sup> <a name="DbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dbNodeStorageSizeInGBs"></a>

```csharp
public double DbNodeStorageSizeInGBs { get; set; }
```

- *Type:* double

The amount of local node storage, in gigabytes (GB), that's allocated for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#db_node_storage_size_in_g_bs OdbCloudVmCluster#db_node_storage_size_in_g_bs}

---

##### `DbServers`<sup>Optional</sup> <a name="DbServers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dbServers"></a>

```csharp
public string[] DbServers { get; set; }
```

- *Type:* string[]

The list of database servers for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#db_servers OdbCloudVmCluster#db_servers}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The user-friendly name for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#display_name OdbCloudVmCluster#display_name}

---

##### `GiVersion`<sup>Optional</sup> <a name="GiVersion" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.giVersion"></a>

```csharp
public string GiVersion { get; set; }
```

- *Type:* string

The software version of the Oracle Grid Infrastructure (GI) for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#gi_version OdbCloudVmCluster#gi_version}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

The host name for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#hostname OdbCloudVmCluster#hostname}

---

##### `IamRoles`<sup>Optional</sup> <a name="IamRoles" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.iamRoles"></a>

```csharp
public IResolvable|OdbCloudVmClusterIamRoles[] IamRoles { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>[]

The AWS Identity and Access Management (IAM) service roles associated with the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#iam_roles OdbCloudVmCluster#iam_roles}

---

##### `IsLocalBackupEnabled`<sup>Optional</sup> <a name="IsLocalBackupEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.isLocalBackupEnabled"></a>

```csharp
public bool|IResolvable IsLocalBackupEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether database backups to local Exadata storage is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#is_local_backup_enabled OdbCloudVmCluster#is_local_backup_enabled}

---

##### `IsSparseDiskgroupEnabled`<sup>Optional</sup> <a name="IsSparseDiskgroupEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.isSparseDiskgroupEnabled"></a>

```csharp
public bool|IResolvable IsSparseDiskgroupEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether the VM cluster is configured with a sparse disk group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#is_sparse_diskgroup_enabled OdbCloudVmCluster#is_sparse_diskgroup_enabled}

---

##### `LicenseModel`<sup>Optional</sup> <a name="LicenseModel" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.licenseModel"></a>

```csharp
public string LicenseModel { get; set; }
```

- *Type:* string

The Oracle license model applied to the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#license_model OdbCloudVmCluster#license_model}

---

##### `MemorySizeInGBs`<sup>Optional</sup> <a name="MemorySizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.memorySizeInGBs"></a>

```csharp
public double MemorySizeInGBs { get; set; }
```

- *Type:* double

The amount of memory, in gigabytes (GB), that's allocated for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#memory_size_in_g_bs OdbCloudVmCluster#memory_size_in_g_bs}

---

##### `OdbNetworkId`<sup>Optional</sup> <a name="OdbNetworkId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.odbNetworkId"></a>

```csharp
public string OdbNetworkId { get; set; }
```

- *Type:* string

The unique identifier of the ODB network for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#odb_network_id OdbCloudVmCluster#odb_network_id}

---

##### `ScanListenerPortTcp`<sup>Optional</sup> <a name="ScanListenerPortTcp" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.scanListenerPortTcp"></a>

```csharp
public double ScanListenerPortTcp { get; set; }
```

- *Type:* double

Property description not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#scan_listener_port_tcp OdbCloudVmCluster#scan_listener_port_tcp}

---

##### `SshPublicKeys`<sup>Optional</sup> <a name="SshPublicKeys" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.sshPublicKeys"></a>

```csharp
public string[] SshPublicKeys { get; set; }
```

- *Type:* string[]

The public key portion of one or more key pairs used for SSH access to the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#ssh_public_keys OdbCloudVmCluster#ssh_public_keys}

---

##### `SystemVersion`<sup>Optional</sup> <a name="SystemVersion" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.systemVersion"></a>

```csharp
public string SystemVersion { get; set; }
```

- *Type:* string

The operating system version of the image chosen for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#system_version OdbCloudVmCluster#system_version}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.tags"></a>

```csharp
public IResolvable|OdbCloudVmClusterTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>[]

Tags to assign to the Vm Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#tags OdbCloudVmCluster#tags}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

The time zone of the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#time_zone OdbCloudVmCluster#time_zone}

---

### OdbCloudVmClusterDataCollectionOptions <a name="OdbCloudVmClusterDataCollectionOptions" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbCloudVmClusterDataCollectionOptions {
    bool|IResolvable IsDiagnosticsEventsEnabled = null,
    bool|IResolvable IsHealthMonitoringEnabled = null,
    bool|IResolvable IsIncidentLogsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.property.isDiagnosticsEventsEnabled">IsDiagnosticsEventsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether diagnostic collection is enabled for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.property.isHealthMonitoringEnabled">IsHealthMonitoringEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether health monitoring is enabled for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.property.isIncidentLogsEnabled">IsIncidentLogsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether incident logs are enabled for the cloud VM cluster. |

---

##### `IsDiagnosticsEventsEnabled`<sup>Optional</sup> <a name="IsDiagnosticsEventsEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```csharp
public bool|IResolvable IsDiagnosticsEventsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether diagnostic collection is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#is_diagnostics_events_enabled OdbCloudVmCluster#is_diagnostics_events_enabled}

---

##### `IsHealthMonitoringEnabled`<sup>Optional</sup> <a name="IsHealthMonitoringEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.property.isHealthMonitoringEnabled"></a>

```csharp
public bool|IResolvable IsHealthMonitoringEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether health monitoring is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#is_health_monitoring_enabled OdbCloudVmCluster#is_health_monitoring_enabled}

---

##### `IsIncidentLogsEnabled`<sup>Optional</sup> <a name="IsIncidentLogsEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```csharp
public bool|IResolvable IsIncidentLogsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether incident logs are enabled for the cloud VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#is_incident_logs_enabled OdbCloudVmCluster#is_incident_logs_enabled}

---

### OdbCloudVmClusterDbNodes <a name="OdbCloudVmClusterDbNodes" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbCloudVmClusterDbNodes {
    string BackupIpId = null,
    string BackupVnic2Id = null,
    double CpuCoreCount = null,
    string DbNodeArn = null,
    string DbNodeId = null,
    double DbNodeStorageSizeInGBs = null,
    string DbServerId = null,
    string DbSystemId = null,
    string HostIpId = null,
    string Hostname = null,
    double MemorySizeInGBs = null,
    string Ocid = null,
    string Status = null,
    IResolvable|OdbCloudVmClusterDbNodesTags[] Tags = null,
    string Vnic2Id = null,
    string VnicId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.backupIpId">BackupIpId</a></code> | <code>string</code> | The Oracle Cloud ID (OCID) of the backup IP address that's associated with the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.backupVnic2Id">BackupVnic2Id</a></code> | <code>string</code> | The OCID of the second backup virtual network interface card (VNIC) for the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | The number of CPU cores enabled on the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbNodeArn">DbNodeArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbNodeId">DbNodeId</a></code> | <code>string</code> | The unique identifier of the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbNodeStorageSizeInGBs">DbNodeStorageSizeInGBs</a></code> | <code>double</code> | The amount of local node storage, in gigabytes (GB), that's allocated on the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbServerId">DbServerId</a></code> | <code>string</code> | The unique identifier of the database server that's associated with the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | The OCID of the DB system. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.hostIpId">HostIpId</a></code> | <code>string</code> | The OCID of the host IP address that's associated with the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.hostname">Hostname</a></code> | <code>string</code> | The host name for the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.memorySizeInGBs">MemorySizeInGBs</a></code> | <code>double</code> | The amount of memory, in gigabytes (GB), that allocated on the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.ocid">Ocid</a></code> | <code>string</code> | The OCID of the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.status">Status</a></code> | <code>string</code> | The current status of the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#tags OdbCloudVmCluster#tags}. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.vnic2Id">Vnic2Id</a></code> | <code>string</code> | The OCID of the second VNIC. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.vnicId">VnicId</a></code> | <code>string</code> | The OCID of the VNIC. |

---

##### `BackupIpId`<sup>Optional</sup> <a name="BackupIpId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.backupIpId"></a>

```csharp
public string BackupIpId { get; set; }
```

- *Type:* string

The Oracle Cloud ID (OCID) of the backup IP address that's associated with the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#backup_ip_id OdbCloudVmCluster#backup_ip_id}

---

##### `BackupVnic2Id`<sup>Optional</sup> <a name="BackupVnic2Id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.backupVnic2Id"></a>

```csharp
public string BackupVnic2Id { get; set; }
```

- *Type:* string

The OCID of the second backup virtual network interface card (VNIC) for the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#backup_vnic_2_id OdbCloudVmCluster#backup_vnic_2_id}

---

##### `CpuCoreCount`<sup>Optional</sup> <a name="CpuCoreCount" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; set; }
```

- *Type:* double

The number of CPU cores enabled on the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#cpu_core_count OdbCloudVmCluster#cpu_core_count}

---

##### `DbNodeArn`<sup>Optional</sup> <a name="DbNodeArn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbNodeArn"></a>

```csharp
public string DbNodeArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#db_node_arn OdbCloudVmCluster#db_node_arn}

---

##### `DbNodeId`<sup>Optional</sup> <a name="DbNodeId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbNodeId"></a>

```csharp
public string DbNodeId { get; set; }
```

- *Type:* string

The unique identifier of the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#db_node_id OdbCloudVmCluster#db_node_id}

---

##### `DbNodeStorageSizeInGBs`<sup>Optional</sup> <a name="DbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbNodeStorageSizeInGBs"></a>

```csharp
public double DbNodeStorageSizeInGBs { get; set; }
```

- *Type:* double

The amount of local node storage, in gigabytes (GB), that's allocated on the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#db_node_storage_size_in_g_bs OdbCloudVmCluster#db_node_storage_size_in_g_bs}

---

##### `DbServerId`<sup>Optional</sup> <a name="DbServerId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbServerId"></a>

```csharp
public string DbServerId { get; set; }
```

- *Type:* string

The unique identifier of the database server that's associated with the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#db_server_id OdbCloudVmCluster#db_server_id}

---

##### `DbSystemId`<sup>Optional</sup> <a name="DbSystemId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; set; }
```

- *Type:* string

The OCID of the DB system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#db_system_id OdbCloudVmCluster#db_system_id}

---

##### `HostIpId`<sup>Optional</sup> <a name="HostIpId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.hostIpId"></a>

```csharp
public string HostIpId { get; set; }
```

- *Type:* string

The OCID of the host IP address that's associated with the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#host_ip_id OdbCloudVmCluster#host_ip_id}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

The host name for the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#hostname OdbCloudVmCluster#hostname}

---

##### `MemorySizeInGBs`<sup>Optional</sup> <a name="MemorySizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.memorySizeInGBs"></a>

```csharp
public double MemorySizeInGBs { get; set; }
```

- *Type:* double

The amount of memory, in gigabytes (GB), that allocated on the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#memory_size_in_g_bs OdbCloudVmCluster#memory_size_in_g_bs}

---

##### `Ocid`<sup>Optional</sup> <a name="Ocid" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.ocid"></a>

```csharp
public string Ocid { get; set; }
```

- *Type:* string

The OCID of the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#ocid OdbCloudVmCluster#ocid}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

The current status of the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#status OdbCloudVmCluster#status}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.tags"></a>

```csharp
public IResolvable|OdbCloudVmClusterDbNodesTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#tags OdbCloudVmCluster#tags}.

---

##### `Vnic2Id`<sup>Optional</sup> <a name="Vnic2Id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.vnic2Id"></a>

```csharp
public string Vnic2Id { get; set; }
```

- *Type:* string

The OCID of the second VNIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#vnic_2_id OdbCloudVmCluster#vnic_2_id}

---

##### `VnicId`<sup>Optional</sup> <a name="VnicId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.vnicId"></a>

```csharp
public string VnicId { get; set; }
```

- *Type:* string

The OCID of the VNIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#vnic_id OdbCloudVmCluster#vnic_id}

---

### OdbCloudVmClusterDbNodesTags <a name="OdbCloudVmClusterDbNodesTags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbCloudVmClusterDbNodesTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +,

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#value OdbCloudVmCluster#value}

---

### OdbCloudVmClusterIamRoles <a name="OdbCloudVmClusterIamRoles" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbCloudVmClusterIamRoles {
    string AwsIntegration = null,
    string IamRoleArn = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.property.awsIntegration">AwsIntegration</a></code> | <code>string</code> | The AWS integration configuration settings for the AWS Identity and Access Management (IAM) service role. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) service role. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.property.status">Status</a></code> | <code>string</code> | The current status of the AWS Identity and Access Management (IAM) service role. |

---

##### `AwsIntegration`<sup>Optional</sup> <a name="AwsIntegration" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.property.awsIntegration"></a>

```csharp
public string AwsIntegration { get; set; }
```

- *Type:* string

The AWS integration configuration settings for the AWS Identity and Access Management (IAM) service role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#aws_integration OdbCloudVmCluster#aws_integration}

---

##### `IamRoleArn`<sup>Optional</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) service role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#iam_role_arn OdbCloudVmCluster#iam_role_arn}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

The current status of the AWS Identity and Access Management (IAM) service role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#status OdbCloudVmCluster#status}

---

### OdbCloudVmClusterTags <a name="OdbCloudVmClusterTags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbCloudVmClusterTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +,

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#value OdbCloudVmCluster#value}

---

## Classes <a name="Classes" id="Classes"></a>

### OdbCloudVmClusterDataCollectionOptionsOutputReference <a name="OdbCloudVmClusterDataCollectionOptionsOutputReference" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbCloudVmClusterDataCollectionOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">ResetIsDiagnosticsEventsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled">ResetIsHealthMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">ResetIsIncidentLogsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsDiagnosticsEventsEnabled` <a name="ResetIsDiagnosticsEventsEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```csharp
private void ResetIsDiagnosticsEventsEnabled()
```

##### `ResetIsHealthMonitoringEnabled` <a name="ResetIsHealthMonitoringEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled"></a>

```csharp
private void ResetIsHealthMonitoringEnabled()
```

##### `ResetIsIncidentLogsEnabled` <a name="ResetIsIncidentLogsEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```csharp
private void ResetIsIncidentLogsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">IsDiagnosticsEventsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput">IsHealthMonitoringEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">IsIncidentLogsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">IsDiagnosticsEventsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">IsHealthMonitoringEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">IsIncidentLogsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsDiagnosticsEventsEnabledInput`<sup>Optional</sup> <a name="IsDiagnosticsEventsEnabledInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```csharp
public bool|IResolvable IsDiagnosticsEventsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsHealthMonitoringEnabledInput`<sup>Optional</sup> <a name="IsHealthMonitoringEnabledInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput"></a>

```csharp
public bool|IResolvable IsHealthMonitoringEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsIncidentLogsEnabledInput`<sup>Optional</sup> <a name="IsIncidentLogsEnabledInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```csharp
public bool|IResolvable IsIncidentLogsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsDiagnosticsEventsEnabled`<sup>Required</sup> <a name="IsDiagnosticsEventsEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```csharp
public bool|IResolvable IsDiagnosticsEventsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsHealthMonitoringEnabled`<sup>Required</sup> <a name="IsHealthMonitoringEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```csharp
public bool|IResolvable IsHealthMonitoringEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsIncidentLogsEnabled`<sup>Required</sup> <a name="IsIncidentLogsEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```csharp
public bool|IResolvable IsIncidentLogsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OdbCloudVmClusterDataCollectionOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a>

---


### OdbCloudVmClusterDbNodesList <a name="OdbCloudVmClusterDbNodesList" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbCloudVmClusterDbNodesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.get"></a>

```csharp
private OdbCloudVmClusterDbNodesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.property.internalValue"></a>

```csharp
public IResolvable|OdbCloudVmClusterDbNodes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>[]

---


### OdbCloudVmClusterDbNodesOutputReference <a name="OdbCloudVmClusterDbNodesOutputReference" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbCloudVmClusterDbNodesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetBackupIpId">ResetBackupIpId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetBackupVnic2Id">ResetBackupVnic2Id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetCpuCoreCount">ResetCpuCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbNodeArn">ResetDbNodeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbNodeId">ResetDbNodeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbNodeStorageSizeInGBs">ResetDbNodeStorageSizeInGBs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbServerId">ResetDbServerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbSystemId">ResetDbSystemId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetHostIpId">ResetHostIpId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetMemorySizeInGBs">ResetMemorySizeInGBs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetOcid">ResetOcid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetVnic2Id">ResetVnic2Id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetVnicId">ResetVnicId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.putTags"></a>

```csharp
private void PutTags(IResolvable|OdbCloudVmClusterDbNodesTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a>[]

---

##### `ResetBackupIpId` <a name="ResetBackupIpId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetBackupIpId"></a>

```csharp
private void ResetBackupIpId()
```

##### `ResetBackupVnic2Id` <a name="ResetBackupVnic2Id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetBackupVnic2Id"></a>

```csharp
private void ResetBackupVnic2Id()
```

##### `ResetCpuCoreCount` <a name="ResetCpuCoreCount" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetCpuCoreCount"></a>

```csharp
private void ResetCpuCoreCount()
```

##### `ResetDbNodeArn` <a name="ResetDbNodeArn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbNodeArn"></a>

```csharp
private void ResetDbNodeArn()
```

##### `ResetDbNodeId` <a name="ResetDbNodeId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbNodeId"></a>

```csharp
private void ResetDbNodeId()
```

##### `ResetDbNodeStorageSizeInGBs` <a name="ResetDbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbNodeStorageSizeInGBs"></a>

```csharp
private void ResetDbNodeStorageSizeInGBs()
```

##### `ResetDbServerId` <a name="ResetDbServerId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbServerId"></a>

```csharp
private void ResetDbServerId()
```

##### `ResetDbSystemId` <a name="ResetDbSystemId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbSystemId"></a>

```csharp
private void ResetDbSystemId()
```

##### `ResetHostIpId` <a name="ResetHostIpId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetHostIpId"></a>

```csharp
private void ResetHostIpId()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetHostname"></a>

```csharp
private void ResetHostname()
```

##### `ResetMemorySizeInGBs` <a name="ResetMemorySizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetMemorySizeInGBs"></a>

```csharp
private void ResetMemorySizeInGBs()
```

##### `ResetOcid` <a name="ResetOcid" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetOcid"></a>

```csharp
private void ResetOcid()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVnic2Id` <a name="ResetVnic2Id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetVnic2Id"></a>

```csharp
private void ResetVnic2Id()
```

##### `ResetVnicId` <a name="ResetVnicId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetVnicId"></a>

```csharp
private void ResetVnicId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList">OdbCloudVmClusterDbNodesTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupIpIdInput">BackupIpIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupVnic2IdInput">BackupVnic2IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.cpuCoreCountInput">CpuCoreCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeArnInput">DbNodeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeIdInput">DbNodeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeStorageSizeInGBsInput">DbNodeStorageSizeInGBsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbServerIdInput">DbServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbSystemIdInput">DbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostIpIdInput">HostIpIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.memorySizeInGBsInput">MemorySizeInGBsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.ocidInput">OcidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnic2IdInput">Vnic2IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnicIdInput">VnicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupIpId">BackupIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupVnic2Id">BackupVnic2Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeArn">DbNodeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeId">DbNodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeStorageSizeInGBs">DbNodeStorageSizeInGBs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbServerId">DbServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostIpId">HostIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.memorySizeInGBs">MemorySizeInGBs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnic2Id">Vnic2Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnicId">VnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.tags"></a>

```csharp
public OdbCloudVmClusterDbNodesTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList">OdbCloudVmClusterDbNodesTagsList</a>

---

##### `BackupIpIdInput`<sup>Optional</sup> <a name="BackupIpIdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupIpIdInput"></a>

```csharp
public string BackupIpIdInput { get; }
```

- *Type:* string

---

##### `BackupVnic2IdInput`<sup>Optional</sup> <a name="BackupVnic2IdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupVnic2IdInput"></a>

```csharp
public string BackupVnic2IdInput { get; }
```

- *Type:* string

---

##### `CpuCoreCountInput`<sup>Optional</sup> <a name="CpuCoreCountInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.cpuCoreCountInput"></a>

```csharp
public double CpuCoreCountInput { get; }
```

- *Type:* double

---

##### `DbNodeArnInput`<sup>Optional</sup> <a name="DbNodeArnInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeArnInput"></a>

```csharp
public string DbNodeArnInput { get; }
```

- *Type:* string

---

##### `DbNodeIdInput`<sup>Optional</sup> <a name="DbNodeIdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeIdInput"></a>

```csharp
public string DbNodeIdInput { get; }
```

- *Type:* string

---

##### `DbNodeStorageSizeInGBsInput`<sup>Optional</sup> <a name="DbNodeStorageSizeInGBsInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeStorageSizeInGBsInput"></a>

```csharp
public double DbNodeStorageSizeInGBsInput { get; }
```

- *Type:* double

---

##### `DbServerIdInput`<sup>Optional</sup> <a name="DbServerIdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbServerIdInput"></a>

```csharp
public string DbServerIdInput { get; }
```

- *Type:* string

---

##### `DbSystemIdInput`<sup>Optional</sup> <a name="DbSystemIdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbSystemIdInput"></a>

```csharp
public string DbSystemIdInput { get; }
```

- *Type:* string

---

##### `HostIpIdInput`<sup>Optional</sup> <a name="HostIpIdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostIpIdInput"></a>

```csharp
public string HostIpIdInput { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `MemorySizeInGBsInput`<sup>Optional</sup> <a name="MemorySizeInGBsInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.memorySizeInGBsInput"></a>

```csharp
public double MemorySizeInGBsInput { get; }
```

- *Type:* double

---

##### `OcidInput`<sup>Optional</sup> <a name="OcidInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.ocidInput"></a>

```csharp
public string OcidInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.tagsInput"></a>

```csharp
public IResolvable|OdbCloudVmClusterDbNodesTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a>[]

---

##### `Vnic2IdInput`<sup>Optional</sup> <a name="Vnic2IdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnic2IdInput"></a>

```csharp
public string Vnic2IdInput { get; }
```

- *Type:* string

---

##### `VnicIdInput`<sup>Optional</sup> <a name="VnicIdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnicIdInput"></a>

```csharp
public string VnicIdInput { get; }
```

- *Type:* string

---

##### `BackupIpId`<sup>Required</sup> <a name="BackupIpId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupIpId"></a>

```csharp
public string BackupIpId { get; }
```

- *Type:* string

---

##### `BackupVnic2Id`<sup>Required</sup> <a name="BackupVnic2Id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupVnic2Id"></a>

```csharp
public string BackupVnic2Id { get; }
```

- *Type:* string

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; }
```

- *Type:* double

---

##### `DbNodeArn`<sup>Required</sup> <a name="DbNodeArn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeArn"></a>

```csharp
public string DbNodeArn { get; }
```

- *Type:* string

---

##### `DbNodeId`<sup>Required</sup> <a name="DbNodeId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeId"></a>

```csharp
public string DbNodeId { get; }
```

- *Type:* string

---

##### `DbNodeStorageSizeInGBs`<sup>Required</sup> <a name="DbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeStorageSizeInGBs"></a>

```csharp
public double DbNodeStorageSizeInGBs { get; }
```

- *Type:* double

---

##### `DbServerId`<sup>Required</sup> <a name="DbServerId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbServerId"></a>

```csharp
public string DbServerId { get; }
```

- *Type:* string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; }
```

- *Type:* string

---

##### `HostIpId`<sup>Required</sup> <a name="HostIpId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostIpId"></a>

```csharp
public string HostIpId { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `MemorySizeInGBs`<sup>Required</sup> <a name="MemorySizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.memorySizeInGBs"></a>

```csharp
public double MemorySizeInGBs { get; }
```

- *Type:* double

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Vnic2Id`<sup>Required</sup> <a name="Vnic2Id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnic2Id"></a>

```csharp
public string Vnic2Id { get; }
```

- *Type:* string

---

##### `VnicId`<sup>Required</sup> <a name="VnicId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnicId"></a>

```csharp
public string VnicId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OdbCloudVmClusterDbNodes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>

---


### OdbCloudVmClusterDbNodesTagsList <a name="OdbCloudVmClusterDbNodesTagsList" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbCloudVmClusterDbNodesTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.get"></a>

```csharp
private OdbCloudVmClusterDbNodesTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.property.internalValue"></a>

```csharp
public IResolvable|OdbCloudVmClusterDbNodesTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a>[]

---


### OdbCloudVmClusterDbNodesTagsOutputReference <a name="OdbCloudVmClusterDbNodesTagsOutputReference" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbCloudVmClusterDbNodesTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OdbCloudVmClusterDbNodesTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a>

---


### OdbCloudVmClusterIamRolesList <a name="OdbCloudVmClusterIamRolesList" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbCloudVmClusterIamRolesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.get"></a>

```csharp
private OdbCloudVmClusterIamRolesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.property.internalValue"></a>

```csharp
public IResolvable|OdbCloudVmClusterIamRoles[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>[]

---


### OdbCloudVmClusterIamRolesOutputReference <a name="OdbCloudVmClusterIamRolesOutputReference" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbCloudVmClusterIamRolesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resetAwsIntegration">ResetAwsIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resetIamRoleArn">ResetIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAwsIntegration` <a name="ResetAwsIntegration" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resetAwsIntegration"></a>

```csharp
private void ResetAwsIntegration()
```

##### `ResetIamRoleArn` <a name="ResetIamRoleArn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resetIamRoleArn"></a>

```csharp
private void ResetIamRoleArn()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.awsIntegrationInput">AwsIntegrationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.awsIntegration">AwsIntegration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsIntegrationInput`<sup>Optional</sup> <a name="AwsIntegrationInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.awsIntegrationInput"></a>

```csharp
public string AwsIntegrationInput { get; }
```

- *Type:* string

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.iamRoleArnInput"></a>

```csharp
public string IamRoleArnInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `AwsIntegration`<sup>Required</sup> <a name="AwsIntegration" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.awsIntegration"></a>

```csharp
public string AwsIntegration { get; }
```

- *Type:* string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OdbCloudVmClusterIamRoles InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>

---


### OdbCloudVmClusterTagsList <a name="OdbCloudVmClusterTagsList" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbCloudVmClusterTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.get"></a>

```csharp
private OdbCloudVmClusterTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.property.internalValue"></a>

```csharp
public IResolvable|OdbCloudVmClusterTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>[]

---


### OdbCloudVmClusterTagsOutputReference <a name="OdbCloudVmClusterTagsOutputReference" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbCloudVmClusterTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OdbCloudVmClusterTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>

---



