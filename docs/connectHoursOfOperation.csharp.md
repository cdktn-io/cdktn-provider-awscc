# `connectHoursOfOperation` Submodule <a name="`connectHoursOfOperation` Submodule" id="@cdktn/provider-awscc.connectHoursOfOperation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectHoursOfOperation <a name="ConnectHoursOfOperation" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation awscc_connect_hours_of_operation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectHoursOfOperation(Construct Scope, string Id, ConnectHoursOfOperationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig">ConnectHoursOfOperationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig">ConnectHoursOfOperationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putChildHoursOfOperations">PutChildHoursOfOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putHoursOfOperationOverrides">PutHoursOfOperationOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putParentHoursOfOperations">PutParentHoursOfOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetChildHoursOfOperations">ResetChildHoursOfOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetHoursOfOperationOverrides">ResetHoursOfOperationOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetParentHoursOfOperations">ResetParentHoursOfOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutChildHoursOfOperations` <a name="PutChildHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putChildHoursOfOperations"></a>

```csharp
private void PutChildHoursOfOperations(IResolvable|ConnectHoursOfOperationChildHoursOfOperations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putChildHoursOfOperations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>[]

---

##### `PutConfig` <a name="PutConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putConfig"></a>

```csharp
private void PutConfig(IResolvable|ConnectHoursOfOperationConfigA[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>[]

---

##### `PutHoursOfOperationOverrides` <a name="PutHoursOfOperationOverrides" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putHoursOfOperationOverrides"></a>

```csharp
private void PutHoursOfOperationOverrides(IResolvable|ConnectHoursOfOperationHoursOfOperationOverrides[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putHoursOfOperationOverrides.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>[]

---

##### `PutParentHoursOfOperations` <a name="PutParentHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putParentHoursOfOperations"></a>

```csharp
private void PutParentHoursOfOperations(IResolvable|ConnectHoursOfOperationParentHoursOfOperations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putParentHoursOfOperations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putTags"></a>

```csharp
private void PutTags(IResolvable|ConnectHoursOfOperationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>[]

---

##### `ResetChildHoursOfOperations` <a name="ResetChildHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetChildHoursOfOperations"></a>

```csharp
private void ResetChildHoursOfOperations()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetHoursOfOperationOverrides` <a name="ResetHoursOfOperationOverrides" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetHoursOfOperationOverrides"></a>

```csharp
private void ResetHoursOfOperationOverrides()
```

##### `ResetParentHoursOfOperations` <a name="ResetParentHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetParentHoursOfOperations"></a>

```csharp
private void ResetParentHoursOfOperations()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectHoursOfOperation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectHoursOfOperation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectHoursOfOperation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectHoursOfOperation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectHoursOfOperation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ConnectHoursOfOperation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectHoursOfOperation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectHoursOfOperation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ConnectHoursOfOperation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.childHoursOfOperations">ChildHoursOfOperations</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList">ConnectHoursOfOperationChildHoursOfOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList">ConnectHoursOfOperationConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationArn">HoursOfOperationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationOverrides">HoursOfOperationOverrides</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList">ConnectHoursOfOperationHoursOfOperationOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.parentHoursOfOperations">ParentHoursOfOperations</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList">ConnectHoursOfOperationParentHoursOfOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList">ConnectHoursOfOperationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.childHoursOfOperationsInput">ChildHoursOfOperationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.configInput">ConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationOverridesInput">HoursOfOperationOverridesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.instanceArnInput">InstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.parentHoursOfOperationsInput">ParentHoursOfOperationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.instanceArn">InstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ChildHoursOfOperations`<sup>Required</sup> <a name="ChildHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.childHoursOfOperations"></a>

```csharp
public ConnectHoursOfOperationChildHoursOfOperationsList ChildHoursOfOperations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList">ConnectHoursOfOperationChildHoursOfOperationsList</a>

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.config"></a>

```csharp
public ConnectHoursOfOperationConfigAList Config { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList">ConnectHoursOfOperationConfigAList</a>

---

##### `HoursOfOperationArn`<sup>Required</sup> <a name="HoursOfOperationArn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationArn"></a>

```csharp
public string HoursOfOperationArn { get; }
```

- *Type:* string

---

##### `HoursOfOperationOverrides`<sup>Required</sup> <a name="HoursOfOperationOverrides" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationOverrides"></a>

```csharp
public ConnectHoursOfOperationHoursOfOperationOverridesList HoursOfOperationOverrides { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList">ConnectHoursOfOperationHoursOfOperationOverridesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ParentHoursOfOperations`<sup>Required</sup> <a name="ParentHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.parentHoursOfOperations"></a>

```csharp
public ConnectHoursOfOperationParentHoursOfOperationsList ParentHoursOfOperations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList">ConnectHoursOfOperationParentHoursOfOperationsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.tags"></a>

```csharp
public ConnectHoursOfOperationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList">ConnectHoursOfOperationTagsList</a>

---

##### `ChildHoursOfOperationsInput`<sup>Optional</sup> <a name="ChildHoursOfOperationsInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.childHoursOfOperationsInput"></a>

```csharp
public IResolvable|ConnectHoursOfOperationChildHoursOfOperations[] ChildHoursOfOperationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>[]

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.configInput"></a>

```csharp
public IResolvable|ConnectHoursOfOperationConfigA[] ConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `HoursOfOperationOverridesInput`<sup>Optional</sup> <a name="HoursOfOperationOverridesInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationOverridesInput"></a>

```csharp
public IResolvable|ConnectHoursOfOperationHoursOfOperationOverrides[] HoursOfOperationOverridesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>[]

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.instanceArnInput"></a>

```csharp
public string InstanceArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentHoursOfOperationsInput`<sup>Optional</sup> <a name="ParentHoursOfOperationsInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.parentHoursOfOperationsInput"></a>

```csharp
public IResolvable|ConnectHoursOfOperationParentHoursOfOperations[] ParentHoursOfOperationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.tagsInput"></a>

```csharp
public IResolvable|ConnectHoursOfOperationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>[]

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.instanceArn"></a>

```csharp
public string InstanceArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectHoursOfOperationChildHoursOfOperations <a name="ConnectHoursOfOperationChildHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectHoursOfOperationChildHoursOfOperations {
    string Id = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations.property.id">Id</a></code> | <code>string</code> | The identifier for the hours of operation. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations.property.name">Name</a></code> | <code>string</code> | The name of the hours of operation. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The identifier for the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#id ConnectHoursOfOperation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#name ConnectHoursOfOperation#name}

---

### ConnectHoursOfOperationConfig <a name="ConnectHoursOfOperationConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectHoursOfOperationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|ConnectHoursOfOperationConfigA[] Config,
    string InstanceArn,
    string Name,
    string TimeZone,
    IResolvable|ConnectHoursOfOperationChildHoursOfOperations[] ChildHoursOfOperations = null,
    string Description = null,
    IResolvable|ConnectHoursOfOperationHoursOfOperationOverrides[] HoursOfOperationOverrides = null,
    IResolvable|ConnectHoursOfOperationParentHoursOfOperations[] ParentHoursOfOperations = null,
    IResolvable|ConnectHoursOfOperationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.config">Config</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>[]</code> | Configuration information for the hours of operation: day, start time, and end time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.instanceArn">InstanceArn</a></code> | <code>string</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.name">Name</a></code> | <code>string</code> | The name of the hours of operation. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.timeZone">TimeZone</a></code> | <code>string</code> | The time zone of the hours of operation. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.childHoursOfOperations">ChildHoursOfOperations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>[]</code> | List of child hours of operations. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.description">Description</a></code> | <code>string</code> | The description of the hours of operation. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.hoursOfOperationOverrides">HoursOfOperationOverrides</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>[]</code> | One or more hours of operation overrides assigned to an hour of operation. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.parentHoursOfOperations">ParentHoursOfOperations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>[]</code> | List of parent hours of operations. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>[]</code> | One or more tags. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.config"></a>

```csharp
public IResolvable|ConnectHoursOfOperationConfigA[] Config { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>[]

Configuration information for the hours of operation: day, start time, and end time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#config ConnectHoursOfOperation#config}

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.instanceArn"></a>

```csharp
public string InstanceArn { get; set; }
```

- *Type:* string

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#instance_arn ConnectHoursOfOperation#instance_arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#name ConnectHoursOfOperation#name}

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

The time zone of the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#time_zone ConnectHoursOfOperation#time_zone}

---

##### `ChildHoursOfOperations`<sup>Optional</sup> <a name="ChildHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.childHoursOfOperations"></a>

```csharp
public IResolvable|ConnectHoursOfOperationChildHoursOfOperations[] ChildHoursOfOperations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>[]

List of child hours of operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#child_hours_of_operations ConnectHoursOfOperation#child_hours_of_operations}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#description ConnectHoursOfOperation#description}

---

##### `HoursOfOperationOverrides`<sup>Optional</sup> <a name="HoursOfOperationOverrides" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.hoursOfOperationOverrides"></a>

```csharp
public IResolvable|ConnectHoursOfOperationHoursOfOperationOverrides[] HoursOfOperationOverrides { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>[]

One or more hours of operation overrides assigned to an hour of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#hours_of_operation_overrides ConnectHoursOfOperation#hours_of_operation_overrides}

---

##### `ParentHoursOfOperations`<sup>Optional</sup> <a name="ParentHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.parentHoursOfOperations"></a>

```csharp
public IResolvable|ConnectHoursOfOperationParentHoursOfOperations[] ParentHoursOfOperations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>[]

List of parent hours of operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#parent_hours_of_operations ConnectHoursOfOperation#parent_hours_of_operations}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.tags"></a>

```csharp
public IResolvable|ConnectHoursOfOperationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>[]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#tags ConnectHoursOfOperation#tags}

---

### ConnectHoursOfOperationConfigA <a name="ConnectHoursOfOperationConfigA" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectHoursOfOperationConfigA {
    string Day,
    ConnectHoursOfOperationConfigEndTime EndTime,
    ConnectHoursOfOperationConfigStartTime StartTime
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.day">Day</a></code> | <code>string</code> | The day that the hours of operation applies to. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.endTime">EndTime</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a></code> | The end time that your contact center closes. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a></code> | The start time that your contact center opens. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.day"></a>

```csharp
public string Day { get; set; }
```

- *Type:* string

The day that the hours of operation applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#day ConnectHoursOfOperation#day}

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.endTime"></a>

```csharp
public ConnectHoursOfOperationConfigEndTime EndTime { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a>

The end time that your contact center closes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#end_time ConnectHoursOfOperation#end_time}

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.startTime"></a>

```csharp
public ConnectHoursOfOperationConfigStartTime StartTime { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a>

The start time that your contact center opens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#start_time ConnectHoursOfOperation#start_time}

---

### ConnectHoursOfOperationConfigEndTime <a name="ConnectHoursOfOperationConfigEndTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectHoursOfOperationConfigEndTime {
    double Hours,
    double Minutes
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.property.hours">Hours</a></code> | <code>double</code> | The hours. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.property.minutes">Minutes</a></code> | <code>double</code> | The minutes. |

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.property.hours"></a>

```csharp
public double Hours { get; set; }
```

- *Type:* double

The hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.property.minutes"></a>

```csharp
public double Minutes { get; set; }
```

- *Type:* double

The minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}

---

### ConnectHoursOfOperationConfigStartTime <a name="ConnectHoursOfOperationConfigStartTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectHoursOfOperationConfigStartTime {
    double Hours,
    double Minutes
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.property.hours">Hours</a></code> | <code>double</code> | The hours. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.property.minutes">Minutes</a></code> | <code>double</code> | The minutes. |

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.property.hours"></a>

```csharp
public double Hours { get; set; }
```

- *Type:* double

The hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.property.minutes"></a>

```csharp
public double Minutes { get; set; }
```

- *Type:* double

The minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}

---

### ConnectHoursOfOperationHoursOfOperationOverrides <a name="ConnectHoursOfOperationHoursOfOperationOverrides" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectHoursOfOperationHoursOfOperationOverrides {
    string EffectiveFrom = null,
    string EffectiveTill = null,
    string HoursOfOperationOverrideId = null,
    IResolvable|ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig[] OverrideConfig = null,
    string OverrideDescription = null,
    string OverrideName = null,
    string OverrideType = null,
    ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig RecurrenceConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.effectiveFrom">EffectiveFrom</a></code> | <code>string</code> | The date from which the hours of operation override would be effective. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.effectiveTill">EffectiveTill</a></code> | <code>string</code> | The date till which the hours of operation override would be effective. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.hoursOfOperationOverrideId">HoursOfOperationOverrideId</a></code> | <code>string</code> | The Resource Identifier for the hours of operation override. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.overrideConfig">OverrideConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a>[]</code> | Configuration information for the hours of operation override: day, start time, and end time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.overrideDescription">OverrideDescription</a></code> | <code>string</code> | The description of the hours of operation override. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.overrideName">OverrideName</a></code> | <code>string</code> | The name of the hours of operation override. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.overrideType">OverrideType</a></code> | <code>string</code> | The type of hours of operation override. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.recurrenceConfig">RecurrenceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig</a></code> | Configuration for recurring hours of operation overrides. |

---

##### `EffectiveFrom`<sup>Optional</sup> <a name="EffectiveFrom" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.effectiveFrom"></a>

```csharp
public string EffectiveFrom { get; set; }
```

- *Type:* string

The date from which the hours of operation override would be effective.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#effective_from ConnectHoursOfOperation#effective_from}

---

##### `EffectiveTill`<sup>Optional</sup> <a name="EffectiveTill" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.effectiveTill"></a>

```csharp
public string EffectiveTill { get; set; }
```

- *Type:* string

The date till which the hours of operation override would be effective.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#effective_till ConnectHoursOfOperation#effective_till}

---

##### `HoursOfOperationOverrideId`<sup>Optional</sup> <a name="HoursOfOperationOverrideId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.hoursOfOperationOverrideId"></a>

```csharp
public string HoursOfOperationOverrideId { get; set; }
```

- *Type:* string

The Resource Identifier for the hours of operation override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#hours_of_operation_override_id ConnectHoursOfOperation#hours_of_operation_override_id}

---

##### `OverrideConfig`<sup>Optional</sup> <a name="OverrideConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.overrideConfig"></a>

```csharp
public IResolvable|ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig[] OverrideConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a>[]

Configuration information for the hours of operation override: day, start time, and end time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#override_config ConnectHoursOfOperation#override_config}

---

##### `OverrideDescription`<sup>Optional</sup> <a name="OverrideDescription" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.overrideDescription"></a>

```csharp
public string OverrideDescription { get; set; }
```

- *Type:* string

The description of the hours of operation override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#override_description ConnectHoursOfOperation#override_description}

---

##### `OverrideName`<sup>Optional</sup> <a name="OverrideName" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.overrideName"></a>

```csharp
public string OverrideName { get; set; }
```

- *Type:* string

The name of the hours of operation override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#override_name ConnectHoursOfOperation#override_name}

---

##### `OverrideType`<sup>Optional</sup> <a name="OverrideType" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.overrideType"></a>

```csharp
public string OverrideType { get; set; }
```

- *Type:* string

The type of hours of operation override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#override_type ConnectHoursOfOperation#override_type}

---

##### `RecurrenceConfig`<sup>Optional</sup> <a name="RecurrenceConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.recurrenceConfig"></a>

```csharp
public ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig RecurrenceConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig</a>

Configuration for recurring hours of operation overrides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#recurrence_config ConnectHoursOfOperation#recurrence_config}

---

### ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig <a name="ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig {
    string Day = null,
    ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime EndTime = null,
    ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig.property.day">Day</a></code> | <code>string</code> | The day that the hours of operation override applies to. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig.property.endTime">EndTime</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime</a></code> | The new end time that your contact center closes for the overriden days. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime</a></code> | The new start time that your contact center opens for the overriden days. |

---

##### `Day`<sup>Optional</sup> <a name="Day" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig.property.day"></a>

```csharp
public string Day { get; set; }
```

- *Type:* string

The day that the hours of operation override applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#day ConnectHoursOfOperation#day}

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig.property.endTime"></a>

```csharp
public ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime EndTime { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime</a>

The new end time that your contact center closes for the overriden days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#end_time ConnectHoursOfOperation#end_time}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig.property.startTime"></a>

```csharp
public ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime StartTime { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime</a>

The new start time that your contact center opens for the overriden days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#start_time ConnectHoursOfOperation#start_time}

---

### ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime <a name="ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime {
    double Hours = null,
    double Minutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime.property.hours">Hours</a></code> | <code>double</code> | The hours. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime.property.minutes">Minutes</a></code> | <code>double</code> | The minutes. |

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime.property.hours"></a>

```csharp
public double Hours { get; set; }
```

- *Type:* double

The hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime.property.minutes"></a>

```csharp
public double Minutes { get; set; }
```

- *Type:* double

The minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}

---

### ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime <a name="ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime {
    double Hours = null,
    double Minutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime.property.hours">Hours</a></code> | <code>double</code> | The hours. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime.property.minutes">Minutes</a></code> | <code>double</code> | The minutes. |

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime.property.hours"></a>

```csharp
public double Hours { get; set; }
```

- *Type:* double

The hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime.property.minutes"></a>

```csharp
public double Minutes { get; set; }
```

- *Type:* double

The minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}

---

### ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig <a name="ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig {
    ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern RecurrencePattern = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig.property.recurrencePattern">RecurrencePattern</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern</a></code> | Pattern for recurring hours of operation overrides. |

---

##### `RecurrencePattern`<sup>Optional</sup> <a name="RecurrencePattern" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig.property.recurrencePattern"></a>

```csharp
public ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern RecurrencePattern { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern</a>

Pattern for recurring hours of operation overrides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#recurrence_pattern ConnectHoursOfOperation#recurrence_pattern}

---

### ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern <a name="ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern {
    double[] ByMonth = null,
    double[] ByMonthDay = null,
    double[] ByWeekdayOccurrence = null,
    string Frequency = null,
    double Interval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.byMonth">ByMonth</a></code> | <code>double[]</code> | List of months (1-12) for recurrence pattern. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.byMonthDay">ByMonthDay</a></code> | <code>double[]</code> | List of month days (-1 to 31) for recurrence pattern. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.byWeekdayOccurrence">ByWeekdayOccurrence</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#by_weekday_occurrence ConnectHoursOfOperation#by_weekday_occurrence}. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.frequency">Frequency</a></code> | <code>string</code> | The frequency of recurrence for hours of operation overrides. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.interval">Interval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#interval ConnectHoursOfOperation#interval}. |

---

##### `ByMonth`<sup>Optional</sup> <a name="ByMonth" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.byMonth"></a>

```csharp
public double[] ByMonth { get; set; }
```

- *Type:* double[]

List of months (1-12) for recurrence pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#by_month ConnectHoursOfOperation#by_month}

---

##### `ByMonthDay`<sup>Optional</sup> <a name="ByMonthDay" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.byMonthDay"></a>

```csharp
public double[] ByMonthDay { get; set; }
```

- *Type:* double[]

List of month days (-1 to 31) for recurrence pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#by_month_day ConnectHoursOfOperation#by_month_day}

---

##### `ByWeekdayOccurrence`<sup>Optional</sup> <a name="ByWeekdayOccurrence" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.byWeekdayOccurrence"></a>

```csharp
public double[] ByWeekdayOccurrence { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#by_weekday_occurrence ConnectHoursOfOperation#by_weekday_occurrence}.

---

##### `Frequency`<sup>Optional</sup> <a name="Frequency" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.frequency"></a>

```csharp
public string Frequency { get; set; }
```

- *Type:* string

The frequency of recurrence for hours of operation overrides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#frequency ConnectHoursOfOperation#frequency}

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.interval"></a>

```csharp
public double Interval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#interval ConnectHoursOfOperation#interval}.

---

### ConnectHoursOfOperationParentHoursOfOperations <a name="ConnectHoursOfOperationParentHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectHoursOfOperationParentHoursOfOperations {
    string Id = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations.property.id">Id</a></code> | <code>string</code> | The identifier for the hours of operation. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations.property.name">Name</a></code> | <code>string</code> | The name of the hours of operation. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The identifier for the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#id ConnectHoursOfOperation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#name ConnectHoursOfOperation#name}

---

### ConnectHoursOfOperationTags <a name="ConnectHoursOfOperationTags" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectHoursOfOperationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#key ConnectHoursOfOperation#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_hours_of_operation#value ConnectHoursOfOperation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectHoursOfOperationChildHoursOfOperationsList <a name="ConnectHoursOfOperationChildHoursOfOperationsList" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectHoursOfOperationChildHoursOfOperationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.get"></a>

```csharp
private ConnectHoursOfOperationChildHoursOfOperationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.property.internalValue"></a>

```csharp
public IResolvable|ConnectHoursOfOperationChildHoursOfOperations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>[]

---


### ConnectHoursOfOperationChildHoursOfOperationsOutputReference <a name="ConnectHoursOfOperationChildHoursOfOperationsOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectHoursOfOperationChildHoursOfOperationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectHoursOfOperationChildHoursOfOperations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>

---


### ConnectHoursOfOperationConfigAList <a name="ConnectHoursOfOperationConfigAList" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectHoursOfOperationConfigAList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.get"></a>

```csharp
private ConnectHoursOfOperationConfigAOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.internalValue"></a>

```csharp
public IResolvable|ConnectHoursOfOperationConfigA[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>[]

---


### ConnectHoursOfOperationConfigAOutputReference <a name="ConnectHoursOfOperationConfigAOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectHoursOfOperationConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putEndTime">PutEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putStartTime">PutStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEndTime` <a name="PutEndTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putEndTime"></a>

```csharp
private void PutEndTime(ConnectHoursOfOperationConfigEndTime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putEndTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a>

---

##### `PutStartTime` <a name="PutStartTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putStartTime"></a>

```csharp
private void PutStartTime(ConnectHoursOfOperationConfigStartTime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.endTime">EndTime</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference">ConnectHoursOfOperationConfigEndTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference">ConnectHoursOfOperationConfigStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.dayInput">DayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.day">Day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.endTime"></a>

```csharp
public ConnectHoursOfOperationConfigEndTimeOutputReference EndTime { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference">ConnectHoursOfOperationConfigEndTimeOutputReference</a>

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.startTime"></a>

```csharp
public ConnectHoursOfOperationConfigStartTimeOutputReference StartTime { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference">ConnectHoursOfOperationConfigStartTimeOutputReference</a>

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.dayInput"></a>

```csharp
public string DayInput { get; }
```

- *Type:* string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.endTimeInput"></a>

```csharp
public IResolvable|ConnectHoursOfOperationConfigEndTime EndTimeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a>

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.startTimeInput"></a>

```csharp
public IResolvable|ConnectHoursOfOperationConfigStartTime StartTimeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a>

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.day"></a>

```csharp
public string Day { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectHoursOfOperationConfigA InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>

---


### ConnectHoursOfOperationConfigEndTimeOutputReference <a name="ConnectHoursOfOperationConfigEndTimeOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectHoursOfOperationConfigEndTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.hoursInput"></a>

```csharp
public double HoursInput { get; }
```

- *Type:* double

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.minutesInput"></a>

```csharp
public double MinutesInput { get; }
```

- *Type:* double

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectHoursOfOperationConfigEndTime InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a>

---


### ConnectHoursOfOperationConfigStartTimeOutputReference <a name="ConnectHoursOfOperationConfigStartTimeOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectHoursOfOperationConfigStartTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.hoursInput"></a>

```csharp
public double HoursInput { get; }
```

- *Type:* double

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.minutesInput"></a>

```csharp
public double MinutesInput { get; }
```

- *Type:* double

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectHoursOfOperationConfigStartTime InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a>

---


### ConnectHoursOfOperationHoursOfOperationOverridesList <a name="ConnectHoursOfOperationHoursOfOperationOverridesList" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectHoursOfOperationHoursOfOperationOverridesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.get"></a>

```csharp
private ConnectHoursOfOperationHoursOfOperationOverridesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.property.internalValue"></a>

```csharp
public IResolvable|ConnectHoursOfOperationHoursOfOperationOverrides[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>[]

---


### ConnectHoursOfOperationHoursOfOperationOverridesOutputReference <a name="ConnectHoursOfOperationHoursOfOperationOverridesOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectHoursOfOperationHoursOfOperationOverridesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.putOverrideConfig">PutOverrideConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.putRecurrenceConfig">PutRecurrenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetEffectiveFrom">ResetEffectiveFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetEffectiveTill">ResetEffectiveTill</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetHoursOfOperationOverrideId">ResetHoursOfOperationOverrideId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetOverrideConfig">ResetOverrideConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetOverrideDescription">ResetOverrideDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetOverrideName">ResetOverrideName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetOverrideType">ResetOverrideType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetRecurrenceConfig">ResetRecurrenceConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOverrideConfig` <a name="PutOverrideConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.putOverrideConfig"></a>

```csharp
private void PutOverrideConfig(IResolvable|ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.putOverrideConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a>[]

---

##### `PutRecurrenceConfig` <a name="PutRecurrenceConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.putRecurrenceConfig"></a>

```csharp
private void PutRecurrenceConfig(ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.putRecurrenceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig</a>

---

##### `ResetEffectiveFrom` <a name="ResetEffectiveFrom" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetEffectiveFrom"></a>

```csharp
private void ResetEffectiveFrom()
```

##### `ResetEffectiveTill` <a name="ResetEffectiveTill" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetEffectiveTill"></a>

```csharp
private void ResetEffectiveTill()
```

##### `ResetHoursOfOperationOverrideId` <a name="ResetHoursOfOperationOverrideId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetHoursOfOperationOverrideId"></a>

```csharp
private void ResetHoursOfOperationOverrideId()
```

##### `ResetOverrideConfig` <a name="ResetOverrideConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetOverrideConfig"></a>

```csharp
private void ResetOverrideConfig()
```

##### `ResetOverrideDescription` <a name="ResetOverrideDescription" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetOverrideDescription"></a>

```csharp
private void ResetOverrideDescription()
```

##### `ResetOverrideName` <a name="ResetOverrideName" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetOverrideName"></a>

```csharp
private void ResetOverrideName()
```

##### `ResetOverrideType` <a name="ResetOverrideType" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetOverrideType"></a>

```csharp
private void ResetOverrideType()
```

##### `ResetRecurrenceConfig` <a name="ResetRecurrenceConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetRecurrenceConfig"></a>

```csharp
private void ResetRecurrenceConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideConfig">OverrideConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.recurrenceConfig">RecurrenceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveFromInput">EffectiveFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveTillInput">EffectiveTillInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.hoursOfOperationOverrideIdInput">HoursOfOperationOverrideIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideConfigInput">OverrideConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideDescriptionInput">OverrideDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideNameInput">OverrideNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideTypeInput">OverrideTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.recurrenceConfigInput">RecurrenceConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveFrom">EffectiveFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveTill">EffectiveTill</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.hoursOfOperationOverrideId">HoursOfOperationOverrideId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideDescription">OverrideDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideName">OverrideName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideType">OverrideType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OverrideConfig`<sup>Required</sup> <a name="OverrideConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideConfig"></a>

```csharp
public ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList OverrideConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList</a>

---

##### `RecurrenceConfig`<sup>Required</sup> <a name="RecurrenceConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.recurrenceConfig"></a>

```csharp
public ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference RecurrenceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference</a>

---

##### `EffectiveFromInput`<sup>Optional</sup> <a name="EffectiveFromInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveFromInput"></a>

```csharp
public string EffectiveFromInput { get; }
```

- *Type:* string

---

##### `EffectiveTillInput`<sup>Optional</sup> <a name="EffectiveTillInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveTillInput"></a>

```csharp
public string EffectiveTillInput { get; }
```

- *Type:* string

---

##### `HoursOfOperationOverrideIdInput`<sup>Optional</sup> <a name="HoursOfOperationOverrideIdInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.hoursOfOperationOverrideIdInput"></a>

```csharp
public string HoursOfOperationOverrideIdInput { get; }
```

- *Type:* string

---

##### `OverrideConfigInput`<sup>Optional</sup> <a name="OverrideConfigInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideConfigInput"></a>

```csharp
public IResolvable|ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig[] OverrideConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a>[]

---

##### `OverrideDescriptionInput`<sup>Optional</sup> <a name="OverrideDescriptionInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideDescriptionInput"></a>

```csharp
public string OverrideDescriptionInput { get; }
```

- *Type:* string

---

##### `OverrideNameInput`<sup>Optional</sup> <a name="OverrideNameInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideNameInput"></a>

```csharp
public string OverrideNameInput { get; }
```

- *Type:* string

---

##### `OverrideTypeInput`<sup>Optional</sup> <a name="OverrideTypeInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideTypeInput"></a>

```csharp
public string OverrideTypeInput { get; }
```

- *Type:* string

---

##### `RecurrenceConfigInput`<sup>Optional</sup> <a name="RecurrenceConfigInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.recurrenceConfigInput"></a>

```csharp
public IResolvable|ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig RecurrenceConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig</a>

---

##### `EffectiveFrom`<sup>Required</sup> <a name="EffectiveFrom" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveFrom"></a>

```csharp
public string EffectiveFrom { get; }
```

- *Type:* string

---

##### `EffectiveTill`<sup>Required</sup> <a name="EffectiveTill" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveTill"></a>

```csharp
public string EffectiveTill { get; }
```

- *Type:* string

---

##### `HoursOfOperationOverrideId`<sup>Required</sup> <a name="HoursOfOperationOverrideId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.hoursOfOperationOverrideId"></a>

```csharp
public string HoursOfOperationOverrideId { get; }
```

- *Type:* string

---

##### `OverrideDescription`<sup>Required</sup> <a name="OverrideDescription" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideDescription"></a>

```csharp
public string OverrideDescription { get; }
```

- *Type:* string

---

##### `OverrideName`<sup>Required</sup> <a name="OverrideName" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideName"></a>

```csharp
public string OverrideName { get; }
```

- *Type:* string

---

##### `OverrideType`<sup>Required</sup> <a name="OverrideType" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideType"></a>

```csharp
public string OverrideType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectHoursOfOperationHoursOfOperationOverrides InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>

---


### ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference <a name="ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.resetHours">ResetHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHours` <a name="ResetHours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.resetHours"></a>

```csharp
private void ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.resetMinutes"></a>

```csharp
private void ResetMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.hoursInput"></a>

```csharp
public double HoursInput { get; }
```

- *Type:* double

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.minutesInput"></a>

```csharp
public double MinutesInput { get; }
```

- *Type:* double

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime</a>

---


### ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList <a name="ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.get"></a>

```csharp
private ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.property.internalValue"></a>

```csharp
public IResolvable|ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a>[]

---


### ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference <a name="ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.putEndTime">PutEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.putStartTime">PutStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resetDay">ResetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEndTime` <a name="PutEndTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.putEndTime"></a>

```csharp
private void PutEndTime(ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.putEndTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime</a>

---

##### `PutStartTime` <a name="PutStartTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.putStartTime"></a>

```csharp
private void PutStartTime(ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime</a>

---

##### `ResetDay` <a name="ResetDay" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resetDay"></a>

```csharp
private void ResetDay()
```

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.endTime">EndTime</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.dayInput">DayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.day">Day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.endTime"></a>

```csharp
public ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference EndTime { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference</a>

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.startTime"></a>

```csharp
public ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference StartTime { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference</a>

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.dayInput"></a>

```csharp
public string DayInput { get; }
```

- *Type:* string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.endTimeInput"></a>

```csharp
public IResolvable|ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime EndTimeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime</a>

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.startTimeInput"></a>

```csharp
public IResolvable|ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime StartTimeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime</a>

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.day"></a>

```csharp
public string Day { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a>

---


### ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference <a name="ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.resetHours">ResetHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHours` <a name="ResetHours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.resetHours"></a>

```csharp
private void ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.resetMinutes"></a>

```csharp
private void ResetMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.hoursInput"></a>

```csharp
public double HoursInput { get; }
```

- *Type:* double

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.minutesInput"></a>

```csharp
public double MinutesInput { get; }
```

- *Type:* double

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime</a>

---


### ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference <a name="ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.putRecurrencePattern">PutRecurrencePattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.resetRecurrencePattern">ResetRecurrencePattern</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRecurrencePattern` <a name="PutRecurrencePattern" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.putRecurrencePattern"></a>

```csharp
private void PutRecurrencePattern(ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.putRecurrencePattern.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern</a>

---

##### `ResetRecurrencePattern` <a name="ResetRecurrencePattern" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.resetRecurrencePattern"></a>

```csharp
private void ResetRecurrencePattern()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.recurrencePattern">RecurrencePattern</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.recurrencePatternInput">RecurrencePatternInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RecurrencePattern`<sup>Required</sup> <a name="RecurrencePattern" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.recurrencePattern"></a>

```csharp
public ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference RecurrencePattern { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference</a>

---

##### `RecurrencePatternInput`<sup>Optional</sup> <a name="RecurrencePatternInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.recurrencePatternInput"></a>

```csharp
public IResolvable|ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern RecurrencePatternInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig</a>

---


### ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference <a name="ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetByMonth">ResetByMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetByMonthDay">ResetByMonthDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetByWeekdayOccurrence">ResetByWeekdayOccurrence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetFrequency">ResetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetByMonth` <a name="ResetByMonth" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetByMonth"></a>

```csharp
private void ResetByMonth()
```

##### `ResetByMonthDay` <a name="ResetByMonthDay" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetByMonthDay"></a>

```csharp
private void ResetByMonthDay()
```

##### `ResetByWeekdayOccurrence` <a name="ResetByWeekdayOccurrence" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetByWeekdayOccurrence"></a>

```csharp
private void ResetByWeekdayOccurrence()
```

##### `ResetFrequency` <a name="ResetFrequency" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetFrequency"></a>

```csharp
private void ResetFrequency()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetInterval"></a>

```csharp
private void ResetInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonthDayInput">ByMonthDayInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonthInput">ByMonthInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byWeekdayOccurrenceInput">ByWeekdayOccurrenceInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.frequencyInput">FrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.intervalInput">IntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonth">ByMonth</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonthDay">ByMonthDay</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byWeekdayOccurrence">ByWeekdayOccurrence</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ByMonthDayInput`<sup>Optional</sup> <a name="ByMonthDayInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonthDayInput"></a>

```csharp
public double[] ByMonthDayInput { get; }
```

- *Type:* double[]

---

##### `ByMonthInput`<sup>Optional</sup> <a name="ByMonthInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonthInput"></a>

```csharp
public double[] ByMonthInput { get; }
```

- *Type:* double[]

---

##### `ByWeekdayOccurrenceInput`<sup>Optional</sup> <a name="ByWeekdayOccurrenceInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byWeekdayOccurrenceInput"></a>

```csharp
public double[] ByWeekdayOccurrenceInput { get; }
```

- *Type:* double[]

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.frequencyInput"></a>

```csharp
public string FrequencyInput { get; }
```

- *Type:* string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.intervalInput"></a>

```csharp
public double IntervalInput { get; }
```

- *Type:* double

---

##### `ByMonth`<sup>Required</sup> <a name="ByMonth" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonth"></a>

```csharp
public double[] ByMonth { get; }
```

- *Type:* double[]

---

##### `ByMonthDay`<sup>Required</sup> <a name="ByMonthDay" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonthDay"></a>

```csharp
public double[] ByMonthDay { get; }
```

- *Type:* double[]

---

##### `ByWeekdayOccurrence`<sup>Required</sup> <a name="ByWeekdayOccurrence" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byWeekdayOccurrence"></a>

```csharp
public double[] ByWeekdayOccurrence { get; }
```

- *Type:* double[]

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern</a>

---


### ConnectHoursOfOperationParentHoursOfOperationsList <a name="ConnectHoursOfOperationParentHoursOfOperationsList" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectHoursOfOperationParentHoursOfOperationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.get"></a>

```csharp
private ConnectHoursOfOperationParentHoursOfOperationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.property.internalValue"></a>

```csharp
public IResolvable|ConnectHoursOfOperationParentHoursOfOperations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>[]

---


### ConnectHoursOfOperationParentHoursOfOperationsOutputReference <a name="ConnectHoursOfOperationParentHoursOfOperationsOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectHoursOfOperationParentHoursOfOperationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectHoursOfOperationParentHoursOfOperations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>

---


### ConnectHoursOfOperationTagsList <a name="ConnectHoursOfOperationTagsList" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectHoursOfOperationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.get"></a>

```csharp
private ConnectHoursOfOperationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.property.internalValue"></a>

```csharp
public IResolvable|ConnectHoursOfOperationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>[]

---


### ConnectHoursOfOperationTagsOutputReference <a name="ConnectHoursOfOperationTagsOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectHoursOfOperationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectHoursOfOperationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>

---



