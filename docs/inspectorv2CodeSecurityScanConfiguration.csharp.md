# `inspectorv2CodeSecurityScanConfiguration` Submodule <a name="`inspectorv2CodeSecurityScanConfiguration` Submodule" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Inspectorv2CodeSecurityScanConfiguration <a name="Inspectorv2CodeSecurityScanConfiguration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration awscc_inspectorv2_code_security_scan_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CodeSecurityScanConfiguration(Construct Scope, string Id, Inspectorv2CodeSecurityScanConfigurationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig">Inspectorv2CodeSecurityScanConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig">Inspectorv2CodeSecurityScanConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.putScopeSettings">PutScopeSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetLevel">ResetLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetScopeSettings">ResetScopeSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.putConfiguration"></a>

```csharp
private void PutConfiguration(Inspectorv2CodeSecurityScanConfigurationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration">Inspectorv2CodeSecurityScanConfigurationConfiguration</a>

---

##### `PutScopeSettings` <a name="PutScopeSettings" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.putScopeSettings"></a>

```csharp
private void PutScopeSettings(Inspectorv2CodeSecurityScanConfigurationScopeSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.putScopeSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings">Inspectorv2CodeSecurityScanConfigurationScopeSettings</a>

---

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetConfiguration"></a>

```csharp
private void ResetConfiguration()
```

##### `ResetLevel` <a name="ResetLevel" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetLevel"></a>

```csharp
private void ResetLevel()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetScopeSettings` <a name="ResetScopeSettings" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetScopeSettings"></a>

```csharp
private void ResetScopeSettings()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Inspectorv2CodeSecurityScanConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Inspectorv2CodeSecurityScanConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Inspectorv2CodeSecurityScanConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Inspectorv2CodeSecurityScanConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Inspectorv2CodeSecurityScanConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Inspectorv2CodeSecurityScanConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Inspectorv2CodeSecurityScanConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Inspectorv2CodeSecurityScanConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Inspectorv2CodeSecurityScanConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference">Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.scopeSettings">ScopeSettings</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference">Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.configurationInput">ConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration">Inspectorv2CodeSecurityScanConfigurationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.levelInput">LevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.scopeSettingsInput">ScopeSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings">Inspectorv2CodeSecurityScanConfigurationScopeSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.configuration"></a>

```csharp
public Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference">Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ScopeSettings`<sup>Required</sup> <a name="ScopeSettings" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.scopeSettings"></a>

```csharp
public Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference ScopeSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference">Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference</a>

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.configurationInput"></a>

```csharp
public IResolvable|Inspectorv2CodeSecurityScanConfigurationConfiguration ConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration">Inspectorv2CodeSecurityScanConfigurationConfiguration</a>

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.levelInput"></a>

```csharp
public string LevelInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ScopeSettingsInput`<sup>Optional</sup> <a name="ScopeSettingsInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.scopeSettingsInput"></a>

```csharp
public IResolvable|Inspectorv2CodeSecurityScanConfigurationScopeSettings ScopeSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings">Inspectorv2CodeSecurityScanConfigurationScopeSettings</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Inspectorv2CodeSecurityScanConfigurationConfig <a name="Inspectorv2CodeSecurityScanConfigurationConfig" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CodeSecurityScanConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    Inspectorv2CodeSecurityScanConfigurationConfiguration Configuration = null,
    string Level = null,
    string Name = null,
    Inspectorv2CodeSecurityScanConfigurationScopeSettings ScopeSettings = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration">Inspectorv2CodeSecurityScanConfigurationConfiguration</a></code> | Code Security Scan Configuration. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.level">Level</a></code> | <code>string</code> | Configuration Level. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.name">Name</a></code> | <code>string</code> | Code Security Scan Configuration name. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.scopeSettings">ScopeSettings</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings">Inspectorv2CodeSecurityScanConfigurationScopeSettings</a></code> | Scope Settings. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#tags Inspectorv2CodeSecurityScanConfiguration#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.configuration"></a>

```csharp
public Inspectorv2CodeSecurityScanConfigurationConfiguration Configuration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration">Inspectorv2CodeSecurityScanConfigurationConfiguration</a>

Code Security Scan Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#configuration Inspectorv2CodeSecurityScanConfiguration#configuration}

---

##### `Level`<sup>Optional</sup> <a name="Level" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.level"></a>

```csharp
public string Level { get; set; }
```

- *Type:* string

Configuration Level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#level Inspectorv2CodeSecurityScanConfiguration#level}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Code Security Scan Configuration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#name Inspectorv2CodeSecurityScanConfiguration#name}

---

##### `ScopeSettings`<sup>Optional</sup> <a name="ScopeSettings" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.scopeSettings"></a>

```csharp
public Inspectorv2CodeSecurityScanConfigurationScopeSettings ScopeSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings">Inspectorv2CodeSecurityScanConfigurationScopeSettings</a>

Scope Settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#scope_settings Inspectorv2CodeSecurityScanConfiguration#scope_settings}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#tags Inspectorv2CodeSecurityScanConfiguration#tags}.

---

### Inspectorv2CodeSecurityScanConfigurationConfiguration <a name="Inspectorv2CodeSecurityScanConfigurationConfiguration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CodeSecurityScanConfigurationConfiguration {
    Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration ContinuousIntegrationScanConfiguration = null,
    Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration PeriodicScanConfiguration = null,
    string[] RuleSetCategories = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration.property.continuousIntegrationScanConfiguration">ContinuousIntegrationScanConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#continuous_integration_scan_configuration Inspectorv2CodeSecurityScanConfiguration#continuous_integration_scan_configuration}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration.property.periodicScanConfiguration">PeriodicScanConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#periodic_scan_configuration Inspectorv2CodeSecurityScanConfiguration#periodic_scan_configuration}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration.property.ruleSetCategories">RuleSetCategories</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#rule_set_categories Inspectorv2CodeSecurityScanConfiguration#rule_set_categories}. |

---

##### `ContinuousIntegrationScanConfiguration`<sup>Optional</sup> <a name="ContinuousIntegrationScanConfiguration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration.property.continuousIntegrationScanConfiguration"></a>

```csharp
public Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration ContinuousIntegrationScanConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#continuous_integration_scan_configuration Inspectorv2CodeSecurityScanConfiguration#continuous_integration_scan_configuration}.

---

##### `PeriodicScanConfiguration`<sup>Optional</sup> <a name="PeriodicScanConfiguration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration.property.periodicScanConfiguration"></a>

```csharp
public Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration PeriodicScanConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#periodic_scan_configuration Inspectorv2CodeSecurityScanConfiguration#periodic_scan_configuration}.

---

##### `RuleSetCategories`<sup>Optional</sup> <a name="RuleSetCategories" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration.property.ruleSetCategories"></a>

```csharp
public string[] RuleSetCategories { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#rule_set_categories Inspectorv2CodeSecurityScanConfiguration#rule_set_categories}.

---

### Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration <a name="Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration {
    string[] SupportedEvents = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration.property.supportedEvents">SupportedEvents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#supported_events Inspectorv2CodeSecurityScanConfiguration#supported_events}. |

---

##### `SupportedEvents`<sup>Optional</sup> <a name="SupportedEvents" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration.property.supportedEvents"></a>

```csharp
public string[] SupportedEvents { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#supported_events Inspectorv2CodeSecurityScanConfiguration#supported_events}.

---

### Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration <a name="Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration {
    string Frequency = null,
    string FrequencyExpression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration.property.frequency">Frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#frequency Inspectorv2CodeSecurityScanConfiguration#frequency}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration.property.frequencyExpression">FrequencyExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#frequency_expression Inspectorv2CodeSecurityScanConfiguration#frequency_expression}. |

---

##### `Frequency`<sup>Optional</sup> <a name="Frequency" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration.property.frequency"></a>

```csharp
public string Frequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#frequency Inspectorv2CodeSecurityScanConfiguration#frequency}.

---

##### `FrequencyExpression`<sup>Optional</sup> <a name="FrequencyExpression" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration.property.frequencyExpression"></a>

```csharp
public string FrequencyExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#frequency_expression Inspectorv2CodeSecurityScanConfiguration#frequency_expression}.

---

### Inspectorv2CodeSecurityScanConfigurationScopeSettings <a name="Inspectorv2CodeSecurityScanConfigurationScopeSettings" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CodeSecurityScanConfigurationScopeSettings {
    string ProjectSelectionScope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings.property.projectSelectionScope">ProjectSelectionScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#project_selection_scope Inspectorv2CodeSecurityScanConfiguration#project_selection_scope}. |

---

##### `ProjectSelectionScope`<sup>Optional</sup> <a name="ProjectSelectionScope" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings.property.projectSelectionScope"></a>

```csharp
public string ProjectSelectionScope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#project_selection_scope Inspectorv2CodeSecurityScanConfiguration#project_selection_scope}.

---

## Classes <a name="Classes" id="Classes"></a>

### Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference <a name="Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.resetSupportedEvents">ResetSupportedEvents</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSupportedEvents` <a name="ResetSupportedEvents" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.resetSupportedEvents"></a>

```csharp
private void ResetSupportedEvents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.supportedEventsInput">SupportedEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.supportedEvents">SupportedEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SupportedEventsInput`<sup>Optional</sup> <a name="SupportedEventsInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.supportedEventsInput"></a>

```csharp
public string[] SupportedEventsInput { get; }
```

- *Type:* string[]

---

##### `SupportedEvents`<sup>Required</sup> <a name="SupportedEvents" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.supportedEvents"></a>

```csharp
public string[] SupportedEvents { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration</a>

---


### Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference <a name="Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.putContinuousIntegrationScanConfiguration">PutContinuousIntegrationScanConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.putPeriodicScanConfiguration">PutPeriodicScanConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.resetContinuousIntegrationScanConfiguration">ResetContinuousIntegrationScanConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.resetPeriodicScanConfiguration">ResetPeriodicScanConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.resetRuleSetCategories">ResetRuleSetCategories</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContinuousIntegrationScanConfiguration` <a name="PutContinuousIntegrationScanConfiguration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.putContinuousIntegrationScanConfiguration"></a>

```csharp
private void PutContinuousIntegrationScanConfiguration(Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.putContinuousIntegrationScanConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration</a>

---

##### `PutPeriodicScanConfiguration` <a name="PutPeriodicScanConfiguration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.putPeriodicScanConfiguration"></a>

```csharp
private void PutPeriodicScanConfiguration(Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.putPeriodicScanConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration</a>

---

##### `ResetContinuousIntegrationScanConfiguration` <a name="ResetContinuousIntegrationScanConfiguration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.resetContinuousIntegrationScanConfiguration"></a>

```csharp
private void ResetContinuousIntegrationScanConfiguration()
```

##### `ResetPeriodicScanConfiguration` <a name="ResetPeriodicScanConfiguration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.resetPeriodicScanConfiguration"></a>

```csharp
private void ResetPeriodicScanConfiguration()
```

##### `ResetRuleSetCategories` <a name="ResetRuleSetCategories" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.resetRuleSetCategories"></a>

```csharp
private void ResetRuleSetCategories()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.continuousIntegrationScanConfiguration">ContinuousIntegrationScanConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference">Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.periodicScanConfiguration">PeriodicScanConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference">Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.continuousIntegrationScanConfigurationInput">ContinuousIntegrationScanConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.periodicScanConfigurationInput">PeriodicScanConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.ruleSetCategoriesInput">RuleSetCategoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.ruleSetCategories">RuleSetCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration">Inspectorv2CodeSecurityScanConfigurationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContinuousIntegrationScanConfiguration`<sup>Required</sup> <a name="ContinuousIntegrationScanConfiguration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.continuousIntegrationScanConfiguration"></a>

```csharp
public Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference ContinuousIntegrationScanConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference">Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference</a>

---

##### `PeriodicScanConfiguration`<sup>Required</sup> <a name="PeriodicScanConfiguration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.periodicScanConfiguration"></a>

```csharp
public Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference PeriodicScanConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference">Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference</a>

---

##### `ContinuousIntegrationScanConfigurationInput`<sup>Optional</sup> <a name="ContinuousIntegrationScanConfigurationInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.continuousIntegrationScanConfigurationInput"></a>

```csharp
public IResolvable|Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration ContinuousIntegrationScanConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration</a>

---

##### `PeriodicScanConfigurationInput`<sup>Optional</sup> <a name="PeriodicScanConfigurationInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.periodicScanConfigurationInput"></a>

```csharp
public IResolvable|Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration PeriodicScanConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration</a>

---

##### `RuleSetCategoriesInput`<sup>Optional</sup> <a name="RuleSetCategoriesInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.ruleSetCategoriesInput"></a>

```csharp
public string[] RuleSetCategoriesInput { get; }
```

- *Type:* string[]

---

##### `RuleSetCategories`<sup>Required</sup> <a name="RuleSetCategories" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.ruleSetCategories"></a>

```csharp
public string[] RuleSetCategories { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Inspectorv2CodeSecurityScanConfigurationConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration">Inspectorv2CodeSecurityScanConfigurationConfiguration</a>

---


### Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference <a name="Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.resetFrequency">ResetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.resetFrequencyExpression">ResetFrequencyExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrequency` <a name="ResetFrequency" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.resetFrequency"></a>

```csharp
private void ResetFrequency()
```

##### `ResetFrequencyExpression` <a name="ResetFrequencyExpression" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.resetFrequencyExpression"></a>

```csharp
private void ResetFrequencyExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.frequencyExpressionInput">FrequencyExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.frequencyInput">FrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.frequencyExpression">FrequencyExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrequencyExpressionInput`<sup>Optional</sup> <a name="FrequencyExpressionInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.frequencyExpressionInput"></a>

```csharp
public string FrequencyExpressionInput { get; }
```

- *Type:* string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.frequencyInput"></a>

```csharp
public string FrequencyInput { get; }
```

- *Type:* string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `FrequencyExpression`<sup>Required</sup> <a name="FrequencyExpression" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.frequencyExpression"></a>

```csharp
public string FrequencyExpression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration</a>

---


### Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference <a name="Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.resetProjectSelectionScope">ResetProjectSelectionScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProjectSelectionScope` <a name="ResetProjectSelectionScope" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.resetProjectSelectionScope"></a>

```csharp
private void ResetProjectSelectionScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.projectSelectionScopeInput">ProjectSelectionScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.projectSelectionScope">ProjectSelectionScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings">Inspectorv2CodeSecurityScanConfigurationScopeSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProjectSelectionScopeInput`<sup>Optional</sup> <a name="ProjectSelectionScopeInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.projectSelectionScopeInput"></a>

```csharp
public string ProjectSelectionScopeInput { get; }
```

- *Type:* string

---

##### `ProjectSelectionScope`<sup>Required</sup> <a name="ProjectSelectionScope" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.projectSelectionScope"></a>

```csharp
public string ProjectSelectionScope { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Inspectorv2CodeSecurityScanConfigurationScopeSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings">Inspectorv2CodeSecurityScanConfigurationScopeSettings</a>

---



