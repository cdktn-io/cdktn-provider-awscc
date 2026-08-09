# `groundstationDataflowEndpointGroupV2` Submodule <a name="`groundstationDataflowEndpointGroupV2` Submodule" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroundstationDataflowEndpointGroupV2 <a name="GroundstationDataflowEndpointGroupV2" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2 awscc_groundstation_dataflow_endpoint_group_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2(Construct Scope, string Id, GroundstationDataflowEndpointGroupV2Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config">GroundstationDataflowEndpointGroupV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config">GroundstationDataflowEndpointGroupV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.putEndpoints">PutEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.resetContactPostPassDurationSeconds">ResetContactPostPassDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.resetContactPrePassDurationSeconds">ResetContactPrePassDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.resetEndpoints">ResetEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndpoints` <a name="PutEndpoints" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.putEndpoints"></a>

```csharp
private void PutEndpoints(IResolvable|GroundstationDataflowEndpointGroupV2Endpoints[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.putEndpoints.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints">GroundstationDataflowEndpointGroupV2Endpoints</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.putTags"></a>

```csharp
private void PutTags(IResolvable|GroundstationDataflowEndpointGroupV2Tags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags">GroundstationDataflowEndpointGroupV2Tags</a>[]

---

##### `ResetContactPostPassDurationSeconds` <a name="ResetContactPostPassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.resetContactPostPassDurationSeconds"></a>

```csharp
private void ResetContactPostPassDurationSeconds()
```

##### `ResetContactPrePassDurationSeconds` <a name="ResetContactPrePassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.resetContactPrePassDurationSeconds"></a>

```csharp
private void ResetContactPrePassDurationSeconds()
```

##### `ResetEndpoints` <a name="ResetEndpoints" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.resetEndpoints"></a>

```csharp
private void ResetEndpoints()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GroundstationDataflowEndpointGroupV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GroundstationDataflowEndpointGroupV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GroundstationDataflowEndpointGroupV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GroundstationDataflowEndpointGroupV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GroundstationDataflowEndpointGroupV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GroundstationDataflowEndpointGroupV2 resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GroundstationDataflowEndpointGroupV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GroundstationDataflowEndpointGroupV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GroundstationDataflowEndpointGroupV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.dataflowEndpointGroupV2Id">DataflowEndpointGroupV2Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.endpointDetails">EndpointDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList">GroundstationDataflowEndpointGroupV2EndpointDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList">GroundstationDataflowEndpointGroupV2EndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList">GroundstationDataflowEndpointGroupV2TagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.contactPostPassDurationSecondsInput">ContactPostPassDurationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.contactPrePassDurationSecondsInput">ContactPrePassDurationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.endpointsInput">EndpointsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints">GroundstationDataflowEndpointGroupV2Endpoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags">GroundstationDataflowEndpointGroupV2Tags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.contactPostPassDurationSeconds">ContactPostPassDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.contactPrePassDurationSeconds">ContactPrePassDurationSeconds</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DataflowEndpointGroupV2Id`<sup>Required</sup> <a name="DataflowEndpointGroupV2Id" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.dataflowEndpointGroupV2Id"></a>

```csharp
public string DataflowEndpointGroupV2Id { get; }
```

- *Type:* string

---

##### `EndpointDetails`<sup>Required</sup> <a name="EndpointDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.endpointDetails"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetailsList EndpointDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList">GroundstationDataflowEndpointGroupV2EndpointDetailsList</a>

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.endpoints"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointsList Endpoints { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList">GroundstationDataflowEndpointGroupV2EndpointsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.tags"></a>

```csharp
public GroundstationDataflowEndpointGroupV2TagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList">GroundstationDataflowEndpointGroupV2TagsList</a>

---

##### `ContactPostPassDurationSecondsInput`<sup>Optional</sup> <a name="ContactPostPassDurationSecondsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.contactPostPassDurationSecondsInput"></a>

```csharp
public double ContactPostPassDurationSecondsInput { get; }
```

- *Type:* double

---

##### `ContactPrePassDurationSecondsInput`<sup>Optional</sup> <a name="ContactPrePassDurationSecondsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.contactPrePassDurationSecondsInput"></a>

```csharp
public double ContactPrePassDurationSecondsInput { get; }
```

- *Type:* double

---

##### `EndpointsInput`<sup>Optional</sup> <a name="EndpointsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.endpointsInput"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2Endpoints[] EndpointsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints">GroundstationDataflowEndpointGroupV2Endpoints</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.tagsInput"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2Tags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags">GroundstationDataflowEndpointGroupV2Tags</a>[]

---

##### `ContactPostPassDurationSeconds`<sup>Required</sup> <a name="ContactPostPassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.contactPostPassDurationSeconds"></a>

```csharp
public double ContactPostPassDurationSeconds { get; }
```

- *Type:* double

---

##### `ContactPrePassDurationSeconds`<sup>Required</sup> <a name="ContactPrePassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.contactPrePassDurationSeconds"></a>

```csharp
public double ContactPrePassDurationSeconds { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GroundstationDataflowEndpointGroupV2Config <a name="GroundstationDataflowEndpointGroupV2Config" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double ContactPostPassDurationSeconds = null,
    double ContactPrePassDurationSeconds = null,
    IResolvable|GroundstationDataflowEndpointGroupV2Endpoints[] Endpoints = null,
    IResolvable|GroundstationDataflowEndpointGroupV2Tags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.contactPostPassDurationSeconds">ContactPostPassDurationSeconds</a></code> | <code>double</code> | Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a POSTPASS state. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.contactPrePassDurationSeconds">ContactPrePassDurationSeconds</a></code> | <code>double</code> | Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a PREPASS state. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.endpoints">Endpoints</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints">GroundstationDataflowEndpointGroupV2Endpoints</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#endpoints GroundstationDataflowEndpointGroupV2#endpoints}. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags">GroundstationDataflowEndpointGroupV2Tags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#tags GroundstationDataflowEndpointGroupV2#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ContactPostPassDurationSeconds`<sup>Optional</sup> <a name="ContactPostPassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.contactPostPassDurationSeconds"></a>

```csharp
public double ContactPostPassDurationSeconds { get; set; }
```

- *Type:* double

Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a POSTPASS state.

A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the POSTPASS state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#contact_post_pass_duration_seconds GroundstationDataflowEndpointGroupV2#contact_post_pass_duration_seconds}

---

##### `ContactPrePassDurationSeconds`<sup>Optional</sup> <a name="ContactPrePassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.contactPrePassDurationSeconds"></a>

```csharp
public double ContactPrePassDurationSeconds { get; set; }
```

- *Type:* double

Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a PREPASS state.

A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the PREPASS state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#contact_pre_pass_duration_seconds GroundstationDataflowEndpointGroupV2#contact_pre_pass_duration_seconds}

---

##### `Endpoints`<sup>Optional</sup> <a name="Endpoints" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.endpoints"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2Endpoints[] Endpoints { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints">GroundstationDataflowEndpointGroupV2Endpoints</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#endpoints GroundstationDataflowEndpointGroupV2#endpoints}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.tags"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2Tags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags">GroundstationDataflowEndpointGroupV2Tags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#tags GroundstationDataflowEndpointGroupV2#tags}.

---

### GroundstationDataflowEndpointGroupV2EndpointDetails <a name="GroundstationDataflowEndpointGroupV2EndpointDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetails {

};
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint {

};
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails {

};
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails {

};
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress {

};
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress {

};
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange {

};
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort {

};
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress {

};
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint {

};
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails {

};
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails {

};
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress {

};
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress {

};
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange {

};
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort {

};
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress {

};
```


### GroundstationDataflowEndpointGroupV2Endpoints <a name="GroundstationDataflowEndpointGroupV2Endpoints" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2Endpoints {
    GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint DownlinkAwsGroundStationAgentEndpoint = null,
    GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint UplinkAwsGroundStationAgentEndpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints.property.downlinkAwsGroundStationAgentEndpoint">DownlinkAwsGroundStationAgentEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint</a></code> | Information about DownlinkAwsGroundStationAgentEndpoint used for create. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints.property.uplinkAwsGroundStationAgentEndpoint">UplinkAwsGroundStationAgentEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint</a></code> | Information about UplinkAwsGroundStationAgentEndpoint used for create. |

---

##### `DownlinkAwsGroundStationAgentEndpoint`<sup>Optional</sup> <a name="DownlinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints.property.downlinkAwsGroundStationAgentEndpoint"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint DownlinkAwsGroundStationAgentEndpoint { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint</a>

Information about DownlinkAwsGroundStationAgentEndpoint used for create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#downlink_aws_ground_station_agent_endpoint GroundstationDataflowEndpointGroupV2#downlink_aws_ground_station_agent_endpoint}

---

##### `UplinkAwsGroundStationAgentEndpoint`<sup>Optional</sup> <a name="UplinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints.property.uplinkAwsGroundStationAgentEndpoint"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint UplinkAwsGroundStationAgentEndpoint { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint</a>

Information about UplinkAwsGroundStationAgentEndpoint used for create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#uplink_aws_ground_station_agent_endpoint GroundstationDataflowEndpointGroupV2#uplink_aws_ground_station_agent_endpoint}

---

### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint {
    GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails DataflowDetails = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint.property.dataflowDetails">DataflowDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails</a></code> | Dataflow details for downlink. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name GroundstationDataflowEndpointGroupV2#name}. |

---

##### `DataflowDetails`<sup>Optional</sup> <a name="DataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint.property.dataflowDetails"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails DataflowDetails { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails</a>

Dataflow details for downlink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#dataflow_details GroundstationDataflowEndpointGroupV2#dataflow_details}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name GroundstationDataflowEndpointGroupV2#name}.

---

### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails {
    GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails AgentConnectionDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails.property.agentConnectionDetails">AgentConnectionDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a></code> | Connection details for downlink, from ground station to agent, and customer to agent. |

---

##### `AgentConnectionDetails`<sup>Optional</sup> <a name="AgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails.property.agentConnectionDetails"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails AgentConnectionDetails { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a>

Connection details for downlink, from ground station to agent, and customer to agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#agent_connection_details GroundstationDataflowEndpointGroupV2#agent_connection_details}

---

### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails {
    GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress AgentIpAndPortAddress = null,
    GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort EgressAddressAndPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.property.agentIpAndPortAddress">AgentIpAndPortAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a></code> | Socket address of an uplink or downlink agent endpoint with a port range and an optional mtu. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.property.egressAddressAndPort">EgressAddressAndPort</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort</a></code> | Socket address of an uplink or downlink agent endpoint with an optional mtu. |

---

##### `AgentIpAndPortAddress`<sup>Optional</sup> <a name="AgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.property.agentIpAndPortAddress"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress AgentIpAndPortAddress { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a>

Socket address of an uplink or downlink agent endpoint with a port range and an optional mtu.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#agent_ip_and_port_address GroundstationDataflowEndpointGroupV2#agent_ip_and_port_address}

---

##### `EgressAddressAndPort`<sup>Optional</sup> <a name="EgressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.property.egressAddressAndPort"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort EgressAddressAndPort { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort</a>

Socket address of an uplink or downlink agent endpoint with an optional mtu.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#egress_address_and_port GroundstationDataflowEndpointGroupV2#egress_address_and_port}

---

### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress {
    double Mtu = null,
    GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress SocketAddress = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.property.mtu">Mtu</a></code> | <code>double</code> | Maximum transmission unit (MTU) size in bytes of a dataflow endpoint. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a></code> | A socket address with a port range. |

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.property.mtu"></a>

```csharp
public double Mtu { get; set; }
```

- *Type:* double

Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#mtu GroundstationDataflowEndpointGroupV2#mtu}

---

##### `SocketAddress`<sup>Optional</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.property.socketAddress"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress SocketAddress { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a>

A socket address with a port range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#socket_address GroundstationDataflowEndpointGroupV2#socket_address}

---

### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress {
    string Name = null,
    GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange PortRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.property.name">Name</a></code> | <code>string</code> | IPv4 socket address. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.property.portRange">PortRange</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a></code> | Port range of a socket address. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

IPv4 socket address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name GroundstationDataflowEndpointGroupV2#name}

---

##### `PortRange`<sup>Optional</sup> <a name="PortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.property.portRange"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange PortRange { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a>

Port range of a socket address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#port_range GroundstationDataflowEndpointGroupV2#port_range}

---

### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange {
    double Maximum = null,
    double Minimum = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.property.maximum">Maximum</a></code> | <code>double</code> | A maximum value. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.property.minimum">Minimum</a></code> | <code>double</code> | A minimum value. |

---

##### `Maximum`<sup>Optional</sup> <a name="Maximum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.property.maximum"></a>

```csharp
public double Maximum { get; set; }
```

- *Type:* double

A maximum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#maximum GroundstationDataflowEndpointGroupV2#maximum}

---

##### `Minimum`<sup>Optional</sup> <a name="Minimum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.property.minimum"></a>

```csharp
public double Minimum { get; set; }
```

- *Type:* double

A minimum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#minimum GroundstationDataflowEndpointGroupV2#minimum}

---

### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort {
    double Mtu = null,
    GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress SocketAddress = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort.property.mtu">Mtu</a></code> | <code>double</code> | Maximum transmission unit (MTU) size in bytes of a dataflow endpoint. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#socket_address GroundstationDataflowEndpointGroupV2#socket_address}. |

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort.property.mtu"></a>

```csharp
public double Mtu { get; set; }
```

- *Type:* double

Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#mtu GroundstationDataflowEndpointGroupV2#mtu}

---

##### `SocketAddress`<sup>Optional</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort.property.socketAddress"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress SocketAddress { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#socket_address GroundstationDataflowEndpointGroupV2#socket_address}.

---

### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress {
    string Name = null,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress.property.name">Name</a></code> | <code>string</code> | IPv4 socket address. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress.property.port">Port</a></code> | <code>double</code> | Port of a socket address. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

IPv4 socket address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name GroundstationDataflowEndpointGroupV2#name}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Port of a socket address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#port GroundstationDataflowEndpointGroupV2#port}

---

### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint {
    GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails DataflowDetails = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint.property.dataflowDetails">DataflowDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails</a></code> | Dataflow details for uplink. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name GroundstationDataflowEndpointGroupV2#name}. |

---

##### `DataflowDetails`<sup>Optional</sup> <a name="DataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint.property.dataflowDetails"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails DataflowDetails { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails</a>

Dataflow details for uplink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#dataflow_details GroundstationDataflowEndpointGroupV2#dataflow_details}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name GroundstationDataflowEndpointGroupV2#name}.

---

### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails {
    GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails AgentConnectionDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails.property.agentConnectionDetails">AgentConnectionDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a></code> | Connection details for uplink, from ground station to agent, and customer to agent. |

---

##### `AgentConnectionDetails`<sup>Optional</sup> <a name="AgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails.property.agentConnectionDetails"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails AgentConnectionDetails { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a>

Connection details for uplink, from ground station to agent, and customer to agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#agent_connection_details GroundstationDataflowEndpointGroupV2#agent_connection_details}

---

### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails {
    GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress AgentIpAndPortAddress = null,
    GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort IngressAddressAndPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.property.agentIpAndPortAddress">AgentIpAndPortAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a></code> | Socket address of an uplink or downlink agent endpoint with a port range and an optional mtu. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.property.ingressAddressAndPort">IngressAddressAndPort</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort</a></code> | Socket address of an uplink or downlink agent endpoint with an optional mtu. |

---

##### `AgentIpAndPortAddress`<sup>Optional</sup> <a name="AgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.property.agentIpAndPortAddress"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress AgentIpAndPortAddress { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a>

Socket address of an uplink or downlink agent endpoint with a port range and an optional mtu.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#agent_ip_and_port_address GroundstationDataflowEndpointGroupV2#agent_ip_and_port_address}

---

##### `IngressAddressAndPort`<sup>Optional</sup> <a name="IngressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.property.ingressAddressAndPort"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort IngressAddressAndPort { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort</a>

Socket address of an uplink or downlink agent endpoint with an optional mtu.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#ingress_address_and_port GroundstationDataflowEndpointGroupV2#ingress_address_and_port}

---

### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress {
    double Mtu = null,
    GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress SocketAddress = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.property.mtu">Mtu</a></code> | <code>double</code> | Maximum transmission unit (MTU) size in bytes of a dataflow endpoint. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a></code> | A socket address with a port range. |

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.property.mtu"></a>

```csharp
public double Mtu { get; set; }
```

- *Type:* double

Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#mtu GroundstationDataflowEndpointGroupV2#mtu}

---

##### `SocketAddress`<sup>Optional</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.property.socketAddress"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress SocketAddress { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a>

A socket address with a port range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#socket_address GroundstationDataflowEndpointGroupV2#socket_address}

---

### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress {
    string Name = null,
    GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange PortRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.property.name">Name</a></code> | <code>string</code> | IPv4 socket address. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.property.portRange">PortRange</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a></code> | Port range of a socket address. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

IPv4 socket address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name GroundstationDataflowEndpointGroupV2#name}

---

##### `PortRange`<sup>Optional</sup> <a name="PortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.property.portRange"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange PortRange { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a>

Port range of a socket address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#port_range GroundstationDataflowEndpointGroupV2#port_range}

---

### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange {
    double Maximum = null,
    double Minimum = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.property.maximum">Maximum</a></code> | <code>double</code> | A maximum value. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.property.minimum">Minimum</a></code> | <code>double</code> | A minimum value. |

---

##### `Maximum`<sup>Optional</sup> <a name="Maximum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.property.maximum"></a>

```csharp
public double Maximum { get; set; }
```

- *Type:* double

A maximum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#maximum GroundstationDataflowEndpointGroupV2#maximum}

---

##### `Minimum`<sup>Optional</sup> <a name="Minimum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.property.minimum"></a>

```csharp
public double Minimum { get; set; }
```

- *Type:* double

A minimum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#minimum GroundstationDataflowEndpointGroupV2#minimum}

---

### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort {
    double Mtu = null,
    GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress SocketAddress = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort.property.mtu">Mtu</a></code> | <code>double</code> | Maximum transmission unit (MTU) size in bytes of a dataflow endpoint. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#socket_address GroundstationDataflowEndpointGroupV2#socket_address}. |

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort.property.mtu"></a>

```csharp
public double Mtu { get; set; }
```

- *Type:* double

Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#mtu GroundstationDataflowEndpointGroupV2#mtu}

---

##### `SocketAddress`<sup>Optional</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort.property.socketAddress"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress SocketAddress { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#socket_address GroundstationDataflowEndpointGroupV2#socket_address}.

---

### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress {
    string Name = null,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress.property.name">Name</a></code> | <code>string</code> | IPv4 socket address. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress.property.port">Port</a></code> | <code>double</code> | Port of a socket address. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

IPv4 socket address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name GroundstationDataflowEndpointGroupV2#name}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Port of a socket address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#port GroundstationDataflowEndpointGroupV2#port}

---

### GroundstationDataflowEndpointGroupV2Tags <a name="GroundstationDataflowEndpointGroupV2Tags" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2Tags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#key GroundstationDataflowEndpointGroupV2#key}. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#value GroundstationDataflowEndpointGroupV2#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#key GroundstationDataflowEndpointGroupV2#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#value GroundstationDataflowEndpointGroupV2#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtu">Mtu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtu"></a>

```csharp
public double Mtu { get; }
```

- *Type:* double

---

##### `SocketAddress`<sup>Required</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddress"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference SocketAddress { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.internalValue"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRange">PortRange</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRange"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference PortRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.internalValue"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximum">Maximum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimum">Minimum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximum"></a>

```csharp
public double Maximum { get; }
```

- *Type:* double

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimum"></a>

```csharp
public double Minimum { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.internalValue"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.mtu">Mtu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.mtu"></a>

```csharp
public double Mtu { get; }
```

- *Type:* double

---

##### `SocketAddress`<sup>Required</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.socketAddress"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference SocketAddress { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.internalValue"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.internalValue"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddress">AgentIpAndPortAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.egressAddressAndPort">EgressAddressAndPort</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentIpAndPortAddress`<sup>Required</sup> <a name="AgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddress"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference AgentIpAndPortAddress { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference</a>

---

##### `EgressAddressAndPort`<sup>Required</sup> <a name="EgressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.egressAddressAndPort"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference EgressAddressAndPort { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.internalValue"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetails">AgentConnectionDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentConnectionDetails`<sup>Required</sup> <a name="AgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetails"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference AgentConnectionDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.internalValue"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.agentStatus">AgentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.auditResults">AuditResults</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetails">DataflowDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentStatus`<sup>Required</sup> <a name="AgentStatus" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.agentStatus"></a>

```csharp
public string AgentStatus { get; }
```

- *Type:* string

---

##### `AuditResults`<sup>Required</sup> <a name="AuditResults" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.auditResults"></a>

```csharp
public string AuditResults { get; }
```

- *Type:* string

---

##### `DataflowDetails`<sup>Required</sup> <a name="DataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetails"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference DataflowDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.internalValue"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsList <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsList" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.get"></a>

```csharp
private GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.downlinkAwsGroundStationAgentEndpoint">DownlinkAwsGroundStationAgentEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.uplinkAwsGroundStationAgentEndpoint">UplinkAwsGroundStationAgentEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetails">GroundstationDataflowEndpointGroupV2EndpointDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DownlinkAwsGroundStationAgentEndpoint`<sup>Required</sup> <a name="DownlinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.downlinkAwsGroundStationAgentEndpoint"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference DownlinkAwsGroundStationAgentEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference</a>

---

##### `UplinkAwsGroundStationAgentEndpoint`<sup>Required</sup> <a name="UplinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.uplinkAwsGroundStationAgentEndpoint"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference UplinkAwsGroundStationAgentEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.internalValue"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetails">GroundstationDataflowEndpointGroupV2EndpointDetails</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtu">Mtu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtu"></a>

```csharp
public double Mtu { get; }
```

- *Type:* double

---

##### `SocketAddress`<sup>Required</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddress"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference SocketAddress { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.internalValue"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRange">PortRange</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRange"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference PortRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.internalValue"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximum">Maximum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimum">Minimum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximum"></a>

```csharp
public double Maximum { get; }
```

- *Type:* double

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimum"></a>

```csharp
public double Minimum { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.internalValue"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.mtu">Mtu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.mtu"></a>

```csharp
public double Mtu { get; }
```

- *Type:* double

---

##### `SocketAddress`<sup>Required</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.socketAddress"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference SocketAddress { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.internalValue"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.internalValue"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddress">AgentIpAndPortAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.ingressAddressAndPort">IngressAddressAndPort</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentIpAndPortAddress`<sup>Required</sup> <a name="AgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddress"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference AgentIpAndPortAddress { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference</a>

---

##### `IngressAddressAndPort`<sup>Required</sup> <a name="IngressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.ingressAddressAndPort"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference IngressAddressAndPort { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.internalValue"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetails">AgentConnectionDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentConnectionDetails`<sup>Required</sup> <a name="AgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetails"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference AgentConnectionDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.internalValue"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.agentStatus">AgentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.auditResults">AuditResults</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetails">DataflowDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentStatus`<sup>Required</sup> <a name="AgentStatus" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.agentStatus"></a>

```csharp
public string AgentStatus { get; }
```

- *Type:* string

---

##### `AuditResults`<sup>Required</sup> <a name="AuditResults" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.auditResults"></a>

```csharp
public string AuditResults { get; }
```

- *Type:* string

---

##### `DataflowDetails`<sup>Required</sup> <a name="DataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetails"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference DataflowDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.internalValue"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.putSocketAddress">PutSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resetSocketAddress">ResetSocketAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSocketAddress` <a name="PutSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.putSocketAddress"></a>

```csharp
private void PutSocketAddress(GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.putSocketAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a>

---

##### `ResetMtu` <a name="ResetMtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resetMtu"></a>

```csharp
private void ResetMtu()
```

##### `ResetSocketAddress` <a name="ResetSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resetSocketAddress"></a>

```csharp
private void ResetSocketAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtuInput">MtuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddressInput">SocketAddressInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtu">Mtu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SocketAddress`<sup>Required</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddress"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference SocketAddress { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference</a>

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtuInput"></a>

```csharp
public double MtuInput { get; }
```

- *Type:* double

---

##### `SocketAddressInput`<sup>Optional</sup> <a name="SocketAddressInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddressInput"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress SocketAddressInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a>

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtu"></a>

```csharp
public double Mtu { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.putPortRange">PutPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resetPortRange">ResetPortRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPortRange` <a name="PutPortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.putPortRange"></a>

```csharp
private void PutPortRange(GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.putPortRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a>

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPortRange` <a name="ResetPortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resetPortRange"></a>

```csharp
private void ResetPortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRange">PortRange</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRangeInput">PortRangeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRange"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference PortRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PortRangeInput`<sup>Optional</sup> <a name="PortRangeInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRangeInput"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange PortRangeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resetMaximum">ResetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resetMinimum">ResetMinimum</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximum` <a name="ResetMaximum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resetMaximum"></a>

```csharp
private void ResetMaximum()
```

##### `ResetMinimum` <a name="ResetMinimum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resetMinimum"></a>

```csharp
private void ResetMinimum()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximumInput">MaximumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimumInput">MinimumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximum">Maximum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimum">Minimum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaximumInput`<sup>Optional</sup> <a name="MaximumInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximumInput"></a>

```csharp
public double MaximumInput { get; }
```

- *Type:* double

---

##### `MinimumInput`<sup>Optional</sup> <a name="MinimumInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimumInput"></a>

```csharp
public double MinimumInput { get; }
```

- *Type:* double

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximum"></a>

```csharp
public double Maximum { get; }
```

- *Type:* double

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimum"></a>

```csharp
public double Minimum { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.putSocketAddress">PutSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resetSocketAddress">ResetSocketAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSocketAddress` <a name="PutSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.putSocketAddress"></a>

```csharp
private void PutSocketAddress(GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.putSocketAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress</a>

---

##### `ResetMtu` <a name="ResetMtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resetMtu"></a>

```csharp
private void ResetMtu()
```

##### `ResetSocketAddress` <a name="ResetSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resetSocketAddress"></a>

```csharp
private void ResetSocketAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.mtuInput">MtuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.socketAddressInput">SocketAddressInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.mtu">Mtu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SocketAddress`<sup>Required</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.socketAddress"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference SocketAddress { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference</a>

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.mtuInput"></a>

```csharp
public double MtuInput { get; }
```

- *Type:* double

---

##### `SocketAddressInput`<sup>Optional</sup> <a name="SocketAddressInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.socketAddressInput"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress SocketAddressInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress</a>

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.mtu"></a>

```csharp
public double Mtu { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putAgentIpAndPortAddress">PutAgentIpAndPortAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putEgressAddressAndPort">PutEgressAddressAndPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resetAgentIpAndPortAddress">ResetAgentIpAndPortAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resetEgressAddressAndPort">ResetEgressAddressAndPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgentIpAndPortAddress` <a name="PutAgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putAgentIpAndPortAddress"></a>

```csharp
private void PutAgentIpAndPortAddress(GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putAgentIpAndPortAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a>

---

##### `PutEgressAddressAndPort` <a name="PutEgressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putEgressAddressAndPort"></a>

```csharp
private void PutEgressAddressAndPort(GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putEgressAddressAndPort.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort</a>

---

##### `ResetAgentIpAndPortAddress` <a name="ResetAgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resetAgentIpAndPortAddress"></a>

```csharp
private void ResetAgentIpAndPortAddress()
```

##### `ResetEgressAddressAndPort` <a name="ResetEgressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resetEgressAddressAndPort"></a>

```csharp
private void ResetEgressAddressAndPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddress">AgentIpAndPortAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.egressAddressAndPort">EgressAddressAndPort</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddressInput">AgentIpAndPortAddressInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.egressAddressAndPortInput">EgressAddressAndPortInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentIpAndPortAddress`<sup>Required</sup> <a name="AgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddress"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference AgentIpAndPortAddress { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference</a>

---

##### `EgressAddressAndPort`<sup>Required</sup> <a name="EgressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.egressAddressAndPort"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference EgressAddressAndPort { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference</a>

---

##### `AgentIpAndPortAddressInput`<sup>Optional</sup> <a name="AgentIpAndPortAddressInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddressInput"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress AgentIpAndPortAddressInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a>

---

##### `EgressAddressAndPortInput`<sup>Optional</sup> <a name="EgressAddressAndPortInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.egressAddressAndPortInput"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort EgressAddressAndPortInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.putAgentConnectionDetails">PutAgentConnectionDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resetAgentConnectionDetails">ResetAgentConnectionDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgentConnectionDetails` <a name="PutAgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.putAgentConnectionDetails"></a>

```csharp
private void PutAgentConnectionDetails(GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.putAgentConnectionDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a>

---

##### `ResetAgentConnectionDetails` <a name="ResetAgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resetAgentConnectionDetails"></a>

```csharp
private void ResetAgentConnectionDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetails">AgentConnectionDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetailsInput">AgentConnectionDetailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentConnectionDetails`<sup>Required</sup> <a name="AgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetails"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference AgentConnectionDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference</a>

---

##### `AgentConnectionDetailsInput`<sup>Optional</sup> <a name="AgentConnectionDetailsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetailsInput"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails AgentConnectionDetailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.putDataflowDetails">PutDataflowDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.resetDataflowDetails">ResetDataflowDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataflowDetails` <a name="PutDataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.putDataflowDetails"></a>

```csharp
private void PutDataflowDetails(GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.putDataflowDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails</a>

---

##### `ResetDataflowDetails` <a name="ResetDataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.resetDataflowDetails"></a>

```csharp
private void ResetDataflowDetails()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetails">DataflowDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetailsInput">DataflowDetailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataflowDetails`<sup>Required</sup> <a name="DataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetails"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference DataflowDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference</a>

---

##### `DataflowDetailsInput`<sup>Optional</sup> <a name="DataflowDetailsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetailsInput"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails DataflowDetailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsList <a name="GroundstationDataflowEndpointGroupV2EndpointsList" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.get"></a>

```csharp
private GroundstationDataflowEndpointGroupV2EndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints">GroundstationDataflowEndpointGroupV2Endpoints</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.property.internalValue"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2Endpoints[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints">GroundstationDataflowEndpointGroupV2Endpoints</a>[]

---


### GroundstationDataflowEndpointGroupV2EndpointsOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.putDownlinkAwsGroundStationAgentEndpoint">PutDownlinkAwsGroundStationAgentEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.putUplinkAwsGroundStationAgentEndpoint">PutUplinkAwsGroundStationAgentEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.resetDownlinkAwsGroundStationAgentEndpoint">ResetDownlinkAwsGroundStationAgentEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.resetUplinkAwsGroundStationAgentEndpoint">ResetUplinkAwsGroundStationAgentEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDownlinkAwsGroundStationAgentEndpoint` <a name="PutDownlinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.putDownlinkAwsGroundStationAgentEndpoint"></a>

```csharp
private void PutDownlinkAwsGroundStationAgentEndpoint(GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.putDownlinkAwsGroundStationAgentEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint</a>

---

##### `PutUplinkAwsGroundStationAgentEndpoint` <a name="PutUplinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.putUplinkAwsGroundStationAgentEndpoint"></a>

```csharp
private void PutUplinkAwsGroundStationAgentEndpoint(GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.putUplinkAwsGroundStationAgentEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint</a>

---

##### `ResetDownlinkAwsGroundStationAgentEndpoint` <a name="ResetDownlinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.resetDownlinkAwsGroundStationAgentEndpoint"></a>

```csharp
private void ResetDownlinkAwsGroundStationAgentEndpoint()
```

##### `ResetUplinkAwsGroundStationAgentEndpoint` <a name="ResetUplinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.resetUplinkAwsGroundStationAgentEndpoint"></a>

```csharp
private void ResetUplinkAwsGroundStationAgentEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.downlinkAwsGroundStationAgentEndpoint">DownlinkAwsGroundStationAgentEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.uplinkAwsGroundStationAgentEndpoint">UplinkAwsGroundStationAgentEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.downlinkAwsGroundStationAgentEndpointInput">DownlinkAwsGroundStationAgentEndpointInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.uplinkAwsGroundStationAgentEndpointInput">UplinkAwsGroundStationAgentEndpointInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints">GroundstationDataflowEndpointGroupV2Endpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DownlinkAwsGroundStationAgentEndpoint`<sup>Required</sup> <a name="DownlinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.downlinkAwsGroundStationAgentEndpoint"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference DownlinkAwsGroundStationAgentEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference</a>

---

##### `UplinkAwsGroundStationAgentEndpoint`<sup>Required</sup> <a name="UplinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.uplinkAwsGroundStationAgentEndpoint"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference UplinkAwsGroundStationAgentEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference</a>

---

##### `DownlinkAwsGroundStationAgentEndpointInput`<sup>Optional</sup> <a name="DownlinkAwsGroundStationAgentEndpointInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.downlinkAwsGroundStationAgentEndpointInput"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint DownlinkAwsGroundStationAgentEndpointInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint</a>

---

##### `UplinkAwsGroundStationAgentEndpointInput`<sup>Optional</sup> <a name="UplinkAwsGroundStationAgentEndpointInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.uplinkAwsGroundStationAgentEndpointInput"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint UplinkAwsGroundStationAgentEndpointInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2Endpoints InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints">GroundstationDataflowEndpointGroupV2Endpoints</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.putSocketAddress">PutSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resetSocketAddress">ResetSocketAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSocketAddress` <a name="PutSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.putSocketAddress"></a>

```csharp
private void PutSocketAddress(GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.putSocketAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a>

---

##### `ResetMtu` <a name="ResetMtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resetMtu"></a>

```csharp
private void ResetMtu()
```

##### `ResetSocketAddress` <a name="ResetSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resetSocketAddress"></a>

```csharp
private void ResetSocketAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtuInput">MtuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddressInput">SocketAddressInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtu">Mtu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SocketAddress`<sup>Required</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddress"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference SocketAddress { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference</a>

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtuInput"></a>

```csharp
public double MtuInput { get; }
```

- *Type:* double

---

##### `SocketAddressInput`<sup>Optional</sup> <a name="SocketAddressInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddressInput"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress SocketAddressInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a>

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtu"></a>

```csharp
public double Mtu { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.putPortRange">PutPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resetPortRange">ResetPortRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPortRange` <a name="PutPortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.putPortRange"></a>

```csharp
private void PutPortRange(GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.putPortRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a>

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPortRange` <a name="ResetPortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resetPortRange"></a>

```csharp
private void ResetPortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRange">PortRange</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRangeInput">PortRangeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRange"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference PortRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PortRangeInput`<sup>Optional</sup> <a name="PortRangeInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRangeInput"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange PortRangeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resetMaximum">ResetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resetMinimum">ResetMinimum</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximum` <a name="ResetMaximum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resetMaximum"></a>

```csharp
private void ResetMaximum()
```

##### `ResetMinimum` <a name="ResetMinimum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resetMinimum"></a>

```csharp
private void ResetMinimum()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximumInput">MaximumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimumInput">MinimumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximum">Maximum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimum">Minimum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaximumInput`<sup>Optional</sup> <a name="MaximumInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximumInput"></a>

```csharp
public double MaximumInput { get; }
```

- *Type:* double

---

##### `MinimumInput`<sup>Optional</sup> <a name="MinimumInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimumInput"></a>

```csharp
public double MinimumInput { get; }
```

- *Type:* double

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximum"></a>

```csharp
public double Maximum { get; }
```

- *Type:* double

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimum"></a>

```csharp
public double Minimum { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.putSocketAddress">PutSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resetSocketAddress">ResetSocketAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSocketAddress` <a name="PutSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.putSocketAddress"></a>

```csharp
private void PutSocketAddress(GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.putSocketAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress</a>

---

##### `ResetMtu` <a name="ResetMtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resetMtu"></a>

```csharp
private void ResetMtu()
```

##### `ResetSocketAddress` <a name="ResetSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resetSocketAddress"></a>

```csharp
private void ResetSocketAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.mtuInput">MtuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.socketAddressInput">SocketAddressInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.mtu">Mtu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SocketAddress`<sup>Required</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.socketAddress"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference SocketAddress { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference</a>

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.mtuInput"></a>

```csharp
public double MtuInput { get; }
```

- *Type:* double

---

##### `SocketAddressInput`<sup>Optional</sup> <a name="SocketAddressInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.socketAddressInput"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress SocketAddressInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress</a>

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.mtu"></a>

```csharp
public double Mtu { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putAgentIpAndPortAddress">PutAgentIpAndPortAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putIngressAddressAndPort">PutIngressAddressAndPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resetAgentIpAndPortAddress">ResetAgentIpAndPortAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resetIngressAddressAndPort">ResetIngressAddressAndPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgentIpAndPortAddress` <a name="PutAgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putAgentIpAndPortAddress"></a>

```csharp
private void PutAgentIpAndPortAddress(GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putAgentIpAndPortAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a>

---

##### `PutIngressAddressAndPort` <a name="PutIngressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putIngressAddressAndPort"></a>

```csharp
private void PutIngressAddressAndPort(GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putIngressAddressAndPort.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort</a>

---

##### `ResetAgentIpAndPortAddress` <a name="ResetAgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resetAgentIpAndPortAddress"></a>

```csharp
private void ResetAgentIpAndPortAddress()
```

##### `ResetIngressAddressAndPort` <a name="ResetIngressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resetIngressAddressAndPort"></a>

```csharp
private void ResetIngressAddressAndPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddress">AgentIpAndPortAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.ingressAddressAndPort">IngressAddressAndPort</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddressInput">AgentIpAndPortAddressInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.ingressAddressAndPortInput">IngressAddressAndPortInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentIpAndPortAddress`<sup>Required</sup> <a name="AgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddress"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference AgentIpAndPortAddress { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference</a>

---

##### `IngressAddressAndPort`<sup>Required</sup> <a name="IngressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.ingressAddressAndPort"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference IngressAddressAndPort { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference</a>

---

##### `AgentIpAndPortAddressInput`<sup>Optional</sup> <a name="AgentIpAndPortAddressInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddressInput"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress AgentIpAndPortAddressInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a>

---

##### `IngressAddressAndPortInput`<sup>Optional</sup> <a name="IngressAddressAndPortInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.ingressAddressAndPortInput"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort IngressAddressAndPortInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.putAgentConnectionDetails">PutAgentConnectionDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resetAgentConnectionDetails">ResetAgentConnectionDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgentConnectionDetails` <a name="PutAgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.putAgentConnectionDetails"></a>

```csharp
private void PutAgentConnectionDetails(GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.putAgentConnectionDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a>

---

##### `ResetAgentConnectionDetails` <a name="ResetAgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resetAgentConnectionDetails"></a>

```csharp
private void ResetAgentConnectionDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetails">AgentConnectionDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetailsInput">AgentConnectionDetailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentConnectionDetails`<sup>Required</sup> <a name="AgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetails"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference AgentConnectionDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference</a>

---

##### `AgentConnectionDetailsInput`<sup>Optional</sup> <a name="AgentConnectionDetailsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetailsInput"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails AgentConnectionDetailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.putDataflowDetails">PutDataflowDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.resetDataflowDetails">ResetDataflowDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataflowDetails` <a name="PutDataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.putDataflowDetails"></a>

```csharp
private void PutDataflowDetails(GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.putDataflowDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails</a>

---

##### `ResetDataflowDetails` <a name="ResetDataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.resetDataflowDetails"></a>

```csharp
private void ResetDataflowDetails()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetails">DataflowDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetailsInput">DataflowDetailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataflowDetails`<sup>Required</sup> <a name="DataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetails"></a>

```csharp
public GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference DataflowDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference</a>

---

##### `DataflowDetailsInput`<sup>Optional</sup> <a name="DataflowDetailsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetailsInput"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails DataflowDetailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint</a>

---


### GroundstationDataflowEndpointGroupV2TagsList <a name="GroundstationDataflowEndpointGroupV2TagsList" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2TagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.get"></a>

```csharp
private GroundstationDataflowEndpointGroupV2TagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags">GroundstationDataflowEndpointGroupV2Tags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.property.internalValue"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2Tags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags">GroundstationDataflowEndpointGroupV2Tags</a>[]

---


### GroundstationDataflowEndpointGroupV2TagsOutputReference <a name="GroundstationDataflowEndpointGroupV2TagsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationDataflowEndpointGroupV2TagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags">GroundstationDataflowEndpointGroupV2Tags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroundstationDataflowEndpointGroupV2Tags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags">GroundstationDataflowEndpointGroupV2Tags</a>

---



