# `iotSoftwarePackageVersion` Submodule <a name="`iotSoftwarePackageVersion` Submodule" id="@cdktn/provider-awscc.iotSoftwarePackageVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotSoftwarePackageVersion <a name="IotSoftwarePackageVersion" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version awscc_iot_software_package_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotSoftwarePackageVersion(Construct Scope, string Id, IotSoftwarePackageVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig">IotSoftwarePackageVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig">IotSoftwarePackageVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.putArtifact">PutArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.putSbom">PutSbom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetArtifact">ResetArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetRecipe">ResetRecipe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetSbom">ResetSbom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetVersionName">ResetVersionName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutArtifact` <a name="PutArtifact" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.putArtifact"></a>

```csharp
private void PutArtifact(IotSoftwarePackageVersionArtifact Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.putArtifact.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact">IotSoftwarePackageVersionArtifact</a>

---

##### `PutSbom` <a name="PutSbom" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.putSbom"></a>

```csharp
private void PutSbom(IotSoftwarePackageVersionSbom Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.putSbom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom">IotSoftwarePackageVersionSbom</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.putTags"></a>

```csharp
private void PutTags(IResolvable|IotSoftwarePackageVersionTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags">IotSoftwarePackageVersionTags</a>[]

---

##### `ResetArtifact` <a name="ResetArtifact" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetArtifact"></a>

```csharp
private void ResetArtifact()
```

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetRecipe` <a name="ResetRecipe" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetRecipe"></a>

```csharp
private void ResetRecipe()
```

##### `ResetSbom` <a name="ResetSbom" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetSbom"></a>

```csharp
private void ResetSbom()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVersionName` <a name="ResetVersionName" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetVersionName"></a>

```csharp
private void ResetVersionName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotSoftwarePackageVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotSoftwarePackageVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotSoftwarePackageVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotSoftwarePackageVersion.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotSoftwarePackageVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IotSoftwarePackageVersion resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotSoftwarePackageVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotSoftwarePackageVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IotSoftwarePackageVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.artifact">Artifact</a></code> | <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference">IotSoftwarePackageVersionArtifactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.errorReason">ErrorReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.packageVersionArn">PackageVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.sbom">Sbom</a></code> | <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference">IotSoftwarePackageVersionSbomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.sbomValidationStatus">SbomValidationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList">IotSoftwarePackageVersionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.artifactInput">ArtifactInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact">IotSoftwarePackageVersionArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.attributesInput">AttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.packageNameInput">PackageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.recipeInput">RecipeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.sbomInput">SbomInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom">IotSoftwarePackageVersionSbom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags">IotSoftwarePackageVersionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.versionNameInput">VersionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.attributes">Attributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.packageName">PackageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.recipe">Recipe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.versionName">VersionName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Artifact`<sup>Required</sup> <a name="Artifact" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.artifact"></a>

```csharp
public IotSoftwarePackageVersionArtifactOutputReference Artifact { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference">IotSoftwarePackageVersionArtifactOutputReference</a>

---

##### `ErrorReason`<sup>Required</sup> <a name="ErrorReason" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.errorReason"></a>

```csharp
public string ErrorReason { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PackageVersionArn`<sup>Required</sup> <a name="PackageVersionArn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.packageVersionArn"></a>

```csharp
public string PackageVersionArn { get; }
```

- *Type:* string

---

##### `Sbom`<sup>Required</sup> <a name="Sbom" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.sbom"></a>

```csharp
public IotSoftwarePackageVersionSbomOutputReference Sbom { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference">IotSoftwarePackageVersionSbomOutputReference</a>

---

##### `SbomValidationStatus`<sup>Required</sup> <a name="SbomValidationStatus" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.sbomValidationStatus"></a>

```csharp
public string SbomValidationStatus { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.tags"></a>

```csharp
public IotSoftwarePackageVersionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList">IotSoftwarePackageVersionTagsList</a>

---

##### `ArtifactInput`<sup>Optional</sup> <a name="ArtifactInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.artifactInput"></a>

```csharp
public IResolvable|IotSoftwarePackageVersionArtifact ArtifactInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact">IotSoftwarePackageVersionArtifact</a>

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.attributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `PackageNameInput`<sup>Optional</sup> <a name="PackageNameInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.packageNameInput"></a>

```csharp
public string PackageNameInput { get; }
```

- *Type:* string

---

##### `RecipeInput`<sup>Optional</sup> <a name="RecipeInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.recipeInput"></a>

```csharp
public string RecipeInput { get; }
```

- *Type:* string

---

##### `SbomInput`<sup>Optional</sup> <a name="SbomInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.sbomInput"></a>

```csharp
public IResolvable|IotSoftwarePackageVersionSbom SbomInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom">IotSoftwarePackageVersionSbom</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.tagsInput"></a>

```csharp
public IResolvable|IotSoftwarePackageVersionTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags">IotSoftwarePackageVersionTags</a>[]

---

##### `VersionNameInput`<sup>Optional</sup> <a name="VersionNameInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.versionNameInput"></a>

```csharp
public string VersionNameInput { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.attributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Attributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `PackageName`<sup>Required</sup> <a name="PackageName" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.packageName"></a>

```csharp
public string PackageName { get; }
```

- *Type:* string

---

##### `Recipe`<sup>Required</sup> <a name="Recipe" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.recipe"></a>

```csharp
public string Recipe { get; }
```

- *Type:* string

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.versionName"></a>

```csharp
public string VersionName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotSoftwarePackageVersionArtifact <a name="IotSoftwarePackageVersionArtifact" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotSoftwarePackageVersionArtifact {
    IotSoftwarePackageVersionArtifactS3Location S3Location = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact.property.s3Location">S3Location</a></code> | <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location">IotSoftwarePackageVersionArtifactS3Location</a></code> | The Amazon S3 location. |

---

##### `S3Location`<sup>Optional</sup> <a name="S3Location" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact.property.s3Location"></a>

```csharp
public IotSoftwarePackageVersionArtifactS3Location S3Location { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location">IotSoftwarePackageVersionArtifactS3Location</a>

The Amazon S3 location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#s3_location IotSoftwarePackageVersion#s3_location}

---

### IotSoftwarePackageVersionArtifactS3Location <a name="IotSoftwarePackageVersionArtifactS3Location" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotSoftwarePackageVersionArtifactS3Location {
    string Bucket = null,
    string Key = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location.property.bucket">Bucket</a></code> | <code>string</code> | The S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location.property.key">Key</a></code> | <code>string</code> | The S3 key. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location.property.version">Version</a></code> | <code>string</code> | The S3 version. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

The S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#bucket IotSoftwarePackageVersion#bucket}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The S3 key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#key IotSoftwarePackageVersion#key}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The S3 version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#version IotSoftwarePackageVersion#version}

---

### IotSoftwarePackageVersionConfig <a name="IotSoftwarePackageVersionConfig" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotSoftwarePackageVersionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string PackageName,
    IotSoftwarePackageVersionArtifact Artifact = null,
    System.Collections.Generic.IDictionary<string, string> Attributes = null,
    string Description = null,
    string Recipe = null,
    IotSoftwarePackageVersionSbom Sbom = null,
    IResolvable|IotSoftwarePackageVersionTags[] Tags = null,
    string VersionName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.packageName">PackageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#package_name IotSoftwarePackageVersion#package_name}. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.artifact">Artifact</a></code> | <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact">IotSoftwarePackageVersionArtifact</a></code> | The artifact location of the package version. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.attributes">Attributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#attributes IotSoftwarePackageVersion#attributes}. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#description IotSoftwarePackageVersion#description}. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.recipe">Recipe</a></code> | <code>string</code> | The inline json job document associated with a software package version. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.sbom">Sbom</a></code> | <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom">IotSoftwarePackageVersionSbom</a></code> | The sbom zip archive location of the package version. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags">IotSoftwarePackageVersionTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.versionName">VersionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#version_name IotSoftwarePackageVersion#version_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PackageName`<sup>Required</sup> <a name="PackageName" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.packageName"></a>

```csharp
public string PackageName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#package_name IotSoftwarePackageVersion#package_name}.

---

##### `Artifact`<sup>Optional</sup> <a name="Artifact" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.artifact"></a>

```csharp
public IotSoftwarePackageVersionArtifact Artifact { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact">IotSoftwarePackageVersionArtifact</a>

The artifact location of the package version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#artifact IotSoftwarePackageVersion#artifact}

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.attributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Attributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#attributes IotSoftwarePackageVersion#attributes}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#description IotSoftwarePackageVersion#description}.

---

##### `Recipe`<sup>Optional</sup> <a name="Recipe" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.recipe"></a>

```csharp
public string Recipe { get; set; }
```

- *Type:* string

The inline json job document associated with a software package version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#recipe IotSoftwarePackageVersion#recipe}

---

##### `Sbom`<sup>Optional</sup> <a name="Sbom" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.sbom"></a>

```csharp
public IotSoftwarePackageVersionSbom Sbom { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom">IotSoftwarePackageVersionSbom</a>

The sbom zip archive location of the package version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#sbom IotSoftwarePackageVersion#sbom}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.tags"></a>

```csharp
public IResolvable|IotSoftwarePackageVersionTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags">IotSoftwarePackageVersionTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#tags IotSoftwarePackageVersion#tags}

---

##### `VersionName`<sup>Optional</sup> <a name="VersionName" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.versionName"></a>

```csharp
public string VersionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#version_name IotSoftwarePackageVersion#version_name}.

---

### IotSoftwarePackageVersionSbom <a name="IotSoftwarePackageVersionSbom" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotSoftwarePackageVersionSbom {
    IotSoftwarePackageVersionSbomS3Location S3Location = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom.property.s3Location">S3Location</a></code> | <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location">IotSoftwarePackageVersionSbomS3Location</a></code> | The Amazon S3 location. |

---

##### `S3Location`<sup>Optional</sup> <a name="S3Location" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom.property.s3Location"></a>

```csharp
public IotSoftwarePackageVersionSbomS3Location S3Location { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location">IotSoftwarePackageVersionSbomS3Location</a>

The Amazon S3 location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#s3_location IotSoftwarePackageVersion#s3_location}

---

### IotSoftwarePackageVersionSbomS3Location <a name="IotSoftwarePackageVersionSbomS3Location" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotSoftwarePackageVersionSbomS3Location {
    string Bucket = null,
    string Key = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location.property.bucket">Bucket</a></code> | <code>string</code> | The S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location.property.key">Key</a></code> | <code>string</code> | The S3 key. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location.property.version">Version</a></code> | <code>string</code> | The S3 version. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

The S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#bucket IotSoftwarePackageVersion#bucket}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The S3 key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#key IotSoftwarePackageVersion#key}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The S3 version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#version IotSoftwarePackageVersion#version}

---

### IotSoftwarePackageVersionTags <a name="IotSoftwarePackageVersionTags" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotSoftwarePackageVersionTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#key IotSoftwarePackageVersion#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#value IotSoftwarePackageVersion#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotSoftwarePackageVersionArtifactOutputReference <a name="IotSoftwarePackageVersionArtifactOutputReference" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotSoftwarePackageVersionArtifactOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.putS3Location">PutS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.resetS3Location">ResetS3Location</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Location` <a name="PutS3Location" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.putS3Location"></a>

```csharp
private void PutS3Location(IotSoftwarePackageVersionArtifactS3Location Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.putS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location">IotSoftwarePackageVersionArtifactS3Location</a>

---

##### `ResetS3Location` <a name="ResetS3Location" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.resetS3Location"></a>

```csharp
private void ResetS3Location()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.property.s3Location">S3Location</a></code> | <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference">IotSoftwarePackageVersionArtifactS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.property.s3LocationInput">S3LocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location">IotSoftwarePackageVersionArtifactS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact">IotSoftwarePackageVersionArtifact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Location`<sup>Required</sup> <a name="S3Location" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.property.s3Location"></a>

```csharp
public IotSoftwarePackageVersionArtifactS3LocationOutputReference S3Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference">IotSoftwarePackageVersionArtifactS3LocationOutputReference</a>

---

##### `S3LocationInput`<sup>Optional</sup> <a name="S3LocationInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.property.s3LocationInput"></a>

```csharp
public IResolvable|IotSoftwarePackageVersionArtifactS3Location S3LocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location">IotSoftwarePackageVersionArtifactS3Location</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotSoftwarePackageVersionArtifact InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact">IotSoftwarePackageVersionArtifact</a>

---


### IotSoftwarePackageVersionArtifactS3LocationOutputReference <a name="IotSoftwarePackageVersionArtifactS3LocationOutputReference" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotSoftwarePackageVersionArtifactS3LocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location">IotSoftwarePackageVersionArtifactS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotSoftwarePackageVersionArtifactS3Location InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location">IotSoftwarePackageVersionArtifactS3Location</a>

---


### IotSoftwarePackageVersionSbomOutputReference <a name="IotSoftwarePackageVersionSbomOutputReference" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotSoftwarePackageVersionSbomOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.putS3Location">PutS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.resetS3Location">ResetS3Location</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Location` <a name="PutS3Location" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.putS3Location"></a>

```csharp
private void PutS3Location(IotSoftwarePackageVersionSbomS3Location Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.putS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location">IotSoftwarePackageVersionSbomS3Location</a>

---

##### `ResetS3Location` <a name="ResetS3Location" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.resetS3Location"></a>

```csharp
private void ResetS3Location()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.property.s3Location">S3Location</a></code> | <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference">IotSoftwarePackageVersionSbomS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.property.s3LocationInput">S3LocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location">IotSoftwarePackageVersionSbomS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom">IotSoftwarePackageVersionSbom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Location`<sup>Required</sup> <a name="S3Location" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.property.s3Location"></a>

```csharp
public IotSoftwarePackageVersionSbomS3LocationOutputReference S3Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference">IotSoftwarePackageVersionSbomS3LocationOutputReference</a>

---

##### `S3LocationInput`<sup>Optional</sup> <a name="S3LocationInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.property.s3LocationInput"></a>

```csharp
public IResolvable|IotSoftwarePackageVersionSbomS3Location S3LocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location">IotSoftwarePackageVersionSbomS3Location</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotSoftwarePackageVersionSbom InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom">IotSoftwarePackageVersionSbom</a>

---


### IotSoftwarePackageVersionSbomS3LocationOutputReference <a name="IotSoftwarePackageVersionSbomS3LocationOutputReference" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotSoftwarePackageVersionSbomS3LocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location">IotSoftwarePackageVersionSbomS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotSoftwarePackageVersionSbomS3Location InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location">IotSoftwarePackageVersionSbomS3Location</a>

---


### IotSoftwarePackageVersionTagsList <a name="IotSoftwarePackageVersionTagsList" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotSoftwarePackageVersionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.get"></a>

```csharp
private IotSoftwarePackageVersionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags">IotSoftwarePackageVersionTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.property.internalValue"></a>

```csharp
public IResolvable|IotSoftwarePackageVersionTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags">IotSoftwarePackageVersionTags</a>[]

---


### IotSoftwarePackageVersionTagsOutputReference <a name="IotSoftwarePackageVersionTagsOutputReference" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotSoftwarePackageVersionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags">IotSoftwarePackageVersionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotSoftwarePackageVersionTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags">IotSoftwarePackageVersionTags</a>

---



