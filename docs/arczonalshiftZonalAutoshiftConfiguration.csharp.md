# `arczonalshiftZonalAutoshiftConfiguration` Submodule <a name="`arczonalshiftZonalAutoshiftConfiguration` Submodule" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArczonalshiftZonalAutoshiftConfiguration <a name="ArczonalshiftZonalAutoshiftConfiguration" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration awscc_arczonalshift_zonal_autoshift_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ArczonalshiftZonalAutoshiftConfiguration(Construct Scope, string Id, ArczonalshiftZonalAutoshiftConfigurationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig">ArczonalshiftZonalAutoshiftConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig">ArczonalshiftZonalAutoshiftConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.putPracticeRunConfiguration">PutPracticeRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetPracticeRunConfiguration">ResetPracticeRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetResourceIdentifier">ResetResourceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetZonalAutoshiftStatus">ResetZonalAutoshiftStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPracticeRunConfiguration` <a name="PutPracticeRunConfiguration" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.putPracticeRunConfiguration"></a>

```csharp
private void PutPracticeRunConfiguration(ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.putPracticeRunConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration</a>

---

##### `ResetPracticeRunConfiguration` <a name="ResetPracticeRunConfiguration" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetPracticeRunConfiguration"></a>

```csharp
private void ResetPracticeRunConfiguration()
```

##### `ResetResourceIdentifier` <a name="ResetResourceIdentifier" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetResourceIdentifier"></a>

```csharp
private void ResetResourceIdentifier()
```

##### `ResetZonalAutoshiftStatus` <a name="ResetZonalAutoshiftStatus" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetZonalAutoshiftStatus"></a>

```csharp
private void ResetZonalAutoshiftStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ArczonalshiftZonalAutoshiftConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ArczonalshiftZonalAutoshiftConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ArczonalshiftZonalAutoshiftConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ArczonalshiftZonalAutoshiftConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ArczonalshiftZonalAutoshiftConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ArczonalshiftZonalAutoshiftConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ArczonalshiftZonalAutoshiftConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ArczonalshiftZonalAutoshiftConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ArczonalshiftZonalAutoshiftConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.practiceRunConfiguration">PracticeRunConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.practiceRunConfigurationInput">PracticeRunConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.resourceIdentifierInput">ResourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.zonalAutoshiftStatusInput">ZonalAutoshiftStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.zonalAutoshiftStatus">ZonalAutoshiftStatus</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PracticeRunConfiguration`<sup>Required</sup> <a name="PracticeRunConfiguration" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.practiceRunConfiguration"></a>

```csharp
public ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference PracticeRunConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference</a>

---

##### `PracticeRunConfigurationInput`<sup>Optional</sup> <a name="PracticeRunConfigurationInput" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.practiceRunConfigurationInput"></a>

```csharp
public IResolvable|ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration PracticeRunConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration</a>

---

##### `ResourceIdentifierInput`<sup>Optional</sup> <a name="ResourceIdentifierInput" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.resourceIdentifierInput"></a>

```csharp
public string ResourceIdentifierInput { get; }
```

- *Type:* string

---

##### `ZonalAutoshiftStatusInput`<sup>Optional</sup> <a name="ZonalAutoshiftStatusInput" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.zonalAutoshiftStatusInput"></a>

```csharp
public string ZonalAutoshiftStatusInput { get; }
```

- *Type:* string

---

##### `ResourceIdentifier`<sup>Required</sup> <a name="ResourceIdentifier" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.resourceIdentifier"></a>

```csharp
public string ResourceIdentifier { get; }
```

- *Type:* string

---

##### `ZonalAutoshiftStatus`<sup>Required</sup> <a name="ZonalAutoshiftStatus" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.zonalAutoshiftStatus"></a>

```csharp
public string ZonalAutoshiftStatus { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ArczonalshiftZonalAutoshiftConfigurationConfig <a name="ArczonalshiftZonalAutoshiftConfigurationConfig" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ArczonalshiftZonalAutoshiftConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration PracticeRunConfiguration = null,
    string ResourceIdentifier = null,
    string ZonalAutoshiftStatus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.practiceRunConfiguration">PracticeRunConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#practice_run_configuration ArczonalshiftZonalAutoshiftConfiguration#practice_run_configuration}. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#resource_identifier ArczonalshiftZonalAutoshiftConfiguration#resource_identifier}. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.zonalAutoshiftStatus">ZonalAutoshiftStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#zonal_autoshift_status ArczonalshiftZonalAutoshiftConfiguration#zonal_autoshift_status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PracticeRunConfiguration`<sup>Optional</sup> <a name="PracticeRunConfiguration" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.practiceRunConfiguration"></a>

