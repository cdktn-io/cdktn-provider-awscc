# `datasyncLocationObjectStorage` Submodule <a name="`datasyncLocationObjectStorage` Submodule" id="@cdktn/provider-awscc.datasyncLocationObjectStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationObjectStorage <a name="DatasyncLocationObjectStorage" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage awscc_datasync_location_object_storage}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatasyncLocationObjectStorage(Construct Scope, string Id, DatasyncLocationObjectStorageConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig">DatasyncLocationObjectStorageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig">DatasyncLocationObjectStorageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putCmkSecretConfig">PutCmkSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putCustomSecretConfig">PutCustomSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetAccessKey">ResetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetAgentArns">ResetAgentArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetCmkSecretConfig">ResetCmkSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetCustomSecretConfig">ResetCustomSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetSecretKey">ResetSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerCertificate">ResetServerCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerHostname">ResetServerHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerPort">ResetServerPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerProtocol">ResetServerProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetSubdirectory">ResetSubdirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCmkSecretConfig` <a name="PutCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putCmkSecretConfig"></a>

```csharp
private void PutCmkSecretConfig(DatasyncLocationObjectStorageCmkSecretConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putCmkSecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig">DatasyncLocationObjectStorageCmkSecretConfig</a>

---

##### `PutCustomSecretConfig` <a name="PutCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putCustomSecretConfig"></a>

```csharp
private void PutCustomSecretConfig(DatasyncLocationObjectStorageCustomSecretConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putCustomSecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig">DatasyncLocationObjectStorageCustomSecretConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putTags"></a>

```csharp
private void PutTags(IResolvable|DatasyncLocationObjectStorageTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags">DatasyncLocationObjectStorageTags</a>[]

---

##### `ResetAccessKey` <a name="ResetAccessKey" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetAccessKey"></a>

```csharp
private void ResetAccessKey()
```

##### `ResetAgentArns` <a name="ResetAgentArns" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetAgentArns"></a>

```csharp
private void ResetAgentArns()
```

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetBucketName"></a>

```csharp
private void ResetBucketName()
```

##### `ResetCmkSecretConfig` <a name="ResetCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetCmkSecretConfig"></a>

```csharp
private void ResetCmkSecretConfig()
```

##### `ResetCustomSecretConfig` <a name="ResetCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetCustomSecretConfig"></a>

```csharp
private void ResetCustomSecretConfig()
```

##### `ResetSecretKey` <a name="ResetSecretKey" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetSecretKey"></a>

```csharp
private void ResetSecretKey()
```

##### `ResetServerCertificate` <a name="ResetServerCertificate" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerCertificate"></a>

```csharp
private void ResetServerCertificate()
```

##### `ResetServerHostname` <a name="ResetServerHostname" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerHostname"></a>

```csharp
private void ResetServerHostname()
```

##### `ResetServerPort` <a name="ResetServerPort" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerPort"></a>

```csharp
private void ResetServerPort()
```

##### `ResetServerProtocol` <a name="ResetServerProtocol" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerProtocol"></a>

```csharp
private void ResetServerProtocol()
```

##### `ResetSubdirectory` <a name="ResetSubdirectory" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetSubdirectory"></a>

```csharp
private void ResetSubdirectory()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatasyncLocationObjectStorage resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatasyncLocationObjectStorage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatasyncLocationObjectStorage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatasyncLocationObjectStorage.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatasyncLocationObjectStorage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DatasyncLocationObjectStorage resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatasyncLocationObjectStorage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatasyncLocationObjectStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DatasyncLocationObjectStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.cmkSecretConfig">CmkSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference">DatasyncLocationObjectStorageCmkSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.customSecretConfig">CustomSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference">DatasyncLocationObjectStorageCustomSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.locationArn">LocationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.locationUri">LocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.managedSecretConfig">ManagedSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference">DatasyncLocationObjectStorageManagedSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList">DatasyncLocationObjectStorageTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.accessKeyInput">AccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.agentArnsInput">AgentArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.cmkSecretConfigInput">CmkSecretConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig">DatasyncLocationObjectStorageCmkSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.customSecretConfigInput">CustomSecretConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig">DatasyncLocationObjectStorageCustomSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.secretKeyInput">SecretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverCertificateInput">ServerCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverHostnameInput">ServerHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverPortInput">ServerPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverProtocolInput">ServerProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.subdirectoryInput">SubdirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags">DatasyncLocationObjectStorageTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.accessKey">AccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.agentArns">AgentArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.secretKey">SecretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverCertificate">ServerCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverHostname">ServerHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverPort">ServerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverProtocol">ServerProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.subdirectory">Subdirectory</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CmkSecretConfig`<sup>Required</sup> <a name="CmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.cmkSecretConfig"></a>

```csharp
public DatasyncLocationObjectStorageCmkSecretConfigOutputReference CmkSecretConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference">DatasyncLocationObjectStorageCmkSecretConfigOutputReference</a>

---

##### `CustomSecretConfig`<sup>Required</sup> <a name="CustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.customSecretConfig"></a>

```csharp
public DatasyncLocationObjectStorageCustomSecretConfigOutputReference CustomSecretConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference">DatasyncLocationObjectStorageCustomSecretConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocationArn`<sup>Required</sup> <a name="LocationArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.locationArn"></a>

```csharp
public string LocationArn { get; }
```

- *Type:* string

---

##### `LocationUri`<sup>Required</sup> <a name="LocationUri" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.locationUri"></a>

```csharp
public string LocationUri { get; }
```

- *Type:* string

---

##### `ManagedSecretConfig`<sup>Required</sup> <a name="ManagedSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.managedSecretConfig"></a>

```csharp
public DatasyncLocationObjectStorageManagedSecretConfigOutputReference ManagedSecretConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference">DatasyncLocationObjectStorageManagedSecretConfigOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tags"></a>

```csharp
public DatasyncLocationObjectStorageTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList">DatasyncLocationObjectStorageTagsList</a>

---

##### `AccessKeyInput`<sup>Optional</sup> <a name="AccessKeyInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.accessKeyInput"></a>

```csharp
public string AccessKeyInput { get; }
```

- *Type:* string

---

##### `AgentArnsInput`<sup>Optional</sup> <a name="AgentArnsInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.agentArnsInput"></a>

```csharp
public string[] AgentArnsInput { get; }
```

- *Type:* string[]

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `CmkSecretConfigInput`<sup>Optional</sup> <a name="CmkSecretConfigInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.cmkSecretConfigInput"></a>

```csharp
public IResolvable|DatasyncLocationObjectStorageCmkSecretConfig CmkSecretConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig">DatasyncLocationObjectStorageCmkSecretConfig</a>

---

##### `CustomSecretConfigInput`<sup>Optional</sup> <a name="CustomSecretConfigInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.customSecretConfigInput"></a>

```csharp
public IResolvable|DatasyncLocationObjectStorageCustomSecretConfig CustomSecretConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig">DatasyncLocationObjectStorageCustomSecretConfig</a>

---

##### `SecretKeyInput`<sup>Optional</sup> <a name="SecretKeyInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.secretKeyInput"></a>

```csharp
public string SecretKeyInput { get; }
```

- *Type:* string

---

##### `ServerCertificateInput`<sup>Optional</sup> <a name="ServerCertificateInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverCertificateInput"></a>

```csharp
public string ServerCertificateInput { get; }
```

- *Type:* string

---

##### `ServerHostnameInput`<sup>Optional</sup> <a name="ServerHostnameInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverHostnameInput"></a>

```csharp
public string ServerHostnameInput { get; }
```

- *Type:* string

---

##### `ServerPortInput`<sup>Optional</sup> <a name="ServerPortInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverPortInput"></a>

```csharp
public double ServerPortInput { get; }
```

- *Type:* double

---

##### `ServerProtocolInput`<sup>Optional</sup> <a name="ServerProtocolInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverProtocolInput"></a>

```csharp
public string ServerProtocolInput { get; }
```

- *Type:* string

---

##### `SubdirectoryInput`<sup>Optional</sup> <a name="SubdirectoryInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.subdirectoryInput"></a>

```csharp
public string SubdirectoryInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tagsInput"></a>

```csharp
public IResolvable|DatasyncLocationObjectStorageTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags">DatasyncLocationObjectStorageTags</a>[]

---

##### `AccessKey`<sup>Required</sup> <a name="AccessKey" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.accessKey"></a>

```csharp
public string AccessKey { get; }
```

- *Type:* string

---

##### `AgentArns`<sup>Required</sup> <a name="AgentArns" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.agentArns"></a>

```csharp
public string[] AgentArns { get; }
```

- *Type:* string[]

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `SecretKey`<sup>Required</sup> <a name="SecretKey" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.secretKey"></a>

```csharp
public string SecretKey { get; }
```

- *Type:* string

---

##### `ServerCertificate`<sup>Required</sup> <a name="ServerCertificate" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverCertificate"></a>

```csharp
public string ServerCertificate { get; }
```

- *Type:* string

---

##### `ServerHostname`<sup>Required</sup> <a name="ServerHostname" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverHostname"></a>

```csharp
public string ServerHostname { get; }
```

- *Type:* string

---

##### `ServerPort`<sup>Required</sup> <a name="ServerPort" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverPort"></a>

```csharp
public double ServerPort { get; }
```

- *Type:* double

---

##### `ServerProtocol`<sup>Required</sup> <a name="ServerProtocol" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverProtocol"></a>

```csharp
public string ServerProtocol { get; }
```

- *Type:* string

---

##### `Subdirectory`<sup>Required</sup> <a name="Subdirectory" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.subdirectory"></a>

```csharp
public string Subdirectory { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationObjectStorageCmkSecretConfig <a name="DatasyncLocationObjectStorageCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatasyncLocationObjectStorageCmkSecretConfig {
    string KmsKeyArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn. |

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn.

DataSync provides this key to AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#kms_key_arn DatasyncLocationObjectStorage#kms_key_arn}

---

### DatasyncLocationObjectStorageConfig <a name="DatasyncLocationObjectStorageConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatasyncLocationObjectStorageConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccessKey = null,
    string[] AgentArns = null,
    string BucketName = null,
    DatasyncLocationObjectStorageCmkSecretConfig CmkSecretConfig = null,
    DatasyncLocationObjectStorageCustomSecretConfig CustomSecretConfig = null,
    string SecretKey = null,
    string ServerCertificate = null,
    string ServerHostname = null,
    double ServerPort = null,
    string ServerProtocol = null,
    string Subdirectory = null,
    IResolvable|DatasyncLocationObjectStorageTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.accessKey">AccessKey</a></code> | <code>string</code> | Optional. The access key is used if credentials are required to access the self-managed object storage server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.agentArns">AgentArns</a></code> | <code>string[]</code> | Specifies the Amazon Resource Names (ARNs) of the DataSync agents that can connect with your object storage system. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.bucketName">BucketName</a></code> | <code>string</code> | The name of the bucket on the self-managed object storage server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.cmkSecretConfig">CmkSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig">DatasyncLocationObjectStorageCmkSecretConfig</a></code> | Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.customSecretConfig">CustomSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig">DatasyncLocationObjectStorageCustomSecretConfig</a></code> | Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.secretKey">SecretKey</a></code> | <code>string</code> | Optional. The secret key is used if credentials are required to access the self-managed object storage server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverCertificate">ServerCertificate</a></code> | <code>string</code> | X.509 PEM content containing a certificate authority or chain to trust. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverHostname">ServerHostname</a></code> | <code>string</code> | The name of the self-managed object storage server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverPort">ServerPort</a></code> | <code>double</code> | The port that your self-managed server accepts inbound network traffic on. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverProtocol">ServerProtocol</a></code> | <code>string</code> | The protocol that the object storage server uses to communicate. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.subdirectory">Subdirectory</a></code> | <code>string</code> | The subdirectory in the self-managed object storage server that is used to read data from. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags">DatasyncLocationObjectStorageTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessKey`<sup>Optional</sup> <a name="AccessKey" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.accessKey"></a>

```csharp
public string AccessKey { get; set; }
```

- *Type:* string

Optional. The access key is used if credentials are required to access the self-managed object storage server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#access_key DatasyncLocationObjectStorage#access_key}

---

##### `AgentArns`<sup>Optional</sup> <a name="AgentArns" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.agentArns"></a>

```csharp
public string[] AgentArns { get; set; }
```

- *Type:* string[]

Specifies the Amazon Resource Names (ARNs) of the DataSync agents that can connect with your object storage system.

If you are setting up an agentless cross-cloud transfer, you do not need to specify a value for this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#agent_arns DatasyncLocationObjectStorage#agent_arns}

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

The name of the bucket on the self-managed object storage server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#bucket_name DatasyncLocationObjectStorage#bucket_name}

---

##### `CmkSecretConfig`<sup>Optional</sup> <a name="CmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.cmkSecretConfig"></a>

```csharp
public DatasyncLocationObjectStorageCmkSecretConfig CmkSecretConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig">DatasyncLocationObjectStorageCmkSecretConfig</a>

Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#cmk_secret_config DatasyncLocationObjectStorage#cmk_secret_config}

---

##### `CustomSecretConfig`<sup>Optional</sup> <a name="CustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.customSecretConfig"></a>

```csharp
public DatasyncLocationObjectStorageCustomSecretConfig CustomSecretConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig">DatasyncLocationObjectStorageCustomSecretConfig</a>

Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#custom_secret_config DatasyncLocationObjectStorage#custom_secret_config}

---

##### `SecretKey`<sup>Optional</sup> <a name="SecretKey" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.secretKey"></a>

```csharp
public string SecretKey { get; set; }
```

- *Type:* string

Optional. The secret key is used if credentials are required to access the self-managed object storage server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#secret_key DatasyncLocationObjectStorage#secret_key}

---

##### `ServerCertificate`<sup>Optional</sup> <a name="ServerCertificate" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverCertificate"></a>

```csharp
public string ServerCertificate { get; set; }
```

- *Type:* string

X.509 PEM content containing a certificate authority or chain to trust.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#server_certificate DatasyncLocationObjectStorage#server_certificate}

---

##### `ServerHostname`<sup>Optional</sup> <a name="ServerHostname" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverHostname"></a>

```csharp
public string ServerHostname { get; set; }
```

- *Type:* string

The name of the self-managed object storage server.

This value is the IP address or Domain Name Service (DNS) name of the object storage server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#server_hostname DatasyncLocationObjectStorage#server_hostname}

---

##### `ServerPort`<sup>Optional</sup> <a name="ServerPort" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverPort"></a>

```csharp
public double ServerPort { get; set; }
```

- *Type:* double

The port that your self-managed server accepts inbound network traffic on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#server_port DatasyncLocationObjectStorage#server_port}

---

##### `ServerProtocol`<sup>Optional</sup> <a name="ServerProtocol" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverProtocol"></a>

```csharp
public string ServerProtocol { get; set; }
```

- *Type:* string

The protocol that the object storage server uses to communicate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#server_protocol DatasyncLocationObjectStorage#server_protocol}

---

##### `Subdirectory`<sup>Optional</sup> <a name="Subdirectory" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.subdirectory"></a>

```csharp
public string Subdirectory { get; set; }
```

- *Type:* string

The subdirectory in the self-managed object storage server that is used to read data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#subdirectory DatasyncLocationObjectStorage#subdirectory}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.tags"></a>

```csharp
public IResolvable|DatasyncLocationObjectStorageTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags">DatasyncLocationObjectStorageTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#tags DatasyncLocationObjectStorage#tags}

---

### DatasyncLocationObjectStorageCustomSecretConfig <a name="DatasyncLocationObjectStorageCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatasyncLocationObjectStorageCustomSecretConfig {
    string SecretAccessRoleArn = null,
    string SecretArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig.property.secretAccessRoleArn">SecretAccessRoleArn</a></code> | <code>string</code> | Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig.property.secretArn">SecretArn</a></code> | <code>string</code> | Specifies the ARN for a customer created AWS Secrets Manager secret. |

---

##### `SecretAccessRoleArn`<sup>Optional</sup> <a name="SecretAccessRoleArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig.property.secretAccessRoleArn"></a>

```csharp
public string SecretAccessRoleArn { get; set; }
```

- *Type:* string

Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#secret_access_role_arn DatasyncLocationObjectStorage#secret_access_role_arn}

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig.property.secretArn"></a>

```csharp
public string SecretArn { get; set; }
```

- *Type:* string

Specifies the ARN for a customer created AWS Secrets Manager secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#secret_arn DatasyncLocationObjectStorage#secret_arn}

---

### DatasyncLocationObjectStorageManagedSecretConfig <a name="DatasyncLocationObjectStorageManagedSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatasyncLocationObjectStorageManagedSecretConfig {

};
```


### DatasyncLocationObjectStorageTags <a name="DatasyncLocationObjectStorageTags" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatasyncLocationObjectStorageTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags.property.key">Key</a></code> | <code>string</code> | The key for an AWS resource tag. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags.property.value">Value</a></code> | <code>string</code> | The value for an AWS resource tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#key DatasyncLocationObjectStorage#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#value DatasyncLocationObjectStorage#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncLocationObjectStorageCmkSecretConfigOutputReference <a name="DatasyncLocationObjectStorageCmkSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatasyncLocationObjectStorageCmkSecretConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig">DatasyncLocationObjectStorageCmkSecretConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatasyncLocationObjectStorageCmkSecretConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig">DatasyncLocationObjectStorageCmkSecretConfig</a>

---


### DatasyncLocationObjectStorageCustomSecretConfigOutputReference <a name="DatasyncLocationObjectStorageCustomSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatasyncLocationObjectStorageCustomSecretConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.resetSecretAccessRoleArn">ResetSecretAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretAccessRoleArn` <a name="ResetSecretAccessRoleArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.resetSecretAccessRoleArn"></a>

```csharp
private void ResetSecretAccessRoleArn()
```

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.resetSecretArn"></a>

```csharp
private void ResetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.secretAccessRoleArnInput">SecretAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.secretAccessRoleArn">SecretAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig">DatasyncLocationObjectStorageCustomSecretConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretAccessRoleArnInput`<sup>Optional</sup> <a name="SecretAccessRoleArnInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.secretAccessRoleArnInput"></a>

```csharp
public string SecretAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.secretArnInput"></a>

```csharp
public string SecretArnInput { get; }
```

- *Type:* string

---

##### `SecretAccessRoleArn`<sup>Required</sup> <a name="SecretAccessRoleArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.secretAccessRoleArn"></a>

```csharp
public string SecretAccessRoleArn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatasyncLocationObjectStorageCustomSecretConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig">DatasyncLocationObjectStorageCustomSecretConfig</a>

---


### DatasyncLocationObjectStorageManagedSecretConfigOutputReference <a name="DatasyncLocationObjectStorageManagedSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatasyncLocationObjectStorageManagedSecretConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfig">DatasyncLocationObjectStorageManagedSecretConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.property.internalValue"></a>

```csharp
public DatasyncLocationObjectStorageManagedSecretConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfig">DatasyncLocationObjectStorageManagedSecretConfig</a>

---


### DatasyncLocationObjectStorageTagsList <a name="DatasyncLocationObjectStorageTagsList" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatasyncLocationObjectStorageTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.get"></a>

```csharp
private DatasyncLocationObjectStorageTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags">DatasyncLocationObjectStorageTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.property.internalValue"></a>

```csharp
public IResolvable|DatasyncLocationObjectStorageTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags">DatasyncLocationObjectStorageTags</a>[]

---


### DatasyncLocationObjectStorageTagsOutputReference <a name="DatasyncLocationObjectStorageTagsOutputReference" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatasyncLocationObjectStorageTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags">DatasyncLocationObjectStorageTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatasyncLocationObjectStorageTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags">DatasyncLocationObjectStorageTags</a>

---



