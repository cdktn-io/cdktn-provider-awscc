# `datasyncLocationFsxWindows` Submodule <a name="`datasyncLocationFsxWindows` Submodule" id="@cdktn/provider-awscc.datasyncLocationFsxWindows"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationFsxWindows <a name="DatasyncLocationFsxWindows" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_windows awscc_datasync_location_fsx_windows}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatasyncLocationFsxWindows(Construct Scope, string Id, DatasyncLocationFsxWindowsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig">DatasyncLocationFsxWindowsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig">DatasyncLocationFsxWindowsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.putCmkSecretConfig">PutCmkSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.putCustomSecretConfig">PutCustomSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.resetCmkSecretConfig">ResetCmkSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.resetCustomSecretConfig">ResetCustomSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.resetFsxFilesystemArn">ResetFsxFilesystemArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.resetSubdirectory">ResetSubdirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCmkSecretConfig` <a name="PutCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.putCmkSecretConfig"></a>

```csharp
private void PutCmkSecretConfig(DatasyncLocationFsxWindowsCmkSecretConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.putCmkSecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfig">DatasyncLocationFsxWindowsCmkSecretConfig</a>

---

##### `PutCustomSecretConfig` <a name="PutCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.putCustomSecretConfig"></a>

```csharp
private void PutCustomSecretConfig(DatasyncLocationFsxWindowsCustomSecretConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.putCustomSecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfig">DatasyncLocationFsxWindowsCustomSecretConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.putTags"></a>

```csharp
private void PutTags(IResolvable|DatasyncLocationFsxWindowsTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTags">DatasyncLocationFsxWindowsTags</a>[]

---

##### `ResetCmkSecretConfig` <a name="ResetCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.resetCmkSecretConfig"></a>

```csharp
private void ResetCmkSecretConfig()
```

##### `ResetCustomSecretConfig` <a name="ResetCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.resetCustomSecretConfig"></a>

```csharp
private void ResetCustomSecretConfig()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.resetDomain"></a>

```csharp
private void ResetDomain()
```

##### `ResetFsxFilesystemArn` <a name="ResetFsxFilesystemArn" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.resetFsxFilesystemArn"></a>

```csharp
private void ResetFsxFilesystemArn()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetSubdirectory` <a name="ResetSubdirectory" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.resetSubdirectory"></a>

```csharp
private void ResetSubdirectory()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatasyncLocationFsxWindows resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatasyncLocationFsxWindows.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatasyncLocationFsxWindows.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatasyncLocationFsxWindows.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatasyncLocationFsxWindows.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DatasyncLocationFsxWindows resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatasyncLocationFsxWindows to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatasyncLocationFsxWindows that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_windows#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DatasyncLocationFsxWindows to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.cmkSecretConfig">CmkSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference">DatasyncLocationFsxWindowsCmkSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.customSecretConfig">CustomSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference">DatasyncLocationFsxWindowsCustomSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.locationArn">LocationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.locationUri">LocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.managedSecretConfig">ManagedSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference">DatasyncLocationFsxWindowsManagedSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsList">DatasyncLocationFsxWindowsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.cmkSecretConfigInput">CmkSecretConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfig">DatasyncLocationFsxWindowsCmkSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.customSecretConfigInput">CustomSecretConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfig">DatasyncLocationFsxWindowsCustomSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.fsxFilesystemArnInput">FsxFilesystemArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.securityGroupArnsInput">SecurityGroupArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.subdirectoryInput">SubdirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTags">DatasyncLocationFsxWindowsTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.userInput">UserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.fsxFilesystemArn">FsxFilesystemArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.securityGroupArns">SecurityGroupArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.subdirectory">Subdirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.user">User</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CmkSecretConfig`<sup>Required</sup> <a name="CmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.cmkSecretConfig"></a>

```csharp
public DatasyncLocationFsxWindowsCmkSecretConfigOutputReference CmkSecretConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference">DatasyncLocationFsxWindowsCmkSecretConfigOutputReference</a>

---

##### `CustomSecretConfig`<sup>Required</sup> <a name="CustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.customSecretConfig"></a>

```csharp
public DatasyncLocationFsxWindowsCustomSecretConfigOutputReference CustomSecretConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference">DatasyncLocationFsxWindowsCustomSecretConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocationArn`<sup>Required</sup> <a name="LocationArn" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.locationArn"></a>

```csharp
public string LocationArn { get; }
```

- *Type:* string

---

##### `LocationUri`<sup>Required</sup> <a name="LocationUri" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.locationUri"></a>

```csharp
public string LocationUri { get; }
```

- *Type:* string

---

##### `ManagedSecretConfig`<sup>Required</sup> <a name="ManagedSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.managedSecretConfig"></a>

```csharp
public DatasyncLocationFsxWindowsManagedSecretConfigOutputReference ManagedSecretConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference">DatasyncLocationFsxWindowsManagedSecretConfigOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.tags"></a>

```csharp
public DatasyncLocationFsxWindowsTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsList">DatasyncLocationFsxWindowsTagsList</a>

---

##### `CmkSecretConfigInput`<sup>Optional</sup> <a name="CmkSecretConfigInput" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.cmkSecretConfigInput"></a>

```csharp
public IResolvable|DatasyncLocationFsxWindowsCmkSecretConfig CmkSecretConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfig">DatasyncLocationFsxWindowsCmkSecretConfig</a>

---

##### `CustomSecretConfigInput`<sup>Optional</sup> <a name="CustomSecretConfigInput" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.customSecretConfigInput"></a>

```csharp
public IResolvable|DatasyncLocationFsxWindowsCustomSecretConfig CustomSecretConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfig">DatasyncLocationFsxWindowsCustomSecretConfig</a>

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `FsxFilesystemArnInput`<sup>Optional</sup> <a name="FsxFilesystemArnInput" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.fsxFilesystemArnInput"></a>

```csharp
public string FsxFilesystemArnInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `SecurityGroupArnsInput`<sup>Optional</sup> <a name="SecurityGroupArnsInput" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.securityGroupArnsInput"></a>

```csharp
public string[] SecurityGroupArnsInput { get; }
```

- *Type:* string[]

---

##### `SubdirectoryInput`<sup>Optional</sup> <a name="SubdirectoryInput" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.subdirectoryInput"></a>

```csharp
public string SubdirectoryInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.tagsInput"></a>

```csharp
public IResolvable|DatasyncLocationFsxWindowsTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTags">DatasyncLocationFsxWindowsTags</a>[]

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.userInput"></a>

```csharp
public string UserInput { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `FsxFilesystemArn`<sup>Required</sup> <a name="FsxFilesystemArn" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.fsxFilesystemArn"></a>

```csharp
public string FsxFilesystemArn { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `SecurityGroupArns`<sup>Required</sup> <a name="SecurityGroupArns" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.securityGroupArns"></a>

```csharp
public string[] SecurityGroupArns { get; }
```

- *Type:* string[]

---

##### `Subdirectory`<sup>Required</sup> <a name="Subdirectory" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.subdirectory"></a>

```csharp
public string Subdirectory { get; }
```

- *Type:* string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindows.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationFsxWindowsCmkSecretConfig <a name="DatasyncLocationFsxWindowsCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatasyncLocationFsxWindowsCmkSecretConfig {
    string KmsKeyArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn. |

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfig.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn.

DataSync provides this key to AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_windows#kms_key_arn DatasyncLocationFsxWindows#kms_key_arn}

---

### DatasyncLocationFsxWindowsConfig <a name="DatasyncLocationFsxWindowsConfig" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatasyncLocationFsxWindowsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] SecurityGroupArns,
    string User,
    DatasyncLocationFsxWindowsCmkSecretConfig CmkSecretConfig = null,
    DatasyncLocationFsxWindowsCustomSecretConfig CustomSecretConfig = null,
    string Domain = null,
    string FsxFilesystemArn = null,
    string Password = null,
    string Subdirectory = null,
    IResolvable|DatasyncLocationFsxWindowsTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig.property.securityGroupArns">SecurityGroupArns</a></code> | <code>string[]</code> | The ARNs of the security groups that are to use to configure the FSx for Windows file system. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig.property.user">User</a></code> | <code>string</code> | The user who has the permissions to access files and folders in the FSx for Windows file system. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig.property.cmkSecretConfig">CmkSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfig">DatasyncLocationFsxWindowsCmkSecretConfig</a></code> | Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig.property.customSecretConfig">CustomSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfig">DatasyncLocationFsxWindowsCustomSecretConfig</a></code> | Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig.property.domain">Domain</a></code> | <code>string</code> | The name of the Windows domain that the FSx for Windows server belongs to. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig.property.fsxFilesystemArn">FsxFilesystemArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for the FSx for Windows file system. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig.property.password">Password</a></code> | <code>string</code> | The password of the user who has the permissions to access files and folders in the FSx for Windows file system. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig.property.subdirectory">Subdirectory</a></code> | <code>string</code> | A subdirectory in the location's path. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTags">DatasyncLocationFsxWindowsTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SecurityGroupArns`<sup>Required</sup> <a name="SecurityGroupArns" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig.property.securityGroupArns"></a>

```csharp
public string[] SecurityGroupArns { get; set; }
```

- *Type:* string[]

The ARNs of the security groups that are to use to configure the FSx for Windows file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_windows#security_group_arns DatasyncLocationFsxWindows#security_group_arns}

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig.property.user"></a>

```csharp
public string User { get; set; }
```

- *Type:* string

The user who has the permissions to access files and folders in the FSx for Windows file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_windows#user DatasyncLocationFsxWindows#user}

---

##### `CmkSecretConfig`<sup>Optional</sup> <a name="CmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig.property.cmkSecretConfig"></a>

```csharp
public DatasyncLocationFsxWindowsCmkSecretConfig CmkSecretConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfig">DatasyncLocationFsxWindowsCmkSecretConfig</a>

Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_windows#cmk_secret_config DatasyncLocationFsxWindows#cmk_secret_config}

---

##### `CustomSecretConfig`<sup>Optional</sup> <a name="CustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig.property.customSecretConfig"></a>

```csharp
public DatasyncLocationFsxWindowsCustomSecretConfig CustomSecretConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfig">DatasyncLocationFsxWindowsCustomSecretConfig</a>

Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_windows#custom_secret_config DatasyncLocationFsxWindows#custom_secret_config}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

The name of the Windows domain that the FSx for Windows server belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_windows#domain DatasyncLocationFsxWindows#domain}

---

##### `FsxFilesystemArn`<sup>Optional</sup> <a name="FsxFilesystemArn" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig.property.fsxFilesystemArn"></a>

```csharp
public string FsxFilesystemArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) for the FSx for Windows file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_windows#fsx_filesystem_arn DatasyncLocationFsxWindows#fsx_filesystem_arn}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password of the user who has the permissions to access files and folders in the FSx for Windows file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_windows#password DatasyncLocationFsxWindows#password}

---

##### `Subdirectory`<sup>Optional</sup> <a name="Subdirectory" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig.property.subdirectory"></a>

```csharp
public string Subdirectory { get; set; }
```

- *Type:* string

A subdirectory in the location's path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_windows#subdirectory DatasyncLocationFsxWindows#subdirectory}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsConfig.property.tags"></a>

```csharp
public IResolvable|DatasyncLocationFsxWindowsTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTags">DatasyncLocationFsxWindowsTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_windows#tags DatasyncLocationFsxWindows#tags}

---

### DatasyncLocationFsxWindowsCustomSecretConfig <a name="DatasyncLocationFsxWindowsCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatasyncLocationFsxWindowsCustomSecretConfig {
    string SecretAccessRoleArn = null,
    string SecretArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfig.property.secretAccessRoleArn">SecretAccessRoleArn</a></code> | <code>string</code> | Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfig.property.secretArn">SecretArn</a></code> | <code>string</code> | Specifies the ARN for a customer created AWS Secrets Manager secret. |

---

##### `SecretAccessRoleArn`<sup>Optional</sup> <a name="SecretAccessRoleArn" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfig.property.secretAccessRoleArn"></a>

```csharp
public string SecretAccessRoleArn { get; set; }
```

- *Type:* string

Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_windows#secret_access_role_arn DatasyncLocationFsxWindows#secret_access_role_arn}

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfig.property.secretArn"></a>

```csharp
public string SecretArn { get; set; }
```

- *Type:* string

Specifies the ARN for a customer created AWS Secrets Manager secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_windows#secret_arn DatasyncLocationFsxWindows#secret_arn}

---

### DatasyncLocationFsxWindowsManagedSecretConfig <a name="DatasyncLocationFsxWindowsManagedSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatasyncLocationFsxWindowsManagedSecretConfig {

};
```


### DatasyncLocationFsxWindowsTags <a name="DatasyncLocationFsxWindowsTags" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatasyncLocationFsxWindowsTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTags.property.key">Key</a></code> | <code>string</code> | The key for an AWS resource tag. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTags.property.value">Value</a></code> | <code>string</code> | The value for an AWS resource tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_windows#key DatasyncLocationFsxWindows#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_windows#value DatasyncLocationFsxWindows#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncLocationFsxWindowsCmkSecretConfigOutputReference <a name="DatasyncLocationFsxWindowsCmkSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatasyncLocationFsxWindowsCmkSecretConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfig">DatasyncLocationFsxWindowsCmkSecretConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatasyncLocationFsxWindowsCmkSecretConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCmkSecretConfig">DatasyncLocationFsxWindowsCmkSecretConfig</a>

---


### DatasyncLocationFsxWindowsCustomSecretConfigOutputReference <a name="DatasyncLocationFsxWindowsCustomSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatasyncLocationFsxWindowsCustomSecretConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.resetSecretAccessRoleArn">ResetSecretAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretAccessRoleArn` <a name="ResetSecretAccessRoleArn" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.resetSecretAccessRoleArn"></a>

```csharp
private void ResetSecretAccessRoleArn()
```

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.resetSecretArn"></a>

```csharp
private void ResetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.property.secretAccessRoleArnInput">SecretAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.property.secretAccessRoleArn">SecretAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfig">DatasyncLocationFsxWindowsCustomSecretConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretAccessRoleArnInput`<sup>Optional</sup> <a name="SecretAccessRoleArnInput" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.property.secretAccessRoleArnInput"></a>

```csharp
public string SecretAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.property.secretArnInput"></a>

```csharp
public string SecretArnInput { get; }
```

- *Type:* string

---

##### `SecretAccessRoleArn`<sup>Required</sup> <a name="SecretAccessRoleArn" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.property.secretAccessRoleArn"></a>

```csharp
public string SecretAccessRoleArn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatasyncLocationFsxWindowsCustomSecretConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsCustomSecretConfig">DatasyncLocationFsxWindowsCustomSecretConfig</a>

---


### DatasyncLocationFsxWindowsManagedSecretConfigOutputReference <a name="DatasyncLocationFsxWindowsManagedSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatasyncLocationFsxWindowsManagedSecretConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfig">DatasyncLocationFsxWindowsManagedSecretConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfigOutputReference.property.internalValue"></a>

```csharp
public DatasyncLocationFsxWindowsManagedSecretConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsManagedSecretConfig">DatasyncLocationFsxWindowsManagedSecretConfig</a>

---


### DatasyncLocationFsxWindowsTagsList <a name="DatasyncLocationFsxWindowsTagsList" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatasyncLocationFsxWindowsTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsList.get"></a>

```csharp
private DatasyncLocationFsxWindowsTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTags">DatasyncLocationFsxWindowsTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsList.property.internalValue"></a>

```csharp
public IResolvable|DatasyncLocationFsxWindowsTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTags">DatasyncLocationFsxWindowsTags</a>[]

---


### DatasyncLocationFsxWindowsTagsOutputReference <a name="DatasyncLocationFsxWindowsTagsOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatasyncLocationFsxWindowsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTags">DatasyncLocationFsxWindowsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatasyncLocationFsxWindowsTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationFsxWindows.DatasyncLocationFsxWindowsTags">DatasyncLocationFsxWindowsTags</a>

---