```csharp
public ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration PracticeRunConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#practice_run_configuration ArczonalshiftZonalAutoshiftConfiguration#practice_run_configuration}.

---

##### `ResourceIdentifier`<sup>Optional</sup> <a name="ResourceIdentifier" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.resourceIdentifier"></a>

```csharp
public string ResourceIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#resource_identifier ArczonalshiftZonalAutoshiftConfiguration#resource_identifier}.

---

##### `ZonalAutoshiftStatus`<sup>Optional</sup> <a name="ZonalAutoshiftStatus" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.zonalAutoshiftStatus"></a>

```csharp
public string ZonalAutoshiftStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#zonal_autoshift_status ArczonalshiftZonalAutoshiftConfiguration#zonal_autoshift_status}.

---

### ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration <a name="ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration {
    string[] BlockedDates = null,
    string[] BlockedWindows = null,
    IResolvable|ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms[] BlockingAlarms = null,
    IResolvable|ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms[] OutcomeAlarms = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration.property.blockedDates">BlockedDates</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocked_dates ArczonalshiftZonalAutoshiftConfiguration#blocked_dates}. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration.property.blockedWindows">BlockedWindows</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocked_windows ArczonalshiftZonalAutoshiftConfiguration#blocked_windows}. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration.property.blockingAlarms">BlockingAlarms</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocking_alarms ArczonalshiftZonalAutoshiftConfiguration#blocking_alarms}. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration.property.outcomeAlarms">OutcomeAlarms</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#outcome_alarms ArczonalshiftZonalAutoshiftConfiguration#outcome_alarms}. |

---

##### `BlockedDates`<sup>Optional</sup> <a name="BlockedDates" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration.property.blockedDates"></a>

```csharp
public string[] BlockedDates { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocked_dates ArczonalshiftZonalAutoshiftConfiguration#blocked_dates}.

---

##### `BlockedWindows`<sup>Optional</sup> <a name="BlockedWindows" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration.property.blockedWindows"></a>

```csharp
public string[] BlockedWindows { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocked_windows ArczonalshiftZonalAutoshiftConfiguration#blocked_windows}.

---

##### `BlockingAlarms`<sup>Optional</sup> <a name="BlockingAlarms" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration.property.blockingAlarms"></a>

```csharp
public IResolvable|ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms[] BlockingAlarms { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocking_alarms ArczonalshiftZonalAutoshiftConfiguration#blocking_alarms}.

---

##### `OutcomeAlarms`<sup>Optional</sup> <a name="OutcomeAlarms" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration.property.outcomeAlarms"></a>

```csharp
public IResolvable|ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms[] OutcomeAlarms { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#outcome_alarms ArczonalshiftZonalAutoshiftConfiguration#outcome_alarms}.

---

### ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms <a name="ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms {
    string AlarmIdentifier = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms.property.alarmIdentifier">AlarmIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#alarm_identifier ArczonalshiftZonalAutoshiftConfiguration#alarm_identifier}. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#type ArczonalshiftZonalAutoshiftConfiguration#type}. |

---

##### `AlarmIdentifier`<sup>Optional</sup> <a name="AlarmIdentifier" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms.property.alarmIdentifier"></a>

```csharp
public string AlarmIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#alarm_identifier ArczonalshiftZonalAutoshiftConfiguration#alarm_identifier}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#type ArczonalshiftZonalAutoshiftConfiguration#type}.

---

### ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms <a name="ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms {
    string AlarmIdentifier = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms.property.alarmIdentifier">AlarmIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#alarm_identifier ArczonalshiftZonalAutoshiftConfiguration#alarm_identifier}. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#type ArczonalshiftZonalAutoshiftConfiguration#type}. |

---

##### `AlarmIdentifier`<sup>Optional</sup> <a name="AlarmIdentifier" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms.property.alarmIdentifier"></a>

```csharp
public string AlarmIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#alarm_identifier ArczonalshiftZonalAutoshiftConfiguration#alarm_identifier}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#type ArczonalshiftZonalAutoshiftConfiguration#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList <a name="ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.get"></a>

```csharp
private ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.property.internalValue"></a>

```csharp
public IResolvable|ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms</a>[]

---


### ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference <a name="ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.resetAlarmIdentifier">ResetAlarmIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlarmIdentifier` <a name="ResetAlarmIdentifier" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.resetAlarmIdentifier"></a>

```csharp
private void ResetAlarmIdentifier()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.alarmIdentifierInput">AlarmIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.alarmIdentifier">AlarmIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlarmIdentifierInput`<sup>Optional</sup> <a name="AlarmIdentifierInput" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.alarmIdentifierInput"></a>

```csharp
public string AlarmIdentifierInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AlarmIdentifier`<sup>Required</sup> <a name="AlarmIdentifier" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.alarmIdentifier"></a>

```csharp
public string AlarmIdentifier { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms</a>

---


### ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList <a name="ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.get"></a>

```csharp
private ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.property.internalValue"></a>

```csharp
public IResolvable|ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms</a>[]

---


### ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference <a name="ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.resetAlarmIdentifier">ResetAlarmIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlarmIdentifier` <a name="ResetAlarmIdentifier" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.resetAlarmIdentifier"></a>

```csharp
private void ResetAlarmIdentifier()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.alarmIdentifierInput">AlarmIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.alarmIdentifier">AlarmIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlarmIdentifierInput`<sup>Optional</sup> <a name="AlarmIdentifierInput" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.alarmIdentifierInput"></a>

```csharp
public string AlarmIdentifierInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AlarmIdentifier`<sup>Required</sup> <a name="AlarmIdentifier" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.alarmIdentifier"></a>

```csharp
public string AlarmIdentifier { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms</a>

---


### ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference <a name="ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.putBlockingAlarms">PutBlockingAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.putOutcomeAlarms">PutOutcomeAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resetBlockedDates">ResetBlockedDates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resetBlockedWindows">ResetBlockedWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resetBlockingAlarms">ResetBlockingAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resetOutcomeAlarms">ResetOutcomeAlarms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBlockingAlarms` <a name="PutBlockingAlarms" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.putBlockingAlarms"></a>

```csharp
private void PutBlockingAlarms(IResolvable|ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.putBlockingAlarms.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms</a>[]

---

##### `PutOutcomeAlarms` <a name="PutOutcomeAlarms" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.putOutcomeAlarms"></a>

```csharp
private void PutOutcomeAlarms(IResolvable|ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.putOutcomeAlarms.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms</a>[]

---

##### `ResetBlockedDates` <a name="ResetBlockedDates" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resetBlockedDates"></a>

```csharp
private void ResetBlockedDates()
```

##### `ResetBlockedWindows` <a name="ResetBlockedWindows" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resetBlockedWindows"></a>

```csharp
private void ResetBlockedWindows()
```

##### `ResetBlockingAlarms` <a name="ResetBlockingAlarms" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resetBlockingAlarms"></a>

```csharp
private void ResetBlockingAlarms()
```

##### `ResetOutcomeAlarms` <a name="ResetOutcomeAlarms" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resetOutcomeAlarms"></a>

```csharp
private void ResetOutcomeAlarms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockingAlarms">BlockingAlarms</a></code> | <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.outcomeAlarms">OutcomeAlarms</a></code> | <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockedDatesInput">BlockedDatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockedWindowsInput">BlockedWindowsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockingAlarmsInput">BlockingAlarmsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.outcomeAlarmsInput">OutcomeAlarmsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockedDates">BlockedDates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockedWindows">BlockedWindows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockingAlarms`<sup>Required</sup> <a name="BlockingAlarms" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockingAlarms"></a>

```csharp
public ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList BlockingAlarms { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList</a>

---

##### `OutcomeAlarms`<sup>Required</sup> <a name="OutcomeAlarms" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.outcomeAlarms"></a>

```csharp
public ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList OutcomeAlarms { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList</a>

---

##### `BlockedDatesInput`<sup>Optional</sup> <a name="BlockedDatesInput" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockedDatesInput"></a>

```csharp
public string[] BlockedDatesInput { get; }
```

- *Type:* string[]

---

##### `BlockedWindowsInput`<sup>Optional</sup> <a name="BlockedWindowsInput" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockedWindowsInput"></a>

```csharp
public string[] BlockedWindowsInput { get; }
```

- *Type:* string[]

---

##### `BlockingAlarmsInput`<sup>Optional</sup> <a name="BlockingAlarmsInput" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockingAlarmsInput"></a>

```csharp
public IResolvable|ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms[] BlockingAlarmsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms</a>[]

---

##### `OutcomeAlarmsInput`<sup>Optional</sup> <a name="OutcomeAlarmsInput" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.outcomeAlarmsInput"></a>

```csharp
public IResolvable|ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms[] OutcomeAlarmsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms</a>[]

---

##### `BlockedDates`<sup>Required</sup> <a name="BlockedDates" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockedDates"></a>

```csharp
public string[] BlockedDates { get; }
```

- *Type:* string[]

---

##### `BlockedWindows`<sup>Required</sup> <a name="BlockedWindows" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockedWindows"></a>

```csharp
public string[] BlockedWindows { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration</a>

---



