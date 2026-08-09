# `groundstationDataflowEndpointGroup` Submodule <a name="`groundstationDataflowEndpointGroup` Submodule" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroundstationDataflowEndpointGroup <a name="GroundstationDataflowEndpointGroup" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group awscc_groundstation_dataflow_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroup(Construct Scope, string Id, GroundstationDataflowEndpointGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig">GroundstationDataflowEndpointGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig">GroundstationDataflowEndpointGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.putEndpointDetails">PutEndpointDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.resetContactPostPassDurationSeconds">ResetContactPostPassDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.resetContactPrePassDurationSeconds">ResetContactPrePassDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndpointDetails` <a name="PutEndpointDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.putEndpointDetails"></a>

```csharp
private void PutEndpointDetails(IResolvable|GroundstationDataflowEndpointGroupEndpointDetails[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.putEndpointDetails.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails">GroundstationDataflowEndpointGroupEndpointDetails</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.putTags"></a>

```csharp
private void PutTags(IResolvable|GroundstationDataflowEndpointGroupTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags">GroundstationDataflowEndpointGroupTags</a>[]

---

##### `ResetContactPostPassDurationSeconds` <a name="ResetContactPostPassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.resetContactPostPassDurationSeconds"></a>

```csharp
private void ResetContactPostPassDurationSeconds()
```

##### `ResetContactPrePassDurationSeconds` <a name="ResetContactPrePassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.resetContactPrePassDurationSeconds"></a>

```csharp
private void ResetContactPrePassDurationSeconds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GroundstationDataflowEndpointGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GroundstationDataflowEndpointGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GroundstationDataflowEndpointGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GroundstationDataflowEndpointGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GroundstationDataflowEndpointGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GroundstationDataflowEndpointGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GroundstationDataflowEndpointGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GroundstationDataflowEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GroundstationDataflowEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.dataflowEndpointGroupId">DataflowEndpointGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.endpointDetails">EndpointDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList">GroundstationDataflowEndpointGroupEndpointDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList">GroundstationDataflowEndpointGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.contactPostPassDurationSecondsInput">ContactPostPassDurationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.contactPrePassDurationSecondsInput">ContactPrePassDurationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.endpointDetailsInput">EndpointDetailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails">GroundstationDataflowEndpointGroupEndpointDetails</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags">GroundstationDataflowEndpointGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.contactPostPassDurationSeconds">ContactPostPassDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.contactPrePassDurationSeconds">ContactPrePassDurationSeconds</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DataflowEndpointGroupId`<sup>Required</sup> <a name="DataflowEndpointGroupId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.dataflowEndpointGroupId"></a>

```csharp
public string DataflowEndpointGroupId { get; }
```

- *Type:* string

---

##### `EndpointDetails`<sup>Required</sup> <a name="EndpointDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.endpointDetails"></a>

```csharp
public GroundstationDataflowEndpointGroupEndpointDetailsList EndpointDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList">GroundstationDataflowEndpointGroupEndpointDetailsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.tags"></a>

```csharp
public GroundstationDataflowEndpointGroupTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList">GroundstationDataflowEndpointGroupTagsList</a>

---

##### `ContactPostPassDurationSecondsInput`<sup>Optional</sup> <a name="ContactPostPassDurationSecondsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.contactPostPassDurationSecondsInput"></a>

```csharp
public double ContactPostPassDurationSecondsInput { get; }
```

- *Type:* double

---

##### `ContactPrePassDurationSecondsInput`<sup>Optional</sup> <a name="ContactPrePassDurationSecondsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.contactPrePassDurationSecondsInput"></a>

```csharp
public double ContactPrePassDurationSecondsInput { get; }
```

- *Type:* double

---

##### `EndpointDetailsInput`<sup>Optional</sup> <a name="EndpointDetailsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.endpointDetailsInput"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupEndpointDetails[] EndpointDetailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails">GroundstationDataflowEndpointGroupEndpointDetails</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.tagsInput"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags">GroundstationDataflowEndpointGroupTags</a>[]

---

##### `ContactPostPassDurationSeconds`<sup>Required</sup> <a name="ContactPostPassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.contactPostPassDurationSeconds"></a>

```csharp
public double ContactPostPassDurationSeconds { get; }
```

- *Type:* double

---

##### `ContactPrePassDurationSeconds`<sup>Required</sup> <a name="ContactPrePassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.contactPrePassDurationSeconds"></a>

```csharp
public double ContactPrePassDurationSeconds { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GroundstationDataflowEndpointGroupConfig <a name="GroundstationDataflowEndpointGroupConfig" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|GroundstationDataflowEndpointGroupEndpointDetails[] EndpointDetails,
    double ContactPostPassDurationSeconds = null,
    double ContactPrePassDurationSeconds = null,
    IResolvable|GroundstationDataflowEndpointGroupTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.endpointDetails">EndpointDetails</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails">GroundstationDataflowEndpointGroupEndpointDetails</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#endpoint_details GroundstationDataflowEndpointGroup#endpoint_details}. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.contactPostPassDurationSeconds">ContactPostPassDurationSeconds</a></code> | <code>double</code> | Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a POSTPASS state. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.contactPrePassDurationSeconds">ContactPrePassDurationSeconds</a></code> | <code>double</code> | Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a PREPASS state. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags">GroundstationDataflowEndpointGroupTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#tags GroundstationDataflowEndpointGroup#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EndpointDetails`<sup>Required</sup> <a name="EndpointDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.endpointDetails"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupEndpointDetails[] EndpointDetails { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails">GroundstationDataflowEndpointGroupEndpointDetails</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#endpoint_details GroundstationDataflowEndpointGroup#endpoint_details}.

---

##### `ContactPostPassDurationSeconds`<sup>Optional</sup> <a name="ContactPostPassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.contactPostPassDurationSeconds"></a>

```csharp
public double ContactPostPassDurationSeconds { get; set; }
```

- *Type:* double

Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a POSTPASS state.

A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the POSTPASS state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#contact_post_pass_duration_seconds GroundstationDataflowEndpointGroup#contact_post_pass_duration_seconds}

---

##### `ContactPrePassDurationSeconds`<sup>Optional</sup> <a name="ContactPrePassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.contactPrePassDurationSeconds"></a>

```csharp
public double ContactPrePassDurationSeconds { get; set; }
```

- *Type:* double

Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a PREPASS state.

A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the PREPASS state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#contact_pre_pass_duration_seconds GroundstationDataflowEndpointGroup#contact_pre_pass_duration_seconds}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.tags"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags">GroundstationDataflowEndpointGroupTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#tags GroundstationDataflowEndpointGroup#tags}.

---

### GroundstationDataflowEndpointGroupEndpointDetails <a name="GroundstationDataflowEndpointGroupEndpointDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupEndpointDetails {
    GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint AwsGroundStationAgentEndpoint = null,
    GroundstationDataflowEndpointGroupEndpointDetailsEndpoint Endpoint = null,
    GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails SecurityDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails.property.awsGroundStationAgentEndpoint">AwsGroundStationAgentEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint</a></code> | Information about AwsGroundStationAgentEndpoint. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#endpoint GroundstationDataflowEndpointGroup#endpoint}. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails.property.securityDetails">SecurityDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails">GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#security_details GroundstationDataflowEndpointGroup#security_details}. |

---

##### `AwsGroundStationAgentEndpoint`<sup>Optional</sup> <a name="AwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails.property.awsGroundStationAgentEndpoint"></a>

```csharp
public GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint AwsGroundStationAgentEndpoint { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint</a>

Information about AwsGroundStationAgentEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#aws_ground_station_agent_endpoint GroundstationDataflowEndpointGroup#aws_ground_station_agent_endpoint}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails.property.endpoint"></a>

```csharp
public GroundstationDataflowEndpointGroupEndpointDetailsEndpoint Endpoint { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#endpoint GroundstationDataflowEndpointGroup#endpoint}.

---

##### `SecurityDetails`<sup>Optional</sup> <a name="SecurityDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails.property.securityDetails"></a>

```csharp
public GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails SecurityDetails { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails">GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#security_details GroundstationDataflowEndpointGroup#security_details}.

---

### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint {
    string AgentStatus = null,
    string AuditResults = null,
    GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress EgressAddress = null,
    GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress IngressAddress = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.property.agentStatus">AgentStatus</a></code> | <code>string</code> | The status of AgentEndpoint. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.property.auditResults">AuditResults</a></code> | <code>string</code> | The results of the audit. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.property.egressAddress">EgressAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress</a></code> | Egress address of AgentEndpoint with an optional mtu. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.property.ingressAddress">IngressAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress</a></code> | Ingress address of AgentEndpoint with a port range and an optional mtu. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#name GroundstationDataflowEndpointGroup#name}. |

---

##### `AgentStatus`<sup>Optional</sup> <a name="AgentStatus" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.property.agentStatus"></a>

```csharp
public string AgentStatus { get; set; }
```

- *Type:* string

The status of AgentEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#agent_status GroundstationDataflowEndpointGroup#agent_status}

---

##### `AuditResults`<sup>Optional</sup> <a name="AuditResults" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.property.auditResults"></a>

```csharp
public string AuditResults { get; set; }
```

- *Type:* string

The results of the audit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#audit_results GroundstationDataflowEndpointGroup#audit_results}

---

##### `EgressAddress`<sup>Optional</sup> <a name="EgressAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.property.egressAddress"></a>

```csharp
public GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress EgressAddress { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress</a>

Egress address of AgentEndpoint with an optional mtu.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#egress_address GroundstationDataflowEndpointGroup#egress_address}

---

##### `IngressAddress`<sup>Optional</sup> <a name="IngressAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.property.ingressAddress"></a>

```csharp
public GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress IngressAddress { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress</a>

Ingress address of AgentEndpoint with a port range and an optional mtu.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#ingress_address GroundstationDataflowEndpointGroup#ingress_address}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#name GroundstationDataflowEndpointGroup#name}.

---

### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress {
    double Mtu = null,
    GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress SocketAddress = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress.property.mtu">Mtu</a></code> | <code>double</code> | Maximum transmission unit (MTU) size in bytes of a dataflow endpoint. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#socket_address GroundstationDataflowEndpointGroup#socket_address}. |

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress.property.mtu"></a>

```csharp
public double Mtu { get; set; }
```

- *Type:* double

Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#mtu GroundstationDataflowEndpointGroup#mtu}

---

##### `SocketAddress`<sup>Optional</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress.property.socketAddress"></a>

```csharp
public GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress SocketAddress { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#socket_address GroundstationDataflowEndpointGroup#socket_address}.

---

### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress {
    string Name = null,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#name GroundstationDataflowEndpointGroup#name}. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#port GroundstationDataflowEndpointGroup#port}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#name GroundstationDataflowEndpointGroup#name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#port GroundstationDataflowEndpointGroup#port}.

---

### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress {
    double Mtu = null,
    GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress SocketAddress = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress.property.mtu">Mtu</a></code> | <code>double</code> | Maximum transmission unit (MTU) size in bytes of a dataflow endpoint. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress</a></code> | A socket address with a port range. |

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress.property.mtu"></a>

```csharp
public double Mtu { get; set; }
```

- *Type:* double

Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#mtu GroundstationDataflowEndpointGroup#mtu}

---

##### `SocketAddress`<sup>Optional</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress.property.socketAddress"></a>

```csharp
public GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress SocketAddress { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress</a>

A socket address with a port range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#socket_address GroundstationDataflowEndpointGroup#socket_address}

---

### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress {
    string Name = null,
    GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange PortRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress.property.name">Name</a></code> | <code>string</code> | IPv4 socket address. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress.property.portRange">PortRange</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange</a></code> | Port range of a socket address. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

IPv4 socket address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#name GroundstationDataflowEndpointGroup#name}

---

##### `PortRange`<sup>Optional</sup> <a name="PortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress.property.portRange"></a>

```csharp
public GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange PortRange { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange</a>

Port range of a socket address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#port_range GroundstationDataflowEndpointGroup#port_range}

---

### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange {
    double Maximum = null,
    double Minimum = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange.property.maximum">Maximum</a></code> | <code>double</code> | A maximum value. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange.property.minimum">Minimum</a></code> | <code>double</code> | A minimum value. |

---

##### `Maximum`<sup>Optional</sup> <a name="Maximum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange.property.maximum"></a>

```csharp
public double Maximum { get; set; }
```

- *Type:* double

A maximum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#maximum GroundstationDataflowEndpointGroup#maximum}

---

##### `Minimum`<sup>Optional</sup> <a name="Minimum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange.property.minimum"></a>

```csharp
public double Minimum { get; set; }
```

- *Type:* double

A minimum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#minimum GroundstationDataflowEndpointGroup#minimum}

---

### GroundstationDataflowEndpointGroupEndpointDetailsEndpoint <a name="GroundstationDataflowEndpointGroupEndpointDetailsEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupEndpointDetailsEndpoint {
    GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress Address = null,
    double Mtu = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint.property.address">Address</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress">GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#address GroundstationDataflowEndpointGroup#address}. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint.property.mtu">Mtu</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#mtu GroundstationDataflowEndpointGroup#mtu}. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#name GroundstationDataflowEndpointGroup#name}. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint.property.address"></a>

```csharp
public GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress Address { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress">GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#address GroundstationDataflowEndpointGroup#address}.

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint.property.mtu"></a>

```csharp
public double Mtu { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#mtu GroundstationDataflowEndpointGroup#mtu}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#name GroundstationDataflowEndpointGroup#name}.

---

### GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress <a name="GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress {
    string Name = null,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#name GroundstationDataflowEndpointGroup#name}. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#port GroundstationDataflowEndpointGroup#port}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#name GroundstationDataflowEndpointGroup#name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#port GroundstationDataflowEndpointGroup#port}.

---

### GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails <a name="GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails {
    string RoleArn = null,
    string[] SecurityGroupIds = null,
    string[] SubnetIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#role_arn GroundstationDataflowEndpointGroup#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#security_group_ids GroundstationDataflowEndpointGroup#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#subnet_ids GroundstationDataflowEndpointGroup#subnet_ids}. |

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#role_arn GroundstationDataflowEndpointGroup#role_arn}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#security_group_ids GroundstationDataflowEndpointGroup#security_group_ids}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#subnet_ids GroundstationDataflowEndpointGroup#subnet_ids}.

---

### GroundstationDataflowEndpointGroupTags <a name="GroundstationDataflowEndpointGroupTags" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#key GroundstationDataflowEndpointGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#value GroundstationDataflowEndpointGroup#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#key GroundstationDataflowEndpointGroup#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#value GroundstationDataflowEndpointGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.putSocketAddress">PutSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.resetSocketAddress">ResetSocketAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSocketAddress` <a name="PutSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.putSocketAddress"></a>

```csharp
private void PutSocketAddress(GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.putSocketAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress</a>

---

##### `ResetMtu` <a name="ResetMtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.resetMtu"></a>

```csharp
private void ResetMtu()
```

##### `ResetSocketAddress` <a name="ResetSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.resetSocketAddress"></a>

```csharp
private void ResetSocketAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.mtuInput">MtuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.socketAddressInput">SocketAddressInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.mtu">Mtu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SocketAddress`<sup>Required</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.socketAddress"></a>

```csharp
public GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference SocketAddress { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference</a>

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.mtuInput"></a>

```csharp
public double MtuInput { get; }
```

- *Type:* double

---

##### `SocketAddressInput`<sup>Optional</sup> <a name="SocketAddressInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.socketAddressInput"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress SocketAddressInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress</a>

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.mtu"></a>

```csharp
public double Mtu { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress</a>

---


### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress</a>

---


### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.putSocketAddress">PutSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.resetSocketAddress">ResetSocketAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSocketAddress` <a name="PutSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.putSocketAddress"></a>

```csharp
private void PutSocketAddress(GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.putSocketAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress</a>

---

##### `ResetMtu` <a name="ResetMtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.resetMtu"></a>

```csharp
private void ResetMtu()
```

##### `ResetSocketAddress` <a name="ResetSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.resetSocketAddress"></a>

```csharp
private void ResetSocketAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.mtuInput">MtuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.socketAddressInput">SocketAddressInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.mtu">Mtu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SocketAddress`<sup>Required</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.socketAddress"></a>

```csharp
public GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference SocketAddress { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference</a>

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.mtuInput"></a>

```csharp
public double MtuInput { get; }
```

- *Type:* double

---

##### `SocketAddressInput`<sup>Optional</sup> <a name="SocketAddressInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.socketAddressInput"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress SocketAddressInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress</a>

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.mtu"></a>

```csharp
public double Mtu { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress</a>

---


### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.putPortRange">PutPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.resetPortRange">ResetPortRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPortRange` <a name="PutPortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.putPortRange"></a>

```csharp
private void PutPortRange(GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.putPortRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange</a>

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPortRange` <a name="ResetPortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.resetPortRange"></a>

```csharp
private void ResetPortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.portRange">PortRange</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.portRangeInput">PortRangeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.portRange"></a>

```csharp
public GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference PortRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PortRangeInput`<sup>Optional</sup> <a name="PortRangeInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.portRangeInput"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange PortRangeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress</a>

---


### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.resetMaximum">ResetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.resetMinimum">ResetMinimum</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximum` <a name="ResetMaximum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.resetMaximum"></a>

```csharp
private void ResetMaximum()
```

##### `ResetMinimum` <a name="ResetMinimum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.resetMinimum"></a>

```csharp
private void ResetMinimum()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.maximumInput">MaximumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.minimumInput">MinimumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.maximum">Maximum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.minimum">Minimum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaximumInput`<sup>Optional</sup> <a name="MaximumInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.maximumInput"></a>

```csharp
public double MaximumInput { get; }
```

- *Type:* double

---

##### `MinimumInput`<sup>Optional</sup> <a name="MinimumInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.minimumInput"></a>

```csharp
public double MinimumInput { get; }
```

- *Type:* double

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.maximum"></a>

```csharp
public double Maximum { get; }
```

- *Type:* double

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.minimum"></a>

```csharp
public double Minimum { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange</a>

---


### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.putEgressAddress">PutEgressAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.putIngressAddress">PutIngressAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resetAgentStatus">ResetAgentStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resetAuditResults">ResetAuditResults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resetEgressAddress">ResetEgressAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resetIngressAddress">ResetIngressAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEgressAddress` <a name="PutEgressAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.putEgressAddress"></a>

```csharp
private void PutEgressAddress(GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.putEgressAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress</a>

---

##### `PutIngressAddress` <a name="PutIngressAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.putIngressAddress"></a>

```csharp
private void PutIngressAddress(GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.putIngressAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress</a>

---

##### `ResetAgentStatus` <a name="ResetAgentStatus" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resetAgentStatus"></a>

```csharp
private void ResetAgentStatus()
```

##### `ResetAuditResults` <a name="ResetAuditResults" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resetAuditResults"></a>

```csharp
private void ResetAuditResults()
```

##### `ResetEgressAddress` <a name="ResetEgressAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resetEgressAddress"></a>

```csharp
private void ResetEgressAddress()
```

##### `ResetIngressAddress` <a name="ResetIngressAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resetIngressAddress"></a>

```csharp
private void ResetIngressAddress()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.egressAddress">EgressAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.ingressAddress">IngressAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.agentStatusInput">AgentStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.auditResultsInput">AuditResultsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.egressAddressInput">EgressAddressInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.ingressAddressInput">IngressAddressInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.agentStatus">AgentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.auditResults">AuditResults</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EgressAddress`<sup>Required</sup> <a name="EgressAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.egressAddress"></a>

```csharp
public GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference EgressAddress { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference</a>

---

##### `IngressAddress`<sup>Required</sup> <a name="IngressAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.ingressAddress"></a>

```csharp
public GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference IngressAddress { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference</a>

---

##### `AgentStatusInput`<sup>Optional</sup> <a name="AgentStatusInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.agentStatusInput"></a>

```csharp
public string AgentStatusInput { get; }
```

- *Type:* string

---

##### `AuditResultsInput`<sup>Optional</sup> <a name="AuditResultsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.auditResultsInput"></a>

```csharp
public string AuditResultsInput { get; }
```

- *Type:* string

---

##### `EgressAddressInput`<sup>Optional</sup> <a name="EgressAddressInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.egressAddressInput"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress EgressAddressInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress</a>

---

##### `IngressAddressInput`<sup>Optional</sup> <a name="IngressAddressInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.ingressAddressInput"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress IngressAddressInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `AgentStatus`<sup>Required</sup> <a name="AgentStatus" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.agentStatus"></a>

```csharp
public string AgentStatus { get; }
```

- *Type:* string

---

##### `AuditResults`<sup>Required</sup> <a name="AuditResults" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.auditResults"></a>

```csharp
public string AuditResults { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint</a>

---


### GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference <a name="GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress">GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress">GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress</a>

---


### GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference <a name="GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.putAddress">PutAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAddress` <a name="PutAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.putAddress"></a>

```csharp
private void PutAddress(GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.putAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress">GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress</a>

---

##### `ResetAddress` <a name="ResetAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.resetAddress"></a>

```csharp
private void ResetAddress()
```

##### `ResetMtu` <a name="ResetMtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.resetMtu"></a>

```csharp
private void ResetMtu()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.address">Address</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.addressInput">AddressInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress">GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.mtuInput">MtuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.mtu">Mtu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.address"></a>

```csharp
public GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference Address { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference</a>

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.addressInput"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress AddressInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress">GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress</a>

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.mtuInput"></a>

```csharp
public double MtuInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.mtu"></a>

```csharp
public double Mtu { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupEndpointDetailsEndpoint InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsEndpoint</a>

---


### GroundstationDataflowEndpointGroupEndpointDetailsList <a name="GroundstationDataflowEndpointGroupEndpointDetailsList" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupEndpointDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.get"></a>

```csharp
private GroundstationDataflowEndpointGroupEndpointDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails">GroundstationDataflowEndpointGroupEndpointDetails</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.property.internalValue"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupEndpointDetails[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails">GroundstationDataflowEndpointGroupEndpointDetails</a>[]

---


### GroundstationDataflowEndpointGroupEndpointDetailsOutputReference <a name="GroundstationDataflowEndpointGroupEndpointDetailsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupEndpointDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.putAwsGroundStationAgentEndpoint">PutAwsGroundStationAgentEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.putEndpoint">PutEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.putSecurityDetails">PutSecurityDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.resetAwsGroundStationAgentEndpoint">ResetAwsGroundStationAgentEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.resetSecurityDetails">ResetSecurityDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsGroundStationAgentEndpoint` <a name="PutAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.putAwsGroundStationAgentEndpoint"></a>

```csharp
private void PutAwsGroundStationAgentEndpoint(GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.putAwsGroundStationAgentEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint</a>

---

##### `PutEndpoint` <a name="PutEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.putEndpoint"></a>

```csharp
private void PutEndpoint(GroundstationDataflowEndpointGroupEndpointDetailsEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.putEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsEndpoint</a>

---

##### `PutSecurityDetails` <a name="PutSecurityDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.putSecurityDetails"></a>

```csharp
private void PutSecurityDetails(GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.putSecurityDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails">GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails</a>

---

##### `ResetAwsGroundStationAgentEndpoint` <a name="ResetAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.resetAwsGroundStationAgentEndpoint"></a>

```csharp
private void ResetAwsGroundStationAgentEndpoint()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.resetEndpoint"></a>

```csharp
private void ResetEndpoint()
```

##### `ResetSecurityDetails` <a name="ResetSecurityDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.resetSecurityDetails"></a>

```csharp
private void ResetSecurityDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.awsGroundStationAgentEndpoint">AwsGroundStationAgentEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.securityDetails">SecurityDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.awsGroundStationAgentEndpointInput">AwsGroundStationAgentEndpointInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.endpointInput">EndpointInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.securityDetailsInput">SecurityDetailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails">GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails">GroundstationDataflowEndpointGroupEndpointDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsGroundStationAgentEndpoint`<sup>Required</sup> <a name="AwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.awsGroundStationAgentEndpoint"></a>

```csharp
public GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference AwsGroundStationAgentEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference</a>

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.endpoint"></a>

```csharp
public GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference Endpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference</a>

---

##### `SecurityDetails`<sup>Required</sup> <a name="SecurityDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.securityDetails"></a>

```csharp
public GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference SecurityDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference</a>

---

##### `AwsGroundStationAgentEndpointInput`<sup>Optional</sup> <a name="AwsGroundStationAgentEndpointInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.awsGroundStationAgentEndpointInput"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint AwsGroundStationAgentEndpointInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint</a>

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.endpointInput"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupEndpointDetailsEndpoint EndpointInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsEndpoint</a>

---

##### `SecurityDetailsInput`<sup>Optional</sup> <a name="SecurityDetailsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.securityDetailsInput"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails SecurityDetailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails">GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupEndpointDetails InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails">GroundstationDataflowEndpointGroupEndpointDetails</a>

---


### GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference <a name="GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails">GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails">GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails</a>

---


### GroundstationDataflowEndpointGroupTagsList <a name="GroundstationDataflowEndpointGroupTagsList" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.get"></a>

```csharp
private GroundstationDataflowEndpointGroupTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags">GroundstationDataflowEndpointGroupTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.property.internalValue"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags">GroundstationDataflowEndpointGroupTags</a>[]

---


### GroundstationDataflowEndpointGroupTagsOutputReference <a name="GroundstationDataflowEndpointGroupTagsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags">GroundstationDataflowEndpointGroupTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags">GroundstationDataflowEndpointGroupTags</a>

---



